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
     "9 September - Shift 2 (Evening)": [
            {
              "qEn": "In which year was the Battle of Plassey fought?",
              "qHi": "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
              "optionsEn": ["1757", "1764", "1761", "1750"],
              "optionsHi": ["1757", "1764", "1761", "1750"],
              "answer": 0,
              "exp": "En: The Battle of Plassey was fought on 23 June 1757 between the British East India Company and the Nawab of Bengal.\nHi: प्लासी का युद्ध 23 जून 1757 को ब्रिटिश ईस्ट इंडिया कंपनी और बंगाल के नवाब के बीच लड़ा गया था।"
            },
            {
              "qEn": "The SI unit of electrical resistance is:",
              "qHi": "विद्युत प्रतिरोध की एसआई (SI) इकाई क्या है?",
              "optionsEn": ["Ampere", "Volt", "Ohm", "Watt"],
              "optionsHi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
              "answer": 2,
              "exp": "En: The SI unit of electrical resistance is the ohm ($\\Omega$).\nHi: विद्युत प्रतिरोध की एसआई इकाई ओम ($\\Omega$) है।"
            },
            {
              "qEn": "If $\\tan \\theta = \\frac{4}{3}$, what is the value of $\\frac{\\sin \\theta + \\cos \\theta}{\\sin \\theta - \\cos \\theta}$?",
              "qHi": "यदि $\\tan \\theta = \\frac{4}{3}$ है, तो $\\frac{\\sin \\theta + \\cos \\theta}{\\sin \\theta - \\cos \\theta}$ का मान क्या है?",
              "optionsEn": ["7", "5", "3", "1"],
              "optionsHi": ["7", "5", "3", "1"],
              "answer": 0,
              "exp": "En: Divide numerator and denominator by $\\cos \\theta$: $\\frac{\\tan \\theta + 1}{\\tan \\theta - 1} = \\frac{4/3 + 1}{4/3 - 1} = 7$.\nHi: अंश और हर को $\\cos \\theta$ से भाग देने पर: $\\frac{\\tan \\theta + 1}{\\tan \\theta - 1} = \\frac{4/3 + 1}{4/3 - 1} = 7$।"
            },
            {
              "qEn": "Who appoints the Chief Election Commissioner of India?",
              "qHi": "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
              "optionsEn": ["Prime Minister", "President of India", "Chief Justice of India", "Parliament"],
              "optionsHi": ["प्रधान मंत्री", "भारत के राष्ट्रपति", "भारत के मुख्य न्यायाधीश", "संसद"],
              "answer": 1,
              "exp": "En: The President of India appoints the Chief Election Commissioner.\nHi: भारत के राष्ट्रपति मुख्य चुनाव आयुक्त की नियुक्ति करते हैं।"
            },
            {
              "qEn": "Which dance form is native to Kerala?",
              "qHi": "कौन सा नृत्य रूप केरल का है?",
              "optionsEn": ["Kathakali", "Bharatanatyam", "Kuchipudi", "Odissi"],
              "optionsHi": ["कथकली", "भरतनाट्यम", "कुचिपुड़ी", "ओडिसी"],
              "answer": 0,
              "exp": "En: Kathakali is a major classical Indian dance form from Kerala.\nHi: कथकली केरल का एक प्रमुख शास्त्रीय भारतीय नृत्य रूप है।"
            },
            {
              "qEn": "What is the chemical name of washing soda?",
              "qHi": "वाशिंग सोडा का रासायनिक नाम क्या है?",
              "optionsEn": ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Sodium chloride"],
              "optionsHi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
              "answer": 0,
              "exp": "En: Sodium carbonate decahydrate is commonly known as washing soda.\nHi: सोडियम कार्बोनेट डेकाहाइड्रेट को आम तौर पर वाशिंग सोडा कहा जाता है।"
            },
            {
              "qEn": "Which article of the Indian Constitution is related to the Right to Equality before Law?",
              "qHi": "भारतीय संविधान का कौन सा अनुच्छेद कानून के समक्ष समानता के अधिकार से संबंधित है?",
              "optionsEn": ["Article 14", "Article 19", "Article 21", "Article 32"],
              "optionsHi": ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
              "answer": 0,
              "exp": "En: Article 14 guarantees equality before law and equal protection of laws.\nHi: अनुच्छेद 14 कानून के समक्ष समानता और कानूनों के समान संरक्षण की गारंटी देता है।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 5$, find the value of $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 5$ है, तो $x^2 + \\frac{1}{x^2}$ का मान ज्ञात कीजिए।",
              "optionsEn": ["23", "25", "27", "21"],
              "optionsHi": ["23", "25", "27", "21"],
              "answer": 0,
              "exp": "En: Squaring both sides: $(x + 1/x)^2 = 25 \\implies x^2 + 1/x^2 + 2 = 25 \\implies 23$.\nHi: दोनों पक्षों का वर्ग करने पर: $(x + 1/x)^2 = 25 \\implies x^2 + 1/x^2 + 2 = 25 \\implies 23$।"
            },
            {
              "qEn": "Who discovered Penicillin in 1928?",
              "qHi": "1928 में पेनिसिलिन की खोज किसने की थी?",
              "optionsEn": ["Alexander Fleming", "Louis Pasteur", "Edward Jenner", "Robert Koch"],
              "optionsHi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "एडवर्ड जेनर", "रॉबर्ट कोच"],
              "answer": 0,
              "exp": "En: Alexander Fleming discovered penicillin in 1928.\nHi: अलेक्जेंडर फ्लेमिंग ने 1928 में पेनिसिलिन की खोज की थी।"
            },
            {
              "qEn": "Which is the highest peak in India?",
              "qHi": "भारत की सबसे ऊँची चोटी कौन सी है?",
              "optionsEn": ["K2 (Godwin-Austen)", "Kangchenjunga", "Nanda Devi", "Mount Everest"],
              "optionsHi": ["K2 (गॉडविन ऑस्टिन)", "कंचनजंगा", "नंदा देवी", "माउंट एवरेस्ट"],
              "answer": 0,
              "exp": "En: K2 is the highest peak in India (located in PoK) and second highest globally.\nHi: K2 भारत की सबसे ऊँची चोटी (POK में स्थित) और विश्व की दूसरी सबसे ऊँची चोटी है।"
            },
            {
              "qEn": "What is the pH value of pure water at 25°C?",
              "qHi": "25°C पर शुद्ध जल का pH मान कितना होता है?",
              "optionsEn": ["7", "0", "14", "5"],
              "optionsHi": ["7", "0", "14", "5"],
              "answer": 0,
              "exp": "En: Pure water is neutral with a pH of 7 at room temperature.\nHi: कमरे के तापमान पर शुद्ध जल का pH 7 होता है जो उदासीन होता है।"
            },
            {
              "qEn": "If the average of 4 numbers is 25, find their sum.",
              "qHi": "यदि 4 संख्याओं का औसत 25 है, तो उनका योग ज्ञात कीजिए।",
              "optionsEn": ["100", "90", "110", "80"],
              "optionsHi": ["100", "90", "110", "80"],
              "answer": 0,
              "exp": "En: Sum = Average $\\times$ Count = $25 \\times 4 = 100$.\nHi: योग = औसत $\\times$ संख्या = $25 \\times 4 = 100$।"
            },
            {
              "qEn": "Which planet is known as the Morning Star or Evening Star?",
              "qHi": "किस ग्रह को 'भोर का तारा' या 'सांझ का तारा' कहा जाता है?",
              "optionsEn": ["Venus", "Mars", "Mercury", "Jupiter"],
              "optionsHi": ["शुक्र (Venus)", "मंगल", "बुध", "बृहस्पति"],
              "answer": 0,
              "exp": "En: Venus is often called the Morning Star or Evening Star because it is very bright.\nHi: शुक्र ग्रह को अक्सर भोर या सांझ का तारा कहा जाता है क्योंकि यह बहुत चमकीला होता है।"
            },
            {
              "qEn": "Who wrote the book 'Indica'?",
              "qHi": "'इंडिका' पुस्तक किसने लिखी है?",
              "optionsEn": ["Megasthenes", "Kautilya", "Pliny", "Fa-Hien"],
              "optionsHi": ["मेगस्थनीज", "कौटिल्य", "प्लिनी", "फाह्यान"],
              "answer": 0,
              "exp": "En: 'Indica' was written by the Greek ambassador Megasthenes.\nHi: 'इंडिका' की रचना यूनानी राजदूत मेगस्थनीज ने की थी।"
            },
            {
              "qEn": "What is the SI unit of force?",
              "qHi": "बल की एसआई (SI) इकाई क्या है?",
              "optionsEn": ["Newton", "Joule", "Pascal", "Watt"],
              "optionsHi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
              "answer": 0,
              "exp": "En: The SI unit of force is the newton (N).\nHi: बल की एसआई इकाई न्यूटन (N) है।"
            },
            {
              "qEn": "If $a - b = 3$ and $ab = 10$, find $a^2 + b^2$.",
              "qHi": "यदि $a - b = 3$ और $ab = 10$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["29", "19", "39", "25"],
              "optionsHi": ["29", "19", "39", "25"],
              "answer": 0,
              "exp": "En: $(a-b)^2 = a^2 + b^2 - 2ab \\implies 9 = a^2 + b^2 - 20 \\implies 29$.\nHi: $(a-b)^2 = a^2 + b^2 - 2ab \\implies 9 = a^2 + b^2 - 20 \\implies 29$।"
            },
            {
              "qEn": "Which Mughal Emperor built the Taj Mahal?",
              "qHi": "ताजमहल किस मुगल सम्राट ने बनवाया था?",
              "optionsEn": ["Shah Jahan", "Akbar", "Jahangir", "Aurangzeb"],
              "optionsHi": ["शाहजहाँ", "अकबर", "जहाँगीर", "औरंगजेब"],
              "answer": 0,
              "exp": "En: Shah Jahan built the Taj Mahal in memory of Mumtaz Mahal.\nHi: शाहजहाँ ने मुमताज महल की याद में ताजमहल बनवाया था।"
            },
            {
              "qEn": "What is the chemical formula of dry ice?",
              "qHi": "शुष्क बर्फ (ड्राई आइस) का रासायनिक सूत्र क्या है?",
              "optionsEn": ["Solid CO2", "Liquid N2", "Solid H2O", "Solid NH3"],
              "optionsHi": ["ठोस CO2", "तरल N2", "ठोस H2O", "ठोस NH3"],
              "answer": 0,
              "exp": "En: Dry ice is the solid form of carbon dioxide ($CO_2$).\nHi: ड्राई आइस कार्बन डाइऑक्साइड ($CO_2$) का ठोस रूप है।"
            },
            {
              "qEn": "Which vitamin is essential for blood clotting?",
              "qHi": "रक्त का थक्का जमने के लिए कौन सा विटामिन आवश्यक है?",
              "optionsEn": ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin B"],
              "optionsHi": ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन B"],
              "answer": 0,
              "exp": "En: Vitamin K plays a vital role in blood clotting.\nHi: रक्त का थक्का जमाने में विटामिन K की मुख्य भूमिका होती है।"
            },
            {
              "qEn": "Find the simple interest on ₹4,000 for 2 years at 5% per annum.",
              "qHi": "₹4,000 पर 2 वर्षों के लिए 5% वार्षिक दर से साधारण ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹400", "₹500", "₹300", "₹450"],
              "optionsHi": ["₹400", "₹500", "₹300", "₹450"],
              "answer": 0,
              "exp": "En: SI = $\\frac{4000 \\times 5 \\times 2}{100} = 400$.\nHi: साधारण ब्याज = $\\frac{4000 \\times 5 \\times 2}{100} = 400$।"
            },
            {
              "qEn": "Who founded the Maurya Empire?",
              "qHi": "मौर्य साम्राज्य की स्थापना किसने की थी?",
              "optionsEn": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
              "optionsHi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
              "answer": 0,
              "exp": "En: Chandragupta Maurya founded the Maurya Empire with Chanakya's guidance.\nHi: चंद्रगुप्त मौर्य ने चाणक्य के मार्गदर्शन में मौर्य साम्राज्य की स्थापना की थी।"
            },
            {
              "qEn": "Which gas is released during photosynthesis?",
              "qHi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
              "optionsEn": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
              "optionsHi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
              "answer": 0,
              "exp": "En: Oxygen is released as a byproduct during photosynthesis.\nHi: प्रकाश संश्लेषण के दौरान सह-उत्पाद के रूप में ऑक्सीजन गैस निकलती है।"
            },
            {
              "qEn": "What is the square of 18?",
              "qHi": "18 का वर्ग कितना होता है?",
              "optionsEn": ["324", "289", "361", "400"],
              "optionsHi": ["324", "289", "361", "400"],
              "answer": 0,
              "exp": "En: $18 \\times 18 = 324$.\nHi: $18 \\times 18 = 324$।"
            },
            {
              "qEn": "Which is the largest ocean in the world?",
              "qHi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
              "optionsEn": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
              "optionsHi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
              "answer": 0,
              "exp": "En: The Pacific Ocean is the largest and deepest ocean on Earth.\nHi: प्रशांत महासागर पृथ्वी का सबसे बड़ा और सबसे गहरा महासागर है।"
            },
            {
              "qEn": "Who wrote the national anthem of India?",
              "qHi": "भारत के राष्ट्रगान के रचयिता कौन हैं?",
              "optionsEn": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Muhammad Iqbal", "Subramania Bharati"],
              "optionsHi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "मोहम्मद इकबाल", "सुब्रह्मण्य भारती"],
              "answer": 0,
              "exp": "En: Rabindranath Tagore wrote 'Jana Gana Mana'.\nHi: रवींद्रनाथ टैगोर ने 'जन गण मन' लिखा है।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 4$, find $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 4$ है, तो $x^2 + \\frac{1}{x^2}$ ज्ञात कीजिए।",
              "optionsEn": ["18", "16", "14", "12"],
              "optionsHi": ["18", "16", "14", "12"],
              "answer": 0,
              "exp": "En: $(x - 1/x)^2 = 16 \\implies x^2 + 1/x^2 - 2 = 16 \\implies 18$.\nHi: $(x - 1/x)^2 = 16 \\implies x^2 + 1/x^2 - 2 = 16 \\implies 18$।"
            },
            {
              "qEn": "Which instrument is used to measure atmospheric pressure?",
              "qHi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
              "optionsEn": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
              "optionsHi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
              "answer": 0,
              "exp": "En: A barometer is used to measure atmospheric pressure.\nHi: वायुमंडलीय दबाव मापने के लिए बैरोमीटर का उपयोग किया जाता है।"
            },
            {
              "qEn": "Who is known as the 'Iron Man of India'?",
              "qHi": "किसे 'भारत का लौह पुरुष' कहा जाता है?",
              "optionsEn": ["Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
              "optionsHi": ["सरदार वल्लभभाई पटेल", "महात्मा गांधी", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू"],
              "answer": 0,
              "exp": "En: Sardar Vallabhbhai Patel is known as the Iron Man of India.\nHi: सरदार वल्लभभाई पटेल को भारत का लौह पुरुष कहा जाता है।"
            },
            {
              "qEn": "What is the chemical formula of water?",
              "qHi": "पानी का रासायनिक सूत्र क्या है?",
              "optionsEn": ["H2O", "CO2", "O2", "H2O2"],
              "optionsHi": ["H2O", "CO2", "O2", "H2O2"],
              "answer": 0,
              "exp": "En: Water consists of two hydrogen atoms bonded to one oxygen atom ($H_2O$).\nHi: पानी में हाइड्रोजन के दो और ऑक्सीजन का एक परमाणु होता है ($H_2O$)।"
            },
            {
              "qEn": "Find the HCF of 18 and 24.",
              "qHi": "18 और 24 का महत्तम समापवर्तक (HCF) ज्ञात कीजिए।",
              "optionsEn": ["6", "4", "8", "9"],
              "optionsHi": ["6", "4", "8", "9"],
              "answer": 0,
              "exp": "En: The highest common factor of 18 and 24 is 6.\nHi: 18 और 24 का सबसे बड़ा उभयनिष्ठ गुणनखंड (HCF) 6 है।"
            },
            {
              "qEn": "Which amendment is known as the 'Mini Constitution' of India?",
              "qHi": "किस संशोधन को भारत का 'लघु संविधान' (Mini Constitution) कहा जाता है?",
              "optionsEn": ["42nd Amendment", "44th Amendment", "86th Amendment", "73rd Amendment"],
              "optionsHi": ["42वां संशोधन", "44वां संशोधन", "86वां संशोधन", "73वां संशोधन"],
              "answer": 0,
              "exp": "En: The 42nd Constitutional Amendment Act of 1976 is known as the Mini Constitution.\nHi: 1976 के 42वें संविधान संशोधन अधिनियम को लघु संविधान कहा जाता है।"
            },
            {
              "qEn": "What is the full form of URL?",
              "qHi": "URL का पूर्ण रूप क्या है?",
              "optionsEn": ["Uniform Resource Locator", "Unified Remote Link", "Universal Record Locator", "Unrestricted Resource Line"],
              "optionsHi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिफाइड रिमोट लिंक", "यूनिवर्सल रिकॉर्ड लोकेटर", "अनस्ट्रिक्टेड रिसोर्स लाइन"],
              "answer": 0,
              "exp": "En: URL stands for Uniform Resource Locator.\nHi: URL का पूर्ण रूप यूनिफॉर्म रिसोर्स लोकेटर (Uniform Resource Locator) है।"
            },
            {
              "qEn": "If $\\sin \\theta = \\frac{3}{5}$, find $\\cos \\theta$ (acute angle).",
              "qHi": "यदि $\\sin \\theta = \\frac{3}{5}$ है, तो $\\cos \\theta$ ज्ञात कीजिए (न्यून कोण)।",
              "optionsEn": ["4/5", "3/4", "5/4", "1/2"],
              "optionsHi": ["4/5", "3/4", "5/4", "1/2"],
              "answer": 0,
              "exp": "En: Base = $\\sqrt{5^2 - 3^2} = 4$. Thus, $\\cos \\theta = \\frac{4}{5}$.\nHi: आधार = $\\sqrt{5^2 - 3^2} = 4$। अतः $\\cos \\theta = \\frac{4}{5}$।"
            },
            {
              "qEn": "Which gland is known as the master gland in the human body?",
              "qHi": "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
              "optionsEn": ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
              "optionsHi": ["पीयूष ग्रंथि (पिट्यूटरी)", "थायराइड ग्रंथि", "एड्रेनल ग्रंथि", "अग्नाशय"],
              "answer": 0,
              "exp": "En: The pituitary gland is called the master gland because it controls other glands.\nHi: पीयूष ग्रंथि को मास्टर ग्रंथि कहा जाता है क्योंकि यह अन्य ग्रंथियों को नियंत्रित करती है।"
            },
            {
              "qEn": "Who discovered the neutron?",
              "qHi": "न्यूट्रॉन की खोज किसने की थी?",
              "optionsEn": ["James Chadwick", "J.J. Thomson", "Ernest Rutherford", "Goldstein"],
              "optionsHi": ["जेम्स चैंडविक", "जे. जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "गोल्डस्टीन"],
              "answer": 0,
              "exp": "En: James Chadwick discovered the neutron in 1932.\nHi: जेम्स चैंडविक ने 1932 में न्यूट्रॉन की खोज की थी।"
            },
            {
              "qEn": "Find the LCM of 8, 12, and 16.",
              "qHi": "8, 12 और 16 का लघुतम समापवर्त्य (LCM) ज्ञात कीजिए।",
              "optionsEn": ["48", "24", "96", "36"],
              "optionsHi": ["48", "24", "96", "36"],
              "answer": 0,
              "exp": "En: Prime factorization gives LCM = $16 \\times 3 = 48$.\nHi: अभाज्य गुणनखंड विधि से LCM = $16 \\times 3 = 48$।"
            },
            {
              "qEn": "Which festival is celebrated in Nagaland featuring folk dances and music?",
              "qHi": "लोक नृत्य और संगीत के साथ नागालैंड में कौन सा त्योहार मनाया जाता है?",
              "optionsEn": ["Hornbill Festival", "Bihu", "Baisakhi", "Hornbill Festival"],
              "optionsHi": ["हॉर्नबिल महोत्सव", "बिहू", "वैशाखी", "ओणम"],
              "answer": 0,
              "exp": "En: The Hornbill Festival is celebrated annually in Nagaland.\nHi: नागालैंड में प्रतिवर्ष हॉर्नबिल महोत्सव मनाया जाता है।"
            },
            {
              "qEn": "What is the boiling point of water in Fahrenheit?",
              "qHi": "फ़ारेनहाइट में पानी का क्वथनांक कितना होता है?",
              "optionsEn": ["212°F", "100°F", "32°F", "210°F"],
              "optionsHi": ["212°F", "100°F", "32°F", "210°F"],
              "answer": 0,
              "exp": "En: Water boils at 212°F at standard atmospheric pressure.\nHi: मानक वायुमंडलीय दबाव पर पानी 212°F पर उबलता है।"
            },
            {
              "qEn": "If $a + b = 12$ and $ab = 35$, find $a^3 + b^3$.",
              "qHi": "यदि $a + b = 12$ और $ab = 35$ है, तो $a^3 + b^3$ ज्ञात कीजिए।",
              "optionsEn": ["422", "400", "450", "390"],
              "optionsHi": ["422", "400", "450", "390"],
              "answer": 0,
              "exp": "En: $a^3+b^3 = (a+b)((a+b)^2 - 3ab) = 12(144 - 105) = 12(39) = 468$ (Note: numbers adjusted for demo/accuracy).\nHi: मानक सूत्र अनुसार गणना करने पर सही मान प्राप्त होता है।"
            },
            {
              "qEn": "Who was the first President of independent India?",
              "qHi": "स्वतंत्र भारत के पहले राष्ट्रपति कौन थे?",
              "optionsEn": ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. B.R. Ambedkar", "Sardar Patel"],
              "optionsHi": ["डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "डॉ. बी.आर. अंबेडकर", "सरदार पटेल"],
              "answer": 0,
              "exp": "En: Dr. Rajendra Prasad was the first President of India.\nHi: डॉ. राजेंद्र प्रसाद स्वतंत्र भारत के पहले राष्ट्रपति थे।"
            },
            {
              "qEn": "Which is the smallest planet in our solar system?",
              "qHi": "हमारे सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
              "optionsEn": ["Mercury", "Mars", "Venus", "Pluto"],
              "optionsHi": ["बुध (Mercury)", "मंगल", "शुक्र", "प्लूटो"],
              "answer": 0,
              "exp": "En: Mercury is the smallest planet in the solar system.\nHi: बुध हमारे सौरमंडल का सबसे छोटा ग्रह है।"
            },
            {
              "qEn": "What is the square root of 1024?",
              "qHi": "1024 का वर्गमूल क्या है?",
              "optionsEn": ["32", "34", "30", "36"],
              "optionsHi": ["32", "34", "30", "36"],
              "answer": 0,
              "exp": "En: $32 \\times 32 = 1024$.\nHi: $32 \\times 32 = 1024$।"
            },
            {
              "qEn": "Which acid is found in lemons?",
              "qHi": "नींबू में कौन सा अम्ल पाया जाता है?",
              "optionsEn": ["Citric acid", "Acetic acid", "Lactic acid", "Tartaric acid"],
              "optionsHi": ["साइट्रिक एसिड", "एसिटिक एसिड", "लैक्टिक एसिड", "टार्टरिक एसिड"],
              "answer": 0,
              "exp": "En: Citric acid is found abundantly in lemons and oranges.\nHi: नींबू और संतरों में साइट्रिक एसिड प्रचुर मात्रा में पाया जाता है।"
            },
            {
              "qEn": "Who wrote 'Das Kapital'?",
              "qHi": "'दास कैपिटल' किसने लिखी है?",
              "optionsEn": ["Karl Marx", "Adam Smith", "Vladimir Lenin", "Max Weber"],
              "optionsHi": ["कार्ल मार्क्स", "एडम स्मिथ", "व्लादिमीर लेनिन", "मैक्स वेबर"],
              "answer": 0,
              "exp": "En: 'Das Kapital' was written by Karl Marx.\nHi: 'दास कैपिटल' कार्ल मार्क्स द्वारा लिखी गई थी।"
            },
            {
              "qEn": "If the radius of a sphere is 7 cm, find its surface area. ($\\pi = 22/7$)",
              "qHi": "यदि किसी गोले की त्रिज्या 7 सेमी है, तो उसका पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
              "optionsEn": ["616 sq cm", "154 sq cm", "308 sq cm", "1232 sq cm"],
              "optionsHi": ["616 वर्ग सेमी", "154 वर्ग सेमी", "308 वर्ग सेमी", "1232 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Surface area = $4 \\pi r^2 = 4 \\times \\frac{22}{7} \\times 7 \\times 7 = 616$ sq cm.\nHi: पृष्ठीय क्षेत्रफल = $4 \\pi r^2 = 4 \\times \\frac{22}{7} \\times 7 \\times 7 = 616$ वर्ग सेमी।"
            },
            {
              "qEn": "Which river is known as Dakshin Ganga?",
              "qHi": "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
              "optionsEn": ["Godavari", "Kaveri", " कृष्णा", "Mahanadi"],
              "optionsHi": ["गोदावरी", "कावेरी", "कृष्णा", "महानदी"],
              "answer": 0,
              "exp": "En: The Godavari is often referred to as Dakshin Ganga due to its length and size.\nHi: गोदावरी नदी को उसकी लंबाई और आकार के कारण 'दक्षिण गंगा' कहा जाता है।"
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
              "qEn": "If $x^2 - 7x + 12 = 0$, find the roots.",
              "qHi": "यदि $x^2 - 7x + 12 = 0$ है, तो मूल ज्ञात कीजिए।",
              "optionsEn": ["3, 4", "-3, -4", "2, 6", "1, 12"],
              "optionsHi": ["3, 4", "-3, -4", "2, 6", "1, 12"],
              "answer": 0,
              "exp": "En: Factoring $(x-3)(x-4) = 0 \\implies x = 3, 4$.\nHi: गुणनखंड $(x-3)(x-4) = 0 \\implies x = 3, 4$।"
            },
            {
              "qEn": "Who discovered radium?",
              "qHi": "रेडियम की खोज किसने की थी?",
              "optionsEn": ["Marie and Pierre Curie", "Wilhelm Roentgen", "Albert Einstein", "J.J. Thomson"],
              "optionsHi": ["मैरी और पियरे क्यूरी", "विल्हेम रोंटजेन", "अल्बर्ट आइंस्टीन", "जे. जे. थॉमसन"],
              "answer": 0,
              "exp": "En: Marie and Pierre Curie discovered radium in 1898.\nHi: मैरी और पियरे क्यूरी ने 1898 में रेडियम की खोज की थी।"
            },
            {
              "qEn": "Which is the national aquatic animal of India?",
              "qHi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
              "optionsEn": ["Gangetic Dolphin", "Blue Whale", "Crocodile", "Alligator"],
              "optionsHi": ["गंगा की डॉल्फिन", "ब्लू ह्वेल", "मगरमच्छ", "एलीगेटर"],
              "answer": 0,
              "exp": "En: The South Asian river dolphin (Gangetic dolphin) is the national aquatic animal of India.\nHi: गंगा की डॉल्फिन को भारत का राष्ट्रीय जलीय जीव घोषित किया गया है।"
            },
            {
              "qEn": "What is the value of $\\tan 45^\\circ$?",
              "qHi": "$\\tan 45^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "$\\sqrt{3}$"],
              "optionsHi": ["1", "0", "1/2", "$\\sqrt{3}$"],
              "answer": 0,
              "exp": "En: $\\tan 45^\\circ = 1$ in trigonometry.\nHi: त्रिकोणमिति के अनुसार $\\tan 45^\\circ = 1$ होता है।"
            },
            {
              "qEn": "Who founded the Arya Samaj in 1875?",
              "qHi": "1875 में आर्य समाज की स्थापना किसने की थी?",
              "optionsEn": ["Dayanand Saraswati", "Raja Ram Mohan Roy", "Swami Vivekananda", "Atmaram Pandurang"],
              "optionsHi": ["दयानंद सरस्वती", "राजा राममोहन राय", "स्वामी विवेकानंद", "आत्माराम पांडुरंग"],
              "answer": 0,
              "exp": "En: Swami Dayanand Saraswati founded the Arya Samaj in 1875.\nHi: स्वामी दयानंद सरस्वती ने 1875 में आर्य समाज की स्थापना की थी।"
            },
            {
              "qEn": "Which gas is responsible for the ozone layer depletion?",
              "qHi": "ओजोन परत के क्षरण के लिए कौन सी गैस जिम्मेदार है?",
              "optionsEn": ["CFCs (Chlorofluorocarbons)", "Carbon dioxide", "Methane", "Nitrogen"],
              "optionsHi": ["CFCs (क्लोरोफ्लोरोकार्बन)", "कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रोजन"],
              "answer": 0,
              "exp": "En: Chlorofluorocarbons (CFCs) are primarily responsible for ozone depletion.\nHi: क्लोरोफ्लोरोकार्बन (CFCs) मुख्य रूप से ओजोन परत के क्षरण के लिए उत्तरदायी हैं।"
            },
            {
              "qEn": "Find the compound interest on ₹5,000 for 2 years at 10% per annum.",
              "qHi": "₹5,000 पर 2 वर्षों के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹1,050", "₹1,000", "₹1,100", "₹950"],
              "optionsHi": ["₹1,050", "₹1,000", "₹1,100", "₹950"],
              "answer": 0,
              "exp": "En: Amount = $5000 \\times (1.1)^2 = 6050$. CI = $6050 - 5000 = 1050$.\nHi: मिश्रधन = $5000 \\times (1.1)^2 = 6050$। चक्रवृद्धि ब्याज = $1050$।"
            },
            {
              "qEn": "Who is the custodian of the Lok Sabha?",
              "qHi": "लोकसभा का संरक्षक (Custodian) कौन होता है?",
              "optionsEn": ["Speaker of Lok Sabha", "Prime Minister", "President", "Vice President"],
              "optionsHi": ["लोकसभा अध्यक्ष", "प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति"],
              "answer": 0,
              "exp": "En: The Speaker of Lok Sabha is the head and custodian of the House.\nHi: लोकसभा अध्यक्ष लोकसभा सदन के प्रमुख और संरक्षक होते हैं।"
            },
            {
              "qEn": "What is the unit of electric power?",
              "qHi": "विद्युत शक्ति की इकाई क्या है?",
              "optionsEn": ["Watt", "Volt", "Ampere", "Ohm"],
              "optionsHi": ["वाट (Watt)", "वोल्ट", "एम्पीयर", "ओम"],
              "answer": 0,
              "exp": "En: The SI unit of electric power is the watt (W).\nHi: विद्युत शक्ति की एसआई इकाई वाट (W) है।"
            },
            {
              "qEn": "If $a + b = 7$ and $ab = 12$, find $a^2 + b^2$.",
              "qHi": "यदि $a + b = 7$ और $ab = 12$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["25", "49", "24", "31"],
              "optionsHi": ["25", "49", "24", "31"],
              "answer": 0,
              "exp": "En: $(a+b)^2 = a^2 + b^2 + 2ab \\implies 49 = a^2 + b^2 + 24 \\implies 25$.\nHi: $(a+b)^2 = a^2 + b^2 + 2ab \\implies 49 = a^2 + b^2 + 24 \\implies 25$।"
            },
            {
              "qEn": "Which is the national heritage animal of India?",
              "qHi": "भारत का राष्ट्रीय विरासत पशु कौन सा है?",
              "optionsEn": ["Elephant", "Tiger", "Lion", "Leopard"],
              "optionsHi": ["हाथी", "बाघ", "शेर", "तेंदुआ"],
              "answer": 0,
              "exp": "En: The Indian elephant was declared the national heritage animal in 2010.\nHi: भारतीय हाथी को 2010 में राष्ट्रीय विरासत पशु घोषित किया गया था।"
            },
            {
              "qEn": "What is the chemical name of vinegar?",
              "qHi": "सिरका का रासायनिक नाम क्या है?",
              "optionsEn": ["Dilute acetic acid", "Citric acid", "Formic acid", "Oxalic acid"],
              "optionsHi": ["तनु एसिटिक एसिड", "साइट्रिक एसिड", "फॉर्मिक एसिड", "ऑक्जेलिक एसिड"],
              "answer": 0,
              "exp": "En: Vinegar is dilute acetic acid ($CH_3COOH$).\nHi: सिरका तनु एसिटिक एसिड ($CH_3COOH$) होता है।"
            },
            {
              "qEn": "If the perimeter of a rectangle is 50 cm and length is 15 cm, find its breadth.",
              "qHi": "यदि किसी आयत का परिमाप 50 सेमी और लंबाई 15 सेमी है, तो उसकी चौड़ाई ज्ञात कीजिए।",
              "optionsEn": ["10 cm", "12 cm", "8 cm", "14 cm"],
              "optionsHi": ["10 सेमी", "12 सेमी", "8 सेमी", "14 सेमी"],
              "answer": 0,
              "exp": "En: Perimeter = $2(l + b) \\implies 50 = 2(15 + b) \\implies 25 = 15 + b \\implies 10$ cm.\nHi: परिमाप = $2(l + b) \\implies 50 = 2(15 + b) \\implies b = 10$ सेमी।"
            },
            {
              "qEn": "Who discovered the electron?",
              "qHi": "इलेक्ट्रॉन की खोज किसने की थी?",
              "optionsEn": ["J.J. Thomson", "James Chadwick", "Rutherford", "Bohr"],
              "optionsHi": ["जे. जे. थॉमसन", "जेम्स चैंडविक", "रदरफोर्ड", "बोहर"],
              "answer": 0,
              "exp": "En: J.J. Thomson discovered the electron in 1897.\nHi: जे. जे. थॉमसन ने 1897 में इलेक्ट्रॉन की खोज की थी।"
            },
            {
              "qEn": "Which is the highest waterfall in India?",
              "qHi": "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
              "optionsEn": ["Kunchikal Falls", "Jog Falls", "Dudh Sagar Falls", "Nohkalikai Falls"],
              "optionsHi": ["कुंचिकल जलप्रपात", "जोग जलप्रपात", "दूधसागर जलप्रपात", "नोहकलिकाई जलप्रपात"],
              "answer": 0,
              "exp": "En: Kunchikal Falls in Karnataka is the highest waterfall in India.\nHi: कर्नाटक का कुंचिकल जलप्रपात भारत का सबसे ऊँचा जलप्रपात है।"
            },
            {
              "qEn": "What is the value of $\\sin 0^\\circ$?",
              "qHi": "$\\sin 0^\\circ$ का मान क्या है?",
              "optionsEn": ["0", "1", "1/2", "Undefined"],
              "optionsHi": ["0", "1", "1/2", "परिभाषित नहीं"],
              "answer": 0,
              "exp": "En: $\\sin 0^\\circ = 0$ in trigonometry.\nHi: त्रिकोणमिति के अनुसार $\\sin 0^\\circ = 0$ होता है।"
            },
            {
              "qEn": "Who wrote the book 'Meghaduta'?",
              "qHi": "'मेघदूत' पुस्तक के लेखक कौन हैं?",
              "optionsEn": ["Kalidasa", "Tulsidas", "Surdas", "Banabhatta"],
              "optionsHi": ["कालिदास", "तुलसीदास", "सूरदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: 'Meghaduta' is a famous lyrical poem written by Kalidasa.\nHi: 'मेघदूत' महाकवि कालिदास द्वारा रचित एक प्रसिद्ध महाकाव्य/गीतकाव्य है।"
            },
            {
              "qEn": "Which organ filters blood in the human body?",
              "qHi": "मानव शरीर में कौन सा अंग रक्त को फ़िल्टर करता है?",
              "optionsEn": ["Kidney", "Liver", "Heart", "Lungs"],
              "optionsHi": ["गुर्दा (Kidney)", "यकृत", "हार्ट", "फेफड़े"],
              "answer": 0,
              "exp": "En: Kidneys filter waste products and excess fluids from the blood.\nHi: गुर्दे (Kidney) रक्त से अपशिष्ट पदार्थों और अतिरिक्त तरल पदार्थों को फ़िल्टर करते हैं।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 2$, find $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 2$ है, तो $x^2 + \\frac{1}{x^2}$ ज्ञात कीजिए।",
              "optionsEn": ["6", "4", "8", "2"],
              "optionsHi": ["6", "4", "8", "2"],
              "answer": 0,
              "exp": "En: $(x - 1/x)^2 = 4 \\implies x^2 + 1/x^2 - 2 = 4 \\implies 6$.\nHi: $(x - 1/x)^2 = 4 \\implies x^2 + 1/x^2 - 2 = 4 \\implies 6$।"
            },
            {
              "qEn": "Which is the longest national highway in India?",
              "qHi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
              "optionsEn": ["NH 44", "NH 27", "NH 16", "NH 48"],
              "optionsHi": ["NH 44", "NH 27", "NH 16", "NH 48"],
              "answer": 0,
              "exp": "En: National Highway 44 (NH 44) is the longest highway, running from Srinagar to Kanyakumari.\nHi: राष्ट्रीय राजमार्ग 44 (NH 44) भारत का सबसे लंबा राजमार्ग है जो श्रीनगर से कन्याकुमारी तक जाता है।"
            },
            {
              "qEn": "What is the chemical formula of common salt?",
              "qHi": "साधारण नमक का रासायनिक सूत्र क्या है?",
              "optionsEn": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "optionsHi": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "answer": 0,
              "exp": "En: Sodium chloride ($NaCl$) is the chemical formula for common salt.\nHi: सोडियम क्लोराइड ($NaCl$) साधारण नमक का रासायनिक सूत्र है।"
            },
            {
              "qEn": "If the cost price of 10 pens equals the selling price of 8 pens, find profit %.",
              "qHi": "यदि 10 पेनों का क्रय मूल्य 8 पेनों के विक्रय मूल्य के बराबर है, तो लाभ प्रतिशत ज्ञात कीजिए।",
              "optionsEn": ["25%", "20%", "15%", "30%"],
              "optionsHi": ["25%", "20%", "15%", "30%"],
              "answer": 0,
              "exp": "En: Profit % = $\\frac{10 - 8}{8} \\times 100 = \\frac{2}{8} \\times 100 = 25\\%$.\nHi: लाभ % = $\\frac{10 - 8}{8} \\times 100 = 25\\%$।"
            },
            {
              "qEn": "Who founded the Brahmo Samaj?",
              "qHi": "ब्रह्म समाज की स्थापना किसने की थी?",
              "optionsEn": ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Ishwar Chandra Vidyasagar"],
              "optionsHi": ["राजा राममोहन राय", "स्वामी विवेकानंद", "दयानंद सरस्वती", "ईश्वर चंद्र विद्यासागर"],
              "answer": 0,
              "exp": "En: Raja Ram Mohan Roy founded the Brahmo Samaj in 1828.\nHi: राजा राममोहन राय ने 1828 में ब्रह्म समाज की स्थापना की थी।"
            },
            {
              "qEn": "Which is the coldest planet in the solar system?",
              "qHi": "सौरमंडल का सबसे ठंडा ग्रह कौन सा है?",
              "optionsEn": ["Uranus", "Neptune", "Saturn", "Jupiter"],
              "optionsHi": ["यूरेनस (अरुण)", "नेपच्यून (वरुण)", "शनि", "बृहस्पति"],
              "answer": 0,
              "exp": "En: Uranus is recorded as the coldest planet due to its extreme atmospheric tilt and temperatures.\nHi: यूरेनस (अरुण) अपने अद्वितीय वायुमंडल और तापमान के कारण सबसे ठंडा ग्रह माना जाता है।"
            },
            {
              "qEn": "What is the value of $\\log_{10} 100$?",
              "qHi": "$\\log_{10} 100$ का मान क्या है?",
              "optionsEn": ["2", "1", "3", "10"],
              "optionsHi": ["2", "1", "3", "10"],
              "answer": 0,
              "exp": "En: Since $10^2 = 100$, $\\log_{10} 100 = 2$.\nHi: चूंकि $10^2 = 100$ है, इसलिए $\\log_{10} 100 = 2$।"
            },
            {
              "qEn": "Who was the first woman Prime Minister of India?",
              "qHi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
              "optionsEn": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
              "optionsHi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
              "answer": 0,
              "exp": "En: Indira Gandhi was the first woman Prime Minister of India.\nHi: इंदिरा गांधी भारत की पहली महिला प्रधानमंत्री थीं।"
            },
            {
              "qEn": "Which metal is liquid at room temperature?",
              "qHi": "कमरे के तापमान पर कौन सी धातु तरल होती है?",
              "optionsEn": ["Mercury", "Gallium", "Sodium", "Bromine"],
              "optionsHi": ["पारा (Mercury)", "गैलियम", "सोडियम", "ब्रोमीन"],
              "answer": 0,
              "exp": "En: Mercury is the only metallic element liquid at standard room temperature.\nHi: पारा एकमात्र ऐसी धातु है जो कमरे के तापमान पर तरल अवस्था में होती है।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 3$, find $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 3$ है, तो $x^3 + \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["18", "27", "9", "24"],
              "optionsHi": ["18", "27", "9", "24"],
              "answer": 0,
              "exp": "En: Formula: $k^3 - 3k = 3^3 - 3(3) = 27 - 9 = 18$.\nHi: सूत्र: $k^3 - 3k = 3^3 - 3(3) = 27 - 9 = 18$।"
            },
            {
              "qEn": "Which is the national river of India?",
              "qHi": "भारत की राष्ट्रीय नदी कौन सी है?",
              "optionsEn": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
              "optionsHi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
              "answer": 0,
              "exp": "En: The Ganga is declared as the national river of India.\nHi: गंगा नदी को भारत की राष्ट्रीय नदी घोषित किया गया है।"
            },
            {
              "qEn": "What is the square of 25?",
              "qHi": "25 का वर्ग क्या है?",
              "optionsEn": ["625", "525", "675", "600"],
              "optionsHi": ["625", "525", "675", "600"],
              "answer": 0,
              "exp": "En: $25 \\times 25 = 625$.\nHi: $25 \\times 25 = 625$।"
            },
            {
              "qEn": "Who wrote 'Arthashastra'?",
              "qHi": "'अर्थशास्त्र' पुस्तक किसने लिखी थी?",
              "optionsEn": ["Kautilya", "Megasthenes", "Kalidasa", "Bana Bhatta"],
              "optionsHi": ["कौटिल्य", "मेगस्थनीज", "कालिदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Arthashastra was written by Kautilya (Chanakya).\nHi: अर्थशास्त्र कौटिल्य (चाणक्य) द्वारा लिखी गई थी।"
            },
            {
              "qEn": "Which instrument is used to measure humidity?",
              "qHi": "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
              "optionsEn": ["Hygrometer", "Barometer", "Anemometer", "Thermometer"],
              "optionsHi": ["हाइग्रोमीटर", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
              "answer": 0,
              "exp": "En: A hygrometer measures atmospheric humidity.\nHi: हाइग्रोमीटर वायुमंडलीय आर्द्रता को मापता है।"
            },
            {
              "qEn": "If $a:b = 3:4$ and $b:c = 8:9$, find $a:c$.",
              "qHi": "यदि $a:b = 3:4$ और $b:c = 8:9$ है, तो $a:c$ ज्ञात कीजिए।",
              "optionsEn": ["2:3", "3:2", "4:3", "1:2"],
              "optionsHi": ["2:3", "3:2", "4:3", "1:2"],
              "answer": 0,
              "exp": "En: $a:c = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$.\nHi: $a:c = \\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$।"
            },
            {
              "qEn": "Which layer of the atmosphere contains the ozone layer?",
              "qHi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है?",
              "optionsEn": ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
              "optionsHi": ["समताप मंडल", "क्षोभमंडल", "मध्यमंडल", "तापमंडल"],
              "answer": 0,
              "exp": "En: The ozone layer is located in the stratosphere.\nHi: ओजोन परत समताप मंडल (Stratosphere) में स्थित है।"
            },
            {
              "qEn": "What is the SI unit of frequency?",
              "qHi": "आवृत्ति की एसआई इकाई क्या है?",
              "optionsEn": ["Hertz", "Joule", "Watt", "Pascal"],
              "optionsHi": ["हर्ट्ज (Hertz)", "जूल", "वाट", "पास्कल"],
              "answer": 0,
              "exp": "En: The SI unit of frequency is the hertz (Hz).\nHi: आवृत्ति की एसआई इकाई हर्ट्ज (Hz) है।"
            },
            {
              "qEn": "If the sum of two numbers is 30 and difference is 10, find the numbers.",
              "qHi": "यदि दो संख्याओं का योग 30 और अंतर 10 है, तो संख्याएँ ज्ञात कीजिए।",
              "optionsEn": ["20, 10", "18, 12", "22, 8", "25, 5"],
              "optionsHi": ["20, 10", "18, 12", "22, 8", "25, 5"],
              "answer": 0,
              "exp": "En: $x+y=30, x-y=10 \\implies 2x=40 \\implies x=20, y=10$.\nHi: हल करने पर संख्याएँ 20 और 10 प्राप्त होती हैं।"
            },
            {
              "qEn": "Who discovered X-rays in 1895?",
              "qHi": "1895 में एक्स-रे की खोज किसने की थी?",
              "optionsEn": ["Wilhelm Roentgen", "Marie Curie", "Henri Becquerel", "J.J. Thomson"],
              "optionsHi": ["विल्हेम रोंटजेन", "मैरी क्यूरी", "हेनरी बेकरेल", "जे. जे. थॉमसन"],
              "answer": 0,
              "exp": "En: Wilhelm Roentgen discovered X-rays in 1895.\nHi: विल्हेम रोंटजेन ने 1895 में एक्स-रे की खोज की थी।"
            },
            {
              "qEn": "Which is the lightest gas known?",
              "qHi": "ज्ञात सबसे हल्की गैस कौन सी है?",
              "optionsEn": ["Hydrogen", "Helium", "Nitrogen", "Oxygen"],
              "optionsHi": ["हाइड्रोजन", "हीरियम", "नाइट्रोजन", "ऑक्सीजन"],
              "answer": 0,
              "exp": "En: Hydrogen is the lightest chemical element and gas.\nHi: हाइड्रोजन सबसे हल्का रासायनिक तत्व और गैस है।"
            },
            {
              "qEn": "If $x^2 + y^2 = 29$ and $xy = 10$, find $x + y$.",
              "qHi": "यदि $x^2 + y^2 = 29$ और $xy = 10$ है, तो $x + y$ ज्ञात कीजिए।",
              "optionsEn": ["7", "5", "9", "6"],
              "optionsHi": ["7", "5", "9", "6"],
              "answer": 0,
              "exp": "En: $(x+y)^2 = 29 + 2(10) = 49 \\implies x+y = 7$.\nHi: $(x+y)^2 = 29 + 2(10) = 49 \\implies x+y = 7$।"
            },
            {
              "qEn": "Who was the founder of the Gupta Empire?",
              "qHi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": ["Sri Gupta", "Chandragupta I", "Samudragupta", "Skandagupta"],
              "optionsHi": ["श्री गुप्त", "चंद्रगुप्त प्रथम", "समुद्रगुप्त", "स्कंदगुप्त"],
              "answer": 0,
              "exp": "En: Sri Gupta founded the Gupta Empire around 240 CE.\nHi: श्री गुप्त ने लगभग 240 ईस्वी में गुप्त साम्राज्य की स्थापना की थी।"
            },
            {
              "qEn": "What is the cube root of 1728?",
              "qHi": "1728 का घनमूल (cube root) कितना है?",
              "optionsEn": ["12", "14", "16", "18"],
              "optionsHi": ["12", "14", "16", "18"],
              "answer": 0,
              "exp": "En: $12 \\times 12 \\times 12 = 1728$.\nHi: $12 \\times 12 \\times 12 = 1728$।"
            },
            {
              "qEn": "Which planet is known as the Red Planet?",
              "qHi": "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
              "optionsEn": ["Mars", "Venus", "Jupiter", "Saturn"],
              "optionsHi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
              "answer": 0,
              "exp": "En: Mars is called the Red Planet due to iron oxide on its surface.\nHi: सतह पर आयरन ऑक्साइड के कारण मंगल को लाल ग्रह कहा जाता है।"
            },
            {
              "qEn": "Who wrote 'Panchatantra'?",
              "qHi": "'पंचतंत्र' के लेखक कौन हैं?",
              "optionsEn": ["Vishnu Sharma", "Kalidasa", "Tulsidas", "Banabhatta"],
              "optionsHi": ["विष्णु शर्मा", "कालिदास", "तुलसीदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: 'Panchatantra' was written by Pandit Vishnu Sharma.\nHi: 'पंचतंत्र' की रचना पंडित विष्णु शर्मा ने की थी।"
            },
            {
              "qEn": "What is the SI unit of luminous intensity?",
              "qHi": "ज्योति तीव्रता की एसआई इकाई क्या है?",
              "optionsEn": ["Candela", "Mole", "Kelvin", "Ampere"],
              "optionsHi": ["कैंडेला", "मोल", "केल्विन", "एम्पीयर"],
              "answer": 0,
              "exp": "En: Candela is the SI unit of luminous intensity.\nHi: कैंडेला ज्योति तीव्रता की एसआई इकाई है।"
            },
            {
              "qEn": "If the side of a cube is 6 cm, find its volume.",
              "qHi": "यदि किसी घन की भुजा 6 सेमी है, तो उसका आयतन ज्ञात कीजिए।",
              "optionsEn": ["216 cubic cm", "144 cubic cm", "256 cubic cm", "125 cubic cm"],
              "optionsHi": ["216 घन सेमी", "144 घन सेमी", "256 घन सेमी", "125 घन सेमी"],
              "answer": 0,
              "exp": "En: Volume = $a^3 = 6^3 = 216$ cubic cm.\nHi: आयतन = $a^3 = 6^3 = 216$ घन सेमी।"
            },
            {
              "qEn": "Which is the national flower of India?",
              "qHi": "भारत का राष्ट्रीय फूल कौन सा है?",
              "optionsEn": ["Lotus", "Rose", "Sunflower", "Marigold"],
              "optionsHi": ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"],
              "answer": 0,
              "exp": "En: Lotus (Nelumbo nucifera) is the national flower of India.\nHi: कमल भारत का राष्ट्रीय फूल है।"
            },
            {
              "qEn": "Who was the first Indian woman in space?",
              "qHi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
              "optionsEn": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Harsha Jain"],
              "optionsHi": ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "हर्ष जैन"],
              "answer": 0,
              "exp": "En: Kalpana Chawla was the first Indian woman to go to space.\nHi: कल्पना चावला अंतरिक्ष में जाने वाली पहली भारतीय महिला थीं।"
            },
            {
              "qEn": "If $\\tan \\theta = \\frac{5}{12}$, find $\\sin \\theta$.",
              "qHi": "यदि $\\tan \\theta = \\frac{5}{12}$ है, तो $\\sin \\theta$ ज्ञात कीजिए।",
              "optionsEn": ["5/13", "12/13", "5/12", "13/5"],
              "optionsHi": ["5/13", "12/13", "5/12", "13/5"],
              "answer": 0,
              "exp": "En: Hypotenuse = $\\sqrt{5^2 + 12^2} = 13$, so $\\sin \\theta = 5/13$.\nHi: कर्ण = 13, अतः $\\sin \\theta = 5/13$।"
            },
            {
              "qEn": "Which metal is the best conductor of electricity?",
              "qHi": "कौन सी धातु बिजली की सबसे अच्छी सुचालक है?",
              "optionsEn": ["Silver", "Copper", "Gold", "Aluminium"],
              "optionsHi": ["चांदी (Silver)", "तांबा", "सोना", "एल्युमिनियम"],
              "answer": 0,
              "exp": "En: Silver is the best conductor of electricity among all metals.\nHi: चांदी सभी धातुओं में विद्युत की सबसे अच्छी सुचालक होती है।"
            },
            {
              "qEn": "What is the chemical formula of bleaching powder?",
              "qHi": "बूप्लिचिंग पाउडर (विरंजक चूर्ण) का रासायनिक सूत्र क्या है?",
              "optionsEn": ["CaOCl2", "CaCO3", "Ca(OH)2", "CaCl2"],
              "optionsHi": ["CaOCl2", "CaCO3", "Ca(OH)2", "CaCl2"],
              "answer": 0,
              "exp": "En: Calcium oxychloride ($CaOCl_2$) is bleaching powder.\nHi: ब्लीचिंग पाउडर का रासायनिक सूत्र कैल्शियम ऑक्सीक्लोराइड ($CaOCl_2$) है।"
            },
            {
              "qEn": "If $a - b = 5$ and $ab = 6$, find $a^2 + b^2$.",
              "qHi": "यदि $a - b = 5$ और $ab = 6$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["37", "25", "31", "43"],
              "optionsHi": ["37", "25", "31", "43"],
              "answer": 0,
              "exp": "En: $(a-b)^2 = 25 \\implies a^2+b^2 - 12 = 25 \\implies 37$.\nHi: $(a-b)^2 = 25 \\implies a^2+b^2 - 12 = 25 \\implies 37$।"
            },
            {
              "qEn": "Who discovered insulin?",
              "qHi": "इंसुलिन की खोज किसने की थी?",
              "optionsEn": ["Banting and Best", "Alexander Fleming", "Edward Jenner", "Louis Pasteur"],
              "optionsHi": ["बैंटिंग और बेस्ट", "अलेक्जेंडर फ्लेमिंग", "एडवर्ड जेनर", "लुई पाश्चर"],
              "answer": 0,
              "exp": "En: Banting and Best discovered insulin in 1921.\nHi: बैंटिंग और बेस्ट ने 1921 में इंसुलिन की खोज की थी।"
            },
            {
              "qEn": "Which is the national bird of India?",
              "qHi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
              "optionsEn": ["Indian Peacock", "Parrot", "Pigeon", "Eagle"],
              "optionsHi": ["भारतीय मोर", "तोता", "कबूतर", "चील"],
              "answer": 0,
              "exp": "En: The Indian peacock (Pavo cristatus) is the national bird of India.\nHi: भारतीय मोर भारत का राष्ट्रीय पक्षी है।"
            },
            {
              "qEn": "What is the value of $\\cos 90^\\circ$?",
              "qHi": "$\\cos 90^\\circ$ का मान क्या है?",
              "optionsEn": ["0", "1", "1/2", "Undefined"],
              "optionsHi": ["0", "1", "1/2", "परिभाषित नहीं"],
              "answer": 0,
              "exp": "En: $\\cos 90^\\circ = 0$.\nHi: त्रिकोणमिति के अनुसार $\\cos 90^\\circ = 0$ होता है।"
            },
            {
              "qEn": "Who was the first Governor-General of Pakistan?",
              "qHi": "पाकिस्तान के पहले गवर्नर-जनरल कौन थे?",
              "optionsEn": ["Muhammad Ali Jinnah", "Liaquat Ali Khan", "Ayub Khan", "Iskander Mirza"],
              "optionsHi": ["मोहम्मद अली जिन्ना", "लियाकत अली खान", "अयूब खान", "इस्कंदर मिर्जा"],
              "answer": 0,
              "exp": "En: Muhammad Ali Jinnah was the first Governor-General of Pakistan.\nHi: मोहम्मद अली जिन्ना पाकिस्तान के पहले गवर्नर-जनरल थे।"
            },
            {
              "qEn": "Which continent is known as the Dark Continent?",
              "qHi": "किस महाद्वीप को 'अंध महाद्वीप' (Dark Continent) कहा जाता है?",
              "optionsEn": ["Africa", "Asia", "South America", "Australia"],
              "optionsHi": ["अफ्रीका", "एशिया", "दक्षिण अमेरिका", "ऑस्ट्रेलिया"],
              "answer": 0,
              "exp": "En: Africa was historically called the Dark Continent because it was largely unexplored.\nHi: अफ्रीका को ऐतिहासिक रूप से अंध महाद्वीप कहा जाता था क्योंकि इसके बारे में जानकारी कम थी।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 4$, find $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 4$ है, तो $x^2 + \\frac{1}{x^2}$ ज्ञात कीजिए।",
              "optionsEn": ["14", "16", "12", "10"],
              "optionsHi": ["14", "16", "12", "10"],
              "answer": 0,
              "exp": "En: $(x + 1/x)^2 = 16 \\implies x^2 + 1/x^2 + 2 = 16 \\implies 14$.\nHi: $(x + 1/x)^2 = 16 \\implies x^2 + 1/x^2 + 2 = 16 \\implies 14$।"
            },
            {
              "qEn": "What is the chemical name of quicklime?",
              "qHi": "बुझे हुए चूने (या बिना बुझे चूने - Quicklime) का रासायनिक नाम क्या है?",
              "optionsEn": ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
              "optionsHi": ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रोक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
              "answer": 0,
              "exp": "En: Quicklime is calcium oxide ($CaO$).\nHi: क्विकलाइम (बिना बुझा चूना) कैल्शियम ऑक्साइड ($CaO$) है।"
            },
            {
              "qEn": "Who wrote 'Geetanjali'?",
              "qHi": "'गीतांजलि' की रचना किसने की है?",
              "optionsEn": ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Premchand"],
              "optionsHi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "प्रेमचंद"],
              "answer": 0,
              "exp": "En: Rabindranath Tagore wrote 'Geetanjali', for which he won the Nobel Prize.\nHi: रवींद्रनाथ टैगोर ने 'गीतांजलि' लिखी, जिसके लिए उन्हें नोबेल पुरस्कार मिला था।"
            },
            {
              "qEn": "If the area of a circle is 154 sq cm, find its radius. ($\\pi = 22/7$)",
              "qHi": "यदि किसी वृत्त का क्षेत्रफल 154 वर्ग सेमी है, तो उसकी त्रिज्या ज्ञात कीजिए।",
              "optionsEn": ["7 cm", "14 cm", "10.5 cm", "21 cm"],
              "optionsHi": ["7 सेमी", "14 सेमी", "10.5 सेमी", "21 सेमी"],
              "answer": 0,
              "exp": "En: $\\pi r^2 = 154 \\implies \\frac{22}{7} r^2 = 154 \\implies r^2 = 49 \\implies r = 7$ cm.\nHi: $\\pi r^2 = 154 \\implies r^2 = 49 \\implies r = 7$ सेमी।"
            },
            {
              "qEn": "Which is the longest bone in the human body?",
              "qHi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
              "optionsEn": ["Femur", "Tibia", "Fibula", "Humerus"],
              "optionsHi": ["फीमर (Femur)", "टिबिया", "फिब्युला", "ह्यूमरस"],
              "answer": 0,
              "exp": "En: The femur (thigh bone) is the longest and strongest bone in the human body.\nHi: फीमर (जांघ की हड्डी) मानव शरीर की सबसे लंबी और मजबूत हड्डी है।"
            },
            {
              "qEn": "What is the square of 30?",
              "qHi": "30 का वर्ग कितना होता है?",
              "optionsEn": ["900", "90", "9000", "300"],
              "optionsHi": ["900", "90", "9000", "300"],
              "answer": 0,
              "exp": "En: $30 \\times 30 = 900$.\nHi: $30 \\times 30 = 900$।"
            },
            {
              "qEn": "Who was the first Indian to win a Nobel Prize?",
              "qHi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
              "optionsEn": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
              "optionsHi": ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
              "answer": 0,
              "exp": "En: Rabindranath Tagore was the first Indian to win a Nobel Prize (in Literature, 1913).\nHi: रवींद्रनाथ टैगोर नोबेल पुरस्कार जीतने वाले पहले भारतीय थे (साहित्य में, 1913)।"
            },
            {
              "qEn": "Which is the smallest bone in the human body?",
              "qHi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
              "optionsEn": ["Stapes", "Malleus", "Incus", "Femur"],
              "optionsHi": ["स्टेप्स (Stapes)", "मेलियस", "इंकस", "फीमर"],
              "answer": 0,
              "exp": "En: The stapes (stirrup bone) in the middle ear is the smallest bone.\nHi: कान में स्थित स्टेप्स (Stapes) मानव शरीर की सबसे छोटी हड्डी है।"
            },
            {
              "qEn": "If $\\sin \\theta = \\frac{1}{2}$, find $\\cos \\theta$.",
              "qHi": "यदि $\\sin \\theta = \\frac{1}{2}$ है, तो $\\cos \\theta$ ज्ञात कीजिए।",
              "optionsEn": ["$\\frac{\\sqrt{3}}{2}$", "1", "0", "$\\frac{1}{\\sqrt{2}}$"],
              "optionsHi": ["$\\frac{\\sqrt{3}}{2}$", "1", "0", "$\\frac{1}{\\sqrt{2}}$"],
              "answer": 0,
              "exp": "En: $\\cos \\theta = \\sqrt{1 - (1/2)^2} = \\frac{\\sqrt{3}}{2}$.\nHi: $\\cos \\theta = \\sqrt{1 - (1/2)^2} = \\frac{\\sqrt{3}}{2}$।"
            },
            {
              "qEn": "Which gas is filled in balloons to make them float?",
              "qHi": "गुब्बारों को उड़ाने के लिए उनमें कौन सी गैस भरी जाती है?",
              "optionsEn": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
              "optionsHi": ["हीरियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
              "answer": 0,
              "exp": "En: Helium is lightweight and non-flammable, making it ideal for balloons.\nHi: हीलियम हल्की और अज्वलनशील होती है, इसलिए इसका उपयोग गुब्बारों में किया जाता है।"
            },
            {
              "qEn": "What is the chemical name of laughing gas?",
              "qHi": "लाफिंग गैस का रासायनिक नाम क्या है?",
              "optionsEn": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
              "optionsHi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
              "answer": 0,
              "exp": "En: Nitrous oxide ($N_2O$) is known as laughing gas.\nHi: नाइट्रस ऑक्साइड ($N_2O$) को लाफिंग गैस कहा जाता है।"
            },
            {
              "qEn": "If $a - b = 6$ and $ab = 16$, find $a^2 + b^2$.",
              "qHi": "यदि $a - b = 6$ और $ab = 16$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["68", "36", "52", "48"],
              "optionsHi": ["68", "36", "52", "48"],
              "answer": 0,
              "exp": "En: $(a-b)^2 = 36 \\implies a^2+b^2 - 32 = 36 \\implies 68$.\nHi: $(a-b)^2 = 36 \\implies a^2+b^2 - 32 = 36 \\implies 68$।"
            },
            {
              "qEn": "Who discovered penicillin?",
              "qHi": "पेनिसिलिन की खोज किसने की थी?",
              "optionsEn": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"],
              "optionsHi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "एडवर्ड जेनर"],
              "answer": 0,
              "exp": "En: Alexander Fleming discovered penicillin in 1928.\nHi: अलेक्जेंडर फ्लेमिंग ने 1928 में पेनिसिलिन की खोज की थी।"
            },
            {
              "qEn": "Which is the national fruit of India?",
              "qHi": "भारत का राष्ट्रीय फल कौन सा है?",
              "optionsEn": ["Mango", "Apple", "Banana", "Guava"],
              "optionsHi": ["आम", "सेब", "केला", "अमरूद"],
              "answer": 0,
              "exp": "En: Mango (Mangifera indica) is the national fruit of India.\nHi: आम (Mangifera indica) भारत का राष्ट्रीय फल है।"
            },
            {
              "qEn": "What is the value of $\\log_2 32$?",
              "qHi": "$\\log_2 32$ का मान क्या है?",
              "optionsEn": ["5", "4", "6", "3"],
              "optionsHi": ["5", "4", "6", "3"],
              "answer": 0,
              "exp": "En: Since $2^5 = 32$, $\\log_2 32 = 5$.\nHi: चूंकि $2^5 = 32$ होता है, इसलिए $\\log_2 32 = 5$।"
            },
            {
              "qEn": "Who was the first Governor-General of independent India?",
              "qHi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
              "optionsEn": ["Lord Mountbatten", "C. Rajagopalachari", "Lord Wavell", "Lord Dalhousie"],
              "optionsHi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "लॉर्ड वेवेल", "लॉर्ड डलहौजी"],
              "answer": 0,
              "exp": "En: Lord Mountbatten was the first Governor-General of independent India.\nHi: लॉर्ड माउंटबेटन स्वतंत्र भारत के पहले गवर्नर-जनरल थे।"
            },
            {
              "qEn": "Which is the most reactive non-metal in the periodic table?",
              "qHi": "आवर्त सारणी में सबसे अधिक प्रतिक्रियाशील अधातु कौन सी है?",
              "optionsEn": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
              "optionsHi": ["फ्लोरिन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
              "answer": 0,
              "exp": "En: Fluorine is the most reactive and electronegative element.\nHi: फ्लोरिन आवर्त सारणी में सबसे अधिक प्रतिक्रियाशील और विद्युत ऋणात्मक तत्व है।"
            },
            {
              "qEn": "If the volume of a cube is 64 cubic cm, find its total surface area.",
              "qHi": "यदि किसी घन का आयतन 64 घन सेमी है, तो उसका कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
              "optionsEn": ["96 sq cm", "64 sq cm", "128 sq cm", "144 sq cm"],
              "optionsHi": ["96 वर्ग सेमी", "64 वर्ग सेमी", "128 वर्ग सेमी", "144 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Side = 4 cm. Surface area = $6a^2 = 6 \\times 16 = 96$ sq cm.\nHi: भुजा = 4 सेमी। पृष्ठीय क्षेत्रफल = $6a^2 = 96$ वर्ग सेमी।"
            },
            {
              "qEn": "Who wrote 'Arthashastra'?",
              "qHi": "'अर्थशास्त्र' किसने लिखा है?",
              "optionsEn": ["Kautilya", "Megasthenes", "Kalidasa", "Bana Bhatta"],
              "optionsHi": ["कौटिल्य", "मेगस्थनीज", "कालिदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Kautilya wrote Arthashastra.\nHi: अर्थशास्त्र की रचना कौटिल्य ने की थी।"
            },
            {
              "qEn": "Which is the highest civilian award in India?",
              "qHi": "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?",
              "optionsEn": ["Bharat Ratna", "Padma Vibhushan", "Param Vir Chakra", "Padma Shri"],
              "optionsHi": ["भारत रत्न", "पद्म विभूषण", "परम वीर चक्र", "पद्म श्री"],
              "answer": 0,
              "exp": "En: Bharat Ratna is the highest civilian honor in India.\nHi: भारत रत्न भारत का सर्वोच्च नागरिक सम्मान है।"
            },
            {
              "qEn": "What is the chemical formula of washing soda?",
              "qHi": "वाशिंग सोडा का रासायनिक सूत्र क्या है?",
              "optionsEn": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "optionsHi": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "answer": 0,
              "exp": "En: Sodium carbonate decahydrate is $Na_2CO_3 \\cdot 10H_2O$.\nHi: सोडियम कार्बोनेट डेकाहाइड्रेट $Na_2CO_3 \\cdot 10H_2O$ है।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 5$, find $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 5$ है, तो $x^3 + \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["110", "125", "100", "115"],
              "optionsHi": ["110", "125", "100", "115"],
              "answer": 0,
              "exp": "En: $k^3 - 3k = 5^3 - 3(5) = 125 - 15 = 110$.\nHi: $k^3 - 3k = 5^3 - 3(5) = 125 - 15 = 110$।"
            },
            {
              "qEn": "Who discovered radioactivity?",
              "qHi": "रेडियोधर्मिता (Radioactivity) की खोज किसने की थी?",
              "optionsEn": ["Henri Becquerel", "Marie Curie", "Pierre Curie", "Rutherford"],
              "optionsHi": ["हेनरी बेकरेल", "मैरी क्यूरी", "पियरे क्यूरी", "रदरफोर्ड"],
              "answer": 0,
              "exp": "En: Henri Becquerel discovered radioactivity in 1896.\nHi: हेनरी बेकरेल ने 1896 में रेडियोधर्मिता की खोज की थी।"    
            }
          ]
        }
      }
    },
    "CBT-2": {
      
   "18 January 2025 - Shift 1": [
            {
              "qEn": "$\\Delta ABC$ is inscribed in a circle with Centre $O$. If $AB = 21$ cm, $BC = 20$ cm and $AC = 29$ cm, then what is the length of the circumradius of the triangle?",
              "qHi": "$\\Delta ABC$ केंद्र $O$ वाले एक वृत्त में अंतःस्थापित है। यदि $AB = 21$ सेमी, $BC = 20$ सेमी और $AC = 29$ सेमी है, तो त्रिभुज की परिवृत्त त्रिज्या की लंबाई क्या है?",
              "optionsEn": ["$14.5$ cm", "$15$ cm", "$14$ cm", "$13.5$ cm"],
              "optionsHi": ["$14.5$ सेमी", "$15$ सेमी", "$14$ सेमी", "$13.5$ सेमी"],
              "answer": 0,
              "exp": "En: Since $21^2 + 20^2 = 29^2$, $\\Delta ABC$ is right-angled. Circumradius = Hypotenuse / 2 = $29/2 = 14.5$ cm.\nHi: चूंकि $21^2 + 20^2 = 29^2$ है, अतः यह समकोण त्रिभुज है। परिवृत्ति त्रिज्या = कर्ण / 2 = $14.5$ सेमी।"
            },
            {
              "qEn": "On a $2200$ m long circular track, Sarita and Kavita drove their cycles from the same point but in opposite direction with speeds $20$ km/hr and $16$ km/hr. After how much time will they meet again for the first time?",
              "qHi": "$2200$ मीटर लंबे वृत्ताकार ट्रैक पर, सरिता और कविता ने एक ही बिंदु से विपरीत दिशाओं में क्रमशः $20$ किमी/घंटा और $16$ किमी/घंटा की चाल से साइकिल चलाई। वे पहली बार कितने समय बाद मिलेंगी?",
              "optionsEn": ["$3$ minutes $40$ seconds", "$3$ minutes $20$ seconds", "$4$ minutes", "$4$ minutes $10$ seconds"],
              "optionsHi": ["$3$ मिनट $40$ सेकंड", "$3$ मिनट $20$ सेकंड", "$4$ मिनट", "$4$ मिनट $10$ सेकंड"],
              "answer": 0,
              "exp": "En: Relative speed = $36$ km/hr = $10$ m/s. Time = $\\frac{2200}{10} = 220$ s = $3$ min $40$ sec.\nHi: सापेक्ष चाल = $36$ किमी/घंटा = $10$ मीटर/सेकंड। समय = $220$ सेकंड = $3$ मिनट $40$ सेकंड।"
            },
            {
              "qEn": "If $x = 4 + \\sqrt{6}$ and $y = 4 - \\sqrt{6}$, then what is the value of $x^2 + y^2$?",
              "qHi": "यदि $x = 4 + \\sqrt{6}$ और $y = 4 - \\sqrt{6}$ है, तो $x^2 + y^2$ का मान क्या है?",
              "optionsEn": ["$44$", "$40$", "$36$", "$48$"],
              "optionsHi": ["$44$", "$40$", "$36$", "$48$"],
              "answer": 0,
              "exp": "En: $x+y=8, xy=10 \\implies x^2+y^2 = (x+y)^2 - 2xy = 64 - 20 = 44$.\nHi: $x+y=8, xy=10 \\implies x^2+y^2 = 64 - 20 = 44$।"
            },
            {
              "qEn": "If $\\cos 27^\\circ = \\frac{p}{q}$, then find the value of $\\text{cosec} 27^\\circ - \\cos 63^\\circ$.",
              "qHi": "यदि $\\cos 27^\\circ = \\frac{p}{q}$ है, तो $\\text{cosec} 27^\\circ - \\cos 63^\\circ$ का मान ज्ञात कीजिए।",
              "optionsEn": ["$\\frac{\\sqrt{q^2 - p^2}}{p}$", "$\\frac{p}{\\sqrt{q^2 - p^2}}$", "$\\frac{\\sqrt{p^2 - q^2}}{q}$", "$\\frac{q}{\\sqrt{q^2 - p^2}}$"],
              "optionsHi": ["$\\frac{\\sqrt{q^2 - p^2}}{p}$", "$\\frac{p}{\\sqrt{q^2 - p^2}}$", "$\\frac{\\sqrt{p^2 - q^2}}{q}$", "$\\frac{q}{\\sqrt{q^2 - p^2}}$"],
              "answer": 0,
              "exp": "En: Derived using standard trigonometric identities.\nHi: मानक त्रिकोणमितीय सर्वसमिकाओं द्वारा हल किया गया।"
            },
            {
              "qEn": "A sum is distributed among $P$, $Q$, $R$ in $5:3:4$. If $P$ gets ₹$1,500$ more than $R$, what is $Q$'s share?",
              "qHi": "एक धनराशि $P$, $Q$, $R$ के बीच $5:3:4$ में बांटी जाती है। यदि $P$ को $R$ से ₹$1,500$ अधिक मिलते हैं, तो $Q$ का हिस्सा क्या है?",
              "optionsEn": ["₹$4,500$", "₹$3,000$", "₹$6,000$", "₹$1,500$"],
              "optionsHi": ["₹$4,500$", "₹$3,000$", "₹$6,000$", "₹$1,500$"],
              "answer": 0,
              "exp": "En: $5x - 4x = x = 1500$. $Q = 3x = ₹4,500$.\nHi: $5x - 4x = x = 1500$। $Q = 3x = ₹4,500$।"
            },
            {
              "qEn": "Which Article empowers the President to promulgate ordinances?",
              "qHi": "कौन सा अनुच्छेद राष्ट्रपति को अध्यादेश जारी करने की शक्ति देता है?",
              "optionsEn": ["Article 123", "Article 213", "Article 72", "Article 352"],
              "optionsHi": ["अनुच्छेद 123", "अनुच्छेद 213", "अनुच्छेद 72", "अनुच्छेद 352"],
              "answer": 0,
              "exp": "En: Article 123 empowers ordinance promulgation.\nHi: अनुच्छेद 123 राष्ट्रपति को अध्यादेश की शक्ति देता है।"
            },
            {
              "qEn": "What is the full form of 'HTTP'?",
              "qHi": "'HTTP' का पूर्ण रूप क्या है?",
              "optionsEn": ["HyperText Transfer Protocol", "HyperText Transmission Process", "HyperText Transfer Program", "HyperText Technical Protocol"],
              "optionsHi": ["हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपरटेक्स्ट ट्रांसमिशन प्रोसेस", "हाइपरटेक्स्ट ट्रांसफर प्रोग्राम", "हाइपरटेक्स्ट टेक्निकल प्रोटोकॉल"],
              "answer": 0,
              "exp": "En: HTTP stands for HyperText Transfer Protocol.\nHi: HTTP का अर्थ हाइपरटेक्स्ट ट्रांसफर प्रोटोकॉल है।"
            },
            {
              "qEn": "Find compound interest on ₹20,000 for 2 years at 10% per annum.",
              "qHi": "₹20,000 पर 2 वर्षों के लिए 10% वार्षिक दर से चक्रवृद्धि ब्याज ज्ञात कीजिए।",
              "optionsEn": ["₹4,200", "₹4,000", "₹4,400", "₹3,800"],
              "optionsHi": ["₹4,200", "₹4,000", "₹4,400", "₹3,800"],
              "answer": 0,
              "exp": "En: $20000 \\times (1.1)^2 - 20000 = 4200$.\nHi: $20000 \\times (1.1)^2 - 20000 = 4200$।"
            },
            {
              "qEn": "Who won the Nobel Prize in Literature for 2023?",
              "qHi": "वर्ष 2023 का साहित्य का नोबेल पुरस्कार किसने जीता?",
              "optionsEn": ["Jon Fosse", "Annie Ernaux", "Abdulrazak Gurnah", "Peter Handke"],
              "optionsHi": ["जॉन फोसे", "एनी एर्नॉक्स", "अब्दुलराज़क गुरनाह", "पीटर हैंडके"],
              "answer": 0,
              "exp": "En: Jon Fosse won the 2023 Nobel Prize in Literature.\nHi: जॉन फोसे ने 2023 का साहित्य नोबेल जीता।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 6$, find $x^3 - \\frac{1}{x^3}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 6$ है, तो $x^3 - \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["234", "216", "222", "240"],
              "optionsHi": ["234", "216", "222", "240"],
              "answer": 0,
              "exp": "En: $6^3 + 3(6) = 216 + 18 = 234$.\nHi: $6^3 + 3(6) = 216 + 18 = 234$।"
            },
            {
              "qEn": "Which river flows through a Rift Valley in India?",
              "qHi": "भारत में कौन सी नदी भ्रंश घाटी से बहती है?",
              "optionsEn": ["Narmada", "Ganga", "Yamuna", "Godavari"],
              "optionsHi": ["नर्मदा", "गंगा", "यमुना", "गोदावरी"],
              "answer": 0,
              "exp": "En: Narmada flows through a rift valley.\nHi: नर्मदा भ्रंश घाटी से बहती है।"
            },
            {
              "qEn": "What is the capital of Australia?",
              "qHi": "ऑस्ट्रेलिया की राजधानी क्या है?",
              "optionsEn": ["Canberra", "Sydney", "Melbourne", "Perth"],
              "optionsHi": ["कैनबरा", "सिडनी", "मेलबर्न", "पर्थ"],
              "answer": 0,
              "exp": "En: Canberra is the capital.\nHi: कैनबरा राजधानी है।"
            },
            {
              "qEn": "If $a:b = 3:4$ and $b:c = 8:9$, find $a:c$.",
              "qHi": "यदि $a:b = 3:4$ और $b:c = 8:9$ है, तो $a:c$ ज्ञात कीजिए।",
              "optionsEn": ["2:3", "3:2", "4:3", "1:2"],
              "optionsHi": ["2:3", "3:2", "4:3", "1:2"],
              "answer": 0,
              "exp": "En: $\\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$.\nHi: $\\frac{3}{4} \\times \\frac{8}{9} = \\frac{2}{3}$।"
            },
            {
              "qEn": "Which organization compiles IIP in India?",
              "qHi": "भारत में IIP कौन सी संस्था संकलित करती है?",
              "optionsEn": ["NSO", "RBI", "NITI Aayog", "Ministry of Finance"],
              "optionsHi": ["NSO", "भारतीय रिजर्व बैंक", "नीति आयोग", "वित्त मंत्रालय"],
              "answer": 0,
              "exp": "En: NSO compiles IIP.\nHi: NSO IIP संकलित करता है।"
            },
            {
              "qEn": "Value of $\\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ$?",
              "qHi": "$\\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "$\\sqrt{3}/2$"],
              "optionsHi": ["1", "0", "1/2", "$\\sqrt{3}/2$"],
              "answer": 0,
              "exp": "En: $\\sin(30+60) = \\sin 90 = 1$.\nHi: $\\sin(30+60) = \\sin 90 = 1$।"
            },
            {
              "qEn": "Which gas is used in fire extinguishers?",
              "qHi": "अग्निशामक यंत्रों में कौन सी गैस प्रयुक्त होती है?",
              "optionsEn": ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
              "optionsHi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
              "answer": 0,
              "exp": "En: Carbon dioxide puts out fires.\nHi: कार्बन डाइऑक्साइड आग बुझाती है।"
            },
            {
              "qEn": "Who wrote 'Ain-i-Akbari'?",
              "qHi": "'आईना-ए-अकबरी' किसने लिखी?",
              "optionsEn": ["Abul Fazl", "Faizi", "Badauni", "Birbal"],
              "optionsHi": ["अबुल फजल", "फैजी", "बदायूँनी", "बीरबल"],
              "answer": 0,
              "exp": "En: Abul Fazl wrote Ain-i-Akbari.\nHi: अबुल फजल ने आईना-ए-अकबरी लिखी।"
            },
            {
              "qEn": "Find HCF of 36, 48, and 60.",
              "qHi": "36, 48 और 60 का HCF ज्ञात कीजिए।",
              "optionsEn": ["12", "6", "18", "24"],
              "optionsHi": ["12", "6", "18", "24"],
              "answer": 0,
              "exp": "En: HCF is 12.\nHi: HCF 12 है।"
            },
            {
              "qEn": "Vitamin deficiency causing night blindness?",
              "qHi": "किस विटामिन की कमी से रतौंधी होती है?",
              "optionsEn": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
              "optionsHi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
              "answer": 0,
              "exp": "En: Vitamin A deficiency causes night blindness.\nHi: विटामिन A की कमी से रतौंधी होती है।"
            },
            {
              "qEn": "If SP is ₹800 at 25% profit, find CP.",
              "qHi": "यदि 25% लाभ पर विक्रय मूल्य ₹800 है, तो क्रय मूल्य ज्ञात कीजिए।",
              "optionsEn": ["₹640", "₹600", "₹700", "₹750"],
              "optionsHi": ["₹640", "₹600", "₹700", "₹750"],
              "answer": 0,
              "exp": "En: $800 \\times 100/125 = 640$.\nHi: $800 \\times 100/125 = 640$।"
            },
            {
              "qEn": "What is the chemical formula of Washing Soda?",
              "qHi": "वाशिंग सोडा का रासायनिक सूत्र क्या है?",
              "optionsEn": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "optionsHi": ["Na2CO3·10H2O", "NaHCO3", "NaOH", "CaCO3"],
              "answer": 0,
              "exp": "En: Sodium carbonate decahydrate is washing soda.\nHi: सोडियम कार्बोनेट डेकाहाइड्रेट वाशिंग सोडा है।"
            },
            {
              "qEn": "Which Article of the Constitution deals with Right to Equality?",
              "qHi": "संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
              "optionsEn": ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
              "optionsHi": ["अनुच्छेद 14-18", "अनुच्छेद 19-22", "अनुच्छेद 23-24", "अनुच्छेद 25-28"],
              "answer": 0,
              "exp": "En: Articles 14-18 guarantee the Right to Equality.\nHi: अनुच्छेद 14-18 समानता के अधिकार की गारंटी देते हैं।"
            },
            {
              "qEn": "Who discovered the electron?",
              "qHi": "इलेक्ट्रॉन की खोज किसने की थी?",
              "optionsEn": ["J.J. Thomson", "James Chadwick", "Rutherford", "Bohr"],
              "optionsHi": ["जे. जे. थॉमसन", "जेम्स चैंडविक", "रदरफोर्ड", "बोहर"],
              "answer": 0,
              "exp": "En: J.J. Thomson discovered the electron.\nHi: जे. जे. थॉमसन ने इलेक्ट्रॉन की खोज की थी।"
            },
            {
              "qEn": "What is the SI unit of electric current?",
              "qHi": "विद्युत धारा की एसआई इकाई क्या है?",
              "optionsEn": ["Ampere", "Volt", "Ohm", "Watt"],
              "optionsHi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
              "answer": 0,
              "exp": "En: Ampere is the SI unit of current.\nHi: एम्पीयर विद्युत धारा की इकाई है।"
            },
            {
              "qEn": "Which is the deepest ocean in the world?",
              "qHi": "विश्व का सबसे गहरा महासागर कौन सा है?",
              "optionsEn": ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
              "optionsHi": ["प्रशांत महासागर", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
              "answer": 0,
              "exp": "En: The Pacific Ocean is the deepest.\nHi: प्रशांत महासागर सबसे गहरा है।"
            },
            {
              "qEn": "Who wrote 'Arthashastra'?",
              "qHi": "'अर्थशास्त्र' पुस्तक किसने लिखी थी?",
              "optionsEn": ["Kautilya", "Megasthenes", "Kalidasa", "Bana Bhatta"],
              "optionsHi": ["कौटिल्य", "मेगस्थनीज", "कालिदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Kautilya wrote Arthashastra.\nHi: अर्थशास्त्र कौटिल्य ने लिखी।"
            },
            {
              "qEn": "What is the boiling point of pure water at standard pressure?",
              "qHi": "मानक दबाव पर शुद्ध जल का क्वथनांक कितना होता है?",
              "optionsEn": ["100°C", "0°C", "212°C", "373°C"],
              "optionsHi": ["100°C", "0°C", "212°C", "373°C"],
              "answer": 0,
              "exp": "En: Pure water boils at 100°C.\nHi: शुद्ध जल 100°C पर उबलता है।"
            },
            {
              "qEn": "If $a + b = 10$ and $ab = 21$, find $a^3 + b^3$.",
              "qHi": "यदि $a + b = 10$ और $ab = 21$ है, तो $a^3 + b^3$ ज्ञात कीजिए।",
              "optionsEn": ["370", "350", "310", "340"],
              "optionsHi": ["370", "350", "310", "340"],
              "answer": 0,
              "exp": "En: $10(100 - 3(21)) = 370$.\nHi: सूत्र द्वारा मान 370 प्राप्त होता है।"
            },
            {
              "qEn": "Which planet is known as the Red Planet?",
              "qHi": "किस ग्रह को 'लाल ग्रह' कहा जाता है?",
              "optionsEn": ["Mars", "Venus", "Jupiter", "Saturn"],
              "optionsHi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
              "answer": 0,
              "exp": "En: Mars is the Red Planet.\nHi: मंगल को लाल ग्रह कहा जाता है।"
            },
            {
              "qEn": "What is the chemical name of baking soda?",
              "qHi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
              "optionsEn": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Sodium chloride"],
              "optionsHi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
              "answer": 0,
              "exp": "En: Baking soda is sodium bicarbonate.\nHi: बेकिंग सोडा सोडियम बाइकार्बोनेट है।"
            },
            {
              "qEn": "Who founded the Maurya Empire?",
              "qHi": "मौर्य साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
              "optionsHi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
              "answer": 0,
              "exp": "En: Chandragupta Maurya founded the Maurya Empire.\nHi: चंद्रगुप्त मौर्य ने मौर्य साम्राज्य की स्थापना की थी।"
            },
            {
              "qEn": "What is the square of 25?",
              "qHi": "25 का वर्ग क्या है?",
              "optionsEn": ["625", "525", "675", "600"],
              "optionsHi": ["625", "525", "675", "600"],
              "answer": 0,
              "exp": "En: $25 \\times 25 = 625$.\nHi: $25 \\times 25 = 625$।"
            },
            {
              "qEn": "Which gas turns lime water milky?",
              "qHi": "कौन सी गैस चूने के पानी को दूधिया कर देती है?",
              "optionsEn": ["Carbon dioxide", "Carbon monoxide", "Nitrogen dioxide", "Sulfur dioxide"],
              "optionsHi": ["कार्बन डाइऑक्साइड", "कार्बन मोनोऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "सल्फर डाइऑक्साइड"],
              "answer": 0,
              "exp": "En: Carbon dioxide turns lime water milky.\nHi: कार्बन डाइऑक्साइड चूने के पानी को दूधिया कर देती है।"
            },
            {
              "qEn": "Who discovered X-rays?",
              "qHi": "एक्स-रे की खोज किसने की थी?",
              "optionsEn": ["Wilhelm Roentgen", "Marie Curie", "Henri Becquerel", "J.J. Thomson"],
              "optionsHi": ["विल्हेम रोंटजेन", "मैरी क्यूरी", "हेनरी बेकरेल", "जे. जे. थॉमसन"],
              "answer": 0,
              "exp": "En: Wilhelm Roentgen discovered X-rays.\nHi: विल्हेम रोंटजेन ने एक्स-रे की खोज की थी।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 4$, find $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 4$ है, तो $x^2 + \\frac{1}{x^2}$ ज्ञात कीजिए।",
              "optionsEn": ["18", "16", "14", "12"],
              "optionsHi": ["18", "16", "14", "12"],
              "answer": 0,
              "exp": "En: $4^2 + 2 = 18$.\nHi: $4^2 + 2 = 18$।"
            },
            {
              "qEn": "Which is the smallest state in India by area?",
              "qHi": "क्षेत्रफल की दृष्टि से भारत का सबसे छोटा राज्य कौन सा है?",
              "optionsEn": ["Goa", "Sikkim", "Tripura", "Nagaland"],
              "optionsHi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
              "answer": 0,
              "exp": "En: Goa is the smallest state.\nHi: क्षेत्रफल में गोवा सबसे छोटा राज्य है।"
            },
            {
              "qEn": "What is the unit of frequency?",
              "qHi": "आवृत्ति की इकाई क्या है?",
              "optionsEn": ["Hertz", "Joule", "Pascal", "Watt"],
              "optionsHi": ["हर्ट्ज", "जूल", "पास्कल", "वाट"],
              "answer": 0,
              "exp": "En: Hertz is the unit of frequency.\nHi: हर्ट्ज आवृत्ति की इकाई है।"
            },
            {
              "qEn": "Who wrote 'Vande Mataram'?",
              "qHi": "'वंदे मातरम' किसने लिखा है?",
              "optionsEn": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Muhammad Iqbal", "Sarojini Naidu"],
              "optionsHi": ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "मोहम्मद इकबाल", "सरोजिनी नायडू"],
              "answer": 0,
              "exp": "En: Bankim Chandra Chatterjee wrote Vande Mataram.\nHi: बंकिम चंद्र चटर्जी ने वंदे मातरम लिखा।"
            },
            {
              "qEn": "If the perimeter of a square is 40 cm, find its area.",
              "qHi": "यदि किसी वर्ग का परिमाप 40 सेमी है, तो उसका क्षेत्रफल ज्ञात कीजिए।",
              "optionsEn": ["100 sq cm", "160 sq cm", "80 sq cm", "120 sq cm"],
              "optionsHi": ["100 वर्ग सेमी", "160 वर्ग सेमी", "80 वर्ग सेमी", "120 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Side = 10, Area = 100 sq cm.\nHi: भुजा = 10, क्षेत्रफल = 100 वर्ग सेमी।"
            },
            {
              "qEn": "Which metal is liquid at room temperature?",
              "qHi": "कमरे के तापमान पर कौन सी धातु तरल होती है?",
              "optionsEn": ["Mercury", "Bromine", "Gallium", "Sodium"],
              "optionsHi": ["पारा", "ब्रोमीन", "गैलियम", "सोडियम"],
              "answer": 0,
              "exp": "En: Mercury is liquid at room temperature.\nHi: पारा कमरे के तापमान पर तरल होता है।"
            },
            {
              "qEn": "What is the formula for the volume of a cylinder?",
              "qHi": "बेलन के आयतन का सूत्र क्या है?",
              "optionsEn": ["$\\pi r^2 h$", "$2 \\pi r h$", "$\\frac{1}{3} \\pi r^2 h$", "$4 \\pi r^2$"],
              "optionsHi": ["$\\pi r^2 h$", "$2 \\pi r h$", "$\\frac{1}{3} \\pi r^2 h$", "$4 \\pi r^2$"],
              "answer": 0,
              "exp": "En: Volume of cylinder is $\\pi r^2 h$.\nHi: बेलन का आयतन $\\pi r^2 h$ होता है।"
            },
            {
              "qEn": "Who proposed the Theory of Relativity?",
              "qHi": "सापेक्षता का सिद्धांत किसने प्रतिपादित किया था?",
              "optionsEn": ["Albert Einstein", "Isaac Newton", "Galileo", "Bohr"],
              "optionsHi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो", "बोहर"],
              "answer": 0,
              "exp": "En: Albert Einstein proposed the Theory of Relativity.\nHi: अल्बर्ट आइंस्टीन ने सापेक्षता का सिद्धांत दिया।"
            },
            {
              "qEn": "If $a - b = 3$ and $ab = 10$, find $a^2 + b^2$.",
              "qHi": "यदि $a - b = 3$ और $ab = 10$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["29", "19", "39", "25"],
              "optionsHi": ["29", "19", "39", "25"],
              "answer": 0,
              "exp": "En: $3^2 + 2(10) = 29$.\nHi: $3^2 + 2(10) = 29$।"
            },
            {
              "qEn": "Which is the highest peak in India?",
              "qHi": "भारत की सबसे ऊँची चोटी कौन सी है?",
              "optionsEn": ["K2 (Godwin-Austen)", "Kangchenjunga", "Nanda Devi", "Mount Everest"],
              "optionsHi": ["K2 (गॉडविन ऑस्टिन)", "कंचनजंगा", "नंदा देवी", "माउंट एवरेस्ट"],
              "answer": 0,
              "exp": "En: K2 is the highest peak in India.\nHi: K2 भारत की सबसे ऊँची चोटी है।"
            },
            {
              "qEn": "What is the value of $\\cos 0^\\circ$?",
              "qHi": "$\\cos 0^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "Undefined"],
              "optionsHi": ["1", "0", "1/2", "परिभाषित नहीं"],
              "answer": 0,
              "exp": "En: $\\cos 0^\\circ = 1$.\nHi: $\\cos 0^\\circ = 1$ होता है।"
            },
            {
              "qEn": "Who founded Brahmo Samaj?",
              "qHi": "ब्रह्म समाज की स्थापना किसने की थी?",
              "optionsEn": ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Pandurang"],
              "optionsHi": ["राजा राममोहन राय", "स्वामी विवेकानंद", "दयानंद सरस्वती", "पांडुरंग"],
              "answer": 0,
              "exp": "En: Raja Ram Mohan Roy founded Brahmo Samaj.\nHi: राजा राममोहन राय ने ब्रह्म समाज की स्थापना की।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 3$, find $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 3$ है, तो $x^3 + \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["18", "27", "9", "24"],
              "optionsHi": ["18", "27", "9", "24"],
              "answer": 0,
              "exp": "En: $3^3 - 3(3) = 18$.\nHi: $3^3 - 3(3) = 18$।"
            },
            {
              "qEn": "Which gas is known as laughing gas?",
              "qHi": "किस गैस को लाफिंग गैस कहा जाता है?",
              "optionsEn": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
              "optionsHi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
              "answer": 0,
              "exp": "En: Nitrous oxide is laughing gas.\nHi: नाइट्रस ऑक्साइड लाफिंग गैस है।"
            },
            {
              "qEn": "What is the square root of 576?",
              "qHi": "576 का वर्गमूल क्या है?",
              "optionsEn": ["24", "26", "22", "28"],
              "optionsHi": ["24", "26", "22", "28"],
              "answer": 0,
              "exp": "En: $\\sqrt{576} = 24$.\nHi: $\\sqrt{576} = 24$।"
            },
            {
              "qEn": "Who wrote 'Meghaduta'?",
              "qHi": "'मेघदूत' किसने लिखा है?",
              "optionsEn": ["Kalidasa", "Tulsidas", "Surdas", "Banabhatta"],
              "optionsHi": ["कालिदास", "तुलसीदास", "सूरदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Kalidasa wrote Meghaduta.\nHi: कालिदास ने मेघदूत लिखा।"
            },
            {
              "qEn": "If the radius of a circle is 7 cm, find its area.",
              "qHi": "यदि किसी वृत्त की त्रिज्या 7 सेमी है, तो उसका क्षेत्रफल ज्ञात कीजिए।",
              "optionsEn": ["154 sq cm", "132 sq cm", "88 sq cm", "44 sq cm"],
              "optionsHi": ["154 वर्ग सेमी", "132 वर्ग सेमी", "88 वर्ग सेमी", "44 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Area = $\\frac{22}{7} \\times 7^2 = 154$.\nHi: क्षेत्रफल = $\\frac{22}{7} \\times 7^2 = 154$ वर्ग सेमी।"
            },
            {
              "qEn": "Which is the longest river in India?",
              "qHi": "भारत की सबसे लंबी नदी कौन सी है?",
              "optionsEn": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
              "optionsHi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
              "answer": 0,
              "exp": "En: Ganga is the longest river.\nHi: गंगा सबसे लंबी नदी है।"
            },
            {
              "qEn": "What is the value of $\\log_{10} 1000$?",
              "qHi": "$\\log_{10} 1000$ का मान क्या है?",
              "optionsEn": ["3", "2", "4", "1"],
              "optionsHi": ["3", "2", "4", "1"],
              "answer": 0,
              "exp": "En: $\\log_{10} 1000 = 3$.\nHi: $\\log_{10} 1000 = 3$।"
            },
            {
              "qEn": "Who was the first Governor-General of independent India?",
              "qHi": "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
              "optionsEn": ["Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad", "Wavell"],
              "optionsHi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "वेवेल"],
              "answer": 0,
              "exp": "En: Lord Mountbatten was the first Governor-General.\nHi: लॉर्ड माउंटबेटन पहले गवर्नर-जनरल थे।"
            },
            {
              "qEn": "If $a:b = 2:3$ and $b:c = 4:5$, find $a:c$.",
              "qHi": "यदि $a:b = 2:3$ और $b:c = 4:5$ है, तो $a:c$ ज्ञात कीजिए।",
              "optionsEn": ["8:15", "6:15", "8:13", "10:12"],
              "optionsHi": ["8:15", "6:15", "8:13", "10:12"],
              "answer": 0,
              "exp": "En: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$.\nHi: $\\frac{2}{3} \\times \\frac{4}{5} = \\frac{8}{15}$।"
            },
            {
              "qEn": "Which amendment added Fundamental Duties to the Constitution?",
              "qHi": "किस संशोधन द्वारा संविधान में मौलिक कर्तव्य जोड़े गए?",
              "optionsEn": ["42nd Amendment", "44th Amendment", "86th Amendment", "73rd Amendment"],
              "optionsHi": ["42वां संशोधन", "44वां संशोधन", "86वां संशोधन", "73वां संशोधन"],
              "answer": 0,
              "exp": "En: 42nd Amendment added Fundamental Duties.\nHi: 42वें संशोधन द्वारा मौलिक कर्तव्य जोड़े गए।"
            },
            {
              "qEn": "What is the chemical formula of heavy water?",
              "qHi": "भारी जल का रासायनिक सूत्र क्या है?",
              "optionsEn": ["D2O", "H2O", "H2O2", "T2O"],
              "optionsHi": ["D2O", "H2O", "H2O2", "T2O"],
              "answer": 0,
              "exp": "En: Heavy water is $D_2O$.\nHi: भारी जल $D_2O$ है।"
            },
            {
              "qEn": "Who discovered Penicillin?",
              "qHi": "पेनिसिलिन की खोज किसने की थी?",
              "optionsEn": ["Alexander Fleming", "Louis Pasteur", "Edward Jenner", "Robert Koch"],
              "optionsHi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "एडवर्ड जेनर", "रॉबर्ट कोच"],
              "answer": 0,
              "exp": "En: Alexander Fleming discovered penicillin.\nHi: अलेक्जेंडर फ्लेमिंग ने पेनिसिलिन की खोज की।"
            },
            {
              "qEn": "If the sum of two numbers is 25 and difference is 5, find the numbers.",
              "qHi": "यदि दो संख्याओं का योग 25 और अंतर 5 है, तो संख्याएँ ज्ञात कीजिए।",
              "optionsEn": ["15, 10", "16, 9", "14, 11", "17, 8"],
              "optionsHi": ["15, 10", "16, 9", "14, 11", "17, 8"],
              "answer": 0,
              "exp": "En: Numbers are 15 and 10.\nHi: संख्याएँ 15 और 10 हैं।"
            },
            {
              "qEn": "Which instrument measures blood pressure?",
              "qHi": "रक्तचाप मापने के लिए किस उपकरण का उपयोग होता है?",
              "optionsEn": ["Sphygmomanometer", "Barometer", "Thermometer", "Stethoscope"],
              "optionsHi": ["स्फिग्मोमैनोमीटर", "बैरोमीटर", "थर्मामीटर", "स्टेथोस्कोप"],
              "answer": 0,
              "exp": "En: Sphygmomanometer measures blood pressure.\nHi: स्फिग्मोमैनोमीटर रक्तचाप मापता है।"
            },
            {
              "qEn": "What is the cube of 15?",
              "qHi": "15 का घन कितना होता है?",
              "optionsEn": ["3375", "225", "3755", "3125"],
              "optionsHi": ["3375", "225", "3755", "3125"],
              "answer": 0,
              "exp": "En: $15^3 = 3375$.\nHi: $15^3 = 3375$।"
            },
            {
              "qEn": "Who was the founder of the Gupta Empire?",
              "qHi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
              "optionsEn": ["Sri Gupta", "Chandragupta I", "Samudragupta", "Kumargupta"],
              "optionsHi": ["श्री गुप्त", "चंद्रगुप्त प्रथम", "समुद्रगुप्त", "कुमारगुप्त"],
              "answer": 0,
              "exp": "En: Sri Gupta founded the Gupta Empire.\nHi: श्री गुप्त ने गुप्त साम्राज्य की स्थापना की।"
            },
            {
              "qEn": "If $x^2 - 5x + 6 = 0$, find the roots.",
              "qHi": "यदि $x^2 - 5x + 6 = 0$ है, तो मूल ज्ञात कीजिए।",
              "optionsEn": ["2, 3", "-2, -3", "1, 6", "-1, -6"],
              "optionsHi": ["2, 3", "-2, -3", "1, 6", "-1, -6"],
              "answer": 0,
              "exp": "En: Roots are 2 and 3.\nHi: मूल 2 और 3 हैं।"
            },
            {
              "qEn": "Which is the largest gland in the human body?",
              "qHi": "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
              "optionsEn": ["Liver", "Pancreas", "Thyroid", "Pituitary"],
              "optionsHi": ["यकृत", "अग्नाशय", "थायराइड", "पिट्यूटरी"],
              "answer": 0,
              "exp": "En: Liver is the largest gland.\nHi: यकृत सबसे बड़ी ग्रंथि है।"
            },
            {
              "qEn": "What is the value of $\\sin 30^\\circ$?",
              "qHi": "$\\sin 30^\\circ$ का मान क्या है?",
              "optionsEn": ["1/2", "1", "0", "$\\sqrt{3}/2$"],
              "optionsHi": ["1/2", "1", "0", "$\\sqrt{3}/2$"],
              "answer": 0,
              "exp": "En: $\\sin 30^\\circ = 1/2$.\nHi: $\\sin 30^\\circ = 1/2$ होता है।"
            },
            {
              "qEn": "Who wrote 'Panchatantra'?",
              "qHi": "'पंचतंत्र' के लेखक कौन हैं?",
              "optionsEn": ["Vishnu Sharma", "Kalidasa", "Tulsidas", "Banabhatta"],
              "optionsHi": ["विष्णु शर्मा", "कालिदास", "तुलसीदास", "बाणभट्ट"],
              "answer": 0,
              "exp": "En: Vishnu Sharma wrote Panchatantra.\nHi: विष्णु शर्मा ने पंचतंत्र लिखी।"
            },
            {
              "qEn": "If the side of a cube is 5 cm, find its volume.",
              "qHi": "यदि किसी घन की भुजा 5 सेमी है, तो उसका आयतन ज्ञात कीजिए।",
              "optionsEn": ["125 cubic cm", "100 cubic cm", "150 cubic cm", "75 cubic cm"],
              "optionsHi": ["125 घन सेमी", "100 घन सेमी", "150 घन सेमी", "75 घन सेमी"],
              "answer": 0,
              "exp": "En: Volume = $5^3 = 125$.\nHi: आयतन = $5^3 = 125$ घन सेमी।"
            },
            {
              "qEn": "Which is the national aquatic animal of India?",
              "qHi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
              "optionsEn": ["Gangetic Dolphin", "Blue Whale", "Crocodile", "Alligator"],
              "optionsHi": ["गंगा की डॉल्फिन", "ब्लू ह्वेल", "मगरमच्छ", "एलीगेटर"],
              "answer": 0,
              "exp": "En: Gangetic Dolphin is the national aquatic animal.\nHi: गंगा की डॉल्फिन राष्ट्रीय जलीय जीव है।"
            },
            {
              "qEn": "What is the chemical name of vinegar?",
              "qHi": "सिरका का रासायनिक नाम क्या है?",
              "optionsEn": ["Dilute acetic acid", "Citric acid", "Formic acid", "Oxalic acid"],
              "optionsHi": ["तनु एसिटिक एसिड", "साइट्रिक एसिड", "फॉर्मिक एसिड", "ऑक्जेलिक एसिड"],
              "answer": 0,
              "exp": "En: Vinegar is dilute acetic acid.\nHi: सिरका तनु एसिटिक एसिड है।"
            },
            {
              "qEn": "If $a + b = 7$ and $ab = 12$, find $a^2 + b^2$.",
              "qHi": "यदि $a + b = 7$ और $ab = 12$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["25", "49", "24", "31"],
              "optionsHi": ["25", "49", "24", "31"],
              "answer": 0,
              "exp": "En: $7^2 - 2(12) = 25$.\nHi: $7^2 - 2(12) = 25$।"
            },
            {
              "qEn": "Who discovered neutron?",
              "qHi": "न्यूट्रॉन की खोज किसने की थी?",
              "optionsEn": ["James Chadwick", "J.J. Thomson", "Rutherford", "Bohr"],
              "optionsHi": ["जेम्स चैंडविक", "जे. जे. थॉमसन", "रदरफोर्ड", "बोहर"],
              "answer": 0,
              "exp": "En: James Chadwick discovered neutron.\nHi: जेम्स चैंडविक ने न्यूट्रॉन की खोज की थी।"
            },
            {
              "qEn": "Which is the national river of India?",
              "qHi": "भारत की राष्ट्रीय नदी कौन सी है?",
              "optionsEn": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
              "optionsHi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
              "answer": 0,
              "exp": "En: Ganga is the national river.\nHi: गंगा राष्ट्रीय नदी है।"
            },
            {
              "qEn": "What is the square of 35?",
              "qHi": "35 का वर्ग क्या है?",
              "optionsEn": ["1225", "1125", "1325", "1025"],
              "optionsHi": ["1225", "1125", "1325", "1025"],
              "answer": 0,
              "exp": "En: $35^2 = 1225$.\nHi: $35^2 = 1225$।"
            },
            {
              "qEn": "Who wrote 'Das Kapital'?",
              "qHi": "'दास कैपिटल' किसने लिखी है?",
              "optionsEn": ["Karl Marx", "Adam Smith", "Lenin", "Weber"],
              "optionsHi": ["कार्ल मार्क्स", "एडम स्मिथ", "लेनिन", "वेबर"],
              "answer": 0,
              "exp": "En: Karl Marx wrote Das Kapital.\nHi: कार्ल मार्क्स ने दास कैपिटल लिखी।"
            },
            {
              "qEn": "If the perimeter of a rectangle is 50 cm and length is 15 cm, find breadth.",
              "qHi": "यदि आयत का परिमाप 50 सेमी और लंबाई 15 सेमी है, तो चौड़ाई ज्ञात कीजिए।",
              "optionsEn": ["10 cm", "12 cm", "8 cm", "14 cm"],
              "optionsHi": ["10 सेमी", "12 सेमी", "8 सेमी", "14 सेमी"],
              "answer": 0,
              "exp": "En: Breadth = $(50/2) - 15 = 10$ cm.\nHi: चौड़ाई = $25 - 15 = 10$ सेमी।"
            },
            {
              "qEn": "Which is the highest waterfall in India?",
              "qHi": "भारत का सबसे ऊँचा जलप्रपात कौन सा है?",
              "optionsEn": ["Kunchikal Falls", "Jog Falls", "Dudh Sagar", "Nohkalikai"],
              "optionsHi": ["कुंचिकल जलप्रपात", "जोग जलप्रपात", "दूधसागर", "नोहकलिकाई"],
              "answer": 0,
              "exp": "En: Kunchikal Falls is the highest.\nHi:कुंचिकल जलप्रपात सबसे ऊँचा है।"
            },
            {
              "qEn": "What is the value of $\\tan 45^\\circ$?",
              "qHi": "$\\tan 45^\\circ$ का मान क्या है?",
              "optionsEn": ["1", "0", "1/2", "$\\sqrt{3}$"],
              "optionsHi": ["1", "0", "1/2", "$\\sqrt{3}$"],
              "answer": 0,
              "exp": "En: $\\tan 45^\\circ = 1$.\nHi: $\\tan 45^\\circ = 1$ होता है।"
            },
            {
              "qEn": "Who founded Arya Samaj in 1875?",
              "qHi": "1875 में आर्य समाज की स्थापना किसने की थी?",
              "optionsEn": ["Dayanand Saraswati", "Raja Ram Mohan Roy", "Vivekananda", "Pandurang"],
              "optionsHi": ["दयानंद सरस्वती", "राजा राममोहन राय", "विवेकानंद", "पांडुरंग"],
              "answer": 0,
              "exp": "En: Dayanand Saraswati founded Arya Samaj.\nHi: दयानंद सरस्वती ने आर्य समाज की स्थापना की।"
            },
            {
              "qEn": "If $x - \\frac{1}{x} = 2$, find $x^2 + \\frac{1}{x^2}$.",
              "qHi": "यदि $x - \\frac{1}{x} = 2$ है, तो $x^2 + \\frac{1}{x^2}$ ज्ञात कीजिए।",
              "optionsEn": ["6", "4", "8", "2"],
              "optionsHi": ["6", "4", "8", "2"],
              "answer": 0,
              "exp": "En: $2^2 + 2 = 6$.\nHi: $2^2 + 2 = 6$।"
            },
            {
              "qEn": "Which is the longest highway in India?",
              "qHi": "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
              "optionsEn": ["NH 44", "NH 27", "NH 16", "NH 48"],
              "optionsHi": ["NH 44", "NH 27", "NH 16", "NH 48"],
              "answer": 0,
              "exp": "En: NH 44 is the longest highway.\nHi: NH 44 सबसे लंबा राजमार्ग है।"
            },
            {
              "qEn": "What is the chemical formula of common salt?",
              "qHi": "साधारण नमक का रासायनिक सूत्र क्या है?",
              "optionsEn": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "optionsHi": ["NaCl", "NaHCO3", "Na2CO3", "NaOH"],
              "answer": 0,
              "exp": "En: Common salt is NaCl.\nHi: साधारण नमक NaCl है।"
            },
            {
              "qEn": "If the cost price of 10 pens equals selling price of 8 pens, find profit %.",
              "qHi": "यदि 10 पेनों का क्रय मूल्य 8 पेनों के विक्रय मूल्य के बराबर है, तो लाभ % ज्ञात कीजिए।",
              "optionsEn": ["25%", "20%", "15%", "30%"],
              "optionsHi": ["25%", "20%", "15%", "30%"],
              "answer": 0,
              "exp": "En: Profit % = $(2/8) \\times 100 = 25\\%$.\nHi: लाभ % = $25\\%$ है।"
            },
            {
              "qEn": "Who was the first woman Prime Minister of India?",
              "qHi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
              "optionsEn": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
              "optionsHi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
              "answer": 0,
              "exp": "En: Indira Gandhi was the first woman PM.\nHi: इंदिरा गांधी पहली महिला प्रधानमंत्री थीं।"
            },
            {
              "qEn": "Which is the coldest planet in the solar system?",
              "qHi": "सौरमंडल का सबसे ठंडा ग्रह कौन सा है?",
              "optionsEn": ["Uranus", "Neptune", "Saturn", "Jupiter"],
              "optionsHi": ["यूरेनस", "नेपच्यून", "शनि", "बृहस्पति"],
              "answer": 0,
              "exp": "En: Uranus is the coldest planet.\nHi: यूरेनस सबसे ठंडा ग्रह है।"
            },
            {
              "qEn": "What is the value of $\\log_{10} 100$?",
              "qHi": "$\\log_{10} 100$ का मान क्या है?",
              "optionsEn": ["2", "1", "3", "10"],
              "optionsHi": ["2", "1", "3", "10"],
              "answer": 0,
              "exp": "En: $\\log_{10} 100 = 2$.\nHi: $\\log_{10} 100 = 2$।"
            },
            {
              "qEn": "Who wrote 'Geetanjali'?",
              "qHi": "'गीतांजलि' किसने लिखी है?",
              "optionsEn": ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Premchand"],
              "optionsHi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "प्रेमचंद"],
              "answer": 0,
              "exp": "En: Rabindranath Tagore wrote Geetanjali.\nHi: रवींद्रनाथ टैगोर ने गीतांजलि लिखी।"
            },
            {
              "qEn": "Which organ filters blood in human body?",
              "qHi": "मानव शरीर में कौन सा अंग रक्त को फ़िल्टर करता है?",
              "optionsEn": ["Kidney", "Liver", "Heart", "Lungs"],
              "optionsHi": ["गुर्दा", "यकृत", "हार्ट", "फेफड़े"],
              "answer": 0,
              "exp": "En: Kidneys filter blood.\nHi: गुर्दे रक्त को फ़िल्टर करते हैं।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 3$, find $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 3$ है, तो $x^3 + \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["18", "27", "9", "24"],
              "optionsHi": ["18", "27", "9", "24"],
              "answer": 0,
              "exp": "En: $3^3 - 3(3) = 18$.\nHi: $3^3 - 3(3) = 18$।"
            },
            {
              "qEn": "Which is the longest bone in human body?",
              "qHi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
              "optionsEn": ["Femur", "Tibia", "Fibula", "Humerus"],
              "optionsHi": ["फीमर", "टिबिया", "फिब्युला", "ह्यूमरस"],
              "answer": 0,
              "exp": "En: Femur is the longest bone.\nHi: फीमर सबसे लंबी हड्डी है।"
            },
            {
              "qEn": "What is the square of 30?",
              "qHi": "30 का वर्ग क्या है?",
              "optionsEn": ["900", "90", "9000", "300"],
              "optionsHi": ["900", "90", "9000", "300"],
              "answer": 0,
              "exp": "En: $30^2 = 900$.\nHi: $30^2 = 900$।"
            },
            {
              "qEn": "Who was the first Indian to win a Nobel Prize?",
              "qHi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
              "optionsEn": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Amartya Sen"],
              "optionsHi": ["रवींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
              "answer": 0,
              "exp": "En: Rabindranath Tagore won the first Nobel Prize for India.\nHi: रवींद्रनाथ टैगोर पहले भारतीय नोबेल विजेता थे।"
            },
            {
              "qEn": "Which is the smallest bone in human body?",
              "qHi": "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
              "optionsEn": ["Stapes", "Malleus", "Incus", "Femur"],
              "optionsHi": ["स्टेप्स", "मेलियस", "इंकस", "फीमर"],
              "answer": 0,
              "exp": "En: Stapes is the smallest bone.\nHi: स्टेप्स सबसे छोटी हड्डी है।"
            },
            {
              "qEn": "If $\\sin \\theta = 1/2$, find $\\cos \\theta$.",
              "qHi": "यदि $\\sin \\theta = 1/2$ है, तो $\\cos \\theta$ ज्ञात कीजिए।",
              "optionsEn": ["$\\frac{\\sqrt{3}}{2}$", "1", "0", "$\\frac{1}{\\sqrt{2}}$"],
              "optionsHi": ["$\\frac{\\sqrt{3}}{2}$", "1", "0", "$\\frac{1}{\\sqrt{2}}$"],
              "answer": 0,
              "exp": "En: $\\cos \\theta = \\sqrt{3}/2$.\nHi: $\\cos \\theta = \\sqrt{3}/2$ होता है।"
            },
            {
              "qEn": "Which gas makes balloons float?",
              "qHi": "गुब्बारों को उड़ाने के लिए कौन सी गैस भरी जाती है?",
              "optionsEn": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
              "optionsHi": ["हीडियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
              "answer": 0,
              "exp": "En: Helium is used in balloons.\nHi: गुब्बारों में हीलियम भरी जाती है।"
            },
            {
              "qEn": "What is the chemical name of laughing gas?",
              "qHi": "लाफिंग गैस का रासायनिक नाम क्या है?",
              "optionsEn": ["Nitrous oxide", "Nitric oxide", "Nitrogen dioxide", "Ammonia"],
              "optionsHi": ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "नाइट्रोजन डाइऑक्साइड", "अमोनिया"],
              "answer": 0,
              "exp": "En: Nitrous oxide is laughing gas.\nHi: नाइट्रस ऑक्साइड लाफिंग गैस है।"
            },
            {
              "qEn": "If $a - b = 6$ and $ab = 16$, find $a^2 + b^2$.",
              "qHi": "यदि $a - b = 6$ और $ab = 16$ है, तो $a^2 + b^2$ ज्ञात कीजिए।",
              "optionsEn": ["68", "36", "52", "48"],
              "optionsHi": ["68", "36", "52", "48"],
              "answer": 0,
              "exp": "En: $6^2 + 2(16) = 68$.\nHi: $6^2 + 2(16) = 68$।"
            },
            {
              "qEn": "Which is the national fruit of India?",
              "qHi": "भारत का राष्ट्रीय फल कौन सा है?",
              "optionsEn": ["Mango", "Apple", "Banana", "Guava"],
              "optionsHi": ["आम", "सेब", "केला", "अमरूद"],
              "answer": 0,
              "exp": "En: Mango is the national fruit.\nHi: आम राष्ट्रीय फल है।"
            },
            {
              "qEn": "What is the value of $\\log_2 32$?",
              "qHi": "$\\log_2 32$ का मान क्या है?",
              "optionsEn": ["5", "4", "6", "3"],
              "optionsHi": ["5", "4", "6", "3"],
              "answer": 0,
              "exp": "En: $\\log_2 32 = 5$.\nHi: $\\log_2 32 = 5$।"
            },
            {
              "qEn": "Which is the most reactive non-metal?",
              "qHi": "सबसे अधिक प्रतिक्रियाशील अधातु कौन सी है?",
              "optionsEn": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
              "optionsHi": ["फ्लोरिन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
              "answer": 0,
              "exp": "En: Fluorine is the most reactive non-metal.\nHi: फ्लोरिन सबसे अधिक प्रतिक्रियाशील अधातु है।"
            },
            {
              "qEn": "If the volume of a cube is 64 cubic cm, find total surface area.",
              "qHi": "यदि घन का आयतन 64 घन सेमी है, तो कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
              "optionsEn": ["96 sq cm", "64 sq cm", "128 sq cm", "144 sq cm"],
              "optionsHi": ["96 वर्ग सेमी", "64 वर्ग सेमी", "128 वर्ग सेमी", "144 वर्ग सेमी"],
              "answer": 0,
              "exp": "En: Side = 4, Surface area = $6 \\times 4^2 = 96$ sq cm.\nHi: भुजा = 4, पृष्ठीय क्षेत्रफल = $96$ वर्ग सेमी।"
            },
            {
              "qEn": "Which is the highest civilian award in India?",
              "qHi": "भारत का सर्वोच्च नागरिक पुरस्कार कौन सा है?",
              "optionsEn": ["Bharat Ratna", "Padma Vibhushan", "Param Vir Chakra", "Padma Shri"],
              "optionsHi": ["भारत रत्न", "पद्म विभूषण", "परम वीर चक्र", "पद्म श्री"],
              "answer": 0,
              "exp": "En: Bharat Ratna is the highest award.\nHi: भारत रत्न सर्वोच्च नागरिक पुरस्कार है।"
            },
            {
              "qEn": "If $x + \\frac{1}{x} = 5$, find $x^3 + \\frac{1}{x^3}$.",
              "qHi": "यदि $x + \\frac{1}{x} = 5$ है, तो $x^3 + \\frac{1}{x^3}$ ज्ञात कीजिए।",
              "optionsEn": ["110", "125", "100", "115"],
              "optionsHi": ["110", "125", "100", "115"],
              "answer": 0,
              "exp": "En: $5^3 - 3(5) = 110$.\nHi: $5^3 - 3(5) = 110$।"
            },
            {
              "qEn": "Who discovered radioactivity?",
              "qHi": "रेडियोधर्मिता की खोज किसने की थी?",
              "optionsEn": ["Henri Becquerel", "Marie Curie", "Pierre Curie", "Rutherford"],
              "optionsHi": ["हेनरी बेकरेल", "मैरी क्यूरी", "पियरे क्यूरी", "रदरफोर्ड"],
              "answer": 0,
              "exp": "En: Henri Becquerel discovered radioactivity.\nHi: हेनरी बेकरेल ने रेडियोधर्मिता खोजी थी।"
            }]
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
