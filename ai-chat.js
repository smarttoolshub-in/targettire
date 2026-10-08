// TargetTire Smart Local AI Assistant (No API Key Required - Zero Error)
function initAIChatWidget() {
    const chatHTML = `
        <div id="ai-chat-container" style="position: fixed; bottom: 20px; left: 20px; z-index: 9999; font-family: 'Plus Jakarta Sans', sans-serif;">
            <button onclick="toggleAIChatWindow()" style="background: linear-gradient(135deg, #6366f1, #14b8a6); color: white; border: none; padding: 12px 20px; border-radius: 50px; font-weight: bold; cursor: pointer; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4); display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-robot"></i> AI рдкрд░реАрдХреНрд╖рд╛ рдЧреБрд░реБ
            </button>
            <div id="ai-chat-window" style="position: absolute; bottom: 60px; left: 0; width: 320px; height: 420px; background: #131b2e; border: 1px solid #1e293b; border-radius: 20px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: none; flex-direction: column; overflow: hidden;">
                <div style="background: #1e293b; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; color: white; font-weight: bold; font-size: 13px;">
                    <span>ЁЯдЦ TargetTire AI Assistant</span>
                    <button onclick="toggleAIChatWindow()" style="background: none; border: none; color: #94a3b8; cursor: pointer; font-size: 16px;"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div id="ai-chat-messages" style="flex-grow: 1; padding: 12px; overflow-y: auto; font-size: 12px; color: #cbd5e1; display: flex; flex-direction: column; gap: 8px;">
                    <div style="background: #1e293b; padding: 8px 12px; border-radius: 10px; max-width: 85%;">рдирдорд╕реНрддреЗ! рдореИрдВ рдЖрдкрдХрд╛ TargetTire AI рдкрд░реАрдХреНрд╖рд╛ рдЧреБрд░реБ рд╣реВрдБред SSC, Railway, Banking, UPSC рдпрд╛ рдХрд┐рд╕реА рднреА рдкрдврд╝рд╛рдИ рд╕реЗ рдЬреБрдбрд╝реЗ рд╕рд╡рд╛рд▓ рдХреЗ рдмрд╛рд░реЗ рдореЗрдВ рдореБрдЭрд╕реЗ рдкреВрдЫреЗрдВ!</div>
                </div>
                <div style="padding: 10px; background: #0b0f19; border-top: 1px solid #1e293b; display: flex; gap: 6px;">
                    <input type="text" id="ai-user-input" placeholder="рдпрд╣рд╛рдБ рдЕрдкрдирд╛ рд╕рд╡рд╛рд▓ рд▓рд┐рдЦреЗрдВ..." style="flex-grow: 1; background: #131b2e; border: 1px solid #1e293b; padding: 8px; border-radius: 8px; color: white; font-size: 12px; outline: none;" onkeypress="if(event.key === 'Enter') sendAIQuery()">
                    <button onclick="sendAIQuery()" style="background: #6366f1; color: white; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-weight: bold;"><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = chatHTML;
    document.body.appendChild(div);
}

function toggleAIChatWindow() {
    const win = document.getElementById('ai-chat-window');
    win.style.display = (win.style.display === 'flex') ? 'none' : 'flex';
}

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
        value.slice(0, 150).forEach((item, i) => ttAIFlatten(item, prefix + (prefix ? ' тА║ ' : '') + (i + 1), out, depth + 1));
        return;
    }
    Object.keys(value).slice(0, 300).forEach(key => {
        const label = key.replace(/([A-Z])/g, ' $1').replace(/[_-]+/g, ' ').trim();
        const next = prefix ? prefix + ' тА║ ' + label : label;
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

    add('TargetTire рд╡реЗрдмрд╕рд╛рдЗрдЯ', {
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
        if (visible) docs.push({ title: 'рд╡рд░реНрддрдорд╛рди рд╡реЗрдмрд╕рд╛рдЗрдЯ рд╕рд╛рдордЧреНрд░реА', text: visible, haystack: ttAINormalize(visible), action: null });
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

function ttAIQuestionType(q) {
    const n = ttAINormalize(q);
    if (/^(hi|hello|hey|namaste|рдирдорд╕реНрддреЗ)\b/.test(n)) return 'greeting';
    if (/^(who are you|what can you do|aap kya|tum kya)/.test(n)) return 'help';
    if (/(syllabus|pathyakram|рдкрд╛рдареНрдпрдХреНрд░рдо|syllabus)/.test(n)) return 'syllabus';
    if (/(notification|notice|vigyapti|рдЕрдзрд┐рд╕реВрдЪрдирд╛|notification)/.test(n)) return 'notification';
    if (/(eligibility|рдпреЛрдЧреНрдпрддрд╛|age limit|рдЙрдореНрд░|рдЖрдпреБ)/.test(n)) return 'eligibility';
    if (/(exam pattern|pattern|paper|question|questions|рдкреНрд░рд╢реНрди|рдкреЗрдкрд░)/.test(n)) return 'pattern';
    if (/(vacancy|vacancies|рд░рд┐рдХреНрддрд┐|рдкрдж|posts)/.test(n)) return 'vacancy';
    if (/(date|dates|рддрд╛рд░реАрдЦ|last date|exam date|рдЖрд╡реЗрджрди)/.test(n)) return 'date';
    if (/(website|official site|official website|рд╡реЗрдмрд╕рд╛рдЗрдЯ)/.test(n)) return 'website';
    return 'general';
}

function ttAIRelevantExcerpt(doc, query, type) {
    const lines = (doc.text || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
    const qTokens = ttAITokens(query);
    const ranked = lines.map(line => {
        let score = 0;
        const n = ttAINormalize(line);
        qTokens.forEach(t => { if (n.includes(t)) score += 3; });
        if (type === 'syllabus' && /syllabus|subject|topic|рдкрд╛рдареНрдпрдХреНрд░рдо|рд╡рд┐рд╖рдп/.test(n)) score += 3;
        if (type === 'date' && /date|рддрд╛рд░реАрдЦ|exam|application|рдЖрд╡реЗрджрди/.test(n)) score += 3;
        if (type === 'vacancy' && /vacancy|post|рдкрдж|рд░рд┐рдХреНрдд/.test(n)) score += 3;
        if (type === 'eligibility' && /eligib|рдпреЛрдЧреНрдпрддрд╛|age|рдЖрдпреБ|рдЙрдореНрд░/.test(n)) score += 3;
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
    msgBox.innerHTML += `<div id="${loadingId}" style="background:#1e293b;color:#94a3b8;padding:8px 12px;border-radius:10px;max-width:85%;">AI рдбреЗрдЯрд╛ рджреЗрдЦ рд░рд╣рд╛ рд╣реИ...</div>`;
    msgBox.scrollTop = msgBox.scrollHeight;

    setTimeout(() => {
        const loading = document.getElementById(loadingId);
        if (loading) loading.remove();

        const docs = ttAIBuildIndex();
        const results = ttAISearch(query, docs);
        const type = ttAIQuestionType(query);
        let reply = '';

        if (type === 'greeting') {
            reply = 'рдирдорд╕реНрддреЗ! ЁЯСЛ рдореИрдВ TargetTire рдХрд╛ exam-data assistant рд╣реВрдБред рдЖрдк рдХрд┐рд╕реА рдкрд░реАрдХреНрд╖рд╛ рдХрд╛ syllabus, pattern, eligibility, vacancy, notification рдпрд╛ рдЙрдкрд▓рдмреНрдз рдЬрд╛рдирдХрд╛рд░реА рдкреВрдЫ рд╕рдХрддреЗ рд╣реИрдВред';
        } else if (type === 'help') {
            reply = 'рдореИрдВ рд╡реЗрдмрд╕рд╛рдЗрдЯ рдореЗрдВ рдЙрдкрд▓рдмреНрдз exam data, syllabus, notifications, subjects рдФрд░ chapters рдХреЛ рдЦреЛрдЬрдХрд░ рдЬрд╡рд╛рдм рджреЗрдиреЗ рдХреА рдХреЛрд╢рд┐рд╢ рдХрд░рддрд╛ рд╣реВрдБред рдЙрджрд╛рд╣рд░рдг: тАЬSSC CGL рдХрд╛ syllabus рдмрддрд╛рдУтАЭ, тАЬRRB NTPC рдореЗрдВ рдХреНрдпрд╛ рд╣реИ?тАЭ, тАЬBihar exams рдореЗрдВ рдХреМрди-рдХреМрди рд╕реЗ exam рд╣реИрдВ?тАЭ';
        } else if (!results.length) {
            reply = 'рдореБрдЭреЗ рд╡реЗрдмрд╕рд╛рдЗрдЯ рдХреЗ рдЙрдкрд▓рдмреНрдз рдбреЗрдЯрд╛ рдореЗрдВ рдЗрд╕ рд╕рд╡рд╛рд▓ рдХрд╛ рднрд░реЛрд╕реЗрдордВрдж рдорд┐рд▓рд╛рди рдирд╣реАрдВ рдорд┐рд▓рд╛ред рдХреГрдкрдпрд╛ рдкрд░реАрдХреНрд╖рд╛ рдХрд╛ рдирд╛рдо рдФрд░ рд╕рд╡рд╛рд▓ рдереЛрдбрд╝рд╛ рд╕реНрдкрд╖реНрдЯ рд▓рд┐рдЦреЗрдВред рдореИрдВ рдЕрдиреБрдорд╛рди рд▓рдЧрд╛рдХрд░ рддрд╛рд░реАрдЦ, vacancy рдпрд╛ eligibility рдирд╣реАрдВ рдмрддрд╛рдКрдБрдЧрд╛ред';
        } else {
            const best = results[0];
            const excerpts = ttAIRelevantExcerpt(best.doc, query, type);
            const label = best.doc.title || 'рд╡реЗрдмрд╕рд╛рдЗрдЯ рдбреЗрдЯрд╛';
            if (excerpts.length) {
                reply = `ЁЯУМ **${label}**\n` + excerpts.slice(0, 4).join('\n');
            } else {
                reply = `ЁЯУМ **${label}**\n${(best.doc.text || '').slice(0, 900)}`;
            }

            if (results.length > 1 && results[1].score >= Math.max(5, best.score * 0.55)) {
                reply += `\n\nЁЯФО **рд╕рдВрдмрдВрдзрд┐рдд:** ${results.slice(1, 3).map(x => x.doc.title).join(' тАв ')}`;
            }
            reply += '\n\nтЪая╕П рдпрд╣ рдЬрд╡рд╛рдм рд╡реЗрдмрд╕рд╛рдЗрдЯ рдореЗрдВ рдЙрдкрд▓рдмреНрдз рдбреЗрдЯрд╛ рдкрд░ рдЖрдзрд╛рд░рд┐рдд рд╣реИред рдЬрд┐рд╕ рдЬрд╛рдирдХрд╛рд░реА рдХрд╛ рдбреЗрдЯрд╛ рдЙрдкрд▓рдмреНрдз рдирд╣реАрдВ рд╣реИ, рдЙрд╕рдХреЗ рд▓рд┐рдП рдореИрдВ рдЕрдиреБрдорд╛рди рдирд╣реАрдВ рд▓рдЧрд╛рдКрдБрдЧрд╛ред';
        }

        const bot = document.createElement('div');
        bot.style.cssText = 'background:#1e293b;color:#cbd5e1;padding:8px 12px;border-radius:10px;max-width:90%;line-height:1.5;white-space:normal;';
        bot.innerHTML = ttAIDisplayText(reply);
        msgBox.appendChild(bot);

        const nav = document.createElement('button');
        nav.textContent = 'ЁЯУВ рд╕рдВрдмрдВрдзрд┐рдд рдкреЗрдЬ рдЦреЛрд▓реЗрдВ';
        nav.style.cssText = 'align-self:flex-start;background:#334155;color:#e2e8f0;border:1px solid #475569;padding:6px 9px;border-radius:8px;cursor:pointer;font-size:11px;';
        nav.onclick = function() { ttAINavigate(results[0] && results[0].doc.action); };
        if (results.length && results[0].doc.action) msgBox.appendChild(nav);

        msgBox.scrollTop = msgBox.scrollHeight;
    }, 120);
}

window.addEventListener('DOMContentLoaded', initAIChatWidget);
