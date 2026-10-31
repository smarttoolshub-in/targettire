// TargetTire website-data assistant. Uses loaded TargetTire page data & DOM fallback.
function ttAIText(value) {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    try { return JSON.stringify(value); } catch (e) { return String(value); }
}

function ttAINormalize(value) {
    return ttAIText(value)
        .toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\p{L}\p{N}\s]/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function ttAIEscapeHTML(value) {
    return ttAIText(value).replace(/[&<>"']/g, function(ch) {
        return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[ch];
    });
}

function ttAIDisplayText(value) {
    return ttAIEscapeHTML(value).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
}

function ttAIFlatten(value, prefix, out, depth) {
    if (depth > 5 || value === null || value === undefined) return;
    if (typeof value !== 'object') {
        const text = ttAIText(value).trim();
        if (text) out.push({ path: prefix || 'Data', text: text });
        return;
    }
    if (Array.isArray(value)) {
        value.slice(0, 150).forEach((item, i) => ttAIFlatten(item, prefix + (prefix ? ' › ' : '') + (i + 1), out, depth + 1));
        return;
    }
    Object.keys(value).slice(0, 300).forEach(key => {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[_-]+/g, ' ').trim();
        const next = prefix ? prefix + ' › ' + label : label;
        const item = value[key];
        if (typeof item === 'object' && item !== null) ttAIFlatten(item, next, out, depth + 1);
        else {
            const text = ttAIText(item).trim();
            if (text) out.push({ path: next, text: text });
        }
    });
}

function ttAIBuildIndex() {
    const docs = [];
    const add = (title, value, action) => {
        const parts = [];
        ttAIFlatten(value, '', parts, 0);
        const haystack = ttAINormalize(title + ' ' + parts.map(p => p.path + ' ' + p.text).join(' '));
        docs.push({ title: title, text: parts.map(p => p.path + ': ' + p.text).join('\n'), haystack: haystack, action: action });
    };

    add('TargetTire वेबसाइट', {
        'Sections': ['Practice Hub', 'Mock Vault', 'PYQ Hub', 'My Exams', 'Custom Chapters', 'Current Affairs']
    }, 'dashboard');

    // Safe checks for global variables
    const groups = (typeof window !== 'undefined' && window.examGroupsData) ? window.examGroupsData : {};
    if (groups && typeof groups === 'object') {
        Object.keys(groups).forEach(group => {
            const groupData = groups[group];
            const exams = groupData && (groupData.subExams || groupData.exams || groupData.items);
            if (Array.isArray(exams)) exams.forEach(ex => {
                const name = typeof ex === 'string' ? ex : (ex.name || ex.title || ex.examName || ex.id);
                add(name || group, ex, 'exam:' + name);
            });
            else if (groupData && typeof groupData === 'object') {
                Object.keys(groupData).forEach(k => {
                    const ex = groupData[k];
                    if (ex && typeof ex === 'object') add(k, ex, 'exam:' + k);
                });
            }
        });
    }

    const addObjectCollection = (obj, prefix) => {
        if (!obj || typeof obj !== 'object') return;
        Object.keys(obj).forEach(key => add(key, obj[key], prefix + ':' + key));
    };

    if (typeof window !== 'undefined') {
        addObjectCollection(window.examContent, 'exam');
        addObjectCollection(window.examSyllabusData, 'syllabus');
        addObjectCollection(window.examNotificationData, 'notification');

        if (window.curriculumData) add('Study Curriculum', window.curriculumData, 'practice');
        if (window.chapterQuestionsDB) add('Chapter Questions', window.chapterQuestionsDB, 'practice');
        if (window.currentAffairsData) add('Current Affairs', window.currentAffairsData, 'current-affairs');
    }

    // Always index visible page text from DOM so user never faces empty load issue
    try {
        const visible = Array.from(document.querySelectorAll('body *'))
            .filter(el => el.children.length === 0 && el.offsetParent !== null)
            .map(el => (el.innerText || '').trim())
            .filter(Boolean)
            .slice(0, 3000)
            .join('\n');
        if (visible) {
            docs.push({ 
                title: 'वर्तमान वेबसाइट सामग्री (Live Page Content)', 
                text: visible, 
                haystack: ttAINormalize(visible), 
                action: null 
            });
        }
    } catch (e) {}

    return docs;
}

