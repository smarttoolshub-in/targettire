// TargetTire PYQ Database
// Structure: Exam -> Stage (CBT-1 / CBT-2 / Prelims / Mains / Written) -> Year -> Month -> Shift -> Questions
// Only written/CBT/PYQ-relevant stages are included. Medical, Document Verification, PET/PST, Interview, etc. are intentionally excluded.
// Stage definitions are derived from exam-content.js; existing PYQ question data is preserved without duplication.
window.pyqStageOptions = window.pyqStageOptions || {};
Object.assign(window.pyqStageOptions, {
  "SSC CGL": [
    "CBT-1",
    "CBT-2"
  ],
  "SSC CHSL": [
    "CBT-1",
    "CBT-2"
  ],
  "SSC GD Constable": [
    "CBT"
  ],
  "SSC Selection Post": [
    "CBT"
  ],
  "SSC MTS": [
    "CBT"
  ],
  "SSC CPO": [
    "CBT-1",
    "CBT-2"
  ],
  "SSC Stenographer": [
    "CBT"
  ],
  "SSC JE": [
    "CBT-1",
    "CBT-2"
  ]
});

window.pyqDatabase = window.pyqDatabase || {};
Object.assign(window.pyqDatabase, {
  "SSC CGL": {
    "CBT-1": {
      "2024": {
             "September": {
              "9 September - Shift 1 (Morning)": [
            {
              "qEn": "Which Article of the Indian Constitution deals with the abolition of titles?",
              "qHi": "भारतीय संविधान का कौन सा अनुच्छेद उपाधियों के अंत से संबंधित है?",
              "optionsEn": ["Article 16", "Article 18", "Article 15", "Article 17"],
              "optionsHi": ["अनुच्छेद 16", "अनुच्छेद 18", "अनुच्छेद 15", "अनुच्छेद 17"],
              "answer": 1,
              "exp": "En: Article 18 of the Indian Constitution abolishes titles and forbids the State from conferring any title except military and academic distinctions.\nHi: भारतीय संविधान का अनुच्छेद 18 उपाधियों का अंत करता है और राज्य को सैन्य और शैक्षणिक उपाधियों को छोड़कर कोई भी उपाधि प्रदान करने से रोकता है।"
            },
            {
              "qEn": "Who won the ICC Men's T20 World Cup 2024?",
              "qHi": "ICC पुरुष T20 विश्व कप 2024 किसने जीता?",
              "optionsEn": ["Australia", "South Africa", "India", "England"],
              "optionsHi": ["ऑस्ट्रिया", "दक्षिण अफ्रीका", "भारत", "इंग्लैंड"],
              "answer": 2,
              "exp": "En: India won the ICC Men's T20 World Cup 2024 by defeating South Africa in the final.\nHi: भारत ने फाइनल में दक्षिण अफ्रीका को हराकर ICC पुरुष T20 विश्व कप 2024 जीता।"
            },
            {
              "qEn": "If $a + b = 10$ and $ab = 21$, find the value of $a^3 + b^3$.",
              "qHi": "यदि $a + b = 10$ और $ab = 21$ है, तो $a^3 + b^3$ का मान ज्ञात कीजिए।",
              "optionsEn": ["370", "350", "310", "340"],
              "optionsHi": ["370", "350", "310", "340"],
              "answer": 0,
              "exp": "En: Formula: $a^3 + b^3 = (a+b)((a+b)^2 - 3ab) = 10(100 - 3(21)) = 10(37) = 370$.\nHi: सूत्र: $a^3 + b^3 = (a+b)((a+b)^2 - 3ab) = 10(100 - 3(21)) = 10(37) = 370$।"
            },
            {
              "qEn": "Which river is known as the 'Sorrow of Bihar'?",
              "qHi": "किस नदी को 'बिहार का शोक' कहा जाता है?",
              "optionsEn": ["Kosi", "Damodar", "Mahanadi", "Son"],
              "optionsHi": ["कोसी", "दामोदर", "महानदी", "सोन"],
              "answer": 0,
              "exp": "En: The Kosi River is known as the 'Sorrow of Bihar' because of its frequent changes in course and devastating floods.\nHi: कोसी नदी को उसके मार्ग बदलने और विनाशकारी बाढ़ के कारण 'बिहार का शोक' कहा जाता है।"
            },
            {
              "qEn": "What is the chemical formula of Washing Soda?",
              "qHi": "वाशिंग सोडा (धोने का सोडा) का रासायनिक सूत्र क्या है?",
              "optionsEn": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "optionsHi": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "answer": 0,
              "exp": "En: Sodium carbonate decahydrate ($Na_2CO_3 \\cdot 10H_2O$) is commonly known as washing soda.\nHi: सोडियम कार्बोनेट डेकाहाइड्रेट ($Na_2CO_3 \\cdot 10H_2O$) को आमतौर पर वाशिंग सोडा कहा जाता है।"
            },
            {
              "qEn": "Which of the following is a scalar quantity?",
              "qHi": "निम्नलिखित में से कौन सी एक अदिश राशि (Scalar quantity) है?",
              "optionsEn": ["Speed", "Velocity", "Acceleration", "Force"],
              "optionsHi": ["चाल (Speed)", "वेग (Velocity)", "त्वरण (Acceleration)", "बल (Force)"],
              "answer": 0,
              "exp": "En: Speed has magnitude only and no specific direction, making it a scalar quantity.\nHi: चाल में केवल परिमाण होता है और कोई निश्चित दिशा नहीं होती, जिससे यह एक अदिश राशि बनती है।"
            },
            {
              "qEn": "Who is the custodian of the Indian Constitution?",
              "qHi": "भारतीय संविधान का संरक्षक कौन है?",
              "optionsEn": ["Supreme Court of India", "President of India", "Prime Minister", "Parliament"],
              "optionsHi": ["भारत का उच्चतम न्यायालय", "भारत के राष्ट्रपति", "प्रधानमंत्री", "संसद"],
              "answer": 0,
              "exp": "En: The Supreme Court of India acts as the guardian and custodian of the Constitution.\nHi: भारत का उच्चतम न्यायालय संविधान के संरक्षक के रूप में कार्य करता है।"
            },
            {
              "qEn": "What is the full form of HTML in web development?",
              "qHi": "वेब डेवलपमेंट में HTML का पूर्ण रूप क्या है?",
              "optionsEn": ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "Hyperlink Text Modern Language"],
              "optionsHi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक मल्टी लैंग्वेज", "हाइपर ट्रांसफर मार्कअप लैंग्वेज", "हाइपरलिंक टेक्स्ट मॉडर्न लैंग्वेज"],
              "answer": 0,
              "exp": "En: HTML stands for Hyper Text Markup Language, which is used to structure web pages.\nHi: HTML का पूर्ण रूप हाइपर टेक्स्ट मार्कअप लैंग्वेज है, जिसका उपयोग वेब पेजों को संरचित करने के लिए किया जाता है।"
            },
            {
              "qEn": "If the radius of a circle is increased by 50%, by what percentage does its area increase?",
              "qHi": "यदि किसी वृत्त की त्रिज्या 50% बढ़ा दी जाए, तो उसके क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?",
              "optionsEn": ["125%", "100%", "150%", "75%"],
              "optionsHi": ["125%", "100%", "150%", "75%"],
              "answer": 0,
              "exp": "En: Successive percentage change formula: $x + x + \\frac{x^2}{100} \\implies 50 + 50 + \\frac{2500}{100} = 125\\%$.\nHi: क्रमिक प्रतिशत वृद्धि सूत्र: $x + x + \\frac{x^2}{100} \\implies 50 + 50 + \\frac{2500}{100} = 125\\%$।"
            },
            {
              "qEn": "Which gas is responsible for global warming primarily?",
              "qHi": "मुख्य रूप से ग्लोबल वार्मिंग के लिए कौन सी गैस उत्तरदायी है?",
              "optionsEn": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
              "optionsHi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
              "answer": 0,
              "exp": "En: Carbon dioxide ($CO_2$) is the primary greenhouse gas contributing to global warming.\nHi: कार्बन डाइऑक्साइड ($CO_2$) ग्लोबल वार्मिंग में योगदान देने वाली प्राथमिक ग्रीनहाउस गैस है।"
            },
            {
              "qEn": "In which state is the Kaziranga National Park located?",
              "qHi": "काजीरंगा राष्ट्रीय उद्यान किस राज्य में स्थित है?",
              "optionsEn": ["Assam", "Uttarakhand", "Madhya Pradesh", "Gujarat"],
              "optionsHi": ["असम", "उत्तराखंड", "मध्य प्रदेश", "गुजरात"],
              "answer": 0,
              "exp": "En: Kaziranga National Park in Assam is famous for the great Indian one-horned rhinoceros.\nHi: असम का काजीरंगा राष्ट्रीय उद्यान एक सींग वाले गैंडे के लिए प्रसिद्ध है।"
            },
            {
              "qEn": "What is the value of $\\sin^2 30^\\circ + \\cos^2 30^\\circ$?",
              "qHi": "$\\sin^2 30^\\circ + \\cos^2 30^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "2"],
              "optionsHi": ["1", "0", "1/2", "2"],
              "answer": 0,
              "exp": "En: By the fundamental trigonometric identity $\\sin^2\\theta + \\cos^2\\theta = 1$ for any angle $\\theta$.\nHi: किसी भी कोण $\\theta$ के लिए मूल त्रिकोणमितीय सर्वसमिका $\\sin^2\\theta + \\cos^2\\theta = 1$ के अनुसार।"
            },
            {
              "qEn": "Who wrote the famous novel 'Godan'?",
              "qHi": "प्रसिद्ध उपन्यास 'गोदान' किसने लिखा है?",
              "optionsEn": ["Munshi Premchand", "Rabindranath Tagore", "Bankim Chandra", "Harivansh Rai Bachchan"],
              "optionsHi": ["मुंशी प्रेमचंद", "रविंद्रनाथ टैगोर", "बंकिम चंद्र", "हरिवंश राय बच्चन"],
              "answer": 0,
              "exp": "En: 'Godan' is a classic Hindi novel written by Munshi Premchand.\nHi: 'गोदान' मुंशी प्रेमचंद द्वारा लिखित एक क्लासिक हिंदी उपन्यास है।"
            },
            {
              "qEn": "Which vitamin is water-soluble?",
              "qHi": "कौन सा विटामिन पानी में घुलनशील है?",
              "optionsEn": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
              "optionsHi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
              "answer": 0,
              "exp": "En: Vitamins B and C are water-soluble, while A, D, E, and K are fat-soluble.\nHi: विटामिन B और C पानी में घुलनशील हैं, जबकि A, D, E और K वसा में घुलनशील हैं।"
            },
            {
              "qEn": "The financial year in India runs from:",
              "qHi": "भारत में वित्तीय वर्ष (Financial Year) कब से कब तक होता है?",
              "optionsEn": ["1st April to 31st March", "1st January to 31st December", "1st July to 30th June", "1st April to 30th June"],
              "optionsHi": ["1 अप्रैल से 31 मार्च", "1 जनवरी से 31 दिसंबर", "1 जुलाई से 30 जून", "1 अप्रैल से 30 जून"],
              "answer": 0,
              "exp": "En: The financial year in India begins on 1st April and ends on 31st March of the following year.\nHi: भारत में वित्तीय वर्ष 1 अप्रैल से शुरू होता है और अगले साल के 31 मार्च को समाप्त होता है।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 5$, find the value of $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 5$ है, तो $x^2 + \\frac{1}{x^2}$ का मान ज्ञात कीजिए।",
              "optionsEn": ["27", "23", "25", "29"],
              "optionsHi": ["27", "23", "25", "29"],
              "answer": 0,
              "exp": "En: Squaring both sides: $(x - 1/x)^2 = 5^2 \\implies x^2 + 1/x^2 - 2 = 25 \\implies x^2 + 1/x^2 = 27$.\nHi: दोनों पक्षों का वर्ग करने पर: $(x - 1/x)^2 = 5^2 \\implies x^2 + 1/x^2 - 2 = 25 \\implies x^2 + 1/x^2 = 27$।"
            },
            {
              "qEn": "Which article of the Indian Constitution deals with Right to Equality?",
              "qHi": "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
              "optionsEn": ["Articles 14-18", "Articles 19-22", "Articles 23-24", "Articles 25-28"],
              "optionsHi": ["अनुच्छेद 14-18", "अनुच्छेद 19-22", "अनुच्छेद 23-24", "अनुच्छेद 25-28"],
              "answer": 0,
              "exp": "En: Articles 14 to 18 of the Constitution guarantee the Right to Equality.\nHi: संविधान के अनुच्छेद 14 से 18 समानता के अधिकार की गारंटी देते हैं।"
            },
            {
              "qEn": "Which planet in our solar system has the maximum number of moons?",
              "qHi": "हमारे सौर मंडल में किस ग्रह के पास सबसे अधिक उपग्रह (चंद्रमा) हैं?",
              "optionsEn": ["Saturn", "Jupiter", "Mars", "Venus"],
              "optionsHi": ["शनि (Saturn)", "बृहस्पति (Jupiter)", "मंगल (Mars)", "शुक्र (Venus)"],
              "answer": 0,
              "exp": "En: Saturn holds the record for having the highest confirmed number of moons in the solar system.\nHi: सौरमंडल में सबसे अधिक पुष्ट चंद्रमाओं की संख्या शनि ग्रह के पास है।"
            },
            {
              "qEn": "What is the SI unit of luminous intensity?",
              "qHi": "ज्योति तीव्रता (luminous intensity) की एसआई इकाई क्या है?",
              "optionsEn": ["Candela", "Mole", "Kelvin", "Ampere"],
              "optionsHi": ["कैंडेला", "मोल", "केल्विन", "एम्पीयर"],
              "answer": 0,
              "exp": "En: Candela is the base SI unit of luminous intensity.\nHi: कैंडेला ज्योति तीव्रता की मूल एसआई इकाई है।"
            },
            {
              "qEn": "Who was the first Governor-General of independent India?",
              "qHi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
              "optionsEn": ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Lord Wavell"],
              "optionsHi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "लॉर्ड वेवेल"],
              "answer": 0,
              "exp": "En: Lord Mountbatten was the first Governor-General of independent India, while C. Rajagopalachari was the first Indian Governor-General.\nHi: लॉर्ड माउंटबेटन स्वतंत्र भारत के पहले गवर्नर-जनरल थे, जबकि सी. राजगोपालाचारी पहले भारतीय गवर्नर-जनरल थे।"
            },
            {
              "qEn": "Find the simple interest on ₹5,000 for 3 years at 8% per annum.",
              "qHi": "₹5,000 पर 3 वर्षों के लिए 8% वार्षिक दर से साधारण ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹1,200", "₹1,000", "₹1,500", "₹1,100"],
              "optionsHi": ["₹1,200", "₹1,000", "₹1,500", "₹1,100"],
              "answer": 0,
              "exp": "En: SI = $\\frac{P \\times R \\times T}{100} = \\frac{5000 \\times 8 \\times 3}{100} = 1200$.\nHi: साधारण ब्याज = $\\frac{P \\times R \\times T}{100} = \\frac{5000 \\times 8 \\times 3}{100} = 1200$।"
            },
            {
              "qEn": "Which organ of the human body produces bile juice?",
              "qHi": "मानव शरीर का कौन सा अंग पित्त रस (bile juice) का उत्पादन करता है?",
              "optionsEn": ["Liver", "Pancreas", "Stomach", "Kidney"],
              "optionsHi": ["यकृत (Liver)", "अग्नाशय (Pancreas)", "पेट", "गुर्दा (Kidney)"],
              "answer": 0,
              "exp": "En: Bile is produced by the liver and stored in the gallbladder.\nHi: पित्त का उत्पादन यकृत (लिवर) द्वारा किया जाता है और यह पित्ताशय में संग्रहित होता है।"
            },
            {
              "qEn": "The Battle of Haldighati was fought in which year?",
              "qHi": "हल्दीघाटी का युद्ध किस वर्ष लड़ा गया था?",
              "optionsEn": ["1576", "1526", "1556", "1761"],
              "optionsHi": ["1576", "1526", "1556", "1761"],
              "answer": 0,
              "exp": "En: The Battle of Haldighati was fought in 1576 between Maharana Pratap and the Mughal forces led by Man Singh I.\nHi: हल्दीघाटी का युद्ध 1576 में महाराणा प्रताप और मान सिंह प्रथम के नेतृत्व वाली मुगल सेना के बीच लड़ा गया था।"
            },
            {
              "qEn": "What is the pH value of a neutral solution at 25°C?",
              "qHi": "25°C पर एक उदासीन (neutral) विलयन का pH मान कितना होता है?",
              "optionsEn": ["7", "0", "14", "5"],
              "optionsHi": ["7", "0", "14", "5"],
              "answer": 0,
              "exp": "En: A pH of 7 indicates neutrality on the pH scale at standard temperature.\nHi: मानक तापमान पर pH पैमाने पर 7 का मान उदासीनता को दर्शाता है।"
            },
            {
              "qEn": "Who discovered the electron?",
              "qHi": "इलेक्ट्रॉन की खोज किसने की थी?",
              "optionsEn": ["J.J. Thomson", "James Chadwick", "Ernest Rutherford", "Goldstein"],
              "optionsHi": ["जे. जे. थॉमसन", "जेम्स चैंडविक", "अर्नेस्ट रदरफोर्ड", "गोल्डस्टीन"],
              "answer": 0,
              "exp": "En: J.J. Thomson discovered the electron in 1897.\nHi: जे. जे. थॉमसन ने 1897 में इलेक्ट्रॉन की खोज की थी।"
            },
            {
              "qEn": "If the average of 6 numbers is 12, what is their sum?",
              "qHi": "यदि 6 संख्याओं का औसत 12 है, तो उनका योग कितना है?",
              "optionsEn": ["72", "60", "66", "78"],
              "optionsHi": ["72", "60", "66", "78"],
              "answer": 0,
              "exp": "En: Sum = Average $\\times$ Count = $12 \\times 6 = 72$.\nHi: योग = औसत $\\times$ संख्या = $12 \\times 6 = 72$।"
            },
            {
              "qEn": "Which is the highest civilian award in India?",
              "qHi": "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?",
              "optionsEn": ["Bharat Ratna", "Padma Vibhushan", "Padma Shri", "Param Vir Chakra"],
              "optionsHi": ["भारत रत्न", "पद्म विभूषण", "पद्म श्री", "परम वीर चक्र"],
              "answer": 0,
              "exp": "En: Bharat Ratna is the highest civilian award of the Republic of India.\nHi: भारत रत्नगणराज्य भारत का सर्वोच्च नागरिक पुरस्कार है।"
            },
            {
              "qEn": "Which gas is filled in electric bulbs to prevent the oxidation of tungsten filament?",
              "qHi": "टंगस्टन फिलामेंट के ऑक्सीकरण को रोकने के लिए बिजली के बल्बों में कौन सी गैस भरी जाती है?",
              "optionsEn": ["Argon or Nitrogen", "Oxygen", "Hydrogen", "Carbon dioxide"],
              "optionsHi": ["ऑर्गन या नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
              "answer": 0,
              "exp": "En: Inactive gases like argon or nitrogen are filled in bulbs to prolong the life of the tungsten filament.\nHi: टंगस्टन फिलामेंट की आयु बढ़ाने के लिए बल्बों में ऑर्गन या नाइट्रोजन जैसी निष्क्रिय गैसें भरी जाती हैं।"
            },
            {
              "qEn": "What is the square root of 576?",
              "qHi": "576 का वर्गमूल क्या है?",
              "optionsEn": ["24", "26", "22", "28"],
              "optionsHi": ["24", "26", "22", "28"],
              "answer": 0,
              "exp": "En: $24 \\times 24 = 576$.\nHi: $24 \\times 24 = 576$।"
            },
            {
              "qEn": "Which strait separates India and Sri Lanka?",
              "qHi": "कौन सी जलसंधि भारत और श्रीलंका को अलग करती है?",
              "optionsEn": ["Palk Strait", "Malacca Strait", "Bering Strait", "Gibraltar Strait"],
              "optionsHi": ["पाक जलडमरूमध्य (Palk Strait)", "मलक्का जलडमरूमध्य", "बेरिंग जलडमरूमध्य", "जिब्राल्टर जलडमरूमध्य"],
              "answer": 0,
              "exp": "En: The Palk Strait separates Tamil Nadu state of India and the Mannar district of Sri Lanka.\nHi: पाक जलडमरूमध्य भारत के तमिलनाडु राज्य और श्रीलंका के मन्नार जिले को अलग करता है।"
            },
            {
              "qEn": "Who is known as the Father of Indian Cinema?",
              "qHi": "भारतीय सिनेमा के जनक के रूप में किसे जाना जाता है?",
              "optionsEn": ["Dadasaheb Phalke", "Satyajit Ray", "Raj Kapoor", "Mira Nair"],
              "optionsHi": ["दादासाहेब फाल्के", "सत्यजित रे", "राज कपूर", "मीरा नायर"],
              "answer": 0,
              "exp": "En: Dhundiraj Govind Phalke, popularly known as Dadasaheb Phalke, is regarded as the father of Indian cinema.\nHi: धुंडीराज गोविंद फल्के, जिन्हें दादासाहेब फाल्के के नाम से जाना जाता है, को भारतीय सिनेमा का जनक माना जाता है।"
            },
            {
              "qEn": "If $\\tan \\theta = \\frac{3}{4}$, find the value of $\\sin \\theta$.",
              "qHi": "यदि $\\tan \\theta = \\frac{3}{4}$ है, तो $\\sin \\theta$ का मान ज्ञात कीजिए।",
              "optionsEn": ["3/5", "4/5", "3/4", "4/3"],
              "optionsHi": ["3/5", "4/5", "3/4", "4/3"],
              "answer": 0,
              "exp": "En: Perpendicular = 3, Base = 4, Hypotenuse = $\\sqrt{3^2 + 4^2} = 5$. Thus, $\\sin \\theta = \\frac{3}{5}$.\nHi: लंब = 3, आधार = 4, कर्ण = $\\sqrt{3^2 + 4^2} = 5$। अतः $\\sin \\theta = \\frac{3}{5}$।"
            },
            {
              "qEn": "Which is the longest river in India?",
              "qHi": "भारत की सबसे लंबी नदी कौन सी है?",
              "optionsEn": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
              "optionsHi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
              "answer": 0,
              "exp": "En: The Ganga is the longest river originating within India, spanning over 2,500 km.\nHi: गंगा भारत के भीतर उत्पन्न होने वाली सबसे लंबी नदी है, जो 2,500 किमी से अधिक लंबी है।"
            },
            {
              "qEn": "What is the chemical name of baking powder's main alkaline component?",
              "qHi": "बेकिंग पाउडर के मुख्य क्षारीय घटक का रासायनिक नाम क्या है?",
              "optionsEn": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Sodium chloride"],
              "optionsHi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
              "answer": 0,
              "exp": "En: Baking powder contains sodium bicarbonate ($NaHCO_3$) mixed with a mild edible acid.\nHi: बेकिंग पाउडर में एक हल्के खाद्य अम्ल के साथ सोडियम बाइकार्बोनेट ($NaHCO_3$) मिला होता है।"
            },
            {
              "qEn": "The term 'Bully' is associated with which sport?",
              "qHi": "'बुली' (Bully) शब्द किस खेल से संबंधित है?",
              "optionsEn": ["Hockey", "Cricket", "Football", "Golf"],
              "optionsHi": ["हॉकी", "क्रिकेट", "फुटबॉल", "गोल्फ"],
              "answer": 0,
              "exp": "En: The term 'bully' is used in field hockey to restart play after an interruption.\nHi: 'बुली' शब्द का प्रयोग फील्ड हॉकी में खेल को पुनरारंभ करने के लिए किया जाता है।"
            },
            {
              "qEn": "Find the compound interest on ₹10,000 for 2 years at 10% per annum compounded annually.",
              "qHi": "₹10,000 पर 2 वर्षों के लिए 10% वार्षिक चक्रवृद्धि ब्याज की दर से चक्रवृद्धि ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹2,100", "₹2,000", "₹2,200", "₹1,900"],
              "optionsHi": ["₹2,100", "₹2,000", "₹2,200", "₹1,900"],
              "answer": 0,
              "exp": "En: Amount = $10000 \\times (1 + 10/100)^2 = 12100$. CI = $12100 - 10000 = 2100$.\nHi: मिश्रधन = $10000 \\times (1 + 10/100)^2 = 12100$। चक्रवृद्धि ब्याज = $12100 - 10000 = 2100$।"
            },
            {
              "qEn": "Who appoints the Prime Minister of India?",
              "qHi": "भारत के प्रधानमंत्री की नियुक्ति कौन करता है?",
              "optionsEn": ["President of India", "Chief Justice of India", "Lok Sabha Speaker", "Vice President"],
              "optionsHi": ["भारत के राष्ट्रपति", "भारत के मुख्य न्यायाधीश", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"],
              "answer": 0,
              "exp": "En: The President of India appoints the Prime Minister under Article 75.\nHi: भारत के राष्ट्रपति अनुच्छेद 75 के तहत प्रधानमंत्री की नियुक्ति करते हैं।"
            },
            {
              "qEn": "Which layer of the atmosphere reflects radio waves back to Earth?",
              "qHi": "वायुमंडल की कौन सी परत रेडियो तरंगों को वापस पृथ्वी पर परावर्तित करती है?",
              "optionsEn": ["Ionosphere", "Troposphere", "Stratosphere", "Mesosphere"],
              "optionsHi": ["आयनमंडल (Ionosphere)", "क्षोभमंडल", "समताप मंडल", "मध्यमंडल"],
              "answer": 0,
              "exp": "En: The ionosphere contains electrically charged particles that reflect radio waves back to Earth.\nHi: आयनमंडल में विद्युत रूप से आवेशित कण होते हैं जो रेडियो तरंगों को वापस पृथ्वी पर परावर्तित करते हैं।"
            },
            {
              "qEn": "What is the cube of 15?",
              "qHi": "15 का घन (cube) कितना होता है?",
              "optionsEn": ["3375", "225", "3755", "3125"],
              "optionsHi": ["3375", "225", "3755", "3125"],
              "answer": 0,
              "exp": "En: $15 \\times 15 \\times 15 = 3375$.\nHi: $15 \\times 15 \\times 15 = 3375$।"
            },
            {
              "qEn": "Which dance form originated in Andhra Pradesh?",
              "qHi": "कौन सा नृत्य रूप आंध्र प्रदेश में उत्पन्न हुआ?",
              "optionsEn": ["Kuchipudi", "Kathak", "Bharatanatyam", "Odissi"],
              "optionsHi": ["कुचिपुड़ी", "कथक", "भरतनाट्यम", "ओडिसी"],
              "answer": 0,
              "exp": "En: Kuchipudi is a major classical dance form originating from Andhra Pradesh.\nHi: कुचिपुड़ी आंध्र प्रदेश से उत्पन्न होने वाला एक प्रमुख शास्त्रीय नृत्य रूप है।"
            },
            {
              "qEn": "What is the main function of white blood cells (WBCs) in the human body?",
              "qHi": "मानव शरीर में श्वेत रक्त कोशिकाओं (WBCs) का मुख्य कार्य क्या है?",
              "optionsEn": ["Fight infections and immunity", "Transport oxygen", "Blood clotting", "Regulate body temperature"],
              "optionsHi": ["संक्रमण से लड़ना और प्रतिरक्षा प्रदान करना", "ऑक्सीजन का परिवहन", "रक्त का थक्का जमाना", "शरीर के तापमान को नियंत्रित करना"],
              "answer": 0,
              "exp": "En: WBCs are key components of the immune system that protect the body against pathogens.\nHi: WBC प्रतिरक्षा प्रणाली के मुख्य घटक हैं जो शरीर को रोगजनकों से बचाते हैं।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 4$, find the value of $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 4$ है, तो $x^3 + \\frac{1}{x^3}$ का मान ज्ञात कीजिए।",
              "optionsEn": ["52", "64", "48", "60"],
              "optionsHi": ["52", "64", "48", "60"],
              "answer": 0,
              "exp": "En: Formula: $k^3 - 3k = 4^3 - 3(4) = 64 - 12 = 52$.\nHi: सूत्र: $k^3 - 3k = 4^3 - 3(4) = 64 - 12 = 52$।"
            },
            {
              "qEn": "Which empire was founded by Harihara and Bukka in 1336?",
              "qHi": "1336 में हरिहर और बुक्का द्वारा किस साम्राज्य की स्थापना की गई थी?",
              "optionsEn": ["Vijayanagara Empire", "Bahmani Kingdom", "Maratha Empire", "Mughal Empire"],
              "optionsHi": ["विजयनगर साम्राज्य", "बहमनी साम्राज्य", "मराठा साम्राज्य", "मुगल साम्राज्य"],
              "answer": 0,
              "exp": "En: Harihara I and Bukka Raya I founded the Vijayanagara Empire along the Tungabhadra River.\nHi: हरिहर प्रथम और बुक्का राय प्रथम ने तुंगभद्रा नदी के तट पर विजयनगर साम्राज्य की स्थापना की थी।"
            },
            {
              "qEn": "What is the chemical formula of heavy water?",
              "qHi": "भारी जल (heavy water) का रासायनिक सूत्र क्या है?",
              "optionsEn": ["D2O", "H2O", "H2O2", "T2O"],
              "optionsHi": ["D2O", "H2O", "H2O2", "T2O"],
              "answer": 0,
              "exp": "En: Heavy water is deuterium oxide ($D_2O$), used as a neutron moderator in nuclear reactors.\nHi: भारी जल ड्यूटेरियम ऑक्साइड ($D_2O$) है, जिसका उपयोग परमाणु रिएक्टरों में न्यूट्रॉन मंदक के रूप में किया जाता है।"
            },
            {
              "qEn": "Which is the smallest state in India by area?",
              "qHi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
              "optionsEn": ["Goa", "Sikkim", "Tripura", "Nagaland"],
              "optionsHi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
              "answer": 0,
              "exp": "En: Goa is the smallest state in India by area.\nHi: क्षेत्रफल की दृष्टि से गोवा भारत का सबसे छोटा राज्य है।"
            },
            {
              "qEn": "If the selling price of 15 articles equals the cost price of 20 articles, find the profit percentage.",
              "qHi": "यदि 15 वस्तुओं का विक्रय मूल्य 20 वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत ज्ञात कीजिए।",
              "optionsEn": ["33.33%", "25%", "20%", "50%"],
              "optionsHi": ["33.33%", "25%", "20%", "50%"],
              "answer": 0,
              "exp": "En: Let CP of 1 = 1. SP of 15 = 20 $\\implies$ profit on 15 = 5. Profit % = $(5/15) \\times 100 = 33.33\\%$.\nHi: माना 1 का क्रय मूल्य = 1। 15 का विक्रय मूल्य = 20 $\\implies$ 15 पर लाभ = 5। लाभ % = $(5/15) \\times 100 = 33.33\\%$।"
            },
            {
              "qEn": "Who discovered Penicillin?",
              "qHi": "पेनिसिलिन की खोज किसने की थी?",
              "optionsEn": ["Alexander Fleming", "Louis Pasteur", "Edward Jenner", "Robert Koch"],
              "optionsHi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "एडवर्ड जेनर", "रॉबर्ट कोच"],
              "answer": 0,
              "exp": "En: Alexander Fleming discovered penicillin in 1928 from the fungus Penicillium notatum.\nHi: अलेक्जेंडर फ्लेमिंग ने 1928 में पेनिसिलियम नोटाटम कवक से पेनिसिलिन की खोज की थी।"
            },
            {
              "qEn": "Which fundamental right cannot be suspended even during a National Emergency?",
              "qHi": "राष्ट्रीय आपातकाल के दौरान भी किस मौलिक अधिकार को निलंबित नहीं किया जा सकता है?",
              "optionsEn": ["Articles 20 and 21", "Article 19", "Article 14", "Article 32"],
              "optionsHi": ["अनुच्छेद 20 और 21", "अनुच्छेद 19", "अनुच्छेद 14", "अनुच्छेद 32"],
              "answer": 0,
              "exp": "En: Under the 44th Amendment, the rights guaranteed under Articles 20 and 21 cannot be suspended during emergencies.\nHi: 44वें संशोधन के तहत आपातकाल के दौरान अनुच्छेद 20 और 21 के तहत दिए गए अधिकारों को निलंबित नहीं किया जा सकता है।"
            },
            {
              "qEn": "What is the value of $\\log_{10} 1000$?",
              "qHi": "$\\log_{10} 1000$ का मान क्या है?",
              "optionsEn": ["3", "2", "4", "1"],
              "optionsHi": ["3", "2", "4", "1"],
              "answer": 0,
              "exp": "En: Since $10^3 = 1000$, $\\log_{10} 1000 = 3$.\nHi: चूकि $10^3 = 1000$ है, इसलिए $\\log_{10} 1000 = 3$।"
            },
            {
              "qEn": "Which plateau is known as the 'Roof of the World'?",
              "qHi": "किस पठार को 'विश्व की छत' (Roof of the World) कहा जाता है?",
              "optionsEn": ["Pamir Plateau", "Deccan Plateau", "Tibetan Plateau", "Chota Nagpur Plateau"],
              "optionsHi": ["पामीर का पठार", "दक्कन का पठार", "तिब्बत का पठार", "छोटा नागपुर पठार"],
              "answer": 0,
              "exp": "En: The Pamir Mountains and its associated plateau are historically referred to as the Roof of the World.\nHi: पामीर की पहाड़ियों और इसके संबंधित पठार को ऐतिहासिक रूप से विश्व की छत कहा जाता है।"
            },
            {
              "qEn": "What is the standard unit of frequency?",
              "qHi": "आवृति (frequency) की मानक इकाई क्या है?",
              "optionsEn": ["Hertz", "Joule", "Pascal", "Watt"],
              "optionsHi": ["हर्ट्ज (Hertz)", "जूल", "पास्कल", "वाट"],
              "answer": 0,
              "exp": "En: The SI unit of frequency is the hertz (Hz), representing cycles per second.\nHi: आवृत्ति की एसआई इकाई हर्ट्ज (Hz) है, जो प्रति सेकंड चक्रों को दर्शाती है।"
            },
            {
              "qEn": "If $a - b = 4$ and $ab = 21$, find the value of $a^2 + b^2$.",
              "qHi": "यदि $a - b = 4$ और $ab = 21$ है, तो $a^2 + b^2$ का मान ज्ञात कीजिए।",
              "optionsEn": ["58", "50", "46", "62"],
              "optionsHi": ["58", "50", "46", "62"],
              "answer": 0,
              "exp": "En: $(a - b)^2 = a^2 + b^2 - 2ab \\implies 4^2 = a^2 + b^2 - 42 \\implies a^2 + b^2 = 58$.\nHi: $(a - b)^2 = a^2 + b^2 - 2ab \\implies 4^2 = a^2 + b^2 - 42 \\implies a^2 + b^2 = 58$।"
            },
            {
              "qEn": "Who wrote 'Arthashastra'?",
              "qHi": "'अर्थशास्त्र' के लेखक कौन हैं?",
              "optionsEn": ["Kautilya", "Megasthenes", "Kalidasa", "Bana Bhatta"],
              "optionsHi": ["कौटिल्य (चाणक्य)", "मेगस्थनीज", "कालिदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Arthashastra, an ancient Indian treatise on statecraft, was written by Kautilya (Chanakya).\nHi: अर्थशास्त्र, राज्यकला पर एक प्राचीन भारतीय ग्रंथ, कौटिल्य (चाणक्य) द्वारा लिखा गया था।"
            },
            {
              "qEn": "Which instrument is used to measure humidity?",
              "qHi": "आर्द्रता (humidity) मापने के लिए किस उपकरण का उपयोग किया जाता है?",
              "optionsEn": ["Hygrometer", "Barometer", "Anemometer", "Hydrometer"],
              "optionsHi": ["हाइग्रोमीटर", "बैरोमीटर", "एनीमोमीटर", "हाइड्रोमीटर"],
              "answer": 0,
              "exp": "En: A hygrometer is an instrument used for measuring the moisture content in the atmosphere.\nHi: हाइग्रोमीटर वायुमंडल में नमी की मात्रा मापने के लिए उपयोग किया जाने वाला उपकरण है।"
            },
            {
              "qEn": "Find the LCM of 12, 15, and 20.",
              "qHi": "12, 15 और 20 का लघुतम समापवर्त्य (LCM) ज्ञात कीजिए।",
              "optionsEn": ["60", "120", "180", "90"],
              "optionsHi": ["60", "120", "180", "90"],
              "answer": 0,
              "exp": "En: Prime factorization gives LCM = $2^2 \\times 3 \\times 5 = 60$.\nHi: अभाज्य गुणनखंड विधि से LCM = $2^2 \\times 3 \\times 5 = 60$।"
            },
            {
              "qEn": "Which gas turns lime water milky?",
              "qHi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
              "optionsEn": ["Carbon dioxide", "Carbon monoxide", "Nitrogen dioxide", "Sulfur dioxide"],
              "optionsHi": ["कार्बन डाइऑक्साइड", "कार्बन मोनोऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "सल्फर डाइऑक्साइड"],
              "answer": 0,
              "exp": "En: Passing carbon dioxide through lime water forms insoluble calcium carbonate, turning it milky.\nHi: चूने के पानी से कार्बन डाइऑक्साइड गुजारने पर अघुलनशील कैल्शियम कार्बोनेट बनता है, जिससे पानी दूधिया हो जाता है।"
            },
            {
              "qEn": "Who was the founder of the Maurya Empire?",
              "qHi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
              "optionsHi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
              "answer": 0,
              "exp": "En: Chandragupta Maurya founded the Maurya Empire in 322 BCE with Chanakya's help.\nHi: चंद्रगुप्त मौर्य ने चाणक्य की सहायता से 322 ईसा पूर्व में मौर्य साम्राज्य की स्थापना की थी।"
            },
            {
              "qEn": "What is the chemical name of vinegar?",
              "qHi": "सिरका (vinegar) का रासायनिक नाम क्या है?",
              "optionsEn": ["Dilute acetic acid", "Citric acid", "Formic acid", "Oxalic acid"],
              "optionsHi": ["तनु एसिटिक एसिड (Dilute acetic acid)", "साइट्रिक एसिड", "फॉर्मिक एसिड", "ऑक्जेलिक एसिड"],
              "answer": 0,
              "exp": "En: Vinegar is typically a 4-8% solution of acetic acid in water.\nHi: सिरका आमतौर पर पानी में एसिटिक एसिड का 4-8% घोल होता है।"
            },
            {
              "qEn": "If the cost price of an article is ₹400 and it is sold at a 20% profit, find the selling price.",
              "qHi": "यदि किसी वस्तु का क्रय मूल्य ₹400 है और उसे 20% लाभ पर बेचा जाता है, तो विक्रय मूल्य ज्ञात कीजिए।",
              "optionsEn": ["₹480", "₹450", "₹460", "₹500"],
              "optionsHi": ["₹480", "₹450", "₹460", "₹500"],
              "answer": 0,
              "exp": "En: SP = $400 \\times \\frac{120}{100} = ₹480$.\nHi: विक्रय मूल्य = $400 \\times \\frac{120}{100} = ₹480$।"
            },
            {
              "qEn": "Which national park is famous for the Asiatic lion?",
              "qHi": "कौन सा राष्ट्रीय उद्यान एशियाई शेर के लिए प्रसिद्ध है?",
              "optionsEn": ["Gir National Park", "Jim Corbett National Park", "Sundarbans National Park", "Kaziranga National Park"],
              "optionsHi": ["गीर राष्ट्रीय उद्यान", "जिम कॉर्बेट राष्ट्रीय उद्यान", "सुंदरबन राष्ट्रीय उद्यान", "काजीरंगा राष्ट्रीय उद्यान"],
              "answer": 0,
              "exp": "En: Gir National Park in Gujarat is the only natural habitat of the Asiatic lion.\nHi: गुजरात का गीर राष्ट्रीय उद्यान एशियाई शेर का एकमात्र प्राकृतिक आवास है।"
            },
            {
              "qEn": "What is the value of $\\cos 0^\\circ$?",
              "qHi": "$\\cos 0^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "Undefined"],
              "optionsHi": ["1", "0", "1/2", "परिभाषित नहीं"],
              "answer": 0,
              "exp": "En: In a right triangle or unit circle, $\\cos 0^\\circ = 1$.\nHi: समकोण त्रिभुज या इकाई वृत्त में, $\\cos 0^\\circ = 1$ होता है।"
            },
            {
              "qEn": "Who wrote the national song 'Vande Mataram'?",
              "qHi": "राष्ट्रीय गीत 'वंदे मातरम' किसने लिखा है?",
              "optionsEn": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Muhammad Iqbal", "Sarojini Naidu"],
              "optionsHi": ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "मोहम्मद इकबाल", "सरोजिनी नायडू"],
              "answer": 0,
              "exp": "En: 'Vande Mataram' was written by Bankim Chandra Chatterjee in his novel Anandamath.\nHi: 'वंदे मातरम' बंकिम चंद्र चटर्जी द्वारा उनके उपन्यास आनंदमठ में लिखा गया था।"
            },
            {
              "qEn": "Which metal is liquid at room temperature?",
              "qHi": "कमरे के तापमान पर कौन सी धातु तरल अवस्था में होती है?",
              "optionsEn": ["Mercury", "Bromine", "Gallium", "Sodium"],
              "optionsHi": ["पारा (Mercury)", "ब्रोमीन", "गैलियम", "सोडियम"],
              "answer": 0,
              "exp": "En: Mercury is the only metallic element liquid at standard room temperature and pressure.\nHi: पारा एकमात्र ऐसी धात्विक तत्व है जो मानक कमरे के तापमान पर तरल होती है।"
            },
            {
              "qEn": "Find the area of a circle whose radius is 7 cm. (Use $\\pi = \\frac{22}{7}$)",
              "qHi": "उस वृत्त का क्षेत्रफल ज्ञात कीजिए जिसकी त्रिज्या 7 सेमी है। ($\\pi = \\frac{22}{7}$ का प्रयोग करें)",
              "optionsEn": ["154 sq cm", "132 sq cm", "88 sq cm", "44 sq cm"],
              "optionsHi": ["154 वर्ग सेमी", "132 वर्ग सेमी", "88 वर्ग सेमी", "44 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Area = $\\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 154$ sq cm.\nHi: क्षेत्रफल = $\\pi r^2 = \\frac{22}{7} \\times 7 \\times 7 = 154$ वर्ग सेमी।"
            },
            {
              "qEn": "Which institution regulates the monetary policy in India?",
              "qHi": "भारत में मौद्रिक नीति को कौन सी संस्था नियंत्रित करती है?",
              "optionsEn": ["Reserve Bank of India", "State Bank of India", "Ministry of Finance", "SEBI"],
              "optionsHi": ["भारतीय रिजर्व बैंक (RBI)", "भारतीय स्टेट बैंक", "वित्त मंत्रालय", "सेबी (SEBI)"],
              "answer": 0,
              "exp": "En: The Reserve Bank of India (RBI) formulates and implements monetary policy in India.\nHi: भारतीय रिजर्व बैंक (RBI) भारत में मौद्रिक नीति तैयार करता है और लागू करता है।"
            },
            {
              "qEn": "What is the chemical formula of common salt?",
              "qHi": "साधारण नमक का रासायनिक सूत्र क्या है?",
              "optionsEn": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "optionsHi": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "answer": 0,
              "exp": "En: Sodium chloride ($NaCl$) is commonly known as table salt or common salt.\nHi: सोडियम क्लोराइड ($NaCl$) को आमतौर पर टेबल सॉल्ट या साधारण नमक कहा जाता है।"
            },
            {
              "qEn": "If $a:b = 2:3$ and $b:c = 4:5$, find $a:c$.",
              "qHi": "यदि $a:b = 2:3$ और $b:c = 4:5$ है, तो $a:c$ ज्ञात कीजिए।",
              "optionsEn": ["8:15", "6:15", "8:13", "10:12"],
              "optionsHi": ["8:15", "6:15", "8:13", "10:12"],
              "answer": 0,
              "exp": "En: $a:c = (a:b) \\times (b:c) = \\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15$.\nHi: $a:c = (a:b) \\times (b:c) = \\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$।"
            },
            {
              "qEn": "Which river valley civilization was contemporary to the Indus Valley Civilization?",
              "qHi": "सिंधु घाटी सभ्यता के समकालीन कौन सी नदी घाटी सभ्यता थी?",
              "optionsEn": ["Mesopotamian Civilization", "Incan Civilization", "Mayan Civilization", "Aztec Civilization"],
              "optionsHi": ["मेसोपोटामिया की सभ्यता", "इंका सभ्यता", "माया सभ्यता", "एजटेक सभ्यता"],
              "answer": 0,
              "exp": "En: The Mesopotamian and Egyptian civilizations were contemporaries of the Indus Valley Civilization.\nHi: मेसोपोटामिया और मिस्र की सभ्यताएं सिंधु घाटी सभ्यता की समकालीन थीं।"
            },
            {
              "qEn": "What is the unit of electric current?",
              "qHi": "विद्युत धारा (electric current) की इकाई क्या है?",
              "optionsEn": ["Ampere", "Volt", "Ohm", "Watt"],
              "optionsHi": ["एम्पीयर (Ampere)", "वोल्ट", "ओम", "वाट"],
              "answer": 0,
              "exp": "En: The SI unit of electric current is the ampere (A).\nHi: विद्युत धारा की एसआई इकाई एम्पीयर (A) है।"
            },
            {
              "qEn": "Who is the executive head of the Indian Union?",
              "qHi": "भारतीय संघ का कार्यकारी प्रमुख कौन होता है?",
              "optionsEn": ["President of India", "Prime Minister", "Chief Justice", "Speaker of Lok Sabha"],
              "optionsHi": ["भारत के राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"],
              "answer": 0,
              "exp": "En: Under Article 53, the executive power of the Union is vested in the President.\nHi: अनुच्छेद 53 के तहत, संघ की कार्यकारी शक्ति राष्ट्रपति में निहित होती है।"
            },
            {
              "qEn": "If $x^2 - 5x + 6 = 0$, find the roots of the equation.",
              "qHi": "यदि $x^2 - 5x + 6 = 0$ है, तो समीकरण के मूल ज्ञात कीजिए।",
              "optionsEn": ["2, 3", "-2, -3", "1, 6", "-1, -6"],
              "optionsHi": ["2, 3", "-2, -3", "1, 6", "-1, -6"],
              "answer": 0,
              "exp": "En: Factoring: $(x-2)(x-3) = 0 \\implies x = 2, 3$.\nHi: गुणनखंड करने पर: $(x-2)(x-3) = 0 \\implies x = 2, 3$।"
            },
            {
              "qEn": "Which vitamin deficiency causes scurvy?",
              "qHi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
              "optionsEn": ["Vitamin C", "Vitamin A", "Vitamin B1", "Vitamin D"],
              "optionsHi": ["विटामिन C", "विटामिन A", "विटामिन B1", "विटामिन D"],
              "answer": 0,
              "exp": "En: Scurvy is characterized by bleeding gums and weakness due to Vitamin C deficiency.\nHi: स्कर्वी विटामिन C की कमी के कारण मसूड़ों से खून आने और कमजोरी की विशेषता वाला रोग है।"
            },
            {
              "qEn": "The Tropic of Cancer passes through how many Indian states?",
              "qHi": "कर्क रेखा भारत के कितने राज्यों से होकर गुजरती है?",
              "optionsEn": ["8", "7", "9", "6"],
              "optionsHi": ["8", "7", "9", "6"],
              "answer": 0,
              "exp": "En: The Tropic of Cancer passes through 8 states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.\nHi: कर्क रेखा 8 राज्यों से होकर गुजरती है: गुजरात, राजस्थान, MP, छत्तीसगढ़, झारखंड, पश्चिम बंगाल, त्रिपुरा और मिजोरम।"
            },
            {
              "qEn": "What is the HCF of 24 and 36?",
              "qHi": "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?",
              "optionsEn": ["12", "6", "18", "8"],
              "optionsHi": ["12", "6", "18", "8"],
              "answer": 0,
              "exp": "En: The highest common factor of 24 and 36 is 12.\nHi: 24 और 36 का महत्तम समापवर्तक (HCF) 12 है।"
            },
            {
              "qEn": "Which is the deepest ocean in the world?",
              "qHi": "विश्व का सबसे गहरा महासागर कौन सा है?",
              "optionsEn": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
              "optionsHi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
              "answer": 0,
              "exp": "En: The Pacific Ocean is the deepest and largest ocean, containing the Mariana Trench.\nHi: प्रशांत महासागर सबसे गहरा और सबसे बड़ा महासागर है, जिसमें मरियाना ट्रेंच स्थित है।"
            },
            {
              "qEn": "Who discovered X-rays?",
              "qHi": "एक्स-रे (X-rays) की खोज किसने की थी?",
              "optionsEn": ["Wilhelm Roentgen", "Marie Curie", "Henri Becquerel", "J.J. Thomson"],
              "optionsHi": ["विल्हेम रोंटजेन", "मैरी क्यूरी", "हेनरी बेकरेल", "जे. जे. थॉमसन"],
              "answer": 0,
              "exp": "En: Wilhelm Roentgen discovered X-radiation in 1895.\nHi: विल्हेम रोंटजेन ने 1895 में एक्स-रे विकिरण की खोज की थी।"
            },
            {
              "qEn": "If the perimeter of a square is 40 cm, what is its area?",
              "qHi": "यदि किसी वर्ग का परिमाप 40 सेमी है, तो उसका क्षेत्रफल क्या है?",
              "optionsEn": ["100 sq cm", "160 sq cm", "80 sq cm", "120 sq cm"],
              "optionsHi": ["100 वर्ग सेमी", "160 वर्ग सेमी", "80 वर्ग सेमी", "120 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Side = $40 / 4 = 10$ cm. Area = $10 \\times 10 = 100$ sq cm.\nHi: भुजा = $40 / 4 = 10$ सेमी। क्षेत्रफल = $10 \\times 10 = 100$ वर्ग सेमी।"
            },
            {
              "qEn": "Which amendment added the Fundamental Duties to the Indian Constitution?",
              "qHi": "किस संशोधन द्वारा भारतीय संविधान में मौलिक कर्तव्यों को जोड़ा गया था?",
              "optionsEn": ["42nd Amendment", "44th Amendment", "86th Amendment", "73rd Amendment"],
              "optionsHi": ["42वां संशोधन", "44वां संशोधन", "86वां संशोधन", "73वां संशोधन"],
              "answer": 0,
              "exp": "En: The 42nd Amendment Act (1976) added Part IV-A containing Fundamental Duties.\nHi: 42वें संशोधन अधिनियम (1976) ने मौलिक कर्तव्यों से युक्त भाग IV-A को जोड़ा।"
            },
            {
              "qEn": "What is the boiling point of pure water at standard atmospheric pressure?",
              "qHi": "मानक वायुमंडलीय दाब पर शुद्ध जल का क्वथनांक (boiling point) कितना होता है?",
              "optionsEn": ["100°C", "0°C", "212°C", "373°C"],
              "optionsHi": ["100°C", "0°C", "212°C", "373°C"],
              "answer": 0,
              "exp": "En: Pure water boils at 100°C (212°F) at 1 atm pressure.\nHi: 1 वायुमंडलीय दाब पर शुद्ध जल 100°C पर उबलता है।"
            },
            {
              "qEn": "If $\\sin \\theta = \\frac{1}{2}$, what is the value of $\\theta$ (where $\\theta$ is acute)?",
              "qHi": "यदि $\\sin \\theta = \\frac{1}{2}$ है, तो $\\theta$ का मान क्या है (जहाँ $\\theta$ न्यून कोण है)?",
              "optionsEn": ["30°", "45°", "60°", "90°"],
              "optionsHi": ["30°", "45°", "60°", "90°"],
              "answer": 0,
              "exp": "En: The standard trigonometric table shows $\\sin 30^\\circ = 1/2$.\nHi: मानक त्रिकोणमितीय सारणी दर्शाती है कि $\\sin 30^\\circ = 1/2$ होता है।"
            },
            {
              "qEn": "Who founded the Brahmo Samaj in 1828?",
              "qHi": "1828 में ब्रह्म समाज की स्थापना किसने की थी?",
              "optionsEn": ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Atmaram Pandurang"],
              "optionsHi": ["राजा राममोहन राय", "स्वामी विवेकानंद", "दयानंद सरस्वती", "आत्माराम पांडुरंग"],
              "answer": 0,
              "exp": "En: Raja Ram Mohan Roy founded Brahmo Samaj in 1828 to reform socio-religious practices in India.\nHi: राजा राममोहन राय ने भारत में सामाजिक-धार्मिक प्रथाओं में सुधार के लिए 1828 में ब्रह्म समाज की स्थापना की।"
            },
            {
              "qEn": "Which gas is known as laughing gas?",
              "qHi": "किस गैस को 'लाफिंग गैस' (हंसाने वाली गैस) कहा जाता है?",
              "optionsEn": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
              "optionsHi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
              "answer": 0,
              "exp": "En: Nitrous oxide ($N_2O$) is commonly known as laughing gas.\nHi: नाइट्रस ऑक्साइड ($N_2O$) को आमतौर पर लाफिंग गैस कहा जाता है।"
            },
            {
              "qEn": "Find the simple interest on ₹8,000 at 5% per annum for 2 years.",
              "qHi": "₹8,000 पर 5% वार्षिक दर से 2 वर्ष का साधारण ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹800", "₹400", "₹1,000", "₹600"],
              "optionsHi": ["₹800", "₹400", "₹1,000", "₹600"],
              "answer": 0,
              "exp": "En: SI = $\\frac{8000 \\times 5 \\times 2}{100} = 800$.\nHi: साधारण ब्याज = $\\frac{8000 \\times 5 \\times 2}{100} = 800$।"
            },
            {
              "qEn": "Which is the largest gland in the human body?",
              "qHi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
              "optionsEn": ["Liver", "Pancreas", "Thyroid", "Pituitary"],
              "optionsHi": ["यकृत (Liver)", "अग्नाशय", "थायराइड", "पिट्यूटरी"],
              "answer": 0,
              "exp": "En: The liver is the largest internal organ and gland in the human body.\nHi: यकृत मानव शरीर का सबसे बड़ा आंतरिक अंग और ग्रंथि है।"
            },
            {
              "qEn": "What is the value of $(12)^2 + (5)^2$?",
              "qHi": "$(12)^2 + (5)^2$ का मान क्या है?",
              "optionsEn": ["169", "144", "121", "196"],
              "optionsHi": ["169", "144", "121", "196"],
              "answer": 0,
              "exp": "En: $144 + 25 = 169$ (which is $13^2$).\nHi: $144 + 25 = 169$ (जो कि $13^2$ है)।"
            },
            {
              "qEn": "Who was the first woman President of the Indian National Congress?",
              "qHi": "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?",
              "optionsEn": ["Annie Besant", "Sarojini Naidu", "Nellie Sengupta", "Indira Gandhi"],
              "optionsHi": ["एनी बेसेंट", "सरोजिनी नायडू", "नेली सेनगुप्ता", "इंदिरा गांधी"],
              "answer": 0,
              "exp": "En: Annie Besant was the first woman President of INC (Calcutta Session, 1917).\nHi: एनी बेसेंट कांग्रेस की पहली महिला अध्यक्ष थीं (कलकत्ता अधिवेशन, 1917)।"
            },
            {
              "qEn": "Which planet is known as the Red Planet?",
              "qHi": "किस ग्रह को 'लाल ग्रह' (Red Planet) कहा जाता है?",
              "optionsEn": ["Mars", "Venus", "Jupiter", "Saturn"],
              "optionsHi": ["मंगल (Mars)", "शुक्र", "बृहस्पति", "शनि"],
              "answer": 0,
              "exp": "En: Mars appears red due to iron oxide prevalent on its surface.\nHi: सतह पर आयरन ऑक्साइड की अधिकता के कारण मंगल ग्रह लाल दिखाई देता है।"
            },
            {
              "qEn": "What is the formula for the volume of a cylinder?",
              "qHi": "बेलन (cylinder) के आयतन का सूत्र क्या है?",
              "optionsEn": ["$\\pi r^2 h$", "$2 \\pi r h$", "$\\frac{1}{3} \\pi r^2 h$", "$4 \\pi r^2$"],
              "optionsHi": ["$\\pi r^2 h$", "$2 \\pi r h$", "$\\frac{1}{3} \\pi r^2 h$", "$4 \\pi r^2$"],
              "answer": 0,
              "exp": "En: Volume of a cylinder is base area multiplied by height: $\\pi r^2 h$.\nHi: बेलन का आयतन आधार का क्षेत्रफल गुणा ऊँचाई होता है: $\\pi r^2 h$।"
            },
            {
              "qEn": "Which article of the Constitution deals with the amendment procedure?",
              "qHi": "संविधान का कौन सा अनुच्छेद संशोधन प्रक्रिया से संबंधित है?",
              "optionsEn": ["Article 368", "Article 356", "Article 370", "Article 324"],
              "optionsHi": ["अनुच्छेद 368", "अनुच्छेद 356", "अनुच्छेद 370", "अनुच्छेद 324"],
              "answer": 0,
              "exp": "En: Article 368 in Part XX of the Constitution deals with the amendment procedure.\nHi: संविधान के भाग XX में अनुच्छेद 368 संविधान संशोधन प्रक्रिया से संबंधित है।"
            },
            {
              "qEn": "What is the chemical name of baking soda?",
              "qHi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
              "optionsEn": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Sodium chloride"],
              "optionsHi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
              "answer": 0,
              "exp": "En: Baking soda is sodium bicarbonate ($NaHCO_3$).\nHi: बेकिंग सोडा सोडियम बाइकार्बोनेट ($NaHCO_3$) है।"
            },
            {
              "qEn": "If the sum of two numbers is 25 and their difference is 5, find the numbers.",
              "qHi": "यदि दो संख्याओं का योग 25 है और उनका अंतर 5 है, तो संख्याएँ ज्ञात कीजिए।",
              "optionsEn": ["15, 10", "16, 9", "14, 11", "17, 8"],
              "optionsHi": ["15, 10", "16, 9", "14, 11", "17, 8"],
              "answer": 0,
              "exp": "En: Solving $x+y=25$ and $x-y=5$ gives $x=15, y=10$.\nHi: $x+y=25$ और $x-y=5$ को हल करने पर $x=15, y=10$ प्राप्त होता है।"
            },
            {
              "qEn": "Which instrument is used to measure blood pressure?",
              "qHi": "रक्तचाप (blood pressure) मापने के लिए किस उपकरण का उपयोग किया जाता है?",
              "optionsEn": ["Sphygmomanometer", "Barometer", "Thermometer", "Stethoscope"],
              "optionsHi": ["स्फिग्मोमैनोमीटर", "बैरोमीटर", "थर्मामीटर", "स्टेथोस्कोप"],
              "answer": 0,
              "exp": "En: A sphygmomanometer is used to measure blood pressure.\nHi: रक्तचाप मापने के लिए स्फिग्मोमैनोमीटर का उपयोग किया जाता है।"
            },
            {
              "qEn": "Who propounded the Theory of Relativity?",
              "qHi": "सापेक्षता का सिद्धांत (Theory of Relativity) किसने प्रतिपादित किया था?",
              "optionsEn": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
              "optionsHi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "नील्स बोहर"],
              "answer": 0,
              "exp": "En: Albert Einstein developed the special and general theories of relativity.\nHi: अल्बर्ट आइंस्टीन ने सापेक्षता के विशेष और सामान्य सिद्धांतों को विकसित किया।"
            },
            {
              "qEn": "Find the median of the data: 12, 7, 15, 10, 19.",
              "qHi": "आँकड़ों की माध्यिका (median) ज्ञात कीजिए: 12, 7, 15, 10, 19।",
              "optionsEn": ["12", "10", "15", "11"],
              "optionsHi": ["12", "10", "15", "11"],
              "answer": 0,
              "exp": "En: Ascending order: 7, 10, 12, 15, 19. The middle value is 12.\nHi: आरोही क्रम: 7, 10, 12, 15, 19। बीच का मान 12 है।"
            },
            {
              "qEn": "Which civilization built Machu Picchu?",
              "qHi": "माचु पिच्चू (Machu Picchu) का निर्माण किस सभ्यता ने किया था?",
              "optionsEn": ["Inca Civilization", "Maya Civilization", "Aztec Civilization", "Egyptian Civilization"],
              "optionsHi": ["इंका सभ्यता", "माया सभ्यता", "एजटेक सभ्यता", "मिस्र की सभ्यता"],
              "answer": 0,
              "exp": "En: Machu Picchu is an Incan citadel located in the Andes of Peru.\nHi: माचु पिच्चू पेरू के एंडीज में स्थित एक इंका गढ़ है।"
            },
            {
              "qEn": "What is the unit of electrical resistance?",
              "qHi": "विद्युत प्रतिरोध की इकाई क्या है?",
              "optionsEn": ["Ohm", "Ampere", "Volt", "Watt"],
              "optionsHi": ["ओम (Ohm)", "एम्पीयर", "वोल्ट", "वाट"],
              "answer": 0,
              "exp": "En: The SI unit of electrical resistance is the ohm ($\\Omega$).\nHi: विद्युत प्रतिरोध की एसआई इकाई ओम ($\\Omega$) है।"
            },
            {
              "qEn": "If $x^2 + y^2 = 25$ and $xy = 12$, find the value of $x + y$.",
              "qHi": "यदि $x^2 + y^2 = 25$ और $xy = 12$ है, तो $x + y$ का मान ज्ञात कीजिए।",
              "optionsEn": ["7", "5", "12", "13"],
              "optionsHi": ["7", "5", "12", "13"],
              "answer": 0,
              "exp": "En: $(x+y)^2 = 25 + 2(12) = 49 \\implies x+y = 7$.\nHi: $(x+y)^2 = 25 + 2(12) = 49 \\implies x+y = 7$।"
            },
            {
              "qEn": "Which gas is most abundant in Earth's atmosphere?",
              "qHi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे प्रचुर मात्रा में पाई जाती है?",
              "optionsEn": ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"],
              "optionsHi": ["नाइट्रोजन", "ऑक्सीजन", "ऑर्गन", "कार्बन डाइऑक्साइड"],
              "answer": 0,
              "exp": "En: Nitrogen makes up about 78% of Earth's atmosphere.\nHi: नाइट्रोजन पृथ्वी के वायुमंडल का लगभग 78% हिस्सा बनाती है।"
            },
            {
              "qEn": "Who was the founder of the Gupta Empire?",
              "qHi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": ["Sri Gupta", "Chandragupta I", "Samudragupta", "Kumargupta"],
              "optionsHi": ["श्री गुप्त", "चंद्रगुप्त प्रथम", "समुद्रगुप्त", "कुमारगुप्त"],
              "answer": 0,
              "exp": "En: Sri Gupta founded the Gupta dynasty around 240 CE.\nHi: श्री गुप्त ने लगभग 240 ईस्वी में गुप्त वंश की स्थापना की थी।"
            },
            {
              "qEn": "What is the square of 35?",
              "qHi": "35 का वर्ग क्या है?",
              "optionsEn": ["1225", "1125", "1325", "1025"],
              "optionsHi": ["1225", "1125", "1325", "1025"],
              "answer": 0,
              "exp": "En: $35 \\times 35 = 1225$.\nHi: $35 \\times 35 = 1225$।"
            },
            {
              "qEn": "Which metal is commonly known as quicksilver?",
              "qHi": "किस धातु को सामान्यतः 'क्विकसिलवर' (Quicksilver) कहा जाता है?",
              "optionsEn": ["Mercury", "Silver", "Lead", "Zinc"],
              "optionsHi": ["पारा (Mercury)", "चांदी", "सीसा", "जस्ता"],
              "answer": 0,
              "exp": "En: Mercury is historically known as quicksilver because it is a liquid metal.\nHi: पारा को ऐतिहासिक रूप से क्विकसिलवर कहा जाता है क्योंकि यह एक तरल धातु है।"
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "Existing Source": {
          "Shift 1": [
            {
              "qEn": "Which Article deals with the Right to Equality?",
              "qHi": "कौन सा अनुच्छेद 'समानता के अधिकार' से संबंधित है?",
              "optionsEn": [
                "Article 14-18",
                "Article 19-22",
                "Article 23-24",
                "Article 25-28"
              ],
              "optionsHi": [
                "अनुच्छेद 14-18",
                "अनुच्छेद 19-22",
                "अनुच्छेद 23-24",
                "अनुच्छेद 25-28"
              ],
              "answer": 0,
              "exp": "Articles 14 to 18 guarantee the Right to Equality in the Indian Constitution."
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "Existing Source": {
          "Shift 1 (Morning)": [
            {
              "qEn": "What is the value of sin(30°) * cos(60°) + cos(30°) * sin(60°)?",
              "qHi": "sin(30°) * cos(60°) + cos(30°) * sin(60°) का मान क्या है?",
              "optionsEn": [
                "0",
                "1/2",
                "1",
                "√3/2"
              ],
              "optionsHi": [
                "0",
                "1/2",
                "1",
                "√3/2"
              ],
              "answer": 2,
              "exp": "This is based on the sine addition formula sin(A+B) = sin(30+60) = sin(90°) = 1."
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Who was the founder of the Maurya Empire?",
              "qHi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": [
                "Ashoka",
                "Chandragupta Maurya",
                "Bindusara",
                "Samudragupta"
              ],
              "optionsHi": [
                "अशोक",
                "चंद्रगुप्त मौर्य",
                "बिंदुसार",
                "समुद्रगुप्त"
              ],
              "answer": 1,
              "exp": "Chandragupta Maurya founded the Maurya Empire with the help of Chanakya in 322 BC."
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CGL — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CGL — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    },
    "CBT-2": {}
  },
  "SSC CHSL": {
    "CBT-1": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "Existing Source": {
          "Shift 1": [
            {
              "qEn": "What is the capital of Australia?",
              "qHi": "ऑर्स्ट्रेलिया की राजधानी क्या है?",
              "optionsEn": [
                "Sydney",
                "Melbourne",
                "Canberra",
                "Perth"
              ],
              "optionsHi": [
                "सिडनी",
                "मेलबर्न",
                "कैनबरा",
                "पर्थ"
              ],
              "answer": 2,
              "exp": "Canberra is the capital city of Australia."
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CHSL — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CHSL — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CHSL के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    },
    "CBT-2": {}
  },
  "SSC GD Constable": {
    "CBT": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC GD Constable — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC GD Constable — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC GD Constable के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    }
  },
  "SSC Selection Post": {
    "CBT": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Selection Post — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Selection Post — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC Selection Post के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    }
  },
  "SSC MTS": {
    "CBT": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC MTS — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC MTS — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC MTS के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    }
  },
  "SSC CPO": {
    "CBT-1": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC CPO — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC CPO — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC CPO के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    },
    "CBT-2": {}
  },
  "SSC Stenographer": {
    "CBT": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC Stenographer — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC Stenographer — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC Stenographer के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    }
  },
  "SSC JE": {
    "CBT-1": {
      "2024": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2024 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2024 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2024 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2024 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2024 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2025": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2025 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2025 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2025 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2025 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2025 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2025 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      },
      "2026": {
        "January": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2026 January, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2026 January, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2026 January, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        },
        "July": {
          "Shift 1 (Morning)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2026 July, Shift 1 (Morning).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 1 (Morning)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ],
          "Shift 2 (Evening)": [
            {
              "qEn": "Sample PYQ question 1 for SSC JE — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 1 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 0,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            },
            {
              "qEn": "Sample PYQ question 2 for SSC JE — 2026 July, Shift 2 (Evening).",
              "qHi": "SSC JE के लिए नमूना PYQ प्रश्न 2 — 2026 July, Shift 2 (Evening)।",
              "optionsEn": [
                "Option A",
                "Option B",
                "Option C",
                "Option D"
              ],
              "optionsHi": [
                "विकल्प A",
                "विकल्प B",
                "विकल्प C",
                "विकल्प D"
              ],
              "answer": 1,
              "exp": "Demo question inserted only to validate the Year → Month → Shift → Questions structure. Replace with the authentic PYQ when the source paper is supplied.",
              "isSample": true
            }
          ]
        }
      }
    },
    "CBT-2": {}
  }
});
