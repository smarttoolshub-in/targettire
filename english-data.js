window.englishData = {
  name: "English",
  sections: [
    {
      id: "eng_chapters",
      name: "English Language & Grammar Curriculum",
      chapters: [
        { id: 601, title: "Vocabulary: Synonyms, Antonyms & Homonyms (शब्दावली - समानार्थी, विलोम)", totalQuestions: 30 },
        { id: 602, title: "Spellings & Cloze Test (वर्तनी परीक्षण और क्लोज़ टेस्ट)", totalQuestions: 30 },
        { id: 603, title: "Idioms, Phrases & One-Word Substitution (मुहावरे और एक शब्द प्रतिस्थापन)", totalQuestions: 30 },
        { id: 604, title: "Grammar: Active & Passive Voice (सक्रिय और निष्क्रिय आवाज)", totalQuestions: 30 },
        { id: 605, title: "Grammar: Direct & Indirect Speech (प्रत्यक्ष एवं अप्रत्यक्ष भाषण)", totalQuestions: 30 },
        { id: 606, title: "Fill in the Blanks: Prepositions, Tenses & Conjunctions (रिक्त स्थान भरें)", totalQuestions: 30 },
        { id: 607, title: "Sentence Correction & Error Spotting (वाक्य सुधार और त्रुटि पहचान)", totalQuestions: 30 },
        { id: 608, title: "Sentence Rearrangement & Para Jumbles (पैरा जंबल्स)", totalQuestions: 30 },
        { id: 609, title: "Reading Comprehension (समझबूझ कर पढ़ना)", totalQuestions: 30 },
        { id: 610, title: "Descriptive Writing: Essay, Letter & Summary Writing (वर्णनात्मक लेखन)", totalQuestions: 30 }
      ]
    }
  ]
};
window.chapterQuestionsDB = {
   "Vocabulary: Synonyms, Antonyms & Homonyms": [
    {
      qEn: "Choose the word that is most nearly the **SYNONYM** of the word **ABANDON**.",
      qHi: "दिए गए शब्द **ABANDON** का सबसे उपयुक्त **समानार्थी (SYNONYM)** शब्द चुनें।",
      optionsEn: ["Forsake (त्याग देना / छोड़ना)", "Maintain", "Cherish", "Defend"],
      optionsHi: ["Forsake (त्याग देना / छोड़ना)", "Maintain (बनाए रखना)", "Cherish (सहेजना)", "Defend (बचाव करना)"],
      answer: 0,
      exp: "Explanation (En): 'Abandon' means to completely give up or forsake a place, person, or plan. 'Forsake' is its direct synonym.\nस्पष्टीकरण (Hi): 'Abandon' का अर्थ किसी चीज या व्यक्ति को हमेशा के लिए छोड़ देना या त्याग देना होता है, जिसका समानार्थी 'Forsake' है।"
    },
    {
      qEn: "Choose the word that is most nearly the **ANTONYM** of the word **BENEVOLENT**.",
      qHi: "दिए गए शब्द **BENEVOLENT** (परोपकारी/दयालु) का सबसे उपयुक्त **विलोम (ANTONYM)** शब्द चुनें।",
      optionsEn: ["Malevolent (क्रूर / द्वेषी)", "Kind", "Generous", "Altruistic"],
      optionsHi: ["Malevolent (क्रूर / द्वेषी)", "Kind (दयालु)", "Generous (उदार)", "Altruistic (परोपकारी)"],
      answer: 0,
      exp: "Explanation (En): 'Benevolent' means well-meaning and kindly. Its direct antonym is 'Malevolent', which means having or showing a wish to do evil to others.\nस्पष्टीकरण (Hi): 'Benevolent' का अर्थ दयालु होता है, जबकि इसका विपरीत (Antonym) 'Malevolent' है जिसका अर्थ द्वेषी या क्रूर होता है।"
    },
    {
      qEn: "What is the meaning of the **HOMONYM** pair **'Accept'** and **'Except'**, and how do they differ?",
      qHi: "समोच्च शब्द जोड़े **'Accept'** और **'Except'** का क्या अर्थ है और इनमें क्या अंतर है?",
      optionsEn: ["'Accept' means to receive or take something offered; 'Except' means to exclude or leave out", "Both mean to reject something completely", "'Accept' means to refuse; 'Except' means to include", "They are exact spelling duplicates with identical meanings"],
      optionsHi: ["'Accept' का अर्थ स्वीकार करना है; 'Except' का अर्थ किसी चीज को छोड़कर या अपवाद स्वरूप बाहर करना है", "दोनों का मतलब अस्वीकार करना है", "'Accept' का अर्थ मना करना है", "इनके अर्थ बिल्कुल समान हैं"],
      answer: 0,
      exp: "Explanation (En): These are homophones/homonyms that sound similar or look alike but have distinct meanings: Accept (to take) vs. Except (to omit).\nस्पष्टीकरण (Hi): 'Accept' का अर्थ स्वीकार करना होता है, जबकि 'Except' का अर्थ किसी को छोड़कर (Apart from) होता है।"
    },
    {
      qEn: "Choose the **SYNONYM** for the word **CANDID**.",
      qHi: "शब्द **CANDID** (स्पष्टवादी/खरा) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Frank (स्पष्ट और ईमानदार)", "Secretive", "Deceitful", "Vague"],
      optionsHi: ["Frank (स्पष्ट और ईमानदार)", "Secretive (रहस्यवादी)", "Deceitful (धोखेबाज)", "Vague (अस्पष्ट)"],
      answer: 0,
      exp: "Explanation (En): 'Candid' means truthful and straightforward; 'Frank' shares this exact connotation of being open and honest.\nस्पष्टीकरण (Hi): 'Candid' का अर्थ निष्कपट और स्पष्टवादी होता है, जिसका सबसे नजदीकी समानार्थी शब्द 'Frank' है।"
    },
    {
      qEn: "Choose the **ANTONYM** for the word **DILIGENT**.",
      qHi: "शब्द **DILIGENT** (परिश्रमी/मेहनती) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Indolent (आलसी / सुस्त)", "Hardworking", "Industrious", "Assiduous"],
      optionsHi: ["Indolent (आलसी / सुस्त)", "Hardworking (मेहनती)", "Industrious (परिश्रमी)", "Assiduous (लगनशील)"],
      answer: 0,
      exp: "Explanation, (En): 'Diligent' means having or showing care and conscientiousness in one's work. 'Indolent' means wanting to avoid activity or lazy, making it the antonym.\nस्पष्टीकरण (Hi): 'Diligent' मेहनती और लगनशील व्यक्ति को कहते हैं, जबकि इसका विलोम 'Indolent' यानी आलसी होता है।"
    },
    {
      qEn: "Select the word that is a **SYNONYM** of **EPHEMERAL**.",
      qHi: "शब्द **EPHEMERAL** (क्षणिक/अल्पकालिक) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Transient (अल्पकालिक / थोड़े समय का)", "Permanent", "Eternal", "Perpetual"],
      optionsHi: ["Transient (अल्पकालिक / थोड़े समय का)", "Permanent (स्थायी)", "Eternal (शाश्वत)", "Perpetual (निरंतर)"],
      answer: 0,
      exp: "Explanation (En): 'Ephemeral' lasts for a very short time. 'Transient' is a direct synonym denoting something of short duration.\nस्पष्टीकरण (Hi): 'Ephemeral' का अर्थ जो बहुत कम समय के लिए टिके (क्षणिक), और 'Transient' भी इसी का समानार्थी है।"
    },
    {
      qEn: "Select the word that is an **ANTONYM** of **FECUND**.",
      qHi: "शब्द **FECUND** (उपजाऊ/उर्वर) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Barren (बंजर / अनुपजाऊ)", "Fertile", "Prolific", "Productive"],
      optionsHi: ["Barren (बंजर / अनुपजाऊ)", "Fertile (उर्वर)", "Prolific (उत्पादक)", "Productive (उत्पादक)"],
      answer: 0,
      exp: "Explanation (En): 'Fecund' means producing or capable of producing an abundance of offspring or new growth (fertile). Its opposite is 'Barren'.\nस्पष्टीकरण (Hi): 'Fecund' का अर्थ उपजाऊ होता है, और इसके ठीक विपरीत 'Barren' यानी बंजर या अनुपजाऊ होता है।"
    },
    {
      qEn: "What do the homonyms **'Affect'** and **'Effect'** typically signify in grammar?",
      qHi: "व्याकरण में समोच्च शब्द **'Affect'** और **'Effect'** का सामान्यतः क्या अर्थ और प्रयोग होता है?",
      optionsEn: ["'Affect' is usually a verb meaning to influence; 'Effect' is usually a noun meaning a result or consequence", "Both are verbs with identical spellings", "'Affect' is a noun; 'Effect' is an adjective", "They have no grammatical distinction"],
      optionsHi: ["'Affect' आमतौर पर एक क्रिया (Verb) है जिसका अर्थ प्रभावित करना है; 'Effect' आमतौर पर एक संज्ञा (Noun) है जिसका अर्थ परिणाम है", "दोनों समान क्रियाएं हैं", "'Affect' संज्ञा है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Affect (action/to influence) vs. Effect (result/outcome) is a classic homonym rule in English grammar.\nस्पष्टीकरण (Hi): 'Affect' (प्रभाव डालना - Verb) है और 'Effect' (परिणाम - Noun) है।"
    },
    {
      qEn: "Choose the **SYNONYM** for the word **GARRULOUS**.",
      qHi: "शब्द **GARRULOUS** (बातूनी/बातें करने वाला) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Loquacious (बातूनी / मुखर)", "Taciturn", "Reticent", "Reserved"],
      optionsHi: ["Loquacious (बातूनी / मुखर)", "Taciturn (अल्पभाषी)", "Reticent (संकोची)", "Reserved (आरक्षित)"],
      answer: 0,
      exp: "Explanation (En): 'Garrulous' means excessively talkative, especially on trivial matters. 'Loquacious' is its direct synonym.\nस्पष्टीकरण (Hi): 'Garrulous' और 'Loquacious' दोनों का अर्थ अत्यधिक बातूनी या मुखर होता है।"
    },
    {
      qEn: "Choose the **ANTONYM** for the word **HACKNEYED**.",
      qHi: "शब्द **HACKNEYED** (घिसा-पिटा/साधारण) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Original (मौलिक / नया)", "Cliche", "Banal", "Trite"],
      optionsHi: ["Original (मौलिक / नया)", "Cliche (घिसा-पिटा)", "Banal (तुच्छ)", "Trite (साधारण)"],
      answer: 0,
      exp: "Explanation (En): 'Hackneyed' means lacking significance through having been overused (cliche). Its antonym is 'Original' or fresh.\nस्पष्टीकरण (Hi): 'Hackneyed' का अर्थ घिसा-पिटा या अत्यधिक प्रयोग से महत्वहीन हुआ होता है, जिसका विलोम 'Original' (मौलिक) है।"
    },
    {
      qEn: "Select the **SYNONYM** for the word **ICONOCLAST**.",
      qHi: "शब्द **ICONOCLAST** (रूढ़िभंजक/मूर्तिभंजक) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Skeptic / Rebellious traditional-breaker (रूढ़िवादी परंपराओं को तोड़ने वाला)", "Conformist", "Traditionalist", "Worshiper"],
      optionsHi: ["रूढ़िवादी परंपराओं और मान्यताओं को तोड़ने वाला व्यक्ति (Rebel)", "कन्फर्मीस्ट", "पारंपरिक", "आराधक"],
      answer: 0,
      exp: "Explanation (En): An iconoclast is a person who attacks cherished beliefs or traditional institutions.\nस्पष्टीकरण (Hi): 'Iconoclast' वह व्यक्ति होता है जो पुरानी रूढ़िवादी मान्यताओं या परंपराओं का विरोध करता है और उन्हें तोड़ता है।"
    },
    {
      qEn: "Select the **ANTONYM** for the word **JUVENILE**.",
      qHi: "शब्द **JUVENILE** (किशोर/बालक) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Senile (वृद्ध / सठियाया हुआ) / Mature", "Childish", "Puerile", "Youtful"],
      optionsHi: ["Senile (वृद्ध / परिपक्व का विपरीत) / Mature", "Childish (बचकाना)", "Puerile (बालसुलभ)", "Youtful (युवा)"],
      answer: 0,
      exp: "Explanation (En): 'Juvenile' relates to youth or young age. Its antonym in maturity terms is 'Senile' or mature adult.\nस्पष्टीकरण (Hi): 'Juvenile' का संबंध बचपन या किशोरावस्था से है, जिसके विपरीत परिपक्व या वृद्ध (Senile/Mature) आता है।"
    },
    {
      qEn: "What do the homonyms **'Complement'** and **'Compliment'** mean?",
      qHi: "समोच्च शब्द **'Complement'** और **'Compliment'** का क्या अर्थ है?",
      optionsEn: ["'Complement' means something that completes or brings to perfection; 'Compliment' means a polite expression of praise", "Both mean free gifts", "'Complement' means to insult; 'Compliment' means to subtract", "They have identical definitions"],
      optionsHi: ["'Complement' का अर्थ पूरा करना या पूरक होना है; 'Compliment' का अर्थ प्रशंसा करना या तारीफ है", "दोनों का मतलब मुफ्त उपहार है", "'Complement' का अर्थ अपमान है", "परिभाषाएं समान हैं"],
      answer: 0,
      exp: "Explanation (En): Complement (completes a whole) vs. Compliment (praise/flattery) is a frequent homonym confusion.\nस्पष्टीकरण (Hi): 'Complement' (पूरक जो किसी चीज को पूरा करे) और 'Compliment' (तारीफ या प्रशंसा) दोनों अलग अर्थ रखते हैं।"
    },
    {
      qEn: "Choose the **SYNONYM** for the word **LACONIC**.",
      qHi: "शब्द **LACONIC** (अल्पभाषी/संक्षिप्त) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Concise (संक्षिप्त / कम शब्दों में बात कहने वाला)", "Wordy", "Verbose", "Loquacious"],
      optionsHi: ["Concise (संक्षिप्त / कम शब्दों में बात कहने वाला)", "Wordy (शब्दों से भरा)", "Verbose (वाग्बाहुल्य)", "Loquacious (बातूनी)"],
      answer: 0,
      exp: "Explanation (En): 'Laconic' means using very few words. 'Concise' shares this meaning of brevity.\nस्पष्टीकरण (Hi): 'Laconic' का अर्थ कम से कम शब्दों का उपयोग करना होता है, जिसका समानार्थी 'Concise' (संक्षिप्त) है।"
    },
    {
      qEn: "Choose the **ANTONYM** for the word **METICULOUS**.",
      qHi: "शब्द **METICULOUS** (अतिसावधान/सूक्ष्मता से काम करने वाला) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Careless (लापरवाह / असावधान)", "Scrupulous", "Punctilious", "Thorough"],
      optionsHi: ["Careless (लापरवाह / असावधान)", "Scrupulous (विवेकशील)", "Punctilious (नियमनिष्ठ)", "Thorough (संपूर्ण)"],
      answer: 0,
      exp: "Explanation, (En): 'Meticulous' shows great attention to detail; 'Careless' or sloppy is its direct antonym.\nस्पष्टीकरण (Hi): 'Meticulous' हर छोटी बात पर बारीकी से ध्यान देने वाला होता है, जबकि इसका विलोम 'Careless' (लापरवाह) है।"
    },
    {
      qEn: "Select the **SYNONYM** for the word **NADIR**.",
      qHi: "शब्द **NADIR** (पतन का निचला स्तर/निम्नतम बिंदु) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Lowest point (निम्नतम बिंदु)", "Apex", "Zenith", "Summit"],
      optionsHi: ["Lowest point (निम्नतम बिंदु)", "Apex (शिखर)", "Zenith (शीर्ष)", "Summit (शिखर)"],
      answer: 0,
      exp: "Explanation (En): 'Nadir' is the lowest point in the fortunes of a person or organization (opposite of Zenith).\nस्पष्टीकरण (Hi): 'Nadir' का अर्थ किसी स्थिति का सबसे निचला या पतन का बिंदु होता है (इसके विपरीत Zenith शीर्ष है)।"
    },
    {
      qEn: "Select the **ANTONYM** for the word **OBSTINATE**.",
      qHi: "शब्द **OBSTINATE** (जिद्दी/हठी) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Compliant / Flexible (लचीला / आसानी से मानने वाला)", "Stubborn", "Headstrong", "Inflexible"],
      optionsHi: ["Compliant / Flexible (लचीला / आसानी से मानने वाला)", "Stubborn (जिद्दी)", "Headstrong (अड़ियल)", "Inflexible (कठोर)"],
      answer: 0,
      exp: "Explanation (En): 'Obstinate' means stubbornly refusing to change one's opinion. 'Compliant' or flexible is its antonym.\nस्पष्टीकरण (Hi): 'Obstinate' का अर्थ जिद्दी या हठी होता है, जबकि इसका विलोम 'Compliant' या लचीला स्वभाव है।"
    },
    {
      qEn: "What do the homonyms **'Principal'** and **'Principle'** signify?",
      qHi: "समोच्च शब्द **'Principal'** और **'Principle'** का क्या अर्थ और अंतर है?",
      optionsEn: ["'Principal' means chief, head, or capital sum; 'Principle' means a fundamental truth, rule, or law", "Both refer exclusively to school headmasters", "'Principal' means a scientific law; 'Principle' means money", "They are identical in meaning"],
      optionsHi: ["'Principal' का अर्थ मुख्य, प्रधानाचार्य या मूलधन है; 'Principle' का अर्थ एक मौलिक नियम, सिद्धांत या कानून है", "दोनों केवल स्कूल हेडमास्टर हैं", "'Principal' वैज्ञानिक नियम है", "अर्थ समान है"],
      answer: 0,
      exp: "Explanation (En): Principal (leader/amount) vs. Principle (moral rule) is a classic homophone pair.\nस्पष्टीकरण (Hi): 'Principal' (मुख्य व्यक्ति या मूलधन) और 'Principle' (सिद्धांत या नियम) दोनों अलग चीजें हैं।"
    },
    {
      qEn: "Choose the **SYNONYM** for the word **PAUCITY**.",
      qHi: "शब्द **PAUCITY** (कमी/अभाव) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Scarcity (अभाव / कमी)", "Abundance", "Surplus", "Plenitude"],
      optionsHi: ["Scarcity (अभाव / कमी)", "Abundance (प्रचुरता)", "Surplus (अतिरिक्त)", "Plenitude (भरपूर)"],
      answer: 0,
      exp: "Explanation (En): 'Paucity' means the presence of something in only small or insufficient quantities; 'Scarcity' is its synonym.\nस्पष्टीकरण (Hi): 'Paucity' का अर्थ किसी चीज की कमी होना है, जिसका समानार्थी 'Scarcity' है।"
    },
    {
      qEn: "Choose the **ANTONYM** for the word **QUELL**.",
      qHi: "शब्द **QUELL** (दबाना/शांत करना) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Foment / Incite (भड़काना / उकसाना)", "Suppress", "Subdue", "Quash"],
      optionsHi: ["Foment / Incite (भड़काना / उकसाना)", "Suppress (दबाना)", "Subdue (वश में करना)", "Quash (रद्द करना)"],
      answer: 0,
      exp: "Explanation (En): 'Quell' means to put an end to a rebellion or suppress a feeling. Its antonym is 'Foment' or incite.\nस्पष्टीकरण (Hi): 'Quell' का अर्थ किसी विद्रोह या भावना को दबाना या शांत करना है, जबकि इसका विपरीत 'Foment' (भड़काना या उकसाना) है।"
    },
    {
      qEn: "Select the **SYNONYM** for the word **RECALCITRANT**.",
      qHi: "शब्द **RECALCITRANT** (आज्ञा न मानने वाला/अड़ियल) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Defiant / Uncooperative (बागी / असहयोगी)", "Obedient", "Compliant", "Docile"],
      optionsHi: ["Defiant / Uncooperative (बागी / असहयोगी)", "Obedient (आज्ञाकारी)", "Compliant (बाध्यकारी)", "Docile (विनम्र)"],
      answer: 0,
      exp: "Explanation (En): 'Recalcitrant' refers to having an uncooperative attitude toward authority or discipline.\nस्पष्टीकरण (Hi): 'Recalcitrant' नियमों या अधिकारियों के प्रति विद्रोही और असहयोगी रवैया रखने वाले को कहते हैं।"
    },
    {
      qEn: "Select the **ANTONYM** for the word **SAGACIOUS**.",
      qHi: "शब्द **SAGACIOUS** (बुद्धिमान/विवेकशील) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Foolish / Obtuse (मूर्ख / अविवेकी)", "Wise", "Astute", "Prudent"],
      optionsHi: ["Foolish / Obtuse (मूर्ख / अविवेकी)", "Wise (ज्ञानी)", "Astute (चतुर)", "Prudent (विवेकशील)"],
      answer: 0,
      exp: "Explanation (En): 'Sagacious' means having keen mental discernment and good judgment (wise). Its opposite is 'Foolish' or obtuse.\nस्पष्टीकरण (Hi): 'Sagacious' बुद्धिमान और समझदार व्यक्ति को कहते हैं, जिसका विलोम 'Foolish' यानी मूर्ख है।"
    },
    {
      qEn: "What do the homonyms **'Stationary'** and **'Stationery'** mean?",
      qHi: "समोच्च शब्द **'Stationary'** और **'Stationery'** का सही अर्थ क्या है?",
      optionsEn: ["'Stationary' means not moving or staying in one place; 'Stationery' refers to writing materials (pens, paper)", "'Stationary' means writing paper; 'Stationery' means fixed", "Both mean moving vehicles", "They have identical spellings and definitions"],
      optionsHi: ["'Stationary' का अर्थ स्थिर या एक जगह रुका हुआ है; 'Stationery' का अर्थ लेखन सामग्री (पेन, कागज) है", "'Stationary' लिखने का कागज है", "दोनों वाहन हैं", "समान परिभाषाएं हैं"],
      answer: 0,
      exp: "Explanation (En): Stationary (with an 'a' for attached/at rest) vs. Stationery (with an 'e' for envelopes/paper).\nस्पष्टीकरण (Hi): 'Stationary' (स्थिर - स्थिर रहने वाला) और 'Stationery' (दुकान की लेखन सामग्री या कागज-पेंसिल) दोनों अलग वर्तनी और अर्थ रखते हैं।"
    },
    {
      qEn: "Choose the **SYNONYM** for the word **TACITURN**.",
      qHi: "शब्द **TACITURN** (अल्पभाषी/कम बोलने वाला) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Reticent / Reserved (कम बोलने वाला / संकोची)", "Garrulous", "Loquacious", "Talkative"],
      optionsHi: ["Reticent / Reserved (कम बोलने वाला / संकोची)", "Garrulous (बातूनी)", "Loquacious (बातूनी)", "Talkative (बातूनी)"],
      answer: 0,
      exp: "Explanation (En): 'Taciturn' means reserved or uncommunicative in speech; 'Reticent' is its direct synonym.\nस्पष्टीकरण (Hi): 'Taciturn' का अर्थ बहुत कम बोलने वाला व्यक्ति होता है, जिसका समानार्थी 'Reticent' है।"
    },
    {
      qEn: "Choose the **ANTONYM** for the word **UBIQUITOUS**.",
      qHi: "शब्द **UBIQUITOUS** (सर्वव्यापी/हर जगह मौजूद) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Rare / Scarce (दुर्लभ / जो कभी-कभार दिखे)", "Omnipresent", "Pervasive", "Universal"],
      optionsHi: ["Rare / Scarce (दुर्लभ / जो कभी-कभार दिखे)", "Omnipresent (सर्वव्यापी)", "Pervasive (व्यापक)", "Universal (सार्वभौमिक)"],
      answer: 0,
      exp: "Explanation, (En): 'Ubiquitous' means present, appearing, or found everywhere. Its antonym is 'Rare' or scarce.\nस्पष्टीकरण (Hi): 'Ubiquitous' का अर्थ जो हर जगह मौजूद हो (सर्वव्यापी), जबकि इसका विपरीत 'Rare' (दुर्लभ) है।"
    },
    {
      qEn: "Select the **SYNONYM** for the word **VENAL**.",
      qHi: "शब्द **VENAL** (भ्रष्ट/रिश्वतखोर) का **समानार्थी (SYNONYM)** चुनें।",
      optionsEn: ["Corrupt / Bribable (भ्रष्ट / घूस लेने वाला)", "Honest", "Incorruptible", "Virtuous"],
      optionsHi: ["Corrupt / Bribable (भ्रष्ट / घूस लेने वाला)", "Honest (ईमानदार)", "Incorruptible (अद्भुत)", "Virtuous (सदाचारी)"],
      answer: 0,
      exp: "Explanation (En): 'Venal' shows or is motivated by susceptibility to bribery; corrupt.\nस्पष्टीकरण (Hi): 'Venal' उस व्यक्ति को कहते हैं जो आसानी से घूस ले ले या भ्रष्ट हो (Corrupt)।"
    },
    {
      qEn: "Select the **ANTONYM** for the word **ZENITH**.",
      qHi: "शब्द **ZENITH** (शीर्ष/चरम उत्कर्ष) का **विलोम (ANTONYM)** चुनें।",
      optionsEn: ["Nadir (निम्नतम बिंदु / पतन)", "Summit", "Apex", "Peak"],
      optionsHi: ["Nadir (निम्नतम बिंदु / पतन)", "Summit (शिखर)", "Apex (शीर्ष)", "Peak (चोटी)"],
      answer: 0,
      exp: "Explanation (En): 'Zenith' is the time at which something is most powerful or successful (peak). Its direct antonym is 'Nadir'.\nस्पष्टीकरण (Hi): 'Zenith' किसी सफलता का शीर्ष बिंदु होता है, और इसका ठीक विपरीत 'Nadir' (सबसे निचला स्तर) है।"
    },
    {
      qEn: "What do the homonyms **'Complement'** and **'Compliment'** verify in contextual vocabulary tests?",
      qHi: "संदर्भगत शब्दावली परीक्षणों में समोच्च शब्द **'Complement'** और **'Compliment'** क्या परखते हैं?",
      optionsEn: ["Spelling precision and contextual semantic awareness of homophones", "Mathematical computation speed", "Physics gravitational constant formulas", "Computer coding syntax errors"],
      optionsHi: ["वर्तनी की सटीकता और समोच्च शब्दों की संदर्भगत अर्थ जागरूकता", "गणितीय गणना गति", "भौतिकी सूत्र", "कंप्यूटर कोडिंग सिंटैक्स"],
      answer: 0,
      exp: "Explanation (En): Homonym/homophone tests check whether students can distinguish words that sound similar but possess different spellings and meanings.\nस्पष्टीकरण (Hi): ऐसे प्रश्न छात्र की वर्तनी और समान आवाज वाले शब्दों के सटीक अर्थ समझने की क्षमता की जांच करते हैं।"
    },
    {
      qEn: "Why is an extensive mastery of Synonyms, Antonyms, and Homonyms vital for competitive English examinations?",
      qHi: "प्रतियोगिता परीक्षाओं के लिए पर्यायवाची, विलोम और समोच्च शब्दों (Synonyms, Antonyms, Homonyms) पर मजबूत पकड़ होना क्यों आवश्यक है?",
      optionsEn: ["It forms the bedrock of reading comprehension, verbal ability, error spotting, and precise vocabulary scoring in exams like UPSC, SSC, and banking", "It is only useful for writing fairy tale stories", "It has no relevance outside of nursery schools", "It is required solely for mathematics tests"],
      optionsHi: ["यह UPSC, SSC और बैंकिंग जैसी परीक्षाओं में रीडिंग कॉप्रिहेंशन, वर्बल एबिलिटी और सटीक शब्दावली स्कोरिंग की नींव बनाता है", "यह केवल परियों की कहानियां लिखने के लिए उपयोगी है", "नर्सरी स्कूलों के बाहर कोई उपयोग नहीं", "केवल गणित परीक्षा के लिए जरूरी"],
      answer: 0,
      exp: "Explanation (En): Rich vocabulary enhances both written expression and reading fluency, directly boosting performance across all English language modules.\nस्पष्टीकरण (Hi): उन्नत शब्दावली अंग्रेजी भाषा के हर खंड— चाहे वो रीडिंग हो, क्लोज टेस्ट हो या ग्रामर— में बेहतर प्रदर्शन की कुंजी है।"
    },
    {
      qEn: "What is the ultimate benefit of practicing diverse vocabulary question sets in language acquisition?",
      qHi: "भाषा अर्जन में विविध शब्दावली प्रश्न सेटों का अभ्यास करने का सर्वोच्च लाभ क्या है?",
      optionsEn: ["To enhance lexical resource depth, linguistic precision, expressive communication, and confidence in bilingual or advanced academic contexts", "To memorize random useless words permanently", "To confuse readers with complex jargon", "To eliminate grammar rules entirely"],
      optionsHi: ["द्विभाषी या उन्नत शैक्षणिक संदर्भों में लेक्सिकल रिसोर्स गहराई, भाषाई सटीकता, अभिव्यंजक संचार और आत्मविश्वास बढ़ाना", "बेकार शब्दों को याद रखना", "पाठकों को भ्रमित करना", "व्याकरण के नियम खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Regular exposure to synonyms and antonyms expands cognitive linguistic flexibility and precise expression.\nस्पष्टीकरण (Hi): नियमित अभ्यास से भाषा पर पकड़ मजबूत होती है और विचारों को सटीक शब्दों में व्यक्त करने की क्षमता विकसित होती है।"
    }
  ],
    
  "Spellings & Cloze Test": [
    {
      qEn: "Identify the word with the **CORRECT** spelling among the given options.",
      qHi: "दिए गए विकल्पों में से **सही (CORRECT)** वर्तनी (Spelling) वाले शब्द की पहचान करें।",
      optionsEn: ["Accommodate (अनुकूल बनाना / ठहराना)", "Acomodate", "Accomodate", "Acommodate"],
      optionsHi: ["Accommodate (अनुकूल बनाना / ठहराना)", "Acomodate", "Accomodate", "Acommodate"],
      answer: 0,
      exp: "Explanation (En): The correct spelling is 'Accommodate', featuring double 'c' and double 'm'.\nस्पष्टीकरण (Hi): सही वर्तनी 'Accommodate' है जिसमें दो 'c' और दो 'm' आते हैं।"
    },
    {
      qEn: "Identify the word with the **INCORRECT** spelling among the given options.",
      qHi: "दिए गए विकल्पों में से **गलत (INCORRECT)** वर्तनी वाले शब्द की पहचान करें।",
      optionsEn: ["Mischeivous (गलत वर्तनी)", "Receive", "Believe", "Judgment"],
      optionsHi: ["Mischeivous (गलत वर्तनी - सही Mischievous है)", "Receive", "Believe", "Judgment"],
      answer: 0,
      exp: "Explanation (En): The common misspelling 'Mischeivous' incorrectly places 'i' before 'e'; the correct spelling is 'Mischievous'.\nस्पष्टीकरण (Hi): 'Mischeivous' गलत है क्योंकि 'i' और 'e' का क्रम गलत है; सही वर्तनी 'Mischievous' है।"
    },
    {
      qEn: "Select the correctly spelled word for the process of receiving citizenship or adjusting to a new environment.",
      qHi: "नए वातावरण में ढलने या नागरिकता प्राप्त करने की प्रक्रिया के लिए सही वर्तनी वाला शब्द चुनें।",
      optionsEn: ["Assimilation (आत्मसात करना / घुलमिल जाना)", "Asimilation", "Assimilaton", "Assimilationn"],
      optionsHi: ["Assimilation (आत्मसात करना / घुलमिल जाना)", "Asimilation", "Assimilaton", "Assimilationn"],
      answer: 0,
      exp: "Explanation (En): 'Assimilation' is spelled with double 's' and ends with '-ation'.\nस्पष्टीकरण (Hi): 'Assimilation' में दो 's' और अंत में '-ation' आता है।"
    },
    {
      qEn: "Choose the correct spelling of the word meaning 'independent' or 'self-governing'.",
      qHi: "'स्वतंत्र' या 'स्वशासित' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Autonomous (स्वायत्त / स्वतंत्र)", "Autonomas", "Autonomus", "Autonoumos"],
      optionsHi: ["Autonomous (स्वायत्त / स्वतंत्र)", "Autonomas", "Autonomus", "Autonoumos"],
      answer: 0,
      exp: "Explanation (En): The correct spelling is 'Autonomous', derived from 'auto-' and 'nomous'.\nस्पष्टीकरण (Hi): सही वर्तनी 'Autonomous' है।"
    },
    {
      qEn: "Identify the correctly spelled word referring to a state of complete bewilderment or confusion.",
      qHi: "पूर्ण उलझन या अवाक रह जाने की स्थिति को दर्शाने वाले सही वर्तनी वाले शब्द को चुनें।",
      optionsEn: ["Bafflement (चक्कर में डाल देना / हक्का-बक्का)", "Baflement", "Bafflment", "Bafflament"],
      optionsHi: ["Bafflement (चक्कर में डाल देना / हक्का-बक्का)", "Baflement", "Bafflment", "Bafflament"],
      answer: 0,
      exp: "Explanation, (En): 'Bafflement' retains double 'f' from the root verb 'baffle' plus suffix '-ment'.\nस्पष्टीकरण (Hi): 'Bafflement' में 'baffle' के बाद 'ement' जुड़ता है जिसमें डबल 'f' आता है।"
    },
    {
      qEn: "Choose the correctly spelled word for a temporary stoppage or pause.",
      qHi: "अस्थायी रुकावट या विराम के लिए सही वर्तनी वाला शब्द चुनें।",
      optionsEn: ["Ceasefire / Cessation (विराम / समाप्ति)", "Cesation", "Cessasion", "Cessationn"],
      optionsHi: ["Cessation (विराम / समाप्ति)", "Cesation", "Cessasion", "Cessationn"],
      answer: 0,
      exp: "Explanation (En): 'Cessation' features double 's' in both syllables ('cess-ation').\nस्पष्टीकरण (Hi): 'Cessation' में दोनों जगह डबल 's' ('cess-ation') आता है।"
    },
    {
      qEn: "Identify the correct spelling of the word meaning 'exceedingly clever or original'.",
      qHi: "'अत्यंत चतुर या मौलिक' अर्थ वाले शब्द की सही वर्तनी पहचानें।",
      optionsEn: ["Genius / Ingenious (चतुर / प्रतिभावान)", "Ingenus", "Ingenioues", "Ingenous"],
      optionsHi: ["Ingenious (चतुर / प्रतिभावान / मौलिक)", "Ingenus", "Ingenioues", "Ingenous"],
      answer: 0,
      exp: "Explanation (En): 'Ingenious' (clever) must not be confused with 'Ingenuous' (innocent/naive); the former has an 'i' before 'o'.\nस्पष्टीकरण (Hi): 'Ingenious' का अर्थ चतुर या प्रतिभावान होता है।"
    },
    {
      qEn: "Select the correctly spelled word denoting a person who compiles dictionaries.",
      qHi: "शब्दकोश संकलित करने वाले व्यक्ति (लेक्सिकोग्राफर) की सही वर्तनी चुनें।",
      optionsEn: ["Lexicographer (शब्दकोशकार)", "Lexicographor", "Lexicographar", "Lexcographer"],
      optionsHi: ["Lexicographer (शब्दकोशकार)", "Lexicographor", "Lexicographar", "Lexcographer"],
      answer: 0,
      exp: "Explanation (En): 'Lexicographer' uses the standard greek suffix root '-grapher'.\nस्पष्टीकरण (Hi): शब्दकोशकार के लिए 'Lexicographer' वर्तनी सही है।"
    },
    {
      qEn: "Choose the correct spelling of the word meaning 'harmful or destructive'.",
      qHi: "'हानिकारक या विनाशकारी' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Pernicious (हानिकारक / घातक)", "Pernicous", "Perniciouss", "Pernicuis"],
      optionsHi: ["Pernicious (हानिकारक / घातक)", "Pernicous", "Perniciouss", "Pernicuis"],
      answer: 0,
      exp: "Explanation (En): 'Pernicious' is spelled with 'ciou' before 's'.\nस्पष्टीकरण (Hi): 'Pernicious' (घातक या हानिकारक) की वर्तनी में '-cious' प्रत्यय होता है।"
    },
    {
      qEn: "Identify the correctly spelled word meaning 'characterized by stubborn obstinacy'.",
      qHi: "'जिद्दी या अड़ियल स्वभाव' वाले शब्द की सही वर्तनी पहचानें।",
      optionsEn: ["Recalcitrant (अड़ियल / विद्रोही)", "Recalcitrent", "Recalcitrat", "Recalcetrant"],
      optionsHi: ["Recalcitrant (अड़ियल / विद्रोही)", "Recalcitrent", "Recalcitrat", "Recalcetrant"],
      answer: 0,
      exp: "Explanation (En): 'Recalcitrant' ends with '-ant' and features 'cit' in the middle.\nस्पष्टीकरण (Hi): 'Recalcitrant' के अंत में '-ant' आता है।"
    },
    {
      qEn: "Read the passage segment for the **CLOZE TEST**: 'Regular physical exercise is vital for maintaining good health. It helps in ___ (1) ___ cardiovascular fitness, reducing stress, and boosting overall immunity. Sedentary lifestyles often ___ (2) ___ chronic fatigue and health disorders.' What is the most appropriate word for blank (1)?",
      qHi: "क्लोज़ टेस्ट (**CLOZE TEST**) गद्यांश पढ़ें: 'Regular physical exercise is vital for maintaining good health. It helps in ___ (1) ___ cardiovascular fitness...' रिक्त (1) के लिए सबसे उपयुक्त शब्द क्या है?",
      optionsEn: ["enhancing (बढ़ावा देना / सुधार करना)", "destroying", "ignoring", "weakening"],
      optionsHi: ["enhancing (बढ़ावा देना / सुधार करना)", "destroying (नष्ट करना)", "ignoring (नजरअंदाज)", "weakening (कमजोर करना)"],
      answer: 0,
      exp: "Explanation (En): In the context of fitness benefits, exercise 'enhances' or improves cardiovascular health.\nस्पष्टीकरण (Hi): फिटनेस के संदर्भ में व्यायाम हृदय स्वास्थ्य को 'enhance' (बेहतर या उन्नत) करता है।"
    },
    {
      qEn: "Continuing the Cloze Test passage: 'Sedentary lifestyles often ___ (2) ___ chronic fatigue and health disorders.' What is the most appropriate word for blank (2)?",
      qHi: "क्लोज़ टेस्ट गद्यांश जारी रखते हुए: 'Sedentary lifestyles often ___ (2) ___ chronic fatigue and health disorders.' रिक्त (2) के लिए उपयुक्त शब्द चुनें।",
      optionsEn: ["induce / cause (उत्पन्न करना / कारण बनना)", "prevent", "cure", "eliminate"],
      optionsHi: ["induce / cause (उत्पन्न करना / कारण बनना)", "prevent (रोकना)", "cure (इलाज करना)", "eliminate (समाप्त करना)"],
      answer: 0,
      exp: "Explanation (En): Sedentary (inactive) lifestyles tend to cause or induce health disorders and fatigue.\nस्पष्टीकरण (Hi): निष्क्रिय जीवनशैली अक्सर थकान और स्वास्थ्य विकारों का कारण बनती है (Induce/Cause)।"
    },
    {
      qEn: "In a Cloze Test, what is the primary purpose of omitting specific words from a passage?",
      qHi: "क्लोज़ टेस्ट में किसी गद्यांश से विशिष्ट शब्दों को हटाने (Omit करने) का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To test the reader's vocabulary, contextual understanding, and grammatical coherence", "To make the text intentionally unreadable", "To check paper printing quality", "To reduce textbook page counts"],
      optionsHi: ["पाठक की शब्दावली, संदर्भगत समझ और व्याकरण संबंधी सामंजस्य की परीक्षा लेना", "जानबूझकर पाठ को अपठनीय बनाना", "प्रिंटिंग गुणवत्ता जांचना", "पेज संख्या कम करना"],
      answer: 0,
      exp: "Explanation (En): Cloze tests evaluate how well a student grasps context and semantic cues to fill in missing gaps accurately.\nस्पष्टीकरण (Hi): क्लोज़ टेस्ट छात्र की गद्यांश के अर्थ को समझने और रिक्त स्थानों को सटीक शब्दों से भरने की क्षमता को परखता है।"
    },
    {
      qEn: "Choose the correct spelling of the word meaning 'an introductory section or speech'.",
      qHi: "'प्रस्तावना या शुरुआती भाषण' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Prelude (प्रस्तावना / पूर्वाभास)", "Prelued", "Preluad", "Prelawed"],
      optionsHi: ["Prelude (प्रस्तावना / पूर्वाभास)", "Prelued", "Preluad", "Prelawed"],
      answer: 0,
      exp: "Explanation (En): 'Prelude' is correctly spelled with 'ude' at the end.\nस्पष्टीकरण (Hi): सही वर्तनी 'Prelude' है।"
    },
    {
      qEn: "Identify the correctly spelled word denoting a person who doubts truth or religious claims.",
      qHi: "सत्य या धार्मिक दावों पर संदेह करने वाले व्यक्ति (संशयवादी) की सही वर्तनी पहचानें।",
      optionsEn: ["Skeptic (संशयवादी / शक्की)", "Skaptic", "Skepticc", "Scaptik"],
      optionsHi: ["Skeptic (संशयवादी / शक्की)", "Skaptic", "Skepticc", "Scaptik"],
      answer: 0,
      exp: "Explanation, (En): 'Skeptic' (or sceptic in British English) uses 'k' and 'pt'.\nस्पष्टीकरण (Hi): संशयवादी के लिए 'Skeptic' वर्तनी सही है।"
    },
    {
      qEn: "Choose the correctly spelled word meaning 'abundant in supply or quantity'.",
      qHi: "'प्रचुर मात्रा में उपलब्ध' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Profuse (प्रचुर / अत्यधिक)", "Profuase", "Profusee", "Profues"],
      optionsHi: ["Profuse (प्रचुर / अत्यधिक)", "Profuase", "Profusee", "Profues"],
      answer: 0,
      exp: "Explanation (En): 'Profuse' ends with '-use' following 'prof'.\nस्पष्टीकरण (Hi): सही वर्तनी 'Profuse' है।"
    },
    {
      qEn: "Select the word with the **CORRECT** spelling among the choices.",
      qHi: "विकल्पों में से **सही (CORRECT)** वर्तनी वाले शब्द का चयन करें।",
      optionsEn: ["Millennium (सहस्राब्दी)", "Milennium", "Millenium", "Millennum"],
      optionsHi: ["Millennium (सहस्राब्दी)", "Milennium", "Millenium", "Millennum"],
      answer: 0,
      exp: "Explanation (En): 'Millennium' features double 'l' and double 'n'.\nस्पष्टीकरण (Hi): 'Millennium' में दो 'l' और दो 'n' आते हैं।"
    },
    {
      qEn: "Identify the word with the **INCORRECT** spelling among the given choices.",
      qHi: "दिए गए विकल्पों में से **गलत (INCORRECT)** वर्तनी वाले शब्द की पहचान करें।",
      optionsEn: ["Occurance (गलत वर्तनी - सही Occurrence है)", "Occurrence", "Independent", "Occurrence"],
      optionsHi: ["Occurance (गलत वर्तनी - सही Occurrence है)", "Occurrence (सही)", "Independent (सही)", "Necessary (सही)"],
      answer: 0,
      exp: "Explanation (En): 'Occurance' is a misspelling; the correct word is 'Occurrence' with double 'c' and double 'r'.\nस्पष्टीकरण (Hi): 'Occurance' गलत है; सही वर्तनी 'Occurrence' है जिसमें डबल 'c' और डबल 'r' होते हैं।"
    },
    {
      qEn: "For a Cloze Test passage beginning: 'Education is not merely acquiring academic degrees; it is about building character, empathy, and ___ (1) ___ thinking.' What is the best fit for blank (1)?",
      qHi: "क्लोज़ टेस्ट गद्यांश के लिए: 'Education is not merely acquiring academic degrees; it is about building character, empathy, and ___ (1) ___ thinking.' रिक्त (1) के लिए उपयुक्त शब्द चुनें।",
      optionsEn: ["critical (आलोचनात्मक / तार्किक सोच)", "careless", "superficial", "ignorant"],
      optionsHi: ["critical (आलोचनात्मक / तार्किक सोच)", "careless (लापरवाह)", "superficial (सतही)", "ignorant (अज्ञानी)"],
      answer: 0,
      exp: "Explanation (En): In educational contexts, 'critical thinking' is a standard collocation.\nस्पष्टीकरण (Hi): शिक्षा के संदर्भ में 'critical thinking' (तार्किक या आलोचनात्मक सोच) सबसे सटीक शब्द है।"
    },
    {
      qEn: "Continuing the same Cloze Test passage: '...and critical thinking. A truly educated person applies knowledge to ___ (2) ___ societal challenges.' What is the best fit for blank (2)?",
      qHi: "उसी क्लोज़ टेस्ट गद्यांश को जारी रखते हुए: '...A truly educated person applies knowledge to ___ (2) ___ societal challenges.' रिक्त (2) के लिए उपयुक्त शब्द चुनें।",
      optionsEn: ["address / solve (सुलझाना / संबोधित करना)", "ignore", "worsen", "hide"],
      optionsHi: ["address / solve (सुलझाना / समाधान करना)", "ignore (नजरअंदाज)", "worsen (और बिगाड़ना)", "hide (छिपाना)"],
      answer: 0,
      exp: "Explanation (En): Educated individuals use knowledge to address or solve societal problems.\nस्पष्टीकरण (Hi): एक शिक्षित व्यक्ति ज्ञान का उपयोग सामाजिक चुनौतियों को सुलझाने (Address/Solve) के लिए करता है।"
    },
    {
      qEn: "Choose the correct spelling of the word meaning 'tending to obstruct or harm'.",
      qHi: "'बाधा डालने वाला या हानिकारक' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Deleterious (हानिकारक / विनाशकारी)", "Deleteriouss", "Deletarious", "Deleterous"],
      optionsHi: ["Deleterious (हानिकारक / विनाशकारी)", "Deleteriouss", "Deletarious", "Deleterous"],
      answer: 0,
      exp: "Explanation (En): 'Deleterious' is spelled with 'eriou' in the middle.\nस्पष्टीकरण (Hi): सही वर्तनी 'Deleterious' है।"
    },
    {
      qEn: "Select the correctly spelled word denoting 'a person who hates humankind'.",
      qHi: "'मानव जाति से द्वेष करने वाले व्यक्ति' (निसंसार/मानवद्वेषी) की सही वर्तनी चुनें।",
      optionsEn: ["Misanthrope (मानवद्वेषी)", "Misanthrop", "Misanthroup", "Misanthroupv"],
      optionsHi: ["Misanthrope (मानवद्वेषी)", "Misanthrop", "Misanthroup", "Misanthroupv"],
      answer: 0,
      exp: "Explanation (En): 'Misanthrope' ends with '-thrope' (derived from Greek anthropos).\nस्पष्टीकरण (Hi): मानवद्वेषी के लिए 'Misanthrope' वर्तनी सही है।"
    },
    {
      qEn: "Identify the correct spelling of the word meaning 'stubbornly refusing to change one's course of action'.",
      qHi: "'अपनी बात पर अड़े रहने या जिद्दी' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Adamant (अटल / अडिग)", "Adament", "Addamant", "Adamunt"],
      optionsHi: ["Adamant (अटल / अडिग)", "Adament", "Addamant", "Adamunt"],
      answer: 0,
      exp: "Explanation (En): 'Adamant' is spelled with '-ant' at the end.\nस्पष्टीकरण (Hi): सही वर्तनी 'Adamant' है जिसके अंत में '-ant' आता है।"
    },
    {
      qEn: "Choose the correct spelling for a word meaning 'abundant wealth or affluence'.",
      qHi: "'प्रचुर धन या समृद्धि' अर्थ वाले शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Opulence (ऐश्वर्य / समृद्धि)", "Opulance", "Oplulence", "Opulenc"],
      optionsHi: ["Opulence (ऐश्वर्य / समृद्धि)", "Opulance", "Oplulence", "Opulenc"],
      answer: 0,
      exp: "Explanation (En): 'Opulence' ends with '-ence'.\nस्पष्टीकरण (Hi): 'Opulence' (समृद्धि) के अंत में '-ence' आता है।"
    },
    {
      qEn: "Identify the correctly spelled word meaning 'existing from birth; inborn'.",
      qHi: "'जन्मजात या स्वाभाविक' अर्थ वाले शब्द की सही वर्तनी पहचानें।",
      optionsEn: ["Innate (जन्मजात)", "Inate", "Innatt", "Innete"],
      optionsHi: ["Innate (जन्मजात)", "Inate", "Innatt", "Innete"],
      answer: 0,
      exp: "Explanation, (En): 'Innate' features double 'n' ('in-nate').\nस्पष्टीकरण (Hi): 'Innate' में दो 'n' ('in-nate') आते हैं।"
    },
    {
      qEn: "In Cloze Test exercises, what role do grammatical connectors (like 'however', 'moreover', 'consequently') play in blank selection?",
      qHi: "क्लोज़ टेस्ट अभ्यास में व्याकरण संबंधी योजक (जैसे 'however', 'moreover', 'consequently') रिक्त स्थान भरने में क्या भूमिका निभाते हैं?",
      optionsEn: ["They signal logical transitions, contrast, or cause-and-effect relationships between sentences", "They serve as random punctuation marks", "They indicate spelling errors", "They translate paragraphs into foreign languages"],
      optionsHi: ["वे वाक्यों के बीच तार्किक संक्रमण, विरोधाभास या कारण-परिणाम संबंधों का संकेत देते हैं", "वे यादृच्छिक विराम चिह्न हैं", "वर्तनी त्रुटियां दर्शाते हैं", "पैराग्राफ का अनुवाद करते हैं"],
      answer: 0,
      exp: "Explanation (En): Transition words guide the semantic flow, helping test-takers choose whether a blank requires a contrast or supporting word.\nस्पष्टीकरण (Hi): योजक शब्द वाक्यों के बीच का तर्क और संबंध तय करते हैं जिससे सही शब्द चुनने में मदद मिलती है।"
    },
    {
      qEn: "Choose the correct spelling of the word meaning 'characterized by bitter or mocking cynicism'.",
      qHi: "'कड़वी या उपहासपूर्ण व्यंग्य से भरी' शैली के शब्द की सही वर्तनी चुनें।",
      optionsEn: ["Sardonic (व्यंग्यात्मक / उपहासपूर्ण)", "Sardonik", "Sardonich", "Sardonaic"],
      optionsHi: ["Sardonic (व्यंग्यात्मक / उपहासपूर्ण)", "Sardonik", "Sardonich", "Sardonaic"],
      answer: 0,
      exp: "Explanation (En): 'Sardonic' is spelled with 'ard' in the middle and ends in '-ic'.\nस्पष्टीकरण (Hi): सही वर्तनी 'Sardonic' है।"
    },
    {
      qEn: "Select the correctly spelled word denoting 'a person who is excessively concerned with minor details or rules'.",
      qHi: "'छोटी-छोटी बातों या नियमों पर अत्यधिक ध्यान देने वाले व्यक्ति' (रूढ़िवादी/पांडित्यवादी) की सही वर्तनी चुनें।",
      optionsEn: ["Pedant (पांडित्यवादी / नियमवादी)", "Pedent", "Peddant", "Pedantt"],
      optionsHi: ["Pedant (पांडित्यवादी / नियमवादी)", "Pedent", "Peddant", "Pedantt"],
      answer: 0,
      exp: "Explanation (En): 'Pedant' ends with '-ant'.\nस्पष्टीकरण (Hi): ऐसे व्यक्ति के लिए 'Pedant' वर्तनी सही है।"
    },
    {
      qEn: "Why is mastering spelling rules and practicing cloze tests vital for competitive English proficiency?",
      qHi: "प्रतियोगिता परीक्षाओं में अंग्रेजी दक्षता के लिए वर्तनी के नियमों में महारत हासिल करना और क्लोज़ टेस्ट का अभ्यास करना क्यों आवश्यक है?",
      optionsEn: ["They directly test orthographic accuracy, contextual logic, and reading comprehension under strict exam time constraints", "They are only useful for spelling bee school games", "They have no connection to professional writing", "They replace grammar rules entirely"],
      optionsHi: ["वे परीक्षा के सख्त समय के भीतर वर्तनी की सटीकता, संदर्भगत तर्क और रीडिंग कॉप्रिहेंशन का परीक्षण करते हैं", "केवल स्कूल गेम के लिए उपयोगी", "व्यावसायिक लेखन से नाता नहीं", "व्याकरण के नियम बदलते हैं"],
      answer: 0,
      exp: "Explanation (En): Spelling and cloze test questions carry substantial weight in exams like SSC, Banking, and UPSC, rewarding keen attention to detail and vocabulary context.\nस्पष्टीकरण (Hi): एसएससी, बैंकिंग और यूपीएससी जैसी परीक्षाओं में स्पेलिंग और क्लोज़ टेस्ट के प्रश्न उच्च स्कोरिंग होते हैं और बारीक ध्यान मांगते हैं।"
    },
    {
      qEn: "What is the ultimate benefit of disciplined spelling and cloze test practice in language mastery?",
      qHi: "भाषा में महारत हासिल करने के लिए अनुशासित वर्तनी और क्लोज़ टेस्ट अभ्यास का सर्वोच्च लाभ क्या है?",
      optionsEn: ["Achieving flawless written communication, enhanced editing skills, and absolute confidence in complex comprehension tasks", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating vocabulary study"],
      optionsHi: ["दोषहीन लिखित संचार, उन्नत संपादन कौशल और जटिल कॉप्रिहेंशन कार्यों में पूर्ण आत्मविश्वास प्राप्त करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "शब्दावली अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Rigorous practice refines linguistic intuition, ensuring precision in both professional writing and high-level competitive testing.\nस्पष्टीकरण (Hi): इस प्रकार के निरंतर अभ्यास से भाषाई सूझबूझ तीक्ष्ण होती है जो पेशेवर लेखन और प्रतियोगी परीक्षाओं दोनों में सफलता दिलाती है।"
    }
  ],
    "Idioms, Phrases & One-Word Substitution": [
    {
      qEn: "What is the meaning of the idiom **'A blessing in disguise'**?",
      qHi: "मुहावरे **'A blessing in disguise'** का क्या अर्थ है?",
      optionsEn: ["A good thing that seemed bad at first (छुपा हुआ वरदान / पहले बुरी लगने वाली लेकिन बाद में अच्छी साबित होने वाली चीज)", "A curse disguised as a gift", "An invisible magic costume", "A hidden financial treasure"],
      optionsHi: ["एक अच्छी चीज जो पहले बुरी लगी हो (छुपा हुआ वरदान)", "उपहार के रूप में छिपा हुआ अभिशाप", "एक अदृश्य जादुई पोशाक", "छिपा हुआ वित्तीय खजाना"],
      answer: 0,
      exp: "Explanation (En): An apparent misfortune that eventually turns out to be good is called a blessing in disguise.\nस्पष्टीकरण (Hi): ऐसी घटना जो शुरुआत में दुर्भाग्य लगे लेकिन बाद में बहुत फायदेमंद साबित हो, उसे 'A blessing in disguise' कहते हैं।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Bite the bullet'**.",
      qHi: "मुहावरे **'Bite the bullet'** का सही अर्थ चुनें।",
      optionsEn: ["To force yourself to do a difficult or unpleasant thing or to be brave in a difficult situation (कठिनाई का डटकर सामना करना)", "To chew metal objects aggressively", "To shoot a weapon during war", "To eat emergency food rations"],
      optionsHi: ["किसी कठिन या अप्रिय कार्य को करने के लिए खुद को तैयार करना या बहादुरी दिखाना", "धातु की वस्तुओं को चबाना", "युद्ध के दौरान हथियार चलाना", "आपातकालीन भोजन खाना"],
      answer: 0,
      exp: "Explanation (En): Originating from the practice of soldiers biting on a bullet to cope with pain during surgery, it means facing a tough ordeal with courage.\nस्पष्टीकरण (Hi): किसी मुश्किल और दर्दनाक परिस्थिति का साहस के साथ सामना करना 'Bite the bullet' कहलाता है।"
    },
    {
      qEn: "What does the idiom **'Burn the midnight oil'** mean?",
      qHi: "मुहावरे **'Burn the midnight oil'** का क्या अर्थ है?",
      optionsEn: ["To work or study late into the night (देर रात तक कड़ा परिश्रम या पढ़ाई करना)", "To waste fuel unnecessarily", "To light a bonfire at midnight", "To start a kitchen fire"],
      optionsHi: ["देर रात तक काम करना या पढ़ाई करना", "ईंधन व्यर्थ करना", "आधी रात को अलाव जलाना", "रसोई में आग लगाना"],
      answer: 0,
      exp: "Explanation (En): Working late into the night, historically by oil lamp, is referred to as burning the midnight oil.\nस्पष्टीकरण (Hi): परीक्षा या किसी बड़े काम के लिए रात-रात भर जागकर मेहनत करना 'Burn the midnight oil' होता है।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Cry over spilt milk'**.",
      qHi: "मुहावरे **'Cry over spilt milk'** का सही अर्थ चुनें।",
      optionsEn: ["To waste time worrying about past events that cannot be undone or changed (बीती हुई बात या नुकसान पर पछताना जिसका कोई फायदा न हो)", "To weep while drinking milk", "To spill a beverage accidentally", "To complain about kitchen chores"],
      optionsHi: ["उन पुरानी बातों या नुकसान के लिए परेशान होना जिन्हें बदला न जा सके (बेकार का पछतावा)", "दूध पीते हुए रोना", "गलती से पेय गिराना", "रसोई के कामों की शिकायत करना"],
      answer: 0,
      exp: "Explanation (En): Once milk is spilt, it cannot be recovered; similarly, fretting over irreversible past mistakes is futile.\nस्पष्टीकरण (Hi): जो नुकसान हो चुका है और जिसे बदला नहीं जा सकता, उस पर रोने या पछताने से कोई लाभ नहीं होता।"
    },
    {
      qEn: "What is the meaning of the idiom **'Hit the nail on the head'**?",
      qHi: "मुहावरे **'Hit the nail on the head'** का क्या अर्थ है?",
      optionsEn: ["To describe exactly what is causing a situation or to be precisely right (बिल्कुल सही बात कहना या सटीक निशाना लगाना)", "To hammer a nail clumsily", "To hurt oneself accidentally", "To make a carpentry mistake"],
      optionsHi: ["बिल्कुल सटीक बात कहना या समस्या के मूल कारण को सही पकड़ना", "गलत तरीके से कील ठोकना", "चोट लग जाना", "बढ़ईगीरी की गलती"],
      answer: 0,
      exp: "Explanation (En): Finding the exact core of a matter or stating something with absolute precision is hitting the nail on the head.\nस्पष्टीकरण (Hi): किसी विषय या समस्या के केंद्र बिंदु को बिल्कुल सही शब्दों में बयां करना 'Hit the nail on the head' है।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Leave no stone unturned'**.",
      qHi: "मुहावरे **'Leave no stone unturned'** का सही अर्थ चुनें।",
      optionsEn: ["To try every possible course of action or make every possible effort to achieve something (हरसंभव प्रयास करना / कोई कसर न छोड़ना)", "To dig a deep garden trench", "To move rocks around randomly", "To give up searching completely"],
      optionsHi: ["किसी लक्ष्य को पाने के लिए हरसंभव प्रयास करना या कोई कसर न छोड़ना", "बगीचे में गड्ढा खोदना", "पत्थर इधर-उधर फेंकना", "खोज छोड़ देना"],
      answer: 0,
      exp: "Explanation (En): Searching thoroughly by moving every obstacle means leaving no stone unturned.\nस्पष्टीकरण (Hi): अपनी मंजिल को पाने के लिए अपनी तरफ से पूरी ताकत लगा देना और कोई भी प्रयास बाकी न रखना।"
    },
    {
      qEn: "What does the idiom **'Once in a blue moon'** signify?",
      qHi: "मुहावरे **'Once in a blue moon'** का क्या तात्पर्य है?",
      optionsEn: ["An event that happens very rarely (बहुत कभी-कभार / दुर्लभ रूप से होने वाली घटना)", "An event that happens every single night", "A lunar astronomy eclipse", "A blue-colored moon phase"],
      optionsHi: ["ऐसी घटना जो बहुत कभी-कभार (दुर्लभ रूप से) होती है", "हर रात होने वाली घटना", "चंद्रग्रहण", "नीला चंद्रमा"],
      answer: 0,
      exp: "Explanation (En): A blue moon is an infrequent calendar occurrence; hence, the idiom denotes extreme rarity.\nस्पष्टीकरण (Hi): जो चीज बहुत ही कम या कभी-कभार ही देखने को मिले (जैसे ईद का चांद), उसे 'Once in a blue moon' कहते हैं।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Steal someone's thunder'**.",
      qHi: "मुहावरे **'Steal someone's thunder'** का सही अर्थ चुनें।",
      optionsEn: ["To take the credit or praise for something that someone else did (किसी और की सफलता या श्रेय खुद ले लेना)", "To steal weather forecasting equipment", "To make loud thunderstorm noises", "To interrupt a musical concert"],
      optionsHi: ["किसी और की मेहनत का श्रेय या प्रशंसा खुद झटक लेना", "मौसम उपकरणों की चोरी करना", "तूफानी आवाजें निकालना", "संगीत संगीत रोकना"],
      answer: 0,
      exp: "Explanation (En): Outshining someone or taking attention and praise away from their achievements is stealing their thunder.\nस्पष्टीकरण (Hi): किसी अन्य व्यक्ति की उपलब्धि या वाहवाही का श्रेय चुराकर खुद ले लेना 'Steal someone's thunder' कहलाता है।"
    },
    {
      qEn: "What is the meaning of the idiom **'Through thick and thin'**?",
      qHi: "मुहावरे **'Through thick and thin'** का क्या अर्थ है?",
      optionsEn: ["Under all circumstances, no matter how difficult or good (हर परिस्थिति में, सुख-दुख दोनों में साथ निभाना)", "Only during wealthy and prosperous times", "Walking through dense forests", "Traveling on narrow winding roads"],
      optionsHi: ["हर परिस्थिति में (सुख और दुख दोनों में साथ रहना)", "केवल अमीर दिनों में साथ देना", "घने जंगलों से गुजरना", "संकरी सड़कों पर यात्रा करना"],
      answer: 0,
      exp: "Explanation (En): Remaining loyal and supportive through both good and bad times is standing by someone through thick and thin.\nस्पष्टीकरण (Hi): चाहे हालात अच्छे हों या बुरे, हर कठिन परिस्थिति में किसी का साथ देना 'Through thick and thin' है।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Under the weather'**.",
      qHi: "मुहावरे **'Under the weather'** का सही अर्थ चुनें।",
      optionsEn: ["Feeling slightly ill, sick, or unwell (अस्वस्थ या थोड़ा बीमार महसूस करना)", "Standing outside in heavy rain", "Trapped inside a severe thunderstorm", "Flying an airplane through clouds"],
      optionsHi: ["तबीयत ठीक न होना या अस्वस्थ महसूस करना", "तेज बारिश में बाहर खड़े होना", "तूफान में फंसना", "बादलों के बीच विमान उड़ाना"],
      answer: 0,
      exp: "Explanation (En): Feeling physically low, fatigued, or mildly sick is commonly expressed as being under the weather.\nस्पष्टीकरण (Hi): जब किसी की सेहत ढीली हो या वह कमजोरी/बीमारी महसूस कर रहा हो, तो कहते हैं कि वह 'Under the weather' है।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'A person who writes books'**?",
      qHi: "वाक्यांश के लिए एक शब्द (**One-Word Substitution**): **'किताबें लिखने वाला व्यक्ति'** (लेखक)?",
      optionsEn: ["Author (लेखक)", "Publisher", "Editor", "Librarian"],
      optionsHi: ["Author (लेखक)", "Publisher (प्रकाशक)", "Editor (संपादक)", "Librarian (पुस्तकालय अध्यक्ष)"],
      answer: 0,
      exp: "Explanation (En): An author is the writer of a book, article, or document.\nस्पष्टीकरण (Hi): जो व्यक्ति किताबें या लेख लिखता है, उसे 'Author' (लेखक) कहा जाता है।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'A place where dead bodies are kept before burial or cremation'**.",
      qHi: "एक शब्द चुनें: **'शव को दफनाने या जलाने से पहले रखने का स्थान'** (शवगृह)?",
      optionsEn: ["Mortuary / Morgue (शवगृह)", "Sanctuary", "Auditorium", "Repository"],
      optionsHi: ["Mortuary / Morgue (शवगृह)", "Sanctuary (अभयारण्य)", "Auditorium (सभागार)", "Repository (संग्रहालय)"],
      answer: 0,
      exp: "Explanation (En): A mortuary or morgue is a room or building where dead bodies are held prior to funeral rites.\nस्पष्टीकरण (Hi): शवगृह (Mortuary/Morgue) वह स्थान है जहां अंतिम संस्कार से पहले शवों को सुरक्षित रखा जाता है।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'Government by a small group of all-powerful people'**?",
      qHi: "एक शब्द चुनें: **'कुछ ही शक्तिशाली लोगों द्वारा चलाई जाने वाली सरकार'** (अल्पतंत्र)?",
      optionsEn: ["Oligarchy (अल्पतंत्र)", "Democracy", "Monarchy", "Anarchy"],
      optionsHi: ["Oligarchy (अल्पतंत्र)", "Democracy (लोकतंत्र)", "Monarchy (राजतंत्र)", "Anarchy (अराजकता)"],
      answer: 0,
      exp: "Explanation (En): Oligarchy is a form of power structure in which power rests with a small number of people.\nस्पष्टीकरण (Hi): कुछ गिने-चुने रसूखदार लोगों के हाथ में सत्ता होना 'Oligarchy' (अल्पतंत्र) कहलाता है।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'One who is unable to read or write'**.",
      qHi: "एक शब्द चुनें: **'जो पढ़-लिख न सकता हो'** (निरक्षर/अनपढ़)?",
      optionsEn: ["Illiterate (निरक्षर / अनपढ़)", "Literate", "Scholar", "Polyglot"],
      optionsHi: ["Illiterate (निरक्षर / अनपढ़)", "Literate (साक्षर)", "Scholar (विद्वान)", "Polyglot (बहुभाषी)"],
      answer: 0,
      exp: "Explanation (En): An illiterate person lacks the ability to read and write.\nस्पष्टीकरण (Hi): जो व्यक्ति पढ़ना-लिखना नहीं जानता, उसे 'Illiterate' (निरक्षर) कहा जाता है।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'An office or position with no work but high pay/status'**?",
      qHi: "एक शब्द चुनें: **'ऐसा पद जिसमें काम कुछ न हो लेकिन वेतन और रुतबा बहुत हो'** (आरामदेह नौकरी)?",
      optionsEn: ["Sinecure (आराम की नौकरी / बिना काम का पद)", "Sinecure", "Vocation", "Monopoly"],
      optionsHi: ["Sinecure (आराम की नौकरी)", "Vocation (व्यवसाय)", "Monopoly (एकाधिकार)", "Stipend (वजीफा)"],
      answer: 0,
      exp: "Explanation (En): A position requiring little or no work but giving status or financial compensation is a sinecure.\nस्पष्टीकरण (Hi): 'Sinecure' उस पद या नौकरी को कहते हैं जिसमें जिम्मेदारी या काम कम और पारिश्रमिक/सम्मान ज्यादा होता है।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'A person who loves books'**.",
      qHi: "एक शब्द चुनें: **'पुस्तकों से प्रेम करने वाला व्यक्ति'** (किताब प्रेमी)?",
      optionsEn: ["Bibliophile (पुस्तक प्रेमी)", "Philanthropist", "Misogynist", "Bibliophagist"],
      optionsHi: ["Bibliophile (पुस्तक प्रेमी)", "Philanthropist (परोपकारी)", "Misogynist (स्त्री-द्वेषी)", "Bibliophagist (किताब खाने वाला)"],
      answer: 0,
      exp: "Explanation (En): A bibliophile is an individual who loves and collects books.\nस्पष्टीकरण (Hi): जो व्यक्ति किताबें पढ़ने और इकट्ठा करने का शौकीन होता है, उसे 'Bibliophile' कहते हैं।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'A speech delivered without any previous preparation'**?",
      qHi: "एक शब्द चुनें: **'बिना किसी पूर्व तैयारी के दिया गया भाषण'** (तत्काल भाषण)?",
      optionsEn: ["Extempore / Impromptu (तत्काल भाषण / बिना तैयारी का)", "Manuscript", "Prologue", "Epilogue"],
      optionsHi: ["Extempore / Impromptu (तत्काल भाषण)", "Manuscript (पांडुलिपि)", "Prologue (प्रस्तावना)", "Epilogue (उपसंहार)"],
      answer: 0,
      exp: "Explanation (En): Speaking or performing extempore means doing so spontaneously without rehearsal or preparation.\nस्पष्टीकरण (Hi): बिना किसी पूर्व अभ्यास या तैयारी के मंच पर तुरंत भाषण देना 'Extempore' या 'Impromptu' कहलाता है।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'A life history written by oneself'**.",
      qHi: "एक शब्द चुनें: **'स्वयं अपने द्वारा लिखी गई जीवन गाथा'** (आत्मकथा)?",
      optionsEn: ["Autobiography (आत्मकथा)", "Biography", "Bibliography", "Lexicon"],
      optionsHi: ["Autobiography (आत्मकथा)", "Biography (जीवनी)", "Bibliography (ग्रंथ सूची)", "Lexicon (शब्दकोश)"],
      answer: 0,
      exp: "Explanation (En): An autobiography is an account of a person's life written by that person.\nस्पष्टीकरण (Hi): जब कोई व्यक्ति अपने जीवन का वृत्तांत खुद लिखता है, तो उसे 'Autobiography' (आत्मकथा) कहते हैं।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'A remedy for all diseases'**?",
      qHi: "एक शब्द चुनें: **'सभी बीमारियों की एक मात्र दवा'** (रामबाण औषधि)?",
      optionsEn: ["Panacea (रामबाण / सर्वरोगहर औषधि)", "Antibiotic", "Antidote", "Placebo"],
      optionsHi: ["Panacea (रामबाण / सर्वरोगहर औषधि)", "Antibiotic (एंटीबायोटिक)", "Antidote (विषनाशक)", "Placebo (छल-दवा)"],
      answer: 0,
      exp: "Explanation (En): A panacea is a solution or remedy for all difficulties or diseases.\nस्पष्टीकरण (Hi): 'Panacea' उस अचूक दवा को कहते हैं जो हर प्रकार की बीमारी या समस्या को ठीक कर सके।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'A person who possesses many talents'**.",
      qHi: "एक शब्द चुनें: **'वह व्यक्ति जिसमें अनेक प्रकार की प्रतिभाएं हों'** (सर्वगुणसंपन्न)?",
      optionsEn: ["Versatile (बहुमुखी प्रतिभा संपन्न)", "Novice", "Amateur", "Veteran"],
      optionsHi: ["Versatile (बहुमुखी प्रतिभा संपन्न)", "Novice (निख्खू / नौसिखिया)", "Amateur (शौकिया)", "Veteran (अनुभवी)"],
      answer: 0,
      exp: "Explanation (En): Someone able to adapt or be competent in many different subjects or tasks is versatile.\nस्पष्टीकरण (Hi): जो व्यक्ति कई अलग-अलग क्षेत्रों में कुशल हो (बहुमुखी प्रतिभा वाला), उसे 'Versatile' कहते हैं।"
    },
    {
      qEn: "What is the meaning of the idiom **'Break the ice'**?",
      qHi: "मुहावरे **'Break the ice'** का क्या अर्थ है?",
      optionsEn: ["To break awkward silence or start a conversation in a tense situation (बातचीत की शुरुआत करना / संकोच या चुप्पी तोड़ना)", "To smash freezing cold lake ice blocks", "To ruin a friendly relationship", "To freeze drinking water"],
      optionsHi: ["अजीब सी चुप्पी या संकोच को तोड़कर बातचीत की शुरुआत करना", "झील की बर्फ तोड़ना", "दोस्ती खराब करना", "पानी जमाना"],
      answer: 0,
      exp: "Explanation (En): Breaking the ice means relieving tension or initiating social interaction among strangers.\nस्पष्टीकरण (Hi): अजनबी लोगों के बीच की झिझक या चुप्पी को दूर करके बातचीत शुरू करना 'Break the ice' कहलाता है।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'Spill the beans'**.",
      qHi: "मुहावरे **'Spill the beans'** का सही अर्थ चुनें।",
      optionsEn: ["To reveal a secret, often unintentionally (गुप्त बात या राज खोल देना)", "To drop cooking ingredients on the floor", "To make a mess in the kitchen", "To plant agricultural seeds"],
      optionsHi: ["किसी गुप्त बात या राज को अनजाने में या गलती से उजागर कर देना", "रसोई में सामग्री गिराना", "गंदगी फैलाना", "बीज बोना"],
      answer: 0,
      exp: "Explanation (En): Disclosing confidential information or a secret prematurely is spilling the beans.\nस्पष्टीकरण (Hi): किसी छिपी हुई बात या सीक्रेट को सबके सामने उजागर कर देना 'Spill the beans' होता है।"
    },
    {
      qEn: "What does the idiom **'Add fuel to the fire'** mean?",
      qHi: "मुहावरे **'Add fuel to the fire'** का क्या अर्थ है?",
      optionsEn: ["To make a bad situation even worse (स्थिति को और बदतर बना देना / आग में घी डालना)", "To start a campfire safely", "To refuel a racing car engine", "To warm up a cold room"],
      optionsHi: ["किसी बुरी या तनावपूर्ण स्थिति को और अधिक बदतर बना देना (आग में घी डालना)", "कैंप फायर जलाना", "गाड़ी में ईंधन भरना", "कमरा गर्म करना"],
      answer: 0,
      exp: "Explanation (En): Doing or saying something that intensifies a conflict or worsens an argument is adding fuel to the fire.\nस्पष्टीकरण (Hi): गुस्से या लड़ाई की स्थिति में ऐसी बात कहना जिससे मामला और भड़क जाए (आग में घी डालना)।"
    },
    {
      qEn: "Choose the correct meaning of the idiom **'The ball is in your court'**.",
      qHi: "मुहावरे **'The ball is in your court'** का सही अर्थ चुनें।",
      optionsEn: ["It is your turn to make a decision or take action (अब अगला कदम उठाने या निर्णय लेने की बारी आपकी है)", "You are playing tennis professionally", "You must throw a sports ball immediately", "The game has been cancelled"],
      optionsHi: ["अब फैसला लेने या अगला कदम उठाने की जिम्मेदारी आपकी है", "आप टेनिस खेल रहे हैं", "तुरंत गेंद फेंकनी है", "खेल रद्द हो चुका है"],
      answer: 0,
      exp: "Explanation (En): Derived from tennis, it means it is up to the other person to make the next move.\nस्पष्टीकरण (Hi): अब गेंद आपके पाले में है यानी आगे का निर्णय या पहल करने की जिम्मेदारी अब आपकी है।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'Fear of heights'**?",
      qHi: "एक शब्द चुनें: **'ऊंचाई से अत्यधिक डर लगना'** (एक्रोफोबिया)?",
      optionsEn: ["Acrophobia (ऊंचाई का डर)", "Claustrophobia", "Hydrophobia", "Zoophobia"],
      optionsHi: ["Acrophobia (ऊंचाई का डर)", "Claustrophobia (बंद जगहों का डर)", "Hydrophobia (पानी का डर)", "Zoophobia (जानवरों का डर)"],
      answer: 0,
      exp: "Explanation (En): An abnormal fear of heights is known as acrophobia.\nस्पष्टीकरण (Hi): ऊंचाई से लगने वाले अत्यधिक और असाधारण डर को 'Acrophobia' कहते हैं।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'Fear of enclosed spaces'**?",
      qHi: "एक शब्द चुनें: **'बंद या संकरी जगहों से अत्यधिक डर लगना'** (क्लास्ट्रोफोबिया)?",
      optionsEn: ["Claustrophobia (बंद स्थानों का डर)", "Acrophobia", "Necrophobia", "Pyrophobia"],
      optionsHi: ["Claustrophobia (बंद स्थानों का डर)", "Acrophobia", "Necrophobia", "Pyrophobia"],
      answer: 0,
      exp: "Explanation (En): Claustrophobia is the irrational fear of having no escape or being in cramped, closed spaces.\nस्पष्टीकरण (Hi): लिफ्ट या किसी बंद कमरे जैसी संकरी जगहों से लगने वाले डर को 'Claustrophobia' कहा जाता है।"
    },
    {
      qEn: "What is the **One-Word Substitution** for: **'A person who walks in their sleep'**?",
      qHi: "एक शब्द चुनें: **'नींद में चलने की बीमारी वाला व्यक्ति'** (सोम्नामबुलिस्ट)?",
      optionsEn: ["Somnambulist (नींद में चलने वाला)", "Insomniac", "Somniloquist", "Atheist"],
      optionsHi: ["Somnambulist (नींद में चलने वाला)", "Insomniac (अनिद्रा रोगी)", "Somniloquist (नींद में बोलने वाला)", "Atheist (नास्तिक)"],
      answer: 0,
      exp: "Explanation (En): A person who habitually walks while asleep is a somnambulist (sleepwalker).\nस्पष्टीकरण (Hi): जो व्यक्ति नींद में चलने की आदत से ग्रसित हो, उसे 'Somnambulist' (सोम्नामबुलिस्ट) कहते हैं।"
    },
    {
      qEn: "Choose the **One-Word Substitution** for: **'An animal that eats both plants and flesh'**?",
      qHi: "एक शब्द चुनें: **'वह जीव जो पौधे और मांस दोनों खाता है'** (सर्वाहारी)?",
      optionsEn: ["Omnivore (सर्वाहारी)", "Herbivore", "Carnivore", "Insectivore"],
      optionsHi: ["Omnivore (सर्वाहारी)", "Herbivore (शाकाहारी)", "Carnivore (मांसाहारी)", "Insectivore (कीटभक्षी)"],
      answer: 0,
      exp: "Explanation (En): An omnivore is an animal or person that eats food of both plant and animal origin.\nस्पष्टीकरण (Hi): जो जीव शाकाहारी और मांसाहारी दोनों तरह का भोजन ग्रहण करता है, उसे 'Omnivore' (सर्वाहारी) कहते हैं।"
    },
    {
      qEn: "Why are Idioms, Phrases, and One-Word Substitutions critical components of English language mastery?",
      qHi: "मुहावरे, वाक्यांश और एक शब्द प्रतिस्थापन अंग्रेजी भाषा की महारत के लिए महत्वपूर्ण घटक क्यों हैं?",
      optionsEn: ["They elevate linguistic fluency, enrich written expression, and test nuanced comprehension in competitive exams like SSC, Banking, and UPSC", "They are only useful for writing fiction poetry", "They have no connection to professional communication", "They replace grammar rules entirely"],
      optionsHi: ["वे भाषाई प्रवाह को बढ़ाते हैं, लिखित अभिव्यक्ति को समृद्ध करते हैं और एसएससी, बैंकिंग तथा यूपीएससी जैसी परीक्षाओं में सूक्ष्म समझ का परीक्षण करते हैं", "केवल कविता लिखने के लिए उपयोगी", "व्यावसायिक संचार से नाता नहीं", "व्याकरण के नियम बदलते हैं"],
      answer: 0,
      exp: "Explanation (En): Idioms and substitute terms demonstrate advanced lexical competence and natural native-like fluency in English.\nस्पष्टीकरण (Hi): इन शब्दों और मुहावरों की जानकारी से भाषा में गहराई आती है और प्रतियोगी परीक्षाओं में उच्च अंक प्राप्त होते हैं।"
    },
    {
      qEn: "What is the ultimate benefit of practicing diverse idiom and one-word substitution sets?",
      qHi: "विविध मुहावरों और एक शब्द प्रतिस्थापन सेटों का अभ्यास करने का सर्वोच्च लाभ क्या है?",
      optionsEn: ["Achieving lexical precision, enhanced verbal reasoning scores, and natural communicative elegance in English", "Memorizing random dictionary pages without understanding", "Translating ancient dead languages mechanically", "Eliminating grammar study completely"],
      optionsHi: ["लेक्सिकल सटीकता, उन्नत मौखिक तर्क स्कोर और अंग्रेजी में प्राकृतिक संचार लालित्य प्राप्त करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "व्याकरण अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Regular exposure and contextual application build robust linguistic intuition and exam readiness.\nस्पष्टीकरण (Hi): नियमित अभ्यास से याद रखने की क्षमता बढ़ती है और परीक्षा के समय सटीक विकल्प चुनने में आसानी होती है।"
    }
  ],
    "Grammar: Active & Passive Voice": [
    {
      qEn: "What is the primary difference between Active Voice and Passive Voice?",
      qHi: "एक्टिव वॉइस (Active Voice) और पैसिव वॉइस (Passive Voice) के बीच मुख्य अंतर क्या है?",
      optionsEn: ["In Active Voice, the subject performs the action; in Passive Voice, the subject receives the action performed by the verb", "In Passive Voice, the subject always performs the action directly", "Active Voice is used only in past tense", "There is no grammatical difference between them"],
      optionsHi: ["एक्टिव वॉइस में कर्ता (Subject) कार्य करता है; पैसिव वॉइस में कर्ता पर कार्य का प्रभाव पड़ता है (यानी वह क्रिया को प्राप्त करता है)", "पैसिव वॉइस में कर्ता हमेशा सीधे कार्य करता है", "एक्टिव वॉइस केवल भूतकाल में होती है", "कोई व्याकरणिक अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Active voice emphasizes the doer of the action (Subject + Verb + Object), whereas passive voice emphasizes the receiver or the action itself (Object + Helping Verb + V3 + by Subject).\nस्पष्टीकरण (Hi): एक्टिव वॉइस में कर्ता मुख्य होता है (जैसे 'Ram kills Ravana'), जबकि पैसिव वॉइस में कर्म (Object) को प्राथमिकता दी जाती है (जैसे 'Ravana is killed by Ram')."
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'She writes a letter.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'She writes a letter.'**",
      optionsEn: ["A letter is written by her.", "A letter was written by her.", "A letter has been written by her.", "A letter is being written by her."],
      optionsHi: ["A letter is written by her.", "A letter was written by her.", "A letter has been written by her.", "A letter is being written by her."],
      answer: 0,
      exp: "Explanation (En): Simple Present tense ('writes') changes to 'is/am/are + V3' ('is written').\nस्पष्टीकरण (Hi): सिंपल प्रेजेंट टेंस ('writes') का पैसिव बनाते समय 'is/am/are + V3' ('is written') का प्रयोग होता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'They are playing cricket.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'They are playing cricket.'**",
      optionsEn: ["Cricket is being played by them.", "Cricket is played by them.", "Cricket was being played by them.", "Cricket has been played by them."],
      optionsHi: ["Cricket is being played by them.", "Cricket is played by them.", "Cricket was being played by them.", "Cricket has been played by them."],
      answer: 0,
      exp: "Explanation (En): Present Continuous tense ('are playing') changes to 'is/am/are + being + V3' ('is being played').\nस्पष्टीकरण (Hi): प्रेजेंट कंटीन्यूअस टेंस ('are playing') में 'being' जोड़कर 'is being played' बनता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'He has completed the project.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'He has completed the project.'**",
      optionsEn: ["The project has been completed by him.", "The project was completed by him.", "The project had been completed by him.", "The project is completed by him."],
      optionsHi: ["The project has been completed by him.", "The project was completed by him.", "The project had been completed by him.", "The project is completed by him."],
      answer: 0,
      exp: "Explanation (En): Present Perfect tense ('has completed') changes to 'has/have + been + V3' ('has been completed').\nस्पष्टीकरण (Hi): प्रेजेंट परफेक्ट टेंस ('has completed') का पैसिव 'has been completed' होता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'Columbus discovered America.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'Columbus discovered America.'**",
      optionsEn: ["America was discovered by Columbus.", "America is discovered by Columbus.", "America has been discovered by Columbus.", "America had been discovered by Columbus."],
      optionsHi: ["America was discovered by Columbus.", "America is discovered by Columbus.", "America has been discovered by Columbus.", "America had been discovered by Columbus."],
      answer: 0,
      exp: "Explanation, (En): Simple Past tense ('discovered') changes to 'was/were + V3' ('was discovered').\nस्पष्टीकरण (Hi): सिंपल पास्ट टेंस ('discovered') का पैसिव बनाते समय 'was/were + V3' ('was discovered') का प्रयोग होता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'She was writing a novel.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'She was writing a novel.'**",
      optionsEn: ["A novel was being written by her.", "A novel is being written by her.", "A novel had been written by her.", "A novel was written by her."],
      optionsHi: ["A novel was being written by her.", "A novel is being written by her.", "A novel had been written by her.", "A novel was written by her."],
      answer: 0,
      exp: "Explanation (En): Past Continuous tense ('was writing') changes to 'was/were + being + V3' ('was being written').\nस्पष्टीकरण (Hi): पास्ट कंटीन्यूअस टेंस में 'was/were + being + V3' ('was being written') का नियम लगता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'They had finished the work.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'They had finished the work.'**",
      optionsEn: ["The work had been finished by them.", "The work has been finished by them.", "The work was finished by them.", "The work would be finished by them."],
      optionsHi: ["The work had been finished by them.", "The work has been finished by them.", "The work was finished by them.", "The work would be finished by them."],
      answer: 0,
      exp: "Explanation (En): Past Perfect tense ('had finished') changes to 'had been + V3' ('had been finished').\nस्पष्टीकरण (Hi): पास्ट परफेक्ट टेंस ('had finished') का पैसिव 'had been finished' बनता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'The mechanic will repair the car.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'The mechanic will repair the car.'**",
      optionsEn: ["The car will be repaired by the mechanic.", "The car would be repaired by the mechanic.", "The car is repaired by the mechanic.", "The car has been repaired by the mechanic."],
      optionsHi: ["The car will be repaired by the mechanic.", "The car would be repaired by the mechanic.", "The car is repaired by the mechanic.", "The car has been repaired by the mechanic."],
      answer: 0,
      exp: "Explanation (En): Simple Future tense ('will repair') changes to 'will/shall + be + V3' ('will be repaired').\nस्पष्टीकरण (Hi): फ्यूचर सिंपल टेंस में मॉडल वर्ब के साथ 'be' जोड़कर 'will be repaired' किया जाता है।"
    },
    {
      qEn: "Can sentences in the Future Continuous tense and Perfect Continuous tenses (all three) be converted into Passive Voice easily?",
      qHi: "क्या फ्यूचर कंटीन्यूअस और परफेक्ट कंटीन्यूअस टेंस (तीनों) के वाक्यों को आसानी से पैसिव वॉइस में बदला जा सकता है?",
      optionsEn: ["No, passive voice forms for Future Continuous and all Perfect Continuous tenses are generally not used in standard English", "Yes, all 12 tenses have active and passive equivalents", "Only Future Continuous can be converted", "Only Past Perfect Continuous can be converted"],
      optionsHi: ["नहीं, मानक अंग्रेजी में फ्यूचर कंटीन्यूअस और सभी परफेक्ट कंटीन्यूअस टेंस के पैसिव रूप आमतौर पर प्रयोग नहीं किए जाते", "हाँ, सभी 12 टेंसों के पैसिव बनते हैं", "केवल फ्यूचर कंटीन्यूअस बनता है", "केवल पास्ट परफेक्ट कंटीन्यूअस बनता है"],
      answer: 0,
      exp: "Explanation (En): Out of 12 tenses, only 8 have standard passive voice equivalents (Present, Past, Future Simple/Continuous/Perfect rules apply to 8).",
      expHi: "स्पष्टीकरण (Hi): कुल 12 टेंसों में से केवल 8 के ही पैसिव वॉइस बनाए जाते हैं; 4 टेंस (Future Continuous और तीनों Perfect Continuous) के पैसिव नहीं बनते।"
    },
    {
      qEn: "Convert the following Interrogative sentence into Passive Voice: **'Do you speak English?'**",
      qHi: "निम्नलिखित प्रश्नवाचक वाक्य को पैसिव वॉइस में बदलें: **'Do you speak English?'**",
      optionsEn: ["Is English spoken by you?", "Are English spoken by you?", "Was English spoken by you?", "Has English spoken by you?"],
      optionsHi: ["Is English spoken by you?", "Are English spoken by you?", "Was English spoken by you?", "Has English spoken by you?"],
      answer: 0,
      exp: "Explanation (En): Present simple interrogative starting with 'Do' changes to 'Is/Am/Are + object + V3' ('Is English spoken by you?').\nस्पष्टीकरण (Hi): 'Do' से शुरू होने वाले प्रश्नवाचक वाक्य का पैसिव 'Is/Am/Are' से शुरू होता है।"
    },
    {
      qEn: "Convert the following Interrogative sentence into Passive Voice: **'Who wrote this book?'**",
      qHi: "निम्नलिखित प्रश्नवाचक वाक्य को पैसिव वॉइस में बदलें: **'Who wrote this book?'**",
      optionsEn: ["By whom was this book written?", "Who was this book written by him?", "This book was written by whom?", "Whom wrote this book?"],
      optionsHi: ["By whom was this book written?", "Who was this book written by him?", "This book was written by whom?", "Whom wrote this book?"],
      answer: 0,
      exp: "Explanation (En): 'Who' changes to 'By whom' at the beginning of a passive interrogative sentence, followed by auxiliary verb and V3.\nस्पष्टीकरण (Hi): 'Who' से शुरू होने वाले वाक्यों में पैसिव बनाते समय शुरुआत में 'By whom' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Convert the following Imperative sentence into Passive Voice: **'Open the door.'**",
      qHi: "निम्नलिखित आज्ञासूचक वाक्य को पैसिव वॉइस में बदलें: **'Open the door.'**",
      optionsEn: ["Let the door be opened.", "The door should be open.", "Let the door opened.", "Open be the door."],
      optionsHi: ["Let the door be opened.", "The door should be open.", "Let the door opened.", "Open be the door."],
      answer: 0,
      exp: "Explanation (En): Imperative sentences expressing a command take the structure: 'Let + object + be + V3'.\nस्पष्टीकरण (Hi): आज्ञासूचक वाक्यों (Imperative) का पैसिव 'Let + object + be + V3' के फार्मूले से बनता है।"
    },
    {
      qEn: "Convert the following Imperative sentence (advice/suggestion) into Passive Voice: **'Respect your elders.'**",
      qHi: "निम्नलिखित सलाह वाले वाक्य को पैसिव वॉइस में बदलें: **'Respect your elders.'**",
      optionsEn: ["Your elders should be respected.", "Let your elders respected.", "Your elders must respect.", "Respect should be your elders."],
      optionsHi: ["Your elders should be respected.", "Let your elders respected.", "Your elders must respect.", "Respect should be your elders."],
      answer: 0,
      exp: "Explanation (En): Imperative sentences expressing advice use the structure: 'Object + should be + V3'.\nस्पष्टीकरण (Hi): सलाह या सुझाव वाले आज्ञासूचक वाक्यों का पैसिव 'Object + should be + V3' के रूप में बनाया जाता है।"
    },
    {
      qEn: "Convert the following sentence with Modal Auxiliary into Passive Voice: **'You must finish this task.'**",
      qHi: "मॉडल वर्ब वाले इस वाक्य को पैसिव वॉइस में बदलें: **'You must finish this task.'**",
      optionsEn: ["This task must be finished by you.", "This task must finish by you.", "This task had to be finished by you.", "This task is finished by you."],
      optionsHi: ["This task must be finished by you.", "This task must finish by you.", "This task had to be finished by you.", "This task is finished by you."],
      answer: 0,
      exp: "Explanation (En): Sentences with modals (can, could, may, might, must, should) take the passive form: 'Modal + be + V3'.\nस्पष्टीकरण (Hi): मॉडल वर्ब (must, can, should आदि) वाले वाक्यों में पैसिव बनाते वक्त 'Modal + be + V3' का प्रयोग होता है।"
    },
    {
      qEn: "Convert the following sentence containing an Intransitive Verb (no direct object): **'Birds fly in the sky.'** (Can it be made passive?)",
      qHi: "अकर्मक क्रिया (बिना ऑब्जेक्ट के) वाले इस वाक्य को देखें: **'Birds fly in the sky.'** क्या इसका पैसिव वॉइस संभव है?",
      optionsEn: ["No, sentences with intransitive verbs cannot be converted into passive voice because they lack a direct object", "Yes, it becomes 'In the sky are flown by birds'", "Yes, by adding a new subject", "Yes, easily using 'is flown'"],
      optionsHi: ["नहीं, अकर्मक क्रिया (Intransitive) वाले वाक्यों का पैसिव नहीं बनाया जा सकता क्योंकि उनमें डायरेक्ट ऑब्जेक्ट नहीं होता", "हाँ, 'In the sky are flown by birds'", "हाँ, नया सब्जेक्ट जोड़कर", "हाँ, आसानी से"],
      answer: 0,
      exp: "Explanation, (En): Passive voice requires an object to become the new subject; since intransitive verbs have no object, they cannot be passivized.\nस्पष्टीकरण (Hi): पैसिव वॉइस बनाने के लिए ऑब्जेक्ट का होना अनिवार्य है; चूंकि अकर्मक क्रियाओं में ऑब्जेक्ट नहीं होता, अतः उनका पैसिव नहीं बनता।"
    },
    {
      qEn: "Convert the following sentence with Prepositional Verb into Passive Voice: **'Everyone laughs at the beggar.'**",
      qHi: "प्रेपोजिशन वाली क्रिया के इस वाक्य को पैसिव वॉइस में बदलें: **'Everyone laughs at the beggar.'**",
      optionsEn: ["The beggar is laughed at by everyone.", "The beggar is laughed by everyone.", "The beggar was laughed at.", "Everyone is laughed at by the beggar."],
      optionsHi: ["The beggar is laughed at by everyone.", "The beggar is laughed by everyone.", "The beggar was laughed at.", "Everyone is laughed at by the beggar."],
      answer: 0,
      exp: "Explanation (En): Prepositions attached to phrasal/prepositional verbs (like 'laughs at') must be retained intact before 'by' in the passive voice.\nस्पष्टीकरण (Hi): पैसिव बनाते समय क्रिया के साथ लगा प्रपोजिशन (जैसे 'at') हटाया नहीं जाता, वह 'by' से ठीक पहले बना रहता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'They elected him leader.'** (Verbs of naming/electing with two objects)",
      qHi: "दो ऑब्जेक्ट वाले इस वाक्य को पैसिव वॉइस में बदलें: **'They elected him leader.'**",
      optionsEn: ["He was elected leader by them.", "Leader was elected him by them.", "He is elected leader.", "Leader was being elected by them."],
      optionsHi: ["He was elected leader by them.", "Leader was elected him by them.", "He is elected leader.", "Leader was being elected by them."],
      answer: 0,
      exp: "Explanation (En): With verbs taking a direct and indirect object (elect, appoint, name), the indirect object ('him' -> 'He') becomes the primary subject in passive.\nस्पष्टीकरण (Hi): ऐसे वाक्यों में जीवंत ऑब्जेक्ट (him -> He) को नया सब्जेक्ट बनाकर पैसिव बनाया जाता है।"
    },
    {
      qEn: "Convert the following sentence with Infinitive into Passive Voice: **'I have to finish this work.'**",
      qHi: "इन्फिनिटिव (Infinitive) वाले इस वाक्य को पैसिव वॉइस में बदलें: **'I have to finish this work.'**",
      optionsEn: ["This work has to be finished by me.", "This work is finished by me.", "This work must be finished by me.", "This work had to be finished by me."],
      optionsHi: ["This work has to be finished by me.", "This work is finished by me.", "This work must be finished by me.", "This work had to be finished by me."],
      answer: 0,
      exp: "Explanation (En): Sentences with 'have to / has to / had to + V1' change to 'have/has/had + to be + V3' in the passive voice.\nस्पष्टीकरण (Hi): 'have to / has to + V1' वाले वाक्यों का पैसिव 'to be + V3' (to be finished) जोड़कर बनता है।"
    },
    {
      qEn: "Convert the following Passive Voice sentence back into Active Voice: **'A book was given to me by him.'**",
      qHi: "इस पैसिव वाक्य को वापस एक्टिव वॉइस में बदलें: **'A book was given to me by him.'**",
      optionsEn: ["He gave me a book.", "He gives me a book.", "He has given me a book.", "He had given me a book."],
      optionsHi: ["He gave me a book.", "He gives me a book.", "He has given me a book.", "He had given me a book."],
      answer: 0,
      exp: "Explanation (En): Passive 'was given' (Simple Past) reverts to active past form 'gave'.\nस्पष्टीकरण (Hi): पैसिव के 'was given' को एक्टिव में बदलते वक्त सिंपल पास्ट की वर्ब 'gave' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Convert the following Passive Voice sentence back into Active Voice: **'English is spoken all over the world.'**",
      qHi: "इस पैसिव वाक्य को वापस एक्टिव वॉइस में बदलें: **'English is spoken all over the world.'**",
      optionsEn: ["People speak English all over the world.", "World speaks English.", "English speaks everyone.", "They is speaking English."],
      optionsHi: ["People speak English all over the world.", "World speaks English.", "English speaks everyone.", "They is speaking English."],
      answer: 0,
      exp: "Explanation (En): When the doer is general or implied (like 'people' or 'they'), it is omitted in passive; converting back requires supplying the implicit subject 'People'.\nस्पष्टीकरण (Hi): इस वाक्य में काम करने वाला छुपा हुआ था (आम लोग), इसलिए एक्टिव बनाते वक्त उपयुक्त सब्जेक्ट 'People' जोड़ा जाता है।"
    },
    {
      qEn: "Identify the correct Passive Voice form of: **'Honey tastes sweet.'** (Quasi-passive verb)",
      qHi: "क्वासी-पैसिव क्रिया वाले वाक्य **'Honey tastes sweet.'** का सही पैसिव रूप पहचानें।",
      optionsEn: ["Honey is sweet when it is tasted.", "Honey is tasted sweet.", "Sweet is tasted by honey.", "Honey was tasted sweet."],
      optionsHi: ["Honey is sweet when it is tasted.", "Honey is tasted sweet.", "Sweet is tasted by honey.", "Honey was tasted sweet."],
      answer: 0,
      exp: "Explanation (En): Quasi-passive verbs (tastes, smells, feels) are converted using the structure: 'Subject + helping verb + adjective + when it is + V3'.\nस्पष्टीकरण (Hi): ऐसी क्रियाएं जो स्वाद या अनुभव में पैसिव जैसी लगती हैं (tastes, smells), उनका पैसिव 'when it is tasted' जोड़कर बनता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'People say that he is an honest man.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'People say that he is an honest man.'**",
      optionsEn: ["It is said that he is an honest man. (OR He is said to be an honest man.)", "He is said that he is honest.", "It was said by people that he is honest.", "People are said by him."],
      optionsHi: ["It is said that he is an honest man. (OR He is said to be an honest man.)", "He is said that he is honest.", "It was said by people that he is honest.", "People are said by him."],
      answer: 0,
      exp: "Explanation (En): Sentences starting with reporting clauses ('People say that...') can be passivized using 'It is said that...' or 'He is said to be...'.\nस्पष्टीकरण (Hi): 'People say that...' जैसे वाक्यों को 'It is said that...' या 'He is said to be...' के रूप में पैसिव किया जाता है।"
    },
    {
      qEn: "Why is the preposition 'by' sometimes replaced by other prepositions (like 'to', 'with', 'at') in Passive Voice?",
      qHi: "पैसिव वॉइस में 'by' के स्थान पर कभी-कभी अन्य प्रपोजिशन (जैसे 'to', 'with', 'at') का प्रयोग क्यों किया जाता है?",
      optionsEn: ["Certain verbs take specific prepositions based on their semantic context (e.g., 'known to', 'pleased with', 'surprised at')", "Because 'by' is grammatically illegal in English", "To make sentences longer", "Because prepositions change randomly"],
      optionsHi: ["कुछ विशेष क्रियाएं अपने अर्थ के अनुसार 'by' के बजाय निश्चित प्रपोजिशन लेती हैं (जैसे 'known to', 'pleased with', 'surprised at')", "क्योंकि 'by' अवैध है", "वाक्य लंबे करने के लिए", "यादृच्छिक रूप से"],
      answer: 0,
      exp: "Explanation (En): Verbs like 'know' take 'to' (known to me), 'please' takes 'with' (pleased with), and 'surprised' takes 'at' (surprised at).\nस्पष्टीकरण (Hi): कुछ वर्ब (जैसे know के साथ to, surprise के साथ at, please के साथ with) अपने साथ 'by' नहीं बल्कि निश्चित प्रपोजिशन लेती हैं।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'This bottle contains milk.'**",
      qHi: "निम्नलिखित वाक्य को पैसिव वॉइस में बदलें: **'This bottle contains milk.'**",
      optionsEn: ["Milk is contained in this bottle.", "Milk is contained by this bottle.", "Milk was contained with this bottle.", "Milk contains this bottle."],
      optionsHi: ["Milk is contained in this bottle.", "Milk is contained by this bottle.", "Milk was contained with this bottle.", "Milk contains this bottle."],
      answer: 0,
      exp: "Explanation (En): The verb 'contain' takes the preposition 'in' rather than 'by' in the passive voice.\nस्पष्टीकरण (Hi): 'contain' क्रिया के साथ पैसिव में 'by' के स्थान पर 'in' प्रपोजिशन का प्रयोग होता है ('Milk is contained in this bottle')."
    },
    {
      qEn: "Convert the following negative sentence into Passive Voice: **'He does not pluck flowers.'**",
      qHi: "नकारात्मक वाक्य को पैसिव वॉइस में बदलें: **'He does not pluck flowers.'**",
      optionsEn: ["Flowers are not plucked by him.", "Flowers were not plucked by him.", "Flowers are not plucking by him.", "Flowers has not been plucked by him."],
      optionsHi: ["Flowers are not plucked by him.", "Flowers were not plucked by him.", "Flowers are not plucking by him.", "Flowers has not been plucked by him."],
      answer: 0,
      exp: "Explanation, (En): Simple present negative ('does not + V1') changes to 'is/am/are + not + V3' ('are not plucked').\nस्पष्टीकरण (Hi): सिंपल प्रेजेंट के नेगेटिव वाक्य में 'does not' की जगह 'is/am/are + not + V3' का प्रयोग किया जाता है।"
    },
    {
      qEn: "What is the grammatical rule regarding the pronoun change when converting Active to Passive Voice?",
      qHi: "एक्टिव से पैसिव बनाते समय सर्वनाम (Pronouns) में होने वाले बदलाव का व्याकरणिक नियम क्या है?",
      optionsEn: ["Subjective pronouns change to their corresponding objective forms (e.g., I -> me, he -> him, she -> her, they -> them)", "Pronouns never change their form", "Subjective pronouns change to possessive adjectives", "Pronouns are deleted completely"],
      optionsHi: ["सब्जेक्टिव सर्वनाम अपने संबंधित ऑब्जेक्टिव रूपों में बदल जाते हैं (जैसे I -> me, he -> him, she -> her, they -> them)", "सर्वनाम कभी नहीं बदलते", "सब्जेक्टिव से पजेसिव बनते हैं", "सर्वनाम हटा दिए जाते हैं"],
      answer: 0,
      exp: "Explanation (En): When the subject pronoun moves to the object position after 'by', it must take its objective case pronoun.\nस्पष्टीकरण (Hi): जब कर्ता (Subject) पीछे 'by' के बाद कर्म (Object) की जगह जाता है, तो वह अपने ऑब्जेक्टिव केस (जैसे I का me, he का him) में बदल जाता है।"
    },
    {
      qEn: "Convert the following sentence into Passive Voice: **'The teacher gave me a prize.'**",
      qHi: "दो ऑब्जेक्ट वाले इस वाक्य को पैसिव वॉइस में बदलें: **'The teacher gave me a prize.'**",
      optionsEn: ["I was given a prize by the teacher. (OR A prize was given to me by the teacher.)", "A prize was given me by the teacher.", "Me was given a prize.", "The teacher was given a prize."],
      optionsHi: ["I was given a prize by the teacher. (OR A prize was given to me by the teacher.)", "A prize was given me by the teacher.", "Me was given a prize.", "The teacher was given a prize."],
      answer: 0,
      exp: "Explanation (En): With two objects (indirect 'me' and direct 'a prize'), either can become the subject, though using the indirect object (I) is most common.\nस्पष्टीकरण (Hi): दो ऑब्जेक्ट वाले वाक्य में दोनों में से किसी को भी नया सब्जेक्ट बनाकर पैसिव बनाया जा सकता है।"
    },
    {
      qEn: "Why is Passive Voice frequently used in scientific, technical, or formal official writing?",
      qHi: "वैज्ञानिक, तकनीकी या औपचारिक आधिकारिक लेखन में पैसिव वॉइस का बार-बार उपयोग क्यों किया जाता है?",
      optionsEn: ["To maintain objectivity by focusing on the process, experiment, or result rather than the personal identity of the doer", "To make sentences intentionally confusing", "Because active voice is legally banned in offices", "To reduce the word count of reports"],
      optionsHi: ["व्यक्तिगत कर्ता के बजाय प्रक्रिया, प्रयोग या परिणाम पर ध्यान केंद्रित करके वस्तुनिष्ठता (Objectivity) बनाए रखने के लिए", "जानबूझकर भ्रमित करने के लिए", "कार्यालयों में एक्टिव बैन है", "रिपोर्ट छोटी करने के लिए"],
      answer: 0,
      exp: "Explanation (En): Passive voice shifts focus from 'who did it' to 'what was done', which is ideal for scientific reporting (e.g., 'The solution was heated').\nस्पष्टीकरण (Hi): विज्ञान और औपचारिक रिपोर्टों में कौन कर रहा है (कर्ता) इससे ज्यादा जरूरी यह होता है कि क्या काम किया गया, इसलिए पैसिव का प्रयोग होता है।"
    },
    {
      qEn: "What is the ultimate objective of mastering Active and Passive Voice conversions in English grammar?",
      qHi: "अंग्रेजी व्याकरण में एक्टिव और पैसिव वॉइस के रूपांतरण में महारत हासिल करने का सर्वोच्च उद्देश्य क्या है?",
      optionsEn: ["To enhance sentence variety, stylistic flexibility, grammatical precision, and clarity in both active engagement and formal reporting", "To memorize complex verb tables mechanically", "To eliminate pronouns permanently", "To write exclusively in past tense"],
      optionsHi: ["वाक्य विविधता, शैलीगत लचीलेपन, व्याकरण की सटीकता और औपचारिक रिपोर्टिंग में स्पष्टता बढ़ाना", "वर्ब टेबल रटना", "सर्वनाम हटाना", "केवल भूतकाल में लिखना"],
      answer: 0,
      exp: "Explanation (En): Flexibility in voice allows writers to control emphasis, tone, and perspective, enriching overall language proficiency.\nस्पष्टीकरण (Hi): वॉइस बदलने की कला सीखने से वाक्य रचना में लचीलापन आता है और किसी भी बात को प्रभावशाली ढंग से कहने की क्षमता विकसित होती है।"
    },
    {
      qEn: "How does regular practice of voice conversion improve overall writing and error-spotting skills?",
      qHi: "वाच्य परिवर्तन (Voice Conversion) का नियमित अभ्यास कुल लेखन और एरर-स्पॉटिंग कौशल को कैसे बेहतर बनाता है?",
      optionsEn: ["It sharpens awareness of subject-verb agreement, tense consistency, and proper auxiliary verb usage across complex sentence structures", "It helps in typing computer code faster", "It improves mathematical calculation speed", "It has no relation to writing skills"],
      optionsHi: ["यह जटिल वाक्य संरचनाओं में सब्जेक्ट-वर्ब एग्रीमेंट, टेंस की एकरूपता और उचित हेल्पिंग वर्ब के उपयोग के प्रति जागरूकता को तेज करता है", "कंप्यूटर कोड टाइप करने में मदद", "गणित गणना गति सुधारना", "लेखन से नाता नहीं"],
      answer: 0,
      exp: "Explanation (En): Transforming structures between active and passive reinforces fundamental grammatical rules, making error detection intuitive in exams.\nस्पष्टीकरण (Hi): एक्टिव-पैसिव के अभ्यास से व्याकरण के मूल नियम (जैसे वर्ब की फॉर्म और हेल्पिंग वर्ब) पक्के हो जाते हैं, जिससे परीक्षा में गलतियां तुरंत पकड़ में आ जाती हैं।"
    }
  ],
    "Grammar: Direct & Indirect Speech": [
    {
      qEn: "What is the primary difference between Direct Speech and Indirect Speech?",
      qHi: "डायरेक्ट स्पीच (Direct Speech) और इनडायरेक्ट स्पीच (Indirect Speech) के बीच मुख्य अंतर क्या है?",
      optionsEn: ["Direct speech quotes the exact words spoken by a speaker (using quotation marks), whereas indirect speech reports what was said without using exact words", "Indirect speech always uses quotation marks", "Direct speech never uses punctuation", "There is no grammatical difference between them"],
      optionsHi: ["डायरेक्ट स्पीच वक्ता के कहे गए सटीक शब्दों को उद्धरण चिन्हों में कोट करती है, जबकि इनडायरेक्ट स्पीच बिना सटीक शब्द दोहराए उसके सार या बात को रिपोर्ट करती है", "इनडायरेक्ट में हमेशा कोट्स होते हैं", "डायरेक्ट में विराम चिह्न नहीं होते", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Direct speech uses actual spoken words within inverted commas, while indirect (reported) speech alters pronouns, tenses, and time markers to suit the reporting perspective.\nस्पष्टीकरण (Hi): डायरेक्ट स्पीच में वक्ता की कही बात को इनवर्टेड कॉमा के अंदर ज्यों का त्यों लिखा जाता है, जबकि इनडायरेक्ट स्पीच में उसे अपने शब्दों में बदला जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'I am happy.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'I am happy.'**",
      optionsEn: ["He said that he was happy.", "He says that he is happy.", "He told that he is happy.", "He said that I am happy."],
      optionsHi: ["He said that he was happy.", "He says that he is happy.", "He told that he is happy.", "He said that I am happy."],
      answer: 0,
      exp: "Explanation (En): Present tense ('am') changes to past tense ('was') when the reporting verb ('said') is in the past tense; pronoun 'I' changes to 'he'.\nस्पष्टीकरण (Hi): रिपोर्टिंग वर्ब पास्ट टेंस ('said') में होने पर अंदर का प्रेजेंट टेंस पास्ट में बदल जाता है ('am' -> 'was'), और 'I' बदलकर 'he' हो जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **She says, 'I work hard.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **She says, 'I work hard.'**",
      optionsEn: ["She says that she works hard.", "She said that she worked hard.", "She tells that she worked hard.", "She says that I work hard."],
      optionsHi: ["She says that she works hard.", "She said that she worked hard.", "She tells that she worked hard.", "She says that I work hard."],
      answer: 0,
      exp: "Explanation (En): When the reporting verb is in the Present or Future tense ('says'), the tense inside the quotation marks does not change.\nस्पष्टीकरण (Hi): जब रिपोर्टिंग वर्ब प्रेजेंट या फ्यूचर टेंस में हो ('says'), तो इनवर्टेड कॉमा के अंदर के टेंस में कोई बदलाव नहीं होता।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **Rahul said to me, 'The sun rises in the east.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **Rahul said to me, 'The sun rises in the east.'**",
      optionsEn: ["Rahul told me that the sun rises in the east.", "Rahul told me that the sun rose in the east.", "Rahul said me that the sun had risen in the east.", "Rahul told that the sun rose in the east."],
      optionsHi: ["Rahul told me that the sun rises in the east.", "Rahul told me that the sun rose in the east.", "Rahul said me that the sun had risen in the east.", "Rahul told that the sun rose in the east."],
      answer: 0,
      exp: "Explanation (En): Universal truths, habitual facts, and scientific principles do not change their tense in indirect speech even if the reporting verb is in the past.\nस्पष्टीकरण (Hi): सार्वभौमिक सत्य (Universal Truth) और वैज्ञानिक तथ्यों के टेंस में इनडायरेक्ट बनाते वक्त कोई बदलाव नहीं किया जाता।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'I wrote a letter yesterday.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'I wrote a letter yesterday.'**",
      optionsEn: ["He said that he had written a letter the previous day.", "He said that he wrote a letter yesterday.", "He said that he has written a letter the previous day.", "He said that he had wrote a letter yesterday."],
      optionsHi: ["He said that he had written a letter the previous day.", "He said that he wrote a letter yesterday.", "He said that he has written a letter the previous day.", "He said that he had wrote a letter yesterday."],
      answer: 0,
      exp: "Explanation, (En): Simple Past tense ('wrote') changes to Past Perfect ('had written'), and 'yesterday' changes to 'the previous day'.\nस्पष्टीकरण (Hi): सिंपल पास्ट ('wrote') पास्ट परफेक्ट ('had written') में बदल जाता है, और 'yesterday' बदलकर 'the previous day' हो जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **She said to him, 'Where are you going?'**",
      qHi: "निम्नलिखित प्रश्नवाचक वाक्य को इनडायरेक्ट स्पीच में बदलें: **She said to him, 'Where are you going?'**",
      optionsEn: ["She asked him where he was going.", "She asked him where was he going.", "She told him where he is going.", "She asked him that where he was going."],
      optionsHi: ["She asked him where he was going.", "She asked him where was he going.", "She told him where he is going.", "She asked him that where he was going."],
      answer: 0,
      exp: "Explanation (En): Wh- questions retain the question word ('where'), change reporting verb to 'asked', and change word order from interrogative to declarative (subject before verb).\nस्पष्टीकरण (Hi): Wh- वाले प्रश्नों में प्रश्नसूचक शब्द वही रहता है, रिपोर्टिंग वर्ब 'asked' होती है, और वाक्य का क्रम साधारण (Subject + Verb) हो जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said to me, 'Are you coming with me?'**",
      qHi: "निम्नलिखित प्रश्नवाचक वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said to me, 'Are you coming with me?'**",
      optionsEn: ["He asked me whether (or if) I was coming with him.", "He asked me that I was coming with him.", "He told me are you coming with me.", "He asked me where I was coming."],
      optionsHi: ["He asked me whether (or if) I was coming with him.", "He asked me that I was coming with him.", "He told me are you coming with me.", "He asked me where I was coming."],
      answer: 0,
      exp: "Explanation (En): Yes/No questions in direct speech require 'if' or 'whether' in indirect speech, changing the interrogative structure to a statement.\nस्पष्टीकरण (Hi): हेल्पिंग वर्ब से शुरू होने वाले (Yes/No) प्रश्नों में इनडायरेक्ट बनाते वक्त 'if' या 'whether' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Convert the following Imperative sentence into Indirect Speech: **The teacher said to the student, 'Sit down.'**",
      qHi: "निम्नलिखित आज्ञासूचक वाक्य को इनडायरेक्ट स्पीच में बदलें: **The teacher said to the student, 'Sit down.'**",
      optionsEn: ["The teacher ordered the student to sit down.", "The teacher told the student that sit down.", "The teacher requested to sit down.", "The teacher said to sit down student."],
      optionsHi: ["The teacher ordered the student to sit down.", "The teacher told the student that sit down.", "The teacher requested to sit down.", "The teacher said to sit down student."],
      answer: 0,
      exp: "Explanation (En): Imperative sentences use reporting verbs like ordered, requested, or advised, and connect with an infinitive ('to + V1').\nस्पष्टीकरण (Hi): आज्ञासूचक वाक्यों में भाव के अनुसार ordered/advised/requested का प्रयोग होता है और वर्ब को 'to' से जोड़ा जाता है।"
    },
    {
      qEn: "Convert the following Imperative negative sentence into Indirect Speech: **The mother said to her son, 'Do not waste your time.'**",
      qHi: "निम्नलिखित नकारात्मक आज्ञासूचक वाक्य को इनडायरेक्ट स्पीच में बदलें: **The mother said to her son, 'Do not waste your time.'**",
      optionsEn: ["The mother advised her son not to waste his time.", "The mother told her son to not waste his time.", "The mother ordered her son that do not waste time.", "The mother forbade her son to not waste time."],
      optionsHi: ["The mother advised her son not to waste his time.", "The mother told her son to not waste his time.", "The mother ordered her son that do not waste time.", "The mother forbade her son to not waste time."],
      answer: 0,
      exp: "Explanation (En): Negative imperatives change 'Do not' to 'not to' (or use 'forbade' without 'not').\nस्पष्टीकरण (Hi): नेगेटिव आज्ञासूचक वाक्यों में 'Do not' बदलकर 'not to' हो जाता है।"
    },
    {
      qEn: "Convert the following Exclamatory sentence into Indirect Speech: **He said, 'Alas! I am undone.'**",
      qHi: "निम्नलिखित विस्मयादिबोधक वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'Alas! I am undone.'**",
      optionsEn: ["He exclaimed with sorrow that he was undone.", "He said that alas he was undone.", "He cried happily that he was undone.", "He exclaimed with joy that he was undone."],
      optionsHi: ["He exclaimed with sorrow that he was undone.", "He said that alas he was undone.", "He cried happily that he was undone.", "He exclaimed with joy that he was undone."],
      answer: 0,
      exp: "Explanation (En): Exclamatory sentences expressing grief use 'exclaimed with sorrow' or 'cried out in grief'.\nस्पष्टीकरण (Hi): दुःख व्यक्त करने वाले विस्मयादिबोधक वाक्यों में 'exclaimed with sorrow' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Convert the following Exclamatory sentence into Indirect Speech: **She said, 'What a beautiful painting this is!'**",
      qHi: "निम्नलिखित विस्मयादिबोधक वाक्य को इनडायरेक्ट स्पीच में बदलें: **She said, 'What a beautiful painting this is!'**",
      optionsEn: ["She exclaimed with wonder that that was a very beautiful painting.", "She said that what a beautiful painting this is.", "She told that it is a beautiful painting.", "She asked if the painting was beautiful."],
      optionsHi: ["She exclaimed with wonder that that was a very beautiful painting.", "She said that what a beautiful painting this is.", "She told that it is a beautiful painting.", "She asked if the painting was beautiful."],
      answer: 0,
      exp: "Explanation (En): Exclamatory expressions of wonder convert reporting verb to 'exclaimed with wonder/surprise' and adjust tense and demonstratives ('this' -> 'that').\nस्पष्टीकरण (Hi): आश्चर्य व्यक्त करने वाले वाक्यों में 'exclaimed with wonder' का प्रयोग होता है और 'this' बदलकर 'that' हो जाता है।"
    },
    {
      qEn: "Convert the following Optative sentence (wish/blessing) into Indirect Speech: **The hermit said to me, 'May you live long!'**",
      qHi: "इच्छा या आशीर्वाद वाले इस वाक्य को इनडायरेक्ट स्पीच में बदलें: **The hermit said to me, 'May you live long!'**",
      optionsEn: ["The hermit blessed me that I might live long.", "The hermit wished that I may live long.", "The hermit prayed for me to live long.", "The hermit said I might live long."],
      optionsHi: ["The hermit blessed me that I might live long.", "The hermit wished that I may live long.", "The hermit prayed for me to live long.", "The hermit said I might live long."],
      answer: 0,
      exp: "Explanation (En): Optative sentences expressing blessings change reporting verb to 'blessed' or 'prayed', and 'may' changes to 'might'.\nस्पष्टीकरण (Hi): आशीर्वाद या शुभकामना वाले वाक्यों (Optative) में रिपोर्टिंग वर्ब 'blessed' या 'prayed' में बदल जाती है और 'may' का 'might' हो जाता है।"
    },
    {
      qEn: "How do words expressing nearness in time and place change when converting Direct to Indirect Speech?",
      qHi: "डायरेक्ट से इनडायरेक्ट बनाते समय समय और स्थान की निकटता दर्शाने वाले शब्द (जैसे this, here, now) कैसे बदलते हैं?",
      optionsEn: ["They change to words expressing distance (e.g., this -> that, here -> there, now -> then, today -> that day)", "They remain completely unchanged", "They are deleted from the sentence entirely", "They change into antonyms"],
      optionsHi: ["वे दूरी दर्शाने वाले शब्दों में बदल जाते हैं (जैसे this -> that, here -> there, now -> then, today -> that day)", "वे अपरिवर्तित रहते हैं", "हटा दिए जाते हैं", "विलोम बन जाते हैं"],
      answer: 0,
      exp: "Explanation (En): Proximate words shift to distant counterparts: this -> that, these -> those, here -> there, now -> then, ago -> before, tomorrow -> the next day.\nस्पष्टीकरण (Hi): इनडायरेक्ट स्पीच में समय और स्थान की निकटता बताने वाले शब्द दूरी दर्शाने वाले शब्दों में बदल जाते हैं (जैसे now का then)।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'I will do it now.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'I will do it now.'**",
      optionsEn: ["He said that he would do it then.", "He said that he will do it now.", "He said that he would do it now.", "He said that he should do it then."],
      optionsHi: ["He said that he would do it then.", "He said that he will do it now.", "He said that he would do it now.", "He should do it then."],
      answer: 0,
      exp: "Explanation (En): Modal 'will' changes to 'would', and time marker 'now' changes to 'then'.\nस्पष्टीकरण (Hi): 'will' का 'would' हो जाता है और 'now' बदलकर 'then' हो जाता है।"
    },
    {
      qEn: "What is the rule regarding Pronoun changes in Direct and Indirect Speech (SON rule)?",
      qHi: "डायरेक्ट और इनडायरेक्ट स्पीच में सर्वनाम (Pronouns) बदलने का नियम (SON नियम) क्या है?",
      optionsEn: ["1st person pronouns change according to Subject of reporting verb; 2nd person change to Object; 3rd person remains No change", "1st person changes to Object; 2nd to Subject", "All pronouns remain unchanged", "All pronouns change to 3rd person"],
      optionsHi: ["1st person सर्वनाम रिपोर्टिंग वर्ब के Subject के अनुसार बदलते हैं; 2nd person Object के अनुसार; 3rd person में कोई बदलाव नहीं (No change)", "1st person Object के अनुसार बदलते हैं", "कोई सर्वनाम नहीं बदलता", "सभी 3rd person बनते हैं"],
      answer: 0,
      exp: "Explanation, (En): The classic mnemonic SON stands for 1st person -> Subject, 2nd person -> Object, 3rd person -> No change.\nस्पष्टीकरण (Hi): SON नियम के अनुसार 1st Person (I, we) Subject से, 2nd Person (you) Object से, और 3rd Person (he, she, it, they) में कोई बदलाव नहीं होता।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **She said to me, 'You are my best friend.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **She said to me, 'You are my best friend.'**",
      optionsEn: ["She told me that I was her best friend.", "She told me that you were my best friend.", "She said to me that she was my best friend.", "She told me that I am her best friend."],
      optionsHi: ["She told me that I was her best friend.", "She told me that you were my best friend.", "She said to me that she was my best friend.", "She told me that I am her best friend."],
      answer: 0,
      exp: "Explanation (En): 'You' (2nd person) changes according to the object 'me' (becoming 'I'); 'my' (1st person possessive) changes according to subject 'She' (becoming 'her').\nस्पष्टीकरण (Hi): 'You' ऑब्जेक्ट 'me' के अनुसार 'I' बन गया, और 'my' सब्जेक्ट 'She' के अनुसार 'her' बन गया।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'They are playing football.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'They are playing football.'**",
      optionsEn: ["He said that they were playing football.", "He said that they are playing football.", "He said that we were playing football.", "He said that they had been playing football."],
      optionsHi: ["He said that they were playing football.", "He said that they are playing football.", "He said that we were playing football.", "He said that they had been playing football."],
      answer: 0,
      exp: "Explanation (En): 'They' is a 3rd person pronoun, so it undergoes no change (N in SON rule); Present Continuous ('are playing') changes to Past Continuous ('were playing').\nस्पष्टीकरण (Hi): 'They' थर्ड पर्सन है इसलिए नहीं बदला, और 'are playing' बदलकर 'were playing' हो गया।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **Ram said, 'I have completed my homework.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **Ram said, 'I have completed my homework.'**",
      optionsEn: ["Ram said that he had completed his homework.", "Ram said that he has completed his homework.", "Ram said that I had completed my homework.", "Ram said that he completed his homework."],
      optionsHi: ["Ram said that he had completed his homework.", "Ram said that he has completed his homework.", "Ram said that I had completed my homework.", "Ram said that he completed his homework."],
      answer: 0,
      exp: "Explanation (En): Present Perfect ('have completed') changes to Past Perfect ('had completed').\nस्पष्टीकरण (Hi): प्रेजेंट परफेक्ट टेंस ('have completed') बदलकर पास्ट परफेक्ट ('had completed') हो जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **She said, 'If I were rich, I would help the poor.'** (Conditional clause)",
      qHi: "कॉन्डिनशनल वाक्य को इनडायरेक्ट स्पीच में बदलें: **She said, 'If I were rich, I would help the poor.'**",
      optionsEn: ["She said that if she were rich, she would help the poor.", "She said that if she had been rich, she would help the poor.", "She said that if she was rich, she will help the poor.", "She said if she was rich she helps."],
      optionsHi: ["She said that if she were rich, she would help the poor.", "She said that if she had been rich, she would help the poor.", "She said that if she was rich, she will help the poor.", "She said if she was rich she helps."],
      answer: 0,
      exp: "Explanation (En): Past subjunctive conditional clauses ('were') generally do not change their tense in indirect speech.\nस्पष्टीकरण (Hi): काल्पनिक या कंडीशनल वाक्यों (Subjunctive mood) के टेंस में इनडायरेक्ट बनाते वक्त कोई बदलाव नहीं होता।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said to me, 'Thank you.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said to me, 'Thank you.'**",
      optionsEn: ["He thanked me.", "He told me thank you.", "He said thank you to me.", "He thanked to me."],
      optionsHi: ["He thanked me.", "He told me thank you.", "He said thank you to me.", "He thanked to me."],
      answer: 0,
      exp: "Explanation (En): Expressions of gratitude like 'Thank you' convert directly into the verb form: 'He thanked me.'\nस्पष्टीकरण (Hi): 'Thank you' वाले वाक्यों को सीधे क्रिया के रूप में बदला जाता है ('He thanked me')."
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'Goodbye, my friends!'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'Goodbye, my friends!'**",
      optionsEn: ["He bade goodbye to his friends.", "He told goodbye his friends.", "He wished goodbye to his friends.", "He said goodbye to his friends."],
      optionsHi: ["He bade goodbye to his friends.", "He told goodbye his friends.", "He wished goodbye to his friends.", "He said goodbye to his friends."],
      answer: 0,
      exp: "Explanation (En): 'Goodbye' expressions use the reporting verb 'bade' (bid farewell).\nस्पष्टीकरण (Hi): विदाई वाले वाक्यों ('Goodbye') में रिपोर्टिंग वर्ब के रूप में 'bade' का प्रयोग होता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **She said, 'Let us go for a walk.'** (Proposal/Suggestion)",
      qHi: "सुझाव वाले इस वाक्य को इनडायरेक्ट स्पीच में बदलें: **She said, 'Let us go for a walk.'**",
      optionsEn: ["She suggested that they should go for a walk.", "She told that let us go for a walk.", "She requested to go for a walk.", "She proposed that we must walk."],
      optionsHi: ["She suggested that they should go for a walk.", "She told that let us go for a walk.", "She requested to go for a walk.", "She proposed that we must walk."],
      answer: 0,
      exp: "Explanation (En): 'Let us' expressions indicating a suggestion use 'suggested' or 'proposed' followed by 'that... should'.\nस्पष्टीकरण (Hi): प्रस्ताव या सुझाव ('Let us') वाले वाक्यों में 'suggested/proposed' के साथ 'should' का प्रयोग होता है।"
    },
    {
      qEn: "Convert the following Direct Speech sentence back from Indirect: **He said that he had finished his work.**",
      qHi: "इस इनडायरेक्ट वाक्य को वापस डायरेक्ट स्पीच में बदलें: **He said that he had finished his work.**",
      optionsEn: ["He said, 'I have finished my work.' (OR He said, 'I finished my work.')", "He said, 'I had finished my work.'", "He said, 'He has finished his work.'", "He said, 'I finish my work.'"],
      optionsHi: ["He said, 'I have finished my work.' (OR He said, 'I finished my work.')", "He said, 'I had finished my work.'", "He said, 'He has finished his work.'", "He said, 'I finish my work.'"],
      answer: 0,
      exp: "Explanation (En): Past Perfect ('had finished') in indirect speech reverts to either Present Perfect ('have finished') or Simple Past ('finished') in direct speech.\nस्पष्टीकरण (Hi): इनडायरेक्ट के 'had finished' को वापस डायरेक्ट में बदलते वक्त 'have finished' या सिंपल पास्ट का प्रयोग होता है।"
    },
    {
      qEn: "Why do reporting verbs change from 'said' to 'asked', 'ordered', or 'exclaimed' in Indirect Speech?",
      qHi: "इनडायरेक्ट स्पीच में रिपोर्टिंग वर्ब 'said' से बदलकर 'asked', 'ordered' या 'exclaimed' क्यों हो जाती है?",
      optionsEn: ["To accurately reflect the tone, mood, and grammatical intent of the original direct quotation (statement, question, command, or emotion)", "To make sentences intentionally longer", "Because 'said' is grammatically banned", "To confuse the reader"],
      optionsHi: ["मूल डायरेक्ट उद्धरण के स्वर, मनोभाव और व्याकरणिक उद्देश्य (कथन, प्रश्न, आदेश या भावना) को सटीक रूप से दर्शाने के लिए", "वाक्य लंबे करने के लिए", "कथन प्रतिबंधित है", "भ्रमित करने के लिए"],
      answer: 0,
      exp: "Explanation (En): The choice of reporting verb mirrors whether the speaker is asking, commanding, exclaiming, or simply stating a fact.\nस्पष्टीकरण (Hi): रिपोर्टिंग वर्ब वाक्य के भाव (जैसे पूछना, आदेश देना, आश्चर्य करना या सामान्य बात कहना) के अनुसार चुनी जाती है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **John said, 'I must leave at once.'**",
      qHi: "निम्नलिखित वाक्य को इनडायरेक्ट स्पीच में बदलें: **John said, 'I must leave at once.'**",
      optionsEn: ["John said that he had to leave at once. (OR must leave)", "John said that he must left at once.", "John said that he would have to leave.", "John said that he must has to leave."],
      optionsHi: ["John said that he had to leave at once. (OR must leave)", "John said that he must left at once.", "John said that he would have to leave.", "John said that he must has to leave."],
      answer: 0,
      exp: "Explanation, (En): 'Must' in direct speech often changes to 'had to' when expressing permanent obligation in the past.\nस्पष्टीकरण (Hi): अनिवार्यता दर्शाने वाले 'must' को इनडायरेक्ट में बदलते समय सामान्यतः 'had to' में बदल दिया जाता है।"
    },
    {
      qEn: "Convert the following sentence into Indirect Speech: **He said, 'Bravo! You played very well.'**",
      qHi: "विस्मयादिबोधक शाबाशी वाले इस वाक्य को इनडायरेक्ट स्पीच में बदलें: **He said, 'Bravo! You played very well.'**",
      optionsEn: ["He applauded him, saying that he had played very well.", "He said bravo that you played well.", "He exclaimed with sorrow at his play.", "He told that bravo you played well."],
      optionsHi: ["He applauded him, saying that he had played very well.", "He said bravo that you played well.", "He exclaimed with sorrow at his play.", "He told that bravo you played well."],
      answer: 0,
      exp: "Explanation (En): Applause or words like 'Bravo' convert using 'applauded [someone], saying that...'.\nस्पष्टीकरण (Hi): शाबाशी देने वाले शब्दों ('Bravo!') के लिए 'applauded..., saying that...' संरचना का प्रयोग होता है।"
    },
    {
      qEn: "What is the rule regarding the change of tenses when the reported speech expresses a habitual action or historical fact?",
      qHi: "यदि रिपोर्टेड स्पीच में किसी आदत (Habitual action) या ऐतिहासिक तथ्य का बोध हो, तो टेंस परिवर्तन का क्या नियम है?",
      optionsEn: ["The tense does not change, regardless of the past tense of the reporting verb", "The tense must always change to past perfect", "The tense changes to future tense", "The sentence becomes grammatically invalid"],
      optionsHi: ["रिपोर्टिंग वर्ब के पास्ट टेंस होने के बावजूद टेंस में कोई बदलाव नहीं होता", "टेंस पास्ट परफेक्ट में बदलेगा", "फ्यूचर बनेगा", "वाक्य अमान्य हो जाएगा"],
      answer: 0,
      exp: "Explanation (En): Habitual facts (e.g., 'He said, 'I get up early.' -> He said that he gets up early') remain unchanged in tense.\nस्पष्टीकरण (Hi): आदतन सत्यों और ऐतिहासिक घटनाओं के टेंस में रिपोर्टिंग वर्ब के पास्ट होने पर भी कोई परिवर्तन नहीं होता।"
    },
    {
      qEn: "Why is the mastery of Direct and Indirect Speech crucial for professional and academic English writing?",
      qHi: "व्यावसायिक और शैक्षणिक अंग्रेजी लेखन के लिए डायरेक्ट और इनडायरेक्ट स्पीच में महारत हासिल करना क्यों महत्वपूर्ण है?",
      optionsEn: ["It enables accurate summarization, dialogue reporting, journalistic attribution, and formal academic paraphrasing without altering original meaning", "It is only useful for writing comedy scripts", "It has no connection to reporting news", "It replaces all grammar rules"],
      optionsHi: ["यह मूल अर्थ को बदले बिना सटीक सारांश, संवाद रिपोर्टिंग, पत्रकारिता और औपचारिक शैक्षणिक पैराफ्रेजिंग को सक्षम बनाता है", "कॉमेडी स्क्रिप्ट के लिए", "समाचार रिपोर्टिंग से नाता नहीं", "सभी नियम बदलता है"],
      answer: 0,
      exp: "Explanation (En): Reported speech is essential for attributing quotes, summarizing interviews, and writing academic literature reviews accurately.\nस्पष्टीकरण (Hi): किसी अन्य व्यक्ति के विचारों या साक्षात्कारों को अपनी रिपोर्ट में सही ढंग से प्रस्तुत करने के लिए इनडायरेक्ट स्पीच का ज्ञान अनिवार्य है।"
    },
    {
      qEn: "How does the practice of speech transformation sharpen overall syntactic awareness and error detection?",
      qHi: "स्पीच रूपांतरण का अभ्यास कुल वाक्य रचना (Syntactic) जागरूकता और एरर-स्पॉटिंग कौशल को कैसे तेज करता है?",
      optionsEn: ["It reinforces mastery over pronoun shifts, tense backshifting, adverbial time markers, and interrogative word order rules", "It helps in typing computer codes", "It improves mathematical multiplication speed", "It has no relation to syntax"],
      optionsHi: ["यह सर्वनाम बदलाव, टेंस बैकशिफ्टिंग, समय सूचक शब्दों और प्रश्नवाचक वाक्य क्रम के नियमों पर पकड़ मजबूत करता है", "कंप्यूटर कोड टाइपिंग", "गणित गुणा गति", "सिंटैक्स से नाता नहीं"],
      answer: 0,
      exp: "Explanation (En): Converting direct and indirect sentences requires juggling multiple grammatical rules simultaneously, honing overall linguistic precision.\nस्पष्टीकरण (Hi): डायरेक्ट से इनडायरेक्ट बनाते समय एक साथ कई व्याकरणिक नियमों (प्रोनाउन, टेंस, टाइम वर्ड्स) का ध्यान रखना पड़ता है, जिससे भाषा की बारीकियों पर पकड़ मजबूत होती है।"
    },
    {
      qEn: "What is the ultimate pedagogical benefit of rigorous grammar curriculum sequencing in competitive exam preparation?",
      qHi: "प्रतियोगिता परीक्षा की तैयारी में कठोर व्याकरण पाठ्यक्रम अनुक्रमण का सर्वोच्च शैक्षणिक लाभ क्या है?",
      optionsEn: ["Building an unshakeable foundation of linguistic accuracy, ensuring error-free writing, and maximizing scoring potential across all English modules", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating vocabulary study"],
      optionsHi: ["भाषाई सटीकता की एक मजबूत नींव बनाना, त्रुटिहीन लेखन सुनिश्चित करना और सभी अंग्रेजी मॉड्यूल में स्कोरिंग क्षमता को अधिकतम करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "शब्दावली अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): A systematic grammatical approach equips candidates to tackle spotting errors, sentence improvements, and descriptive papers with absolute confidence.\nस्पष्टीकरण (Hi): व्यवस्थित व्याकरण अभ्यास से छात्र परीक्षा में एरर-स्पॉटिंग, सेंटेंस इम्प्रूवमेंट और डिस्प्रेटिव पेपर को पूरे आत्मविश्वास के साथ हल कर पाते हैं।"
    }
  ],
    "Fill in the Blanks: Prepositions, Tenses & Conjunctions": [
    {
      qEn: "Choose the correct preposition to fill in the blank: **'He is proficient ___ mathematics.'**",
      qHi: "रिक्त स्थान भरने के लिए सही प्रपोजिशन चुनें: **'He is proficient ___ mathematics.'**",
      optionsEn: ["in (में / प्रवीण होना)", "on", "at", "with"],
      optionsHi: ["in (में / दक्ष होना)", "on", "at", "with"],
      answer: 0,
      exp: "Explanation (En): The adjective 'proficient' is standardly followed by the preposition 'in' when indicating skill in a subject or field.\nस्पष्टीकरण (Hi): 'proficient' (दक्ष या कुशल) विशेषण के साथ हमेशा प्रपोजिशन 'in' का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct tense form to fill in the blank: **'She ___ a book when the doorbell rang.'**",
      qHi: "रिक्त स्थान भरने के लिए सही टेंस रूप चुनें: **'She ___ a book when the doorbell rang.'**",
      optionsEn: ["was reading (पढ़ रही थी)", "is reading", "reads", "has read"],
      optionsHi: ["was reading (पढ़ रही थी)", "is reading", "reads", "has read"],
      answer: 0,
      exp: "Explanation (En): When an ongoing past action ('was reading') is interrupted by a short action ('rang'), past continuous is used for the longer action.\nस्पष्टीकरण (Hi): जब भूतकाल में कोई काम जारी था (Past Continuous) और तभी दूसरी घटना घटी (Simple Past), तो जारी रहने वाले काम के लिए 'was reading' आएगा।"
    },
    {
      qEn: "Choose the correct conjunction to fill in the blank: **'He worked hard ___ he failed the examination.'**",
      qHi: "रिक्त स्थान भरने के लिए सही कंजंक्शन चुनें: **'He worked hard ___ he failed the examination.'**",
      optionsEn: ["yet / but (फिर भी / लेकिन)", "because", "and", "so"],
      optionsHi: ["yet / but (फिर भी / लेकिन)", "because (क्योंकि)", "and (और)", "so (इसलिए)"],
      answer: 0,
      exp: "Explanation (En): There is a contrast between working hard and failing; 'yet' or 'but' expresses this expected contradiction.\nस्पष्टीकरण (Hi): कड़ी मेहनत करने के बावजूद फेल हो जाना एक विपरीत परिस्थिति है, इसलिए यहाँ विरोधाभास दिखाने के लिए 'yet' या 'but' का प्रयोग होगा।"
    },
    {
      qEn: "Choose the correct preposition: **'The cat jumped ___ the table.'**",
      qHi: "सही प्रपोजिशन चुनें: **'The cat jumped ___ the table.'**",
      optionsEn: ["upon / onto (के ऊपर कूदना)", "in", "at", "under"],
      optionsHi: ["upon / onto (के ऊपर कूदना)", "in (में)", "at (पर)", "under (नीचे)"],
      answer: 0,
      exp: "Explanation (En): Movement from a lower position to a surface requires the preposition 'upon' or 'onto'.\nस्पष्टीकरण (Hi): जब कोई वस्तु गति करते हुए किसी सतह के ऊपर पहुंचती है, तो 'upon' या 'onto' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Choose the correct tense form: **'By next month, we ___ this project.'**",
      qHi: "सही टेंस रूप चुनें: **'By next month, we ___ this project.'**",
      optionsEn: ["will have completed (पूरा कर चुके होंगे)", "will complete", "have completed", "completed"],
      optionsHi: ["will have completed (पूरा कर चुके होंगे)", "will complete", "have completed", "completed"],
      answer: 0,
      exp: "Explanation, (En): 'By next month' indicates a deadline in the future, requiring the Future Perfect tense ('will have + V3').\nस्पष्टीकरण (Hi): 'By next month' भविष्य की एक निश्चित सीमा बताता है, जिसके लिए फ्यूचर परफेक्ट टेंस ('will have completed') उपयुक्त है।"
    },
    {
      qEn: "Choose the correct conjunction: **'Make hay ___ the sun shines.'**",
      qHi: "सही कंजंक्शन चुनें: **'Make hay ___ the sun shines.'** (अवसर का लाभ उठाएं)",
      optionsEn: ["while (जब तक / के दौरान)", "until", "unless", "because"],
      optionsHi: ["while (जब तक / के दौरान)", "until", "unless", "because"],
      answer: 0,
      exp: "Explanation (En): The proverb is 'Make hay while the sun shines', where 'while' indicates simultaneous duration.\nस्पष्टीकरण (Hi): यह प्रसिद्ध लोकोक्ति है 'Make hay while the sun shines', जिसमें समय के दौरान के अर्थ में 'while' आता है।"
    },
    {
      qEn: "Choose the correct preposition: **'She is blind ___ her son's faults.'**",
      qHi: "सही प्रपोजिशन चुनें: **'She is blind ___ her son's faults.'** (बेटे की कमियों पर आँखें मूंद लेना)",
      optionsEn: ["to (के प्रति अनदेखा करना)", "in", "of", "with"],
      optionsHi: ["to (के प्रति अनदेखा करना)", "in", "of", "with"],
      answer: 0,
      exp: "Explanation (En): 'Blind to' means ignoring or refusing to notice shortcomings, whereas 'blind in' refers to physical loss of sight.\nस्पष्टीकरण (Hi): किसी की कमियों या गलतियों को नजरअंदाज करने के अर्थ में 'blind to' का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct tense form: **'If I ___ a bird, I would fly in the sky.'**",
      qHi: "सही टेंस रूप चुनें: **'If I ___ a bird, I would fly in the sky.'**",
      optionsEn: ["were (यदि मैं होता)", "was", "am", "have been"],
      optionsHi: ["were (यदि मैं होता)", "was", "am", "have been"],
      answer: 0,
      exp: "Explanation (En): Unreal conditional sentences in the subjunctive mood use 'were' for all subjects (even singular 'I').\nस्पष्टीकरण (Hi): अवास्तविक या काल्पनिक इच्छा वाले वाक्यों (Subjunctive mood) में सभी सब्जेक्ट्स के साथ 'were' का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct conjunction: **'Walk carefully ___ you should fall.'**",
      qHi: "सही कंजंक्शन चुनें: **'Walk carefully ___ you should fall.'**",
      optionsEn: ["lest (ऐसा न हो कि)", "unless", "until", "although"],
      optionsHi: ["lest (ऐसा न हो कि)", "unless", "until", "although"],
      answer: 0,
      exp: "Explanation (En): The conjunction 'lest' is paired strictly with 'should' to indicate a negative purpose (fear of happening).\nस्पष्टीकरण (Hi): 'lest' का जोड़ा हमेशा 'should' के साथ बनता है, जिसका अर्थ 'ऐसा न हो कि' होता है।"
    },
    {
      qEn: "Choose the correct preposition: **'Divide the apples ___ the two children.'**",
      qHi: "सही प्रपोजिशन चुनें: **'Divide the apples ___ the two children.'**",
      optionsEn: ["between (दो के बीच बांटना)", "among", "amidst", "into"],
      optionsHi: ["between (दो के बीच बांटना)", "among (दो से अधिक के बीच)", "amidst", "into"],
      answer: 0,
      exp: "Explanation (En): 'Between' is used for dividing things between two parties, whereas 'among' is used for more than two.\nस्पष्टीकरण (Hi): दो लोगों या वस्तुओं के बीच बंटवारे के लिए 'between' का प्रयोग किया जाता है, जबकि दो से अधिक के लिए 'among' आता है।"
    },
    {
      qEn: "Choose the correct tense form: **'She ___ here since 2018.'**",
      qHi: "सही टेंस रूप चुनें: **'She ___ here since 2018.'**",
      optionsEn: ["has been living (रह रही है)", "is living", "lived", "was living"],
      optionsHi: ["has been living (रह रही है)", "is living", "lived", "was living"],
      answer: 0,
      exp: "Explanation (En): 'Since 2018' indicates an action starting in the past and continuing into the present, requiring Present Perfect Continuous tense.\nस्पष्टीकरण (Hi): वाक्य में 'since' के साथ समय दिया गया है जो यह दर्शाता है कि काम भूतकाल से शुरू होकर अब भी जारी है, अतः Present Perfect Continuous ('has been living') आएगा।"
    },
    {
      qEn: "Choose the correct preposition: **'He congratulated me ___ my success.'**",
      qHi: "सही प्रपोजिशन चुनें: **'He congratulated me ___ my success.'**",
      optionsEn: ["on / upon (सफलता पर बधाई देना)", "for", "at", "in"],
      optionsHi: ["on / upon (सफलता पर बधाई देना)", "for", "at", "in"],
      answer: 0,
      exp: "Explanation (En): The verb 'congratulate' takes the preposition 'on' (or 'upon') when referring to an achievement or event.\nस्पष्टीकरण (Hi): 'congratulate' क्रिया के बाद सफलता या उपलब्धि पर बधाई देने के लिए 'on' प्रपोजिशन लगता है।"
    },
    {
      qEn: "Choose the correct conjunction: **'Wait here ___ I return.'**",
      qHi: "सही कंजंक्शन चुनें: **'Wait here ___ I return.'**",
      optionsEn: ["until / till (जब तक कि)", "unless", "since", "although"],
      optionsHi: ["until / till (जब तक कि)", "unless", "since", "although"],
      answer: 0,
      exp: "Explanation (En): 'Until' or 'till' denotes time duration up to a specific point in the future.\nस्पष्टीकरण (Hi): किसी समय सीमा या कार्य के पूरा होने तक इंतजार करने के अर्थ में 'until' या 'till' का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct tense form: **'When I reached the station, the train ___.'**",
      qHi: "सही टेंस रूप चुनें: **'When I reached the station, the train ___.'**",
      optionsEn: ["had already left (पहले ही जा चुकी थी)", "has left", "left", "was leaving"],
      optionsHi: ["had already left (पहले ही जा चुकी थी)", "has left", "left", "was leaving"],
      answer: 0,
      exp: "Explanation (En): Between two past actions, the action that happened earlier uses Past Perfect ('had left'), and the later one uses Simple Past ('reached').\nस्पष्टीकरण (Hi): भूतकाल की दो घटनाओं में से जो काम पहले हुआ (गाड़ी का छूटना), उसके लिए Past Perfect ('had left') और बाद वाले के लिए Simple Past आता है।"
    },
    {
      qEn: "Choose the correct preposition: **'He is allergic ___ dust.'**",
      qHi: "सही प्रपोजिशन चुनें: **'He is allergic ___ dust.'**",
      optionsEn: ["to (से एलर्जी होना)", "from", "with", "at"],
      optionsHi: ["to (से एलर्जी होना)", "from", "with", "at"],
      answer: 0,
      exp: "Explanation, (En): The adjective 'allergic' is standardly followed by the preposition 'to'.\nस्पष्टीकरण (Hi): 'allergic' (एलर्जी होना) विशेषण के साथ हमेशा प्रपोजिशन 'to' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Choose the correct conjunction: **'He did not come to the party ___ he was ill.'**",
      qHi: "सही कंजंक्शन चुनें: **'He did not come to the party ___ he was ill.'**",
      optionsEn: ["because / since / as (क्योंकि)", "although", "unless", "yet"],
      optionsHi: ["because / since / as (क्योंकि)", "although (यद्यपि)", "unless (जब तक नहीं)", "yet (फिर भी)"],
      answer: 0,
      exp: "Explanation (En): To express the cause or reason for an action, 'because', 'since', or 'as' is used.\nस्पष्टीकरण (Hi): पार्टी में न आने का कारण बताने के लिए 'because', 'since' या 'as' का प्रयोग किया जाता है।"
    },
    {
      qEn: "Choose the correct tense form: **'Water ___ at 100 degrees Celsius.'**",
      qHi: "सही टेंस रूप चुनें: **'Water ___ at 100 degrees Celsius.'** (पानी 100 डिग्री सेल्सियस पर उबलता है)",
      optionsEn: ["boils (उबलता है)", "boiled", "is boiling", "has boiled"],
      optionsHi: ["boils (उबलता है)", "boiled", "is boiling", "has boiled"],
      answer: 0,
      exp: "Explanation (En): Scientific facts and universal truths are expressed using the Simple Present tense.\nस्पष्टीकरण (Hi): वैज्ञानिक तथ्य और सार्वभौमिक सत्य हमेशा Simple Present टेंस ('boils') में व्यक्त किए जाते हैं।"
    },
    {
      qEn: "Choose the correct preposition: **'She takes pride ___ her beauty.'**",
      qHi: "सही प्रपोजिशन चुनें: **'She takes pride ___ her beauty.'** (गर्व करना)",
      optionsEn: ["in (पर गर्व करना)", "on", "at", "with"],
      optionsHi: ["in (पर गर्व करना)", "on", "at", "with"],
      answer: 0,
      exp: "Explanation (En): The noun phrase 'take pride' is followed by the preposition 'in' (equivalent to 'pride oneself on').\nस्पष्टीकरण (Hi): 'take pride' के साथ हमेशा प्रपोजिशन 'in' का प्रयोग होता है (जबकि गर्व महसूस करने के लिए 'proud of' आता है)।"
    },
    {
      qEn: "Choose the correct conjunction: **'Work hard ___ you will fail.'**",
      qHi: "सही कंजंक्शन चुनें: **'Work hard ___ you will fail.'**",
      optionsEn: ["otherwise / or else (अन्यथा / नहीं तो)", "and", "because", "although"],
      optionsHi: ["otherwise / or else (अन्यथा / नहीं तो)", "and (और)", "because (क्योंकि)", "although (यद्यपि)"],
      answer: 0,
      exp: "Explanation (En): To indicate a negative consequence if a condition is not met, 'otherwise' or 'or else' is used.\nस्पष्टीकरण (Hi): यदि मेहनत नहीं की तो परिणाम बुरा होगा, यह चेतावनी दर्शाने के लिए 'otherwise' या 'or else' का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct tense form: **'Look! The birds ___ in the sky.'**",
      qHi: "सही टेंस रूप चुनें: **'Look! The birds ___ in the sky.'**",
      optionsEn: ["are flying ( उड़ रही हैं )", "fly", "flown", "were flying"],
      optionsHi: ["are flying (उड़ रही हैं)", "fly", "flown", "were flying"],
      answer: 0,
      exp: "Explanation (En): Interjections like 'Look!' or 'Listen!' indicate an action happening right at the moment of speech, requiring Present Continuous tense.\nस्पष्टीकरण (Hi): 'Look!' या 'Listen!' जैसे शब्दों से वर्तमान में जारी कार्य का बोध होता है, इसलिए Present Continuous ('are flying') आएगा।"
    },
    {
      qEn: "Choose the correct preposition: **'He is junior ___ me in office.'**",
      qHi: "सही प्रपोजिशन चुनें: **'He is junior ___ me in office.'**",
      optionsEn: ["to (से जूनियर)", "than", "from", "with"],
      optionsHi: ["to (से जूनियर)", "than (तुलना में)", "from", "with"],
      answer: 0,
      exp: "Explanation (En): Latin comparative adjectives ending in '-or' (junior, senior, superior, inferior) take the preposition 'to' instead of 'than'.\nस्पष्टीकरण (Hi): जिन एडजेक्टिव्स के अंत में '-or' आता है (junior, senior आदि) उनके साथ तुलना के लिए 'than' नहीं बल्कि 'to' प्रपोजिशन लगता है।"
    },
    {
      qEn: "Choose the correct conjunction: **'Hardly had I reached the station ___ the train left.'**",
      qHi: "सही कंजंक्शन चुनें: **'Hardly had I reached the station ___ the train left.'**",
      optionsEn: ["when (तभी / जैसे ही)", "than", "then", "before"],
      optionsHi: ["when (तभी / जैसे ही)", "than", "then", "before"],
      answer: 0,
      exp: "Explanation (En): The correlative conjunction pair 'Hardly... when' (or 'Scarcely... when') is standard in English grammar.\nस्पष्टीकरण (Hi): 'Hardly' या 'Scarcely' के साथ हमेशा कंजंक्शन जोड़ा 'when' का बनता है (जबकि 'No sooner' के साथ 'than' आता है)।"
    },
    {
      qEn: "Choose the correct tense form: **'She ___ her driving test last week.'**",
      qHi: "सही टेंस रूप चुनें: **'She ___ her driving test last week.'**",
      optionsEn: ["passed (पास की)", "has passed", "passes", "had passed"],
      optionsHi: ["passed (पास की)", "has passed", "passes", "had passed"],
      answer: 0,
      exp: "Explanation (En): Specific time markers in the past (like 'last week', 'yesterday', 'in 2010') require the Simple Past tense.\nस्पष्टीकरण (Hi): भूतकाल के निश्चित समय को दर्शाने वाले शब्द ('last week', 'yesterday') के साथ हमेशा Simple Past टेंस ('passed') का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct preposition: **'The police are investigating ___ the crime.'**",
      qHi: "सही प्रपोजिशन चुनें: **'The police are investigating ___ the crime.'** (जांच करना)",
      optionsEn: ["No preposition needed (यानी सीधे 'investigating the crime')", "into", "for", "at"],
      optionsHi: ["किसी प्रपोजिशन की आवश्यकता नहीं (डायरेक्ट ऑब्जेक्ट आएगा)", "into", "for", "at"],
      answer: 0,
      exp: "Explanation, (En): The verb 'investigate' is transitive and takes a direct object without requiring any intervening preposition (though 'investigate into' is a common colloquial error).\nस्पष्टीकरण (Hi): 'investigate' एक ट्रांसिटिव वर्ब है, इसलिए इसके बाद सीधा ऑब्जेक्ट आता है, बीच में 'into' लगाने की जरूरत नहीं होती।"
    },
    {
      qEn: "Choose the correct conjunction: **'Although he is poor, ___ he is honest.'**",
      qHi: "सही कंजंक्शन चुनें: **'Although he is poor, ___ he is honest.'**",
      optionsEn: ["yet / (comma) (फिर भी)", "so", "because", "therefore"],
      optionsHi: ["yet / (comma) (फिर भी)", "so (इसलिए)", "because (क्योंकि)", "therefore (अतः)"],
      answer: 0,
      exp: "Explanation (En): The conjunction 'Although' or 'Though' is paired with 'yet' (or a comma) to introduce a contrasting clause.\nस्पष्टीकरण (Hi): 'Although' या 'Though' के साथ वाक्य में विरोधाभास दिखाने के लिए 'yet' या केवल अल्पविराम (Comma) का प्रयोग होता है।"
    },
    {
      qEn: "Choose the correct tense form: **'By the time we arrived, the movie ___.'**",
      qHi: "सही टेंस रूप चुनें: **'By the time we arrived, the movie ___.'**",
      optionsEn: ["had started (शुरू हो चुकी थी)", "started", "has started", "was starting"],
      optionsHi: ["had started (शुरू हो चुकी थी)", "started", "has started", "was starting"],
      answer: 0,
      exp: "Explanation (En): When a past action ('arrived') occurred after another past action had already been completed, the earlier action uses Past Perfect ('had started').\nस्पष्टीकरण (Hi): हमारे पहुंचने से पहले फिल्म शुरू हो चुकी थी, इसलिए जो काम पहले हुआ उसके लिए Past Perfect ('had started') आएगा।"
    },
    {
      qEn: "Choose the correct preposition: **'She is angry ___ me.'**",
      qHi: "सही प्रपोजिशन चुनें: **'She is angry ___ me.'** (मुझसे गुस्सा होना)",
      optionsEn: ["with (व्यक्ति से गुस्सा होने पर)", "at", "on", "for"],
      optionsHi: ["with (व्यक्ति से गुस्सा होने पर)", "at (बात पर गुस्सा होने पर)", "on", "for"],
      answer: 0,
      exp: "Explanation (En): We are angry 'with' a person, but angry 'at' or 'about' a thing or situation.\nस्पष्टीकरण (Hi): जब किसी व्यक्ति से गुस्सा होने की बात हो तो 'angry with' आता है, और किसी बात या वस्तु पर हो तो 'angry at' आता है।"
    },
    {
      qEn: "Choose the correct conjunction: **'No sooner did I step outside ___ it started raining.'**",
      qHi: "सही कंजंक्शन चुनें: **'No sooner did I step outside ___ it started raining.'**",
      optionsEn: ["than (जैसे ही... वैसे ही)", "when", "then", "before"],
      optionsHi: ["than (जैसे ही... वैसे ही)", "when", "then", "before"],
      answer: 0,
      exp: "Explanation (En): The correlative pair for 'No sooner' is strictly 'than'.\nस्पष्टीकरण (Hi): 'No sooner' वाक्यांश के साथ हमेशा कंजंक्शन 'than' का जोड़ा बनता है।"
    },
    {
      qEn: "Why is mastering prepositions, tenses, and conjunctions crucial for cracking error-spotting and sentence-improvement questions?",
      qHi: "एरर-स्पॉटिंग और सेंटेंस इम्प्रूवमेंट प्रश्नों को हल करने के लिए प्रपोजिशन, टेंस और कंजंक्शन में महारत हासिल करना क्यों महत्वपूर्ण है?",
      optionsEn: ["They form the core structural pillars of English grammar, governing agreement, time sequence, and logical clause linkage tested in exams", "They are only useful for writing poetry", "They have no connection to formal writing", "They replace vocabulary entirely"],
      optionsHi: ["वे अंग्रेजी व्याकरण के मुख्य संरचनात्मक स्तंभ हैं, जो परीक्षाओं में परखे जाने वाले एग्रीमेंट, समय अनुक्रम और तार्किक खंड जुड़ाव को नियंत्रित करते हैं", "केवल कविता लिखने के लिए उपयोगी", "औपचारिक लेखन से नाता नहीं", "शब्दावली बदलते हैं"],
      answer: 0,
      exp: "Explanation (En): Grammatical precision in tenses, prepositions, and conjunctions eliminates the most common sources of errors in competitive English tests.\nस्पष्टीकरण (Hi): प्रतियोगी परीक्षाओं में सबसे ज्यादा एरर इन्हीं तीन अध्यायों (Tenses, Prepositions, Conjunctions) से पूछी जाती हैं, इसलिए इनकी गहरी समझ जरूरी है।"
    },
    {
      qEn: "What is the ultimate pedagogical goal of practicing comprehensive grammar fill-in-the-blank modules?",
      qHi: "व्यापक व्याकरण रिक्त स्थान भरने वाले मॉड्यूल का अभ्यास करने का सर्वोच्च शैक्षणिक लक्ष्य क्या है?",
      optionsEn: ["Developing absolute grammatical intuition, flawless sentence construction, and top-tier performance in competitive examination modules", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating vocabulary study"],
      optionsHi: ["पूर्ण व्याकरणिक अंतर्ज्ञान, त्रुटिहीन वाक्य निर्माण और प्रतियोगी परीक्षा मॉड्यूल में शीर्ष स्तर का प्रदर्शन विकसित करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "शब्दावली अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Rigorous grammar drills instill confidence, enabling aspirants to identify subtle syntactical errors instantly and score maximum marks.\nस्पष्टीकरण (Hi): इन कठोर व्याकरण अभ्यासों से छात्र में भाषाई आत्मविश्वास पैदा होता है जिससे वह परीक्षा में सूक्ष्म गलतियों को तुरंत पहचानकर अधिकतम अंक प्राप्त कर पाता है।"
    }
  ],
    "Sentence Correction & Error Spotting": [
    {
      qEn: "Identify the segment that contains a grammatical error in the following sentence: **'Neither of the two boys / were / able to solve / the difficult puzzle. / No error'**",
      qHi: "निम्नलिखित वाक्य में उस खंड की पहचान करें जिसमें व्याकरण संबंधी त्रुटि है: **'Neither of the two boys / were / able to solve / the difficult puzzle. / No error'**",
      optionsEn: ["were (सुधार: was)", "Neither of the two boys", "able to solve", "the difficult puzzle"],
      optionsHi: ["were (सुधार: was होना चाहिए)", "Neither of the two boys", "able to solve", "the difficult puzzle"],
      answer: 0,
      exp: "Explanation (En): 'Neither', 'either', 'each', and 'everyone' are singular pronouns and must take a singular verb ('was' instead of 'were').\nस्पष्टीकरण (Hi): 'Neither of' के बाद नाउन बहुवचन होता है लेकिन वर्ब हमेशा एकवचन (Singular) आती है, इसलिए 'were' की जगह 'was' होगा।"
    },
    {
      qEn: "Identify the segment with an error: **'She is senior / than me / in this office / by five years. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'She is senior / than me / in this office / by five years. / No error'**",
      optionsEn: ["than me (सुधार: to me)", "She is senior", "in this office", "by five years"],
      optionsHi: ["than me (सुधार: to me होना चाहिए)", "She is senior", "in this office", "by five years"],
      answer: 0,
      exp: "Explanation (En): Latin comparative adjectives ending in '-or' (senior, junior, superior, inferior) are followed by the preposition 'to', not 'than'.\nस्पष्टीकरण (Hi): 'senior', 'junior' जैसे शब्दों के बाद तुलना के लिए 'than' नहीं बल्कि 'to' प्रपोजिशन लगता है और 'me' सही केस है।"
    },
    {
      qEn: "Identify the segment with an error: **'One of my friends / are going / to Mumbai / next week. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'One of my friends / are going / to Mumbai / next week. / No error'**",
      optionsEn: ["are going (सुधार: is going)", "One of my friends", "to Mumbai", "next week"],
      optionsHi: ["are going (सुधार: is going होना चाहिए)", "One of my friends", "to Mumbai", "next week"],
      answer: 0,
      exp: "Explanation (En): The subject is 'One', which is singular, so it must take the singular verb 'is going' instead of 'are going'.\nस्पष्टीकरण (Hi): मुख्य सब्जेक्ट 'One' है (फ्रेंड्स नहीं), इसलिए वर्ब एकवचन 'is' आएगी।"
    },
    {
      qEn: "Identify the segment with an error: **'The furniture in this room / are / quite old / and needs replacement. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The furniture in this room / are / quite old / and needs replacement. / No error'**",
      optionsEn: ["are (सुधार: is)", "The furniture in this room", "quite old", "and needs replacement"],
      optionsHi: ["are (सुधार: is होना चाहिए)", "The furniture in this room", "quite old", "and needs replacement"],
      answer: 0,
      exp: "Explanation (En): 'Furniture', 'scenery', 'information', and 'luggage' are uncountable nouns and take singular verbs.\nस्पष्टीकरण (Hi): 'Furniture' एक अनकाउंटेबल नाउन है जो हमेशा एकवचन माना जाता है, इसलिए 'are' के स्थान पर 'is' का प्रयोग होगा।"
    },
    {
      qEn: "Identify the segment with an error: **'Hardly had I / stepped out of the house / than it began / to rain heavily. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Hardly had I / stepped out of the house / than it began / to rain heavily. / No error'**",
      optionsEn: ["than it began (सुधार: when it began)", "Hardly had I", "stepped out of the house", "to rain heavily"],
      optionsHi: ["than it began (सुधार: when it began होना चाहिए)", "Hardly had I", "stepped out of the house", "to rain heavily"],
      answer: 0,
      exp: "Explanation, (En): 'Hardly' or 'Scarcely' must be followed by the conjunction 'when' (not 'than', which goes with 'No sooner').\nस्पष्टीकरण (Hi): 'Hardly' या 'Scarcely' के साथ हमेशा 'when' का प्रयोग होता है, 'than' का नहीं।"
    },
    {
      qEn: "Identify the segment with an error: **'Each of the students / were given / a certificate / after the seminar. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Each of the students / were given / a certificate / after the seminar. / No error'**",
      optionsEn: ["were given (सुधार: was given)", "Each of the students", "a certificate", "after the seminar"],
      optionsHi: ["were given (सुधार: was given होना चाहिए)", "Each of the students", "a certificate", "after the seminar"],
      answer: 0,
      exp: "Explanation (En): 'Each' is singular and takes a singular verb ('was given' instead of 'were given').\nस्पष्टीकरण (Hi): 'Each' एकवचन है, अतः इसके साथ 'were' के स्थान पर 'was' आएगा।"
    },
    {
      qEn: "Identify the segment with an error: **'Mathematics are / a difficult subject / for many students / in high school. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Mathematics are / a difficult subject / for many students / in high school. / No error'**",
      optionsEn: ["Mathematics are (सुधार: Mathematics is)", "a difficult subject", "for many students", "in high school"],
      optionsHi: ["Mathematics are (सुधार: Mathematics is होना चाहिए)", "a difficult subject", "for many students", "in high school"],
      answer: 0,
      exp: "Explanation (En): Subjects ending in '-ics' (Mathematics, Physics, Economics) take singular verbs when referred to as a single academic discipline.\nस्पष्टीकरण (Hi): 'Mathematics' विषय का नाम है जो एकवचन माना जाता है, इसलिए 'are' की जगह 'is' होगा।"
    },
    {
      qEn: "Identify the segment with an error: **'The committee / have issued / its report / on the scam. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The committee / have issued / its report / on the scam. / No error'**",
      optionsEn: ["have issued (सुधार: has issued)", "The committee", "its report", "on the scam"],
      optionsHi: ["have issued (सुधार: has issued होना चाहिए)", "The committee", "its report", "on the scam"],
      answer: 0,
      exp: "Explanation (En): Since the committee acts as a single unified body (indicated by 'its report'), it takes a singular verb ('has').\nस्पष्टीकरण (Hi): जब कलेक्टिव नाउन एक इकाई के रूप में काम करता है और आगे 'its' का प्रयोग है, तो वर्ब भी एकवचन ('has') आएगी।"
    },
    {
      qEn: "Identify the segment with an error: **'No sooner did / the police arrive / when the thieves / fled away. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'No sooner did / the police arrive / when the thieves / fled away. / No error'**",
      optionsEn: ["when the thieves (सुधार: than the thieves)", "No sooner did", "the police arrive", "fled away"],
      optionsHi: ["when the thieves (सुधार: than the thieves होना चाहिए)", "No sooner did", "the police arrive", "fled away"],
      answer: 0,
      exp: "Explanation (En): 'No sooner' is strictly followed by the conjunction 'than' (not 'when').\nस्पष्टीकरण (Hi): 'No sooner' के साथ हमेशा कंजंक्शन 'than' आता है, 'when' का प्रयोग गलत है।"
    },
    {
      qEn: "Identify the segment with an error: **'Unless you do not work hard, / you will not / pass the examination / this year. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Unless you do not work hard, / you will not / pass the examination / this year. / No error'**",
      optionsEn: ["Unless you do not work hard (सुधार: Unless you work hard)", "you will not", "pass the examination", "this year"],
      optionsHi: ["Unless you do not work hard (सुधार: Unless you work hard होना चाहिए)", "you will not", "pass the examination", "this year"],
      answer: 0,
      exp: "Explanation (En): 'Unless' is a negative conditional word and already contains a negative meaning, so 'do not' should not be used with it.\nस्पष्टीकरण (Hi): 'Unless' खुद एक नेगेटिव शब्द है, इसलिए इसके साथ दोबारा 'do not' का प्रयोग करना सुपरफ्लुअस (अनावश्यक) और गलत है।"
    },
    {
      qEn: "Identify the segment with an error: **'The police is / investigating the murder / case very seriously / this week. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The police is / investigating the murder / case very seriously / this week. / No error'**",
      optionsEn: ["The police is (सुधार: The police are)", "investigating the murder", "case very seriously", "this week"],
      optionsHi: ["The police is (सुधार: The police are होना चाहिए)", "investigating the murder", "case very seriously", "this week"],
      answer: 0,
      exp: "Explanation (En): The noun 'police' is treated as a plural noun in English grammar and takes a plural verb ('are').\nस्पष्टीकरण (Hi): 'Police' शब्द बहुवचन (Plural) माना जाता है, इसलिए इसके साथ 'is' के स्थान पर 'are' का प्रयोग होता है।"
    },
    {
      qEn: "Identify the segment with an error: **'He is one of those men / who does not / care about / what others think. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'He is one of those men / who does not / care about / what others think. / No error'**",
      optionsEn: ["who does not (सुधार: who do not)", "He is one of those men", "care about", "what others think"],
      optionsHi: ["who does not (सुधार: who do not होना चाहिए)", "He is one of those men", "care about", "what others think"],
      answer: 0,
      exp: "Explanation (En): In 'one of those men who...', the relative pronoun 'who' refers to 'men' (plural), so the verb must be plural ('do not').\nस्पष्टीकरण (Hi): 'who' से पहले एंटीसिडेंट 'men' (बहुवचन) है, इसलिए वर्ब भी बहुवचन ('do not') आएगी।"
    },
    {
      qEn: "Identify the segment with an error: **'More than one person / was absent / from the meeting / yesterday. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'More than one person / was absent / from the meeting / yesterday. / No error'**",
      optionsEn: ["No error", "More than one person", "was absent", "from the meeting"],
      optionsHi: ["कोई त्रुटि नहीं (No error)", "More than one person", "was absent", "from the meeting"],
      answer: 0,
      exp: "Explanation (En): 'More than one' takes a singular noun and a singular verb, so 'was absent' is grammatically correct here.\nस्पष्टीकरण (Hi): 'More than one' के बाद सिंगुलर नाउन और सिंगुलर वर्ब ('was') आती है, अतः यह वाक्य पूरी तरह सही है।"
    },
    {
      qEn: "Identify the segment with an error: **'He speaks / English as if / he is / a native speaker. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'He speaks / English as if / he is / a native speaker. / No error'**",
      optionsEn: ["he is (सुधार: he were)", "He speaks", "English as if", "a native speaker"],
      optionsHi: ["he is (सुधार: he were होना चाहिए)", "He speaks", "English as if", "a native speaker"],
      answer: 0,
      exp: "Explanation (En): 'As if' or 'As though' introduces a hypothetical or unreal condition, requiring 'were' instead of 'is'.\nस्पष्टीकरण (Hi): 'As if' (मानो ऐसा हो) काल्पनिक स्थिति को दर्शाता है, जिसके साथ हमेशा 'were' का प्रयोग होता है।"
    },
    {
      qEn: "Identify the segment with an error: **'Bread and butter / are / my favourite / breakfast meal. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Bread and butter / are / my favourite / breakfast meal. / No error'**",
      optionsEn: ["are (सुधार: is)", "Bread and butter", "my favourite", "breakfast meal"],
      optionsHi: ["are (सुधार: is होना चाहिए)", "Bread and butter", "my favourite", "breakfast meal"],
      answer: 0,
      exp: "Explanation, (En): 'Bread and butter' represents a single unified dish/meal concept, taking a singular verb ('is').\nस्पष्टीकरण (Hi): 'Bread and butter' एक संयुक्त खाद्य पदार्थ (Single idea) के रूप में प्रयुक्त है, इसलिए इसके साथ एकवचन वर्ब 'is' आएगी।"
    },
    {
      qEn: "Identify the segment with an error: **'If I would have known / the truth, / I would have helped you. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'If I would have known / the truth, / I would have helped you. / No error'**",
      optionsEn: ["If I would have known (सुधार: If I had known)", "the truth", "I would have helped you", "No error"],
      optionsHi: ["If I would have known (सुधार: If I had known होना चाहिए)", "the truth", "I would have helped you", "No error"],
      answer: 0,
      exp: "Explanation (En): In third conditional sentences, the 'if' clause must use Past Perfect ('had known'), never 'would have'.\nस्पष्टीकरण (Hi): थर्ड कंडीशनल वाक्य के 'if' वाले हिस्से में कभी भी 'would have' नहीं आता, वहाँ 'had known' (Past Perfect) का प्रयोग होता है।"
    },
    {
      qEn: "Identify the segment with an error: **'The number of applicants / are increasing / rapidly every year / for this job. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The number of applicants / are increasing / rapidly every year / for this job. / No error'**",
      optionsEn: ["are increasing (सुधार: is increasing)", "The number of applicants", "rapidly every year", "for this job"],
      optionsHi: ["are increasing (सुधार: is increasing होना चाहिए)", "The number of applicants", "rapidly every year", "for this job"],
      answer: 0,
      exp: "Explanation (En): 'The number of' takes a singular verb, whereas 'A number of' takes a plural verb.\nस्पष्टीकरण (Hi): 'The number of' से वाक्य शुरू होने पर वर्ब हमेशा एकवचन ('is') होती है (जबकि 'A number of' के साथ बहुवचन होती है)।"
    },
    {
      qEn: "Identify the segment with an error: **'Open your book / at page / number twenty / and read silently. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Open your book / at page / number twenty / and read silently. / No error'**",
      optionsEn: ["No error", "Open your book", "at page", "and read silently"],
      optionsHi: ["कोई त्रुटि नहीं (No error)", "Open your book", "at page", "and read silently"],
      answer: 0,
      exp: "Explanation (En): The preposition 'at' is correctly used with page numbers ('at page 20').\nस्पष्टीकरण (Hi): पेज नंबर के साथ प्रपोजिशन 'at' का प्रयोग बिल्कुल सही है, अतः यह वाक्य त्रुटिरहित है।"
    },
    {
      qEn: "Identify the segment with an error: **'He is taller / than me / by three inches / in height. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'He is taller / than me / by three inches / in height. / No error'**",
      optionsEn: ["than me (सुधार: than I - formal grammar)", "He is taller", "by three inches", "in height"],
      optionsHi: ["than me (सुधार: than I होना चाहिए - औपचारिक व्याकरण)", "He is taller", "by three inches", "in height"],
      answer: 0,
      exp: "Explanation (En): In formal comparative structures ('He is taller than I [am]'), the subjective pronoun is preferred over the objective 'me'.\nस्पष्टीकरण (Hi): औपचारिक व्याकरण में तुलना के बाद सब्जेक्टिव केस ('than I') का प्रयोग मानक माना जाता है।"
    },
    {
      qEn: "Identify the segment with an error: **'Scarcely had we reached / the auditorium / when the play started. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Scarcely had we reached / the auditorium / when the play started. / No error'**",
      optionsEn: ["No error", "Scarcely had we reached", "the auditorium", "when the play started"],
      optionsHi: ["कोई त्रुटि नहीं (No error)", "Scarcely had we reached", "the auditorium", "when the play started"],
      answer: 0,
      exp: "Explanation (En): 'Scarcely' is correctly paired with 'when' and uses correct past perfect inversion ('had we reached').\nस्पष्टीकरण (Hi): 'Scarcely' के साथ 'when' का सही जोड़ा और पास्ट परफेक्ट का इनवर्जन प्रयोग हुआ है, अतः वाक्य सही है।"
    },
    {
      qEn: "Identify the segment with an error: **'She told to me / a very interesting story / about her childhood / in Shimla. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'She told to me / a very interesting story / about her childhood / in Shimla. / No error'**",
      optionsEn: ["She told to me (सुधार: She told me)", "a very interesting story", "about her childhood", "in Shimla"],
      optionsHi: ["She told to me (सुधार: She told me होना चाहिए)", "a very interesting story", "about her childhood", "in Shimla"],
      answer: 0,
      exp: "Explanation (En): The verb 'tell' takes a direct object without an intervening preposition (unlike 'said to').\nस्पष्टीकरण (Hi): 'tell' क्रिया के बाद सीधा ऑब्जेक्ट आता है, बीच में 'to' प्रपोजिशन नहीं लगाया जाता।"
    },
    {
      qEn: "Identify the segment with an error: **'Supposing if it rains, / what shall / we do / for shelter? / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Supposing if it rains, / what shall / we do / for shelter? / No error'**",
      optionsEn: ["Supposing if it rains (सुधार: Supposing it rains OR If it rains)", "what shall", "we do", "for shelter"],
      optionsHi: ["Supposing if it rains (सुधार: Supposing it rains या If it rains)", "what shall", "we do", "for shelter"],
      answer: 0,
      exp: "Explanation (En): 'Supposing' and 'if' mean the same thing in conditional clauses; using both together is a redundant error (superfluous).\nस्पष्टीकरण (Hi): 'Supposing' और 'if' दोनों का अर्थ एक ही होता है, इसलिए दोनों को एक साथ प्रयोग करना सुपरफ्लुअस (अनावश्यक) है।"
    },
    {
      qEn: "Identify the segment with an error: **'The scenery of Kashmir / are / breathtakingly beautiful / in autumn. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The scenery of Kashmir / are / breathtakingly beautiful / in autumn. / No error'**",
      optionsEn: ["are (सुधार: is)", "The scenery of Kashmir", "breathtakingly beautiful", "in autumn"],
      optionsHi: ["are (सुधार: is होना चाहिए)", "The scenery of Kashmir", "breathtakingly beautiful", "in autumn"],
      answer: 0,
      exp: "Explanation (En): 'Scenery' is an uncountable noun and takes a singular verb ('is').\nस्पष्टीकरण (Hi): 'Scenery' अनकाउंटेबल नाउन है, इसलिए इसके साथ एकवचन वर्ब 'is' आएगी।"
    },
    {
      qEn: "Identify the segment with an error: **'One should do / his duty / towards / one's nation. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'One should do / his duty / towards / one's nation. / No error'**",
      optionsEn: ["his duty (सुधार: one's duty)", "One should do", "towards", "one's nation"],
      optionsHi: ["his duty (सुधार: one's duty होना चाहिए)", "One should do", "towards", "one's nation"],
      answer: 0,
      exp: "Explanation (En): When the subject of a sentence is 'one', the possessive pronoun used throughout must be 'one's', not 'his' or 'her'.\nस्पष्टीकरण (Hi): यदि वाक्य का सब्जेक्ट 'one' है, तो आगे पजेसिव प्रोनाउन भी 'one's' ही आएगा, 'his' नहीं।"
    },
    {
      qEn: "Identify the segment with an error: **'He is / one of the best players / that has ever / played for this club. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'He is / one of the best players / that has ever / played for this club. / No error'**",
      optionsEn: ["that has ever (सुधार: that have ever)", "He is", "one of the best players", "played for this club"],
      optionsHi: ["that has ever (सुधार: that have ever होना चाहिए)", "He is", "one of the best players", "played for this club"],
      answer: 0,
      exp: "Explanation, (En): The relative pronoun 'that' refers to 'players' (plural), so the verb following it must be plural ('have').\nस्पष्टीकरण (Hi): 'that' का एंटीसिडेंट 'players' (बहुवचन) है, इसलिए वर्ब भी बहुवचन ('have') होगी।"
    },
    {
      qEn: "Identify the segment with an error: **'Work hard lest / you will / fail the test / tomorrow. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'Work hard lest / you will / fail the test / tomorrow. / No error'**",
      optionsEn: ["you will (सुधार: you should)", "Work hard lest", "fail the test", "tomorrow"],
      optionsHi: ["you will (सुधार: you should होना चाहिए)", "Work hard lest", "fail the test", "tomorrow"],
      answer: 0,
      exp: "Explanation (En): The conjunction 'lest' is strictly followed by the modal auxiliary 'should' (never 'will' or 'can').\nस्पष्टीकरण (Hi): 'lest' के साथ हमेशा मॉडल वर्ब 'should' आती है, 'will' का प्रयोग गलत है।"
    },
    {
      qEn: "Identify the segment with an error: **'The team / are arguing / among themselves / regarding the strategy. / No error'**",
      qHi: "त्रुटि वाले खंड की पहचान करें: **'The team / are arguing / among themselves / regarding the strategy. / No error'**",
      optionsEn: ["No error", "The team", "are arguing", "regarding the strategy"],
      optionsHi: ["कोई त्रुटि नहीं (No error)", "The team", "are arguing", "regarding the strategy"],
      answer: 0,
      exp: "Explanation (En): When members of a collective noun (team) are divided or acting individually (shown by 'among themselves'), it takes a plural verb ('are').\nस्पष्टीकरण (Hi): जब कलेक्टिव नाउन के सदस्य आपस में बंट जाते हैं (जैसा 'among themselves' से स्पष्ट है), तो बहुवचन वर्ब 'are' सही है।"
    },
    {
      qEn: "Why is practicing Sentence Correction and Error Spotting critical for competitive examinations?",
      qHi: "प्रतियोगिता परीक्षाओं के लिए सेंटेंस करेक्शन और एरर-स्पॉटिंग का अभ्यास करना क्यों अत्यंत महत्वपूर्ण है?",
      optionsEn: ["It tests comprehensive mastery over syntax, grammar rules, exceptions, and contextual application under strict exam conditions", "It is only useful for writing fairy tales", "It has no connection to professional testing", "It replaces vocabulary study entirely"],
      optionsHi: ["यह परीक्षा की कठोर परिस्थितियों के तहत सिंटैक्स, व्याकरण नियमों, अपवादों और संदर्भगत अनुप्रयोग पर व्यापक पकड़ का परीक्षण करता है", "केवल परियों की कहानियां लिखने के लिए", "व्यावसायिक परीक्षण से नाता नहीं", "शब्दावली बदलता है"],
      answer: 0,
      exp: "Explanation (En): Error spotting synthesizes all grammar rules into practical application, making it the highest-yield scoring section in English exams.\nस्पष्टीकरण (Hi): एरर-स्पॉटिंग में अंग्रेजी व्याकरण के सभी नियमों का व्यावहारिक परीक्षण होता है, जिससे प्रतियोगी परीक्षाओं में सर्वोच्च अंक प्राप्त होते हैं।"
    },
    {
      qEn: "What is the ultimate benefit of disciplined error identification training in English proficiency?",
      qHi: "अंग्रेजी दक्षता में अनुशासित त्रुटि पहचान प्रशिक्षण का सर्वोच्च लाभ क्या है?",
      optionsEn: ["Achieving intuitive grammatical correctness, pristine editing skills, and absolute confidence in complex sentence analysis", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating vocabulary study"],
      optionsHi: ["सहज व्याकरणिक शुद्धता, बेहतरीन संपादन कौशल और जटिल वाक्य विश्लेषण में पूर्ण आत्मविश्वास प्राप्त करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "शब्दावली अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Continuous error analysis refines linguistic reflexes, allowing aspirants to spot syntactical flaws instantaneously.\nस्पष्टीकरण (Hi): निरंतर त्रुटि विश्लेषण से भाषाई सजगता इतनी तेज हो जाती है कि छात्र वाक्य की अशुद्धियों को पल भर में पहचान लेते हैं।"
    },
    {
      qEn: "What is the final pedagogical objective of the comprehensive English Grammar Curriculum?",
      qHi: "व्यापक अंग्रेजी व्याकरण पाठ्यक्रम का अंतिम शैक्षणिक उद्देश्य क्या है?",
      optionsEn: ["Producing articulate, grammatically immaculate communicators equipped to excel in any professional or academic arena", "To make students memorize grammar textbooks word for word", "To eliminate all spoken dialects", "To focus exclusively on nursery rhymes"],
      optionsHi: ["स्पष्ट वक्ता और व्याकरण की दृष्टि से त्रुटिहीन संचारक तैयार करना जो किसी भी पेशेवर या शैक्षणिक क्षेत्र में उत्कृष्ट प्रदर्शन कर सकें", "पाठ्यपुस्तकों को शब्दशः रटाना", "बोलियों को खत्म करना", "नर्सरी कविताओं पर ध्यान देना"],
      answer: 0,
      exp: "Explanation (En): The overarching goal is complete linguistic mastery, empowering learners with pristine written and spoken command over English.\nस्पष्टीकरण (Hi): इस पाठ्यक्रम का मुख्य लक्ष्य छात्र को अंग्रेजी भाषा और व्याकरण में पूर्ण रूप से दक्ष और पारंगत बनाना है।"
    }
  ],
    "Sentence Rearrangement & Para Jumbles": [
    {
      qEn: "What is the primary purpose of solving **Para Jumbles / Sentence Rearrangement** questions in English tests?",
      qHi: "अंग्रेजी परीक्षाओं में **पैरा जंबल्स / वाक्य पुनर्रव्यवस्था (Sentence Rearrangement)** प्रश्नों को हल करने का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To test the reader's ability to understand logical coherence, flow, and thematic progression of a paragraph", "To test spelling memorization of isolated words", "To check handwriting speed", "To test mathematical calculation skills"],
      optionsHi: ["पाठक की तार्किक सामंजस्य, प्रवाह और किसी पैराग्राफ की वैचारिक प्रगति को समझने की क्षमता का परीक्षण करना", "अलग-थलग शब्दों की वर्तनी याद रखना", "हैंडराइटिंग गति जांचना", "गणितीय गणना कौशल का परीक्षण करना"],
      answer: 0,
      exp: "Explanation (En): Para jumbles evaluate how well a candidate can reconstruct a disorganized paragraph into a logically flowing text by recognizing transition markers, pronouns, and chronological cues.\nस्पष्टीकरण (Hi): पैरा जंबल्स यह परखते हैं कि छात्र बिखरे हुए वाक्यों को उनके तार्किक क्रम (जैसे इंट्रोडक्शन, बॉडी और कंक्लूजन) में कितनी आसानी से जोड़ सकता है।"
    },
    {
      qEn: "Which sentence usually serves as the **Opening Sentence (Fixed Starting Anchor)** in a standard Para Jumble?",
      qHi: "मानक पैरा जंबल्स में कौन सा वाक्य आमतौर पर **शुरुआती वाक्य (Opening Anchor)** के रूप में कार्य करता है?",
      optionsEn: ["An independent sentence introducing the central theme or topic without dependent pronouns or transitional words", "A sentence starting with 'However' or 'Therefore'", "A sentence ending with a question mark", "A sentence referring back to 'he' or 'they' without prior introduction"],
      optionsHi: ["एक स्वतंत्र वाक्य जो बिना किसी आश्रित सर्वनाम या योजक शब्दों के केंद्रीय विषय या टॉपिक का परिचय देता है", "जो 'However' या 'Therefore' से शुरू हो", "प्रश्नचिह्न पर समाप्त होने वाला वाक्य", "पूर्व परिचय के बिना 'he' या 'they' से शुरू होने वाला वाक्य"],
      answer: 0,
      exp: "Explanation (En): Opening sentences set the stage by introducing the subject broadly, avoiding abrupt pronouns like 'he', 'she', 'it', or transition words like 'consequently'.\nस्पष्टीकरण (Hi): शुरुआती वाक्य हमेशा स्वतंत्र होता है जो मुख्य विषय का परिचय देता है, उसमें 'he', 'they' या 'thus' जैसे शब्दों से शुरुआत नहीं होती।"
    },
    {
      qEn: "Rearrange the following sentences (A, B, C, D) into a coherent paragraph:\n(A) Education empowers individuals with knowledge and critical thinking skills.\n(B) Consequently, it plays a vital role in national development.\n(C) Furthermore, it bridges social inequalities and reduces poverty.\n(D) It is the cornerstone of personal and societal progress.",
      qHi: "निम्नलिखित वाक्यों (A, B, C, D) को एक सुसंगत पैराग्राफ में पुनर्व्यवस्थित करें:\n(A) Education empowers individuals with knowledge and critical thinking skills.\n(B) Consequently, it plays a vital role in national development.\n(C) Furthermore, it bridges social inequalities and reduces poverty.\n(D) It is the cornerstone of personal and societal progress.",
      optionsEn: ["D - A - C - B", "A - B - C - D", "B - C - A - D", "C - D - A - B"],
      optionsHi: ["D - A - C - B", "A - B - C - D", "B - C - A - D", "C - D - A - B"],
      answer: 0,
      exp: "Explanation (En): Sentence D opens with the broad thesis statement. Sentence A elaborates on how it empowers. Sentence C adds another point ('Furthermore'). Sentence B concludes with a consequence ('Consequently'). Correct flow: D-A-C-B.\nस्पष्टीकरण (Hi): वाक्य D मुख्य विषय शुरू करता है, A बताता है कि शिक्षा कैसे सशक्त करती है, C 'Furthermore' से आगे जोड़ता है, और B 'Consequently' से निष्कर्ष देता है। सही क्रम D-A-C-B है।"
    },
    {
      qEn: "What role do **Pronoun Clues** play in solving sentence rearrangement puzzles?",
      qHi: "वाक्य पुनर्रव्यवस्था पहेलियों को हल करने में **सर्वनाम संकेत (Pronoun Clues)** क्या भूमिका निभाते हैं?",
      optionsEn: ["They indicate that a noun must be introduced in a preceding sentence before pronouns like 'he', 'she', 'it', or 'they' can refer to it", "They show that sentences are completely unrelated", "They indicate the end of a paragraph always", "They mark mathematical equations"],
      optionsHi: ["वे संकेत देते हैं कि 'he', 'she', 'it' या 'they' जैसे सर्वनामों का उपयोग करने से पहले किसी पूर्व वाक्य में संज्ञा (Noun) का परिचय दिया जाना चाहिए", "वे दर्शाते हैं कि वाक्य असंबंधित हैं", "वे पैराग्राफ का अंत दर्शाते हैं", "वे गणितीय समीकरण चिह्नित करते हैं"],
      answer: 0,
      exp: "Explanation (En): Pronouns require antecedents; hence, a sentence with 'he' or 'they' can never be the opening sentence unless the proper noun was established earlier.\nस्पष्टीकरण (Hi): सर्वनाम हमेशा किसी संज्ञा के बाद आते हैं, इसलिए 'he' या 'they' वाला वाक्य कभी भी पहला वाक्य नहीं हो सकता जब तक कि उस व्यक्ति का नाम पहले न आया हो।"
    },
    {
      qEn: "What is the function of **Transition Markers** (e.g., 'however', 'meanwhile', 'on the other hand') in Para Jumbles?",
      qHi: "पैरा जंबल्स में **योजक संकेतकों (Transition Markers - जैसे 'however', 'meanwhile')** का क्या कार्य होता है?",
      optionsEn: ["They signal a shift in thought, contrast, or chronological timing, helping establish strict sentence pairs", "They indicate that the paragraph has ended", "They translate sentences into foreign languages", "They mark spelling mistakes"],
      optionsHi: ["वे विचार, विरोधाभास या कालक्रम में बदलाव का संकेत देते हैं, जिससे सख्त वाक्य जोड़े बनाने में मदद मिलती है", "वे पैराग्राफ समाप्त होने का संकेत देते हैं", "वे विदेशी भाषाओं में अनुवाद करते हैं", "वर्तनी की गलतियां चिह्नित करते हैं"],
      answer: 0,
      exp: "Explanation, (En): Transition words create logical bridges; for instance, 'however' must follow a statement that it contrasts with.\nस्पष्टीकरण (Hi): संक्रमण शब्द तार्किक पुल बनाते हैं; उदाहरण के लिए, 'however' हमेशा उस कथन के बाद आएगा जिसका वह विरोध या खंडन करता है।"
    },
    {
      qEn: "Rearrange the following sentences (P, Q, R, S) into a logical sequence:\n(P) Artificial Intelligence is transforming industries globally.\n(Q) However, this rapid advancement raises ethical and employment concerns.\n(R) Machines can now perform complex tasks previously reserved for humans.\n(S) Therefore, regulatory frameworks must evolve to balance innovation with safety.",
      qHi: "निम्नलिखित वाक्यों (P, Q, R, S) को तार्किक क्रम में व्यवस्थित करें:\n(P) Artificial Intelligence is transforming industries globally.\n(Q) However, this rapid advancement raises ethical and employment concerns.\n(R) Machines can now perform complex tasks previously reserved for humans.\n(S) Therefore, regulatory frameworks must evolve to balance innovation with safety.",
      optionsEn: ["P - R - Q - S", "Q - P - R - S", "R - P - Q - S", "S - P - R - Q"],
      optionsHi: ["P - R - Q - S", "Q - P - R - S", "R - P - Q - S", "S - P - R - Q"],
      answer: 0,
      exp: "Explanation (En): P introduces AI transformation. R explains how (machines performing complex tasks). Q introduces a counter-point with 'However'. S concludes with a recommendation ('Therefore'). Correct order: P-R-Q-S.\nस्पष्टीकरण (Hi): P विषय शुरू करता है, R उसकी व्याख्या करता है, Q 'However' से चुनौती बताता है, और S 'Therefore' से निष्कर्ष देता है।"
    },
    {
      qEn: "How does identifying **Chronological and Cause-Effect Cues** help in sentence rearrangement?",
      qHi: "**कालक्रम और कारण-प्रभाव संकेत (Chronological and Cause-Effect Cues)** की पहचान करने से वाक्य पुनर्रव्यवस्था में कैसे मदद मिलती है?",
      optionsEn: ["They establish the natural timeline of events (past, present, future) or link actions to their direct consequences", "They check computer keyboard functionality", "They format paragraphs into poetry", "They translate English text into numbers"],
      optionsHi: ["वे घटनाओं की प्राकृतिक समयरेखा (भूत, वर्तमान, भविष्य) स्थापित करते हैं या कार्यों को उनके प्रत्यक्ष परिणामों से जोड़ते हैं", "कंप्यूटर कीबोर्ड कार्यक्षमता जांचते हैं", "पैराग्राफ को कविता बनाते हैं", "अंग्रेजी पाठ को संख्याओं में बदलते हैं"],
      answer: 0,
      exp: "Explanation (En): Events must follow logical sequences (e.g., 'The cause happened, therefore the effect occurred'), making cause-effect pairs vital for pairing sentences.\nस्पष्टीकरण (Hi): घटनाओं का एक तार्किक क्रम होता है (पहले कारण फिर प्रभाव), जिससे जोड़े बनाने में आसानी होती है।"
    },
    {
      qEn: "Rearrange the sentences (1, 2, 3, 4) into a coherent sequence:\n(1) Climate change poses an unprecedented threat to global ecosystems.\n(2) Governments and citizens must unite to reduce carbon emissions.\n(3) Melting glaciers and rising sea levels are clear indicators of this crisis.\n(4) Without immediate action, irreversible damage will occur.",
      qHi: "वाक्यों (1, 2, 3, 4) को सुसंगत क्रम में व्यवस्थित करें:\n(1) Climate change poses an unprecedented threat to global ecosystems.\n(2) Governments and citizens must unite to reduce carbon emissions.\n(3) Melting glaciers and rising sea levels are clear indicators of this crisis.\n(4) Without immediate action, irreversible damage will occur.",
      optionsEn: ["1 - 3 - 4 - 2", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 3 - 2 - 1"],
      optionsHi: ["1 - 3 - 4 - 2", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 3 - 2 - 1"],
      answer: 0,
      exp: "Explanation (En): Sentence 1 introduces the theme (climate change threat). Sentence 3 gives indicators ('this crisis' refers to climate change). Sentence 4 warns of inaction. Sentence 2 concludes with a call to action. Order: 1-3-4-2.\nस्पष्टीकरण (Hi): 1 विषय शुरू करता है, 3 उसके लक्षण बताता है, 4 चेतावनी देता है, और 2 समाधान सुझाता है।"
    },
    {
      qEn: "What is the significance of **Definite and Indefinite Articles ('A/An' vs 'The')** in identifying sentence order?",
      qHi: "वाक्य क्रम की पहचान करने में **निश्चित और अनिश्चित आर्टिकल ('A/An' बनाम 'The')** का क्या महत्व है?",
      optionsEn: ["Indefinite articles ('A/An') introduce a noun for the first time, whereas the definite article ('The') refers back to a previously introduced noun", "'The' is always used in the opening sentence of any paragraph", "Articles have zero grammatical relevance in sentence rearrangement", "'A' is only used for plural nouns"],
      optionsHi: ["अनिश्चित आर्टिकल ('A/An') पहली बार किसी संज्ञा का परिचय देते हैं, जबकि निश्चित आर्टिकल ('The') पहले से परिचित संज्ञा की ओर संकेत करता है", "'The' हमेशा शुरुआती वाक्य में आता है", "आर्टिकल का कोई महत्व नहीं है", "'A' बहुवचन के लिए है"],
      answer: 0,
      exp: "Explanation (En): A noun is introduced with 'a' or 'an' first, and subsequent references to it use 'the'. This rule helps sequence sentences containing that noun.\nस्पष्टीकरण (Hi): नियम के अनुसार किसी वस्तु का जिक्र पहली बार 'a/an' से होता है और बाद में उसी वस्तु के लिए 'the' का प्रयोग होता है।"
    },
    {
      qEn: "Rearrange the sentences (W, X, Y, Z) into a logical paragraph:\n(W) A stray dog wandered into the courtyard.\n(X) The terrified animal barked nervously at the unfamiliar surroundings.\n(Y) It looked thin and exhausted after a long journey.\n(Z) Soon, a kind neighbor offered it some food and water.",
      qHi: "वाक्यों (W, X, Y, Z) को तार्किक पैराग्राफ में व्यवस्थित करें:\n(W) A stray dog wandered into the courtyard.\n(X) The terrified animal barked nervously at the unfamiliar surroundings.\n(Y) It looked thin and exhausted after a long journey.\n(Z) Soon, a kind neighbor offered it some food and water.",
      optionsEn: ["W - Y - X - Z", "X - W - Y - Z", "Y - W - X - Z", "Z - W - X - Y"],
      optionsHi: ["W - Y - X - Z", "X - W - Y - Z", "Y - W - X - Z", "Z - W - X - Y"],
      answer: 0,
      exp: "Explanation (En): W introduces the dog ('A stray dog'). Y describes its condition ('It looked thin'). X describes its reaction ('The terrified animal'). Z concludes with a resolution. Order: W-Y-X-Z.\nस्पष्टीकरण (Hi): W कुत्ते का आगमन बताता है, Y उसकी शारीरिक हालत बताता है, X उसका डर दर्शाता है, और Z पड़ोसी द्वारा मदद का जिक्र करता है।"
    },
    {
      qEn: "How do **Concluding Sentences** differ from opening sentences in paragraph structure?",
      qHi: "**निष्कर्ष वाले वाक्य (Concluding Sentences)** पैराग्राफ संरचना में शुरुआती वाक्यों से किस प्रकार भिन्न होते हैं?",
      optionsEn: ["Concluding sentences summarize the main argument, offer a final thought, or provide a resolution, often signaled by words like 'thus', 'therefore', or 'in conclusion'", "Concluding sentences always introduce brand new characters or unlinked ideas", "Concluding sentences are written in a foreign language", "Concluding sentences contain question marks only"],
      optionsHi: ["निष्कर्ष वाले वाक्य मुख्य तर्क का सारांश देते हैं या अंतिम विचार प्रस्तुत करते हैं, जो अक्सर 'thus', 'therefore' या 'in conclusion' जैसे शब्दों से शुरू होते हैं", "वे नए और असंबंधित विचार लाते हैं", "वे विदेशी भाषा में होते हैं", "उनमें केवल प्रश्नचिह्न होते हैं"],
      answer: 0,
      exp: "Explanation (En): A concluding sentence wraps up the paragraph logically, leaving the reader with a sense of closure, unlike opening hooks.\nस्पष्टीकरण (Hi): निष्कर्ष वाक्य पैराग्राफ को बांधते हैं और 'therefore' या 'in conclusion' जैसे शब्दों के साथ समापन की भावना देते हैं।"
    },
    {
      qEn: "Rearrange the sentences (A, B, C, D) into a meaningful sequence:\n(A) In conclusion, reading books is an unmatched habit for mental growth.\n(B) Furthermore, it expands vocabulary and sharpens analytical thinking.\n(C) Books open doors to infinite worlds of imagination.\n(D) They provide profound insights into human experiences.",
      qHi: "वाक्यों (A, B, C, D) को सार्थक क्रम में पुनर्व्यवस्थित करें:\n(A) In conclusion, reading books is an unmatched habit for mental growth.\n(B) Furthermore, it expands vocabulary and sharpens analytical thinking.\n(C) Books open doors to infinite worlds of imagination.\n(D) They provide profound insights into human experiences.",
      optionsEn: ["C - D - B - A", "A - B - C - D", "B - C - D - A", "D - C - A - B"],
      optionsHi: ["C - D - B - A", "A - B - C - D", "B - C - D - A", "D - C - A - B"],
      answer: 0,
      exp: "Explanation (En): C opens the paragraph about books. D elaborates ('They provide profound insights'). B adds another benefit ('Furthermore'). A concludes ('In conclusion'). Order: C-D-B-A.\nस्पष्टीकरण (Hi): C किताबों का परिचय देता है, D उनकी विशेषता बताता है, B 'Furthermore' से अगला लाभ जोड़ता है, और A 'In conclusion' से निष्कर्ष निकालता है।"
    },
    {
      qEn: "What is the importance of recognizing **Parallelism and Sentence Structure Matching** in rearrangement questions?",
      qHi: "पुनर्व्यवव्यवस्था प्रश्नों में **समानांतरता और वाक्य संरचना मिलान (Parallelism)** को पहचानने का क्या महत्व है?",
      optionsEn: ["It helps link sentences that share grammatical forms, lists, or parallel thematic phrasing", "It checks computer printer ink levels", "It measures internet downloading bandwidth", "It identifies spelling typos in single words"],
      optionsHi: ["यह उन वाक्यों को जोड़ने में मदद करता है जो व्याकरणिक रूपों, सूचियों या समानांतर वैचारिक वाक्यांशों को साझा करते हैं", "यह प्रिंटर इंक जांचता है", "बैंडविड्थ मापता है", "वर्तनी की त्रुटियां ढूंढता है"],
      answer: 0,
      exp: "Explanation (En): Sentences exhibiting parallel grammatical structures often follow one another directly in lists or contrasting points.\nस्पष्टीकरण (Hi): एक जैसी व्याकरणिक संरचना या सूचियों वाले वाक्य अक्सर एक-दूसरे के तुरंत बाद क्रम में आते हैं।"
    },
    {
      qEn: "Rearrange the sentences (1, 2, 3, 4) into a logical flow:\n(1) Solar energy is clean, renewable, and abundant.\n(2) However, high initial installation costs remain a barrier for many households.\n(3) Despite this challenge, technological advancements are making solar panels more affordable.\n(4) Many nations are heavily investing in solar power farms.",
      qHi: "वाक्यों (1, 2, 3, 4) को तार्किक प्रवाह में व्यवस्थित करें:\n(1) Solar energy is clean, renewable, and abundant.\n(2) However, high initial installation costs remain a barrier for many households.\n(3) Despite this challenge, technological advancements are making solar panels more affordable.\n(4) Many nations are heavily investing in solar power farms.",
      optionsEn: ["1 - 4 - 2 - 3", "2 - 1 - 3 - 4", "3 - 2 - 1 - 4", "4 - 3 - 2 - 1"],
      optionsHi: ["1 - 4 - 2 - 3", "2 - 1 - 3 - 4", "3 - 2 - 1 - 4", "4 - 3 - 2 - 1"],
      answer: 0,
      exp: "Explanation (En): 1 introduces solar energy benefits. 4 shows nations investing in it. 2 introduces a drawback with 'However'. 3 resolves the drawback ('Despite this challenge'). Order: 1-4-2-3.\nस्पष्टीकरण (Hi): 1 सौर ऊर्जा के लाभ बताता है, 4 देशों द्वारा निवेश का जिक्र करता है, 2 'However' से बाधा बताता है, और 3 'Despite this challenge' से समाधान देता है।"
    },
    {
      qEn: "How do **Time and Place Markers** (e.g., 'meanwhile', 'subsequently', 'in 1947', 'there') guide sentence ordering?",
      qHi: "**समय और स्थान सूचक शब्द (जैसे 'meanwhile', 'subsequently', 'in 1947')** वाक्य क्रम तय करने में कैसे मार्गदर्शन करते हैं?",
      optionsEn: ["They provide chronological anchors that dictate the sequence in which historical events or parallel actions occurred", "They indicate spelling errors", "They serve as paragraph title headings", "They mark mathematical formulas"],
      optionsHi: ["वे कालानुक्रमिक आधार प्रदान करते हैं जो उस क्रम को तय करते हैं जिसमें ऐतिहासिक घटनाएं या समानांतर कार्य हुए थे", "वे वर्तनी त्रुटियां दर्शाते हैं", "शीर्षक बनाते हैं", "गणितीय सूत्र चिह्नित करते हैं"],
      answer: 0,
      exp: "Explanation, (En): Chronological markers ('first', 'then', 'subsequently', 'finally') establish strict timelines that cannot be reversed.\nस्पष्टीकरण (Hi): समय बताने वाले शब्द (जैसे 'first', 'then', 'subsequently') घटनाओं का एक अटल क्रम तय करते हैं जिसे बदला नहीं जा सकता।"
    },
    {
      qEn: "Rearrange the sentences (P, Q, R, S) into a meaningful paragraph:\n(P) First, gather all necessary ingredients and preheat the oven.\n(Q) Baking a delicious cake requires careful attention to measurements.\n(R) Finally, let it cool before icing and serving.\n(S) Next, mix the flour, sugar, and butter thoroughly in a bowl.",
      qHi: "वाक्यों (P, Q, R, S) को सार्थक पैराग्राफ में व्यवस्थित करें:\n(P) First, gather all necessary ingredients and preheat the oven.\n(Q) Baking a delicious cake requires careful attention to measurements.\n(R) Finally, let it cool before icing and serving.\n(S) Next, mix the flour, sugar, and butter thoroughly in a bowl.",
      optionsEn: ["Q - P - S - R", "P - Q - S - R", "R - S - P - Q", "S - P - Q - R"],
      optionsHi: ["Q - P - S - R", "P - Q - S - R", "R - S - P - Q", "S - P - Q - R"],
      answer: 0,
      exp: "Explanation (En): Q introduces the topic (baking a cake). P gives the first step ('First'). S gives the next step ('Next'). R gives the final step ('Finally'). Order: Q-P-S-R.\nस्पष्टीकरण (Hi): Q मुख्य विषय बताता है, P पहला चरण ('First') बताता है, S अगला चरण ('Next') बताता है, और R अंतिम चरण ('Finally') बताता है।"
    },
    {
      qEn: "What is the danger of relying solely on guessing without logical linkage in Para Jumbles?",
      qHi: "पैरा जंबल्स में तार्किक संबंधों के बिना केवल अनुमान लगाने पर आधारित होने का क्या खतरा होता है?",
      optionsEn: ["It leads to high negative marking and incorrect sequencing because distractors are specifically designed to mimic plausible false flows", "It results in automatic bonus marks", "It changes test paper formatting", "It has zero impact on exam scores"],
      optionsHi: ["इससे भारी नेगेटिव मार्किंग और गलत अनुक्रमण होता है क्योंकि भ्रामक विकल्प विशेष रूप से झूठे प्रवाह की नकल करने के लिए डिजाइन किए जाते हैं", "स्वचालित बोनस अंक मिलते हैं", "टेस्ट पेपर फॉर्मेट बदलता है", "कोई प्रभाव नहीं पड़ता"],
      answer: 0,
      exp: "Explanation (En): Examiners design multiple-choice options with close distractors; only strict grammatical and logical linkage ensures the correct answer.\nस्पष्टीकरण (Hi): परीक्षा में विकल्प बहुत नजदीकी भ्रम पैदा करने वाले होते हैं, इसलिए बिना लॉजिक के तुक्का लगाने पर गलत होने की संभावना सबसे अधिक होती है।"
    },
    {
      qEn: "Rearrange the sentences (1, 2, 3, 4) into a cohesive text:\n(1) Regular physical activity boosts cardiovascular health and mental well-being.\n(2) Despite these undeniable benefits, many people lead sedentary lifestyles.\n(3) Public health campaigns therefore urge citizens to incorporate daily exercise.\n(4) This lack of physical movement contributes to rising obesity rates.",
      qHi: "वाक्यों (1, 2, 3, 4) को सुसंगत पाठ में व्यवस्थित करें:\n(1) Regular physical activity boosts cardiovascular health and mental well-being.\n(2) Despite these undeniable benefits, many people lead sedentary lifestyles.\n(3) Public health campaigns therefore urge citizens to incorporate daily exercise.\n(4) This lack of physical movement contributes to rising obesity rates.",
      optionsEn: ["1 - 2 - 4 - 3", "2 - 1 - 4 - 3", "3 - 4 - 1 - 2", "4 - 1 - 2 - 3"],
      optionsHi: ["1 - 2 - 4 - 3", "2 - 1 - 4 - 3", "3 - 4 - 1 - 2", "4 - 1 - 2 - 3"],
      answer: 0,
      exp: "Explanation (En): 1 introduces the benefits of exercise. 2 contrasts with 'Despite these undeniable benefits... sedentary lifestyles'. 4 links to sedentary lifestyles ('This lack of physical movement'). 3 concludes with a campaign solution ('therefore'). Order: 1-2-4-3.\nस्पष्टीकरण (Hi): 1 व्यायाम के लाभ बताता है, 2 इसके विपरीत सुस्त जीवनशैली की बात करता है, 4 उस कमी के प्रभाव (मोटापा) बताता है, और 3 'therefore' से समाधान देता है।"
    },
    {
      qEn: "How do **Demonstrative Pronouns** (e.g., 'this', 'that', 'these', 'those') assist in sentence pairing?",
      qHi: "**निश्चयवाचक सर्वनाम (जैसे 'this', 'that', 'these', 'those')** वाक्य जोड़े बनाने में कैसे सहायता करते हैं?",
      optionsEn: ["They must refer back to a specific noun or concept mentioned immediately in the preceding sentence", "They always mark the absolute ending of any paragraph", "They are used exclusively for mathematical numbers", "They indicate spelling errors"],
      optionsHi: ["वे ठीक पिछले वाक्य में उल्लेखित किसी विशिष्ट संज्ञा या अवधारणा को संदर्भित करते हैं", "वे हमेशा पैराग्राफ का अंत दर्शाते हैं", "गणितीय संख्याओं के लिए हैं", "वर्तनी त्रुटियां दर्शाते हैं"],
      answer: 0,
      exp: "Explanation (En): Words like 'this policy' or 'these results' require the policy or results to have been explicitly defined in the sentence directly preceding them.\nस्पष्टीकरण (Hi): 'this policy' या 'these results' जैसे शब्दों का मतलब है कि वह पॉलिसी या परिणाम उससे ठीक पहले वाले वाक्य में परिभाषित किए गए होंगे।"
    },
    {
      qEn: "Rearrange the sentences (A, B, C, D) into a logical paragraph:\n(A) The government recently launched a massive afforestation drive.\n(B) Environmentalists have warmly welcomed this proactive initiative.\n(C) Millions of saplings will be planted across barren hillsides.\n(D) Such measures are critical for combating worsening climate change.",
      qHi: "वाक्यों (A, B, C, D) को तार्किक पैराग्राफ में व्यवस्थित करें:\n(A) The government recently launched a massive afforestation drive.\n(B) Environmentalists have warmly welcomed this proactive initiative.\n(C) Millions of saplings will be planted across barren hillsides.\n(D) Such measures are critical for combating worsening climate change.",
      optionsEn: ["A - C - B - D", "B - A - C - D", "C - A - B - D", "D - A - C - B"],
      optionsHi: ["A - C - B - D", "B - A - C - D", "C - A - B - D", "D - A - C - B"],
      answer: 0,
      exp: "Explanation (En): A introduces the initiative (afforestation drive). C explains what it entails ('Millions of saplings will be planted'). B mentions environmentalist reaction ('this proactive initiative' refers to A). D concludes with broader significance ('Such measures'). Order: A-C-B-D.\nस्पष्टीकरण (Hi): A अभियान शुरू करता है, C उसकी डिटेल देता है, B पर्यावरणविदों की प्रतिक्रिया देता है, और D इसके महत्व को समझाता है।"
    },
    {
      qEn: "What is the strategic value of identifying the **Theme or Core Subject** first in Para Jumbles?",
      qHi: "पैरा जंबल्स में सबसे पहले **थीम या मुख्य विषय (Core Subject)** की पहचान करने का रणनीतिक मूल्य क्या है?",
      optionsEn: ["It helps filter out irrelevant sentence options and pinpoints the exact introductory anchor sentence", "It translates paragraphs into foreign languages", "It checks printer ink cartridge levels", "It calculates mathematics equations"],
      optionsHi: ["यह अप्रासंगिक वाक्य विकल्पों को छांटने में मदद करता है और सटीक शुरुआती एंकर वाक्य को इंगित करता है", "विदेशी भाषा में अनुवाद करता है", "प्रिंटर इंक जांचता है", "गणितीय समीकरण हल करता है"],
      answer: 0,
      exp: "Explanation (En): Knowing the central theme prevents candidates from getting misled by intermediate sub-points and directs focus to the overarching narrative arc.\nस्पष्टीकरण (Hi): मुख्य विषय पता होने से हम भ्रामक वाक्यों में नहीं उलझते और सीधे सही शुरुआत की पहचान कर पाते हैं।"
    },
    {
      qEn: "Rearrange the sentences (1, 2, 3, 4) into a cohesive paragraph:\n(1) Space exploration has expanded humanity's scientific horizons tremendously.\n(2) Yet, it requires massive financial investments that could otherwise address terrestrial poverty.\n(3) Proponents argue that the technological spin-offs justify every single dollar spent.\n(4) This debate over space funding remains a contentious global issue.",
      qHi: "वाक्यों (1, 2, 3, 4) को सुसंगत पैराग्राफ में व्यवस्थित करें:\n(1) Space exploration has expanded humanity's scientific horizons tremendously.\n(2) Yet, it requires massive financial investments that could otherwise address terrestrial poverty.\n(3) Proponents argue that the technological spin-offs justify every single dollar spent.\n(4) This debate over space funding remains a contentious global issue.",
      optionsEn: ["1 - 2 - 3 - 4", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 1 - 2 - 3"],
      optionsHi: ["1 - 2 - 3 - 4", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 1 - 2 - 3"],
      answer: 0,
      exp: "Explanation (En): 1 introduces space exploration benefit. 2 introduces a counter-point ('Yet'). 3 gives proponents' defense. 4 concludes with 'This debate'. Order: 1-2-3-4 (Note: already in natural order for testing coherence).\nस्पष्टीकरण (Hi): 1 अंतरिक्ष अन्वेषण के लाभ बताता है, 2 विरोध का बिंदु रखता है, 3 समर्थकों का तर्क देता है, और 4 इस पूरी बहस का निष्कर्ष देता है।"
    },
    {
      qEn: "How do **Abbreviation and Full Form Rules** help in establishing sentence pairs?",
      qHi: "**संक्षिप्त रूप और पूर्ण रूप के नियम (Abbreviation and Full Form Rules)** वाक्य जोड़े बनाने में कैसे मदद करते हैं?",
      optionsEn: ["The full form of an organization or term must always appear in the text before its abbreviated acronym can be used in subsequent sentences", "Acronyms always appear before full names", "Abbreviations are never allowed in English exams", "Acronyms represent mathematics formulas"],
      optionsHi: ["किसी संगठन या शब्द का पूर्ण रूप हमेशा पाठ में पहले आना चाहिए, इससे पहले कि बाद के वाक्यों में उसके संक्षिप्त रूप का उपयोग किया जा सके", "संक्षिप्त नाम हमेशा पहले आते हैं", "अनुमत नहीं हैं", "गणितीय सूत्र हैं"],
      answer: 0,
      exp: "Explanation (En): If a paragraph mentions both 'World Health Organization' and 'WHO', the full form sentence must precede the acronym sentence.\nस्पष्टीकरण (Hi): यदि पैराग्राफ में किसी संस्था का पूरा नाम और शॉर्ट फॉर्म दोनों हैं, तो पूरा नाम वाला वाक्य हमेशा शॉर्ट फॉर्म वाले वाक्य से पहले आएगा।"
    },
    {
      qEn: "Rearrange the sentences (P, Q, R, S) into a logical sequence:\n(P) The World Health Organization (WHO) declared it a global health emergency.\n(Q) A novel virus began spreading rapidly across international borders.\n(R) Governments responded by implementing strict lockdowns and travel bans.\n(S) Scientists worked tirelessly around the clock to develop effective vaccines.",
      qHi: "वाक्यों (P, Q, R, S) को तार्किक क्रम में व्यवस्थित करें:\n(P) The World Health Organization (WHO) declared it a global health emergency.\n(Q) A novel virus began spreading rapidly across international borders.\n(R) Governments responded by implementing strict lockdowns and travel bans.\n(S) Scientists worked tirelessly around the clock to develop effective vaccines.",
      optionsEn: ["Q - P - R - S", "P - Q - R - S", "R - Q - P - S", "S - P - Q - R"],
      optionsHi: ["Q - P - R - S", "P - Q - R - S", "R - Q - P - S", "S - P - Q - R"],
      answer: 0,
      exp: "Explanation (En): Q starts with the event ('A novel virus began spreading'). P follows with WHO declaration ('declared it'). R shows government response. S shows scientific response. Order: Q-P-R-S.\nस्पष्टीकरण (Hi): Q वायरस के फैलने की शुरुआत बताता है, P डब्ल्यूएचओ की घोषणा बताता है, R सरकारों की प्रतिक्रिया दिखाता है, और S वैज्ञानिकों का काम।"
    },
    {
      qEn: "What is the strategic benefit of eliminating extreme or outlier sentences first during Para Jumble solving?",
      qHi: "पैरा जंबल्स को हल करते समय सबसे पहले अत्यधिक या बाहरी (Outlier) वाक्यों को हटाने का रणनीतिक लाभ क्या है?",
      optionsEn: ["It narrows down the pool of active choices and isolates core sequential anchors faster", "It increases total test time unnecessarily", "It deletes the entire exam question paper", "It has zero impact on accuracy"],
      optionsHi: ["यह सक्रिय विकल्पों के दायरे को सीमित करता है और मुख्य अनुक्रमिक एंकरों को तेजी से अलग करता है", "अनावश्यक रूप से समय बढ़ाता है", "प्रश्नपत्र डिलीट करता है", "कोई प्रभाव नहीं पड़ता"],
      answer: 0,
      exp: "Explanation (En): Eliminating obvious conclusions or mismatched thematic sentences first simplifies the remaining puzzle pieces.\nस्पष्टीकरण (Hi): स्पष्ट निष्कर्षों या बेमेल विषयों वाले वाक्यों को पहले ही छांट देने से बाकी बचे पहेली के टुकड़ों को जोड़ना आसान हो जाता है।"
    },
    {
      qEn: "Rearrange the sentences (1, 2, 3, 4) into a cohesive paragraph:\n(1) Digital libraries have revolutionized how students and researchers access academic literature.\n(2) Physical textbooks are increasingly being supplemented by e-books and online journals.\n(3) This digital transition offers unprecedented convenience and instantaneous global connectivity.\n(4) However, issues regarding digital archiving and copyright laws still persist.",
      qHi: "वाक्यों (1, 2, 3, 4) को सुसंगत पैराग्राफ में व्यवस्थित करें:\n(1) Digital libraries have revolutionized how students and researchers access academic literature.\n(2) Physical textbooks are increasingly being supplemented by e-books and online journals.\n(3) This digital transition offers unprecedented convenience and instantaneous global connectivity.\n(4) However, issues regarding digital archiving and copyright laws still persist.",
      optionsEn: ["1 - 2 - 3 - 4", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 3 - 2 - 1"],
      optionsHi: ["1 - 2 - 3 - 4", "2 - 1 - 3 - 4", "3 - 1 - 2 - 4", "4 - 3 - 2 - 1"],
      answer: 0,
      exp: "Explanation (En): 1 introduces digital libraries revolution. 2 gives context of physical books being supplemented. 3 links with 'This digital transition'. 4 introduces a challenge with 'However'. Order: 1-2-3-4 (naturally cohesive sequence).\nस्पष्टीकरण (Hi): 1 डिजिटल लाइब्रेरी की क्रांति बताता है, 2 फिजिकल किताबों के पूरक के रूप में ई-बुक्स बताता है, 3 'This digital transition' से जोड़ता है, और 4 'However' से कॉपीराइट की समस्या बताता है।"
    },
    {
      qEn: "Why is mastering Para Jumbles and Sentence Rearrangement essential for competitive English testing?",
      qHi: "प्रतियोगिता परीक्षाओं के लिए पैरा जंबल्स और वाक्य पुनर्रव्यवस्था में महारत हासिल करना क्यों आवश्यक है?",
      optionsEn: ["They test high-level cognitive reading, structural logic, and paragraph cohesion under strict exam pressure", "They are only useful for nursery spelling tests", "They have no relation to reading comprehension", "They replace grammar rules entirely"],
      optionsHi: ["वे परीक्षा के भारी दबाव के तहत उच्च-स्तरीय संज्ञानात्मक पठन, संरचनात्मक तर्क और पैराग्राफ सामंजस्य का परीक्षण करते हैं", "केवल नर्सरी स्पेलिंग टेस्ट के लिए", "रीडिंग कॉप्रिहेंशन से नाता नहीं", "व्याकरण नियम बदलते हैं"],
      answer: 0,
      exp: "Explanation (En): Para jumbles synthesize grammar, vocabulary, logic, and discourse markers into a single testing format, making them high-scoring yet challenging.\nस्पष्टीकरण (Hi): पैरा जंबल्स में व्याकरण, शब्दावली और तर्क सभी का एक साथ परीक्षण होता है, जो इसे प्रतियोगी परीक्षाओं का एक सबसे महत्वपूर्ण हिस्सा बनाता है।"
    },
    {
      qEn: "What is the ultimate cognitive benefit of disciplined sentence rearrangement practice?",
      qHi: "अनुशासित वाक्य पुनर्रव्यवस्था अभ्यास का सर्वोच्च संज्ञानात्मक लाभ क्या है?",
      optionsEn: ["Developing razor-sharp critical thinking, structural editing prowess, and seamless discourse comprehension skills", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating grammar study completely"],
      optionsHi: ["अत्यंत तीक्ष्ण आलोचनात्मक सोच, संरचनात्मक संपादन कौशल और सहज संवाद समझ कौशल विकसित करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "व्याकरण अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Rigorous practice conditions the brain to recognize underlying narrative architectures instantly, ensuring elite performance across verbal tests.\nस्पष्टीकरण (Hi): इस प्रकार के कठोर अभ्यास से मस्तिष्क की तार्किक क्षमता तीक्ष्ण होती है जिससे किसी भी पैराग्राफ के ढांचे को तुरंत समझकर सही उत्तर निकाला जा सकता है।"
    }
  ],
    "Reading Comprehension": [
    {
      qEn: "What is the primary objective of a **Reading Comprehension (RC)** passage in competitive English exams?",
      qHi: "प्रतियोगिता परीक्षाओं में **रीडिंग कॉप्रिहेंशन (RC)** गद्यांश का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To test the candidate's ability to read, comprehend, analyze, and extract specific information from a given text accurately", "To test handwriting speed and cursive alignment", "To memorize the exact word count of the paragraph", "To translate foreign languages into code"],
      optionsHi: ["उम्मीदवार की किसी दिए गए पाठ को सटीक रूप से पढ़ने, समझने, उसका विश्लेषण करने और विशिष्ट जानकारी निकालने की क्षमता का परीक्षण करना", "हैंडराइटिंग गति जांचना", "पैराग्राफ के शब्दों की गिनती याद रखना", "विदेशी भाषाओं का कोड में अनुवाद करना"],
      answer: 0,
      exp: "Explanation (En): Reading comprehension evaluates vocabulary, logical inference, tone identification, and core theme extraction under timed conditions.\nस्पष्टीकरण (Hi): रीडिंग कॉप्रिहेंशन छात्र की शब्दावली, तार्किक निष्कर्ष, वक्ता के टोन और मुख्य विषय को समझने की क्षमता को परखता है।"
    },
    {
      qEn: "Read the following short passage and answer the question:\n*\"Despite rapid technological advancements, the modern workplace often induces chronic stress. Employees are constantly bombarded with emails, notifications, and unending deadlines, leading to burnout. Organizations must prioritize mental health wellness programs to sustain long-term productivity.\"*\n\n**Question:** What is the core theme of the passage?",
      qHi: "निम्नलिखित लघु गद्यांश को पढ़कर प्रश्न का उत्तर दें:\n*\"Despite rapid technological advancements, the modern workplace often induces chronic stress...\"*\n\n**प्रश्न:** इस गद्यांश का मुख्य विषय (Core Theme) क्या है?",
      optionsEn: ["The impact of workplace stress driven by modern technology and the need for mental health support", "The benefits of expanding email notifications in offices", "The history of technological hardware manufacturing", "How to increase daily working hours without burnout"],
      optionsHi: ["आधुनिक तकनीक से प्रेरित कार्यस्थल के तनाव का प्रभाव और मानसिक स्वास्थ्य सहायता की आवश्यकता", "ऑफिस में ईमेल बढ़ाने के लाभ", "तकनीकी हार्डवेयर विनिर्माण का इतिहास", "बिना बर्नआउट के दैनिक कामकाजी घंटे कैसे बढ़ाएं"],
      answer: 0,
      exp: "Explanation (En): The passage highlights workplace stress caused by technology and advocates for mental health wellness programs.\nस्पष्टीकरण (Hi): गद्यांश तकनीक के कारण ऑफिस में बढ़ते तनाव और मानसिक स्वास्थ्य कल्याण कार्यक्रमों की आवश्यकता पर जोर देता है।"
    },
    {
      qEn: "Based on the same passage, what consequence does continuous bombardment of emails and deadlines cause for employees?",
      qHi: "उसी गद्यांश के आधार पर, ईमेल और डेडलाइन की निरंतर बौछार कर्मचारियों के लिए क्या परिणाम लाती है?",
      optionsEn: ["Burnout and chronic stress", "Immediate promotion and salary hikes", "Instant technological literacy", "Enhanced physical fitness"],
      optionsHi: ["बर्नआउट और पुराना/गंभीर तनाव (Chronic stress)", "तत्काल पदोन्नति और वेतन वृद्धि", "तत्काल तकनीकी साक्षरता", "बेहतर शारीरिक फिटनेस"],
      answer: 0,
      exp: "Explanation (En): The text explicitly states that constant emails and deadlines lead directly to 'burnout'.\nस्पष्टीकरण (Hi): पाठ में स्पष्ट रूप से उल्लेख है कि निरंतर ईमेल और डेडलाइन कर्मचारियों में बर्नआउट का कारण बनती हैं।"
    },
    {
      qEn: "What does the author suggest organizations must do in response to modern workplace stress?",
      qHi: "आधुनिक कार्यस्थल के तनाव के जवाब में लेखक क्या सुझाव देता है कि संगठनों को क्या करना चाहिए?",
      optionsEn: ["Prioritize mental health wellness programs", "Ban all computers and internet routers", "Increase the number of daily deadlines", "Eliminate employee email access permanently"],
      optionsHi: ["मानसिक स्वास्थ्य कल्याण कार्यक्रमों को प्राथमिकता दें", "सभी कंप्यूटर और इंटरनेट राउटर बैन करें", "दैनिक डेडलाइन बढ़ाएं", "कर्मचारियों का ईमेल एक्सेस हमेशा के लिए बंद करें"],
      answer: 0,
      exp: "Explanation (En): The final sentence advocates for prioritizing mental health wellness programs to sustain productivity.\nस्पष्टीकरण (Hi): अंतिम पंक्ति में मानसिक स्वास्थ्य कल्याण कार्यक्रमों को प्राथमिकता देने की बात कही गई है।"
    },
    {
      qEn: "What is the **Tone** of the author in the passage above?",
      qHi: "उपरोक्त गद्यांश में लेखक का **टोन (Tone / स्वर)** कैसा है?",
      optionsEn: ["Concerned and analytical / advisory", "Sarcastic and humorous", "Indifferent and cold", "Aggressive and angry"],
      optionsHi: ["चिंतित और विश्लेषणात्मक / सलाहकार (Concerned and advisory)", "व्यंग्यपूर्ण और हास्यप्रद", "उदासीन और ठंडा", "आक्रामक और क्रोधित"],
      answer: 0,
      exp: "Explanation, (En): The author expresses genuine concern over workplace stress and advises implementing wellness solutions, making the tone concerned and advisory.\nस्पष्टीकरण (Hi): लेखक कार्यस्थल के तनाव को लेकर चिंतित है और समाधान सुझा रहा है, इसलिए टोन सलाह देने वाली और चिंतित (Concerned) है।"
    },
    {
      qEn: "Read the following short passage:\n*\"Democracy thrives on informed public debate. When citizens actively scrutinize government policies and engage in constructive dialogue, governance improves. Conversely, widespread apathy and misinformation weaken democratic foundations.\"*\n\n**Question:** What is the primary prerequisite for democracy to thrive according to the text?",
      qHi: "निम्नलिखित लघु गद्यांश पढ़ें:\n*\"Democracy thrives on informed public debate...\"*\n\n**प्रश्न:** पाठ के अनुसार लोकतंत्र के पनपने के लिए प्राथमिक शर्त क्या है?",
      optionsEn: ["Informed public debate and active citizen scrutiny", "Absolute suppression of public media", "Complete political apathy among citizens", "Unquestioned obedience to government decrees"],
      optionsHi: ["सूचित सार्वजनिक बहस और सक्रिय नागरिक जांच (Informed public debate)", "सार्वजनिक मीडिया का पूर्ण दमन", "नागरिकों के बीच पूर्ण उदासीनता", "सरकारी आदेशों की बिना सवाल आज्ञाकारिता"],
      answer: 0,
      exp: "Explanation (En): The opening sentence states that democracy thrives on informed public debate and active scrutiny.\nस्पष्टीकरण (Hi): पहली पंक्ति बताती है कि लोकतंत्र सूचित सार्वजनिक बहस पर फलता-फूलता है।"
    },
    {
      qEn: "Based on the democracy passage, what weakens democratic foundations?",
      qHi: "लोकतंत्र वाले गद्यांश के आधार पर, लोकतांत्रिक नींव को क्या चीज कमजोर करती है?",
      optionsEn: ["Widespread apathy and misinformation", "Active citizen scrutiny", "Constructive political dialogue", "Informed public awareness"],
      optionsHi: ["व्यापक उदासीनता और गलत सूचना (Apathy and misinformation)", "सक्रिय नागरिक जांच", "रचनात्मक राजनीतिक संवाद", "सूचित सार्वजनिक जागरूकता"],
      answer: 0,
      exp: "Explanation (En): The text explicitly warns that widespread apathy and misinformation weaken democratic foundations.\nस्पष्टीकरण (Hi): पाठ में चेतावनी दी गई है कि व्यापक उदासीनता और गलत सूचनाएं लोकतंत्र को कमजोर करती हैं।"
    },
    {
      qEn: "What is the **Inference** one can draw from the democracy passage?",
      qHi: "लोकतंत्र वाले गद्यांश से क्या **निष्कर्ष (Inference)** निकाला जा सकता है?",
      optionsEn: ["Citizen engagement and truth are essential safeguards for a healthy democratic system", "Governments do not need public feedback ever", "Misinformation strengthens national security", "Public debates are entirely useless"],
      optionsHi: ["नागरिकों की भागीदारी और सच्चाई एक स्वस्थ लोकतांत्रिक प्रणाली के लिए आवश्यक सुरक्षा उपाय हैं", "सरकार को कभी जनता की फीडबैक की जरूरत नहीं", "गलत सूचना सुरक्षा मजबूत करती है", "सार्वजनिक बहसें बेकार हैं"],
      answer: 0,
      exp: "Explanation (En): An inference is a logical deduction; since engagement improves governance and apathy weakens it, citizen vigilance is vital.\nस्पष्टीकरण (Hi): तार्किक निष्कर्ष यह है कि स्वस्थ लोकतंत्र के लिए जनता की सतर्कता और सच्चाई जरूरी है।"
    },
    {
      qEn: "What is the significance of identifying the **Author's Tone** in Reading Comprehension?",
      qHi: "रीडिंग कॉप्रिहेंशन में **लेखक के टोन (Author's Tone)** की पहचान करने का क्या महत्व है?",
      optionsEn: ["It helps determine the author's attitude, perspective, or emotional stance toward the subject matter", "It measures the physical length of the article", "It counts the exact number of vowels in the text", "It identifies spelling typos in headings"],
      optionsHi: ["यह विषय के प्रति लेखक के दृष्टिकोण, नजरिए या भावनात्मक रुख को निर्धारित करने में मदद करता है", "यह लेख की भौतिक लंबाई मापता है", "स्वरों (vowels) की गिनती करता है", "शीर्षक में वर्तनी त्रुटियां खोजता है"],
      answer: 0,
      exp: "Explanation (En): Recognizing tone (critical, optimistic, sarcastic, objective, concerned) prevents misinterpreting authorial intent in tricky questions.\nस्पष्टीकरण (Hi): टोन (जैसे आलोचनात्मक, आशावादी, व्यंग्यात्मक) पहचानने से लेखक के असली इरादे को समझने में मदद मिलती है।"
    },
    {
      qEn: "What is the difference between a **Direct Question** and an **Inference Question** in RC?",
      qHi: "RC में **प्रत्यक्ष प्रश्न (Direct Question)** और **निष्कर्ष प्रश्न (Inference Question)** के बीच क्या अंतर है?",
      optionsEn: ["Direct questions ask for explicit facts stated verbatim in the text, whereas inference questions require logical deduction beyond what is directly stated", "Direct questions are always false", "Inference questions require guessing randomly without reading", "There is no functional distinction"],
      optionsHi: ["प्रत्यक्ष प्रश्न पाठ में स्पष्ट रूप से बताए गए तथ्यों को पूछते हैं, जबकि निष्कर्ष प्रश्न सीधे कहे गए बयानों से परे तार्किक निष्कर्ष की मांग करते हैं", "प्रत्यक्ष प्रश्न हमेशा गलत होते हैं", "निष्कर्ष प्रश्नों में बिना पढ़े तुक्का लगाना होता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Direct answers are found line-for-line in the passage, while inference answers require reading between the lines using given clues.\nस्पष्टीकरण (Hi): डायरेक्ट प्रश्न सीधे गद्यांश की पंक्तियों से मिल जाते हैं, जबकि इन्फेरेंस प्रश्न के लिए लाइनों के बीच छिपे अर्थ को समझना पड़ता है।"
    },
    {
      qEn: "Read the following short passage:\n*\"Biodiversity loss represents a silent crisis. When rainforests are cleared for agriculture or urban expansion, countless endemic species vanish before discovery. Preserving natural habitats is not merely an aesthetic choice; it is an ecological necessity for planetary survival.\"*\n\n**Question:** What does the author mean by calling biodiversity loss a 'silent crisis'?",
      qHi: "निम्नलिखित लघु गद्यांश पढ़ें:\n*\"Biodiversity loss represents a silent crisis...\"*\n\n**प्रश्न:** लेखक द्वारा जैव विविधता के नुकसान को 'मूक संकट' (silent crisis) कहने का क्या तात्पर्य है?",
      optionsEn: ["It happens continuously and destructively without drawing immediate dramatic public alarm", "It is a crisis that occurs underwater with zero sound", "It is a peaceful political debate", "It only affects musical instruments"],
      optionsHi: ["यह तत्काल नाटकीय सार्वजनिक चेतावनी के बिना लगातार और विनाशकारी रूप से होता है", "यह पानी के नीचे बिना आवाज के होता है", "यह शांतिपूर्ण राजनीतिक बहस है", "यह केवल वाद्य यंत्रों को प्रभावित करता है"],
      answer: 0,
      exp: "Explanation (En): A 'silent crisis' implies that species extinction and habitat destruction happen steadily in the background without mainstream uproar.\nस्पष्टीकरण (Hi): 'मूक संकट' का अर्थ है कि यह तबाही चुपचाप और लगातार हो रही है जिस पर तुरंत बड़ा शोर नहीं मचता।"
    },
    {
      qEn: "Based on the biodiversity passage, why is preserving natural habitats described as an 'ecological necessity'?",
      qHi: "जैव विविधता वाले गद्यांश के आधार पर, प्राकृतिक आवासों के संरक्षण को 'पारिस्थितिक आवश्यकता' क्यों कहा गया है?",
      optionsEn: ["For planetary survival", "To build luxury hotels", "To increase timber export profits", "To expand corporate parking lots"],
      optionsHi: ["ग्रह के अस्तित्व (planetary survival) के लिए", "लक्जरी होटल बनाने के लिए", "लकड़ी के निर्यात मुनाफे के लिए", "कॉर्पोरेट पार्किंग के लिए"],
      answer: 0,
      exp: "Explanation (En): The text explicitly states habitat preservation is an ecological necessity for planetary survival.\nस्पष्टीकरण (Hi): पाठ में स्पष्ट रूप से उल्लेख है कि ग्रहों के अस्तित्व के लिए यह पारिस्थितिक आवश्यकता है।"
    },
    {
      qEn: "What role do **Contextual Vocabulary Questions** play in Reading Comprehension tests?",
      qHi: "रीडिंग कॉप्रिहेंशन परीक्षाओं में **संदर्भगत शब्दावली प्रश्न (Contextual Vocabulary)** क्या भूमिका निभाते हैं?",
      optionsEn: ["They test whether a candidate can deduce the meaning of an unfamiliar word based on surrounding sentences and paragraph context", "They test manual typing speed", "They check computer hardware installation", "They measure paper quality"],
      optionsHi: ["वे परीक्षण करते हैं कि क्या कोई उम्मीदवार आसपास के वाक्यों और पैराग्राफ के संदर्भ के आधार पर किसी अपरिचित शब्द का अर्थ निकाल सकता है", "टाइपिंग स्पीड जांचते हैं", "हार्डवेयर जांचते हैं", "पेपर क्वालिटी मापते हैं"],
      answer: 0,
      exp: "Explanation (En): RC vocabulary questions check if you understand how a word functions within a specific narrative context rather than in isolation.\nस्पष्टीकरण (Hi): ऐसे प्रश्न यह परखते हैं कि आप गद्यांश के माहौल के अनुसार किसी कठिन शब्द का अर्थ सही अंदाजे से समझ पा रहे हैं या नहीं।"
    },
    {
      qEn: "Read the following short passage:\n*\"Economic globalization has integrated global markets, lifting millions out of poverty in developing nations. However, it has simultaneously widened wealth inequality within countries, creating discontent among the working class.\"*\n\n**Question:** According to the passage, what is a positive outcome of economic globalization?",
      qHi: "निम्नलिखित लघु गद्यांश पढ़ें:\n*\"Economic globalization has integrated global markets...\"*\n\n**प्रश्न:** गद्यांश के अनुसार आर्थिक वैश्वीकरण का सकारात्मक परिणाम क्या है?",
      optionsEn: ["Lifting millions out of poverty in developing nations", "Eliminating all global economic inequality", "Stopping international trade disputes", "Destroying developing nation industries"],
      optionsHi: ["विकासशील देशों में करोड़ों लोगों को गरीबी से बाहर निकालना", "सारी वैश्विक आर्थिक असमानता खत्म करना", "अंतरराष्ट्रीय व्यापार विवाद रोकना", "उद्योग नष्ट करना"],
      answer: 0,
      exp: "Explanation (En): The passage notes that globalization has integrated markets and lifted millions out of poverty.\nस्पष्टीकरण (Hi): गद्यांश बताता है कि वैश्वीकरण ने बाजारों को जोड़ा है और विकासशील देशों में करोड़ों लोगों को गरीबी से उबारा है।"
    },
    {
      qEn: "According to the globalization passage, what negative effect has accompanied globalization?",
      qHi: "वैश्वीकरण वाले गद्यांश के अनुसार, इसके साथ कौन सा नकारात्मक प्रभाव आया है?",
      optionsEn: ["Widened wealth inequality within countries, creating working-class discontent", "Complete collapse of global internet networks", "Absolute eradication of international travel", "Zero industrial manufacturing worldwide"],
      optionsHi: ["देशों के भीतर धन की असमानता का बढ़ना, जिससे कामकाजी वर्ग में असंतोष पैदा हुआ है", "ग्लोबल इंटरनेट का पतन", "अंतरराष्ट्रीय यात्रा की समाप्ति", "शून्य विनिर्माण"],
      answer: 0,
      exp: "Explanation, (En): The text contrasts poverty reduction with the simultaneous widening of wealth inequality and working-class discontent.\nस्पष्टीकरण (Hi): पाठ में गरीबी घटने के साथ-साथ देशों के भीतर आर्थिक असमानता बढ़ने और असंतोष पैदा होने का भी जिक्र है।"
    },
    {
      qEn: "What is the primary function of a **Title or Main Idea Question** in Reading Comprehension?",
      qHi: "रीडिंग कॉप्रिहेंशन में **शीर्षक या मुख्य विचार (Main Idea)** के प्रश्न का मुख्य कार्य क्या होता है?",
      optionsEn: ["To encapsulate the overarching message and scope of the entire passage without focusing on minor sub-details", "To list every single sentence in reverse chronological order", "To provide a fictional summary of unrelated events", "To test spelling accuracy of difficult words"],
      optionsHi: ["छोटे उप-विवरणों पर ध्यान केंद्रित किए बिना पूरे गद्यांश के व्यापक संदेश और दायरे को समाहित करना", "प्रत्येक वाक्य को उल्टे क्रम में सूचीबद्ध करना", "काल्पनिक सारांश देना", "वर्तनी सटीकता जांचना"],
      answer: 0,
      exp: "Explanation (En): A correct title must be broad enough to cover the whole passage yet specific enough not to wander off-topic.\nस्पष्टीकरण (Hi): सही शीर्षक पूरे पैराग्राफ के मुख्य उद्देश्य और विषय को सटीक रूप से समेटता है।"
    },
    {
      qEn: "What is the danger of **Outside Knowledge Bias** when answering RC questions?",
      qHi: "RC प्रश्नों के उत्तर देते समय **बाहरी ज्ञान के पूर्वाग्रह (Outside Knowledge Bias)** का क्या खतरा होता है?",
      optionsEn: ["Choosing an option that is factually true in real life but not supported or mentioned anywhere in the given passage", "Getting bonus extra marks automatically", "Speeding up the reading process", "Improving paragraph grammar"],
      optionsHi: ["ऐसा विकल्प चुनना जो वास्तविक जीवन में तथ्यात्मक रूप से सत्य हो लेकिन दिए गए गद्यांश में कहीं भी समर्थित या उल्लिखित न हो", "अतिरिक्त बोनस अंक मिलना", "पढ़ने की गति तेज होना", "व्याकरण सुधारना"],
      answer: 0,
      exp: "Explanation (En): RC answers must be derived strictly from the passage text, not from personal opinions or external facts.\nस्पष्टीकरण (Hi): आरसी के प्रश्नों के उत्तर हमेशा गद्यांश के अंदर दिए गए तथ्यों के आधार पर देने चाहिए, अपने निजी या बाहरी ज्ञान के आधार पर नहीं।"
    },
    {
      qEn: "Read the following short passage:\n*\"Artificial intelligence is revolutionizing medical diagnostics. Machine learning algorithms can now detect early-stage tumors in MRI scans with precision surpassing human radiologists. However, questions regarding liability, data privacy, and algorithmic bias remain unresolved.\"*\n\n**Question:** What medical capability of AI is highlighted in the passage?",
      qHi: "निम्नलिखित लघु गद्यांश पढ़ें:\n*\"Artificial intelligence is revolutionizing medical diagnostics...\"*\n\n**प्रश्न:** गद्यांश में एआई की किस चिकित्सा क्षमता पर प्रकाश डाला गया है?",
      optionsEn: ["Detecting early-stage tumors in MRI scans with high precision", "Performing complex open-heart surgeries autonomously without surgeons", "Manufacturing pharmaceutical prescription drugs", "Replacing hospital nursing staff completely"],
      optionsHi: ["उच्च सटीकता के साथ एमआरआई स्कैन में शुरुआती चरण के ट्यूमर का पता लगाना", "बिना सर्जन के ओपन-हार्ट सर्जरी करना", "दवाइयां बनाना", "नर्सिंग स्टाफ को बदलना"],
      answer: 0,
      exp: "Explanation (En): The text explicitly highlights AI's ability to detect early-stage tumors in MRI scans with high precision.\nस्पष्टीकरण (Hi): पाठ में एमआरआई स्कैन में शुरुआती ट्यूमर का सटीक पता लगाने की एआई क्षमता का उल्लेख है।"
    },
    {
      qEn: "Despite its medical benefits, what ethical and practical concerns does AI raise according to the passage?",
      qHi: "चिकित्सा लाभों के बावजूद, गद्यांश के अनुसार एआई कौन सी नैतिक और व्यावहारिक चिंताएं पैदा करता है?",
      optionsEn: ["Liability, data privacy, and algorithmic bias", "High electricity bills for hospitals", "Lack of computer screens in clinics", "Slow internet downloading speeds"],
      optionsHi: ["दायित्व (Liability), डेटा गोपनीयता और एल्गोरिथम पूर्वाग्रह (Algorithmic bias)", "अस्पतालों का बिजली बिल", "स्क्रीन की कमी", "धीमी इंटरनेट स्पीड"],
      answer: 0,
      exp: "Explanation (En): The concluding sentence explicitly lists liability, data privacy, and algorithmic bias as unresolved issues.\nस्पष्टीकरण (Hi): अंतिम वाक्य में दायित्व, डेटा गोपनीयता और एल्गोरिथम पूर्वाग्रह को अनसुलझे मुद्दों के रूप में सूचीबद्ध किया गया है।"
    },
    {
      qEn: "What is the **Tone** of the passage regarding AI in diagnostics?",
      qHi: "डाइग्नोस्टिक्स में एआई के संबंध में गद्यांश का **टोन (Tone)** कैसा है?",
      optionsEn: ["Balanced and objective (acknowledging both advancements and concerns)", "Blindly optimistic and utopian", "Completely dismissive and hateful", "Humorous and satirical"],
      optionsHi: ["संतुलित और वस्तुनिष्ठ (प्रगति और चिंताओं दोनों को स्वीकार करते हुए)", "अंधाधुंध आशावादी", "पूरी तरह से खारिज करने वाला", "हास्यप्रद और व्यंग्यात्मक"],
      answer: 0,
      exp: "Explanation (En): The author praises the medical breakthrough while soberly acknowledging unresolved ethical risks, representing a balanced tone.\nस्पष्टीकरण (Hi): लेखक चिकित्सा सफलता की प्रशंसा करता है और साथ ही जोखिमों को भी रेखांकित करता है, जो संतुलित टोन को दर्शाता है।"
    },
    {
      qEn: "What strategy should a test-taker adopt when tackling long, dense RC passages under time pressure?",
      qHi: "समय के दबाव में लंबे और कठिन RC गद्यांशों को हल करते समय परीक्षाार्थी को कौन सी रणनीति अपनानी चाहिए?",
      optionsEn: ["Skimming the passage first to grasp the general flow, reading questions beforehand, and then scanning for specific keywords", "Memorizing every single word letter by letter before looking at questions", "Reading only the final sentence of the passage", "Skipping the passage entirely and guessing blindly"],
      optionsHi: ["सामान्य प्रवाह को समझने के लिए पहले गद्यांश पर सरसरी निगाह डालना (Skimming), पहले प्रश्न पढ़ना, और फिर विशिष्ट कीवर्ड खोजना", "हर शब्द को अक्षरशः रटना", "केवल अंतिम वाक्य पढ़ना", "पैराग्राफ छोड़कर तुक्का लगाना"],
      answer: 0,
      exp: "Explanation (En): Skimming and scanning save valuable time, helping locate answer clusters efficiently without getting bogged down in dense details.\nस्पष्टीकरण (Hi): स्किमिंग और स्कैनिंग तकनीक से कम समय में मुख्य बातें समझ आ जाती हैं और प्रश्नों के उत्तर जल्दी मिल जाते हैं।"
    },
    {
      qEn: "What is the function of **Paragraph Structure Analysis** in answering complex RC questions?",
      qHi: "जटिल RC प्रश्नों के उत्तर देने में **पैराग्राफ संरचना विश्लेषण (Paragraph Structure Analysis)** का क्या कार्य है?",
      optionsEn: ["It maps out how arguments transition from introduction to supporting evidence, counterarguments, and final conclusions", "It counts the number of punctuation commas", "It translates paragraphs into foreign languages", "It checks spelling typos"],
      optionsHi: ["यह मानचित्रित करता है कि कैसे तर्क परिचय से सहायक साक्ष्यों, प्रति-तर्कों और अंतिम निष्कर्षों तक बदलते हैं", "विराम चिह्नों की गिनती करता है", "विदेशी भाषा में अनुवाद करता है", "वर्तनी जांचता है"],
      answer: 0,
      exp: "Explanation (En): Understanding paragraph transitions helps identify where the author refutes a point or introduces crucial evidence.\nस्पष्टीकरण (Hi): पैराग्राफ की संरचना समझने से यह पता चलता है कि लेखक ने अपनी बात को साबित करने के लिए साक्ष्य या काउंटर-आर्गुमेंट कहां दिए हैं।"
    },
    {
      qEn: "Read the following short passage:\n*\"Urban green spaces—such as parks, botanical gardens, and tree-lined avenues—are vital lungs for modern cities. They mitigate urban heat island effects, filter air pollutants, and offer psychological respite to stressed citizens. Urban planners must mandate green zoning in city master plans.\"*\n\n**Question:** How do urban green spaces help combat the urban heat island effect according to the text?",
      qHi: "निम्नलिखित लघु गद्यांश पढ़ें:\n*\"Urban green spaces—such as parks, botanical gardens...\"*\n\n**प्रश्न:** पाठ के अनुसार शहरी हरित क्षेत्र शहरी ताप द्वीप (heat island) प्रभाव से मुकाबला करने में कैसे मदद करते हैं?",
      optionsEn: ["By mitigating heat effects and filtering air pollutants", "By generating heavy industrial smoke", "By increasing vehicular traffic congestion", "By replacing public parks with concrete skyscrapers"],
      optionsHi: ["ताप प्रभावों को कम करके और वायु प्रदूषकों को फ़िल्टर करके", "भारी औद्योगिक धुआं पैदा करके", "यातायात बढ़ाकर", "पार्कों को कंक्रीट गगनचुंबी इमारतों से बदलकर"],
      answer: 0,
      exp: "Explanation (En): The text explicitly notes that green spaces mitigate urban heat island effects and filter air pollutants.\nस्पष्टीकरण (Hi): पाठ में स्पष्ट रूप से उल्लेख है कि हरित क्षेत्र ताप प्रभाव को कम करते हैं और प्रदूषण को छानते हैं।"
    },
    {
      qEn: "What recommendation does the author give to urban planners in the green spaces passage?",
      qHi: "हरित क्षेत्र वाले गद्यांश में लेखक शहरी योजनाकारों को क्या सिफारिश देता है?",
      optionsEn: ["Mandate green zoning in city master plans", "Remove all trees to build parking garages", "Ban public parks entirely", "Pave over botanical gardens with asphalt"],
      optionsHi: ["शहर के मास्टर प्लान में हरित जोनिंग (Green zoning) अनिवार्य करें", "सभी पेड़ काटकर पार्किंग बनाएं", "पार्कों पर प्रतिबंध लगाएं", "बॉटैनिकल गार्डन पर डामर बिछाएं"],
      answer: 0,
      exp: "Explanation (En): The final sentence explicitly urges urban planners to mandate green zoning in city master plans.\nस्पष्टीकरण (Hi): अंतिम वाक्य में शहरी योजनाकारों से मास्टर प्लान में ग्रीन जोनिंग अनिवार्य करने का आग्रह किया गया है।"
    },
    {
      qEn: "What is the **Tone** of the author in the green spaces passage?",
      qHi: "हरित क्षेत्र वाले गद्यांश में लेखक का **टोन (Tone)** कैसा है?",
      optionsEn: ["Persuasive and advocacy-driven (urging environmental action)", "Pessimistic and hopeless", "Indifferent and cynical", "Aggressive and hostile"],
      optionsHi: ["प्रेरक और वकालत करने वाला (पर्यावरण कार्रवाई का आग्रह करते हुए)", "निराशाजनक", "उदासीन", "आक्रामक"],
      answer: 0,
      exp: "Explanation, (En): The author advocates strongly for environmental policy changes, giving the passage a persuasive and urgent tone.\nस्पष्टीकरण (Hi): लेखक पर्यावरण के पक्ष में मजबूत वकालत कर रहा है, जिससे टोन प्रेरक और तात्कालिकता (Persuasive) से भरी है।"
    },
    {
      qEn: "Why are Reading Comprehension modules considered the ultimate test of English language proficiency in exams?",
      qHi: "रीडिंग कॉप्रिहेंशन मॉड्यूल को परीक्षाओं में अंग्रेजी भाषा की दक्षता की अंतिम परीक्षा क्यों माना जाता है?",
      optionsEn: ["They synthesize vocabulary, grammar, critical logic, stamina, and semantic comprehension into a single comprehensive evaluation format", "They require zero reading effort", "They test only basic spelling rules", "They are meant for young children exclusively"],
      optionsHi: ["वे शब्दावली, व्याकरण, महत्वपूर्ण तर्क, सहनशक्ति और अर्थ संबंधी समझ को एक व्यापक मूल्यांकन प्रारूप में संश्लेषित करते हैं", "कोई प्रयास नहीं चाहिए", "केवल बुनियादी स्पेलिंग टेस्ट", "छोटे बच्चों के लिए"],
      answer: 0,
      exp: "Explanation (En): RC tests holistic language command, ensuring candidates can process complex professional and academic texts effectively.\nस्पष्टीकरण (Hi): आरसी समग्र भाषाई दक्षता को परखता है, जिससे यह सुनिश्चित होता है कि उम्मीदवार कठिन शैक्षणिक और व्यावसायिक ग्रंथों को समझ सकें।"
    },
    {
      qEn: "What is the danger of making **Assumptions** beyond the given text in RC questions?",
      qHi: "RC प्रश्नों में दिए गए पाठ से परे **मान्यताएं (Assumptions)** बनाने का क्या खतरा होता है?",
      optionsEn: ["It leads to incorrect option selection because correct answers must be strictly warranted by the passage text alone", "It guarantees full marks", "It shortens exam duration", "It corrects spelling mistakes"],
      optionsHi: ["इससे गलत विकल्प चुन लिया जाता है क्योंकि सही उत्तर केवल गद्यांश के पाठ द्वारा सख्ती से समर्थित होने चाहिए", "पूरे अंक की गारंटी", "परीक्षा अवधि छोटी होना", "वर्तनी सुधारना"],
      answer: 0,
      exp: "Explanation (En): Examiners intentionally include plausible assumptions as distractors; test-takers must stick strictly to what the text proves.\nस्पष्टीकरण (Hi): परीक्षक भ्रमित करने के लिए तार्किक दिखने वाले विकल्प रखते हैं, लेकिन सही उत्तर वही होता है जो गद्यांश में प्रमाणित हो।"
    },
    {
      qEn: "What role does **Elimination Technique** play in solving difficult multiple-choice RC questions?",
      qHi: "कठिन बहुविकल्पीय RC प्रश्नों को हल करने में **विलोपन तकनीक (Elimination Technique)** क्या भूमिका निभाती है?",
      optionsEn: ["It helps weed out extreme, unsupported, or contradictory options, leaving the most logically sound answer choice", "It deletes the entire examination computer screen", "It changes the reading speed to zero", "It translates paragraphs into foreign languages"],
      optionsHi: ["यह अत्यधिक, असमर्थित या विरोधाभासी विकल्पों को बाहर निकालने में मदद करती है, जिससे सबसे तार्किक रूप से सही उत्तर बच जाता है", "कंप्यूटर स्क्रीन डिलीट करना", "पढ़ने की गति शून्य करना", "विदेशी भाषा में अनुवाद करना"],
      answer: 0,
      exp: "Explanation (En): Eliminating wrong choices one by one increases accuracy when the correct answer is phrased abstractly.\nस्पष्टीकरण (Hi): गलत विकल्पों को एक-एक करके हटाने से सही उत्तर तक पहुंचने की सटीकता काफी बढ़ जाती है।"
    },
    {
      qEn: "What is the ultimate cognitive benefit of disciplined Reading Comprehension practice?",
      qHi: "अनुशासित रीडिंग कॉप्रिहेंशन अभ्यास का सर्वोच्च संज्ञानात्मक लाभ क्या है?",
      optionsEn: ["Sharpening analytical prowess, speeding up information synthesis, and developing elite verbal comprehension across diverse academic disciplines", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating grammar study completely"],
      optionsHi: ["विश्लेषणात्मक कौशल को तेज करना, सूचना संश्लेषण को गति देना और विभिन्न शैक्षणिक विषयों में उत्कृष्ट मौखिक समझ विकसित करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "व्याकरण अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Regular reading and analytical questioning build enduring cognitive reflexes that benefit both professional careers and competitive tests.\nस्पष्टीकरण (Hi): नियमित अभ्यास से बौद्धिक तीक्ष्णता बढ़ती है जो प्रतियोगी परीक्षाओं के साथ-साथ पेशेवर जीवन में भी बेहद उपयोगी साबित होती है।"
    },
    {
      qEn: "What is the concluding pedagogical milestone of the complete English Curriculum?",
      qHi: "संपूर्ण अंग्रेजी पाठ्यक्रम का अंतिम शैक्षणिक मील का पत्थर (Milestone) क्या है?",
      optionsEn: ["Achieving absolute linguistic mastery, ensuring flawless written and reading competence across all competitive and professional arenas", "To make students memorize textbooks word for word", "To eliminate all spoken dialects", "To focus exclusively on nursery rhymes"],
      optionsHi: ["पूर्ण भाषाई महारत हासिल करना, सभी प्रतियोगी और व्यावसायिक क्षेत्रों में त्रुटिहीन लिखित और पठन क्षमता सुनिश्चित करना", "पाठ्यपुस्तकों को शब्दशः रटाना", "बोलियों को खत्म करना", "नर्सरी कविताओं पर ध्यान देना"],
      answer: 0,
      exp: "Explanation (En): The culmination of this structured curriculum empowers learners with elite command over grammar, vocabulary, and textual analysis.\nस्पष्टीकरण (Hi): इस संरचित पाठ्यक्रम का समापन छात्र को व्याकरण, शब्दावली और पाठ विश्लेषण में पूर्ण रूप से पारंगत बनाता है।"
    }
  ],
    "Descriptive Writing: Essay, Letter & Summary Writing": [
    {
      qEn: "What is the primary objective of **Descriptive and Subjective Writing** in competitive English examinations?",
      qHi: "प्रतियोगिता परीक्षाओं में **वर्णनात्मक और व्यक्तिपरक लेखन (Descriptive Writing)** का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To test the candidate's ability to express structured thoughts, formulate logical arguments, and communicate clearly in written prose", "To test handwriting speed and cursive calligraphy alignment", "To memorize random dictionary word lists mechanically", "To translate ancient dead languages into modern code"],
      optionsHi: ["उम्मीदवार की संरचित विचारों को व्यक्त करने, तार्किक तर्क तैयार करने और लिखित गद्य में स्पष्ट रूप से संवाद करने की क्षमता का परीक्षण करना", "हैंडराइटिंग गति और सुलेख संरेखण का परीक्षण करना", "डिक्शनरी के शब्दों को रटना", "मृत भाषाओं का कोड में अनुवाद करना"],
      answer: 0,
      exp: "Explanation (En): Descriptive writing evaluates higher-order communication skills, organization, syntax, and persuasive reasoning in formats like essays and letters.\nस्पष्टीकरण (Hi): वर्णनात्मक लेखन निबंध और पत्र जैसे प्रारूपों में छात्र की उच्च-स्तरीय संचार कौशल, विचारों के संगठन और तार्किक तर्क की क्षमता का मूल्यांकन करता है।"
    },
    {
      qEn: "What is the standard structural framework of an **Essay**?",
      qHi: "एक मानक **निबंध (Essay)** का पारंपरिक संरचनात्मक ढांचा क्या होता है?",
      optionsEn: ["Introduction (with thesis statement), Body Paragraphs (supporting arguments/evidence), and Conclusion (summary and final thought)", "A single long continuous paragraph without any breaks", "A collection of random bullet points only", "Conclusion first, followed by body and an optional introduction"],
      optionsHi: ["परिचय (थीसिस स्टेटमेंट के साथ), बॉडी पैराग्राफ (सहायक तर्क/साक्ष्य), और निष्कर्ष (सारांश और अंतिम विचार)", "बिना किसी विराम के एक लंबा पैराग्राफ", "केवल रैंडम बुलेट पॉइंट का संग्रह", "पहले निष्कर्ष, फिर बॉडी और अंत में परिचय"],
      answer: 0,
      exp: "Explanation (En): A well-structured essay opens with an introduction introducing the thesis, develops arguments across logical body paragraphs, and ends with a cohesive conclusion.\nस्पष्टीकरण (Hi): एक अच्छी तरह से संरचित निबंध की शुरुआत परिचय से होती है, बीच में तार्किक बॉडी पैराग्राफ होते हैं और अंत में एक मजबूत निष्कर्ष होता है।"
    },
    {
      qEn: "What is the function of a **Thesis Statement** in an introductory essay paragraph?",
      qHi: "निबंध के शुरुआती पैराग्राफ में **थीसिस स्टेटमेंट (Thesis Statement)** का क्या कार्य होता है?",
      optionsEn: ["To state the central argument or main point of the essay clearly, guiding the entire scope of the writing", "To list spelling errors found in the essay prompt", "To provide a joke or humorous anecdote to entertain readers", "To give a final summary of the conclusion"],
      optionsHi: ["निबंध के केंद्रीय तर्क या मुख्य बिंदु को स्पष्ट रूप से बताना, जो पूरे लेखन के दायरे का मार्गदर्शन करता है", "निबंध में पाई जाने वाली वर्तनी की गलतियों को सूचीबद्ध करना", "पाठकों का मनोरंजन करने के लिए एक चुटकुला देना", "निष्कर्ष का अंतिम सारांश देना"],
      answer: 0,
      exp: "Explanation (En): The thesis statement acts as the compass of the essay, telling the reader what position or argument will be proven.\nस्पष्टीकरण (Hi): थीसिस स्टेटमेंट निबंध की रीढ़ है जो पाठक को यह बताता है कि आगे के लेख में किस मुख्य तर्क को साबित किया जाएगा।"
    },
    {
      qEn: "What is the difference between a **Formal Letter** and an **Informal Letter**?",
      qHi: "'औपचारिक पत्र' (Formal Letter) और 'अनौपचारिक पत्र' (Informal Letter) के बीच मुख्य अंतर क्या है?",
      optionsEn: ["Formal letters are written for official, business, or professional purposes using strict tone and formats, whereas informal letters are written to friends and family in a casual tone", "Informal letters require official corporate letterheads", "Formal letters are written only in poetic verse", "There is no structural difference"],
      optionsHi: ["औपचारिक पत्र सख्त स्वर और प्रारूप का उपयोग करके आधिकारिक, व्यावसायिक उद्देश्यों के लिए लिखे जाते हैं, जबकि अनौपचारिक पत्र दोस्तों और परिवार को आकस्मिक स्वर में लिखे जाते हैं", "अनौपचारिक पत्रों के लिए कॉर्पोरेट लेटरहेड चाहिए", "औपचारिक पत्र केवल कविता में होते हैं", "कोई संरचनात्मक अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Formal letters follow strict salutations (Dear Sir/Madam) and objective language, while informal letters use warm, personal greetings and conversational prose.\nस्पष्टीकरण (Hi): औपचारिक पत्रों का प्रारूप और भाषा सख्त तथा व्यावसायिक होती है, जबकि अनौपचारिक पत्र व्यक्तिगत और दोस्ताना भाषा में लिखे जाते हैं।"
    },
    {
      qEn: "What are the essential components typically required in a **Formal Letter** layout?",
      qHi: "एक **औपचारिक पत्र (Formal Letter)** के लेआउट में आमतौर पर कौन से आवश्यक घटक शामिल होने चाहिए?",
      optionsEn: ["Sender's address, Date, Recipient's designation/address, Subject line, Salutation, Body paragraphs, Complimentary close, and Signature", "Only a casual greeting and smiley emojis", "Poetic stanzas and rhyming couplets", "Mathematical formulas and tables"],
      optionsHi: ["प्रेषक का पता, दिनांक, प्राप्तकर्ता का पद/पता, विषय पंक्ति, संबोधन, मुख्य पैराग्राफ, समापन और हस्ताक्षर", "केवल एक आकस्मिक अभिवादन और स्माइली इमोजी", "काव्य छंद और तुकबंदी", "गणितीय सूत्र और तालिकाएं"],
      answer: 0,
      exp: "Explanation (En): Formal letters require a specific professional structure, ensuring all contact points, subjects, and polite closings ('Yours faithfully/sincerely') are included.\nस्पष्टीकरण (Hi): औपचारिक पत्र में प्रेषक का पता, दिनांक, प्राप्तकर्ता का विवरण, विषय, संबोधन और उचित समापन जैसे सभी व्यावसायिक मानक होने चाहिए।"
    },
    {
      qEn: "What is the primary objective of **Summary Writing**?",
      qHi: "**सारांश लेखन (Summary Writing)** का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To condense a longer passage into a concise version capturing its core arguments and essential points without personal opinions", "To expand a short paragraph into a full-length novel", "To rewrite every single sentence word-for-word in reverse order", "To translate the text into a foreign language"],
      optionsHi: ["निजी व्यक्तिगत राय के बिना किसी लंबे गद्यांश को उसके मुख्य तर्कों और आवश्यक बिंदुओं को कैप्चर करते हुए एक संक्षिप्त संस्करण में संघनित करना", "एक छोटे पैराग्राफ को उपन्यास बनाना", "हर वाक्य को उल्टे क्रम में शब्द-दर-शब्द दोबारा लिखना", "विदेशी भाषा में अनुवाद करना"],
      answer: 0,
      exp: "Explanation (En): A good summary is objective, brief, captures the author's primary thesis, and omits minor details, examples, or redundant phrasing.\nस्पष्टीकरण (Hi): एक अच्छा सारांश वस्तुनिष्ठ (Objective) और संक्षिप्त होता है जो लेखक के मुख्य विचारों को बिना छोटे-मोटे उदाहरणों के कम शब्दों में प्रस्तुत करता है।"
    },
    {
      qEn: "What is a crucial rule regarding word count and brevity in Summary Writing?",
      qHi: "सारांश लेखन में शब्द सीमा (Word Count) और संक्षिप्तता के संबंध में सबसे महत्वपूर्ण नियम क्या है?",
      optionsEn: ["It must strictly adhere to the specified word limit (often one-third of the original text) while retaining core meaning", "It must be longer than the original source passage", "Word limits do not matter at all", "It must consist of exactly three words"],
      optionsHi: ["इसे मूल अर्थ को बनाए रखते हुए निर्दिष्ट शब्द सीमा (अक्सर मूल पाठ का एक तिहाई) का सख्ती से पालन करना चाहिए", "यह मूल स्रोत गद्यांश से लंबा होना चाहिए", "शब्द सीमा कोई मायने नहीं रखती", "इसमें ठीक तीन शब्द होने चाहिए"],
      answer: 0,
      exp: "Explanation (En): Exams usually stipulate a strict word count (e.g., 1/3rd of the passage), penalizing summaries that are too long or overly sparse.\nस्पष्टीकरण (Hi): प्रतियोगी परीक्षाओं में आमतौर पर मूल पाठ का 1/3 हिस्सा लिखने की सख्त सीमा दी जाती है, जिसका पालन करना अनिवार्य होता है।"
    },
    {
      qEn: "What is the danger of including **Personal Opinions or Critique** in a Summary?",
      qHi: "किसी सारांश (Summary) में **व्यक्तिगत राय या आलोचना (Personal Opinions)** शामिल करने का क्या खतरा होता है?",
      optionsEn: ["It distorts the summary, making it subjective instead of maintaining objective fidelity to the source author's arguments", "It automatically grants extra bonus marks", "It improves grammar scores", "It makes the summary shorter"],
      optionsHi: ["यह सारांश को विकृत कर देता है, और स्रोत लेखक के तर्कों के प्रति वस्तुनिष्ठ निष्ठा बनाए रखने के बजाय इसे व्यक्तिपरक (Subjective) बना देता है", "स्वचालित रूप से अतिरिक्त बोनस अंक मिलते हैं", "व्याकरण स्कोर सुधारता है", "सारांश छोटा करता है"],
      answer: 0,
      exp: "Explanation (En): Summaries must reflect what the author wrote, not what the summarizer thinks or feels about the topic.\nस्पष्टीकरण (Hi): सारांश पूरी तरह तटस्थ होना चाहिए; उसमें यह नहीं लिखना चाहिए कि 'मेरे अनुसार ऐसा है', बल्कि यह होना चाहिए कि 'लेखक के अनुसार ऐसा है'।"
    },
    {
      qEn: "How do **Cohesion and Coherence** impact the quality of an Essay?",
      qHi: "**संलग्नता और सामंजस्य (Cohesion and Coherence)** किसी निबंध की गुणवत्ता को कैसे प्रभावित करते हैं?",
      optionsEn: ["They ensure smooth logical transitions between sentences and paragraphs, making the essay flow naturally and persuasively", "They introduce spelling typos", "They make the essay disjointed and confusing", "They shorten the essay to a single word"],
      optionsHi: ["वे वाक्यों और पैराग्राफों के बीच सुचारू तार्किक संक्रमण सुनिश्चित करते हैं, जिससे निबंध स्वाभाविक रूप से प्रवाहित होता है", "वर्तनी की त्रुटियां लाते हैं", "निबंध को भ्रमित बनाते हैं", "एक शब्द तक छोटा करते हैं"],
      answer: 0,
      exp: "Explanation (En): Coherence refers to the logical flow of ideas, while cohesion refers to grammatical links (like transition words) connecting them.\nस्पष्टीकरण (Hi): कोहेरेंस विचारों के तार्किक प्रवाह को और कोहेशन व्याकरणिक योजक शब्दों को दर्शाता है, जो निबंध को पठनीय बनाते हैं।"
    },
    {
      qEn: "What role do **Transition Words** (e.g., 'furthermore', 'consequently', 'in contrast') play in Descriptive Essays?",
      qHi: "वर्णनात्मक निबंधों में **योजक शब्दों (Transition Words - जैसे 'furthermore', 'consequently')** की क्या भूमिका होती है?",
      optionsEn: ["They act as conceptual bridges connecting paragraphs and clarifying relationships like addition, cause, or opposition", "They serve as random decorative punctuation marks", "They translate sentences into foreign languages", "They mark spelling mistakes"],
      optionsHi: ["वे पैराग्राफ को जोड़ने वाले वैचारिक पुल के रूप में कार्य करते हैं और जोड़, कारण या विरोध जैसे संबंधों को स्पष्ट करते हैं", "यादृच्छिक सजावटी विराम चिह्न", "विदेशी भाषा में अनुवाद", "वर्तनी गलतियां चिह्नित करना"],
      answer: 0,
      exp: "Explanation (En): Transition markers guide the reader smoothly from one point to the next, preventing abrupt leaps in reasoning.\nस्पष्टीकरण (Hi): संक्रमण शब्द पाठक को एक विचार से दूसरे विचार पर आसानी से ले जाते हैं, जिससे तर्क में अचानक उछाल नहीं लगता।"
    },
    {
      qEn: "What is the proper format for the **Salutation and Complimentary Close** in a Formal Letter to an Editor?",
      qHi: "किसी संपादक (Editor) को लिखे जाने वाले औपचारिक पत्र में **संबोधन और शिष्टाचार समापन (Salutation and Complimentary Close)** का उचित प्रारूप क्या है?",
      optionsEn: ["Salutation: 'Dear Sir/Madam,' and Complimentary Close: 'Yours faithfully' (or 'Yours sincerely')", "Salutation: 'Hey buddy,' and Complimentary Close: 'Best hugs'", "Salutation: 'To whom it may concern dearest,' and Complimentary Close: 'Yours lovingly'", "Salutation: 'My dearest friend,' and Complimentary Close: 'See you soon'"],
      optionsHi: ["संबोधन: 'Dear Sir/Madam,' और समापन: 'Yours faithfully' (या 'Yours sincerely')", "संबोधन: 'Hey buddy,' और समापन: 'Best hugs'", "संबोधन: 'Dearest,' और समापन: 'Yours lovingly'", "संबोधन: 'My dearest friend,' और समापन: 'See you soon'"],
      answer: 0,
      exp: "Explanation (En): Formal professional correspondence demands respectful, standardized closing formulas and formal salutations.\nस्पष्टीकरण (Hi): औपचारिक व्यावसायिक पत्रों में हमेशा 'Dear Sir/Madam,' और 'Yours faithfully' या 'Yours sincerely' जैसे मानक शब्दों का प्रयोग होता है।"
    },
    {
      qEn: "What is the role of the **Subject Line** in a Formal Letter?",
      qHi: "औपचारिक पत्र में **विषय पंक्ति (Subject Line)** का क्या कार्य होता है?",
      optionsEn: ["To state the core purpose of the letter briefly so the recipient understands the matter at a single glance", "To write a personal poem about weather", "To list the sender's private bank account details", "To provide a joke for amusement"],
      optionsHi: ["पत्र के मुख्य उद्देश्य को संक्षेप में बताना ताकि प्राप्तकर्ता एक ही नजर में मामले को समझ सके", "मौसम पर व्यक्तिगत कविता लिखना", "निजी बैंक विवरण देना", "चुटकुला देना"],
      answer: 0,
      exp: "Explanation (En): A crisp subject line summarizes the letter's intent, facilitating efficient official handling and filing.\nस्पष्टीकरण (Hi): विषय पंक्ति पत्र के मुख्य उद्देश्य को एक या दो पंक्तियों में स्पष्ट कर देती है जिससे प्राप्तकर्ता तुरंत समझ जाता है कि पत्र किस बारे में है।"
    },
    {
      qEn: "How should an **Essay Conclusion** be effectively structured?",
      qHi: "एक **निबंध का निष्कर्ष (Essay Conclusion)** प्रभावी ढंग से कैसे संरचित होना चाहिए?",
      optionsEn: ["By restating the thesis in a fresh way, summarizing main body arguments, and offering a compelling final closing thought", "By introducing three brand new complex arguments not mentioned anywhere else", "By copying the introduction word-for-word", "By ending abruptly in the middle of a sentence"],
      optionsHi: ["थीसिस को नए तरीके से दोहराकर, मुख्य तर्कों का सारांश देकर और एक आकर्षक अंतिम समापन विचार प्रस्तुत करके", "तीन बिल्कुल नए तर्क पेश करके जिनका पहले जिक्र न हो", "परिचय को शब्द-दर-शब्द कॉपी करके", "वाक्य के बीच में अचानक समाप्त करके"],
      answer: 0,
      exp: "Explanation, (En): A conclusion should never introduce new evidence; instead, it synthesizes what has already been discussed and leaves a lasting impression.\nस्पष्टीकरण (Hi): निष्कर्ष में कोई नया सबूत या तर्क नहीं जोड़ना चाहिए, बल्कि अब तक की गई चर्चा को संक्षेप में समेटकर एक प्रभाव छोड़ना चाहिए।"
    },
    {
      qEn: "What is the danger of **Repetitive Phrasing and Redundancy** in Essay Writing?",
      qHi: "निबंध लेखन में **बार-बार दोहराव और अतिरेक (Redundancy)** का क्या नकारात्मक प्रभाव पड़ता है?",
      optionsEn: ["It bores the reader, dilutes the strength of arguments, and lowers overall lexical scoring", "It automatically grants extra bonus marks", "It improves paragraph formatting", "It shortens the essay length beneficially"],
      optionsHi: ["यह पाठक को बोर करता है, तर्कों की ताकत को कमजोर करता है और समग्र लेक्सिकल स्कोरिंग को गिराता है", "अतिरिक्त बोनस अंक मिलते हैं", "फॉर्मेटिंग सुधारती है", "निबंध छोटा करता है"],
      answer: 0,
      exp: "Explanation (En): Repeating the same point using different words without adding new value makes writing appear weak and unpolished.\nस्पष्टीकरण (Hi): बिना नई बात जोड़े एक ही बात को घुमा-फिराकर बार-बार लिखने से लेखन कमजोर और अप्रभावी लगता है।"
    },
    {
      qEn: "What is the purpose of practicing **Précis Writing / Summary Writing** exercises?",
      qHi: "**प्रेसी राइटिंग / सारांश लेखन (Précis Writing)** अभ्यास का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To cultivate the ability to distill long discourses into their pure, essential essence while maintaining grammatical precision", "To increase essay word count artificially", "To practice handwriting cursive loops", "To translate English into mathematical equations"],
      optionsHi: ["व्याकरण की सटीकता बनाए रखते हुए लंबे भाषणों या गद्यांशों को उनके शुद्ध, आवश्यक सार में आसुत (Distill) करने की क्षमता विकसित करना", "कृत्रिम रूप से शब्द बढ़ाना", "कर्सिव लूप अभ्यास", "गणित में अनुवाद करना"],
      answer: 0,
      exp: "Explanation (En): Précis writing trains precision, ensuring that writers can capture a text's soul without wordiness.\nस्पष्टीकरण (Hi): प्रेसी राइटिंग लेखक की मूल भावना और मुख्य तर्कों को कम से कम शब्दों में सटीकता से उकेरने का अभ्यास कराती है।"
    },
    {
      qEn: "How does proper **Paragraphing** improve the readability of an Essay?",
      qHi: "उचित **पैराग्राफिंग (Paragraphing)** किसी निबंध की पठनीयता (Readability) को कैसे सुधारती है?",
      optionsEn: ["It groups related ideas together, giving the reader visual and logical breathing spaces as arguments progress", "It mixes all sentences randomly together", "It removes the need for an introduction", "It replaces grammar rules entirely"],
      optionsHi: ["यह संबंधित विचारों को एक साथ समूहित करता है, जिससे तर्कों के आगे बढ़ने पर पाठक को दृश्य और तार्किक विश्राम मिलता है", "सभी वाक्यों को मिला देता है", "परिचय की जरूरत खत्म करता है", "व्याकरण नियम बदलता है"],
      answer: 0,
      exp: "Explanation (En): Each paragraph should focus on a single sub-theme or argument, preventing cognitive overload for the reader.\nस्पष्टीकरण (Hi): हर पैराग्राफ में एक नया उप-विचार या तर्क होना चाहिए जिससे पाठक को लेख को समझने में आसानी हो।"
    },
    {
      qEn: "What is the proper approach when writing an **Informal Letter** to a family member?",
      qHi: "किसी परिवार के सदस्य को **अनौपचारिक पत्र (Informal Letter)** लिखते समय उचित दृष्टिकोण क्या होना चाहिए?",
      optionsEn: ["Using a warm, conversational, affectionate tone with personal inquiries and relaxed formatting", "Using strict legal terminology and formal third-person designations", "Writing in code language exclusively", "Adding a corporate company letterhead"],
      optionsHi: ["व्यक्तिगत पूछताछ और शिथिल प्रारूप के साथ एक गर्मजोशी भरा, संवादात्मक, स्नेही स्वर उपयोग करना", "सख्त कानूनी शब्दावली उपयोग करना", "कोड भाषा में लिखना", "कॉर्पोरेट लेटरहेड जोड़ना"],
      answer: 0,
      exp: "Explanation (En): Informal letters allow emotional expression, personal news sharing, and warm sign-offs ('Yours lovingly', 'Warm regards').\nस्पष्टीकरण (Hi): अनौपचारिक पत्रों में दोस्ताना भाषा, पारिवारिक हाल-चाल और स्नेहपूर्ण समापन का प्रयोग किया जाता है।"
    },
    {
      qEn: "What is the risk of going **Off-Topic (Digression)** in an Essay?",
      qHi: "किसी निबंध में **विषय से भटकने (Digression / Off-Topic)** का क्या जोखिम होता है?",
      optionsEn: ["It loses the reader's focus, violates the thesis prompt, and results in severe score penalties", "It automatically awards top marks", "It improves overall essay length", "It strengthens the core argument"],
      optionsHi: ["यह पाठक का फोकस खो देता है, थीसिस प्रॉम्प्ट का उल्लंघन करता है और गंभीर अंक कटौती का कारण बनता है", "शीर्ष अंक मिलते हैं", "लंबाई सुधारता है", "तर्क मजबूत करता है"],
      answer: 0,
      exp: "Explanation (En): Every paragraph in an essay must directly serve to prove the central thesis statement; straying into unrelated tangents ruins coherence.\nस्पष्टीकरण (Hi): निबंध का हर वाक्य मुख्य विषय को साबित करने के लिए होना चाहिए; विषय से भटकने पर परीक्षक अंक काट लेते हैं।"
    },
    {
      qEn: "What is the function of **Editing and Proofreading** in descriptive writing?",
      qHi: "वर्णनात्मक लेखन में **संपादन और प्रूफरीडिंग (Editing and Proofreading)** का क्या कार्य होता है?",
      optionsEn: ["To catch and correct grammatical errors, spelling typos, punctuation flaws, and awkward sentence phrasing before final submission", "To write brand new paragraphs from scratch", "To increase the physical weight of paper", "To delete the entire essay draft"],
      optionsHi: ["अंतिम सबमिशन से पहले व्याकरण संबंधी त्रुटियों, वर्तनी की अशुद्धियों, विराम चिह्न की कमियों और अजीब वाक्य विन्यास को पकड़ना और ठीक करना", "शुरुआत से नए पैराग्राफ लिखना", "पेपर का वजन बढ़ाना", "ड्राफ्ट डिलीट करना"],
      answer: 0,
      exp: "Explanation (En): Proofreading polishes the draft, ensuring impeccable presentation and professional linguistic polish.\nस्पष्टीकरण (Hi): प्रूफरीडिंग से लेख की छोटी-मोटी गलतियां (जैसे स्पेलिंग या ग्रामर मिस्टेक) दूर हो जाती हैं और निबंध त्रुटिहीन बनता है।"
    },
    {
      qEn: "Why is practicing diverse essay topics and letter formats vital for competitive English exams (like UPSC/State PCS/Banking)?",
      qHi: "प्रतियोगिता परीक्षाओं (जैसे UPSC/State PCS/Banking) के लिए विभिन्न निबंध विषयों और पत्र प्रारूपों का अभ्यास करना क्यों आवश्यक है?",
      optionsEn: ["Because descriptive papers test deep analytical thinking, socio-economic awareness, and structured writing under tight time constraints", "Because examiners never check descriptive answers", "Because descriptive writing requires zero practice", "Because essays are always written in poetry"],
      optionsHi: ["क्योंकि वर्णनात्मक पेपर कड़े समय के भीतर गहरी विश्लेषणात्मक सोच, सामाजिक-आर्थिक जागरूकता और संरचित लेखन का परीक्षण करते हैं", "परीक्षक कभी चेक नहीं करते", "कोई अभ्यास नहीं चाहिए", "कविता में लिखे जाते हैं"],
      answer: 0,
      exp: "Explanation (En): Descriptive tests assess a candidate's maturity, articulation, and administrative communication capabilities.\nस्पष्टीकरण (Hi): मुख्य परीक्षाओं में वर्णनात्मक पेपर उम्मीदवार की प्रशासनिक परिपक्वता, अभिव्यक्ति और वैचारिक स्पष्टता को परखने के लिए होते हैं।"
    },
    {
      qEn: "What is the ultimate cognitive benefit of mastering Descriptive Writing, Letter Formatting, and Summary Crafting?",
      qHi: "वर्णनात्मक लेखन, पत्र प्रारूपण और सारांश निर्माण में महारत हासिल करने का सर्वोच्च संज्ञानात्मक लाभ क्या है?",
      optionsEn: ["Achieving elite professional communication mastery, intellectual articulation, and versatile writing competence across all spheres", "Memorizing random dictionary pages mechanically", "Translating ancient dead languages", "Eliminating grammar study completely"],
      optionsHi: ["उत्कृष्ट पेशेवर संचार महारत, बौद्धिक अभिव्यक्ति और सभी क्षेत्रों में बहुमुखी लेखन क्षमता प्राप्त करना", "डिक्शनरी रटना", "मृत भाषाओं का अनुवाद", "व्याकरण अध्ययन खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Mastering all facets of English grammar, vocabulary, and descriptive composition equips learners with lifelong communicative excellence.\nस्पष्टीकरण (Hi): इस संपूर्ण पाठ्यक्रम के अभ्यास से छात्र को जीवनभर के लिए एक बेहतरीन और प्रभावी कम्युनिकेटर बनने की ताकत मिलती है।"
    },
    {
      qEn: "What is the concluding pedagogical milestone of the comprehensive English Curriculum?",
      qHi: "व्यापक अंग्रेजी पाठ्यक्रम का अंतिम शैक्षणिक मील का पत्थर क्या है?",
      optionsEn: ["Complete linguistic mastery, empowering learners with pristine written and spoken command over English for lifetime success", "To make students memorize textbooks word for word", "To eliminate all spoken dialects", "To focus exclusively on nursery rhymes"],
      optionsHi: ["पूर्ण भाषाई महारत, जीवनभर की सफलता के लिए अंग्रेजी पर त्रुटिहीन लिखित और मौखिक कमांड के साथ शिक्षार्थियों को सशक्त बनाना", "पाठ्यपुस्तकों को शब्दशः रटाना", "बोलियों को खत्म करना", "नर्सरी कविताओं पर ध्यान देना"],
      answer: 0,
      exp: "Explanation (En): The culmination of this structured curriculum guarantees excellence in both academic examinations and professional environments.\nस्पष्टीकरण (Hi): यह संरचित पाठ्यक्रम छात्र को अकादमिक परीक्षाओं और पेशेवर दुनिया दोनों में शीर्ष स्थान पर पहुंचाने के लिए पूरी तरह तैयार करता है।"
    },
    {
      qEn: "How does the integration of Essay, Letter, and Summary writing complete the English language learning loop?",
      qHi: "निबंध, पत्र और सारांश लेखन का एकीकरण अंग्रेजी भाषा सीखने के चक्र (Learning Loop) को कैसे पूरा करता है?",
      optionsEn: ["It bridges foundational grammar and vocabulary rules with practical, creative, and professional real-world application", "It makes learning redundant", "It replaces speaking skills entirely", "It has no relation to practical skills"],
      optionsHi: ["यह व्यावहारिक, रचनात्मक और पेशेवर वास्तविक दुनिया के अनुप्रयोग के साथ बुनियादी व्याकरण और शब्दावली नियमों को जोड़ता है", "सीखना व्यर्थ बनाता है", "बोलने के कौशल की जगह लेता है", "व्यावहारिक कौशल से नाता नहीं"],
      answer: 0,
      exp: "Explanation (En): Writing synthesizes all rules of grammar, syntax, and vocabulary into tangible communication products, completing language acquisition.\nस्पष्टीकरण (Hi): लेखन अभ्यास व्याकरण और शब्दावली के सभी नियमों को वास्तविक संचार में ढालकर भाषा सीखने की प्रक्रिया को पूर्ण करता है।"
    },
    {
      qEn: "What role does **Clarity of Thought** play in achieving high scores in descriptive writing sections?",
      qHi: "वर्णनात्मक लेखन खंडों में उच्च अंक प्राप्त करने में **विचारों की स्पष्टता (Clarity of Thought)** क्या भूमिका निभाती है?",
      optionsEn: ["It allows ideas to be presented logically, persuasively, and concisely without ambiguity or confusion", "It causes deliberate confusion for the examiner", "It increases spelling errors", "It shortens essays to a single sentence"],
      optionsHi: ["यह विचारों को बिना किसी अस्पष्टता या भ्रम के तार्किक रूप से, प्रेरक ढंग से और संक्षेप में प्रस्तुत करने की अनुमति देता है", "परीक्षक के लिए भ्रम पैदा करता है", "वर्तनी त्रुटियां बढ़ाता है", "एक वाक्य तक छोटा करता है"],
      answer: 0,
      exp: "Explanation (En): Examiners reward clear, structured reasoning and clean prose over flowery, ambiguous, or disorganized language.\nस्पष्टीकरण (Hi): परीक्षक हमेशा स्पष्ट, संरचित और तार्किक भाषा को प्राथमिकता देते हैं न कि उलझी हुई या अस्पष्ट शब्दावली को।"
    },
    {
      qEn: "Why is maintaining **Tone Consistency** vital in formal letter and essay writing?",
      qHi: "औपचारिक पत्र और निबंध लेखन में **टोन की निरंतरता (Tone Consistency)** बनाए रखना क्यों आवश्यक है?",
      optionsEn: ["To prevent abrupt shifts from informal casual slang to rigid academic prose, preserving overall stylistic professionalism", "To make essays sound like funny comedy scripts", "To confuse readers intentionally", "To test handwriting speed"],
      optionsHi: ["अनौपचारिक आकस्मिक स्लैंग से कठोर शैक्षणिक गद्य में अचानक बदलाव को रोकने के लिए, समग्र शैलीगत व्यावसायिकता को संरक्षित करना", "कॉमेडी स्क्रिप्ट जैसा बनाना", "भ्रमित करना", "हैंडराइटिंग जांचना"],
      answer: 0,
      exp: "Explanation (En): A consistent professional or objective tone builds credibility and authority throughout the written piece.\nस्पष्टीकरण (Hi): एक समान पेशेवर टोन बनाए रखने से लेख की विश्वसनीयता और प्रभावशीलता दोनों बढ़ जाती हैं।"
    },
    {
      qEn: "What is the ultimate advantage of understanding both grammatical mechanics and creative writing formats?",
      qHi: "व्याकरण संबंधी यांत्रिकी (Mechanics) और रचनात्मक लेखन प्रारूप दोनों को समझने का सर्वोच्च लाभ क्या है?",
      optionsEn: ["It transforms an average test-taker into an elite communicator capable of conquering any written examination or professional challenge", "It is useful only for passing nursery school exams", "It has zero practical value in modern careers", "It replaces computer technical skills entirely"],
      optionsHi: ["यह एक औसत परीक्षार्थी को किसी भी लिखित परीक्षा या पेशेवर चुनौती को जीतने में सक्षम एक उत्कृष्ट संचारक में बदल देता है", "नर्सरी परीक्षा के लिए उपयोगी", "आधुनिक करियर में कोई मूल्य नहीं", "तकनीकी कौशल की जगह लेता है"],
      answer: 0,
      exp: "Explanation (En): Combining technical grammatical accuracy with polished descriptive composition guarantees peak performance across all verbal assessments.\nस्पष्टीकरण (Hi): व्याकरण की सटीकता और वर्णनात्मक लेखन की कला का यह मेल किसी भी प्रतियोगी परीक्षा में सफलता की सबसे पक्की गारंटी है।"
    },
    {
      qEn: "How does structured practice of descriptive writing foster long-term intellectual growth?",
      qHi: "वर्णनात्मक लेखन का संरचित अभ्यास दीर्घकालिक बौद्धिक विकास को कैसे बढ़ावा देता है?",
      optionsEn: ["By forcing deep reflection on complex socio-economic issues, shaping balanced opinions, and structuring robust arguments", "By encouraging mechanical rote memorization without thought", "By eliminating the need for reading books", "By replacing analytical reasoning with guesswork"],
      optionsHi: ["जटिल सामाजिक-आर्थिक मुद्दों पर गहरे चिंतन, संतुलित राय को आकार देने और मजबूत तर्कों की संरचना करने के लिए मजबूर करके", "रटकर याद करने को बढ़ावा देकर", "किताबें पढ़ना बंद करके", "अनुमान लगाने से"],
      answer: 0,
      exp: "Explanation (En): Writing about diverse topics expands general awareness, critical faculties, and articulation depth.\nस्पष्टीकरण (Hi): विभिन्न विषयों पर लिखने से सामान्य ज्ञान, विश्लेषणात्मक क्षमता और विचारों की गहराई का अभूतपूर्व विकास होता है।"
    },
    {
      qEn: "What mindset should an aspirant maintain while tackling descriptive and summary writing tasks?",
      qHi: "वर्णनात्मक और सारांश लेखन कार्यों को हल करते समय एक आकांक्षी (Aspirant) को किस मानसिकता को बनाए रखना चाहिए?",
      optionsEn: ["A disciplined, objective, structured, and analytical mindset focusing on precision and clarity", "A careless, hurried, and unstructured guesswork approach", "A purely fictional and whimsical storytelling mindset", "An indifferent and apathetic attitude"],
      optionsHi: ["सटीकता और स्पष्टता पर ध्यान केंद्रित करते हुए एक अनुशासित, वस्तुनिष्ठ, संरचित और विश्लेषणात्मक मानसिकता", "लापरवाह और असंरचित दृष्टिकोण", "काल्पनिक कहानी कहने की मानसिकता", "उदासीन रवैया"],
      answer: 0,
      exp: "Explanation (En): Success in descriptive writing stems from methodical planning, adherence to constraints, and clean execution.\nस्पष्टीकरण (Hi): योजनाबद्ध तरीके से रूपरेखा बनाकर और नियमों का पालन करके लिखने से वर्णनात्मक परीक्षाओं में सर्वोच्च अंक प्राप्त होते हैं।"
    },
    {
      qEn: "What is the ultimate takeaway from completing the rigorous English Language & Grammar Curriculum?",
      qHi: "कठोर अंग्रेजी भाषा और व्याकरण पाठ्यक्रम को पूरा करने का अंतिम निष्कर्ष क्या है?",
      optionsEn: ["Unrivaled linguistic competence, structural clarity, and absolute readiness to conquer any competitive or professional linguistic hurdle", "The completion of a mandatory chore", "The ability to speak only in ancient slang", "The eradication of all other languages"],
      optionsHi: ["बेजोड़ भाषाई क्षमता, संरचनात्मक स्पष्टता और किसी भी प्रतियोगी या पेशेवर भाषाई बाधा को पार करने की पूर्ण तत्परता", "एक अनिवार्य काम पूरा होना", "केवल पुरानी स्लैंग बोलना", "अन्य भाषाएं खत्म करना"],
      answer: 0,
      exp: "Explanation (En): Completing this extensive curriculum provides a masterclass in English communication, unlocking doors to academic and career excellence.\nस्पष्टीकरण (Hi): इस व्यापक पाठ्यक्रम का पूरा होना अंग्रेजी संचार में महारत हासिल करने और जीवन के हर क्षेत्र में सफलता के द्वार खोलने का प्रतीक है।"
    }
  ]
};