function ttAITokens(text) {
    return ttAINormalize(text).split(/\s+/).filter(w => w.length >= 2);
}

function ttAISearch(query, docs) {
    const q = ttAINormalize(query);
    const tokens = ttAITokens(q);
    if (!tokens.length) return [];
    
    const aliases = {
        'ssc': ['staff selection commission'],
        'rrb': ['railway', 'railways', 'ntpc', 'group d'],
        'cgl': ['ssc cgl'],
        'ntpc': ['railway', 'rrb ntpc'],
        'ibps': ['banking'],
        'sbi': ['banking'],
        'upsc': ['union public service commission'],
        'bihar': ['state government', 'bihar government', 'rtps']
    };
    
    const expanded = tokens.slice();
    tokens.forEach(t => (aliases[t] || []).forEach(a => expanded.push(...ttAITokens(a))));
    
    const scored = docs.map(doc => {
        let score = 0;
        const hay = doc.haystack;
        expanded.forEach(token => {
            if (hay.includes(token)) score += token.length >= 5 ? 4 : 2;
        });
        if (hay.includes(q)) score += 12;
        const firstWords = ttAITokens(doc.title);
        if (firstWords.some(w => q.includes(w) && w.length >= 4)) score += 5;
        return { doc, score };
    }).filter(x => x.score > 0).sort((a,b) => b.score - a.score);
    
    return scored.slice(0, 5);
}

window.targetTireAnswerQuestion = function(query) {
    const docs = ttAIBuildIndex();
    const results = ttAISearch(query, docs);
    if (!results.length) {
        return 'मुझे वेबसाइट के उपलब्ध डेटा में इस सवाल का प्रासंगिक उत्तर मिला। कृपया अपनी खोज या परीक्षा का नाम थोड़ा और स्पष्ट लिखें।';
    }
    const best = results[0];
    const type = ttAIQuestionType(query);
    const excerpts = ttAIRelevantExcerpt(best.doc, query, type);
    const lines = excerpts.length ? excerpts : (best.doc.text || '').split(/\n+/).filter(Boolean).slice(0, 5);
    let reply = '📌 ' + best.doc.title + '\n' + lines.slice(0, 6).join('\n');
    if (results.length > 1 && results[1].score >= Math.max(3, best.score * 0.4)) {
        reply += '\n\nसंबंधित सेक्शन: ' + results.slice(1, 3).map(x => x.doc.title).join(' • ');
    }
    return reply;
};

function ttAIQuestionType(q) {
    const n = ttAINormalize(q);
    if (/^(hi|hello|hey|namaste|नमस्ते)\b/.test(n)) return 'greeting';
    if (/^(who are you|what can you do|aap kya|tum kya)/.test(n)) return 'help';
    if (/(syllabus|pathyakram|पाठ्यक्रम)/.test(n)) return 'syllabus';
    if (/(notification|notice|vigyapti|अधिसूचना)/.test(n)) return 'notification';
    if (/(eligibility|योग्यता|age limit|उम्र|आयु)/.test(n)) return 'eligibility';
    if (/(exam pattern|pattern|paper|question|questions|प्रश्नों|पेपर)/.test(n)) return 'pattern';
    if (/(vacancy|vacancies|रिक्ति|पद|posts)/.test(n)) return 'vacancy';
    if (/(date|dates|तारीख|last date|exam date|आवेदन)/.test(n)) return 'date';
    return 'general';
}

