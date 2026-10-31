// TargetTire website-data assistant. Uses only loaded TargetTire page data.
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
        value.slice(0, 150).forEach((item, i) => ttAIFlatten(item, prefix + (prefix ? ' \u203a ' : '') + (i + 1), out, depth + 1));
        return;
    }
    Object.keys(value).slice(0, 300).forEach(key => {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[_-]+/g, ' ').trim();
        const next = prefix ? prefix + ' \u203a ' + label : label;
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

    add('TargetTire \u0935\u0947\u092c\u0938\u093e\u0907\u091f', {
        'Sections': ['Practice Hub', 'Mock Vault', 'PYQ Hub', 'My Exams', 'Custom Chapters', 'Current Affairs']
    }, 'dashboard');

    const groups = window.examGroupsData || {};
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

    const addObjectCollection = (obj, prefix) => {
        if (!obj || typeof obj !== 'object') return;
        Object.keys(obj).forEach(key => add(key, obj[key], prefix + ':' + key));
    };
    addObjectCollection(window.examContent, 'exam');
    addObjectCollection(window.examSyllabusData, 'syllabus');
    addObjectCollection(window.examNotificationData, 'notification');

    if (window.curriculumData) add('Study Curriculum', window.curriculumData, 'practice');
    if (window.chapterQuestionsDB) add('Chapter Questions', window.chapterQuestionsDB, 'practice');
    if (window.currentAffairsData) add('Current Affairs', window.currentAffairsData, 'current-affairs');

    // Also index visible page text, useful for information already rendered by Main HTML.
    try {
        const visible = Array.from(document.querySelectorAll('body *'))
            .filter(el => el.children.length === 0 && el.offsetParent !== null)
            .map(el => (el.innerText || '').trim())
            .filter(Boolean)
            .slice(0, 2500)
            .join('\n');
        if (visible) docs.push({ title: '\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0938\u093e\u092e\u0917\u094d\u0930\u0940', text: visible, haystack: ttAINormalize(visible), action: null });
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
        'rrb': ['railway', 'railways'],
        'cgl': ['ssc cgl'],
        'ntpc': ['railway', 'rrb ntpc'],
        'ibps': ['banking'],
        'sbi': ['banking'],
        'upsc': ['union public service commission'],
        'bihar': ['state government', 'bihar government']
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


// Public entry point used by the main TargetTire AI window.
// Answers only from data already loaded on this page; no API key or external request.
window.targetTireAnswerQuestion = function(query) {
    const docs = ttAIBuildIndex();
    const results = ttAISearch(query, docs);
    if (!results.length) {
        return 'मुझे वेबसाइट के उपलब्ध डेटा में इस सवाल का स्पष्ट उत्तर नहीं मिला। कृपया परीक्षा/विषय का नाम जोड़कर दोबारा पूछें। मैं अनुमान से तारीख, पात्रता या वैकेंसी नहीं बताऊँगा।';
    }
    const best = results[0];
    const type = ttAIQuestionType(query);
    const excerpts = ttAIRelevantExcerpt(best.doc, query, type);
    const lines = excerpts.length ? excerpts : (best.doc.text || '').split(/\n+/).filter(Boolean).slice(0, 5);
    let reply = '📌 ' + best.doc.title + '\n' + lines.slice(0, 6).join('\n');
    if (results.length > 1 && results[1].score >= Math.max(5, best.score * 0.55)) {
        reply += '\n\nसंबंधित सेक्शन: ' + results.slice(1, 3).map(x => x.doc.title).join(' • ');
    }
    reply += '\n\nनोट: यह जवाब TargetTire वेबसाइट में अभी उपलब्ध डेटा पर आधारित है।';
    return reply;
};

function ttAIQuestionType(q) {
    const n = ttAINormalize(q);
    if (/^(hi|hello|hey|namaste|\u0928\u092e\u0938\u094d\u0924\u0947)\b/.test(n)) return 'greeting';
    if (/^(who are you|what can you do|aap kya|tum kya)/.test(n)) return 'help';
    if (/(syllabus|pathyakram|\u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e|syllabus)/.test(n)) return 'syllabus';
    if (/(notification|notice|vigyapti|\u0905\u0927\u093f\u0938\u0942\u091a\u0928\u093e|notification)/.test(n)) return 'notification';
    if (/(eligibility|\u092f\u094b\u0917\u094d\u092f\u0924\u093e|age limit|\u0909\u092e\u094d\u0930|\u0906\u092f\u0941)/.test(n)) return 'eligibility';
    if (/(exam pattern|pattern|paper|question|questions|\u092a\u094d\u0930\u0936\u094d\u0928|\u092a\u0947\u092a\u0930)/.test(n)) return 'pattern';
    if (/(vacancy|vacancies|\u0930\u093f\u0915\u094d\u0924\u093f|\u092a\u0926|posts)/.test(n)) return 'vacancy';
    if (/(date|dates|\u0924\u093e\u0930\u0940\u0916|last date|exam date|\u0906\u0935\u0947\u0926\u0928)/.test(n)) return 'date';
    if (/(website|official site|official website|\u0935\u0947\u092c\u0938\u093e\u0907\u091f)/.test(n)) return 'website';
    return 'general';
}

function ttAIRelevantExcerpt(doc, query, type) {
    const lines = (doc.text || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
    const qTokens = ttAITokens(query);
    const ranked = lines.map(line => {
        let score = 0;
        const n = ttAINormalize(line);
        qTokens.forEach(t => { if (n.includes(t)) score += 3; });
        if (type === 'syllabus' && /syllabus|subject|topic|\u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e|\u0935\u093f\u0937\u092f/.test(n)) score += 3;
        if (type === 'date' && /date|\u0924\u093e\u0930\u0940\u0916|exam|application|\u0906\u0935\u0947\u0926\u0928/.test(n)) score += 3;
        if (type === 'vacancy' && /vacancy|post|\u092a\u0926|\u0930\u093f\u0915\u094d\u0924/.test(n)) score += 3;
        if (type === 'eligibility' && /eligib|\u092f\u094b\u0917\u094d\u092f\u0924\u093e|age|\u0906\u092f\u0941|\u0909\u092e\u094d\u0930/.test(n)) score += 3;
        return { line, score };
    }).sort((a,b) => b.score-a.score);
    return ranked.filter(x => x.score > 0).slice(0, 5).map(x => x.line);
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
    msgBox.innerHTML += `<div id="${loadingId}" style="background:#1e293b;color:#94a3b8;padding:8px 12px;border-radius:10px;max-width:85%;">AI \u0921\u0947\u091f\u093e \u0926\u0947\u0916 \u0930\u0939\u093e \u0939\u0948...</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;

    setTimeout(() => {
        const loading = document.getElementById(loadingId);
        if (loading) loading.remove();

        const docs = ttAIBuildIndex();
        const results = ttAISearch(query, docs);
        const type = ttAIQuestionType(query);
        let reply = '';

        if (type === 'greeting') {
            reply = '\u0928\u092e\u0938\u094d\u0924\u0947! \ud83d\udc4b \u092e\u0948\u0902 TargetTire \u0915\u093e exam-data assistant \u0939\u0942\u0901\u0964 \u0906\u092a \u0915\u093f\u0938\u0940 \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0915\u093e syllabus, pattern, eligibility, vacancy, notification \u092f\u093e \u0909\u092a\u0932\u092c\u094d\u0927 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092a\u0942\u091b \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964';
        } else if (type === 'help') {
            reply = '\u092e\u0948\u0902 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u092e\u0947\u0902 \u0909\u092a\u0932\u092c\u094d\u0927 exam data, syllabus, notifications, subjects \u0914\u0930 chapters \u0915\u094b \u0916\u094b\u091c\u0915\u0930 \u091c\u0935\u093e\u092c \u0926\u0947\u0928\u0947 \u0915\u0940 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0924\u093e \u0939\u0942\u0901\u0964 \u0909\u0926\u093e\u0939\u0930\u0923: \u201cSSC CGL \u0915\u093e syllabus \u092c\u0924\u093e\u0913\u201d, \u201cRRB NTPC \u092e\u0947\u0902 \u0915\u094d\u092f\u093e \u0939\u0948?\u201d, \u201cBihar exams \u092e\u0947\u0902 \u0915\u094c\u0928-\u0915\u094c\u0928 \u0938\u0947 exam \u0939\u0948\u0902?\u201d';
        } else if (!results.length) {
            reply = '\u092e\u0941\u091d\u0947 \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0915\u0947 \u0909\u092a\u0932\u092c\u094d\u0927 \u0921\u0947\u091f\u093e \u092e\u0947\u0902 \u0907\u0938 \u0938\u0935\u093e\u0932 \u0915\u093e \u092d\u0930\u094b\u0938\u0947\u092e\u0902\u0926 \u092e\u093f\u0932\u093e\u0928 \u0928\u0939\u0940\u0902 \u092e\u093f\u0932\u093e\u0964 \u0915\u0943\u092a\u092f\u093e \u092a\u0930\u0940\u0915\u094d\u0937\u093e \u0915\u093e \u0928\u093e\u092e \u0914\u0930 \u0938\u0935\u093e\u0932 \u0925\u094b\u0921\u093c\u093e \u0938\u094d\u092a\u0937\u094d\u091f \u0932\u093f\u0916\u0947\u0902\u0964 \u092e\u0948\u0902 \u0905\u0928\u0941\u092e\u093e\u0928 \u0932\u0917\u093e\u0915\u0930 \u0924\u093e\u0930\u0940\u0916, vacancy \u092f\u093e eligibility \u0928\u0939\u0940\u0902 \u092c\u0924\u093e\u090a\u0901\u0917\u093e\u0964';
        } else {
            const best = results[0];
            const excerpts = ttAIRelevantExcerpt(best.doc, query, type);
            const label = best.doc.title || '\u0935\u0947\u092c\u0938\u093e\u0907\u091f \u0921\u0947\u091f\u093e';
            if (excerpts.length) {
                reply = `\ud83d\udccc **${label}**\n` + excerpts.slice(0, 4).join('\n');
            } else {
                reply = `\ud83d\udccc **${label}**\n${(best.doc.text || '').slice(0, 900)}`;
            }

            if (results.length > 1 && results[1].score >= Math.max(5, best.score * 0.55)) {
                reply += `\n\n\ud83d\udd0e **\u0938\u0902\u092c\u0902\u0927\u093f\u0924:** ${results.slice(1, 3).map(x => x.doc.title).join(' \u2022 ')}`;
            }
            reply += '\n\n\u26a0\ufe0f \u092f\u0939 \u091c\u0935\u093e\u092c \u0935\u0947\u092c\u0938\u093e\u0907\u091f \u092e\u0947\u0902 \u0909\u092a\u0932\u092c\u094d\u0927 \u0921\u0947\u091f\u093e \u092a\u0930 \u0906\u0927\u093e\u0930\u093f\u0924 \u0939\u0948\u0964 \u091c\u093f\u0938 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u093e \u0921\u0947\u091f\u093e \u0909\u092a\u0932\u092c\u094d\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948, \u0909\u0938\u0915\u0947 \u0932\u093f\u090f \u092e\u0948\u0902 \u0905\u0928\u0941\u092e\u093e\u0928 \u0928\u0939\u0940\u0902 \u0932\u0917\u093e\u090a\u0901\u0917\u093e\u0964';
        }

        const bot = document.createElement('div');
        bot.style.cssText = 'background:#1e293b;color:#cbd5e1;padding:8px 12px;border-radius:10px;max-width:90%;line-height:1.5;white-space:normal;';
        bot.innerHTML = ttAIDisplayText(reply);
        msgBox.appendChild(bot);

        const nav = document.createElement('button');
        nav.textContent = '\ud83d\udcc2 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u092a\u0947\u091c \u0916\u094b\u0932\u0947\u0902';
        nav.style.cssText = 'align-self:flex-start;background:#334155;color:#e2e8f0;border:1px solid #475569;padding:6px 9px;border-radius:8px;cursor:pointer;font-size:11px;';
        nav.onclick = function() { ttAINavigate(results[0] && results[0].doc.action); };
        if (results.length && results[0].doc.action) msgBox.appendChild(nav);

        msgBox.scrollTop = msgBox.scrollHeight;
    }, 120);
}

