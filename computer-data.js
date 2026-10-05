window.computerData = {
  name: "Computer",
  sections: [
    {
      id: "comp_chapters",
      name: "Computer Science & IT Fundamentals",
      chapters: [
        { id: 501, title: "Computer Introduction (कंप्यूटर का परिचय)", totalQuestions: 30 },
        { id: 502, title: "Operating Systems and Software (ऑपरेटिंग सिस्टम और सॉफ्टवेयर)", totalQuestions: 30 },
        { id: 503, title: "Computer Networks and Internet (कंप्यूटर नेटवर्किंग और इंटरनेट)", totalQuestions: 30 },
        { id: 504, title: "Database Management Systems and SQL (डेटाबेस मैनेजमेंट सिस्टम और SQL)", totalQuestions: 30 },
        { id: 505, title: "Programming and Basics (प्रोग्रामिंग और बुनियादी अवधारणाएँ)", totalQuestions: 30 }
      ]
    }
  ]
};
window.chapterQuestionsDB = {
  "Computer Introduction": [
    {
      qEn: "What does the term 'Computer' primarily derive from?",
      qHi: "'कंप्यूटर' (Computer) शब्द मुख्य रूप से किस शब्द से मिलकर बना है?",
      optionsEn: ["The Latin word 'Computare', meaning to calculate", "The Greek word 'Computos', meaning to write", "The French word 'Compte', meaning to store", "The English word 'Compute', meaning to think"],
      optionsHi: ["लैटिन शब्द 'Computare', जिसका अर्थ गणना करना है", "ग्रीक शब्द 'Computos', जिसका अर्थ लिखना है", "फ्रेंच शब्द 'Compte', जिसका अर्थ स्टोर करना है", "अंग्रेजी शब्द 'Compute', जिसका अर्थ सोचना है"],
      answer: 0,
      exp: "Explanation (En): The word computer is derived from the Latin word 'Computare', which means to calculate or programmable counting.\nस्पष्टीकरण (Hi): कंप्यूटर शब्द लैटिन भाषा के 'Computare' शब्द से बना है, जिसका शाब्दिक अर्थ गणना करना है।"
    },
    {
      qEn: "Who is widely acknowledged as the 'Father of Computers' for his pioneering design of the mechanical computer (Analytical Engine)?",
      qHi: "यांत्रिक कंप्यूटर (एनालिटिकल इंजन) के अपने अग्रणी डिजाइन के लिए किसे व्यापक रूप से 'कंप्यूटर का जनक' (Father of Computers) माना जाता है?",
      optionsEn: ["Charles Babbage (चार्ल्स बैबेज)", "Alan Turing", "Blaise Pascal", "John von Neumann"],
      optionsHi: ["चार्ल्स बैबेज (Charles Babbage)", "एलन ट्यूरिंग", "ब्लेज पास्कल", "जॉन वॉन न्यूमैन"],
      answer: 0,
      exp: "Explanation (En): Charles Babbage designed the Difference Engine and the Analytical Engine in the 19th century, earning him the title of Father of Computers.\nस्पष्टीकरण (Hi): चार्ल्स बैबेज ने 19वीं शताब्दी में डिफरेंस इंजन और एनालिटिकल इंजन का आविष्कार किया था, इसीलिए उन्हें कंप्यूटर का पितामह कहा जाता है।"
    },
    {
      qEn: "Who is recognized as the world's first computer programmer for her work on Charles Babbage's Analytical Engine?",
      qHi: "चार्ल्स बैबेज के एनालिटिकल इंजन पर अपने काम के लिए दुनिया की पहली कंप्यूटर प्रोग्रामर के रूप में किसे जाना जाता है?",
      optionsEn: ["Ada Lovelace (एड़ा लवलेस)", "Grace Hopper", "Margaret Hamilton", "Radia Perlman"],
      optionsHi: ["एड़ा लवलेस (Ada Lovelace)", "ग्रेस हॉपर", "मार्गरेट हैमिल्टन", "रेडिया पर्लमैन"],
      answer: 0,
      exp: "Explanation (En): Ada Lovelace wrote the first algorithm intended to be processed by a machine, making her history's first computer programmer.\nस्पष्टीकरण (Hi): एड़ा लवलेस ने एनालिटिकल इंजन के लिए दुनिया का पहला एल्गोरिदम लिखा था, इसलिए उन्हें इतिहास की पहली प्रोग्रामर माना जाता है।"
    },
    {
      qEn: "What are the core components of the basic computer architecture proposed by John von Neumann?",
      qHi: "जॉन वॉन न्यूमैन द्वारा प्रस्तावित बुनियादी कंप्यूटर वास्तुकला (Architecture) के मुख्य घटक कौन-कौन से हैं?",
      optionsEn: ["Central Processing Unit (CPU), Memory, Input/Output devices, and Storage", "Only Monitor and Keyboard", "Hard disk and Internet router", "Mouse and Printer"],
      optionsHi: ["सेंट्रल प्रोसेसिंग यूनिट (CPU), मेमोरी, इनपुट/आउटपुट डिवाइस और स्टोरेज", "केवल मॉनिटर और कीबोर्ड", "हार्ड डिस्क और इंटरनेट राउटर", "माउस और प्रिंटर"],
      answer: 0,
      exp: "Explanation (En): Von Neumann architecture features a CPU (ALU and Control Unit), memory, and I/O mechanisms, forming the foundation of modern computers.\nस्पष्टीकरण (Hi): वॉन न्यूमैन आर्किटेक्चर में CPU, मेमोरी, इनपुट और आउटपुट इकाइयां शामिल हैं जो आज के आधुनिक कंप्यूटरों का आधार हैं।"
    },
    {
      qEn: "Which unit of the CPU is responsible for performing arithmetic operations (addition, subtraction) and logical comparisons?",
      qHi: "CPU का कौन सा भाग अंकगणितीय संचालन (जोड़, घटाव) और तार्किक तुलना (Logical comparisons) करने के लिए जिम्मेदार है?",
      optionsEn: ["Arithmetic Logic Unit (ALU / एरिथमेटिक लॉजिक यूनिट)", "Control Unit (CU)", "Read Only Memory (ROM)", "Cache Memory"],
      optionsHi: ["एरिथमेटिक लॉजिक यूनिट (ALU)", "कंट्रोल यूनिट (CU)", "रीड ओनली मेमोरी (ROM)", "कैश मेमोरी"],
      answer: 0,
      exp: "Explanation, (En): The ALU performs all mathematical calculations and logical decisions inside the processor.\nस्पष्टीकरण (Hi): ALU (Arithmetic Logic Unit) प्रोसेसर के भीतर सभी गणितीय और तार्किक (True/False) निर्णय लेने का कार्य करता है।"
    },
    {
      qEn: "What is the function of the 'Control Unit' (CU) inside the CPU?",
      qHi: "CPU के भीतर स्थित 'कंट्रोल यूनिट' (CU) का मुख्य कार्य क्या है?",
      optionsEn: ["To direct and coordinate all operations of the computer system, fetching and decoding instructions", "To permanently store large data files", "To print hard copies of documents", "To provide permanent electric power"],
      optionsHi: ["कंप्यूटर सिस्टम के सभी कार्यों को निर्देशित और समन्वित करना, निर्देशों को लाना और डिकोड करना", "बड़ी डेटा फाइलों को स्थायी रूप से स्टोर करना", "दस्तावेजों की हार्ड कॉपी प्रिंट करना", "स्थायी बिजली आपूर्ति देना"],
      answer: 0,
      exp: "Explanation (En): The Control Unit acts as the 'brain within the brain', managing instruction execution and coordinating hardware components.\nस्पष्टीकरण (Hi): कंट्रोल यूनिट कंप्यूटर के सभी हार्डवेयर और निर्देशों के प्रवाह को नियंत्रित और निर्देशित करती है।"
    },
    {
      qEn: "What is 'Primary Memory' (RAM and ROM) characterized by compared to Secondary Storage?",
      qHi: "द्वितीयक स्टोरेज (Secondary Storage) की तुलना में 'प्राथमिक मेमोरी' (RAM और ROM) की मुख्य विशेषता क्या होती है?",
      optionsEn: ["It is directly accessible by the CPU, offering high speed but volatile (in case of RAM) or limited capacity relative to hard disks", "It is extremely slow and used only for long-term backups", "It cannot be accessed by the processor directly", "It is made of magnetic tapes only"],
      optionsHi: ["यह सीधे CPU द्वारा एक्सेस की जाती है, जो बहुत तेज होती है लेकिन रैम की स्थिति में अस्थिर (Volatile) होती है", "यह बेहद धीमी होती है और केवल बैकअप के लिए है", "प्रोसेसर इसे सीधे एक्सेस नहीं कर सकता", "यह केवल चुंबकीय टेप से बनती है"],
      answer: 0,
      exp: "Explanation (En): Primary memory (like RAM) holds data currently in use by the CPU for fast processing, unlike secondary storage which is non-volatile and slower.\nस्पष्टीकरण (Hi): प्राथमिक मेमोरी सीधे सीपीयू से जुड़ी होती है और तेजी से काम करती है, जबकि सेकेंडरी स्टोरेज धीमी और स्थायी होती है।"
    },
    {
      qEn: "What is the key difference between RAM (Random Access Memory) and ROM (Read Only Memory)?",
      qHi: "RAM (रैंडम एक्सेस मेमोरी) और ROM (रीड ओनली मेमोरी) के बीच मुख्य अंतर क्या है?",
      optionsEn: ["RAM is volatile (loses data when power is turned off) and read-write; ROM is non-volatile (retains data permanently) and read-mostly", "ROM loses data instantly when power is off", "RAM is used only for manufacturing printers", "There is no functional difference"],
      optionsHi: ["RAM वोलेटाइल है (बिजلی जाते ही डेटा उड़ जाता है) और रीड-राइट है; ROM नॉन-वोलेटाइल है (डेटा स्थायी रहता है) और मुख्य रूप से रीड-ओनली है", "बिजली जाने पर ROM का डेटा उड़ जाता है", "RAM सिर्फ प्रिंटर में होती है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): RAM stores active working data temporarily, while ROM stores permanent boot instructions (like BIOS).\nस्पष्टीकरण (Hi): रैम (RAM) अस्थायी और वोलेटाइल होती है, जबकि रोम (ROM) स्थायी (Non-volatile) होती है जिसमें कंप्यूटर चालू करने के बेसिक निर्देश होते हैं।"
    },
    {
      qEn: "Which of the following is classified strictly as an 'Input Device'?",
      qHi: "निम्नलिखित में से किसे पूरी तरह से 'इनपुट डिवाइस' (Input Device) के रूप में वर्गीकृत किया गया है?",
      optionsEn: ["Keyboard, Mouse, Scanner, and Microphone", "Monitor, Printer, and Speaker", "Hard Disk and Projector", "Plotter and Headphone"],
      optionsHi: ["कीबोर्ड, माउस, स्कैनर और माइक्रोफोन", "मॉनिटर, प्रिंटर और स्पीकर", "हार्ड डिस्क और प्रोजेक्टर", "प्लॉटर और हेडफोन"],
      answer: 0,
      exp: "Explanation (En): Input devices feed data and control signals into the computer, whereas output devices display or present processed results.\nस्पष्टीकरण (Hi): कीबोर्ड, माउस और स्कैनर कंप्यूटर में डेटा भेजने के लिए इस्तेमाल होते हैं, इसलिए ये इनपुट डिवाइस हैं।"
    },
    {
      qEn: "Which of the following is classified strictly as an 'Output Device'?",
      qHi: "निम्नलिखित में से किसे पूरी तरह से 'आउटपुट डिवाइस' (Output Device) के रूप में वर्गीकृत किया गया है?",
      optionsEn: ["Monitor, Printer, Speaker, and Projector", "Keyboard, Mouse, and Joystick", "Microphone and Barcode Reader", "Webcam and Scanner"],
      optionsHi: ["मॉनिटर, प्रिंटर, स्पीकर और प्रोजेक्टर", "कीबोर्ड, माउस और जॉयस्टिक", "माइक्रोफोन और बारकोड रीडर", "वेबकैम और स्कैनर"],
      answer: 0,
      exp: "Explanation, (En): Output devices translate computer signals into human-readable forms such as visuals, sound, or hard-copy printouts.\nस्पष्टीकरण (Hi): मॉनिटर, प्रिंटर और स्पीकर कंप्यूटर द्वारा प्रोसेस किए गए परिणाम को प्रदर्शित करते हैं, अतः ये आउटपुट डिवाइस हैं।"
    },
    {
      qEn: "What is the smallest unit of data measurement in computer memory?",
      qHi: "कंप्यूटर मेमोरी में डेटा मापने की सबसे छोटी इकाई (Smallest unit) कौन सी है?",
      optionsEn: ["A Bit (Binary Digit - 0 or 1)", "A Byte", "A Megabyte", "A Gigabyte"],
      optionsHi: ["एक बिट (Bit - 0 या 1)", "एक बाइट", "एक मेगाबाइट", "एक गीगाबाइट"],
      answer: 0,
      exp: "Explanation (En): A bit (binary digit) is the fundamental unit of information, representing either a 0 or a 1.\nस्पष्टीकरण (Hi): बिट (Bit) कंप्यूटर मेमोरी की सबसे बुनियादी और छोटी इकाई है जो 0 या 1 (Binary) मान रखती है।"
    },
    {
      qEn: "How many bits make up one standard 'Byte'?",
      qHi: "कितने बिट्स (Bits) मिलकर एक मानक 'बाइट' (Byte) बनाते हैं?",
      optionsEn: ["8 bits", "4 bits", "16 bits", "32 bits"],
      optionsHi: ["8 बिट्स", "4 बिट्स", "16 बिट्स", "32 बिट्स"],
      answer: 0,
      exp: "Explanation (En): A byte is composed of 8 bits, which is traditionally sufficient to represent a single character of text in computers.\nस्पष्टीकरण (Hi): 8 बिट्स (Bits) का एक समूह मिलकर 1 बाइट (Byte) का निर्माण करता है।"
    },
    {
      qEn: "What is the correct ascending order of memory size measurements (KB, MB, GB, TB)?",
      qHi: "मेमोरी आकार के माप का सही आरोही क्रम (KB, MB, GB, TB) कौन सा है?",
      optionsEn: ["Kilobyte (KB) < Megabyte (MB) < Gigabyte (GB) < Terabyte (TB)", "TB < GB < MB < KB", "MB < KB < GB < TB", "GB < TB < MB < KB"],
      optionsHi: ["किलोबाइट (KB) < मेगाबाइट (MB) < गीगाबाइट (GB) < टेराबाइट (TB)", "TB < GB < MB < KB", "MB < KB < GB < TB", "GB < TB < MB < KB"],
      answer: 0,
      exp: "Explanation (En): 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB; 1 TB = 1024 GB.\nस्पष्टीकरण (Hi): सबसे छोटा KB, उससे बड़ा MB, फिर GB और सबसे बड़ा इस क्रम में TB (Terabyte) होता है।"
    },
    {
      qEn: "What distinguishes 'Hardware' from 'Software' in a computer system?",
      qHi: "कंप्यूटर सिस्टम में 'हार्डवेयर' (Hardware) और 'सॉफ्टवेयर' (Software) में क्या अंतर है?",
      optionsEn: ["Hardware comprises the physical, tangible electronic components, whereas software comprises the intangible programs, data, and instructions", "Software is made of heavy metal parts", "Hardware runs without electricity", "There is no difference"],
      optionsHi: ["हार्डवेयर भौतिक और मूर्त इलेक्ट्रॉनिक घटक हैं, जबकि सॉफ्टवेयर अमूर्त प्रोग्राम, डेटा और निर्देश हैं", "सॉफ्टवेयर भारी धातु से बनता है", "हार्डवेयर बिना बिजली चलता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Hardware can be physically touched (CPU, monitor), while software consists of code executed by the hardware to perform tasks.\nस्पष्टीकरण (Hi): जिसे हम छू सकते हैं वह हार्डवेयर (मशीन) है, और जो कोडिंग या प्रोग्राम होते हैं जिन्हें छुआ नहीं जा सकता वह सॉफ्टवेयर है।"
    },
    {
      qEn: "What is 'Firmware' in computing?",
      qHi: "कंप्यूटिंग में 'फर्मवेयर' (Firmware) किसे कहा जाता है?",
      optionsEn: ["Permanent software programmed into a read-only memory (ROM) chip, providing low-level control for device hardware", "A temporary video game file", "A heavy metal computer casing", "An internet browser extension"],
      optionsHi: ["रीड-ओनली मेमोरी (ROM) चिप में प्रोग्राम किया गया स्थायी सॉफ्टवेयर, जो डिवाइस हार्डवेयर को निम्न-स्तरीय नियंत्रण देता है", "अस्थायी वीडियो गेम फाइल", "धातु का केसिंग", "इंटरनेट ब्राउज़र एक्सटेंशन"],
      answer: 0,
      exp: "Explanation (En): Firmware (like BIOS or UEFI) bridges hardware and software, residing permanently in non-volatile memory.\nस्पष्टीकरण (Hi): फर्मवेयर ऐसा सॉफ्टवेयर होता है जो हार्डवेयर चिप (ROM) के अंदर स्थायी रूप से एम्बेडेड होता है (जैसे BIOS)।"
    },
    {
      qEn: "What are the characteristic features of 'First Generation' computers (1940-1956)?",
      qHi: "कंप्यूटर की 'प्रथम पीढ़ी' (First Generation - 1940-1956) की मुख्य तकनीकी विशेषता क्या थी?",
      optionsEn: ["Vacuum Tubes (थर्मionic वाल्व / वैक्यूम ट्यूब) and magnetic drums", "Transistors and magnetic cores", "Integrated Circuits (ICs)", "Microprocessors and AI"],
      optionsHi: ["वैक्यूम ट्यूब (Vacuum Tubes) और मैग्नेटिक ड्रम", "ट्रांजिस्टर और मैग्नेटिक कोर", "इंटीग्रेटेड सर्किट (IC)", "माइक्रोप्रोसेसर और AI"],
      answer: 0,
      exp: "Explanation, (En): First generation computers relied on vacuum tubes for circuitry and magnetic drums for memory, generating massive heat and occupying entire rooms.\nस्पष्टीकरण (Hi): प्रथम पीढ़ी के कंप्यूटरों में वैक्यूम ट्यूब (Vacuum Tubes) का प्रयोग होता था, जो आकार में बहुत बड़े और अत्यधिक गर्मी पैदा करने वाले थे।"
    },
    {
      qEn: "What technological breakthrough defined 'Second Generation' computers (1956-1963)?",
      qHi: "'द्वितीय पीढ़ी' (Second Generation - 1956-1963) के कंप्यूटरों में किस तकनीक ने वैक्यूम ट्यूब की जगह ली थी?",
      optionsEn: ["Transistors (ट्रांजिस्टर)", "Vacuum Tubes", "Artificial Intelligence", "Quantum Computing chips"],
      optionsHi: ["ट्रांजिस्टर (Transistors)", "वैक्यूम ट्यूब", "कृत्रिम बुद्धिमत्ता", "क्वांटम चिप्स"],
      answer: 0,
      exp: "Explanation (En): Transistors replaced vacuum tubes, making computers smaller, faster, cheaper, and more energy-efficient.\nस्पष्टीकरण (Hi): वैक्यूम ट्यूब की जगह ट्रांजिस्टर (Transistors) के आने से दूसरी पीढ़ी के कंप्यूटर छोटे, तेज और अधिक विश्वसनीय हो गए।"
    },
    {
      qEn: "What major innovation characterized 'Third Generation' computers (1964-1971)?",
      qHi: "'तृतीय पीढ़ी' (Third Generation - 1964-1971) के कंप्यूटरों की मुख्य विशेषता क्या थी?",
      optionsEn: ["Integrated Circuits (ICs / इंटीग्रेटेड सर्किट या चिप)", "Vacuum Tubes only", "Machine language only", "Quantum processors"],
      optionsHi: ["इंटीग्रेटेड सर्किट (ICs / चिप)", "केवल वैक्यूम ट्यूब", "मशीन भाषा", "क्वांटम प्रोसेसर"],
      answer: 0,
      exp: "Explanation (En): Third-generation computers used Integrated Circuits (ICs), packing multiple transistors onto silicon chips, drastically increasing speed.\nस्पष्टीकरण (Hi): तीसरी पीढ़ी में सिलिकॉन चिप पर बने 'इंटीग्रेटेड सर्किट' (ICs) का प्रयोग शुरू हुआ, जिससे कंप्यूटर की क्षमता कई गुना बढ़ गई।"
    },
    {
      qEn: "What defined 'Fourth Generation' computers starting from roughly 1971 onwards?",
      qHi: "लगभग 1971 से शुरू होने वाली 'चतुर्थ पीढ़ी' (Fourth Generation) के कंप्यूटरों की मुख्य तकनीक क्या थी?",
      optionsEn: ["Microprocessors (Very Large Scale Integration - VLSI)", "Vacuum Tubes", "Transistors without chips", "Manual punch cards"],
      optionsHi: ["माइक्रोप्रोसेसर (VLSI तकनीक)", "वैक्यूम ट्यूब", "बिना चिप के ट्रांजिस्टर", "पंच कार्ड"],
      answer: 0,
      exp: "Explanation (En): The invention of the microprocessor (CPU on a single chip using VLSI) led to the birth of personal computers (PCs).\nस्पष्टीकरण (Hi): माइक्रोप्रोसेसर (VLSI तकनीक) के आविष्कार ने पर्सनल कंप्यूटर (PC) के युग की शुरुआत की, जो चौथी पीढ़ी थी।"
    },
    {
      qEn: "What is the hallmark technology of 'Fifth Generation' computers currently and into the future?",
      qHi: "'पंचम पीढ़ी' (Fifth Generation) के कंप्यूटरों की मुख्य विशेषता और अत्याधुनिक तकनीक क्या है?",
      optionsEn: ["Artificial Intelligence (AI), Machine Learning, and ULSI (Ultra Large Scale Integration)", "Vacuum Tubes and Punch Cards", "Basic binary code typing", "Mechanical gears"],
      optionsHi: ["कृत्रिम बुद्धिमत्ता (Artificial Intelligence - AI), मशीन लर्निंग और ULSI तकनीक", "वैक्यूम ट्यूब और पंच कार्ड", "बाइनरी टाइपिंग", "यांत्रिक गियर"],
      answer: 0,
      exp: "Explanation (En): Fifth generation computing focuses on artificial intelligence, parallel processing, and voice recognition, moving toward true machine intelligence.\nस्पष्टीकरण (Hi): पांचवीं पीढ़ी कृत्रिम बुद्धिमत्ता (AI), रोबोटिक्स और पैरेलल प्रोसेसिंग पर आधारित है, जो आज का आधुनिक दौर है।"
    },
    {
      qEn: "What is 'Cache Memory' and why is it used in computer systems?",
      qHi: "'कैश मेमोरी' (Cache Memory) क्या है और कंप्यूटर सिस्टम में इसका उपयोग क्यों किया जाता है?",
      optionsEn: ["A small, extremely fast volatile memory located close to the CPU, used to temporarily store frequently accessed data for rapid retrieval", "A permanent hard drive for movies", "A portable USB flash stick", "A printer ink storage unit"],
      optionsHi: ["CPU के नजदीक स्थित एक छोटी, बेहद तेज वोलेटाइल मेमोरी, जिसका उपयोग बार-बार उपयोग होने वाले डेटा को तेजी से एक्सेस करने के लिए होता है", "मूवी के लिए स्थायी हार्ड ड्राइव", "पोर्टेबल पेनड्राइव", "प्रिंटर इंक यूनिट"],
      answer: 0,
      exp: "Explanation, (En): Cache memory bridges the speed gap between the ultra-fast CPU and slower main RAM by storing frequently used instructions.\nस्पष्टीकरण (Hi): कैश मेमोरी सीपीयू के सबसे पास होती है और बहुत तेज गति से काम करती है ताकि प्रोसेसर को मुख्य रैम का इंतजार न करना पड़े।"
    },
    {
      qEn: "What is a 'Motherboard' in a computer system?",
      qHi: "कंप्यूटर सिस्टम में 'मदरबोर्ड' (Motherboard) क्या है?",
      optionsEn: ["The main printed circuit board (PCB) that houses the CPU, memory, expansion slots, and connects all hardware components", "The plastic outer casing of the monitor", "The power supply unit box", "The operating system software file"],
      optionsHi: ["मुख्य सर्किट बोर्ड (PCB) जो CPU, मेमोरी, एक्सपेंशन स्लॉट को घर देता है और सभी हार्डवेयर घटकों को आपस में जोड़ता है", "मॉनिटर का प्लास्टिक केसिंग", "पावर सप्लाई बॉक्स", "ऑपरेटिंग सिस्टम सॉफ्टवेयर फाइल"],
      answer: 0,
      exp: "Explanation (En): The motherboard is the central backbone of the computer, allowing communication between CPU, RAM, storage, and peripheral devices.\nस्पष्टीकरण (Hi): मदरबोर्ड मुख्य सर्किट बोर्ड है जिससे कंप्यूटर के सभी मुख्य अंग (CPU, RAM, हार्ड डिस्क आदि) जुड़े रहते हैं।"
    },
    {
      qEn: "What is the function of the 'BIOS' (Basic Input/Output System)?",
      qHi: "'BIOS' (बेसिक इनपुट/आउपुट सिस्टम) का मुख्य कार्य क्या है?",
      optionsEn: ["Firmware used to perform hardware initialization during the booting process and load the operating system into RAM", "An internet web browser", "A word processing software", "A virus scanning antivirus tool"],
      optionsHi: ["बूटिंग प्रक्रिया के दौरान हार्डवेयर का आरंभीकरण करने और ऑपरेटिंग सिस्टम को रैम में लोड करने के लिए प्रयुक्त फर्मवेयर", "इंटरनेट वेब ब्राउज़र", "वर्ड प्रोसेसिंग सॉफ्टवेयर", "एंटीवायरस टूल"],
      answer: 0,
      exp: "Explanation (En): BIOS runs tests (POST) when the computer is powered on and hands control over to the operating system bootloader.\nस्पष्टीकरण (Hi): कंप्यूटर ऑन करते ही BIOS हार्डवेयर की जांच (POST) करता है और ऑपरेटिंग सिस्टम को लोड करने में मदद करता है।"
    },
    {
      qEn: "What is 'Plug and Play' (PnP) technology in computer hardware?",
      qHi: "कंप्यूटर हार्डवेयर में 'प्लग एंड प्ले' (Plug and Play - PnP) तकनीक से क्या तात्पर्य है?",
      optionsEn: ["A technology that allows a computer system to automatically configure newly attached hardware devices without manual setup", "A game controller button", "A method to print photos instantly", "A software uninstaller"],
      optionsHi: ["एक ऐसी तकनीक जो कंप्यूटर सिस्टम को नए जुड़े हार्डवेयर उपकरणों को बिना मैन्युअल सेटअप के स्वतः कॉन्फ़िगर करने की अनुमति देती है", "गेम कंट्रोलर बटन", "तुरंत फोटो प्रिंट करने की विधि", "सॉफ्टवेयर अनइंस्टॉलर"],
      answer: 0,
      exp: "Explanation (En): Plug and Play enables operating systems to recognize and configure external devices (like USB mice or keyboards) instantly upon connection.\nस्पष्टीकरण (Hi): प्लग एंड प्ले के तहत जैसे ही हम कोई बाहरी डिवाइस (जैसे USB माउस) जोड़ते हैं, ऑपरेटिंग सिस्टम उसे अपने आप पहचान कर सेटअप कर लेता है।"
    },
    {
      qEn: "What is the difference between 'Cold Booting' and 'Warm Booting'?",
      qHi: "'कोल्ड बूटिंग' (Cold Booting) और 'वार्म बूटिंग' (Warm Booting) में क्या अंतर है?",
      optionsEn: ["Cold booting is starting a computer from a completely powered-off state, whereas warm booting is restarting a computer that is already powered on", "Cold booting is done in winter, warm in summer", "Warm booting deletes the hard drive completely", "There is no difference"],
      optionsHi: ["कोल्ड बूटिंग पूरी तरह बंद कंप्यूटर को चालू करना है, जबकि वार्म बूटिंग चालू कंप्यूटर को रीस्टार्ट करना है", "कोल्ड सर्दियों में होती है", "वार्म बूटिंग हार्ड ड्राइव डिलीट करती है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Turning on the main power switch initiates a cold boot; resetting or rebooting an active system initiates a warm boot.\nस्पष्टीकरण (Hi): मुख्य पावर बटन से कंप्यूटर ऑन करना कोल्ड बूट है, और चल रहे कंप्यूटर को रिस्टार्ट करना वार्म बूट कहलाता है।"
    },
    {
      qEn: "What is 'Cloud Storage' in modern computing?",
      qHi: "आधुनिक कंप्यूटिंग में 'क्लाउड स्टोरेज' (Cloud Storage) से क्या तात्पर्य है?",
      optionsEn: ["A model of computer data storage where digital data is stored in logical pools on remote servers hosted on the internet", "Storing data inside weather rain clouds", "Saving files on local floppy disks", "Writing data on paper notebooks"],
      optionsHi: ["डेटा स्टोरेज का एक मॉडल जहाँ डिजिटल डेटा इंटरनेट पर होस्ट किए गए रिमोट सर्वर पर स्टोर किया जाता है", "बारिश के बादलों में डेटा रखना", "लोकल फ्लॉपी डिस्क में सेव करना", "पेपर नोटबुक पर लिखना"],
      answer: 0,
      exp: "Explanation, (En): Cloud storage (like Google Drive, OneDrive) allows users to access files over the internet from anywhere, bypassing local hard drives.\nस्पष्टीकरण (Hi): क्लाउड स्टोरेज (जैसे गूगल ड्राइव) के जरिए डेटा को अपने कंप्यूटर के बजाय इंटरनेट पर स्थित रिमोट सर्वर पर सुरक्षित रखा जाता है।"
    },
    {
      qEn: "What is a 'Device Driver' in computer software?",
      qHi: "कंप्यूटर सॉफ्टवेयर में 'डिवाइस ड्राइवर' (Device Driver) क्या होता है?",
      optionsEn: ["A specialized system software that allows the operating system to communicate with hardware devices (like printers, graphics cards)", "A person who drives a computer delivery truck", "A hardware keyboard cable", "An internet router password"],
      optionsHi: ["एक विशिष्ट सिस्टम सॉफ्टवेयर जो ऑपरेटिंग सिस्टम को हार्डवेयर उपकरणों (प्रिंटर, ग्राफिक्स कार्ड) के साथ संवाद करने की अनुमति देता है", "कंप्यूटर डिलीवरी ट्रक चलाने वाला व्यक्ति", "कीबोर्ड केबल", "राउटर पासवर्ड"],
      answer: 0,
      exp: "Explanation (En): Drivers act as translators between the operating system and physical hardware peripherals.\nस्पष्टीकरण (Hi): डिवाइस ड्राइवर एक प्रकार का सॉफ्टवेयर है जो ऑपरेटिंग सिस्टम और हार्डवेयर (जैसे प्रिंटर) के बीच तालमेल बिठाकर उन्हें काम करने योग्य बनाता है।"
    },
    {
      qEn: "What is the primary function of an 'Uninterruptible Power Supply' (UPS)?",
      qHi: "'यूपीएस' (UPS / अनइंटरप्टिबल पावर सप्लाई) का मुख्य कार्य क्या है?",
      optionsEn: ["To provide emergency backup battery power to a computer during a sudden power outage, preventing data loss", "To increase internet download speeds", "To cool down the CPU processor", "To clean computer virus files"],
      optionsHi: ["अचानक बिजली गुल होने पर कंप्यूटर को आपातकालीन बैकअप बैटरी पावर देना, जिससे डेटा हानि से बचा जा सके", "इंटरनेट डाउनलोड स्पीड बढ़ाना", "सीपीयू ठंडा करना", "वायरस साफ करना"],
      answer: 0,
      exp: "Explanation (En): A UPS protects hardware from power surges and provides brief backup power so users can save work and safely shut down.\nस्पष्टीकरण (Hi): बिजली अचानक जाने पर यूपीएस कंप्यूटर को कुछ देर तक चालू रखता है ताकि यूजर अपना काम सेव कर सके और सिस्टम सुरक्षित बंद हो सके।"
    },
    {
      qEn: "What is 'Blu-ray Disc' and how does it store data compared to CDs and DVDs?",
      qHi: "'ब्लू-रे डिस्क' (Blu-ray Disc) क्या है और यह CD या DVD की तुलना में डेटा कैसे स्टोर करती है?",
      optionsEn: ["A high-density optical disc format using a blue-violet laser instead of red laser, allowing storage of much larger HD data volumes (25GB to 50GB+)", "A magnetic tape storage cassette", "A floppy disk with plastic coating", "A paper punched card"],
      optionsHi: ["लाल लेज़र के बजाय नीले-बैंगनी लेज़र का उपयोग करने वाला हाई-डेंसिटी ऑप्टिकल डिस्क प्रारूप, जो अधिक डेटा (25GB से 50GB+) स्टोर करता है", "मैग्नेटिक टेप कैसेट", "फ्लॉपी डिस्क", "पंच्ड कार्ड"],
      answer: 0,
      exp: "Explanation (En): Blu-ray uses a shorter wavelength blue laser, packing data tighter than red laser DVDs, making it ideal for high-definition video.\nस्पष्टीकरण (Hi): ब्लू-रे डिस्क नीले-बैंगनी लेजर तकनीक का उपयोग करती है, जिसकी मदद से इसमें सीडी और डीवीडी से कई गुना अधिक (25GB+) डेटा आ सकता है।"
    },
    {
      qEn: "Why is a foundational understanding of computer hardware and basics essential in modern technological education?",
      qHi: "आधुनिक तकनीकी शिक्षा में कंप्यूटर हार्डवेयर और बुनियादी अवधारणाओं की समझ होना क्यों आवश्यक है?",
      optionsEn: ["It forms the bedrock of digital literacy, troubleshooting, software interaction, and effective utilization of information technology across all careers", "It is only useful for playing offline video games", "It helps in repairing household kitchen appliances", "It is required solely for typing text messages"],
      optionsHi: ["यह डिजिटल साक्षरता, समस्या निवारण और सभी करियर क्षेत्रों में सूचना प्रौद्योगिकी के प्रभावी उपयोग की नींव बनाता है", "यह केवल गेम खेलने के लिए उपयोगी है", "रसोई के उपकरण सुधारने में मदद करता है", "केवल मैसेज टाइप करने के लिए जरूरी है"],
      answer: 0,
      exp: "Explanation (En): Grasping computer basics empowers individuals to navigate digital ecosystems, optimize device performance, and adapt to emerging technologies.\nस्पष्टीकरण (Hi): कंप्यूटर के बुनियादी सिद्धांतों की जानकारी आज के डिजिटल युग में हर व्यक्ति के लिए तकनीक का सही और सुरक्षित उपयोग करने की पहली सीढ़ी है।"
    }
  ],
    "Operating Systems and Software": [
    {
      qEn: "What is the primary function of an 'Operating System' (OS)?",
      qHi: "'ऑपरेटिंग सिस्टम' (OS) का मुख्य कार्य क्या होता है?",
      optionsEn: ["To act as an interface between the computer hardware and the user/application software, managing system resources", "To browse web pages on the internet exclusively", "To print physical documents using ink", "To protect the computer from physical dust"],
      optionsHi: ["कंप्यूटर हार्डवेयर और यूजर/एप्लीकेशन सॉफ्टवेयर के बीच एक इंटरफेस के रूप में कार्य करना और सिस्टम संसाधनों का प्रबंधन करना", "विशेष रूप से इंटरनेट पर वेब पेज ब्राउज़ करना", "स्याही का उपयोग करके भौतिक दस्तावेज प्रिंट करना", "कंप्यूटर को धूल से बचाना"],
      answer: 0,
      exp: "Explanation (En): An Operating System manages computer hardware, software resources, and provides common services for computer programs.\nस्पष्टीकरण (Hi): ऑपरेटिंग सिस्टम कंप्यूटर के हार्डवेयर और सॉफ्टवेयर का प्रबंधन करता है और यूजर को कंप्यूटर चलाने के लिए एक प्लेटफॉर्म देता है।"
    },
    {
      qEn: "What is the 'Kernel' in an operating system architecture?",
      qHi: "ऑपरेटिंग सिस्टम आर्किटेक्चर में 'कर्नेल' (Kernel) क्या होता है?",
      optionsEn: ["The core central component of the OS that has complete control over everything in the system and acts as the direct bridge between software and hardware", "A user-facing web browser app", "A physical cooling fan inside the CPU", "A secondary storage hard disk partition"],
      optionsHi: ["OS का मुख्य केंद्रीय घटक जिसका सिस्टम की हर चीज पर पूर्ण नियंत्रण होता है और जो सॉफ्टवेयर व हार्डवेयर के बीच सीधा सेतु बनता है", "यूजर-फेसिंग वेब ब्राउज़र ऐप", "CPU के अंदर कूलिंग फैन", "हार्ड डिस्क पार्टीशन"],
      answer: 0,
      exp: "Explanation (En): The kernel is the essential core of a computer's operating system, handling memory, CPU scheduling, and hardware interactions.\nस्पष्टीकरण (Hi): कर्नेल ऑपरेटिंग सिस्टम का दिल या केंद्र है जो सीधे हार्डवेयर से संवाद करता है और मेमोरी व प्रोसेसर का प्रबंधन करता है।"
    },
    {
      qEn: "What is the difference between 'System Software' and 'Application Software'?",
      qHi: "'सिस्टम सॉफ्टवेयर' (System Software) और 'एप्लीकेशन सॉफ्टवेयर' (Application Software) में क्या मुख्य अंतर है?",
      optionsEn: ["System software manages computer hardware and provides a platform for running apps (e.g., OS, drivers), whereas application software performs specific tasks for users (e.g., MS Word, Photoshop)", "System software is used only for playing games", "Application software controls computer power supply directly", "There is no functional difference"],
      optionsHi: ["सिस्टम सॉफ्टवेयर कंप्यूटर हार्डवेयर को मैनेज करता है और ऐप्स के लिए प्लेटफॉर्म देता है (जैसे OS), जबकि एप्लीकेशन सॉफ्टवेयर यूजर के विशेष काम करता है (जैसे MS Word, फोटोशॉप)", "सिस्टम सॉफ्टवेयर केवल गेम खेलने के लिए है", "एप्लीकेशन सॉफ्टवेयर पावर सप्लाई कंट्रोल करता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): System software operates the computer hardware (OS, utilities), while application software solves end-user productivity or entertainment needs.\nस्पष्टीकरण (Hi): सिस्टम सॉफ्टवेयर (जैसे विंडोज, लिनक्स) कंप्यूटर को चलाने के लिए जरूरी है, जबकि एप्लीकेशन सॉफ्टवेयर (जैसे वर्ड, वीएलसी) यूजर की खास जरूरतों के लिए होता है।"
    },
    {
      qEn: "What is 'Virtual Memory' in operating systems?",
      qHi: "ऑपरेटिंग सिस्टम में 'वर्चुअल मेमोरी' (Virtual Memory) क्या होती है?",
      optionsEn: ["A memory management capability that uses hardware and software to allow a computer to compensate for physical memory shortages by temporarily transferring data from RAM to disk storage", "A holographic 3D computer display", "An external USB flash drive", "A type of read-only ROM chip"],
      optionsHi: ["एक मेमोरी प्रबंधन तकनीक जो रैम (RAM) की कमी होने पर हार्ड डिस्क या SSD के एक हिस्से को अस्थायी रूप से मेमोरी की तरह उपयोग करती है", "3D कंप्यूटर डिस्प्ले", "बाहरी USB फ्लैश ड्राइव", "रोम चिप"],
      answer: 0,
      exp: "Explanation (En): Virtual memory creates a larger address space by paging data back and forth between physical RAM and secondary storage (swap/page file).\nस्पष्टीकरण (Hi): जब रैम की जगह कम पड़ जाती है, तब ओएस हार्ड डिस्क के हिस्से को रैम की तरह इस्तेमाल करता है जिसे वर्चुअल मेमोरी कहते हैं।"
    },
    {
      qEn: "What is a 'Process' in operating system terminology?",
      qHi: "ऑपरेटिंग सिस्टम शब्दावली में 'प्रोसेस' (Process) किसे कहा जाता है?",
      optionsEn: ["A program in execution, representing the fundamental unit of work managed by the operating system", "A computer cooling fan speed setting", "A file stored permanently on a hard drive", "An internet cable connection"],
      optionsHi: ["निष्पादन (Execution) के अधीन एक प्रोग्राम, जो ऑपरेटिंग सिस्टम द्वारा प्रबंधित कार्य की मूलभूत इकाई है", "कंप्यूटर कूलिंग फैन स्पीड", "हार्ड ड्राइव पर स्थायी फाइल", "इंटरनेट केबल कनेक्शन"],
      answer: 0,
      exp: "Explanation (En): A process is an active program instance containing its program counter, registers, and variables currently being executed by the CPU.\nस्पष्टीकरण (Hi): जब कोई प्रोग्राम रैम में लोड होकर सीपीयू द्वारा चलाया जा रहा होता है, तो उसे 'प्रोसेस' कहते हैं।"
    },
    {
      qEn: "What is 'Deadlock' in operating systems?",
      qHi: "ऑपरेटिंग सिस्टम में 'डेडलाक' (Deadlock / मड़का) की स्थिति क्या होती है?",
      optionsEn: ["A situation where two or more competing processes are waiting indefinitely for resources held by each other, causing the system to freeze", "A sudden computer virus attack", "The computer turning off automatically due to heat", "A fast internet broadband connection speed"],
      optionsHi: ["एक ऐसी स्थिति जहां दो या दो से अधिक प्रक्रियाएं एक-احتیاط संसाधनों के लिए अनिश्चितकाल तक प्रतीक्षा करती रहती हैं, जिससे सिस्टम फ्रीज हो जाता है", "अचानक वायरस हमला", "गर्मी से कंप्यूटर बंद होना", "तेज इंटरनेट स्पीड"],
      answer: 0,
      exp: "Explanation, (En): Deadlock occurs in multitasking when concurrent processes get stuck because each needs a resource locked by the other.\nस्पष्टीकरण (Hi): डेडलॉक तब होता है जब दो या दो से अधिक प्रोग्राम ऐसे संसाधनों के लिए अड़ जाते हैं जो एक-दूसरे के पास हैं, जिससे दोनों रुक जाते हैं।"
    },
    {
      qEn: "What is 'Open Source Software' (OSS)?",
      qHi: "'ओपन सोर्स सॉफ्टवेयर' (Open Source Software - OSS) की मुख्य विशेषता क्या होती है?",
      optionsEn: ["Software whose source code is made freely available and may be redistributed or modified by users", "Software that costs thousands of dollars to buy", "Software that cannot be copied under any circumstance", "Software that runs without an operating system"],
      optionsHi: ["वह सॉफ्टवेयर जिसका सोर्स कोड मुफ्त में उपलब्ध होता है और यूजर द्वारा उसमें बदलाव या उसका पुनर्वितरण किया जा सकता है", "महंगा सॉफ्टवेयर", "जिसे कॉपी करना अवैध हो", "बिना ओएस चलने वाला सॉफ्टवेयर"],
      answer: 0,
      exp: "Explanation (En): Open-source software (like Linux or Python) encourages collaborative development, allowing anyone to inspect and modify the source code.\nस्पष्टीकरण (Hi): ओपन सोर्स सॉफ्टवेयर का कोड सबके लिए खुला होता है (जैसे लिनक्स), जिसे कोई भी फ्री में डाउनलोड कर अपनी जरूरत के हिसाब से बदल सकता है।"
    },
    {
      qEn: "What is 'Spooling' (Simultaneous Peripheral Operations On-Line) used for?",
      qHi: "'स्पूलिंग' (Spooling) तकनीक का मुख्य उपयोग किस कार्य के लिए किया जाता है?",
      optionsEn: ["Temporarily holding data in a buffer (queue) on disk so that slow output devices like printers can process it without halting CPU execution", "Speeding up internet fiber optic cables", "Cooling down the computer processor", "Cleaning computer virus files"],
      optionsHi: ["डिस्क पर बफर (क्यू) में डेटा को अस्थायी रूप से रखना ताकि प्रिंटर जैसे धीमी गति वाले आउटपुट डिवाइस सीपीयू को रोके बिना डेटा प्रोसेस कर सकें", "इंटरनेट स्पीड बढ़ाना", "सीपीयू ठंडा करना", "वायरस साफ करना"],
      answer: 0,
      exp: "Explanation (En): Spooling queues print jobs or tasks on storage, allowing the CPU to move on to other work instead of waiting for a slow printer.\nस्पष्टीकरण (Hi): स्पूलिंग के जरिए प्रिंट होने वाले डेटा को डिस्क पर स्टोर कर लिया जाता है ताकि सीपीयू को धीमे प्रिंटर का इंतजार न करना पड़े।"
    },
    {
      qEn: "What is 'Booting' in a computer system?",
      qHi: "कंप्यूटर सिस्टम में 'बूटिंग' (Booting) प्रक्रिया का क्या अर्थ है?",
      optionsEn: ["The startup sequence that initializes the operating system and hardware when a computer is powered on", "Shutting down the computer safely", "Installing a heavy video game", "Formatting a hard disk drive"],
      optionsHi: ["कंप्यूटर ऑन होने पर ऑपरेटिंग सिस्टम और हार्डवेयर को शुरू करने और लोड करने की शुरुआती प्रक्रिया", "कंप्यूटर सुरक्षित बंद करना", "गेम इंस्टॉल करना", "हार्ड डिस्क फॉर्मेट करना"],
      answer: 0,
      exp: "Explanation (En): Booting loads the OS kernel from secondary storage into primary RAM, preparing the computer for user interaction.\nस्पष्टीकरण (Hi): कंप्यूटर का स्विच ऑन करने से लेकर ओएस के रैम में लोड होने तक की प्रक्रिया 'बूटिंग' कहलाती है।"
    },
    {
      qEn: "What is 'Disk Fragmentation' and why is 'Defragmentation' performed?",
      qHi: "'डिस्क फ्रैगमेंटेशन' (Fragmentation) क्या है और 'डिफ्रगमेंटेशन' (Defragmentation) क्यों किया जाता है?",
      optionsEn: ["Fragmentation is the scattering of file pieces across non-contiguous sectors on a hard drive; defragmentation reorganizes them to speed up file access", "Fragmentation is a virus infection; defragmentation deletes viruses", "Fragmentation creates backup files", "Fragmentation cools down the hard disk"],
      optionsHi: ["फ्रैगमेंटेशन हार्ड ड्राइव पर फाइलों के टुकड़ों का बिखर जाना है; डिफ्रगमेंटेशन उन्हें व्यवस्थित करके फाइल एक्सेस स्पीड बढ़ाता है", "यह वायरस है", "बैकअप फाइलें बनाना", "हार्ड डिस्क ठंडा करना"],
      answer: 0,
      exp: "Explanation (En): Over time, writing and deleting files fragments them across a HDD; defragging groups them together, improving read/write efficiency.\nस्पष्टीकरण (Hi): समय के साथ हार्ड डिस्क पर फाइलें बिखर जाती हैं (Fragment)। डिफ्रगमेंटेशन उन्हें पास-पास लाकर कंप्यूटर की गति तेज करता है।"
    },
    {
      qEn: "What is the difference between a 'Compiler' and an 'Interpreter'?",
      qHi: "'कंपाइलर' (Compiler) और 'इंटरप्रटर' (Interpreter) में क्या मुख्य अंतर है?",
      optionsEn: ["A compiler translates the entire high-level source code into machine code all at once before execution, whereas an interpreter translates and executes code line by line", "An interpreter is always 100 times faster than a compiler", "A compiler only runs on mobile phones", "There is no difference"],
      optionsHi: ["कंपाइलर पूरे सोर्स कोड को एक साथ मशीन कोड में बदलता है, जबकि इंटरप्रटर कोड को लाइन-दर-लाइन अनुवादित करके निष्पादित करता है", "इंटरप्रटर हमेशा तेज होता है", "कंपाइलर केवल मोबाइल पर चलता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Compilers produce an executable file and check all errors at once; interpreters execute code interactively line by line.\nस्पष्टीकरण (Hi): कंपाइलर पूरे प्रोग्राम का कोड एक बार में चेक कर मशीन भाषा में बदलता है, जबकि इंटरप्रटर एक-एक लाइन पढ़कर उसे तुरंत चलाता है।"
    },
    {
      qEn: "What is an 'Assembler' used for in computer software translation?",
      qHi: "कंप्यूटर सॉफ्टवेयर अनुवाद में 'असेंबलर' (Assembler) का क्या कार्य होता है?",
      optionsEn: ["To translate low-level Assembly language code into machine-understandable binary code (0s and 1s)", "To translate English paragraphs into French", "To compress large video files", "To scan for computer malware"],
      optionsHi: ["निम्न-स्तरीय असेंबली भाषा के कोड को मशीन-समझने योग्य बाइनरी कोड (0 और 1) में बदलना", "अंग्रेजी को फ्रेंच में बदलना", "वीडियो फाइल कंप्रेस करना", "मालवेयर स्कैन करना"],
      answer: 0,
      exp: "Explanation (En): Assembly language uses mnemonic codes; an assembler converts these mnemonics directly into binary machine instructions.\nस्पष्टीकरण (Hi): असेंबली भाषा (Assembly Language) में लिखे कोड को मशीन की बाइनरी भाषा में बदलने का काम असेंबलर करता है।"
    },
    {
      qEn: "What is 'Utility Software' and what are some common examples?",
      qHi: "'यूटिलिटी सॉफ्टवेयर' (Utility Software) क्या है और इसके सामान्य उदाहरण कौन से हैं?",
      optionsEn: ["System software designed to help analyze, configure, optimize, or maintain a computer (e.g., Antivirus, Disk Cleanup, Backup tools)", "Video editing games", "Web browsers like Chrome", "Spreadsheet calculation apps"],
      optionsHi: ["कंप्यूटर को विश्लेषित, कॉन्फ़िगर, अनुकूलित या बनाए रखने के लिए डिजाइन किया गया सिस्टम सॉफ्टवेयर (जैसे एंटीवायरस, डिस्क क्लीनअप, बैकअप टूल्स)", "वीडियो गेम", "वेब ब्राउज़र", "स्प्रेडशीट ऐप"],
      answer: 0,
      exp: "Explanation (En): Utility programs perform maintenance tasks, ensuring smooth hardware and OS performance.\nस्पष्टीकरण (Hi): यूटिलिटी सॉफ्टवेयर वे प्रोग्राम हैं जो कंप्यूटर की देखभाल, सुरक्षा (एंटीवायरस) और सफाई (डिस्क क्लीनअप) का काम करते हैं।"
    },
    {
      qEn: "What are common 'File Systems' used by operating systems to organize data on storage drives?",
      qHi: "स्टोरेज ड्राइव पर डेटा व्यवस्थित करने के लिए ऑपरेटिंग सिस्टम द्वारा उपयोग किए जाने वाले सामान्य 'फाइल सिस्टम' (File Systems) कौन से हैं?",
      optionsEn: ["NTFS, FAT32, exFAT (Windows) and ext4, APFS (Linux/macOS)", "HTTP, FTP, TCP/IP", "RAM, ROM, Cache", "CPU, ALU, CU"],
      optionsHi: ["NTFS, FAT32, exFAT (विंडोज) और ext4, APFS (लिनक्स/मैकओएस)", "HTTP, FTP, TCP/IP", "RAM, ROM, Cache", "CPU, ALU, CU"],
      answer: 0,
      exp: "Explanation (En): A file system dictates how data is stored, retrieved, and named on storage media like hard drives and SSDs.\nस्पष्टीकरण (Hi): NTFS, FAT32 और ext4 विभिन्न ऑपरेटिंग सिस्टमों द्वारा हार्ड डिस्क पर डेटा रखने और खोजने के नियम तय करने वाले फाइल सिस्टम हैं।"
    },
    {
      qEn: "What is 'Thrashing' in virtual memory management?",
      qHi: "वर्चुअल मेमोरी प्रबंधन में 'थ्रैशिंग' (Thrashing) की स्थिति क्या होती है?",
      optionsEn: ["A condition where a computer spends more time paging data between RAM and disk than executing actual application instructions, causing severe slowdown", "A hardware cooling fan failure", "A sudden power surge blackout", "A fast internet download speed"],
      optionsHi: ["एक ऐसी स्थिति जहां कंप्यूटर वास्तविक एप्लीकेशन चलाने के बजाय रैम और डिस्क के बीच पेजिंग करने में अधिक समय लगाता है, जिससे सिस्टम अत्यधिक धीमा हो जाता है", "कूलिंग फैन विफलता", "पावर ब्लैकआउट", "तेज इंटरनेट स्पीड"],
      answer: 0,
      exp: "Explanation, (En): Thrashing happens when RAM is overcommitted, resulting in excessive page faults and near-zero application progress.\nस्पष्टीकरण (Hi): जब रैम में बहुत ज्यादा लोड होता है और ओएस लगातार रैम और डिस्क के बीच डेटा अदला-बदली (Paging) में फंसा रहता है, जिससे सिस्टम हैंग होने लगता है, उसे थ्रैशिंग कहते हैं।"
    },
    {
      qEn: "What is a 'Time-Sharing' Operating System?",
      qHi: "'टाइम-शेयरिंग' (Time-Sharing) ऑपरेटिंग सिस्टम की मुख्य विशेषता क्या होती है?",
      optionsEn: ["An operating system that allows multiple users to share computer resources simultaneously by allocating a very short time slice to each user's task", "An operating system that only runs at midnight", "An OS dedicated exclusively to one user for life", "An OS used only for pocket calculators"],
      optionsHi: ["एक ऐसा ऑपरेटिंग सिस्टम जो प्रत्येक यूजर के कार्य को बहुत छोटा समय स्लॉट (Time slice) देकर कई यूजर को एक साथ कंप्यूटर संसाधनों का उपयोग करने की अनुमति देता है", "केवल रात में चलने वाला ओएस", "एक यूजर वाला ओएस", "कैलकुलेटर ओएस"],
      answer: 0,
      exp: "Explanation (En): Time-sharing uses multi-programming and CPU scheduling to give each user the illusion of having dedicated system access.\nस्पष्टीकरण (Hi): टाइम-शेयरिंग ओएस सीपीयू के समय को छोटे-छोटे टुकड़ों (Time slices) में बांटकर एक साथ कई यूजर्स को सिस्टम इस्तेमाल करने की सुविधा देता है।"
    },
    {
      qEn: "What are the characteristics of a 'Real-Time Operating System' (RTOS)?",
      qHi: "'रियल-टाइम ऑपरेटिंग सिस्टम' (RTOS) की मुख्य विशेषता क्या होती है?",
      optionsEn: ["An OS designed to process data and events with strict, fixed time constraints (critical for embedded systems, airbags, medical equipment)", "An OS that runs video games slowly", "An OS used for writing office documents", "An OS with no time clock"],
      optionsHi: ["कठोर और निश्चित समय सीमा के भीतर डेटा और घटनाओं को प्रोसेस करने के लिए डिजाइन किया गया ओएस (एयरबैग, चिकित्सा उपकरणों के लिए महत्वपूर्ण)", "धीमे गेम चलाने वाला ओएस", "दस्तावेज़ लिखने वाला ओएस", "बिना घड़ी का ओएस"],
      answer: 0,
      exp: "Explanation (En): RTOS guarantees precise response times, making it indispensable for mission-critical applications like robotics, aviation, and industrial control.\nस्पष्टीकरण (Hi): आरटीओएस (RTOS) उन जगहों पर इस्तेमाल होता है जहाँ मिलीसेकंड की सटीकता जरूरी होती है (जैसे एयरबैग सिस्टम, मिसाइल नियंत्रण, मेडिकल वेंटिलेटर)।"
    },
    {
      qEn: "What is a 'Device Driver' in computer architecture?",
      qHi: "कंप्यूटर आर्किटेक्चर में 'डिवाइस ड्राइवर' (Device Driver) क्या भूमिका निभाता है?",
      optionsEn: ["A software component that enables the operating system and device to communicate with each other", "A physical hardware screw driver", "An internet cable connector", "A power supply inverter battery"],
      optionsHi: ["एक सॉफ्टवेयर घटक जो ऑपरेटिंग सिस्टम और डिवाइस को एक-दूसरे के साथ संवाद करने में सक्षम बनाता है", "भौतिक पेंच कसने वाला स्क्रूड्राइवर", "इंटरनेट केबल कनेक्टर", "इनवर्टर बैटरी"],
      answer: 0,
      exp: "Explanation (En): Without appropriate device drivers, hardware peripherals like printers or graphic cards cannot function under the operating system.\nस्पष्टीकरण (Hi): ड्राइवर एक विशेष सॉफ्टवेयर है जो ओएस को बताता है कि किसी नए हार्डवेयर (जैसे प्रिंटर या ग्राफिक कार्ड) से काम कैसे लेना है।"
    },
    {
      qEn: "What is a 'Shell' in Unix/Linux operating systems?",
      qHi: "यूनिक्स/लिनक्स ऑपरेटिंग सिस्टम में 'शेल' (Shell) किसे कहा जाता है?",
      optionsEn: ["A command-line interpreter that exposes an operating system's services to a human user or other programs", "The plastic outer shell of the CPU cabinet", "A type of computer virus", "A data backup hard disk"],
      optionsHi: ["एक कमांड-लाइन इंटरप्रटर जो यूजर या अन्य प्रोग्रामों को ऑपरेटिंग सिस्टम की सेवाओं तक पहुंच प्रदान करता है", "सीपीयू कैबिनेट का प्लास्टिक आवरण", "कंप्यूटर वायरस", "बैकअप हार्ड डिस्क"],
      answer: 0,
      exp: "Explanation (En): The shell acts as the command prompt environment where users type commands to execute OS functions (e.g., Bash, Zsh).\nस्पष्टीकरण (Hi): शेल वह कमांड-लाइन इंटरफेस है जिसके जरिए यूजर लिनक्स या यूनिक्स में कमांड टाइप कर ऑपरेटिंग सिस्टम से काम करवाते हैं।"
    },
    {
      qEn: "What is 'Context Switching' in operating systems?",
      qHi: "ऑपरेटिंग सिस्टम में 'कंटेक्स्ट स्विचिंग' (Context Switching) से क्या तात्पर्य है?",
      optionsEn: ["Storing the state of a currently running process so that it can be restored later, and switching the CPU to execute another process", "Changing the computer desktop wallpaper background", "Switching from Wi-Fi to Ethernet cable", "Changing keyboard language settings"],
      optionsHi: ["वर्तमान में चल रही प्रोसेस की स्थिति को सहेजना ताकि उसे बाद में पुनर्स्थापित किया जा सके, और सीपीयू को दूसरी प्रोसेस चलाने के लिए स्विच करना", "डेस्कटॉप वॉलपेपर बदलना", "वाई-फाई से ईथरनेट बदलना", "कीबोर्ड भाषा बदलना"],
      answer: 0,
      exp: "Explanation (En): Context switching enables multi-tasking by letting the CPU rapidly jump between different processes, saving their states in process control blocks.\nस्पष्टीकरण (Hi): मल्टीटास्किंग के दौरान सीपीयू जब एक काम रोककर दूसरा काम शुरू करता है और पहले वाले की स्थिति सेव रखता है, तो उसे कंटे कहते हैं।"
    },
    {
      qEn: "What is a 'Thread' (Lightweight Process)?",
      qHi: "'थ्रेड' (Thread / लाइटवेट प्रोसेस) क्या होता है?",
      optionsEn: ["The smallest sequence of programmed instructions that can be managed independently by a scheduler within an operating system process", "A broken cable wire", "A file compression format", "A computer network protocol"],
      optionsHi: ["प्रोग्राम किए गए निर्देशों का सबसे छोटा क्रम जिसे ऑपरेटिंग सिस्टम प्रक्रिया के भीतर एक शेड्यूलर द्वारा स्वतंत्र रूप से प्रबंधित किया जा सकता है", "टूटा हुआ तार", "फाइल कंप्रेशन फॉर्मेट", "नेटवर्क प्रोटोकॉल"],
      answer: 0,
      exp: "Explanation (En): Threads share the same process resources (like memory) but can execute concurrently, improving application performance.\nस्पष्टीकरण (Hi): थ्रेड किसी प्रोसेस का सबसे छोटा हिस्सा होता है जो सीपीयू द्वारा स्वतंत्र रूप से चलाया जा सकता है, जिससे मल्टी-थ्रेडिंग संभव होती है।"
    },
    {
      qEn: "What is a 'Buffer Overflow' vulnerability?",
      qHi: "'बफर ओवरफ्लो' (Buffer Overflow) सुरक्षा कमजोरी (Vulnerability) का क्या अर्थ है?",
      optionsEn: ["A flaw where a program writes more data to a fixed-length memory buffer than it can hold, potentially overwriting adjacent memory and enabling cyber attacks", "A printer overflowing with paper", "A hard drive storing too many movies", "An internet router crashing due to heavy traffic"],
      optionsHi: ["एक ऐसी खामी जहां एक प्रोग्राम निश्चित लंबाई के मेमोरी बफर में उससे अधिक डेटा लिख देता है जितना वह रख सकता है, जिससे साइबर हमलों का खतरा होता है", "प्रिंटर में कागज भर जाना", "हार्ड ड्राइव में ज्यादा मूवी होना", "राउटर क्रैश होना"],
      answer: 0,
      exp: "Explanation, (En): Buffer overflow is a classic software bug that malicious hackers exploit to inject arbitrary code and hijack system control.\nस्पष्टीकरण (Hi): जब कोई प्रोग्राम मेमोरी बफर की क्षमता से ज्यादा डेटा उसमें भरने की कोशिश करता है, तो बफर ओवरफ्लो होता है जिसका इस्तेमाल हैकर सिस्टम हैक करने में कर सकते हैं।"
    },
    {
      qEn: "What is the difference between 'Shareware' and 'Freeware' software licenses?",
      qHi: "'शेयरवेयर' (Shareware) और 'फ्रीवेयर' (Freeware) सॉफ्टवेयर लाइसेंस में क्या अंतर है?",
      optionsEn: ["Freeware is distributed free of charge for unlimited use, whereas Shareware is provided free on a trial basis with payment required for extended or full features", "Shareware is always open-source", "Freeware requires a monthly subscription", "There is no difference"],
      optionsHi: ["फ्रीवेयर असीमित उपयोग के लिए पूरी तरह मुफ्त है, जबकि शेयरवेयर ट्रायल आधार पर मुफ्त मिलता है और पूर्ण/दीर्घकालिक उपयोग के लिए भुगतान आवश्यक होता है", "शेयरवेयर हमेशा ओपन-सोर्स है", "फ्रीवेयर मासिक सब्सक्रिप्शन मांगता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Freeware costs nothing to use indefinitely, while shareware operates on a 'try before you buy' business model.\nस्पष्टीकरण (Hi): फ्रीवेयर पूरी तरह फ्री होता है, जबकि शेयरवेयर पहले कुछ दिन या ट्रायल के रूप में मुफ्त मिलता है और बाद में पैसे चुकाने पड़ते हैं।"
    },
    {
      qEn: "What is 'Batch Processing' Operating System?",
      qHi: "'बैच प्रोसेसिंग' (Batch Processing) ऑपरेटिंग सिस्टम किस प्रकार कार्य करता है?",
      optionsEn: ["An operating system where similar jobs are grouped together into batches and executed sequentially by the computer without manual intervention", "An OS that processes only single mouse clicks", "An OS designed exclusively for video streaming", "An OS used only for sending emails"],
      optionsHi: ["एक ऐसा ऑपरेटिंग सिस्टम जहां समान कार्यों को बैचों में समूहीकृत किया जाता है और बिना किसी मानवीय हस्तक्षेप के कंप्यूटर द्वारा क्रमिक रूप से निष्पादित किया जाता है", "केवल सिंगल क्लिक ओएस", "वीडियो स्ट्रीमिंग ओएस", "ईमेल ओएस"],
      answer: 0,
      exp: "Explanation (En): In early batch systems, operators batched similar jobs (like punch cards) together to reduce setup time between tasks.\nस्पष्टीकरण (Hi): बैच प्रोसेसिंग में एक जैसे कामों को एक साथ (Batch में) जोड़ा जाता है और कंप्यूटर बिना यूजर की रुकावट के उन्हें एक के बाद एक प्रोसेस करता है।"
    },
    {
      qEn: "What is 'GUI' (Graphical User Interface) and how does it compare to a CLI?",
      qHi: "'GUI' (ग्राफिकल यूजर इंटरफेस) क्या है और यह CLI से किस प्रकार बेहतर है?",
      optionsEn: ["GUI allows users to interact with electronic devices through visual icons, windows, and mouse clicks, whereas CLI requires typing text commands", "GUI requires typing complex code for opening folders", "CLI uses touch screen gestures only", "There is no functional distinction"],
      optionsHi: ["GUI यूजर को विजुअल आइकॉन, विंडो और माउस क्लिक के जरिए डिवाइस से जोड़ने की सुविधा देता है, जबकि CLI में टेक्स्ट कमांड टाइप करनी पड़ती है", "GUI में कोड लिखना होता है", "CLI टचस्क्रीन है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): GUI (like Windows or macOS) is user-friendly and intuitive, whereas CLI (like Command Prompt or Terminal) requires textual syntax.\nस्पष्टीकरण (Hi): जीयूआई (GUI) आइकन, माउस और विंडो पर आधारित आसान इंटरफेस है, जबकि सीएलआई (CLI) में हर काम के लिए कमांड टाइप करनी पड़ती है।"
    },
    {
      qEn: "What is 'Proprietary Software' (Closed-Source)?",
      qHi: "'प्रोपराइटरी सॉफ्टवेयर' (Proprietary Software / क्लोज्ड-सोर्स) से क्या तात्पर्य है?",
      optionsEn: ["Software that is legally owned by an individual or a company, with restrictive licensing where the source code is kept secret and modification is banned", "Software that is completely free for everyone to modify", "Software written by school students", "Software that has no copyright protection"],
      optionsHi: ["वह सॉफ्टवेयर जिसका कानूनी स्वामित्व किसी कंपनी या व्यक्ति के पास होता है, जिसका सोर्स कोड गुप्त रखा जाता है और बदलाव प्रतिबंधित होता है", "पूरी तरह मुफ्त सॉफ्टवेयर", "छात्रों द्वारा लिखा सॉफ्टवेयर", "बिना कॉपीराइट वाला"],
      answer: 0,
      exp: "Explanation (En): Proprietary software (like Microsoft Windows or Adobe Photoshop) restricts users from viewing, copying, or altering its source code.\nस्पष्टीकरण (Hi): प्रोपराइटरी सॉफ्टवेयर (जैसे विंडोज या एमएस ऑफिस) का कोड बंद होता है और इसे कॉपी या मॉडिफाई करना कानूनी रूप से प्रतिबंधित होता है।"
    },
    {
      qEn: "What is 'Multiprocessing' in operating system architecture?",
      qHi: "ऑपरेटिंग सिस्टम आर्किटेक्चर में 'मल्टीप्रोसेसिंग' (Multiprocessing) का क्या अर्थ है?",
      optionsEn: ["The use of two or more central processing units (CPUs) within a single computer system to execute multiple tasks simultaneously", "Using multiple computer mice at once", "Running a single program very slowly", "Printing multiple documents at once"],
      optionsHi: ["एक ही कंप्यूटर सिस्टम के भीतर दो या दो से अधिक सेंट्रल प्रोसेसिंग यूनिट (CPU) का उपयोग करके एक साथ कई कार्यों को निष्पादित करना", "एक साथ कई माउस उपयोग करना", "एक प्रोग्राम धीरे चलाना", "एक साथ कई प्रिंट निकालना"],
      answer: 0,
      exp: "Explanation (En): Multiprocessing enhances computing power and throughput by distributing workload across multiple physical processor cores.\nस्पष्टीकरण (Hi): मल्टीप्रोसेसिंग में एक कंप्यूटर के अंदर दो या दो से अधिक सीपीयू (या कोर) मिलकर एक साथ कई काम तेजी से करते हैं।"
    },
    {
      qEn: "What is the role of an 'Antivirus' software within system utilities?",
      qHi: "सिस्टम यूटिलिटी के अंतर्गत 'एंटीवायरस' (Antivirus) सॉफ्टवेयर की क्या मुख्य भूमिका होती है?",
      optionsEn: ["To detect, prevent, and remove malicious software programs (malware, viruses, trojans) from the computer system", "To speed up internet video downloading", "To clean physical dust from computer keyboard", "To format hard disk partitions"],
      optionsHi: ["कंप्यूटर सिस्टम से दुर्भावनापूर्ण सॉफ्टवेयर प्रोग्रामों (मालवेयर, वायरस, ट्रोजन) का पता लगाना, रोकना और उन्हें हटाना", "वीडियो डाउनलोड स्पीड बढ़ाना", "कीबोर्ड की धूल साफ करना", "हार्ड डिस्क फॉर्मेट करना"],
      answer: 0,
      exp: "Explanation (En): Antivirus software scans files and system memory against known malware signatures to safeguard data security.\nस्पष्टीकरण (Hi): एंटीवायरस एक सुरक्षा सॉफ्टवेयर है जो कंप्यूटर में घुसने वाले वायरस, ट्रोजन और मालवेयर को स्कैन कर सिस्टम की रक्षा करता है।"
    },
    {
      qEn: "Why is an Operating System considered the indispensable master controller of a computer system?",
      qHi: "ऑपरेटिंग सिस्टम को किसी कंप्यूटर सिस्टम का अनिवार्य मास्टर कंट्रोलर क्यों माना जाता है?",
      optionsEn: ["Because without an OS, hardware cannot run applications, manage memory, coordinate peripherals, or provide a user interface", "Because it prints colorful photos", "Because it increases internet bandwidth", "Because it replaces electricity"],
      optionsHi: ["क्योंकि ओएस के बिना हार्डवेयर एप्लीकेशन नहीं चला सकता, मेमोरी मैनेज नहीं कर सकता, पेरिफेरल्स को जोड़ नहीं सकता या यूजर इंटरफेस नहीं दे सकता", "रंगीन फोटो छापता है", "इंटरनेट बैंडविथ बढ़ाता है", "बिजली की जगह लेता है"],
      answer: 0,
      exp: "Explanation (En): The operating system orchestrates all hardware and software interactions, making it the foundational soul of computer functionality.\nस्पष्टीकरण (Hi): ऑपरेटिंग सिस्टम के बिना कंप्यूटर का कोई भी हार्डवेयर या सॉफ्टवेयर काम नहीं कर सकता, इसीलिए यह पूरे सिस्टम की रीढ़ है।"
    }
  ],
    "Computer Networks and Internet": [
    {
      qEn: "What is a 'Computer Network' primarily defined as?",
      qHi: "'कंप्यूटर नेटवर्क' (Computer Network) को मुख्य रूप से किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["A collection of two or more computers linked together to share resources, data, and communication", "A single isolated computer with a large hard drive", "An internet browser software application", "A hardware cooling fan system"],
      optionsHi: ["संसाधनों, डेटा और संचार को साझा करने के लिए आपस में जुड़े दो या दो से अधिक कंप्यूटरों का एक संग्रह", "एक बड़ी हार्ड ड्राइव वाला अकेला कंप्यूटर", "एक इंटरनेट ब्राउज़र सॉफ्टवेयर एप्लीकेशन", "एक हार्डवेयर कूलिंग फैन सिस्टम"],
      answer: 0,
      exp: "Explanation (En): A computer network enables devices to exchange data and share hardware peripherals or files over wired or wireless media.\nस्पष्टीकरण (Hi): कंप्यूटर नेटवर्क दो या दो से अधिक कंप्यूटरों का समूह है जो आपस में जुड़कर डेटा और संसाधनों को साझा करते हैं।"
    },
    {
      qEn: "What does 'LAN' stand for in computer networking?",
      qHi: "कंप्यूटर नेटवर्किंग में 'LAN' का पूर्ण रूप क्या होता है?",
      optionsEn: ["Local Area Network", "Large Access Node", "Logical Array Network", "Lightweight Audio Network"],
      optionsHi: ["लोकल एरिया नेटवर्क (Local Area Network)", "लार्ज एक्सेस नोड", "लॉजिकल एरे नेटवर्क", "लाइटवेट ऑडियो नेटवर्क"],
      answer: 0,
      exp: "Explanation (En): A Local Area Network (LAN) connects computers within a limited geographical area such as a home, school, or office building.\nस्पष्टीकरण (Hi): LAN (लोकल एरिया नेटवर्क) एक छोटे भौगोलिक क्षेत्र जैसे घर, कार्यालय या स्कूल के भीतर कंप्यूटरों को आपस में जोड़ता है।"
    },
    {
      qEn: "What is the key difference between a 'LAN', 'MAN', and 'WAN'?",
      qHi: "'LAN', 'MAN' और 'WAN' के बीच मुख्य अंतर क्या है?",
      optionsEn: ["Their geographical coverage area (LAN is room/building, MAN is a city, WAN spans across countries/globally)", "Their operating system software", "Their color coding cables", "Their keyboard compatibility"],
      optionsHi: ["उनका भौगोलिक कवरेज क्षेत्र (LAN कमरा/इमारत है, MAN एक शहर है, WAN देशों/वैश्विक स्तर पर फैला है)", "उनका ऑपरेटिंग सिस्टम सॉफ्टवेयर", "उनके रंगीन केबल", "उनकी कीबोर्ड संगतता"],
      answer: 0,
      exp: "Explanation (En): LAN covers buildings, MAN (Metropolitan Area Network) covers a city, and WAN (Wide Area Network, e.g., the Internet) spans countries.\nस्पष्टीकरण (Hi): कवरेज के आधार पर LAN एक बिल्डिंग के लिए, MAN (महानगर क्षेत्र) एक पूरे शहर के लिए, और WAN (वाइड एरिया नेटवर्क जैसे इंटरनेट) पूरी दुनिया के लिए होता है।"
    },
    {
      qEn: "What is a 'Network Topology' in computer networking?",
      qHi: "कंप्यूटर नेटवर्किंग में 'नेटवर्क टोपोलॉजी' (Network Topology) से क्या तात्पर्य है?",
      optionsEn: ["The arrangement or geometric layout of various elements (links, nodes, devices) in a computer network", "The speed of internet downloading", "The brand name of router cables", "The security password of Wi-Fi"],
      optionsHi: ["कंप्यूटर नेटवर्क में विभिन्न तत्वों (लिंक, नोड्स, डिवाइस) की व्यवस्था या ज्यामितीय लेआउट", "इंटरनेट डाउनलोड की गति",िन राउटर केबल का ब्रांड नाम", "वाई-फाई का सुरक्षा पासवर्ड"],
      answer: 0,
      exp: "Explanation (En): Topology defines how devices are interconnected, with common types including Star, Bus, Ring, Mesh, and Tree.\nस्पष्टीकरण (Hi): नेटवर्क टोपोलॉजी यह तय करती है कि नेटवर्क में कंप्यूटर और डिवाइस आपस में किस ज्यामितीय पैटर्न (जैसे स्टार, बस, रिंग) में जुड़े हैं।"
    },
    {
      qEn: "Which network topology features all devices connected to a central hub or switch?",
      qHi: "किस नेटवर्क टोपोलॉजी में सभी डिवाइस एक केंद्रीय हब या स्विच से जुड़े होते हैं?",
      optionsEn: ["Star Topology (स्टार टोपोलॉजी)", "Bus Topology", "Ring Topology", "Mesh Topology"],
      optionsHi: ["स्टार टोपोलॉजी (Star Topology)", "बस टोपोलॉजी", "रिंग टोपोलॉजी", "मेश टोपोलॉजी"],
      answer: 0,
      exp: "Explanation, (En): In a star topology, each device has a dedicated point-to-point connection to a central controller (hub/switch), ensuring single node failure doesn't break the network.\nस्पष्टीकरण (Hi): स्टार टोपोलॉजी में सभी कंप्यूटर एक केंद्रीय डिवाइस (हब/स्विच) से जुड़े होते हैं; एक के खराब होने पर बाकी नेटवर्क प्रभावित नहीं होता।"
    },
    {
      qEn: "What is the primary function of a 'Router' in computer networks?",
      qHi: "कंप्यूटर नेटवर्क में 'राउटर' (Router) का मुख्य कार्य क्या होता है?",
      optionsEn: ["To forward data packets between different computer networks, determining the optimal path for data traffic", "To print documents on paper", "To amplify keyboard signals", "To store permanent movie files"],
      optionsHi: ["विभिन्न कंप्यूटर नेटवर्क के बीच डेटा पैकेट को आगे बढ़ाना और डेटा ट्रैफिक के लिए सबसे अच्छा मार्ग तय करना", "कागज पर दस्तावेज प्रिंट करना", "कीबोर्ड सिग्नल बढ़ाना", "मूवी फाइल स्टोर करना"],
      answer: 0,
      exp: "Explanation (En): A router connects multiple networks (e.g., home network to the Internet) and directs traffic efficiently using IP addresses.\nस्पष्टीकरण (Hi): राउटर अलग-अलग नेटवर्क्स (जैसे घर का नेटवर्क और इंटरनेट) को जोड़ता है और डेटा को सही पते (IP Address) पर पहुंचाता है।"
    },
    {
      qEn: "What is the function of a 'Switch' in a local area network?",
      qHi: "लोकल एरिया नेटवर्क (LAN) में 'स्विच' (Switch) का क्या कार्य होता है?",
      optionsEn: ["To connect devices together on a single computer network and use packet switching to forward data to the specific destination device", "To connect to satellite television", "To scan for computer viruses", "To regulate household electricity voltage"],
      optionsHi: ["एक ही नेटवर्क पर उपकरणों को आपस में जोड़ना और पैकेट स्विचिंग का उपयोग करके विशिष्ट गंतव्य डिवाइस तक डेटा भेजना", "सैटेलाइट टीवी जोड़ना", "वायरस स्कैन करना", "बिजली वोल्टेज नियंत्रित करना"],
      answer: 0,
      exp: "Explanation (En): Unlike a dumb hub that broadcasts data everywhere, an intelligent switch sends data only to the specific target device using MAC addresses.\nस्पष्टीकरण (Hi): स्विच एक इंटेलिजेंट डिवाइस है जो मैक एड्रेस (MAC Address) का उपयोग करके डेटा को सीधे उसी कंप्यूटर को भेजता है जिसके लिए वह बना है।"
    },
    {
      qEn: "What does 'IP Address' stand for and what is its purpose?",
      qHi: "'IP Address' का पूर्ण रूप क्या है और इसका मुख्य उद्देश्य क्या है?",
      optionsEn: ["Internet Protocol Address; a unique numerical label assigned to every device connected to a computer network", "Internal Program Access; for opening apps", "Information Packet; for storage", "International Port; for cables"],
      optionsHi: ["इंटरनेट प्रोटोकॉल एड्रेस (Internet Protocol Address); नेटवर्क से जुड़े प्रत्येक डिवाइस को दिया गया एक अनूठा संख्यात्मक लेबल", "इंटरनल प्रोग्राम एक्सेस", "इन्फॉर्मेशन पैकेट", "इंटरनेशनल पोर्ट"],
      answer: 0,
      exp: "Explanation (En): An IP address identifies a device on the internet or a local network, allowing data to reach the correct destination.\nस्पष्टीकरण (Hi): आईपी एड्रेस (IP Address) नेटवर्क से जुड़े हर डिवाइस का एक यूनिक डिजिटल पता होता है जिससे इंटरनेट पर उसकी पहचान होती है।"
    },
    {
      qEn: "What is the difference between IPv4 and IPv6 addresses?",
      qHi: "IPv4 और IPv6 एड्रेस के बीच मुख्य अंतर क्या है?",
      optionsEn: ["IPv4 uses a 32-bit address scheme (e.g., 192.168.1.1), while IPv6 uses a 128-bit address scheme to provide vastly more unique addresses", "IPv4 is newer and IPv6 is obsolete", "IPv4 uses letters only, IPv6 uses numbers only", "There is no difference"],
      optionsHi: ["IPv4 एक 32-बिट एड्रेस स्कीम है, जबकि IPv6 एक 128-बिट एड्रेस स्कीम है जो बहुत अधिक यूनिक एड्रेस प्रदान करती है", "IPv4 नया है और IPv6 पुराना", "IPv4 में केवल अक्षर होते हैं", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Due to the exhaustion of 32-bit IPv4 addresses, the 128-bit IPv6 standard was introduced to support billions of new internet devices.\nस्पष्टीकरण (Hi): IPv4 (32-bit) के एड्रेस खत्म होने की वजह से 128-bit वाले नए IPv6 मानक को लाया गया ताकि अरबों नए डिवाइस जुड़ सकें।"
    },
    {
      qEn: "What does 'DNS' stand for, and what is its primary role on the internet?",
      qHi: "'DNS' का पूर्ण रूप क्या है और इंटरनेट पर इसकी मुख्य भूमिका क्या है?",
      optionsEn: ["Domain Name System; translates human-friendly website names (like google.com) into machine-readable IP addresses", "Digital Network Security; for firewall protection", "Data Node Storage; for cloud backups", "Dynamic Name Server; for cable routing"],
      optionsHi: ["डोमेन नेम सिस्टम (Domain Name System); मानव-अनुकूल वेबसाइट नामों (जैसे google.com) को मशीन-पढ़ने योग्य IP एड्रेस में बदलता है", "डिजिटल नेटवर्क सुरक्षा", "डेटा नोड स्टोरेज", "डायनेमिक नेम सर्वर"],
      answer: 0,
      exp: "Explanation, (En): DNS acts as the 'phonebook of the internet', resolving easy-to-remember domain names into numeric IP addresses.\nस्पष्टीकरण (Hi): डीएनएस (DNS) वेबसाइट के नाम (जैसे google.com) को उसके वास्तविक संख्यात्मक IP एड्रेस में अनुवादित करता है।"
    },
    {
      qEn: "What is the difference between HTTP and HTTPS?",
      qHi: "HTTP और HTTPS के बीच मुख्य अंतर क्या है?",
      optionsEn: ["HTTPS includes SSL/TLS encryption to secure data transmission between the browser and website, whereas HTTP transmits data in plain text", "HTTP is faster and more secure than HTTPS", "HTTPS is only used for downloading music", "There is no functional difference"],
      optionsHi: ["HTTPS ब्राउज़र और वेबसाइट के बीच डेटा को सुरक्षित करने के लिए SSL/TLS एन्क्रिप्शन का उपयोग करता है, जबकि HTTP सादे पाठ में डेटा भेजता है", "HTTP अधिक सुरक्षित है", "HTTPS केवल म्यूजिक के लिए है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): The 'S' in HTTPS stands for 'Secure', protecting sensitive user data (like passwords and credit cards) from eavesdropping and tampering.\nस्पष्टीकरण (Hi): HTTPS में 'S' का मतलब 'Secure' है जो एन्क्रिप्शन के जरिए डेटा को हैकर्स से सुरक्षित रखता है, जबकि HTTP असुरक्षित होता है।"
    },
    {
      qEn: "What is a 'MAC Address' (Media Access Control Address)?",
      qHi: "'MAC Address' (मीडिया एक्सेस कंट्रोल एड्रेस) क्या होता है?",
      optionsEn: ["A unique hardware identification number assigned to a network interface controller (NIC) at the time of manufacturing", "A password for Wi-Fi routers", "An IP address assigned by internet service providers", "A software web browser version"],
      optionsHi: ["विनिर्माण के समय नेटवर्क इंटरफेस कंट्रोलर (NIC) को दिया गया एक अनूठा हार्डवेयर पहचान नंबर", "वाई-फाई राउटर का पासवर्ड", "ISP द्वारा दिया गया IP एड्रेस", "सॉफ्टवेयर वर्जन"],
      answer: 0,
      exp: "Explanation (En): Unlike IP addresses which change based on network connection, a MAC address is a permanent physical address hardcoded into network hardware.\nस्पष्टीकरण (Hi): मैक एड्रेस (MAC Address) किसी नेटवर्क कार्ड (NIC) का स्थायी भौतिक (Physical) एड्रेस होता है जो फैक्ट्री में ही तय होता है।"
    },
    {
      qEn: "What is the function of a 'Firewall' in computer network security?",
      qHi: "कंप्यूटर नेटवर्क सुरक्षा में 'फायरवॉल' (Firewall) का क्या कार्य होता है?",
      optionsEn: ["To monitor and filter incoming and outgoing network traffic based on predetermined security rules, acting as a barrier against threats", "To physically cool down overheated network cables", "To boost Wi-Fi router signal range", "To scan for physical dust on computers"],
      optionsHi: ["पूर्वनिर्धारित सुरक्षा नियमों के आधार पर आने वाले और जाने वाले नेटवर्क ट्रैफिक की निगरानी और फिल्टर करना, खतरों के खिलाफ अवरोधक बनना", "केबलों को ठंडा करना", "वाई-फाई रेंज बढ़ाना", "धूल साफ करना"],
      answer: 0,
      exp: "Explanation (En): A firewall acts as a security guard between a trusted internal network and untrusted external networks (like the Internet).\nस्पष्टीकरण (Hi): फायरवॉल एक सुरक्षा कवच है जो अनधिकृत पहुंच या मालवेयर को रोकने के लिए नेटवर्क ट्रैफिक की निगरानी और फिल्टर करता है।"
    },
    {
      qEn: "What is the OSI model in computer networking?",
      qHi: "कंप्यूटर नेटवर्किंग में 'OSI मॉडल' (Open Systems Interconnection model) क्या है?",
      optionsEn: ["A conceptual framework of 7 layers standardizing communication functions of a telecommunication or computing system", "A type of internet browser software", "A computer hardware motherboard", "A cable wiring diagram"],
      optionsHi: ["दूरसंचार या कंप्यूटिंग सिस्टम के संचार कार्यों को मानकीकृत करने वाला 7 परतों (Layers) का एक वैचारिक ढांचा", "इंटरनेट ब्राउज़र", "मदरबोर्ड", "केबल वायरिंग आरेख"],
      answer: 0,
      exp: "Explanation (En): The 7 layers of OSI model are Physical, Data Link, Network, Transport, Session, Presentation, and Application.\nस्पष्टीकरण (Hi): OSI मॉडल एक मानक 7-लेयर ढांचा है (फिजिकल से एप्लीकेशन तक) जो बताता है कि नेटवर्क में डेटा कैसे ट्रांसफर होता है।"
    },
    {
      qEn: "Which layer of the OSI model is responsible for routing data packets across multiple networks (using IP addresses)?",
      qHi: "OSI मॉडल की कौन सी परत (Layer) विभिन्न नेटवर्कों में डेटा पैकेट के रूटिंग और IP एड्रेस प्रबंधन के लिए जिम्मेदार है?",
      optionsEn: ["Network Layer (लेयर 3 - नेटवर्क लेयर)", "Physical Layer", "Transport Layer", "Application Layer"],
      optionsHi: ["नेटवर्क लेयर (Network Layer)", "फिजिकल लेयर", "ट्रांसपोर्ट लेयर", "एप्लीकेशन लेयर"],
      answer: 0,
      exp: "Explanation (En): The Network Layer (Layer 3) handles logical addressing (IP) and routing data across interconnected networks.\nस्पष्टीकरण (Hi): नेटवर्क लेयर (Layer 3) आईपी एड्रेस का उपयोग करके डेटा को सही रास्ते पर भेजने (Routing) का काम करती है।"
    },
    {
      qEn: "Which layer of the OSI model ensures reliable, error-free end-to-end data delivery (using TCP or UDP)?",
      qHi: "OSI मॉडल की कौन सी परत (TCP या UDP का उपयोग करके) अंत-से-अंत (End-to-end) विश्वसनीय डेटा डिलीवरी सुनिश्चित करती है?",
      optionsEn: ["Transport Layer (ट्रांसपोर्ट लेयर)", "Data Link Layer", "Physical Layer", "Presentation Layer"],
      optionsHi: ["ट्रांसपोर्ट लेयर (Transport Layer)", "डेटा लिंक लेयर", "फिजिकल लेयर", "प्रेजेंटेशन लेयर"],
      answer: 0,
      exp: "Explanation, (En): The Transport Layer (Layer 4) manages flow control, error checking, and reliable packet delivery via TCP or fast delivery via UDP.\nस्पष्टीकरण (Hi): ट्रांसपोर्ट लेयर (Layer 4) TCP और UDP प्रोटोकॉल के माध्यम से यह सुनिश्चित करती है कि डेटा बिना किसी गलती के सही सलामत पहुंचे।"
    },
    {
      qEn: "What is the difference between TCP and UDP protocols?",
      qHi: "TCP और UDP प्रोटोकॉल के बीच मुख्य अंतर क्या है?",
      optionsEn: ["TCP is connection-oriented and guarantees reliable, ordered packet delivery with error checking, whereas UDP is connectionless, faster, but does not guarantee delivery", "UDP is always slower than TCP", "TCP does not use IP addresses", "There is no difference"],
      optionsHi: ["TCP कनेक्शन-ओरिएंटेड है और त्रुटि जांच के साथ विश्वसनीय डिलीवरी की गारंटी देता है, जबकि UDP कनेक्शनलेस, तेज है लेकिन डिलीवरी की गारंटी नहीं देता", "UDP हमेशा धीमा है", "TCP आईपी एड्रेस नहीं इस्तेमाल करता", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): TCP (Transmission Control Protocol) is used for web browsing/email where accuracy matters; UDP is used for live streaming/gaming where speed is critical.\nस्पष्टीकरण (Hi): TCP सुरक्षित और पक्की डिलीवरी (जैसे网页/ईमेल) के लिए है, जबकि UDP बिना कनेक्शन के तेज गति (जैसे लाइव स्ट्रीमिंग/गेमिंग) के लिए है।"
    },
    {
      qEn: "What is 'Wi-Fi' (Wireless Fidelity) in networking?",
      qHi: "नेटवर्किंग में 'वाई-फाई' (Wi-Fi) तकनीक क्या है?",
      optionsEn: ["A technology that uses radio waves to provide wireless high-speed internet and network connections", "A wired fiber optic cable standard", "A computer virus protection tool", "A hardware processor cooling fan"],
      optionsHi: ["रेडियो तरंगों का उपयोग करके वायरलेस हाई-स्पीड इंटरनेट और नेटवर्क कनेक्शन प्रदान करने वाली तकनीक", "वायर्ड फाइबर ऑप्टिक केबल मानक", "वायरस सुरक्षा टूल", "प्रोसेसर कूलिंग फैन"],
      answer: 0,
      exp: "Explanation (En): Wi-Fi uses radio frequency technology to connect computers, phones, and devices to local networks and the internet without physical cables.\nस्पष्टीकरण (Hi): वाई-फाई रेडियो तरंगों (Radio waves) के जरिए बिना तारों के कंप्यूटर और मोबाइल को इंटरनेट से जोड़ने की वायरलेस तकनीक है।"
    },
    {
      qEn: "What is a 'Modem' and what does its name stand for?",
      qHi: "'मॉडेम' (Modem) क्या है और इसका नाम किन शब्दों से मिलकर बना है?",
      optionsEn: ["Modulator-Demodulator; converts digital signals from a computer into analog signals for transmission over telephone lines and vice versa", "Mobile Device Monitor; for smartphone screens", "Memory Operational Module; for RAM", "Mainframe Operating Device; for servers"],
      optionsHi: ["मॉड्यूलेटर-डिमॉड्यूलेटर (Modulator-Demodulator); कंप्यूटर के डिजिटल सिग्नल को टेलीफोन लाइनों पर भेजने के लिए एनालॉग में बदलता है और इसके विपरीत", "मोबाइल डिवाइस मॉनिटर", "मेमोरी ऑपरेशनल मॉड्यूल", "मेनफ्रेम ऑपरेटिंग डिवाइस"],
      answer: 0,
      exp: "Explanation (En): A modem bridges digital computer data with analog communication lines (like telephone or cable lines).\nस्पष्टीकरण (Hi): मॉडेम (Modulator-Demodulator) डिजिटल सिग्नलों को एनालॉग में और एनालॉग को वापस डिजिटल में बदलकर इंटरनेट कनेक्टिविटी देता है।"
    },
    {
      qEn: "What is 'Bandwidth' in computer networks?",
      qHi: "कंप्यूटर नेटवर्क में 'बैंडविड्थ' (Bandwidth) से क्या तात्पर्य है?",
      optionsEn: ["The maximum rate of data transfer across a given path, usually measured in bits per second (bps, Mbps, Gbps)", "The physical physical length of a network cable", "The storage capacity of a hard disk", "The processing speed of the CPU clock"],
      optionsHi: ["किसी निश्चित मार्ग पर डेटा ट्रांसफर की अधिकतम दर, जिसे आमतौर पर बिट्स प्रति सेकंड (Mbps, Gbps) में मापा जाता है", "नेटवर्क केबल की भौतिक लंबाई", "हार्ड डिस्क की स्टोरेज क्षमता", "सीपीयू क्लॉक स्पीड"],
      answer: 0,
      exp: "Explanation (En): Bandwidth represents the 'pipe size' or data carrying capacity of a network connection over time.\nस्पष्टीकरण (Hi): बैंडविड्थ किसी नेटवर्क कनेक्शन की डेटा ले जाने की क्षमता (स्पीड) को दर्शाती है, जिसे Mbps या Gbps में मापा जाता है।"
    },
    {
      qEn: "What is a 'Proxy Server' in network architecture?",
      qHi: "नेटवर्क आर्किटेक्चर में 'प्रॉक्सी सर्वर' (Proxy Server) का मुख्य कार्य क्या होता है?",
      optionsEn: ["An intermediary server between client and internet that handles requests, providing caching, security, or bypassing restrictions", "A computer virus storage folder", "A physical network printer", "A type of computer monitor display"],
      optionsHi: ["क्लाइंट और इंटरनेट के बीच एक मध्यवर्ती सर्वर जो अनुरोधों को संभालता है, कैशिंग, सुरक्षा प्रदान करता है या प्रतिबंधों को बायपास करता है", "वायरस फोल्डर", "प्रिंटर", "मॉनिटर डिस्प्ले"],
      answer: 0,
      exp: "Explanation (En): A proxy server shields users' IP addresses, filters web content, and speeds up requests via caching.\nस्पष्टीकरण (Hi): प्रॉक्सी सर्वर यूजर और इंटरनेट के बीच एक बिचौलिये की तरह काम करता है जो आईपी छुपाने, सुरक्षा देने या वेबसाइट फिल्टर करने में मदद करता है।"
    },
    {
      qEn: "What is 'VPN' (Virtual Private Network) used for?",
      qHi: "'VPN' (वर्चुअल प्राइवेट नेटवर्क) का उपयोग किस कार्य के लिए किया जाता है?",
      optionsEn: ["To create a secure, encrypted connection over a public network (like the internet), ensuring privacy and hiding user location", "To increase computer screen resolution", "To clean computer virus files", "To speed up local Wi-Fi router range"],
      optionsHi: ["सार्वजनिक नेटवर्क (जैसे इंटरनेट) पर एक सुरक्षित, एन्क्रिप्टेड कनेक्शन बनाना, जो गोपनीयता सुनिश्चित करे और यूजर की लोकेशन छुपाए", "स्क्रीन रेजोल्यूशन बढ़ाना", "वायरस साफ करना", "वाई-फाई रेंज बढ़ाना"],
      answer: 0,
      exp: "Explanation (En): A VPN encrypts internet traffic and tunnels it through remote servers, preventing ISPs and hackers from snooping on user activity.\nस्पष्टीकरण (Hi): वीपीएन (VPN) इंटरनेट पर आपका डेटा एन्क्रिप्ट कर देता है जिससे आपकी पहचान और लोकेशन गुप्त रहती है और आप सुरक्षित ब्राउज़िंग करते हैं।"
    },
    {
      qEn: "What is 'Packet Switching' in data transmission?",
      qHi: "डेटा transmisión में 'पैकेट स्विचिंग' (Packet Switching) तकनीक क्या है?",
      optionsEn: ["Breaking down data into smaller blocks called packets, transmitting them independently across the network, and reassembling them at the destination", "Sending data in one massive continuous stream without breaks", "Storing files inside floppy disks", "Compressing photos into zip folders"],
      optionsHi: ["डेटा को पैकेट नामक छोटे ब्लॉकों में तोड़ना, उन्हें नेटवर्क पर स्वतंत्र रूप से भेजना और गंतव्य पर फिर से जोड़ना", "बिना ब्रेक के एक बड़ा डेटा भेजना", "फ्लॉपी में स्टोर करना", "जिप फोल्डर बनाना"],
      answer: 0,
      exp: "Explanation, (En): Modern internet relies on packet switching, where packets travel via different optimal routes and reassemble seamlessly at the receiver end.\nस्पष्टीकरण (Hi): इंटरनेट पर डेटा को छोटे-छोटे 'पैकेट' में तोड़कर अलग-अलग रास्तों से भेजा जाता है और अंत में जोड़ लिया जाता है, इसे पैकेट स्विचिंग कहते हैं।"
    },
    {
      qEn: "What is a 'Hub' in networking and how does it differ from a Switch?",
      qHi: "नेटवर्किंग में 'हब' (Hub) क्या है और यह स्विच से किस प्रकार भिन्न है?",
      optionsEn: ["A basic, non-intelligent networking device that broadcasts incoming data packets to all connected ports indiscriminately, unlike a switch which directs packets intelligently", "A device that routes traffic globally across countries", "A secure firewall security barrier", "A wireless Bluetooth adapter"],
      optionsHi: ["एक बुनियादी, गैर-बुद्धिमान नेटवर्किंग डिवाइस जो बिना सोचे-समझे सभी जुड़े पोर्ट्स पर डेटा प्रसारित करता है (स्विच के विपरीत जो बुद्धिमानी से भेजता है)", "वैश्विक राउटर", "फायरवॉल सुरक्षा", "ब्लूटूथ एडाप्टर"],
      answer: 0,
      exp: "Explanation (En): Hubs cause network congestion by broadcasting traffic everywhere, whereas switches send data only to the intended recipient.\nस्पष्टीकरण (Hi): हब सभी कनेक्टेड कंप्यूटरों को डेटा ब्रॉडकास्ट कर देता है (जिससे ट्रैफिक बढ़ता है), जबकि स्विच केवल सही टारगेट को डेटा भेजता है।"
    },
    {
      qEn: "What is 'FTP' (File Transfer Protocol) used for?",
      qHi: "'FTP' (फाइल ट्रांसफर प्रोटोकॉल) का मुख्य उपयोग किस कार्य के लिए किया जाता है?",
      optionsEn: ["To transfer computer files between a client and a server over a computer network", "To send text email messages", "To browse secure web pages", "To encrypt Wi-Fi passwords"],
      optionsHi: ["कंप्यूटर नेटवर्क पर क्लाइंट और सर्वर के बीच कंप्यूटर फाइलें ट्रांसफर करने के लिए", "ईमेल भेजने के लिए", "वेब पेज ब्राउज़ करने के लिए", "वाई-फाई पासवर्ड एन्क्रिप्ट करने के लिए"],
      answer: 0,
      exp: "Explanation (En): FTP is a standard network protocol dedicated to uploading and downloading files between local and remote hosts.\nस्पष्टीकरण (Hi): एफटीपी (FTP) एक मानक प्रोटोकॉल है जिसका उपयोग इंटरनेट पर सर्वर और कंप्यूटर के बीच बड़ी फाइलें अपलोड या डाउनलोड करने के लिए होता है।"
    },
    {
      qEn: "What is the function of 'SMTP' (Simple Mail Transfer Protocol)?",
      qHi: "'SMTP' (सिंपल मेल ट्रांसफर प्रोटोकॉल) का मुख्य कार्य क्या होता है?",
      optionsEn: ["To send and transmit outgoing emails across internet networks", "To receive incoming emails into an inbox", "To browse secure websites", "To download files from servers"],
      optionsHi: ["इंटरनेट नेटवर्क पर आउटगोइंग ईमेल भेजना और प्रसारित करना", "इनबॉक्स में ईमेल प्राप्त करना", "वेबसाइट ब्राउज़ करना", "फाइल डाउनलोड करना"],
      answer: 0,
      exp: "Explanation (En): SMTP handles the transmission of outgoing emails, while POP3 or IMAP are used for receiving emails.\nस्पष्टीकरण (Hi): एसएमटीपी (SMTP) का उपयोग इंटरनेट पर ईमेल भेजने (Outgoing mail) के लिए किया जाता है।"
    },
    {
      qEn: "What is 'Bluetooth' technology used for?",
      qHi: "'ब्लूटूथ' (Bluetooth) तकनीक का उपयोग मुख्य रूप से किस लिए किया जाता है?",
      optionsEn: ["Short-range wireless communication to connect devices (like headphones, mice, phones) over short distances using radio waves", "Long-distance global internet routing across continents", "Broadcasting television satellite signals", "Printing documents on office laser printers"],
      optionsHi: ["कम दूरी पर उपकरणों (हेडफोन, माउस, फोन) को जोड़ने के लिए रेडियो तरंगों का उपयोग करने वाली शॉर्ट-रेंज वायरलेस तकनीक", "लंबी दूरी की वैश्विक इंटरनेट रूटिंग", "टीवी सैटेलाइट ब्रॉडकास्ट", "लेजर प्रिंटर पर प्रिंट"],
      answer: 0,
      exp: "Explanation (En): Bluetooth is a wireless technology standard for exchanging data over short distances using short-wavelength UHF radio waves.\nस्पष्टीकरण (Hi): ब्लूटूथ कम दूरी (Short-range) पर बिना तारों के डिवाइसों (जैसे वायरलेस ईयरफोन और फोन) को आपस में जोड़ने की तकनीक है।"
    },
    {
      qEn: "What is a 'Phishing' cyber attack in internet communication?",
      qHi: "इंटरनेट संचार में 'फिशिंग' (Phishing) साइबर हमला क्या होता है?",
      optionsEn: ["A fraudulent attempt by cybercriminals to steal sensitive information (like passwords, credit cards) by disguising as a trustworthy entity in electronic communication", "A physical hardware theft of routers", "A computer virus that deletes game files", "A slow internet broadband speed issue"],
      optionsHi: ["साइबर अपराधियों द्वारा इलेक्ट्रॉनिक संचार में भरोसेमंद इकाई बनकर संवेदनशील जानकारी (पासवर्ड, क्रेडिट कार्ड) चुराने का धोखाधड़ी प्रयास", "राउटर की भौतिक चोरी", "गेम फाइल डिलीट करने वाला वायरस", "धीमी इंटरनेट स्पीड"],
      answer: 0,
      exp: "Explanation (En): Phishing often occurs via deceptive emails or fake websites designed to trick users into revealing personal credentials.\nस्पष्टीकरण (Hi): फिशिंग एक फ्रॉड है जिसमें हैकर बैंक या सरकारी अधिकारी बनकर फर्जी ईमेल या लिंक के जरिए आपके पासवर्ड और निजी जानकारी चुरा लेते हैं।"
    },
    {
      qEn: "What is the 'Internet' fundamentally structured as?",
      qHi: "'इंटरनेट' (Internet) मूल रूप से किस रूप में संरचित है?",
      optionsEn: ["A global system of interconnected computer networks utilizing standard Internet Protocol Suite (TCP/IP) to serve billions of users worldwide", "A single private mainframe computer in Washington", "A closed local area network inside a single school", "A telephone landline audio system"],
      optionsHi: ["दुनिया भर के अरबों यूजर्स को सेवाएं देने के लिए मानक इंटरनेट प्रोटोकॉल सूट (TCP/IP) का उपयोग करने वाले आपस में जुड़े कंप्यूटर नेटवर्कों की एक वैश्विक प्रणाली", "वाशिंगटन में एक निजी कंप्यूटर", "एक स्कूल का लोकल नेटवर्क", "टेलीफोन लैंडलाइन ऑडियो सिस्टम"],
      answer: 0,
      exp: "Explanation (En): The internet is a 'network of networks' spanning the globe, revolutionizing communication, commerce, and information sharing.\nस्पष्टीकरण (Hi): इंटरनेट दुनिया भर के अनगिनत छोटे-बड़े नेटवर्कों का एक वैश्विक महा-नेटवर्क (Network of Networks) है जो TCP/IP प्रोटोकॉल पर काम करता है।"
    },
    {
      qEn: "Why is a strong grasp of computer networks and internet protocols vital in the digital age?",
      qHi: "डिजिटल युग में कंप्यूटर नेटवर्क और इंटरनेट प्रोटोकॉल की मजबूत समझ होना क्यों अत्यंत आवश्यक है?",
      optionsEn: ["It empowers individuals and professionals to navigate cyberspace securely, optimize connectivity, understand web architecture, and combat cyber threats effectively", "It is only required for playing online video games", "It is useful exclusively for repairing television antennas", "It has no relevance to everyday modern life"],
      optionsHi: ["यह व्यक्तियों और पेशेवरों को सुरक्षित रूप से साइबरस्पेस में नेविगेट करने, कनेक्टिविटी को अनुकूलित करने और साइबर खतरों से प्रभावी ढंग से मुकाबला करने में सक्षम बनाता है", "यह केवल ऑनलाइन गेम खेलने के लिए जरूरी है", "केवल टीवी एंटीना सुधारने के काम आता है", "दैनिक जीवन से कोई नाता नहीं"],
      answer: 0,
      exp: "Explanation (En): Understanding networking principles underpins cybersecurity, cloud computing, and effective digital communication in an interconnected world.\nस्पष्टीकरण (Hi): आज की इस जुड़ी हुई दुनिया में नेटवर्किंग की जानकारी होना साइबर सुरक्षा, क्लाउड कंप्यूटिंग और सुरक्षित डिजिटल संवाद के लिए सबसे बुनियादी जरूरत है।"
    }
  ],
    "Database Management Systems and SQL": [
    {
      qEn: "What is a 'Database' in computer science?",
      qHi: "कंप्यूटर विज्ञान में 'डेटाबेस' (Database) किसे कहा जाता है?",
      optionsEn: ["An organized collection of structured data or information stored electronically in a computer system", "A single plain text file containing random notes", "An internet web browser application", "A computer hardware cooling fan"],
      optionsHi: ["कंप्यूटर सिस्टम में इलेक्ट्रॉनिक रूप से संग्रहीत संरचित डेटा या जानकारी का एक संगठित संग्रह", "यादृच्छिक नोटों वाली एक सादी पाठ फ़ाइल", "एक इंटरनेट वेब ब्राउज़र अनुप्रयोग", "एक कंप्यूटर हार्डवेयर कूलिंग फैन"],
      answer: 0,
      exp: "Explanation (En): A database allows electronic data to be accessed, managed, modified, updated, controlled, and organized efficiently.\nस्पष्टीकरण (Hi): डेटाबेस डेटा का एक व्यवस्थित और संरचित संग्रह है जिसे कंप्यूटर में आसानी से स्टोर, मैनेज और एक्सेस किया जा सकता है।"
    },
    {
      qEn: "What does 'DBMS' stand for, and what is its primary role?",
      qHi: "'DBMS' का पूर्ण रूप क्या है और इसकी मुख्य भूमिका क्या है?",
      optionsEn: ["Database Management System; software designed to define, manipulate, retrieve, and manage data in a database", "Digital Backup Media Storage; for cloud files", "Dynamic Basic Machine Software; for computer boot", "Data Binary Management Security; for anti-virus"],
      optionsHi: ["डेटाबेस मैनेजमेंट सिस्टम (Database Management System); डेटाबेस में डेटा को परिभाषित करने, हेरफेर करने, पुनर्प्राप्त करने और प्रबंधित करने के लिए डिज़ाइन किया गया सॉफ्टवेयर", "डिजिटल बैकअप मीडिया स्टोरेज", "डायनेमिक बेसिक मशीन सॉफ्टवेयर", "डेटा बाइनरी मैनेजमेंट सुरक्षा"],
      answer: 0,
      exp: "Explanation (En): A DBMS acts as an interface between databases and end-users or application programs, ensuring data security and consistency.\nस्पष्टीकरण (Hi): DBMS एक ऐसा सॉफ्टवेयर है जो यूजर और डेटाबेस के बीच मध्यस्थ का काम करता है जिससे डेटा को सुरक्षित तरीके से मैनेज किया जा सके।"
    },
    {
      qEn: "What is a 'Relational Database Management System' (RDBMS)?",
      qHi: "'रिलेशनल डेटाबेस मैनेजमेंट सिस्टम' (RDBMS) से क्या तात्पर्य है?",
      optionsEn: ["A DBMS that stores data in structured tables consisting of rows and columns, establishing relationships between tables using keys", "A database that stores data only in unstructured audio files", "A system for managing computer network cables", "An offline word processor tool"],
      optionsHi: ["एक DBMS जो पंक्तियों और स्तंभों से बनी संरचित तालिकाओं में डेटा संग्रहीत करता है, कुंजियों का उपयोग करके तालिकाओं के बीच संबंध स्थापित करता है", "असंरचित ऑडियो फ़ाइलें संग्रहीत करने वाला डेटाबेस", "कंप्यूटर नेटवर्क केबलों को प्रबंधित करने के लिए एक प्रणाली", "एक ऑफ़लाइन वर्ड प्रोसेसर टूल"],
      answer: 0,
      exp: "Explanation (En): RDBMS (like MySQL, PostgreSQL, Oracle) uses tables, rows (tuples), and columns (attributes) linked via foreign keys.\nस्पष्टीकरण (Hi): RDBMS (जैसे MySQL, Oracle) डेटा को टेबल, रो और कॉलम के रूप में स्टोर करता है और तालिकाओं के बीच संबंध (Relations) स्थापित करता है।"
    },
    {
      qEn: "What is a 'Primary Key' in a relational database?",
      qHi: "रिलेशनल डेटाबेस में 'प्राइमरी की' (Primary Key) का क्या महत्व है?",
      optionsEn: ["A unique field or set of fields in a table that specifically identifies each record/row, ensuring no duplicate or null values exist", "A password used to encrypt the entire database server", "An external web link to another website", "A random number generated automatically for sorting"],
      optionsHi: ["एक तालिका में एक अनूठा फ़ील्ड या फ़ील्ड का सेट जो प्रत्येक रिकॉर्ड/पंक्ति की विशेष पहचान करता है, यह सुनिश्चित करता है कि कोई डुप्लिकेट या शून्य मान मौजूद न हो", "पूरे डेटाबेस सर्वर को एन्क्रिप्ट करने के लिए उपयोग किया जाने वाला पासवर्ड", "किसी अन्य वेबसाइट का बाहरी वेब लिंक", "छंटनी के लिए स्वचालित रूप से उत्पन्न यादृच्छिक संख्या"],
      answer: 0,
      exp: "Explanation (En): A primary key uniquely identifies every single row in a table and cannot contain NULL values.\nस्पष्टीकरण (Hi): प्राइमरी की टेबल के प्रत्येक रिकॉर्ड को एक यूनिक पहचान देती है, जिसमें कोई भी वैल्यू खाली (NULL) या डुप्लीकेट नहीं हो सकती।"
    },
    {
      qEn: "What is a 'Foreign Key' used for in database tables?",
      qHi: "डेटाबेस तालिकाओं में 'फॉरेन की' (Foreign Key) का उपयोग किस लिए किया जाता है?",
      optionsEn: ["To link two tables together, establishing a relationship where a field in one table refers to the primary key of another table", "To lock the database against hackers", "To translate English words into SQL code", "To delete old backup logs automatically"],
      optionsHi: ["दो तालिकाओं को एक साथ जोड़ने के लिए, एक ऐसा संबंध स्थापित करना जहाँ एक तालिका में एक फ़ील्ड दूसरी तालिका की प्राथमिक कुंजी को संदर्भित करता है", "हैकर्स से डेटाबेस को लॉक करने के लिए", "अंग्रेजी शब्दों को SQL कोड में अनुवाद करने के लिए", "पुराने बैकअप लॉग को स्वचालित रूप से हटाने के लिए"],
      answer: 0,
      exp: "Explanation (En): Foreign keys maintain referential integrity across relational tables, ensuring data consistency.\nस्पष्टीकरण, (En): फॉरेन की दो अलग-अलग टेबल के बीच संबंध (Relationship) जोड़ने का काम करती है, जिससे डेटा की अखंडता बनी रहती है।"
    },
    {
      qEn: "What does 'SQL' stand for, and what is its primary purpose?",
      qHi: "'SQL' का पूर्ण रूप क्या है और इसका मुख्य उद्देश्य क्या है?",
      optionsEn: ["Structured Query Language; standard programming language designed for managing and querying data in relational databases", "System Quality Logic; for testing software bugs", "Sequential Quick Link; for internet routing", "Secure Quantitative Layer; for network firewalls"],
      optionsHi: ["स्ट्रक्चर्ड क्वेरी लैंग्वेज (Structured Query Language); रिलेशनल डेटाबेस में डेटा को प्रबंधित और क्वेरी करने के लिए डिज़ाइन की गई मानक प्रोग्रामिंग भाषा", "सिस्टम क्वालिटी लॉजिक", "सिक्वेंशियल क्विक लिंक", "सिक्योर क्वान्टेटिव लेयर"],
      answer: 0,
      exp: "Explanation (En): SQL allows users to create, read, update, and delete (CRUD) data within RDBMS systems efficiently.\nस्पष्टीकरण (Hi): SQL एक मानक भाषा है जिसका उपयोग रिलेशनल डेटाबेस से डेटा जोड़ने, खोजने, अपडेट करने और हटाने के लिए किया जाता है।"
    },
    {
      qEn: "What are the main sub-languages of SQL?",
      qHi: "SQL के मुख्य उप-भाग या श्रेणियां (Sub-languages) कौन-कौन सी हैं?",
      optionsEn: ["DDL, DML, DCL, and TCL", "HTTP, FTP, TCP, UDP", "RAM, ROM, CPU, ALU", "LAN, MAN, WAN, PAN"],
      optionsHi: ["DDL, DML, DCL और TCL", "HTTP, FTP, TCP, UDP", "RAM, ROM, CPU, ALU", "LAN, MAN, WAN, PAN"],
      answer: 0,
      exp: "Explanation (En): SQL commands are grouped into DDL (Data Definition), DML (Data Manipulation), DCL (Data Control), and TCL (Transaction Control).\nस्पष्टीकरण (Hi): SQL कमांडों को मुख्य रूप से DDL, DML, DCL और TCL श्रेणियों में बांटा गया है।"
    },
    {
      qEn: "Which SQL commands belong to 'DDL' (Data Definition Language)?",
      qHi: "निम्नलिखित में से कौन से SQL कमांड 'DDL' (डेटा डेफिनेशन लैंग्वेज) के अंतर्गत आते हैं?",
      optionsEn: ["CREATE, DROP, ALTER, and TRUNCATE", "SELECT, INSERT, UPDATE, and DELETE", "GRANT and REVOKE", "COMMIT and ROLLBACK"],
      optionsHi: ["CREATE, DROP, ALTER और TRUNCATE", "SELECT, INSERT, UPDATE और DELETE", "GRANT और REVOKE", "COMMIT और ROLLBACK"],
      answer: 0,
      exp: "Explanation (En): DDL commands define the database structure and schema (e.g., creating or deleting tables).\nस्पष्टीकरण (Hi): DDL कमांड्स डेटाबेस के ढांचे (Structure) को बनाने, बदलने या मिटाने के काम आते हैं (जैसे CREATE, ALTER, DROP)।्स"
    },
    {
      qEn: "Which SQL commands belong to 'DML' (Data Manipulation Language)?",
      qHi: "निम्नलिखित में से कौन से SQL कमांड 'DML' (डेटा मैन्युपुलेशन लैंग्वेज) के अंतर्गत आते हैं?",
      optionsEn: ["SELECT, INSERT, UPDATE, and DELETE", "CREATE, DROP, and ALTER", "GRANT and REVOKE", "COMMIT and SAVEPOINT"],
      optionsHi: ["SELECT, INSERT, UPDATE और DELETE", "CREATE, DROP और ALTER", "GRANT और REVOKE", "COMMIT और SAVEPOINT"],
      answer: 0,
      exp: "Explanation (En): DML commands manage and manipulate the actual data records stored within database tables.\nस्पष्टीकरण (Hi): DML कमांड्स टेबल के अंदर रखे डेटा को जोड़ने (INSERT), बदलने (UPDATE), हटाने (DELETE) या खोजने (SELECT) के काम आते हैं।"
    },
    {
      qEn: "What is the purpose of the 'SELECT' statement in SQL?",
      qHi: "SQL में 'SELECT' स्टेटमेंट का मुख्य कार्य क्या होता है?",
      optionsEn: ["To query and retrieve data from one or more database tables", "To permanently delete an entire database table", "To create a new user login password", "To backup database files to the cloud"],
      optionsHi: ["एक या अधिक डेटाबेस तालिकाओं से डेटा का चयन और पुनर्चक्रण (Query/Retrieve) करना", "पूरी डेटाबेस टेबल को स्थायी रूप से हटाना", "नया यूजर पासवर्ड बनाना", "क्लाउड पर बैकअप लेना"],
      answer: 0,
      exp: "Explanation, (En): The SELECT statement is the most frequently used SQL command, fetching specific rows and columns based on specified criteria.\nस्पष्टीकरण (Hi): SELECT कमांड का उपयोग डेटाबेस से डेटा देखने या खोजने (Querying) के लिए किया जाता है।"
    },
    {
      qEn: "What is 'Data Redundancy' in database management?",
      qHi: "डेटाबेस प्रबंधन में 'डेटा रिडंडेंसी' (Data Redundancy) से क्या तात्पर्य है?",
      optionsEn: ["The duplication or storage of the exact same data in multiple places within a database", "The permanent loss of critical database files", "The high speed of database queries", "The encryption of user passwords"],
      optionsHi: ["एक ही डेटाबेस में कई स्थानों पर बिल्कुल उसी डेटा का दोहराव या भंडारण", "महत्वपूर्ण डेटाबेस फाइलों की स्थायी हानि", "डेटाबेस क्वेरी की उच्च गति", "यूजर पासवर्ड का एन्क्रिप्शन"],
      answer: 0,
      exp: "Explanation (En): Data redundancy wastes storage space and can lead to data inconsistency; relational databases aim to minimize it through normalization.\nस्पष्टीकरण (Hi): एक ही डेटा का डेटाबेस में बार-बार स्टोर होना 'डेटा रिडंडेंसी' (डेटा का दोहराव) कहलाता है, जिससे स्पेस बर्बाद होता है।"
    },
    {
      qEn: "What is 'Database Normalization' and why is it performed?",
      qHi: "'डेटाबेस नॉर्मलाइजेशन' (Normalization) क्या है और यह क्यों किया जाता है?",
      optionsEn: ["The process of organizing data in a database to reduce redundancy and improve data integrity (1NF, 2NF, 3NF, BCNF)", "The process of deleting all tables to save computer memory", "The method of translating SQL into English prose", "The process of securing Wi-Fi passwords"],
      optionsHi: ["डेटा अतिरेक (Redundancy) को कम करने और डेटा अखंडता में सुधार करने के लिए डेटाबेस में डेटा को व्यवस्थित करने की प्रक्रिया (1NF, 2NF, 3NF)", "कंप्यूटर मेमोरी बचाने के लिए सभी टेबल डिलीट करना", "SQL को अंग्रेजी में अनुवाद करना", "वाई-फाई पासवर्ड सुरक्षित करना"],
      answer: 0,
      exp: "Explanation (En): Normalization divides large tables into smaller, well-structured ones and defines relationships to eliminate anomalies.\nस्पष्टीकरण (Hi): नॉर्मलाइजेशन वह प्रक्रिया है जिसके जरिए डेटा को तार्किक रूप से व्यवस्थित किया जाता है ताकि डेटा दोहराव और अशुद्धियों से बचा जा सके।"
    },
    {
      qEn: "What does 'ACID' stand for in the context of database transactions?",
      qHi: "डेटाबेस ट्रांजैक्शन के संदर्भ में 'ACID' का पूर्ण रूप क्या है?",
      optionsEn: ["Atomicity, Consistency, Isolation, Durability", "Automated Central Internet Directory", "Array Calculation Input Device", "Access Control Information Data"],
      optionsHi: ["एटॉमिकसिटी, कंसिस्टेंसी, आइसोलेशन, ड्यूरेबिलिटी (Atomicity, Consistency, Isolation, Durability)", "ऑटोमेटेड सेंट्रल इंटरनेट डायरेक्टरी", "एरे कैलकुलेशन इनपुट डिवाइस", "एक्सेस कंट्रोल इंफॉर्मेशन डेटा"],
      answer: 0,
      exp: "Explanation (En): ACID properties guarantee that database transactions are processed reliably and safely, even amidst system failures.\nस्पष्टीकरण (Hi): ACID गुण (Atomicity, Consistency, Isolation, Durability) यह सुनिश्चित करते हैं कि डेटाबेस लेनदेन सुरक्षित और भरोसेमंद तरीके से पूरे हों।"
    },
    {
      qEn: "What does 'Atomicity' mean in ACID database properties?",
      qHi: "ACID गुणों में 'एटॉमिकसिटी' (Atomicity) का क्या अर्थ है?",
      optionsEn: ["The 'all-or-nothing' rule: either all operations in a transaction execute successfully, or none of them do", "The ability to split atoms inside server chips", "The speed of database download", "The creation of small database files"],
      optionsHi: ["'सब-कुछ या कुछ-नहीं' (All-or-nothing) नियम: या तो लेनदेन के सभी कार्य सफल होंगे, या कोई भी नहीं", "सर्वर चिप्स में परमाणु विभाजित करना", "डेटाबेस डाउनलोड गति", "छोटी फाइलें बनाना"],
      answer: 0,
      exp: "Explanation (En): Atomicity ensures that partial transactions do not leave the database in an inconsistent state; if one step fails, the whole transaction rolls back.\nस्पष्टीकरण (Hi): एटॉमिकसिटी का मतलब है कि ट्रांजैक्शन या तो पूरी तरह पूरा हो या एक भी हिस्सा अधूरा न रहे (बीच में फेल होने पर सब रोल-बैक हो जाए)।"
    },
    {
      qEn: "What is a 'NoSQL' database?",
      qHi: "'NoSQL' डेटाबेस किस प्रकार के डेटा को स्टोर करने के लिए डिजाइन किए जाते हैं?",
      optionsEn: ["Non-relational databases designed to store unstructured, semi-structured, or massive distributed data (e.g., MongoDB, Cassandra)", "Databases that prohibit the use of SQL language forever", "Databases that only run on offline floppy disks", "Databases used exclusively for word processing"],
      optionsHi: ["गैर-संबंधी (Non-relational) डेटाबेस जो असंरचित, अर्ध-संरचित या विशाल वितरित डेटा (जैसे MongoDB, Cassandra) को स्टोर करने के लिए डिजाइन किए गए हैं", "वे डेटाबेस जो SQL बैन करते हैं", "केवल फ्लॉपी डिस्क पर चलने वाले", "वर्ड प्रोसेसिंग के लिए"],
      answer: 0,
      exp: "Explanation, (En): Unlike rigid RDBMS tables, NoSQL databases use flexible formats like key-value pairs, documents, or graphs to handle big data.\nस्पष्टीकरण (Hi): NoSQL डेटाबेस पारंपरिक टेबल के बजाय डॉक्यूमेंट, की-वैल्यू या ग्राफ के रूप में असंरचित (Unstructured) डेटा को तेजी से संभालते हैं।"
    },
    {
      qEn: "What is a 'Database Index' and why is it used?",
      qHi: "'डेटाबेस इंडेक्स' (Index) क्या है और इसका उपयोग क्यों किया जाता है?",
      optionsEn: ["A data structure that improves the speed of data retrieval operations on a database table (at the cost of extra storage and slower writes)", "A permanent table that deletes old records", "An alphabetical index of user passwords", "A hardware cooling mechanism"],
      optionsHi: ["एक डेटा संरचना जो डेटाबेस तालिका पर डेटा पुनर्प्राप्ति संचालन की गति में सुधार करती है (अतिरिक्त भंडारण और धीमी राइटिंग की कीमत पर)", "पुराने रिकॉर्ड हटाने वाली टेबल", "यूजर पासवर्ड की सूची", "कूलिंग मैकेनिज्म"],
      answer: 0,
      exp: "Explanation (En): Indexes work like a book index, allowing the database engine to find rows much faster without scanning the entire table.\nस्पष्टीकरण (Hi): इंडेक्स किताब की विषय-सूची (Index) की तरह काम करता है, जिससे डेटाबेस को कोई भी रिकॉर्ड चुटकियों में मिल जाता है।"
    },
    {
      qEn: "What is a 'View' in a database?",
      qHi: "डेटाबेस में 'व्यू' (View) से क्या तात्पर्य है?",
      optionsEn: ["A virtual table based on the result-set of an SQL query, containing rows and columns just like a real table but without storing data physically", "A computer monitor screen display setting", "A backup copy of the entire hard drive", "An image file format for database logos"],
      optionsHi: ["SQL क्वेरी के परिणाम-सेट पर आधारित एक वर्चुअल टेबल, जिसमें वास्तविक टेबल की तरह पंक्तियाँ और कॉलम होते हैं लेकिन डेटा भौतिक रूप से संग्रहीत नहीं होता", "मॉनिटर स्क्रीन डिस्प्ले सेटिंग", "हार्ड ड्राइव की बैकअप कॉपी", "इमेज फाइल फॉर्मेट"],
      answer: 0,
      exp: "Explanation (En): Views simplify complex queries and enhance security by restricting user access to specific columns/rows of underlying tables.\nस्पष्टीकरण (Hi): व्यू (View) एक वर्चुअल टेबल होती है जो किसी SQL क्वेरी के आधार पर दिखती है, लेकिन इसके पास अपना अलग भौतिक डेटा स्टोरेज नहीं होता।"
    },
    {
      qEn: "What is a 'Stored Procedure' in database programming?",
      qHi: "डेटाबेस प्रोग्रामिंग में 'स्टोर्ड प्रोसीजर' (Stored Procedure) क्या होता है?",
      optionsEn: ["A prepared SQL code that you can save and reuse repeatedly, stored in the database server", "A file saved in the recycle bin", "An automated virus scanning script", "A hardware backup script"],
      optionsHi: ["एक तैयार SQL कोड जिसे आप सहेज सकते हैं और बार-बार पुनः उपयोग कर सकते हैं, जो डेटाबेस सर्वर में संग्रहीत होता है", "रीसायकल बिन में सेव फाइल", "ऑटोमेटेड वायरस स्कैन स्क्रिप्ट", "हार्डवेयर बैकअप स्क्रिप्ट"],
      answer: 0,
      exp: "Explanation (En): Stored procedures encapsulate business logic inside the database, improving performance, modularity, and security.\nस्पष्टीकरण (Hi): स्टोर्ड प्रोसीजर पहले से लिखा हुआ SQL कोड होता है जिसे डेटाबेस में सेव कर लिया जाता है और बार-बार रन किया जा सकता है।"
    },
    {
      qEn: "What is 'Data Integrity' in a database system?",
      qHi: "डेटाबेस सिस्टम में 'डेटा इंटीग्रिटी' (Data Integrity / डेटा अखंडता) से क्या तात्पर्य है?",
      optionsEn: ["The overall accuracy, completeness, and consistency of data stored in a database throughout its lifecycle", "The physical security of the server room doors", "The speed of internet data downloading", "The encryption of computer passwords"],
      optionsHi: ["अपने पूरे जीवनचक्र में डेटाबेस में संग्रहीत डेटा की समग्र सटीकता, पूर्णता और संगति (Consistency)", "सर्वर रूम के दरवाजे की सुरक्षा", "इंटरनेट डाउनलोड गति", "पासवर्ड एन्क्रिप्शन"],
      answer: 0,
      exp: "Explanation (En): Integrity constraints (like primary keys, check constraints) ensure that data remains correct and reliable.\nस्पष्टीकरण (Hi): डेटा इंटीग्रिटी यह सुनिश्चित करती है कि डेटाबेस में मौजूद डेटा पूरी तरह सटीक, सही और भरोसेमंद बना रहे।"
    },
    {
      qEn: "What is a 'Database Transaction'?",
      qHi: "'डेटाबेस ट्रांजैक्शन' (Database Transaction) किसे कहा जाता है?",
      optionsEn: ["A single logical unit of work executed against a database, comprising one or more SQL operations", "A financial bank credit card payment online only", "A file download from the internet", "A computer operating system boot process"],
      optionsHi: ["एक डेटाबेस के विरुद्ध निष्पादित कार्य की एक तार्किक इकाई, जिसमें एक या अधिक SQL संचालन शामिल होते हैं", "ऑनलाइन बैंक क्रेडिट कार्ड भुगतान", "इंटरनेट से फाइल डाउनलोड", "ऑपरेटिंग सिस्टम बूट प्रक्रिया"],
      answer: 0,
      exp: "Explanation (En): A transaction represents a sequence of operations treated as a single indivisible unit following ACID principles.\nस्पष्टीकरण (Hi): ट्रांजैक्शन एक या एक से अधिक SQL ऑपरेशन का समूह होता है जिसे डेटाबेस में एक सिंगल यूनिट के रूप में निष्पादित किया जाता है।"
    },
    {
      qEn: "What is the function of the 'GROUP BY' clause in SQL?",
      qHi: "SQL में 'GROUP BY' क्लॉज का मुख्य कार्य क्या होता है?",
      optionsEn: ["To group rows that have the same values into summary rows, often used with aggregate functions (like COUNT, SUM, AVG)", "To sort rows in alphabetical order", "To delete duplicate database tables", "To encrypt user table columns"],
      optionsHi: ["समान मानों वाली पंक्तियों को सारांश पंक्तियों में समूहित करना, अक्सर एग्रीगेट फ़ंक्शन (COUNT, SUM, AVG) के साथ उपयोग किया जाता है", "वर्णमाला क्रम में पंक्तियों को छांटना", "डुप्लीकेट टेबल हटाना", "कॉलम एन्क्रिप्ट करना"],
      answer: 0,
      exp: "Explanation, (En): GROUP BY organizes data into groups so aggregate functions can perform calculations on each group independently.\nस्पष्टीकरण (Hi): GROUP BY का उपयोग एक जैसे डेटा को ग्रुप करने और COUNT, SUM, MAX जैसे एग्रीगेट फंक्शन लगाने के लिए किया जाता है।"
    },
    {
      qEn: "What is the difference between 'HAVING' and 'WHERE' clauses in SQL?",
      qHi: "SQL में 'HAVING' और 'WHERE' क्लॉज के बीच मुख्य अंतर क्या है?",
      optionsEn: ["WHERE filters rows before grouping takes place, whereas HAVING filters groups after the GROUP BY clause has been applied", "WHERE is used only for numbers, HAVING for text", "HAVING is faster than WHERE", "There is no difference"],
      optionsHi: ["WHERE समूहीकरण (Grouping) से पहले पंक्तियों को फ़िल्टर करता है, जबकि HAVING समूह बनने के बाद समूहों को फ़िल्टर करता है", "WHERE केवल संख्याओं के लिए है", "HAVING तेज है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): WHERE applies conditions to individual records, while HAVING applies conditions to aggregated groups (used with GROUP BY).\nस्पष्टीकरण (Hi): WHERE सामान्य रिकॉर्ड पर शर्त लगाता है, जबकि HAVING ग्रुप बनने के बाद उन पर शर्त लगाता है (GROUP BY के साथ)।"
    },
    {
      qEn: "What is a 'Database Schema'?",
      qHi: "'डेटाबेस स्कीमा' (Database Schema) क्या होता है?",
      optionsEn: ["The formal architecture, blueprint, or logical structure of how data is organized and related within a database", "A computer virus protection software", "A physical backup hard drive", "An internet browser webpage layout"],
      optionsHi: ["डेटाबेस के भीतर डेटा कैसे व्यवस्थित और संबंधित है, इसकी औपचारिक वास्तुकला, ब्लूप्रिंट या तार्किक संरचना", "कंप्यूटर वायरस सुरक्षा सॉफ्टवेयर", "भौतिक बैकअप हार्ड ड्राइव", "वेबपेज लेआउट"],
      answer: 0,
      exp: "Explanation (En): A schema defines tables, fields, relationships, views, and integrity constraints in a database.\nस्पष्टीकरण (Hi): स्कीमा डेटाबेस का ब्लूप्रिंट या नक्शा होता है जो यह तय करता है कि टेबल, कॉलम और उनके बीच के रिश्ते कैसे होंगे।"
    },
    {
      qEn: "What is a 'Deadlock' in database concurrent transactions?",
      qHi: "डेटाबेस समवर्ती लेनदेन (Concurrent Transactions) में 'डेडलाक' (Deadlock) की स्थिति क्या है?",
      optionsEn: ["A state where two or more transactions are unable to proceed because each holds a lock on a resource needed by the other", "A sudden computer power failure blackout", "A fast internet download speed", "A hardware printer jam"],
      optionsHi: ["एक ऐसी स्थिति जहां दो या दो से अधिक लेनदेन आगे बढ़ने में असमर्थ हैं क्योंकि प्रत्येक के पास दूसरे को आवश्यक संसाधन पर ताला (Lock) है", "बिजली फेल होना", "तेज इंटरनेट", "प्रिंटर जाम"],
      answer: 0,
      exp: "Explanation (En): Database management systems resolve deadlocks by aborting/rolling back one of the transactions so the other can proceed.\nस्पष्टीकरण (Hi): जब दो ट्रांजैक्शन एक-दूसरे द्वारा रोके गए डेटा का इंतजार करते हुए अटक जाते हैं, तो उसे डेटाबेस डेडलॉक कहते हैं।"
    },
    {
      qEn: "What is 'Distributed Database Management System' (DDBMS)?",
      qHi: "'वितरित डेटाबेस प्रबंधन प्रणाली' (DDBMS) से क्या तात्पर्य है?",
      optionsEn: ["A database system where data is stored across multiple physical locations or networked computers, appearing to users as a single database", "A database stored on a single floppy disk", "A spreadsheet file on a local desktop", "An offline word document"],
      optionsHi: ["एक डेटाबेस प्रणाली जहां डेटा कई भौतिक स्थानों या नेटवर्क कंप्यूटरों में संग्रहीत होता है, जो उपयोगकर्ताओं को एक ही डेटाबेस के रूप में दिखाई देता है", "एक फ्लॉपी डिस्क पर संग्रहीत डेटाबेस", "डेस्कटॉप पर स्प्रेडशीट", "ऑफ़लाइन वर्ड डॉक्यूमेंट"],
      answer: 0,
      exp: "Explanation (En): DDBMS manages databases spread across different geographical locations, ensuring synchronized and transparent access.\nस्पष्टीकरण (Hi): DDBMS में डेटा अलग-अलग लोकेशंस या सर्वर पर फैला होता है, लेकिन यूजर को वह एक ही डेटाबेस की तरह काम करता हुआ दिखता है।"
    },
    {
      qEn: "What is a 'Foreign Key Constraint' violation error?",
      qHi: "'फॉरेन की कंस्ट्रेंट' उल्लंघन (Violation) त्रुटि का क्या अर्थ है?",
      optionsEn: ["An error that occurs when a record is inserted or updated with a foreign key value that does not exist in the referenced primary key table", "An error caused by slow internet cables", "An error from a computer virus infection", "An error when a monitor loses power"],
      optionsHi: ["एक ऐसी त्रुटि जो तब होती है जब किसी रिकॉर्ड को फॉरेन की मान के साथ डाला या अपडेट किया जाता है जो संदर्भित प्राथमिक कुंजी तालिका में मौजूद नहीं है", "धीमे इंटरनेट के कारण त्रुटि", "वायरस संक्रमण", "मॉनिटर की पावर जाना"],
      answer: 0,
      exp: "Explanation (En): Referential integrity prevents orphaned records; you cannot reference a non-existent parent key.\nस्पष्टीकरण (Hi): यदि आप किसी टेबल में ऐसी फॉरेन की वैल्यू डालते हैं जो मुख्य टेबल (Primary Key) में है ही नहीं, तो फॉरेन की कंस्ट्रेंट एरर आती है।"
    },
    {
      qEn: "What is the purpose of the 'JOIN' clause in SQL?",
      qHi: "SQL में 'JOIN' क्लॉज का मुख्य कार्य क्या होता है?",
      optionsEn: ["To combine rows from two or more tables based on a related column between them", "To permanently delete duplicate database tables", "To sort records in reverse alphabetical order", "To encrypt database passwords"],
      optionsHi: ["उनके बीच एक संबंधित कॉलम के आधार पर दो या दो से अधिक तालिकाओं की पंक्तियों को संयोजित करना", "डुप्लीकेट टेबल हटाना", "उल्टी वर्णमाला में छांटना", "पासवर्ड एन्क्रिप्ट करना"],
      answer: 0,
      exp: "Explanation (En): SQL Joins (INNER, LEFT, RIGHT, FULL) enable relational querying across multiple normalized tables.\nस्पष्टीकरण (Hi): JOIN का उपयोग दो या दो से अधिक टेबल्स को उनके कॉमन कॉलम के आधार पर आपस में जोड़कर डेटा देखने के लिए किया जाता है।"
    },
    {
      qEn: "What is the difference between 'INNER JOIN' and 'LEFT JOIN'?",
      qHi: "'INNER JOIN' और 'LEFT JOIN' के बीच मुख्य अंतर क्या है?",
      optionsEn: ["INNER JOIN returns only the records that have matching values in both tables, whereas LEFT JOIN returns all records from the left table and matched records from the right table", "LEFT JOIN deletes unmatching rows permanently", "INNER JOIN is only used for numbers", "There is no difference"],
      optionsHi: ["INNER JOIN केवल उन रिकॉर्ड को लौटाता है जिनका दोनों तालिकाओं में मिलान होता है, जबकि LEFT JOIN बाईं तालिका के सभी रिकॉर्ड और दाईं तालिका के मेल खाते रिकॉर्ड लौटाता है", "LEFT JOIN पंक्तियाँ मिटाता है", "INNER JOIN केवल संख्याओं के लिए है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Inner join finds the intersection; left join preserves all rows of the left-hand table even if there are no matches on the right.\nस्पष्टीकरण (Hi): INNER JOIN केवल दोनों टेबल्स के कॉमन मैचिंग डेटा को दिखाता है, जबकि LEFT JOIN बाईं टेबल का पूरा डेटा और दाईं टेबल का मैचिंग डेटा दिखाता है।"
    },
    {
      qEn: "Why is efficient database management crucial for modern enterprise applications?",
      qHi: "आधुनिक उद्यम अनुप्रयोगों (Enterprise Applications) के लिए कुशल डेटाबेस प्रबंधन क्यों महत्वपूर्ण है?",
      optionsEn: ["It ensures high data availability, swift query execution, robust security, scalability, and seamless transaction processing for millions of users", "It is only required for printing paper invoices", "It helps exclusively in playing offline arcade games", "It has no practical business value"],
      optionsHi: ["यह लाखों उपयोगकर्ताओं के लिए उच्च डेटा उपलब्धता, त्वरित क्वेरी निष्पादन, मजबूत सुरक्षा, मापनीयता और सहज लेनदेन प्रसंस्करण सुनिश्चित करता है", "यह केवल कागजी चालान प्रिंट करने के लिए आवश्यक है", "यह विशेष रूप से ऑफ़लाइन आर्केड गेम खेलने में मदद करता है", "इसका कोई व्यावहारिक व्यावसायिक मूल्य नहीं है"],
      answer: 0,
      exp: "Explanation (En): Robust DBMS and SQL practices underpin everything from e-commerce platforms to banking systems, managing massive data securely.\nस्पष्टीकरण (Hi): ई-कॉमर्स से लेकर बैंकिंग तक, हर आधुनिक सॉफ्टवेयर सिस्टम की सफलता उसके मजबूत और तेज डेटाबेस प्रबंधन पर निर्भर करती है।"
    }
  ],
    "Programming and Basics": [
    {
      qEn: "What is a 'Computer Program' primarily defined as?",
      qHi: "'कंप्यूटर प्रोग्राम' (Computer Program) को मुख्य रूप से किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["A sequence of instructions written in a programming language to perform a specific task or solve a problem", "A piece of computer hardware like a motherboard", "An internet cable network router", "A computer monitor screen resolution setting"],
      optionsHi: ["किसी विशिष्ट कार्य को करने या समस्या को हल करने के लिए प्रोग्रामिंग भाषा में लिखे गए निर्देशों का एक क्रम", "मदरबोर्ड जैसा कंप्यूटर हार्डवेयर", "इंटरनेट केबल नेटवर्क राउटर", "मॉनिटर स्क्रीन रेजोल्यूशन सेटिंग"],
      answer: 0,
      exp: "Explanation (En): A computer program is a set of step-by-step instructions that tells the computer's processor how to execute specific operations.\nस्पष्टीकरण (Hi): कंप्यूटर प्रोग्राम निर्देशों का एक ऐसा क्रम होता है जो प्रोसेसर को यह बताता है कि उसे कौन सा विशेष कार्य कैसे करना है।"
    },
    {
      qEn: "What is the difference between 'Machine Language', 'Assembly Language', and 'High-Level Language'?",
      qHi: "'मशीन भाषा' (Machine Language), 'असेंबली भाषा' (Assembly Language) और 'उच्च-स्तरीय भाषा' (High-Level Language) में क्या अंतर है?",
      optionsEn: ["Machine language consists of raw 0s and 1s (binary), Assembly uses short mnemonic codes (like ADD, MOV), and High-Level uses human-readable English-like statements (like Python, C++)", "High-level language is only understood by computer circuit boards directly without translation", "Machine language uses complex English paragraphs", "There is no functional distinction"],
      optionsHi: ["मशीन भाषा में केवल 0 और 1 (बाइनरी) होते हैं, असेंबली में संक्षिप्त कोड (जैसे ADD) होते हैं, और उच्च-स्तरीय भाषा में अंग्रेजी जैसे कथन (जैसे Python, C++) होते हैं", "उच्च-स्तरीय भाषा को कंप्यूटर बिना अनुवाद के समझता है", "मशीन भाषा अंग्रेजी पैराग्राफ का उपयोग करती है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Computers only execute binary machine code directly; assembly and high-level languages require translation via assemblers, compilers, or interpreters.\nस्पष्टीकरण (Hi): कंप्यूटर केवल बाइनरी मशीन भाषा समझता है, जबकि असेंबली और उच्च-स्तरीय भाषाओं (जैसे C++, Python) को अनुवादक की मदद से मशीन कोड में बदलना पड़ता है।"
    },
    {
      qEn: "What is an 'Algorithm' in computer science?",
      qHi: "कंप्यूटर विज्ञान में 'एल्गोरिदम' (Algorithm) से क्या तात्पर्य है?",
      optionsEn: ["A step-by-step procedure or set of rules designed to solve a specific problem or perform a computation", "A permanent hardware storage hard drive", "An internet broadband router cable", "A computer virus protection antivirus tool"],
      optionsHi: ["किसी विशिष्ट समस्या को हल करने या गणना करने के लिए डिजाइन किए गए चरण-दर-चरण निर्देश या नियमों का एक सेट", "स्थायी हार्ड ड्राइव", "इंटरनेट राउटर केबल", "एंटीवायरस टूल"],
      answer: 0,
      exp: "Explanation (En): An algorithm is a logical blueprint or recipe for solving a problem before actual coding begins.\nस्पष्टीकरण (Hi): एल्गोरिदम किसी समस्या को हल करने के लिए स्टेप-by-स्टेप तार्किक चरणों (Logical steps) का एक सेट होता है।"
    },
    {
      qEn: "What is a 'Flowchart' and why is it used in programming?",
      qHi: "'फ्लोचार्ट' (Flowchart) क्या है और प्रोग्रामिंग में इसका उपयोग क्यों किया जाता है?",
      optionsEn: ["A graphical or visual representation of an algorithm or workflow using standardized geometric symbols", "A hardware cooling fan diagram", "An internet cable wiring map", "A spreadsheet formula chart"],
      optionsHi: ["मानकीकृत ज्यामितीय प्रतीकों का उपयोग करके किसी एल्गोरिदम या वर्कफ़्लो का एक ग्राफिकल या दृश्य प्रतिनिधित्व", "हार्डवेयर कूलिंग फैन आरेख", "केबल वायरिंग मैप", "स्प्रेडशीट फॉर्मूला चार्ट"],
      answer: 0,
      exp: "Explanation (En): Flowcharts use shapes (rectangles, diamonds, ovals) to illustrate the logical flow and decision points of a program before writing source code.\nस्पष्टीकरण (Hi): फ्लोचार्ट विभिन्न आकृतियों (आयत, डायमंड आदि) के जरिए किसी प्रोग्राम के लॉजिक और दिशा को चित्र के रूप में समझाने का साधन है।"
    },
    {
      qEn: "What is a 'Variable' in programming?",
      qHi: "प्रोग्रामिंग में 'वेरिएबल' (Variable / चर) क्या होता है?",
      optionsEn: ["A named storage location in computer memory used to hold data values that can be changed during program execution", "A permanent computer hardware cable", "A fixed mathematical constant number that never changes", "An internet web browser tab"],
      optionsHi: ["कंप्यूटर मेमोरी में एक नामित स्टोरेज स्थान जिसका उपयोग डेटा मानों को रखने के लिए किया जाता है जिसे प्रोग्राम निष्पादन के दौरान बदला जा सकता है", "स्थायी कंप्यूटर हार्डवेयर केबल", "एक निश्चित गणितीय अचल संख्या", "इंटरनेट वेब ब्राउज़र टैब"],
      answer: 0,
      exp: "Explanation, (En): Variables act as containers for storing data values (like numbers, text, or booleans) in computer memory during program runs.\nस्पष्टीकरण (Hi): वेरिएबल एक कंटेनर की तरह है जो प्रोग्राम चलते वक्त डेटा या वैल्यू को अपने अंदर स्टोर करता है और जिसकी वैल्यू बदल सकती है।"
    },
    {
      qEn: "What is 'Data Type' in programming languages?",
      qHi: "प्रोग्रामिंग भाषाओं में 'डेटा टाइप' (Data Type) का क्या अर्थ है?",
      optionsEn: ["An attribute associated with a piece of data that tells the computer what kind of value it is (e.g., integer, float, string, boolean)", "The physical color of the computer monitor screen", "The brand name of the keyboard", "The speed of the internet router"],
      optionsHi: ["डेटा के एक टुकड़े से जुड़ा एक गुण जो कंप्यूटर को बताता है कि यह किस प्रकार का मान है (जैसे पूर्णांक, दशमलव, स्ट्रिंग, बूलियन)", "मॉनिटर स्क्रीन का रंग", "कीबोर्ड का ब्रांड नाम", "इंटरनेट राउटर की गति"],
      answer: 0,
      exp: "Explanation (En): Data types define the type of operations that can be performed on data and how much memory is allocated (e.g., int, char, float).\nस्पष्टीकरण (Hi): डेटा टाइप यह तय करता है कि वेरिएबल में किस तरह का डेटा (संख्या, अक्षर, दशमलव या सही/गलत) स्टोर किया जाएगा।"
    },
    {
      qEn: "What is the difference between a 'Syntax Error' and a 'Logical Error'?",
      qHi: "'सिंटैक्स एरर' (Syntax Error) और 'लॉजिकल एरर' (Logical Error) में क्या मुख्य अंतर है?",
      optionsEn: ["Syntax errors violate the grammatical rules of the programming language and prevent compilation, whereas logical errors produce incorrect results due to flawed program logic while compiling successfully", "Logical errors stop the compiler immediately", "Syntax errors only occur after the program finishes running", "There is no difference"],
      optionsHi: ["सिंटैक्स एरर भाषा के व्याकरण नियमों का उल्लंघन करती है और कंपाइल होने से रोकती है, जबकि लॉजिकल एरर गलत लॉजिक के कारण गलत परिणाम देती है लेकिन सफलतापूर्वक कंपाइल हो जाती है", "लॉजिकल एरर कंपाइलर रोकती है", "सिंटैक्स एरर बाद में आती है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Typos and missing semicolons cause syntax errors; faulty calculations or flawed thinking cause logical errors.\nस्पष्टीकरण (Hi): स्पेलिंग या ग्रामर की गलती से 'सिंटैक्स एरर' आती है (प्रोग्राम रन नहीं होता), जबकि गलत सोच या सूत्र से 'लॉजिकल एरर' आती है (प्रोग्राम चलता है पर गलत उत्तर देता है)।"
    },
    {
      qEn: "What is a 'Loop' in programming control structures?",
      qHi: "प्रोग्रामिंग कंट्रोल स्ट्रक्चर में 'लूप' (Loop) का मुख्य कार्य क्या होता है?",
      optionsEn: ["To execute a block of code repeatedly under specified conditions until a certain termination condition is met", "To permanently delete a computer file", "To connect to an external Wi-Fi router", "To print a hard copy document"],
      optionsHi: ["एक निश्चित समाप्ति शर्त पूरी होने तक निर्दिष्ट परिस्थितियों में कोड के एक ब्लॉक को बार-बार निष्पादित करना", "फाइल स्थायी रूप से हटाना", "वाई-फाई राउटर जोड़ना", "हार्ड कॉपी प्रिंट करना"],
      answer: 0,
      exp: "Explanation (En): Loops (like for, while, do-while) automate repetitive tasks without requiring duplicate code writing.\nस्पष्टीकरण (Hi): लूप (जैसे For, While) किसी काम को बार-बार दोहराने (Iteration) के लिए इस्तेमाल किए जाते हैं ताकि बार-बार कोड न लिखना पड़े।"
    },
    {
      qEn: "What is an 'Infinite Loop'?",
      qHi: "'इन्फिनिट लूप' (Infinite Loop / अनंत लूप) से क्या तात्पर्य है?",
      optionsEn: ["A coding error where a loop runs endlessly because its termination condition is never met, consuming CPU resources", "A loop that executes exactly one time", "A loop that deletes the hard disk", "A very fast internet download speed"],
      optionsHi: ["एक कोडिंग त्रुटि जहां एक लूप अंतहीन रूप से चलता है क्योंकि इसकी समाप्ति की शर्त कभी पूरी नहीं होती, जिससे सीपीयू संसाधन खपत होते हैं", "एक बार चलने वाला लूप", "हार्ड डिस्क डिलीट करने वाला लूप", "तेज इंटरनेट स्पीड"],
      answer: 0,
      exp: "Explanation (En): An infinite loop freezes applications or spikes CPU usage because the exit condition was omitted or incorrectly configured.\nस्पष्टीकरण (Hi): यदि लूप में रोकने की सही शर्त न दी जाए, तो वह अनंत काल तक बिना रुके चलता रहता है जिसे इन्फिनिट लूप कहते हैं।"
    },
    {
      qEn: "What is an 'Array' in data structures?",
      qHi: "डेटा स्ट्रक्चर में 'एरे' (Array) क्या होता है?",
      optionsEn: ["A data structure that stores a fixed-size sequential collection of elements of the same data type in contiguous memory locations", "A random collection of unrelated text files", "An internet web browser tab", "A hardware processor cooling fan"],
      optionsHi: ["एक डेटा संरचना जो सन्निहित मेमोरी स्थानों में एक ही डेटा प्रकार के तत्वों का एक निश्चित आकार का क्रमिक संग्रह संग्रहीत करती है", "असंबंधित टेक्स्ट फाइलों का संग्रह", "वेब ब्राउज़र टैब", "कूलिंग फैन"],
      answer: 0,
      exp: "Explanation, (En): Arrays allow efficient indexing and storage of multiple values under a single variable name in contiguous RAM blocks.\nस्पष्टीकरण (Hi): एरे एक ही प्रकार के कई डेटा आइटम्स को एक साथ क्रमबद्ध तरीके से स्टोर करने वाला डेटा स्ट्रक्चर है।"
    },
    {
      qEn: "What is a 'Function' (or Method/Subroutine) in programming?",
      qHi: "प्रोग्रामिंग में 'फंक्शन' (Function / सबरूटीन) का क्या महत्व है?",
      optionsEn: ["A self-contained block of reusable code designed to perform a specific, well-defined task", "A permanent hard drive storage folder", "An operating system kernel error message", "A computer network cable connector"],
      optionsHi: ["एक विशिष्ट, अच्छी तरह से परिभाषित कार्य को करने के लिए डिज़ाइन किए गए पुन ः उपयोग योग्य कोड का एक स्व-निहित ब्लॉक", "स्थायी स्टोरेज फोल्डर", "ऑपरेटिंग सिस्टम एरर मैसेज", "नेटवर्क केबल कनेक्टर"],
      answer: 0,
      exp: "Explanation (En): Functions promote modular programming, allowing code to be written once and called multiple times with different arguments.\nस्पष्टीकरण (Hi): फंक्शन कोड का एक छोटा हिस्सा होता है जिसे एक बार लिखकर प्रोग्राम में बार-बार कॉल (Reuse) किया जा सकता है।"
    },
    {
      qEn: "What is 'Object-Oriented Programming' (OOP)?",
      qHi: "'ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग' (OOP / 객체지향 프로그래밍) की मुख्य अवधारणा क्या है?",
      optionsEn: ["A programming paradigm based on the concept of 'objects' containing data (attributes) and code (methods), emphasizing modularity and code reuse", "A programming style using only binary 0s and 1s", "A method for designing hardware motherboards", "A technique for fixing broken printer cables"],
      optionsHi: ["डेटा (विशेषताएं) और कोड (तरीके) वाले 'ऑब्जेक्ट' की अवधारणा पर आधारित एक प्रोग्रामिंग प्रतिमान, जो मॉड्यूलता और कोड पुनर्खरीद पर जोर देता है", "केवल बाइनरी 0 और 1 का उपयोग", "मदरबोर्ड डिजाइन करने की विधि", "टूटे केबल ठीक करने की तकनीक"],
      answer: 0,
      exp: "Explanation (En): OOP revolves around classes and objects, supporting principles like inheritance, polymorphism, encapsulation, and abstraction.\nस्पष्टीकरण (Hi): OOP (जैसे C++, Java) क्लास और ऑब्जेक्ट्स पर आधारित प्रोग्रामिंग शैली है जो कोड को सुरक्षित और दोबारा इस्तेमाल करने योग्य बनाती है।"
    },
    {
      qEn: "What are the four core pillars of Object-Oriented Programming (OOP)?",
      qHi: "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) के चार मुख्य स्तंभ कौन-कौन से हैं?",
      optionsEn: ["Encapsulation, Inheritance, Polymorphism, and Abstraction", "Compilation, Interpretation, Assembly, and Execution", "Input, Processing, Output, and Storage", "LAN, WAN, MAN, and PAN"],
      optionsHi: ["एनकैप्सुलेशन (Encapsulation), इनहेरिटेंस (Inheritance), पॉलीमॉर्फिज्म (Polymorphism) और एब्स्ट्रक्शन (Abstraction)", "कंपाइलेशन, इंटरप्रिटेशन, असेंबली, निष्पादन", "इनपुट, प्रोसेसिंग, आउटपुट, स्टोरेज", "LAN, WAN, MAN, PAN"],
      answer: 0,
      exp: "Explanation (En): These four principles form the foundation of robust, scalable object-oriented software design.\nस्पष्टीकरण (Hi): एनकैप्सुलेशन, इनहेरिटेंस, पॉलीमॉर्फिज्म और एब्स्ट्रक्शन— ये चारों OOP के मुख्य चार स्तंभ हैं।"
    },
    {
      qEn: "What is 'Inheritance' in Object-Oriented Programming?",
      qHi: "ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग में 'इनहेरिटेंस' (Inheritance / विरासत) का क्या अर्थ है?",
      optionsEn: ["The mechanism by which one class can inherit properties and methods of another class, promoting code reusability", "The process of deleting old computer files", "The copying of virus files across networks", "The encryption of user passwords"],
      optionsHi: ["वह तंत्र जिसके द्वारा एक क्लास दूसरी क्लास के गुणों और तरीकों को विरासत में ले सकती है, जिससे कोड पुनरुपयोग को बढ़ावा मिलता है", "पुरानी फाइलें डिलीट करना", "वायरस कॉपी करना", "पासवर्ड एन्क्रिप्ट करना"],
      answer: 0,
      exp: "Explanation (En): Inheritance allows a child class to derive features from a parent class, eliminating redundant code.\nस्पष्टीकरण (Hi): इनहेरिटेंस के जरिए एक नई क्लास पुरानी (Parent) क्लास के फीचर्स को सीधे इस्तेमाल कर सकती है जिससे कोड दोबारा नहीं लिखना पड़ता।"
    },
    {
      qEn: "What is 'Polymorphism' in programming?",
      qHi: "प्रोग्रामिंग में 'पॉलीमॉर्फिज्म' (Polymorphism / बहुरूपता) से क्या तात्पर्य है?",
      optionsEn: ["The ability of different classes to respond to the same message or method call in different, specific ways", "The ability to run multiple computer monitors at once", "The conversion of binary code into English text", "The storage of data in cloud servers"],
      optionsHi: ["विभिन्न कक्षाओं की एक ही संदेश या विधि कॉल का अलग-अलग, विशिष्ट तरीकों से जवाब देने की क्षमता", "एक साथ कई मॉनिटर चलाना", "बाइनरी का अंग्रेजी अनुवाद", "क्लाउड स्टोरेज"],
      answer: 0,
      exp: "Explanation (En): Polymorphism (meaning 'many forms') allows functions or operators to behave differently based on the objects invoking them.\nस्पष्टीकरण (Hi): पॉलीमॉर्फिज्म का अर्थ है 'अनेक रूप'; एक ही नाम का फंक्शन या ऑपरेटर अलग-अलग परिस्थितियों में अलग तरह से काम कर सकता है।"
    },
    {
      qEn: "What is 'Encapsulation' in software design?",
      qHi: "सॉफ्टवेयर डिजाइन में 'एनकैप्सुलेशन' (Encapsulation) का क्या उद्देश्य है?",
      optionsEn: ["The bundling of data and the methods that operate on that data into a single unit (class), restricting direct access to some components", "The compression of large video files into zip folders", "The physical packaging of computer hardware parts", "The encryption of internet Wi-Fi signals"],
      optionsHi: ["डेटा और उस डेटा पर काम करने वाले तरीकों को एक इकाई (क्लास) में बांधना, कुछ घटकों तक सीधी पहुंच को प्रतिबंधित करना", "वीडियो फाइल जिप करना", "हार्डवेयर की पैकिंग", "वाई-फाई सिग्नल एन्क्रिप्शन"],
      answer: 0,
      exp: "Explanation, (En): Encapsulation hides internal object states and restricts direct data tampering, ensuring data security and controlled access via methods.\nस्पष्टीकरण (Hi): एनकैप्सुलेशन डेटा और उसके फंसे हुए तरीकों को एक क्लास में बंद करके (Capsule की तरह) डेटा सुरक्षा सुनिश्चित करता है।"
    },
    {
      qEn: "What is 'Recursion' in programming?",
      qHi: "प्रोग्रामिंग में 'रिकर्सन' (Recursion / पुनरावृत्ति) किसे कहा जाता है?",
      optionsEn: ["A programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem", "A loop that runs infinitely without stopping", "A hardware power supply circuit failure", "A file backup duplication method"],
      optionsHi: ["एक प्रोग्रामिंग तकनीक जहां एक फ़ंक्शन उसी समस्या के छोटे उदाहरण को हल करने के लिए प्रत्यक्ष या अप्रत्यक्ष रूप से खुद को कॉल करता है", "अनंत लूप", "पावर सप्लाई विफलता", "फाइल बैकअप विधि"],
      answer: 0,
      exp: "Explanation (En): Recursive functions must have a base case to prevent infinite loops, breaking complex problems down into simpler sub-problems.\nस्पष्टीकरण (Hi): रिकर्सन वह प्रक्रिया है जिसमें कोई फंक्शन अपने ही अंदर खुद को दोबारा कॉल करता है (बेस कंडीशन के साथ)।"
    },
    {
      qEn: "What is a 'Pointer' in programming languages like C and C++?",
      qHi: "C और C++ जैसी प्रोग्रामिंग भाषाओं में 'पॉइंटर' (Pointer) क्या होता है?",
      optionsEn: ["A variable whose value is the memory address of another variable", "A computer mouse pointer arrow on screen", "A physical laser presentation clicker", "An internet network cable connector"],
      optionsHi: ["एक ऐसा वेरिएबल जिसका मान किसी अन्य वेरिएबल का मेमोरी एड्रेस (पता) होता है", "स्क्रीन पर माउस पॉइंटर तीर", "लेजर क्लिकर", "नेटवर्क केबल कनेक्टर"],
      answer: 0,
      exp: "Explanation (En): Pointers store direct memory addresses, enabling low-level memory manipulation and efficient array/string handling in C/C++.\nस्पष्टीकरण (Hi): पॉइंटर एक ऐसा चर (Variable) है जो किसी अन्य वेरिएबल के मेमोरी पते (Address) को स्टोर करता है।"
    },
    {
      qEn: "What is the difference between 'Call by Value' and 'Call by Reference' in function parameter passing?",
      qHi: "फंक्शन पैरामीटर पासिंग में 'कॉल बाय वैल्यू' (Call by Value) और 'कॉल बाय रेफरेंस' (Call by Reference) में क्या अंतर है?",
      optionsEn: ["Call by value passes a copy of the actual variable value, whereas call by reference passes the memory address (reference) of the variable, allowing modifications to affect the original", "Call by reference only works on numeric integers", "Call by value deletes original data permanently", "There is no difference"],
      optionsHi: ["कॉल बाय वैल्यू वेरिएबल के मान की एक कॉपी भेजती है, जबकि कॉल बाय रेफरेंस वेरिएबल का मेमोरी एड्रेस भेजती है, जिससे मूल मान में भी बदलाव हो सकता है", "कॉल बाय रेफरेंस केवल पूर्णांकों पर काम करती है", "कॉल बाय वैल्यू डेटा डिलीट करती है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Modifying parameters in call-by-value does not alter the original variable outside the function, whereas call-by-reference modifies the original data directly.\nस्पष्टीकरण (Hi): कॉल बाय वैल्यू में वेरिएबल की नकल भेजी जाती है (मूल डेटा सुरक्षित रहता है), जबकि कॉल बाय रेफरेंस में सीधे मेमोरी का पता भेजा जाता है जिससे मूल डेटा बदल सकता है।"
    },
    {
      qEn: "What is 'Debugging' in the software development lifecycle?",
      qHi: "सॉफ्टवेयर विकास जीवनचक्र में 'डबगिंग' (Debugging) से क्या तात्पर्य है?",
      optionsEn: ["The process of identifying, analyzing, and removing errors (bugs) from computer program source code", "Writing brand new computer code from scratch", "Installing an operating system update", "Scanning the computer keyboard for dust"],
      optionsHi: ["कंप्यूटर प्रोग्राम सोर्स कोड से त्रुटियों (बग्स) की पहचान करने, उनका विश्लेषण करने और उन्हें हटाने की प्रक्रिया", "नया कोड लिखना", "ओएस अपडेट करना", "कीबोर्ड की धूल साफ करना"],
      answer: 0,
      exp: "Explanation (En): Debugging is an essential problem-solving phase where developers test code, trace execution, and fix anomalies.\nस्पष्टीकरण (Hi): प्रोग्राम में मौजूद गलतियों (Bugs) को ढूंढकर उन्हें ठीक करने की प्रक्रिया को 'डबगिंग' कहते हैं।"
    },
    {
      qEn: "What is 'Source Code' versus 'Object Code'?",
      qHi: "'सोर्स कोड' (Source Code) और 'ऑब्जेक्ट कोड' (Object Code) में क्या अंतर है?",
      optionsEn: ["Source code is written by programmers in human-readable high-level languages, whereas object code is the translated machine-readable binary code produced by a compiler", "Source code is binary numbers only", "Object code is written by hand on paper", "There is no difference"],
      optionsHi: ["सोर्स कोड प्रोग्रामर द्वारा उच्च-स्तरीय भाषा में लिखा जाता है, जबकि ऑब्जेक्ट कोड कंपाइलर द्वारा उत्पादित मशीन-पढ़ने योग्य बाइनरी कोड होता है", "सोर्स कोड बाइनरी है", "ऑब्जेक्ट कोड हाथ से लिखा जाता है", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation, (En): Compilers take human-authored source code as input and output machine-executable object code.\nस्पष्टीकरण (Hi): प्रोग्रामर द्वारा अंग्रेजी जैसी भाषा में लिखा गया प्रोग्राम 'सोर्स कोड' है, जिसे कंपाइलर बदलकर मशीन समझने योग्य 'ऑब्जेक्ट कोड' बनाता है।"
    },
    {
      qEn: "What is 'Software Version Control' (like Git) used for?",
      qHi: "'सॉफ्टवेयर वर्जन कंट्रोल' (जैसे Git) का उपयोग किस कार्य के लिए किया जाता है?",
      optionsEn: ["To track and manage changes to source code over time, enabling multiple developers to collaborate without overwriting each other's work", "To clean computer virus files automatically", "To boost internet broadband download speeds", "To print hard copy documents"],
      optionsHi: ["समय के साथ सोर्स कोड में बदलावों को ट्रैक और प्रबंधित करना, जिससे कई डेवलपर्स को एक-दूसरे के काम को ओवरराइट किए बिना सहयोग करने की अनुमति मिलती है", "वायरस साफ करना", "इंटरनेट स्पीड बढ़ाना", "दस्तावेज प्रिंट करना"],
      answer: 0,
      exp: "Explanation (En): Version control systems (VCS) like Git and GitHub maintain history logs, branch development, and merge code seamlessly.\nस्पष्टीकरण (Hi): Git जैसे वर्जन कंट्रोल टूल्स सॉफ्टवेयर कोड के हर बदलाव का इतिहास सुरक्षित रखते हैं और टीमवर्क में कोडिंग को आसान बनाते हैं।"
    },
    {
      qEn: "What is a 'Queue' in data structures?",
      qHi: "डेटा स्ट्रक्चर में 'क्यू' (Queue) की मुख्य कार्यप्रणाली क्या होती है?",
      optionsEn: ["A linear data structure that follows the FIFO (First In, First Out) principle, where elements are added at the back and removed from the front", "A data structure following LIFO principle", "A random storage bucket for text files", "A circular internet network cable"],
      optionsHi: ["एक रैखिक डेटा संरचना जो FIFO (फर्स्ट इन, फर्स्ट आउट) सिद्धांत का पालन करती है, जहां पीछे तत्व जोड़े जाते हैं और सामने से हटाए जाते हैं", "LIFO सिद्धांत", "रैंडम स्टोरेज बाल्टी", "सर्कुलर नेटवर्क केबल"],
      answer: 0,
      exp: "Explanation (En): Like a ticket counter line, a queue processes elements in the exact order they arrive (First In, First Out).\nस्पष्टीकरण (Hi): क्यू (Queue) FIFO सिद्धांत पर काम करता है (जैसे लाइन में जो पहले आया, उसे पहले सेवा मिलेगी)।"
    },
    {
      qEn: "What is a 'Stack' in data structures?",
      qHi: "डेटा स्ट्रक्चर में 'स्टैक' (Stack) की मुख्य कार्यप्रणाली क्या होती है?",
      optionsEn: ["A linear data structure that follows the LIFO (Last In, First Out) principle, where insertions and deletions occur only at one end called the top", "A data structure following FIFO principle", "A sorted alphabetical database table", "An internet router configuration file"],
      optionsHi: ["एक रैखिक डेटा संरचना जो LIFO (लास्ट इन, फर्स्ट आउट) सिद्धांत का पालन करती है, जहां सम्मिलन और विलोपन केवल एक छोर पर होता है जिसे शीर्ष (Top) कहा जाता है", "FIFO सिद्धांत", "सॉर्टेड डेटाबेस टेबल", "राउटर फाइल"],
      answer: 0,
      exp: "Explanation (En): Like a stack of plates, the last item added to a stack is the first one to be removed (Last In, First Out).\nस्पष्टीकरण (Hi): स्टैक LIFO सिद्धांत पर काम करता है (जैसे प्लेटों का ढेर— जो प्लेट सबसे ऊपर यानी बाद में रखी जाती है, वही सबसे पहले उठाई जाती है)।"
    },
    {
      qEn: "What is 'Software Testing' in the development life cycle?",
      qHi: "विकास जीवनचक्र में 'सॉफ्टवेयर टेस्टिंग' (Software Testing) का मुख्य उद्देश्य क्या होता है?",
      optionsEn: ["To evaluate a software application to find bugs, ensure it meets functional requirements, and deliver a reliable user experience", "To permanently delete software files", "To format computer hard disk drives", "To increase computer screen resolution"],
      optionsHi: ["बग्स खोजने, यह सुनिश्चित करने के लिए कि यह कार्यात्मक आवश्यकताओं को पूरा करता है, और एक विश्वसनीय उपयोगकर्ता अनुभव प्रदान करने के लिए एक सॉफ्टवेयर एप्लिकेशन का मूल्यांकन करना", "सॉफ्टवेयर फाइल डिलीट करना", "हार्ड डिस्क फॉर्मेट करना", "स्क्रीन रेजोल्यूशन बढ़ाना"],
      answer: 0,
      exp: "Explanation (En): Testing (unit, integration, system, user acceptance) verifies that software functions correctly without crashes or security flaws.\nस्पष्टीकरण (Hi): सॉफ्टवेयर में कमियां ढूंढने और यह सुनिश्चित करने के लिए कि प्रोग्राम बिना किसी गलती के सही चल रहा है, 'टेस्टिंग' की जाती है।"
    },
    {
      qEn: "What is an 'API' (Application Programming Interface)?",
      qHi: "'API' (एप्लीकेशन प्रोग्रामिंग इंटरफेस) का मुख्य कार्य क्या होता है?",
      optionsEn: ["A set of rules and protocols that allows different software applications to communicate and exchange data with each other", "A computer monitor display cable", "An antivirus malware scanner", "A physical network ethernet switch"],
      optionsHi: ["नियमों और प्रोटोकॉल का एक सेट जो विभिन्न सॉफ्टवेयर अनुप्रयोगों को एक-दूसरे के साथ संवाद करने और डेटा का आदान-प्रदान करने की अनुमति देता है", "मॉनिटर डिस्प्ले केबल", "एंटीवायरस स्कैनर", "ईथरनेट स्विच"],
      answer: 0,
      exp: "Explanation (En): APIs act as messengers allowing third-party software (like a travel app) to request data from services (like Google Maps).\nस्पष्टीकरण (Hi): एपीआई (API) अलग-अलग सॉफ्टवेयरों को आपस में बात करने और डेटा साझा करने का जरिया प्रदान करता है।"
    },
    {
      qEn: "What is 'Agile Software Development' methodology?",
      qHi: "'एजाइल सॉफ्टवेयर डेवलपमेंट' (Agile) कार्यप्रणाली की मुख्य विशेषता क्या है?",
      optionsEn: ["An iterative approach to project management and software development that helps teams deliver value to customers faster through continuous collaboration and small releases", "A rigid, linear model where testing happens only at the very end", "A method for writing code using only punch cards", "A hardware manufacturing standard"],
      optionsHi: ["परियोजना प्रबंधन और सॉफ्टवेयर विकास के लिए एक पुनरावृत्ति दृष्टिकोण जो टीमों को निरंतर सहयोग के माध्यम से ग्राहकों को तेजी से मूल्य प्रदान करने में मदद करता है", "कठोर रैखिक मॉडल", "पंच कार्ड विधि", "हार्डवेयर विनिर्माण मानक"],
      answer: 0,
      exp: "Explanation (En): Agile prioritizes flexibility, customer feedback, and small iterative sprints over rigid long-term planning (like the Waterfall model).\nस्पष्टीकरण (Hi): एजाइल एक लचीली विकास पद्धति है जिसमें पूरे प्रोजेक्ट को छोटे-छोटे हिस्सों (Sprints) में बांटकर लगातार सुधार के साथ सॉफ्टवेयर बनाया जाता है।"
    },
    {
      qEn: "What is 'Big O Notation' used for in computer science?",
      qHi: "कंप्यूटर विज्ञान में 'बिग ओ नोटेशन' (Big O Notation) का उपयोग किस लिए किया जाता है?",
      optionsEn: ["To describe the performance or complexity of an algorithm, specifically how its execution time or space requirements grow as input size increases", "To measure the physical weight of computer server racks", "To calculate internet download bandwidth speeds", "To track computer virus infection rates"],
      optionsHi: ["किसी एल्गोरिदम के प्रदर्शन या जटिलता का वर्णन करने के लिए, विशेष रूप से इनपुट आकार बढ़ने पर उसका निष्पादन समय या स्थान आवश्यकता कैसे बढ़ती है", "सर्वर रैक का वजन", "इंटरनेट डाउनलोड स्पीड", "वायरस संक्रमण दर"],
      answer: 0,
      exp: "Explanation (En): Big O notation classifies algorithms according to how their running time or space requirements scale (e.g., O(n), O(log n)).\nस्पष्टीकरण (Hi): बिग ओ नोटेशन (Big O) किसी एल्गोरिदम की गति (Time complexity) और मेमोरी उपयोग (Space complexity) का आकलन करने का गणितीय पैमाना है।"
    },
    {
      qEn: "Why is a strong foundation in programming and basic computer science principles vital for technological literacy?",
      qHi: "तकनीकी साक्षरता के लिए प्रोग्रामिंग और बुनियादी कंप्यूटर विज्ञान के सिद्धांतों में मजबूत पकड़ होना क्यों आवश्यक है?",
      optionsEn: ["It fosters computational thinking, problem-solving skills, and the ability to build innovative digital solutions in an increasingly automated world", "It is only useful for fixing office printer paper jams", "It has no relevance outside of video game creation", "It is required solely for typing emails"],
      optionsHi: ["यह कम्प्यूटेशनल सोच, समस्या-समाधान कौशल और एक स्वचालित दुनिया में नवीन डिजिटल समाधान बनाने की क्षमता को बढ़ावा देता है", "केवल प्रिंटर ठीक करने के लिए", "वीडियो गेम बनाने के बाहर कोई उपयोग नहीं", "केवल ईमेल टाइप करने के लिए"],
      answer: 0,
      exp: "Explanation (En): Programming concepts enable individuals to automate tasks, comprehend digital systems, and drive technological innovation across all industries.\nस्पष्टीकरण (Hi): प्रोग्रामिंग और बुनियादी सिद्धांतों की समझ इंसान को तार्किक रूप से सोचना, समस्याएं सुलझाना और आधुनिक डिजिटल दुनिया में नए समाधान तैयार करना सिखाती है।"
    }
  ]
};