function ttAIRelevantExcerpt(doc, query, type) {
    const lines = (doc.text || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
    const qTokens = ttAITokens(query);
    const ranked = lines.map(line => {
        let score = 0;
        const n = ttAINormalize(line);
        qTokens.getInstance && qTokens.forEach(t => { if (n.includes(t)) score += 3; });
        qTokens.forEach(t => { if (n.includes(t)) score += 3; });
        if (type === 'syllabus' && /syllabus|subject|topic|पाठ्यक्रम|विषय/.test(n)) score += 3;
        if (type === 'date' && /date|तारीख|exam|application|आवेदन/.test(n)) score += 3;
        if (type === 'vacancy' && /vacancy|post|पद|रिक्ति/.test(n)) score += 3;
        return { line, score };
    }).sort((a,b) => b.score-a.score);
    const filtered = ranked.filter(x => x.score > 0);
    if (!filtered.length) return lines.slice(0, 4);
    return filtered.slice(0, 5).map(x => x.line);
}

function ttAINavigate(action) {
    try {
        if (!action) return;
        if (action === 'dashboard' && typeof switchTab === 'function') switchTab('home');
        else if (action === 'practice' && typeof switchTab === 'function') switchTab('practice');
        else if (action === 'current-affairs' && typeof switchTab === 'function') switchTab('current-affairs');
        else if (action.startsWith('exam:')) {
            const name = action.slice(5);
            if (typeof selectExamCategory === 'function') selectExamCategory(name);
        }
    } catch (e) {}
}

function sendAIQuery() {
    const input = document.getElementById('ai-user-input');
    const msgBox = document.getElementById('ai-chat-messages');
    if (!input || !msgBox) return;
    const query = input.value.trim();
    if (!query) return;

    msgBox.innerHTML += `<div style="background:#6366f1;color:white;padding:8px 12px;border-radius:10px;align-self:flex-end;max-width:85%;line-height:1.4;white-space:pre-line;">${ttAIEscapeHTML(query)}</div>`;
    input.value = '';
    msgBox.scrollTop = msgBox.scrollHeight;

    const loadingId = 'loading-' + Date.now();
    msgBox.innerHTML += `<div id="${loadingId}" style="background:#1e293b;color:#94a3b8;padding:8px 12px;border-radius:10px;max-width:85%;">AI डेटा खोज रहा है...</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;

    setTimeout(() => {
        const loading = document.getElementById(loadingId);
        if (loading) loading.remove();

        const docs = ttAIBuildIndex();
        const results = ttAISearch(query, docs);
        const type = ttAIQuestionType(query);
        let reply = '';

        if (type === 'greeting') {
            reply = 'नमस्ते! 👋 मैं TargetTire AI हूँ। आप इस वेबसाइट पर उपलब्ध किसी भी परीक्षा, सिलेबस, करेंट अफेयर्स या कंटेंट के बारे में पूछ सकते हैं।';
        } else if (type === 'help') {
            reply = 'मैं वर्तमान पेज और वेबसाइट के डेटा को तुरंत खोजकर सटीक जानकारी देता हूँ। जैसे: “Current affairs बताओ”, “Practice Hub में क्या है?” आदि।';
        } else if (!results.length) {
            reply = 'मुझे इस कीवर्ड से मेल खाता हुआ डेटा नहीं मिला। कृपया अपनी खोज का विषय या परीक्षा का नाम थोड़ा साफ लिखें।';
        } else {
            const best = results[0];
            const excerpts = ttAIRelevantExcerpt(best.doc, query, type);
            const label = best.doc.title || 'वेबसाइट डेटा';
            if (excerpts.length) {
                reply = `📌 **${label}**\n` + excerpts.slice(0, 5).join('\n');
            } else {
                reply = `📌 **${label}**\n${(best.doc.text || '').slice(0, 900)}`;
            }

            if (results.length > 1 && results[1].score >= Math.max(3, best.score * 0.4)) {
                reply += `\n\n🔍 **संबंधित:** ${results.slice(1, 3).map(x => x.doc.title).join(' • ')}`;
            }
        }

        const bot = document.createElement('div');
        bot.style.cssText = 'background:#1e293b;color:#cbd5e1;padding:8px 12px;border-radius:10px;max-width:90%;line-height:1.5;white-space:normal;';
        bot.innerHTML = ttAIDisplayText(reply);
        msgBox.appendChild(bot);

        const nav = document.createElement('button');
        nav.textContent = '📁 संबंधित पेज खोलें';
        nav.style.cssText = 'align-self:flex-start;background:#334155;color:#e2e8f0;border:1px solid #475569;padding:6px 9px;border-radius:8px;cursor:pointer;font-size:11px;';
        nav.onclick = function() { ttAINavigate(results[0] && results[0].doc.action); };
        if (results.length && results[0].doc.action) msgBox.appendChild(nav);

        msgBox.scrollTop = msgBox.scrollHeight;
    }, 80);
}
