window.scienceData = {
  name: "Science",
  sections: [
    {
      id: "sci_physics",
      name: "Physics (भौतिक विज्ञान)",
      chapters: [
        { id: 301, title: "Units and Measurement (मात्रक और मापन)", totalQuestions: 30 },
        { id: 302, title: "Motion and Force (गति और बल)", totalQuestions: 30 },
        { id: 303, title: "Work, Energy and Power (कार्य, ऊर्जा और शक्ति)", totalQuestions: 30 },
        { id: 304, title: "Gravitation (गुरुत्वाकर्षण)", totalQuestions: 30 },
        { id: 305, title: "General Properties of Matter (पदार्थ के सामान्य गुण)", totalQuestions: 30 },
        { id: 306, title: "Heat and Temperature (ऊष्मा और ताप)", totalQuestions: 30 },
        { id: 307, title: "Light (प्रकाशिकी)", totalQuestions: 30 },
        { id: 308, title: "Sound (ध्वनि)", totalQuestions: 30 },
        { id: 309, title: "Electricity (विद्युत धारा)", totalQuestions: 30 },
        { id: 310, title: "Magnetism (चुंबकत्व)", totalQuestions: 30 },
        { id: 311, title: "Modern Physics (आधुनिक भौतिकी)", totalQuestions: 30 }
      ]
    },
    {
      id: "sci_chemistry",
      name: "Chemistry (रसायन विज्ञान)",
      chapters: [
        { id: 312, title: "Matter and its States (पदार्थ और उसकी अवस्थाएं)", totalQuestions: 30 },
        { id: 313, title: "Atomic Structure (परमाणु संरचना)", totalQuestions: 30 },
        { id: 314, title: "Periodic Table (आवर्त सारणी)", totalQuestions: 30 },
        { id: 315, title: "Chemical Bonding (रासायनिक बंधन)", totalQuestions: 30 },
        { id: 316, title: "Acids, Bases and Salts (अम्ल, क्षार और लवण)", totalQuestions: 30 },
        { id: 317, title: "Metals and Non-metals (धातु और अधातु)", totalQuestions: 30 },
        { id: 318, title: "Carbon and its Compounds (कार्बन और उसके यौगिक)", totalQuestions: 30 },
        { id: 319, title: "Fuels (ईंधन)", totalQuestions: 30 },
        { id: 320, title: "Solutions (विलयन)", totalQuestions: 30 },
        { id: 321, title: "Chemical Reactions (रासायनिक अभिक्रियाएं)", totalQuestions: 30 }
      ]
    },
    {
      id: "sci_biology",
      name: "Biology (जीव विज्ञान)",
      chapters: [
        { id: 322, title: "Cell: The Unit of Life (कोशिका: जीवन की इकाई)", totalQuestions: 30 },
        { id: 323, title: "Tissues (ऊतक)", totalQuestions: 30 },
        { id: 324, title: "Genetics (आनुवंशिकी)", totalQuestions: 30 },
        { id: 325, title: "Plant Kingdom (पादप जगत)", totalQuestions: 30 },
        { id: 326, title: "Human Digestive System (मानव पाचन तंत्र)", totalQuestions: 30 },
        { id: 327, title: "Circulatory System (रक्त परिसंचरण तंत्र)", totalQuestions: 30 },
        { id: 328, title: "Nervous System (तंत्रिका तंत्र)", totalQuestions: 30 },
        { id: 329, title: "Endocrine Glands (अंतःस्रावी ग्रंथियां)", totalQuestions: 30 },
        { id: 330, title: "Vitamins and Diseases (विटामिन और रोग)", totalQuestions: 30 },
        { id: 331, title: "Respiratory System (श्वसन तंत्र)", totalQuestions: 30 },
        { id: 332, title: "Ecology (पारिस्थितिकी)", totalQuestions: 30 }
      ]
    },
    {
      id: "sci_earth",
      name: "Earth Science (पृथ्वी विज्ञान)",
      chapters: [
        { id: 333, title: "Internal Structure of Earth (पृथ्वी की आंतरिक संरचना)", totalQuestions: 30 },
        { id: 334, title: "Rocks and Minerals (चट्टानें और खनिज)", totalQuestions: 30 },
        { id: 335, title: "Earthquakes and Volcanoes (भूकंप और ज्वालामुखी)", totalQuestions: 30 },
        { id: 336, title: "Atmosphere (वायुमंडल)", totalQuestions: 30 },
        { id: 337, title: "Oceanography (महासागर विज्ञान)", totalQuestions: 30 },
        { id: 338, title: "Structure and Composition of the Atmosphere (वायुमंडल की संरचना और संगठन)", totalQuestions: 30 },
        { id: 339, title: "Oceans and Hydrosphere (महासागर और जलमंडल)", totalQuestions: 30 },
        { id: 340, title: "Geological Time Scale and Earth's History (भूवैज्ञानिक समय सारणी और पृथ्वी का इतिहास)", totalQuestions: 30 }
      ]
    },
    {
      id: "sci_env",
      name: "Environmental Science (पर्यावरण विज्ञान)",
      chapters: [
        { id: 341, title: "Ecosystem (पारिस्थितिकी तंत्र)", totalQuestions: 30 },
        { id: 342, title: "Biodiversity Conservation (जैव विविधता संरक्षण)", totalQuestions: 30 },
        { id: 343, title: "Environmental Pollution (पर्यावरण प्रदूषण)", totalQuestions: 30 },
        { id: 344, title: "Climate Change (जलवायु परिवर्तन)", totalQuestions: 30 },
        { id: 345, title: "Natural Resources (प्राकृतिक संसाधन)", totalQuestions: 30 },
        { id: 346, title: "Environmental Policies, Laws, and Ethics (पर्यावरण नीतियां, कानून और नैतिकता)", totalQuestions: 30 }
      ]
    }
  ]
};
registerQuestions({
"Units and Measurement (मात्रक और मापन)": [
{
qEn: "What is the SI unit of electric current?",
qHi: "विद्युत धारा (electric current) का SI मात्रक क्या है?",
optionsEn: ["Ampere", "Volt", "Ohm", "Coulomb"],
optionsHi: ["एम्पीयर (Ampere)", "वोल्ट", "ओम", "कूलाम"],
answer: 0,
exp: "Explanation (En): The SI unit of electric current is the Ampere (A), which is one of the seven base SI units.\nस्पष्टीकरण (Hi): विद्युत धारा का SI मात्रक एम्पीयर (Ampere) है, जो सात मूल SI इकाइयों में से एक है।"
},
{
qEn: "Light-year is a unit of:",
qHi: "प्रकाश वर्ष (Light-year) किसकी इकाई है?",
optionsEn: ["Distance", "Time", "Speed of light", "Intensity of light"],
optionsHi: ["दूरी (Distance)", "समय", "प्रकाश की गति", "प्रकाश की तीव्रता"],
answer: 0,
exp: "Explanation (En): A light-year is the distance that light travels in a vacuum in one year (9.46 \times 10^{15} m).\nस्पष्टीकरण (Hi): प्रकाश वर्ष निर्वात में एक वर्ष में प्रकाश द्वारा तय की गई दूरी है।"
},
{
qEn: "Which of the following is a derived physical quantity?",
qHi: "निम्नलिखित में से कौन सी एक व्युत्पन्न (derived) भौतिक राशि है?",
optionsEn: ["Velocity", "Mass", "Length", "Time"],
optionsHi: ["वेग (Velocity)", "द्रव्यमान", "लंबाई", "समय"],
answer: 0,
exp: "Explanation (En): Velocity is derived from length and time (v = d/t). Mass, length, and time are base quantities.\nस्पष्टीकरण (Hi): वेग लंबाई और समय से व्युत्पन्न होता है, जबकि द्रव्यमान, लंबाई और समय मूल राशियाँ हैं।"
},
{
qEn: "What is the dimensional formula of Planck's constant (h)?",
qHi: "प्लांक स्थिरांक (h) का विमीय सूत्र (dimensional formula) क्या है?",
optionsEn: ["[ML^2T^{-1}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[ML^{-1}T^{-1}]"],
optionsHi: ["[ML^2T^{-1}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[ML^{-1}T^{-1}]"],
answer: 0,
exp: "Explanation (En): Energy E = h \nu \Rightarrow h = E / \nu = [ML^2T^{-2}] / [T^{-1}] = [ML^2T^{-1}].\nस्पष्टीकरण (Hi): ऊर्जा E = h\nu से प्लांक नियतांक की विमा [ML^2T^{-1}] होती है।"
},
{
qEn: "Parsec is the unit of:",
qHi: "पारसेक (Parsec) किसकी इकाई है?",
optionsEn: ["Astronomical distance", "Time", "Brightness", "Mass"],
optionsHi: ["खगोलीय दूरी (Astronomical distance)", "समय", "चमक", "द्रव्यमान"],
answer: 0,
exp: "Explanation (En): Parsec (parallax second) is the largest astronomical unit of distance, equal to about 3.26 light-years.\nस्पष्टीकरण (Hi): पारसेक दूरी की सबसे बड़ी खगोलीय इकाई है (1 पारसेक = 3.26 प्रकाश वर्ष)।"
},
{
qEn: "Which physical quantity has the same dimensions as impulse?",
qHi: "किस भौतिक राशि की विमाएँ आवेग (impulse) के समान होती हैं?",
optionsEn: ["Momentum", "Work", "Pressure", "Power"],
optionsHi: ["संवेग (Momentum)", "कार्य", "दाب", "शक्ति"],
answer: 0,
exp: "Explanation (En): Impulse = Force \times Time = [MLT^{-2}][T] = [MLT^{-1}]. Momentum = Mass \times Velocity = [MLT^{-1}].\nस्पष्टीकरण (Hi): आवेग और संवेग दोनों की विमा [MLT^{-1}] होती है।"
},
{
qEn: "What is the SI unit of luminous intensity?",
qHi: "ज्योति तीव्रता (luminous intensity) का SI मात्रक क्या है?",
optionsEn: ["Candela", "Lux", "Lumen", "Watt"],
optionsHi: ["कैंडेला (Candela)", "लक्स", "लुमेन", "वाट"],
answer: 0,
exp: "Explanation (En): Candela (cd) is the base SI unit for luminous intensity.\nस्पष्टीकरण (Hi): ज्योति तीव्रता का मूल SI मात्रक कैंडेला (Candela) है।"
},
{
qEn: "One nanometer is equal to:",
qHi: "एक नैनोमीटर (nanometer) किसके बराबर होता है?",
optionsEn: ["10^{-9} m", "10^{-6} m", "10^{-12} m", "10^{-15} m"],
optionsHi: ["10^{-9} m", "10^{-6} m", "10^{-12} m", "10^{-15} m"],
answer: 0,
exp: "Explanation (En): Nano represents a factor of 10^{-9} meters.\nस्पष्टीकरण (Hi): नैनो का अर्थ 10^{-9} मीटर होता है।"
},
{
qEn: "Dimensional formula of universal gravitational constant (G) is:",
qHi: "सार्वत्रिक गुरुत्वाकर्षण नियतांक (G) का विमीय सूत्र है:",
optionsEn: ["[M^{-1}L^3T^{-2}]", "[ML^2T^{-2}]", "[MLT^{-2}]", "[M^{-1}L^2T^{-2}]"],
optionsHi: ["[M^{-1}L^3T^{-2}]", "[ML^2T^{-2}]", "[MLT^{-2}]", "[M^{-1}L^2T^{-2}]"],
answer: 0,
exp: "Explanation (En): F = G m_1 m_2 / r^2 \Rightarrow G = Fr^2 / (m_1m_2) = ([MLT^{-2}][L^2]) / [M^2] = [M^{-1}L^3T^{-2}].\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण नियम से G की विमा [M^{-1}L^3T^{-2}] प्राप्त होती है।"
},
{
qEn: "Which pair of physical quantities has different dimensions?",
qHi: "भौतिक राशियों के किस जोड़े की विमाएँ भिन्न हैं?",
optionsEn: ["Work and Torque", "Pressure and Stress", "Strain and Angle", "Force and Impulse"],
optionsHi: ["कार्य और बल आघूर्ण", "दाब और प्रतिबल", "विकृति और कोण", "बल और आवेग"],
answer: 3,
exp: "Explanation (En): Force ([MLT^{-2}]) and Impulse ([MLT^{-1}]) have different dimensions. Work/torque, pressure/stress, and strain/angle share dimensions.\nस्पष्टीकरण (Hi): बल और आवेग की विमाएँ भिन्न होती हैं, जबकि बाकी तीन जोड़ियों की विमाएँ समान हैं।"
},
{
qEn: "What is the SI unit of pressure?",
qHi: "दाब (pressure) का SI मात्रक क्या है?",
optionsEn: ["Pascal", "Joule", "Watt", "Newton"],
optionsHi: ["पास्कल (Pascal)", "जूल", "वाट", "न्यूटन"],
answer: 0,
exp: "Explanation (En): Pressure = Force / Area. SI unit is Pascal (Pa) or \text{N/m}^2.\nस्पष्टीकरण (Hi): दाब का SI मात्रक पास्कल (Pascal) या न्यूटन प्रति वर्ग मीटर है।"
},
{
qEn: "The unit of magnetic flux is:",
qHi: "चुंबकीय फ्लक्स (magnetic flux) का मात्रक है:",
optionsEn: ["Weber", "Tesla", "Henry", "Gauss"],
optionsHi: ["वेबर (Weber)", "टेसला", "हेनरी", "गाउस"],
answer: 0,
exp: "Explanation (En): Weber (Wb) is the SI unit of magnetic flux. Tesla is for magnetic field (flux density).\nस्पष्टीकरण (Hi): चुंबकीय फ्लक्स का SI मात्रक वेबर (Weber) है, जबकि टेसला चुंबकीय क्षेत्र की तीव्रता का मात्रक है।"
},
{
qEn: "How many astronomical units (AU) make 1 parsec approximately?",
qHi: "लगभग कितने खगोलीय मात्रक (AU) मिलकर 1 पारसेक बनाते हैं?",
optionsEn: ["2.06 \times 10^5", "10^6", "3 \times 10^8", "9.46 \times 10^{15}"],
optionsHi: ["2.06 \times 10^5", "10^6", "3 \times 10^8", "9.46 \times 10^{15}"],
answer: 0,
exp: "Explanation (En): 1 parsec is equal to 2.06 \times 10^5 AU (Astronomical Units).\nस्पष्टीकरण (Hi): 1 पारसेक 2.06 \times 10^5 खगोलीय यूनिट के बराबर होता है।"
},
{
qEn: "Which instrument is used to measure extremely small time intervals accurately?",
qHi: "अत्यंत छोटे समय अंतरालों को सटीक रूप से मापने के लिए किस उपकरण का उपयोग किया जाता है?",
optionsEn: ["Atomic clock", "Hydrometer", "Barometer", "Spherometer"],
optionsHi: ["परमाणु घड़ी (Atomic clock)", "हाइड्रोमीटर", "बैरोमीटर", "स्फेरोमीटर"],
answer: 0,
exp: "Explanation (En): Atomic clocks (like cesium clocks) provide extreme precision in measuring time intervals.\nस्पष्टीकरण (Hi): परमाणु घड़ी समय के अत्यंत सूक्ष्म अंतरालों को अत्यधिक सटीकता से माप सकती है।"
},
{
qEn: "The dimensional formula [ML^2T^{-2}] represents which quantity?",
qHi: "विमीय सूत्र [ML^2T^{-2}] किस राशि को निरूपित करता है?",
optionsEn: ["Work / Energy / Torque", "Power", "Momentum", "Pressure"],
optionsHi: ["कार्य / ऊर्जा / बल आघूर्ण", "शक्ति", "संवेग", "दाब"],
answer: 0,
exp: "Explanation (En): Work = Force \times Displacement = [MLT^{-2}][L] = [ML^2T^{-2}]. Energy and torque have the same dimension.\nस्पष्टीकरण (Hi): कार्य, ऊर्जा और बल आघूर्ण तीनों का विमीय सूत्र [ML^2T^{-2}] होता है।"
},
{
qEn: "One angstrom (\AA) is equal to:",
qHi: "एक एंगस्ट्रॉम (\AA) किसके बराबर होता है?",
optionsEn: ["10^{-10} m", "10^{-8} m", "10^{-9} m", "10^{-12} m"],
optionsHi: ["10^{-10} m", "10^{-8} m", "10^{-9} m", "10^{-12} m"],
answer: 0,
exp: "Explanation (En): 1 \AA = 10^{-10} meters, commonly used to measure atomic radii and wavelength.\nस्पष्टीकरण (Hi): 1 \AA = 10^{-10} मीटर होता है, जिसका उपयोग तरंगदैर्ध्य मापने में होता है।"
},
{
qEn: "Which of the following is dimensionless?",
qHi: "निम्नलिखित में से कौन सी राशि विमाहीन (dimensionless) है?",
optionsEn: ["Strain", "Force", "Energy", "Momentum"],
optionsHi: ["विकृति (Strain)", "बल", "ऊर्जा", "संवेग"],
answer: 0,
exp: "Explanation (En): Strain is the ratio of change in dimension to original dimension, making it a dimensionless quantity.\nस्पष्टीकरण (Hi): विकृति (Strain) लंबाई में परिवर्तन और मूल लंबाई का अनुपात है, अतः यह विमाहीन है।"
},
{
qEn: "What is the SI unit of viscosity coefficient (\eta)?",
qHi: "श्यानता गुणांक (coefficient of viscosity, \eta) का SI मात्रक क्या है?",
optionsEn: ["Poseuille (or Pa·s)", "N/m", "Joule-second", "Watt/m"],
optionsHi: ["पॉस्युइले (Pa·s / Poiseuille)", "N/m", "जूल-सेकंड", "वाट/मीटर"],
answer: 0,
exp: "Explanation (En): SI unit of viscosity is Pascal-second (Pa·s) or Poiseuille (Pl).\nस्पष्टीकरण (Hi): श्यानता गुणांक का SI मात्रक पास्कल-सेकंड (Pa·s) या पॉस्युइले है।"
},
{
qEn: "Parallactic second (parsec) is a unit of:",
qHi: "पारलैैक्टिक सेकंड (पारसेक) किसकी इकाई है?",
optionsEn: ["Distance", "Time", "Velocity", "Angle"],
optionsHi: ["दूरी (Distance)", "समय", "वेग", "कोण"],
answer: 0,
exp: "Explanation (En): Parsec is a unit of astronomical distance.\nस्पष्टीकरण (Hi): पारसेक खगोलीय दूरी की एक इकाई है।"
},
{
qEn: "What is the dimensional formula of frequency?",
qHi: "आवृत्ति (frequency) का विमीय सूत्र क्या है?",
optionsEn: ["[T^{-1}]", "[LT^{-1}]", "[MLT^{-2}]", "[T]"],
optionsHi: ["[T^{-1}]", "[LT^{-1}]", "[MLT^{-2}]", "[T]"],
answer: 0,
exp: "Explanation (En): Frequency \nu = 1 / \text{Time period} = [T^{-1}].\nस्पष्टीकरण (Hi): आवृत्ति आवर्तकाल का व्युत्क्रम होती है, अतः इसकी विमा [T^{-1}] है।"
},
{
qEn: "Which instrument is used for measuring high temperatures (such as the Sun)?",
qHi: "उच्च तापमान (जैसे सूर्य का तापमान) मापने के लिए किस उपकरण का उपयोग किया जाता है?",
optionsEn: ["Pyrometer", "Thermocouple", "Barometer", "Hydrometer"],
optionsHi: ["पायरोमीटर (Pyrometer)", "थर्मोकपल", "बैरोमीटर", "हाइड्रोमीटर"],
answer: 0,
exp: "Explanation (En): Radiation pyrometers are used to measure very high temperatures without direct contact.\nस्पष्टीकरण (Hi): उच्च तापमान को दूर से मापने के लिए विकिरण पायरोमीटर (Pyrometer) का उपयोग किया जाता है।"
},
{
qEn: "Slug is the unit of mass in which system of units?",
qHi: "स्लग (Slug) किस इकाई प्रणाली में द्रव्यमान का मात्रक है?",
optionsEn: ["FPS system", "CGS system", "SI system", "MKS system"],
optionsHi: ["FPS प्रणाली", "CGS प्रणाली", "SI प्रणाली", "MKS प्रणाली"],
answer: 0,
exp: "Explanation (En): Slug is the unit of mass in the British FPS (Foot-Pound-Second) system.\nस्पष्टीकरण (Hi): स्लग ब्रिटिश FPS प्रणाली में द्रव्यमान की इकाई है।"
},
{
qEn: "What is the dimensional formula of surface tension?",
qHi: "पृष्ठ तनाव (surface tension) का विमीय सूत्र क्या है?",
optionsEn: ["[MT^{-2}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[MT^{-1}]"],
optionsHi: ["[MT^{-2}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[MT^{-1}]"],
answer: 0,
exp: "Explanation (En): Surface tension = Force / Length = [MLT^{-2}] / [L] = [MT^{-2}].\nस्पष्टीकरण (Hi): पृष्ठ तनाव = बल / लंबाई = [MLT^{-2}] / [L] = [MT^{-2}]।"
},
{
qEn: "One barrel of oil is approximately equal to how many liters?",
qHi: "तेल का एक बैरल लगभग कितने लीटर के बराबर होता है?",
optionsEn: ["159 liters", "100 liters", "200 liters", "50 liters"],
optionsHi: ["159 लीटर", "100 लीटर", "200 लीटर", "50 लीटर"],
answer: 0,
exp: "Explanation (En): One petroleum barrel is defined as exactly 42 US gallons, which is approximately 159 liters.\nस्पष्टीकरण (Hi): तेल का एक बैरल लगभग 159 लीटर के बराबर होता है।"
},
{
qEn: "Which of the following quantities has the unit Siemens?",
qHi: "निम्नलिखित में से किस राशि का मात्रक सीमेंस (Siemens) है?",
optionsEn: ["Electrical conductance", "Resistance", "Capacitance", "Inductance"],
optionsHi: ["विद्युत चालकता (Conductance)", "प्रतिरोध", "धारिता", "प्रेरकत्व"],
answer: 0,
exp: "Explanation (En): Siemens (S) is the SI unit of electrical conductance (reciprocal of resistance).\nस्पष्टीकरण (Hi): सीमेंस (S) विद्युत चालकता (conductance) का SI मात्रक है।"
},
{
qEn: "The error in the measurement of radius of a sphere is 2%. What is the error in its volume?",
qHi: "एक गोले की त्रिज्या के मापन में त्रुटि 2% है। उसके आयतन के मापन में त्रुटि कितनी होगी?",
optionsEn: ["6%", "2%", "4%", "8%"],
optionsHi: ["6%", "2%", "4%", "8%"],
answer: 0,
exp: "Explanation (En): Volume V = \frac{4}{3}\pi r^3. Fractional error \Delta V / V = 3 (\Delta r / r) = 3 \times 2\\% = 6\\%.\nस्पष्टीकरण (Hi): आयतन V \propto r^3, इसलिए अधिकतम त्रुटि 3 \times 2\\% = 6\\% होगी।"
},
{
qEn: "Astronomical unit (AU) is defined as the average distance between:",
qHi: "खगोलीय इकाई (AU) को किसके बीच की औसत दूरी के रूप में परिभाषित किया गया है?",
optionsEn: ["Earth and Sun", "Earth and Moon", "Sun and Jupiter", "Sun and Pluto"],
optionsHi: ["पृथ्वी और सूर्य", "पृथ्वी और चंद्रमा", "सूर्य और बृहस्पति", "सूर्य और प्लूटो"],
answer: 0,
exp: "Explanation (En): 1 AU is approximately 1.496 \times 10^{11} meters, the average distance from Earth to the Sun.\nस्पष्टीकरण (Hi): 1 AU पृथ्वी और सूर्य के बीच की औसत दूरी है।"
},
{
qEn: "Which of the following is a unit of pressure?",
qHi: "निम्नलिखित में से कौन दाब (pressure) का मात्रक है?",
optionsEn: ["Bar", "Erg", "Dyne", "Poise"],
optionsHi: ["बार (Bar)", "र्ग", "डाइन", "पॉइज"],
answer: 0,
exp: "Explanation (En): Bar is a metric unit of atmospheric pressure (1 \text{ bar} = 10^5 \text{ Pa}). Erg is energy, dyne is force, poise is viscosity.\nस्पष्टीकरण (Hi): बार (Bar) वायुमंडलीय दाब का मात्रक है।"
},
{
qEn: "What is the dimensional formula of universal gas constant (R)?",
qHi: "सार्वत्रिक गैस नियतांक (R) का विमीय सूत्र क्या है?",
optionsEn: ["[ML^2T^{-2}K^{-1}mol^{-1}]", "[MLT^{-2}K^{-1}]", "[ML^2T^{-1}K^{-1}]", "[ML^{-1}T^{-2}]"],
optionsHi: ["[ML^2T^{-2}K^{-1}mol^{-1}]", "[MLT^{-2}K^{-1}]", "[ML^2T^{-1}K^{-1}]", "[ML^{-1}T^{-2}]"],
answer: 0,
exp: "Explanation (En): Ideal gas equation PV = nRT \Rightarrow R = PV / (nT) = ([ML^{-1}T^{-2}][L^3]) / ([mol][K]) = [ML^2T^{-2}K^{-1}mol^{-1}].\nस्पष्टीकरण (Hi): आदर्श गैस समीकरण से R की विमा [ML^2T^{-2}K^{-1}mol^{-1}] होती है।"
},
{
qEn: "Significant figures in the number 0.00508 are:",
qHi: "संख्या 0.00508 में सार्थक अंकों (significant figures) की संख्या कितनी है?",
optionsEn: ["3", "5", "6", "2"],
optionsHi: ["3", "5", "6", "2"],
answer: 0,
exp: "Explanation (En): Leading zeros are not significant. Trailing zeros between non-zero digits are significant. Thus, 5, 0, and 8 make 3 significant figures.\nस्पष्टीकरण (Hi): शुरुआती शून्य सार्थक नहीं होते, अतः 5, 0 और 8 कुल 3 सार्थक अंक बनाते हैं।"
}
],
  "Motion and Force": [
    {
      qEn: "What is the rate of change of displacement called?",
      qHi: "विस्थापन के परिवर्तन की दर को क्या कहा जाता है?",
      optionsEn: ["Velocity", "Speed", "Acceleration", "Distance"],
      optionsHi: ["वेग (Velocity)", "चाल", "त्वरण", "दूरी"],
      answer: 0,
      exp: "Explanation (En): Velocity is defined as the rate of change of displacement with respect to time (v = \\Delta s / \\Delta t).\nस्पष्टीकरण (Hi): समय के साथ विस्थापन में परिवर्तन की दर को वेग (Velocity) कहते हैं।"
    },
    {
      qEn: "According to Newton's first law of motion, what is another name for the property of inertia?",
      qHi: "न्यूटन की गति के पहले नियम के अनुसार, जड़त्व (inertia) के गुण का दूसरा नाम क्या है?",
      optionsEn: ["Qualitative definition of force", "Momentum conservation", "Law of gravitation", "Conservation of energy"],
      optionsHi: ["बल की गुणात्मक परिभाषा (Qualitative definition of force)", "संवेग संरक्षण", "गुरुत्वाकर्षण का नियम", "ऊर्जा संरक्षण"],
      answer: 0,
      exp: "Explanation (En): Newton's first law defines inertia and provides the qualitative definition of force.\nस्पष्टीकरण (Hi): न्यूटन का पहला नियम जड़त्व को परिभाषित करता है और बल की गुणात्मक परिभाषा देता है।"
    },
    {
      qEn: "What is the SI unit of momentum?",
      qHi: "संवेग (momentum) का SI मात्रक क्या है?",
      optionsEn: ["kg·m/s", "N·s", "Both kg·m/s and N·s", "kg·m/s^2"],
      optionsHi: ["kg·m/s", "N·s", "A और B दोनों (kg·m/s और N·s)", "kg·m/s^2"],
      answer: 2,
      exp: "Explanation (En): Momentum p = mv, so unit is kg·m/s, which is dimensionally equivalent to Newton-second (N·s).\nस्पष्टीकरण (Hi): संवेग p = mv है, इसलिए इसका मात्रक kg·m/s या न्यूटन-सेकंड (N·s) दोनों होता है।"
    },
    {
      qEn: "Which law of motion gives the quantitative measure of force?",
      qHi: "गति का कौन सा नियम बल का मात्रात्मक माप (quantitative measure) देता है?",
      optionsEn: ["Newton's Second Law", "Newton's First Law", "Newton's Third Law", "Law of Conservation of Momentum"],
      optionsHi: ["न्यूटन का दूसरा नियम", "न्यूटन का पहला नियम", "न्यूटन का तीसरा नियम", "संवेग संरक्षण का नियम"],
      answer: 0,
      exp: "Explanation (En): Newton's second law states that Force F = ma, providing a quantitative measure of force.\nस्पष्टीकरण (Hi): न्यूटन का दूसरा नियम F = ma के रूप में बल का परिमाण या मात्रात्मक माप देता है।"
    },
    {
      qEn: "When a bus suddenly starts moving forward, passengers fall backward due to:",
      qHi: "जब बस अचानक आगे की ओर चलती है, तो यात्री पीछे की ओर गिर जाते हैं, इसका कारण है:",
      optionsEn: ["Inertia of rest", "Inertia of motion", "Friction", "Centripetal force"],
      optionsHi: ["विराम का जड़त्व (Inertia of rest)", "गति का जड़त्व", "घर्षण", "अभिकेंद्री बल"],
      answer: 0,
      exp: "Explanation (En): Passengers are at rest initially and tend to remain at rest due to the inertia of rest when the bus moves.\nस्पष्टीकरण (Hi): विराम के जड़त्व के कारण शरीर का निचلا हिस्सा बस के साथ गति में आ जाता है जबकि ऊपरी हिस्सा विराम में रहना चाहता है।"
    },
    {
  qEn: "What is the rate of change of displacement called?",
  qHi: "विस्थापन के परिवर्तन की दर को क्या कहा जाता है?",
  optionsEn: ["Velocity", "Speed", "Acceleration", "Distance"],
  optionsHi: ["वेग (Velocity)", "चाल", "त्वरण", "दूरी"],
  answer: 0,
  exp: "Explanation (En): Velocity is defined as the rate of change of displacement with respect to time (v = \\Delta s / \\Delta t).\nस्पष्टीकरण (Hi): समय के साथ विस्थापन में परिवर्तन की दर को वेग (Velocity) कहते हैं।"
},
{
  qEn: "According to Newton's first law of motion, what is another name for the property of inertia?",
  qHi: "न्यूटन की गति के पहले नियम के अनुसार, जड़त्व (inertia) के गुण का दूसरा नाम क्या है?",
  optionsEn: ["Qualitative definition of force", "Momentum conservation", "Law of gravitation", "Conservation of energy"],
  optionsHi: ["बल की गुणात्मक परिभाषा (Qualitative definition of force)", "संवेग संरक्षण", "गुरुत्वाकर्षण का नियम", "ऊर्जा संरक्षण"],
  answer: 0,
  exp: "Explanation (En): Newton's first law defines inertia and provides the qualitative definition of force.\nस्पष्टीकरण (Hi): न्यूटन का पहला नियम जड़त्व को परिभाषित करता है और बल की गुणात्मक परिभाषा देता है।"
},
{
  qEn: "What is the SI unit of momentum?",
  qHi: "संवेग (momentum) का SI मात्रक क्या है?",
  optionsEn: ["kg·m/s", "N·s", "Both kg·m/s and N·s", "kg·m/s^2"],
  optionsHi: ["kg·m/s", "N·s", "A और B दोनों (kg·m/s और N·s)", "kg·m/s^2"],
  answer: 2,
  exp: "Explanation (En): Momentum p = mv, so unit is kg·m/s, which is dimensionally equivalent to Newton-second (N·s).\nस्पष्टीकरण (Hi): संवेग p = mv है, इसलिए इसका मात्रक kg·m/s या न्यूटन-सेकंड (N·s) दोनों होता है।"
},
{
  qEn: "Which law of motion gives the quantitative measure of force?",
  qHi: "गति का कौन सा नियम बल का मात्रात्मक माप (quantitative measure) देता है?",
  optionsEn: ["Newton's Second Law", "Newton's First Law", "Newton's Third Law", "Law of Conservation of Momentum"],
  optionsHi: ["न्यूटन का दूसरा नियम", "न्यूटन का पहला नियम", "न्यूटन का तीसरा नियम", "संवेग संरक्षण का नियम"],
  answer: 0,
  exp: "Explanation (En): Newton's second law states that Force F = ma, providing a quantitative measure of force.\nस्पष्टीकरण (Hi): न्यूटन का दूसरा नियम F = ma के रूप में बल का परिमाण या मात्रात्मक माप देता है।"
},
{
  qEn: "When a bus suddenly starts moving forward, passengers fall backward due to:",
  qHi: "जब बस अचानक आगे की ओर चलती है, तो यात्री पीछे की ओर गिर जाते हैं, इसका कारण है:",
  optionsEn: ["Inertia of rest", "Inertia of motion", "Friction", "Centripetal force"],
  optionsHi: ["विराम का जड़त्व (Inertia of rest)", "गति का जड़त्व", "घर्षण", "अभिकेंद्री बल"],
  answer: 0,
  exp: "Explanation (En): Passengers are at rest initially and tend to remain at rest due to the inertia of rest when the bus moves.\nस्पष्टीकरण (Hi): विराम के जड़त्व के कारण शरीर का निचला हिस्सा बस के साथ गति में आ जाता है जबकि ऊपरी हिस्सा विराम में रहना चाहता है।"
},
{
  qEn: "What is the impulse of a force equal to?",
  qHi: "किसी बल का आवेग (impulse) किसके बराबर होता है?",
  optionsEn: ["Change in momentum", "Change in kinetic energy", "Force multiplied by distance", "Work done"],
  optionsHi: ["संवेग में परिवर्तन (Change in momentum)", "गतिज ऊर्जा में परिवर्तन", "बल गुणा दूरी", "किया गया कार्य"],
  answer: 0,
  exp: "Explanation (En): According to the impulse-momentum theorem, impulse is equal to the change in momentum of the body.\nस्पष्टीकरण (Hi): आवेग-संवेग प्रमेय के अनुसार, बल का आवेग वस्तु के संवेग में परिवर्तन के बराबर होता है।"
},
{
  qEn: "What is the unit of impulse?",
  qHi: "आवेग (impulse) का मात्रक क्या है?",
  optionsEn: ["N·s (or kg·m/s)", "N/s", "Joule", "Watt"],
  optionsHi: ["N·s (या kg·m/s)", "N/s", "जूल", "वाट"],
  answer: 0,
  exp: "Explanation (En): Impulse = Force \\times Time, so its SI unit is Newton-second (N·s) or kg·m/s.\nस्पष्टीकरण (Hi): आवेग = बल \\times समय, अतः इसका SI मात्रक न्यूटन-सेकंड (N·s) है।"
},
{
  qEn: "Which of the following is conserved according to Newton's third law during a collision?",
  qHi: "टक्कर के दौरान न्यूटन के तीसरे नियम के अनुसार निम्नलिखित में से क्या संरक्षित रहता है?",
  optionsEn: ["Total momentum", "Total kinetic energy", "Total velocity", "Potential energy"],
  optionsHi: ["कुल संवेग (Total momentum)", "कुल गतिज ऊर्जा", "कुल वेग", "स्थितिज ऊर्जा"],
  answer: 0,
  exp: "Explanation (En): Newton's third law leads to the law of conservation of total momentum in an isolated system.\nस्पष्टीकरण (Hi): न्यूटन का तीसरा नियम एक विलगित निकाय में कुल संवेग संरक्षण के नियम का आधार है।"
},
{
  qEn: "What is the centrifugal force experienced by a body moving in a circular path?",
  qHi: "वृत्ताकार पथ पर गतिमान वस्तु द्वारा अनुभव किया जाने वाला अपकेंद्रीय बल (centrifugal force) की दिशा क्या होती है?",
  optionsEn: ["Away from the center", "Towards the center", "Tangential to the path", "Perpendicular to the plane"],
  optionsHi: ["केंद्र से दूर (Away from the center)", "केंद्र की ओर", "पथ के स्पर्शरेखीय", "तल के लंबवत"],
  answer: 0,
  exp: "Explanation (En): Centrifugal force is an apparent fictitious force directed radially outward (away from the center).\nस्पष्टीकरण (Hi): अपकेंद्रीय बल केंद्र से बाहर की ओर (त्रिज्या के अनुदिश विपरीत दिशा में) कार्य करने वाला छद्म बल है।"
},
{
  qEn: "What provides the necessary centripetal force for a car taking a circular turn on a flat road?",
  qHi: "समतल सड़क पर वृत्ताकार मोड़ लेते समय कार को आवश्यक अभिकेंद्री बल (centripetal force) कहाँ से प्राप्त होता है?",
  optionsEn: ["Friction between tires and road", "Engine power", "Air resistance", "Gravitational pull"],
  optionsHi: ["टायरों और सड़क के बीच घर्षण (Friction)", "इंजन की शक्ति", "वायु प्रतिरोध", "गुरुत्वाकर्षण खिंचाव"],
  answer: 0,
  exp: "Explanation (En): The frictional force between the tires and the road surface provides the centripetal force for turning.\nस्पष्टीकरण (Hi): कार के टायरों और सड़क के बीच का घर्षण बल ही सुरक्षित मोड़ के लिए आवश्यक अभिकेंद्री बल प्रदान करता है।"
},
{
  qEn: "What is the angle of banking designed for on curved roads to minimize reliance on friction?",
  qHi: "घर्षण पर निर्भरता कम करने के लिए घुमावदार सड़कों पर बैंकिंग का कोण किस उद्देश्य से डिज़ाइन किया जाता है?",
  optionsEn: ["To provide a component of normal reaction for centripetal force", "To increase vehicle speed", "To stop vehicles automatically", "To collect rainwater"],
  optionsHi: ["अभिकेंद्री बल के लिए अभिलंब प्रतिक्रिया का घटक प्रदान करना", "वाहन की गति बढ़ाना", "वाहन स्वचालित रूप से रोकना", "वर्षा जल एकत्र करना"],
  answer: 0,
  exp: "Explanation (En): Banking of roads tilts the road surface so that the normal reaction component assists in providing centripetal force.\nस्पष्टीकरण (Hi): सड़क की बैंकिंग से अभिलंब प्रतिक्रिया (normal reaction) का एक घटक मुड़ने के लिए आवश्यक अभिकेंद्री बल में सहायता करता है।"
},
{
  qEn: "What is the term for the maximum velocity attained by a falling body through a fluid when gravitational force equals drag force?",
  qHi: "गुरुत्वाकर्षण बल और श्यान बल (drag force) के बराबर होने पर द्रव के माध्यम से गिर रही वस्तु द्वारा प्राप्त अधिकतम वेग को क्या कहते हैं?",
  optionsEn: ["Terminal velocity", "Escape velocity", "Orbital velocity", "Critical velocity"],
  optionsHi: ["सीमांत वेग (Terminal velocity)", "पलायन वेग", "कक्षाीय वेग", "क्रांतिक वेग"],
  answer: 0,
  exp: "Explanation (En): When net force becomes zero, acceleration stops, and the body falls with a constant maximum velocity called terminal velocity.\nस्पष्टीकरण (Hi): जब प्रभावी बल शून्य हो जाता है, तो वस्तु एक नियत अधिकतम वेग से गिरती है जिसे सीमांत वेग (Terminal velocity) कहते हैं।"
},
{
  qEn: "Which physical quantity represents the rate of doing work?",
  qHi: "कौन सी भौतिक राशि कार्य करने की दर को दर्शाती है?",
  optionsEn: ["Power", "Energy", "Force", "Momentum"],
  optionsHi: ["शक्ति (Power)", "ऊर्जा", "बल", "संवेग"],
  answer: 0,
  exp: "Explanation (En): Power is defined as the rate at which work is done or energy is transferred (P = W / t).\nस्पष्टीकरण (Hi): कार्य करने की दर या ऊर्जा स्थानांतरण की दर को शक्ति (Power) कहा जाता है।"
},
{
  qEn: "What is the SI unit of power?",
  qHi: "शक्ति (power) का SI मात्रक क्या है?",
  optionsEn: ["Watt", "Joule", "Newton", "Pascal"],
  optionsHi: ["वाट (Watt)", "जूल", "न्यूटन", "पास्कल"],
  answer: 0,
  exp: "Explanation (En): The SI unit of power is the Watt (W), equivalent to one joule per second (J/s).\nस्पष्टीकरण (Hi): शक्ति का SI मात्रक वाट (Watt) है, जो जूल प्रति सेकंड के बराबर होता है।"
},
{
  qEn: "What happens to the momentum of a body if its velocity is doubled while mass remains constant?",
  qHi: "यदि द्रव्यमान स्थिर रखते हुए किसी पिंड का वेग दोगुना कर दिया जाए, तो उसके संवेग पर क्या प्रभाव पड़ेगा?",
  optionsEn: ["Doubled", "Quadrupled", "Halved", "Unchanged"],
  optionsHi: ["दोगुना हो जाएगा", "चार गुना हो जाएगा", "आधा हो जाएगा", "अपरिवर्तित रहेगा"],
  answer: 0,
  exp: "Explanation (En): Momentum p = mv. If velocity v is doubled, momentum p also doubles directly.\nस्पष्टीकरण (Hi): संवेग p = mv होता है। यदि वेग दोगुना होगा, तो संवेग भी सीधा दोगुना हो जाएगा।"
},
{
  qEn: "What is the nature of friction between two surfaces in contact independent of?",
  qHi: "संपर्क में दो सतहों के बीच घर्षण बल सामान्यतः किससे स्वतंत्र होता है?",
  optionsEn: ["Area of contact", "Nature of surfaces", "Normal reaction", "Roughness"],
  optionsHi: ["संपर्क क्षेत्र का क्षेत्रफल (Area of contact)", "सतहों की प्रकृति", "अभिलंब प्रतिक्रिया", "खुरदरापन"],
  answer: 0,
  exp: "Explanation (En): Laws of friction state that friction force is independent of the apparent surface area of contact.\nस्पष्टीकरण (Hi): घर्षण के नियमों के अनुसार घर्षण बल संपर्क सतहों के क्षेत्रफल (area) पर निर्भर नहीं करता है।"
},
{
  qEn: "Which type of friction is slightly less than limiting friction?",
  qHi: "सीमांत घर्षण (limiting friction) से थोड़ा सा कम कौन सा घर्षण होता है?",
  optionsEn: ["Static friction", "Dynamic (kinetic) friction", "Rolling friction", "Fluid friction"],
  optionsHi: ["स्थतिक घर्षण", "गतिक घर्षण (Dynamic/kinetic friction)", "लोटनिक घर्षण", "श्यान घर्षण"],
  answer: 1,
  exp: "Explanation (En): Kinetic (sliding) friction is always slightly less than the maximum static (limiting) friction.\nस्पष्टीकरण (Hi): गतिक घर्षण (kinetic friction) का मान हमेशा अधिकतम सीमांत घर्षण से थोड़ा कम होता है।"
},
{
  qEn: "Why are balls or rollers used in ball bearings?",
  qHi: "बॉल बेयरिंग में छर्रों (balls or rollers) का उपयोग क्यों किया जाता है?",
  optionsEn: ["To convert sliding friction into rolling friction", "To increase friction", "To stop rotation", "To generate heat"],
  optionsHi: ["सर्पी घर्षण को लोटनिक घर्षण में बदलने के लिए", "घर्षण बढ़ाने के लिए", "घूर्णन रोकने के लिए", "ऊष्मा उत्पन्न करने के लिए"],
  answer: 0,
  exp: "Explanation (En): Rolling friction is much smaller than sliding friction, so ball bearings reduce friction effectively.\nस्पष्टीकरण (Hi): लोटनिक घर्षण (rolling friction) सर्पी घर्षण से बहुत कम होता है, इसलिए बेयरिंग में छर्रे लगाए जाते हैं।"
},
{
  qEn: "What is the acceleration of a freely falling body near the Earth's surface?",
  qHi: "पृथ्वी की सतह के पास स्वतंत्र रूप से गिरने वाली वस्तु का त्वरण कितना होता है?",
  optionsEn: ["9.8 \\text{ m/s}^2", "Zero", "4.9 \\text{ m/s}^2", "9.8 \\text{ km/s}^2"],
  optionsHi: ["9.8 \\text{ m/s}^2", "शून्य", "4.9 \\text{ m/s}^2", "9.8 \\text{ km/s}^2"],
  answer: 0,
  exp: "Explanation (En): Acceleration due to gravity (g) near Earth's surface is approximately 9.8 \\text{ m/s}^2.\nस्पष्टीकरण (Hi): पृथ्वी के गुरुत्वाकर्षण के कारण त्वरण (g) का मान लगभग 9.8 \\text{ m/s}^2 होता है।"
},
{
  qEn: "What is the apparent weight of a body inside a freely falling elevator?",
  qHi:" िएंट स्वतंत्र रूप से गिर रही लिफ्ट के अंदर किसी वस्तु का आभासी वजन(apparent weight) क्या होगा ? ",
  optionsEn: ["Zero", "Equal to actual weight", "Double the weight", "Infinite"],
  optionsHi: ["शून्य (Zero)", "वास्तविक वजन के बराबर", "वजन का दोगुना", "अनंत"],
  answer: 0,
  exp: "Explanation (En): In free fall, acceleration a = g, so apparent weight W = m(g - a) = 0 (weightlessness).\nस्पष्टीकरण (Hi): मुक्त पतन (free fall) की स्थिति में लिफ्ट का त्वरण g के बराबर होता है, जिससे आभासी भार शून्य हो जाता है।"
},
{
  qEn: "What force keeps planets moving in their orbits around the Sun?",
  qHi: "ग्रहों को सूर्य के चारों ओर उनकी कक्षाओं में घूमने के लिए कौन सा बल बाध्य करता है?",
  optionsEn: ["Centripetal force provided by gravity", "Centrifugal force", "Magnetic force", "Frictional force"],
  optionsHi: ["गुरुत्वाकर्षण द्वारा प्रदत्त अभिकेंद्री बल", "अपकेंद्रीय बल", "चुंबकीय बल", "घर्षण बल"],
  answer: 0,
  exp: "Explanation (En): The gravitational pull of the Sun provides the necessary centripetal force for planetary orbital motion.\nस्पष्टीकरण (Hi): सूर्य का गुरुत्वाकर्षण खिंचाव ग्रहों को वृत्ताकार कक्षा में घूमने के लिए आवश्यक अभिकेंद्री बल प्रदान करता है।"
},
{
  qEn: "What happens to the weight of an object when taken from the Earth's equator to the poles?",
  qHi: "किसी वस्तु के भार पर क्या प्रभाव पड़ता है जब उसे पृथ्वी की भूमध्य रेखा (equator) से ध्रुवों (poles) पर ले जाया जाता है?",
  optionsEn: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
  optionsHi: ["बढ़ जाता है (Increases)", "घट जाता है", "अपरिवर्तित रहता है", "शून्य हो जाता है"],
  answer: 0,
  exp: "Explanation (En): Due to the Earth's oblateness and smaller centrifugal force at poles, gravity (g) is greater at poles, increasing weight.\nस्पष्टीकरण (Hi): ध्रुवों पर पृथ्वी की त्रिज्या कम होने और कम अपकेंद्रीय प्रभाव के कारण g का मान बढ़ जाता है, जिससे भार बढ़ जाता है।"
},
{
  qEn: "What is the escape velocity of an object from the Earth's surface?",
  qHi: "पृथ्वी की सतह से किसी वस्तु का पलायन वेग (escape velocity) कितना होता है?",
  optionsEn: ["11.2 \\text{ km/s}", "9.8 \\text{ km/s}", "3 \\times 10^8 \\text{ m/s}", "7.9 \\text{ km/s}"],
  optionsHi: ["11.2 \\text{ km/s}", "9.8 \\text{ km/s}", "3 \\times 10^8 \\text{ m/s}", "7.9 \\text{ km/s}"],
  answer: 0,
  exp: "Explanation (En): Escape velocity from Earth is approximately 11.2 \\text{ km/s}, the minimum speed needed to escape Earth's gravity.\nस्पष्टीकरण (Hi): पृथ्वी के गुरुत्वाकर्षण क्षेत्र को पार करने के लिए आवश्यक न्यूनतम पलायन वेग 11.2 \\text{ km/s} है।"
},
{
  qEn: "What is the orbital velocity of a satellite revolving very close to the Earth's surface?",
  qHi: "पृथ्वी की सतह के बहुत قریب परिक्रमा करने वाले उपग्रह का कक्षीय वेग (orbital velocity) कितना होता है?",
  optionsEn: ["7.9 \\text{ km/s}", "11.2 \\text{ km/s}", "3 \\text{ km/s}", "1.2 \\text{ km/s}"],
  optionsHi: ["7.9 \\text{ km/s}", "11.2 \\text{ km/s}", "3 \\text{ km/s}", "1.2 \\text{ km/s}"],
  answer: 0,
  exp: "Explanation (En): Orbital velocity for a near-Earth satellite is approximately 7.9 \\text{ km/s} (about 8 \\text{ km/s}).\nस्पष्टीकरण (Hi): पृथ्वी के निकट चक्कर लगाने वाले उपग्रह का कक्षीय वेग लगभग 7.9 \\text{ km/s} होता है।"
},
{
  qEn: "Which law states that action and reaction are equal and opposite?",
  qHi: "कौन सा नियम कहता है कि क्रिया और प्रतिक्रिया बराबर और विपरीत होती हैं?",
  optionsEn: ["Newton's Third Law of Motion", "Newton's First Law", "Newton's Second Law", "Law of Gravitation"],
  optionsHi: ["न्यूटन की गति का तीसरा नियम", "न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "गुरुत्वाकर्षण का नियम"],
  answer: 0,
  exp: "Explanation (En): Newton's third law states that for every action, there is an equal and opposite reaction.\nस्पष्टीकरण (Hi): न्यूटन का तीसरा नियम स्पष्ट करता है कि प्रत्येक क्रिया के बराबर और विपरीत प्रतिक्रिया होती है।"
},
{
  qEn: "Why does a swimmer push water backward during swimming?",
  qHi: "तैराक तैरते समय पानी को पीछे की ओर क्यों धकेलता है?",
  optionsEn: ["To get forward reaction force according to Newton's 3rd law", "To create waves", "To reduce water temperature", "To stay on the surface"],
  optionsHi: ["न्यूटन के तीसरे नियम के अनुसार आगे की ओर प्रतिक्रिया बल पाने के लिए", "लहरें पैदा करने के लिए", "पानी का तापमान कम करने के लिए", "सतह पर रहने के लिए"],
  answer: 0,
  exp: "Explanation (En): The swimmer pushes water backward (action), and water exerts an equal and opposite forward force (reaction).\nस्पष्टीकरण (Hi): तैराक पानी पर पीछे बल लगाता है (क्रिया), जिसके विपरीत पानी तैराक को आगे धकेलता है (प्रतिक्रिया)।"
},
{
  qEn: "What is the recoil velocity of a gun related to?",
  qHi: "बंदूक से गोली छूटने पर उसका पीछे हटना (recoil) किससे संबंधित है?",
  optionsEn: ["Conservation of momentum", "Conservation of energy", "Newton's first law", "Centrifugal force"],
  optionsHi: ["संवेग संरक्षण (Conservation of momentum)", "ऊर्जा संरक्षण", "न्यूटन का पहला नियम", "अपकेंद्रीय बल"],
  answer: 0,
  exp: "Explanation (En): Recoil of a gun is based on the principle of conservation of linear momentum.\nस्पष्टीकरण (Hi): बंदूक का पीछे हटना रैखिक संवेग संरक्षण के सिद्धांत पर आधारित है।"
},
{
  qEn: "If the distance between two masses is halved, what happens to the gravitational force between them?",
  qHi: "यदि दो द्रव्यमानों के बीच की दूरी आधी कर दी जाए, तो उनके बीच का गुरुत्वाकर्षण बल कितना हो जाएगा?",
  optionsEn: ["Quadrupled (multiplied by 4)", "Doubled", "Halved", "Quartered"],
  optionsHi: ["चार गुना हो जाएगा (Quadrupled)", "दोगुना हो जाएगा", "आधा हो जाएगा", "एक चौथाई हो जाएगा"],
  answer: 0,
  exp: "Explanation (En): Gravitational force F \\propto 1/r^2. If distance r is halved (r/2), force increases by (1/2)^2 = 4 times.\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण बल F \\propto 1/r^2 होता है। दूरी आधी करने पर बल चार गुना हो जाता है।"
},
{
  qEn: "What is the weight of an object at the center of the Earth?",
  qHi: "पृथ्वी के केंद्र पर किसी वस्तु का भार (weight) कितना होता है?",
  optionsEn: ["Zero", "Infinite", "Same as at pole", "Maximum"],
  optionsHi: ["शून्य (Zero)", "अनंत", "ध्रुव के समान", "अधिकतम"],
  answer: 0,
  exp: "Explanation (En): At the center of the Earth, acceleration due to gravity g = 0, so weight W = mg = 0.\nस्पष्टीकरण (Hi): पृथ्वी के केंद्र में गुरुत्वीय त्वरण g शून्य हो जाता है, अतः वस्तु का भार शून्य होता है।"
},
{
  qEn: "What is the SI unit of torque or moment of force?",
  qHi: "बलाघूर्ण (torque) या बल आघूर्ण का SI मात्रक क्या है?",
  optionsEn: ["N·m", "Joule", "N/m", "kg·m/s"],
  optionsHi: ["N·m (न्यूटन-मीटर)", "जूल", "N/m", "kg·m/s"],
  answer: 0,
  exp: "Explanation (En): Torque \\tau = \\text{Force} \\times \\text{Perpendicular distance}, so its unit is Newton-meter (N·m).\nस्पष्टीकरण (Hi): बलाघूर्ण = बल \\times लंबवत दूरी, अतः इसका SI मात्रक न्यूटन-मीटर (N·m) है।"
}
  ],
    "Work, Energy and Power": [
    {
      qEn: "When is the work done by a force considered to be zero if the force is non-zero and displacement is non-zero?",
      qHi: "यदि बल और विस्थापन दोनों शून्य न हों, तब भी किसी बल द्वारा किया गया कार्य कब शून्य माना जाता है?",
      optionsEn: ["When the force and displacement are perpendicular to each other", "When force and displacement are in the same direction", "When force and displacement are in opposite directions", "When velocity is constant"],
      optionsHi: ["जब बल और विस्थापन एक-दूसरे के लंबवत हों", "जब बल और विस्थापन एक ही दिशा में हों", "जब बल और विस्थापन विपरीत दिशा में हों", "जब वेग नियत हो"],
      answer: 0,
      exp: "Explanation (En): Work W = F s \\cos(\\theta). When force and displacement are perpendicular (\\theta = 90^\\circ), \\cos(90^\\circ) = 0, making work zero.\nस्पष्टीकरण (Hi): कार्य W = F s \\cos(\\theta) होता है। जब बल और विस्थापन के बीच का कोण 90^\\circ हो, तो कार्य शून्य होता है।"
    },
    {
      qEn: "What is the work done by the centripetal force on a body moving in a uniform circular motion?",
      qHi: "एकसमान वृत्ताकार गति में घूम रही वस्तु पर अभिकेंद्री बल (centripetal force) द्वारा किया गया कार्य कितना होता है?",
      optionsEn: ["Zero", "Maximum", "Negative", "Equal to kinetic energy"],
      optionsHi: ["शून्य (Zero)", "अधिकतम", "ऋणात्मक", "गतिज ऊर्जा के बराबर"],
      answer: 0,
      exp: "Explanation (En): Centripetal force is always perpendicular to the instantaneous displacement (tangent to the circle), so work done is zero.\nस्पष्टीकरण (Hi): अभिकेंद्री बल हमेशा विस्थापन के लंबवत (केंद्र की ओर) होता है, अतः इसके द्वारा किया गया कार्य शून्य होता है।"
    },
    {
      qEn: "What is the SI unit of work and energy?",
      qHi: "कार्य और ऊर्जा का SI मात्रक क्या है?",
      optionsEn: ["Joule", "Watt", "Newton", "Pascal"],
      optionsHi: ["जूल (Joule)", "वाट", "न्यूटन", "पास्कल"],
      answer: 0,
      exp: "Explanation (En): The SI unit of both work and energy is the Joule (J), which equals 1 \\text{ N}\\cdot\\text{m}.\nस्पष्टीकरण (Hi): कार्य और ऊर्जा दोनों का SI मात्रक जूल (Joule) है, जो 1 \\text{ N}\\cdot\\text{m} के बराबर होता है।"
    },
    {
      qEn: "What happens to the kinetic energy of an object if its speed is doubled?",
      qHi: "यदि किसी वस्तु की चाल दोगुनी कर दी जाए, तो उसकी गतिज ऊर्जा (kinetic energy) पर क्या प्रभाव पड़ेगा?",
      optionsEn: ["Quadrupled (multiplied by 4)", "Doubled", "Halved", "Increased by 8 times"],
      optionsHi: ["चार गुना हो जाएगी (Quadrupled)", "दोगुनी हो जाएगी", "आधी हो जाएगी", "आठ गुना बढ़ जाएगी"],
      answer: 0,
      exp: "Explanation (En): Kinetic energy KE = \\frac{1}{2}mv^2. If speed v is doubled, KE increases by 2^2 = 4 times.\nस्पष्टीकरण (Hi): गतिज ऊर्जा KE = \\frac{1}{2}mv^2 होती है। चाल दोगुनी होने पर गतिज ऊर्जा 2^2 = 4 यानी चार गुना हो जाती है।"
    },
    {
      qEn: "Which law is fundamentally represented by the conservation of total mechanical energy in a conservative system?",
      qHi: "संरक्षी निकाय (conservative system) में कुल यांत्रिक ऊर्जा का संरक्षण मूल रूप से किस नियम का प्रतिनिधित्व करता है?",
      optionsEn: ["Law of Conservation of Energy", "Newton's First Law", "Law of Momentum Conservation", "Pascal's Law"],
      optionsHi: ["ऊर्जा संरक्षण का नियम (Law of Conservation of Energy)", "न्यूटन का पहला नियम", "संवेग संरक्षण का नियम", "पास्कल का नियम"],
      answer: 0,
      exp: "Explanation (En): Mechanical energy (KE + PE) remains constant in conservative fields, embodying the law of conservation of energy.\nस्पष्टीकरण (Hi): संरक्षी क्षेत्रों में यांत्रिक ऊर्जा (KE + PE) नियत रहती है, जो ऊर्जा संरक्षण के नियम को दर्शाती है।"
    },
    {
      qEn: "What is the gravitational potential energy of an object of mass 'm' at a height 'h' above the Earth's surface?",
      qHi: "पृथ्वी की सतह से 'h' ऊंचाई पर 'm' द्रव्यमान की वस्तु की गुरुत्वीय स्थितिज ऊर्जा (potential energy) क्या होगी?",
      optionsEn: ["mgh", "\\frac{1}{2}mv^2", "mgh^2", "\\frac{mgh}{2}"],
      optionsHi: ["mgh", "\\frac{1}{2}mv^2", "mgh^2", "\\frac{mgh}{2}"],
      answer: 0,
      exp: "Explanation (En): Potential energy stored due to vertical height in a uniform gravitational field is PE = mgh.\nस्पष्टीकरण (Hi): एकसमान गुरुत्वाकर्षण क्षेत्र में ऊंचाई के कारण संचित स्थितिज ऊर्जा PE = mgh होती है।"
    },
    {
      qEn: "How is power related to force and velocity for a moving object?",
      qHi: "गतिमान वस्तु के लिए शक्ति (power) का संबंध बल और वेग से किस प्रकार होता है?",
      optionsEn: ["P = F \\cdot v", "P = F / v", "P = v / F", "P = F v^2"],
      optionsHi: ["P = F \\cdot v", "P = F / v", "P = v / F", "P = F v^2"],
      answer: 0,
      exp: "Explanation (En): Power P = \\frac{W}{t} = \\frac{F s}{t} = F v (since s/t = v).\nस्पष्टीकरण (Hi): शक्ति P = \\frac{W}{t} = F \\cdot v होती है, जहाँ v वेग है।"
    },
    {
      qEn: "One horsepower (hp) is approximately equal to how many Watts?",
      qHi: "एक अश्वशक्ति (horsepower - hp) लगभग कितने वाट के बराबर होती है?",
      optionsEn: ["746 \\text{ W}", "1000 \\text{ W}", "500 \\text{ W}", "981 \\text{ W}"],
      optionsHi: ["746 \\text{ W}", "1000 \\text{ W}", "500 \\text{ W}", "981 \\text{ W}"],
      answer: 0,
      exp: "Explanation (En): Mechanical horsepower is standardized as exactly 746 \\text{ Watts}.\nस्पष्टीकरण (Hi): एक मैकेनिकल हॉर्सपावर (hp) का मान ठीक 746 \\text{ वाट} होता है।"
    },
    {
      qEn: "What happens to the potential energy of a compressed spring when it is released?",
      qHi: "किसी संपीड़ित (compressed) स्प्रिंग को छोड़े जाने पर उसकी स्थितिज ऊर्जा का क्या होता है?",
      optionsEn: ["It converts into kinetic energy", "It increases further", "It remains constant as potential energy", "It becomes zero and vanishes"],
      optionsHi: ["यह गतिज ऊर्जा में बदल जाती है", "यह और बढ़ जाती है", "स्थितिज ऊर्जा के रूप में नियत रहती है", "शून्य हो जाती है और गायब हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Stored elastic potential energy in the compressed spring converts into kinetic energy as it expands.\nस्पष्टीकरण (Hi): संपीड़ित स्प्रिंग में संचित प्रत्यास्थ स्थितिज ऊर्जा फैलने पर गतिज ऊर्जा में परिवर्तित हो जाती है।"
    },
    {
      qEn: "What kind of collision is it where both momentum and total kinetic energy are conserved?",
      qHi: "वह कौन सी टक्कर (collision) है जिसमें संवेग और कुल गतिज ऊर्जा दोनों संरक्षित रहते हैं?",
      optionsEn: ["Elastic collision", "Inelastic collision", "Perfectly inelastic collision", "Explosive collision"],
      optionsHi: ["प्रत्यस्थ टक्कर (Elastic collision)", "अप्रत्याशित टक्कर", "पूर्णतः अप्रत्याशित टक्कर", "विस्फोटक टक्कर"],
      answer: 0,
      exp: "Explanation (En): In an elastic collision, both linear momentum and kinetic energy are conserved.\nस्पष्टीकरण (Hi): प्रत्यस्थ टक्कर (Elastic collision) में रैखिक संवेग और गतिज ऊर्जा दोनों संरक्षित रहते हैं।"
    },
    {
      qEn: "What is conserved during an inelastic collision?",
      qHi: "अप्रत्याशित टक्कर (inelastic collision) के दौरान क्या संरक्षित रहता है?",
      optionsEn: ["Only total linear momentum", "Only kinetic energy", "Both momentum and kinetic energy", "Neither momentum nor energy"],
      optionsHi: ["केवल कुल रैखिक संवेग (Only total linear momentum)", "केवल गतिज ऊर्जा", "संवेग और गतिज ऊर्जा दोनों", "न तो संवेग और न ही ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): In inelastic collisions, kinetic energy is not conserved (lost as heat/sound), but total linear momentum is always conserved.\nस्पष्टीकरण (Hi): अप्रत्याशित टक्कर में गतिज ऊर्जा संरक्षित नहीं रहती (ऊष्मा/ध्वनि में क्षس होती है), लेकिन कुल रैखिक संवेग हमेशा संरक्षित रहता है।"
    },
    {
      qEn: "What is the work done by a conservative force around a closed path?",
      qHi: "बंद पथ (closed path) के चारों ओर किसी संरक्षी बल (conservative force) द्वारा किया गया कार्य कितना होता है?",
      optionsEn: ["Zero", "Maximum", "Negative", "Equal to total energy"],
      optionsHi: ["शून्य (Zero)", "अधिकतम", "ऋणात्मक", "कुल ऊर्जा के बराबर"],
      answer: 0,
      exp: "Explanation (En): By definition, work done by a conservative force over any closed loop or path is zero.\nस्पष्टीकरण (Hi): परिभाषा के अनुसार, किसी संरक्षी बल द्वारा बंद लूप या पथ में किया गया कुल कार्य शून्य होता है।"
    },
    {
      qEn: "Which of the following is an example of a non-conservative force?",
      qHi: "निम्नलिखित में से कौन सा असंरक्षी बल (non-conservative force) का उदाहरण है?",
      optionsEn: ["Frictional force", "Gravitational force", "Electrostatic force", "Spring elastic force"],
      optionsHi: ["घर्षण बल (Frictional force)", "गुरुत्वाकर्षण बल", "स्थिरवैद्युत बल", "स्प्रिंग का प्रत्यास्थ बल"],
      answer: 0,
      exp: "Explanation (En): Friction is a non-conservative force because work done against friction depends on the path and dissipates energy as heat.\nस्पष्टीकरण (Hi): घर्षण एक असंरक्षी बल है क्योंकि इसके विरुद्ध किया गया कार्य पथ पर निर्भर करता है और ऊर्जा ऊष्मा के रूप में क्षय होती है।"
    },
    {
      qEn: "What is the relationship between momentum (p) and kinetic energy (KE) of a body of mass 'm?'",
      qHi: "'m' द्रव्यमान की वस्तु के संवेग (p) और गतिज ऊर्जा (KE) के बीच क्या संबंध है?",
      optionsEn: ["KE = \\frac{p^2}{2m}", "KE = 2pm", "KE = \\frac{m}{p^2}", "KE = p \\cdot m"],
      optionsHi: ["KE = \\frac{p^2}{2m}", "KE = 2pm", "KE = \\frac{m}{p^2}", "KE = p \\cdot m"],
      answer: 0,
      exp: "Explanation (En): Since p = mv and KE = \\frac{1}{2}mv^2, substituting v = p/m gives KE = \\frac{p^2}{2m}.\nस्पष्टीकरण (Hi): चूँकि p = mv और KE = \\frac{1}{2}mv^2 होता है, इसलिए KE = \\frac{p^2}{2m} संबंध प्राप्त होता है।"
    },
    {
      qEn: "If the momentum of a body is increased by 100%, what is the percentage increase in its kinetic energy?",
      qHi: "यदि किसी वस्तु का संवेग 100% बढ़ा दिया जाए, तो उसकी गतिज ऊर्जा में कितने प्रतिशत की वृद्धि होगी?",
      optionsEn: ["300%", "200%", "100%", "400%"],
      optionsHi: ["300%", "200%", "100%", "400%"],
      answer: 0,
      exp: "Explanation (En): KE \\propto p^2. If p becomes 2p (100% increase), KE becomes (2)^2 = 4 times (300% increase).\nस्पष्टीकरण (Hi): KE \\propto p^2 है। संवेग दोगुना होने पर गतिज ऊर्जा 4 गुना हो जाती है, अर्थात वृद्धि 300% होती है।"
    },
    {
      qEn: "What type of energy is stored in a stretched rubber band?",
      qHi: "खींचे गए रबर बैंड में किस प्रकार की ऊर्जा संचित होती है?",
      optionsEn: ["Elastic potential energy", "Kinetic energy", "Chemical energy", "Magnetic energy"],
      optionsHi: ["प्रत्यास्थ स्थितिज ऊर्जा (Elastic potential energy)", "गतिज ऊर्जा", "रासायनिक ऊर्जा", "चुंबकीय ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Stretching a rubber band deforms its shape, storing elastic potential energy.\nस्पष्टीकरण (Hi): रबर बैंड को खींचने पर उसका आकार बदल जाता है, जिससे उसमें प्रत्यास्थ स्थितिज ऊर्जा संचित हो जाती है।"
    },
    {
      qEn: "When a body falls freely under gravity, what happens to its total mechanical energy?",
      qHi: "जब कोई वस्तु गुरुत्वाकर्षण के अधीन स्वतंत्र रूप से गिरती है, तो उसकी कुल यांत्रिक ऊर्जा (total mechanical energy) का क्या होता है?",
      optionsEn: ["Remains constant", "Increases continuously", "Decreases continuously", "Becomes zero immediately"],
      optionsHi: ["नियत रहती है (Remains constant)", "लगातार बढ़ती है", "लगातार घटती है", "तुरंत शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): In free fall (ignoring air resistance), potential energy converts into kinetic energy, keeping total mechanical energy constant.\nस्पष्टीकरण (Hi): मुक्त पतन के दौरान स्थितिज ऊर्जा गतिज ऊर्जा में बदलती है, जिससे कुल यांत्रिक ऊर्जा हमेशा संरक्षित (नियत) रहती है।"
    },
    {
      qEn: "What is the commercial unit of electrical energy?",
      qHi: "विद्युत ऊर्जा की व्यावसायिक इकाई (commercial unit) क्या है?",
      optionsEn: ["Kilowatt-hour (kWh) or Unit", "Joule", "Watt-second", "Volt-ampere"],
      optionsHi: ["किलोवाट-घंटा (kWh) या यूनिट", "जूल", "वाट-सेकंड", "वोल्ट-एम्पियर"],
      answer: 0,
      exp: "Explanation (En): Electrical energy consumed in homes is measured in Kilowatt-hours (1 \\text{ kWh} = 3.6 \\times 10^6 \\text{ J}).ns\nस्पष्टीकरण (Hi): घरों में खर्च होने वाली विद्युत ऊर्जा को किलोवाट-घंटा (kWh) या 'यूट्रिन' में मापा जाता है।"
    },
    {
      qEn: "How much is one Kilowatt-hour (kWh) equal to in Joules?",
      qHi: "एक किलोवाट-घंटा (kWh) कितने जूल के बराबर होता है?",
      optionsEn: ["3.6 \\times 10^6 \\text{ J}", "10^3 \\text{ J}", "3.6 \\times 10^3 \\text{ J}", "10^6 \\text{ J}"],
      optionsHi: ["3.6 \\times 10^6 \\text{ J}", "10^3 \\text{ J}", "3.6 \\times 10^3 \\text{ J}", "10^6 \\text{ J}"],
      answer: 0,
      exp: "Explanation (En): 1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ Joules}.\nस्पष्टीकरण (Hi): 1 \\text{ kWh} = 1000 \\text{ W} \\times 3600 \\text{ s} = 3.6 \\times 10^6 \\text{ जूल} होता है।"
    },
    {
      qEn: "What is the work-energy theorem?",
      qHi: "कार्य-ऊर्जा प्रमेय (work-energy theorem) क्या कहती है?",
      optionsEn: ["Work done by all forces equals change in kinetic energy", "Work done equals potential energy", "Work done is zero", "Force equals power"],
      optionsHi: ["सभी बलों द्वारा किया गया कुल कार्य गतिज ऊर्जा में परिवर्तन के बराबर होता है", "किया गया कार्य स्थितिज ऊर्जा के बराबर होता है", "किया गया कार्य शून्य होता है", "बल शक्ति के बराबर होता है"],
      answer: 0,
      exp: "Explanation (En): The work-energy theorem states that the net work done on an object equals its change in kinetic energy (W = \\Delta KE).\nस्पष्टीकरण (Hi): कार्य-ऊर्जा प्रमेय के अनुसार किसी वस्तु पर किया गया कुल कार्य उसकी गतिज ऊर्जा में परिवर्तन के बराबर होता है।"
    },
    {
      qEn: "When a person carries a heavy load on their head while walking on a flat horizontal road, how much work is done by gravity?",
      qHi: "जब कोई व्यक्ति समतल क्षैतिज सड़क पर सिर पर भारी बोझ लेकर चलता है, तो गुरुत्वाकर्षण बल द्वारा कितना कार्य किया जाता है?",
      optionsEn: ["Zero", "Maximum", "Positive", "Negative"],
      optionsHi: ["शून्य (Zero)", "अधिकतम", "धनात्मक", "ऋणात्मक"],
      answer: 0,
      exp: "Explanation (En): Gravity acts vertically downwards while displacement is horizontal (90^\\circ angle), so work done by gravity is zero.\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण बल नीचे की ओर और विस्थापन क्षैतिज दिशा में है (90^\\circ कोण), अतः गुरुत्वाकर्षण द्वारा कार्य शून्य है।"
    },
    {
      qEn: "What happens to the potential energy of a body when it is lifted vertically upwards?",
      qHi: "जब किसी वस्तु को ऊर्ध्वाधर रूप से ऊपर उठाया जाता है, तो उसकी स्थितिज ऊर्जा पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
      optionsHi: ["बढ़ जाती है (Increases)", "घट जाती है", "अपरिवर्तित रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Lifting a body against gravity requires positive work, which increases its gravitational potential energy (mgh).\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण के विरुद्ध वस्तु को ऊपर उठाने पर किया गया कार्य उसकी स्थितिज ऊर्जा (mgh) को बढ़ाता है।"
    },
    {
      qEn: "Which type of energy is possessed by a flowing river?",
      qHi: "बहती हुई नदी में किस प्रकार की ऊर्जा होती है?",
      optionsEn: ["Both kinetic and potential energy", "Only potential energy", "Only kinetic energy", "Chemical energy"],
      optionsHi: ["गतिज और स्थितिज ऊर्जा दोनों (Both kinetic and potential)", "केवल स्थितिज ऊर्जा", "केवल गतिज ऊर्जा", "रासायनिक ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): A flowing river has motion (kinetic energy) and is at some height above sea level (potential energy).\nस्पष्टीकरण (Hi): बहती नदी में वेग के कारण गतिज ऊर्जा और ऊंचाई पर होने के कारण स्थितिज ऊर्जा दोनों होती हैं।"
    },
    {
      qEn: "What is the efficiency of an ideal machine?",
      qHi: "एक आदर्श मशीन (ideal machine) की दक्षता (efficiency) कितनी होती है?",
      optionsEn: ["100% (or 1)", "Zero", "50%", "Infinite"],
      optionsHi: ["100% (या 1)", "शून्य", "50%", "अनंत"],
      answer: 0,
      exp: "Explanation (En): An ideal machine has no energy losses (no friction), so its output work equals input work, giving 100% efficiency.\nस्पष्टीकरण (Hi): आदर्श मशीन में कोई ऊर्जा हानि (घर्षण आदि) नहीं होती, अतः उसकी दक्षता 100% होती है।"
    },
    {
      qEn: "What is the primary energy transformation in a hydroelectric power plant?",
      qHi: "जलविद्युत पावर प्लांट (hydroelectric power plant) में मुख्य ऊर्जा रूपांतरण क्या होता है?",
      optionsEn: ["Potential energy of water to kinetic energy to electrical energy", "Chemical energy to electrical energy", "Solar energy to electrical energy", "Nuclear energy to electrical energy"],
      optionsHi: ["जल की स्थितिज ऊर्जा -> गतिज ऊर्जा -> विद्युत ऊर्जा", "रासायनिक ऊर्जा से विद्युत ऊर्जा", "सौर ऊर्जा से विद्युत ऊर्जा", "परमाणु ऊर्जा से विद्युत ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Stored potential energy of dam water converts into kinetic energy of flowing water, which spins turbines to generate electricity.\nस्पष्टीकरण (Hi): बांध के पानी की स्थितिज ऊर्जा गतिज ऊर्जा में और फिर टरबाइन द्वारा विद्युत ऊर्जा में बदलती है।"
    },
    {
      qEn: "Which physical quantity remains conserved in all types of collisions (elastic and inelastic)?",
      qHi: "सभी प्रकार की टक्करों (प्रत्यस्थ और अप्रत्याशित) में कौन सी भौतिक राशि हमेशा संरक्षित रहती है?",
      optionsEn: ["Total linear momentum", "Total kinetic energy", "Total mechanical energy", "Velocity"],
      optionsHi: ["कुल रैखिक संवेग (Total linear momentum)", "कुल गतिज ऊर्जा", "कुल यांत्रिक ऊर्जा", "वेग"],
      answer: 0,
      exp: "Explanation (En): Total linear momentum is universally conserved in all isolated collisions according to Newton's laws.\nस्पष्टीकरण (Hi): न्यूटन के नियमों के अनुसार किसी भी विलगित निकाय में कुल रैखिक संवेग हमेशा संरक्षित रहता है।"
    },
    {
      qEn: "What happens to kinetic energy when a fast-moving bullet embeds itself inside a wooden block?",
      qHi: "जब तेज गति से चलने वाली गोली किसी लकड़ी के गुटके में धंस जाती है, तो उसकी गतिज ऊर्जा का क्या होता है?",
      optionsEn: ["Converts into heat, sound, and internal energy", "Disappears completely", "Converts into potential energy only", "Doubles in magnitude"],
      optionsHi: ["ऊष्मा, ध्वनि और आंतरिक ऊर्जा में बदल जाती है", "पूरी तरह गायब हो जाती है", "केवल स्थितिज ऊर्जा में बदलती है", "परिमाण में दोगुनी हो जाती है"],
      answer: 0,
      exp: "Explanation (En): The kinetic energy of the bullet is dissipated into thermal energy (heat), sound, and work done in deforming the wood.\nस्पष्टीकरण (Hi): गोली की गतिज ऊर्जा कार्य, ऊष्मा और ध्वनि ऊर्जा के रूप में क्षय हो जाती है।"
    },
    {
      qEn: "How does the power of a pump vary if it pumps the same amount of water to double the height in half the time?",
      qHi: "यदि कोई पंप उतनी ही मात्रा में पानी को आधे समय में दोगुनी ऊंचाई तक पहुंचाता है, तो उसकी शक्ति (power) कितने गुना हो जाएगी?",
      optionsEn: ["4 times", "2 times", "8 times", "Unchanged"],
      optionsHi: ["4 गुना (4 times)", "2 गुना", "8 गुना", "अपरिवर्तित"],
      answer: 0,
      exp: "Explanation (En): Power P = \\frac{mgh}{t}. If height h is doubled (2h) and time t is halved (t/2), power becomes \\frac{2}{1/2} = 4 times.\nस्पष्टीकरण (Hi): शक्ति P = \\frac{mgh}{t} है। ऊंचाई दोगुनी और समय आधा करने पर शक्ति 2 / (1/2) = 4 गुना हो जाएगी।"
    },
    {
      qEn: "What is the angle between force and displacement for maximum positive work done?",
      qHi: "अधिकतम धनात्मक कार्य के लिए बल और विस्थापन के बीच का कोण कितना होना चाहिए?",
      optionsEn: ["0^\\circ", "90^\\circ", "180^\\circ", "45^\\circ"],
      optionsHi: ["0^\\circ", "90^\\circ", "180^\\circ", "45^\\circ"],
      answer: 0,
      exp: "Explanation (En): Work W = F s \\cos(\\theta). When \\theta = 0^\\circ, \\cos(0^\\circ) = 1, giving maximum positive work (W = Fs).\nस्पष्टीकरण (Hi): जब \\theta = 0^\\circ हो, तो \\cos(0) = 1 होता है, जिससे कार्य अधिकतम धनात्मक होता है।"
    },
    {
      qEn: "What is the work done by a frictional force acting on a sliding box?",
      qHi: "फिसलते हुए बक्से पर कार्य करने वाले घर्षण बल द्वारा किया गया कार्य कैसा होता है?",
      optionsEn: ["Negative", "Positive", "Zero", "Infinite"],
      optionsHi: ["ऋणात्मक (Negative)", "धनात्मक", "शून्य", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Friction opposes motion, meaning force and displacement are in opposite directions (180^\\circ), so work done is negative.\nस्पष्टीकरण (Hi): घर्षण गति का विरोध करता है, अतः बल और विस्थापन विपरीत दिशा (180^\\circ) में होने के कारण कार्य ऋणात्मक होता है।"
    }
  ],
    "Gravitation": [
    {
      qEn: "What does Universal Law of Gravitation state about the gravitational force between two point masses?",
      qHi: "सार्वभौमिक गुरुत्वाकर्षण का नियम दो बिंदु द्रव्यमानों के बीच के गुरुत्वाकर्षण बल के बारे में क्या कहता है?",
      optionsEn: ["Directly proportional to the product of masses and inversely proportional to the square of the distance between them", "Inversely proportional to the product of masses", "Directly proportional to the cube of distance", "Independent of distance"],
      optionsHi: ["द्रव्यमानों के गुणनफल के समानुपाती और उनके बीच की दूरी के वर्ग के व्युत्क्रमानुपाती होता है", "द्रव्यमानों के गुणनफल के व्युत्क्रमानुपाती होता है", "दूरी के घन के समानुपाती होता है", "दूरी से स्वतंत्र होता है"],
      answer: 0,
      exp: "Explanation (En): Newton's Law of Gravitation states F = \\frac{G m_1 m_2}{r^2}.\nस्पष्टीकरण (Hi): न्यूटन के गुरुत्वाकर्षण नियम के अनुसार बल F = \\frac{G m_1 m_2}{r^2} होता है।"
    },
    {
      qEn: "What is the value of the Universal Gravitational Constant (G) in SI units?",
      qHi: "SI इकाइयों में सार्वभौमिक गुरुत्वाकर्षण नियतांक (G) का मान कितना होता है?",
      optionsEn: ["6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2", "9.8 \\text{ m/s}^2", "3 \\times 10^8 \\text{ m/s}", "8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})"],
      optionsHi: ["6.67 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2", "9.8 \\text{ m/s}^2", "3 \\times 10^8 \\text{ m/s}", "8.314 \\text{ J}/(\\text{mol}\\cdot\\text{K})"],
      answer: 0,
      exp: "Explanation (En): The value of G is experimentally found to be 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2.\nस्पष्टीकरण (Hi): G का प्रायोगिक मान 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2 होता है।"
    },
    {
      qEn: "How does acceleration due to gravity (g) vary as we go from the Earth's surface to a high altitude?",
      qHi: "पृथ्वी की सतह से अधिक ऊंचाई पर जाने पर गुरुत्वीय त्वरण (g) का मान कैसे बदलता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "Becomes zero immediately at surface"],
      optionsHi: ["घटता है (Decreases)", "बढ़ता है", "नियत रहता है", "सतह पर ही तुरंत शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): g = \\frac{G M}{(R+h)^2}. As altitude h increases, g decreases inversely with the square of the distance.\nस्पष्टीकरण (Hi): ऊंचाई h बढ़ने के साथ g का मान दूरी के वर्ग के व्युत्क्रम रूप में घटता जाता है।"
    },
    {
      qEn: "How does the value of acceleration due to gravity (g) change as we go deep inside a mine?",
      qHi: "खदान के अंदर गहराई में जाने पर गुरुत्वीय त्वरण (g) के मान पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases linearly with depth", "Increases", "Remains constant", "Becomes infinite"],
      optionsHi: ["गहराई के साथ रैखिक रूप से घटता है", "बढ़ता है", "नियत रहता है", "अनंत हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Inside the Earth, g' = g(1 - \\frac{d}{R}), so g decreases linearly as depth d increases.\nस्पष्टीकरण (Hi): पृथ्वी के भीतर g' = g(1 - \\frac{d}{R}) होता है, अतः गहराई बढ़ने पर g रैखिक रूप से घटता है।"
    },
    {
      qEn: "What is the value of acceleration due to gravity at the exact center of the Earth?",
      qHi: "पृथ्वी के ठीक केंद्र पर गुरुत्वीय त्वरण (g) का मान कितना होता है?",
      optionsEn: ["Zero", "9.8 \\text{ m/s}^2", "Maximum", "Infinite"],
      optionsHi: ["शून्य (Zero)", "9.8 \\text{ m/s}^2", "अधिकतम", "अनंत"],
      answer: 0,
      exp: "Explanation (En): At the center, depth d = R, making g' = g(1 - R/R) = 0.\nस्पष्टीकरण (Hi): केंद्र पर गहराई d = R होने के कारण g का मान शून्य हो जाता है।"
    },
    {
      qEn: "What is Kepler's Third Law of planetary motion often called?",
      qHi: "केप्लर के ग्रहों की गति के तीसरे नियम को अक्सर क्या कहा जाता है?",
      optionsEn: ["Law of Periods (T^2 \\propto R^3)", "Law of Orbits", "Law of Areas", "Law of Conservation of Energy"],
      optionsHi: ["आवर्तकाल का नियम (T^2 \\propto R^3)", "कक्षाओं का नियम", "क्षेत्रफलों का नियम", "ऊर्जा संरक्षण का नियम"],
      answer: 0,
      exp: "Explanation (En): Kepler's third law states that the square of the orbital period is proportional to the cube of the semi-major axis (T^2 \\propto R^3).\nस्पष्टीकरण (Hi): केप्लर का तीसरा नियम बताता है कि परिक्रमा काल का वर्ग अर्ध-दीर्घ अक्ष के घन के समानुपाती होता है (T^2 \\propto R^3)।"
    },
    {
      qEn: "Which of Kepler's laws states that planets sweep out equal areas in equal intervals of time?",
      qHi: "केप्लर का कौन सा नियम यह बताता है कि ग्रह समान समयातराल में समान क्षेत्रफल तय करते हैं?",
      optionsEn: ["Kepler's Second Law (Law of Areas)", "Kepler's First Law", "Kepler's Third Law", "Newton's Law of Gravitation"],
      optionsHi: ["केप्लर का दूसरा नियम (क्षेत्रफलों का नियम)", "केप्लर का पहला नियम", "केप्लर का तीसरा नियम", "न्यूटन का गुरुत्वाकर्षण नियम"],
      answer: 0,
      exp: "Explanation (En): Kepler's second law is the law of areas, which implies conservation of angular momentum.\nस्पष्टीकरण (Hi): केप्लर का दूसरा नियम क्षेत्रफलों का नियम है, जो कोणीय संवेग संरक्षण पर आधारित है।"
    },
    {
      qEn: "What is the shape of planetary orbits around the Sun according to Kepler's First Law?",
      qHi: "केप्लर के पहले नियम के अनुसार सूर्य के चारों ओर ग्रहों की कक्षाओं का आकार कैसा होता है?",
      optionsEn: ["Elliptical with the Sun at one focus", "Perfect circle", "Parabolic", "Hyperbolic"],
      optionsHi: ["दीर्घवृत्ताकार (Elliptical) जिसमें सूर्य एक फोकस पर होता है", "पूर्ण वृत्त", "परवलयिक", "अतिपरवलयिक"],
      answer: 0,
      exp: "Explanation (En): Kepler's first law states that all planets move in elliptical orbits with the Sun located at one of the foci.\nस्पष्टीकरण (Hi): केप्लर के पहले नियम के अनुसार सभी ग्रह सूर्य के चारों ओर दीर्घवृत्ताकार कक्षाओं में चक्कर लगाते हैं।"
    },
    {
      qEn: "What is the binding energy of a satellite orbiting the Earth?",
      qHi: "पृथ्वी की परिक्रमा कर रहे उपग्रह की बंधन ऊर्जा (binding energy) किसके बराबर होती है?",
      optionsEn: ["Negative of its total mechanical energy", "Positive of its kinetic energy", "Equal to potential energy", "Zero"],
      optionsHi: ["इसकी कुल यांत्रिक ऊर्जा का ऋणात्मक", "इसकी गतिज ऊर्जा का धनात्मक", "स्थितिज ऊर्जा के बराबर", "शून्य"],
      answer: 0,
      exp: "Explanation (En): Binding energy is the energy required to make total energy zero, which is equal to -E_{total}.\nस्पष्टीकरण (Hi): बंधन ऊर्जा वह ऊर्जा है जो उपग्रह को अनंत तक भेजने के लिए चाहिए, जो कुल ऊर्जा के ऋणात्मक मान के बराबर होती है।"
    },
    {
      qEn: "Why do astronauts feel weightlessness inside an orbiting space station?",
      qHi: "परिक्रमा कर रहे अंतरिक्ष स्टेशन के अंदर अंतरिक्ष यात्री भारहीनता क्यों महसूस करते हैं?",
      optionsEn: ["Both the station and astronauts are in free fall towards the Earth with the same acceleration", "There is no gravity in space", "Centrifugal force balances gravity completely everywhere", "Air pressure is zero"],
      optionsHi: ["स्टेशन और अंतरिक्ष यात्री दोनों समान त्वरण के साथ पृथ्वी की ओर मुक्त पतन (free fall) में होते हैं", "अंतरिक्ष में गुरुत्वाकर्षण नहीं होता है", "अपकेंद्रीय बल गुरुत्वाकर्षण को पूरी तरह संतुलित करता है", "वायु दाब शून्य होता है"],
      answer: 0,
      exp: "Explanation (En): Weightlessness is due to free fall condition where the apparent weight m(g-a) = 0 because both fall together.\nस्पष्टीकरण (Hi): अंतरिक्ष स्टेशन और यात्री दोनों एक ही त्वरण से गिर रहे होते हैं, जिससे सामान्य प्रतिक्रिया बल शून्य हो जाता है।"
    },
    {
      qEn: "What is the total mechanical energy of an orbiting satellite?",
      qHi: "परिक्रमा करने वाले उपग्रह की कुल यांत्रिक ऊर्जा (total mechanical energy) कितनी होती है?",
      optionsEn: ["Negative", "Positive", "Zero", "Equal to potential energy"],
      optionsHi: ["ऋणात्मक (Negative)", "धनात्मक", "शून्य", "स्थितिज ऊर्जा के बराबर"],
      answer: 0,
      exp: "Explanation (En): Total mechanical energy E = - \\frac{G Mm}{2r}, which is always negative, representing a bound system.\nस्पष्टीकरण (Hi): कुल यांत्रिक ऊर्जा E = - \\frac{G Mm}{2r} होती है, जो ऋणात्मक होने के कारण एक बद्ध (bound) प्रणाली को दर्शाती है।"
    },
    {
      qEn: "What is gravitational potential at a point in a gravitational field defined as?",
      qHi: "गुरुत्वाकर्षण क्षेत्र में किसी बिंदु पर गुरुत्वाकर्षण विभव (gravitational potential) को किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Work done per unit mass in bringing a test mass from infinity to that point", "Force per unit mass", "Potential energy multiplied by mass", "Total energy divided by velocity"],
      optionsHi: ["अनंत से उस बिंदु तक एकांक द्रव्यमान को लाने में किया गया कार्य", "प्रति इकाई द्रव्यमान बल", "द्रव्यमान गुणा स्थितिज ऊर्जा", "वेग से विभाजित कुल ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Gravitational potential V = - \\frac{G M}{r}, representing work done per unit mass.\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण विभव एकांक परीक्षण द्रव्यमान को अनंत से लाने में किए गए कार्य के बराबर होता है।"
    },
    {
      qEn: "What happens to the orbital speed of a satellite if its orbital radius is increased?",
      qHi: "यदि किसी उपग्रह की कक्षीय त्रिज्या (orbital radius) बढ़ा दी जाए, तो उसकी कक्षीय चाल पर क्या प्रभाव पड़ेगा?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
      optionsHi: ["घट जाती है (Decreases)", "बढ़ जाती है", "नियत रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Orbital speed v_o = \\sqrt{\\frac{GM}{r}}, so v_o is inversely proportional to square root of radius r.\nस्पष्टीकरण (Hi): कक्षीय चाल v_o = \\sqrt{\\frac{GM}{r}} होती है, अतः त्रिज्या बढ़ने पर कक्षीय चाल घट जाती है।"
    },
    {
      qEn: "What is the time period of a geostationary satellite revolving around the Earth?",
      qHi: "पृथ्वी के चारों ओर चक्कर लगाने वाले भूस्थिर उपग्रह (geostationary satellite) का आवर्तकाल कितना होता है?",
      optionsEn: ["24 hours", "12 hours", "48 hours", "1 hour"],
      optionsHi: ["24 घंटे (24 hours)", "12 घंटे", "48 घंटे", "1 घंटा"],
      answer: 0,
      exp: "Explanation (En): A geostationary satellite matches Earth's rotational period, which is exactly 24 hours.\nस्पष्टीकरण (Hi): भूस्थिर उपग्रह पृथ्वी के घूर्णन काल के बराबर यानी ठीक 24 घंटे का आवर्तकाल रखता है।"
    },
    {
      qEn: "At what approximate height above the Earth's surface do geostationary satellites orbit?",
      qHi: "भूस्थिर उपग्रह पृथ्वी की सतह से लगभग कितनी ऊंचाई पर स्थापित किए जाते हैं?",
      optionsEn: ["35,786 \\text{ km} (approx 36,000 \\text{ km})", "400 \\text{ km}", "10,000 \\text{ km}", "100,000 \\text{ km}"],
      optionsHi: ["35,786 \\text{ km} (लगभग 36,000 \\text{ km})", "400 \\text{ km}", "10,000 \\text{ km}", "100,000 \\text{ km}"],
      answer: 0,
      exp: "Explanation (En): Geostationary orbit is located at an altitude of about 35,786 \\text{ km} above the equator.\nस्पष्टीकरण (Hi): भूस्थिर कक्षा भूमध्य रेखा से लगभग 35,786 \\text{ km} ऊंचाई पर स्थित होती है।"
    },
    {
      qEn: "What is the dependency of escape velocity (v_e) on the mass (m) of the object being projected from Earth?",
      qHi: "पृथ्वी से प्रक्षेपित की जाने वाली वस्तु के द्रव्यमान (m) पर पलायन वेग (v_e) की निर्भरता कैसी होती है?",
      optionsEn: ["Independent of the mass of the object", "Directly proportional to mass", "Inversely proportional to mass", "Proportional to square of mass"],
      optionsHi: ["वस्तु के द्रव्यमान से स्वतंत्र होता है", "द्रव्यमान के समानुपाती होता है", "द्रव्यमान के व्युत्क्रमानुपाती होता है", "द्रव्यमान के वर्ग के समानुपाती होता है"],
      answer: 0,
      exp: "Explanation (En): Escape velocity formula is v_e = \\sqrt{2gR}, which has no mass term 'm', proving it is independent of projectile mass.\nस्पष्टीकरण (Hi): पलायन वेग का सूत्र v_e = \\sqrt{2gR} है जिसमें द्रव्यमान m नहीं आता, अतः यह वस्तु के द्रव्यमान पर निर्भर नहीं करता।"
    },
    {
      qEn: "If the Earth suddenly shrinks to half its radius without any change in its mass, what will happen to the acceleration due to gravity (g) on its surface?",
      qHi: "यदि पृथ्वी अपने द्रव्यमान में परिवर्तन किए बिना अचानक अपनी त्रिज्या की आधी हो जाए, तो उसकी सतह पर गुरुत्वीय त्वरण (g) पर क्या प्रभाव पड़ेगा?",
      optionsEn: ["Becomes 4 times", "Becomes 2 times", "Halves", "Remains unchanged"],
      optionsHi: ["चार गुना हो जाएगा", "दोगुना हो जाएगा", "आधा हो जाएगा", "अपरिवर्तित रहेगा"],
      answer: 0,
      exp: "Explanation (En): g = \\frac{GM}{R^2}. If radius R is halved (R/2), g increases by (1/2)^2 = 4 times.\nस्पष्टीकरण (Hi): g \\propto 1/R^2 होता है। त्रिज्या आधी होने पर g का मान चार गुना हो जाता है।"
    },
    {
      qEn: "What is the ratio of escape velocity (v_e) to orbital velocity (v_o) for a satellite orbiting close to the Earth's surface?",
      qHi: "पृथ्वी की सतह के पास परिक्रमा करने वाले उपग्रह के पलायन वेग (v_e) और कक्षीय वेग (v_o) का अनुपात कितना होता है?",
      optionsEn: ["\\sqrt{2} : 1", "2 : 1", "1 : \\sqrt{2}", "1 : 2"],
      optionsHi: ["\\sqrt{2} : 1", "2 : 1", "1 : \\sqrt{2}", "1 : 2"],
      answer: 0,
      exp: "Explanation (En): v_e = \\sqrt{2gR} and v_o = \\sqrt{gR}, so their ratio is \\sqrt{2} : 1.\nस्पष्टीकरण (Hi): v_e = \\sqrt{2}v_o होता है, इसलिए दोनों का अनुपात \\sqrt{2} : 1 है।"
    },
    {
      qEn: "Which scientist experimentally measured the value of the Universal Gravitational Constant (G) using a torsion balance?",
      qHi: "किस वैज्ञानिक ने मरोड़ी तुला (torsion balance) का उपयोग करके सार्वभौमिक गुरुत्वाकर्षण नियतांक (G) का प्रायोगिक मान ज्ञात किया था?",
      optionsEn: ["Henry Cavendish", "Isaac Newton", "Johannes Kepler", "Galileo Galilei"],
      optionsHi: ["हेनरी कैवेंडिश (Henry Cavendish)", "आइजैक न्यूटन", "जोहान्स केप्लर", "गैलीलियो गैलीली"],
      answer: 0,
      exp: "Explanation (En): Henry Cavendish measured G in 1798 using a sensitive torsion balance apparatus.\nस्पष्टीकरण (Hi): हेनरी कैवेंडिश ने 1798 में मरोड़ी तुला (torsion balance) के प्रयोग से G का सटीक मान निकाला था।"
    },
    {
      qEn: "What causes ocean tides on Earth?",
      qHi: "पृथ्वी पर महासागरीय ज्वार-भाटा (ocean tides) का मुख्य कारण क्या है?",
      optionsEn: ["Gravitational pull of the Moon and the Sun", "Earth's rotation only", "Wind friction on ocean surface", "Magnetic field of the Earth"],
      optionsHi: ["चंद्रमा और सूर्य का गुरुत्वाकर्षण खिंचाव", "केवल पृथ्वी का घूर्णन", "समुद्री सतह पर हवा का घर्षण", "पृथ्वी का चुंबकीय क्षेत्र"],
      answer: 0,
      exp: "Explanation (En): Ocean tides are primarily caused by the gravitational attraction exerted by the Moon and, to a lesser extent, the Sun on Earth's oceans.\nस्पष्टीकरण (Hi): महासागरों में ज्वार-भाटा मुख्य रूप से चंद्रमा और सूर्य के गुरुत्वाकर्षण खिंचाव के कारण उत्पन्न होते हैं।"
    },
    {
      qEn: "Why is the gravitational pull of the Sun on the Earth less effective in producing tides than the Moon's pull, even though the Sun is much more massive?",
      qHi: "सूर्य का द्रव्यमान बहुत अधिक होने के बावजूद, चंद्रमा की तुलना में ज्वار उत्पन्न करने में सूर्य का गुरुत्वाकर्षण खिंचाव कम प्रभावी क्यों होता है?",
      optionsEn: ["Because the Sun is much farther away, and tidal force depends inversely on the cube of the distance", "Because the Sun has no mass", "Because Earth rotates too fast", "Because of solar wind"],
      optionsHi: ["क्योंकि सूर्य बहुत अधिक दूर है, और ज्वारीय बल दूरी के घन के व्युत्क्रमानुपाती होता है", "क्योंकि सूर्य का कोई द्रव्यमान नहीं है", "क्योंकि पृथ्वी बहुत तेजी से घूमती है", "सौर हवा के कारण"],
      answer: 0,
      exp: "Explanation (En): Tidal force depends on \\frac{1}{r^3}. Although the Sun is more massive, its enormous distance r reduces its tidal effect significantly compared to the Moon.\nस्पष्टीकरण (Hi): ज्वारीय बल दूरी के घन (\\frac{1}{r^3}) पर निर्भर करता है; अत्यधिक दूरी के कारण सूर्य का ज्वारीय प्रभाव चंद्रमा से कम होता है।"
    },
    {
      qEn: "What is the trajectory of a body projected horizontally from a high tower with a velocity less than orbital velocity?",
      qHi: "कक्षीय वेग से कम वेग से ऊंची मीनार से क्षैतिज रूप से फेंकी गई वस्तु का पथ कैसा होता है?",
      optionsEn: ["A parabolic path ending on the Earth's surface", "A circular orbit", "An elliptical orbit", "A straight vertical line"],
      optionsHi: ["पृथ्वी की सतह पर समाप्त होने वाला परवलयिक पथ (Parabolic path)", "वृत्ताकार कक्षा", "दीर्घवृत्ताकार कक्षा", "सीधी ऊर्ध्वाधर रेखा"],
      answer: 0,
      exp: "Explanation (En): With velocity less than orbital velocity, the projectile falls back to Earth under gravity following a parabolic trajectory.\nस्पष्टीकरण (Hi): कक्षीय वेग से कम गति होने पर वस्तु गुरुत्वाकर्षण के कारण परवलयिक पथ बनाते हुए पृथ्वी पर वापस गिर जाती है।"
    },
    {
      qEn: "What happens to the potential energy of a satellite as its orbital radius increases?",
      qHi: "जैसे-जैसे उपग्रह की कक्षीय त्रिज्या बढ़ती है, उसकी स्थितिज ऊर्जा (potential energy) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases (becomes less negative)", "Decreases", "Remains constant", "Becomes zero instantly"],
      optionsHi: ["बढ़ जाती है (कम ऋणात्मक हो जाती है)", "घट जाती है", "नियत रहती है", "तुरंत शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Potential energy PE = - \\frac{G Mm}{r}. As r increases, the negative value decreases, meaning potential energy increases.\nस्पष्टीकरण (Hi): स्थितिज ऊर्जा PE = - \\frac{G Mm}{r} होती है। r बढ़ने पर ऋणात्मक मान कम होता है, जिसका अर्थ है कि स्थितिज ऊर्जा बढ़ती है।"
    },
    {
      qEn: "What is the weight of an object inside a satellite orbiting the Earth?",
      qHi: "पृथ्वी की परिक्रमा कर रहे उपग्रह के अंदर किसी वस्तु का भार कितना होता है?",
      optionsEn: ["Zero", "Equal to surface weight", "Half of surface weight", "Infinite"],
      optionsHi: ["शून्य (Zero)", "सतह पर वजन के बराबर", "सतह का आधा", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Inside an orbiting satellite, everything experiences free fall, resulting in apparent weightlessness (zero weight).\nस्पष्टीकरण (Hi): परिक्रमा करते उपग्रह के भीतर सभी वस्तुएं मुक्त पतन की स्थिति में होती हैं, जिससे आभासी भार शून्य होता है।"
    },
    {
      qEn: "If the distance between two masses is tripled, how does the gravitational force between them change?",
      qHi: "यदि दो द्रव्यमानों के बीच की दूरी तीन गुनी कर दी जाए, तो उनके बीच का गुरुत्वाकर्षण बल कितना हो जाएगा?",
      optionsEn: ["Reduced to 1/9th of its original value", "Reduced to 1/3rd", "Increased 3 times", "Increased 9 times"],
      optionsHi: ["अपने मूल मान का 1/9वां हिस्सा रह जाएगा", "1/3 रह जाएगा", "3 गुना बढ़ जाएगा", "9 गुना बढ़ जाएगा"],
      answer: 0,
      exp: "Explanation (En): F \\propto 1/r^2. If distance r is tripled (3r), force becomes 1/3^2 = 1/9 of original.\nस्पष्टीकरण (Hi): बल दूरी के वर्ग के व्युत्क्रमानुपाती होता है (1/r^2)। दूरी 3 गुनी होने पर बल 1/9 गुना रह जाएगा।"
    },
    {
      qEn: "Which of the following bodies has the maximum gravitational pull on you right now?",
      qHi: "निम्नलिखित में से किस पिंड का गुरुत्वाकर्षण खिंचाव इस समय आप पर सबसे अधिक है?",
      optionsEn: ["The Earth", "The Sun", "The Moon", "Jupiter"],
      optionsHi: ["पृथ्वी (The Earth)", "सूर्य", "चंद्रमा", "बृहस्पति"],
      answer: 0,
      exp: "Explanation (En): Although the Sun is massive, the Earth is extremely close to us, making its gravitational pull on our bodies the maximum.\nस्पष्टीकरण (Hi): हालांकि सूर्य बहुत विशाल है, लेकिन पृथ्वी अत्यधिक निकट होने के कारण हम पर सबसे अधिक gravitational pull डालती है।"
    },
    {
      qEn: "What is the principal reason why the atmosphere stays bound to the Earth?",
      qHi: "वायुमंडल के पृथ्वी से बंधे रहने का मुख्य कारण क्या है?",
      optionsEn: ["Earth's gravitational pull", "Solar wind pressure", "Magnetic field of the Earth", "Centrifugal force of rotation"],
      optionsHi: ["पृथ्वी का गुरुत्वाकर्षण खिंचाव", "सौर हवा का दबाव", "पृथ्वी का चुंबकीय क्षेत्र", "घूर्णन का अपकेंद्रीय बल"],
      answer: 0,
      exp: "Explanation (En): The gravitational attraction of the Earth prevents gas molecules of the atmosphere from escaping into space.\nस्पष्टीकरण (Hi): पृथ्वी का गुरुत्वाकर्षण बल वायुमंडल की गैसों को अंतरिक्ष में जाने से रोकता है।"
    },
    {
      qEn: "What is the relation between escape velocity (v_e) and radius of planet (R) assuming constant density?",
      qHi: "नियत घनत्व मानते हुए पलायन वेग (v_e) और ग्रह की त्रिज्या (R) के बीच क्या संबंध है?",
      optionsEn: ["v_e \\propto R", "v_e \\propto \\frac{1}{R}", "v_e \\propto R^2", "v_e is independent of R"],
      optionsHi: ["v_e \\propto R", "v_e \\propto \\frac{1}{R}", "v_e \\propto R^2", "v_e, R से स्वतंत्र है"],
      answer: 0,
      exp: "Explanation (En): Since mass M = \\frac{4}{3}\\pi R^3 \\rho, substituting into v_e = \\sqrt{\\frac{2GM}{R}} gives v_e \\propto R.\nस्पष्टीकरण (Hi): घनत्व को नियत मानने पर द्रव्यमान M \\propto R^3 होता है, जिससे v_e \\propto R प्राप्त होता है।"
    },
    {
      qEn: "What happens to the total energy of a satellite if it loses energy due to air friction in the upper atmosphere?",
      qHi: "यदि कोई उपग्रह ऊपरी वायुमंडल में वायु घर्षण के कारण ऊर्जा खो देता है, तो उसकी कुल ऊर्जा पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases (becomes more negative)", "Increases", "Remains constant", "Becomes zero"],
      optionsHi: ["घट जाती है (अधिक ऋणात्मक हो जाती है)", "बढ़ जाती है", "नियत रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Energy loss causes the satellite to spiral down to a lower orbit, decreasing its altitude, increasing its speed, but its total energy decreases (becomes more negative).\nस्पष्टीकरण (Hi): घर्षण से ऊर्जा कम होने पर उपग्रह नीचे की कक्षा में आ जाता है, जिससे उसकी कुल ऊर्जा घट जाती है (अधिक ऋणात्मक हो जाती है)।"
    },
    {
      qEn: "Why does an apple fall from a tree towards the Earth instead of the Earth moving towards the apple?",
      qHi: "पेड़ से सेब पृथ्वी की ओर क्यों गिरता है, न कि पृथ्वी सेब की ओर जाती है?",
      optionsEn: ["According to Newton's Second Law, the Earth's huge mass results in a negligible acceleration compared to the apple", "Earth has no gravitational force on itself", "The apple exerts no force on Earth", "Air resistance pushes the apple down"],
      optionsHi: ["न्यूटन के दूसरे नियम के अनुसार, पृथ्वी के विशाल द्रव्यमान के कारण उसका त्वरण सेब की तुलना में नगण्य होता है", "पृथ्वी का खुद पर कोई गुरुत्वाकर्षण नहीं होता", "सेब पृथ्वी पर कोई बल नहीं लगाता", "वायु प्रतिरोध सेब को नीचे धकेलता है"],
      answer: 0,
      exp: "Explanation (En): Both exert equal and opposite force (F = ma), but Earth's mass is so large that its acceleration is virtually zero.\nस्पष्टीकरण (Hi): दोनों समान बल लगाते हैं, परंतु पृथ्वी का द्रव्यमान इतना अधिक है कि उसका त्वरण नगण्य होता है।"
    }
  ],
    "General Properties of Matter": [
    {
      qEn: "What is the property by virtue of which a body regains its original shape and size after the removal of the deforming force?",
      qHi: "वह गुण जिसके कारण कोई वस्तु विरूपक बल (deforming force) को हटाने के बाद अपने मूल आकार और आकृति को पुनः प्राप्त कर लेती है, क्या कहलाता है?",
      optionsEn: ["Elasticity", "Plasticity", "Viscosity", "Surface tension"],
      optionsHi: ["प्रत्यास्थता (Elasticity)", "प्लास्टिकता (Plasticity)", "श्यानता (Viscosity)", "पृष्ठ तनाव (Surface tension)"],
      answer: 0,
      exp: "Explanation (En): Elasticity is the ability of a deformed body to return to its original shape and size when the deforming force is removed.\nस्पष्टीकरण (Hi): प्रत्यास्थता (Elasticity) किसी पदार्थ का वह गुण है जिसके कारण विरूपक बल हटाने पर वह अपनी मूल अवस्था में लौट आती है।"
    },
    {
      qEn: "Which of the following substances is considered to be nearly a perfectly elastic body?",
      qHi: "निम्नलिखित में से किस पदार्थ को लगभग पूर्णतः प्रत्यास्थ (perfectly elastic) माना जाता है?",
      optionsEn: ["Quartz fiber", "Wet clay", "Paraffin wax", "Rubber"],
      optionsHi: ["क्वार्ट्ज फाइबर (Quartz fiber)", "गीली मिट्टी", "पैराफिन मोम", "रबर"],
      answer: 0,
      exp: "Explanation (En): Quartz fiber exhibits almost zero internal friction and near-perfect elasticity, even better than rubber in terms of permanent deformation.\nस्पष्टीकरण (Hi): क्वार्ट्ज फाइबर (Quartz fiber) में आंतरिक घर्षण लगभग नगण्य होता है, इसलिए यह पूर्ण प्रत्यास्थता के सबसे करीब होता है।"
    },
    {
      qEn: "What does Hooke's Law state within the elastic limit?",
      qHi: "प्रत्यास्थता सीमा (elastic limit) के भीतर हूक का नियम क्या कहता है?",
      optionsEn: ["Stress is directly proportional to strain", "Strain is directly proportional to force", "Stress is equal to strain", "Stress is independent of strain"],
      optionsHi: ["प्रतिबल (Stress) विकृति (Strain) के समानुपाती होता है", "विकृति बल के समानुपाती होती है", "प्रतिबल विकृति के बराबर होता है", "प्रतिबल विकृति से स्वतंत्र होता है"],
      answer: 0,
      exp: "Explanation (En): Hooke's Law states that within elastic limits, stress \\sigma is directly proportional to strain \\epsilon (Stress = E \\times Strain).\nस्पष्टीकरण (Hi): हूक के नियम के अनुसार प्रत्यास्थ सीमा के अंदर प्रतिबल विकृति के सीधे समानुपाती होता है।"
    },
    {
      qEn: "What is the SI unit of stress and modulus of elasticity?",
      qHi: "प्रतिबल (stress) और प्रत्यास्थता गुणांक (modulus of elasticity) का SI मात्रक क्या है?",
      optionsEn: ["\\text{N/m}^2 (or Pascal)", "Newton", "Joule", "Watt"],
      optionsHi: ["\\text{N/m}^2 (या पास्कल)", "न्यूटन", "जूल", "वाट"],
      answer: 0,
      exp: "Explanation (En): Stress = Force / Area, so its SI unit is \\text{N/m}^2 or Pascal (Pa).\nस्पष्टीकरण (Hi): प्रतिबल = बल / क्षेत्रफल होता है, इसलिए इसका मात्रक न्यूटन प्रति वर्ग मीटर (\\text{N/m}^2) या पास्कल है।"
    },
    {
      qEn: "What is the dimensional formula of Young's Modulus of elasticity?",
      qHi: "यंग के प्रत्यास्थता गुणांक (Young's Modulus) का विमीय सूत्र क्या है?",
      optionsEn: ["[ML^{-1}T^{-2}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[ML^{-2}T^{-1}]"],
      optionsHi: ["[ML^{-1}T^{-2}]", "[MLT^{-2}]", "[ML^2T^{-2}]", "[ML^{-2}T^{-1}]"],
      answer: 0,
      exp: "Explanation (En): Young's modulus = Stress / Strain = ([ML^{-1}T^{-2}]) / (\\text{dimensionless}) = [ML^{-1}T^{-2}].\nस्पष्टीकरण (Hi): यंग गुणांक प्रतिबल और विकृति का अनुपात है, जिसकी विमा दाब के समान [ML^{-1}T^{-2}] होती है।"
    },
    {
      qEn: "What causes the spherical shape of rain drops?",
      qHi: "वर्षा की बूंदों का गोलाकार होने का मुख्य कारण क्या है?",
      optionsEn: ["Surface tension", "Viscosity", "Atmospheric pressure", "Gravity"],
      optionsHi: ["पृष्ठ तनाव (Surface tension)", "श्यानता", "वायुमंडलीय दाब", "गुरुत्वाकर्षण"],
      answer: 0,
      exp: "Explanation (En): Surface tension minimizes the surface area of a liquid volume for a given mass, resulting in a spherical shape.\nस्पष्टीकरण (Hi): पृष्ठ तनाव के कारण द्रव का पृष्ठ क्षेत्रफल न्यूनतम होने का प्रयास करता है, जिससे बूंदें गोलाकार हो जाती हैं।"
    },
    {
      qEn: "How does the surface tension of a liquid change with an increase in its temperature?",
      qHi: "तापमान बढ़ने पर किसी द्रव के पृष्ठ तनाव (surface tension) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
      optionsHi: ["घट जाता है (Decreases)", "बढ़ जाता है", "नियत रहता है", "पहले बढ़ता है फिर घटता है"],
      answer: 0,
      exp: "Explanation (En): As temperature increases, intermolecular cohesive forces weaken, causing surface tension to decrease.\nस्पष्टीकरण (Hi): तापमान बढ़ाने से अणुओं के बीच का संसंजक बल कमजोर होता है, जिससे पृष्ठ तनाव घट जाता है।"
    },
    {
      qEn: "What happens to the surface tension of water when impurities like soap or detergent are added?",
      qHi: "जब पानी में साबुन या डिटर्जेंट जैसी अशुद्धियाँ मिलाई जाती हैं, तो उसके पृष्ठ तनाव पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains unchanged", "Becomes infinite"],
      optionsHi: ["घट जाता है (Decreases)", "बढ़ जाता है", "नियत रहता है", "अनंत हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Soap or detergents are soluble impurities that lower the surface tension of water, helping it wet clothes better.\nस्पष्टीकरण (Hi): साबुन या डिटर्जेंट मिलाने से पानी का पृष्ठ तनाव कम हो जाता है, जिससे वह कपड़ों की गहराई तक सफाई कर पाता है।"
    },
    {
      qEn: "Why does the liquid rise in a capillary tube (capillary action)?",
      qHi: "केशिका नली (capillary tube) में द्रव के ऊपर चढ़ने या नीचे उतरने की घटना (केशिकत्व) का कारण क्या है?",
      optionsEn: ["Surface tension and angle of contact", "Viscosity", "Buoyancy", "Atmospheric pressure"],
      optionsHi: ["पृष्ठ तनाव और स्पर्श कोण (Surface tension and angle of contact)", "श्यानता", "उत्प्लावकता", "वायुमंडलीय दाब"],
      answer: 0,
      exp: "Explanation (En): Capillarity is governed by surface tension and the contact angle between the liquid and the capillary wall.\nस्पष्टीकरण (Hi): केशिकत्व (Capillarity) पृष्ठ तनाव और स्पर्श कोण पर निर्भर करता है।"
    },
    {
      qEn: "What is the angle of contact for pure water and glass?",
      qHi: "शुद्ध जल और कांच के बीच का स्पर्श कोण (angle of contact) कितना होता है?",
      optionsEn: ["Acute angle (approx 8^\\circ)", "Obtuse angle (135^\\circ)", "Zero (0^\\circ)", "90^\\circ"],
      optionsHi: ["न्यून कोण (लगभग 8^\\circ)", "अधिक कोण (135^\\circ)", "शून्य (0^\\circ)", "90^\\circ"],
      answer: 0,
      exp: "Explanation (En): Pure water wets glass and has an acute contact angle of about 8^\\circ.\nस्पष्टीकरण (Hi): शुद्ध जल कांच को भिगोता है और इसके लिए स्पर्श कोण न्यून कोण (8^\\circ) होता है।"
    },
    {
      qEn: "What is the angle of contact for mercury and glass?",
      qHi: "पारे (mercury) और कांच के बीच का स्पर्श कोण कितना होता है?",
      optionsEn: ["Obtuse angle (approx 135^\\circ)", "Acute angle", "Zero (0^\\circ)", "90^\\circ"],
      optionsHi: ["अधिक कोण (लगभग 135^\\circ)", "न्यून कोण", "शून्य (0^\\circ)", "90^\\circ"],
      answer: 0,
      exp: "Explanation (En): Mercury does not wet glass and forms an obtuse contact angle of about 135^\\circ.\nस्पष्टीकरण (Hi): पारा कांच को नहीं भिगोता है और इसके लिए स्पर्श कोण अधिक कोण (135^\\circ) होता है।"
    },
    {
      qEn: "What is the property of fluids by virtue of which they offer resistance to relative motion between adjacent layers?",
      qHi: "द्रवों का वह गुण जिसके कारण वे अपनी क्रमिक परतों के बीच होने वाली आपेक्षिक गति का विरोध करते हैं, क्या कहलाता है?",
      optionsEn: ["Viscosity", "Surface tension", "Elasticity", "Capillarity"],
      optionsHi: ["श्यानता (Viscosity)", "पृष्ठ तनाव", "प्रत्यास्थता", "केशिकत्व"],
      answer: 0,
      exp: "Explanation (En): Viscosity is the internal friction of fluids that opposes relative motion between adjacent fluid layers.\nस्पष्टीकरण (Hi): श्यानता (Viscosity) द्रवों का आंतरिक घर्षण है जो परतों के बीच की गति का विरोध करता है।"
    },
    {
      qEn: "How does the viscosity of liquids change with an increase in temperature?",
      qHi: "तापमान बढ़ने पर द्रवों की श्यानता (viscosity) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
      optionsHi: ["घट जाती है (Decreases)", "बढ़ जाती है", "नियत रहता है", "पहले बढ़ती है फिर घटती है"],
      answer: 0,
      exp: "Explanation (En): As liquid temperature rises, thermal agitation weakens intermolecular forces, decreasing viscosity.\nस्पष्टीकरण (Hi): तापमान बढ़ने पर द्रवों के अणुओं के बीच का आकर्षण बल कमजोर होता है, जिससे श्यानता घट जाती है।"
    },
    {
      qEn: "How does the viscosity of gases change with an increase in temperature?",
      qHi: "तापमान बढ़ने पर गैसों की श्यानता पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      optionsHi: ["बढ़ जाती है (Increases)", "घट जाती है", "नियत रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Gas viscosity increases with temperature because higher thermal velocity increases molecular momentum transfer.\nस्पष्टीकरण (Hi): गैसों में तापमान बढ़ने पर आणविक वेग और संवेग स्थानांतरण बढ़ता है, जिससे गैसों की श्यानता बढ़ जाती है।"
    },
    {
      qEn: "What is the SI unit of coefficient of viscosity?",
      qHi: "श्यानता गुणांक (coefficient of viscosity) का SI मात्रक क्या है?",
      optionsEn: ["\\text{Pa}\\cdot\\text{s} (or Poiseuille)", "\\text{N/m}^2", "Joule", "Watt"],
      optionsHi: ["\\text{Pa}\\cdot\\text{s} (या पॉस्युइले - Poiseuille)", "\\text{N/m}^2", "जूल", "वाट"],
      answer: 0,
      exp: "Explanation (En): The SI unit of viscosity coefficient \\eta is Pascal-second (\\text{Pa}\\cdot\\text{s}) or Poiseuille (Pl).\nस्पष्टीकरण (Hi): श्यानता गुणांक \\eta का SI मात्रक पास्कल-सेकंड (\\text{Pa}\\cdot\\text{s}) या पॉस्युइले है।"
    },
    {
      qEn: "What does Stokes' Law give an expression for?",
      qHi: "स्टोक्स का नियम (Stokes' Law) किसके लिए व्यंजक प्रदान करता है?",
      optionsEn: ["Viscous drag force acting on a small spherical body moving through a fluid", "Surface tension of liquid drops", "Capillary rise height", "Terminal velocity equation only"],
      optionsHi: ["द्रव में गतिमान छोटे गोलीय पिंड पर लगने वाला श्यान बल (viscous drag)", "द्रव बूंदों का पृष्ठ तनाव", "केशिकीय ऊंचाई", "केवल सीमांत वेग"],
      answer: 0,
      exp: "Explanation (En): Stokes' Law gives viscous drag force F = 6 \\pi \\eta r v for a small sphere in a viscous fluid.\nस्पष्टीकरण (Hi): स्टोक्स का नियम श्यान द्रव में गिरते छोटे गोले पर लगने वाले श्यान बल F = 6 \\pi \\eta r v का सूत्र देता है।"
    },
    {
      qEn: "What is the principle behind the working of a hydraulic lift or hydraulic press?",
      qHi: "हाइड्रोलिक लिफ्ट या हाइड्रोलिक प्रेस के काम करने का मूल सिद्धांत क्या है?",
      optionsEn: ["Pascal's Law", "Archimedes' Principle", "Bernoulli's Theorem", "Stokes' Law"],
      optionsHi: ["पास्कल का नियम (Pascal's Law)", "आर्किमिडीज का सिद्धांत", "बर्नोली की प्रमेय", "स्टोक्स का नियम"],
      answer: 0,
      exp: "Explanation (En): Pascal's Law states that pressure applied to an enclosed fluid is transmitted undiminished in every direction.\nस्पष्टीकरण (Hi): पास्कल के नियम के अनुसार बंद बर्तन में द्रव पर डाला गया दाब सभी दिशाओं में समान रूप से संचरित होता है।"
    },
    {
      qEn: "According to Archimedes' Principle, what is the upward buoyant force equal to?",
      qHi: "आर्किमिडीज के सिद्धांत के अनुसार, ऊपर की ओर लगने वाला उत्प्लावक बल (buoyant force) किसके बराबर होता है?",
      optionsEn: ["Weight of the fluid displaced by the submerged object", "Total weight of the object", "Surface tension force", "Viscous drag force"],
      optionsHi: ["डुबोई गई वस्तु द्वारा विस्थापित द्रव के भार के बराबर", "वस्तु के कुल भार के बराबर", "पृष्ठ तनाव बल", "श्यान बल"],
      answer: 0,
      exp: "Explanation (En): Archimedes' Principle states that buoyant force equals the weight of fluid displaced by the object.\nस्पष्टीकरण (Hi): आर्किमिडीज सिद्धांत के अनुसार उत्प्लावक बल वस्तु द्वारा हटाए गए द्रव के भार के बराबर होता है।"
    },
    {
      qEn: "What does Bernoulli's Theorem for fluid flow fundamentally represent?",
      qHi: "द्रव प्रवाह के लिए बर्नोली की प्रमेय (Bernoulli's Theorem) मूल रूप से किसका प्रतिनिधित्व करती है?",
      optionsEn: ["Conservation of Energy for flowing fluids", "Conservation of Momentum", "Conservation of Mass", "Conservation of Angular Momentum"],
      optionsHi: ["प्रवाहमान द्रवों के लिए ऊर्जा संरक्षण (Conservation of Energy)", "संवेग संरक्षण", "द्रव्यमान संरक्षण", "कोणीय संवेग संरक्षण"],
      answer: 0,
      exp: "Explanation (En): Bernoulli's Theorem is derived from the principle of conservation of mechanical energy for an ideal fluid.\nस्पष्टीकरण (Hi): बर्नोली की प्रमेय आदर्श द्रव के लिए यांत्रिक ऊर्जा संरक्षण (Conservation of Energy) के नियम पर आधारित है।"
    },
    {
      qEn: "According to Bernoulli's principle, where the speed of fluid flow is high, what happens to the fluid pressure?",
      qHi: "बर्नोली के सिद्धांत के अनुसार, जहाँ द्रव के प्रवाह का वेग अधिक होता है, वहाँ द्रव का दाब (pressure) कितना हो जाता है?",
      optionsEn: ["Low pressure", "High pressure", "Remains unchanged", "Becomes zero"],
      optionsHi: ["दाब कम हो जाता है (Low pressure)", "दाब बढ़ जाता है", "नियत रहता है", "शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): High fluid velocity corresponds to low pressure, and vice versa, maintaining constant total mechanical energy.\nस्पष्टीकरण (Hi): बर्नोली प्रमेय के अनुसार जहाँ वेग अधिक होता है वहाँ दाब कम और जहाँ वेग कम होता है वहाँ दाब अधिक होता है।"
    },
    {
      qEn: "What is the phenomenon responsible for the working of an atomizer (perfume sprayer) or airplane wings lift?",
      qHi: "परफ्यूम स्प्रेयर (atomizer) या हवाई जहाज के पंखों के उठने (lift) के पीछे कौन सा सिद्धांत कार्य करता है?",
      optionsEn: ["Bernoulli's Principle", "Pascal's Law", "Archimedes' Principle", "Hooke's Law"],
      optionsHi: ["बर्नोली का सिद्धांत (Bernoulli's Principle)", "पास्कल का नियम", "आर्किमिडीज का सिद्धांत", "हूक का नियम"],
      answer: 0,
      exp: "Explanation (En): High speed air creates low pressure regions, pulling liquid up in atomizers or generating lift on aerofoils via Bernoulli's principle.\nस्पष्टीकरण (Hi): तेज हवा कम दाब क्षेत्र बनाती है, जो बर्नोली सिद्धांत के आधार पर परफ्यूम खींचने या विमान को लिफ्ट देने में मदद करता है।"
    },
    {
      qEn: "What is the equation of continuity for incompressible fluid flow in a pipe of varying cross-section?",
      qHi: "परिवर्ती अनुप्रस्थ काट वाली नली में असम्पीड्य द्रव के प्रवाह के लिए सांतत्य समीकरण (Equation of Continuity) क्या है?",
      optionsEn: ["A_1 v_1 = A_2 v_2 = \\text{constant}", "A_1 / v_1 = A_2 / v_2", "v_1 / A_1 = v_2 / A_2", "A_1 + v_1 = A_2 + v_2"],
      optionsHi: ["A_1 v_1 = A_2 v_2 = \\text{नियत}", "A_1 / v_1 = A_2 / v_2", "v_1 / A_1 = v_2 / A_2", "A_1 + v_1 = A_2 + v_2"],
      answer: 0,
      exp: "Explanation (En): Equation of continuity represents conservation of mass, given by A v = \\text{constant} (Area \\times velocity).\nस्पष्टीकरण (Hi): सांतत्य समीकरण द्रव्यमान संरक्षण पर आधारित है, जिसका रूप A_1 v_1 = A_2 v_2 (अर्थात Av = \\text{नियत}) होता है।"
    },
    {
      qEn: "What is Torricelli's Law used to calculate?",
      qHi: "टोरीसेली का नियम (Torricelli's Law) किसकी गणना के लिए उपयोग किया जाता है?",
      optionsEn: ["Velocity of efflux (speed of liquid flowing out of a small orifice in a tank)", "Viscosity of oil", "Surface tension of water", "Elastic limit of wires"],
      optionsHi: ["बर्तन के छिद्र से बाहर निकलने वाले द्रव का बहिःस्राव वेग (Velocity of efflux)", "तेल की श्यानता", "पानी का पृष्ठ तनाव", "तारों की प्रत्यास्थता सीमा"],
      answer: 0,
      exp: "Explanation (En): Torricelli's Law states that speed of efflux v = \\sqrt{2gh}, same as a body falling freely from height h.\nस्पष्टीकरण (Hi): टोरीसेली नियम के अनुसार टैंक के छिद्र से द्रव के बाहर निकलने का वेग v = \\sqrt{2gh} होता है।"
    },
    {
      qEn: "What is the breaking stress of a wire dependent upon?",
      qHi: "किसी तार का भंजन प्रतिबल (breaking stress) किस पर निर्भर करता है?",
      optionsEn: ["Material of the wire only (independent of its length and cross-sectional area)", "Length of the wire", "Thickness (area) of the wire", "Temperature only"],
      optionsHi: ["केवल तार के पदार्थ पर (लंबाई और मोटाई से स्वतंत्र)", "तार की लंबाई पर", "तार की मोटाई (क्षेत्रफल) पर", "केवल तापमान पर"],
      answer: 0,
      exp: "Explanation (En): Breaking stress is a characteristic property of the material and does not depend on the dimensions of the wire.\nस्पष्टीकरण (Hi): भंजन प्रतिबल तार के पदार्थ का विशिष्ट गुण है; यह तार की मोटाई या लंबाई पर निर्भर नहीं करता।"
    },
    {
      qEn: "Why is it easier to wash clothes in hot water soap solution?",
      qHi: "गर्म पानी और साबुन के घोल में कपड़े धोना आसान क्यों होता है?",
      optionsEn: ["Hot water lowers surface tension and increases wetting ability", "Hot water increases surface tension", "Hot water increases viscosity", "Hot water stops chemical reactions"],
      optionsHi: ["गर्म पानी पृष्ठ तनाव को कम करता है और गीला करने की क्षमता बढ़ाता है", "गर्म पानी पृष्ठ तनाव बढ़ाता है", "गर्म पानी श्यानता बढ़ाता है", "गर्म पानी रासायनिक प्रतिक्रिया रोकता है"],
      answer: 0,
      exp: "Explanation (En): Heating lowers surface tension, allowing soap solution to penetrate finer pores of clothes easily.\nस्पष्टीकरण (Hi): गर्म करने से पृष्ठ तनाव घट जाता है, जिससे साबुन का घोल कपड़ों के रेशों में गहराई तक जाकर मैल साफ करता है।"
    },
    {
      qEn: "What happens to the potential energy stored in a stretched wire when it snaps?",
      qHi: "खींचे गए तार के टूटने पर उसमें संचित स्थितिज ऊर्जा का क्या होता है?",
      optionsEn: ["Converts into heat energy (wire gets warm)", "Converts into kinetic energy of flight", "Vanishes completely", "Turns into sound only"],
      optionsHi: ["ऊष्मा ऊर्जा में बदल जाती है (तार गर्म हो जाता है)", "उड़ने की गतिज ऊर्जा में बदलती है", "पूरी तरह गायब हो जाती है", "केवल ध्वनि में बदलती है"],
      answer: 0,
      exp: "Explanation (En): The elastic potential energy stored in the deformed wire is dissipated as heat, warming up the broken ends.\nस्पष्टीकरण (Hi): तार के टूटने पर उसमें संचित प्रत्यास्थ ऊर्जा ऊष्मा ऊर्जा में बदल जाती है, जिससे तार हल्का गर्म हो जाता है।"
    },
    {
      qEn: "What does a high value of bulk modulus indicate about a substance?",
      qHi: "आयतन प्रत्यास्थता गुणांक (Bulk modulus) का उच्च मान किसी पदार्थ के बारे में क्या दर्शाता है?",
      optionsEn: ["The substance is highly incompressible (rigid)", "The substance is highly compressible", "The substance is liquid", "The substance has zero elasticity"],
      optionsHi: ["पदार्थ अत्यधिक असम्पीड्य (अत्यंत कठोर) है", "पदार्थ अत्यधिक संपीड्य है", "पदार्थ द्रव है", "पदार्थ की प्रत्यास्थता शून्य है"],
      answer: 0,
      exp: "Explanation (En): Bulk modulus is the inverse of compressibility; a high bulk modulus means the material resists volume change strongly.\nस्पष्टीकरण (Hi): आयतन प्रत्यास्थता गुणांक संपीड्यता का व्युत्क्रम है; उच्च मान का अर्थ है कि पदार्थ आसानी से संपीडित नहीं होता (कठोर है)। आयुष्मान।"
    },
    {
      qEn: "What is the excess pressure inside a spherical soap bubble of radius 'r' and surface tension 'T?",
      qHi: "त्रिज्या 'r' और पृष्ठ तनाव 'T' वाले गोलाकार साबुन के बुलबुले के अंदर अतिरिक्त दाब (excess pressure) कितना होता है?",
      optionsEn: ["\\frac{4T}{r}", "\\frac{2T}{r}", "\\frac{T}{r}", "\\frac{8T}{r}"],
      optionsHi: ["\\frac{4T}{r}", "\\frac{2T}{r}", "\\frac{T}{r}", "\\frac{8T}{r}"],
      answer: 0,
      exp: "Explanation (En): A soap bubble has two free surfaces (inner and outer), so excess pressure \\Delta P = \\frac{4T}{r}. (For a liquid drop with one surface, it is \\frac{2T}{r}).\nस्पष्टीकरण (Hi): साबुन के बुलबुले में दो मुक्त सतहें होती हैं, इसलिए अतिरिक्त दाब \\frac{4T}{r} होता है (एक सतह वाली बूंद के लिए \\frac{2T}{r} होता है)।"
    },
    {
      qEn: "What is the excess pressure inside a liquid drop of radius 'r' and surface tension 'T?",
      qHi: "त्रिज्या 'r' और पृष्ठ तनाव 'T' वाली तरल बूंद के अंदर अतिरिक्त दाब कितना होता है?",
      optionsEn: ["\\frac{2T}{r}", "\\frac{4T}{r}", "\\frac{T}{r}", "\\frac{T}{2r}"],
      optionsHi: ["\\frac{2T}{r}", "\\frac{4T}{r}", "\\frac{T}{r}", "\\frac{T}{2r}"],
      answer: 0,
      exp: "Explanation (En): A liquid drop has only one free surface, so the excess pressure inside is \\Delta P = \\frac{2T}{r}.\nस्पष्टीकरण (Hi): तरल बूंद की केवल एक ही मुक्त सतह होती है, अतः इसके अंदर अतिरिक्त दाब \\frac{2T}{r} होता है।"
    },
    {
      qEn: "Why do small insects walk effortlessly on the surface of still water?",
      qHi: "छोटे कीड़े शांत पानी की सतह पर आसानी से कैसे चल लेते हैं?",
      optionsEn: ["Due to surface tension creating an elastic skin-like effect on water surface", "Due to buoyancy", "Due to high viscosity", "Due to magnetic repulsion"],
      optionsHi: ["पृष्ठ तनाव के कारण पानी की सतह पर एक इलास्टिक झिल्ली जैसा प्रभाव बनने से", "उत्प्लावकता के कारण", "उच्च श्यानता के कारण", "चुंबकीय प्रतिकर्षक के कारण"],
      answer: 0,
      exp: "Explanation (En): Surface tension creates an upward cohesive force that acts like a stretched elastic membrane, supporting light insects.\nस्पष्टीकरण (Hi): पृष्ठ तनाव पानी की सतह को एक तनी हुई झिल्ली की तरह व्यवहार कराता है, जिससे हल्के कीड़े डूबते नहीं हैं।"
    }
  ],
    "Heat and Temperature": [
    {
      qEn: "What is the SI unit of heat energy?",
      qHi: "ऊष्मा ऊर्जा (heat energy) का SI मात्रक क्या है?",
      optionsEn: ["Joule", "Kelvin", "Watt", "Pascal"],
      optionsHi: ["जूल (Joule)", "केल्विन", "वाट", "पास्कल"],
      answer: 0,
      exp: "Explanation (En): Heat is a form of energy, so its SI unit is the Joule (J).\nस्पष्टीकरण (Hi): ऊष्मा एक प्रकार की ऊर्जा है, इसलिए इसका SI मात्रक जूल (Joule) है।"
    },
    {
      qEn: "At what temperature are the Celsius and Fahrenheit temperature scales equal?",
      qHi: "किस तापमान पर सेल्सियस और फारेनहाइट तापमान पैमाने बराबर होते हैं?",
      optionsEn: ["-40 degrees", "0 degrees", "100 degrees", "-273 degrees"],
      optionsHi: ["-40 डिग्री (-40°)", "0 डिग्री", "100 डिग्री", "-273 डिग्री"],
      answer: 0,
      exp: "Explanation (En): Using formula \\frac{C}{5} = \\frac{F-32}{9}, setting C = F = x gives \\frac{x}{5} = \\frac{x-32}{9} \\Rightarrow x = -40.\nस्पष्टीकरण (Hi): सूत्र \\frac{C}{5} = \\frac{F-32}{9} में C = F रखने पर मान -40 प्राप्त होता है।"
    },
    {
      qEn: "What is the absolute zero temperature on the Kelvin scale?",
      qHi: "केल्विन पैमाने पर परम शून्य ताप (absolute zero temperature) कितना होता है?",
      optionsEn: ["0 K", "273.15 K", "-273.15 K", "100 K"],
      optionsHi: ["0 K", "273.15 K", "-273.15 K", "100 K"],
      answer: 0,
      exp: "Explanation (En): Absolute zero is the theoretical temperature at which molecular motion ceases, defined as 0 K or -273.15^\\circ\\text{C}.\nस्पष्टीकरण (Hi): परम शून्य तापमान वह सैद्धांतिक तापमान है जहाँ आणविक गति रुक जाती है, जो 0 K (-273.15°C) होता है।"
    },
    {
      qEn: "Which mode of heat transfer does not require any material medium?",
      qHi: "ऊष्मा स्थानांतरण की किस विधि को किसी भौतिक माध्यम की आवश्यकता नहीं होती है?",
      optionsEn: ["Radiation", "Conduction", "Convection", "Both conduction and convection"],
      optionsHi: ["विकिरण (Radiation)", "चालन", "संवहन", "चालन और संवहन दोनों"],
      answer: 0,
      exp: "Explanation (En): Radiation transfers heat via electromagnetic waves and can travel through a vacuum (no medium needed).\nस्पष्टीकरण (Hi): विकिरण (Radiation) विद्युत चुम्बकीय तरंगों के रूप में होता है और इसके संचरण के लिए किसी माध्यम की आवश्यकता नहीं होती।"
    },
    {
      qEn: "What is the primary mode of heat transfer in solids?",
      qHi: "ठोस पदार्थों में ऊष्मा स्थानांतरण की प्राथमिक विधि कौन सी है?",
      optionsEn: ["Conduction", "Convection", "Radiation", "Advection"],
      optionsHi: ["चालन (Conduction)", "संवहन", "विकिरण", "अभिवहन"],
      answer: 0,
      exp: "Explanation (En): Conduction is the process where heat transfers through direct atomic/molecular contact in solids.\nस्पष्टीकरण (Hi): ठोसों में परमाणुओं की टक्कर और कंपन के माध्यम से ऊष्मा का संचरण चालन (Conduction) द्वारा होता है।"
    },
    {
      qEn: "What is the primary mode of heat transfer in liquids and gases (fluids)?",
      qHi: "द्रवों और गैसों (तरल पदार्थों) में ऊष्मा स्थानांतरण की प्राथमिक विधि कौन सी है?",
      optionsEn: ["Convection", "Conduction", "Radiation", "Reflection"],
      optionsHi: ["संवहन (Convection)", "चालन", "विकिरण", "परावर्तन"],
      answer: 0,
      exp: "Explanation (En): Convection involves the actual bulk movement of fluid molecules carrying heat.\nस्पष्टीकरण (Hi): द्रवों और गैसों में अणुओं के वास्तविक प्रवाह (आना-जाना) द्वारा ऊष्मा का संचरण संवहन (Convection) कहलाता है।"
    },
    {
      qEn: "Why is water used as an effective coolant in car radiators and industrial machinery?",
      qHi: "कार के रेडिएटर और औद्योगिक मशीनों में पानी को प्रभावी शीतलक (coolant) के रूप में क्यों उपयोग किया जाता है?",
      optionsEn: ["Because of its exceptionally high specific heat capacity", "Because it is cheap", "Because it has low density", "Because it freezes easily"],
      optionsHi: ["इसकी असाधारण रूप से उच्च विशिष्ट ऊष्मा धारिता के कारण", "क्योंकि यह सस्ता है", "क्योंकि इसका घनत्व कम है", "क्योंकि यह आसानी से जम जाता है"],
      answer: 0,
      exp: "Explanation (En): Water has one of the highest specific heat capacities (4184 \\text{ J}/(\\text{kg}\\cdot\\text{K})), allowing it to absorb large amounts of heat with a minimal temperature rise.\nस्पष्टीकरण (Hi): पानी की विशिष्ट ऊष्मा धारिता बहुत अधिक होती है, जिससे यह कम तापमान वृद्धि पर अधिक ऊष्मा अवशोषित कर सकता है।"
    },
    {
      qEn: "What is latent heat of fusion of ice?",
      qHi: "बर्फ की गलन की गुप्त ऊष्मा (latent heat of fusion) कितनी होती है?",
      optionsEn: ["Approx 3.34 \\times 10^5 \\text{ J/kg}", "2.26 \\times 10^6 \\text{ J/kg}", "4200 \\text{ J/kg}", "Zero"],
      optionsHi: ["लगभग 3.34 \\times 10^5 \\text{ J/kg}", "2.26 \\text{ J/kg}", "4200 \\text{ J/kg}", "शून्य"],
      answer: 0,
      exp: "Explanation (En): Latent heat of fusion is the heat required to convert unit mass of solid ice to liquid water at 0°C without temperature change.\nस्पष्टीकरण (Hi): बर्फ की गलन की गुप्त ऊष्मा लगभग 3.34 \\times 10^5 \\text{ J/kg} होती है।"
    },
    {
      qEn: "What is latent heat of vaporization of water?",
      qHi: "पानी के वाष्पन की गुप्त ऊष्मा (latent heat of vaporization) कितनी होती है?",
      optionsEn: ["Approx 2.26 \\times 10^6 \\text{ J/kg}", "3.34 \\times 10^5 \\text{ J/kg}", "1000 \\text{ J/kg}", "Infinity"],
      optionsHi: ["लगभग 2.26 \\times 10^6 \\text{ J/kg}", "3.34 \\times 10^5 \\text{ J/kg}", "1000 \\text{ J/kg}", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Latent heat of vaporization is the energy needed to transform liquid water into steam at 100°C.\nस्पष्टीकरण (Hi): पानी को 100°C पर भाप में बदलने के लिए आवश्यक वाष्पन की गुप्त ऊष्मा 2.26 \\times 10^6 \\text{ J/kg} होती है।"
    },
    {
      qEn: "What anomaly does water exhibit between 0°C and 4°C?",
      qHi: "पानी 0°C और 4°C के बीच कौन सा असामान्य (anomalous) व्यवहार प्रदर्शित करता है?",
      optionsEn: ["Water contracts upon heating from 0°C to 4°C (density is maximum at 4°C)", "Water expands continuously", "Water freezes instantly", "Water becomes gas at 4°C"],
      optionsHi: ["0°C से 4°C तक गर्म करने पर पानी सिकुड़ता है (घनत्व 4°C पर अधिकतम होता है)", "पानी लगातार फैलता है", "पानी तुरंत जम जाता है", "पानी 4°C पर गैस बन जाता है"],
      answer: 0,
      exp: "Explanation (En): Anomalous expansion of water: water contracts as temperature rises from 0°C to 4°C, reaching maximum density at 4°C.\nस्पष्टीकरण (Hi): पानी का असामान्य प्रसार: 0°C से 4°C तक गर्म करने पर पानी का आयतन घटता है और घनत्व अधिकतम (4°C पर) होता है।"
    },
    {
      qEn: "What does Wien's Displacement Law relate?",
      qHi: "वीन का विस्थापन नियम (Wien's Displacement Law) किससे संबंधित है?",
      optionsEn: ["Wavelength of maximum emission of a blackbody is inversely proportional to its absolute temperature", "Total energy emitted is proportional to temperature to the fourth power", "Rate of cooling", "Thermal conductivity"],
      optionsHi: ["कृष्णिका (blackbody) के अधिकतम उत्सर्जन की तरंगदैर्ध्य उसके परम ताप के व्युत्क्रमानुपाती होती है", "उत्सर्जित कुल ऊर्जा तापमान की चौथी घात के समानुपाती होती है", "शीतलन की दर", "ऊष्मीय चालकता"],
      answer: 0,
      exp: "Explanation (En): Wien's Law states \\lambda_{max} T = \\text{constant}, meaning peak wavelength shifts to shorter values as temperature increases.\nस्पष्टीकरण (Hi): वीन के नियम के अनुसार \\lambda_{max} T = \\text{नियत} होता है, यानी तापमान बढ़ने पर अधिकतम तरंगदैर्ध्य कम हो जाती है।"
    },
    {
      qEn: "What does Stefan-Boltzmann Law state about total energy radiated by a blackbody?",
      qHi: "स्टीफन-बोल्ट्जमैन नियम (Stefan-Boltzmann Law) किसी कृष्णिका द्वारा विकิर्ण कुल ऊर्जा के बारे में क्या कहता है?",
      optionsEn: ["Emitted radiant energy per unit surface area is directly proportional to the fourth power of absolute temperature (E = \\sigma T^4)", "Proportional to temperature itself", "Proportional to square of temperature", "Independent of temperature"],
      optionsHi: ["प्रति एकांक क्षेत्रफल से उत्सर्जित ऊर्जा परम ताप की चौथी घात के समानुपाती होती है (E = \\sigma T^4)", "तापमान के सीधे समानुपाती होती है", "तापमान के वर्ग के समानुपाती होती है", "तापमान से स्वतंत्र होती है"],
      answer: 0,
      exp: "Explanation (En): Stefan-Boltzmann law states total emissive power E = \\sigma T^4, where \\sigma is Stefan's constant.\nस्पष्टीकरण (Hi): स्टीफन-बोल्ट्जमैन नियम के अनुसार कुल उत्सर्जित ऊष्मा ऊर्जा परम तापमान की चौथी घात के समानुपाती होती है।"
    },
    {
      qEn: "What is Newton's Law of Cooling related to?",
      qHi: "न्यूटन का शीतलन नियम (Newton's Law of Cooling) किससे संबंधित है?",
      optionsEn: ["Rate of loss of heat of a body is directly proportional to the temperature difference between the body and its surroundings", "Rate of absorption of heat", "Boiling point of liquids", "Thermal expansion of solids"],
      optionsHi: ["वस्तु के ऊष्मा क्षय की दर उसके और परिवेश के बीच के तापांतर के समानुपाती होती है", "ऊष्मा के अवशोषण की दर", "द्रवों का क्वथनांक", "ठोसों का तापीय प्रसार"],
      answer: 0,
      exp: "Explanation (En): Newton's Law of Cooling states that \\frac{dQ}{dt} = -k(T - T_s), valid for small temperature differences.\nस्पष्टीकरण (Hi): न्यूटन के शीतलन नियम के अनुसार किसी वस्तु के ठंडे होने की दर उसके और आसपास के वातावरण के तापांतर के समानुपाती होती है।"
    },
    {
      qEn: "What is the thermodynamic scale of temperature called?",
      qHi: "तापमान के ऊष्मप्रवैगिकी पैमाने (thermodynamic scale) को क्या कहा जाता है?",
      optionsEn: ["Kelvin scale", "Celsius scale", "Fahrenheit scale", "Rankine scale"],
      optionsHi: ["केल्विन पैमाना (Kelvin scale)", "सेल्सियस पैमाना", "फारेनहाइट पैमाना", "रैंकिन पैमाना"],
      answer: 0,
      exp: "Explanation (En): The Kelvin scale is the absolute thermodynamic temperature scale internationally adopted in SI units.\nस्पष्टीकरण (Hi): केल्विन पैमाने को अंतरराष्ट्रीय रूप से स्वीकृत ऊष्मप्रवैगिकी (thermodynamic) तापमान पैमाना माना जाता है।"
    },
    {
      qEn: "What is the coefficient of volume expansion related to linear expansion coefficient (\\alpha)?",
      qHi: "आयतन प्रसार गुणांक (\\gamma) का रैखिक प्रसार गुणांक (\\alpha) के साथ क्या संबंध है?",
      optionsEn: ["\\gamma = 3\\alpha", "\\gamma = 2\\alpha", "\\gamma = \\alpha", "\\gamma = \\alpha / 3"],
      optionsHi: ["\\gamma = 3\\alpha", "\\gamma = 2\\alpha", "\\gamma = \\alpha", "\\gamma = \\alpha / 3"],
      answer: 0,
      exp: "Explanation (En): The relationship between linear (\\alpha), areal (\\beta), and volume (\\gamma) expansion coefficients is \\alpha : \\beta : \\gamma = 1 : 2 : 3, so \\gamma = 3\\alpha.\nस्पष्टीकरण (Hi): रैखिक (\\alpha), क्षेत्रीय (\\beta) और आयतन (\\gamma) प्रसार गुणांकों में \\alpha : \\beta : \\gamma = 1 : 2 : 3 का अनुपात होता है, अतः \\gamma = 3\\alpha।"
    },
    {
      qEn: "What is the relationship between areal expansion coefficient (\\beta) and linear expansion coefficient (\\alpha)?",
      qHi: "क्षेत्रीय प्रसार गुणांक (\\beta) और रैखिक प्रसार गुणांक (\\alpha) के बीच क्या संबंध है?",
      optionsEn: ["\\beta = 2\\alpha", "\\beta = 3\\alpha", "\\beta = \\alpha", "\\beta = \\alpha / 2"],
      optionsHi: ["\\beta = 2\\alpha", "\\beta = 3\\alpha", "\\beta = \\alpha", "\\beta = \\alpha / 2"],
      answer: 0,
      exp: "Explanation (En): Areal expansion coefficient \\beta is equal to twice the linear expansion coefficient (2\\alpha).\nस्पष्टीकरण (Hi): क्षेत्रीय प्रसार गुणांक \\beta रैखिक प्रसार गुणांक \\alpha का दोगुना होता है।"
    },
    {
      qEn: "What is the first law of thermodynamics a statement of?",
      qHi: "ऊष्मागतिकी का प्रथम नियम (First Law of Thermodynamics) किसका कथन है?",
      optionsEn: ["Conservation of Energy", "Conservation of Momentum", "Conservation of Mass", "Entropy increase"],
      optionsHi: ["ऊर्जा संरक्षण का नियम (Conservation of Energy)", "संवेग संरक्षण", "द्रव्यमान संरक्षण", "एंट्रॉपी में वृद्धि"],
      answer: 0,
      exp: "Explanation (En): The First Law of Thermodynamics (dQ = dU + dW) is essentially the law of conservation of energy applied to thermodynamic systems.\nस्पष्टीकरण (Hi): ऊष्मागतिकी का प्रथम नियम वास्तव में ऊष्मागतिक निकायों पर लागू होने वाला ऊर्जा संरक्षण का नियम है।"
    },
    {
      qEn: "What does the Second Law of Thermodynamics introduce?",
      qHi: "ऊष्मागतिकी का दूसरा नियम (Second Law of Thermodynamics) क्या अवधारणा प्रस्तुत करता है?",
      optionsEn: ["Concept of Entropy and direction of spontaneous heat flow", "Conservation of total energy", "Absolute zero temperature", "Thermal equilibrium condition"],
      optionsHi: ["एंट्रॉपी की अवधारणा और स्वतःस्फूर्त ऊष्मा प्रवाह की दिशा", "कुल ऊर्जा का संरक्षण", "परम शून्य तापमान", "तापीय संतुलन की स्थिति"],
      answer: 0,
      exp: "Explanation (En): The Second Law introduces entropy and states that heat cannot spontaneously flow from a colder body to a hotter body without external work.\nस्पष्टीकरण (Hi): दूसरा नियम एंट्रॉपी की अवधारणा देता है और बताता है कि ऊष्मा बिना बाहरी कार्य के ठंडी वस्तु से गर्म वस्तु की ओर स्वतः प्रवाहित नहीं हो सकती।"
    },
    {
      qEn: "What is the efficiency of a Carnot engine operating between temperatures T_1 (source) and T_2 (sink)?",
      qHi: "तापमान T_1 (स्रोतः स्रोत) और T_2 (सिंक) के बीच कार्य कर रहे कार्नोट इंजन की दक्षता (efficiency) कितनी होती है?",
      optionsEn: ["\\eta = 1 - \\frac{T_2}{T_1}", "\\eta = 1 - \\frac{T_1}{T_2}", "\\eta = \\frac{T_1}{T_2}", "\\eta = \\frac{T_2 - T_1}{T_2}"],
      optionsHi: ["\\eta = 1 - \\frac{T_2}{T_1}", "\\eta = 1 - \\frac{T_1}{T_2}", "\\eta = \\frac{T_1}{T_2}", "\\eta = \\frac{T_2 - T_1}{T_2}"],
      answer: 0,
      exp: "Explanation (En): Carnot engine efficiency depends only on absolute temperatures of sink (T_2) and source (T_1), given by \\eta = 1 - \\frac{T_2}{T_1}.\nस्पष्टीकरण (Hi): कार्नोट इंजन की दक्षता केवल सिंक और स्रोत के तापमान पर निर्भर करती है: \\eta = 1 - \\frac{T_2}{T_1}।"
    },
    {
      qEn: "What is triple point of water?",
      qHi: "पानी का त्रिक बिंदु (triple point of water) क्या होता है?",
      optionsEn: ["The unique temperature and pressure at which ice, liquid water, and water vapor coexist in thermal equilibrium", "Boiling point of water", "Freezing point of water", "Absolute zero"],
      optionsHi: ["वह विशिष्ट तापमान और दाब जिस पर बर्फ, तरल पानी और जलवाष्प तापीय संतुलन में सह-अस्तित्व में होते हैं", "पानी का क्वथनांक", "पानी का हिमांक", "परम शून्य"],
      answer: 0,
      exp: "Explanation (En): The triple point of water occurs at 273.16 \\text{ K} and 611.65 \\text{ Pa}, where all three phases coexist.\nस्पष्टीकरण (Hi): पानी का त्रिक बिंदु 273.16 \\text{ K} और 611.65 \\text{ Pa} पर होता है, जहाँ पानी की तीनों अवस्थाएँ एक साथ मौजूद रहती हैं।"
    },
    {
      qEn: "What happens to the boiling point of a liquid when atmospheric pressure decreases (e.g., at high altitudes)?",
      qHi: "जब वायुमंडलीय दाब घट जाता है (जैसे अधिक ऊंचाई पर), तो किसी द्रव के क्वथनांक (boiling point) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains unchanged", "Becomes zero"],
      optionsHi: ["घट जाता है (Decreases)", "बढ़ जाता है", "नियत रहता है", "शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Lower atmospheric pressure means liquids boil at lower temperatures (e.g., water boils below 100°C in mountains).\nस्पष्टीकरण (Hi): कम वायुमंडलीय दाब होने पर द्रव कम तापमान पर ही उबलने लगते हैं (पहाड़ों पर पानी 100°C से कम पर उबलता है)।"
    },
    {
      qEn: "Why is cooking food in a pressure cooker much faster?",
      qHi: "प्रेशर कुकर में खाना जल्दी क्यों पक जाता है?",
      optionsEn: ["Increased pressure raises the boiling point of water, allowing food to cook at higher temperatures", "Pressure lowers temperature", "Steam absorbs all food", "Pressure increases specific heat"],
      optionsHi: ["बढ़ा हुआ दाब पानी का क्वथनांक बढ़ा देता है, जिससे उच्च तापमान पर खाना पकता है", "दाब तापमान कम करता है", "भाप सारा खाना सोख लेती है", "दाब विशिष्ट ऊष्मा बढ़ाता है"],
      answer: 0,
      exp: "Explanation (En): Inside a pressure cooker, pressure increases, raising water's boiling point above 100°C, speeding up cooking.\nस्पष्टीकरण (Hi): प्रेशर कुकर के अंदर दाब बढ़ने से पानी का क्वथनांक बढ़ जाता है, जिससे उच्च तापमान पर भोजन जल्दी पकता है।"
    },
    {
      qEn: "What is specific heat capacity defined as?",
      qHi: "विशिष्ट ऊष्मा धारिता (specific heat capacity) को किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Amount of heat required to raise the temperature of unit mass of a substance by 1 Kelvin (or 1°C)", "Total heat in a body", "Heat required to melt a solid", "Heat of vaporization"],
      optionsHi: ["पदार्थ के एकांक द्रव्यमान का तापमान 1 केल्विन बढ़ाने के लिए आवश्यक ऊष्मा की मात्रा", "शरीर में कुल ऊष्मा", "ठोस को पिघलाने के लिए आवश्यक ऊष्मा", "वाष्पन की ऊष्मा"],
      answer: 0,
      exp: "Explanation (En): Specific heat s = \\frac{Q}{m \\Delta T}, measured in \\text{J}/(\\text{kg}\\cdot\\text{K}).\nस्पष्टीकरण (Hi): विशिष्ट ऊष्मा s = \\frac{Q}{m \\Delta T} है, जिसका मात्रक \\text{J}/(\\text{kg}\\cdot\\text{K}) होता है।"
    },
    {
      qEn: "What is thermal conductivity?",
      qHi: "ऊष्मीय चालकता (thermal conductivity) क्या दर्शाती है?",
      optionsEn: ["The ability of a material to conduct heat through it", "The heat required to melt a substance", "Expansion rate of solids", "Radiation emission rate"],
      optionsHi: ["किसी पदार्थ की अपने अंदर से ऊष्मा चालित करने की क्षमता", "पदार्थ को पिघलाने के लिए आवश्यक ऊष्मा", "ठोसों की प्रसार दर", "विकिरण उत्सर्जन दर"],
      answer: 0,
      exp: "Explanation (En): Thermal conductivity measures how well a material conducts heat, governed by Fourier's Law.\nस्पष्टीकरण (Hi): ऊष्मीय चालकता यह बताती है कि कोई पदार्थ कितनी सुगमता से अपने अंदर ऊष्मा का चालन कर सकता है।"
    },
    {
      qEn: "What is the working principle of a refrigerator?",
      qHi: "रेफ्रिजरेटर (refrigerator) के काम करने का मूल सिद्धांत किस पर आधारित है?",
      optionsEn: ["Reverse Carnot cycle / Latent heat of vaporization of refrigerant", "Joule-Thomson effect only", "Newton's cooling law", "Expansion of gases"],
      optionsHi: ["विपरीत कार्नोट चक्र / रेफ्रिजरेंट के वाष्पन की गुप्त ऊष्मा", "केवल जूल-थॉम्पसन प्रभाव", "न्यूटन का शीतलन नियम", "गैसों का प्रसार"],
      answer: 0,
      exp: "Explanation (En): A refrigerator absorbs heat from inside via refrigerant evaporation and rejects it outside through condensation (reverse heat engine).\nस्पष्टीकरण (Hi): रेफ्रिजरेटर विपरीत कार्नोट चक्र पर काम करता है, जिसमें रेफ्रिजरेंट वाष्पित होकर अंदर की ऊष्मा खींचता है।"
    },
    {
      qEn: "What happens to the temperature of a gas during adiabatic expansion?",
      qHi: "रुद्धोष्म प्रसार (adiabatic expansion) के दौरान गैस के तापमान पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "Becomes absolute zero"],
      optionsHi: ["घट जाता है (Decreases)", "बढ़ जाता है", "नियत रहता है", "परम शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): In adiabatic expansion (Q=0), gas does work by using its internal energy, causing temperature to drop.\nस्पष्टीकरण (Hi): रुद्धोष्म प्रक्रिया में ऊष्मा का आदान-प्रदान नहीं होता (Q=0); प्रसार में गैस द्वारा कार्य करने पर उसकी आंतरिक ऊर्जा घटती है जिससे तापमान कम होता है।"
    },
    {
      qEn: "What does the Zeroth Law of Thermodynamics establish?",
      qHi: "ऊष्मागतिकी का शून्यवां नियम (Zeroth Law of Thermodynamics) क्या स्थापित करता है?",
      optionsEn: ["Concept of Temperature and thermal equilibrium", "Conservation of energy", "Entropy", "Absolute zero"],
      optionsHi: ["तापमान की अवधारणा और तापीय संतुलन (Concept of Temperature)", "ऊर्जा का संरक्षण", "एंट्रॉपी", "परम शून्य"],
      answer: 0,
      exp: "Explanation (En): The Zeroth Law states that if two bodies are in thermal equilibrium with a third body, they are in thermal equilibrium with each other, defining temperature.\nस्पष्टीकरण (Hi): शून्यवां नियम बताता है कि यदि दो वस्तुएं तीसरी वस्तु के साथ तापीय संतुलन में हैं, तो वे आपस में भी तापीय संतुलन में होंगी, जो तापमान को परिभाषित करता है।"
    },
    {
      qEn: "Why do we feel cooler when a drop of spirit or acetone is placed on our palm?",
      qHi: "हथेली पर स्प्रिट या एसीटोन की बूंद रखने पर ठंडक क्यों महसूस होती है?",
      optionsEn: ["It absorbs latent heat of vaporization from our palm, causing cooling", "It freezes our skin", "It reacts chemically with sweat", "It increases air pressure"],
      optionsHi: ["यह हथेली से वाष्पन की गुप्त ऊष्मा अवशोषित करता है जिससे ठंडक होती है", "यह हमारी त्वचा को जमा देता है", "यह पसीने के साथ रासायनिक प्रतिक्रिया करता है", "यह वायु दाब बढ़ाता है"],
      answer: 0,
      exp: "Explanation (En): Spirit/acetone evaporates rapidly, extracting the required latent heat of vaporization from the skin, resulting in a cooling sensation.\nस्पष्टीकरण (Hi): स्प्रिट या एसीटोन तेजी से वाष्पित होता है और इसके लिए आवश्यक गुप्त ऊष्मा हथेली से खींचता है, जिससे ठंडक लगती है।"
    },
    {
      qEn: "What is the main reason land breezes and sea breezes occur in coastal areas?",
      qHi: "तटीय क्षेत्रों में थल समीर (land breeze) और समुद्र समीर (sea breeze) चलने का मुख्य कारण क्या है?",
      optionsEn: ["Difference in specific heat and rate of heating/cooling of land and sea", "Earth's magnetic field", "Ocean currents", "High altitude winds"],
      optionsHi: ["भूमि और समुद्र की विशिष्ट ऊष्मा तथा गर्म/ठंडा होने की दर में अंतर", "पृथ्वी का चुंबकीय क्षेत्र", "समुद्री धाराएं", "ऊंची ऊंचाई की हवाएं"],
      answer: 0,
      exp: "Explanation (En): Land heats and cools much faster than water due to lower specific heat, creating convection currents known as sea and land breezes.\nस्पष्टीकरण (Hi): भूमि पानी की तुलना में जल्दी गर्म और ठंडी होती है, जिससे संवहन धाराओं के रूप में थल और समुद्र समीर चलती हैं।"
    },
    {
      qEn: "What is the blackbody radiation?",
      qHi: "कृष्णिका विकिरण (blackbody radiation) क्या है?",
      optionsEn: ["Radiation emitted by a perfect absorber and emitter of radiation (blackbody)", "Radiation from the sun only", "Invisible infrared rays", "X-ray emission"],
      optionsHi: ["एक आदर्श अवशोषक और उत्सर्जक (कृष्णिका) द्वारा उत्सर्जित विकिरण", "केवल सूर्य से विकिरण", "अदृश्य इन्फ्रारेड किरणें", "एक्स-रे उत्सर्जन"],
      answer: 0,
      exp: "Explanation (En): A blackbody is an idealized physical body that absorbs all incident electromagnetic radiation and emits a characteristic radiation spectrum.\nस्पष्टीकरण (Hi): कृष्णिका (Blackbody) वह आदर्श वस्तु है जो अपने ऊपर पड़ने वाली सभी प्रकार की विकिरणों को पूर्णतः अवشोषित और उत्सर्जित करती है।"
    }
  ],
    "Light": [
    {
      qEn: "What is the speed of light in a vacuum?",
      qHi: "निर्वात में प्रकाश की चाल कितनी होती है?",
      optionsEn: ["3 \\times 10^8 \\text{ m/s}", "3 \\times 10^6 \\text{ m/s}", "3.3 \\times 10^5 \\text{ m/s}", "3 \\times 10^5 \\text{ km/s}"],
      optionsHi: ["3 \\times 10^8 \\text{ m/s}", "3 \\times 10^6 \\text{ m/s}", "3.3 \\times 10^5 \\text{ m/s}", "3 \\times 10^5 \\text{ m/s}"],
      answer: 0,
      exp: "Explanation (En): The speed of light in a vacuum is approximately 3 \\times 10^8 \\text{ m/s} (or 300,000 \\text{ km/s}).nस्पष्टीकरण (Hi): निर्वात में प्रकाश की चाल लगभग 3 \\times 10^8 \\text{ m/s} होती है।"
    },
    {
      qEn: "According to the laws of reflection, what is the relationship between the angle of incidence (i) and the angle of reflection (r)?",
      qHi: "परावर्तन के नियमों के अनुसार, आपतन कोण (i) और परावर्तन कोण (r) के बीच क्या संबंध है?",
      optionsEn: ["i = r", "i > r", "i < r", "i + r = 90^\\circ"],
      optionsHi: ["i = r", "i > r", "i < r", "i + r = 90^\\circ"],
      answer: 0,
      exp: "Explanation (En): The first law of reflection states that the angle of incidence is always equal to the angle of reflection (i = r).\nस्पष्टीकरण (Hi): परावर्तन के नियम के अनुसार आपतन कोण हमेशा परावर्तन कोण के बराबर होता है (i = r)।"
    },
    {
      qEn: "What type of image is formed by a plane mirror?",
      qHi: "समतल दर्पण (plane mirror) द्वारा किस प्रकार का प्रतिबिंब बनता है?",
      optionsEn: ["Virtual, erect, and of the same size as the object", "Real, inverted, and magnified", "Virtual, inverted, and diminished", "Real, erect, and diminished"],
      optionsHi: ["आभासी, सीधा और वस्तु के आकार के समान", "वास्तविक, उल्टा और आवर्धित", "आभासी, उल्टा और छोटा", "वास्तविक, सीधा और छोटा"],
      answer: 0,
      exp: "Explanation (En): Plane mirrors always form virtual, upright images that are equal in size to the object and laterally inverted.\nस्पष्टीकरण (Hi): समतल दर्पण हमेशा आभासी, सीधा, वस्तु के बराबर आकार का और पार्श्व उलटा (laterally inverted) प्रतिबिंब बनाता है।"
    },
    {
      qEn: "What is the relationship between the focal length (f) and radius of curvature (R) of a spherical mirror?",
      qHi: "गोलीय दर्पण की फोकस दूरी (f) और वक्रता त्रिज्या (R) के बीच क्या संबंध है?",
      optionsEn: ["f = R / 2", "f = R", "f = 2R", "f = R^2"],
      optionsHi: ["f = R / 2", "f = R", "f = 2R", "f = R^2"],
      answer: 0,
      exp: "Explanation (En): For spherical mirrors of small aperture, the focal length is half the radius of curvature (f = R / 2).\nस्पष्टीकरण (Hi): गोलीय दर्पण की फोकस दूरी वक्रता त्रिज्या की आधी होती है (f = R / 2)।"
    },
    {
      qEn: "Which mirror is commonly used as a rear-view mirror in vehicles due to its wide field of view and erect image formation?",
      qHi: "अपने विस्तृत दृष्टि क्षेत्र (wide field of view) और सीधे प्रतिबिंब निर्माण के कारण वाहनों में रियर-व्यू मिरर के रूप में किस दर्पण का उपयोग किया जाता है?",
      optionsEn: ["Convex mirror", "Concave mirror", "Plane mirror", "Cylindrical mirror"],
      optionsHi: ["उत्तल दर्पण (Convex mirror)", "अवतल दर्पण", "समतल दर्पण", "बेलनाकार दर्पण"],
      answer: 0,
      exp: "Explanation (En): Convex mirrors always form diminished, erect, virtual images and provide a wider field of view.\nस्पष्टीकरण (Hi): उत्तल दर्पण हमेशा छोटा, सीधा और आभासी प्रतिबिंब बनाता है और पीछे का बहुत बड़ा क्षेत्र दिखाता है।"
    },
    {
      qEn: "Why are concave mirrors used by dentists and ENT specialists?",
      qHi: "दंत चिकित्सकों (dentists) और ENT विशेषज्ञों द्वारा अवतल दर्पणों (concave mirrors) का उपयोग क्यों किया जाता है?",
      optionsEn: ["To obtain an enlarged and erect image of small cavities or body parts", "To form a diminished image", "To get a wide virtual field", "To invert the image"],
      optionsHi: ["छोटी गुहाओं या शरीर के अंगों का आवर्धित और सीधा प्रतिबिंब प्राप्त करने के लिए", "छोटा प्रतिबिंब बनाने के लिए", "विस्तृत आभासी क्षेत्र पाने के लिए", "प्रतिबिंब को उल्टा करने के लिए"],
      answer: 0,
      exp: "Explanation (En): When an object is placed close to a concave mirror (within focal length), it forms an enlarged, erect virtual image.\nस्पष्टीकरण (Hi): वस्तु को अवतल दर्पण के फोकस के अंदर रखने पर उसका बड़ा और सीधा आभासी प्रतिबिंब बनता है, जिससे जांच आसान होती है।"
    },
    {
      qEn: "What does Snell's Law of refraction state?",
      qHi: "अपवर्तन का स्नेल का नियम (Snell's Law) क्या कहता है?",
      optionsEn: ["The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant (\\frac{\\sin i}{\\sin r} = n)", "Angle of incidence equals angle of refraction", "Product of sines is constant", "Sine of angle is zero"],
      optionsHi: ["आपतन कोण की ज्या और अपवर्तन कोण की ज्या का अनुपात एक नियतांक होता है (\\frac{\\sin i}{\\sin r} = n)", "आपतन कोण अपवर्तन कोण के बराबर होता है", "ज्या का गुणनफल नियत होता है", "कोण की ज्या शून्य होती है"],
      answer: 0,
      exp: "Explanation (En): Snell's Law states that \\frac{\\sin i}{\\sin r} = n_{21} (relative refractive index).\nस्पष्टीकरण (Hi): स्नेल के नियम के अनुसार आपतन कोण कीज्या (\\sin i) और अपवर्तन कोण की ज्या (\\sin r) का अनुपात एक नियतांक होता है।"
    },
    {
      qEn: "What is the refractive index of a medium defined as?",
      qHi: "किसी माध्यम का अपवर्तनांक (refractive index) किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Ratio of the speed of light in vacuum to the speed of light in that medium (n = c / v)", "Speed in medium divided by speed in vacuum", "Density of medium", "Angle of refraction"],
      optionsHi: ["निर्वात में प्रकाश की चाल और उस माध्यम में प्रकाश की चाल का अनुपात (n = c / v)", "माध्यम में चाल को निर्वात में चाल से भाग देकर", "माध्यम का घनत्व", "अपवर्तन कोण"],
      answer: 0,
      exp: "Explanation (En): Absolute refractive index n = \\frac{c}{v}, where c is speed in vacuum and v is speed in the medium.\nस्पष्टीकरण (Hi): निरपेक्ष अपवर्तनांक n = \\frac{c}{v} होता है, जहाँ c निर्वात में चाल और v माध्यम में चाल है।"
    },
    {
      qEn: "Why does a pencil immersed obliquely in water appear bent at the water surface?",
      qHi: "पानी में तिरछी डूबी हुई पेंसिल पानी की सतह पर मुड़ी हुई क्यों दिखाई देती है?",
      optionsEn: ["Due to refraction of light", "Due to reflection", "Due to total internal reflection", "Due to dispersion"],
      optionsHi: ["प्रकाश के अपवर्तन के कारण (Due to refraction)", "परावर्तन के कारण", "पूर्ण आंतरिक परावर्तन के कारण", "वर्ण विक्षेपण के कारण"],
      answer: 0,
      exp: "Explanation (En): Light rays bending as they pass from water (denser medium) into air (rarer medium) cause the apparent bending effect due to refraction.\nस्पष्टीकरण (Hi): पानी (सघन माध्यम) से हवा (विरल माध्यम) में आने पर प्रकाश किरणों के मुड़ने (अपवर्तन) के कारण पेंसिल मुड़ी हुई प्रतीत होती है।"
    },
    {
      qEn: "What phenomenon causes twinkling of stars?",
      qHi: "तारों के टिमटिमाने का मुख्य कारण कौन सी घटना है?",
      optionsEn: ["Atmospheric refraction of starlight", "Reflection from clouds", "Total internal reflection", "Interference of light"],
      optionsHi: ["तारों के प्रकाश का वायुमंडलीय अपवर्तन", "बादलों से परावर्तन", "पूर्ण आंतरिक परावर्तन", "प्रकाश का व्यतिकरण"],
      answer: 0,
      exp: "Explanation (En): Starlight undergoes continuous atmospheric refraction through varying density layers of Earth's atmosphere, causing twinkling.\nस्पष्टीकरण (Hi): पृथ्वी के वायुमंडल की विभिन्न परतों के घनत्व में उतार-चढ़ाव के कारण starlight का वायुमंडलीय अपवर्तन होता है, जिससे तारे टिमटिमाते हैं।"
    },
    {
      qEn: "What is the condition necessary for Total Internal Reflection (TIR) to occur?",
      qHi: "पूर्ण आंतरिक परावर्तन (TIR) होने के लिए आवश्यक शर्तें क्या हैं?",
      optionsEn: ["Light must travel from a denser medium to a rarer medium, and angle of incidence must exceed the critical angle", "Light must travel from rarer to denser medium", "Angle of incidence must be less than critical angle", "Mediums must have equal refractive indices"],
      optionsHi: ["प्रकाश सघन माध्यम से विरल माध्यम में जाना चाहिए और आपतन कोण क्रांतिक कोण से अधिक होना चाहिए", "प्रकाश विरल से सघन माध्यम में जाना चाहिए", "आपतन कोण क्रांतिक कोण से कम होना चाहिए", "माध्यमों का अपवर्तनांक समान होना चाहिए"],
      answer: 0,
      exp: "Explanation (En): TIR occurs when light travels from denser to rarer medium and the angle of incidence is greater than the critical angle (i > i_c).\nस्पष्टीकरण (Hi): पूर्ण आंतरिक परावर्तन के लिए प्रकाश का सघन से विरल माध्यम में जाना और आपतन कोण का क्रांतिक कोण (i_c) से अधिक होना अनिवार्य है।"
    },
    {
      qEn: "Which optical phenomenon is responsible for the brilliance of diamond and working of optical fibers?",
      qHi: "हीरे की चमक और ऑप्टिकल फाइबर (optical fibers) के कार्य करने के पीछे कौन सी प्रकाशीय घटना जिम्मेदार है?",
      optionsEn: ["Total Internal Reflection (TIR)", "Refraction", "Dispersion", "Diffraction"],
      optionsHi: ["पूर्ण आंतरिक परावर्तन (TIR)", "अपवर्तन", "वर्ण विक्षेपण", "विवर्तन"],
      answer: 0,
      exp: "Explanation (En): Diamond's low critical angle leads to multiple internal reflections (TIR), causing brilliance. Optical fibers transmit light via continuous TIR.\nस्पष्टीकरण (Hi): हीरे का कम क्रांतिक कोण पूर्ण आंतरिक परावर्तन (TIR) कराता है जिससे वह चमकता है। ऑप्टिकल फाइबर भी इसी सिद्धांत पर काम करते हैं।"
    },
    {
      qEn: "What is the focal length of a concave lens and a convex lens respectively in terms of sign convention?",
      qHi: "चिन्ह परिपाटी (sign convention) के अनुसार अवतल लेंस और उत्तल लेंस की फोकस दूरी क्रमशः कैसी होती है?",
      optionsEn: ["Concave is negative, Convex is positive", "Concave is positive, Convex is negative", "Both are positive", "Both are negative"],
      optionsHi: ["अवतल ऋणात्मक, उत्तल धनात्मक", "अवतल धनात्मक, उत्तल ऋणात्मक", "दोनों धनात्मक", "दोनों ऋणात्मक"],
      answer: 0,
      exp: "Explanation (En): By sign convention, a concave (diverging) lens has a negative focal length, and a convex (converging) lens has a positive focal length.\nस्पष्टीकरण (Hi): चिन्ह परिपाटी के अनुसार अवतल लेंस की फोकस दूरी ऋणात्मक (-ve) और उत्तल लेंस की धनात्मक (+ve) होती है।"
    },
    {
      qEn: "What is the power of a lens with a focal length of +2 \\text{ meters}?",
      qHi: "+2 \\text{ मीटर} फोकस दूरी वाले लेंस की क्षमता (power) कितनी होगी?",
      optionsEn: ["+0.5 \\text{ Diopter}", "+2.0 \\text{ Diopter}", "-0.5 \\text{ Diopter}", "+1.0 \\text{ Diopter}"],
      optionsHi: ["+0.5 \\text{ Diopter}", "+2.0 \\text{ Diopter}", "-0.5 \\text{ Diopter}", "+1.0 \\text{ Diopter}"],
      answer: 0,
      exp: "Explanation (En): Lens power P = 1 / f(\\text{in meters}) = 1 / 2 = +0.5 \\text{ D}.\nस्पष्टीकरण (Hi): लेंस की क्षमता P = 1 / f(\\text{मीटर में}) = 1 / 2 = +0.5 \\text{ D} होती है।"
    },
    {
      qEn: "What is the SI unit of optical power of a lens?",
      qHi: "लेंस की प्रकाशीय क्षमता (optical power) का SI मात्रक क्या है?",
      optionsEn: ["Diopter (D)", "Meter", "Watt", "Diopter per meter"],
      optionsHi: ["डायोप्टर (Diopter - D)", "मीटर", "वाट", "डायोप्टर प्रति मीटर"],
      answer: 0,
      exp: "Explanation (En): The SI unit of lens power is the Diopter (D), which is equivalent to \\text{m}^{-1}.\nस्पष्टीकरण (Hi): लेंस की क्षमता का SI मात्रक डायोप्टर (Diopter - D) है, जो प्रति मीटर (1/\\text{m}) के बराबर है।"
    },
    {
      qEn: "Which defect of vision is corrected by using a concave lens?",
      qHi: "दृष्टि दोष को दूर करने के लिए अवतल लेंस (concave lens) का उपयोग किस दोष में किया जाता है?",
      optionsEn: ["Myopia (Near-sightedness)", "Hypermetropia (Far-sightedness)", "Presbyopia", "Astigmatism"],
      optionsHi: ["निकट दृष्टि दोष (Myopia)", "दूर दृष्टि दोष (Hypermetropia)", "जरादृष्टि दोष", "बिंदुकता (Astigmatism)"],
      answer: 0,
      exp: "Explanation (En): Myopia (near-sightedness) is corrected using a diverging concave lens to diverge light rays onto the retina.\nस्पष्टीकरण (Hi): निकट दृष्टि दोष (Myopia) को ठीक करने के लिए अवतल लेंस का उपयोग किया जाता है।"
    },
    {
      qEn: "Which lens is used to correct Hypermetropia (far-sightedness)?",
      qHi: "दूर दृष्टि दोष (Hypermetropia) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
      optionsEn: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
      optionsHi: ["उत्तल लेंस (Convex lens)", "अवतल लेंस", "बेलनाकार लेंस", "बायफोकल लेंस"],
      answer: 0,
      exp: "Explanation (En): Hypermetropia (far-sightedness) is corrected using a converging convex lens.\nस्पष्टीकरण (Hi): दूर दृष्टि दोष (Hypermetropia) को ठीक करने के लिए अभिसारी उत्तल लेंस का उपयोग किया जाता है।"
    },
    {
      qEn: "What causes dispersion of white light when passing through a glass prism?",
      qHi: "कांच के प्रिज्म से गुजरने पर श्वेत प्रकाश के वर्ण विक्षेपण (dispersion) का क्या कारण है?",
      optionsEn: ["Different colors have different wavelengths and travel at different speeds in glass, refracting by different angles", "All colors travel at same speed", "Absorption of light", "Reflection from inner walls"],
      optionsHi: ["विभिन्न रंगों की तरंगदैर्ध्य अलग होती है और वे कांच में अलग चाल से चलकर अलग कोणों पर मुड़ते हैं", "सभी रंग समान चाल से चलते हैं", "प्रकाश का अवशोषण", "आंतरिक दीवारों से परावर्तन"],
      answer: 0,
      exp: "Explanation (En): Refractive index varies with wavelength (Cauchy's relation), causing different colors (VIBGYOR) to refract at different angles.\nस्पष्टीकरण (Hi): कांच में विभिन्न रंगों (तरंगदैर्ध्य) का अपवर्तनांक अलग-अलग होता है, जिससे वे अलग कोणों पर मुड़कर बिखर जाते हैं।"
    },
    {
      qEn: "Which color of light bends the most during dispersion through a prism?",
      qHi: "प्रिज्म से गुजरने पर किस रंग के प्रकाश का विचलन (bending) सबसे अधिक होता है?",
      optionsEn: ["Violet", "Red", "Yellow", "Green"],
      optionsHi: ["बैंगनी (Violet)", "लाल", "पीला", "हरा"],
      answer: 0,
      exp: "Explanation (En): Violet light has the shortest wavelength and highest refractive index in glass, so it bends (deviates) the most.\nस्पष्टीकरण (Hi): बैंगनी रंग की तरंगदैर्ध्य सबसे कम और अपवर्तनांक सबसे अधिक होता है, इसलिए इसका विचलन (bending) सबसे अधिक होता है।"
    },
    {
      qEn: "Which color of light deviates the least during dispersion through a prism?",
      qHi: "प्रिज्म से गुजरने पर किस रंग के प्रकाश का विचलन सबसे कम होता है?",
      optionsEn: ["Red", "Violet", "Blue", "Indigo"],
      optionsHi: ["लाल (Red)", "बैंगनी", "नीला", "आसमानी"],
      answer: 0,
      exp: "Explanation (En): Red light has the longest wavelength and lowest refractive index, hence it deviates the least.\nस्पष्टीकरण (Hi): लाल रंग की तरंगदैर्ध्य सबसे अधिक और अपवर्तनांक सबसे कम होता है, अतः इसका विचलन सबसे कम होता है।"
    },
    {
      qEn: "What is the phenomenon responsible for the blue color of the sky?",
      qHi: "आकाश का रंग नीला दिखाई देने के लिए कौन सी परिघटना जिम्मेदार है?",
      optionsEn: ["Rayleigh scattering of light", "Total internal reflection", "Interference", "Dispersion"],
      optionsHi: ["प्रकाश का रै Rayleigh प्रकीर्णन (Scattering)", "पूर्ण आंतरिक परावर्तन", "व्यतिकरण", "वर्ण विक्षेपण"],
      answer: 0,
      exp: "Explanation (En): Rayleigh scattering (I \\propto 1/\\lambda^4) makes shorter wavelengths (blue) scatter much more than longer wavelengths by air molecules.\nस्पष्टीकरण (Hi): रै Rayleigh प्रकीर्णन के अनुसार कम तरंगदैर्ध्य वाले नीले रंग का प्रकीर्णन लाल रंग की तुलना में बहुत अधिक होता है।"
    },
    {
      qEn: "Why does the sun appear reddish at sunrise and sunset?",
      qHi: "सूर्योदय और सूर्यास्त के समय सूर्य लाल क्यों दिखाई देता है?",
      optionsEn: ["Because scattering of shorter wavelengths leaves mostly red light reaching our eyes through longer atmospheric path", "Due to reflection from clouds", "Because sun's temperature drops", "Due to refraction only"],
      optionsHi: ["क्योंकि छोटी तरंगदैर्ध्य वाले रंगों का प्रकीर्णन हो जाता है और लंबी तरंगदैर्ध्य वाला लाल प्रकाश हम तक पहुँचता है", "बादलों से परावर्तन के कारण", "सूर्य का तापमान घटने के कारण", "केवल अपवर्तन के कारण"],
      answer: 0,
      exp: "Explanation (En): At sunrise/sunset, sunlight travels a longer path through atmosphere, scattering blue light away and letting red light pass through.\nस्पष्टीकरण (Hi): सूर्योदय/सूर्यास्त के समय प्रकाश को अधिक दूरी तय करनी पड़ती है, जिससे नीला प्रकाश बिखर जाता है और लाल प्रकाश सीधे आँखों तक पहुँचता है।"
    },
    {
      qEn: "What is the near point of distinct vision for a normal human eye?",
      qHi: "सामान्य मानव नेत्र के लिए स्पष्ट दृष्टि की न्यूनतम दूरी (near point) कितनी होती है?",
      optionsEn: ["25 \\text{ cm}", "25 \\text{ m}", "Infinity", "10 \\text{ cm}"],
      optionsHi: ["25 \\text{ cm}", "25 \\text{ m}", "अनंत (Infinity)", "10 \\text{ cm}"],
      answer: 0,
      exp: "Explanation (En): The standard near point of distinct vision for a healthy human eye is 25 \\text{ cm}.\nस्पष्टीकरण (Hi): स्वस्थ मानव नेत्र के लिए स्पष्ट दृष्टि की न्यूनतम दूरी 25 \\text{ cm} होती है।"
    },
    {
      qEn: "What is the far point of a normal human eye?",
      qHi: "सामान्य मानव नेत्र के लिए दूर बिंदु (far point) कहाँ होता है?",
      optionsEn: ["Infinity", "25 \\text{ cm}", "100 \\text{ m}", "1 \\text{ km}"],
      optionsHi: ["अनंत (Infinity)", "25 \\text{ cm}", "100 \\text{ m}", "1 \\text{ km}"],
      answer: 0,
      exp: "Explanation (En): The far point of a normal human eye is at infinity.\nस्पष्टीकरण (Hi): सामान्य मानव नेत्र के लिए दूर बिंदु अनंत (Infinity) पर होता है।"
    },
    {
      qEn: "What is Astigmatism in human vision corrected by?",
      qHi: "मानव नेत्र के दृष्टिदोष 'अबिंदुकता' (Astigmatism) को किस लेंस से ठीक किया जाता है?",
      optionsEn: ["Cylindrical lens", "Concave lens", "Convex lens", "Bifocal lens"],
      optionsHi: ["बेलनाकार लेंस (Cylindrical lens)", "अवतल लेंस", "उत्तल लेंस", "बायफोकल लेंस"],
      answer: 0,
      exp: "Explanation (En): Astigmatism occurs due to uneven corneal curvature and is corrected using cylindrical lenses.\nस्पष्टीकरण (Hi): अबिंदुकता (Astigmatism) को ठीक करने के लिए बेलनाकार लेंस (Cylindrical lens) का उपयोग किया जाता है।"
    },
    {
      qEn: "What is Presbyopia and how is it usually corrected?",
      qHi: "जरादृष्टि दोष (Presbyopia) क्या है और इसे आमतौर पर कैसे ठीक किया जाता है?",
      optionsEn: ["Age-related far-sightedness corrected with bifocal lenses", "Color blindness corrected with surgery", "Myopia corrected with concave lenses", "Astigmatism corrected with mirrors"],
      optionsHi: ["उम्र से संबंधित दूर दृष्टि दोष जिसे बाइफोकल लेंस (bifocal lenses) से ठीक किया जाता है", "सर्जरी से ठीक होने वाली वर्णांधता", "अवतल लेंस से ठीक होने वाली मायोपिया", "दर्पण से ठीक होने वाली अबिंदुकता"],
      answer: 0,
      exp: "Explanation (En): Presbyopia is loss of accommodation due to aging, corrected using bifocal or progressive lenses.\nस्पष्टीकरण (Hi): जरादृष्टि दोष उम्र बढ़ने के कारण सिलिरी मांसपेशियों की कमजोरी से होता है, जिसे बाइफोकल लेंस से ठीक किया जाता है।"
    },
    {
      qEn: "What is the principle behind the working of optical instruments like microscopes and telescopes?",
      qHi: "सूक्ष्मदर्शी (microscope) और दूरदर्शी (telescope) जैसे प्रकाशीय उपकरणों के काम करने का मूल आधार क्या है?",
      optionsEn: ["Refraction and reflection of light by lenses and mirrors", "Interference only", "Polarization only", "Total internal reflection only"],
      optionsHi: ["लेंसों और दर्पणों द्वारा प्रकाश का अपवर्तन और परावर्तन", "केवल व्यतिकरण", "केवल ध्रुवण", "केवल पूर्ण आंतरिक परावर्तन"],
      answer: 0,
      exp: "Explanation (En): Microscopes and telescopes form magnified images using combinations of lenses and mirrors based on refraction and reflection laws.\nस्पष्टीकरण (Hi): माइक्रोस्कोप और टेलीस्कोप लेंसों और दर्पणों के संयोजन से प्रकाश के अपवर्तन और परावर्तन सिद्धांतों पर काम करते हैं।"
    },
    {
      qEn: "What does resolving power of an optical instrument depend on?",
      qHi: "किसी प्रकाशीय उपकरण की भेदन क्षमता या विभेदन क्षमता (resolving power) किस पर निर्भर करती है?",
      optionsEn: ["Wavelength of light used and diameter of objective lens (d / \\lambda)", "Focal length only", "Magnification power only", "Eyepiece color"],
      optionsHi: ["उपयोग की गई प्रकाश की तरंगदैर्ध्य और ऑब्जेक्टिव लेंस के व्यास पर", "केवल फोकस दूरी पर", "केवल आवर्धन क्षमता पर", " eyepiece के रंग पर"],
      answer: 0,
      exp: "Explanation (En): Resolving power of a microscope is \\frac{2n\\sin\\theta}{\\lambda} and telescope is \\frac{D}{1.22\\lambda}, depending on wavelength and aperture.\nस्पष्टीकरण (Hi): विभेदन सीमा प्रकाश की तरंगदैर्ध्य (\\lambda) और लेंस के द्वारक (aperture) पर निर्भर करती है।"
    },
    {
      qEn: "What is polarization of light a proof of?",
      qHi: "प्रकाश का ध्रुवण (polarization) इस बात का प्रमाण है कि प्रकाश तरंगें होती हैं:",
      optionsEn: ["Transverse waves", "Longitudinal waves", "Scalar waves", "Mechanical waves"],
      optionsHi: ["अनुप्रस्थ तरंगें (Transverse waves)", "अनुदैर्ध्य तरंगें", "अदिश तरंगें", "यांत्रिक तरंगें"],
      answer: 0,
      exp: "Explanation (En): Polarization can only occur with transverse waves, proving light waves are transverse electromagnetic waves.\nस्पष्टीकरण (Hi): ध्रुवण की परिघटना केवल अनुप्रस्थ तरंगों (transverse waves) में हो सकती है, जो यह सिद्ध करती है कि प्रकाश अनुप्रस्थ विद्युत चुंबकीय तरंग है।"
    },
    {
      qEn: "Why do clouds appear white?",
      qHi: "बादल सफेद क्यों दिखाई देते हैं?",
      optionsEn: ["Due to Mie scattering, where water droplets scatter all wavelengths of white light equally", "Due to selective absorption of red light", "Due to reflection from moon", "Due to polarization"],
      optionsHi: ["मी प्रकीर्णन (Mie scattering) के कारण, जिसमें पानी की बूंदें श्वेत प्रकाश के सभी रंगों को समान रूप से बिखेरती हैं", "लाल प्रकाश के चयनात्मक अवशोषण के कारण", "चंद्रमा से परावर्तन के कारण", "ध्रुवण के कारण"],
      answer: 0,
      exp: "Explanation (En): Water droplets in clouds are comparable in size to light wavelengths, causing Mie scattering which scatters all colors equally, making clouds appear white.\nस्पष्टीकरण (Hi): बादलों में पानी की बूंदों का आकार बड़ा होता है, जिससे 'मी प्रकीर्णन' (Mie scattering) होता है और सभी रंग समान रूप से बिखरकर सफेद दिखते हैं।"
    }
  ],
    "Sound": [
    {
      qEn: "What type of waves are sound waves in a gas or liquid?",
      qHi: "गैस या द्रव में ध्वनि तरंगें किस प्रकार की तरंगें होती हैं?",
      optionsEn: ["Longitudinal mechanical waves", "Transverse mechanical waves", "Electromagnetic waves", "Matter waves"],
      optionsHi: ["अनुदैर्ध्य यांत्रिक तरंगें (Longitudinal mechanical waves)", "अनुप्रस्थ यांत्रिक तरंगें", "विद्युत चुंबकीय तरंगें", "द्रव्य तरंगें"],
      answer: 0,
      exp: "Explanation (En): Sound waves propagate through media via compressions and rarefactions parallel to energy propagation, making them longitudinal mechanical waves.\nस्पष्टीकरण (Hi): ध्वनि तरंगें माध्यम में संपीड़न और विरलन के माध्यम से चलती हैं, अतः ये अनुदैर्ध्य यांत्रिक तरंगें (longitudinal mechanical waves) होती हैं।"
    },
    {
      qEn: "What is the speed of sound in dry air at room temperature (approx 20°C)?",
      qHi: "कमरे के तापमान (लगभग 20°C) पर शुष्क हवा में ध्वनि की चाल कितनी होती है?",
      optionsEn: ["Approx 343 \\text{ m/s}", "3 \\times 10^8 \\text{ m/s}", "1500 \\text{ m/s}", "5000 \\text{ m/s}"],
      optionsHi: ["लगभग 343 \\text{ m/s}", "3 \\times 10^8 \\text{ m/s}", "1500 \\text{ m/s}", "5000 \\text{ m/s}"],
      answer: 0,
      exp: "Explanation (En): The speed of sound in air at 20°C is approximately 343 \\text{ m/s} (about 1235 \\text{ km/h}).nस्पष्टीकरण (Hi): 20°C तापमान पर हवा में ध्वनि की चाल लगभग 343 \\text{ m/s} होती है।"
    },
    {
      qEn: "In which medium is the speed of sound generally the highest?",
      qHi: "सामान्यतः किस माध्यम में ध्वनि की चाल सबसे अधिक होती है?",
      optionsEn: ["Solids (e.g., steel)", "Liquids (e.g., water)", "Gases (e.g., air)", "Vacuum"],
      optionsHi: ["ठोस (जैसे स्टील)", "द्रव (जैसे पानी)", "गैस (जैसे हवा)", "निर्वात"],
      answer: 0,
      exp: "Explanation (En): Sound travels fastest in solids due to high elasticity and tightly bound molecules compared to liquids and gases.\nस्पष्टीकरण (Hi): उच्च प्रत्यास्थता और घनत्व/अणु निकटता के कारण ध्वनि की चाल सबसे अधिक ठोस पदार्थों (जैसे स्टील या कांच) में होती है।"
    },
    {
      qEn: "What is the audible frequency range for a normal human ear?",
      qHi: "सामान्य मानव कान के लिए श्रव्य आवृत्ति परिसर (audible frequency range) कितना होता है?",
      optionsEn: ["20 \\text{ Hz} \\text{ to } 20,000 \\text{ Hz}", "0 \\text{ Hz} \\text{ to } 20 \\text{ Hz}", "Above 20,000 \\text{ Hz}", "100 \\text{ Hz} \\text{ to } 1,000 \\text{ Hz}"],
      optionsHi: ["20 \\text{ Hz} से 20,000 \\text{ Hz}", "0 \\text{ Hz} से 20 \\text{ Hz}", "20,000 \\text{ Hz} से ऊपर", "100 \\text{ Hz} से 1,000 \\text{ Hz}"],
      answer: 0,
      exp: "Explanation (En): Human hearing range is roughly between 20 \\text{ Hz} and 20,000 \\text{ Hz} (or 20 \\text{ kHz}).nस्पष्टीकरण (Hi): सामान्य मनुष्य 20 \\text{ Hz} से 20,000 \\text{ Hz} तक की आवृत्तियों को सुन सकता है।"
    },
    {
      qEn: "What are sound waves with frequencies below 20 \\text{ Hz} called?",
      qHi: "20 \\text{ Hz} से कम आवृत्ति वाली ध्वनि तरंगों को क्या कहा जाता है?",
      optionsEn: ["Infrasonic waves", "Ultrasonic waves", "Supersonic waves", "Seismic waves"],
      optionsHi: ["अवश्रव्य तरंगें (Infrasonic waves)", "पराश्रव्य तरंगें", "सुपरसोニック तरंगें", "भूकंपीय तरंगें"],
      answer: 0,
      exp: "Explanation (En): Frequencies below 20 \\text{ Hz} are infrasonic, generated by earthquakes, elephants, and large whales.\nस्पष्टीकरण (Hi): 20 \\text{ Hz} से कम आवृत्ति की तरंगों को अवश्रव्य (Infrasonic) कहा जाता है, जिन्हें भूकंप या हाथी उत्पन्न करते हैं।"
    },
    {
      qEn: "What are sound waves with frequencies above 20,000 \\text{ Hz} called?",
      qHi: "20,000 \\text{ Hz} से अधिक आवृत्ति वाली ध्वनि तरंगों को क्या कहा जाता है?",
      optionsEn: ["Ultrasonic waves", "Infrasonic waves", "Micro-waves", "Radio waves"],
      optionsHi: ["पराश्रव्य तरंगें (Ultrasonic waves)", "अवश्रव्य तरंगें", "माइक्रो-वेव", "रेडियो तरंगें"],
      answer: 0,
      exp: "Explanation (En): Frequencies above 20,000 \\text{ Hz} are ultrasonic, used in medical imaging (ultrasound) and sonar.\nस्पष्टीकरण (Hi): 20,000 \\text{ Hz} से अधिक आवृत्ति की तरंगों को पराश्रव्य (Ultrasonic) कहते हैं, जिनका उपयोग सोनार और मेडिकल अल्ट्रासाउंड में होता है।"
    },
    {
      qEn: "What physical characteristic of a sound wave determines its pitch (shrillness)?",
      qHi: "ध्वनि तरंग की कौन सी भौतिक विशेषता उसके तारत्व (pitch या shrillness) को निर्धारित करती है?",
      optionsEn: ["Frequency", "Amplitude", "Wavelength speed", "Intensity"],
      optionsHi: ["आवृत्ति (Frequency)", "आयाम (Amplitude)", "तरंगदैर्ध्य चाल", "तीव्रता"],
      answer: 0,
      exp: "Explanation (En): Pitch is directly proportional to frequency; higher frequency means higher pitch (shriller sound).\nस्पष्टीकरण (Hi): तारत्व (Pitch) सीधे आवृत्ति (Frequency) पर निर्भर करता है; उच्च आवृत्ति का मतलब तीखी (shrill) आवाज है।"
    },
    {
      qEn: "What physical characteristic of a sound wave determines its loudness?",
      qHi: "ध्वनि तरंग की कौन सी विशेषता उसकी प्रबलता (loudness) को निर्धारित करती है?",
      optionsEn: ["Amplitude", "Frequency", "Velocity", "Time period"],
      optionsHi: ["आयाम (Amplitude)", "आवृत्ति", "वेग", "आवर्तकाल"],
      answer: 0,
      exp: "Explanation (En): Loudness is proportional to the square of the amplitude of the sound wave.\nस्पष्टीकरण (Hi): ध्वनि की प्रबलता (Loudness) तरंग के आयाम (Amplitude) के वर्ग के समानुपाती होती है।"
    },
    {
      qEn: "What is the unit of loudness or sound level commonly used in acoustics?",
      qHi: "ध्वनि की प्रबलता या स्तर को मापने के लिए सामान्यतः किस मात्रक का उपयोग किया जाता है?",
      optionsEn: ["Decibel (dB)", "Hertz (Hz)", "Watt", "Pascal"],
      optionsHi: ["डेसीबल (Decibel - dB)", "हर्ट्ज़ (Hz)", "वाट", "पास्कल"],
      answer: 0,
      exp: "Explanation (En): Sound intensity level is measured in decibels (dB), a logarithmic scale.\nस्पष्टीकरण (Hi): ध्वनि की तीव्रता या स्तर को मापने के लिए डेसीबल (dB) का उपयोग किया जाता है।"
    },
    {
      qEn: "What phenomenon is responsible for the reflection of sound resulting in an echo?",
      qHi: "प्रतिध्वनि (echo) उत्पन्न होने के लिए ध्वनि के किस गुण का होना आवश्यक है?",
      optionsEn: ["Reflection of sound", "Refraction of sound", "Diffraction of sound", "Interference of sound"],
      optionsHi: ["ध्वनि का परावर्तन (Reflection of sound)", "ध्वनि का अपवर्तन", "ध्वनि का विवर्तन", "ध्वनि का व्यतिकरण"],
      answer: 0,
      exp: "Explanation (En): An echo is heard when sound is reflected back from a hard obstacle after a minimum time interval of 0.1 seconds.\nस्पष्टीकरण (Hi): किसी कठोर सतह से टकराकर ध्वनि के वापस लौटने (परावर्तन) से प्रतिध्वनि सुनाई देती है।"
    },
    {
      qEn: "What is the minimum time interval required between original sound and reflected sound for the human ear to distinguish an echo?",
      qHi: "मानव कान को स्पष्ट प्रतिध्वनि सुनने के लिए मूल ध्वनि और परावर्तित ध्वनि के बीच न्यूनतम समय अंतराल कितना होना चाहिए?",
      optionsEn: ["0.1 \\text{ seconds}", "1.0 \\text{ second}", "0.01 \\text{ seconds}", "0.5 \\text{ seconds}"],
      optionsHi: ["0.1 \\text{ सेकंड}", "1.0 \\text{ सेकंड}", "0.01 \\text{ सेकंड}", "0.5 \\text{ सेकंड}"],
      answer: 0,
      exp: "Explanation (En): Persistence of human hearing is about 0.1 seconds, so the echo must arrive after 0.1 s.\nस्पष्टीकरण (Hi): मानव कान पर ध्वनि का प्रभाव 0.1 सेकंड तक रहता है, अतः स्पष्ट प्रतिध्वनि के लिए न्यूनतम समयांतर 0.1 सेकंड होना चाहिए।"
    },
    {
      qEn: "What is reverberation in auditoriums?",
      qHi: "स्रागागारों (auditoriums) में अनुरणन (reverberation) क्या है?",
      optionsEn: ["Persistence of sound due to multiple reflections in a big hall", "Total cancellation of sound", "Sudden amplification of frequency", "Absorption of all sound"],
      optionsHi: ["बड़े हॉल में बार-बार परावर्तन के कारण ध्वनि का बने रहना", "ध्वनि का पूर्ण विलोप", "आवृत्ति का अचानक प्रवर्धन", "सारी ध्वनि का अवशोषण"],
      answer: 0,
      exp: "Explanation (En): Reverberation is the prolonged persistence of sound in a closed space due to multiple reflections from walls and ceiling.\nस्पष्टीकरण (Hi): दीवारों और छत से बार-बार परावर्तन होने के कारण ध्वनि का हॉल में लंबे समय तक बने रहना अनुरणन (reverberation) कहलाता है।"
    },
    {
      qEn: "How is reverberation time reduced in concert halls?",
      qHi: "संगीत हॉल (concert halls) में अनुरणन काल (reverberation time) को कैसे कम किया जाता है?",
      optionsEn: ["By using sound-absorbing materials like fiberglass, curtains, and acoustic panels", "By installing smooth marble walls", "By increasing room size", "By removing chairs"],
      optionsHi: ["फाइबरग्लास, पर्दे और ध्वनिक पैनल जैसे ध्वनि-अवशोषक पदार्थों का उपयोग करके", "चिकनी संगमरमर की दीवारें लगाकर", "कमरे का आकार बढ़ाकर", "कुर्सियाँ हटाकर"],
      answer: 0,
      exp: "Explanation (En): Acoustic absorbents absorb sound energy, preventing excessive multiple reflections and reducing reverberation time.\nस्पष्टीकरण (Hi): ध्वनि-अवशोषक सामग्री (जैसे फाइबरग्लास और पर्दे) लगाने से अत्यधिक गूंज कम होती है और ध्वनि स्पष्ट सुनाई देती है।"
    },
    {
      qEn: "What does SONAR stand for?",
      qHi: "SONAR का पूरा नाम क्या है?",
      optionsEn: ["Sound Navigation and Ranging", "Sound Numeric And Radar", "Solar Navigation And Ranging", "Sound Network And Radio"],
      optionsHi: ["Sound Navigation and Ranging", "Sound Numeric And Radar", "Solar Navigation And Ranging", "Sound Network And Radio"],
      answer: 0,
      exp: "Explanation (En): SONAR stands for Sound Navigation and Ranging, used to measure underwater distances using ultrasonic waves.\nस्पष्टीकरण (Hi): SONAR का अर्थ 'Sound Navigation and Ranging' है, जिसका उपयोग पानी के नीचे की दूरी मापने और वस्तुओं का पता लगाने में होता है।"
    },
    {
      qEn: "What principle is utilized by bats to navigate and locate obstacles in the dark?",
      qHi: "अंधेरे में रास्ता खोजने और बाधाओं का पता लगाने के लिए चमगादड़ किस सिद्धांत का उपयोग करते हैं?",
      optionsEn: ["Echolocation using ultrasonic waves", "Magnetic field sensing", "Thermal radiation detection", "Visual night vision"],
      optionsHi: ["पराश्रव्य तरंगों का उपयोग करके इकोलोकेशन (Echolocation)", "चुंबकीय क्षेत्र संवेदन", "तापीय विकिरण का पता लगाना", "विजुअल नाइट विजन"],
      answer: 0,
      exp: "Explanation (En): Bats emit ultrasonic squeaks and listen to the returning echoes to map their surroundings (echolocation).\nस्पष्टीकरण (Hi): चमगादड़ पराश्रव्य तरंगें छोड़कर उनकी गूँज (echo) के आधार पर रास्ता तय करते हैं, जिसे इकोलोकेशन कहते हैं।"
    },
    {
      qEn: "What is the Doppler Effect in sound?",
      qHi: "ध्वनि में डॉप्लर प्रभाव (Doppler Effect) क्या दर्शाता है?",
      optionsEn: ["Apparent change in frequency of sound due to relative motion between source and observer", "Change in speed of sound in vacuum", "Bending of sound around obstacles", "Amplification of sound by resonance"],
      optionsHi: ["स्रोत और श्रोता के बीच आपेक्षिक गति के कारण ध्वनि की आवृत्ति में आभासी परिवर्तन", "निर्वात में ध्वनि की चाल में बदलाव", "बाधाओं के चारों ओर ध्वनि का मुड़ना", "अनुनाद द्वारा ध्वनि का प्रवर्धन"],
      answer: 0,
      exp: "Explanation (En): The Doppler effect is the apparent change in frequency or pitch when a sound source and listener move relative to each other.\nस्पष्टीकरण (Hi): स्रोत और श्रोता के बीच आपेक्षिक गति के कारण सुनाई देने वाली आवृत्ति में होने वाला बदलाव डॉप्लर प्रभाव कहलाता है।"
    },
    {
      qEn: "What happens to the apparent frequency of a whistle when a train approaches an observer?",
      qHi: "जब कोई ट्रेन किसी श्रोता की ओर आती है, तो उसकी सीटी की आभासी आवृत्ति पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
      optionsHi: ["बढ़ जाती है (Increases)", "घट जाती है", "नियत रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): As a sound source approaches, wavefronts bunch up, increasing the apparent frequency (higher pitch).\nस्पष्टीकरण (Hi): जब स्रोत पास आता है, तो तरंगें संकुचित होती हैं जिससे आवृत्ति बढ़ी हुई (अधिक तीखी) सुनाई देती है।"
    },
    {
      qEn: "What is resonance in sound waves?",
      qHi: "ध्वनि तरंगों में अनुनाद (resonance) की घटना क्या है?",
      optionsEn: ["When the frequency of an external driving force matches the natural frequency of a body, causing large amplitude oscillations", "When sound waves cancel each other", "When sound reflects completely", "When frequency drops to zero"],
      optionsHi: ["जब बाहरी बल की आवृत्ति किसी वस्तु की स्वाभाविक आवृत्ति से मेल खाती है, जिससे बड़े आयाम के कंपन उत्पन्न होते हैं", "जब ध्वनि तरंगें एक-दूसरे को काटती हैं", "जब ध्वनि पूरी तरह परावर्तित होती है", "जब आवृत्ति शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Resonance occurs when a system is driven at its natural frequency, resulting in a dramatic increase in vibration amplitude.\nस्पष्टीकरण (Hi): जब किसी वस्तु पर लगने वाले बल की आवृत्ति उसकी स्वाभाविक आवृत्ति के बराबर हो जाती है, तो वह बहुत तेज कंपन करने लगती है, जिसे अनुनाद कहते हैं।"
    },
    {
      qEn: "Why are soldiers advised to break step (not march in unison) while crossing a suspension bridge?",
      qHi: "सैनिकों को झूलते हुए पुल (suspension bridge) को पार करते समय कदम तोड़कर (मार्च न करते हुए) चलने की सलाह क्यों दी जाती है?",
      optionsEn: ["To prevent resonance which could cause the bridge to vibrate with dangerously large amplitude and collapse", "To reduce noise", "To walk faster", "To maintain military secrecy"],
      optionsHi: ["अनुनाद (resonance) को रोकने के लिए जो खतरनाक रूप से बड़े आयाम के कंपन पैदा करके पुल को गिरा सकता है", "شور कम करने के लिए", "तेजी से चलने के लिए", "सैन्य गोपनीयता बनाए रखने के लिए"],
      answer: 0,
      exp: "Explanation (En): Marching in step can match the natural frequency of the bridge, causing resonance and structural failure.\nस्पष्टीकरण (Hi): एक साथ कदमताल करने से पुल की स्वाभाविक आवृत्ति से मैच होने पर अनुनाद उत्पन्न हो सकता है, जिससे पुल टूट सकता है।"
    },
    {
      qEn: "What determines the quality or timbre of a sound?",
      qHi: "किसी ध्वनि की गुणवत्ता या टिमब्रे (quality or timbre) का निर्धारण कौन करता है?",
      optionsEn: ["Presence of overtones / harmonics", "Amplitude only", "Frequency only", "Speed of sound"],
      optionsHi: ["अधिस्वर (overtones / harmonics) की उपस्थिति", "केवल आयाम", "केवल आवृत्ति", "ध्वनि की चाल"],
      answer: 0,
      exp: "Explanation (En): Timbre or quality depends on the waveform, which is determined by the number and relative intensity of overtones (harmonics).\nस्पष्टीकरण (Hi): दो समान प्रबलता और तारत्व की ध्वनियों में अंतर करने वाला गुण टिमब्रे है, जो अधिस्वर (overtones) की उपस्थिति पर निर्भर करता है।"
    },
    {
      qEn: "What is beats phenomenon in sound?",
      qHi: "ध्वनि में 'बीट्स' (beats या विस्पंद) की घटना क्या है?",
      optionsEn: ["Periodic rise and fall in the loudness of sound produced by the superposition of two slightly different frequencies", "Sudden echoing", "Complete cancellation of sound", "Frequency doubling"],
      optionsHi: ["थोड़ी भिन्न आवृत्तियों की दो तरंगों के अध्यारोपण से ध्वनि की प्रबलता में होने वाली आवधिक घट-बढ़", "अचानक गूंज", "ध्वनि का पूर्ण विलोप", "आवृत्ति का दोगुना होना"],
      answer: 0,
      exp: "Explanation (En): Beats are periodic variations in volume caused by interference of two sound waves with slightly different frequencies.\nस्पष्टीकरण (Hi): लगभग समान आवृत्तियों की दो ध्वनि तरंगों के मिलने से ध्वनि के उतार-चढ़ाव (तेज-धीमी आवाज) को विस्पंद (Beats) कहते हैं।"
    },
    {
      qEn: "How is the beat frequency calculated if two tuning forks of frequencies n_1 and n_2 are sounded together?",
      qHi: "यदि n_1 और n_2 आवृत्तियों वाले दो स्वरित्र एकसाथ बजाए जाएं, तो प्रति सेकंड सुनाई देने वाले विस्पंदों की संख्या (beat frequency) क्या होगी?",
      optionsEn: ["|n_1 - n_2", "n_1 + n_2", "n_1 \\times n_2", "n_1 / n_2"],
      optionsHi: ["|n_1 - n_2|", "n_1 + n_2", "n_1 \\times n_2", "n_1 / n_2"],
      answer: 0,
      exp: "Explanation (En): The number of beats per second is equal to the absolute difference between the two frequencies (|n_1 - n_2|).\nस्पष्टीकरण (Hi): प्रति सेकंड सुनाई देने वाले विस्पंदों की संख्या दोनों आवृत्तियों के अंतर (|n_1 - n_2|) के बराबर होती है।"
    },
    {
      qEn: "What is a sonic boom?",
      qHi: "सोनिक बूम (sonic boom) क्या है?",
      optionsEn: ["A shock wave accompanied by a loud explosive sound produced when an object exceeds the speed of sound", "Sound produced by a loud speaker", "Echo in a cave", "Thunder during a storm"],
      optionsHi: ["जब कोई वस्तु ध्वनि की गति से तेज चलती है तो उत्पन्न होने वाली तीव्र विस्फोटक ध्वनि तरंग (shock wave)", "लाउडस्पीकर द्वारा उत्पन्न ध्वनि", "गुफा में गूंज", "तूफान के दौरान गर्जना"],
      answer: 0,
      exp: "Explanation (En): When an object travels faster than sound (supersonic), pressure waves pile up and form a shock wave heard as a sonic boom.\nस्पष्टीकरण (Hi): जब कोई वस्तु सुपरसो닉 गति से चलती है, तो दाब तरंगें मिलकर एक आघात तरंग (shock wave) बनाती हैं जिसे सोनिक बूम कहते हैं।"
    },
    {
      qEn: "What is Mach number?",
      qHi: "मैक संख्या (Mach number) क्या व्यक्त करती है?",
      optionsEn: ["The ratio of the speed of an object to the speed of sound in the surrounding medium", "Ratio of frequency to amplitude", "Ratio of loudness to pitch", "Speed of sound in vacuum"],
      optionsHi: ["वस्तु की चाल और माध्यम में ध्वनि की चाल का अनुपात", "आवृत्ति और आयाम का अनुपात", "प्रबलता और तारत्व का अनुपात", "निर्वात में ध्वनि की चाल"],
      answer: 0,
      exp: "Explanation (En): Mach number M = \\frac{v}{v_s}, where v is object speed and v_s is speed of sound.\nस्पष्टीकरण (Hi): मैक संख्या किसी वस्तु की चाल और उस माध्यम में ध्वनि की चाल का अनुपात होती है।"
    },
    {
      qEn: "What does supersonic speed mean?",
      qHi: "सुपरसोनिक (supersonic) चाल का क्या अर्थ है?",
      optionsEn: ["Speed greater than the speed of sound (M > 1)", "Speed less than sound", "Speed of light", "Zero speed"],
      optionsHi: ["ध्वनि की चाल से अधिक गति (M > 1)", "ध्वनि से कम गति", "प्रकाश की गति", "शून्य गति"],
      answer: 0,
      exp: "Explanation (En): Supersonic refers to speeds exceeding the speed of sound, i.e., Mach number greater than 1.\nस्पष्टीकरण (Hi): सुपरसोनिक का अर्थ ध्वनि की गति (Mach 1) से तेज चलना है।"
    },
    {
      qEn: "Why can't we hear sound on the Moon?",
      qHi: "हम चंद्रमा पर ध्वनि क्यों नहीं सुन सकते?",
      optionsEn: ["Because there is no atmosphere (vacuum) on the Moon to transmit mechanical sound waves", "Because Moon's gravity is too high", "Because temperature is too low", "Because sound travels too fast on Moon"],
      optionsHi: ["क्योंकि चंद्रमा पर ध्वनि तरंगों के संचरण के लिए कोई वायुमंडल (निर्वात) नहीं है", "क्योंकि चंद्रमा का गुरुत्वाकर्षण बहुत अधिक है", "क्योंकि तापमान बहुत कम है", "क्योंकि चंद्रमा पर ध्वनि बहुत तेज चलती है"],
      answer: 0,
      exp: "Explanation (En): Sound is a mechanical wave requiring a material medium; since the Moon has no atmosphere, sound cannot propagate.\nस्पष्टीकरण (Hi): ध्वनि एक यांत्रिक तरंग है जिसे माध्यम की आवश्यकता होती है; चंद्रमा पर वायुमंडल न होने के कारण वहां माध्यम का अभाव रहता है।"
    },
    {
      qEn: "What is the relation between frequency (f), wavelength (\\lambda), and wave speed (v)?",
      qHi: "आवृत्ति (f), तरंगदैर्ध्य (\\lambda) और तरंग वेग (v) के बीच क्या संबंध है?",
      optionsEn: ["v = f \\cdot \\lambda", "f = v \\cdot \\lambda", "\\lambda = f \\cdot v", "v = f / \\lambda"],
      optionsHi: ["v = f \\cdot \\lambda", "f = v \\cdot \\lambda", "\\lambda = f \\cdot v", "v = f / \\lambda"],
      answer: 0,
      exp: "Explanation (En): The fundamental wave equation is wave speed equals frequency multiplied by wavelength (v = f\\lambda).\nस्पष्टीकरण (Hi): तरंग का मूल समीकरण वेग = आवृत्ति \\times तरंगदैर्ध्य (v = f \\lambda) होता है।"
    },
    {
      qEn: "What happens to the frequency of a sound wave when it passes from air into water?",
      qHi: "जब कोई ध्वनि तरंग हवा से पानी में प्रवेश करती है, तो उसकी आवृत्ति (frequency) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Remains unchanged", "Increases", "Decreases", "Becomes zero"],
      optionsHi: ["अपरिवर्तित रहती है (Remains unchanged)", "बढ़ जाती है", "घट जाती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Frequency is a characteristic of the source and remains invariant when a wave crosses from one medium to another.\nस्पष्टीकरण (Hi): आवृत्ति स्रोत की विशेषता होती है और माध्यम बदलने पर भी आवृत्ति अपरिवर्तित रहती है (जबकि चाल और तरंगदैर्ध्य बदल जाते हैं)।"
    },
    {
      qEn: "Why does the voice of women and children generally have a higher pitch than that of men?",
      qHi: "महिलाओं और बच्चों की आवाज आमतौर पर पुरुषों की तुलना में अधिक तीखी (high pitch) क्यों होती है?",
      optionsEn: ["Due to higher frequency of vocal cord vibrations", "Due to larger vocal cords", "Due to higher amplitude", "Due to lower speed of sound"],
      optionsHi: ["वाक् तंतुओं (vocal cords) के कंपन की उच्च आवृत्ति के कारण", "बड़े वोकल कॉर्ड के कारण", "उच्च आयाम के कारण", "ध्वनि की कम चाल के कारण"],
      answer: 0,
      exp: "Explanation (En): Shorter and tighter vocal cords in women and children vibrate at a higher frequency, producing a higher-pitched voice.\nस्पष्टीकरण (Hi): महिलाओं और बच्चों के वोकल कॉर्ड छोटे होते हैं, जिससे वे उच्च आवृत्ति पर कंपन करते हैं और आवाज पतली/तीखी होती है।"
    },
    {
      qEn: "What is the acoustic phenomenon that allows us to hear around corners or obstacles?",
      qHi: "वह कौन सी घटना है जिसके कारण हमें कोनों या बाधाओं के पीछे से आती हुई ध्वनि भी सुनाई दे जाती है?",
      optionsEn: ["Diffraction of sound", "Reflection of sound", "Refraction of sound", "Polarization of sound"],
      optionsHi: ["ध्वनि का विवर्तन (Diffraction of sound)", "ध्वनि का परावर्तन", "ध्वनि का अपवर्तन", "ध्वनि का ध्रुवण"],
      answer: 0,
      exp: "Explanation (En): Diffraction is the bending of waves around obstacles and corners, which occurs prominently for sound because its wavelength is comparable to obstacle sizes.\nस्पष्टीकरण (Hi): बाधाओं के किनारों से तरंगों का मुड़ना विवर्तन (Diffraction) कहलाता है; ध्वनि की तरंगदैर्ध्य बड़ी होने के कारण यह कोनों पर आसानी से मुड़ जाती है।"
    }
  ],
    "Electricity": [
    {
      qEn: "What is the SI unit of electric charge?",
      qHi: "विद्युत आवेश (electric charge) का SI मात्रक क्या है?",
      optionsEn: ["Coulomb", "Ampere", "Volt", "Ohm"],
      optionsHi: ["कूलाम (Coulomb)", "एम्पीयर", "वोल्ट", "ओम"],
      answer: 0,
      exp: "Explanation (En): The SI unit of electric charge is the Coulomb (C).\nस्पष्टीकरण (Hi): विद्युत आवेश का SI मात्रक कूलाम (Coulomb) है।"
    },
    {
      qEn: "What is the magnitude of charge on a single electron?",
      qHi: "एक अकेले इलेक्ट्रॉन पर आवेश का परिमाण कितना होता है?",
      optionsEn: ["1.6 \times 10^{-19} \text{ C}", "9.1 \times 10^{-31} \text{ C}", "6.023 \times 10^{23} \text{ C}", "3 \times 10^8 \text{ C}"],
      optionsHi: ["1.6 \times 10^{-19} \text{ C}", "9.1 \times 10^{-31} \text{ C}", "6.023 \times 10^{23} \text{ C}", "3 \times 10^8 \text{ C}"],
      answer: 0,
      exp: "Explanation (En): The elementary charge of an electron is approximately -1.6 \times 10^{-19} \text{ C}.\nस्पष्टीकरण (Hi): एक इलेक्ट्रॉन पर आवेश का मान 1.6 \times 10^{-19} \text{ कूलाम} होता है।"
    },
    {
      qEn: "According to Ohm's Law, what is the relationship between potential difference (V), current (I), and resistance (R)?",
      qHi: "ओम के नियम के अनुसार, विभवांतर (V), धारा (I) और प्रतिरोध (R) के बीच क्या संबंध है?",
      optionsEn: ["V = I \\cdot R", "I = V \\cdot R", "R = V \\cdot I", "V = R / I"],
      optionsHi: ["V = I \\cdot R", "I = V \\cdot R", "R = V \\cdot I", "V = R / I"],
      answer: 0,
      exp: "Explanation (En): Ohm's Law states that V = IR at constant physical conditions.\nस्पष्टीकरण (Hi): भौतिक अवस्थाएं स्थिर रहने पर ओम के नियम के अनुसार V = IR होता है।"
    },
    {
      qEn: "What is the SI unit of electrical resistance?",
      qHi: "विद्युत प्रतिरोध (electrical resistance) का SI मात्रक क्या है?",
      optionsEn: ["Ohm", "Volt", "Siemens", "Ampere"],
      optionsHi: ["ओम (Ohm)", "वोल्ट", "सीमेंस", "एम्पीयर"],
      answer: 0,
      exp: "Explanation (En): The SI unit of electrical resistance is the Ohm (\\Omega).\nस्पष्टीकरण (Hi): विद्युत प्रतिरोध का SI मात्रक ओम (Ohm) है।"
    },
    {
      qEn: "What is the SI unit of electrical conductance (reciprocal of resistance)?",
      qHi: "विद्युत चालकता (electrical conductance, प्रतिरोध का व्युत्क्रम) का SI मात्रक क्या है?",
      optionsEn: ["Siemens (or mho)", "Ohm-meter", "Coulomb", "Joule"],
      optionsHi: ["सीमेंस (Siemens या mho)", "ओम-मीटर", "कूलाम", "जूल"],
      answer: 0,
      exp: "Explanation (En): Conductance G = 1/R, and its SI unit is Siemens (S) or reciprocal ohm (\text{mho}).nस्पष्टीकरण (Hi): चालकता प्रतिरोध का उल्टा होती है, जिसका SI मात्रक सीमेंस (Siemens - S) है।"
    },
    {
      qEn: "How does the resistance of a metallic wire depend on its length (l) and cross-sectional area (A)?",
      qHi: "किसी धातु के तार का प्रतिरोध उसकी लंबाई (l) और अनुप्रस्थ काट के क्षेत्रफल (A) पर कैसे निर्भर करता है?",
      optionsEn: ["R = \\rho \\frac{l}{A}", "R = \\rho \\frac{A}{l}", "R = \\frac{\\rho l}{A^2}", "R = \\rho l A"],
      optionsHi: ["R = \\rho \\frac{l}{A}", "R = \\rho \\frac{A}{l}", "R = \\frac{\\rho l}{A^2}", "R = \\rho l A"],
      answer: 0,
      exp: "Explanation (En): Resistance is directly proportional to length and inversely proportional to cross-sectional area (R = \\rho l / A).\nस्पष्टीकरण (Hi): प्रतिरोध लंबाई के समानुपाती और क्षेत्रफल के व्युत्क्रमानुपाती होता है (R = \\rho l / A)।"
    },
    {
      qEn: "What is the SI unit of electrical resistivity (\\rho)?",
      qHi: "विद्युत प्रतिरोधकता (electrical resistivity, \\rho) का SI मात्रक क्या है?",
      optionsEn: ["Ohm-meter (\Omega \\cdot \\text{m})", "Ohm", "Ohm/meter", "Siemens"],
      optionsHi: ["ओम-मीटर (\Omega \\cdot \\text{m})", "ओम", "ओम/मीटर", "सीमेंस"],
      answer: 0,
      exp: "Explanation (En): From R = \\rho l / A, resistivity \\rho = R A / l, giving SI unit \Omega \\cdot \\text{m}.\nस्पष्टीकरण (Hi): प्रतिरोधकता \\rho = RA / l से इसका मात्रक ओम-मीटर (\Omega \\cdot \\text{m}) प्राप्त होता है।"
    },
    {
      qEn: "What happens to the resistivity of a pure semiconductor when its temperature increases?",
      qHi: "शुद्ध अर्धचालक (semiconductor) का तापमान बढ़ने पर उसकी प्रतिरोधकता पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "Becomes infinite"],
      optionsHi: ["घट जाती है (Decreases)", "बढ़ जाती है", "नियत रहती है", "अनंत हो जाती है"],
      answer: 0,
      exp: "Explanation (En): In semiconductors, thermal excitation releases more charge carriers as temperature rises, so resistivity decreases.\nस्पष्टीकरण (Hi): अर्धचालकों में तापमान बढ़ने से सहसंयोजक बंध टूटते हैं और आवेश वाहक बढ़ते हैं, जिससे प्रतिरोधकता घट जाती है।"
    },
    {
      qEn: "What is the equivalent resistance when three resistors R_1, R_2, and R_3 are connected in series?",
      qHi: "जब तीन प्रतिरोधक R_1, R_2 और R_3 श्रेणी क्रम (series) में जुड़े हों, तो उनका तुल्य प्रतिरोध कितना होगा?",
      optionsEn: ["R_s = R_1 + R_2 + R_3", "1/R_s = 1/R_1 + 1/R_2 + 1/R_3", "R_s = R_1 R_2 R_3", "R_s = (R_1 + R_2) / R_3"],
      optionsHi: ["R_s = R_1 + R_2 + R_3", "1/R_s = 1/R_1 + 1/R_2 + 1/R_3", "R_s = R_1 R_2 R_3", "R_s = (R_1 + R_2) / R_3"],
      answer: 0,
      exp: "Explanation (En): Resistors in series add up directly: R_s = R_1 + R_2 + R_3.\nस्पष्टीकरण (Hi): श्रेणी क्रम में जुड़े प्रतिरोध सीधे जुड़ जाते हैं: R_s = R_1 + R_2 + R_3।"
    },
    {
      qEn: "What is the equivalent resistance when three resistors R_1, R_2, and R_3 are connected in parallel?",
      qHi: "जब तीन प्रतिरोधक R_1, R_2 और R_3 समांतर क्रम (parallel) में जुड़े हों, तो तुल्य प्रतिरोध का व्युत्क्रम क्या होगा?",
      optionsEn: ["\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}", "R_p = R_1 + R_2 + R_3", "R_p = R_1 R_2 R_3", "R_p = \\frac{R_1+R_2+R_3}{3}"],
      optionsHi: ["\\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}", "R_p = R_1 + R_2 + R_3", "R_p = R_1 R_2 R_3", "R_p = \\frac{R_1+R_2+R_3}{3}"],
      answer: 0,
      exp: "Explanation (En): In parallel combination, reciprocals of resistances add up: \\frac{1}{R_p} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}.\nस्पष्टीकरण (Hi): समांतर क्रम में प्रतिरोधों के व्युत्क्रमों का योग कुल प्रतिरोध के व्युत्क्रम के बराबर होता है।"
    },
    {
      qEn: "What is Joule's Law of Heating expression for heat produced (H) in a resistor?",
      qHi: "प्रतिरोधक में उत्पन्न ऊष्मा (H) के लिए जूल के तापन नियम का व्यंजक क्या है?",
      optionsEn: ["H = I^2 R t", "H = I R t^2", "H = V I^2 t", "H = \\frac{V^2}{R} t"],
      optionsHi: ["H = I^2 R t", "H = I R t^2", "H = V I^2 t", "H = \\frac{V^2}{R} t"],
      answer: 0,
      exp: "Explanation (En): Joule's Law states that heat produced H = I^2 R t, directly proportional to square of current, resistance, and time.\nस्पष्टीकरण (Hi): जूल के नियम के अनुसार उत्पन्न ऊष्मा H = I^2 R t होती है।"
    },
    {
      qEn: "What is the formula for electric power (P) in terms of voltage (V) and current (I)?",
      qHi: "वोल्टेज (V) और धारा (I) के पदों में विद्युत शक्ति (P) का सूत्र क्या है?",
      optionsEn: ["P = V \\cdot I", "P = I^2 / V", "P = V^2 \\cdot I", "P = V / I"],
      optionsHi: ["P = V \\cdot I", "P = I^2 / V", "P = V^2 \\cdot I", "P = V / I"],
      answer: 0,
      exp: "Explanation (En): Electric power P = VI, which can also be written as I^2R or V^2/R.\nस्पष्टीकरण (Hi): विद्युत शक्ति P = VI होती है, जिसे ओम के नियम से I^2R या V^2/R भी लिख सकते हैं।"
    },
    {
      qEn: "What is the purpose of an electric fuse in a household circuit?",
      qHi: "घरेलू सर्किट में इलेक्ट्रिक फ्यूज (electric fuse) का मुख्य उद्देश्य क्या है?",
      optionsEn: ["To protect appliances from short-circuits and overloading by melting when current exceeds safe limit", "To increase voltage", "To store charge", "To measure electric power"],
      optionsHi: ["अतिभारण (overloading) या शॉर्ट सर्किट होने पर पिघलकर उपकरणों की रक्षा करना", "वोल्टेज बढ़ाना", "आवेश संचित करना", "विद्युत शक्ति मापना"],
      answer: 0,
      exp: "Explanation (En): A fuse has a low melting point and high resistance; it melts and breaks the circuit during excessive current surges.\nस्पष्टीकरण (Hi): फ्यूज तार का गलनांक कम होता है, और अधिक धारा बहने पर यह पिघलकर सर्किट तोड़ देता है जिससे उपकरण सुरक्षित रहते हैं।"
    },
    {
      qEn: "What alloy is commonly used for making heating elements in electric irons and heaters due to high resistivity and high melting point?",
      qHi: "उच्च प्रतिरोधकता और उच्च गलनांक के कारण इलेक्ट्रिक आयरन और हीटर में हीटिंग एलिमेंट बनाने के लिए किस मिश्र धातु का उपयोग किया जाता है?",
      optionsEn: ["Nichrome", "Copper", "Silver", "Aluminium"],
      optionsHi: ["नाइक्रोम (Nichrome)", "तांबा", "चांदी", "एल्युमीनियम"],
      answer: 0,
      exp: "Explanation (En): Nichrome (an alloy of nickel, chromium, and iron) has high resistivity and does not oxidize easily at high temperatures.\nस्पष्टीकरण (Hi): नाइक्रोम (Nichrome) की प्रतिरोधकता उच्च होती है और यह उच्च तापमान पर पिघलता या ऑक्सीकृत नहीं होता।"
    },
    {
      qEn: "What is Kirchhoff's First Law (Current Law - KCL) based on?",
      qHi: "किर्चॉफ का पहला नियम (धारा नियम - KCL) किस संरक्षण नियम पर आधारित है?",
      optionsEn: ["Conservation of charge", "Conservation of energy", "Conservation of momentum", "Conservation of mass"],
      optionsHi: ["आवेश का संरक्षण (Conservation of charge)", "ऊर्जा का संरक्षण", "संवेग का संरक्षण", "द्रव्यमान का संरक्षण"],
      answer: 0,
      exp: "Explanation (En): Kirchhoff's Current Law states that the algebraic sum of currents meeting at a junction is zero, based on charge conservation.\nस्पष्टीकरण (Hi): किर्चॉफ का धारा नियम (KCL) आवेश संरक्षण के नियम पर आधारित है, जिसके अनुसार संधि पर मिलने वाली धाराओं का बीजगणितीय योग शून्य होता है।"
    },
    {
      qEn: "What is Kirchhoff's Second Law (Voltage Law - KVL) based on?",
      qHi: "किर्चॉफ का दूसरा नियम (वोल्टेज नियम - KVL) किस संरक्षण नियम पर आधारित है?",
      optionsEn: ["Conservation of energy", "Conservation of charge", "Conservation of momentum", "Conservation of angular momentum"],
      optionsHi: ["ऊर्जा का संरक्षण (Conservation of energy)", "आवेश का संरक्षण", "संवेग का संरक्षण", "कोणीय संवेग संरक्षण"],
      answer: 0,
      exp: "Explanation (En): Kirchhoff's Voltage Law states that the sum of potential drops around any closed loop equals zero, based on energy conservation.\nस्पष्टीकरण (Hi): किर्चॉफ का वोल्टेज नियम (KVL) ऊर्जा संरक्षण के नियम पर आधारित है।"
    },
    {
      qEn: "What instrument is used to measure electric current in a circuit?",
      qHi: "परिपथ में विद्युत धारा मापने के लिए किस उपकरण का उपयोग किया जाता है?",
      optionsEn: ["Ammeter", "Voltmeter", "Galvanometer", "Wattmeter"],
      optionsHi: ["अमीटर (Ammeter)", "वोल्टमीटर", "गैल्वेनोमीटर", "वाॅटमीटर"],
      answer: 0,
      exp: "Explanation (En): An ammeter is connected in series in a circuit to measure electric current.\nस्पष्टीकरण (Hi): विद्युत धारा मापने के लिए अमीटर (Ammeter) को हमेशा श्रेणी क्रम (series) में जोड़ा जाता है।"
    },
    {
      qEn: "How should an ideal ammeter be connected in a circuit, and what is its internal resistance?",
      qHi: "एक आदर्श अमीटर को परििपथ में कैसे जोड़ा जाना चाहिए, और उसका आंतरिक प्रतिरोध कितना होना चाहिए?",
      optionsEn: ["Connected in series; internal resistance should be zero", "Connected in parallel; internal resistance should be infinite", "Connected in series; internal resistance should be infinite", "Connected in parallel; internal resistance should be zero"],
      optionsHi: ["श्रेणी क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध शून्य होना चाहिए", "समांतर क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध अनंत होना चाहिए", "श्रेणी क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध अनंत होना चाहिए", "समांतर क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध शून्य होना चाहिए"],
      answer: 0,
      exp: "Explanation (En): An ideal ammeter has zero internal resistance and must be connected in series so it doesn't alter the circuit current.\nस्पष्टीकरण (Hi): एक आदर्श अमीटर का आंतरिक प्रतिरोध शून्य होता है और इसे सर्किट में श्रेणी क्रम में जोड़ा जाता है ताकि धारा न घटे।"
    },
    {
      qEn: "How should a voltmeter be connected in a circuit to measure potential difference, and what is its ideal internal resistance?",
      qHi: "विभवांतर मापने के लिए वोल्टमीटर को परिपथ में कैसे जोड़ा जाना चाहिए, और उसका आदर्श आंतरिक प्रतिरोध कितना होना चाहिए?",
      optionsEn: ["Connected in parallel; internal resistance should be infinite", "Connected in series; internal resistance should be zero", "Connected in parallel; internal resistance should be zero", "Connected in series; internal resistance should be infinite"],
      optionsHi: ["समांतर क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध अनंत होना चाहिए", "श्रेणी क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध शून्य होना चाहिए", "समांतर क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध शून्य होना चाहिए", "श्रेणी क्रम में जोड़ा जाना चाहिए; आंतरिक प्रतिरोध अनंत होना चाहिए"],
      answer: 0,
      exp: "Explanation (En): An ideal voltmeter has infinite internal resistance and is connected in parallel across components so no current passes through it.\nस्पष्टीकरण (Hi): एक आदर्श वोल्टमीटर का आंतरिक प्रतिरोध अनंत (infinite) होता है और इसे हमेशा समांतर क्रम में जोड़ा जाता है।"
    },
    {
      qEn: "What is the internal resistance (r) of a cell related to its emf (E) and terminal voltage (V) when drawing current (I)?",
      qHi: "जब किसी सेल से धारा (I) ली जा रही हो, तो उसके आंतरिक प्रतिरोध (r), विद्युत वाहक बल (E) और टर्मिनल विभव (V) के बीच क्या संबंध है?",
      optionsEn: ["E = V + Ir \\Rightarrow r = \\frac{E - V}{I}", "V = E + Ir", "r = E \\cdot V \\cdot I", "E = I(R + r)"],
      optionsHi: ["E = V + Ir \\Rightarrow r = \\frac{E - V}{I}", "V = E + Ir", "r = E \\cdot V \\cdot I", "E = I(R + r)"],
      answer: 0,
      exp: "Explanation (En): Terminal voltage V = E - Ir, which rearranges to internal resistance r = (E - V)/I.\nस्पष्टीकरण (Hi): टर्मिनल वोल्टता V = E - Ir होती है, जिससे आंतरिक प्रतिरोध r = \\frac{E - V}{I} प्राप्त होता है।"
    },
    {
      qEn: "What is super-conductivity?",
      qHi: "अतिचालकता (superconductivity) क्या है?",
      optionsEn: ["The phenomenon where electrical resistance of certain materials drops to exactly zero below a certain critical temperature", "Infinite resistance at high temperatures", "Flow of current without voltage", "Conductivity in vacuum"],
      optionsHi: ["वह घटना जिसमें कुछ पदार्थों का प्रतिरोध एक निश्चित क्रांतिक तापमान (critical temperature) से नीचे गिरकर शून्य हो जाता है", "उच्च तापमान पर अनंत प्रतिरोध", "बिना वोल्टेज के धारा प्रवाह", "निर्वात में चालकता"],
      answer: 0,
      exp: "Explanation (En): Superconductivity is zero electrical resistance and expulsion of magnetic fields exhibited by certain materials below critical temperature.\nस्पष्टीकरण (Hi): अतिचालकता वह स्थिति है जिसमें कुछ विशेष पदार्थों का प्रतिरोध एक निश्चित क्रांतिक तापमान (T_c) के नीचे शून्य हो जाता है।"
    },
    {
      qEn: "What is the magnetic field inside a long current-carrying solenoid?",
      qHi: "एक लंबी धारावाही परिनालिका (solenoid) के भीतर चुंबकीय क्षेत्र कैसा होता है?",
      optionsEn: ["Uniform and strong along the axis", "Zero everywhere", "Radial and outward", "Varying randomly"],
      optionsHi: ["अक्ष के अनुदिश एकसमान और प्रबल (Uniform and strong)", "हर जगह शून्य", "त्रिज्यीय और बाहर की ओर", "यादृच्छिक रूप से परिवर्तित"],
      answer: 0,
      exp: "Explanation (En): The magnetic field inside a long solenoid is uniform and parallel to the axis, given by B = \\mu_0 n I.\nस्पष्टीकरण (Hi): लंबी परिनालिका के अंदर चुंबकीय क्षेत्र रेखाएं समांतर होती हैं, जिससे क्षेत्र एकसमान और प्रबल होता है।"
    },
    {
      qEn: "What is the force (F) experienced by a moving charge (q) with velocity (v) in a uniform magnetic field (B) at an angle \\theta?",
      qHi: "एकसमान चुंबकीय क्षेत्र (B) में वेग (v) से गतिमान आवेश (q) पर लगने वाला बल (F) कितना होता है जब कोण \\theta हो?",
      optionsEn: ["F = q v B \\sin\\theta", "F = q v B \\cos\\theta", "F = \\frac{qv}{B}", "F = B v / q"],
      optionsHi: ["F = q v B \\sin\\theta", "F = q v B \\cos\\theta", "F = \\frac{qv}{B}", "F = B v / q"],
      answer: 0,
      exp: "Explanation (En): Magnetic Lorentz force on a moving charge is given by vector cross product F = q(\\mathbf{v} \\times \\mathbf{B}), magnitude q v B \\sin\\theta.\nस्पष्टीकरण (Hi): गतिमान आवेश पर चुंबकीय बल का परिमाण F = q v B \\sin\\theta होता है (लोरेंत्ज़ बल)।"
    },
    {
      qEn: "What is the force (F) acting on a current-carrying straight conductor of length (l) placed in a uniform magnetic field (B)?",
      qHi: "एकसमान चुंबकीय क्षेत्र (B) में रखे लंबाई (l) के धारावाही सीधे चालक पर लगने वाला बल (F) कितना होता है?",
      optionsEn: ["F = I l B \\sin\\theta", "F = I^2 l B", "F = \\frac{I l}{B}", "F = B^2 l I"],
      optionsHi: ["F = I l B \\sin\\theta", "F = I^2 l B", "F = \\frac{I l}{B}", "F = B^2 l I"],
      answer: 0,
      exp: "Explanation (En): Force on a current-carrying conductor in a magnetic field is F = I l B \\sin\\theta.\nस्पष्टीकरण (Hi): चुंबकीय क्षेत्र में स्थित धारावाही चालक पर बल F = I l B \\sin\\theta होता है।"
    },
    {
      qEn: "What principle governs the working of an electric generator (dynamo)?",
      qHi: "विद्युत जनरेटर (dynamo / generator) के काम करने का सिद्धांत किस पर आधारित है?",
      optionsEn: ["Electromagnetic Induction (Faraday's Law)", "Magnetic repulsion", "Joule heating effect", "Thermoelectric effect"],
      optionsHi: ["विद्युत चुंबकीय प्रेरण (Faraday's Law of Electromagnetic Induction)", "चुंबकीय प्रतिकर्षक", "जूल तापन प्रभाव", "थर्मोइलेक्ट्रिक प्रभाव"],
      answer: 0,
      exp: "Explanation (En): An electric generator converts mechanical energy into electrical energy using Faraday's law of electromagnetic induction.\nस्पष्टीकरण (Hi): जनरेटर फैराडे के विद्युत चुंबकीय प्रेरण के नियम पर काम करता है जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है।"
    },
    {
      qEn: "What is the working principle of a transformer?",
      qHi: "ट्रांसफार्मर (transformer) का कार्य करने का सिद्धांत क्या है?",
      optionsEn: ["Mutual Induction", "Self Induction", "Eddy current heating", "Capacitive discharge"],
      optionsHi: ["अन्योन्य प्रेरण (Mutual Induction)", "स्वप्रेरण (Self Induction)", "एडी करेंट हीटिंग", "कैपेसिटिव डिस्चार्ज"],
      answer: 0,
      exp: "Explanation (En): A transformer works on the principle of mutual induction between primary and secondary coils.\nस्पष्टीकरण (Hi): ट्रांसफार्मर प्राथमिक और द्वितीयक कुंडली के बीच अन्योन्य प्रेरण (Mutual Induction) के सिद्धांत पर काम करता है।"
    },
    {
      qEn: "Can a transformer step up or step down DC voltage?",
      qHi: "क्या ट्रांसफार्मर डीसी (DC - दिष्ट धारा) वोल्टेज को बढ़ा या घटा सकता है?",
      optionsEn: ["No, transformers only work with AC (alternating current) due to changing magnetic flux", "Yes, easily", "Only with batteries", "Yes, if resistance is high"],
      optionsHi: ["नहीं, ट्रांसफार्मर केवल AC (प्रत्यावर्ती धारा) के साथ काम करते हैं क्योंकि चुंबकीय फ्लक्स में परिवर्तन आवश्यक है", "हाँ, आसानी से", "केवल बैटरी के साथ", "हाँ, यदि प्रतिरोध उच्च हो"],
      answer: 0,
      exp: "Explanation (En): Transformers require a changing magnetic flux (AC) to induce voltage in the secondary coil via mutual induction; DC produces constant flux.\nस्पष्टीकरण (Hi): ट्रांसफार्मर को काम करने के लिए बदलते चुंबकीय फ्लक्स (AC) की आवश्यकता होती है, इसलिए यह DC पर काम नहीं करता।"
    },
    {
      qEn: "What is the frequency of standard household AC electricity in India?",
      qHi: "भारत में घरेलू उपयोग की जाने वाली मानक AC विद्युत धारा की आवृत्ति (frequency) कितनी होती है?",
      optionsEn: ["50 \\text{ Hz}", "60 \\text{ Hz}", "100 \\text{ Hz}", "220 \\text{ Hz}"],
      optionsHi: ["50 \\text{ Hz}", "60 \\text{ Hz}", "100 \\text{ Hz}", "220 \\text{ Hz}"],
      answer: 0,
      exp: "Explanation (En): Standard household alternating current frequency in India is 50 \\text{ Hz} (cycles per second).\nस्पष्टीकरण (Hi): भारत में घरों में आने वाली AC आपूर्ति की आवृत्ति 50 \\text{ Hz} होती है।"
    },
    {
      qEn: "Why is electric power transmitted over long distances at very high voltages and low currents?",
      qHi: "दूर-दराज के इलाकों में विद्युत शक्ति का संचरण बहुत उच्च वोल्टेज और कम धाराओं पर क्यों किया जाता है?",
      optionsEn: ["To minimize heat energy losses (I^2R loss) in transmission lines", "To increase current speed", "To make wires thicker", "To reduce transformer cost"],
      optionsHi: ["ट्रांसमिशन लाइनों में ऊष्मा ऊर्जा की हानि (I^2R लॉस) को कम करने के लिए", "धारा की गति बढ़ाने के लिए", "तारों को मोटा करने के लिए", "ट्रांसफार्मर की लागत घटाने के लिए"],
      answer: 0,
      exp: "Explanation (En): Transmitting at high voltage reduces current I, which drastically minimizes I^2R power losses across long transmission lines.\nस्पष्टीकरण (Hi): उच्च वोल्टेज पर धारा कम हो जाती है, जिससे केबलों में I^2R (ऊष्मीय) ऊर्जा की हानि बहुत कम होती है।"
    }
  ],
    "Magnetism": [
    {
      qEn: "What is the SI unit of magnetic field strength (magnetic flux density)?",
      qHi: "चुंबकीय क्षेत्र की तीव्रता (चुंबकीय फ्लक्स घनत्व) का SI मात्रक क्या है?",
      optionsEn: ["Tesla", "Weber", "Henry", "Gauss"],
      optionsHi: ["टेसला (Tesla)", "वेबर", "हेनरी", "गाउस"],
      answer: 0,
      exp: "Explanation (En): The SI unit of magnetic field (magnetic flux density) is the Tesla (T).\nस्पष्टीकरण (Hi): चुंबकीय क्षेत्र या चुंबकीय फ्लक्स घनत्व का SI मात्रक टेसला (Tesla) है।"
    },
    {
      qEn: "What is the relationship between Tesla (T) and Gauss (G) in CGS units?",
      qHi: "CGS इकाइयों में टेसला (Tesla) और गाउस (Gauss) के बीच क्या संबंध है?",
      optionsEn: ["1 \\text{ Tesla} = 10^4 \\text{ Gauss}", "1 \\text{ Tesla} = 10^{-4} \\text{ Gauss}", "1 \\text{ Tesla} = 10^2 \\text{ Gauss}", "1 \\text{ Tesla} = 10^6 \\text{ Gauss}"],
      optionsHi: ["1 \\text{ Tesla} = 10^4 \\text{ Gauss}", "1 \\text{ Tesla} = 10^{-4} \\text{ Gauss}", "1 \\text{ Tesla} = 10^2 \\text{ Gauss}", "1 \\text{ Tesla} = 10^6 \\text{ Gauss}"],
      answer: 0,
      exp: "Explanation (En): 1 \\text{ Tesla} = 10^4 \\text{ Gauss} (\\text{G}), where Gauss is the CGS unit of magnetic field.\nस्पष्टीकरण (Hi): 1 \\text{ टेसला} = 10^4 \\text{ गाउस} होता है।"
    },
    {
      qEn: "What is the SI unit of magnetic flux?",
      qHi: "चुंबकीय फ्लक्स (magnetic flux) का SI मात्रक क्या है?",
      optionsEn: ["Weber", "Tesla", "Ampere-turn", "Henry"],
      optionsHi: ["वेबर (Weber)", "टेसला", "एम्पीयर-टर्न", "हेनरी"],
      answer: 0,
      exp: "Explanation (En): The SI unit of magnetic flux is the Weber (Wb).\nस्पष्टीकरण (Hi): चुंबकीय फ्लक्स का SI मात्रक वेबर (Weber) है।"
    },
    {
      qEn: "What is the SI unit of self-inductance or mutual inductance?",
      qHi: "स्वप्रेरकत्व (self-inductance) या पारस्परिक प्रेरकत्व (mutual inductance) का SI मात्रक क्या है?",
      optionsEn: ["Henry", "Weber", "Tesla", "Farad"],
      optionsHi: ["हेनरी (Henry)", "वेबर", "टेसला", "फैराड"],
      answer: 0,
      exp: "Explanation (En): The SI unit of inductance is the Henry (H).\nस्पष्टीकरण (Hi): प्रेरकत्व (Inductance) का SI मात्रक हेनरी (Henry) है।"
    },
    {
      qEn: "What is the nature of magnetic field lines outside a bar magnet?",
      qHi: "एक छड़ चुंबक (bar magnet) के बाहर चुंबकीय क्षेत्र रेखाओं की दिशा कैसी होती है?",
      optionsEn: ["From North pole to South pole", "From South pole to North pole", "Radial and inward", "Randomly dispersed"],
      optionsHi: ["उत्तरी ध्रुव से दक्षिणी ध्रुव की ओर (North to South)", "दक्षिणी ध्रुव से उत्तरी ध्रुव की ओर", "त्रिज्यीय और अंदर की ओर", "यादृच्छिक रूप से फैली हुई"],
      answer: 0,
      exp: "Explanation (En): Outside a magnet, magnetic field lines run from the North pole to the South pole, and inside from South to North, forming closed loops.\nस्पष्टीकरण (Hi): चुंबक के बाहर क्षेत्र रेखाएं उत्तरी ध्रुव से दक्षिणी ध्रुव की ओर और अंदर दक्षिण से उत्तर की ओर जाती हैं।"
    },
    {
      qEn: "Can magnetic field lines ever intersect each other?",
      qHi: "क्या चुंबकीय क्षेत्र रेखाएं कभी एक-दूसरे को काट सकती हैं?",
      optionsEn: ["No, because that would mean two directions of magnetic field at the same point, which is impossible", "Yes, at the poles", "Yes, in uniform fields", "Yes, at neutral points"],
      optionsHi: ["नहीं, क्योंकि इसका अर्थ एक ही बिंदु पर चुंबकीय क्षेत्र की दो दिशाएं होगा, जो असंभव है", "हाँ, ध्रुवों पर", "हाँ, एकसमान क्षेत्रों में", "हाँ, उदासीन बिंदुओं पर"],
      answer: 0,
      exp: "Explanation (En): If two field lines intersected, the magnetic field vector would have two directions at that single point, which is physically impossible.\nस्पष्टीकरण (Hi): यदि दो क्षेत्र रेखाएं काटेंगी तो कटान बिंदु पर क्षेत्र की दो दिशाएं होंगी, जो असंभव है।"
    },
    {
      qEn: "Which substance is strongly attracted by a magnet and can be permanently magnetized?",
      qHi: "कौन सा पदार्थ चुंबक द्वारा प्रबल रूप से आकर्षित होता है और जिसे स्थायी रूप से चुम्बकीयृत किया जा सकता है?",
      optionsEn: ["Ferromagnetic substance (e.g., Iron, Cobalt, Nickel)", "Paramagnetic substance", "Diamagnetic substance", "Non-magnetic substance"],
      optionsHi: ["लहचुंबकीय पदार्थ (Ferromagnetic - जैसे लोहा, कोबाल्ट, निकल)", "अनुचुंबकीय पदार्थ", "प्रतिचुंबकीय पदार्थ", "अचुंबकीय पदार्थ"],
      answer: 0,
      exp: "Explanation (En): Ferromagnetic materials have very high magnetic permeability and are strongly attracted by magnets.\nस्पष्टीकरण (Hi): लहचुंबकीय (Ferromagnetic) पदार्थ चुंबक की ओर प्रबल रूप से आकर्षित होते हैं और स्थायी चुंबक बनाते हैं।"
    },
    {
      qEn: "How do paramagnetic substances behave in an external magnetic field?",
      qHi: "अनुचुंबकीय (Paramagnetic) पदार्थ बाहरी चुंबकीय क्षेत्र में कैसे व्यवहार करते हैं?",
      optionsEn: ["Weakly attracted in the direction of the magnetic field", "Strongly repelled", "Weakly repelled", "Unaffected"],
      optionsHi: ["चुंबकीय क्षेत्र की दिशा में हल्के से आकर्षित होते हैं", "प्रबल रूप से प्रतिकर्षित होते हैं", "हल्के से प्रतिकर्षित होते हैं", "अप्रभावित रहते हैं"],
      answer: 0,
      exp: "Explanation (En): Paramagnetic substances have a small positive magnetic susceptibility and are weakly attracted by magnets.\nस्पष्टीकरण (Hi): अनुचुंबकीय पदार्थों की चुंबकीय प्रवृत्ति छोटी और धनात्मक होती है, जिससे वे क्षेत्र की दिशा में कमजोर रूप से आकर्षित होते हैं।"
    },
    {
      qEn: "How do diamagnetic substances behave in a magnetic field?",
      qHi: "प्रतिचुंबकीय (Diamagnetic) पदार्थ चुंबकीय क्षेत्र में कैसा व्यवहार करते हैं?",
      optionsEn: ["Weakly repelled by a magnetic field", "Strongly attracted", "Weakly attracted", "Attracted only at high temperatures"],
      optionsHi: ["चुंबकीय क्षेत्र द्वारा हल्के से प्रतिकर्षित होते हैं", "प्रबल रूप से आकर्षित होते हैं", "हल्के से आकर्षित होते हैं", "केवल उच्च तापमान पर आकर्षित होते हैं"],
      answer: 0,
      exp: "Explanation (En): Diamagnetic substances have negative magnetic susceptibility and are weakly repelled by magnets (move from strong to weak magnetic fields).\nस्पष्टीकरण (Hi): प्रतिचुंबकीय पदार्थों की चुंबकीय प्रवृत्ति ऋणात्मक होती है, जिससे वे चुंबक द्वारा हल्के से प्रतिकर्षित होते हैं।"
    },
    {
      qEn: "What happens to the magnetic susceptibility of a ferromagnetic substance when its temperature exceeds the Curie temperature?",
      qHi: "जब किसी लौहचुंबकीय पदार्थ का तापमान क्यूरी तापमान (Curie temperature) से अधिक हो जाता है, तो उसकी चुंबकीय प्रवृत्ति पर क्या प्रभाव पड़ता है?",
      optionsEn: ["It becomes paramagnetic", "It remains ferromagnetic", "It becomes completely diamagnetic with zero susceptibility", "It becomes infinite"],
      optionsHi: ["यह अनुचुंबकीय (paramagnetic) बन जाता है", "यह लौहचुंबकीय बना रहता है", "यह शून्य प्रवृत्ति के साथ पूरी तरह प्रतिचुंबकीय बन जाता है", "यह अनंत हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Above the Curie temperature, thermal agitation destroys domain alignment, converting a ferromagnet into a paramagnet.\nस्पष्टीकरण (Hi): क्यूरी ताप से ऊपर जाने पर लौहचुंबकीय पदार्थ अपनी लौहचुंबकत्व खो देता है और अनुचुंबकीय बन जाता है।"
    },
    {
      qEn: "What is the Curie temperature for iron?",
      qHi: "लोहे (Iron) के लिए क्यूरी तापमान (Curie temperature) लगभग कितना होता है?",
      optionsEn: ["Approx 770^\\circ\\text{C} (or 1043 K)", "100^\\circ\\text{C}", "500^\\circ\\text{C}", "1200^\\circ\\text{C}"],
      optionsHi: ["लगभग 770^\\circ\\text{C} (1043 K)", "100^\\circ\\text{C}", "500^\\circ\\text{C}", "1200^\\circ\\text{C}"],
      answer: 0,
      exp: "Explanation (En): The Curie temperature of iron is approximately 770^\\circ\\text{C}, above which it transitions from ferromagnetic to paramagnetic.\nस्पष्टीकरण (Hi): लोहे का क्यूरी तापमान लगभग 770^\\circ\\text{C} होता है।"
    },
    {
      qEn: "What is Faraday's Law of Electromagnetic Induction concerned with?",
      qHi: "फैराडे का विद्युत चुंबकीय प्रेरण का नियम (Faraday's Law) किससे संबंधित है?",
      optionsEn: ["Magnitude of induced emf is directly proportional to the rate of change of magnetic flux linked with the circuit", "Force on a current-carrying wire", "Magnetic field around a current wire", "Magnetic force on moving charges"],
      optionsHi: ["प्रेरित विद्युत वाहक बल का परिमाण सर्किट से जुड़े चुंबकीय फ्लक्स के परिवर्तन की दर के समानुपाती होता है", "धारावाही तार पर बल", "धारा के चारों ओर चुंबकीय क्षेत्र", "गतिमान आवेशों पर चुंबकीय बल"],
      answer: 0,
      exp: "Explanation (En): Faraday's law states e = -\\frac{d\\Phi_B}{dt}, where induced emf equals rate of change of magnetic flux.\nस्पष्टीकरण (Hi): फैराडे के नियम के अनुसार प्रेरित विद्युत वाहक बल चुंबकीय फ्लक्स के परिवर्तन की दर के बराबर होता है।"
    },
    {
      qEn: "What does Lenz's Law of electromagnetic induction state?",
      qHi: "विद्युत चुंबकीय प्रेरण का लेंज का नियम (Lenz's Law) क्या बताता है?",
      optionsEn: ["The direction of induced current is such that it opposes the change in magnetic flux that produces it", "Induced current flows in the same direction as the flux change", "Induced current is always zero", "Magnetic flux is constant"],
      optionsHi: ["प्रेरित धारा की दिशा ऐसी होती है कि वह उस कारण का विरोध करती है जिससे वह उत्पन्न हुई है", "प्रेरित धारा फ्लक्स परिवर्तन की दिशा में ही बहती है", "प्रेरित धारा हमेशा शून्य होती है", "चुंबकीय फ्लक्स नियत रहता है"],
      answer: 0,
      exp: "Explanation (En): Lenz's Law incorporates the minus sign in Faraday's law (e = -\\frac{d\\Phi}{dt}), embodying energy conservation.\nस्पष्टीकरण (Hi): लेंज का नियम ऊर्जा संरक्षण पर आधारित है और यह बताता है कि प्रेरित धारा उस कारण का विरोध करती है जिससे वह पैदा हुई है।"
    },
    {
      qEn: "What are eddy currents?",
      qHi: "एडी करेंट (Eddy currents या भंवर धाराएं) क्या हैं?",
      optionsEn: ["Circulating induced electric currents induced in bulk conductors by changing magnetic fields", "Steady direct currents in batteries", "Currents flowing in vacuum tubes", "Sound waves in metals"],
      optionsHi: ["बदलते चुंबकीय क्षेत्रों द्वारा बड़े चालकों के भीतर प्रेरित होने वाली चक्रीय विद्युत धाराएं", "बैटरी में स्थिर दिष्ट धाराएं", "वैध निर्वात नलियों में बहने वाली धाराएं", "धातुओं में ध्वनि तरंगें"],
      answer: 0,
      exp: "Explanation (En): Eddy currents are loops of electrical current induced within conductors by a changing magnetic field in the conductor, causing energy loss (damping).\nस्पष्टीकरण (Hi): बदलते चुंबकीय क्षेत्र के कारण किसी ठोस चालक के भीतर प्रेरित होने वाली वर्तुल (circular) धाराओं को भंवर धाराएं (Eddy currents) कहते हैं।"
    },
    {
      qEn: "How are eddy current losses minimized in transformer cores?",
      qHi: "ट्रांसफार्मर की क्रोड (core) में एडी करेंट (भंवर धाराओं) से होने वाली ऊर्जा हानि को कैसे कम किया जाता है?",
      optionsEn: ["By using laminated iron cores insulated from each other", "By using a solid block of copper", "By increasing core temperature", "By removing the core completely"],
      optionsHi: ["एक-दूसरे से इन्सुलेटेड लैमिनेटेड (पटलित) लोहे की क्रोड का उपयोग करके", "तांबे के ठोस ब्लॉक का उपयोग करके", "क्रोड का तापमान बढ़ाकर", "क्रोड को पूरी तरह हटाकर"],
      answer: 0,
      exp: "Explanation (En): Lamination breaks up the path of eddy currents, increasing electrical resistance and reducing power loss in transformer cores.\nस्पष्टीकरण (Hi): क्रोड को पतली पट्टियों (laminations) में काटकर और उनके बीच इंसुलेशन लगाकर भंवर धाराओं के प्रभाव को न्यूनतम किया जाता है।"
    },
    {
      qEn: "What is Earth's magnetic field approximately at the surface?",
      qHi: "पृथ्वी की सतह पर उसका चुंबकीय क्षेत्र लगभग कितना होता है?",
      optionsEn: ["Approx 10^{-4} \\text{ Tesla} (or 1 \\text{ Gauss})", "1 \\text{ Tesla}", "10^4 \\text{ Tesla}", "10^{-10} \\text{ Tesla}"],
      optionsHi: ["लगभग 10^{-4} \\text{ टेसला} (या 1 \\text{ गाउस})", "1 \\text{ टेसला}", "10^4 \\text{ टेसला}", "10^{-10} \\text{ टेसला}"],
      answer: 0,
      exp: "Explanation (En): The strength of Earth's magnetic field at the surface ranges from about 0.2 to 0.6 \\text{ Gauss} (2 \\times 10^{-5} to 6 \\times 10^{-5} \\text{ T}).nस्पष्टीकरण (Hi): पृथ्वी की सतह पर चुंबकीय क्षेत्र की तीव्रता लगभग 10^{-4} \\text{ टेसला} (या 1 \\text{ गाउस}) होती है।"
    },
    {
      qEn: "What is magnetic declination?",
      qHi: "चुंबकीय दिकपात (magnetic declination) किसे कहते हैं?",
      optionsEn: ["The angle between geographic north-south and magnetic north-south directions at a place", "The angle made by Earth's magnetic field with horizontal", "The strength of magnetic poles", "The angle of dip"],
      optionsHi: ["किसी स्थान पर भौगोलिक उत्तर-दक्षिण और चुंबकीय उत्तर-दक्षिण के बीच का कोण", "पृथ्वी के चुंबकीय क्षेत्र द्वारा क्षैतिज के साथ बनाया गया कोण", "चुंबकीय ध्रुवों की ताकत", "नति कोण (angle of dip)"],
      answer: 0,
      exp: "Explanation (En): Magnetic declination is the angle between true (geographic) north and magnetic north.\nस्पष्टीकरण (Hi): भौगोलिक उत्तर और चुंबकीय उत्तर के बीच के कोण को चुंबकीय दिकपात (Declination) कहते हैं।"
    },
    {
      qEn: "What is magnetic dip (angle of dip)?",
      qHi: "चुंबकीय नति कोण (Angle of Dip) क्या होता है?",
      optionsEn: ["The angle made by the total Earth's magnetic field vector with the horizontal plane", "The angle between geographic and magnetic poles", "The angle of friction", "The angle of reflection"],
      optionsHi: ["पृथ्वी के कुल चुंबकीय क्षेत्र सदिश द्वारा क्षैतिज तल के साथ बनाया गया कोण", "भौगोलिक और चुंबकीय ध्रुवों के बीच का कोण", "घर्षण कोण", "परावर्तन कोण"],
      answer: 0,
      exp: "Explanation (En): Angle of dip is the angle that the magnetic field lines of the Earth make with the horizontal surface (0° at equator, 90° at poles).\nस्पष्टीकरण (Hi): पृथ्वी के चुंबकीय क्षेत्र की कुल तीव्रता द्वारा क्षैतिज तल के साथ बनाए गए कोण को नति कोण (Angle of Dip) कहते हैं।"
    },
    {
      qEn: "What is the angle of dip at the Earth's magnetic equator?",
      qHi: "पृथ्वी के चुंबकीय भूमध्य रेखा (equator) पर नति कोण (angle of dip) का मान कितना होता है?",
      optionsEn: ["0^\\circ", "90^\\circ", "45^\\circ", "180^\\circ"],
      optionsHi: ["0^\\circ", "90^\\circ", "45^\\circ", "180^\\circ"],
      answer: 0,
      exp: "Explanation (En): At the magnetic equator, Earth's magnetic field is completely horizontal, so the angle of dip is 0^\\circ.\nस्पष्टीकरण (Hi): चुंबकीय भूमध्य रेखा पर चुंबकीय क्षेत्र रेखाएं क्षैतिज होती हैं, अतः नति कोण 0^\\circ होता है।"
    },
    {
      qEn: "What is the angle of dip at the Earth's magnetic poles?",
      qHi: "पृथ्वी के चुंबकीय ध्रुवों (poles) पर नति कोण (angle of dip) का मान कितना होता है?",
      optionsEn: ["90^\\circ", "0^\\circ", "45^\\circ", "180^\\circ"],
      optionsHi: ["90^\\circ", "0^\\circ", "45^\\circ", "180^\\circ"],
      answer: 0,
      exp: "Explanation (En): At the magnetic poles, Earth's magnetic field lines are perfectly vertical, making the angle of dip 90^\\circ.\nस्पष्टीकरण (Hi): चुंबकीय ध्रुवों पर क्षेत्र रेखाएं लंबवत होती हैं, इसलिए नति कोण 90^\\circ होता है।"
    },
    {
      qEn: "What is a magnetic dipole moment of a current-carrying loop?",
      qHi: "एक धारावाही कुंडली (current loop) का चुंबकीय द्विध्रुव आघूर्ण (magnetic dipole moment) किसके बराबर होता है?",
      optionsEn: ["M = I \\cdot A (Current multiplied by area vector)", "M = I / A", "M = I^2 A", "M = A / I"],
      optionsHi: ["M = I \\cdot A (धारा गुणा क्षेत्रफल सदिश)", "M = I / A", "M = I^2 A", "M = A / I"],
      answer: 0,
      exp: "Explanation (En): Magnetic dipole moment M = NIA for N turns, where I is current and A is area.\nस्पष्टीकरण (Hi): चुंबकीय द्विध्रुव आघूर्ण M = I \\cdot A होता है (धारा गुणा अनुप्रस्थ काट का क्षेत्रफल)।"
    },
    {
      qEn: "What happens when a magnetic dipole is placed in a uniform magnetic field?",
      qHi: "जब एक चुंबकीय द्विध्रुव को एकसमान चुंबकीय क्षेत्र में रखा जाता है, तो उस पर क्या कार्य करता है?",
      optionsEn: ["It experiences a torque trying to align it with the field, but net force is zero", "It experiences a net linear force only", "It disintegrates", "It experiences both infinite force and torque"],
      optionsHi: ["इस पर एक बल आघूर्ण (torque) कार्य करता है जो इसे क्षेत्र की दिशा में संरेखित करने का प्रयास करता है, लेकिन कुल बल शून्य होता है", "इस पर केवल रैखिक बल कार्य करता है", "यह विघटित हो जाता है", "इस पर अनंत बल और बल आघूर्ण दोनों लगते हैं"],
      answer: 0,
      exp: "Explanation (En): In a uniform magnetic field, equal and opposite forces on poles create a torque (\\tau = M B \\sin\\theta), while net translational force is zero.\nस्पष्टीकरण (Hi): एकसमान चुंबकीय क्षेत्र में द्विध्रुव पर नेट बल शून्य होता है परंतु बल आघूर्ण (torque) लगता है जो उसे क्षेत्र के समांतर करना चाहता है।"
    },
    {
      qEn: "What is the potential energy (U) of a magnetic dipole of moment M in a magnetic field B at angle \\theta?",
      qHi: "चुंबकीय क्षेत्र B में कोण \\theta पर स्थित आघूर्ण M वाले चुंबकीय द्विध्रुव की स्थितिज ऊर्जा (U) कितनी होती है?",
      optionsEn: ["U = -M \\cdot B = -MB \\cos\\theta", "U = +MB \\sin\\theta", "U = \\frac{MB}{\\cos\\theta}", "U = -MB \\tan\\theta"],
      optionsHi: ["U = -M \\cdot B = -MB \\cos\\theta", "U = +MB \\sin\\theta", "U = \\frac{MB}{\\cos\\theta}", "U = -MB \\tan\\theta"],
      answer: 0,
      exp: "Explanation (En): Potential energy of a magnetic dipole is U = -\\mathbf{M} \\cdot \\mathbf{B} = -MB \\cos\\theta.\nस्पष्टीकरण (Hi): चुंबकीय द्विध्रुव की स्थितिज ऊर्जा U = -MB \\cos\\theta होती है।"
    },
    {
      qEn: "Why can't magnetic monopoles exist?",
      qHi: "चुंबकीय मोनोपोल (magnetic monopole या अकेला उत्तर/दक्षिण ध्रुव) क्यों नहीं पाया जाता है?",
      optionsEn: ["Because magnetic field lines always form closed continuous loops (Gauss's Law for magnetism: \\oint B \\cdot dA = 0)", "Because magnets melt easily", "Because of gravity", "Because of electric charge"],
      optionsHi: ["क्योंकि चुंबकीय क्षेत्र रेखाएं हमेशा बंद और निरंतर लूप बनाती हैं (चुंबकत्व के लिए गॉस का नियम)", "क्योंकि चुंबक आसानी से पिघल जाते हैं", "गुरुत्वाकर्षण के कारण", "विद्युत आवेश के कारण"],
      answer: 0,
      exp: "Explanation (En): Isolating a single magnetic pole is impossible because cutting a magnet in half simply creates two smaller complete magnets (North and South).\nस्पष्टीकरण (Hi): गॉस के नियम अनुसार चुंबकत्व का पृष्ठ समाकलन शून्य होता है (\\oint B \\cdot dA = 0); चुंबक को काटने पर भी दोनों ध्रुव अलग नहीं होते।"
    },
    {
      qEn: "What is the principle behind the working of a moving-coil galvanometer?",
      qHi: "चल कुंडली गैल्वेनोमीटर (moving-coil galvanometer) के काम करने का मूल सिद्धांत क्या है?",
      optionsEn: ["Torque experienced by a current-carrying coil placed in a magnetic field", "Electromagnetic induction", "Electrostatic repulsion", "Joule heating"],
      optionsHi: ["चुंबकीय क्षेत्र में रखी धारावाही कुंडली पर लगने वाला बल आघूर्ण (torque)", "विद्युत चुंबकीय प्रेरण", "स्थिरवैद्युत प्रतिकर्षक", "जूल तापन"],
      answer: 0,
      exp: "Explanation (En): A current-carrying coil in a magnetic field experiences a deflecting torque proportional to the current (\\tau = NIAB \\sin\\theta).\nस्पष्टीकरण (Hi): चुंबकीय क्षेत्र में स्थित धारावाही कुंडली पर लगने वाला बल आघूर्ण गैल्वेनोमीटर के कार्य का आधार है।"
    },
    {
      qEn: "How is a galvanometer converted into an ammeter?",
      qHi: "गैल्वेनोमीटर को अमीटर (ammeter) में कैसे बदला जाता है?",
      optionsEn: ["By connecting a very low resistance (shunt) in parallel with the galvanometer", "By connecting a high resistance in series", "By connecting a low resistance in series", "By removing the coil"],
      optionsHi: ["गैल्वेनोमीटर के साथ समांतर क्रम में बहुत कम प्रतिरोध (shunt) जोड़कर", "श्रेणी क्रम में उच्च प्रतिरोध जोड़कर", "श्रेणी क्रम में कम प्रतिरोध जोड़कर", "कुंडली हटाकर"],
      answer: 0,
      exp: "Explanation (En): A shunt (very small resistance) is connected in parallel to divert most of the current, converting a galvanometer into an ammeter.\nस्पष्टीकरण (Hi): गैल्वेनोमीटर के साथ समांतर क्रम में बहुत छोटा प्रतिरोध (शंट) जोड़कर उसे अमीटर में बदला जाता है।"
    },
    {
      qEn: "How is a galvanometer converted into a voltmeter?",
      qHi: "गैल्वेनोमीटर को वोल्टमीटर (voltmeter) में कैसे बदला जाता है?",
      optionsEn: ["By connecting a very high resistance in series with the galvanometer", "By connecting a low resistance in parallel", "By connecting a high resistance in parallel", "By short-circuiting the galvanometer"],
      optionsHi: ["गैल्वेनोमीटर के साथ श्रेणी क्रम में बहुत उच्च प्रतिरोध जोड़कर", "समांतर क्रम में कम प्रतिरोध जोड़कर", "समांतर क्रम में उच्च प्रतिरोध जोड़कर", "गैल्वेनोमीटर को शॉर्ट-सर्किट करके"],
      answer: 0,
      exp: "Explanation (En): Connecting a high resistance in series limits current through the galvanometer, converting it into a voltmeter.\nस्पष्टीकरण (Hi): गैल्वेनोमीटर के साथ श्रेणी क्रम में एक बहुत बड़ा उच्च प्रतिरोध जोड़कर उसे वोल्टमीटर में बदला जाता है।"
    },
    {
      qEn: "What is the magnetic susceptibility of an ideal superconductor?",
      qHi: "एक आदर्श अतिचालक (ideal superconductor) की चुंबकीय प्रवृत्ति (magnetic susceptibility, \\chi) कितनी होती है?",
      optionsEn: ["-1", "+1", "Zero", "Infinity"],
      optionsHi: ["-1", "+1", "शून्य", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Ideal superconductors exhibit perfect diamagnetism (Meissner effect) where interior magnetic field is zero, meaning susceptibility \\chi = -1.\nस्पष्टीकरण (Hi): मेस्नर प्रभाव के कारण आदर्श अतिचालक पूर्ण प्रतिचुंबकीय होते हैं, जिसके लिए चुंबकीय प्रवृत्ति \\chi = -1 होती है।"
    },
    {
      qEn: "What is the Meissner Effect in superconductors?",
      qHi: "अतिचालकों में मेस्नर प्रभाव (Meissner Effect) क्या है?",
      optionsEn: ["Expulsion of magnetic field lines from the interior of a superconductor when it transitions into superconducting state", "Creation of infinite magnetic field", "Melting of superconductor under magnetic field", "Absorption of all magnetic flux"],
      optionsHi: ["अतिचालक अवस्था में प्रवेश करने पर उसके भीतर से चुंबकीय क्षेत्र रेखाओं का बाहर पूर्ण निष्कासन", "अनंत चुंबकीय क्षेत्र का निर्माण", "चुंबकीय क्षेत्र में अतिचालक का पिघलना", "सारे फ्लक्स का अवशोषण"],
      answer: 0,
      exp: "Explanation (En): The Meissner effect is the complete expulsion of magnetic field from a superconductor as it cools below its critical temperature (B = 0).\nस्पष्टीकरण (Hi): क्रांतिक तापमान के नीचे ठंडा होने पर अतिचालक अपने अंदर से सभी चुंबकीय क्षेत्रों को बाहर धकेल देता है, जिसे मेस्नर प्रभाव कहते हैं।"
    },
    {
      qEn: "What happens to the magnetic force on a stationary charge placed in a uniform magnetic field?",
      qHi: "एकसमान चुंबकीय क्षेत्र में रखे स्थिर आवेश (stationary charge) पर लगने वाला चुंबकीय बल कितना होता है?",
      optionsEn: ["Zero", "Maximum (qvB)", "Proportional to velocity", "Infinite"],
      optionsHi: ["शून्य (Zero)", "अधिकतम (qvB)", "वेग के समानुपाती", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Magnetic force formula F = q(\\mathbf{v} \\times \\mathbf{B}). Since velocity v = 0 for a stationary charge, magnetic force is zero.\nस्पष्टीकरण (Hi): चुंबकीय बल F = qvB\\sin\\theta होता है। स्थिर आवेश के लिए वेग v = 0 होने के कारण चुंबकीय बल शून्य होता है।"
    }
  ],
    "Modern Physics": [
    {
      qEn: "What is the rest mass of a photon?",
      qHi: "एक फोटॉन (photon) का विराम द्रव्यमान (rest mass) कितना होता है?",
      optionsEn: ["Zero", "9.1 \times 10^{-31} \\text{ kg}", "1.67 \times 10^{-27} \\text{ kg}", "Infinite"],
      optionsHi: ["शून्य (Zero)", "9.1 \times 10^{-31} \\text{ kg}", "1.67 \times 10^{-27} \\text{ kg}", "अनंत"],
      answer: 0,
      exp: "Explanation (En): Photons are quanta of light energy that always travel at the speed of light in vacuum and have zero rest mass.\nस्पष्टीकरण (Hi): फोटॉन प्रकाश ऊर्जा के पैकेट (quanta) हैं जिनका विराम द्रव्यमान शून्य होता है।"
    },
    {
      qEn: "What is the energy (E) of a photon of frequency \\nu and Planck's constant h?",
      qHi: "आवृत्ति \\nu और प्लांक नियतांक h वाले फोटॉन की ऊर्जा (E) कितनी होती है?",
      optionsEn: ["E = h\\nu", "E = h / \\nu", "E = \\nu / h", "E = h^2 \\nu"],
      optionsHi: ["E = h\\nu", "E = h / \\nu", "E = \\nu / h", "E = h^2 \\nu"],
      answer: 0,
      exp: "Explanation (En): According to Planck's quantum theory, the energy of a photon is given by E = h\\nu (or \\frac{hc}{\\lambda}).nस्पष्टीकरण (Hi): प्लांक के क्वांटम सिद्धांत के अनुसार फोटॉन की ऊर्जा E = h\\nu होती है।"
    },
    {
      qEn: "Who won the Nobel Prize in Physics for explaining the Photoelectric Effect?",
      qHi: "प्रकाश विद्युत प्रभाव (Photoelectric Effect) की व्याख्या के लिए भौतिकी में नोबेल पुरस्कार किसे मिला था?",
      optionsEn: ["Albert Einstein", "Max Planck", "Niels Bohr", "J.J. Thomson"],
      optionsHi: ["अल्बर्ट आइंस्टीन (Albert Einstein)", "मैक्स प्लांक", "नील्स बोहर", "जे.जे. थॉमसॉन"],
      answer: 0,
      exp: "Explanation (En): Albert Einstein explained the photoelectric effect in 1905 using light quanta (photons), earning him the 1921 Nobel Prize in Physics.\nस्पष्टीकरण (Hi): अल्बर्ट आइंस्टीन ने 1905 में प्रकाश विद्युत प्रभाव की सफल व्याख्या की जिसके लिए उन्हें 1921 का नोबेल पुरस्कार मिला।"
    },
    {
      qEn: "What is the threshold frequency in the photoelectric effect?",
      qHi: "प्रकाश विद्युत प्रभाव में देहली आवृत्ति (threshold frequency) क्या होती है?",
      optionsEn: ["The minimum frequency of incident light required to eject photoelectrons from a metal surface", "Maximum frequency of emitted electrons", "Frequency of ultraviolet rays only", "Zero frequency"],
      optionsHi: ["धातु की सतह से फोटोइलेक्ट्रॉन उत्सर्जित करने के लिए आवश्यक आपतित प्रकाश की न्यूनतम आवृत्ति", "उत्सर्जित इलेक्ट्रॉनों की अधिकतम आवृत्ति", "केवल पराबैंगनी किरणों की आवृत्ति", "शून्य आवृत्ति"],
      answer: 0,
      exp: "Explanation (En): Threshold frequency (\\nu_0) is the minimum frequency below which no photoelectric emission takes place regardless of light intensity.\nस्पष्टीकरण (Hi): देहली आवृत्ति वह न्यूनतम आवृत्ति है जिसके बिना तीव्रता कितनी भी अधिक होने पर भी इलेक्ट्रॉन उत्सर्जित नहीं होते।"
    },
    {
      qEn: "What is de Broglie wavelength (\\lambda) associated with a particle of momentum p?",
      qHi: "संवेग p वाले कण से जुड़ी डी ब्रोग्ली तरंगदैर्ध्य (\\lambda) का सूत्र क्या है?",
      optionsEn: ["\\lambda = \\frac{h}{p}", "\\lambda = p \\cdot h", "\\lambda = \\frac{p}{h}", "\\lambda = \\frac{h}{p^2}"],
      optionsHi: ["\\lambda = \\frac{h}{p}", "\\lambda = p \\cdot h", "\\lambda = \\frac{p}{h}", "\\lambda = \\frac{h}{p^2}"],
      answer: 0,
      exp: "Explanation (En): De Broglie proposed wave-particle duality, giving wavelength \\lambda = \\frac{h}{p} = \\frac{h}{mv}.\nस्पष्टीकरण (Hi): डी ब्रोग्ली परिकल्पना के अनुसार प्रत्येक गतिमान कण से तरंग जुड़ी होती है जिसकी तरंगदैर्ध्य \\lambda = \\frac{h}{p} होती है।"
    },
    {
      qEn: "What does Heisenberg's Uncertainty Principle state?",
      qHi: "हाइजेनबर्ग का अनिश्चितता का सिद्धांत (Heisenberg's Uncertainty Principle) क्या कहता है?",
      optionsEn: ["It is impossible to simultaneously measure both the exact position and momentum of a particle (\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi})", "Energy and time can be known perfectly", "Momentum and velocity are same", "Position can be measured with infinite accuracy"],
      optionsHi: ["कण की स्थिति और संवेग दोनों का एक साथ सटीक मापन असंभव है (\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi})", "ऊर्जा और समय को पूरी तरह से जाना जा सकता है", "संवेग और वेग समान हैं", "स्थिति को अनंत सटीकता से मापा जा सकता है"],
      answer: 0,
      exp: "Explanation (En): Heisenberg's principle states \\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}, reflecting fundamental quantum limitations.\nस्पष्टीकरण (Hi): हाइजेनबर्ग के अनुसार \\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi} होता है, यानी स्थिति और संवेग दोनों का एक साथ यथार्थ मापन असंभव है।"
    },
    {
      qEn: "What is the radius of a nucleus of mass number A proportional to?",
      qHi: "द्रव्यमान संख्या A वाले नाभिक की त्रिज्या किसके समानुपाती होती है?",
      optionsEn: ["A^{1/3}", "A", "A^2", "\\sqrt{A}"],
      optionsHi: ["A^{1/3}", "A", "A^2", "\\sqrt{A}"],
      answer: 0,
      exp: "Explanation (En): Nuclear radius formula is R = R_0 A^{1/3}, where R_0 \\approx 1.2 \\text{ fm}.\nस्पष्टीकरण (Hi): नाभिकीय त्रिज्या R = R_0 A^{1/3} सूत्र के अनुसार द्रव्यमान संख्या के घनमूल (A^{1/3}) के समानुपाती होती है।"
    },
    {
      qEn: "What is the relationship between mass number (A), atomic number (Z), and number of neutrons (N)?",
      qHi: "द्रव्यमान संख्या (A), परमाणु क्रमांक (Z) और न्यूट्रॉनों की संख्या (N) के बीच क्या संबंध है?",
      optionsEn: ["A = Z + N", "A = Z - N", "N = Z + A", "A = Z \\cdot N"],
      optionsHi: ["A = Z + N", "A = Z - N", "N = Z + A", "A = Z \\cdot N"],
      answer: 0,
      exp: "Explanation (En): Mass number A is the total sum of protons (Z) and neutrons (N) in a nucleus (A = Z + N).\nस्पष्टीकरण (Hi): द्रव्यमान संख्या A प्रोटॉनों की संख्या (Z) और न्यूट्रॉनों की संख्या (N) के योग के बराबर होती है।"
    },
    {
      qEn: "What are isotopes?",
      qHi: "समस्थानिक (isotopes) किसे कहते हैं?",
      optionsEn: ["Atoms of the same element having the same atomic number (Z) but different mass numbers (A)", "Atoms with same mass number but different atomic number", "Atoms with same number of neutrons", "Radioactive isomers"],
      optionsHi: ["एक ही तत्व के परमाणु जिनका परमाणु क्रमांक समान लेकिन द्रव्यमान संख्या भिन्न होती है", "समान द्रव्यमान संख्या वाले परमाणु", "समान न्यूट्रॉन वाले परमाणु", "रेडियोधर्मी आइसोमर"],
      answer: 0,
      exp: "Explanation (En): Isotopes share the same number of protons (Z) but differ in neutron count (N).\nस्पष्टीकरण (Hi): समस्थानिकों में प्रोटॉनों की संख्या समान (जैसे हाइड्रोजन के Protium, Deuterium, Tritium) और न्यूट्रॉनों की संख्या अलग होती है।"
    },
    {
      qEn: "What are isobars?",
      qHi: "समभारिक (isobars) किसे कहते हैं?",
      optionsEn: ["Atoms having the same mass number (A) but different atomic numbers (Z)", "Atoms having same atomic number", "Atoms with same number of electrons", "Atoms with same neutrons"],
      optionsHi: ["समान द्रव्यमान संख्या (A) लेकिन भिन्न परमाणु क्रमांक (Z) वाले परमाणु", "समान परमाणु क्रमांक वाले परमाणु", "समान इलेक्ट्रॉनों वाले परमाणु", "समान न्यूट्रॉन वाले परमाणु"],
      answer: 0,
      exp: "Explanation (En): Isobars are nuclei with the same mass number A but different atomic numbers Z.\nस्पष्टीकरण (Hi): समभारिक वे नाभिक हैं जिनकी द्रव्यमान संख्या समान होती है लेकिन परमाणु क्रमांक अलग होते हैं।"
    },
    {
      qEn: "What are isotones?",
      qHi: "समन्यूट्रॉनिक (isotones) किसे कहते हैं?",
      optionsEn: ["Nuclei having the same number of neutrons (N)", "Nuclei having same protons", "Nuclei having same mass number", "Nuclei having same electrons"],
      optionsHi: ["समान न्यूट्रॉन संख्या (N) वाले नाभिक", "समान प्रोटॉनों वाले नाभिक", "समान द्रव्यमान संख्या वाले नाभिक", "समान इलेक्ट्रॉनों वाले नाभिक"],
      answer: 0,
      exp: "Explanation (En): Isotones are nuclides that have the same number of neutrons (N = A - Z).\nस्पष्टीकरण (Hi): समन्यूट्रॉनिक वे नाभिक होते हैं जिनमें न्यूट्रॉनों की संख्या (N) समान होती है।"
    },
    {
      qEn: "What is mass defect (\\Delta m) in a nucleus?",
      qHi: "नाभिक में द्रव्यमान क्षति (mass defect, \\Delta m) क्या है?",
      optionsEn: ["The difference between the total rest mass of individual nucleons and the actual resting mass of the nucleus", "Mass lost during chemical reactions", "Electron mass loss", "Mass of emitted photons"],
      optionsHi: ["व्यक्तिगत न्यूक्लियनों के कुल द्रव्यमान और नाभिक के वास्तविक द्रव्यमान के बीच का अंतर", "रासायनिक प्रतिक्रियाओं में खोया द्रव्यमान", "इलेक्ट्रॉन द्रव्यमान की हानि", "उत्सर्जित फोटॉनों का द्रव्यमान"],
      answer: 0,
      exp: "Explanation (En): Mass defect \\Delta m = [Zm_p + (A-Z)m_n] - M_{nucleus}, which converts into nuclear binding energy.\nस्पष्टीकरण (Hi): अलग-अलग प्रोटॉनों और न्यूट्रॉनों के द्रव्यमान के योग और नाभिक के वास्तविक द्रव्यमान के अंतर को द्रव्यमान क्षति कहते हैं।"
    },
    {
      qEn: "According to Einstein's mass-energy equivalence, what is the nuclear binding energy (BE) corresponding to mass defect \\Delta m?",
      qHi: "आइंस्टीन के द्रव्यमान-ऊर्जा तुल्यता के अनुसार, द्रव्यमान क्षति \\Delta m के संगत बंधन ऊर्जा (BE) कितनी होती है?",
      optionsEn: ["BE = \\Delta m \\cdot c^2", "BE = \\frac{\\Delta m}{c^2}", "BE = \\Delta m \\cdot c", "BE = \\frac{1}{2} \\Delta m c^2"],
      optionsHi: ["BE = \\Delta m \\cdot c^2", "BE = \\frac{\\Delta m}{c^2}", "BE = \\Delta m \\cdot c", "BE = \\frac{1}{2} \\Delta m c^2"],
      answer: 0,
      exp: "Explanation (En): Einstein's equation E = mc^2 gives binding energy BE = \\Delta m \\cdot c^2.\nस्पष्टीकरण (Hi): आइंस्टीन के सूत्र E = mc^2 के अनुसार बंधन ऊर्जा BE = \\Delta m \\cdot c^2 होती है।"
    },
    {
      qEn: "What is nuclear fission?",
      qHi: "नाभिकीय विखंडन (nuclear fission) क्या है?",
      optionsEn: ["The splitting of a heavy nucleus into two or more lighter nuclei with release of massive energy", "Merging of two light nuclei", "Radioactive alpha decay", "Emission of electrons"],
      optionsHi: ["एक भारी नाभिक का दो या दो से अधिक हल्के नाभिकों में टूटना जिससे भारी मात्रा में ऊर्जा निकलती है", "दो हल्के नाभिकों का आपस में मिलना", "रेडियोधर्मी अल्फा क्षय", "इलेक्ट्रॉनों का उत्सर्जन"],
      answer: 0,
      exp: "Explanation (En): Nuclear fission (e.g., Uranium-235 bombarded with neutrons) splits heavy nuclei, releasing enormous energy (basis of atomic bombs and nuclear reactors).\nस्पष्टीकरण (Hi): नाभिकीय विखंडन में भारी नाभिक टूटकर ऊर्जा मुक्त करता है, जो परमाणु बम और न्यूक्लियर रिएक्टर का सिद्धांत है।"
    },
    {
      qEn: "What is nuclear fusion?",
      qHi: "नाभिकीय संलयन (nuclear fusion) क्या है?",
      optionsEn: ["The combining of two light nuclei to form a heavier nucleus with release of energy", "Splitting of uranium nucleus", "Radioactive beta decay", "Fission of carbon atoms"],
      optionsHi: ["ऊर्जा के साथ दो हल्के नाभिकों का मिलकर एक भारी नाभिक बनाना", "यूरेनियम नाभिक का टूटना", "रेडियोधर्मी बीटा क्षय", "कार्बन परमाणुओं का विखंडन"],
      answer: 0,
      exp: "Explanation (En): Nuclear fusion combines light nuclei (like hydrogen isotopes into helium) under extreme temperature/pressure (source of energy in the Sun and stars).\nस्पष्टीकरण (Hi): नाभिकीय संलयन में हल्के नाभिक मिलकर भारी नाभिक बनाते हैं (सूर्य और तारों की ऊर्जा का स्रोत)।"
    },
    {
      qEn: "What is the primary source of energy in the Sun and stars?",
      qHi: "सूर्य और तारों में ऊर्जा का प्राथमिक स्रोत क्या है?",
      optionsEn: ["Nuclear fusion (proton-proton chain)", "Nuclear fission of uranium", "Chemical burning of hydrogen", "Gravitational contraction"],
      optionsHi: ["नाभिकीय संलयन (प्रोटॉन-प्रोटॉन श्रृंखला)", "यूरेनियम का नाभिकीय विखंडन", "हाइड्रोजन का रासायनिक दहन", "गुरुत्वाकर्षण संकुचन"],
      answer: 0,
      exp: "Explanation (En): The Sun generates energy through nuclear fusion of hydrogen nuclei into helium in its core.\nस्पष्टीकरण (Hi): सूर्य के केंद्र में हाइड्रोजन नाभिकों के संलयन (Nuclear Fusion) से अपार ऊर्जा उत्पन्न होती है।"
    },
    {
      qEn: "What is the moderator used in a nuclear reactor to slow down fast neutrons?",
      qHi: "तेज गति वाले न्यूट्रॉनों को धीमा करने के लिए नाभिकीय रिएक्टर में किस मंदक (moderator) का उपयोग किया जाता है?",
      optionsEn: ["Heavy water (D_2O) or Graphite", "Cadmium rods", "Boron rods", "Liquid sodium"],
      optionsHi: ["भारी पानी (D_2O) या ग्रेफाइट", "कैडमियम छड़ें", "बोरोन छड़ें", "तरल सोडियम"],
      answer: 0,
      exp: "Explanation (En): Heavy water (D_2O) and graphite act as moderators by slowing fast neutrons so they can sustain the fission chain reaction.\nस्पष्टीकरण (Hi): न्यूट्रॉनों की गति धीमी करने के लिए भारी पानी (D_2O) या ग्रेफाइट को मंदक के रूप में प्रयोग किया जाता है।"
    },
    {
      qEn: "What is the function of control rods (such as Cadmium or Boron) in a nuclear reactor?",
      qHi: "नाभिकीय रिएक्टर में नियंत्रण छड़ों (Control rods जैसे कैडमियम या बोरोन) का क्या कार्य है?",
      optionsEn: ["To absorb excess neutrons and regulate the fission chain reaction rate", "To speed up neutrons", "To cool the reactor core", "To generate electricity directly"],
      optionsHi: ["अतिरिक्त न्यूट्रॉनों को अवशोषित करना और विखंडन श्रृंखला प्रतिक्रिया की दर को नियंत्रित करना", "न्यूट्रॉनों की गति तेज करना", "रिएक्टर क्रोड को ठंडा करना", "सीधे बिजली पैदा करना"],
      answer: 0,
      exp: "Explanation (En): Cadmium or boron control rods absorb neutrons to prevent the reactor from overheating or exploding.\nस्पष्टीकरण (Hi): कैडमियम या बोरोन की छड़ें अतिरिक्त न्यूट्रॉनों को सोखकर श्रृंखला अभिक्रिया को नियंत्रित रखती हैं।"
    },
    {
      qEn: "What are alpha rays composed of?",
      qHi: "अल्फा किरणें (Alpha rays) किससे बनी होती हैं?",
      optionsEn: ["Helium nuclei (^4_2\\text{He}^{2+})", "Fast-moving electrons", "Electromagnetic waves", "Neutrons"],
      optionsHi: ["हीमियम नाभिक (^4_2\\text{He}^{2+})", "तेज गति वाले इलेक्ट्रॉन", "विद्युत चुंबकीय तरंगें", "न्यूट्रॉन"],
      answer: 0,
      exp: "Explanation (En): Alpha particles are doubly ionized helium nuclei (^4_2\\text{He}^{2+}) consisting of 2 protons and 2 neutrons.\nस्पष्टीकरण (Hi): अल्फा कण द्वि-आयनित हीलियम नाभिक (^4_2\\text{He}^{2+}) होते हैं जिनमें 2 प्रोटॉन और 2 न्यूट्रॉन होते हैं।"
    },
    {
      qEn: "What are beta rays composed of?",
      qHi: "बीटा किरणें (Beta rays) क्या होती हैं?",
      optionsEn: ["High-speed electrons or positrons emitted from atomic nuclei", "Helium nuclei", "Photons", "Protons"],
      optionsHi: ["परमाणु नाभिक से उत्सर्जित तेज गति वाले इलेक्ट्रॉन या पॉजिट्रॉन", "हीलियम नाभिक", "फोटॉन", "प्रोटॉन"],
      answer: 0,
      exp: "Explanation (En): Beta particles are high-speed electrons (\\beta^-) or positrons (\\beta^+) emitted during radioactive beta decay.\nस्पष्टीकरण (Hi): बीटा कण नाभिकीय क्षय के दौरान उत्सर्जित तीव्र गति वाले इलेक्ट्रॉन (या पॉजिट्रॉन) होते हैं।"
    },
    {
      qEn: "What are gamma rays?",
      qHi: "गामा किरणें (Gamma rays) क्या होती हैं?",
      optionsEn: ["High-energy electromagnetic radiation (photons) of very short wavelength", "Charged helium particles", "Fast electrons", "Sound waves"],
      optionsHi: ["अत्यंत कम तरंगदैर्ध्य वाले उच्च ऊर्जा के विद्युत चुंबकीय विकिरण (फोटॉन)", "आवेशित हीलियम कण", "तेज इलेक्ट्रॉन", "ध्वनि तरंगें"],
      answer: 0,
      exp: "Explanation (En): Gamma rays are high-frequency electromagnetic waves released during radioactive decay, carrying no charge or mass.\nस्पष्टीकरण (Hi): गामा किरणें उच्च आवृत्ति की विद्युत चुंबकीय तरंगें (फोटॉन) होती हैं जिन पर कोई आवेश नहीं होता।"
    },
    {
      qEn: "What is the penetrating power order of \\alpha, \\beta, and \\gamma rays?",
      qHi: "\\alpha, \\beta और \\gamma किरणों की भेदन क्षमता (penetrating power) का सही बढ़ता क्रम क्या है?",
      optionsEn: ["\\alpha < \\beta < \\gamma", "\\gamma < \\beta < \\alpha", "\\beta < \\alpha < \\gamma", "\\gamma < \\alpha < \\beta"],
      optionsHi: ["\\alpha < \\beta < \\gamma (अल्फा सबसे कम, गामा सबसे अधिक)", "\\gamma < \\beta < \\alpha", "\\beta < \\alpha < \\gamma", "\\gamma < \\alpha < \\beta"],
      answer: 0,
      exp: "Explanation (En): Alpha rays have lowest penetration (stopped by paper), beta rays pass through paper but stopped by aluminum, while gamma rays have highest penetration (require thick lead).\nस्पष्टीकरण (Hi): अल्फा कणों की भेदन क्षमता सबसे कम और गामा किरणों की सबसे अधिक होती है।"
    },
    {
      qEn: "What is radioactive half-life (T_{1/2}) defined as?",
      qHi: "रेडियोधर्मी अर्धआयु (half-life, T_{1/2}) किसे कहते हैं?",
      optionsEn: ["The time required for half of the radioactive atoms in a sample to decay", "The time required for complete decay", "Double the average lifetime", "Time taken to emit one alpha particle"],
      optionsHi: ["किसी नमूने में रेडियोधर्मी परमाणुओं के आधे हिस्से को क्षय होने में लगने वाला समय", "पूर्ण क्षय के लिए आवश्यक समय", "औसत आयु का दोगुना", "एक अल्फा कण उत्सर्जित करने का समय"],
      answer: 0,
      exp: "Explanation (En): Half-life is the time taken for half-life disintegration of radioactive nuclei, given by T_{1/2} = \\frac{\\ln 2}{\\lambda}.\nस्पष्टीकरण (Hi): अर्धआयु वह समय है जिसमें किसी रेडियोएक्टिव पदार्थ के परमाणुओं की संख्या घटकर अपनी मूल मात्रा की आधी रह जाती है।"
    },
    {
      qEn: "Who discovered radioactivity in 1896?",
      qHi: "1896 में रेडियोधर्मिता (radioactivity) की खोज किसने की थी?",
      optionsEn: ["Henri Becquerel", "Marie Curie", "Ernest Rutherford", "Wilhelm Roentgen"],
      optionsHi: ["हेनरी बेकुरल (Henri Becquerel)", "मैरी क्यूरी", "अर्नेस्ट रदरफोर्ड", "विल्हेम रॉन्टგენ"],
      answer: 0,
      exp: "Explanation (En): Henri Becquerel discovered radioactivity in uranium salts in 1896.\nस्पष्टीकरण (Hi): हेनरी बेकुरल ने 1896 में यूरेनियम लवणों में प्राकृतिक रेडियोधर्मिता की खोज की थी।"
    },
    {
      qEn: "Who discovered X-rays?",
      qHi: "एक्स-रे (X-rays) की खोज किसने की थी?",
      optionsEn: ["Wilhelm Roentgen", "Marie Curie", "J.J. Thomson", "James Chadwick"],
      optionsHi: ["विल्हेम रॉन्ट्जन (Wilhelm Roentgen)", "मैरी क्यूरी", "जे.जे. थॉमसॉन", "जेम्स चैंडविक"],
      answer: 0,
      exp: "Explanation (En): Wilhelm Roentgen discovered X-rays in 1895, earning the first Nobel Prize in Physics.\nस्पष्टीकरण (Hi): विल्हेम रॉन्ट्जन (Wilhelm Roentgen) ने 1895 में एक्स-रे की खोज की थी।"
    },
    {
      qEn: "Who discovered the neutron?",
      qHi: "न्यूट्रॉन की खोज किसने की थी?",
      optionsEn: ["James Chadwick", "J.J. Thomson", "Ernest Rutherford", "Niels Bohr"],
      optionsHi: ["जेम्स चैंडविक (James Chadwick)", "जे.जे. थॉमसॉन", "अर्नेस्ट रदरफोर्ड", "नील्स बोहर"],
      answer: 0,
      exp: "Explanation (En): James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles.\nस्पष्टीकरण (Hi): जेम्स चैंडविक (James Chadwick) ने 1932 में न्यूट्रॉन की खोज की थी।"
    },
    {
      qEn: "What is a p-n junction diode primarily used for?",
      qHi: "p-n जंक्शन डायोड का मुख्य रूप से किस कार्य के लिए उपयोग किया जाता है?",
      optionsEn: ["Rectification (converting AC to DC)", "Amplification of voltage", "Signal generation", "Energy storage"],
      optionsHi: ["दिष्टकरण (AC को DC में बदलना)", "वोल्टेज का प्रवर्धन", "सिग्नल जनरेशन", "ऊर्जा भंडारण"],
      answer: 0,
      exp: "Explanation (En): A diode allows current to flow easily in one direction (forward bias) and blocks it in the other, making it ideal for rectification.\nस्पष्टीकरण (Hi): डायोड एक दिशा में धारा बहने देता है और दूसरी में रोकता है, इसलिए इसका उपयोग AC को DC में बदलने (Rectification) के लिए होता है।"
    },
    {
      qEn: "What is a transistor primarily used for in electronic circuits?",
      qHi: "इलेक्ट्रॉनिक सर्किट में ट्रांजिस्टर का मुख्य रूप से किस कार्य के लिए उपयोग किया जाता है?",
      optionsEn: ["Amplification and switching", "Energy generation only", "Only rectification", "Voltage stabilization without power"],
      optionsHi: ["प्रवर्धन (Amplification) और स्विचिंग", "केवल ऊर्जा उत्पादन", "केवल दिष्टकरण", "बिना पावर के वोल्टेज स्थिरीकरण"],
      answer: 0,
      exp: "Explanation (En): Transistors are semiconductor devices used to amplify electrical signals or act as fast electronic switches.\nस्पष्टीकरण (Hi): ट्रांजिस्टर का उपयोग मुख्य रूप से कमजोर इलेक्ट्रॉनिक सिग्नलों को बढ़ाने (Amplification) और स्विच के रूप में होता है।"
    },
    {
      qEn: "What is the particle nature of light demonstrated by?",
      qHi: "प्रकाश की कण प्रकृति (particle nature) को कौन सी घटना सबसे अच्छे से दर्शाती है?",
      optionsEn: ["Photoelectric Effect", "Interference of light", "Diffraction of light", "Polarization of light"],
      optionsHi: ["प्रकाश विद्युत प्रभाव (Photoelectric Effect)", "प्रकाश का व्यतिकरण", "प्रकाश का विवर्तन", "प्रकाश का ध्रुवण"],
      answer: 0,
      exp: "Explanation (En): The photoelectric effect cannot be explained by wave theory and proves the particle (photon) nature of light.\nस्पष्टीकरण (Hi): प्रकाश विद्युत प्रभाव (Photoelectric Effect) तरंग सिद्धांत से समझ नहीं आता और यह प्रकाश के फोटॉन (कण) स्वरूप को सिद्ध करता है।"
    },
    {
      qEn: "What is the rest mass of an electron?",
      qHi: "एक इलेक्ट्रॉन का विराम द्रव्यमान (rest mass) कितना होता है?",
      optionsEn: ["9.1 \times 10^{-31} \\text{ kg}", "1.67 \times 10^{-27} \\text{ kg}", "1.6 \times 10^{-19} \\text{ kg}", "Zero"],
      optionsHi: ["9.1 \times 10^{-31} \\text{ kg}", "1.67 \times 10^{-27} \\text{ kg}", "1.6 \times 10^{-19} \\text{ kg}", "शून्य"],
      answer: 0,
      exp: "Explanation (En): The rest mass of an electron is m_e \\approx 9.1 \times 10^{-31} \\text{ kg} (approx 1836 times smaller than a proton).\nस्पष्टीकरण (Hi): एक इलेक्ट्रॉन का विराम द्रव्यमान 9.1 \times 10^{-31} \\text{ kg} होता है।"
    }
  ],
  "Matter and its States": [
    {
      qEn: "What is defined as anything that has mass and occupies space?",
      qHi: "ऐसी कोई भी वस्तु जिसका द्रव्यमान हो और जो स्थान घेरती हो, क्या कहलाती है?",
      optionsEn: ["Matter", "Energy", "Vacuum", "Radiation"],
      optionsHi: ["पदार्थ (Matter)", "ऊर्जा", "निर्वात", "विकिरण"],
      answer: 0,
      exp: "Explanation (En): Matter is defined as anything that possesses mass and occupies volume (space).\nस्पष्टीकरण (Hi): हर वह वस्तु जिसमें द्रव्यमान होता है और जो स्थान घेरती है, पदार्थ (Matter) कहलाती है।"
    },
    {
      qEn: "Which of the following is not considered a state of matter?",
      qHi: "निम्नलिखित में से किसे पदार्थ की अवस्था नहीं माना जाता है?",
      optionsEn: ["Light", "Solid", "Liquid", "Gas"],
      optionsHi: ["प्रकाश (Light)", "ठोस", "द्रव", "गैस"],
      answer: 0,
      exp: "Explanation (En): Light is a form of electromagnetic radiation (energy), not matter because it has no rest mass and does not occupy volume in the traditional sense.\nस्पष्टीकरण (Hi): प्रकाश एक प्रकार की ऊर्जा (विकिरण) है, इसे पदार्थ की अवस्था नहीं माना जाता है।"
    },
    {
      qEn: "What is the process of direct conversion of a solid into gas without passing through the liquid state called?",
      qHi: "किसी ठोस का बिना द्रव अवस्था में बदले सीधे गैस में परिवर्तित होने की प्रक्रिया क्या कहलाती है?",
      optionsEn: ["Sublimation", "Condensation", "Evaporation", "Melting"],
      optionsHi: ["उर्ध्वपातन (Sublimation)", "संघनन", "वाष्पीकरण", "गलन"],
      answer: 0,
      exp: "Explanation (En): Sublimation is the phase transition directly from solid to gas (e.g., dry ice, camphor, iodine).\nस्पष्टीकरण (Hi): उर्ध्वपातन (Sublimation) वह प्रक्रिया है जिसमें ठोस पदार्थ सीधे गैस में बदल जाता है (जैसे कपूर, नौसादर)।"
    },
    {
      qEn: "What is the process of conversion of a gas directly into a solid called?",
      qHi: "गैस का सीधे ठोस में परिवर्तित होने की प्रक्रिया क्या कहलाती है?",
      optionsEn: ["Deposition (or Sublimation)", "Condensation", "Freezing", "Vaporization"],
      optionsHi: ["निक्षेप (Deposition या उर्ध्वपातन)", "संघनन", "हिमीकरण", "वाष्पन"],
      answer: 0,
      exp: "Explanation (En): Deposition (sometimes referred to reverse sublimation) is a thermodynamic process where gas transforms directly into solid.\nस्पष्टीकरण (Hi): गैस से सीधे ठोस बनने की प्रक्रिया को निक्षेप (Deposition) या रिवर्स सब्लीमेशन कहते हैं।"
    },
    {
      qEn: "What are the two most abundant states of matter in the universe?",
      qHi: "ब्रह्मांड में पदार्थ की दो सबसे प्रचुर अवस्थाएं कौन सी हैं?",
      optionsEn: ["Plasma and Gas", "Solid and Liquid", "Bose-Einstein Condensate and Solid", "Liquid and Gas"],
      optionsHi: ["प्लाज्मा और गैस (Plasma and Gas)", "ठोस और द्रव", "बोस-आइंस्टीन कंडेनसेट और ठोस", "द्रव और गैस"],
      answer: 0,
      exp: "Explanation (En): Plasma (found in stars and sun) and gas make up more than 99% of the visible universe.\nस्पष्टीकरण (Hi): तारों और सूर्य में मौजूद प्लाज्मा तथा गैसें ब्रह्मांड का 99% से अधिक हिस्सा बनाती हैं।"
    },
    {
      qEn: "What is the fourth state of matter consisting of superheated ionized gas?",
      qHi: "अत्यधिक गर्म आयनित गैस से बनी पदार्थ की चौथी अवस्था कौन सी है?",
      optionsEn: ["Plasma", "Bose-Einstein Condensate", "Superfluid", "Colloid"],
      optionsHi: ["प्लाज्मा (Plasma)", "बोस-आइंस्टीन कंडेनसेट", "सुपरफ्लुइड", "कोलाइड"],
      answer: 0,
      exp: "Explanation (En): Plasma is an ionized gas consisting of free electrons and positive ions, existing at extremely high temperatures.\nस्पष्टीकरण (Hi): प्लाज्मा पदार्थ की चौथी अवस्था है जो अत्यधिक उच्च तापमान पर आयनित गैस के रूप में पाई जाती है।"
    },
    {
      qEn: "What is the fifth state of matter achieved at temperatures extremely close to absolute zero?",
      qHi: "परम शून्य तापमान के बेहद करीब प्राप्त की जाने वाली पदार्थ की पांचवीं अवस्था कौन सी है?",
      optionsEn: ["Bose-Einstein Condensate (BEC)", "Plasma", "Solid state", "Neutron degeneracy state"],
      optionsHi: ["बोस-आइंस्टीन कंडेनसेट (BEC)", "प्लाज्मा", "ठोस अवस्था", "न्यूट्रॉन अवस्था"],
      answer: 0,
      exp: "Explanation (En): Bose-Einstein Condensate (BEC) is formed by cooling a gas of extremely low density to temperatures near absolute zero (0 K).\nस्पष्टीकरण (Hi): अत्यंत कम घनत्व वाली गैस को परम शून्य (0 K) के करीब ठंडा करके बोस-आइंस्टीन कंडेनसेट (BEC) प्राप्त किया जाता है।"
    },
    {
      qEn: "Which Indian physicist collaborated with Albert Einstein to predict the Bose-Einstein Condensate state?",
      qHi: "किस भारतीय भौतिक विज्ञानी ने बोस-आइंस्टीन कंडेनसेट अवस्था की भविष्यवाणी करने के लिए अल्बर्ट आइंस्टीन के साथ सहयोग किया था?",
      optionsEn: ["Satyendra Nath Bose", "C.V. Raman", "Homi J. Bhabha", "Meghnad Saha"],
      optionsHi: ["सत्येंद्र नाथ बोस (Satyendra Nath Bose)", "सी.वी. रमन", "होमी जे. भाभा", "मेघनाथ साहा"],
      answer: 0,
      exp: "Explanation (En): Satyendra Nath Bose formulated quantum statistics on particles (bosons), which Einstein extended to develop the BEC theory.\nस्पष्टीकरण (Hi): सत्येंद्र नाथ बोस ने क्वांटम सांख्यिकी विकसित की थी जिसके आधार पर आइंस्टीन ने इस पांचवीं अवस्था की भविष्यवाणी की थी।"
    },
    {
      qEn: "What happens to the temperature of a substance during a change of state (phase transition)?",
      qHi: "अवस्था परिवर्तन (phase transition) के दौरान किसी पदार्थ के तापमान पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Remains constant", "Increases", "Decreases", "Fluctuates randomly"],
      optionsHi: ["नियत रहता है (Remains constant)", "बढ़ जाता है", "घट जाता है", "यादृच्छिक रूप से बदलता है"],
      answer: 0,
      exp: "Explanation (En): During a phase change, all supplied heat is used as latent heat to break intermolecular bonds, so temperature remains constant.\nस्पष्टीकरण (Hi): अवस्था बदलते समय दी जाने वाली सारी ऊष्मा गुप्त ऊष्मा के रूप में बंध तोड़ने में खर्च होती है, इसलिए तापमान स्थिर रहता है।"
    },
    {
      qEn: "What is the process of conversion of liquid into gas at any temperature below its boiling point called?",
      qHi: "क्वाथनांक से कम तापमान पर किसी द्रव का गैस में बदलने की प्रक्रिया क्या कहलाती है?",
      optionsEn: ["Evaporation", "Boiling", "Condensation", "Sublimation"],
      optionsHi: ["वाष्पीकरण (Evaporation)", "क्वथन", "संघनन", "उर्ध्वपातन"],
      answer: 0,
      exp: "Explanation (En): Evaporation is a surface phenomenon occurring at any temperature, whereas boiling occurs at a fixed temperature throughout the liquid.\nस्पष्टीकरण (Hi): वाष्पीकरण एक सतही प्रक्रिया है जो क्वथनांक से कम तापमान पर भी होती रहती है।"
    },
    {
      qEn: "Why does evaporation cause cooling?",
      qHi: "वाष्पीकरण के कारण ठंडक क्यों उत्पन्न होती है?",
      optionsEn: ["Because high-energy molecules escape from the surface, leaving lower-energy cooler molecules behind", "Because it absorbs cold air", "Because pressure increases", "Because volume expands"],
      optionsHi: ["क्योंकि उच्च ऊर्जा वाले अणु सतह छोड़कर चले जाते हैं, जिससे कम ऊर्जा वाले ठंडे अणु पीछे बच जाते हैं", "क्योंकि यह ठंडी हवा सोखता है", "क्योंकि दाब बढ़ता है", "क्योंकि आयतन फैलता है"],
      answer: 0,
      exp: "Explanation (En): The molecules with highest kinetic energy evaporate first, lowering the average kinetic energy and temperature of the remaining liquid.\nस्पष्टीकरण (Hi): सबसे तेज गति वाले अणु वाष्प बनकर उड़ जाते हैं, जिससे शेष द्रव की औसत गतिज ऊर्जा कम हो जाती है और ठंडक महसूस होती है।"
    },
    {
      qEn: "Which of the following factors increases the rate of evaporation?",
      qHi: "निम्नलिखित में से कौन सा कारक वाष्पीकरण की दर को बढ़ाता है?",
      optionsEn: ["Increase in surface area, temperature, and wind speed", "Increase in humidity", "Decrease in temperature", "Decrease in wind speed"],
      optionsHi: ["सतह क्षेत्र, तापमान और हवा की गति में वृद्धि", "आर्द्रता में वृद्धि", "तापमान में कमी", "हवा की गति में कमी"],
      answer: 0,
      exp: "Explanation (En): Evaporation rate increases with greater surface area, higher temperature, higher wind speed, and lower humidity.\nस्पष्टीकरण (Hi): बड़ा सतह क्षेत्र, अधिक तापमान और तेज हवा वाष्पीकरण की दर को बढ़ाते हैं।"
    },
    {
      qEn: "What is the boiling point of water at standard atmospheric pressure in Kelvin?",
      qHi: "मानक वायुमंडलीय दाब पर पानी का क्वथनांक केल्विन पैमाने पर कितना होता है?",
      optionsEn: ["373.15 \\text{ K}", "273.15 \\text{ K}", "100 \\text{ K}", "0 \\text{ K}"],
      optionsHi: ["373.15 \\text{ K}", "273.15 \\text{ K}", "100 \\text{ K}", "0 \\text{ K}"],
      answer: 0,
      exp: "Explanation (En): Water boils at 100^\\circ\\text{C}, which equals 100 + 273.15 = 373.15 \\text{ K}.\nस्पष्टीकरण (Hi): पानी 100^\\circ\\text{C} पर उबलता है, जो केल्विन में 373.15 \\text{ K} के बराबर है।"
    },
    {
      qEn: "What is the melting point of ice on the Kelvin scale?",
      qHi: "केल्विन पैमाने पर बर्फ का गलनांक (melting point) कितना होता है?",
      optionsEn: ["273.15 \\text{ K}", "373.15 \\text{ K}", "0 \\text{ K}", "100 \\text{ K}"],
      optionsHi: ["273.15 \\text{ K}", "373.15 \\text{ K}", "0 \\text{ K}", "100 \\text{ K}"],
      answer: 0,
      exp: "Explanation (En): Ice melts at 0^\\circ\\text{C}, which corresponds to 273.15 \\text{ K}.\nस्पष्टीकरण (Hi): बर्फ 0^\\circ\\text{C} पर पिघलती है, जो कि केल्विन पैमाने पर 273.15 \\text{ K} है।"
    },
    {
      qEn: "What is the term used for the intermixing of particles of two different types of matter on their own?",
      qHi: "दो अलग-अलग प्रकार के पदार्थों के कणों का स्वतः आपस में मिलना क्या कहलाता है?",
      optionsEn: ["Diffusion", "Osmosis", "Effusion", "Radiation"],
      optionsHi: ["विसरण (Diffusion)", "परासरण", "उत्स्रवण (Effusion)", "विकिरण"],
      answer: 0,
      exp: "Explanation (En): Diffusion is the spontaneous intermixing of particles of different substances due to their random motion.\nस्पष्टीकरण (Hi): विभिन्न पदार्थों के कणों का अपनी गति के कारण स्वतः आपस में मिलना विसरण (Diffusion) कहलाता है।"
    },
    {
      qEn: "In which state of matter is diffusion the fastest?",
      qHi: "पदार्थ की किस अवस्था में विसरण (diffusion) सबसे तेज होता है?",
      optionsEn: ["Gases", "Liquids", "Solids", "Equal in all states"],
      optionsHi: ["गैसों में (Gases)", "द्रवों में", "ठोसों में", "सभी अवस्थाओं में समान"],
      answer: 0,
      exp: "Explanation (En): Gas particles have high kinetic energy and large intermolecular spaces, making diffusion fastest in gases.\nस्पष्टीकरण (Hi): गैसों के कणों की गतिज ऊर्जा बहुत अधिक और रिक्त स्थान ज्यादा होता है, इसलिए गैसों में विसरण सबसे तेज होता है।"
    },
    {
      qEn: "Why can gases be easily compressed compared to solids and liquids?",
      qHi: "ठोसों और द्रवों की तुलना में गैसों को आसानी से संपीडित (compress) क्यों किया जा सकता है?",
      optionsEn: ["Because of large intermolecular spaces and weak intermolecular forces", "Because molecules are rigidly packed", "Because molecules have zero mass", "Because of high density"],
      optionsHi: ["अत्यधिक अंतर-आणविक स्थानों और कमजोर अंतर-आणविक बलों के कारण", "क्योंकि अणु कठोरता से बंधे होते हैं", "क्योंकि अणुओं का द्रव्यमान शून्य होता है", "उच्च घनत्व के कारण"],
      answer: 0,
      exp: "Explanation (En): Large gaps between gas molecules allow them to be squeezed closer together under pressure.\nस्पष्टीकरण (Hi): गैसों के अणुओं के बीच खाली स्थान बहुत अधिक होता है, जिस कारण दबाव डालने पर वे आसानी से पास आ जाते हैं।"
    },
    {
      qEn: "What is the characteristic shape and volume of a solid?",
      qHi: "किसी ठोस का आकार और आयतन कैसा होता है?",
      optionsEn: ["Fixed shape and fixed volume", "Fixed shape but variable volume", "Variable shape and fixed volume", "Neither fixed shape nor volume"],
      optionsHi: ["निश्चित आकार और निश्चित आयतन", "निश्चित आकार लेकिन परिवर्तनशील आयतन", "परिवर्तनशील आकार और निश्चित आयतन", "न तो निश्चित आकार और न ही आयतन"],
      answer: 0,
      exp: "Explanation (En): Solids have strong intermolecular forces that lock molecules in rigid positions, giving them a definite shape and volume.\nस्पष्टीकरण (Hi): ठोसों के अंतर-आणविक बल बहुत मजबूत होते हैं, जिससे उनका आकार और आयतन दोनों निश्चित होते हैं।"
    },
    {
      qEn: "What is the characteristic shape and volume of a liquid?",
      qHi: "किसी द्रव का आकार और आयतन कैसा होता है?",
      optionsEn: ["Fixed volume but variable shape (takes the shape of container)", "Fixed shape and fixed volume", "Variable shape and variable volume", "Fixed shape only"],
      optionsHi: ["निश्चित आयतन लेकिन परिवर्तनशील आकार (बर्तन का आकार ले लेता है)", "निश्चित आकार और निश्चित आयतन", "परिवर्तनशील आकार और परिवर्तनशील आयतन", "केवल निश्चित आकार"],
      answer: 0,
      exp: "Explanation (En): Liquids have a definite volume because molecules are close, but no fixed shape as they flow to take the container's shape.\nस्पष्टीकरण (Hi): द्रवों का आयतन निश्चित होता है लेकिन आकार निश्चित नहीं होता, वे जिस बर्तन में रखे जाते हैं उसी का आकार ले लेते हैं।"
    },
    {
      qEn: "What is the characteristic shape and volume of a gas?",
      qHi: "किसी गैस का आकार और आयतन कैसा होता है?",
      optionsEn: ["Neither fixed shape nor fixed volume (occupies entire available space)", "Fixed shape and fixed volume", "Fixed shape only", "Fixed volume only"],
      optionsHi: ["न तो निश्चित आकार और न ही निश्चित आयतन (उपलब्ध पूरा स्थान घेरती है)", "निश्चित आकार और निश्चित आयतन", "केवल निश्चित आकार", "केवल निश्चित आयतन"],
      answer: 0,
      exp: "Explanation (En): Gases have neither fixed shape nor fixed volume and expand to completely fill any container they are placed in.\nस्पष्टीकरण (Hi): गैसों का न तो आकार निश्चित होता है और न ही आयतन, वे पूरे उपलब्ध बर्तन को भर लेती हैं।"
    },
    {
      qEn: "What is dry ice?",
      qHi: "शुष्क बर्फ (Dry Ice) क्या होती है?",
      optionsEn: ["Solid carbon dioxide (\\text{CO}_2)", "Solid water ice", "Solid nitrogen", "Solid ammonia"],
      optionsHi: ["ठोस कार्बन डाइऑक्साइड (Solid \\text{CO}_2)", "ठोस पानी की बर्फ", "ठोस नाइट्रोजन", "ठोस अमोनिया"],
      answer: 0,
      exp: "Explanation (En): Dry ice is the solid form of carbon dioxide, which sublimes directly into gas at room temperature and normal pressure.\nस्पष्टीकरण (Hi): शुष्क बर्फ ठोस कार्बन डाइऑक्साइड होती है, जो सामान्य दबाव पर बिना द्रव बने सीधे गैस में बदल जाती है।"
    },
    {
      qEn: "What is the SI unit of pressure?",
      qHi: "दाब (pressure) का SI मात्रक क्या है?",
      optionsEn: ["Pascal (Pa)", "Newton", "Joule", "Watt"],
      optionsHi: ["पास्कल (Pascal - Pa)", "न्यूटन", "जूल", "वाट"],
      answer: 0,
      exp: "Explanation (En): Pressure is force per unit area, and its SI unit is the Pascal (Pa), equivalent to \\text{N/m}^2.\nस्पष्टीकरण (Hi): दाब प्रति इकाई क्षेत्रफल पर लगने वाला बल है, जिसका SI मात्रक पास्कल (Pa) है।"
    },
    {
      qEn: "What is 1 atmosphere (1 \\text{ atm}) pressure equal to in Pascals?",
      qHi: "1 वायुमंडल (1 \\text{ atm}) दाब पास्कल में कितने के बराबर होता है?",
      optionsEn: ["1.013 \\times 10^5 \\text{ Pa}", "10^3 \\text{ Pa}", "10^8 \\text{ Pa}", "760 \\text{ Pa}"],
      optionsHi: ["1.013 \\times 10^5 \\text{ Pa}", "10^3 \\text{ Pa}", "10^8 \\text{ Pa}", "760 \\text{ Pa}"],
      answer: 0,
      exp: "Explanation (En): Standard atmospheric pressure 1 \\text{ atm} = 101,325 \\text{ Pa} or 1.013 \\times 10^5 \\text{ Pa} (also equal to 760 \\text{ mm of Hg}).nस्पष्टीकरण (Hi): मानक वायुमंडलीय दाब 1 \\text{ atm} = 1.013 \\times 10^5 \\text{ पास्कल} होता है।"
    },
    {
      qEn: "How does increase in pressure affect the boiling point of a liquid?",
      qHi: "दाब बढ़ाने पर किसी द्रव के क्वथनांक (boiling point) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains unaffected", "Becomes zero"],
      optionsHi: ["बढ़ जाता है (Increases)", "घट जाता है", "अप्रभावित रहता है", "शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Increasing external pressure makes it harder for liquid molecules to escape as gas, raising the boiling point.\nस्पष्टीकरण (Hi): बाहरी दाब बढ़ाने पर द्रवों को उबालने के लिए अधिक तापमान की आवश्यकता होती है, जिससे क्वथनांक बढ़ जाता है।"
    },
    {
      qEn: "How does increase in pressure affect the melting point of ice?",
      qHi: "दाब बढ़ाने पर बर्फ के गलनांक (melting point) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases (ice melts at slightly lower temperature)", "Increases", "Remains constant", "Becomes infinite"],
      optionsHi: ["घट जाता है (बर्फ कम तापमान पर पिघलती है)", "बढ़ जाता है", "नियत रहता है", "अनंत हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Water expands upon freezing, so increasing pressure lowers its melting point (Le Chatelier's principle).\nस्पष्टीकरण (Hi): बर्फ जमने पर फैलती है, इसलिए दबाव बढ़ाने पर उसका गलनांक घट जाता है।"
    },
    {
      qEn: "What is the phenomenon of a substance existing in two or more different physical forms in the same physical state called?",
      qHi: "किसी पदार्थ का एक ही भौतिक अवस्था में दो या दो से अधिक विभिन्न रूपों में पाए जाने की परिघटना क्या कहलाती है?",
      optionsEn: ["Allotropy", "Isomerism", "Polymorphism", "Isotopy"],
      optionsHi: ["अपरूपता (Allotropy)", "समावयवता", "बहुरूपता (Polymorphism)", "समस्थानिकता"],
      answer: 0,
      exp: "Explanation (En): Allotropy refers to the existence of an element in two or more different forms in the same physical state (e.g., diamond and graphite for carbon).\nस्पष्टीकरण (Hi): अपरूपता (Allotropy) वह गुण है जिसमें कोई तत्व एक ही भौतिक अवस्था में अलग-अलग रूपों में मिलता है (जैसे कार्बन के अपरूप हीरा और ग्रेफाइट)।"
    },
    {
      qEn: "What is the density of water maximum at?",
      qHi: "पानी का घनत्व अधिकतम किस तापमान पर होता है?",
      optionsEn: ["4^\\circ\\text{C}", "0^\\circ\\text{C}", "100^\\circ\\text{C}", "25^\\circ\\text{C}"],
      optionsHi: ["4^\\circ\\text{C}", "0^\\circ\\text{C}", "100^\\circ\\text{C}", "25^\\circ\\text{C}"],
      answer: 0,
      exp: "Explanation (En): Due to anomalous expansion, water has its maximum density of 1 \\text{ g/cm}^3 at 4^\\circ\\text{C}.\nस्पष्टीकरण (Hi): पानी के असामान्य प्रसार के कारण 4^\\circ\\text{C} पर इसका घनत्व अधिकतम होता है।"
    },
    {
      qEn: "What is the process of a gas turning into a liquid called?",
      qHi: "गैस के द्रव में बदलने की प्रक्रिया क्या कहलाती है?",
      optionsEn: ["Condensation (or Liquefaction)", "Evaporation", "Sublimation", "Melting"],
      optionsHi: ["संघनन (Condensation या द्रवण)", "वाष्पीकरण", "उर्ध्वपातन", "गलन"],
      answer: 0,
      exp: "Explanation (En): Condensation is the phase change from gas or vapor to liquid phase, typically upon cooling.\nस्पष्टीकरण (Hi): गैस या वाष्प के ठंडा होकर द्रव में बदलने की प्रक्रिया को संघनन (Condensation) कहते हैं।"
    },
    {
      qEn: "Why do aquatic animals survive in frozen lakes during winter?",
      qHi: "सर्दियों में जमी हुई झीलों के नीचे जलीय जीव कैसे जीवित रहते हैं?",
      optionsEn: ["Because water has maximum density at 4°C, so water at 4°C stays at the bottom while ice floats on top", "Because ice absorbs all cold", "Because fish hibernate in air", "Because water does not freeze completely"],
      optionsHi: ["क्योंकि 4°C पर पानी का घनत्व अधिकतम होता है, जिससे नीचे 4°C का पानी रहता है और ऊपर बर्फ तैरती है", "क्योंकि बर्फ सारी ठंड सोख लेती है", "क्योंकि मछलियां हवा में हाइबरनेट करती हैं", "क्योंकि पानी पूरी तरह नहीं जमता"],
      answer: 0,
      exp: "Explanation (En): Water at the bottom of deep lakes remains at 4°C due to maximum density, allowing fish and aquatic life to survive beneath the surface ice layer.\nस्पष्टीकरण (Hi): अधिकतम घनत्व के कारण झील की तली में पानी 4°C पर सुरक्षित रहता है, जिससे जलीय जीव जीवित रहते हैं।"
    },
    {
      qEn: "What kind of force holds the constituent particles of matter together?",
      qHi: "पदार्थ के घटक कणों को आपस में बांधकर रखने वाला बल कौन सा होता है?",
      optionsEn: ["Intermolecular forces (cohesive forces)", "Centrifugal force", "Gravitational pull only", "Magnetic force"],
      optionsHi: ["अंतर-आणविक बल (Intermolecular forces / संसंजक बल)", "अपकेंद्रीय बल", "केवल गुरुत्वाकर्षण खिंचाव", "चुंबकीय बल"],
      answer: 0,
      exp: "Explanation (En): Intermolecular forces are attractive forces acting between neighboring molecules, holding matter in solid, liquid, or gaseous states.\nस्पष्टीकरण (Hi): अणुओं के बीच लगने वाले अंतर-आणविक बल (Intermolecular forces) ही पदार्थ के कणों को बांधकर रखते हैं।"
    }
  ],  
    "Atomic Structure": [
    {
      qEn: "Who discovered the electron?",
      qHi: "इलेक्ट्रॉन की खोज किसने की थी?",
      optionsEn: ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "Eugen Goldstein"],
      optionsHi: ["जे.जे. थॉमसॉन (J.J. Thomson)", "अर्नेस्ट रदरफोर्ड", "जेम्स चैंडविक", "यूजेन गोल्डस्टीन"],
      answer: 0,
      exp: "Explanation (En): J.J. Thomson discovered the electron in 1897 using cathode ray tubes.\nस्पष्टीकरण (Hi): जे.जे. थॉमसॉन ने 1897 में कैथोड किरणों के प्रयोग से इलेक्ट्रॉन की खोज की थी।"
    },
    {
      qEn: "Who discovered the proton and named it?",
      qHi: "प्रोटॉन की खोज और उसका नामकरण किसने किया था?",
      optionsEn: ["Eugen Goldstein (Discovery) / Ernest Rutherford (Naming)", "J.J. Thomson", "James Chadwick", "John Dalton"],
      optionsHi: ["यूजेन गोल्डस्टीन (खोज) / अर्नेस्ट रदरफोर्ड (नामकरण)", "जे.जे. थॉमसॉन", "जेम्स चैंडविक", "जॉन डाल्टन"],
      answer: 0,
      exp: "Explanation (En): Goldstein discovered anode rays (protons), and Rutherford named the proton and proved its presence in the nucleus.\nस्पष्टीकरण (Hi): एनोड किरणों के रूप में प्रोटॉन की खोज गोल्डस्टीन ने की थी, जबकि 'प्रोटॉन' नाम रदरफोर्ड ने दिया।"
    },
    {
      qEn: "Who discovered the neutron?",
      qHi: "न्यूट्रॉन की खोज किसने की थी?",
      optionsEn: ["James Chadwick", "Niels Bohr", "J.J. Thomson", "Rutherford"],
      optionsHi: ["जेम्स चैंडविक (James Chadwick)", "नील्स बोहर", "जे.जे. थॉमसॉन", "रदरफोर्ड"],
      answer: 0,
      exp: "Explanation (En): James Chadwick discovered the neutron in 1932 by bombarding beryllium with alpha particles.\nस्पष्टीकरण (Hi): जेम्स चैंडविक ने 1932 में बेरिलियम पर अल्फा कणों की बौछार करके न्यूट्रॉन की खोज की थी।"
    },
    {
      qEn: "What is the atomic number (Z) of an element defined as?",
      qHi: "किसी तत्व के परमाणु क्रमांक (Z) को किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Number of protons in the nucleus", "Total number of nucleons", "Number of neutrons only", "Mass of the atom"],
      optionsHi: ["नाभिक में उपस्थित प्रोटॉनों की संख्या", "कुल न्यूक्लिऑन की संख्या", "केवल न्यूट्रॉनों की संख्या", "परमाणु का द्रव्यमान"],
      answer: 0,
      exp: "Explanation (En): Atomic number Z equals the number of protons in the nucleus of an atom.\nस्पष्टीकरण (Hi): परमाणु क्रमांक (Z) किसी परमाणु के नाभिक में मौजूद प्रोटॉनों की संख्या के बराबर होता है।"
    },
    {
      qEn: "What is the mass number (A) of an atom equal to?",
      qHi: "किसी परमाणु की द्रव्यमान संख्या (A) किसके बराबर होती है?",
      optionsEn: ["Sum of protons and neutrons", "Sum of electrons and protons", "Number of electrons only", "Sum of all subatomic particles"],
      optionsHi: ["प्रोटॉनों और न्यूट्रॉनों की कुल संख्या का योग", "इलेक्ट्रॉनों और प्रोटॉनों का योग", "केवल इलेक्ट्रॉनों की संख्या", "सभी उप-परमाणु कणों का योग"],
      answer: 0,
      exp: "Explanation (En): Mass number A = Z + N (sum of protons and neutrons).\nस्पष्टीकरण (Hi): द्रव्यमान संख्या A प्रोटॉनों और न्यूट्रॉनों की संख्या का योग होती है।"
    },
    {
      qEn: "Which model of the atom is also known as the 'plum pudding' or 'watermelon' model?",
      qHi: "परमाणु के किस मॉडल को 'प्लम पुडिंग' या 'तरबूज' मॉडल भी कहा जाता है?",
      optionsEn: ["Thomson's model", "Rutherford's model", "Bohr's model", "Quantum mechanical model"],
      optionsHi: ["थॉमसॉन का मॉडल (Thomson's model)", "रदरफोर्ड का मॉडल", "बोहर का मॉडल", "क्वांटम यांत्रिक मॉडल"],
      answer: 0,
      exp: "Explanation (En): Thomson proposed that electrons are embedded in a positive sphere like seeds in a watermelon.\nस्पष्टीकरण (Hi): थॉमसॉन के अनुसार परमाणु एक धनात्मक गोला है जिसमें तरबूज के बीजों की तरह इलेक्ट्रॉन धंसे होते हैं।"
    },
    {
      qEn: "What experiment led to the discovery of the atomic nucleus?",
      qHi: "किस प्रयोग के कारण परमाणु के नाभिक (nucleus) की खोज हुई?",
      optionsEn: ["Rutherford's alpha-particle scattering experiment (Gold foil experiment)", "Cathode ray experiment", "Oil drop experiment", "Photoelectric experiment"],
      optionsHi: ["रदरफोर्ड का अल्फा-कण प्रकीर्णन प्रयोग (गोल्ड फॉइल प्रयोग)", "कैथोड किरण प्रयोग", "ऑयल ड्रॉप प्रयोग", "प्रकाश विद्युत प्रयोग"],
      answer: 0,
      exp: "Explanation (En): Rutherford's 1911 gold foil experiment proved that atoms have a tiny, dense, positively charged nucleus.\nस्पष्टीकरण (Hi): 1911 के रदरफोर्ड के स्वर्ण पत्र (Gold foil) प्रयोग से पता चला कि परमाणु का केंद्र बहुत घना और धनावेशित होता है।"
    },
    {
      qEn: "What are isotopes?",
      qHi: "समस्थानिक (isotopes) किसे कहते हैं?",
      optionsEn: ["Atoms of the same element having the same atomic number but different mass numbers", "Atoms with same mass number", "Atoms with same number of neutrons", "Different elements with same electrons"],
      optionsHi: ["एक ही तत्व के परमाणु जिनका परमाणु क्रमांक समान लेकिन द्रव्यमान संख्या भिन्न होती है", "समान द्रव्यमान संख्या वाले परमाणु", "समान न्यूट्रॉन वाले परमाणु", "समान इलेक्ट्रॉनों वाले अलग तत्व"],
      answer: 0,
      exp: "Explanation (En): Isotopes have the same number of protons (Z) but different numbers of neutrons.\nस्पष्टीकरण (Hi): समस्थानिकों में प्रोटॉनों की संख्या समान होती है लेकिन न्यूट्रॉनों की संख्या अलग होने के कारण द्रव्यमान संख्या भिन्न होती है।"
    },
    {
      qEn: "What are isobars?",
      qHi: "समभारिक (isobars) किसे कहते हैं?",
      optionsEn: ["Atoms having the same mass number but different atomic numbers", "Atoms having the same atomic number", "Atoms having same neutrons", "Atoms having same electrons"],
      optionsHi: ["समान द्रव्यमान संख्या लेकिन भिन्न परमाणु क्रमांक वाले परमाणु", "समान परमाणु क्रमांक वाले परमाणु", "समान न्यूट्रॉन वाले परमाणु", "समान इलेक्ट्रॉन वाले परमाणु"],
      answer: 0,
      exp: "Explanation (En): Isobars are atoms of different elements that share the same mass number (A).\nस्पष्टीकरण (Hi): समभारिक वे परमाणु हैं जिनकी द्रव्यमान संख्या (A) समान होती है लेकिन परमाणु क्रमांक अलग होते हैं।"
    },
    {
      qEn: "What are isotones?",
      qHi: "समन्यूट्रॉनिक (isotones) किसे कहते हैं?",
      optionsEn: ["Atoms having the same number of neutrons", "Atoms having the same number of protons", "Atoms having the same mass number", "Atoms having same electrons"],
      optionsHi: ["समान न्यूट्रॉन संख्या वाले परमाणु", "समान प्रोटॉनों वाले परमाणु", "समान द्रव्यमान संख्या वाले परमाणु", "समान इलेक्ट्रॉनों वाले परमाणु"],
      answer: 0,
      exp: "Explanation (En): Isotones are nuclei or atoms that have an identical number of neutrons (N = A - Z).\nस्पष्टीकरण (Hi): समन्यूट्रॉनिक वे परमाणु होते हैं जिनमें न्यूट्रॉनों की संख्या समान होती है।"
    },
    {
      qEn: "What are isoelectronic species?",
      qHi: "समइलेक्ट्रॉनी (isoelectronic) प्रजातियाँ किन्हें कहा जाता है?",
      optionsEn: ["Species having the same total number of electrons", "Species having the same mass number", "Species having the same number of protons", "Species having same neutrons"],
      optionsHi: ["समान कुल इलेक्ट्रॉनों की संख्या वाली प्रजातियाँ", "समान द्रव्यमान संख्या वाली प्रजातियाँ", "समान प्रोटॉनों वाली प्रजातियाँ", "समान न्यूट्रॉन वाली प्रजातियाँ"],
      answer: 0,
      exp: "Explanation (En): Isoelectronic species (e.g., \\text{O}^{2-}, \\text{F}^-, \\text{Ne}, \\text{Na}^+) all contain 10 electrons.\nस्पष्टीकरण (Hi): समइलेक्ट्रॉनी वे आयन या परमाणु होते हैं जिनमें इलेक्ट्रॉनों की संख्या बिल्कुल समान होती है।"
    },
    {
      qEn: "What does the principal quantum number (n) describe?",
      qHi: "मुख्य क्वांटम संख्या (n) क्या दर्शाती है?",
      optionsEn: ["The main energy level (shell) and average distance of electron from nucleus", "The shape of the orbital", "The spin orientation", "Magnetic orientation"],
      optionsHi: ["मुख्य ऊर्जा स्तर (कोश) और नाभिक से इलेक्ट्रॉन की औसत दूरी", "कक्षक की आकृति", "स्पिन अभिविन्यास", "चुंबकीय अभिविन्यास"],
      answer: 0,
      exp: "Explanation (En): Principal quantum number n designates the principal electron shell (K, L, M, N...).\nस्पष्टीकरण (Hi): मुख्य क्वांटम संख्या (n) मुख्य ऊर्जा स्तर (कोश) और नाभिक से दूरी को बताती है।"
    },
    {
      qEn: "What does the azimuthal (angular momentum) quantum number (l) describe?",
      qHi: "दिग्लंशी क्वांटम संख्या (l) क्या दर्शाती है?",
      optionsEn: ["The shape of the orbital (subshell: s, p, d, f)", "Main energy level", "Electron spin", "Orbital orientation in magnetic field"],
      optionsHi: ["कक्षक की आकृति (उपकोश: s, p, d, f)", "मुख्य ऊर्जा स्तर", "इलेक्ट्रॉन चक्रण", "चुंबकीय क्षेत्र में कक्षक की दिशा"],
      answer: 0,
      exp: "Explanation (En): Azimuthal quantum number l defines the subshell shape (l = 0, 1, 2, 3 for s, p, d, f).\nस्पष्टीकरण (Hi): दिग्लंशी क्वांटम संख्या (l) उपकोश (s, p, d, f) और कक्षक की आकृति को निर्धारित करती है।"
    },
    {
      qEn: "What does the magnetic quantum number (m_l) specify?",
      qHi: "चुंबकीय क्वांटम संख्या (m_l) क्या निर्दिष्ट करती है?",
      optionsEn: ["The spatial orientation of an orbital in an external magnetic field", "Principal shell", "Spin direction", "Total mass"],
      optionsHi: ["बाहरी चुंबकीय क्षेत्र में कक्षक का स्थानिक अभिविन्यास", "मुख्य कोश", "चक्रण दिशा", "कुल द्रव्यमान"],
      answer: 0,
      exp: "Explanation (En): Magnetic quantum number m_l specifies the orientation of orbitals in space relative to each other.\nस्पष्टीकरण (Hi): चुंबकीय क्वांटम संख्या अंतरिक्ष में कक्षकों के अभिविन्यास (orientation) को दर्शाती है।"
    },
    {
      qEn: "What does the spin quantum number (m_s) indicate?",
      qHi: "चक्रण क्वांटम संख्या (m_s) क्या संकेत देती है?",
      optionsEn: ["The direction of intrinsic spin angular momentum of the electron (+1/2 or -1/2)", "Energy level", "Subshell shape", "Nuclear spin"],
      optionsHi: ["इलेक्ट्रॉन के आंतरिक चक्रण की दिशा (+1/2 या -1/2)", "ऊर्जा स्तर", "उपकोश की आकृति", "नाभिकीय चक्रण"],
      answer: 0,
      exp: "Explanation (En): Spin quantum number describes the two possible spin states of an electron: clock-wise (+1/2) or counter clockwise (-1/2).\nस्पष्टीकरण (Hi): चक्रण क्वांटम संख्या इलेक्ट्रॉन के अपने अक्ष पर घूमने की दिशा (+1/2 या -1/2) बताती है।"
    },
    {
      qEn: "What does Pauli's Exclusion Principle state?",
      qHi: "पावली का अपवर्जन नियम (Pauli's Exclusion Principle) क्या कहता है?",
      optionsEn: ["No two electrons in the same atom can have all four quantum numbers identical", "Electrons fill lowest energy orbitals first", "Orbitals are filled singly before pairing", "Energy is quantized"],
      optionsHi: ["एक ही परमाणु में किन्हीं दो इलेक्ट्रॉनों के चारों क्वांटम नंबर समान नहीं हो सकते", "इलेक्ट्रॉन पहले कम ऊर्जा वाले कक्षकों में भरते हैं", "युग्मन से पहले कक्षक अकेले भरे जाते हैं", "ऊर्जा क्वांटिकृत होती है"],
      answer: 0,
      exp: "Explanation (En): Pauli's principle states that no two electrons can occupy the exact same quantum state defined by all four quantum numbers.\nस्पष्टीकरण (Hi): पावली के अनुसार किसी भी परमाणु में दो इलेक्ट्रॉनों की चारों क्वांटम संख्याएं कभी भी एक जैसी नहीं हो सकतीं।"
    },
    {
      qEn: "What does Aufbau Principle govern in atomic structure?",
      qHi: "परमाणु संरचना में आउफबाऊ का सिद्धांत (Aufbau Principle) क्या नियंत्रित करता है?",
      optionsEn: ["The filling of orbitals in order of increasing energy levels", "Maximum electrons in a shell", "Magnetic properties", "Nuclear stability"],
      optionsHi: ["बढ़ते ऊर्जा स्तरों के क्रम में कक्षकों का भरना", "कोश में अधिकतम इलेक्ट्रॉन", "चुंबकीय गुण", "नाभिकीय स्थिरता"],
      answer: 0,
      exp: "Explanation (En): Aufbau (German for 'building up') principle states that electrons fill orbitals starting from lowest available energy levels.\nस्पष्टीकरण (Hi): आउफबाऊ नियम के अनुसार इलेक्ट्रॉन सबसे पहले कम ऊर्जा वाले कक्षक में प्रवेश करते हैं और फिर उच्च ऊर्जा वाले कक्षकों में जाते हैं।"
    },
    {
      qEn: "What does Hund's Rule of Maximum Multiplicity state?",
      qHi: "हुंड का अधिकतम बहुलकता का नियम (Hund's Rule) क्या कहता है?",
      optionsEn: ["Electron pairing in orbitals of same energy (degenerate orbitals) does not take place until each orbital is singly occupied", "Electrons fill lowest energy first", "All four quantum numbers must differ", "Energy levels are fixed"],
      optionsHi: ["समान ऊर्जा वाले कक्षकों में युग्मन तब तक नहीं होता जब तक प्रत्येक कक्षक में एक-एक इलेक्ट्रॉन न आ जाए", "इलेक्ट्रॉन पहले कम ऊर्जा भरते हैं", "चारों क्वांटम संख्याएं भिन्न होनी चाहिए", "ऊर्जा स्तर निश्चित होते हैं"],
      answer: 0,
      exp: "Explanation (En): Hund's rule dictates that electrons occupy degenerate orbitals singly with parallel spins before pairing up.\nस्पष्टीकरण (Hi): हुंड के नियम के अनुसार समान ऊर्जा के कक्षकों में पहले एक-एक इलेक्ट्रॉन भरता है, उसके बाद युग्मन (pairing) शुरू होता है।"
    },
    {
      qEn: "What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n?",
      qHi: "मुख्य क्वांटम संख्या n वाले किसी कोश में अधिकतम इलेक्ट्रॉनों की संख्या कितनी हो सकती है?",
      optionsEn: ["2n^2", "n^2", "2n", "n+2"],
      optionsHi: ["2n^2", "n^2", "2n", "n+2"],
      answer: 0,
      exp: "Explanation (En): The maximum capacity of any principal shell n is given by the formula 2n^2.\nस्पष्टीकरण (Hi): किसी भी मुख्य ऊर्जा स्तर में अधिकतम इलेक्ट्रॉनों की संख्या निकालने का सूत्र 2n^2 है।"
    },
    {
      qEn: "What is the maximum number of electrons in a subshell with azimuthal quantum number l?",
      qHi: "दिग्लंशी क्वांटम संख्या l वाले उपकोश में अधिकतम इलेक्ट्रॉनों की संख्या कितनी होती है?",
      optionsEn: ["2(2l + 1)", "2l + 1", "4l + 2", "l^2"],
      optionsHi: ["2(2l + 1)", "2l + 1", "4l + 2", "l^2"],
      answer: 0,
      exp: "Explanation (En): A subshell with quantum number l has 2l+1 orbitals, each holding 2 electrons, totaling 2(2l+1).\nस्पष्टीकरण (Hi): उपकोश में कक्षकों की संख्या 2l+1 होती है, और चूंकि प्रत्येक कक्षक में 2 इलेक्ट्रॉन आते हैं, अतः कुल अधिकतम इलेक्ट्रॉन 2(2l+1) होते हैं।"
    },
    {
      qEn: "What is the maximum number of electrons in an 's', 'p', 'd', and 'f' subshell respectively?",
      qHi: "'s', 'p', 'd' और 'f' उपकोशों में अधिकतम इलेक्ट्रॉनों की संख्या क्रमशः कितनी होती है?",
      optionsEn: ["2, 6, 10, 14", "2, 4, 6, 8", "1, 3, 5, 7", "8, 18, 32, 50"],
      optionsHi: ["2, 6, 10, 14", "2, 4, 6, 8", "1, 3, 5, 7", "8, 18, 32, 50"],
      answer: 0,
      exp: "Explanation (En): s holds 2, p holds 6, d holds 10, and f holds 14 maximum electrons.\nस्पष्टीकरण (Hi): s उपकोश में 2, p में 6, d में 10 और f उपकोश में अधिकतम 14 इलेक्ट्रॉन आ सकते हैं।"
    },
    {
      qEn: "What is the de Broglie wavelength formula for a particle of mass m moving with velocity v?",
      qHi: "द्रव्यमान m और वेग v से गतिमान कण के लिए डी ब्रोग्ली तरंगदैर्ध्य का सूत्र क्या है?",
      optionsEn: ["\\lambda = \\frac{h}{mv}", "\\lambda = \\frac{mv}{h}", "\\lambda = \\frac{h^2}{mv}", "\\lambda = mvh"],
      optionsHi: ["\\lambda = \\frac{h}{mv}", "\\lambda = \\frac{mv}{h}", "\\lambda = \\frac{h^2}{mv}", "\\lambda = mvh"],
      answer: 0,
      exp: "Explanation (En): De Broglie wave equation is \\lambda = \\frac{h}{p} = \\frac{h}{mv}, where h is Planck's constant.\nस्पष्टीकरण (Hi): डी ब्रोग्ली समीकरण के अनुसार तरंगदैर्ध्य \\lambda = \\frac{h}{mv} होती है।"
    },
    {
      qEn: "What is Heisenberg's Uncertainty Principle mathematical expression?",
      qHi: "हाइजेनबर्ग के अनिश्चितता सिद्धांत का गणितीय व्यंजक क्या है?",
      optionsEn: ["\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}", "\\Delta x \\cdot \\Delta p = 0", "\\Delta E \\cdot \\Delta t = \\frac{h}{2}", "p \\cdot v = h"],
      optionsHi: ["\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}", "\\Delta x \\cdot \\Delta p = 0", "\\Delta E \\cdot \\Delta t = \\frac{h}{2}", "p \\cdot v = h"],
      answer: 0,
      exp: "Explanation (En): The uncertainty product of position (\\Delta x) and momentum (\\Delta p) is at least \\frac{h}{4\\pi}.\nस्पष्टीकरण (Hi): हाइजेनबर्ग अनिश्चितता सिद्धांत के अनुसार स्थिति और संवेग में अनिश्चितता का गुणनफल \\frac{h}{4\\pi} से कम नहीं हो सकता।"
    },
    {
      qEn: "Who proposed the quantum model of the atom based on wave mechanics (Schrödinger equation)?",
      qHi: "तरंग यांत्रिकी (श्रोडिंगर समीकरण) के आधार पर परमाणु का क्वांटम मॉडल किसने प्रतिपादित किया था?",
      optionsEn: ["Erwin Schrödinger", "Niels Bohr", "Max Planck", "Albert Einstein"],
      optionsHi: ["इरविन श्रोडिंगर (Erwin Schrödinger)", "नील्स बोहर", "मैक्स प्लांक", "अल्बर्ट आइंस्टीन"],
      answer: 0,
      exp: "Explanation (En): Erwin Schrödinger developed the wave equation that describes electron behavior as quantum waves, forming the modern quantum model.\nस्पष्टीकरण (Hi): इरविन श्रोडिंगर ने तरंग समीकरण देकर आधुनिक क्वांटम यांत्रिक मॉडल की नींव रखी।"
    },
    {
      qEn: "What is an orbital defined as in quantum chemistry?",
      qHi: "क्वांटम रसायन विज्ञान में 'कक्षक' (orbital) किसे कहा जाता है?",
      optionsEn: ["The 3D region of space around the nucleus where the probability of finding an electron is maximum", "A fixed circular path of electron", "The center of an atom", "Neutron orbit"],
      optionsHi: ["नाभिक के चारों ओर वह त्रिविमीय क्षेत्र जहाँ इलेक्ट्रॉन के पाए जाने की संभावना सबसे अधिक होती है", "इलेक्ट्रॉन का निश्चित वृत्ताकार मार्ग", "परमाणु का केंद्र", "न्यूट्रॉन की कक्षा"],
      answer: 0,
      exp: "Explanation (En): An atomic orbital is a mathematical function describing the wave-like behavior of an electron, representing regions of high probability density.\nस्पष्टीकरण (Hi): कक्षक वह त्रिविमीय जगह है जहाँ इलेक्ट्रॉन मिलने की संभावना अधिकतम (90-95%) होती है।"
    },
    {
      qEn: "What is the shape of an 's' orbital?",
      qHi: "स 's' कक्षक की आकृति कैसी होती है?",
      optionsEn: ["Spherical", "Dumbbell", "Double dumbbell", "Complex"],
      optionsHi: ["गोलाकार (Spherical)", "डंबेल (Dumbbell)", "डबल डंबेल", "जटिल"],
      answer: 0,
      exp: "Explanation (En): S-orbitals are spherically symmetrical around the nucleus.\nस्पष्टीकरण (Hi): s-कक्षक चारों तरफ से गोलाकार (Spherical) होते हैं।"
    },
    {
      qEn: "What is the shape of a 'p' orbital?",
      qHi: "'p' कक्षक की आकृति कैसी होती है?",
      optionsEn: ["Dumbbell shape", "Spherical", "Double dumbbell", "Cylindrical"],
      optionsHi: ["डंबेल आकार (Dumbbell)", "गोलाकार", "डबल डंबेल", "बेलनाकार"],
      answer: 0,
      exp: "Explanation (En): P-orbitals have a dumbbell shape oriented along the x, y, or z axes.\nस्पष्टीकरण (Hi): p-कक्षकों की आकृति डंबेल (Dumbbell) जैसी होती है।"
    },
    {
      qEn: "What is the maximum number of electrons that can be present in a single orbital according to Pauli's principle?",
      qHi: "पावली के नियम के अनुसार किसी एक कक्षक में अधिकतम कितने इलेक्ट्रॉन आ सकते हैं?",
      optionsEn: ["2 (with opposite spins)", "1", "6", "10"],
      optionsHi: ["2 (विपरीत चक्रण के साथ)", "1", "6", "10"],
      answer: 0,
      exp: "Explanation (En): Each individual orbital can accommodate a maximum of two electrons, and they must have opposite spins.\nस्पष्टीकरण (Hi): प्रत्येक कक्षक में अधिकतम 2 इलेक्ट्रॉन रह सकते हैं और दोनों के चक्रण (spin) विपरीत होने चाहिए।"
    },
    {
      qEn: "What is the electronic configuration of Chromium (Cr, Atomic Number 24)?",
      qHi: "क्रोमियम (Cr, परमाणु क्रमांक 24) का सही इलेक्ट्रॉनिक विन्यास क्या है?",
      optionsEn: ["1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^4 4s^2", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^6", "1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 4p^4"],
      optionsHi: ["1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^4 4s^2", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^6", "1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 4p^4"],
      answer: 0,
      exp: "Explanation (En): Due to extra stability of half-filled d^5 subshell, chromium has configuration [Ar] 3d^5 4s^1 instead of 3d^4 4s^2.\nस्पष्टीकरण (Hi): आधे भरे हुए d^5 उपकोश के स्थायित्व के कारण क्रोमियम का विन्यास 3d^5 4s^1 होता है।"
    },
    {
      qEn: "What is the electronic configuration of Copper (Cu, Atomic Number 29)?",
      qHi: "कॉपर (Cu, परमाणु क्रमांक 29) का सही इलेक्ट्रॉनिक विन्यास क्या है?",
      optionsEn: ["1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^1", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^9 4s^2", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^{11}", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^8 4s^3"],
      optionsHi: ["1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^1", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^9 4s^2", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^{11}", "1s^2 2s^2 2p^6 3s^2 3p^6 3d^8 4s^3"],
      answer: 0,
      exp: "Explanation (En): Due to extra stability of fully-filled d^{10} subshell, copper exhibits configuration [Ar] 3d^{10} 4s^1.\nस्पष्टीकरण (Hi): पूरी तरह भरे हुए d^{10} उपकोश के स्थायित्व के कारण कॉपर का इलेक्ट्रॉनिक विन्यास 3d^{10} 4s^1 होता है।"
    }
  ],
    "Periodic Table": [
    {
      qEn: "Who published the first periodic table based on atomic masses?",
      qHi: "परमाणु द्रव्यमान के आधार पर पहली आवर्त सारणी किसने प्रकाशित की थी?",
      optionsEn: ["Dmitri Mendeleev", "Henry Moseley", "John Newlands", "Antoine Lavoisier"],
      optionsHi: ["दिमित्री मेंडेलीफ (Dmitri Mendeleev)", "हेनरी मोजले", "जॉन न्यूलैंड्स", "एंटोनी लव्वाजियर"],
      answer: 0,
      exp: "Explanation (En): Dmitri Mendeleev arranged elements in order of increasing atomic mass and created the first widely recognized periodic table.\nस्पष्टीकरण (Hi): दिमित्री मेंडेलीफ ने बढ़ते हुए परमाणु द्रव्यमान के आधार पर तत्वों को व्यवस्थित करके पहली प्रसिद्ध आवर्त सारणी बनाई थी।"
    },
    {
      qEn: "On what fundamental property is the Modern Periodic Table based?",
      qHi: "आधुनिक आवर्त सारणी किस मूल गुणधर्म पर आधारित है?",
      optionsEn: ["Atomic number (Z)", "Atomic mass (A)", "Density", "Valency"],
      optionsHi: ["परमाणु क्रमांक (Z)", "परमाणु द्रव्यमान (A)", "घनत्व", "संयोजकता"],
      answer: 0,
      exp: "Explanation (En): Henry Moseley showed that atomic number is a more fundamental property than atomic mass, leading to the Modern Periodic Law.\nस्पष्टीकरण (Hi): हेनरी मोजले ने साबित किया कि परमाणु क्रमांक परमाणु द्रव्यमान से अधिक मौलिक गुण है, जिस पर आधुनिक आवर्त सारणी आधारित है।"
    },
    {
      qEn: "How many periods and groups are present in the Modern Periodic Table?",
      qHi: "आधुनिक आवर्त सारणी में कितने आवर्त (periods) और समूह (groups) होते हैं?",
      optionsEn: ["7 periods and 18 groups", "8 periods and 16 groups", "7 periods and 7 groups", "10 periods and 18 groups"],
      optionsHi: ["7 आवर्त और 18 समूह", "8 आवर्त और 16 समूह", "7 आवर्त और 7 समूह", "10 आवर्त और 18 समूह"],
      answer: 0,
      exp: "Explanation (En): The modern periodic table consists of 7 horizontal rows called periods and 18 vertical columns called groups.\nस्पष्टीकरण (Hi): आधुनिक आवर्त सारणी में 7 क्षैतिज पंक्तियाँ (आवर्त) और 18 ऊर्ध्वाधर कॉलम (समूह) होते हैं।"
    },
    {
      qEn: "What are the elements in Group 1 of the periodic table commonly known as?",
      qHi: "आवर्त सारणी के समूह 1 के तत्वों को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"],
      optionsHi: ["क्षारीय धातुएं (Alkali metals)", "क्षاریय मृदा धातुएं", "हैोजन", "उत्कृष्ट गैसें"],
      answer: 0,
      exp: "Explanation (En): Group 1 elements (excluding hydrogen) are reactive metals known as alkali metals because they form strong alkalis with water.\nस्पष्टीकरण (Hi): समूह 1 के तत्वों (हाइड्रोजन को छोड़कर) को क्षार धातुएं कहा जाता है क्योंकि ये पानी के साथ मिलकर मजबूत क्षार बनाते हैं।"
    },
    {
      qEn: "What are the elements in Group 2 of the periodic table known as?",
      qHi: "आवर्त सारणी के समूह 2 के तत्वों को क्या कहा जाता है?",
      optionsEn: ["Alkaline earth metals", "Alkali metals", "Transition elements", "Halogens"],
      optionsHi: ["क्षारीय मृदा धातुएं (Alkaline earth metals)", "क्षार धातुएं", "संक्रमण तत्व", "हैोजन"],
      answer: 0,
      exp: "Explanation (En): Group 2 elements are called alkaline earth metals because their oxides are alkaline and found in the earth's crust.\nस्पष्टीकरण (Hi): समूह 2 के तत्वों को क्षारीय मृदा धातुएं कहा जाता है क्योंकि इनके ऑक्साइड क्षारीय प्रकृति के होते हैं और मिट्टी में पाए जाते हैं।"
    },
    {
      qEn: "What are the elements in Group 17 of the periodic table called?",
      qHi: "आवर्त सारणी के समूह 17 के तत्वों को क्या कहा जाता है?",
      optionsEn: ["Halogens", "Noble gases", "Chalcogens", "Lanthanides"],
      optionsHi: ["हैोजन (Halogens)", "उत्कृष्ट गैसें", "चैलकोजन", लैनथेनाइड्स],
      answer: 0,
      exp: "Explanation (En): Group 17 elements are called halogens (meaning 'salt-formers') because they react with metals to form salts.\nस्पष्टीकरण (Hi): समूह 17 के तत्वों को हैलोजन (अर्थात 'लवण बनाने वाले') कहा जाता है क्योंकि ये धातुओं के साथ मिलकर लवण बनाते हैं।"
    },
    {
      qEn: "What are the elements in Group 18 of the periodic table called?",
      qHi: "आवर्त सारणी के समूह 18 के तत्वों को क्या कहा जाता है?",
      optionsEn: ["Noble gases (or Inert gases)", "Halogens", "Transition metals", "Inner transition metals"],
      optionsHi: ["उत्कृष्ट गैसें या अक्रिय गैसें (Noble gases)", "हैोजन", "संक्रमण धातुएं", "आंतरिक संक्रमण धातुएं"],
      answer: 0,
      exp: "Explanation (En): Group 18 elements have completely filled valence shells, making them chemically unreactive or inert noble gases.\nस्पष्टीकरण (Hi): समूह 18 के तत्वों का बाह्यतम कोष पूरा भरा होता है, जिससे ये रासायनिक रूप से निष्क्रिय और अक्रिय गैसें कहलाती हैं।"
    },
    {
      qEn: "What name is given to the elements of Group 16?",
      qHi: "समूह 16 के तत्वों को क्या नाम दिया गया है?",
      optionsEn: ["Chalcogens (ore-forming elements)", "Halogens", "Pnictogens", "Lanthanides"],
      optionsHi: ["चैलकोजन (Chalcogens - अयस्क बनाने वाले तत्व)", "हैोजन", "प्रिक्टोजन", "लैनथेनाइड्स"],
      answer: 0,
      exp: "Explanation (En): Group 16 elements are called chalcogens because many metal ores are found as oxides or sulfides of these elements.\nस्पष्टीकरण (Hi): समूह 16 के तत्वों को चैलकोजन कहा जाता है क्योंकि अधिकांश धातु अयस्क इन्हीं के ऑक्साइड या सल्फाइड होते हैं।"
    },
    {
      qEn: "What are the d-block elements commonly referred to as?",
      qHi: "d-ब्लॉक के तत्वों को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Transition elements", "Inner transition elements", "Representative elements", "Rare earth elements"],
      optionsHi: ["संक्रमण तत्व (Transition elements)", "आंतरिक संक्रमण तत्व", "प्रतिनिधि तत्व", "दुर्लभ मृदा तत्व"],
      answer: 0,
      exp: "Explanation (En): d-block elements occupy the middle of the periodic table and show a transition in properties between s-block and p-block, hence called transition elements.\nस्पष्टीकरण (Hi): s और p ब्लॉक के बीच स्थित होने तथा उनके गुणों में संक्रमण दिखाने के कारण d-ब्लॉक तत्वों को संक्रमण तत्व कहते हैं।"
    },
    {
      qEn: "What are the f-block elements commonly called?",
      qHi: "f-ब्लॉक के तत्वों को सामान्यतः क्या कहा जाता है?",
      optionsEn: ["Inner transition elements (Lanthanides and Actinides)", "Noble gases", "Alkali metals", "Halogens"],
      optionsHi: ["आंतरिक संक्रमण तत्व (लैनथेनाइड्स और एक्टिनाइड्स)", "उत्कृष्ट गैसें", "क्षार धातुएं", "हैलोजन"],
      answer: 0,
      exp: "Explanation (En): f-block elements consist of lanthanides and actinides, placed separately at the bottom as inner transition elements.\nस्पष्टीकरण (Hi): f-ब्लॉक के तत्वों को आंतरिक संक्रमण तत्व कहा जाता है जिसमें लैनथेनाइड्स और एक्टिनाइड्स आते हैं।"
    },
    {
      qEn: "How does atomic radius generally vary across a period from left to right?",
      qHi: "आवर्त में बाएं से दाएं जाने पर परमाणु त्रिज्या (atomic radius) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
      optionsHi: ["घट जाती है (Decreases)", "बढ़ जाती है", "नियत रहती है", "पहले बढ़ती है फिर घटती है"],
      answer: 0,
      exp: "Explanation (En): Across a period, nuclear charge increases while electrons are added to the same shell, pulling the electron cloud closer and decreasing atomic radius.\nस्पष्टीकरण (Hi): आवर्त में बाएं से दाएं जाने पर प्रभावी नाभिकीय आवेश बढ़ता है, जिससे परमाणु का आकार (त्रिज्या) छोटा हो जाता है।"
    },
    {
      qEn: "How does atomic radius generally vary down a group from top to bottom?",
      qHi: "समूह में ऊपर से नीचे जाने पर परमाणु त्रिज्या पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains constant", "Irregular variation"],
      optionsHi: ["बढ़ जाती है (Increases)", "घट जाती है", "नियत रहती है", "अनियमित परिवर्तन"],
      answer: 0,
      exp: "Explanation (En): Down a group, new electron shells are added successively, increasing the distance from the nucleus and increasing atomic radius.\nस्पष्टीकरण (Hi): समूह में ऊपर से नीचे जाने पर नए कोश जुड़ते जाते हैं, जिससे परमाणु का आकार (त्रिज्या) बढ़ता जाता है।"
    },
    {
      qEn: "What is electronegativity?",
      qHi: "विद्युत ऋणात्मकता (Electronegativity) किसे कहते हैं?",
      optionsEn: ["The ability of an atom to attract shared electrons in a chemical bond", "The energy released when an electron is added", "The energy required to remove an electron", "The size of an atom"],
      optionsHi: ["रासायनिक बंध में साझा किए गए इलेक्ट्रॉनों को अपनी ओर आकर्षित करने की परमाणु की क्षमता", "इलेक्ट्रॉन जोड़ने पर निकली ऊर्जा", "इलेक्ट्रॉन निकालने के लिए आवश्यक ऊर्जा", "परमाणु का आकार"],
      answer: 0,
      exp: "Explanation (En): Electronegativity is a measure of the tendency of an atom to attract a bonding pair of electrons.\nस्पष्टीकरण (Hi): किसी परमाणु की सहसंयोजक बंध में साझा इलेक्ट्रॉन जोड़े को अपनी ओर खींचने की क्षमता विद्युत ऋणात्मकता कहलाती है।"
    },
    {
      qEn: "Which element has the highest electronegativity in the periodic table?",
      qHi: "आवर्त सारणी में किस तत्व की विद्युत ऋणात्मकता सबसे अधिक होती है?",
      optionsEn: ["Fluorine (F)", "Oxygen (O)", "Chlorine (Cl)", "Cesium (Cs)"],
      optionsHi: ["फ्लोरीन (Fluorine - F)", "ऑक्सीजन", "क्लोरीन", "सीसियम"],
      answer: 0,
      exp: "Explanation (En): Fluorine is the most electronegative element in the periodic table (approx 4.0 on Pauling scale).\nस्पष्टीकरण (Hi): आवर्त सारणी में फ्लोरीन (F) सबसे अधिक विद्युत ऋणात्मक तत्व है।"
    },
    {
      qEn: "What is ionization energy (ionization enthalpy)?",
      qHi: "आयनन ऊर्जा (Ionization energy) किसे कहते हैं?",
      optionsEn: ["The minimum energy required to remove an outermost electron from an isolated gaseous atom", "Energy released on adding an electron", "Energy of inner core electrons", "Bond dissociation energy"],
      optionsHi: ["किसी विलगित गैसीय परमाणु के बाह्यतम कोश से एक इलेक्ट्रॉन को बाहर निकालने के लिए आवश्यक न्यूनतम ऊर्जा", "इलेक्ट्रॉन जोड़ने पर मुक्त ऊर्जा", "आंतरिक इलेक्ट्रॉनों की ऊर्जा", "बंध वियोजन ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Ionization energy is the energy needed to strip an electron from a neutral gaseous atom to form a positive ion.\nस्पष्टीकरण (Hi): उदासीन गैसीय परमाणु से सबसे ढीले बंधे इलेक्ट्रॉन को बाहर निकालने के लिए जितनी ऊर्जा चाहिए, उसे आयनन ऊर्जा कहते हैं।"
    },
    {
      qEn: "How does ionization energy generally vary across a period from left to right?",
      qHi: "आवर्त में बाएं से दाएं जाने पर आयनन ऊर्जा पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains constant", "First decreases then increases"],
      optionsHi: ["बढ़ जाती है (Increases)", "घट जाती है", "नियत रहती है", "पहले घटती है फिर बढ़ती है"],
      answer: 0,
      exp: "Explanation (En): As atomic size decreases and nuclear charge increases across a period, it becomes harder to remove an electron, increasing ionization energy.\nस्पष्टीकरण (Hi): आवर्त में बाएं से दाएं परमाणु का आकार छोटा होने और नाभिकीय आवेश बढ़ने से इलेक्ट्रॉन निकालना कठिन हो जाता है, जिससे आयनन ऊर्जा बढ़ती है।"
    },
    {
      qEn: "What is electron gain enthalpy (electron affinity)?",
      qHi: "इलेक्ट्रॉन लब्धि एन्थैल्पी (Electron gain enthalpy) क्या होती है?",
      optionsEn: ["The amount of energy released when an electron is added to a neutral gaseous atom", "Energy required to remove an electron", "Energy of nucleus", "Binding energy of molecules"],
      optionsHi: ["जब किसी उदासीन गैसीय परमाणु में एक इलेक्ट्रॉन जोड़ा जाता है, तो उत्सर्जित होने वाली ऊर्जा की मात्रा", "इलेक्ट्रॉन निकालने के लिए आवश्यक ऊर्जा", "नाभिक की ऊर्जा", "अणुओं की बंधन ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Electron gain enthalpy measures the willingness of an atom to accept an extra electron, usually releasing energy.\nस्पष्टीकरण (Hi): किसी उदासीन गैसीय परमाणु में इलेक्ट्रॉन प्रवेश कराने पर जितनी ऊर्जा निकलती है (या अवशोषित होती है) उसे इलेक्ट्रॉन लब्धि एन्थैल्पी कहते हैं।"
    },
    {
      qEn: "Which element has the highest electron gain enthalpy (most negative electron affinity)?",
      qHi: "किस तत्व की इलेक्ट्रॉन लब्धि एन्थैल्पी सबसे अधिक ऋणात्मक (highest electron affinity) होती है?",
      optionsEn: ["Chlorine (Cl)", "Fluorine (F)", "Sodium (Na)", "Helium (He)"],
      optionsHi: ["क्लोरीन (Chlorine - Cl)", "फ्लोरीन", "सोडियम", "हीलियम"],
      answer: 0,
      exp: "Explanation (En): Although fluorine is more electronegative, chlorine has the highest (most negative) electron gain enthalpy due to fluorine's small size causing inter-electronic repulsion.\nस्पष्टीकरण (Hi): छोटे आकार के कारण फ्लोरीन में प्रतिकर्षक बल होता है, अतः क्लोरीन की इलेक्ट्रॉन लब्धि एन्थैल्पी फ्लोरीन से अधिक ऋणात्मक होती है।"
    },
    {
      qEn: "What is the general trend of metallic character across a period from left to right?",
      qHi: "आवर्त में बाएं से दाएं जाने पर धात्विक गुण (metallic character) पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "First increases then decreases"],
      optionsHi: ["घट जाती है (Decreases)", "बढ़ जाती है", "नियत रहती है", "पहले बढ़ती है फिर घटती है"],
      answer: 0,
      exp: "Explanation (En): Metallic character relates to the ease of losing electrons. Across a period, atoms hold electrons tighter, so metallic character decreases and non-metallic character increases.\nस्पष्टीकरण (Hi): बाएं से दाएं जाने पर इलेक्ट्रॉन त्यागने की प्रवृत्ति घटती है, जिससे धात्विक गुण कम होता है और अधात्विक गुण बढ़ता है।"
    },
    {
      qEn: "What is the general trend of metallic character down a group?",
      qHi: "समूह में ऊपर से नीचे जाने पर धात्विक गुण पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Increases", "Decreases", "Remains constant", "Zero"],
      optionsHi: ["बढ़ जाता है (Increases)", "घट जाती है", "नियत रहती है", "शून्य"],
      answer: 0,
      exp: "Explanation (En): Down a group, atomic size increases and valence electrons are farther from the nucleus, making them easier to lose (increasing metallic character).\nस्पष्टीकरण (Hi): समूह में ऊपर से नीचे जाने पर परमाणु का आकार बड़ा होने से इलेक्ट्रॉन आसानी से त्यागे जा सकते हैं, जिससे धात्विक गुण बढ़ता है।"
    },
    {
      qEn: "What are elements that show properties of both metals and non-metals called?",
      qHi: "धातुओं और अधातु दोनों के गुण दिखाने वाले तत्वों को क्या कहा जाता है?",
      optionsEn: ["Metalloids (Semi-metals)", "Noble gases", "Transition metals", "Halogens"],
      optionsHi: ["उपधातुएं (Metalloids / Semi-metals)", "उत्कृष्ट गैसें", "संक्रमण धातुएं", "हैलोजन"],
      answer: 0,
      exp: "Explanation (En): Metalloids (such as Silicon, Germanium, Arsenic) possess properties intermediate between metals and non-metals.\nस्पष्टीकरण (Hi): जो तत्व धातु और अधातु दोनों के गुण प्रदर्शित करते हैं उन्हें उपधातु (Metalloids) कहा जाता है।"
    },
    {
      qEn: "Which of the following is a metalloid?",
      qHi: "निम्नलिखित में से कौन सी एक उपधातु (metalloid) है?",
      optionsEn: ["Silicon (Si)", "Sodium (Na)", "Carbon (C)", "Sulfur (S)"],
      optionsHi: ["सिलिकॉन (Silicon - Si)", "सोडियम", "कार्बन", "सल्फर"],
      answer: 0,
      exp: "Explanation (En): Silicon, germanium, arsenic, antimony, and tellurium are well-known metalloids.\nस्पष्टीकरण (Hi): सिलिकॉन (Si), जर्मेनियम, आर्सेनिक आदि प्रसिद्ध उपधातुएं हैं।"
    },
    {
      qEn: "Who proposed the 'Law of Triangles' (Dobereiner's Triads)?",
      qHi: "'त्रिक नियम' (Dobereiner's Triads) का प्रतिपादन किसने किया था?",
      optionsEn: ["Johann Wolfgang Dobereiner", "John Newlands", "Dmitri Mendeleev", "Lothar Meyer"],
      optionsHi: ["जॉन वोल्फगैंग डोबेराइनर (Johann Wolfgang Dobereiner)", "जॉन न्यूलैंड्स", "दिमित्री मेंडेलीफ", "लोथर मेयर"],
      answer: 0,
      exp: "Explanation (En): Dobereiner grouped elements into triads where the atomic mass of the middle element was roughly the average of the other two.\nस्पष्टीकरण (Hi): डोबेराइनर ने तीन-तीन तत्वों के समूह (त्रिक) बनाए जिसमें बीच वाले तत्व का परमाणु द्रव्यमान अन्य दो के औसत के लगभग बराबर था।"
    },
    {
      qEn: "Who proposed the 'Law of Octaves' for classification of elements?",
      qHi: "तत्वों के वर्गीकरण के लिए 'अष्टक नियम' (Law of Octaves) किसने दिया था?",
      optionsEn: ["John Newlands", "Dobereiner", "Mendeleev", "Moseley"],
      optionsHi: ["जॉन न्यूलैंड्स (John Newlands)", "डोबेराइनर", "मेंडेलीफ", "मोजले"],
      answer: 0,
      exp: "Explanation (En): Newlands arranged elements by increasing atomic mass and noted that every eighth element shared similar properties (like musical notes).\nस्पष्टीकरण (Hi): जॉन न्यूलैंड्स ने बताया कि यदि तत्वों को बढ़ते परमाणु द्रव्यमान के अनुसार रखा जाए, तो हर आठवें तत्व के गुण पहले तत्व से मिलते हैं।"
    },
    {
      qEn: "What was a major anomaly or limitation in Mendeleev's original periodic table?",
      qHi: "मेंडेलीफ की मूल आवर्त सारणी की एक प्रमुख विसंगति या सीमा क्या थी?",
      optionsEn: ["Anomalous pairs of elements where higher atomic mass preceded lower atomic mass, and position of isotopes", "No place for transition elements", "Inability to show noble gases", "All elements were grouped as gases"],
      optionsHi: ["तत्वों के ऐसे युग्म जहाँ अधिक परमाणु द्रव्यमान वाला तत्व पहले रखा गया था, और समस्थानिकों का स्थान", "संक्रमण तत्वों के लिए कोई जगह नहीं", "अक्रिय गैसों को न दर्शा पाना", "सभी तत्वों को गैस मानना"],
      answer: 0,
      exp: "Explanation (En): Mendeleev placed Iodine (mass 126.9) after Tellurium (mass 127.6) to group them correctly, violating strict atomic mass order, and isotopes posed a placement problem.\nस्पष्टीकरण (Hi): मेंडेलीफ को कुछ स्थानों पर भारी तत्वों को हल्के तत्वों से पहले रखना पड़ा था और समस्थानिकों के लिए कोई निश्चित स्थान नहीं था।"
    },
    {
      qEn: "Why are noble gases chemically unreactive?",
      qHi: "उत्कृष्ट गैसें (Noble gases) रासायनिक रूप से अक्रिय क्यों होती हैं?",
      optionsEn: ["Because they have a completely filled stable valence shell (octet or duplet)", "Because they are heavy", "Because they are found in small amounts", "Because they have zero mass"],
      optionsHi: ["क्योंकि उनका बाह्यतम कोश पूरी तरह भरा होता है (अष्टक या द्विक पूरा होता है)", "क्योंकि वे भारी होती हैं", "क्योंकि वे कम मात्रा में मिलती हैं", "क्योंकि उनका द्रव्यमान शून्य होता है"],
      answer: 0,
      exp: "Explanation (En): Noble gases have 8 electrons in valence shell (2 for helium), making them stable and reluctant to form chemical bonds.\nस्पष्टीकरण (Hi): उत्कृष्ट गैसों का इलेक्ट्रॉनिक विन्यास बहुत स्थायी होता है (बाह्यतम कक्षा में 8 इलेक्ट्रॉन), जिससे वे अभिक्रिया नहीं करतीं।"
    },
    {
      qEn: "What is diagonal relationship in the periodic table?",
      qHi: "आवर्त सारणी में विकर्ण संबंध (diagonal relationship) क्या होता है?",
      optionsEn: ["Similar chemical properties shown by diagonally adjacent elements in neighboring groups and periods (e.g., Li and Mg)", "Diagonal flow of electrons", "Similarity in groups only", "Diagonal arrangement of metals"],
      optionsHi: ["आसपास के समूहों और आवर्तों में विकर्ण रूप से जुड़े तत्वों के समान रासायनिक गुण (जैसे Li और Mg)", "इलेक्ट्रॉनों का विकर्ण प्रवाह", "केवल समूहों में समानता", "धातुओं की विकर्ण व्यवस्था"],
      answer: 0,
      exp: "Explanation (En): Certain elements in second period (like Li, Be, B) show similarities in properties with diagonal elements in third period (Mg, Al, Si).\nस्पष्टीकरण (Hi): दूसरे आवर्त के कुछ तत्व तीसरे आवर्त के विकर्ण रूप से सामने वाले तत्वों के साथ समानता दिखाते हैं, जैसे लिथियम और मैग्नीशियम।"
    },
    {
      qEn: "What is the general valence shell electronic configuration of Halogens (Group 17)?",
      qHi: "हैलोजन (समूह 17) का सामान्य बाह्यतम इलेक्ट्रॉनिक विन्यास क्या होता है?",
      optionsEn: ["ns^2 np^5", "ns^2 np^6", "ns^1", "ns^2 np^4"],
      optionsHi: ["ns^2 np^5", "ns^2 np^6", "ns^1", "ns^2 np^4"],
      answer: 0,
      exp: "Explanation (En): Halogens have 7 valence electrons (2 in s, 5 in p), giving configuration ns^2 np^5.\nस्पष्टीकरण (Hi): हैलोजन के बाह्यतम कोष में 7 इलेक्ट्रॉन होते हैं, इसलिए उनका सामान्य विन्यास ns^2 np^5 होता है।"
    },
    {
      qEn: "Which block contains the non-metals, metalloids, and some metals in the periodic table?",
      qHi: "आवर्त सारणी के किस ब्लॉक में अधातुएं, उपधातुएं और कुछ धातुएं पाई जाती हैं?",
      optionsEn: ["p-block", "s-block", "d-block", "f-block"],
      optionsHi: ["p-ब्लॉक (p-block)", "s-block", "d-block", "f-block"],
      answer: 0,
      exp: "Explanation (En): The p-block is unique as it contains all three types of elements: metals, metalloids, and non-metals.\nस्पष्टीकरण (Hi): p-ब्लॉक एकमात्र ऐसा ब्लॉक है जिसमें धातुएं, अधातुएं और उपधातुएं तीनों प्रकार के तत्व मौजूद होते हैं।"
    },
    {
      qEn: "Why is Hydrogen placed at the top of Group 1 in spite of non-metallic properties in some aspects?",
      qHi: "कुछ पहलुओं में अधात्विक गुण होने के बावजूद हाइड्रोजन को समूह 1 में सबसे ऊपर क्यों रखा गया है?",
      optionsEn: ["Because of its valence electron configuration (1s^1) resembling alkali metals", "Because it is a gas", "Because it has zero neutrons", "Because it is heavy"],
      optionsHi: ["इसके संयोजकता इलेक्ट्रॉन विन्यास (1s^1) के कारण जो क्षार धातुओं से मिलता है", "क्योंकि यह गैस है", "क्योंकि इसमें न्यूट्रॉन नहीं होते", "क्योंकि यह भारी है"],
      answer: 0,
      exp: "Explanation (En): Hydrogen has a single valence electron (s^1) like alkali metals, though it also shares properties with halogens.\nस्पष्टीकरण (Hi): क्षार धातुओं की तरह हाइड्रोजन के पास भी बाह्यतम कक्षा में 1 इलेक्ट्रॉन (1s^1) होता है, जिस कारण इसे समूह 1 में रखा गया है।"
    }
  ],
    "Chemical Bonding": [
    {
      qEn: "What type of chemical bond is formed by the complete transfer of valence electrons from one atom to another?",
      qHi: "एक परमाणु से दूसरे परमाणु में संयोजकता इलेक्ट्रॉनों के पूर्ण स्थानांतरण से किस प्रकार का रासायनिक बंध बनता है?",
      optionsEn: ["Ionic bond (Electrovalent bond)", "Covalent bond", "Coordinate bond", "Hydrogen bond"],
      optionsHi: ["आयनिक बंध या वैद्युतसंयोजक बंध (Ionic bond)", "सहसंयोजक बंध", "उपसहसंयोजक बंध", "हाइड्रोजन बंध"],
      answer: 0,
      exp: "Explanation (En): An ionic bond is formed by electrostatic attraction between oppositely charged ions created by electron transfer.\nस्पष्टीकरण (Hi): इलेक्ट्रॉनों के पूर्ण आदान-प्रदान से बने विपरीत आवेशित आयनों के बीच के आकर्षण बल को आयनिक बंध कहते हैं।"
    },
    {
      qEn: "What type of chemical bond is formed by the mutual sharing of electron pairs between atoms?",
      qHi: "परमाणुओं के बीच इलेक्ट्रॉन युग्मों की आपसी साझेदारी (sharing) से कौन सा बंध बनता है?",
      optionsEn: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
      optionsHi: ["सहसंयोजक बंध (Covalent bond)", "आयनिक बंध", "धात्विक बंध", "हाइड्रोजन बंध"],
      answer: 0,
      exp: "Explanation (En): A covalent bond is formed when atoms share one or more pairs of valence electrons to achieve stable octets.\nस्पष्टीकरण (Hi): जब दो परमाणु अपना अष्टक पूरा करने के लिए इलेक्ट्रॉनों की साझेदारी करते हैं, तो सहसंयोजक बंध बनता है।"
    },
    {
      qEn: "What is a coordinate (dative) covalent bond?",
      qHi: "उपसहसंयोजक (Coordinate) बंध किसे कहते हैं?",
      optionsEn: ["A covalent bond where both shared electrons are contributed by only one of the participating atoms", "Bond formed by electron transfer", "Bond formed by metal ions", "Bond formed by free electrons"],
      optionsHi: ["वह सहसंयोजक बंध जिसमें साझा किए जाने वाले दोनों इलेक्ट्रॉन केवल एक ही परमाणु द्वारा दिए जाते हैं", "इलेक्ट्रॉन स्थानांतरण से बना बंध", "धातु आयनों से बना बंध", "मुक्त इलेक्ट्रॉनों से बना बंध"],
      answer: 0,
      exp: "Explanation (En): A coordinate bond is a covalent bond in which both electrons of the shared pair come from a single donor atom.\nस्पष्टीकरण (Hi): उपसहसंयोजक बंध वह विशेष सहसंयोजक बंध है जिसमें साझा का जोड़ा सिर्फ एक ही परमाणु (दाता) द्वारा दिया जाता है।"
    },
    {
      qEn: "What is the hybridization of carbon in a methane (CH_4) molecule?",
      qHi: "मीथेन (CH_4) अणु में कार्बन का संकरण (hybridization) क्या होता है?",
      optionsEn: ["sp^3", "sp^2", "sp", "sp^3d"],
      optionsHi: ["sp^3", "sp^2", "sp", "sp^3d"],
      answer: 0,
      exp: "Explanation (En): Carbon in methane forms four single sigma bonds with tetrahedral geometry, corresponding to sp^3 hybridization.\nस्पष्टीकरण (Hi): मीथेन में कार्बन चार सिग्मा बंध बनाता है और इसकी ज्यामिति चतुष्फलकीय होती है, जिससे इसका संकरण sp^3 होता है।"
    },
    {
      qEn: "What is the shape and bond angle of a water (H_2O) molecule according to VSEPR theory?",
      qHi: "VSEPR सिद्धांत के अनुसार पानी (H_2O) के अणु की आकृति और बंध कोण कितना होता है?",
      optionsEn: ["Bent (V-shaped), approx 104.5^\\circ", "Linear, 180^\\circ", "Tetrahedral, 109.5^\\circ", "Trigonal planar, 120^\\circ"],
      optionsHi: ["मुड़ी हुई या V-आकार (Bent), लगभग 104.5^\\circ", "रेखीय, 180^\\circ", "चतुष्फलकीय, 109.5^\\circ", "त्रिकोणीय समतलीय, 120^\\circ"],
      answer: 0,
      exp: "Explanation (En): Due to two lone pairs and two bond pairs on oxygen, water has a bent shape with a bond angle of about 104.5^\\circ.\nस्पष्टीकरण (Hi): ऑक्सीजन पर दो एकांकी युग्म (lone pairs) होने के कारण जल का अणु मुड़ा हुआ (V-shape) होता है और बंध कोण 104.5^\\circ होता है।"
    },
    {
      qEn: "What is the hybridization and shape of boron trifluoride (BF_3)?",
      qHi: "बोरॉन ट्राइफ्लोराइड (BF_3) का संकरण और आकृति क्या है?",
      optionsEn: ["sp^2, Trigonal planar", "sp^3, Tetrahedral", "sp, Linear", "sp^3d, Trigonal bipyramidal"],
      optionsHi: ["sp^2, त्रिकोणीय समतलीय (Trigonal planar)", "sp^3, चतुष्फलकीय", "sp, रेखीय", "sp^3d, त्रिकोणीय द्विपिरामिडियल"],
      answer: 0,
      exp: "Explanation (En): Boron in BF_3 has 3 bond pairs and no lone pairs, resulting in sp^2 hybridization and trigonal planar geometry.\nस्पष्टीकरण (Hi): BF_3 में बोरॉन के पास 3 बंध जोड़े होते हैं, जिससे इसका संकरण sp^2 और आकृति त्रिकोणीय समतलीय होती है।"
    },
    {
      qEn: "What is the shape of carbon dioxide (CO_2) molecule?",
      qHi: "कार्बन डाइऑक्साइड (CO_2) अणु की आकृति कैसी होती है?",
      optionsEn: ["Linear (180^\\circ)", "Bent", "Tetrahedral", "Pyramidal"],
      optionsHi: ["रेखीय (180^\\circ - Linear)", "मुड़ी हुई", "चतुष्फलकीय", "पिरामिडियल"],
      answer: 0,
      exp: "Explanation (En): CO_2 features two double bonds around central carbon with no lone pairs, yielding a linear geometry and 180^\\circ bond angle.\nस्पष्टीकरण (Hi): CO_2 में केंद्रीय कार्बन के दोनों ओर दो दोहरे बंध होते हैं, जिससे इसकी आकृति रेखीय (180^\\circ) होती है।"
    },
    {
      qEn: "What is hydrogen bonding?",
      qHi: "हाइड्रोजन बंध (Hydrogen bonding) क्या है?",
      optionsEn: ["A dipole-dipole attraction between hydrogen attached to a highly electronegative atom (F, O, N) and another electronegative atom", "A strong ionic bond", "A covalent bond inside molecule", "Metallic attraction"],
      optionsHi: ["अत्यधिक विद्युत ऋणात्मक परमाणु (F, O, N) से जुड़े हाइड्रोजन और दूसरे विद्युत ऋणात्मक परमाणु के बीच का आकर्षण बल", "मजबूत आयनिक बंध", "अणु के अंदर का सहसंयोजक बंध", "धात्विक आकर्षण"],
      answer: 0,
      exp: "Explanation (En): Hydrogen bonding is a special strong intermolecular force occurring when hydrogen is bonded to F, O, or N.\nस्पष्टीकरण (Hi): जब हाइड्रोजन परमाणु अत्यधिक विद्युत ऋणात्मक तत्वों (F, O, N) से जुड़ा होता है, तो वह दूसरे अणु के F, O, N को आकर्षित करता है जिसे हाइड्रोजन बंध कहते हैं।"
    },
    {
      qEn: "Why does water have an unusually high boiling point compared to similar hydrides like H_2S?",
      qHi: "H_2S जैसे अन्य हाइड्राइडों की तुलना में पानी का क्वथनांक असामान्य रूप से उच्च क्यों होता है?",
      optionsEn: ["Due to intermolecular hydrogen bonding between water molecules", "Due to ionic bonding", "Because water is heavy", "Due to covalent double bonds"],
      optionsHi: ["पानी के अणुओं के बीच अंतर-आणविक हाइड्रोजन बंधन के कारण", "आयनिक बंध के कारण", "क्योंकि पानी भारी है", "सहसंयोजक दोहरे बंध के कारण"],
      answer: 0,
      exp: "Explanation (En): Strong hydrogen bonds in water require extra thermal energy to break, resulting in a high boiling point.\nस्पष्टीकरण (Hi): पानी के अणुओं में मजबूत हाइड्रोजन बॉन्ड पाए जाने के कारण इन्हें तोड़ने के लिए अधिक ऊष्मा की आवश्यकता होती है, जिससे क्वथनांक बढ़ जाता है।"
    },
    {
      qEn: "How is a sigma (\\sigma) bond formed?",
      qHi: "सिग्मा (\sigma) बंध का निर्माण कैसे होता है?",
      optionsEn: ["By coaxial (head-on) overlap of atomic orbitals along the internuclear axis", "By sideways (lateral) overlap", "By complete electron transfer", "By magnetic attraction"],
      optionsHi: ["परमाणु कक्षकों के अक्षीय (head-on) अतिव्यापन द्वारा", "पार्श्व (sideways) अतिव्यापन द्वारा", "पूर्ण इलेक्ट्रॉन स्थानांतरण द्वारा", "चुंबकीय आकर्षण द्वारा"],
      answer: 0,
      exp: "Explanation (En): A sigma bond is the strongest covalent bond formed by end-to-end (axial) overlapping of orbitals.\nस्पष्टीकरण (Hi): कक्षकों के आमने-सामने (अक्षीय) अतिव्यापन से सबसे मजबूत सिग्मा बंध बनता है।"
    },
    {
      qEn: "How is a pi (\\pi) bond formed?",
      qHi: "पाई (\pi) बंध का निर्माण कैसे होता है?",
      optionsEn: ["By sideways (lateral) overlap of parallel p-orbitals", "By head-on overlap", "By electron transfer", "By ionic interaction"],
      optionsHi: ["समानांतर p-कक्षकों के पार्श्व (lateral) अतिव्यापन द्वारा", "आमने-सामने अतिव्यापन द्वारा", "इलेक्ट्रॉन स्थानांतरण द्वारा", "आयनिक अन्योन्यक्रिया द्वारा"],
      answer: 0,
      exp: "Explanation (En): Pi bonds are formed by lateral (sideways) overlapping of unhybridized p-orbitals above and below the internuclear axis.\nस्पष्टीकरण (Hi): असंकृत p-कक्षकों के पार्श्व (बगल से) अतिव्यापन के कारण पाई (\pi) बंध बनता है।"
    },
    {
      qEn: "Which is stronger: a sigma bond or a pi bond?",
      qHi: "सिग्मा बंध और पाई बंध में से अधिक मजबूत कौन सा होता है?",
      optionsEn: ["Sigma bond is stronger due to greater extent of overlapping", "Pi bond is stronger", "Both have equal strength", "Strength depends on temperature"],
      optionsHi: ["अतिव्यापन अधिक होने के कारण सिग्मा बंध अधिक मजबूत होता है", "पाई बंध अधिक मजबूत होता है", "दोनों की ताकत समान होती है", "ताकत तापमान पर निर्भर करती है"],
      answer: 0,
      exp: "Explanation (En): Head-on overlap in sigma bonds allows greater orbital overlap than lateral overlap in pi bonds, making sigma bonds stronger.\nस्पष्टीकरण (Hi): सिग्मा बंध में अतिव्यापन ज्यादा क्षेत्रफल में होता है, इसलिए यह पाई बंध की तुलना में अधिक मजबूत होता है।"
    },
    {
      qEn: "How many sigma and pi bonds are present in an acetylene (C_2H_2) molecule?",
      qHi: "एसिटिलीन (C_2H_2) अणु में कितने सिग्मा और पाई बंध होते हैं?",
      optionsEn: ["3 sigma and 2 pi bonds", "2 sigma and 3 pi bonds", "4 sigma and 1 pi bond", "5 sigma bonds"],
      optionsHi: ["3 सिग्मा और 2 पाई बंध", "2 सिग्मा और 3 पाई बंध", "4 सिग्मा और 1 पाई बंध", "5 सिग्मा बंध"],
      answer: 0,
      exp: "Explanation (En): Structure is H-C\\equiv C-H, containing one C-C triple bond (1 \\sigma, 2 \\pi) and two C-H single bonds (2 \\sigma), totaling 3 \\sigma and 2 \\pi.\nस्पष्टीकरण (Hi): C_2H_2 की संरचना में एक त्रिबंध (1 \\sigma, 2 \\pi) और दो एकल बंध (2 \\sigma) होते हैं, यानी कुल 3 सिग्मा और 2 पाई बंध।"
    },
    {
      qEn: "What is the bond order of an oxygen molecule (O_2) based on molecular orbital theory?",
      qHi: "आणविक कक्षक सिद्धांत के अनुसार ऑक्सीजन अणु (O_2) का बंध क्रम (bond order) कितना होता है?",
      optionsEn: ["2", "1", "3", "1.5"],
      optionsHi: ["2", "1", "3", "1.5"],
      answer: 0,
      exp: "Explanation (En): Bond order = \\frac{N_b - N_a}{2} = \\frac{10 - 6}{2} = 2 for O_2.\nस्पष्टीकरण (Hi): आणविक कक्षक सिद्धांत से बॉन्ड ऑर्डर = \\frac{10 - 6}{2} = 2 होता है।"
    },
    {
      qEn: "Why is oxygen (O_2) molecule paramagnetic in nature?",
      qHi: "ऑक्सीजन (O_2) अणु प्रकृति में अनुचुंबकीय (paramagnetic) क्यों होता है?",
      optionsEn: ["Due to the presence of two unpaired electrons in its anti-bonding molecular orbitals", "Because it has all paired electrons", "Because of ionic bonds", "Because it is a gas"],
      optionsHi: ["इसके प्रतिकारक आणविक कक्षकों (anti-bonding orbitals) में दो अयुग्मित इलेक्ट्रॉनों की उपस्थिति के कारण", "क्योंकि इसके सभी इलेक्ट्रॉन युग्मित हैं", "आयनिक बंध के कारण", "गैस होने के कारण"],
      answer: 0,
      exp: "Explanation (En): Molecular orbital configuration of O_2 shows two unpaired electrons in \\pi^* 2p orbitals, explaining its paramagnetism.\nस्पष्टीकरण (Hi): O_2 के आणविक विन्यास में दो इलेक्ट्रॉन अयुग्मित होते हैं, जो इसके अनुचुंबकीय स्वभाव को दर्शाते हैं।"
    },
    {
      qEn: "What is the geometry and hybridization of phosphorus pentachloride (PCl_5)?",
      qHi: "फास्फोरस पेंटाक्लोराइड (PCl_5) की ज्यामिति और संकरण क्या है?",
      optionsEn: ["Trigonal bipyramidal, sp^3d", "Octahedral, sp^3d^2", "Tetrahedral, sp^3", "Linear, sp"],
      optionsHi: ["त्रिकोणीय द्विपिरामिडियल (Trigonal bipyramidal), sp^3d", "अष्टफलकीय, sp^3d^2", "चतुष्फलकीय, sp^3", "रेखीय, sp"],
      answer: 0,
      exp: "Explanation (En): Phosphorus in PCl_5 has 5 bond pairs and 0 lone pairs, giving sp^3d hybridization and trigonal bipyramidal shape.\nस्पष्टीकरण (Hi): PCl_5 में फास्फोरस के पास 5 बंध युग्म होते हैं, जिससे इसका संकरण sp^3d और आकृति त्रिकोणीय द्विपिरामिडियल होती है।"
    },
    {
      qEn: "What is the geometry and hybridization of sulfur hexafluoride (SF_6)?",
      qHi: "सल्फर हेक्साफ्लोराइड (SF_6) की ज्यामिति और संकरण क्या है?",
      optionsEn: ["Octahedral, sp^3d^2", "Trigonal bipyramidal, sp^3d", "Tetrahedral, sp^3", "Square planar"],
      optionsHi: ["अष्टफलकीय (Octahedral), sp^3d^2", "त्रिकोणीय द्विपिरामिडियल, sp^3d", "चतुष्फलकीय, sp^3", "वर्ग समतलीय"],
      answer: 0,
      exp: "Explanation (En): SF_6 has 6 bond pairs around sulfur, corresponding to sp^3d^2 hybridization and octahedral geometry.\nस्पष्टीकरण (Hi): SF_6 में 6 बंध युग्म होते हैं, जिससे इसका संकरण sp^3d^2 और आकृति अष्टफलकीय होती है।"
    },
    {
      qEn: "What is the dipole moment of a symmetrical molecule like carbon dioxide (CO_2) or carbon tetrachloride (CCl_4)?",
      qHi: "कार्बन डाइऑक्साइड (CO_2) या कार्बन टेट्राक्लोराइड (CCl_4) जैसे सममित अणुओं का द्विध्रुव आघूर्ण (dipole moment) कितना होता है?",
      optionsEn: ["Zero (0)", "High positive value", "Negative value", "Infinite"],
      optionsHi: ["शून्य (Zero)", "उच्च धनात्मक मान", "ऋणात्मक मान", "अनंत"],
      answer: 0,
      exp: "Explanation (En): In symmetrical molecules, bond dipoles cancel each other out completely, resulting in a net dipole moment of zero.\nस्पष्टीकरण (Hi): सममित संरचना होने के कारण व्यक्तिगत बंधों के द्विध्रुव आघूर्ण एक-दूसरे को निरस्त कर देते हैं, जिससे कुल द्विध्रुव आघूर्ण शून्य होता है।"
    },
    {
      qEn: "Which molecule has a net dipole moment greater than zero (polar molecule)?",
      qHi: "किस अणु का कुल द्विध्रुव आघूर्ण शून्य से अधिक होता है (ध्रुवीय अणु)?",
      optionsEn: ["Ammonia (NH_3)", "Carbon dioxide (CO_2)", "Carbon tetrachloride (CCl_4)", "Boron trifluoride (BF_3)"],
      optionsHi: ["अमोनिया (NH_3)", "कार्बन डाइऑक्साइड (CO_2)", "कार्बन टेट्राक्लोराइड (CCl_4)", "बोरॉन ट्राइफ्लोराइड (BF_3)"],
        answer: 0,
        exp: "Explanation (En): Ammonia has a pyramidal shape with a lone pair on nitrogen, making its bond dipoles reinforce rather than cancel, giving a net dipole moment.\nस्पष्टीकरण (Hi): अमोनिया पिरामिडियल आकृति का होता है और इसके बंध आघूर्ण जुड़ जाते हैं, जिससे यह एक ध्रुवीय अणु बनता है।"
      },
      {
        qEn: "What forces hold metal atoms together in a metallic crystal lattice?",
        qHi: "धात्विक क्रिस्टल जालक में धातु परमाणुओं को आपस में कौन सा बल बांध कर रखता है?",
        optionsEn: ["Metallic bond (attraction between positive metal ions and a 'sea' of delocalized electrons)", "Ionic bond", "Coordinate bond", "Hydrogen bond"],
        optionsHi: ["धात्विक बंध (धनात्मक धातु आयनों और मुक्त इलेक्ट्रॉनों के 'समुद्र' के बीच आकर्षण)", "आयनिक बंध", "उपसहसंयोजक बंध", "हाइड्रोजन बंध"],
        answer: 0,
        exp: "Explanation (En): Metallic bonding involves positive ion cores immersed in a sea of mobile valence electrons, providing high conductivity and malleability.\nस्पष्टीकरण (Hi): धात्विक बंध धनावेशित आयनों और चारों तरफ तैरते मुक्त इलेक्ट्रॉनों के बीच के आकर्षण से बनता है।"
      },
      {
        qEn: "What is lattice energy in ionic compounds?",
        qHi: "आयनिक यौगिकों में जालक ऊर्जा (Lattice energy) किसे कहते हैं?",
        optionsEn: ["The amount of energy released when gaseous ions combine to form one mole of a solid ionic crystal", "Energy required to melt a solid", "Energy of electrons in orbit", "Bond breaking energy in gases"],
        optionsHi: ["जब गैसीय आयन मिलकर एक मोल ठोस आयनिक क्रिस्टल बनाते हैं, तो जितनी ऊर्जा मुक्त होती है", "ठोस पिघलाने के लिए आवश्यक ऊर्जा", "कक्षा में इलेक्ट्रॉनों की ऊर्जा", "गैसों में बंध टूटने की ऊर्जा"],
        answer: 0,
        exp: "Explanation (En): Lattice energy is the energy released upon the formation of an ionic crystal from separated gaseous ions, indicating crystal stability.\nस्पष्टीकरण (Hi): अलग-अलग गैसीय आयनों से एक मोल ठोस आयनिक जालक बनने पर जितनी ऊर्जा निकलती है, उसे जालक ऊर्जा कहते हैं।"
      },
      {
        qEn: "Why do ionic compounds conduct electricity in molten or aqueous state, but not in solid state?",
        qHi: "आयनिक यौगिक पिघले हुए या जलीय अवस्था में विद्युत का चालन क्यों करते हैं, लेकिन ठोस अवस्था में नहीं?",
        optionsEn: ["Because ions are free to move in molten/aqueous state, whereas they are fixed in rigid crystal lattice in solid state", "Because electrons are destroyed in solid", "Because solid state has high resistance", "Because water creates electricity"],
        optionsHi: ["क्योंकि पिघले/जलीय रूप में आयन गति करने के लिए स्वतंत्र होते हैं, जबकि ठोस में वे अपनी जगह स्थिर होते हैं", "क्योंकि ठोस में इलेक्ट्रॉन नष्ट हो जाते हैं", "क्योंकि ठोस अवस्था में प्रतिरोध अधिक होता है", "क्योंकि पानी बिजली पैदा करता है"],
        answer: 0,
        exp: "Explanation (En): Electrical conductivity requires mobile charge carriers; solid ions are locked in place, but free to move when melted or dissolved.\nस्पष्टीकरण (Hi): विद्युत चालन के लिए गतिमान आवेशों की जरूरत होती है; ठोस में आयन बंधे होते हैं जबकि पिघलने पर वे स्वतंत्र हो जाते हैं।"
      },
      {
        qEn: "What is the octet rule in chemical bonding?",
        qHi: "रासायनिक बंधन में अष्टक नियम (Octet rule) क्या है?",
        optionsEn: ["Atoms tend to combine in such a way that they each have eight electrons in their valence shells", "Atoms always have 8 protons", "Molecules must contain 8 atoms", "Energy must be 8 Joules"],
        optionsHi: ["परमाणु इस प्रकार संयोजन करते हैं कि उनके बाह्यतम कोष में आठ इलेक्ट्रॉन पूरे हो जाएं", "परमाणुओं में हमेशा 8 प्रोटॉन होते हैं", "अणुओं में 8 परमाणु होने चाहिए", "ऊर्जा 8 जूल होनी चाहिए"],
        answer: 0,
        exp: "Explanation (En): The octet rule states that main-group elements tend to gain, lose, or share electrons to achieve a full outer shell of 8 electrons.\nस्पष्टीकरण (Hi): अष्टक नियम के अनुसार परमाणु अपने बाहरी कोश में 8 इलेक्ट्रॉन प्राप्त करने के लिए इलेक्ट्रॉनों का आदान-प्रदान या साझा करते हैं।"
      },
      {
        qEn: "Which of the following molecules is an exception to the octet rule (electron-deficient molecule)?",
        qHi: "निम्नलिखित में से कौन सा अणु अष्टक नियम का अपवाद है (इलेक्ट्रॉन-न्यून अणु)?",
        optionsEn: ["BF_3", "CH_4", "H_2O", "NH_3"],
        optionsHi: ["BF_3", "CH_4", "H_2O", "NH_3"],
        answer: 0,
        exp: "Explanation (En): In BF_3, boron has only 6 valence electrons around it, making it an electron-deficient exception to the octet rule.\nस्पष्टीकरण (Hi): BF_3 में बोरॉन के पास कुल 6 इलेक्ट्रॉन ही होते हैं (अष्टक पूरा नहीं होता), इसलिए यह अष्टक नियम का अपवाद है।"
      },
      {
        qEn: "What does Fajan's Rule deal with?",
        qHi: "फाजान का नियम (Fajan's Rule) किससे संबंधित है?",
        optionsEn: ["The covalent character in ionic compounds", "The ionic character in covalent bonds", "Magnetic properties of gases", "Radioactive decay rates"],
        optionsHi: ["आयनिक यौगिकों में सहसंयोजक लक्षण (covalent character)", "सहसंयोजक बंधों में आयनिक लक्षण", "गैसों के चुंबकीय गुण", "रेडियोधर्मी क्षय दर"],
        answer: 0,
        exp: "Explanation (En): Fajan's rules predict whether a chemical bond will be ionic or covalent, stating small cations and large anions favor covalent character (polarization).\nस्पष्टीकरण (Hi): फाजान के नियम यह बताते हैं कि किस प्रकार कुछ आयनिक यौगिकों में ध्रुवीकरण के कारण सहसंयोजक गुण आ जाते हैं।"
      },
      {
        qEn: "According to Fajan's Rules, what conditions favor greater covalent character in an ionic bond?",
        qHi: "फाजान के नियमों के अनुसार, आयनिक बंध में अधिक सहसंयोजक गुण के लिए क्या परिस्थितियां होनी चाहिए?",
        optionsEn: ["Small cation, large anion, and high positive charge on cation", "Large cation, small anion, and low charge", "Equal size of cation and anion", "No charge on ions"],
        optionsHi: ["छोटा धनायन, बड़ा ऋणायन और धनायन पर उच्च आवेश", "बड़ा धनायन, छोटा ऋणायन और कम आवेश", "धनायन और ऋणायन का समान आकार", "आयन पर कोई आवेश नहीं"],
        answer: 0,
        exp: "Explanation (En): High polarizing power (small cation, high charge) and high polarizability (large anion) increase covalent character.\nस्पष्टीकरण (Hi): छोटे धनायन और बड़े ऋणायन के मिलने से ध्रुवीकरण बढ़ता है, जिससे आयनिक यौगिक में सहसंयोजक गुण बढ़ जाता है।"
      },
      {
        qEn: "What is resonance in chemical structures?",
        qHi: "रासायनिक संरचनाओं में अनुनाद (Resonance) का क्या अर्थ है?",
        optionsEn: ["The existence of two or more valid Lewis structures for a single molecule that contribute to the actual hybrid structure", "Oscillation of atomic nuclei", "Physical vibration of bonds", "Resonance of sound waves in atoms"],
        optionsHi: ["एक ही अणु के लिए दो या दो से अधिक मान्य लुईस संरचनाओं का होना जो वास्तविक संकर संरचना बनाती हैं", "नाभिकों का दोलन", "बंधों का भौतिक कंपन", "परमाणुओं में ध्वनि तरंगों का अनुनाद"],
        answer: 0,
        exp: "Explanation (En): Resonance describes molecules where a single Lewis structure cannot fully explain properties, and the true structure is a hybrid of multiple contributing structures.\nस्पष्टीकरण (Hi): जब एक लुईस संरचना किसी अणु के सभी गुणों को नहीं समझा पाती, तो कई संरचनाओं का संकर (resonance hybrid) माना जाता है।"
      },
      {
        qEn: "What is the bond order of a carbon-carbon single, double, and triple bond respectively?",
        qHi: "कार्बन-कार्बन एकल, दोहरा और त्रिबंध का बंध क्रम (bond order) क्रमशः कितना होता है?",
        optionsEn: ["1, 2, 3", "3, 2, 1", "1, 1.5, 2", "2, 4, 6"],
        optionsHi: ["1, 2, 3", "3, 2, 1", "1, 1.5, 2", "2, 4, 6"],
        answer: 0,
        exp: "Explanation (En): Single bond has bond order 1, double bond has 2, and triple bond has 3, reflecting the number of shared electron pairs.\nस्पष्टीकरण (Hi): एकल बंध के लिए बंध क्रम 1, दोहरे बंध के लिए 2 और त्रिबंध के लिए 3 होता है।"
      },
      {
        qEn: "What type of intermolecular force is responsible for holding non-polar molecules (like liquid O_2 or noble gases) together at low temperatures?",
        qHi: "कम तापमान पर अध्रुवीय अणुओं (जैसे तरल O_2 या अक्रिय गैसों) को आपस में बांधकर रखने वाला अंतर-आणविक बल कौन सा होता है?",
        optionsEn: ["London dispersion forces (dispersion / van der Waals forces)", "Ionic bonds", "Hydrogen bonds", "Coordinate bonds"],
        optionsHi: ["लंदन प्रकीर्णन बल (London dispersion forces / वांडर वॉल बल)", "आयनिक बंध", "हाइड्रोजन बंध", "उपसहसंयोजक बंध"],
        answer: 0,
        exp: "Explanation (En): London dispersion forces are weak temporary attractive forces arising from instantaneous dipoles in non-polar atoms or molecules.\nस्पष्टीकरण (Hi): क्षणिक द्विध्रुवों के कारण अध्रुवीय अणुओं के बीच लगने वाले कमजोर आकर्षण बलों को लंदन प्रकीर्णन बल या वांडर वॉल बल कहते हैं।"
      },
      {
        qEn: "What is the hybridization of carbon atoms in acetylene (C_2H_2)?",
        qHi: "एसिटिलीन (C_2H_2) में कार्बन परमाणुओं का संकरण क्या होता है?",
        optionsEn: ["sp", "sp^2", "sp^3", "sp^3d"],
        optionsHi: ["sp", "sp^2", "sp^3", "sp^3d"],
        answer: 0,
        exp: "Explanation (En): Each carbon in acetylene forms a triple bond and a single bond, corresponding to linear geometry and sp hybridization.\nस्पष्टीकरण (Hi): एसिटिलीन में प्रत्येक कार्बन एक त्रिबंध और एक एकल बंध बनाता है, जिससे इसका संकरण sp होता है।"
      }
    ],
      "Acids, Bases and Salts": [
    {
      qEn: "According to the Arrhenius theory, what is an acid?",
      qHi: "अरेडियस (Arrhenius) सिद्धांत के अनुसार, अम्ल (acid) क्या है?",
      optionsEn: ["A substance that dissociates in water to yield hydrogen ions (H+)", "A substance that accepts protons", "An electron pair donor", "A substance that yields hydroxide ions"],
      optionsHi: ["वह पदार्थ जो पानी में घुलकर हाइड्रोजन आयन (H+) देता है", "वह पदार्थ जो प्रोटॉन स्वीकार करता है", "इलेक्ट्रॉन युग्म दाता", "हाइड्रॉक्साइड आयन देने वाला पदार्थ"],
      answer: 0,
      exp: "Explanation (En): Arrhenius defined acids as substances that produce hydrogen ions (H^+) in aqueous solution.\nस्पष्टीकरण (Hi): अरेडियस के अनुसार अम्ल वे यौगिक हैं जो जलीय विलयन में हाइड्रोजन आयन (H^+) उत्पन्न करते हैं।"
    },
    {
      qEn: "According to the Arrhenius theory, what is a base?",
      qHi: "अरेडियस सिद्धांत के अनुसार, क्षार (base) क्या है?",
      optionsEn: ["A substance that dissociates in water to yield hydroxide ions (OH-)", "A substance that donates protons", "An electron pair acceptor", "A substance that yields hydrogen ions"],
      optionsHi: ["वह पदार्थ जो पानी में घुलकर हाइड्रॉक्साइड आयन (OH-) देता है", "वह पदार्थ जो प्रोटॉन दान करता है", "इलेक्ट्रॉन युग्म ग्राही", "हाइड्रोजन आयन देने वाला पदार्थ"],
      answer: 0,
      exp: "Explanation (En): An Arrhenius base produces hydroxide ions (OH^-) when dissolved in water.\nस्पष्टीकरण (Hi): अरेडियस क्षार वे पदार्थ हैं जो पानी में घुलकर हाइड्रॉक्साइड आयन (OH^-) देते हैं।"
    },
    {
      qEn: "According to the Bronsted-Lowry theory, what is an acid?",
      qHi: "ब्रॉन्स्टेड-लोरी (Bronsted-Lowry) सिद्धांत के अनुसार, अम्ल क्या है?",
      optionsEn: ["A proton donor", "A proton acceptor", "An electron pair donor", "A hydroxide ion donor"],
      optionsHi: ["प्रोटॉन दाता (Proton donor)", "प्रोटॉन ग्राही", "इलेक्ट्रॉन युग्म दाता", "हाइड्रॉक्साइड आयन दाता"],
      answer: 0,
      exp: "Explanation (En): Bronsted-Lowry theory defines an acid as a proton (H^+) donor and a base as a proton acceptor.\nस्पष्टीकरण (Hi): ब्रॉन्स्टेड-लोरी संकल्पना के तहत अम्ल प्रोटॉन देने वाला (donor) और क्षार प्रोटॉन लेने वाला होता है।"
    },
    {
      qEn: "According to the Lewis theory, what is an acid?",
      qHi: "लुईस (Lewis) सिद्धांत के अनुसार, अम्ल किसे कहा जाता है?",
      optionsEn: ["An electron pair acceptor", "An electron pair donor", "A proton donor", "A proton acceptor"],
      optionsHi: ["इलेक्ट्रॉन युग्म ग्राही (Electron pair acceptor)", "इलेक्ट्रॉन युग्म दाता", "प्रोटॉन दाता", "प्रोटॉन ग्राही"],
      answer: 0,
      exp: "Explanation (En): Lewis theory defines a base as an electron pair donor and an acid as an electron pair acceptor.\nस्पष्टीकरण (Hi): लुईस सिद्धांत के अनुसार इलेक्ट्रॉन युग्म ग्रहण करने वाले स्पीशीज को अम्ल और दान करने वाले को क्षार कहते हैं।"
    },
    {
      qEn: "What is the pH scale range at standard temperature (25^\circ\text{C})?",
      qHi: "मानक तापमान (25^\circ\text{C}) पर पीएच (pH) पैमाने की सीमा कितनी होती है?",
      optionsEn: ["0 to 14", "1 to 10", "-1 to 7", "0 to 100"],
      optionsHi: ["0 से 14", "1 से 10", "-1 से 7", "0 से 100"],
      answer: 0,
      exp: "Explanation (En): The standard pH scale ranges from 0 to 14, where 7 is neutral, below 7 is acidic, and above 7 is basic.\nस्पष्टीकरण (Hi): मानक पीएच स्केल 0 से 14 तक होता है, जिसमें 7 उदासीन, 7 से कम अम्लीय और 7 से अधिक क्षारीय होता है।"
    },
    {
      qEn: "What is the pH of a neutral solution at 25^\circ\text{C}?",
      qHi: "25^\circ\text{C} पर एक उदासीन (neutral) विलयन का pH मान कितना होता है?",
      optionsEn: ["7", "0", "14", "1"],
      optionsHi: ["7", "0", "14", "1"],
      answer: 0,
      exp: "Explanation (En): At 25^\circ\text{C}, pure water and neutral solutions have a hydrogen ion concentration of 10^{-7} \\text{ M}, yielding a pH of exactly 7.\nस्पष्टीकरण (Hi): 25^\circ\text{C} पर शुद्ध जल या उदासीन विलयन का pH मान 7 होता है।"
    },
    {
      qEn: "What happens to the pH of a solution as its hydrogen ion concentration increases?",
      qHi: "किसी विलयन में हाइड्रोजन आयन की सांद्रता बढ़ने पर उसके pH मान पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
      optionsHi: ["घट जाता है (Decreases)", "बढ़ जाता है", "नियत रहता है", "शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): pH is defined as -\\log[H^+]. As [H^+] increases, the negative logarithm decreases, meaning pH drops.\nस्पष्टीकरण (Hi): pH का सूत्र -\\log[H^+] होता है। हाइड्रोजन आयन सांद्रता बढ़ने पर pH का मान घटता है (यानी अम्लता बढ़ती है)।"
    },
    {
      qEn: "Which of the following is a strong acid?",
      qHi: "निम्नलिखित में से कौन सा एक प्रबल अम्ल (strong acid) है?",
      optionsEn: ["Hydrochloric acid (HCl)", "Acetic acid (CH_3COOH)", "Carbonic acid (H_2CO_3)", "Phosphoric acid (H_3PO_4)"],
      optionsHi: ["हाइड्रॉक्लोरिक अम्ल (HCl)", "एसिटिक अम्ल", "कार्बोनिक अम्ल", "फॉस्फोरिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Hydrochloric acid (HCl), sulfuric acid (H_2SO_4), and nitric acid (HNO_3) are strong acids that completely dissociate in water.\nस्पष्टीकरण (Hi): HCl एक प्रबल अम्ल है क्योंकि यह पानी में पूरी तरह आयनित हो जाता है।"
    },
    {
      qEn: "Which of the following is a weak acid?",
      qHi: "निम्नलिखित में से कौन सा एक दुर्बल अम्ल (weak acid) है?",
      optionsEn: ["Acetic acid (CH_3COOH)", "Hydrochloric acid (HCl)", "Nitric acid (HNO_3)", "Sulfuric acid (H_2SO_4)"],
      optionsHi: ["एसिटिक अम्ल (CH_3COOH)", "हाइड्रॉक्लोरिक अम्ल", "नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Organic acids like acetic acid and citric acid only partially dissociate in water, making them weak acids.\nस्पष्टीकरण (Hi): एसिटिक अम्ल (CH_3COOH) पानी में आंशिक रूप से वियोजित होता है, इसलिए यह एक दुर्बल अम्ल है।"
    },
    {
      qEn: "What is formed when an acid reacts with a base (Neutralization reaction)?",
      qHi: "जब कोई अम्ल किसी क्षार के साथ अभिक्रिया करता है, तो क्या बनता है (उदासीनीकरण अभिक्रिया)?",
      optionsEn: ["Salt and water", "Hydrogen gas only", "Oxygen gas and salt", "Base and acid residue"],
      optionsHi: ["लवण और जल (Salt and water)", "केवल हाइड्रोजन गैस", "ऑक्सीजन गैस और लवण", "क्षार और अम्ल अवशेष"],
      answer: 0,
      exp: "Explanation (En): Acid + Base \\rightarrow Salt + Water. This is an exothermic neutralization reaction.\nस्पष्टीकरण (Hi): अम्ल और क्षार की परस्पर क्रिया से लवण और जल बनते हैं, जिसे उदासीनीकरण कहते हैं।"
    },
    {
      qEn: "What color does methyl orange indicator turn in an acidic medium?",
      qHi: "अम्लीय माध्यम में मेथिल ऑरेंज सूचक (indicator) का रंग कैसा हो जाता है?",
      optionsEn: ["Red / Pink", "Yellow", "Colorless", "Blue"],
      optionsHi: ["लाल या गुलाबी (Red / Pink)", "पीला", "रंगहीन", "नीला"],
      answer: 0,
      exp: "Explanation (En): Methyl orange turns red in acidic solutions and yellow in basic solutions.\nस्पष्टीकरण (Hi): मेथिल ऑरेंज अम्लीय माध्यम में लाल रंग और क्षारीय माध्यम में पीला रंग देता है।"
    },
    {
      qEn: "What color does phenolphthalein indicator turn in a basic (alkaline) medium?",
      qHi: "क्षारीय माध्यम में फिनोलफथलीन (phenolphthalein) सूचक का रंग कैसा होता है?",
      optionsEn: ["Pink (Magenta)", "Colorless", "Yellow", "Blue"],
      optionsHi: ["गुलाबी या मैजेंटा (Pink)", "रंगहीन", "पीला", "नीला"],
      answer: 0,
      exp: "Explanation (En): Phenolphthalein is colorless in acidic and neutral solutions, but turns pink/magenta in basic solutions.\nस्पष्टीकरण (Hi): फिनोलफथलीन अम्ल और उदासीन विलयन में रंगहीन रहता है, लेकिन क्षारीय माध्यम में गुलाबी (Pink) हो जाता है।"
    },
    {
      qEn: "What is the chemical formula of baking soda?",
      qHi: "बेकिंग सोडा (खाने वाला सोडा) का रासायनिक सूत्र क्या है?",
      optionsEn: ["NaHCO_3", "Na_2CO_3 \\cdot 10H_2O", "NaOH", "NaCl"],
      optionsHi: ["NaHCO_3 (सोडियम बाइकार्बोनेट)", "Na_2CO_3 \\cdot 10H_2O", "NaOH", "NaCl"],
      answer: 0,
      exp: "Explanation (En): Baking soda is sodium hydrogen carbonate or sodium bicarbonate (NaHCO_3).\nस्पष्टीकरण (Hi): बेकिंग सोडा सोडियम बाइकार्बोनेट (NaHCO_3) होता है।"
    },
    {
      qEn: "What is the chemical formula of washing soda?",
      qHi: "धोने के सोडे (Washing soda) का रासायनिक सूत्र क्या है?",
      optionsEn: ["Na_2CO_3 \\cdot 10H_2O", "NaHCO_3", "NaOH", "CaCO_3"],
      optionsHi: ["Na_2CO_3 \\cdot 10H_2O (सोडियम कार्बोनेट डिकाह हाइड्रेट)", "NaHCO_3", "NaOH", "CaCO_3"],
      answer: 0,
      exp: "Explanation (En): Washing soda is sodium carbonate decahydrate (Na_2CO_3 \\cdot 10H_2O).\nस्पष्टीकरण (Hi): धोने का सोडा सोडियम कार्बोनेट डेकाहाइड्रेट (Na_2CO_3 \\cdot 10H_2O) है।"
    },
    {
      qEn: "What is Plaster of Paris chemically known as, and what is its formula?",
      qHi: "प्लास्टर ऑफ पेरिस (Plaster of Paris) का रासायनिक नाम और सूत्र क्या है?",
      optionsEn: ["Calcium sulfate hemihydrate (CaSO_4 \\cdot \\frac{1}{2}H_2O)", "Calcium sulfate dihydrate (CaSO_4 \\cdot 2H_2O)", "Calcium carbonate (CaCO_3)", "Calcium oxide (CaO)"],
      optionsHi: ["कैल्शियम सल्फेट हेमीहाइड्रेट (CaSO_4 \\cdot \\frac{1}{2}H_2O)", "कैल्शियम सल्फेट डाइहाइड्रेट", "कैल्शियम कार्बोनेट", "कैल्शियम ऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): Plaster of Paris is calcium sulfate hemihydrate, prepared by heating gypsum.\nस्पष्टीकरण (Hi): प्लास्टर ऑफ पेरिस कैल्शियम सल्फेट हेमीहाइड्रेट (CaSO_4 \\cdot \\frac{1}{2}H_2O) होता है।"
    },
    {
      qEn: "What is the chemical formula of gypsum?",
      qHi: "जिप्सम (Gypsum) का रासायनिक सूत्र क्या है?",
      optionsEn: ["CaSO_4 \\cdot 2H_2O", "CaSO_4 \\cdot \\frac{1}{2}H_2O", "CaCO_3", "CaOCl_2"],
      optionsHi: ["CaSO_4 \\cdot 2H_2O (कैल्शियम सल्फेट डाइहाइड्रेट)", "CaSO_4 \\cdot \\frac{1}{2}H_2O", "CaCO_3", "CaOCl_2"],
      answer: 0,
      exp: "Explanation (En): Gypsum is calcium sulfate dihydrate (CaSO_4 \\cdot 2H_2O).\nस्पष्टीकरण (Hi): जिप्सम कैल्शियम सल्फेट डाइहाइड्रेट (CaSO_4 \\cdot 2H_2O) है।"
    },
    {
      qEn: "What is bleaching powder chemically known as?",
      qHi: "ब्लीचिंग पाउडर (Bleaching powder) का रासायनिक नाम क्या है?",
      optionsEn: ["Calcium oxychloride (CaOCl_2)", "Calcium chloride (CaCl_2)", "Calcium hypochlorite only", "Sodium hypochlorite"],
      optionsHi: ["कैल्शियम ऑक्सीक्लोराइड (CaOCl_2)", "कैल्शियम क्लोराइड", "कैल्शियम हाइपोक्लोराइट", "सोडियम हाइपोक्लोराइट"],
      answer: 0,
      exp: "Explanation (En): Bleaching powder is calcium oxychloride (CaOCl_2), used for disinfecting water and bleaching textiles.\nस्पष्टीकरण (Hi): ब्लीचिंग पाउडर कैल्शियम ऑक्सीक्लोराइड (CaOCl_2) होता है।"
    },
    {
      qEn: "What is caustic soda chemically?",
      qHi: "कॉस्टिक सोडा (Caustic soda) किसे कहते हैं?",
      optionsEn: ["Sodium hydroxide (NaOH)", "Sodium carbonate (Na_2CO_3)", "Sodium chloride (NaCl)", "Potassium hydroxide (KOH)"],
      optionsHi: ["सोडियम हाइड्रोक्साइड (NaOH)", "सोडियम कार्बोनेट", "सोडियम क्लोराइड", "पोटेशियम हाइड्रोक्साइड"],
      answer: 0,
      exp: "Explanation (En): Sodium hydroxide (NaOH) is a strong alkali commonly known as caustic soda.\nस्पष्टीकरण (Hi): सोडियम हाइड्रोक्साइड (NaOH) को कॉस्टिक सोडा कहा जाता है जो एक प्रबल क्षार है।"
    },
    {
      qEn: "What is caustic potash chemically?",
      qHi: "कॉस्टिक पोटाश (Caustic potash) किसे कहते हैं?",
      optionsEn: ["Potassium hydroxide (KOH)", "Sodium hydroxide (NaOH)", "Calcium hydroxide (Ca(OH)_2)", "Ammonium hydroxide (NH_4OH)"],
      optionsHi: ["पोटेशियम हाइड्रोक्साइड (KOH)", "सोडियम हाइड्रोक्साइड", "कैल्शियम हाइड्रोक्साइड", "अमोनियम हाइड्रोक्साइड"],
      answer: 0,
      exp: "Explanation (En): Potassium hydroxide (KOH) is known as caustic potash.\nस्पष्टीकरण (Hi): पोटेशियम हाइड्रोक्साइड (KOH) को कॉस्टिक पोटाश कहा जाता है।"
    },
    {
      qEn: "What acid is present in bee sting or ant sting that causes irritation and pain?",
      qHi: "मधुमक्खी या चींटी के डंक में कौन सा अम्ल होता है जिसके कारण जलन और दर्द होता है?",
      optionsEn: ["Formic acid (Methanoic acid)", "Acetic acid", "Citric acid", "Oxalic acid"],
      optionsHi: ["फार्मिक अम्ल या मेथेनोइक अम्ल (HCOOH)", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ऑक्जेलिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Ant and bee stings inject formic acid (methanoic acid), causing pain and irritation.\nस्पष्टीकरण (Hi): चींटी और मधुमक्खी के डंक में फार्मिक अम्ल (मेथेनोइक अम्ल) होता है।"
    },
    {
      qEn: "What acid is found in lemons and oranges?",
      qHi: "नींबू और संतरे में कौन सा अम्ल पाया जाता है?",
      optionsEn: ["Citric acid", "Lactic acid", "Tartaric acid", "Malic acid"],
      optionsHi: ["साइट्रिक अम्ल (Citric acid)", "लैतिक अम्ल", "टार्टरिक अम्ल", "मैलिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Citrus fruits like lemons and oranges are rich in citric acid.\nस्पष्टीकरण प्र(Hi): नींबू, संतरा जैसे खट्टे फलों में साइट्रिक अम्ल पाया जाता है।"
    },
    {
      qEn: "What acid is present in sour milk or curd?",
      qHi: "खट्टे दूध या दही (curd) में कौन सा अम्ल पाया जाता है?",
      optionsEn: ["Lactic acid", "Acetic acid", "Citric acid", "Butyric acid"],
      optionsHi: ["लेक्टिक अम्ल (Lactic acid)", "एसिटिक अम्ल", "साइट्रिक अम्ल", "ब्यूटिरिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Lactic acid is produced when milk curdles due to bacterial fermentation.\nस्पष्टीकरण (Hi): दूध के दही बनने पर उसमें लेक्टिक अम्ल की मात्रा होती है।"
    },
    {
      qEn: "What acid is found in tamarind, grapes, and un-ripened mangoes?",
      qHi: "इमली, अंगूर और कच्चे आम में कौन सा अम्ल पाया जाता है?",
      optionsEn: ["Tartaric acid", "Malic acid", "Citric acid", "Formic acid"],
      optionsHi: ["टार्टरिक अम्ल (Tartaric acid)", "मैलिक अम्ल", "साइट्रिक अम्ल", "फार्मिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Tamarind and grapes contain tartaric acid.\nस्पष्टीकरण (Hi): इमली और अंगूर में टार्टरिक अम्ल प्रचुर मात्रा में होता है।"
    },
    {
      qEn: "What is buffer solution?",
      qHi: "बफर विलयन (Buffer solution) किसे कहते हैं?",
      optionsEn: ["A solution that resists changes in pH when small amounts of acid or base are added", "A solution with pH exactly 7", "A strong acid solution", "A saturated salt solution"],
      optionsHi: ["वह विलयन जो थोड़ा सा अम्ल या क्षार मिलाने पर अपने pH मान में परिवर्तन का विरोध करता है", "वह विलयन जिसका pH ठीक 7 हो", "प्रबल अम्ल विलयन", "संतृप्त लवण विलयन"],
      answer: 0,
      exp: "Explanation (En): Buffer solutions maintain a nearly constant pH when small amounts of strong acids or bases are added.\nस्पष्टीकरण (Hi): बफर विलयन बाहरी अम्ल या क्षार मिलाने पर भी अपने pH मान को बदलने नहीं देता है।"
    },
    {
      qEn: "What happens during the chlor-alkali process?",
      qHi: "क्लोर-क्षार प्रक्रिया (Chlor-alkali process) के दौरान क्या उत्पाद प्राप्त होते हैं?",
      optionsEn: ["Sodium hydroxide, Chlorine gas, and Hydrogen gas", "Sodium chloride and water", "Hydrochloric acid and oxygen", "Bleaching powder"],
      optionsHi: ["सोडियम हाइड्रोक्साइड, क्लोरीन गैस और हाइड्रोजन गैस", "सोडियम क्लोराइड और पानी", "हाइड्रॉक्लोरिक अम्ल और ऑक्सीजन", "ब्लीचिंग पाउडर"],
      answer: 0,
      exp: "Explanation (En): Electrolysis of brine (NaCl solution) yields sodium hydroxide, chlorine gas at anode, and hydrogen gas at cathode.\nस्पष्टीकरण (Hi): ब्राइन (नमक के घोल) के विद्युत अपघटन से NaOH, क्लोरीन गैस और हाइड्रोजन गैस बनती है।"
    },
    {
      qEn: "What is the pH of human blood approximately?",
      qHi: "मानव रक्त (blood) का pH मान लगभग कितना होता है?",
      optionsEn: ["7.35 to 7.45 (slightly alkaline)", "6.5 to 6.8", "7.0 (neutral)", "8.0 to 8.5"],
      optionsHi: ["7.35 से 7.45 (हल्का क्षारीय)", "6.5 से 6.8", "7.0 (उदासीन)", "8.0 से 8.5"],
      answer: 0,
      exp: "Explanation (En): Human blood is slightly alkaline with a normal pH range of 7.35 to 7.45.\nस्पष्टीकरण (Hi): मानव रक्त हल्का क्षारीय होता है और इसका pH मान 7.35 से 7.45 के बीच होता है।"
    },
    {
      qEn: "What causes acid rain?",
      qHi: "अम्लीय वर्षा (Acid rain) का मुख्य कारण क्या है?",
      optionsEn: ["Emission of sulfur dioxide (SO_2) and nitrogen oxides (NO_x) from industries and vehicles", "Ozone depletion", "Carbon dioxide emission only", "Radioactive fallout"],
      optionsHi: ["उद्योगों और वाहनों से सल्फर डाइऑक्साइड (SO_2) और नाइट्रोजन ऑक्साइड (NO_x) का उत्सर्जन", "ओजोन क्षरण", "केवल कार्बन डाइऑक्साइड", "रेडियोधर्मी पतन"],
      answer: 0,
      exp: "Explanation (En): Sulfur dioxide and nitrogen oxides react with atmospheric moisture to form sulfuric and nitric acids, causing acid rain.\nस्पष्टीकरण (Hi): कारखानों और वाहनों से निकलने वाले SO_2 और NO_2 बारिश के पानी से मिलकर सल्फ्यूरिक और नाइट्रिक अम्ल बनाते हैं।"
    },
    {
      qEn: "What is water of crystallization?",
      qHi: "क्रिस्टलन का जल (Water of crystallization) किसे कहते हैं?",
      optionsEn: ["Fixed number of water molecules chemically bound in crystalline structure of a salt", "Free water mixed in solution", "Water formed during neutralization", "Moisture in air"],
      optionsHi: ["लवण की क्रिस्टलीय संरचना में बंधे निश्चित संख्या में पानी के अणु", "घोल में मिला हुआ मुफ्त पानी", "उदासीनीकरण के दौरान बना पानी", "हवा की नमी"],
      answer: 0,
      exp: "Explanation (En): Water of crystallization is the fixed stoichiometric water molecules associated with crystal lattice (e.g., CuSO_4 \cdot 5H_2O).\nस्पष्टीकरण (Hi): लवण के एक सूत्र इकाई में मौजूद निश्चित जल अणुओं को क्रिस्टलन का जल कहते हैं (जैसे कॉपर सल्फेट पेंटाहाइड्रेट)।"
    },
    {
      qEn: "What is an amphoteric substance?",
      qHi: "उभयधर्मी (Amphoteric) पदार्थ किसे कहते हैं?",
      optionsEn: ["A substance that can act as both an acid and a base", "A substance that is neutral", "A substance that dissolves in oil", "A substance that cannot conduct electricity"],
      optionsHi: ["वह पदार्थ जो अम्ल और क्षार दोनों की तरह व्यवहार कर सकता है", "जो उदासीन हो", "जो तेल में घुले", "जो बिजली न चलाए"],
      answer: 0,
      exp: "Explanation (En): Amphoteric substances like water, zinc oxide, and aluminum oxide can react with both acids and bases.\nस्पष्टीकरण (Hi): जो यौगिक अम्ल और क्षार दोनों से प्रतिक्रिया कर सकें उन्हें उभयधर्मी (जैसे ZnO, Al_2O_3) कहते हैं।"
    },
    {
      qEn: "What is the common name of solid carbon dioxide used as refrigerant?",
      qHi: "प्रशीतक (refrigerant) के रूप में इस्तेमाल होने वाली ठोस कार्बन डाइऑक्साइड का सामान्य नाम क्या है?",
      optionsEn: ["Dry ice", "Quicklime", "Baking soda", "Borax"],
      optionsHi: ["शुष्क बर्फ (Dry ice)", "बिना बुझा चूना", "बेकिंग सोडा", "सुहागा"],
      answer: 0,
      exp: "Explanation (En): Solid carbon dioxide is called dry ice because it turns directly into gas without melting into liquid.\nस्पष्टीकरण (Hi): ठोस कार्बन डाइऑक्साइड को शुष्क बर्फ (Dry ice) कहा जाता है।"
    }
  ],
    "Metals and Non-metals": [
    {
      qEn: "Which of the following metals is liquid at room temperature?",
      qHi: "निम्नलिखित में से कौन सी धातु कमरे के तापमान पर द्रव (liquid) अवस्था में होती है?",
      optionsEn: ["Mercury (Hg)", "Bromine (Br)", "Gallium (Ga)", "Sodium (Na)"],
      optionsHi: ["पारा या मर्करी (Hg)", "ब्रोमीन (Br)", "गैलियम (Ga)", "सोडियम (Na)"],
      answer: 0,
      exp: "Explanation (En): Mercury is the only metallic element that is liquid at standard room temperature and pressure.\nस्पष्टीकरण (Hi): पारा (Mercury) एकमात्र ऐसी धातु है जो सामान्य तापमान पर द्रव अवस्था में पाई जाती है (ब्रोमीन द्रव अधातु है)।"
    },
    {
      qEn: "Which of the following non-metals is liquid at room temperature?",
      qHi: "निम्नलिखित में से कौन सा अधातु कमरे के तापमान पर द्रव अवस्था में होता है?",
      optionsEn: ["Bromine (Br)", "Mercury (Hg)", "Chlorine (Cl)", "Carbon (C)"],
      optionsHi: ["ब्रोमीन (Bromine - Br)", "पारा (Hg)", "क्लोरीन (Cl)", "कार्बन (C)"],
      answer: 0,
      exp: "Explanation (En): Bromine is the only non-metallic element that is liquid at room temperature.\nस्पष्टीकरण (Hi): ब्रोमीन एकमात्र ऐसा अधातु है जो कमरे के तापमान पर तरल रूप में रहता है।"
    },
    {
      qEn: "Which metal is the best conductor of electricity?",
      qHi: "कौन सी धातु विद्युत की सबसे अच्छी सुचालक (best conductor) होती है?",
      optionsEn: ["Silver (Ag)", "Copper (Cu)", "Gold (Au)", "Aluminium (Al)"],
      optionsHi: ["चांदी (Silver - Ag)", "तांबा (Copper)", "सोना (Gold)", "एल्युमीनियम (Al)"],
      answer: 0,
      exp: "Explanation (En): Silver is the best electrical and thermal conductor among all metals.\nस्पष्टीकरण (Hi): सभी धातुओं में चांदी (Silver) विद्युत और ऊष्मा की सबसे अच्छी सुचालक होती है।"
    },
    {
      qEn: "Why is copper commonly used for electrical wiring despite silver being a better conductor?",
      qHi: "चांदी बेहतर सुचालक होने के बावजूद बिजली के तारों के लिए आमतौर पर तांबे (Copper) का उपयोग क्यों किया जाता है?",
      optionsEn: ["Because copper is much cheaper and abundantly available while still being a very good conductor", "Because copper melts easily", "Because silver is a non-metal", "Because copper is liquid"],
      optionsHi: ["क्योंकि तांबा काफी सस्ता और प्रचुर मात्रा में उपलब्ध है जबकि यह बहुत अच्छा सुचालक भी है", "क्योंकि तांबा आसानी से पिघल जाता है", "क्योंकि चांदी एक अधातु है", "क्योंकि तांबा तरल होता है"],
      answer: 0,
      exp: "Explanation (En): Although silver is a superior conductor, copper is much more cost-effective for commercial wiring.\nस्पष्टीकरण (Hi): चांदी बहुत महंगी है, इसलिए लागत कम रखने के लिए तांबे का उपयोग किया जाता है जो कि एक अच्छा सुचालक भी है।"
    },
    {
      qEn: "Which metal is the poorest conductor of heat among common metals?",
      qHi: "सामान्य धातुओं में ऊष्मा का सबसे खराब सुचालक (ку-कुचालक) कौन सी धातु है?",
      optionsEn: ["Lead (Pb) and Mercury (Hg)", "Copper and Silver", "Iron and Zinc", "Aluminium and Gold"],
      optionsHi: ["सीसा (Pb) और पारा (Hg)", "तांबा और चांदी", "लोहा और जस्ता", "एल्युमीनियम और सोना"],
      answer: 0,
      exp: "Explanation (En): Lead and mercury exhibit exceptionally low thermal and electrical conductivity compared to other metals.\nस्पष्टीकरण (Hi): सीसा (Lead) और पारा (Mercury) अन्य धातुओं की तुलना में ऊष्मा और विद्युत के बहुत खराब चालक होते हैं।"
    },
    {
      qEn: "Which metal can be cut easily with a knife due to its softness?",
      qHi: "अपनी अत्यधिक नरमी के कारण किस धातु को चाकू से आसानी से काटा जा सकता है?",
      optionsEn: ["Sodium (Na) and Potassium (K)", "Iron and Copper", "Magnesium and Calcium", "Gold and Silver"],
      optionsHi: ["सोडियम (Na) और पोटेशियम (K)", "लोहा और तांबा", "मैग्नीशियम और कैल्शियम", "सोना और चांदी"],
      answer: 0,
      exp: "Explanation (En): Alkali metals like sodium and potassium have very weak metallic bonding, making them soft enough to cut with a knife.\nस्पष्टीकरण (Hi): सोडियम और पोटेशियम इतनी नरम धातुएं हैं कि इन्हें चाकू से आसानी से काटा जा सकता है।"
    },
    {
      qEn: "Which non-metal is a good conductor of electricity?",
      qHi: "कौन सा अधातु विद्युत का अच्छा सुचालक होता है?",
      optionsEn: ["Graphite (an allotrope of carbon)", "Diamond", "Sulfur", "Phosphorus"],
      optionsHi: ["ग्रेफाइट (कार्बन का अपरूप)", "हीरा", "सल्फर", "फास्फोरस"],
      answer: 0,
      exp: "Explanation (En): Graphite contains free delocalized electrons in its layered structure, allowing it to conduct electricity.\nस्पष्टीकरण (Hi): ग्रेफाइट में मुक्त इलेक्ट्रॉन पाए जाते हैं, जिसके कारण यह अधातु होते हुए भी बिजली का चालन करता है।"
    },
    {
      qEn: "What is the hardest naturally occurring substance known?",
      qHi: "प्रकृति में पाया जाने वाला सबसे कठोर पदार्थ कौन सा है?",
      optionsEn: ["Diamond (an allotrope of carbon)", "Graphite", "Iron", "Platinum"],
      optionsHi: ["हीरा (Diamond - कार्बन का अपरूप)", "ग्रेफाइट", "लोहा", "प्लैटिनम"],
      answer: 0,
      exp: "Explanation (En): Diamond, an allotrope of carbon, has a rigid covalent 3D network structure making it the hardest natural substance.\nस्पष्टीकरण (Hi): कार्बन का अपरूप हीरा प्राकृतिक रूप से ज्ञात सबसे कठोर पदार्थ है।"
    },
    {
      qEn: "What are amphoteric oxides?",
      qHi: "उभयधर्मी ऑक्साइड (Amphoteric oxides) किन्हें कहते हैं?",
      optionsEn: ["Oxides that react with both acids and bases to form salt and water", "Oxides that only react with acids", "Oxides that do not react with anything", "Neutral oxides"],
      optionsHi: ["वे ऑक्साइड जो अम्ल और क्षार दोनों के साथ अभिक्रिया करके लवण और जल बनाते हैं", "जो केवल अम्ल से अभिक्रिया करते हैं", "जो किसी से प्रतिक्रिया नहीं करते", "उदासीन ऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): Amphoteric oxides (such as Al_2O_3 and ZnO) show both acidic and basic properties.\nस्पष्टीकरण (Hi): जो ऑक्साइड अम्ल और क्षार दोनों से क्रिया करके लवण व पानी बनाते हैं, उन्हें उभयधर्मी ऑक्साइड (जैसे Al_2O_3, ZnO) कहते हैं।"
    },
    {
      qEn: "Which of the following is an amphoteric oxide?",
      qHi: "निम्नलिखित में से कौन सा एक उभयधर्मी ऑक्साइड है?",
      optionsEn: ["Zinc oxide (ZnO) and Aluminium oxide (Al_2O_3)", "Carbon dioxide (CO_2)", "Sodium oxide (Na_2O)", "Sulfur dioxide (SO_2)"],
      optionsHi: ["जिंक ऑक्साइड (ZnO) और एल्युमीनियम ऑक्साइड (Al_2O_3)", "कार्बन डाइऑक्साइड", "सोडियम ऑक्साइड", "सल्फर डाइऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): ZnO and Al_2O_3 react with both acids and bases, classifying them as amphoteric oxides.\nस्पष्टीकरण (Hi): ZnO और Al_2O_3 दोनों अम्ल और क्षार दोनों के साथ प्रतिक्रिया करते हैं।"
    },
    {
      qEn: "What happens when metals react with dilute acids?",
      qHi: "जब धातुएं तनु अम्लों (dilute acids) के साथ अभिक्रिया करती हैं, तो क्या उत्पन्न होता है?",
      optionsEn: ["Salt and Hydrogen gas (H_2)", "Only water", "Chlorine gas", "Carbon dioxide"],
      optionsHi: ["लवण और हाइड्रोजन गैस (H_2)", "केवल पानी", "क्लोरीन गैस", "कार्बन डाइऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): Metal + Dilute Acid \\rightarrow Salt + Hydrogen gas (except for less reactive metals like copper, silver, gold).\nस्पष्टीकरण (Hi): सामान्यतः धातुएं तनु अम्लों से क्रिया करके लवण और हाइड्रोजन गैस बनाती हैं।"
    },
    {
      qEn: "Why does copper not evolve hydrogen gas when treated with dilute hydrochloric acid?",
      qHi: "तनु हाइड्रोक्लोरिक अम्ल के साथ अभिक्रिया कराने पर तांबा (Copper) हाइड्रोजन गैस क्यों नहीं मुक्त करता है?",
      optionsEn: ["Because copper is less reactive than hydrogen and cannot displace it from acids", "Because copper is a non-metal", "Because copper reacts violently", "Because copper dissolves completely"],
      optionsHi: ["क्योंकि तांबा हाइड्रोजन से कम सक्रिय है और इसे अम्लों से विस्थापित नहीं कर सकता", "क्योंकि तांबा एक अधातु है", "क्योंकि तांबा बहुत तेज प्रतिक्रिया करता है", "क्योंकि तांबा पूरी तरह घुल जाता है"],
      answer: 0,
      exp: "Explanation (En): Metals placed below hydrogen in the reactivity series (like Cu, Ag, Au) cannot displace hydrogen from dilute acids.\nस्पष्टीकरण (Hi): सक्रियता श्रेणी में हाइड्रोजन से नीचे होने के कारण तांबा अम्लों से हाइड्रोजन को विस्थापित नहीं कर सकता।"
    },
    {
      qEn: "What is Aqua Regia (Royal Water)?",
      qHi: "राजजल या एक्वा रेजिया (Aqua Regia) क्या होता है?",
      optionsEn: ["A freshly prepared 3:1 mixture of concentrated hydrochloric acid and concentrated nitric acid", "A mixture of sulfuric acid and water", "A solution of sodium hydroxide", "Liquid ammonia"],
      optionsHi: ["सांद्र हाइड्रोक्लोरिक अम्ल और सांद्र नाइट्रिक अम्ल का 3:1 का ताजा मिश्रण", "सल्फ्यूरिक एसिड और पानी का मिश्रण", "सोडियम हाइड्रोक्साइड का घोल", "तरल अमोनिया"],
      answer: 0,
      exp: "Explanation (En): Aqua Regia is a highly corrosive 3:1 mixture of conc. HCl and conc. HNO_3 capable of dissolving gold and platinum.\nस्पष्टीकरण (Hi): एक्वा रेजिया सांद्र HCl (3 भाग) और सांद्र HNO_3 (1 भाग) का मिश्रण है जो सोने और प्लेटिनम जैसी धातुओं को भी गला सकता है।"
    },
    {
      qEn: "What is the reactivity series of metals?",
      qHi: "धातुओं की सक्रियता श्रेणी (Reactivity series) क्या है?",
      optionsEn: ["An arrangement of metals in order of decreasing chemical reactivity", "An arrangement based on atomic mass only", "A list of non-metals", "A temperature scale"],
      optionsHi: ["रासायनिक प्रतिक्रियाशीलता के घटते क्रम में धातुओं की एक व्यवस्था", "केवल परमाणु द्रव्यमान पर आधारित व्यवस्था", "अधातुओं की सूची", "तापमान पैमाना"],
      answer: 0,
      exp: "Explanation (En): The reactivity series ranks metals from most reactive (like potassium) to least reactive (like platinum).\nस्पष्टीकरण (Hi): सक्रियता श्रेणी वह सूची है जिसमें धातुओं को उनकी घटती हुई रासायनिक सक्रियता के आधार पर व्यवस्थित किया जाता है।"
    },
    {
      qEn: "Which metal is the most reactive in the standard reactivity series?",
      qHi: "मानक सक्रियता श्रेणी में सबसे अधिक सक्रिय धातु कौन सी है?",
      optionsEn: ["Potassium (K)", "Gold (Au)", "Iron (Fe)", "Copper (Cu)"],
      optionsHi: ["पोटेशियम (Potassium - K)", "सोना (Au)", "लोहा (Fe)", "तांबा (Cu)"],
      answer: 0,
      exp: "Explanation (En): Potassium sits at the very top of the reactivity series, making it extremely reactive.\nस्पष्टीकरण (Hi): पोटेशियम सक्रियता श्रेणी में सबसे ऊपर स्थित है, अतः यह सबसे अधिक प्रतिक्रियाशील धातु है।"
    },
    {
      qEn: "How is a more reactive metal able to displace a less reactive metal from its salt solution?",
      qHi: "कोई अधिक सक्रिय धातु किसी कम सक्रिय धातु को उसके लवण विलयन से कैसे विस्थापित करती है?",
      optionsEn: ["By displacement reaction (due to higher tendency to lose electrons)", "By neutralization", "By absorbing heat", "By melting"],
      optionsHi: ["विस्थापन अभिक्रिया द्वारा (इलेक्ट्रॉन खोने की उच्च प्रवृत्ति के कारण)", "उदासीनीकरण द्वारा", "ऊष्मा अवशोषित करके", "पिघलने द्वारा"],
      answer: 0,
      exp: "Explanation (En): A more reactive metal displaces a less reactive metal from its aqueous salt solution in a single displacement reaction.\nस्पष्टीकरण (Hi): अधिक सक्रिय धातु अपने से कम सक्रिय धातु को उसके यौगिक के घोल से विस्थापित कर देती है।"
    },
    {
      qEn: "What is an ore?",
      qHi: "अयस्क (Ore) किसे कहते हैं?",
      optionsEn: ["A mineral from which a metal can be extracted profitably and conveniently", "Any rock found on earth", "Pure metal block", "Synthetic chemical"],
      optionsHi: ["वह खनिज जिससे किसी धातु को आसानी से और लाभदायक तरीके से निकाला जा सके", "पृथ्वी पर मिलने वाली कोई भी चट्टान", "शुद्ध धातु ब्लॉक", "कृत्रिम रसायन"],
      answer: 0,
      exp: "Explanation (En): Minerals that contain a high percentage of metal and from which the metal can be economically extracted are called ores.\nस्पष्टीकरण (Hi): जिन खनिजों से धातुओं को कम लागत और आसानी से प्राप्त किया जा सकता है, उन्हें अयस्क कहते हैं।"
    },
    {
      qEn: "What process is used to convert sulfide ores into oxides during metallurgy?",
      qHi: "धातुकर्म (metallurgy) के दौरान सल्फाइड अयस्कों को ऑक्साइड में बदलने के लिए किस प्रक्रिया का उपयोग किया जाता है?",
      optionsEn: ["Roasting (heating in the presence of excess air)", "Calcination", "Reduction", "Refining"],
      optionsHi: ["भर्जन या रोस्टिंग (अतिरिक्त हवा की उपस्थिति में गर्म करना)", "निस्तापन (Calcination)", "अपचयन", "परिष्करण"],
      answer: 0,
      exp: "Explanation (En): Roasting involves heating sulfide ores strongly in the presence of excess air to convert them into metal oxides.\nस्पष्टीकरण (Hi): सल्फाइड अयस्क को वायु की अधिकता में तेज गर्म करके ऑक्साइड में बदलने की प्रक्रिया को भर्जन (Roasting) कहते हैं।"
    },
    {
      qEn: "What process is used to convert carbonate ores into oxides during metallurgy?",
      qHi: "कार्बोनेट अयस्कों को ऑक्साइड में बदलने के लिए किस प्रक्रिया का उपयोग किया जाता है?",
      optionsEn: ["Calcination (heating in the absence or limited supply of air)", "Roasting", "Electrolysis", "Distillation"],
      optionsHi: ["निस्तापन या कैल्सीनेशन (वायु की अनुपस्थिति या सीमित मात्रा में गर्म करना)", "भर्जन", "विद्युत अपघटन", "आसवन"],
      answer: 0,
      exp: "Explanation (En): Calcination involves heating carbonate ores in limited air or absence of air to expel carbon dioxide and form oxides.\nस्पष्टीकरण (Hi): कार्बोनेट अयस्क को वायु की सीमित मात्रा में गर्म करके ऑक्साइड में बदलने की प्रक्रिया को निस्तापन (Calcination) कहते हैं।"
    },
    {
      qEn: "What is an alloy?",
      qHi: "मिश्र धातु (Alloy) क्या होती है?",
      optionsEn: ["A homogeneous mixture of two or more metals, or a metal and a non-metal", "A pure chemical compound", "An ionic salt solution", "A radioactive mineral"],
      optionsHi: ["दो या दो से अधिक धातुओं, या एक धातु और एक अधातु का समांगी मिश्रण", "शुद्ध रासायनिक यौगिक", "आयनिक लवण घोल", "रेडियोधर्मी खनिज"],
      answer: 0,
      exp: "Explanation (En): Alloys are solid solutions made by mixing molten metals thoroughly, which enhances strength, corrosion resistance, etc.\nस्पष्टीकरण (Hi): दो या दो से अधिक धातुओं (या धातु व अधातु) के समांगी मिश्रण को मिश्र धातु (Alloy) कहते हैं।"
    },
    {
      qEn: "What is brass an alloy of?",
      qHi: "पीतल (Brass) किन धातुओं की मिश्र धातु है?",
      optionsEn: ["Copper and Zinc", "Copper and Tin", "Copper and Nickel", "Iron and Carbon"],
      optionsHi: ["तांबा और जस्ता (Copper and Zinc)", "तांबा और टिन", "तांबा और निकल", "लोहा और कार्बन"],
      answer: 0,
      exp: "Explanation (En): Brass is an alloy composed of copper (\sim 70\%) and zinc (\sim 30\%).\nस्पष्टीकरण (Hi): पीतल तांबा (Copper) और जस्ता (Zinc) की मिश्र धातु है।"
    },
    {
      qEn: "What is bronze an alloy of?",
      qHi: "कांस्य या कांसा (Bronze) किन धातुओं की मिश्र धातु है?",
      optionsEn: ["Copper and Tin", "Copper and Zinc", "Lead and Tin", "Iron and Chromium"],
      optionsHi: ["तांबा और टिन (Copper and Tin)", "तांबा और जस्ता", "सीसा और टिन", "लोहा और क्रोमियम"],
      answer: 0,
      exp: "Explanation (En): Bronze is primarily an alloy of copper and tin.\nस्पष्टीकरण (Hi): कांसा मुख्य रूप से तांबा (Copper) और टिन (Tin) की मिश्र धातु है।"
    },
    {
      qEn: "What is solder (used for soldering electrical wires) an alloy of?",
      qHi: "सोल्डर (टांका लगाने वाला तार) किन धातुओं की मिश्र धातु है?",
      optionsEn: ["Lead and Tin", "Copper and Zinc", "Iron and Carbon", "Gold and Silver"],
      optionsHi: ["सीसा और टिन (Lead and Tin)", "तांबा और जस्ता", "लोहा और कार्बन", "सोना और चांदी"],
      answer: 0,
      exp: "Explanation (En): Solder is an alloy of lead (Pb) and tin (Sn), characterized by a low melting point.\nस्पष्टीकरण (Hi): सोल्डर सीसा (Lead) और टिन (Tin) की मिश्र धातु होती है जिसका गलनांक कम होता है।"
    },
    {
      qEn: "What is amalgam?",
      qHi: "अमलगम (Amalgam) किसे कहा जाता है?",
      optionsEn: ["An alloy of mercury with another metal", "An alloy of iron and carbon", "A solution of salt in water", "Pure gold"],
      optionsHi: ["पारे (Mercury) की किसी अन्य धातु के साथ मिश्र धातु", "लोहा और कार्बन की मिश्र धातु", "पानी में नमक का घोल", "शुद्ध सोना"],
      answer: 0,
      exp: "Explanation (En): An amalgam is any alloy formed by combining mercury with another metal (such as silver amalgam used in dentistry).\nस्पष्टीकरण (Hi): पारे (Mercury) के साथ किसी अन्य धातु की मिश्र धातु को अमलगम कहते हैं।"
    },
    {
      qEn: "Which metal does not form an amalgam?",
      qHi: "कौन सी धातु अमलगम नहीं बनाती है?",
      optionsEn: ["Iron (Fe)", "Gold (Au)", "Silver (Ag)", "Copper (Cu)"],
      optionsHi: ["लोहा (Iron - Fe)", "सोना", "चांदी", "तांबा"],
      answer: 0,
      exp: "Explanation (En): Iron does not dissolve in mercury and therefore does not form an amalgam, which is why iron containers are used to store and transport mercury.\nस्पष्टीकरण (Hi): लोहा पारे के साथ अमलगम नहीं बनाता है, इसीलिए पारे को लोहे के बर्तनों में रखा जाता है।"
    },
    {
      qEn: "What is corrosion of metals?",
      qHi: "धातुओं का संक्षारण (Corrosion) क्या है?",
      optionsEn: ["The gradual eating away of metals by the action of atmospheric moisture, acids, and gases", "The melting of metals due to heat", "The polishing of metal surfaces", "Evaporation of metals"],
      optionsHi: ["वायुमंडलीय नमी, अम्ल और गैसों की क्रिया द्वारा धातुओं का धीरे-धीरे क्षय होना", "गर्मी के कारण धातुओं का पिघलना", "धातु सतहों की पॉलिशिंग", "धातुओं का वाष्पीकरण"],
      answer: 0,
      exp: "Explanation (En): Corrosion is the chemical or electrochemical destruction of metals when exposed to oxygen, moisture, and pollutants.\nस्पष्टीकरण (Hi): हवा, नमी और रसायनों के संपर्क में आने से धातुओं का धीरे-धीरे नष्ट होना संक्षारण कहलाता है (जैसे लोहे पर जंग लगना)।"
    },
    {
      qEn: "What is the chemical formula of rust (hydrated ferric oxide)?",
      qHi: "जंग (Rust - हाइड्रेटेड फेरिक ऑक्साइड) का रासायनिक सूत्र क्या है?",
      optionsEn: ["Fe_2O_3 \\cdot xH_2O", "FeO", "Fe3O_4", "FeSO_4"],
      optionsHi: ["Fe_2O_3 \\cdot xH_2O", "FeO", "Fe_3O_4", "FeSO_4"],
      answer: 0,
      exp: "Explanation (En): Rust is hydrated iron(III) oxide with variable water content, represented as Fe_2O_3 \\cdot xH_2O.\nस्पष्टीकरण (Hi): लोहे पर लगने वाली जंग हाइड्रेटेड फेरिक ऑक्साइड होती है जिसका सूत्र Fe_2O_3 \\cdot xH_2O है।"
    },
    {
      qEn: "What is galvanization?",
      qHi: "गैल्वेनीकरण (Galvanization) क्या है?",
      optionsEn: ["A method of protecting steel and iron from rusting by coating them with a thin layer of zinc", "Coating iron with copper", "Painting iron with plastic", "Electroplating with gold"],
      optionsHi: ["स्टील और लोहे को जंग से बचाने के लिए उन पर जस्ते (Zinc) की पतली परत चढ़ाना", "लोहे पर तांबे की परत चढ़ाना", "प्लास्टिक से पेंट करना", "सोने से इलेक्ट्रोप्लेटिंग करना"],
      answer: 0,
      exp: "Explanation (En): Galvanization protects iron/steel by coating it with zinc, which sacrifices itself to prevent iron oxidation.\nस्पष्टीकरण (Hi): लोहे को जंग से बचाने के लिए उस पर जिंक (जस्ता) की परत चढ़ाने की प्रक्रिया को गैल्वेनीकरण कहते हैं।"
    },
    {
      qEn: "Why does aluminium not corrode easily even though it is a reactive metal?",
      qHi: "सक्रिय धातु होने के बावजूद एल्युमीनियम पर आसानी से जंग क्यों नहीं लगती?",
      optionsEn: ["Because it forms a protective impervious layer of aluminium oxide (Al_2O_3) on its surface", "Because it is inert like gold", "Because it does not react with oxygen", "Because it is protected by oil"],
      optionsHi: ["क्योंकि यह अपनी सतह पर एल्युमीनियम ऑक्साइड (Al_2O_3) की एक सुरक्षात्मक और अंचल परत बना लेता है", "क्योंकि यह सोने की तरह अक्रिय है", "क्योंकि यह ऑक्सीजन से प्रतिक्रिया नहीं करता", "क्योंकि इसे तेल से बचाया जाता है"],
      answer: 0,
      exp: "Explanation (En): Aluminium reacts with oxygen to form a thin, tight oxide film that prevents further oxidation and corrosion.\nस्पष्टीकरण (Hi): एल्युमीनियम हवा की ऑक्सीजन से क्रिया करके अपने ऊपर ऑक्साइड की सुरक्षात्मक परत बना लेता है जो आगे के क्षय को रोकती है।"
    },
    {
      qEn: "What metal is extracted primarily from bauxite ore?",
      qHi: "मुख्य रूप से बॉक्साइट (Bauxite) अयस्क से किस धातु का निष्कर्षण किया जाता है?",
      optionsEn: ["Aluminium (Al)", "Iron (Fe)", "Copper (Cu)", "Zinc (Zn)"],
      optionsHi: ["एल्युमीनियम (Aluminium - Al)", "लोहा", "तांबा", "जस्ता"],
      answer: 0,
      exp: "Explanation (En): Bauxite (Al_2O_3 \\cdot nH_2O) is the principal commercial ore of aluminium.\nस्पष्टीकरण (Hi): बॉक्साइट एल्युमीनियम का मुख्य और सबसे महत्वपूर्ण अयस्क है।"
    }
  ],
    "Carbon and its Compounds": [
    {
      qEn: "What property of carbon allows it to form a large number of covalent compounds by bonding with other carbon atoms?",
      qHi: "कार्बन का कौन सा गुण इसे अन्य कार्बन परमाणुओं के साथ बंध बनाकर बड़ी संख्या में सहसंयोजक यौगिक बनाने की अनुमति देता है?",
      optionsEn: ["Catenation (शृंखलन)", "Valency of one", "Electronegativity", "Radioactivity"],
      optionsHi: ["शृंखलन (Catenation)", "एक संयोजकता", "विद्युत ऋणात्मकता", "रेडियोधर्मिता"],
      answer: 0,
      exp: "Explanation (En): Catenation is the unique self-linking property of carbon atoms through covalent bonds to form long chains, branches, and rings.\nस्पष्टीकरण (Hi): शृंखलन (Catenation) कार्बन का वह अनूठा गुण है जिसके कारण इसके परमाणु आपस में जुड़कर लंबी श्रृंखलाएं और वलय बनाते हैं।"
    },
    {
      qEn: "What is the valency of carbon in its organic compounds?",
      qHi: "इसके कार्बनिक यौगिकों में कार्बन की संयोजकता (valency) कितनी होती है?",
      optionsEn: ["4 (Tetravalent)", "2", "3", "1"],
      optionsHi: ["4 (चतुःसंयोजक / Tetravalent)", "2", "3", "1"],
      answer: 0,
      exp: "Explanation (En): Carbon has an atomic number of 6 with electronic configuration 2, 4, meaning it has 4 valence electrons and is tetravalent.\nस्पष्टीकरण (Hi): कार्बन का परमाणु क्रमांक 6 है और इसका विन्यास 2, 4 होता है, यानी इसके बाहरी कोष में 4 इलेक्ट्रॉन होते हैं जिससे इसकी संयोजकता 4 होती है।"
    },
    {
      qEn: "What are hydrocarbons?",
      qHi: "हाइड्रकार्बन (Hydrocarbons) किन्हें कहते हैं?",
      optionsEn: ["Compounds containing only carbon and hydrogen", "Compounds containing carbon and oxygen", "Compounds containing carbon and nitrogen", "Compounds containing only carbon"],
      optionsHi: ["केवल कार्बन और हाइड्रोजन से बने यौगिक", "कार्बन और ऑक्सीजन वाले यौगिक", "कार्बन और नाइट्रोजन वाले यौगिक", "केवल कार्बन वाले यौगिक"],
      answer: 0,
      exp: "Explanation (En): Hydrocarbons are organic compounds consisting entirely of hydrogen and carbon atoms.\nस्पष्टीकरण (Hi): हाइड्रोकार्बन वे कार्बनिक यौगिक हैं जो केवल हाइड्रोजन और कार्बन तत्वों से मिलकर बने होते हैं।"
    },
    {
      qEn: "What type of bonds are present in saturated hydrocarbons (alkanes)?",
      qHi: "संतृप्त हाइड्रोकार्बन (ऐल्केन) में किस प्रकार के बंध पाए जाते हैं?",
      optionsEn: ["Single covalent bonds only", "Double bonds", "Triple bonds", "Ionic bonds"],
      optionsHi: ["केवल एकल सहसंयोजक बंध (Single covalent bonds)", "द्विबंध", "त्रिबंध", "आयनिक बंध"],
      answer: 0,
      exp: "Explanation (En): Saturated hydrocarbons or alkanes contain only single carbon-carbon covalent bonds (C-C).\nस्पष्टीकरण (Hi): संतृप्त हाइड्रोकार्बन (ऐल्केन) में कार्बन-कार्बन के बीच केवल एकल (single) सहसंयोजक बंध होते हैं।"
    },
    {
      qEn: "What is the general formula of open-chain saturated hydrocarbons (Alkanes)?",
      qHi: "खुली श्रृंखला वाले संतृप्त हाइड्रोकार्बन (ऐल्केन) का सामान्य सूत्र क्या है?",
      optionsEn: ["C_nH_{2n+2}", "C_nH_{2n}", "C_nH_{2n-2}", "C_nH_{n}"],
      optionsHi: ["C_nH_{2n+2}", "C_nH_{2n}", "C_nH_{2n-2}", "C_nH_{n}"],
      answer: 0,
      exp: "Explanation (En): The general chemical formula for alkanes is C_nH_{2n+2}, where n is the number of carbon atoms.\nस्पष्टीकरण (Hi): ऐल्केन श्रेणी का सामान्य सूत्र C_nH_{2n+2} होता है।"
    },
    {
      qEn: "What is the general formula of alkenes (unsaturated hydrocarbons with at least one double bond)?",
      qHi: "ऐल्कीन (कम से कम एक द्विबंध वाले असंतृप्त हाइड्रोकार्बन) का सामान्य सूत्र क्या है?",
      optionsEn: ["C_nH_{2n}", "C_nH_{2n+2}", "C_nH_{2n-2}", "C_nH_{2n-1}"],
      optionsHi: ["C_nH_{2n}", "C_nH_{2n+2}", "C_nH_{2n-2}", "C_nH_{2n-1}"],
      answer: 0,
      exp: "Explanation (En): Alkenes contain at least one carbon-carbon double bond and follow the general formula C_nH_{2n}.\nस्पष्टीकरण (Hi): ऐल्कीनों में कम से कम एक द्विबंध होता है और इनका सामान्य सूत्र C_nH_{2n} है।"
    },
    {
      qEn: "What is the general formula of alkynes (unsaturated hydrocarbons with at least one triple bond)?",
      qHi: "ऐल्काइन (कम से कम एक त्रिबंध वाले असंतृप्त हाइड्रोकार्बन) का सामान्य सूत्र क्या है?",
      optionsEn: ["C_nH_{2n-2}", "C_nH_{2n}", "C_nH_{2n+2}", "C_nH_{n-2}"],
      optionsHi: ["C_nH_{2n-2}", "C_nH_{2n}", "C_nH_{2n+2}", "C_nH_{n-2}"],
      answer: 0,
      exp: "Explanation (En): Alkynes contain at least one carbon-carbon triple bond and have the general formula C_nH_{2n-2}.\nस्पष्टीकरण (Hi): ऐल्काइन श्रेणी में कम से कम एक त्रिबंध होता है और इनका सामान्य सूत्र C_nH_{2n-2} होता है।"
    },
    {
      qEn: "What is the simplest hydrocarbon?",
      qHi: "सबसे सरल हाइड्रोकार्बन कौन सा है?",
      optionsEn: ["Methane (CH_4)", "Ethane (C_2H_6)", "Propane (C_3H_8)", "Ethene (C_2H_4)"],
      optionsHi: ["मीथेन (CH_4)", "एथेन", "प्रोपेन", "एथीन"],
      answer: 0,
      exp: "Explanation (En): Methane (CH_4) is the simplest alkane and the simplest hydrocarbon, found in natural gas and biogas.\nस्पष्टीकरण (Hi): मीथेन (CH_4) सबसे सरल हाइड्रोकार्बन और मार्श गैस है।"
    },
    {
      qEn: "What are allotropes of carbon?",
      qHi: "कार्बन के अपरूप (Allotropes) क्या होते हैं?",
      optionsEn: ["Different structural forms of the same element carbon in the same physical state (e.g., diamond, graphite, fullerene)", "Different chemical elements", "Isotopes of carbon", "Hydrocarbon chains"],
      optionsHi: ["एक ही भौतिक अवस्था में एक ही तत्व कार्बन के विभिन्न संरचनात्मक रूप (जैसे हीरा, ग्रेफाइट, फुलरीन)", "विभिन्न रासायनिक तत्व", "कार्बन के समस्थानिक", "हाइड्रोकार्बन श्रृंखलाएं"],
      answer: 0,
      exp: "Explanation (En): Allotropes are different physical forms of the same element having distinct physical properties but similar chemical properties.\nस्पष्टीकरण (Hi): कार्बन के विभिन्न अपरूपों (जैसे हीरा, ग्रेफाइट और फुलरीन) के भौतिक गुण अलग होते हैं लेकिन रासायनिक गुण समान होते हैं।"
    },
    {
      qEn: "What is Buckminsterfullerene (C_{60})?",
      qHi: "बकमिंस्टरफुलरीन (C_{60}) क्या है?",
      optionsEn: ["An allotrope of carbon containing 60 carbon atoms arranged in a spherical shape resembling a football", "A linear hydrocarbon chain", "A radioactive isotope", "An ionic carbon salt"],
      optionsHi: ["फुटबॉल जैसी गोलाकार आकृति में व्यवस्थित 60 कार्बन परमाणुओं वाला कार्बन का एक अपरूप", "एक रेखीय हाइड्रोकार्बन श्रृंखला", "एक रेडियोधर्मी समस्थानिक", "एक आयनिक कार्बन लवण"],
      answer: 0,
      exp: "Explanation (En): Fullerene C_{60} is a spherical carbon allotrope shaped like a soccer ball, consisting of pentagons and hexagons.\nस्पष्टीकरण (Hi): फुलरीन (C_{60}) कार्बन का एक अपरूप है जिसमें 60 कार्बन परमाणु फुटबॉल जैसी ग्‍लोबुलर संरचना में जुड़े होते हैं।"
    },
    {
      qEn: "What is a homologous series?",
      qHi: "समजात श्रेणी (Homologous series) किसे कहते हैं?",
      optionsEn: ["A series of organic compounds having similar chemical properties and functional groups, differing by a -CH_2- unit", "A series of compounds with different elements", "A random mixture of hydrocarbons", "A series of inorganic acids"],
      optionsHi: ["समान रासायनिक गुणों और प्रकार्यق (functional) समूह वाले कार्बनिक यौगिकों की श्रेणी जो -CH_2- इकाई से भिन्न होती है", "विभिन्न तत्वों वाले यौगिकों की श्रृंखला", "हाइड्रोकार्बन का यादृच्छिक मिश्रण", "अकार्बनिक अम्लों की श्रृंखला"],
      answer: 0,
      exp: "Explanation (En): A homologous series is a family of organic compounds with the same functional group and general formula, where each successive member differs by a -CH_2- group (molecular mass 14u).\nस्पष्टीकरण (Hi): समजात श्रेणी ऐसे कार्बनिक यौगिकों का समूह है जिनके रासायनिक गुण समान होते हैं और क्रमिक सदस्यों के बीच -CH_2- का अंतर होता है।"
    },
    {
      qEn: "What is the functional group present in alcohols?",
      qHi: "ऐल्कोहॉल (Alcohols) में कौन सा क्रियात्मक या प्रकार्यात्मक समूह (functional group) मौजूद होता है?",
      optionsEn: ["-OH (Hydroxyl group)", "-CHO (Aldehyde)", "-COOH (Carboxylic acid)", ">C=O (Ketone)"],
      optionsHi: ["-OH (हाइड्रॉक्सी समूह)", "-CHO (ऐल्डिहाइड)", "-COOH (कार्बोक्सिलिक अम्ल)", ">C=O (कीटोन)"],
      answer: 0,
      exp: "Explanation (En): Alcohols are characterized by the hydroxyl functional group (-OH) attached to a carbon chain.\nस्पष्टीकरण (Hi): ऐल्कोहॉल श्रेणी का प्रकार्यात्मक समूह हाइड्रॉक्सी समूह (-OH) होता है।"
    },
    {
      qEn: "What is the functional group of carboxylic acids?",
      qHi: "कार्बोक्सिलिक अम्लों का क्रियात्मक समूह (functional group) कौन सा है?",
      optionsEn: ["-COOH", "-OH", "-CHO", "-O-"],
      optionsHi: ["-COOH", "-OH", "-CHO", "-O-"],
      answer: 0,
      exp: "Explanation (En): Carboxylic acids contain the carboxyl functional group (-COOH).\nस्पष्टीकरण (Hi): कार्बोक्सिलिक अम्लों में कार्बोक्सिल समूह (-COOH) पाया जाता है।"
    },
    {
      qEn: "What is vinegar chemically?",
      qHi: "सिरका (Vinegar) रासायनिक रूप से क्या होता है?",
      optionsEn: ["A dilute solution of acetic acid (CH_3COOH) in water (approx 5-8%)", "Pure ethanol", "Dilute hydrochloric acid", "Citric acid juice"],
      optionsHi: ["पानी में एसिटिक अम्ल (CH_3COOH) का तनु घोल (लगभग 5-8%)", "शुद्ध एथेनॉल", "तनु हाइड्रोक्लोरिक अम्ल", "साइट्रिक अम्ल का रस"],
      answer: 0,
      exp: "Explanation (En): Vinegar is a 5-8% aqueous solution of acetic acid (ethanoic acid).\nस्पष्टीकरण (Hi): सिरका एथेनोइक अम्ल (एसिटिक अम्ल) का 5 से 8 प्रतिशत जलीय विलयन होता है।"
    },
    {
      qEn: "What is absolute alcohol?",
      qHi: "परम ऐल्कोहॉल (Absolute alcohol) किसे कहते हैं?",
      optionsEn: ["100% pure ethanol (CH_3CH_2OH)", "Denatured alcohol", "Ethanol mixed with methanol", "Dilute spirit"],
      optionsHi: ["100% शुद्ध एथेनॉल (CH_3CH_2OH)", "विकृत ऐल्कोहॉल", "मेथनॉल मिश्रित एथेनॉल", "तनु स्प्रिट"],
      answer: 0,
      exp: "Explanation (En): Absolute alcohol is virtually 100% pure ethanol by weight, free of water.\nस्पष्टीकरण (Hi): 100% शुद्ध एथेनॉल को परम ऐल्कोहॉल (Absolute alcohol) कहा जाता है।"
    },
    {
      qEn: "What is denatured alcohol?",
      qHi: "विकृत ऐल्कोहॉल (Denatured alcohol) क्या है?",
      optionsEn: ["Ethanol mixed with poisonous substances like methanol or copper sulfate to make it unfit for drinking", "Pure absolute alcohol", "Ethanol mixed with water", "Ethanol used in medicines"],
      optionsHi: ["पीने योग्य न बनाने के लिए उसमें मेथनॉल या कॉपर सल्फेट जैसे जहरीले पदार्थ मिलाया गया एथेनॉल", "शुद्ध परम ऐल्कोहॉल", "पानी मिला एथेनॉल", "दवाओं में प्रयुक्त एथेनॉल"],
      answer: 0,
      exp: "Explanation (En): Denatured alcohol is industrial ethanol rendered toxic and foul-tasting by adding poisonous additives like methanol to prevent misuse.\nस्पष्टीकरण (Hi): औद्योगिक उपयोग वाले एथेनॉल को पीने से रोकने के लिए उसमें जहरीले पदार्थ (जैसे मेथनॉल) मिलाए जाते हैं, जिसे विकृत ऐल्कोहॉल कहते हैं।"
    },
    {
      qEn: "What happens when ethanol is heated with excess concentrated sulfuric acid (H_2SO_4)?",
      qHi: "जब एथेनॉल को सांद्र सल्फ्यूरिक अम्ल (H_2SO_4) के साथ गर्म किया जाता है, तो क्या बनता है?",
      optionsEn: ["Ethene (C_2H_4) through dehydration", "Acetic acid", "Methane", "Ethyl chloride"],
      optionsHi: ["निर्जलीकरण (dehydration) द्वारा एथीन (C_2H_4)", "एसिटिक अम्ल", "मीथेन", "एथिल क्लोराइड"],
      answer: 0,
      exp: "Explanation (En): Concentrated sulfuric acid acts as a dehydrating agent, removing water from ethanol to form ethene gas (C_2H_4).\nस्पष्टीकरण (Hi): सांद्र H_2SO_4 एक निर्जलीकरण एजेंट के रूप में काम करता है और एथेनॉल से पानी निकालकर एथीन बनाता है।"
    },
    {
      qEn: "What is esterification?",
      qHi: "एस्टरक्तीकरण (Esterification) अभिक्रिया क्या है?",
      optionsEn: ["Reaction of a carboxylic acid with an alcohol in the presence of an acid catalyst to form an ester", "Reaction of acid with base", "Oxidation of ethanol", "Combustion of hydrocarbons"],
      optionsHi: ["अम्ल उत्प्रेरक की उपस्थिति में कार्बोक्सिलिक अम्ल की ऐल्कोहॉल से अभिक्रिया जिससे एस्टर बनता है", "अम्ल और क्षार की क्रिया", "एथेनॉल का ऑक्सीकरण", "हाइड्रोकार्बन का दहन"],
      answer: 0,
      exp: "Explanation (En): Esters are sweet-smelling substances formed by the reaction between a carboxylic acid and an alcohol.\nस्पष्टीकरण (Hi): कार्बोक्सिलिक अम्ल और ऐल्कोहॉल की अम्ल की उपस्थिति में प्रतिक्रिया से मीठी गंध वाले 'एस्टर' बनते हैं।"
    },
    {
      qEn: "What is saponification?",
      qHi: "सामुद्रीकरण या साबुनीकरण (Saponification) प्रक्रिया क्या है?",
      optionsEn: ["Alkaline hydrolysis of esters (fats and oils) to produce soap and glycerol", "Making plastic from oil", "Burning of soap", "Purification of water"],
      optionsHi: ["साबुन और ग्लिसरोल बनाने के लिए एस्टर (वसा और तेल) का क्षारीय जलअपघटन", "तेल से प्लास्टिक बनाना", "साबुन का जलना", "पानी का शुद्धिकरण"],
      answer: 0,
      exp: "Explanation (En): Saponification is the hydrolysis of fats or oils with an alkali (like NaOH) to yield soap and glycerol.\nस्पष्टीकरण (Hi): वसा या तेलों की सोडियम हाइड्रोक्साइड के साथ क्रिया कराकर साबुन बनाने की प्रक्रिया को साबुनीकरण कहते हैं।"
    },
    {
      qEn: "How does soap clean clothes (micelles formation)?",
      qHi: "साबुन कपड़ों की सफाई कैसे करता है (मिसेल निर्माण)?",
      optionsEn: ["Soap molecules form spherical aggregates called micelles, where the hydrophobic tail traps grease/oil and the hydrophilic head dissolves in water", "Soap dissolves grease chemically", "Soap evaporates dirt", "Soap acts as a strong acid"],
      optionsHi: ["साबुन के अणु मिसेल बनाते हैं, जिसमें हाइड्रोफोबिक पूंछ तेल/मैले को पकड़ती है और हाइड्रोफिलिक सिरा पानी में घुलता है", "साबुन ग्रीस को chemically घोलता है", "साबुन गंदगी को उड़ा देता है", "साबुन एक प्रबल अम्ल है"],
      answer: 0,
      exp: "Explanation (En): Soap has a non-polar hydrocarbon tail that dissolves in grease and a polar head that dissolves in water, forming micelles that wash away dirt.\nस्पष्टीकरण (Hi): साबुन के अणु मिसेल (micelle) बनाते हैं जिसका हाइड्रोकार्बन सिरा तेल या मैल से चिपकता है और आयनिक सिरा पानी में घुलकर मैल को बाहर निकालता है।"
    },
    {
      qEn: "Why do soaps not form lather easily in hard water?",
      qHi: "कठोर जल में साबुन आसानी से झाग क्यों नहीं बनाते हैं?",
      optionsEn: ["Because calcium and magnesium ions in hard water react with soap to form insoluble precipitates (scum)", "Because hard water is too cold", "Because hard water contains acids", "Because soap evaporates in hard water"],
      optionsHi: ["क्योंकि कठोर जल में मौजूद कैल्शियम और मैग्नीशियम आयन साबुन के साथ अघुलनशील अवक्षेप (स्कम) बनाते हैं", "क्योंकि कठोर जल बहुत ठंडा होता है", "क्योंकि कठोर जल में अम्ल होते हैं", "क्योंकि कठोर जल में साबुन उड़ जाता है"],
      answer: 0,
      exp: "Explanation (En): Hard water contains Ca^{2+} and Mg^{2+} ions which react with soap to form insoluble salts (scum), wasting soap.\nस्पष्टीकरण (Hi): कठोर जल में कैल्शियम और मैग्नीशियम के लवण होते हैं जो साबुन से क्रिया करके अघुलनशील स्कम बनाते हैं और झाग नहीं बनता।"
    },
    {
      qEn: "Do synthetic detergents form scum in hard water?",
      qHi: "क्या सिंथेटिक डिटर्जेंट कठोर जल में स्कम (अघुलनशील अवक्षेप) बनाते हैं?",
      optionsEn: ["No, detergents work effectively even in hard water", "Yes, they form more scum than soap", "They do not dissolve in water at all", "They only work in pure distilled water"],
      optionsHi: ["नहीं, डिटर्जेंट कठोर जल में भी प्रभावी रूप से काम करते हैं", "हाँ, वे साबुन से अधिक स्कम बनाते हैं", "वे पानी में बिल्कुल नहीं घुलते", "वे केवल शुद्ध आसुत जल में काम करते हैं"],
      answer: 0,
      exp: "Explanation (En): Detergents do not form insoluble calcium or magnesium precipitates, making them effective in both hard and soft water.\nस्पष्टीकरण (Hi): डिटर्जेंट कैल्शियम और मैग्नीशियम आयनों के साथ अघुलनशील लवण नहीं बनाते, इसलिए यह कठोर जल में भी झाग देते हैं।"
    },
    {
      qEn: "What is catalytic hydrogenation of vegetable oils?",
      qHi: "वनस्पति तेलों का उत्प्रेरकी हाइड्रोजनीकरण (Catalytic hydrogenation) क्या है?",
      optionsEn: ["Addition of hydrogen to unsaturated vegetable oils in the presence of nickel/palladium catalyst to convert them into saturated fats (vanaspati ghee)", "Removal of hydrogen", "Reaction of oil with oxygen", "Making soap from oil"],
      optionsHi: ["निकल उत्प्रेरक की उपस्थिति में असंतृप्त वनस्पति तेलों में हाइड्रोजन जोड़कर उन्हें संतृप्त वसा (वनस्पति घी) में बदलना", "हाइड्रोजन हटाना", "तेल की ऑक्सीजन से क्रिया", "तेल से साबुन बनाना"],
      answer: 0,
      exp: "Explanation (En): Hydrogenation converts liquid vegetable oils (unsaturated) into solid fats (vanaspati ghee) using Ni catalyst.\nस्पष्टीकरण (Hi): निकेल उत्प्रेरक की उपस्थिति में तेलों में हाइड्रोजन जोड़कर वनस्पति घी (डालडा) बनाने की प्रक्रिया हाइड्रोजनीकरण कहलाती है।"
    },
    {
      qEn: "What is addition reaction characteristic of?",
      qHi: "योगशील अभिक्रिया (Addition reaction) किसकी प्रमुख विशेषता है?",
      optionsEn: ["Unsaturated hydrocarbons (alkenes and alkynes)", "Saturated hydrocarbons (alkanes)", "Inorganic salts", "Alcohols only"],
      optionsHi: ["असंतृप्त हाइड्रोकार्बन (ऐल्कीन और ऐल्काइन)", "संतृप्त हाइड्रोकार्बन (ऐल्केन)", "अकार्बनिक लवण", "केवल ऐल्कोहॉल"],
      answer: 0,
      exp: "Explanation (En): Unsaturated hydrocarbons undergo addition reactions where reagents add across double or triple bonds.\nस्पष्टीकरण (Hi): असंतृप्त हाइड्रोकार्बन (द्विबंध या त्रिबंध वाले) योगशील अभिक्रियाएं दर्शाते हैं।"
    },
    {
      qEn: "What type of reaction is characteristic of saturated hydrocarbons (alkanes)?",
      qHi: "संतृप्त हाइड्रोकार्बन (ऐल्केन) की मुख्य विशेषता कौन सी रासायनिक अभिक्रिया है?",
      optionsEn: ["Substitution reaction (e.g., chlorination in presence of sunlight)", "Addition reaction", "Polymerization only", "Neutralization"],
      optionsHi: ["प्रतिस्थापन अभिक्रिया (जैसे सूर्य के प्रकाश में क्लोरीनीकरण)", "योगशील अभिक्रिया", "केवल बहुलकीकरण", "उदासीनीकरण"],
      answer: 0,
      exp: "Explanation (En): Alkanes are relatively unreactive due to strong single bonds and undergo substitution reactions rather than addition.\nस्पष्टीकरण (Hi): संतृप्त हाइड्रोकार्बन मुख्य रूप से प्रतिस्थापन (Substitution) अभिक्रियाएं देते हैं।"
    },
    {
      qEn: "What is the product of complete combustion of any hydrocarbon?",
      qHi: "किसी भी हाइड्रोकार्बन के पूर्ण दहन (combustion) से क्या उत्पाद प्राप्त होते हैं?",
      optionsEn: ["Carbon dioxide (CO_2), water vapor (H_2O), heat, and light", "Carbon monoxide only", "Pure carbon and hydrogen", "Oxygen gas"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2), जलवाष्प (H_2O), ऊष्मा और प्रकाश", "केवल कार्बन मोनोऑक्साइड", "शुद्ध कार्बन और हाइड्रोजन", "ऑक्सीजन गैस"],
      answer: 0,
      exp: "Explanation (En): Complete combustion of hydrocarbons in sufficient oxygen yields CO_2, H_2O, heat, and light.\nस्पष्टीकरण (Hi): पर्याप्त ऑक्सीजन में हाइड्रोकार्बन के जलने पर कार्बन डाइऑक्साइड, पानी, ऊष्मा और प्रकाश उत्पन्न होते हैं।"
    },
    {
      qEn: "Why do some substances burn with a smoky (sooty) flame?",
      qHi: "कुछ पदार्थ धुआँती या कज्जली (sooty) लौ के साथ क्यों जलते हैं?",
      optionsEn: ["Due to high percentage of carbon in unsaturated hydrocarbons", "Because of pure hydrogen content", "Due to absence of carbon", "Because of excess oxygen"],
      optionsHi: ["असंतृप्त हाइड्रोकार्बन में उच्च प्रतिशत कार्बन के कारण", "शुद्ध हाइड्रोजन सामग्री के कारण", "कार्बन की अनुपस्थिति के कारण", "अतिरिक्त ऑक्सीजन के कारण"],
      answer: 0,
      exp: "Explanation (En): Unsaturated hydrocarbons have a high carbon-to-hydrogen ratio, causing unburnt carbon particles to glow as a smoky flame.\nस्पष्टीकरण (Hi): असंतृप्त हाइड्रोकार्बन में कार्बन की मात्रा अधिक होने के कारण वे बिना जले कार्बन कणों के साथ धुआं छोड़ते हैं।"
    },
    {
      qEn: "What is graphite used for in everyday applications?",
      qHi: "दैनिक उपयोग में ग्रेफाइट का मुख्य उपयोग कहाँ होता है?",
      optionsEn: ["As a dry lubricant, in pencil leads, and as battery electrodes", "As a cutting tool", "As insulation material", "As transparent glass"],
      optionsHi: ["शुष्क स्नेहक (lubricant), पेंसिल की लीड और बैटरी इलेक्ट्रोड के रूप में", "काटने के उपकरण के रूप में", "रोधी सामग्री के रूप में", "पारदर्शी कांच के रूप में"],
      answer: 0,
      exp: "Explanation (En): Graphite is soft, slippery, and electrically conductive, making it ideal for pencil cores, lubricants, and electrodes.\nस्पष्टीकरण (Hi): ग्रेफाइट मुलायम, चिकना और विद्युत सुचालक होता है, इसलिए इसका उपयोग पेंसिल की लीड और स्नेहक के रूप में होता है।"
    },
    {
      qEn: "What is isomerism?",
      qHi: "समावयवता (Isomerism) किसे कहते हैं?",
      optionsEn: ["Phenomenon where compounds have the same molecular formula but different structural formulas (arrangements)", "Compounds with different molecular formulas", "Different elements with same mass", "Isotopes of same atom"],
      optionsHi: ["वह परिघटना जिसमें यौगिकों का अणुसूत्र समान लेकिन संरचना सूत्र (व्यवस्था) भिन्न होता है", "अलग अणुसूत्र वाले यौगिक", "समान द्रव्यमान वाले विभिन्न तत्व", "समान परमाणु के समस्थानिक"],
      answer: 0,
      exp: "Explanation (En): Isomers are molecules with identical molecular formulas but different structural arrangements of atoms.\nस्पष्टीकरण (Hi): जिन यौगिकों के अणुसूत्र एक जैसे होते हैं लेकिन उनकी संरचनाएं अलग होती हैं, उन्हें समावयवी (Isomers) कहते हैं।"
    },
    {
      qEn: "What is the minimum number of carbon atoms required to exhibit chain isomerism in alkanes?",
      qHi: "ऐल्केनों में श्रृंखला समावयवता (chain isomerism) प्रदर्शित करने के लिए न्यूनतम कितने कार्बन परमाणुओं की आवश्यकता होती है?",
      optionsEn: ["4 (such as butane)", "2", "3", "6"],
      optionsHi: ["4 (जैसे ब्यूटेन)", "2", "3", "6"],
      answer: 0,
      exp: "Explanation (En): Alkanes require a minimum of 4 carbon atoms (butane and isobutane) to exhibit structural chain isomerism.\nस्पष्टीकरण (Hi): श्रृंखला समावयवता दिखाने के लिए ब्यूटेन (C_4H_{10}) से शुरुआत होती है, यानी कम से कम 4 कार्बन चाहिए।"
    }
  ],
    "Fuels": [
    {
      qEn: "What is defined as a combustible substance that releases a large amount of heat energy upon combustion?",
      qHi: "दहन पर बड़ी मात्रा में ऊष्मा ऊर्जा उत्सर्जित करने वाले ज्वलनशील पदार्थ को क्या कहा जाता है?",
      optionsEn: ["Fuel", "Catalyst", "Oxidizing agent", "Solvent"],
      optionsHi: ["ईंधन (Fuel)", "उत्प्रेरक", "ऑक्सीकारक", "विलायक"],
      answer: 0,
      exp: "Explanation (En): A fuel is any material that can be burned to release thermal or mechanical energy for practical use.\nस्पष्टीकरण (Hi): ईंधन वह ज्वलनशील पदार्थ है जिसे जलाने पर ऊष्मा ऊर्जा प्राप्त होती है।"
    },
    {
      qEn: "What is meant by the calorific value of a fuel?",
      qHi: "किसी ईंधन के ऊष्मीय मान (Calorific value) से क्या तात्पर्य है?",
      optionsEn: ["The amount of heat energy released in kilojoules when a unit mass (1 \\text{ kg}) of fuel is completely burned", "The total weight of the fuel", "The temperature at which fuel catches fire", "The amount of ash left behind"],
      optionsHi: ["ईंधन के एकांक द्रव्यमान (1 \\text{ kg}) के पूर्ण दहन से उत्पन्न ऊष्मा ऊर्जा की मात्रा", "ईंधन का कुल वजन", "वह तापमान जिस पर ईंधन आग पकड़ ले", "बचा हुआ अवशेष"],
      answer: 0,
      exp: "Explanation (En): Calorific value is expressed in kilojoules per kilogram (\\text{kJ/kg}) and measures the energy density of a fuel.\nस्पष्टीकरण (Hi): किसी ईंधन के 1 किलोग्राम के पूर्ण दहन से जितनी ऊष्मा निकलती है, उसे उसका ऊष्मीय मान कहते हैं।"
    },
    {
      qEn: "Which fuel has the highest calorific value among common fuels?",
      qHi: "सामान्य ईंधनों में सबसे अधिक ऊष्मीय मान (calorific value) किसका होता है?",
      optionsEn: ["Hydrogen gas", "LPG", "Coal", "Petrol"],
      optionsHi: ["हाइड्रोजन गैस (Hydrogen)", "एलपीजी", "कोयला", "पेट्रोल"],
      answer: 0,
      exp: "Explanation (En): Hydrogen has the highest calorific value (approx 150,000 \\text{ kJ/kg}), though its storage and handling are difficult.\nस्पष्टीकरण (Hi): हाइड्रोजन का ऊष्मीय मान सभी ईंधनों में सबसे अधिक होता है, हालांकि इसे स्टोर करना कठिन है।"
    },
    {
      qEn: "What is LPG (Liquefied Petroleum Gas) primarily composed of?",
      qHi: "एलपीजी (LPG - द्रवीकृत पेट्रोलियम गैस) मुख्य रूप से किसका मिश्रण होती है?",
      optionsEn: ["Propane and Butane", "Methane and Ethane", "Ethylene and Acetylene", "Hydrogen and Carbon monoxide"],
      optionsHi: ["प्रोपेन और ब्यूटेन (Propane and Butane)", "मीथेन और एथेन", "एथिलीन और एसिटिलीन", "हाइड्रोजन और कार्बन मोनोऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): LPG is a mixture of light hydrocarbons, principally propane (C_3H_8) and butane (C_4H_{10}), liquefied under pressure.\nस्पष्टीकरण (Hi): एलपीजी मुख्य रूप से प्रोपेन और ब्यूटेन गैसों का मिश्रण होती है जिसे दबाव में द्रवीकृत किया जाता है।"
    },
    {
      qEn: "Why is an odoriferous substance like ethyl mercaptan (C_2H_5SH) added to odorless LPG cylinders?",
      qHi: "गंधहीन एलपीजी सिलेंडरों में गंधयुक्त पदार्थ एथिल मर्कप्टन (C_2H_5SH) क्यों मिलाया जाता है?",
      optionsEn: ["To detect gas leaks easily for safety", "To increase calorific value", "To make the flame burn blue", "To prevent liquid evaporation"],
      optionsHi: ["सुरक्षा के लिए गैस के रिसाव का आसानी से पता लगाने हेतु", "ऊष्मीय मान बढ़ाने के लिए", "लौ को नीला करने के लिए", "द्रव वाष्पीकरण रोकने के लिए"],
      answer: 0,
      exp: "Explanation (En): LPG is naturally odorless; ethyl mercaptan is added so that even a minor leak can be detected by its strong pungent smell.\nस्पष्टीकरण (Hi): एलपीजी में अपनी कोई गंध नहीं होती, इसलिए रिसाव का पता लगाने के लिए तेज गंध वाला एथिल मर्कप्टन मिलाया जाता है।"
    },
    {
      qEn: "What is CNG (Compressed Natural Gas) primarily composed of?",
      qHi: "सीएनजी (CNG - संपीडित प्राकृतिक गैस) मुख्य रूप से किस गैस से बनी होती है?",
      optionsEn: ["Methane (CH_4)", "Propane", "Butane", "Hydrogen"],
      optionsHi: ["मीथेन (CH_4 - Methane)", "प्रोपेन", "ब्यूटेन", "हाइड्रोजन"],
      answer: 0,
      exp: "Explanation (En): CNG consists mostly of methane (80-90\%), compressed to high pressures for clean automotive fuel use.\nस्पष्टीकरण (Hi): सीएनजी मुख्य रूप से मीथेन (CH_4) गैस होती है जिसे उच्च दाब पर संपीडित किया जाता है।"
    },
    {
      qEn: "What are the components of Water Gas (Synthesis gas)?",
      qHi: "वाटर गैस (संश्लेषण गैस) किन गैसों का मिश्रण होती है?",
      optionsEn: ["Carbon monoxide (CO) and Hydrogen (H_2)", "Carbon dioxide and Nitrogen", "Methane and Oxygen", "Carbon monoxide and Ammonia"],
      optionsHi: ["कार्बन मोनोऑक्साइड (CO) और हाइड्रोजन (H_2)", "कार्बन डाइऑक्साइड और नाइट्रोजन", "मीथेन और ऑक्सीजन", "कार्बन मोनोऑक्साइड और अमोनिया"],
      answer: 0,
      exp: "Explanation (En): Water gas is a mixture of carbon monoxide and hydrogen produced by passing steam over hot coke.\nस्पष्टीकरण (Hi): लाल तप्त कोक पर भाप प्रवाहित करने से कार्बन मोनोऑक्साइड और हाइड्रोजन का मिश्रण (वाटर गैस) बनता है।"
    },
    {
      qEn: "What are the components of Producer Gas?",
      qHi: "प्रड्यूसर गैस (Producer Gas) किन गैसों का मिश्रण होती है?",
      optionsEn: ["Carbon monoxide (CO) and Nitrogen (N_2)", "Carbon monoxide and Hydrogen", "Methane and Carbon dioxide", "Hydrogen and Nitrogen"],
      optionsHi: ["कार्बन मोनोऑक्साइड (CO) और नाइट्रोजन (N_2)", "कार्बन मोनोऑक्साइड और हाइड्रोजन", "मीथेन और कार्बन डाइऑक्साइड", "हाइड्रोजन और नाइट्रोजन"],
      answer: 0,
      exp: "Explanation (En): Producer gas is a mixture of carbon monoxide and nitrogen, produced by passing air over red-hot coke.\nस्पष्टीकरण (Hi): तप्त कोक पर हवा प्रवाहित करने पर कार्बन मोनोऑक्साइड और नाइट्रोजन का मिश्रण (प्रड्यूसर गैस) प्राप्त होता है।"
    },
    {
      qEn: "What is coal gas a mixture of?",
      qHi: "कोल गैस (Coal gas) किन गैसों का मिश्रण होती है?",
      optionsEn: ["Hydrogen, Methane, and Carbon monoxide", "Carbon dioxide and Nitrogen", "Propane and Butane", "Oxygen and Chlorine"],
      optionsHi: ["हाइड्रोजन, मीथेन और कार्बन मोनोऑक्साइड", "कार्बन डाइऑक्साइड और नाइट्रोजन", "प्रोपेन और ब्यूटेन", "ऑक्सीजन और क्लोरीन"],
      answer: 0,
      exp: "Explanation (En): Coal gas is obtained by destructive distillation of coal and consists of hydrogen, methane, carbon monoxide, and other gases.\nस्पष्टीकरण (Hi): कोयले के भंजक आसवन से प्राप्त कोल गैस हाइड्रोजन, मीथेन और कार्बन मोनोऑक्साइड का मिश्रण होती है।"
    },
    {
      qEn: "What is the primary constituent of Biogas (Gobar gas)?",
      qHi: "बायोगैस (गोबर गैस) का मुख्य घटक क्या है?",
      optionsEn: ["Methane (CH_4)", "Carbon monoxide", "Hydrogen sulfide", "Oxygen"],
      optionsHi: ["मीथेन (CH_4)", "कार्बन मोनोऑक्साइड", "हाइड्रोजन सल्फाइड", "ऑक्सीजन"],
      answer: 0,
      exp: "Explanation (En): Biogas is produced by anaerobic decomposition of animal waste and plant matter, consisting mainly of methane (55-75\%) and CO_2.\nस्पष्टीकरण (Hi): बायोगैस में मुख्य रूप से मीथेन (55-75\%) होती है जो कचरे या गोबर के अवायवीय अपघटन से बनती है।"
    },
    {
      qEn: "Which type of coal has the highest carbon content and highest quality?",
      qHi: "किस प्रकार के कोयले में कार्बन की मात्रा सबसे अधिक और गुणवत्ता सबसे अच्छी होती है?",
      optionsEn: ["Anthracite", "Bituminous", "Lignite", "Peat"],
      optionsHi: ["एंथरासाइट (Anthracite)", "बिटुमिनस", "लिग्नाइट", "पीट"],
      answer: 0,
      exp: "Explanation (En): Anthracite is the highest grade of coal, containing 85-95% carbon, burning with little smoke and high heat.\nस्पष्टीकरण (Hi): एंथरासाइट सबसे उत्तम कोटि का कोयला है जिसमें 85% से अधिक कार्बन होता है।"
    },
    {
      qEn: "Which type of coal has the lowest carbon content and is considered the lowest grade?",
      qHi: "किस कोयले में कार्बन की मात्रा सबसे कम होती है और उसे सबसे घटिया श्रेणी का माना जाता है?",
      optionsEn: ["Peat", "Anthracite", "Bituminous", "Lignite"],
      optionsHi: ["पीट (Peat)", "एंथरासाइट", "बिटुमिनस", "लिग्नाइट"],
      answer: 0,
      exp: "Explanation (En): Peat is the earliest stage of coal formation with lowest carbon content (\sim 50-60\%) and high moisture.\nस्पष्टीकरण (Hi): पीट कोयले के बनने की पहली अवस्था है जिसमें कार्बन की मात्रा सबसे कम और नमी सबसे अधिक होती है।"
    },
    {
      qEn: "What is Bituminous coal commonly referred to as?",
      qHi: "बिटुमिनस कोयले को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Household coal (soft coal)", "Anthracite", "Brown coal", "Green coal"],
      optionsHi: ["घरेलू कोयला (Soft coal)", "एंथरासाइट", "भूरा कोयला", "हरा कोयला"],
      answer: 0,
      exp: "Explanation (En): Bituminous is the most common coal used for domestic and industrial purposes, often called soft coal.\nस्पष्टीकरण (Hi): बिटुमिनस सबसे अधिक इस्तेमाल होने वाला सामान्य (घरेलू) कोयला है।"
    },
    {
      qEn: "What is Lignite also known as?",
      qHi: "लिग्नाइट (Lignite) को किस अन्य नाम से भी जाना जाता है?",
      optionsEn: ["Brown coal", "Black coal", "Rock coal", "White coal"],
      optionsHi: ["भूरा कोयला (Brown coal)", "काला कोयला", "रॉक कोल", "सफेद कोयला"],
      answer: 0,
      exp: "Explanation (En): Lignite is a soft brown combustible sedimentary rock formed from naturally compressed peat, known as brown coal.\nस्पष्टीकरण (Hi): लिग्नाइट को भूरा कोयला (Brown coal) भी कहा जाता है।"
    },
    {
      qEn: "What is the octane rating used to measure in fuels?",
      qHi: "ईंधनों में ऑक्टेन संख्या (Octane number) का उपयोग क्या मापने के लिए किया जाता है?",
      optionsEn: ["The knock resistance (antiknock quality) of petrol / gasoline", "The heating value of diesel", "Viscosity of oil", "Density of kerosene"],
      optionsHi: ["पेट्रोल / गैसोलीन की अपस्फोटन रोधी क्षमता (Knock resistance)", "डीजल का ऊष्मीय मान", "तेल की श्यानता", "केरोसिन का घनत्व"],
      answer: 0,
      exp: "Explanation (En): Octane number measures the anti-knock performance of petrol, with iso-octane rated 100 and n-heptane rated 0.\nस्पष्टीकरण (Hi): ऑक्टेन संख्या पेट्रोल की गुणवत्ता और उसके इंजन में खटखटाहट (knocking) रोकने की क्षमता को दर्शाती है।"
    },
    {
      qEn: "What is the cetane rating used to measure in fuels?",
      qHi: "सीटेन संख्या (Cetane number) का उपयोग किस ईंधन की गुणवत्ता मापने के लिए किया जाता है?",
      optionsEn: ["Ignition quality / performance of diesel fuel", "Quality of petrol", "Calorific value of hydrogen", "Volatility of alcohol"],
      optionsHi: ["डीजल ईंधन की प्रज्वलन गुणवत्ता (Ignition quality)", "पेट्रोल की गुणवत्ता", "हाइड्रोजन का ऊष्मीय मान", "ऐल्कोहॉल की वाष्पशीलता"],
      answer: 0,
      exp: "Explanation (En): Cetane number measures the ignition delay and combustion quality of diesel fuel.\nस्पष्टीकरण (Hi): सीटेन संख्या डीजल की प्रज्वलन गुणवत्ता (ignition quality) को मापने पैमाना है।"
    },
    {
      qEn: "What causes 'knocking' in internal combustion engines?",
      qHi: "आंतरिक दहन इंजन (IC engines) में 'नॉकिंग' या खटखटाहट का क्या कारण है?",
      optionsEn: ["Premature or uneven ignition of the fuel-air mixture in the cylinder", "High quality petrol", "Low engine temperature", "Excess engine oil"],
      optionsHi: ["सिलेंडर में ईंधन-वायु मिश्रण का समय से पहले या असमान प्रज्वलन", "अच्छी गुणवत्ता का पेट्रोल", "कम इंजन तापमान", "अतिरिक्त इंजन तेल"],
      answer: 0,
      exp: "Explanation (En): Knocking occurs when combustion of the air-fuel mixture is irregular, causing shock waves and engine damage.\nस्पष्टीकरण (Hi): इंजन के सिलेंडर में ईंधन का समय से पहले अनियमित जलना नॉकिंग (खटखटाहट) कहलाता है।"
    },
    {
      qEn: "What additive was historically used in petrol to prevent engine knocking before being banned due to toxicity?",
      qHi: "विषाक्तता के कारण प्रतिबंध लगने से पहले इंजन नॉकिंग रोकने के लिए पेट्रोल में कौन सा योजक मिलाया जाता था?",
      optionsEn: ["Tetraethyllead (TEL)", "Sodium chloride", "Ethanol", "Benzene"],
      optionsHi: ["टेट्राएथिल लेड (TEL - Tetraethyllead)", "सोडियम क्लोराइड", "एथेनॉल", "बेन्जीन"],
      answer: 0,
      exp: "Explanation (En): Tetraethyllead was added as an antiknock agent, but phased out due to environmental lead poisoning concerns.\nस्पष्टीकरण (Hi): टेट्राएथिल लेड (TEL) को एंटी-नॉक एजेंट के रूप में मिलाया जाता था, लेकिन सीसे के प्रदूषण के कारण इस पर बैन लगा दिया गया।"
    },
    {
      qEn: "What is fractional distillation of petroleum used for?",
      qHi: "पेट्रोलियम के प्रभाजी आसवन (Fractional distillation) का उपयोग किसके लिए किया जाता है?",
      optionsEn: ["To separate crude oil into useful fractions like petrol, diesel, kerosene, and lubricating oil based on boiling points", "To make crude oil", "To purify water", "To produce synthetic rubber"],
      optionsHi: ["क्वथनांक के आधार पर कच्चे तेल को पेट्रोल, डीजल, केरोसिन जैसे उपयोगी अंशों में अलग करना", "कच्चा तेल बनाने के लिए", "पानी शुद्ध करने के लिए", "कृत्रिम रबर बनाने के लिए"],
      answer: 0,
      exp: "Explanation (En): Fractional distillation separates crude petroleum into different hydrocarbon fractions by heating and condensing at various temperature levels.\nस्पष्टीकरण (Hi): कच्चे तेल (Petroleum) को उसके विभिन्न घटकों में अलग करने के लिए प्रभाजी आसवन विधि का उपयोग किया जाता है।"
    },
    {
      qEn: "Which fraction of petroleum distillation has the lowest boiling point and comes off first?",
      qHi: "पेट्रोलियम आसवन में किस अंश का क्वथनांक सबसे कम होता है और वह सबसे पहले वाष्प बनकर निकलता है?",
      optionsEn: ["Petroleum gas (Gases like butane/propane)", "Lubricating oil", "Asphalt (Bitumen)", "Diesel oil"],
      optionsHi: ["पेट्रोलियम गैस (ब्यूटेन/प्रोपेन)", "लुब्रिकेटिंग ऑयल", "डामर (Bitumen)", "डीजल तेल"],
      answer: 0,
      exp: "Explanation (En): Fractions with smallest molecular weight and lowest boiling points (petroleum gases) distill off at the top of the fractionating column.\nस्पष्टीकरण (Hi): सबसे छोटे अणुओं और कम क्वथनांक वाली पेट्रोलियम गैसें टॉवर में सबसे ऊपर सबसे पहले निकलती हैं।"
    },
    {
      qEn: "What is bitumen (asphalt) used for?",
      qHi: "बिटुमेन या डामर (Bitumen) का मुख्य उपयोग कहाँ होता है?",
      optionsEn: ["Road surfacing and paving", "Aircraft fuel", "Household cooking gas", "Making plastics"],
      optionsHi: ["सड़क निर्माण और पक्कीकरण (Road surfacing)", "विमान ईंधन", "घरेलू खाना पकाने की गैस", "प्लास्टिक बनाने में"],
      answer: 0,
      exp: "Explanation (En): Bitumen is the heavy residue from petroleum distillation used widely in road construction and waterproofing.\nस्पष्टीकरण (Hi): बिटुमेन पेट्रोलियम का सबसे भारी अंश है जिसका उपयोग मुख्य रूप से सड़कों के निर्माण में किया जाता है।"
    },
    {
      qEn: "What is green hydrogen?",
      qHi: "ग्रीन हाइड्रोजन (Green hydrogen) किसे कहा जाता है?",
      optionsEn: ["Hydrogen produced by splitting water using renewable energy (like solar or wind power)", "Hydrogen produced from coal", "Hydrogen mixed with natural gas", "Hydrogen from crude oil"],
      optionsHi: ["नवीकरणीय ऊर्जा (सौर या पवन ऊर्जा) का उपयोग करके पानी के विद्युत अपघटन से बनाई गई हाइड्रोजन", "कोयले से प्राप्त हाइड्रोजन", "प्राकृतिक गैस मिश्रित हाइड्रोजन", "कच्चे तेल की हाइड्रोजन"],
      answer: 0,
      exp: "Explanation (En): Green hydrogen is generated through water electrolysis powered by renewable energy sources, producing zero greenhouse gas emissions.\nस्पष्टीकरण (Hi): जब सौर या पवन जैसी नवीकरणीय ऊर्जा से पानी का विद्युत अपघटन करके हाइड्रोजन बनाई जाती है, तो उसे ग्रीन हाइड्रोजन कहते हैं।"
    },
    {
      qEn: "What is gasohol?",
      qHi: "गैसोहोल (Gasohol) क्या होता है?",
      optionsEn: ["A blend of petrol (gasoline) and anhydrous ethanol", "Pure diesel", "Compressed natural gas", "Liquid petroleum gas"],
      optionsHi: ["पेट्रोल (गैसोलीन) और निर्जल एथेनॉल का मिश्रण", "शुद्ध डीजल", "संपीडित प्राकृतिक गैस", "द्रवीकृत पेट्रोलियम गैस"],
      answer: 0,
      exp: "Explanation (En): Gasohol is a fuel mixture typically consisting of 90% petrol and 10% ethanol, used to reduce petroleum consumption.\nस्पष्टीकरण (Hi): गैसोहोल पेट्रोल और एथेनॉल का एक मिश्रण है जो ईंधन के रूप में प्रयोग किया जाता है।"
    },
    {
      qEn: "What is the primary advantage of using CNG over petrol in vehicles?",
      qHi: "वाहन में पेट्रोल की तुलना में सीएनजी (CNG) का उपयोग करने का मुख्य लाभ क्या है?",
      optionsEn: ["It burns cleaner, producing significantly fewer pollutants and carbon emissions", "It has lower calorific value", "It is more expensive", "It makes engine noisy"],
      optionsHi: ["यह स्वच्छ रूप से जलता है और बहुत कम प्रदूषण व कार्बन उत्सर्जन करता है", "इसका ऊष्मीय मान कम होता है", "यह अधिक महंगा है", "यह इंजन को शोरगुल वाला बनाता है"],
      answer: 0,
      exp: "Explanation (En): CNG burns much more completely and cleanly than petrol, reducing harmful emissions like unburnt hydrocarbons and carbon monoxide.\nस्पष्टीकरण (Hi): सीएनजी एक पर्यावरण-अनुकूल स्वच्छ ईंधन है क्योंकि इसके दहन से कम हानिकारक गैसें निकलती हैं।"
    },
    {
      qEn: "What is the residue left behind after destructive distillation of coal called?",
      qHi: "कोयले के भंजक आसवन (destructive distillation) के बाद बचा हुआ ठोस अवशेष क्या कहलाता है?",
      optionsEn: ["Coke", "Charcoal", "Ash", "Bitumen"],
      optionsHi: ["कोक (Coke)", "चारकोल", "राख", "बिटुमेन"],
      answer: 0,
      exp: "Explanation (En): Coke is a grey, hard, and porous carbonaceous material produced by heating coal in the absence of air.\nस्पष्टीकरण (Hi): वायु की अनुपस्थिति में कोयले को गर्म करने पर जो कठोर और झरझरा कार्बन अवशेष बचता है, उसे कोक (Coke) कहते हैं।"
    },
    {
      qEn: "Why is carbon monoxide considered a dangerous poisonous gas when fuels burn with insufficient oxygen?",
      qHi: "अपरिप्याप्त ऑक्सीजन में ईंधन जलने पर बनने वाली कार्बन मोनोऑक्साइड इतनी खतरनाक जहरीली गैस क्यों मानी जाती है?",
      optionsEn: ["Because it binds strongly with hemoglobin in blood, preventing oxygen transport", "Because it has a foul smell", "Because it is explosive", "Because it is heavier than air"],
      optionsHi: ["क्योंकि यह रक्त में हीमोग्लोबिन के साथ मजबूती से जुड़ जाती है और ऑक्सीजन के परिवहन को रोकती है", "क्योंकि इसमें तेज गंध होती है", "क्योंकि यह विस्फोटक है", "क्योंकि यह हवा से भारी है"],
      answer: 0,
      exp: "Explanation (En): CO has a much higher affinity for hemoglobin than oxygen, forming carboxyhemoglobin and causing suffocation.\nस्पष्टीकरण (Hi): कार्बन मोनोऑक्साइड हीमोग्लोबिन से जुड़कर कारबॉक्सीहीमोग्लोबिन बनाती है जिससे शरीर में ऑक्सीजन की आपूर्ति ठप हो जाती है।"
    },
    {
      qEn: "What is synthetic petrol produced from coal known as?",
      qHi: "कोयले से कृत्रिम रूप से बनाए जाने वाले पेट्रोल को क्या कहा जाता है?",
      optionsEn: ["Synthetic petroleum via Fischer-Tropsch process", "Biofuel", "Gasohol", "Kerosene"],
      optionsHi: ["फिशर-ट्रोप्स प्रक्रिया द्वारा संश्लेषित पेट्रोल", "बायोईंधन", "गैसोहोल", "केरोसिन"],
      answer: 0,
      exp: "Explanation (En): The Fischer-Tropsch process converts a mixture of carbon monoxide and hydrogen (synthesis gas) derived from coal into liquid hydrocarbons (synthetic petrol).\nस्पष्टीकरण (Hi): फिशर-ट्रोप्स विधि द्वारा कोयले से प्राप्त गैसों को गैसोलीन (पेट्रोल) में बदला जाता है।"
    },
    {
      qEn: "What is wood charcoal obtained by?",
      qHi: "लकड़ी का चारकोल किससे प्राप्त किया जाता है?",
      optionsEn: ["Heating wood strongly in the limited supply of air", "Burning wood openly", "Mixing wood with water", "Distilling wood with acid"],
      optionsHi: ["वायु की सीमित आपूर्ति में लकड़ी को तेज गर्म करके", "खुली लकड़ी जलाकर", "लकड़ी को पानी में मिलाकर", "अम्ल के साथ आसवन करके"],
      answer: 0,
      exp: "Explanation (En): Wood charcoal is produced by destructive distillation of wood in the absence of air.\nस्पष्टीकरण (Hi): वायु की अनुपस्थिति में लकड़ी को गर्म करने पर चारकोल प्राप्त होता है।"
    },
    {
      qEn: "What is the ignition temperature of a good fuel?",
      qHi: "एक अच्छे ईंधन का प्रज्वलन तापमान (ignition temperature) कैसा होना चाहिए?",
      optionsEn: ["Moderate (neither too low to be unsafe nor too high to be difficult to ignite)", "Extremely high", "Zero", "Infinite"],
      optionsHi: ["मध्यम (न तो इतना कम कि असुरक्षित हो और न इतना उच्च कि जलाना कठिन हो)", "अत्यधिक उच्च", "शून्य", "अनंत"],
      answer: 0,
      exp: "Explanation (En): A good fuel should have a moderate ignition temperature so that it is safe to store and transport, yet easy to ignite when needed.\nस्पष्टीकरण (Hi): एक आदर्श ईंधन का प्रज्वलन ताप मध्यम होना चाहिए ताकि वह सुरक्षित हो और आसानी से जलाया जा सके।"
    },
    {
      qEn: "Which of the following is a liquid fuel derived from biomass or crops?",
      qHi: "निम्नलिखित में से कौन सा बायोमास या फसलों से प्राप्त होने वाला तरल ईंधन है?",
      optionsEn: ["Bio-ethanol / Biodiesel", "CNG", "LPG", "Coal gas"],
      optionsHi: ["बायो-एथेनॉल / बायोडीजल (Bio-ethanol / Biodiesel)", "सीएनजी", "एलपीजी", "कोल गैस"],
      answer: 0,
      exp: "Explanation (En): Biofuels like ethanol and biodiesel are liquid fuels produced from renewable biological resources like sugarcane, corn, and vegetable oils.\nस्पष्टीकरण (Hi): गन्ने, मक्का या तेल बीजों से प्राप्त बायो-एथेनॉल और बायोडीजल जैविक तरल ईंधन हैं।"
    }
  ],
    "Solutions": [
    {
      qEn: "What is a solution defined as in chemistry?",
      qHi: "रसायन विज्ञान में विलयन (Solution) किसे कहा जाता है?",
      optionsEn: ["A homogeneous mixture of two or more substances", "A heterogeneous mixture", "A pure chemical compound", "A suspension of large particles"],
      optionsHi: ["दो या दो से अधिक पदार्थों का समांगी मिश्रण (Homogeneous mixture)", "एक विषमांगी मिश्रण", "शुद्ध रासायनिक यौगिक", "बड़े कणों का निलंबन"],
      answer: 0,
      exp: "Explanation (En): A solution is a homogeneous mixture composed of two or more substances uniformly distributed at the molecular level.\nस्पष्टीकरण (Hi): विलयन दो या दो से अधिक पदार्थों का एक समांगी (homogeneous) मिश्रण होता है जिसमें कण एकसमान रूप से घुले होते हैं।"
    },
    {
      qEn: "What are the two main components of a binary solution?",
      qHi: "द्विअंगी विलयन (Binary solution) के दो मुख्य घटक कौन से होते हैं?",
      optionsEn: ["Solute and Solvent", "Acid and Base", "Metal and Non-metal", "Solid and Gas"],
      optionsHi: ["विलेय (Solute) और विलायक (Solvent)", "अम्ल और क्षार", "धातु और अधातु", "ठोस और गैस"],
      answer: 0,
      exp: "Explanation (En): A binary solution consists of a solute (the substance dissolved) and a solvent (the dissolving medium).\nस्पष्टीकरण (Hi): द्विअंगी विलयन में एक विलेय (जो घोला जाता है) और एक विलायक (जिसमें घोला जाता है) होता है।"
    },
    {
      qEn: "In a sugar-water solution, what is sugar acting as?",
      qHi: "चीनी और पानी के घोल में चीनी किस रूप में कार्य कर रही है?",
      optionsEn: ["Solute", "Solvent", "Emulsifier", "Catalyst"],
      optionsHi: ["विलेय (Solute)", "विलायक (Solvent)", "इमल्सीफायर", "उत्प्रेरक"],
      answer: 0,
      exp: "Explanation (En): The substance present in lesser quantity that gets dissolved is the solute (sugar), while water is the solvent.\nस्पष्टीकरण (Hi): कम मात्रा में मौजूद और घुलने वाला पदार्थ विलेय (Solute) कहलाता है, जबकि पानी विलायक है।"
    },
    {
      qEn: "What is an aqueous solution?",
      qHi: "जलीय विलयन (Aqueous solution) किसे कहते हैं?",
      optionsEn: ["A solution in which water is the solvent", "A solution in which alcohol is the solvent", "A solution with no solvent", "A solid mixture"],
      optionsHi: ["वह विलयन जिसमें विलायक पानी होता है", "वह विलयन जिसमें विलायक ऐल्कोहॉल होता है", "बिना विलायक का घोल", "एक ठोस मिश्रण"],
      answer: 0,
      exp: "Explanation (En): An aqueous solution is any solution where water acts as the dissolving medium (solvent).\nस्पष्टीकरण (Hi): जिस विलयन में पानी विलायक का काम करता है, उसे जलीय विलयन कहते हैं।"
    },
    {
      qEn: "What is a non-aqueous solution?",
      qHi: "गैर-जलीय या अजलीय विलयन (Non-aqueous solution) किसे कहते हैं?",
      optionsEn: ["A solution where the solvent is a liquid other than water (such as benzene, alcohol, ether)", "A solution made with pure water", "A frozen solution", "A gaseous mixture"],
      optionsHi: ["वह विलयन जहाँ पानी के अलावा अन्य द्रव विलायक हो (जैसे बेन्जीन, ऐल्कोहॉल, ईथर)", "शुद्ध पानी से बना घोल", "जमा हुआ घोल", "गैसीय मिश्रण"],
      answer: 0,
      exp: "Explanation (En): Non-aqueous solutions use solvents other than water, such as alcohol, acetone, or benzene.\nस्पष्टीकरण (Hi): अजलीय विलयनों में पानी को छोड़कर अन्य विलायक जैसे ऐल्कोहॉल, ईथर या बेंजीन का उपयोग होता है।"
    },
    {
      qEn: "What is a saturated solution?",
      qHi: "संतृप्त विलयन (Saturated solution) क्या होता है?",
      optionsEn: ["A solution that contains the maximum amount of solute that can dissolve at a given temperature", "A solution with no solute", "A solution that dissolves infinite solute", "A boiling solution"],
      optionsHi: ["वह विलयन जिसमें निश्चित तापमान पर विलेय की अधिकतम मात्रा घुली हो और अधिक विलेय न घुल सके", "बिना विलेय वाला घोल", "अमित विलेय घोलने वाला विलयन", "उबलता हुआ घोल"],
      answer: 0,
      exp: "Explanation (En): A saturated solution holds all the solute it can possibly dissolve at that specific temperature in equilibrium.\nस्पष्टीकरण (Hi): निश्चित ताप पर ऐसा विलयन जिसमें और अधिक विलेय पदार्थ न घोला जा सके, संतृप्त विलयन कहलाता है।"
    },
    {
      qEn: "What is an unsaturated solution?",
      qHi: "असंतृप्त विलयन (Unsaturated solution) किसे कहते हैं?",
      optionsEn: ["A solution that contains less solute than the maximum limit, and can dissolve more solute at that temperature", "A solution with excess undissolved solute", "A concentrated solid", "A frozen mixture"],
      optionsHi: ["वह विलयन जिसमें विलेय की मात्रा संतृप्त स्तर से कम हो और और अधिक विलेय घोला जा सके", "अतिरिक्त बिना घुले विलेय वाला घोल", "सांद्र ठोस", "जमा हुआ मिश्रण"],
      answer: 0,
      exp: "Explanation (En): An unsaturated solution can dissolve more of the solute at the given temperature because it hasn't reached saturation capacity.\nस्पष्टीकरण (Hi): वह विलयन जिसमें विलेय की मात्रा क्षमता से कम होती है और जिसमें और अधिक विलेय घोला जा सकता है, असंतृप्त विलयन है।"
    },
    {
      qEn: "What is a supersaturated solution?",
      qHi: "अतिसंतृप्त विलयन (Supersaturated solution) क्या है?",
      optionsEn: ["A solution that contains more dissolved solute than normal saturation limit at that temperature, making it unstable", "A dilute solution", "A neutral solution", "A frozen mixture"],
      optionsHi: ["वह विलयन जिसमें सामान्य सीमा से अधिक विलेय घुला होता है और जो अस्थायी होता है", "तनु विलयन", "उदासीन विलयन", "जमा हुआ मिश्रण"],
      answer: 0,
      exp: "Explanation (En): A supersaturated solution holds more dissolved solute than is theoretically soluble at that temperature; it is unstable and easily crystallizes upon disturbance.\nस्पष्टीकरण (Hi): अतिसंतृप्त विलयन में सामान्य तापमान की तुलना में अधिक विलेय घुला होता है और यह अत्यधिक अस्थायी होता है।"
    },
    {
      qEn: "How does the solubility of a solid in a liquid generally vary with an increase in temperature?",
      qHi: "तापमान बढ़ने पर किसी द्रव में ठोस की विलेयता (solubility) सामान्यतः कैसे बदलती है?",
      optionsEn: ["Usually increases (for endothermic dissolution processes)", "Usually decreases", "Remains constant", "Becomes zero"],
      optionsHi: ["सामान्यतः बढ़ती है (ऊष्माशोषी घुलने की प्रक्रिया के लिए)", "सामान्यतः घटती है", "नियत रहती है", "शून्य हो जाती है"],
      answer: 0,
      exp: "Explanation (En): For most solid solutes, dissolution is endothermic, so increasing temperature increases solubility according to Le Chatelier's principle.\nस्पष्टीकरण (Hi): अधिकांश ठोस पदार्थों के लिए तापमान बढ़ाने पर उनकी विलेयता बढ़ जाती है।"
    },
    {
      qEn: "How does temperature affect the solubility of gases in liquids?",
      qHi: "तापमान का द्रवों में गैसों की विलेयता पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Solubility of gases decreases as temperature increases", "Solubility increases with temperature", "Temperature has no effect", "Solubility becomes infinite"],
      optionsHi: ["तापमान बढ़ने पर गैसों की विलेयता घट जाती है", "तापमान के साथ विलेयता बढ़ती है", "तापमान का कोई प्रभाव नहीं", "विलेयता अनंत हो जाती है"],
      answer: 0,
      exp: "Explanation (En): Gas dissolution in liquids is exothermic; higher temperatures provide kinetic energy to gas molecules, causing them to escape the solution.\nस्पष्टीकरण (Hi): तापमान बढ़ाने पर गैसों की द्रव में विलेयता कम हो जाती है क्योंकि गर्म होने पर गैस के अणु बाहर निकलने लगते हैं।"
    },
    {
      qEn: "What does Henry's Law state regarding gas solubility?",
      qHi: "गैसों की विलेयता के संबंध में हेनरी का नियम (Henry's Law) क्या कहता है?",
      optionsEn: ["The solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the solution", "Solubility is independent of pressure", "Solubility is inversely proportional to temperature", "Volume of gas equals mass of liquid"],
      optionsHi: ["किसी द्रव में गैस की विलेयता विलयन के ऊपर गैस के आंशिक दाब के समानुपाती होती है", "विलेयता दाब से स्वतंत्र होती है", "विलेयता तापमान के व्युत्क्रमानुपाती होती है", "गैस का आयतन द्रव के द्रव्यमान के बराबर होता है"],
      answer: 0,
      exp: "Explanation (En): Henry's Law: p = K_H \\cdot x, meaning higher pressure increases gas solubility (e.g., carbonated soft drinks).\nस्पष्टीकरण (Hi): हेनरी के नियम के अनुसार दाब बढ़ाने पर किसी द्रव में गैस की विलेयता बढ़ती है (जैसे कोल्ड ड्रिंक की बोतल में उच्च दाब पर CO_2 घोलना)।"
    },
    {
      qEn: "What is mass percentage concentration of a solution?",
      qHi: "विलयन की द्रव्यमान प्रतिशतता (Mass percentage) क्या होती है?",
      optionsEn: ["Mass of solute in grams dissolved per 100 grams of the solution", "Mass of solute per liter", "Moles per kg", "Volume per volume"],
      optionsHi: ["विलयन के 100 ग्राम में घुले हुए विलेय का ग्राम में द्रव्यमान", "प्रति लीटर विलेय का द्रव्यमान", "मोल्स प्रति किलोग्राम", "आयतन प्रति आयतन"],
      answer: 0,
      exp: "Explanation (En): Mass percentage = \\left( \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\right) \\times 100.\nस्पष्टीकरण (Hi): द्रव्यमान प्रतिशत = \\left( \\frac{\\text{विलेय का द्रव्यमान}}{\\text{विलयन का कुल द्रव्यमान}} \\right) \\times 100 होता है।"
    },
    {
      qEn: "What is molarity (M) defined as?",
      qHi: "मोलरता (Molarity - M) को किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Number of moles of solute dissolved per liter of solution", "Moles of solute per kilogram of solvent", "Grams of solute per liter", "Moles per ml"],
      optionsHi: ["विलयन के प्रति लीटर में घुले हुए विलेय के मोरों की संख्या", "विलायक के प्रति किलोग्राम में मोल", "ग्राम प्रति लीटर", "मोल्स प्रति मिलीलीटर"],
      answer: 0,
      exp: "Explanation (En): Molarity M = \\frac{\\text{Moles of solute}}{\\text{Volume of solution in liters}}, and it depends on temperature due to volume changes.\nस्पष्टीकरण (Hi): एक लीटर विलयन में उपस्थित विलेय के मोरों की संख्या को मोलरता कहते हैं, जो तापमान पर निर्भर करती है।"
    },
    {
      qEn: "What is molality (m) defined as?",
      qHi: "मोललता (Molality - m) को किस रूप में परिभाषित किया जाता है?",
      optionsEn: ["Number of moles of solute dissolved per kilogram of solvent", "Moles per liter of solution", "Grams per kg", "Moles per mole"],
      optionsHi: ["विलायक के प्रति किलोग्राम में घुले हुए विलेय के मोरों की संख्या", "विलयन के प्रति लीटर में मोल", "ग्राम प्रति किलोग्राम", "मोल प्रति मोल"],
      answer: 0,
      exp: "Explanation (En): Molality m = \\frac{\\text{Moles of solute}}{\\text{Mass of solvent in kg}}. Unlike molarity, molality is independent of temperature.\nस्पष्टीकरण (Hi): विलायक के 1 किलोग्राम में घुले विलेय के मोरों की संख्या मोललता कहलाती है, जो ताप परिवर्तन से प्रभावित नहीं होती।"
    },
    {
      qEn: "What is mole fraction (x) of a component in a solution?",
      qHi: "विलयन में किसी घटक का मोल अंश या मोल प्रभाज (Mole fraction - x) क्या होता है?",
      optionsEn: ["The ratio of the number of moles of that component to the total number of moles of all components", "Moles divided by volume", "Mass divided by molar mass", "Percentage of mass"],
      optionsHi: ["उस घटक के मोरों की संख्या और सभी घटकों के कुल मोरों की संख्या का अनुपात", "मोल को आयतन से भाग देना", "द्रव्यमान को मोलर द्रव्यमान से भाग देना", "द्रव्यमान प्रतिशत"],
      answer: 0,
      exp: "Explanation (En): Mole fraction of component A is x_A = \\frac{n_A}{n_A + n_B}, and the sum of all mole fractions in a solution equals 1.\nस्पष्टीकरण (Hi): किसी घटक के मोल और कुल मोरों के अनुपात को मोल प्रभाज कहते हैं, और सभी घटकों के मोल प्रभाजों का योग हमेशा 1 होता है।"
    },
    {
      qEn: "What is normality (N) of a solution?",
      qHi: "विलयन की नॉर्मलता (Normality - N) क्या होती है?",
      optionsEn: ["Number of gram equivalents of solute dissolved per liter of solution", "Moles per liter", "Grams per liter", "Mole fraction"],
      optionsHi: ["विलयन के प्रति लीटर में घुले हुए विलेय के ग्राम तुल्यांकों (gram equivalents) की संख्या", "मोल प्रति लीटर", "ग्राम प्रति लीटर", "मोल प्रभाज"],
      answer: 0,
      exp: "Explanation (En): Normality N = \\frac{\\text{Gram equivalents of solute}}{\\text{Volume of solution in liters}} = M \\times \\text{valency factor}.\nस्पष्टीकरण (Hi): एक लीटर विलयन में उपस्थित विलेय के ग्राम तुल्यांकों की संख्या को नॉर्मलता कहते हैं।"
    },
    {
      qEn: "What are colligative properties of a solution?",
      qHi: "विलयन के अणुसंख्यक गुणधर्म (Colligative properties) किन्हें कहते हैं?",
      optionsEn: ["Properties that depend only on the number of solute particles and not on their chemical nature", "Properties depending on color", "Properties depending on mass of individual particle", "Properties independent of concentration"],
      optionsHi: ["वे गुण जो विलेय कणों की संख्या पर निर्भर करते हैं, न कि उनकी प्रकृति पर", "रंग पर निर्भर करने वाले गुण", "व्यक्तिगत कण के द्रव्यमान पर निर्भर गुण", "सांद्रता से स्वतंत्र गुण"],
      answer: 0,
      exp: "Explanation (En): Colligative properties (like lowering of vapor pressure, elevation of boiling point, depression of freezing point, and osmotic pressure) depend solely on solute particle count.\nस्पष्टीकरण (Hi): अणुसंख्यक गुण वे भौतिक गुण हैं जो विलयन में मौजूद विलेय कणों की संख्या पर निर्भर करते हैं।"
    },
    {
      qEn: "What happens to the vapor pressure of a solvent when a non-volatile solute is added?",
      qHi: "जब किसी विलायक में कोई अवाष्पशील विलेय (non-volatile solute) मिलाया जाता है, तो उसके वाष्प दाब पर क्या प्रभाव पड़ता है?",
      optionsEn: ["Decreases (Relative lowering of vapor pressure)", "Increases", "Remains unchanged", "Becomes infinite"],
      optionsHi: ["घट जाता है (वाष्प दाब में अवनमन)", "बढ़ जाता है", "अपवर्तित रहता है", "अनंत हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Addition of non-volatile solute reduces escaping tendency of solvent molecules, lowering vapor pressure (Raoult's Law).\nस्पष्टीकरण (Hi): अवाष्पशील विलेय मिलाने पर सतह पर विलायक के अणुओं की संख्या कम हो जाती है जिससे वाष्प दाब घट जाता है।"
    },
    {
      qEn: "What does Raoult's Law state for solutions of volatile liquids?",
      qHi: "वाष्पशील द्रवों کے विलयन के लिए राउल्ट का नियम (Raoult's Law) क्या कहता है?",
      optionsEn: ["The partial vapor pressure of each component in solution is directly proportional to its mole fraction", "Vapor pressure is constant", "Vapor pressure equals atmospheric pressure", "Boiling point is zero"],
      optionsHi: ["विलयन में प्रत्येक घटक का आंशिक वाष्प दाब उसके मोल अंश के समानुपाती होता है", "वाष्प दाब स्थिर रहता है", "वाष्प दाब वायुमंडलीय दाब के बराबर होता है", "क्वथनांक शून्य होता है"],
      answer: 0,
      exp: "Explanation (En): According to Raoult's Law, P_A = P_A^0 \\cdot x_A for ideal solutions of volatile liquids.\nस्पष्टीकरण (Hi): राउल्ट के नियम के अनुसार विलयन में किसी वाष्पशील अवयव का आंशिक वाष्प दाब उसके मोल प्रभाज के समानुपाती होता है।"
    },
    {
      qEn: "What is an ideal solution?",
      qHi: "आदर्श विलयन (Ideal solution) किसे कहते हैं?",
      optionsEn: ["A solution that obeys Raoult's Law across all concentrations and has zero enthalpy of mixing (\\Delta H_{mix} = 0)", "A solution with maximum solute", "A saturated solution", "A non-aqueous solution"],
      optionsHi: ["वह विलयन जो सभी सांद्रताओं पर राउल्ट के नियम का पालन करता है और जिसकी मिश्रण एन्थैल्पी शून्य होती है", "अधिकतम विलेय वाला घोल", "संतृप्त घोल", "अजलीय घोल"],
      answer: 0,
      exp: "Explanation (En): Ideal solutions obey Raoult's law at all concentrations, with \\Delta H_{mix} = 0 and \\Delta V_{mix} = 0.\nस्पष्टीकरण (Hi): आदर्श विलयन वे हैं जो सभी परिस्थितियों में राउल्ट के नियम का पालन करते हैं और जिनके बनने पर आयतन या ऊष्मा में कोई परिवर्तन नहीं होता।"
    },
    {
      qEn: "Why do real solutions sometimes show deviations from Raoult's Law (Non-ideal solutions)?",
      qHi: "वास्तविक विलयन कभी-कभी राउल्ट के नियम से विचलन (Non-ideal behavior) क्यों प्रदर्शित करते हैं?",
      optionsEn: ["Due to solute-solvent intermolecular interactions being different from solute-solute and solvent-solvent interactions", "Because they are ideal", "Because temperature is absolute zero", "Because they have no volume"],
      optionsHi: ["क्योंकि विलेय-विलायक के बीच के आकर्षण बल शुद्ध घटकों के आपसी बलों से अलग होते हैं", "क्योंकि वे आदर्श हैं", "क्योंकि तापमान परम शून्य है", "क्योंकि उनका कोई आयतन नहीं है"],
      answer: 0,
      exp: "Explanation (En): Different molecular forces cause positive or negative deviations from Raoult's law in non-ideal solutions.\nस्पष्टीकरण (Hi): विलेय और विलायक के अणुओं के बीच असमान आकर्षण बलों के कारण विलयन राउल्ट के नियम से धनात्मक या ऋणात्मक विचलन दर्शाते हैं।"
    },
    {
      qEn: "What is the elevation of boiling point (\\Delta T_b)?",
      qHi: "क्वथनांक उन्नयन (Elevation of boiling point - \\Delta T_b) क्या है?",
      optionsEn: ["The increase in boiling point of a solvent when a non-volatile solute is added, proportional to molality", "Decrease in boiling point", "Boiling point of pure solvent", "Freezing point depression"],
      optionsHi: ["अवाष्पशील विलेय मिलाने पर विलायक के क्वथनांक में होने वाली वृद्धि, जो मोललता के समानुपाती होती है", "क्वथनांक में कमी", "शुद्ध विलायक का क्वथनांक", "हिमांक अवनमन"],
      answer: 0,
      exp: "Explanation (En): \\Delta T_b = K_b \\cdot m, where K_b is the ebullioscopic constant.\nस्पष्टीकरण (Hi): विलायक में अवाष्पशील विलेय मिलाने पर उसका क्वथनांक बढ़ जाता है, जिसे क्वथनांक उन्नयन कहते हैं (\\Delta T_b = K_b \\cdot m)।"
    },
    {
      qEn: "What is the depression of freezing point (\\Delta T_f)?",
      qHi: "हिमांक अवनमन (Depression of freezing point - \\Delta T_f) क्या है?",
      optionsEn: ["The lowering of freezing point of a solvent upon adding a non-volatile solute, proportional to molality", "Increase in freezing point", "Melting of ice", "Boiling point elevation"],
      optionsHi: ["अवाष्पशील विलेय मिलाने पर विलायक के हिमांक में होने वाली गिरावट, जो मोललता के समानुपाती होती है", "हिमांक में वृद्धि", "बर्फ का पिघलना", "क्वथनांक उन्नयन"],
      answer: 0,
      exp: "Explanation (En): \\Delta T_f = K_f \\cdot m, where K_f is the cryoscopic constant (explains why salt is added to icy roads).\nस्पष्टीकरण (Hi): विलायक में विलेय मिलाने पर उसका हिमांक घट जाता है (\\Delta T_f = K_f \\cdot m), जैसे बर्फ पर नमक छिड़कना।"
    },
    {
      qEn: "What is osmosis?",
      qHi: "परासरण (Osmosis) किसे कहते हैं?",
      optionsEn: ["The spontaneous flow of solvent molecules through a semipermeable membrane from lower concentration to higher concentration region", "Flow of solute particles", "Diffusion of gases", "Evaporation of water"],
      optionsHi: ["विलायक के अणुओं का अर्धपारगम्य झिल्ली से होकर कम सांद्रता वाले क्षेत्र से अधिक सांद्रता वाले क्षेत्र की ओर स्वतः प्रवाह", "विलेय कणों का प्रवाह", "गैसों का विसरण", "पानी का वाष्पीकरण"],
      answer: 0,
      exp: "Explanation (En): Osmosis is the net movement of solvent through a semipermeable membrane from a region of lower solute concentration to higher solute concentration.\nस्पष्टीकरण (Hi): परासरण में विलायक के अणु अर्धपारगम्य झिल्ली (semipermeable membrane) से होकर कम सांद्रता से अधिक सांद्रता की ओर गति करते हैं।"
    },
    {
      qEn: "What is osmotic pressure (\\pi)?",
      qHi: "परासरण दाब (Osmotic pressure - \\pi) क्या है?",
      optionsEn: ["The excess pressure that must be applied to a solution to stop osmosis", "Pressure of gas above solution", "Atmospheric pressure", "Vapor pressure of solvent"],
      optionsHi: ["परासरण की प्रक्रिया को रोकने के लिए विलयन पर लगाया जाने वाला आवश्यक अतिरिक्त दाब", "घोल के ऊपर गैस का दाब", "वायुमंडलीय दाब", "विलायक का वाष्प दाब"],
      answer: 0,
      exp: "Explanation (En): Osmotic pressure is given by Van't Hoff equation \\pi = iCRT, and is a colligative property.\nस्पष्टीकरण (Hi): परासरण की क्रिया को पूरी तरह रोकने के लिए विलयन की तरफ जितना अतिरिक्त दाब लगाना पड़ता है, उसे परासरण दाब कहते हैं।"
    },
    {
      qEn: "What are isotonic solutions?",
      qHi: "समपरासारी विलयन (Isotonic solutions) किन्हें कहते हैं?",
      optionsEn: ["Solutions having the same osmotic pressure at a given temperature", "Solutions with different concentrations", "Solutions with different temperatures", "Pure water solutions"],
      optionsHi: ["निश्चित तापमान पर समान परासरण दाब वाले विलयन", "भिन्न सांद्रता वाले विलयन", "भिन्न तापमान वाले विलयन", "शुद्ध पानी के विलयन"],
      answer: 0,
      exp: "Explanation (En): Isotonic solutions have identical osmotic pressures and do not experience osmosis when separated by a semipermeable membrane.\nस्पष्टीकरण (Hi): जिन दो विलयनों का परासरण दाब समान होता है, उन्हें समपरासारी विलयन कहते हैं।"
    },
    {
      qEn: "What is Van't Hoff factor (i)?",
      qHi: "वांट हॉफ गुणांक (Van't Hoff factor - i) क्या दर्शाता है?",
      optionsEn: ["The ratio of normal molar mass to experimental molar mass, or degree of dissociation/association of solute", "Density of solution", "Viscosity", "Boiling point constant"],
      optionsHi: ["सामान्य मोलर द्रव्यमान और प्रायोगिक मोलर द्रव्यमान का अनुपात, या वियोजन/संगुणन की मात्रा", "विलयन का घनत्व", "श्यानता", "क्वथनांक स्थिरांक"],
      answer: 0,
      exp: "Explanation (En): Van't Hoff factor i accounts for dissociation or association of solute particles in colligative property calculations (i = \\frac{\\text{observed particles}}{\\text{calculated particles}}).\nस्पष्टीकरण (Hi): वांट हॉफ गुणांक i अणुसंख्यक गुणों में वियोजन या संगुणन के प्रभाव को समायोजित करने के लिए प्रयोग किया जाता है।"
    },
    {
      qEn: "What is the Van't Hoff factor for a completely dissociated strong electrolyte like sodium chloride (NaCl) in water?",
      qHi: "पानी में पूरी तरह वियोजित होने वाले मजबूत विद्युत अपघट्य सोडियम क्लोराइड (NaCl) के लिए वांट हॉफ गुणांक i का मान कितना होता है?",
      optionsEn: ["2", "1", "0.5", "3"],
      optionsHi: ["2", "1", "0.5", "3"],
      answer: 0,
      exp: "Explanation (En): NaCl dissociates into 2 ions (Na^+ and Cl^-), so its ideal Van't Hoff factor i = 2.\nस्पष्टीकरण (Hi): NaCl पानी में खुलकर 2 आयन देता है (Na^+ और Cl^-), अतः इसका आदर्श वांट हॉफ गुणांक 2 होता है।"
    },
    {
      qEn: "What is reverse osmosis (RO) used for?",
      qHi: "उत्क्रम परासरण (Reverse Osmosis - RO) का उपयोग मुख्य रूप से किसके लिए किया जाता है?",
      optionsEn: ["Desalination of seawater and purification of drinking water by applying pressure greater than osmotic pressure", "Boiling water quickly", "Freezing liquids", "Measuring vapor pressure"],
      optionsHi: ["परासरण दाब से अधिक दाब लगाकर समुद्री जल के लवणीकरण (desalination) और पेयजल शुद्धिकरण हेतु", "पानी जल्दी उबालने के लिए", "द्रवों को जमाने के लिए", "वाष्प दाब मापने के लिए"],
      answer: 0,
      exp: "Explanation (En): Applying pressure greater than osmotic pressure forces solvent molecules to move from high concentration solution to pure solvent through a membrane (used in RO water filters).\nस्पष्टीकरण (Hi): परासरण दाब से अधिक दबाव लगाने पर विलायक के अणु अधिक सांद्रता से शुद्ध विलायक की ओर जाने लगते हैं, जिसका उपयोग आरओ वाटर प्यूरीफायर में होता है।"
    },
    {
      qEn: "What type of solution is fog or cloud?",
      qHi: "कोहरा (Fog) या बादल (Cloud) किस प्रकार का कोलाइडियल विलयन है?",
      optionsEn: ["Liquid dispersed in gas (Aerosol)", "Gas dispersed in liquid", "Solid dispersed in gas", "Liquid in liquid (Emulsion)"],
      optionsHi: ["गैस में परिक्षिप्त द्रव (Aerosol - एरोसोल)", "द्रव में गैस", "गैस में ठोस", "द्रव में द्रव (इमल्शन)"],
      answer: 0,
      exp: "Explanation (En): Fog and clouds are aerosols where liquid water droplets are dispersed in a gas (air).\nस्पष्टीकरण (Hi): कोहरा और बादल 'एरोसोल' का उदाहरण हैं जिसमें हवा (गैस) में पानी की बूंदें (द्रव) फैली होती हैं।"
    }
  ],
    "Chemical Reactions": [
    {
      qEn: "What is a chemical reaction defined as?",
      qHi: "रासायनिक अभिक्रिया (Chemical reaction) किसे कहा जाता है?",
      optionsEn: ["A process in which one or more substances are converted into new substances with different properties", "A physical change of state", "Melting of ice", "Boiling of water"],
      optionsHi: ["वह प्रक्रिया जिसमें एक या अधिक पदार्थ नए गुणों वाले नए पदार्थों में बदल जाते हैं", "अवस्था का भौतिक परिवर्तन", "बर्फ का पिघलना", "पानी का उबलना"],
      answer: 0,
      exp: "Explanation (En): A chemical reaction involves breaking of bonds in reactants and formation of new bonds to form products with distinct properties.\nस्पष्टीकरण (Hi): रासायनिक अभिक्रिया में पुराने बंध टूटते हैं और नए पदार्थ बनते हैं जिनके गुण बिल्कुल अलग होते हैं।"
    },
    {
      qEn: "What indicates that a chemical reaction has taken place when magnesium ribbon burns with a dazzling white flame?",
      qHi: "चमकीली सफेद लौ के साथ मैग्नीशियम रिबन के जलने पर क्या संकेत मिलता है कि रासायनिक अभिक्रिया हुई है?",
      optionsEn: ["Formation of a white powder (magnesium oxide) and evolution of heat/light", "Melting into liquid", "Freezing", "Turning into gas completely"],
      optionsHi: ["सफेद पाउडर (मैग्नीशियम ऑक्साइड) का बनना और ऊष्मा/प्रकाश का उत्पन्न होना", "द्रव में पिघलना", "जमना", "पूरी तरह गैस बनना"],
      answer: 0,
      exp: "Explanation (En): Burning magnesium in air forms white magnesium oxide powder accompanied by heat and light, proving a chemical change.\nस्पष्टीकरण (Hi): हवा में मैग्नीशियम के जलने से सफेद रंग का मैग्नीशियम ऑक्साइड बनता है जो रासायनिक परिवर्तन का प्रमाण है।"
    },
    {
      qEn: "What is a combination reaction?",
      qHi: "संयोजन अभिक्रिया (Combination reaction) क्या होती है?",
      optionsEn: ["A reaction in which two or more reactants combine to form a single product", "A reaction where one reactant splits into two", "An exchange of ions", "Burning of fuel"],
      optionsHi: ["वह अभिक्रिया जिसमें दो या दो से अधिक अभिकारक मिलकर एक एकल उत्पाद बनाते हैं", "वह अभिक्रिया जहाँ एक अभिकारक टूटता है", "आयनों का आदान-प्रदान", "ईंधन का जलना"],
      answer: 0,
      exp: "Explanation (En): In a combination reaction, multiple reactants join to form a single product (A + B \\rightarrow C).\nस्पष्टीकरण (Hi): संयोजन अभिक्रिया में दो या दो से अधिक पदार्थ जुड़कर केवल एक नया उत्पाद बनाते हैं।"
    },
    {
      qEn: "What is a decomposition reaction?",
      qHi: "वियोजन या अपघटन अभिक्रिया (Decomposition reaction) क्या होती है?",
      optionsEn: ["A reaction in which a single reactant breaks down into two or more simpler products", "A reaction combining two substances", "Displacement of one metal by another", "Neutralization of acid"],
      optionsHi: ["वह अभिक्रिया जिसमें एक एकल अभिकारक टूटकर दो या दो से अधिक सरल उत्पाद बनाता है", "दो पदार्थों को मिलाने वाली अभिक्रिया", "एक धातु द्वारा दूसरी का विस्थापन", "अम्ल का उदासीनीकरण"],
      answer: 0,
      exp: "Explanation (En): Decomposition reactions require energy (heat, light, or electricity) to break a compound into simpler parts (AB \\rightarrow A + B).\nस्पष्टीकरण (Hi): अपघटन अभिक्रिया में एक यौगिक ऊर्जा पाकर दो या अधिक भागों में टूट जाता है।"
    },
    {
      qEn: "What type of reaction occurs when calcium carbonate (limestone) is heated to form calcium oxide and carbon dioxide?",
      qHi: "कैल्शियम कार्बोनेट (चूना पत्थर) को गर्म करने पर कैल्शियम ऑक्साइड और कार्बन डाइऑक्साइड बनने पर किस प्रकार की अभिक्रिया होती है?",
      optionsEn: ["Thermal decomposition reaction", "Combination reaction", "Displacement reaction", "Double displacement reaction"],
      optionsHi: ["ऊष्मीय अपघटन अभिक्रिया (Thermal decomposition)", "संयोजन अभिक्रिया", "विस्थापन अभिक्रिया", "द्विविस्थापन अभिक्रिया"],
      answer: 0,
      exp: "Explanation (En): Heating limestone provides thermal energy to decompose CaCO_3 into CaO and CO_2.\nस्पष्टीकरण (Hi): चूना पत्थर को गर्म करना ऊष्मीय अपघटन का उत्कृष्ट उदाहरण है।"
    },
    {
      qEn: "What is a displacement reaction?",
      qHi: "विस्थापन अभिक्रिया (Displacement reaction) किसे कहते हैं?",
      optionsEn: ["A chemical reaction in which a more reactive element displaces a less reactive element from its compound", "Exchange of two ions", "Combination of elements", "Decomposition of salt"],
      optionsHi: ["वह अभिक्रिया जिसमें अधिक सक्रिय तत्व किसी कम सक्रिय तत्व को उसके यौगिक से हटा देता है", "दो आयनों का आदान-प्रदान", "तत्वों का संयोजन", "लवण का अपघटन"],
      answer: 0,
      exp: "Explanation (En): A more reactive metal pushes out a less reactive one from its salt solution (e.g., Fe + CuSO_4 \\rightarrow FeSO_4 + Cu).\nस्पष्टीकरण (Hi): विस्थापन अभिक्रिया में अधिक सक्रिय धातु अपने से कम सक्रिय धातु को उसके विलयन से विस्थापित कर देती है।"
    },
    {
      qEn: "What is a double displacement reaction?",
      qHi: "द्विविस्थापन अभिक्रिया (Double displacement reaction) क्या होती है?",
      optionsEn: ["A reaction in which two different atoms or groups of atoms exchange places between two compounds (precipitation reactions)", "Splitting of one compound", "Addition of hydrogen", "Loss of oxygen"],
      optionsHi: ["वह अभिक्रिया जिसमें दो यौगिकों के बीच आयनों या घटकों का आदान-प्रदान होता है (अवक्षेपण अभिक्रियाएं)", "एक यौगिक का टूटना", "हाइड्रोजन का जुड़ना", "ऑक्सीजन की हानि"],
      answer: 0,
      exp: "Explanation (En): Double displacement involves mutual exchange of ions between two reactants, frequently resulting in a precipitate.\nस्पष्टीकरण (Hi): द्विविस्थापन अभिक्रिया में अभिकारकों के बीच आयनों का अदला-बदली होती है, जिससे अक्सर अवक्षेप बनता है।"
    },
    {
      qEn: "What is an oxidation reaction defined as in terms of electrons or oxygen?",
      qHi: "ऑक्सीजन या इलेक्ट्रอน के संदर्भ में ऑक्सीकरण (Oxidation) अभिक्रिया किसे कहते हैं?",
      optionsEn: ["Addition of oxygen, removal of hydrogen, or loss of electrons", "Gain of electrons only", "Addition of hydrogen only", "Loss of oxygen"],
      optionsHi: ["ऑक्सीजन का जुड़ना, हाइड्रोजन का हटना या इलेक्ट्रॉनों का त्याग (loss of electrons)", "केवल इलेक्ट्रॉन ग्रहण करना", "केवल हाइड्रोजन जोड़ना", "ऑक्सीजन का हटना"],
      answer: 0,
      exp: "Explanation (En): Oxidation involves gain of oxygen, loss of hydrogen, or loss of electrons (increase in oxidation state).\nस्पष्टीकरण (Hi): ऑक्सीकरण का मतलब ऑक्सीजन का जुड़ना, हाइड्रोजन का निकलना या इलेक्ट्रॉनों का त्याग करना है।"
    },
    {
      qEn: "What is a reduction reaction defined as?",
      qHi: "अपचयन (Reduction) अभिक्रिया किसे कहते हैं?",
      optionsEn: ["Addition of hydrogen, removal of oxygen, or gain of electrons", "Loss of electrons", "Gain of oxygen", "Loss of hydrogen"],
      optionsHi: ["हाइड्रोजन का जुड़ना, ऑक्सीजन का हटना या इलेक्ट्रॉनों को ग्रहण करना", "इलेक्ट्रॉनों का त्याग", "ऑक्सीजन का जुड़ना", "हाइड्रोजन का हटना"],
      answer: 0,
      exp: "Explanation (En): Reduction is the opposite of oxidation: addition of hydrogen, removal of oxygen, or gain of electrons.\nस्पष्टीकरण (Hi): अपचयन में हाइड्रोजन का जुड़ना, ऑक्सीजन का हटना या इलेक्ट्रॉन ग्रहण करना शामिल होता है।"
    },
    {
      qEn: "What is a redox reaction?",
      qHi: "रेडॉक्स अभिक्रिया (Redox reaction) क्या होती है?",
      optionsEn: ["A reaction in which oxidation and reduction take place simultaneously", "A reaction with no electron transfer", "A physical dissolution", "Acid-base neutralization only"],
      optionsHi: ["वह अभिक्रिया जिसमें ऑक्सीकरण और अपचयन दोनों साथ-साथ होते हैं", "बिना इलेक्ट्रॉन स्थानांतरण की अभिक्रिया", "भौतिक घुलनशीलता", "केवल अम्ल-क्षार उदासीनीकरण"],
      answer: 0,
      exp: "Explanation (En): In a redox reaction, one species is oxidized while another is reduced concurrently.\nस्पष्टीकरण (Hi): रेडॉक्स अभिक्रिया वह प्रक्रिया है जिसमें एक पदार्थ का ऑक्सीकरण और दूसरे का अपचयन एक साथ होता है।"
    },
    {
      qEn: "What is an exothermic reaction?",
      qHi: "ऊष्मक्षेपी अभिक्रिया (Exothermic reaction) किसे कहते हैं?",
      optionsEn: ["A chemical reaction that releases heat energy to the surroundings", "A reaction that absorbs heat", "A reaction at absolute zero", "A physical phase change"],
      optionsHi: ["वह रासायनिक अभिक्रिया जिसमें ऊष्मा ऊर्जा परिवेश में उत्सर्जित होती है", "वह अभिक्रिया जो ऊष्मा अवशोषित करे", "परम शून्य पर अभिक्रिया", "भौतिक अवस्था परिवर्तन"],
      answer: 0,
      exp: "Explanation (En): Exothermic reactions release energy, resulting in a temperature rise of the surroundings (e.g., respiration, burning of natural gas).\nस्पष्टीकरण (Hi): जिन अभिक्रियाओं में ऊष्मा बाहर निकलती है उन्हें ऊष्मक्षेपी अभिक्रिया कहते हैं (जैसे श्वसन)।"
    },
    {
      qEn: "What is an endothermic reaction?",
      qHi: "ऊष्माशोषी अभिक्रिया (Endothermic reaction) किसे कहते हैं?",
      optionsEn: ["A chemical reaction that absorbs heat energy from the surroundings", "A reaction that releases heat", "A combustion reaction", "Freezing of water"],
      optionsHi: ["वह रासायनिक अभिक्रिया जिसमें परिवेश से ऊष्मा ऊर्जा अवशोषित होती है", "ऊष्मा छोड़ने वाली अभिक्रिया", "दहन अभिक्रिया", "पानी का जमना"],
      answer: 0,
      exp: "Explanation (En): Endothermic reactions absorb heat from their environment, causing a temperature drop (e.g., photosynthesis, dissolving ammonium chloride in water).\nस्पष्टीकरण (Hi): जिन अभिक्रियाओं में ऊष्मा का अवशोषण होता है उन्हें ऊष्माशोषी अभिक्रिया कहते हैं (जैसे प्रकाश संश्लेषण)।"
    },
    {
      qEn: "What is a precipitation reaction?",
      qHi: "अवक्षेपण अभिक्रिया (Precipitation reaction) क्या होती है?",
      optionsEn: ["A double displacement reaction that produces an insoluble solid product (precipitate)", "A reaction producing gas", "Dissolution of salt", "Melting of ice"],
      optionsHi: ["ऐसी द्विविस्थापन अभिक्रिया जिसमें एक अघुलनशील ठोस (अवक्षेप) बनता है", "गैस पैदा करने वाली अभिक्रिया", "नमक का घुलना", "बर्फ का पिघलना"],
      answer: 0,
      exp: "Explanation (En): When two aqueous ionic solutions react to form an insoluble salt, it separates as a precipitate.\nस्पष्टीकरण (Hi): जब दो विलयनों की अभिक्रिया से कोई अघुलनशील ठोस नीचे बैठ जाता है, तो उसे अवक्षेपण अभिक्रिया कहते हैं।"
    },
    {
      qEn: "What is a catalyst?",
      qHi: "उत्प्रेरक (Catalyst) क्या होता है?",
      optionsEn: ["A substance that increases or decreases the rate of a chemical reaction without itself being consumed permanently", "A reactant that gets used up", "A product of reaction", "An inhibitor only"],
      optionsHi: ["वह पदार्थ जो बिना स्वयं खर्च हुए रासायनिक अभिक्रिया की दर को बदल देता है", "खर्च होने वाला अभिकारक", "अभिक्रिया का उत्पाद", "केवल संदमक"],
      answer: 0,
      exp: "Explanation (En): A catalyst alters reaction speed by providing an alternative pathway with lower activation energy without undergoing permanent chemical change.\nस्पष्टीकरण (Hi): उत्प्रेरक वह रासायनिक पदार्थ है जो अभिक्रिया की गति को त्वरित या मंद कर देता है लेकिन खुद अपरिवर्तित रहता है।"
    },
    {
      qEn: "What is rancidity?",
      qHi: "विकृतगंधिता (Rancidity) किसे कहते हैं?",
      optionsEn: ["Oxidation of fats and oils in food, leading to unpleasant smell and taste", "Freshness of food", "Fermentation of sugar", "Dissolution of salt"],
      optionsHi: ["खाद्य पदार्थों में मौजूद वसा और तेलों का ऑक्सीकरण जिससे खराब गंध और स्वाद उत्पन्न होता है", "भोजन की ताज़गी", "चीनी का किण्वन", "नमक का घुलना"],
      answer: 0,
      exp: "Explanation (En): Rancidity is the oxidation of fats and oils when exposed to air, causing foul odor and taste (prevented by antioxidants and nitrogen flushing).\nस्पष्टीकरण (Hi): तेल और वसायुक्त भोजन हवा के संपर्क में आकर ऑक्सीकृत हो जाते हैं जिससे उनका स्वाद और गंध खराब हो जाती है।"
    },
    {
      qEn: "Why are bags of potato chips flushed with nitrogen gas?",
      qHi: "आलू के चिप्स के पैकेट में नाइट्रोजन गैस क्यों भरी जाती है?",
      optionsEn: ["To flush out oxygen and prevent rancidity (oxidation of oil)", "To make chips crunchy by heating", "To add flavor", "To increase weight"],
      optionsHi: ["ऑक्सीजन को हटाने और वसा के ऑक्सीकरण (विकृतगंधिता) को रोकने के लिए", "गर्म करके चिप्स कुरकुरे बनाने के लिए", "स्वाद बढ़ाने के लिए", "वजन बढ़ाने के लिए"],
      answer: 0,
      exp: "Explanation (En): Nitrogen is an unreactive gas that replaces oxygen in chip bags, preventing the oxidation of oils.\nस्पष्टीकरण (Hi): नाइट्रोजन एक अक्रिय गैस है जो चिप्स को ऑक्सीकृत होने और खराब होने से बचाती है।"
    },
    {
      qEn: "What is corrosion of iron commonly known as?",
      qHi: "लोहे के संक्षारण को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Rusting", "Tarnishing", "Verdigris", "Combustion"],
      optionsHi: ["जंग लगना (Rusting)", "मलिन होना", "वरडग्रिस", "दहन"],
      answer: 0,
      exp: "Explanation (En): Rusting is the specific term for corrosion of iron in the presence of oxygen and moisture.\nस्पष्टीकरण (Hi): नमी और ऑक्सीजन की उपस्थिति में लोहे पर भूरी परत जमने को जंग लगना (Rusting) कहते हैं।"
    },
    {
      qEn: "What is the green coating that forms on copper articles over time due to atmospheric exposure called?",
      qHi: "वायुमंडल के संपर्क में रहने पर तांबे के बर्तनों पर जमने वाली हरी परत को क्या कहा जाता है?",
      optionsEn: ["Basic copper carbonate (CuCO_3 \\cdot Cu(OH)_2)", "Copper oxide", "Rust", "Silver sulfide"],
      optionsHi: ["बेसिक कॉपर कार्बोनेट (CuCO_3 \\cdot Cu(OH)_2)", "कॉपर ऑक्साइड", "जंग", "सिल्वर सल्फाइड"],
      answer: 0,
      exp: "Explanation (En): Copper reacts with moist CO_2 in air to form green basic copper carbonate, losing its shiny brown luster.\nस्पष्टीकरण (Hi): तांबा हवा में मौजूद नमी और CO_2 से क्रिया करके बेसिक कॉपर कार्बोनेट की हरी परत बना लेता है।"
    },
    {
      qEn: "What is the black coating that forms on silver articles when exposed to air?",
      qHi: "हवा के संपर्क में आने पर चांदी के आभूषणों पर पड़ने वाली काली परत क्या होती है?",
      optionsEn: ["Silver sulfide (Ag_2S)", "Silver oxide", "Rust", "Copper carbonate"],
      optionsHi: ["सिल्वर सल्फाइड (Ag_2S)", "सिल्वर ऑक्साइड", "जंग", "कॉपर कार्बोनेट"],
      answer: 0,
      exp: "Explanation (En): Silver reacts with sulfur compounds (like hydrogen sulfide) in air to form black silver sulfide (Ag_2S).\nस्पष्टीकरण (Hi): हवा में मौजूद सल्फर यौगिकों से क्रिया करके चांदी काली पड़ जाती है जो सिल्वर सल्फाइड होती है।"
    },
    {
      qEn: "What is a balanced chemical equation?",
      qHi: "संतुलित रासायनिक समीकरण (Balanced chemical equation) किसे कहते हैं?",
      optionsEn: ["An equation where the number of atoms of each element is equal on both reactant and product sides (satisfying law of conservation of mass)", "An equation with equal moles", "An equation with equal volumes", "An unbalanced reaction"],
      optionsHi: ["वह समीकरण जिसमें अभिकारक और उत्पाद दोनों पक्षों में प्रत्येक तत्व के परमाणुओं की संख्या समान हो (द्रव्यमान संरक्षण नियम)", "समान मोल वाला समीकरण", "समान आयतन वाला समीकरण", "असंतुलित अभिक्रिया"],
      answer: 0,
      exp: "Explanation (En): A balanced equation obeys the Law of Conservation of Mass, having identical atom counts on both sides.\nस्पष्टीकरण (Hi): संतुलित समीकरण द्रव्यमान संरक्षण के नियम का पालन करता है जिसमें दोनों तरफ परमाणु बराबर होते हैं।"
    },
    {
      qEn: "What law forms the basis for balancing chemical equations?",
      qHi: "रासायनिक समीकरणों को संतुलित करने का आधार कौन सा नियम है?",
      optionsEn: ["Law of Conservation of Mass", "Law of Definite Proportions", "Avogadro's Law", "Boyle's Law"],
      optionsHi: ["द्रव्यमान संरक्षण का नियम (Law of Conservation of Mass)", "स्थिर अनुपात का नियम", "आवोग्राहडो नियम", "बॉयल का नियम"],
      answer: 0,
      exp: "Explanation (En): Lavoisier's Law of Conservation of Mass states mass cannot be created or destroyed, requiring equal atom counts in reactions.\nस्पष्टीकरण (Hi): द्रव्यमान संरक्षण के नियम के अनुसार रासायनिक अभिक्रिया में द्रव्यमान न तो बनता है और न ही नष्ट होता है।"
    },
    {
      qEn: "What type of chemical reaction is photosynthesis in plants?",
      qHi: "पौधों में प्रकाश संश्लेषण (Photosynthesis) किस प्रकार की रासायनिक अभिक्रिया है?",
      optionsEn: ["Endothermic reaction", "Exothermic reaction", "Decomposition reaction", "Neutralization"],
      optionsHi: ["ऊष्माशोषी अभिक्रिया (Endothermic reaction)", "ऊष्मक्षेपी अभिक्रिया", "अपघटन अभिक्रिया", "उदासीनीकरण"],
      answer: 0,
      exp: "Explanation (En): Photosynthesis absorbs solar energy to convert CO_2 and water into glucose, making it endothermic.\nस्पष्टीकरण (Hi): प्रकाश संश्लेषण में सूर्य की सौर ऊर्जा अवशोषित होती है, इसलिए यह एक ऊष्माशोषी अभिक्रिया है।"
    },
    {
      qEn: "What type of chemical reaction is cellular respiration?",
      qHi: "कोशिकीय श्वसन (Cellular respiration) किस प्रकार की रासायनिक अभिक्रिया है?",
      optionsEn: ["Exothermic reaction", "Endothermic reaction", "Precipitation reaction", "Photochemical reaction"],
      optionsHi: ["ऊष्मक्षेपी अभिक्रिया (Exothermic reaction)", "ऊष्माशोषी अभिक्रिया", "अवक्षेपण अभिक्रिया", "प्रकाशीय रासायनिक अभिक्रिया"],
      answer: 0,
      exp: "Explanation (En): Respiration breaks down glucose with oxygen to release energy (ATP) for body functions, making it exothermic.\nस्पष्टीकरण (Hi): श्वसन के दौरान ग्लूकोज के टूटने से ऊर्जा निकलती है, अतः यह एक ऊष्मक्षेपी अभिक्रिया है।"
    },
    {
      qEn: "What is a photochemical reaction?",
      qHi: "प्रकाशासकीय या प्रकाश-रासायनिक अभिक्रिया (Photochemical reaction) क्या होती है?",
      optionsEn: ["A chemical reaction initiated or driven by absorption of light energy (photons)", "A reaction driven by heat", "Reaction driven by electricity", "Spontaneous dark reaction"],
      optionsHi: ["प्रकाश ऊर्जा (फोटॉन) के अवशोषण से शुरू या संचालित होने वाली रासायनिक अभिक्रिया", "ऊष्मा द्वारा संचालित अभिक्रिया", "विद्युत द्वारा संचालित", "अंधेरे में स्वतः अभिक्रिया"],
      answer: 0,
      exp: "Explanation (En): Photochemical reactions require light photons to proceed (e.g., photosynthesis, silver chloride decomposition in photography).\nस्पष्टीकरण (Hi): प्रकाश-रासायनिक अभिक्रियाएं प्रकाश की उपस्थिति में होती हैं (जैसे फोटोग्राफी में सिल्वर क्लोराइड का अपघटन)।"
    },
    {
      qEn: "What happens when silver chloride is exposed to sunlight in a china dish?",
      qHi: "चाइना डिश में रखे सिल्वर क्लोराइड को सूर्य के प्रकाश में छोड़ने पर क्या होता है?",
      optionsEn: ["It turns grey as it decomposes into silver metal and chlorine gas", "It turns blue", "It dissolves", "It explodes"],
      optionsHi: ["वह भूरा या धूसर हो जाता है क्योंकि वह चांदी और क्लोरीन गैस में अपघटित हो जाता है", "वह नीला हो जाता है", "वह घुल जाता है", "वह फट जाता है"],
      answer: 0,
      exp: "Explanation (En): 2AgCl \\xrightarrow{\\text{sunlight}} 2Ag + Cl_2. Sunlight decomposes white silver chloride into grey metallic silver.\nस्पष्टीकरण (Hi): सूर्य के प्रकाश से सफेद सिल्वर क्लोराइड टूटकर धूसर रंग की चांदी और क्लोरीन गैस बनाता है।"
    },
    {
      qEn: "What is an electrolytic decomposition reaction?",
      qHi: "विद्युत अपघटन (Electrolytic decomposition) अभिक्रिया क्या है?",
      optionsEn: ["Decomposition caused by passing electric current through a molten or aqueous compound", "Decomposition by heat", "Decomposition by sunlight", "Thermal reaction"],
      optionsHi: ["यौगिक के जलीय या गलित रूप में विद्युत धारा प्रवाहित करने पर होने वाला अपघटन", "ऊष्मा द्वारा अपघटन", "सूर्य के प्रकाश द्वारा अपघटन", "ऊष्मीय अभिक्रिया"],
      answer: 0,
      exp: "Explanation (En): Electrolysis uses electrical energy to break down compounds (e.g., electrolysis of acidified water into hydrogen and oxygen).\nस्पष्टीकरण (Hi): यौगिक में बिजली (विद्युत धारा) प्रवाहित करके उसे सरल घटकों में तोड़ने को विद्युत अपघटन कहते हैं।"
    },
    {
      qEn: "What is an oxidizing agent (oxidant)?",
      qHi: "ऑक्सीकारक (Oxidizing agent) किसे कहते हैं?",
      optionsEn: ["A substance that oxidizes others by accepting electrons or providing oxygen", "A substance that donates electrons", "A substance that absorbs oxygen", "An inert catalyst"],
      optionsHi: ["वह पदार्थ जो इलेक्ट्रॉन ग्रहण करके दूसरों का ऑक्सीकरण करता है या ऑक्सीजन देता है", "इलेक्ट्रॉन दान करने वाला पदार्थ", "ऑक्सीजन सोखने वाला पदार्थ", "अक्रिय उत्प्रेरक"],
      answer: 0,
      exp: "Explanation (En): An oxidizing agent gets reduced itself while causing oxidation of another substance.\nस्पष्टीकरण (Hi): ऑक्सीकारक वह पदार्थ है जो दूसरे को ऑक्सीजन देता है या खुद अपचयित होता है।"
    },
    {
      qEn: "What is a reducing agent (reductant)?",
      qHi: "अपचायक (Reducing agent) किसे कहते हैं?",
      optionsEn: ["A substance that reduces others by donating electrons or removing oxygen", "A substance that accepts electrons", "An oxidizing compound", "Acid catalyst"],
      optionsHi: ["वह पदार्थ जो इलेक्ट्रॉन दान करके दूसरों का अपचयन करता है या ऑक्सीजन हटाता है", "इलेक्ट्रॉन लेने वाला पदार्थ", "ऑक्सीकारक यौगिक", "अम्ल उत्प्रेरक"],
      answer: 0,
      exp: "Explanation (En): A reducing agent gets oxidized itself while bringing about reduction of another reactant.\nस्पष्टीकरण (Hi): अपचायक वह पदार्थ है जो दूसरे का अपचयन करता है और खुद ऑक्सीकृत हो जाता है।"
    },
    {
      qEn: "In the reaction CuO + H_2 \\rightarrow Cu + H_2O, which substance is oxidized and which is reduced?",
      qHi: "अभिक्रिया CuO + H_2 \\rightarrow Cu + H_2O में किसका ऑक्सीकरण और किसका अपचयन हुआ है?",
      optionsEn: ["H_2 is oxidized to H_2O, and CuO is reduced to Cu", "CuO is oxidized and H_2 is reduced", "Both are oxidized", "Neither is oxidized"],
      optionsHi: ["H_2 ऑक्सीकृत होकर H_2O बनता है, और CuO अपचयित होकर Cu बनता है", "CuO ऑक्सीकृत और H_2 अपचयित होता है", "दोनों ऑक्सीकृत होते हैं", "कोई ऑक्सीकृत नहीं होता"],
      answer: 0,
      exp: "Explanation (En): Hydrogen gains oxygen (gets oxidized), while copper oxide loses oxygen (gets reduced).\nस्पष्टीकरण (Hi): हाइड्रोजन में ऑक्सीजन जुड़ने से उसका ऑक्सीकरण हुआ है, और कॉपर ऑक्साइड से ऑक्सीजन हटने से उसका अपचयन हुआ है।"
    },
    {
      qEn: "What happens when quicklime (CaO) is added to water?",
      qHi: "जब बिना बुझे चूने (CaO) में पानी मिलाया जाता है, तो क्या होता है?",
      optionsEn: ["A vigorous exothermic reaction takes place forming slaked lime (Ca(OH)_2) and releasing massive heat", "An endothermic freezing occurs", "No reaction takes place", "Gas evolves without heat"],
      optionsHi: ["बुझा हुआ चूना (Ca(OH)_2) बनता है और भारी मात्रा में ऊष्मा निकलती है (तीव्र ऊष्मक्षेपी अभिक्रिया)", "ऊष्माशोषी ठंडक होती है", "कोई प्रतिक्रिया नहीं होती", "बिना ऊष्मा के गैस निकलती है"],
      answer: 0,
      exp: "Explanation (En): CaO + H_2O \\rightarrow Ca(OH)_2 + \\text{Heat}. This combination reaction is highly exothermic.\nस्पष्टीकरण (Hi): बिना बुझे चूने में पानी मिलाने पर बुझा हुआ चूना बनता है और अत्यधिक ऊष्मा उत्पन्न होती है।"
    }
  ],
  "Cell: The Unit of Life": [
    {
      qEn: "Who discovered the cell in 1665 using a primitive microscope?",
      qHi: "1665 में एक साधारण सूक्ष्मदर्शी का उपयोग करके कोशिका की खोज किसने की थी?",
      optionsEn: ["Robert Hooke", "Antonie van Leeuwenhoek", "Rudolf Virchow", "Matthias Schleiden"],
      optionsHi: ["रॉबर्ट हुक (Robert Hooke)", "एंटोनी वान ल्यूवेनहॉक", "रुडोल्फ विर्चो", "मैथियास श्लाइडेन"],
      answer: 0,
      exp: "Explanation (En): Robert Hooke discovered cells in 1665 while observing cork slices under a microscope and coined the term 'cell'.\nस्पष्टीकरण (Hi): रॉबर्ट हुक ने 1665 में कॉर्क की पतली स्लाइस को देखकर सबसे पहले 'कोशिका' (Cell) की खोज की थी।"
    },
    {
      qEn: "Who first observed living cells under a microscope?",
      qHi: "सूक्ष्मदर्शी के तहत सबसे पहले जीवित कोशिकाओं को किसने देखा था?",
      optionsEn: ["Antonie van Leeuwenhoek", "Robert Hooke", "Robert Brown", "Theodor Schwann"],
      optionsHi: ["एंटोनी वान ल्यूवेनहॉक (Antonie van Leeuwenhoek)", "रॉबर्ट हुक", "रॉबर्ट ब्राउन", "थियोडोर श्वान"],
      answer: 0,
      exp: "Explanation (En): Leeuwenhoek was the first to observe and describe living cells such as bacteria, protozoa, and red blood cells.\nस्पष्टीकरण (Hi): एंटोनी वान ल्यूवेनहॉक ने सबसे पहले तालाब के पानी और जीवाणुओं जैसी जीवित कोशिकाओं का अवलोकन किया था।"
    },
    {
      qEn: "Who discovered the nucleus in a cell?",
      qHi: "कोशिका के अंदर केंद्रक (nucleus) की खोज किसने की थी?",
      optionsEn: ["Robert Brown", "Robert Hooke", "Rudolf Virchow", "Camillo Golgi"],
      optionsHi: ["रॉबर्ट ब्राउन (Robert Brown)", "रॉबर्ट हुक", "रुडोल्फ विर्चो", "कैमिलो गल्गी"],
      answer: 0,
      exp: "Explanation (En): Robert Brown discovered the cell nucleus in 1831 while studying orchid plant cells.\nस्पष्टीकरण (Hi): रॉबर्ट ब्राउन ने 1831 में ऑर्किड पौधों की कोशिकाओं में केंद्रक की खोज की थी।"
    },
    {
      qEn: "Who formulated the classical Cell Theory?",
      qHi: "शास्त्रीय कोशिका सिद्धांत (Cell Theory) का प्रतिपादन किसने किया था?",
      optionsEn: ["Matthias Schleiden and Theodor Schwann", "Watson and Crick", "Darwin and Wallace", "Singer and Nicolson"],
      optionsHi: ["मैथियास श्लाइडेन और थियोडोर श्वान", "वाटसन और क्रिक", "डार्विन और वैलस", "सिंगर और निकोलस"],
      answer: 0,
      exp: "Explanation (En): Schleiden (botanist) and Schwann (zoologist) proposed that all plants and animals are composed of cells, forming the base of cell theory.\nस्पष्टीकरण (Hi): श्लाइडेन और श्वान ने मिलकर कोशिका सिद्धांत दिया जिसके अनुसार सभी पौधे और जंतु कोशिकाओं से बने हैं।"
    },
    {
      qEn: "Who added the phrase 'Omnis cellula e cellula' (all cells arise from pre-existing cells) to the cell theory?",
      qHi: "कोशिका सिद्धांत में 'ऑम्निस सेलुला ई सेलुला' (सभी कोशिकाएं पूर्ववर्ती कोशिकाओं से बनती हैं) वाक्यांश किसने जोड़ा?",
      optionsEn: ["Rudolf Virchow", "Louis Pasteur", "Robert Hooke", "August Weismann"],
      optionsHi: ["रुडोल्फ विर्चो (Rudolf Virchow)", "लुई पाश्चर", "रॉबर्ट हुक", "अगस्त वीसमान"],
      answer: 0,
      exp: "Explanation (En): Rudolf Virchow in 1855 modified the cell theory by explaining that new cells form from division of pre-existing cells.\nस्पष्टीकरण (Hi): रुडोल्फ विर्चो ने 1855 में स्पष्ट किया कि नई कोशिकाएं पुरानी कोशिकाओं के विभाजन से बनती हैं।"
    },
    {
      qEn: "What is the powerhouse of the cell?",
      qHi: "कोशिका का पावरहाउस (Powerhouse of the cell) किसे कहा जाता है?",
      optionsEn: ["Mitochondria", "Ribosome", "Chloroplast", "Golgi apparatus"],
      optionsHi: ["माइटोकॉन्ड्रिया (Mitochondria)", "राइबोसोम", "क्लोरोप्लास्ट", "गल्गी उपकरण"],
      answer: 0,
      exp: "Explanation (En): Mitochondria generate chemical energy (ATP) needed for cellular biochemical reactions, hence called powerhouse.\nस्पष्टीकरण (Hi): माइटोकॉन्ड्रिया कोशिकाओं के लिए एटीपी (ATP) के रूप में ऊर्जा बनाते हैं, इसलिए इन्हें पावरहाउस कहते हैं।"
    },
    {
      qEn: "Which cell organelle is known as the 'protein factory' of the cell?",
      qHi: "किस कोशिका अंग को कोशिका की 'प्रोटीन फैक्ट्री' कहा जाता है?",
      optionsEn: ["Ribosomes", "Lysosomes", "Vacuoles", "Centrosome"],
      optionsHi: ["राइबोसोम (Ribosomes)", "लाइसोसोम", "रिक्तिका", "सेंट्रोसोम"],
      answer: 0,
      exp: "Explanation (En): Ribosomes are the sites of protein synthesis in both prokaryotic and eukaryotic cells.\nस्पष्टीकरण (Hi): राइबोसोम प्रोटीन संश्लेषण का मुख्य केंद्र होते हैं, इसलिए इन्हें प्रोटीन फैक्ट्री कहा जाता है।"
    },
    {
      qEn: "Which organelle is known as the 'suicide bags' of the cell?",
      qHi: "किस कोशिकांग को कोशिका की 'आत्मघाती थैली' (Suicide bags) कहा जाता है?",
      optionsEn: ["Lysosomes", "Peroxisomes", "Plastids", "Endoplasmic reticulum"],
      optionsHi: ["लाइसोसोम (Lysosomes)", "पेरोक्सिसोम", "प्लास्टिड", "अंतर्द्रव्यी जालिका"],
      answer: 0,
      exp: "Explanation (En): Lysosomes contain hydrolytic digestive enzymes that can digest damaged cell components or the entire cell if ruptured.\nस्पष्टीकरण (Hi): लाइसोसोम में शक्तिशाली पाचक एंजाइम होते हैं जो क्षतिग्रस्त कोशिका या उसके अंगों को पचा लेते हैं।"
    },
    {
      qEn: "What is the main function of the Golgi apparatus?",
      qHi: "गल्गी उपकरण (Golgi apparatus) का मुख्य कार्य क्या है?",
      optionsEn: ["Packaging, modification, and transport of proteins and lipids", "Energy production", "Photosynthesis", "Protein synthesis"],
      optionsHi: ["प्रोटीन और लिपिड का पैकेजिंग, संशोधन और परिवहन", "ऊर्जा उत्पादन", "प्रकाश संश्लेषण", "प्रोटीन निर्माण"],
      answer: 0,
      exp: "Explanation (En): The Golgi apparatus modifies, sorts, and packages proteins and lipids received from the endoplasmic reticulum for secretion.\nस्पष्टीकरण (Hi): गल्गी बॉडी एंडोप्लाज्मिक रेटिकुलम से आए पदार्थों को पैक करके उन्हें कोशिका के अंदर या बाहर भेजती है।"
    },
    {
      qEn: "What is the primary difference between prokaryotic and eukaryotic cells?",
      qHi: "प्रोकैरियोटिक और यूकैरियोटिक कोशिकाओं के बीच मुख्य अंतर क्या है?",
      optionsEn: ["Absence of a well-defined membrane-bound nucleus in prokaryotes", "Absence of ribosomes in eukaryotes", "Absence of cell membrane in prokaryotes", "Presence of DNA in prokaryotes only"],
      optionsHi: ["प्रोकैरियोटिक में स्पष्ट झिल्लीबद्ध केंद्रक का अभाव होता है", "यूकैरियोटिक में राइबोसोम नहीं होते", "प्रोकैरियोटिक में कोशिका झिल्ली नहीं होती", "केवल प्रोकैरियोटिक में डीएनए होता है"],
      answer: 0,
      exp: "Explanation (En): Prokaryotic cells lack a true membrane-bound nucleus and membrane-bound organelles, unlike eukaryotic cells.\nस्पष्टीकरण (Hi): प्रोकैरियोटिक कोशिकाओं में सच्चे केंद्रक और झिल्लीदार अंगों का अभाव होता है, जबकि यूकैरियोटिक में वे मौजूद होते हैं।"
    },
    {
      qEn: "Which of the following is a prokaryotic organism?",
      qHi: "निम्नलिखित में से कौन सा एक प्रोकैरियोटिक जीव है?",
      optionsEn: ["Bacteria (e.g., E. coli)", "Amoeba", "Yeast", "Plant cell"],
      optionsHi: ["जीवाणु / बैक्टीरिया (जैसे E. coli)", "अमीबा", "यीस्ट", "पादप कोशिका"],
      answer: 0,
      exp: "Explanation (En): Bacteria and cyanobacteria are classic examples of prokaryotes.\nस्पष्टीकरण (Hi): बैक्टीरिया और नील-हरित शैवाल प्रोकैरियोटिक जीवों के उदाहरण हैं।"
    },
    {
      qEn: "What is the fluid-mosaic model of the plasma membrane proposed by Singer and Nicolson describe?",
      qHi: "सिंगर और निकोलस द्वारा प्रतिपादित प्लाज्मा झिल्ली के 'फ्लूइड-मोजेक मॉडल' का क्या वर्णन है?",
      optionsEn: ["A phospholipid bilayer with embedded proteins that can move laterally", "A rigid wall of cellulose", "A single layer of protein only", "A solid crystal structure"],
      optionsHi: ["प्रोटीन युक्त फॉस्फोलिपिड की दोहरी परत जिसमें प्रोटीन तैर सकते हैं", "सेल्युलोज की कठोर दीवार", "केवल प्रोटीन की एक परत", "एक ठोस क्रिस्टल संरचना"],
      answer: 0,
      exp: "Explanation (En): The fluid mosaic model describes the plasma membrane as a fluid lipid bilayer with mobile proteins, allowing flexibility.\nस्पष्टीकरण (Hi): यह मॉडल बताता है कि प्लाज्मा झिल्ली लिपिड की दोहरी परत और प्रोटीन से बनी होती है जो तरल रूप में गति कर सकती है।"
    },
    {
      qEn: "Which cell organelle is found exclusively in plant cells and responsible for photosynthesis?",
      qHi: "कौन सा कोशिकांग केवल पापाद कोशिकाओं में पाया जाता है और प्रकाश संश्लेषण के लिए जिम्मेदार है?",
      optionsEn: ["Chloroplast", "Centriole", "Lysosome", "Flagella"],
      optionsHi: ["क्लोरोप्लास्ट या हरित लवक (Chloroplast)", "सेंट्रिओल", "लाइसोसोम", "फ्लैजेला"],
      answer: 0,
      exp: "Explanation (En): Chloroplasts contain chlorophyll and carry out photosynthesis, present in plants and algae.\nस्पष्टीकरण (Hi): क्लोरोप्लास्ट में क्लोरोफिल होता है जो पौधों में सूर्य के प्रकाश से भोजन (प्रकाश संश्लेषण) बनाने में मदद करता है।"
    },
    {
      qEn: "What is the rigid outer covering of plant cells made of?",
      qHi: "पादप कोशिकाओं का कठोर बाहरी आवरण किस पदार्थ का बना होता है?",
      optionsEn: ["Cellulose", "Peptidoglycan", "Chitin", "Lipid bilayer"],
      optionsHi: ["सेल्युलोज (Cellulose)", "पेप्टिडोग्लाइкан", "काइटीन", "लिपिड बाइलेयर"],
      answer: 0,
      exp: "Explanation (En): Plant cell walls are primarily composed of cellulose, providing structural support and protection.\nस्पष्टीकरण (Hi): पौधों की कोशिका भित्ति मुख्य रूप से सेल्युलोज की बनी होती है जो सुरक्षा और दृढ़ता प्रदान करती है।"
    },
    {
      qEn: "What is the cell wall of fungi made of?",
      qHi: "कवकों (Fungi) की कोशिका भित्ति किसकी बनी होती है?",
      optionsEn: ["Chitin", "Cellulose", "Pectin", "Peptidoglycan"],
      optionsHi: ["काइटीन (Chitin)", "सेल्युलोज", "पेक्टिन", "पेप्टिडोग्लाइकान"],
      answer: 0,
      exp: "Explanation (En): Fungal cell walls are made of chitin, a tough complex polysaccharide.\nस्पष्टीकरण (Hi): कवकों की कोशिका भित्ति काइटीन (Chitin) नामक कड़े कार्बोहाइड्रेट की बनी होती है।"
    },
    {
      qEn: "What are plasmids found in bacterial cells?",
      qHi: "बैक्टीरिया कोशिकाओं में पाए जाने वाले प्लाज्मिड (Plasmids) क्या होते हैं?",
      optionsEn: ["Extra-chromosomal circular DNA molecules", "Proteins for locomotion", "Ribosomal RNA complexes", "Storage vacuoles"],
      optionsHi: ["अतिरिक्त-गुणसूत्र वृत्ताकार डीएनए अणु (Extra-chromosomal circular DNA)", "चलने के लिए प्रोटीन", "राइबोसोमल आरएनए", "भंडारण रिक्तिकाएं"],
      answer: 0,
      exp: "Explanation (En): Plasmids are small, circular, double-stranded DNA molecules distinct from chromosomal DNA, often carrying antibiotic resistance genes.\nस्पष्टीकरण (Hi): प्लाज्मिड बैक्टीरिया में मुख्य डीएनए के अलावा पाए जाने वाले छोटे वृत्ताकार डीएनए हैं जो अतिरिक्त गुण प्रदान करते हैं।"
    },
    {
      qEn: "What is the function of the nucleolus inside the nucleus?",
      qHi: "केंद्रक के भीतर मौजूद न्यूक्लियोलस (Nucleolus / केंद्रिका) का क्या कार्य है?",
      optionsEn: ["Synthesis and assembly of ribosomal RNA (rRNA)", "DNA replication", "Lipid production", "Cell division control"],
      optionsHi: ["राइबोसोमल आरएनए (rRNA) का संश्लेषण और संयोजन", "डीएनए प्रतिकृति", "लिपिड उत्पादन", "कोशिका विभाजन नियंत्रण"],
      answer: 0,
      exp: "Explanation (En): The nucleolus is a dense spherical body inside the nucleus primarily responsible for synthesizing and assembling ribosomes.\nस्पष्टीकरण (Hi): केंद्रिका (Nucleolus) के अंदर मुख्य रूप से राइबोसोम का निर्माण और आरएनए का संश्लेषण होता है।"
    },
    {
      qEn: "What is the endosymbiotic theory regarding mitochondria and chloroplasts?",
      qHi: "माइटोकॉन्ड्रिया और क्लोरोप्लास्ट के संबंध में 'अंतःसहजीवी सिद्धांत' (Endosymbiotic theory) क्या कहता है?",
      optionsEn: ["They originated as independent prokaryotic cells engulfed by a larger ancestral eukaryotic cell", "They were formed inside the nucleus", "They are synthetic cell parts", "They arose from endoplasmic reticulum"],
      optionsHi: ["वे स्वतंत्र प्रोकैरियोटिक जीव थे जिन्हें किसी बड़ी पूर्ववर्ती यूकैरियोटिक कोशिका ने निगल लिया था", "वे केंद्रक के अंदर बने थे", "वे कृत्रिम कोशिका अंग हैं", "वे एंडोप्लाज्मिक रेटिकुलम से बने थे"],
      answer: 0,
      exp: "Explanation (En): Endosymbiotic theory explains that mitochondria and chloroplasts were once free-living bacteria that entered a symbiotic relationship inside eukaryotic cells.\nस्पष्टीकरण (Hi): इस सिद्धांत के अनुसार माइटोकॉन्ड्रिया और क्लोरोप्लास्ट कभी स्वतंत्र बैक्टीरिया थे जो प्राचीन यूकैरियोटिक कोशिकाओं के अंदर बस गए।"
    },
    {
      qEn: "What are cristae found inside mitochondria?",
      qHi: "माइटोकॉन्ड्रिया के अंदर पाई जाने वाली 'क्रिस्टी' (Cristae) क्या होती हैं?",
      optionsEn: ["Infoldings of the inner mitochondrial membrane that increase surface area for ATP synthesis", "Fluid-filled outer sacs", "Ribosome clusters", "DNA strands"],
      optionsHi: ["आंतरिक झिल्ली के वलय जो एटीपी निर्माण के लिए सतह क्षेत्र बढ़ाते हैं", "द्रव से भरे बाहरी थैले", "राइबोसोम के समूह", "डीएनए धागे"],
      answer: 0,
      exp: "Explanation (En): Cristae are folds of the inner mitochondrial membrane that house enzymes for the electron transport chain and ATP production.\nस्पष्टीकरण (Hi): माइटोकॉन्ड्रिया की आंतरिक झिल्ली के अंदर की तरफ मुड़ी हुई रचनाएं क्रिस्टी कहलाती हैं जो ऊर्जा उत्पादन के लिए जगह बढ़ाती हैं।"
    },
    {
      qEn: "What is the fluid matrix inside a chloroplast called?",
      qHi: "क्लोरोप्लास्ट के अंदर के तरल मैट्रिक्स को क्या कहा जाता है?",
      optionsEn: ["Stroma", "Matrix", "Cytoplasm", "Nucleoplasm"],
      optionsHi: ["स्ट्रोमा (Stroma)", "मैट्रिक्स", "साइटोप्लाज्म", "न्यूक्लियोप्लाज्म"],
      answer: 0,
      exp: "Explanation (En): Stroma is the protein-rich fluid surrounding the thylakoid membranes inside a chloroplast, where the dark reaction of photosynthesis occurs.\nस्पष्टीकरण (Hi): क्लोरोप्लास्ट के अंदर के गाढ़े तरल को स्ट्रोमा (Stroma) कहते हैं जहाँ प्रकाश संश्लेषण की अप्रकाशिक अभिक्रिया होती है।"
    },
    {
      qEn: "What are thylakoids stacked into within a chloroplast?",
      qHi: "क्लोरोप्लास्ट में थैलाकोइड्स (Thylakoids) आपस में जुड़कर किस संरचना का निर्माण करते हैं?",
      optionsEn: ["Grana (singular: Granum)", "Cristae", "Cisternae", "Ribosomes"],
      optionsHi: ["ग्रेना (Grana - एकवचन: ग्रेनम)", "क्रिस्टी", "सिस्टर्नी", "राइबोसोम"],
      answer: 0,
      exp: "Explanation (En): Thylakoids are stacked in piles called grana, where light-dependent reactions of photosynthesis take place.\nस्पष्टीकरण (Hi): थैलाकोइड्स के सिक्कों के ढेर जैसी संरचना को ग्रेना (Grana) कहा जाता है।"
    },
    {
      qEn: "What is the function of centrosomes in animal cells?",
      qHi: "जंतु कोशिकाओं में सेंट्रोसोम (Centrosome) का क्या मुख्य कार्य है?",
      optionsEn: ["Organization of microtubules and formation of spindle fibers during cell division", "Protein synthesis", "Digestion of waste", "Lipid storage"],
      optionsHi: ["कोशिका विभाजन के दौरान माइक्रोट्यूब्यूल का संगठन और स्पिंडल फाइबर का निर्माण", "प्रोटीन संश्लेषण", "अपशिष्ट पाचन", "वसा भंडारण"],
      answer: 0,
      exp: "Explanation (En): Centrosomes contain centrioles that help organize the mitotic spindle apparatus during animal cell division.\nस्पष्टीकरण (Hi): सेंट्रोसोम कोशिका विभाजन के समय स्पिंडल तंतुओं (spindle fibers) को बनाने में मदद करता है।"
    },
    {
      qEn: "What is the name of the network of membranes found throughout the cytoplasm, classified into rough and smooth types?",
      qHi: "साइटोप्लाज्म में फैली झिल्लियों के उस जाल का नाम क्या है जिसे खुरदरी और चिकनी श्रेणियों में बांटा गया है?",
      optionsEn: ["Endoplasmic Reticulum (ER)", "Golgi Apparatus", "Lysosome", "Vacuole"],
      optionsHi: ["अंतर्द्रव्यी जालिका (Endoplasmic Reticulum - ER)", "गल्गी उपकरण", "लाइसोसोम", "रिक्तिका"],
      answer: 0,
      exp: "Explanation (En): Endoplasmic Reticulum is a continuous membrane network; Rough ER has ribosomes for protein synthesis, while Smooth ER synthesizes lipids.\nस्पष्टीकरण (Hi): एंडोप्लाज्मिक रेटिकुलम झिल्लियों का जाल है; रफ ईआर पर राइबोसोम होते हैं जबकि स्मूथ ईआर लिपिड बनाता है।"
    },
    {
      qEn: "What are peroxisomes primarily responsible for in cells?",
      qHi: "पेरोक्सिसोम (Peroxisomes) कोशिकाओं में मुख्य रूप से किसके लिए जिम्मेदार होते हैं?",
      optionsEn: ["Detoxification of harmful substances and breakdown of fatty acids using catalase enzyme", "Protein synthesis", "Photosynthesis", "ATP production"],
      optionsHi: ["कैटलेज एंजाइम का उपयोग करके हानिकारक पदार्थों का विषहरण और वसा अम्लों का टूटना", "प्रोटीन संश्लेषण", "प्रकाश संश्लेषण", "एटीपी उत्पादन"],
      answer: 0,
      exp: "Explanation (En): Peroxisomes contain oxidative enzymes like catalase that break down toxic hydrogen peroxide and fatty acids.\nस्पष्टीकरण (Hi): पेरोक्सिसोम में कैटलेज एंजाइम होता है जो खतरनाक हाइड्रोजन पेरोक्साइड जैसे जहरीले पदार्थों को तोड़ता है।"
    },
    {
      qEn: "What are vacuoles in plant cells surrounded by?",
      qHi: "पादप कोशिकाओं में रिक्तिकाओं (Vacuoles) के चारों ओर की झिल्ली को क्या कहा जाता है?",
      optionsEn: ["Tonoplast", "Plasma membrane", "Nuclear membrane", "Cell wall"],
      optionsHi: ["टोनोप्लास्ट (Tonoplast)", "प्लाज्मा झिल्ली", "केंद्रक झिल्ली", "कोशिका भित्ति"],
      answer: 0,
      exp: "Explanation (En): The tonoplast is the cytoplasmic membrane surrounding the large central vacuole of a plant cell.\nस्पष्टीकरण (Hi): पापाद कोशिकाओं की बड़ी केंद्रीय रिक्तिका को घेरने वाली झिल्ली को टोनोप्लास्ट (Tonoplast) कहते हैं।"
    },
    {
      qEn: "What is chromatin made of?",
      qHi: "क्रोमैटिन (Chromatin) किस पदार्थ का बना होता है?",
      optionsEn: ["DNA and histone proteins", "RNA and lipids", "Carbohydrates only", "Cellulose and proteins"],
      optionsHi: ["डीएनए और हिस्टोन प्रोटीन (DNA and histone proteins)", "आरएनए और लिपिड", "केवल कार्बोहाइड्रेट", "सेल्युलोज और प्रोटीन"],
      answer: 0,
      exp: "Explanation (En): Chromatin consists of long strands of DNA tightly wound around basic proteins called histones.\nस्पष्टीकरण (Hi): क्रोमैटिन डीएनए और हिस्टोन प्रोटीन का एक जटिल संकुल होता है जो केंद्रक के अंदर पाया जाता है।"
    },
    {
      qEn: "What is the term for cells having a true nucleus surrounded by a nuclear membrane?",
      qHi: "ऐसी कोशिकाओं को क्या कहा जाता है जिनमें केंद्रक झिल्ली से घिरा हुआ स्पष्ट केंद्रक होता है?",
      optionsEn: ["Eukaryotic cells", "Prokaryotic cells", "Bacterial cells", "Primitive cells"],
      optionsHi: ["यूकैरियोटिक कोशिकाएं (Eukaryotic cells)", "प्रोकैरियोटिक कोशिकाएं", "बैक्टीरियल कोशिकाएं", "आदिम कोशिकाएं"],
      answer: 0,
      exp: "Explanation (En): Eukaryotes ('true nucleus') possess membrane-bound nuclei and advanced organelles.\nस्पष्टीकरण (Hi): यूकैरियोटिक कोशिकाओं में सुविकसित केंद्रक और झिल्लीदार कोशिकांग होते हैं।"
    },
    {
      qEn: "Which type of ribosomes are found in prokaryotic cells?",
      qHi: "प्रोकैरियोटिक कोशिकाओं में किस प्रकार के राइबोसोम पाए जाते हैं?",
      optionsEn: ["70S type", "80S type", "60S type only", "40S type only"],
      optionsHi: ["70S प्रकार के", "80S प्रकार के", "केवल 60S प्रकार के", "केवल 40S प्रकार के"],
      answer: 0,
      exp: "Explanation (En): Prokaryotes contain smaller 70S ribosomes, whereas eukaryotes contain 80S ribosomes in cytoplasm (and 70S in mitochondria/chloroplasts).\nस्पष्टीकरण (Hi): प्रोकैरियोटिक कोशिकाओं में छोटे 70S प्रकार के राइबोसोम होते हैं।"
    },
    {
      qEn: "Which type of ribosomes are found in the cytoplasm of eukaryotic cells?",
      qHi: "यूकैरियोटिक कोशिकाओं के कोशिका द्रव्य (cytoplasm) में किस प्रकार के राइबोसोम पाए जाते हैं?",
      optionsEn: ["80S type", "70S type", "50S type", "30S type"],
      optionsHi: ["80S प्रकार के", "70S प्रकार के", "50S प्रकार के", "30S प्रकार के"],
      answer: 0,
      exp: "Explanation (En): Cytoplasmic ribosomes of eukaryotes are of the 80S type (composed of 60S and 40S subunits).\nस्पष्टीकरण (Hi): यूकैरियोट्स के साइटोप्लाज्म में 80S प्रकार के राइबोसोम (जो 60S और 40S उपइकाईयों से बने हैं) पाए जाते हैं।"
    },
    {
      qEn: "What is plasmolysis in plant cells?",
      qHi: "पादप कोशिकाओं में जीवद्रव्यकुंचन (Plasmolysis) किसे कहते हैं?",
      optionsEn: ["Shrinkage of protoplasm away from the cell wall due to water loss in a hypertonic solution", "Swelling of cell in pure water", "Bursting of cell wall", "Division of nucleus"],
      optionsHi: ["अतिपरासणी (hypertonic) विलयन में पानी की हानि के कारण कोशिका भित्ति से जीवद्रव्य का सिकुड़कर अलग होना", "शुद्ध पानी में कोशिका का फूलना", "कोशिका भित्ति का फटना", "केंद्रक का विभाजन"],
      answer: 0,
      exp: "Explanation (En): Plasmolysis occurs when a plant cell is placed in a hypertonic solution, causing water to leave the cell and the protoplasm to shrink away from the cell wall.\nस्पष्टीकरण (Hi): जब पौधे की कोशिका को अत्यधिक नमकीन या शर्करा वाले घोल में रखते हैं, तो पानी बाहर निकल जाता है और कोशिका अंदर से सिकुड़ जाती है।"
    }
  ],
    "Tissues": [
    {
      qEn: "What is a tissue defined as in biology?",
      qHi: "जीव विज्ञान में ऊतक (Tissue) किसे कहा जाता है?",
      optionsEn: ["A group of similar cells having common origin and performing a specific function", "A single isolated cell", "A group of completely different organs", "A fluid matrix only"],
      optionsHi: ["समान उत्पत्ति और विशिष्ट कार्य करने वाली समरूप कोशिकाओं का समूह", "एक अकेली अलग कोशिका", "बिल्कुल भिन्न अंगों का समूह", "केवल एक तरल मैट्रिक्स"],
      answer: 0,
      exp: "Explanation (En): A tissue is an ensemble of similar cells and their extracellular matrix from the same origin that together carry out a specific function.\nस्पष्टीकरण (Hi): एक ही उत्पत्ति वाली और एक जैसा काम करने वाली कोशिकाओं के समूह को ऊतक (Tissue) कहते हैं।"
    },
    {
      qEn: "Who coined the term 'tissue'?",
      qHi: "'ऊतक' (Tissue) शब्द सबसे पहले किसने दिया था?",
      optionsEn: ["Marie François Xavier Bichat", "Robert Hooke", "Rudolf Virchow", "Nehemiah Grew"],
      optionsHi: ["मैरी फ्रेंकोइस जेवियर बिचैट (Marie François Xavier Bichat)", "रॉबर्ट हुक", "रुडोल्फ विर्चो", "नेहेमैया ग्र्यू"],
      answer: 0,
      exp: "Explanation (En): The French anatomist Bichat introduced the concept and term 'tissue' in anatomy.\nस्पष्टीकरण (Hi): फ्रांसीसी शरीर रचना विज्ञानी बिचैट ने सबसे पहले 'टिश्यू' (ऊतक) शब्द का प्रयोग किया था।"
    },
    {
      qEn: "What is the study of tissues called?",
      qHi: "ऊतकों के अध्ययन को क्या कहा जाता है?",
      optionsEn: ["Histology", "Cytology", "Pathology", "Morphology"],
      optionsHi: ["हिस्टोलॉजी (Histology - ऊतक विज्ञान)", "साइटोलॉजी", "पैथोलॉजी", "मॉर्फोलॉजी"],
      answer: 0,
      exp: "Explanation (En): Histology is the scientific study of the microscopic structure of biological tissues.\nस्पष्टीकरण (Hi): सूक्ष्मदर्शी के द्वारा ऊतकों की संरचना का अध्ययन हिस्टोलॉजी (Histology) कहलाता है।"
    },
    {
      qEn: "Which plant tissue is responsible for active cell division and growth?",
      qHi: "कौन सा पादप ऊतक सक्रिय कोशिका विभाजन और वृद्धि के लिए जिम्मेदार होता है?",
      optionsEn: ["Meristematic tissue", "Parenchyma", "Collenchyma", "Sclerenchyma"],
      optionsHi: ["विभज्योतक ऊतक (Meristematic tissue)", "पैरेन्काइमा", "कॉलेन्काइमा", "स्क्लेरेन्काइमा"],
      answer: 0,
      exp: "Explanation (En): Meristematic tissues consist of actively dividing cells located in growing regions like root tips and shoot tips.\nस्पष्टीकरण (Hi): विभज्योतक ऊतक (Meristem) पौधों के बढ़ने वाले हिस्सों में पाए जाते हैं जहाँ लगातार कोशिका विभाजन होता रहता है।"
    },
    {
      qEn: "Which meristematic tissue is responsible for increasing the girth (thickness) of the stem or root?",
      qHi: "तने या जड़ की मोटाई (घेर) बढ़ाने के लिए कौन सा विभज्योतक ऊतक उत्तरदायी होता है?",
      optionsEn: ["Lateral meristem (Cambium)", "Apical meristem", "Intercalary meristem", "Xylem"],
      optionsHi: ["पार्श्व विभज्योतक या कैम्बियम (Lateral meristem)", "शीर्षस्थ विभज्योतक", "अंतर्विशष्टि विभज्योतक", "ज़ाइलम"],
      answer: 0,
      exp: "Explanation (En): Lateral meristems (like vascular cambium and cork cambium) increase secondary growth and stem/root thickness.\nस्पष्टीकरण (Hi): पार्श्व विभज्योतक (कैम्बियम) पौधों के तनों और जड़ों की चौड़ाई या मोटाई में वृद्धि करता है।"
    },
    {
      qEn: "Where is intercalary meristem typically found in plants?",
      qHi: "पौधों में अंतर्विशष्टि विभज्योतक (Intercalary meristem) सामान्यतः कहाँ पाया जाता है?",
      optionsEn: ["At the base of leaves or nodes (internodes)", "At the root tips only", "At the outer bark", "Inside xylem vessels"],
      optionsHi: ["पत्तियों के आधार पर या पर्वसंधियों (nodes/internodes) के पास", "केवल जड़ के सिरों पर", "बाहरी छाल पर", "ज़ाइलम वाहिकाओं के अंदर"],
      answer: 0,
      exp: "Explanation (En): Intercalary meristems occur at nodes or leaf bases, helping in the elongation of parts like grass stems.\nस्पष्टीकरण (Hi): यह ऊतक पर्वसंधियों (internodes) या पत्तियों के आधार पर पाया जाता है जो घास आदि की लंबाई बढ़ाता है।"
    },
    {
      qEn: "What are permanent tissues in plants derived from?",
      qHi: "पौधों में स्थायी ऊतक (Permanent tissues) किससे बनते हैं?",
      optionsEn: ["Differentiation of meristematic tissues", "Direct sunlight", "Dead root cells", "Phloem sap"],
      optionsHi: ["विभज्योतक ऊतकों के विभेदन (differentiation) से", "प्रत्यक्ष सूर्य के प्रकाश से", "मृत जड़ कोशिकाओं से", "फ्लोएम रस से"],
      answer: 0,
      exp: "Explanation (En): When meristematic cells stop dividing and take up a specific permanent shape, size, and function, they form permanent tissues.\nस्पष्टीकरण (Hi): जब विभज्योतक कोशिकाएं विभाजन क्षमता खो देती हैं और एक निश्चित आकार ले लेती हैं, तो वे स्थायी ऊतक बनाती हैं।"
    },
    {
      qEn: "Which simple permanent tissue provides mechanical support and flexibility to young dicot stems and leaf stalks?",
      qHi: "कौन सा सरल स्थायी ऊतक युवा द्विबीजपत्री तनों और पत्तियों के डंठल को यांत्रिक समर्थन और लचीलापन प्रदान करता है?",
      optionsEn: ["Collenchyma", "Parenchyma", "Sclerenchyma", "Meristem"],
      optionsHi: ["कॉलेन्काइमा (Collenchyma - स्थूलकोण ऊतक)", "पैरेन्काइमा", "स्क्लेरेन्काइमा", "मेरिस्टेम"],
      answer: 0,
      exp: "Explanation (En): Collenchyma cells have unevenly thickened corners, providing flexibility and tensile strength without breaking.\nस्पष्टीकरण (Hi): कॉलेन्काइमा कोशिकाओं के कोने पर सेल्युलोज और पेक्टिन जमा होने से यह पौधों को लचीलापन और ताकत देता है।"
    },
    {
      qEn: "Which plant tissue is composed of dead cells with heavily lignified secondary cell walls, providing rigidity and strength?",
      qHi: "कौन सा पादप ऊतक अत्यधिक लिख्निफाइड मृत कोशिकाओं से बना होता है जो पौधे को कठोरता और मजबूती देता है?",
      optionsEn: ["Sclerenchyma", "Parenchyma", "Collenchyma", "Meristem"],
      optionsHi: ["स्क्लेरेन्काइमा (Sclerenchyma - दृढ़ोतक)", "पैरेन्काइमा", "कॉलेन्काइमा", "मेरिस्टेम"],
      answer: 0,
      exp: "Explanation (En): Sclerenchyma cells are dead at maturity with thick, lignified walls (e.g., fibers and sclereids in coconut husk).\nस्पष्टीकरण (Hi): स्क्लेरेन्काइमा मृत कोशिकाओं से बनता है जिनकी दीवारें लिग्निन के जमाव से बहुत कड़ी होती हैं (जैसे नारियल का छिलका)।"
    },
    {
      qEn: "What is the primary function of parenchyma tissue?",
      qHi: "पैरेन्काइमा (Parenchyma) ऊतक का मुख्य कार्य क्या है?",
      optionsEn: ["Food storage, photosynthesis (chlorenchyma), and general packing", "Water conduction only", "Providing rigid support", "Protection from outside"],
      optionsHi: ["भोजन भंडारण, प्रकाश संश्लेषण (क्लोरेन्काइमा) और पादप अंगों की पैकिंग", "केवल जल संवहन", "कठोर समर्थन देना", "बाहरी सुरक्षा"],
      answer: 0,
      exp: "Explanation (En): Parenchyma is the most abundant unspecialized packing tissue that stores food and performs photosynthesis when containing chloroplasts.\nस्पष्टीकरण (Hi): पैरेन्काइमा सबसे आम जीवित ऊतक है जो भोजन का भंडारण करता है और प्रकाश संश्लेषण में भी भाग लेता है।"
    },
    {
      qEn: "What is the complex vascular tissue responsible for the upward transport of water and minerals from roots to leaves?",
      qHi: "कौन सा जटिल संवहन ऊतक जड़ों से पत्तियों तक पानी और खनिजों के ऊपर की ओर परिवहन के लिए जिम्मेदार है?",
      optionsEn: ["Xylem", "Phloem", "Cortex", "Epidermis"],
      optionsHi: ["ज़ाइलम (Xylem - दारू)", "फ्लोएम", "कॉर्टेक्स", "एपिडर्मिस"],
      answer: 0,
      exp: "Explanation (En): Xylem tissue transports water and dissolved minerals upward from roots, consisting of tracheids, vessels, xylem parenchyma, and fibers.\nस्पष्टीकरण (Hi): ज़ाइलम एक संवहन ऊतक है जो जड़ों से पानी और खनिज लवणों को ऊपर के अंगों तक पहुँचाता है।"
    },
    {
      qEn: "What is the complex vascular tissue responsible for the transport of organic food (sugars) in plants?",
      qHi: "पौधों में कार्बनिक भोजन (शर्करा) के परिवहन के लिए कौन सा जटिल संवहन ऊतक उत्तरदायी है?",
      optionsEn: ["Phloem", "Xylem", "Collenchyma", "Sclerenchyma"],
      optionsHi: ["फ्लोएम (Phloem - वाहिका)", "ज़ाइलम", "कॉलेन्काइमा", "स्क्लेरेन्काइमा"],
      answer: 0,
      exp: "Explanation (En): Phloem transports synthesized organic food (photosynthates) bidirectionally from leaves to other plant parts.\nस्पष्टीकरण (Hi): फ्लोएम पत्तियों में बने भोजन (शर्करा) को पौधे के अन्य भागों तक पहुँचाने का काम करता है।"
    },
    {
      qEn: "Which element of xylem tissue is living?",
      qHi: "ज़ाइलम ऊतक का कौन सा घटक जीवित (living) होता है?",
      optionsEn: ["Xylem parenchyma", "Xylem vessels", "Tracheids", "Xylem fibers"],
      optionsHi: ["ज़ाइलम पैरेन्काइमा (Xylem parenchyma)", "ज़ाइलम वाहिकाएं", "ट्रैकीड्स", "ज़ाइलम फाइबर"],
      answer: 0,
      exp: "Explanation (En): While most xylem elements (vessels, tracheids, fibers) are dead at maturity, xylem parenchyma cells are living and store food.\nस्पष्टीकरण (Hi): ज़ाइलम के अधिकांश भाग मृत होते हैं, लेकिन 'ज़ाइलम पैरेन्काइमा' जीवित कोशिकाएं होती हैं जो भोजन संचित करती हैं।"
    },
    {
      qEn: "Which element of phloem tissue is dead at maturity in flowering plants?",
      qHi: "फूल वाले पौधों में परिपक्व होने पर फ्लोएम ऊतक का कौन सा घटक मृत होता है?",
      optionsEn: ["Phloem fibers (bast fibers)", "Sieve tube elements", "Companion cells", "Phloem parenchyma"],
      optionsHi: ["फ्लोएम फाइबर या बास्ट फाइबर", "चालनी नलिकाएं (Sieve tubes)", "साथी कोशिकाएं (Companion cells)", "फ्लोएम पैरेन्काइमा"],
      answer: 0,
      exp: "Explanation (En): Phloem fibers are dead sclerenchymatous cells, whereas sieve tubes, companion cells, and phloem parenchyma are living.\nस्पष्टीकरण (Hi): फ्लोएम रेशे (Phloem fibers) मृत कोशिकाएं होती हैं, जबकि चालनी नलिकाएं और साथी कोशिकाएं जीवित होती हैं।"
    },
    {
      qEn: "What are the four main types of animal tissues?",
      qHi: "जंतुओं में मुख्य रूप से कितने प्रकार के ऊतक पाए जाते हैं?",
      optionsEn: ["Epithelial, Connective, Muscular, and Nervous tissues", "Xylem, Phloem, Meristem, Permanent", "Epidermis, Cortex, Pith, Stele", "Blood, Bone, Cartilage, Lymph"],
      optionsHi: ["उपिच्छीय (Epithelial), संयोजी (Connective), पेशीय (Muscular) और तंत्रिका (Nervous) ऊतक", "ज़ाइलम, फ्लोएम, मेरिस्टेम", "एपिडर्मिस, कॉर्टेक्स, पिथ", "रक्त, हड्डी, उपस्थि, लसीका"],
      answer: 0,
      exp: "Explanation (En): Animal tissues are broadly categorized into four primary types: epithelial, connective, muscular, and nervous tissues.\nस्पष्टीकरण (Hi): जंतु ऊतकों को मुख्य रूप से 4 श्रेणियों में बांटा गया है: एपिथीलियल, कनेक्टिव, मस्कुलर और नर्वस टिशू।"
    },
    {
      qEn: "Which animal tissue covers the external surface of the body and lines internal organs and cavities?",
      qHi: "कौन सा जंतु ऊतक शरीर की बाहरी सतह को ढकता है और आंतरिक अंगों तथा गुहाओं की अस्तर (lining) बनाता है?",
      optionsEn: ["Epithelial tissue", "Connective tissue", "Muscular tissue", "Nervous tissue"],
      optionsHi: ["उपिच्छीय या एपिथीलियल ऊतक (Epithelial tissue)", "संयोजी ऊतक", "पेशीय ऊतक", "तंत्रिका ऊतक"],
      answer: 0,
      exp: "Explanation (En): Epithelial tissue forms protective coverings, absorptive linings, and secretory glands throughout the body.\nस्पष्टीकरण (Hi): एपिथीलियल ऊतक शरीर की बाहरी रक्षात्मक परत और अंगों की आंतरिक लाइनिंग का निर्माण करता है।"
    },
    {
      qEn: "Which animal tissue connects, binds, and supports other tissues and organs?",
      qHi: "कौन सा जंतु ऊतक अन्य ऊतकों और अंगों को आपस में जोड़ने, बांधने और समर्थन देने का काम करता है?",
      optionsEn: ["Connective tissue", "Epithelial tissue", "Muscular tissue", "Nervous tissue"],
      optionsHi: ["संयोजी ऊतक (Connective tissue)", "एपिथीलियल ऊतक", "पेशीय ऊतक", "तंत्रिका ऊतक"],
      answer: 0,
      exp: "Explanation (En): Connective tissues (such as bone, blood, adipose tissue, and cartilage) bind body structures together.\nस्पष्टीकरण (Hi): संयोजी ऊतक (जैसे रक्त, अस्थि, वसा ऊतक) शरीर के विभिन्न अंगों को आपस में जोड़े रखते हैं।"
    },
    {
      qEn: "Why is blood considered a specialized connective tissue?",
      qHi: "रक्त (Blood) को एक विशिष्ट संयोजी ऊतक क्यों माना जाता है?",
      optionsEn: ["Because it has a fluid matrix (plasma) and connects various body parts by transporting gases and nutrients", "Because it is solid like bone", "Because it lines body surfaces", "Because it transmits nerve impulses"],
      optionsHi: ["क्योंकि इसमें तरल मैट्रिक्स (प्लाज्मा) होता है और यह गैसों व पोषक तत्वों का परिवहन करके अंगों को जोड़ता है", "क्योंकि यह हड्डी की तरह ठोस होता है", "क्योंकि यह शरीर की सतह पर होता है", "क्योंकि यह तंत्रिका संकेत भेजता है"],
      answer: 0,
      exp: "Explanation (En): Blood consists of living blood cells suspended in a non-living fluid matrix called plasma, fulfilling a connective role.\nस्पष्टीकरण (Hi): रक्त में तरल प्लाज्मा मैट्रिक्स होता है और यह पूरे शरीर में पदार्थों को पहुँचाकर अंगों को जोड़ता है।"
    },
    {
      qEn: "What is the name of the hard, rigid connective tissue that forms the skeletal framework of vertebrates?",
      qHi: "कशेरुकियों के कंकाल ढांचे को बनाने वाले कठोर और दृढ़ संयोजी ऊतक का नाम क्या है?",
      optionsEn: ["Bone (अस्थि)", "Cartilage (उपस्थि)", "Adipose tissue", "Areolar tissue"],
      optionsHi: ["हड्डियाँ या अस्थि (Bone)", "उपस्थि (Cartilage)", "वसा ऊतक", "एरियोलर ऊतक"],
      answer: 0,
      exp: "Explanation (En): Bones are rigid connective tissues containing calcium and phosphorus salts embedded in a collagen matrix, providing structural support.\nस्पष्टीकरण (Hi): हड्डियाँ कठोर संयोजी ऊतक हैं जो कैल्शियम और फास्फोरस के कारण मजबूत होती हैं और कंकाल बनाती हैं।"
    },
    {
      qEn: "What is cartilage?",
      qHi: "उपस्थि (Cartilage) क्या है?",
      optionsEn: ["A flexible semi-rigid connective tissue found in joints, ear pinna, and nose tip", "A hard solid bone", "A type of muscle", "A nerve cell"],
      optionsHi: ["एक लचीला अर्ध-कठोर संयोजी ऊतक जो जोड़ों, कान के बाहरी हिस्से और नाक के अग्रभाग में पाया जाता है", "एक कठोर ठोस हड्डी", "एक प्रकार की पेशी", "एक तंत्रिका कोशिका"],
      answer: 0,
      exp: "Explanation (En): Cartilage is a specialized connective tissue with a flexible rubbery matrix found where smoother cushioning is needed.\nस्पष्टीकरण (Hi): उपस्थि एक लचीला और अपेक्षाकृत नरम संयोजी ऊतक है (जैसे नाक की नोक और कान का पिन्ना)।"
    },
    {
      qEn: "What type of muscle tissue is striated, voluntary, and attached to bones?",
      qHi: "किस प्रकार की पेशी ऊतक धारीदार (striated), ऐच्छिक (voluntary) होती है और हड्डियों से जुड़ी होती है?",
      optionsEn: ["Skeletal muscle (Striated muscle)", "Smooth muscle", "Cardiac muscle", "Unstriated muscle"],
      optionsHi: ["कंकाल पेशी या रेखित पेशी (Skeletal muscle)", "चिकनी पेशी", "हृदय पेशी", "अरेखित पेशी"],
      answer: 0,
      exp: "Explanation (En): Skeletal muscles are voluntary muscles showing alternating light and dark bands (striations) responsible for body movement.\nस्पष्टीकरण (Hi): कंकाल पेशियां हमारी इच्छा के अनुसार काम करती हैं (ऐच्छिक) और इनमें धारियां होती हैं।"
    },
    {
      qEn: "Where are smooth (non-striated, involuntary) muscles found in the human body?",
      qHi: "मानव शरीर में चिकनी पेशियां (Smooth / involuntary muscles) कहाँ पाई जाती हैं?",
      optionsEn: ["Walls of internal organs like stomach, intestine, and blood vessels", "Attached to skeletal bones only", "Only in the heart wall", "In the brain"],
      optionsHi: ["पेट, आंत और रक्त वाहिकाओं जैसे आंतरिक अंगों की दीवारों में", "केवल कंकाल की हड्डियों से जुड़ी", "केवल हृदय की दीवार में", "मस्तिष्क में"],
      answer: 0,
      exp: "Explanation (En): Smooth muscles are involuntary, non-striated tissues found in the walls of hollow internal visceral organs.\nस्पष्टीकरण (Hi): चिकनी पेशियां अनैच्छिक होती हैं और आंत, आमाशय, रक्त वाहिकाओं की दीवारों में पाई जाती हैं।"
    },
    {
      qEn: "What type of muscle tissue is found exclusively in the heart wall, being involuntary and branched?",
      qHi: "कौन सी पेशी ऊतक केवल हृदय की दीवार में पाई जाती है, जो अनैच्छिक और शाखित (branched) होती है?",
      optionsEn: ["Cardiac muscle", "Skeletal muscle", "Smooth muscle", "Striated muscle"],
      optionsHi: ["हृदय पेशी (Cardiac muscle)", "कंकाल पेशी", "चिकनी पेशी", "रेखित पेशी"],
      answer: 0,
      exp: "Explanation (En): Cardiac muscles are involuntary, striated, and branched cells connected by intercalated discs that contract rhythmically.\nस्पष्टीकरण (Hi): कार्डियक (हृदय) पेशियां जीवनभर बिना थके सिकुड़ने और फैलने के लिए बनी होती हैं।"
    },
    {
      qEn: "What is the structural and functional unit of the nervous system?",
      qHi: "तंत्रिका तंत्र की संरचनात्मक और कार्यात्मक इकाई क्या है?",
      optionsEn: ["Neuron (Nerve cell)", "Nephron", "Alveoli", "Axon only"],
      optionsHi: ["न्यूरॉन या तंत्रिका कोशिका (Neuron)", "नेफ्रॉन", "एल्वोलाई", "केवल एक्सॉन"],
      answer: 0,
      exp: "Explanation (En): Neurons are specialized cells in the nervous system that transmit electrical and chemical nerve impulses.\nस्पष्टीकरण (Hi): न्यूरॉन तंत्रिका तंत्र की मूल इकाई है जो मस्तिष्क और शरीर के बीच संकेत पहुँचाती है।"
    },
    {
      qEn: "What are the main parts of a typical neuron?",
      qHi: "एक सामान्य न्यूरॉन (तंत्रिका कोशिका) के मुख्य भाग कौन से होते हैं?",
      optionsEn: ["Cyton (cell body), Dendrites, and Axon", "Root, Stem, and Leaf", "Plasma membrane only", "Matrix and fibers"],
      optionsHi: ["साइरॉन (कोशिका काय), डेंड्राइट्स और एक्सॉन", "रूट, स्टेम और लीफ", "केवल प्लाज्मा झिल्ली", "मैट्रिक्स और फाइबर"],
      answer: 0,
      exp: "Explanation (En): A neuron consists of a cell body (cyton), short branching dendrites that receive signals, and a long axon that transmits impulses.\nस्पष्टीकरण (Hi): न्यूरॉन में साइटोन (कोशिका निकाय), डेंड्राइट्स (शाखाएं) और एक्सॉन (लंबा फाइबर) मुख्य भाग होते हैं।"
    },
    {
      qEn: "What is the fatty insulating sheath that surrounds many nerve fibers (axons) called?",
      qHi: "कई तंत्रिका तंतुओं (एक्सॉन) को घेरने वाली वसायुक्त रोधी आवरण को क्या कहा जाता है?",
      optionsEn: ["Myelin sheath", "Synapse", "Dendron", "Sarcolemma"],
      optionsHi: ["मायेलिन शीथ (Myelin sheath)", "सिनैप्स", "डेंड्रॉन", "सार्कोलेमा"],
      answer: 0,
      exp: "Explanation (En): The myelin sheath insulates axons and speeds up the conduction of nerve impulses.\nस्पष्टीकरण (Hi): मायेलिन शीथ एक्सॉन के चारों ओर एक वसायुक्त आवरण है जो तंत्रिका आवेगों की गति को तेज करता है।"
    },
    {
      qEn: "What is the junction between two adjacent neurons where nerve impulses are transmitted called?",
      qHi: "दो लगातार तंत्रिका कोशिकाओं के बीच के उस मिलन स्थल को क्या कहते हैं जहाँ से तंत्रिका संकेत पार होते हैं?",
      optionsEn: ["Synapse", "Axon terminal", "Node of Ranvier", "Dendrite junction"],
      optionsHi: ["सिनैप्स या अंतर्ग्रंथन (Synapse)", "एक्सॉन टर्मिनल", "रैनवियर की गाँठ", "डेंड्राइट जंक्शन"],
      answer: 0,
      exp: "Explanation (En): A synapse is the tiny gap between neurons where neurotransmitters pass chemical signals from one cell to the next.\nस्पष्टीकरण (Hi): दो न्यूरॉन्स के बीच के खाली स्थान या जंक्शन को सिनैप्स (Synapse) कहते हैं जहाँ न्यूरोट्रांसमीटर सिग्नल पास करते हैं।"
    },
    {
      qEn: "Which tissue type stores fat and acts as a heat insulator in animals?",
      qHi: "जंतुओं में कौन सा ऊतक वसा का भंडारण करता है और शरीर में ऊष्मा रोधी (insulator) का काम करता है?",
      optionsEn: ["Adipose tissue", "Areolar tissue", "Blood", "Cartilage"],
      optionsHi: ["वसा ऊतक (Adipose tissue)", "एरियोलर ऊतक", "रक्त", "उपस्थि"],
      answer: 0,
      exp: "Explanation (En): Adipose tissue is a specialized connective tissue consisting of fat cells (adipocytes) that store energy and insulate the body.\nस्पष्टीकरण (Hi): वसा ऊतक (Adipose tissue) त्वचा के नीचे चर्बी जमा करता है जो ठंड से बचाती है और ऊर्जा संचित करती है।"
    },
    {
      qEn: "What is the loose connective tissue that fills the space inside organs, supports internal organs, and helps in tissue repair?",
      qHi: "कौन सा ढीला संयोजी ऊतक अंगों के अंदर खाली जगह भरता है, आंतरिक अंगों को सहारा देता है और मरम्मत में मदद करता है?",
      optionsEn: ["Areolar tissue", "Adipose tissue", "Bone tissue", "Skeletal muscle"],
      optionsHi: ["एरियोलर ऊतक (Areolar tissue)", "वसा ऊतक", "अस्थि ऊतक", "कंकाल पेशी"],
      answer: 0,
      exp: "Explanation (En): Areolar tissue is a widely distributed loose connective tissue that binds skin to underlying muscles and repairs damaged tissues.\nस्पष्टीकरण (Hi): एरियोलर ऊतक त्वचा और मांसपेशियों के बीच पाया जाने वाला ढीला ऊतक है जो अंगों को सहारा देता है और मरम्मत में सहायक है।"
    },
    {
      qEn: "What type of epithelial tissue lines blood vessels and lung alveoli where rapid diffusion is required?",
      qHi: "रक्त वाहिकाओं और फेफड़ों की एल्वोलाई में जहाँ तीव्र विसरण की आवश्यकता होती है, किस प्रकार का एपिथीलियल ऊतक पाया जाता है?",
      optionsEn: ["Simple squamous epithelium", "Cuboidal epithelium", "Columnar epithelium", "Stratified squamous epithelium"],
      optionsHi: ["सरल शल्की एपिथीलियम (Simple squamous epithelium)", "घनाकार एपिथीलियम", "स्तम्भाकार एपिथीलियम", "स्तरित शल्की एपिथीलियम"],
      answer: 0,
      exp: "Explanation (En): Simple squamous epithelium consists of a single layer of flat, tile-like cells ideal for diffusion across surfaces like lungs and blood vessels.\nस्पष्टीकरण (Hi): सरल शल्की एपिथीलियम चपटी कोशिकाओं की पतली परत होती है जो गैसों के आदान-प्रदान और विसरण में मदद करती है।"
    }
  ],
    "Genetics": [
    {
      qEn: "Who is known as the 'Father of Genetics'?",
      qHi: "'आनुवंशिकी के जनक' (Father of Genetics) के रूप में किसे जाना जाता है?",
      optionsEn: ["Gregor Johann Mendel", "Charles Darwin", "Hugo de Vries", "Thomas Hunt Morgan"],
      optionsHi: ["ग्रेगर जॉन मेंडल (Gregor Johann Mendel)", "चार्ल्स डार्विन", "ह्यूगो डी व्रीस", "थॉमस हंट मॉर्गन"],
      answer: 0,
      exp: "Explanation (En): Gregor Mendel laid the foundation of modern genetics through his hybridization experiments on garden pea plants.\nस्पष्टीकरण (Hi): ग्रेगर जॉन मेंडल ने मटर के पौधों पर अपने प्रयोगों के माध्यम से आनुवंशिकी के नियमों की खोज की थी।"
    },
    {
      qEn: "Which plant did Gregor Mendel use for his landmark experiments on inheritance?",
      qHi: "ग्रेगर मेंडल ने वंशागति के अपने प्रसिद्ध प्रयोगों के लिए किस पौधे का चयन किया था?",
      optionsEn: ["Garden pea plant (Pisum sativum)", "Sweet pea (Lathyrus odoratus)", "Corn (Zea mays)", "Hibiscus"],
      optionsHi: ["उद्यान मटर का पौधा (Pisum sativum)", "मीठी मटर", "मक्का", "गुड़हल"],
      answer: 0,
      exp: "Explanation (En): Mendel chose the garden pea (*Pisum sativum*) because it had clear contrasting traits and was easy to cross-pollinate.\nस्पष्टीकरण (Hi): मेंडल ने मटर के पौधे (*Pisum sativum*) को चुना क्योंकि इसमें कई स्पष्ट विपरीत लक्षण थे और इसका संकरण आसान था।"
    },
    {
      qEn: "What is Mendel's Law of Segregation also known as?",
      qHi: "मेंडल के 'पृथक्करण के नियम' (Law of Segregation) को किस अन्य नाम से भी जाना जाता है?",
      optionsEn: ["Law of purity of gametes", "Law of independent assortment", "Law of dominance", "Chromosomal theory"],
      optionsHi: ["युग्मकों की शुद्धता का नियम (Law of purity of gametes)", "स्वतंत्र अपव्यूहन का नियम", "प्रभाविता का नियम", "गुणसूत्र सिद्धांत"],
      answer: 0,
      exp: "Explanation (En): The Law of Segregation states that allele pairs separate during gamete formation, meaning each gamete carries only one allele for each gene, ensuring gamete purity.\nस्पष्टीकरण (Hi): पृथक्करण के नियम को 'युग्मकों की शुद्धता का नियम' भी कहा जाता है क्योंकि युग्मक बनते समय एलील अलग हो जाते हैं।"
    },
    {
      qEn: "What does Mendel's Law of Independent Assortment state?",
      qHi: "मेंडल का 'स्वतंत्र अपव्यूहन का नियम' (Law of Independent Assortment) क्या कहता है?",
      optionsEn: ["Alleles of two or more different genes get sorted into gametes independently of one another", "Genes are always linked together", "Traits always blend together", "Recessive traits disappear forever"],
      optionsHi: ["दो या दो से अधिक विभिन्न जीनों के एलील युग्मकों में एक-दूसरे से स्वतंत्र रूप से अलग होते हैं", "जीन हमेशा जुड़े रहते हैं", "लक्षण हमेशा आपस में मिल जाते हैं", "प्रभावी लक्षण हमेशा के लिए गायब हो जाते हैं"],
      answer: 0,
      exp: "Explanation (En): Independent assortment means allele pairs for different traits segregate independently during meiosis, observed in dihybrid crosses.\nस्पष्टीकरण (Hi): इसके अनुसार अलग-अलग लक्षणों के जीन युग्मक निर्माण के समय एक-दूसरे से स्वतंत्र रूप से संचरित होते हैं।"
    },
    {
      qEn: "What is the phenotypic ratio in the F2 generation of a monohybrid cross?",
      qHi: "एकसंकर क्रॉस (Monohybrid cross) की F2 पीढ़ी में दृश्यरूप (phenotypic) अनुपात क्या होता है?",
      optionsEn: ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"],
      optionsHi: ["3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"],
      answer: 0,
      exp: "Explanation (En): In a monohybrid cross, the F2 phenotypic ratio is 3 dominant to 1 recessive (3:1), while the genotypic ratio is 1:2:1.\nस्पष्टीकरण (Hi): एकसंकर क्रॉस में F2 पीढ़ी का फेनोटाइप (दृश्यरूप) अनुपात 3:1 और जीनोटाइप अनुपात 1:2:1 होता है।"
    },
    {
      qEn: "What is the phenotypic ratio in the F2 generation of a dihybrid cross?",
      qHi: "द्विसंकर क्रॉस (Dihybrid cross) की F2 पीढ़ी का फेनोटाइप अनुपात क्या होता है?",
      optionsEn: ["9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1"],
      optionsHi: ["9 : 3 : 3 : 1", "3 : 1", "1 : 2 : 1", "1 : 1 : 1 : 1"],
      answer: 0,
      exp: "Explanation (En): A dihybrid cross involving two traits yields a classic F2 phenotypic ratio of 9:3:3:1.\nस्पष्टीकरण (Hi): दो लक्षणों को ध्यान में रखकर किए गए द्विसंकर क्रॉस में F2 पीढ़ी का फेनोटाइप अनुपात 9:3:3:1 होता है।"
    },
    {
      qEn: "What is codominance?",
      qHi: "सह-प्रभाविता (Codominance) क्या होती है?",
      optionsEn: ["A phenomenon where both alleles of a gene are expressed fully and equally in the heterozygote", "Blending of two traits", "Masking of recessive allele completely", "Mutation of genes"],
      optionsHi: ["वह स्थिति जिसमें विषमयुग्मजी (heterozygote) में दोनों एलील पूरी तरह और समान रूप से अपने को व्यक्त करते हैं", "दो लक्षणों का आपस में मिलना", " recessive एलील का पूरी तरह छिप जाना", "जीनों का उत्परिवर्तन"],
      answer: 0,
      exp: "Explanation (En): In codominance, neither allele is recessive; both traits show up together (e.g., AB blood group or roan cattle fur).\nस्पष्टीकरण (Hi): सह-प्रभाविता में कोई भी एलील दूसरे पर प्रभावी नहीं होता, बल्कि दोनों लक्षण साथ-साथ दिखाई देते हैं (जैसे AB रक्त समूह)।"
    },
    {
      qEn: "What is incomplete dominance?",
      qHi: "अप्राप्य या अपूर्ण प्रभाविता (Incomplete dominance) किसे कहते हैं?",
      optionsEn: ["A condition where neither allele is completely dominant, resulting in a blended intermediate phenotype", "Both alleles are fully expressed", "Recessive allele takes over", "Lethal gene action"],
      optionsHi: ["वह स्थिति जहाँ कोई भी एलील पूरी तरह प्रभावी नहीं होता, जिससे एक मध्यम (blended) नया रंग या लक्षण बनता है", "दोनों एलील पूरी तरह व्यक्त होते हैं", "recessive एलील हावी हो जाता है", "घातक जीन क्रिया"],
      answer: 0,
      exp: "Explanation (En): In incomplete dominance, the heterozygous phenotype is intermediate between the two homozygous parents (e.g., pink flowers in Mirabilis jalapa).\nस्पष्टीकरण (Hi): अपूर्ण प्रभाविता में दोनों जनकों के बीच का मध्यवर्ती लक्षण प्रकट होता है (जैसे 4-ओ क्लॉक प्लांट में लाल और सफेद फूलों से गुलाबी फूल बनना)।"
    },
    {
      qEn: "Who rediscovered Mendel's laws of inheritance in 1900?",
      qHi: "1900 में मेंडल के आनुवंशिकी के नियमों की पुनर्खोज किसने की थी?",
      optionsEn: ["de Vries, Correns, and von Tschermak", "Watson and Crick", "Bateson and Punnett", "Morgan and Sturtevant"],
      optionsHi: ["डी व्रीस, कॉरेन्स और वॉन शेरमार्क", "वाटसन और क्रिक", "बेटसन और पुनेट", "मॉर्गन और स्टर्टिवेंट"],
      answer: 0,
      exp: "Explanation (En): Hugo de Vries, Carl Correns, and Erich von Tschermak independently rediscovered Mendel's long-ignored laws in 1900.\nस्पष्टीकरण (Hi): ह्यूगो डी व्रीस, कार्ल कॉरेन्स और एरिक वॉन शेरमार्क ने 1900 में स्वतंत्र रूप से मेंडल के नियमों की फिर से खोज की थी।"
    },
    {
      qEn: "What is the chromosomal theory of inheritance proposed by Sutton and Boveri?",
      qHi: "सटन और बोवेरी द्वारा प्रतिपादित 'वंशागति का गुणसूत्र सिद्धांत' (Chromosomal Theory of Inheritance) क्या बताता है?",
      optionsEn: ["Chromosomes are the vehicles of genetic heredity, behaving in a manner consistent with Mendel's laws", "Genes are made of proteins only", "Mendel's laws are incorrect", "Mutations occur randomly"],
      optionsHi: ["गुणसूत्र आनुवंशिक वंशागति के संवाहक हैं जो मेंडल के नियमों के अनुरूप व्यवहार करते हैं", "जीन केवल प्रोटीन से बने हैं", "मेंडल के नियम गलत हैं", "उत्परिवर्तन यादृच्छिक रूप से होते हैं"],
      answer: 0,
      exp: "Explanation (En): Sutton and Boveri mapped chromosomal movement during meiosis to the behavior of Mendelian genes.\nस्पष्टीकरण (Hi): इस सिद्धांत के अनुसार जीन गुणसूत्रों पर स्थित होते हैं और अर्धसूत्री विभाजन के दौरान मेंडल के नियमों का पालन करते हैं।"
    },
    {
      qEn: "Who discovered sex-linked inheritance using fruit flies (*Drosophila melanogaster*)?",
      qHi: "फल मक्खी (*Drosophila melanogaster*) का उपयोग करके 'लिंग-सहग्न वंशागति' (Sex-linked inheritance) की खोज किसने की थी?",
      optionsEn: ["Thomas Hunt Morgan", "Gregor Mendel", "Watson and Crick", "Hermann Muller"],
      optionsHi: ["थॉमस हंट मॉर्गन (Thomas Hunt Morgan)", "ग्रेगर मेंडल", "वाटसन और क्रिक", "हरमन मुллер"],
      answer: 0,
      exp: "Explanation (En): T.H. Morgan used *Drosophila* to discover linkage and sex-linked traits (such as eye color in fruit flies).\nस्पष्टीकरण (Hi): थॉमस हंट मॉर्गन ने ड्रोसोफिला (फल मक्खी) पर प्रयोग करके लिंग-सहग्न लक्षणों और लिंकेज की खोज की थी।"
    },
    {
      qEn: "What is the sex chromosome combination in normal human males?",
      qHi: "सामान्य मानव पुरुषों में लिंग गुणसूत्रों (sex chromosomes) का संयोजन क्या होता है?",
      optionsEn: ["XY", "XX", "XXY", "XO"],
      optionsHi: ["XY", "XX", "XXY", "XO"],
      answer: 0,
      exp: "Explanation (En): Human males have 44 autosomes and one X and one Y chromosome (XY).\nस्पष्टीकरण (Hi): सामान्य पुरुषों में 44 ऑटोसोम और एक X तथा एक Y गुणसूत्र (अर्थात XY) होता है।"
    },
    {
      qEn: "What is the sex chromosome combination in normal human females?",
      qHi: "सामान्य मानव महिलाओं में लिंग गुणसूत्रों का संयोजन क्या होता है?",
      optionsEn: ["XX", "XY", "XO", "YY"],
      optionsHi: ["XX", "XY", "XO", "YY"],
      answer: 0,
      exp: "Explanation (En): Human females possess 44 autosomes and two X chromosomes (XX).\nस्पष्टीकरण (Hi): सामान्य महिलाओं में दो X गुणसूत्र (अर्थात XX) पाए जाते हैं।"
    },
    {
      qEn: "Which genetic disorder is characterized by the inability of blood to clot properly due to a clotting factor deficiency?",
      qHi: "कौन सा आनुवंशिक विकार रक्त का थक्का ठीक से न जमने की समस्या से जुड़ा है (स्क; थक्के का कारक अनुपस्थित होता है)?",
      optionsEn: ["Hemophilia", "Down syndrome", "Turner syndrome", "Phenylketonuria"],
      optionsHi: ["हीमोफिलिया (Hemophilia)", "डाउन सिंड्रोम", "टर्नर सिंड्रोम", "फेनिलकेटोन्यूरिया"],
      answer: 0,
      exp: "Explanation (En): Hemophilia is an X-linked recessive genetic disorder where blood fails to clot normally, leading to excessive bleeding.\nस्पष्टीकरण (Hi): हीमोफिलिया एक X-लिंग सहग्न recessive विकार है जिसमें चोट लगने पर खून का थक्का नहीं जमता।"
    },
    {
      qEn: "What is color blindness (red-green color blindness) classified as?",
      qHi: "लाल-हरा वर्णान्ता (Color blindness) किस प्रकार का आनुवंशिक रोग है?",
      optionsEn: ["X-linked recessive inherited disorder", "Autosomal dominant disorder", "Chromosomal deletion", "Y-linked dominant disorder"],
      optionsHi: ["X-linked recessive (X-सहलग्न अप्रभावी) आनुवंशिक विकार", "ऑटोसोमल प्रभावी विकार", "गुणसूत्र विलोपन", "Y-सहलग्न प्रभावी विकार"],
      answer: 0,
      exp: "Explanation (En): Red-green color blindness is an X-linked recessive trait, making it more common in males than females.\nस्पष्टीकरण (Hi): लाल-हरा रंग न पहचान पाना एक X-सहलग्न अप्रभावी (recessive) आनुवंशिक दोष है जो पुरुषों में अधिक होता है।"
    },
    {
      qEn: "What is Down syndrome caused by?",
      qHi: "डाउन सिंड्रोम (Down syndrome) किस कारण से होता है?",
      optionsEn: ["Trisomy of chromosome 21 (an extra copy of chromosome 21)", "Monosomy of X chromosome", "Deletion on chromosome 5", "Extra Y chromosome"],
      optionsHi: ["गुणसूत्र 21 की ट्राइसोमी (गुणसूत्र 21 की एक अतिरिक्त प्रति)", "X गुणसूत्र की मोनोसोमी", "गुणसूत्र 5 का विलोपन", "अतिरिक्त Y गुणसूत्र"],
      answer: 0,
      exp: "Explanation (En): Down syndrome occurs due to non-disjunction resulting in 47 chromosomes with an extra 21st chromosome.\nस्पष्टीकरण (Hi): 21वें गुणसूत्र की एक अतिरिक्त प्रति (Trisomy 21) होने के कारण डाउन सिंड्रोम होता है।"
    },
    {
      qEn: "What is Turner syndrome characterized by?",
      qHi: "टर्नर सिंड्रोम (Turner syndrome) की क्या विशेषता है?",
      optionsEn: ["Monosomy of X chromosome in females (45, XO)", "Trisomy 21", "XXY condition in males", "Extra Y chromosome"],
      optionsHi: ["महिलाओं में X गुणसूत्र की मोनोसोमी (45, XO)", "ट्राइसोमी 21", "पुरुषों में XXY स्थिति", "अतिरिक्त Y गुणसूत्र"],
      answer: 0,
      exp: "Explanation (En): Turner syndrome is a chromosomal abnormality in females where one X chromosome is missing (45, XO), causing sterility and short stature.\nस्पष्टीकरण (Hi): टर्नर सिंड्रोम से ग्रसित महिलाओं में एक X गुणसूत्र कम होता है (45, XO), जिससे वे बांझपन का शिकार होती हैं।"
    },
    {
      qEn: "What is Klinefelter syndrome characterized by?",
      qHi: "क्लाइनफेल्टर सिंड्रोम (Klinefelter syndrome) की क्या विशेषता है?",
      optionsEn: ["An extra X chromosome in males (47, XXY)", "Missing X chromosome", "Trisomy 21", "XYY condition"],
      optionsHi: ["पुरुषों में एक अतिरिक्त X गुणसूत्र (47, XXY)", "X गुणसूत्र की कमी", "ट्राइसोमी 21", "XYY स्थिति"],
      answer: 0,
      exp: "Explanation (En): Klinefelter syndrome occurs in males with an extra X chromosome (47, XXY), leading to underdeveloped testes and feminine features.\nस्पष्टीकरण (Hi):क्लाइनफेल्टर सिंड्रोम वाले पुरुषों में एक अतिरिक्त X गुणसूत्र (47, XXY) होता है।"
    },
    {
      qEn: "Who proposed the double helix model of DNA in 1953?",
      qHi: "1953 में डीएनए के डबल हेलिक्स (द्वि-कुंडली) मॉडल का प्रतिपादन किसने किया था?",
      optionsEn: ["James Watson and Francis Crick", "Gregor Mendel and Thomas Morgan", "Rosalind Franklin alone", "Frederick Griffith"],
      optionsHi: ["जेम्स वाटसन और फ्रांसिसी क्रिक (Watson and Crick)", "ग्रेगर मेंडल और थॉमस मॉर्गन", "केवल रोज़ालीन फ्रैंकलिन", "फ्रेडरिक ग्रिफिथ"],
      answer: 0,
      exp: "Explanation (En): Watson and Crick proposed the DNA double helix model based on X-ray diffraction data by Rosalind Franklin and Maurice Wilkins.\nस्पष्टीकरण (Hi): वाटसन और क्रिक ने 1953 में फ्रैंकलिन के एक्स-रे डेटा के आधार पर डीएनए की डबल हेलिक्स संरचना प्रस्तुत की थी।"
    },
    {
      qEn: "What are the four nitrogenous bases found in DNA?",
      qHi: "डीएनए में पाए जाने वाले चार नाइट्रोजनारी क्षारक (nitrogenous bases) कौन से हैं?",
      optionsEn: ["Adenine, Thymine, Cytosine, and Guanine", "Adenine, Uracil, Cytosine, and Guanine", "Adenine, Thymine, Uracil, and Cytosine", "Thymine, Uracil, Guanine, and Cytosine"],
      optionsHi: ["एडेनिन, थाइमिन, साइटोसिन और ग्वानिन", "एडेनिन, यूरेसिल, साइटोसिन और ग्वानिन", "एडेनिन, थाइमिन, यूरेसिल और साइटोसिन", "थाइमिन, यूरेसिल, ग्वानिन और साइटोसिन"],
      answer: 0,
      exp: "Explanation (En): DNA contains Adenine (A), Thymine (T), Cytosine (C), and Guanine (G). (Uracil replaces thymine in RNA).\nस्पष्टीकरण (Hi): डीएनए में एडेनिन (A), थाइमिन (T), साइटोसिन (C) और ग्वानिन (G) होते हैं।"
    },
    {
      qEn: "According to Chargaff's rules for DNA, what is the base pairing rule?",
      qHi: "चारगाफ के नियम (Chargaff's rules) के अनुसार डीएनए में क्षार युग्मन (base pairing) का नियम क्या है?",
      optionsEn: ["Adenine always pairs with Thymine (A=T), and Cytosine always pairs with Guanine (G\\equiv C)", "Adenine pairs with Cytosine", "Thymine pairs with Guanine", "All bases pair randomly"],
      optionsHi: ["एडेनिन हमेशा थाइमिन से (A=T) और साइटोसिन हमेशा ग्वानिन से (G\\equiv C) जुड़ता है", "एडेनिन साइटोसिन से जुड़ता है", "थाइमिन ग्वानिन से जुड़ता है", "सभी बेस यादृच्छिक रूप से जुड़ते हैं"],
      answer: 0,
      exp: "Explanation (En): Chargaff's rule states that the amount of A equals T, and G equals C in double-stranded DNA.\nस्पष्टीकरण (Hi): चारगाफ नियम के अनुसार एडेनिन हमेशा थाइमिन के साथ और साइटोसिन ग्वानिन के साथ हाइड्रोजन बंध बनाता है।"
    },
    {
      qEn: "Which nitrogenous base is present in RNA instead of Thymine?",
      qHi: "थाइमिन के स्थान पर आरएनए (RNA) में कौन सा नाइट्रोजन क्षारक पाया जाता है?",
      optionsEn: ["Uracil (U)", "Adenine", "Guanine", "Cytosine"],
      optionsHi: ["यूरेसिल (Uracil - U)", "एडेनिन", "ग्वानिन", "साइटोसिन"],
      answer: 0,
      exp: "Explanation (En): RNA contains Uracil instead of Thymine, which pairs with Adenine.\nस्पष्टीकरण (Hi): आरएनए में थाइमिन नहीं होता, उसकी जगह यूरेसिल (U) पाया जाता है।"
    },
    {
      qEn: "What is the Central Dogma of molecular biology proposed by Francis Crick?",
      qHi: "फ्रांसिसी क्रिक द्वारा प्रतिपादित आणविक जीव विज्ञान का 'सेंट्रल डॉग्मा' (Central Dogma) क्या है?",
      optionsEn: ["Genetic information flows unidirectionally from DNA to RNA, and then to Protein (DNA \\rightarrow RNA \\rightarrow Protein)", "Protein flows into DNA", "RNA flows into DNA directly", "Proteins create DNA"],
      optionsHi: ["आनुवंशिक सूचना का प्रवाह हमेशा डीएनए से आरएनए और फिर प्रोटीन की ओर होता है", "प्रोटीन से डीएनए बनता है", "आरएनए सीधे डीएनए बनाता है", "प्रोटीन डीएनए बनाते हैं"],
      answer: 0,
      exp: "Explanation (En): Central dogma states the directional flow of genetic information: transcription of DNA to mRNA, followed by translation into proteins.\nस्पष्टीकरण (Hi): सेंट्रल डॉग्मा के अनुसार सूचना का प्रवाह DNA \\rightarrow RNA \\rightarrow Protein के रूप में होता है।"
    },
    {
      qEn: "What is transcription in molecular genetics?",
      qHi: "आणविक आनुवंशिकी में 'प्रतिलेखन' या ट्रांसक्रिप्शन (Transcription) किसे कहते हैं?",
      optionsEn: ["Synthesis of an RNA molecule from a DNA template strand", "Synthesis of protein from RNA", "Replication of DNA", "Mutation of genes"],
      optionsHi: ["डीएनए टेंपलेट से आरएनए अणु का संश्लेषण", "आरएनए से प्रोटीन का निर्माण", "डीएनए की प्रतिकृति", "जीन उत्परिवर्तन"],
      answer: 0,
      exp: "Explanation (En): Transcription is the process where genetic information in a DNA sequence is copied into a messenger RNA (mRNA) molecule.\nस्पष्टीकरण (Hi): डीएनए से एम-आरएनए (mRNA) बनने की प्रक्रिया को ट्रांसक्रिप्शन या अनुलेखन कहते हैं।"
    },
    {
      qEn: "What is translation in protein synthesis?",
      qHi: "प्रोटीन संश्लेषण में 'अनुवादन' या ट्रांसलेशन (Translation) क्या है?",
      optionsEn: ["The process where ribosomes synthesize proteins using the genetic code carried by mRNA", "Copying DNA into RNA", "Breaking down proteins", "Duplicating DNA"],
      optionsHi: ["वह प्रक्रिया जिसमें राइबोसोम mRNA पर मौजूद कोड का उपयोग करके प्रोटीन का निर्माण करते हैं", "डीएनए को आरएनए में कॉपी करना", "प्रोटीन तोड़ना", "डीएनए द्विगुणन"],
      answer: 0,
      exp: "Explanation (En): Translation is the decoding of mRNA message by ribosomes into a polypeptide chain of amino acids.\nस्पष्टीकरण (Hi): mRNA पर मौजूद कोड के आधार पर अमीनो एसिड जोड़कर प्रोटीन बनाने की प्रक्रिया को ट्रांसलेशन कहते हैं।"
    },
    {
      qEn: "Who proposed the 'jumping genes' or transposons?",
      qHi: "'जंपिंग जीन्स' या ट्रांसपोसंस (Transposons) की खोज किसने की थी?",
      optionsEn: ["Barbara McClintock", "Gregor Mendel", "James Watson", "Har Gobind Khorana"],
      optionsHi: ["बारबरा मैक्लिंटॉक (Barbara McClintock)", "ग्रेगर मेंडल", "जेम्स वाटसन", "हर गोबिंद खुराना"],
      answer: 0,
      exp: "Explanation (En): Barbara McClintock discovered transposable elements (jumping genes) in maize, winning a Nobel Prize.\nस्पष्टीकरण (Hi): बारबरा मैक्लिंटॉक ने मक्के के पौधों में ऐसे जीनों की खोज की जो गुणसूत्रों पर अपनी जगह बदल सकते हैं।"
    },
    {
      qEn: "Who deciphered the genetic code and synthesized artificial RNA in laboratory experiments?",
      qHi: "प्रयोगशाला में आनुवंशिक कोड को डिकोड करने और कृत्रिम आरएनए synthesizing का श्रेय किसे जाता है?",
      optionsEn: ["Har Gobind Khorana (along with Nirenberg and Holley)", "Watson and Crick", "Mendel", "Darwin"],
      optionsHi: ["हर गोबिंद खुराना (नirenburg और Holley के साथ)", "वाटसन और क्रिक", "मेंडल", "डार्विन"],
      answer: 0,
      exp: "Explanation (En): Har Gobind Khorana played a pivotal role in deciphering genetic codons for amino acids, winning the Nobel Prize.\nस्पष्टीकरण (Hi): भारतीय मूल के वैज्ञानिक हर गोबिंद खुराना ने आनुवंशिक कोड की व्याख्या करने में महत्वपूर्ण योगदान दिया था।"
    },
    {
      qEn: "What is gene mutation?",
      qHi: "जीन उत्परिवर्तन (Gene mutation) किसे कहते हैं?",
      optionsEn: ["A sudden permanent change in the nucleotide sequence of DNA", "Normal cell division", "Replication of DNA", "Formation of gametes"],
      optionsHi: ["डीएनए के न्यूक्लियोटाइड क्रम में होने वाला अचानक और स्थायी परिवर्तन", "सामान्य कोशिका विभाजन", "डीएनए प्रतिकृति", "युग्मकों का निर्माण"],
      answer: 0,
      exp: "Explanation (En): A mutation is an alteration in the DNA sequence that can alter traits or cause genetic disorders.\nस्पष्टीकरण (Hi): डीएनए के सीक्वेंस में अचानक होने वाले स्थायी बदलाव को उत्परिवर्तन (Mutation) कहते हैं।"
    },
    {
      qEn: "What is a pedigree analysis in human genetics?",
      qHi: "मानव आनुवंशिकी में 'वंशावली विश्लेषण' (Pedigree analysis) क्या है?",
      optionsEn: ["The study of family history and inheritance of traits across multiple generations", "Study of plant breeding", "Counting chromosomes", "DNA fingerprinting"],
      optionsHi: ["कई पीढ़ियों में परिवार के इतिहास और लक्षणों की वंशावली का अध्ययन", "पौधों के प्रजनन का अध्ययन", "गुणसूत्रों की गिनती", "डीएनए फिंगरप्रिंटिंग"],
      answer: 0,
      exp: "Explanation (En): Pedigree charts track the inheritance of genetic disorders and traits through generations in a family tree.\nस्पष्टीकरण (Hi): परिवार के चार्ट के जरिए कई पीढ़ियों तक किसी आनुवंशिक रोग या लक्षण के फैलने का अध्ययन वंशावली विश्लेषण है।"
    },
    {
      qEn: "What is DNA fingerprinting primarily used for?",
      qHi: "डीएनए फिंगरप्रिंटिंग (DNA fingerprinting) का मुख्य उपयोग कहाँ किया जाता है?",
      optionsEn: ["Forensic investigations, paternity testing, and identifying genetic relationships", "Measuring blood sugar", "Detecting simple fevers", "Treating cancer"],
      optionsHi: ["फोरेंसिक जांच, पितृत्व परीक्षण (paternity testing) और आनुवंशिक संबंधों की पहचान", "ब्लड शुगर मापना", "साधारण बुखार का पता लगाना", "कैंसर का इलाज"],
      answer: 0,
      exp: "Explanation (En): Developed by Alec Jeffreys, DNA fingerprinting uses VNTRs to identify individuals based on unique DNA profiles.\nस्पष्टीकरण (Hi): एलेक जेफ़्रीज़ द्वारा विकसित डीएनए फिंगरप्रिंटिंग का उपयोग अपराध की जांच और पितृत्व परीक्षण में होता है।"
    }
  ],
    "Plant Kingdom": [
    {
      qEn: "Who proposed the natural system of classification for plants, which is widely used?",
      qHi: "पौधों के वर्गीकरण की प्राकृतिक प्रणाली (Natural system of classification) का प्रतिपादन किसने किया था?",
      optionsEn: ["George Bentham and Joseph Dalton Hooker", "Carolus Linnaeus", "A.W. Eichler", "Aristotle"],
      optionsHi: ["जॉर्ज बेन्थैम और जोसेफ डाल्टन हूकर", "कैरोलस लिनियस", "ए.डब्लू. इचलर", "अरस्तू"],
      answer: 0,
      exp: "Explanation (En): Bentham and Hooker proposed the most prominent natural classification system for seed plants.\nस्पष्टीकरण (Hi): बेन्थैम और हूकर ने बीज वाले पौधों के लिए सबसे प्रसिद्ध प्राकृतिक वर्गीकरण प्रणाली दी थी।"
    },
    {
      qEn: "How are plants primarily classified in the Whittaker five-kingdom classification?",
      qHi: "व्हिट्टेकर्स की पांच-जगह वर्गीकरण प्रणाली में पौधों को मुख्य रूप से किस जगत में रखा गया है?",
      optionsEn: ["Kingdom Plantae", "Kingdom Animalia", "Kingdom Protista", "Kingdom Monera"],
      optionsHi: ["प्लांटी जगत (Kingdom Plantae)", "एनिमलिया जगत", "प्रोटिस्टा जगत", "मोनेरा जगत"],
      answer: 0,
      exp: "Explanation (En): All eukaryotic, multicellular, autotrophic chlorophyll-containing organisms are grouped under Kingdom Plantae.\nस्पष्टीकरण (Hi): सभी यूकैरियोटिक, बहुकोशिकी, स्वपोषी और क्लोरोफिलयुक्त पौधों को 'प्लांटी जगत' में रखा गया है।"
    },
    {
      qEn: "Which division of the plant kingdom is known as the 'amphibians of the plant kingdom'?",
      qHi: "पादप जगत के किस वर्ग को 'पादप जगत का उभयचर' (Amphibians of the plant kingdom) कहा जाता है?",
      optionsEn: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Algae"],
      optionsHi: ["ब्रायोफाइट्स (Bryophytes)", "टेरिडोफाइट्स", "जिम्नोस्पर्म", "शैवाल"],
      answer: 0,
      exp: "Explanation (En): Bryophytes are called plant amphibians because they live in soil but require water for sexual reproduction (fertilization).\nस्पष्टीकरण (Hi): ब्रायोफाइट्स को पादप जगत का उभयचर कहा जाता है क्योंकि वे जमीन पर उगते हैं लेकिन निषेचन के लिए पानी पर निर्भर रहते हैं।"
    },
    {
      qEn: "What are the primary vascular tissues found in higher plants that are absent in Bryophytes?",
      qHi: "उच्च पौधों में पाए जाने वाले वे कौन से मुख्य संवहन ऊतक हैं जो ब्रायोफाइट्स में अनुपस्थित होते हैं?",
      optionsEn: ["Xylem and Phloem", "Parenchyma and Collenchyma", "Epidermis and Cortex", "Cambium and Cork"],
      optionsHi: ["ज़ाइलम और फ्लोएम (Xylem and Phloem)", "पैरेन्काइमा और कॉलेन्काइमा", "एपिडर्मिस और कॉर्टेक्स", "कैम्बियम और कॉर्क"],
      answer: 0,
      exp: "Explanation (En): Bryophytes are non-vascular plants lacking true xylem and phloem tissues for water and food transport.\nस्पष्टीकरण (Hi): ब्रायोफाइट्स गैर-संवहन पौधे हैं जिनमें पानी और भोजन के परिवहन के लिए ज़ाइलम और फ्लोएम नहीं होते।"
    },
    {
      qEn: "Which plant group represents the first terrestrial plants to possess vascular tissues (xylem and phloem)?",
      qHi: "कौन सा पादप समूह संवहन ऊतक (ज़ाइलम और फ्लोएम) रखने वाले पहले स्थलीय पौधों का प्रतिनिधित्व करता है?",
      optionsEn: ["Pteridophytes", "Bryophytes", "Thallophytes", "Gymnosperms"],
      optionsHi: ["टेरिडोफाइट्स (Pteridophytes)", "ब्रायोफाइट्स", "थैलोफाइट्स", "जिम्नोस्पर्म"],
      answer: 0,
      exp: "Explanation (En): Pteridophytes (such as ferns) are seedless vascular plants that first evolved true xylem and phloem.\nस्पष्टीकरण (Hi): टेरिडोफाइट्स (जैसे फ़र्न) पहले ऐसे स्थलीय पौधे हैं जिनमें सच्चे ज़ाइलम और फ्लोएम पाए गए।"
    },
    {
      qEn: "What are seed-bearing plants that produce naked seeds (not enclosed inside an ovary/fruit) called?",
      qHi: "उन बीज-उत्पादक पौधों को क्या कहा जाता है जो नग्न बीज (अंडाशय या फल के अंदर बंद नहीं) पैदा करते हैं?",
      optionsEn: ["Gymnosperms", "Angiosperms", "Bryophytes", "Pteridophytes"],
      optionsHi: ["जिम्नोस्पर्म या अनावृतबीजी (Gymnosperms)", "एंगियोस्पर्म", "ब्रायोफाइट्स", "टेरिडोफाइट्स"],
      answer: 0,
      exp: "Explanation (En): Gymnosperms (meaning 'naked seeds') have seeds that are exposed on the surface of leaf-like structures (cones), not enclosed in fruits.\nस्पष्टीकरण (Hi): जिम्नोस्पर्म (अनावृतबीजी) वे पौधे हैं जिनके बीज फलों के अंदर बंद नहीं होते बल्कि खुले (नग्न) होते हैं।"
    },
    {
      qEn: "What are flowering plants whose seeds are enclosed within a fruit called?",
      qHi: "उन फूल वाले पौधों को क्या कहा जाता है जिनके बीज फल के अंदर बंद होते हैं?",
      optionsEn: ["Angiosperms", "Gymnosperms", "Pteridophytes", "Bryophytes"],
      optionsHi: ["एंगियोस्पर्म या आवृतबीजी (Angiosperms)", "जिम्नोस्पर्म", "टेरिडोफाइट्स", "ब्रायोफाइट्स"],
      answer: 0,
      exp: "Explanation (En): Angiosperms are vascular seed plants that produce flowers and bear seeds enclosed within fruits.\nस्पष्टीकरण (Hi): एंगियोस्पर्म (आवृतबीजी) सबसे विकसित फूल वाले पौधे हैं जिनके बीज फल के अंदर सुरक्षित रहते हैं।"
    },
    {
      qEn: "Into how many classes are Angiosperms divided based on the number of cotyledons in their seeds?",
      qHi: "बीजों में बीजपत्रों (cotyledons) की संख्या के आधार पर एंगियोस्पर्म को कितने वर्गों में बांटा गया है?",
      optionsEn: ["Two (Monocots and Dicots)", "Three", "Four", "One"],
      optionsHi: ["दो (एकबीजपत्री और द्विबीजपत्री)", "तीन", "चार", "एक"],
      answer: 0,
      exp: "Explanation (En): Angiosperms are divided into Monocotyledonae (one cotyledon) and Dicotyledonae (two cotyledons).\nस्पष्टीकरण (Hi): एंगियोस्पर्म को दो भागों में बांटा गया है: एकबीजपत्री (Monocots) और द्विबीजपत्री (Dicots)।"
    },
    {
      qEn: "Which of the following is a characteristic feature of monocot plants?",
      qHi: "निम्नलिखित में से कौन सी एकबीजपत्री (monocot) पौधों की एक प्रमुख विशेषता है?",
      optionsEn: ["Parallel venation in leaves and fibrous root system", "Reticulate venation and taproot system", "Two cotyledons in seeds", "Woody secondary growth"],
      optionsHi: ["पत्तियों में समानांतर शिराविन्यास और झकड़ा (fibrous) जड़ तंत्र", "जालिका रूपी शिराविन्यास और मूसला जड़", "बीज में दो बीजपत्र", "काष्ठ द्वितीयक वृद्धि"],
      answer: 0,
      exp: "Explanation (En): Monocots typically feature parallel leaf venation, fibrous roots, floral parts in multiples of three, and one cotyledon.\nस्पष्टीकरण (Hi): एकबीजपत्री पौधों (जैसे गेहूं, मक्का) की पत्तियों में समानांतर शिराविन्यास और रेशेदार (झकड़ा) जड़ें होती हैं।"
    },
    {
      qEn: "Which of the following is a characteristic feature of dicot plants?",
      qHi: "निम्नलिखित में से कौन सी द्विबीजपत्री (dicot) पौधों की विशेषता है?",
      optionsEn: ["Reticulate (net-like) leaf venation and taproot system", "Parallel leaf venation", "One cotyledon", "Scattered vascular bundles in stem"],
      optionsHi: ["जालिका रूपी (reticulate) शिराविन्यास और मूसला जड़ (taproot) तंत्र", "समानांतर शिराविन्यास", "एक बीजपत्र", "तने में बिखरे हुए संवहन बंडल"],
      answer: 0,
      exp: "Explanation (En): Dicots have reticulate venation, taproot systems, two cotyledons, and ring-arranged vascular bundles.\nस्पष्टीकरण (Hi): द्विबीजपत्री पौधों में जालिका रूपी शिराविन्यास, मूसला जड़ (taproot) और दो बीजपत्र होते हैं।"
    },
    {
      qEn: "What is algae study known as?",
      qHi: "शैवाल (Algae) के अध्ययन को क्या कहा जाता है?",
      optionsEn: ["Phycology (Algology)", "Mycology", "Bryology", "Botany"],
      optionsHi: ["फाइकोलॉजी या एल्गोलॉजी (Phycology)", "माइकोलॉजी", "ब्रायोलॉजी", "बॉटनी"],
      answer: 0,
      exp: "Explanation (En): Phycology is the scientific study of algae, while mycology is the study of fungi.\nस्पष्टीकरण (Hi): शैवालों के वैज्ञानिक अध्ययन को फाइकोलॉजी (Phycology) कहा जाता है।"
    },
    {
      qEn: "What is fungi study known as?",
      qHi: "कवक (Fungi) के अध्ययन को क्या कहा जाता है?",
      optionsEn: ["Mycology", "Phycology", "Virology", "Bacteriology"],
      optionsHi: ["माइकोलॉजी (Mycology)", "फाइकोलॉजी", "वायरोलॉजी", "बैक्टीरियोलॉजी"],
      answer: 0,
      exp: "Explanation (En): Mycology is the branch of biology concerned with the study of fungi, including yeasts and molds.\nस्पष्टीकरण (Hi): कवकों (फंगस) के अध्ययन को माइकोलॉजी (Mycology) कहते हैं।"
    },
    {
      qEn: "What are lichens?",
      qHi: "लाइकेन (Lichens) क्या होते हैं?",
      optionsEn: ["A symbiotic association between algae (phycobiont) and fungi (mycobiont)", "A parasitic plant on trees", "A type of moss", "Aquatic algae"],
      optionsHi: ["शैवाल और कवक के बीच का सहजीवी (symbiotic) संबंध", "पेड़ों पर परजीवी पौधा", "एक प्रकार की काई", "जलीय शैवाल"],
      answer: 0,
      exp: "Explanation (En): Lichens are mutualistic symbiotic associations where algae provide food via photosynthesis and fungi provide shelter and minerals.\nस्पष्टीकरण (Hi): लाइकेन शैवाल और कवक का सहजीवी संबंध है जो प्रदूषण के अच्छे सूचक भी माने जाते हैं।"
    },
    {
      qEn: "Why are lichens important as biological indicators?",
      qHi: "लाइकेन जैविक संकेतक (bio-indicators) के रूप में क्यों महत्वपूर्ण माने जाते हैं?",
      optionsEn: ["They do not grow in polluted areas, especially areas with high sulfur dioxide", "They grow fastest in polluted cities", "They purify water", "They glow in the dark"],
      optionsHi: ["वे प्रदूषित क्षेत्रों में, विशेषकर सल्फर डाइऑक्साइड वाले स्थानों पर नहीं उगते", "वे प्रदूषित शहरों में सबसे तेज उगते हैं", "वे पानी शुद्ध करते हैं", "वे अंधेरे में चमकते हैं"],
      answer: 0,
      exp: "Explanation (En): Lichens are extremely sensitive to air pollution (especially SO_2), making them natural indicators of clean air.\nस्पष्टीकरण (Hi): लाइकेन वायु प्रदूषण (विशेषकर SO_2) के प्रति अतिसंवेदनशील होते हैं, इसलिए प्रदूषित इलाकों में ये नहीं उगते।"
    },
    {
      qEn: "What is the plant body of algae typically called?",
      qHi: "शैवाल के पौधे के शरीर को सामान्यतः क्या कहा जाता है?",
      optionsEn: ["Thallus (undifferentiated plant body lacking true roots, stems, and leaves)", "Corm", "Mycelium", "Stem-leaf axis"],
      optionsHi: ["थैल्स (Thallus - जिसमें वास्तविक जड़, तना और पत्तियां नहीं होतीं)", "कॉर्मी", "माइसिलियम", "तना-पत्ती अक्ष"],
      answer: 0,
      exp: "Explanation (En): Algae possess a thallus body structure, meaning they lack true roots, stems, and leaves.\nस्पष्टीकरण (Hi): शैवाल का शरीर थैल्स (Thallus) प्रकार का होता है, यानी उसमें जड़, तना और पत्ती का स्पष्ट विभेदन नहीं होता।"
    },
    {
      qEn: "Which pigment gives red algae their characteristic color?",
      qHi: "लाल शैवाल (Red algae) को उनका विशिष्ट लाल रंग किस वर्णक (pigment) के कारण मिलता है?",
      optionsEn: ["Phycoerythrin", "Fucoxanthin", "Chlorophyll b", "Carotene"],
      optionsHi: ["फाइकोइरिथ्रिन (Phycoerythrin)", "फ्यूकोजैंथिन", "क्लोरोफिल b", "कैरोटीन"],
      answer: 0,
      exp: "Explanation (En): Red algae (Rhodophyceae) contain the water-soluble accessory pigment phycoerythrin, which absorbs blue light.\nस्पष्टीकरण (Hi): लाल शैवालों में फाइकोइरिथ्रिन नामक वर्णक पाया जाता है जो उन्हें लाल रंग प्रदान करता है।"
    },
    {
      qEn: "Which pigment gives brown algae their characteristic color?",
      qHi: "भूरे शैवाल (Brown algae) को उनका विशिष्ट भूरा रंग किस वर्णक के कारण मिलता है?",
      optionsEn: ["Fucoxanthin", "Phycoerythrin", "Anthocyanin", "Chlorophyll a"],
      optionsHi: ["फ्यूकोजैंथिन (Fucoxanthin)", "फाइकोइरिथ्रिन", "एंथोसाइनिन", "क्लोरोफिल a"],
      answer: 0,
      exp: "Explanation (En): Brown algae (Phaeophyceae) contain high amounts of fucoxanthin along with chlorophyll a and c.\nस्पष्टीकरण (Hi): भूरे शैवालों में फ्यूकोजैंथिन (Fucoxanthin) की अधिकता होती है जिससे उनका रंग भूरा होता है।"
    },
    {
      qEn: "Which of the following is a unicellular green alga often used in biological research and space studies?",
      qHi: "निम्नलिखित में से कौन सा एक एककोशिकीय हरा शैवाल है जिसका उपयोग जैविक अनुसंधान और अंतरिक्ष अध्ययन में किया जाता है?",
      optionsEn: ["Chlorella", "Spirogyra", "Ulva", "Kelps"],
      optionsHi: ["क्लोरेला (Chlorella)", "स्पाइरोगायरा", "उल्वा", "केल्प्स"],
      answer: 0,
      exp: "Explanation (En): *Chlorella* is a single-celled green alga studied for space travel food and oxygen generation.\nस्पष्टीकरण (Hi): क्लोरेला एक एककोशिकीय हरा शैवाल है जिसे अंतरिक्ष यात्रियों द्वारा भोजन और ऑक्सीजन के स्रोत के रूप में इस्तेमाल किया जाता है।"
    },
    {
      qEn: "What are mycorrhizae?",
      qHi: "माइकोराइजा (Mycorrhizae) क्या होता है?",
      optionsEn: ["A symbiotic association between fungi and the roots of higher plants", "Roots of aquatic plants", "A parasitic fungal infection", "Algal spores"],
      optionsHi: ["कवकों और उच्च पौधों की जड़ों के बीच का सहजीवी संबंध", "जलीय पौधों की जड़ें", "एक परजीवी कवक संक्रमण", "शैवाल बीजाणु"],
      answer: 0,
      exp: "Explanation (En): Mycorrhiza is a mutualistic association between fungi and plant roots that helps plants absorb water and minerals like phosphorus.\nस्पष्टीकरण (Hi): माइकोराइजा कवक और पौधों की जड़ों के बीच का सहजीवी संबंध है जो मिट्टी से पोषक तत्व (जैसे फॉस्फोरस) लेने में मदद करता है।"
    },
    {
      qEn: "Which division of plants includes the tallest tree species, such as *Sequoia sempervirens* (Redwood)?",
      qHi: "किस पादप समूह में सबसे ऊंचे वृक्ष, जैसे *सिकोया* (Redwood), शामिल हैं?",
      optionsEn: ["Gymnosperms", "Angiosperms", "Pteridophytes", "Bryophytes"],
      optionsHi: ["जिम्नोस्पर्म (Gymnosperms)", "एंगियोस्पर्म", "टेरिडोफाइट्स", "ब्रायोफाइट्स"],
      answer: 0,
      exp: "Explanation (En): Gymnosperms include conifers and redwoods, with *Sequoia sempervirens* being one of the tallest living trees on Earth.\nस्पष्टीकरण (Hi): अनावृतबीजी (Gymnosperms) वर्ग में दुनिया के सबसे ऊंचे पेड़ (जैसे सिकोया) आते हैं।"
    },
    {
      qEn: "What is double fertilization?",
      qHi: "द्वि-निषेचन (Double fertilization) किसकी मुख्य विशेषता है?",
      optionsEn: ["Angiosperms (Flowering plants)", "Gymnosperms", "Bryophytes", "Ferns"],
      optionsHi: ["एंगियोस्पर्म (फूल वाले पौधे)", "जिम्नोस्पर्म", "ब्रायोफाइट्स", "फर्न"],
      answer: 0,
      exp: "Explanation (En): Double fertilization is unique to angiosperms, where one sperm fertilizes the egg to form a zygote and another fuses with polar nuclei to form triploid endosperm.\nस्पष्टीकरण (Hi): द्वि-निषेचन एंगियोस्पर्म (आवृतबीजी) पौधों की अनूठी विशेषता है जिसमें सिन्गेमी और त्रिसंयोजन दोनों होते हैं।"
    },
    {
      qEn: "What is the triploid product formed during double fertilization in flowering plants called?",
      qHi: "फूल वाले पौधों में द्वि-निषेचन के दौरान बनने वाले त्रिगुणित (triploid) उत्पाद को क्या कहते हैं?",
      optionsEn: ["Endosperm (भ्रूणपोष)", "Zygote", "Embryo", "Seed coat"],
      optionsHi: ["भ्रूणपोष (Endosperm)", "युग्मज (Zygote)", "भ्रूण (Embryo)", "बीज आवरण"],
      answer: 0,
      exp: "Explanation (En): Fusion of a male gamete with two polar nuclei forms a primary endosperm nucleus (PEN), developing into nutritive endosperm.\nस्पष्टीकरण (Hi): नर युग्मक और दो ध्रुवीय केंद्रकों के मिलने से त्रिप्रावस्था वाला भ्रूणपोष (Endosperm) बनता है जो बीज को पोषण देता है।"
    },
    {
      qEn: "Which plant hormone is responsible for apical dominance and cell elongation?",
      qHi: "कौन सा पादप हार्मोन शीर्ष प्रभाविता (apical dominance) और कोशिका लम्बाई के लिए जिम्मेदार है?",
      optionsEn: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
      optionsHi: ["ऑक्सिन (Auxin)", "जिबरेलिन", "साइटोकिनिन", "एब्सिसिक एसिड"],
      answer: 0,
      exp: "Explanation (En): Auxins promote apical dominance, cell elongation, and root initiation.\nस्पष्टीकरण (Hi): ऑक्सिन मुख्य पादप हार्मोन है जो तने के अग्रभाग की वृद्धि और शीर्ष प्रभाविता को नियंत्रित करता है।"
    },
    {
      qEn: "Which plant hormone promotes stem elongation and seed germination?",
      qHi: "तने की लंबाई और बीज अंकुरण को बढ़ावा देने वाला पादप हार्मोन कौन सा है?",
      optionsEn: ["Gibberellin", "Ethylene", "Abscisic acid", "Cytokinin"],
      optionsHi: ["जिबरेलिन (Gibberellin)", "एथिलीन", "एब्सिसिक एसिड", "साइटोकिनिन"],
      answer: 0,
      exp: "Explanation (En): Gibberellins stimulate stem elongation, bolting, and seed germination by breaking dormancy.\nस्पष्टीकरण (Hi): जिबरेलिन तनों के दीर्घीकरण और बीजों की प्रसुप्ति (dormancy) तोड़ने में मदद करता है।"
    },
    {
      qEn: "Which plant hormone is a gas and promotes fruit ripening?",
      qHi: "कौन सा पादप हार्मोन गैसीय अवस्था में होता है और फलों को पकाने में सहायक है?",
      optionsEn: ["Ethylene", "Auxin", "Abscisic acid", "Cytokinin"],
      optionsHi: ["एथिलीन (Ethylene)", "ऑक्सिन", "एब्सिसिक एसिड", "साइटोकिनिन"],
      answer: 0,
      exp: "Explanation (En): Ethylene is a gaseous plant hormone that promotes fruit ripening and senescence.\nस्पष्टीकरण (Hi): एथिलीन एकमात्र गैसीय पादप हार्मोन है जो प्राकृतिक रूप से फलों को पकाता है।"
    },
    {
      qEn: "Which plant hormone is known as the 'stress hormone' because it promotes stomatal closure during water stress?",
      qHi: "किस पादप हार्मोन को 'तनाव हार्मोन' (Stress hormone) कहा जाता है क्योंकि यह सूखे के समय रंध्रों (stomata) को बंद करने में मदद करता है?",
      optionsEn: ["Abscisic acid (ABA)", "Auxin", "Gibberellin", "Ethylene"],
      optionsHi: ["एब्सिसिक एसिड या ABA", "ऑक्सिन", "जिबरेलिन", "एथिलीन"],
      answer: 0,
      exp: "Explanation (En): Abscisic acid helps plants cope with water stress by inducing stomatal closure and promoting seed dormancy.\nस्पष्टीकरण (Hi): एब्सिसिक एसिड (ABA) पौधे में सूखे या तनाव की स्थिति में पत्तियों के रंध्रों को बंद कर पानी की हानि रोकता है।"
    },
    {
      qEn: "What is phototropism?",
      qHi: "प्रदीप्तिका या प्रकाशानुवर्तन (Phototropism) किसे कहते हैं?",
      optionsEn: ["Growth of a plant in response to a light source", "Growth in response to gravity", "Growth in response to water", "Growth in response to touch"],
      optionsHi: ["प्रकाश स्रोत की दिशा में पौधे की वृद्धि", "गुरुत्वाकर्षण के प्रति वृद्धि", "पानी के प्रति प्रतिक्रिया", "छूने के प्रति प्रतिक्रिया"],
      answer: 0,
      exp: "Explanation (En): Phototropism is directional growth in which plants bend toward light (due to unequal auxin distribution).\nस्पष्टीकरण (Hi): प्रकाश की दिशा में पौधों के अंगों (जैसे तने) का मुड़ना प्रकाशानुवर्तन कहलाता है।"
    },
    {
      qEn: "What is geotropism (gravitropism)?",
      qHi: "गुरुत्वाकर्षणानुवर्तन (Geotropism) क्या है?",
      optionsEn: ["Growth of plant parts in response to gravity (roots grow down, shoots grow up)", "Growth towards light", "Growth towards water", "Leaf movement in dark"],
      optionsHi: ["गुरुत्वाकर्षण के प्रभाव में पौधे की वृद्धि (जड़ें नीचे, तना ऊपर)", "प्रकाश की ओर बढ़ना", "पानी की ओर वृद्धि", "अंधेरे में पत्ती की गति"],
      answer: 0,
      exp: "Explanation (En): Geotropism is plant growth directionally coordinated with gravity; roots show positive geotropism and shoots negative geotropism.\nस्पष्टीकरण (Hi): गुरुत्वाकर्षण बल के प्रति पौधों की प्रतिक्रिया को जियोट्रॉपिज्म कहते हैं (जड़ें नीचे और तना ऊपर बढ़ता है)।"
    },
    {
      qEn: "What is transpiration in plants?",
      qHi: "पौधों में वाष्पोसर्जन (Transpiration) क्या होता है?",
      optionsEn: ["Loss of water in the form of water vapor from aerial parts of the plant, mainly through stomata", "Absorption of water by roots", "Photosynthesis in leaves", "Respiration in roots"],
      optionsHi: ["पौधों के वायुवीय भागों (मुख्य रूप से रंध्रों) से जल का वाष्प के रूप में उड़ना", "जड़ों द्वारा पानी का अवशोषण", "पत्तियों में प्रकाश संश्लेषण", "जड़ों में श्वसन"],
      answer: 0,
      exp: "Explanation (En): Transpiration is the evaporative loss of water from plant leaves through stomata, creating a suction pull for water ascent.\nस्पष्टीकरण (Hi): पत्तियों के रंध्रों (stomata) से पानी का भाप बनकर उड़ना वाष्पोसर्जन कहलाता है जो पानी को ऊपर खींचने में मदद करता है।"
    },
    {
      qEn: "What is guttation in plants?",
      qHi: "पौधों में बिंदुस्राव या guttation क्या होता है?",
      optionsEn: ["Loss of water in the form of liquid droplets from the margins of leaves through hydathodes", "Evaporation of water vapor", "Secretion of nectar", "Root exudation"],
      optionsHi: ["पत्तियों के किनारों पर स्थित जलरंध्रों (hydathodes) से तरल बूंदों के रूप में पानी का बाहर निकलना", "वाष्प का उड़ना", "मकरंद का स्राव", "जड़ से रिसाव"],
      answer: 0,
      exp: "Explanation (En): Guttation occurs under high root pressure when water droplets are exuded from leaf edges through specialized pores called hydathodes.\nस्पष्टीकरण (Hi): अधिक मूल दाब के कारण रात या सुबह के समय पत्तियों के किनारों से पानी बूंदों के रूप में बाहर निकलता है जिसे गुटेशन कहते हैं।"
    }
  ],
    "Human Digestive System": [
    {
      qEn: "What is the approximate total length of the human alimentary canal?",
      qHi: "मानव आहार नाल (Alimentary canal) की कुल लंबाई लगभग कितनी होती है?",
      optionsEn: ["9 meters (about 30 feet)", "5 meters", "15 meters", "2 meters"],
      optionsHi: ["9 मीटर (लगभग 30 फीट)", "5 मीटर", "15 मीटर", "2 मीटर"],
      answer: 0,
      exp: "Explanation (En): The human alimentary canal from mouth to anus is a continuous muscular tube measuring about 9 meters long.\nस्पष्टीकरण (Hi): मुंह से लेकर गुदा तक फैली मानव आहार नाल की कुल लंबाई लगभग 9 मीटर होती है।"
    },
    {
      qEn: "Which enzyme is present in human saliva that digests complex carbohydrates (starch)?",
      qHi: "मानव लार में कौन सा एंजाइम होता है जो जटिल कार्बोहाइड्रेट (स्टार्च) का पाचन करता है?",
      optionsEn: ["Salivary amylase (Ptyalin)", "Pepsin", "Trypsin", "Lipase"],
      optionsHi: ["लार एमाइलेज या टायलिन (Ptyalin)", "पेप्सिन", "ट्रिप्सिन", "लाइपेज"],
      answer: 0,
      exp: "Explanation (En): Salivary amylase (ptyalin) begins the chemical digestion of starch into maltose in the mouth.\nस्पष्टीकरण (Hi): लार में मौजूद एमाइलेज (टायलिन) मुंह में ही स्टार्च को माल्टोज शर्करा में तोड़ना शुरू कर देता है।"
    },
    {
      qEn: "What is the hardest substance in the human body?",
      qHi: "मानव शरीर का सबसे कठोर पदार्थ कौन सा है?",
      optionsEn: ["Tooth enamel", "Bone", "Dentine", "Cementum"],
      optionsHi: ["दाँत का एनामेल (Tooth enamel)", "हड्डी", "डेंटाइन", "सीमेंटम"],
      answer: 0,
      exp: "Explanation (En): Dental enamel coating the teeth is the hardest and most mineralized substance in the human body.\nस्पष्टीकरण (Hi): दांतों की बाहरी परत पर पाया जाने वाला एनामेल (Enamel) मानव शरीर का सबसे कठोर ऊतक और पदार्थ है।"
    },
    {
      qEn: "Which cells in the gastric glands secrete hydrochloric acid (HCl)?",
      qHi: "जठर ग्रंथियों की कौन सी कोशिकाएं हाइड्रोक्लोरिक अम्ल (HCl) स्रावित करती हैं?",
      optionsEn: ["Oxyntic cells (Parietal cells)", "Chief cells (Zymogenic cells)", "Mucus neck cells", "Goblet cells"],
      optionsHi: ["ऑक्सीयंटिक या पैराइटल कोशिकाएं (Oxyntic cells)", "मुख्य कोशिकाएं (Chief cells)", "म्यूकस कोशिकाएं", "गोबलेट कोशिकाएं"],
      answer: 0,
      exp: "Explanation (En): Parietal or oxyntic cells in the stomach lining secrete hydrochloric acid, which creates an acidic environment for digestion.\nस्पष्टीकरण (Hi): पेट की भित्ति में मौजूद पैराइटल (ऑक्सीयंटिक) कोशिकाएं HCl का स्राव करती हैं जो भोजन के माध्यम को अम्लीय बनाता है।"
    },
    {
      qEn: "What is the primary function of mucus secreted by the stomach wall?",
      qHi: "पेट की दीवार द्वारा स्रावित बलगम (mucus) का मुख्य कार्य क्या है?",
      optionsEn: ["To protect the stomach inner lining from corrosive action of hydrochloric acid", "To digest proteins", "To absorb water", "To kill bacteria"],
      optionsHi: ["हाइड्रोक्लोरिक अम्ल के संक्षारक प्रभाव से पेट की आंतरिक दीवार की रक्षा करना", "प्रोटीन पचाना", "पानी अवशोषित करना", "बैक्टीरिया मारना"],
      answer: 0,
      exp: "Explanation (En): Mucus forms a thick protective barrier coating the gastric mucosa to prevent damage from strong HCl and digestive enzymes.\nस्पष्टीकरण (Hi): बलगम की परत पेट की दीवारों को मजबूत अम्ल (HCl) और पाचक रंजकों के नुकसान से बचाती है।"
    },
    {
      qEn: "Which enzyme is secreted in an inactive form (pepsinogen) in the stomach to digest proteins?",
      qHi: "प्रोटीन के पाचन के लिए पेट में कौन सा एंजाइम निष्क्रिय रूप (पेप्सिनोजेन) में स्रावित होता है?",
      optionsEn: ["Pepsin", "Trypsin", "Rennin", "Amylase"],
      optionsHi: ["पेप्सिन (Pepsin)", "ट्रिप्सिन", "रेनिन", "एमाइलेज"],
      answer: 0,
      exp: "Explanation (En): Chief cells secrete pepsinogen, which is activated into pepsin by HCl to break down proteins into peptides.\nस्पष्टीकरण (Hi): मुख्य कोशिकाएं पेप्सिनोजेन स्रावित करती हैं जो HCl की मदद से सक्रिय 'पेप्सिन' बनकर प्रोटीन को पचाता है।"
    },
    {
      qEn: "What is the longest part of the human alimentary canal?",
      qHi: "मानव आहार नाल का सबसे लंबा भाग कौन सा है?",
      optionsEn: ["Small intestine", "Large intestine", "Esophagus", "Stomach"],
      optionsHi: ["छोटी आंत (Small intestine)", "बड़ी आंत", "ग्रासनली (Esophagus)", "आमाशय"],
      answer: 0,
      exp: "Explanation (En): The small intestine is about 6 meters long, making it the longest section of the digestive tract.\nस्पष्टीकरण (Hi): छोटी आंत की लंबाई लगभग 6 मीटर होती है, जो आहार नाल का सबसे लंबा हिस्सा है।"
    },
    {
      qEn: "What are the finger-like projections in the inner lining of the small intestine called that increase surface area for absorption?",
      qHi: "छोटी आंत की भीतरी परत में मौजूद उंगली जैसी संरचनाओं को क्या कहा जाता है जो अवशोषण के लिए सतह क्षेत्र बढ़ाती हैं?",
      optionsEn: ["Villi (Microvilli)", "Rugae", "Alveoli", "Nephrons"],
      optionsHi: ["विली या रساंकुर (Villi)", "रुगाए", "एल्वोलाई", "नेफ्रॉन"],
      answer: 0,
      exp: "Explanation (En): Villi are tiny finger-like projections in the small intestine that massively increase surface area for nutrient absorption.\nस्पष्टीकरण (Hi): विली (Villi) छोटी आंत की आंतरिक सतह पर उंगली जैसी संरचनाएं होती हैं जो पचे हुए भोजन को सोखने का क्षेत्रफल बढ़ाती हैं।"
    },
    {
      qEn: "Which gland is the largest internal organ and gland in the human body?",
      qHi: "मानव शरीर की सबसे बड़ी आंतरिक ग्रंथि और अंग कौन सा है?",
      optionsEn: ["Liver", "Pancreas", "Thyroid", "Salivary gland"],
      optionsHi: ["यकृत या लिवर (Liver)", "अग्नाशय", "थायरॉयड", "लार ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The liver is the body's largest internal organ and gland, weighing about 1.2 to 1.5 kg in adults.\nस्पष्टीकरण (Hi): यकृत (Liver) मानव शरीर की सबसे बड़ी ग्रंथि है।"
    },
    {
      qEn: "Where is bile juice produced, and where is it stored?",
      qHi: "पित्त रस (Bile juice) का निर्माण कहाँ होता है और यह संचित कहाँ होता है?",
      optionsEn: ["Produced in Liver, stored in Gallbladder", "Produced in Pancreas, stored in Liver", "Produced in Stomach, stored in Small intestine", "Produced in Gallbladder, stored in Kidneys"],
      optionsHi: ["यकृत में निर्मित, पित्ताशय (Gallbladder) में संचित", "अग्नाशय में निर्मित, यकृत में संचित", "पेट में निर्मित, छोटी आंत में संचित", "पित्ताशय में निर्मित, गुर्दे में संचित"],
      answer: 0,
      exp: "Explanation (En): Bile is synthesized continuously by liver hepatocytes and stored temporarily in the muscular gallbladder.\nस्पष्टीकरण (Hi): पित्त रस यकृत द्वारा बनाया जाता है और नाशपाती के आकार के पित्ताशय (Gallbladder) में जमा होता है।"
    },
    {
      qEn: "What is the primary function of bile salts in digestion?",
      qHi: "पाचन में पित्त लवणों (bile salts) का मुख्य कार्य क्या है?",
      optionsEn: ["Emulsification of fats (breaking large fat globules into tiny droplets)", "Digesting proteins directly", "Absorbing water", "Killing stomach bacteria"],
      optionsHi: ["वसा का इमल्सीकरण (बड़ी वसा की बूंदों को छोटे कणों में तोड़ना)", "सीधे प्रोटीन पचाना", "पानी सोखना", "पेट के बैक्टीरिया मारना"],
      answer: 0,
      exp: "Explanation (En): Bile salts break down large fat globules into smaller micelles (emulsification), increasing surface area for lipase action.\nस्पष्टीकरण (Hi): पित्त लवण वसा की बड़ी बूंदों को छोटे-छोटे कणों में तोड़ते हैं जिसे इमल्सीकरण कहते हैं।"
    },
    {
      qEn: "Which organ acts as both an exocrine and an endocrine gland (mixed gland)?",
      qHi: "कौन सी ग्रंथि बहिःस्रावी और अंतःस्रावी दोनों रूपों में कार्य करती है (मिश्रित ग्रंथि)?",
      optionsEn: ["Pancreas", "Liver", "Salivary gland", "Pituitary gland"],
      optionsHi: ["अग्नाशय (Pancreas)", "यकृत", "लार ग्रंथि", "पीयूष ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The pancreas acts as an exocrine gland releasing digestive enzymes and an endocrine gland producing insulin and glucagon.\nस्पष्टीकरण (Hi): अग्नाशय (Pancreas) एक मिश्रित ग्रंथि है जो पाचक एंजाइम (बहिःस्रावी) और हार्मोन (अंतःस्रावी) दोनों बनाती है।"
    },
    {
      qEn: "Which enzyme present in pancreatic juice breaks down proteins into peptides?",
      qHi: "अग्नाशयी रस में मौजूद कौन सा एंजाइम प्रोटीन को पेप्टाइड में तोड़ता है?",
      optionsEn: ["Trypsin and Chymotrypsin", "Amylase", "Lipase", "Ptyalin"],
      optionsHi: ["ट्रिप्सिन और काएमोट्रिप्सिन (Trypsin and Chymotrypsin)", "एमाइलेज", "लाइपेज", "टायलिन"],
      answer: 0,
      exp: "Explanation (En): Trypsin and chymotrypsin secreted by the pancreas digest proteins and polypeptides in the small intestine.\nस्पष्टीकरण (Hi): अग्नाशय द्वारा स्रावित ट्रिप्सिन और काएमोट्रिप्सिन प्रोटीन के पाचन में मुख्य भूमिका निभाते हैं।"
    },
    {
      qEn: "What is the role of lipase enzyme in digestion?",
      qHi: "पाचन में लाइपेज (Lipase) एंजाइम का क्या कार्य है?",
      optionsEn: ["Breakdown of fats into fatty acids and glycerol", "Digestion of starch into sugar", "Digestion of proteins into amino acids", "Absorption of vitamins"],
      optionsHi: ["वसा को वसीय अम्ल और ग्लिसरोल में तोड़ना", "स्टार्च को शर्करा में पचाना", "प्रोटीन को अमीनो एसिड में पचाना", "विटामिन अवशोषित करना"],
      answer: 0,
      exp: "Explanation (En): Lipase breaks down emulsified fats into absorbable fatty acids and glycerol units.\nस्पष्टीकरण (Hi): लाइपेज एंजाइम इमल्सीफाइड वसा को वसीय अम्ल और ग्लिसरोल में अपघटित करता है।"
    },
    {
      qEn: "Where does the complete digestion of carbohydrates, proteins, and fats take place?",
      qHi: "कार्बोहाइड्रेट, प्रोटीन और वसा का पूर्ण पाचन कहाँ होता है?",
      optionsEn: ["Small intestine", "Stomach", "Large intestine", "Mouth"],
      optionsHi: ["छोटी आंत (Small intestine)", "आमाशय", "बड़ी आंत", "मुंह"],
      answer: 0,
      exp: "Explanation (En): The small intestine is the main site where enzymatic digestion completes for all major food nutrients.\nस्पष्टीकरण (Hi): सभी मुख्य पोषक तत्वों (कार्बोहाइड्रेट, प्रोटीन, वसा) का पूर्ण पाचन छोटी आंत में संपन्न होता है।"
    },
    {
      qEn: "What is the primary function of the large intestine in humans?",
      qHi: "मानव में बड़ी आंत का मुख्य कार्य क्या है?",
      optionsEn: ["Absorption of water and mineral salts from undigested food", "Complete digestion of proteins", "Production of bile", "Secretion of pepsin"],
      optionsHi: ["अपच्य भोजन से पानी और खनिज लवणों का अवशोषण", "प्रोटीन का पूर्ण पाचन", "पित्त का उत्पादन", "पेप्सिन का स्राव"],
      answer: 0,
      exp: "Explanation (En): The large intestine absorbs remaining water and electrolytes from indigestible food residue before excretion.\nस्पष्टीकरण (Hi): बड़ी आंत मुख्य रूप से अपशिष्ट भोजन से पानी और खनिजों को सोखने का कार्य करती है।"
    },
    {
      qEn: "Which sphincter valve controls the passage of food from the stomach into the small intestine (duodenum)?",
      qHi: "कौन सी वाल्व या अवरोधनी (sphincter) भोजन को आमाशय से छोटी आंत (ग्रहणी) में जाने को नियंत्रित करती है?",
      optionsEn: ["Pyloric sphincter", "Cardiac sphincter", "Ileocecal valve", "Anal sphincter"],
      optionsHi: ["पाइलोरिक वाल्व (Pyloric sphincter)", "कार्डियक वाल्व", "इलियोसीकल वाल्व", "गुदा अवरोधनी"],
      answer: 0,
      exp: "Explanation (En): The pyloric sphincter guards the exit from stomach to duodenum, regulating chyme release.\nस्पष्टीकरण (Hi): पाइलोरिक वाल्व पेट के निचले हिस्से पर होता है जो भोजन को धीरे-धीरे छोटी आंत में जाने देता है।"
    },
    {
      qEn: "What is peristalsis?",
      qHi: "परिस्टालसिस या क्रमानुकुंचन (Peristalsis) क्या है?",
      optionsEn: ["Wavelike rhythmic contractions of the gut wall that push food forward", "Digestion of food in stomach", "Absorption of nutrients in villi", "Secretion of saliva"],
      optionsHi: ["आहार नाल की दीवारों का तरंगीय संकुचन जो भोजन को आगे धकेलता है", "पेट में भोजन का पचना", "विली में पोषक तत्वों का अवशोषण", "लार का स्राव"],
      answer: 0,
      exp: "Explanation (En): Peristalsis is the automatic rhythmic wave of muscular contraction and relaxation that moves food down the digestive tract.\nस्पष्टीकरण (Hi): आहार नाल की पेशियों के क्रमिक संकुचन और शिथिलन को परिस्टालसिस कहते हैं जिससे भोजन आगे बढ़ता है।"
    },
    {
      qEn: "What is the dental formula of an adult human?",
      qHi: "एक वयस्क मनुष्य का दंत सूत्र (Dental formula) क्या होता है?",
      optionsEn: ["2,1,2,3 / 2,1,2,3", "2,1,2,2 / 2,1,2,2", "2,0,3,3 / 2,0,3,3", "3,1,3,3 / 3,1,3,3"],
      optionsHi: ["2,1,2,3 / 2,1,2,3", "2,1,2,2 / 2,1,2,2", "2,0,3,3 / 2,0,3,3", "3,1,3,3 / 3,1,3,3"],
      answer: 0,
      exp: "Explanation (En): Adult human dental formula represents half of upper and lower jaws: Incisors (2), Canines (1), Premolars (2), Molars (3), total 32 teeth.\nस्पष्टीकरण (Hi): वयस्क मनुष्य के आधे जबड़े का सूत्र कृंतक (2), रदनक (1), अग्रचवर्णक (2), चवर्णक (3) यानी कुल 32 दांत होता है।"
    },
    {
      qEn: "What is the name of the flap-like elastic cartilage structure that prevents food from entering the windpipe during swallowing?",
      qHi: "भोजन निगलते समय सांस की नली में खाना जाने से रोकने वाली ढक्कन जैसी लचीली संरचना का नाम क्या है?",
      optionsEn: ["Epiglottis", "Glottis", "Uvula", "Pharynx"],
      optionsHi: ["एपिग्लॉटिस या epiglottis", "ग्लोटिस", "युवुला", "ग्रसनी"],
      answer: 0,
      exp: "Explanation (En): The epiglottis folds down over the windpipe (trachea) during swallowing to prevent food aspiration into lungs.\nस्पष्टीकरण (Hi): एपिग्लॉटिस एक ढक्कन जैसी संरचना है जो खाना निकलते समय श्वास नली को ढक लेती है।"
    },
    {
      qEn: "What is jaundice primarily caused by?",
      qHi: "पीलिया (Jaundice) मुख्य रूप से किसके संचय या समस्या के कारण होता है?",
      optionsEn: ["Excess accumulation of bilirubin pigment in blood due to liver dysfunction", "Lack of vitamin C", "Excess stomach acid", "Bacterial infection in small intestine"],
      optionsHi: ["यकृत की खराबी के कारण रक्त में बिलीरुबिन वर्णक का अत्यधिक संचय", "विटामिन सी की कमी", "पेट में अधिक अम्ल", "छोटी आंत में बैक्टीरिया संक्रमण"],
      answer: 0,
      exp: "Explanation (En): Jaundice is characterized by yellowing of skin and eyes due to high levels of bilirubin, a breakdown product of hemoglobin, when the liver fails to process it.\nस्पष्टीकरण (Hi): लिवर की कार्यप्रणाली बिगड़ने पर रक्त में बिलीरुबिन वर्णक बढ़ जाता है जिससे त्वचा और आंखें पीली पड़ जाती हैं।"
    },
    {
      qEn: "What is the primary bacterial cause of peptic ulcers in the stomach?",
      qHi: "पेट में पेप्टिक अल्सर (घाव) का मुख्य जीवाणु जनित कारण क्या माना जाता है?",
      optionsEn: ["Helicobacter pylori (H. pylori)", "Escherichia coli", "Salmonella typhi", "Vibrio cholerae"],
      optionsHi: ["हेलिकोबैक्टर पाइलोरी (H. pylori)", "एस्चेरिचिया कोलाई", "सालमोनेला टाइफी", "विब्रियो कोलेरा"],
      answer: 0,
      exp: "Explanation (En): *Helicobacter pylori* infection is the leading cause of stomach and duodenal ulcers.\nस्पष्टीकरण (Hi): *हेलिकोबैक्टर पाइलोरी* नामक बैक्टीरिया पेट और ग्रहणी में अल्सर (घाव) का प्रमुख कारण है।"
    },
    {
      qEn: "What is the main function of salivary amylase (ptyalin)?",
      qHi: "लार एमाइलेज (टायलिन) का मुख्य कार्य क्या है?",
      optionsEn: ["Hydrolysis of starch into maltose and dextrins", "Digestion of fats", "Digestion of proteins", "Absorption of minerals"],
      optionsHi: ["स्टार्च का माल्टोज और डेक्सट्रिन में जलअपघटन", "वसा का पाचन", "प्रोटीन का पाचन", "खनिजों का अवशोषण"],
      answer: 0,
      exp: "Explanation (En): Salivary amylase breaks complex polysaccharides (starch) into simpler sugars like maltose in the oral cavity.\nस्पष्टीकरण (Hi): लार में मौजूद टायलिन मुंह में स्टार्च को शर्करा में तोड़ने का कार्य करता है।"
    },
    {
      qEn: "Which vitamin is synthesized by symbiotic bacteria residing in the human large intestine?",
      qHi: "मानव बड़ी आंत में रहने वाले सहजीवी बैक्टीरिया द्वारा कौन सा विटामिन संश्लेषित किया जाता है?",
      optionsEn: ["Vitamin K and Vitamin B complex", "Vitamin C", "Vitamin A", "Vitamin D"],
      optionsHi: ["विटामिन K और विटामिन B कॉम्प्लेक्स", "विटामिन C", "विटामिन A", "विटामिन D"],
      answer: 0,
      exp: "Explanation (En): Gut flora (commensal bacteria) in the colon synthesize vitamin K and certain B vitamins like biotin and B12.\nस्पष्टीकरण (Hi): बड़ी आंत के सहजीवी बैक्टीरिया विटामिन K और कुछ B समूह के विटामिन बनाते हैं।"
    },
    {
      qEn: "What is chyme?",
      qHi: "चाइम (Chyme) किसे कहते हैं?",
      optionsEn: ["The semi-fluid mass of partially digested food mixed with gastric juices in the stomach", "Pure saliva", "Undigested solid waste", "Bile juice mixture"],
      optionsHi: ["पेट में जठर रस के साथ मिले हुए अर्ध-पचे भोजन का अर्ध-तरल रूप", "शुद्ध लार", "अपच्य ठोस अपशिष्ट", "पित्त रस का मिश्रण"],
      answer: 0,
      exp: "Explanation (En): Chyme is the acidic, semi-fluid mixture of food and digestive secretions formed in the stomach before entering the small intestine.\nस्पष्टीकरण (Hi): पेट में अम्लीय रसों के साथ मिलकर पचने वाला अर्ध-तरल भोजन 'चाइम' कहलाता है।"
    },
    {
      qEn: "What is the alkaline fluid secreted by the pancreas that neutralizes stomach acid called?",
      qHi: "अग्नाशय द्वारा स्रावित वह क्षारीय द्रव जो पेट के अम्ल को उदासीन करता है, क्या कहलाता है?",
      optionsEn: ["Pancreatic juice containing bicarbonate ions", "Bile juice", "Gastric juice", "Saliva"],
      optionsHi: ["बाइकार्बोनेट आयन युक्त अग्नाशयी रस", "पित्त रस", "जठर रस", "लार"],
      answer: 0,
      exp: "Explanation (En): The pancreas secretes sodium bicarbonate in pancreatic juice to neutralize acidic chyme entering from the stomach.\nस्पष्टीकरण (Hi): अग्नाशय रस में मौजूद बाइकार्बोनेट पेट के अम्लीय भोजन को उदासीन करता है ताकि आंत के एंजाइम काम कर सकें।"
    },
    {
      qEn: "Which part of the small intestine is the first segment where most chemical digestion and neutralization occur?",
      qHi: "छोटी आंत का पहला भाग कौन सा है जहाँ अधिकांश रासायनिक पाचन और उदासीनीकरण होता है?",
      optionsEn: ["Duodenum", "Jejunum", "Ileum", "Cecum"],
      optionsHi: ["ग्रहणी या डियोडेनम (Duodenum)", "जेजूनम", "इലിയम", "सीकम"],
      answer: 0,
      exp: "Explanation (En): The duodenum is the C-shaped first section of the small intestine receiving bile and pancreatic juices.\nस्पष्टीकरण (Hi): डियोडेनम (ग्रहणी) छोटी आंत का पहला भाग है जहाँ यकृत और अग्नाशय के स्राव आकर मिलते हैं।"
    },
    {
      qEn: "What is the function of the vestigial vermiform appendix in humans?",
      qHi: "मानव शरीर में अवशेषी कृमिरूप परिशेषिका (Vermiform appendix) का क्या कार्य माना जाता है?",
      optionsEn: ["It has no significant digestive function in humans (vestigial organ, though may house beneficial gut bacteria)", "It produces bile", "It digests proteins", "It absorbs water"],
      optionsHi: ["मानव में इसका कोई प्रमुख पाचन कार्य नहीं है (अवशेषी अंग)", "यह पित्त बनाता है", "यह प्रोटीन पचाता है", "यह पानी सोखता है"],
      answer: 0,
      exp: "Explanation (En): The appendix is a vestigial organ attached to the cecum, considered a remnant from herbivorous ancestors.\nस्पष्टीकरण (Hi): अपेंडिक्स मानव शरीर में एक अवशेषी अंग है जिसका पाचन में कोई सक्रिय योगदान नहीं बचा है।"
    },
    {
      qEn: "What causes gallstones?",
      qHi: "पित्त की पथरी (Gallstones) मुख्य रूप से किसके जमने से बनती है?",
      optionsEn: ["Hardened deposits of cholesterol or bilirubin in the gallbladder", "Calcium carbonate crystals", "Kidney salt deposition", "Excess stomach acid"],
      optionsHi: ["पित्ताशय में कोलेस्ट्रॉल या बिलीरुबिन के कठोर जमाव", "कैल्शियम कार्बोनेट क्रिस्टल", "गुर्दे के लवण का जमाव", "पेट का अधिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Gallstones form when substances like cholesterol crystallize in the gallbladder due to imbalance in bile composition.\nस्पष्टीकरण (Hi): पित्ताशय में कोलेस्ट्रॉल या पित्त घटकों के क्रिस्टलीकरण से पथरी (Gallstones) बन जाती है।"
    },
    {
      qEn: "Which nutrient absorption primarily occurs in the stomach?",
      qHi: "पेट (आमाशय) में मुख्य रूप से किस पोषक तत्व या पदार्थ का अवशोषण होता है?",
      optionsEn: ["Water, alcohol, and certain drugs like aspirin", "Proteins and amino acids", "Fats and glycerol", "Complex carbohydrates"],
      optionsHi: ["पानी, अल्कोहल और कुछ दवाएं (जैसे एस्पिरिन)", "प्रोटीन और अमीनो एसिड", "वसा और ग्लिसरोल", "जटिल कार्बोहाइड्रेट"],
      answer: 0,
      exp: "Explanation (En): The stomach has limited absorption capacity, primarily taking in water, mineral ions, alcohol, and aspirin medications.\nस्पष्टीकरण (Hi): आमाशय में पानी, अल्कोहल और कुछ दवाओं (जैसे एस्पिरिन) का ही आंशिक अवशोषण होता है।"
    }
  ],
    "Circulatory System": [
    {
      qEn: "Who discovered the circulation of blood in the human body?",
      qHi: "मानव शरीर में रक्त परिसंचरण (Blood circulation) की खोज किसने की थी?",
      optionsEn: ["William Harvey", "Karl Landsteiner", "Robert Hooke", "Stephen Hales"],
      optionsHi: ["विलियम हार्वे (William Harvey)", "कार्ल लैंडस्टीनर", "रॉबर्ट हुक", "स्टीफन हेल्स"],
      answer: 0,
      exp: "Explanation (En): William Harvey published his groundbreaking discovery of systemic blood circulation and the heart's role in 1628.\nस्पष्टीकरण (Hi): विलियम हार्वे ने 1628 में रक्त परिसंचरण तंत्र और हृदय की पंपिंग की खोज की थी।"
    },
    {
      qEn: "What type of circulatory system do humans have?",
      qHi: "मनुष्यों में किस प्रकार का परिसंचरण तंत्र पाया जाता है?",
      optionsEn: ["Closed double circulatory system", "Open single circulatory system", "Open double circulatory system", "Closed single circulatory system"],
      optionsHi: ["बंद दोहरा परिसंचरण तंत्र (Closed double circulatory system)", "खुला एकल परिसंचरण तंत्र", "खुला दोहरा परिसंचरण तंत्र", "बंद एकल परिसंचरण तंत्र"],
      answer: 0,
      exp: "Explanation (En): Humans have a closed circulatory system with double circulation, meaning blood passes through the heart twice during each complete circuit (pulmonary and systemic).\nस्पष्टीकरण (Hi): मनुष्यों में बंद दोहरा परिसंचरण तंत्र होता है जिसमें रक्त एक चक्र पूरा करने के लिए हृदय से दो बार गुजरता है।"
    },
    {
      qEn: "How many chambers does the human heart have?",
      qHi: "मानव हृदय में कितने कक्ष (chambers) होते हैं?",
      optionsEn: ["Four chambers (2 atria, 2 ventricles)", "Three chambers", "Two chambers", "Five chambers"],
      optionsHi: ["चार कक्ष (2 अलिंद, 2 निलय)", "तीन कक्ष", "दो कक्ष", "पाँच कक्ष"],
      answer: 0,
      exp: "Explanation (En): The human heart consists of four distinct chambers: two upper atria and two lower ventricles.\nस्पष्टीकरण (Hi): मानव हृदय चार कक्षों में बंटा होता है - दो ऊपरी अलिंद (Atria) और दो निचले निलय (Ventricles)।"
    },
    {
      qEn: "Which valve is located between the right atrium and the right ventricle?",
      qHi: "दाएं अलिंद और दाएं निलय के बीच कौन सी वाल्व स्थित होती है?",
      optionsEn: ["Tricuspid valve", "Bicuspid (Mitral) valve", "Aortic valve", "Pulmonary valve"],
      optionsHi: ["ट्रिकुस्पिड या त्रिवलनी वाल्व (Tricuspid valve)", "बिकुस्पिड (मिट्रल) वाल्व", "महाधमनी वाल्व", "पल्मोनरी वाल्व"],
      answer: 0,
      exp: "Explanation (En): The tricuspid valve guards the opening between the right atrium and right ventricle to prevent backflow.\nस्पष्टीकरण (Hi): दाएं अलिंद और दाएं निलय के बीच त्रिवलनी (Tricuspid) वाल्व होती है।"
    },
    {
      qEn: "Which valve is located between the left atrium and the left ventricle?",
      qHi: "बाएं अलिंद और बाएं निलय के बीच कौन सी वाल्व होती है?",
      optionsEn: ["Bicuspid valve (Mitral valve)", "Tricuspid valve", "Semilunar valve", "Eustachian valve"],
      optionsHi: ["द्विवलनी या मिट्रल वाल्व (Bicuspid / Mitral valve)", "त्रिवलनी वाल्व", "अर्धचंद्राकार वाल्व", "यूस्टेशियन वाल्व"],
      answer: 0,
      exp: "Explanation (En): The bicuspid valve (also called the mitral valve) regulates blood flow from the left atrium to the left ventricle.\nस्पष्टीकरण (Hi): बाएं अलिंद और बाएं निलय के बीच द्विवलनी (Bicuspid या Mitral) वाल्व होती है।"
    },
    {
      qEn: "What is known as the 'pacemaker' of the human heart?",
      qHi: "मानव हृदय का 'पेसमेकर' (Pacemaker) किसे कहा जाता है?",
      optionsEn: ["Sinoatrial node (SA node)", "Atrioventricular node (AV node)", "Purkinje fibers", "Bundle of His"],
      optionsHi: ["साइनोएट्रियल नोड (SA node)", "एट्रियोवेंट्रिकुलर नोड (AV node)", "पुर्किंजे फाइबर", "बंडल ऑफ हिस"],
      answer: 0,
      exp: "Explanation (En): The sinoatrial (SA) node generates natural electrical impulses that set the rhythm of heart contraction.\nस्पष्टीकरण (Hi): साइनोएट्रियल नोड (SA node) स्वतः विद्युत आवेग उत्पन्न करता है जो हृदय की धड़कन की गति तय करता है।"
    },
    {
      qEn: "What creates the 'lub-dub' sound of the heart?",
      qHi: "हृदय की 'लब-डब' (Lub-dub) ध्वनि किसके कारण उत्पन्न होती है?",
      optionsEn: ["Closing of heart valves", "Contraction of heart muscle", "Blood hitting the ventricle walls", "Opening of arteries"],
      optionsHi: ["हृदय की वाल्वों के बंद होने से", "हृदय की मांसपेशियों के संकुचन से", "रक्त के निलय की दीवारों से टकराने से", "धमनियों के खुलने से"],
      answer: 0,
      exp: "Explanation (En): The first sound ('lub') is produced by the closure of AV valves, and the second sound ('dub') by the closure of semilunar valves.\nस्पष्टीकरण (Hi): पहली आवाज 'लब' एवी वाल्व के बंद होने और दूसरी आवाज 'डब' सेमिलुनर वाल्व के बंद होने से आती है।"
    },
    {
      qEn: "Which blood vessel carries deoxygenated blood from the heart to the lungs?",
      qHi: "कौन सी रक्त वाहिका हृदय से फेफड़ों तक अशुद्ध (ऑक्सीजन रहित) रक्त ले जाती है?",
      optionsEn: ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
      optionsHi: ["पल्मोनरी धमनी (Pulmonary artery)", "पल्मोनरी शिरा", "महाधमनी", "वेनाकावा"],
      answer: 0,
      exp: "Explanation (En): The pulmonary artery is unique as an artery carrying deoxygenated blood from the right ventricle to the lungs.\nस्पष्टीकरण (Hi): पल्मोनरी धमनी एकमात्र ऐसी धमनी है जो अशुद्ध रक्त को हृदय से फेफड़ों में ले जाती है।"
    },
    {
      qEn: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
      qHi: "कौन सी रक्त वाहिका फेफड़ों से हृदय तक शुद्ध (ऑक्सीजन युक्त) रक्त लाती है?",
      optionsEn: ["Pulmonary vein", "Pulmonary artery", "Superior vena cava", "Hepatic portal vein"],
      optionsHi: ["पल्मोनरी शिरा (Pulmonary vein)", "पल्मोनरी धमनी", "सुपीरियर वेनाकावा", "हेपेटिक पोर्टल वेन"],
      answer: 0,
      exp: "Explanation (En): The pulmonary vein is unique as a vein carrying oxygenated blood from the lungs to the left atrium.\nस्पष्टीकरण (Hi): पल्मोनरी शिरा फेफड़ों से शुद्ध रक्त को बाएं अलिंद में लाती है।"
    },
    {
      qEn: "What is the largest artery in the human body?",
      qHi: "मानव शरीर की सबसे बड़ी धमनी (artery) कौन सी है?",
      optionsEn: ["Aorta (महाधमनी)", "Pulmonary artery", "Carotid artery", "Coronary artery"],
      optionsHi: ["महाधमनी (Aorta)", "पल्मोनरी धमनी", "कैरोटिड धमनी", "कोरोनरी धमनी"],
      answer: 0,
      exp: "Explanation (En): The aorta receives oxygenated blood directly from the left ventricle and distributes it to the entire body.\nस्पष्टीकरण (Hi): महाधमनी (Aorta) बाएं निलय से ऑक्सीजन युक्त रक्त लेकर पूरे शरीर में वितरित करती है।"
    },
    {
      qEn: "Who discovered the ABO blood group system in humans?",
      qHi: "मानवों में ABO रक्त समूह प्रणाली की खोज किसने की थी?",
      optionsEn: ["Karl Landsteiner", "William Harvey", "Alexander Fleming", "Edward Jenner"],
      optionsHi: ["कार्ल लैंडस्टीनर (Karl Landsteiner)", "विलियम हार्वे", "अलेक्जेंडर फ्लेमिंग", "एडवर्ड जेनर"],
      answer: 0,
      exp: "Explanation (En): Karl Landsteiner discovered the ABO blood groups in 1900, for which he won a Nobel Prize.\nस्पष्टीकरण (Hi): कार्ल लैंडस्टीनर ने 1900 में ABO रक्त समूहों की खोज की थी।"
    },
    {
      qEn: "Which blood group is known as the universal donor?",
      qHi: "किस रक्त समूह को 'सर्वदाता' (Universal donor) कहा जाता है?",
      optionsEn: ["O negative (O-)", "AB positive (AB+)", "A positive", "B positive"],
      optionsHi: ["O नेगेटिव (O-)", "AB पॉजिटिव (AB+)", "A पॉजिटिव", "B पॉजिटिव"],
      answer: 0,
      exp: "Explanation (En): O negative red blood cells lack A, B, and Rh antigens, making them safe for almost any recipient.\nस्पष्टीकरण (Hi): O- रक्त समूह वाले व्यक्ति किसी को भी रक्त दे सकते हैं, इसलिए इन्हें सर्वदाता कहते हैं।"
    },
    {
      qEn: "Which blood group is known as the universal recipient?",
      qHi: "किस रक्त समूह को 'सर्वग्राही' (Universal recipient) कहा जाता है?",
      optionsEn: ["AB positive (AB+)", "O negative (O-)", "A positive", "B negative"],
      optionsHi: ["AB पॉजिटिव (AB+)", "O नेगेटिव", "A पॉजिटिव", "B नेगेटिव"],
      answer: 0,
      exp: "Explanation (En): People with AB positive blood have neither anti-A nor anti-B antibodies in their plasma, so they can receive red blood cells from any group.\nस्पष्टीकरण (Hi): AB+ रक्त समूह वाले व्यक्ति किसी भी ग्रुप से रक्त ले सकते हैं, इसलिए इन्हें सर्वग्राही कहा जाता है।"
    },
    {
      qEn: "What is the scientific name for red blood cells (RBCs)?",
      qHi: "लाल रक्त कोशिकाओं (RBCs) का वैज्ञानिक नाम क्या है?",
      optionsEn: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Plasma"],
      optionsHi: ["एरिथ्रोसाइट्स (Erythrocytes)", "ल्यूकोसाइट्स", "थ्रॉम्बोसाइट्स", "प्लाज्मा"],
      answer: 0,
      exp: "Explanation (En): Erythrocytes are hemoglobin-containing cells responsible for oxygen transport.\nस्पष्टीकरण (Hi): लाल रक्त कोशिकाओं को एरिथ्रोसाइट्स (Erythrocytes) कहा जाता है जो ऑक्सीजन ढोती हैं।"
    },
    {
      qEn: "What is the scientific name for white blood cells (WBCs)?",
      qHi: "श्वेत रक्त कोशिकाओं (WBCs) का वैज्ञानिक नाम क्या है?",
      optionsEn: ["Leukocytes", "Erythrocytes", "Thrombocytes", "Hemocytes"],
      optionsHi: ["ल्यूकोसाइट्स (Leukocytes)", "एरिथ्रोसाइट्स", "थ्रॉम्बोसाइट्स", "हीमोसाइट्स"],
      answer: 0,
      exp: "Explanation (En): Leukocytes are immune system cells that protect the body against infectious diseases and foreign invaders.\nस्पष्टीकरण (Hi): श्वेत रक्त कोशिकाओं को ल्यूकोसाइट्स (Leukocytes) कहा जाता है जो प्रतिरक्षा तंत्र का हिस्सा हैं।"
    },
    {
      qEn: "What is the scientific name for blood platelets?",
      qHi: "रक्त प्लेटलेट्स (Blood platelets) का वैज्ञानिक नाम क्या है?",
      optionsEn: ["Thrombocytes", "Erythrocytes", "Leukocytes", "Macrophage"],
      optionsHi: ["थ्रॉम्बोसाइट्स (Thrombocytes)", "एरिथ्रोसाइट्स", "ल्यूकोसाइट्स", "मैक्रोफेज"],
      answer: 0,
      exp: "Explanation (En): Thrombocytes (platelets) are cell fragments essential for blood clotting and hemostasis.\nस्पष्टीकरण (Hi): प्लेटलेट्स को थ्रॉम्बोसाइट्स (Thrombocytes) कहते हैं जो रक्त का थक्का जमाने में मदद करते हैं।"
    },
    {
      qEn: "What is the average lifespan of human red blood cells (RBCs)?",
      qHi: "मानव लाल रक्त कोशिकाओं (RBC) का औसत जीवनकाल कितना होता है?",
      optionsEn: ["120 days", "60 days", "30 days", "365 days"],
      optionsHi: ["120 दिन", "60 दिन", "30 दिन", "365 दिन"],
      answer: 0,
      exp: "Explanation (En): Mature human RBCs circulate for about 120 days before being destroyed in the spleen (graveyard of RBCs).\nस्पष्टीकरण (Hi): आरबीसी का जीवनकाल लगभग 120 दिन होता है, जिसके बाद वे प्लीहा (Spleen) में नष्ट हो जाती हैं।"
    },
     { qEn: "Which organ is known as the 'graveyard of RBCs'?",
      qHi: "किस अंग को 'आरबीसी का कब्रिस्तान' (Graveyard of RBCs) कहा जाता है?",
      optionsEn: ["Spleen (प्लीहा)", "Liver", "Kidney", "Bone marrow"],
      optionsHi: ["प्लीहा (Spleen)", "यकृत", "गुर्दा", "अस्थिमज्जा"],
      answer: 0,
      exp: "Explanation (En): The spleen filters old and damaged red blood cells and recycles their components.\nस्पष्टीकरण (Hi): प्लीहा (Spleen) पुरानी और नष्ट होने वाली आरबीसी को छानकर अलग करती है, इसलिए इसे आरबीसी का कब्रिस्तान कहते हैं।"
    },
    {
      qEn: "What is the protein inside red blood cells responsible for oxygen transport?",
      qHi: "लाल रक्त कोशिकाओं के अंदर ऑक्सीजन परिवहन के लिए जिम्मेदार प्रोटीन कौन सा है?",
      optionsEn: ["Hemoglobin", "Myoglobin", "Albumin", "Fibrinogen"],
      optionsHi: ["हीमोग्लोबिन (Hemoglobin)", "मायoglobin", "एल्ब्यूमिन", "फाइब्रिनोजेन"],
      answer: 0,
      exp: "Explanation (En): Hemoglobin is an iron-rich respiratory pigment that binds oxygen in the lungs and releases it in tissues.\nस्पष्टीकरण (Hi): हीमोग्लोबिन एक आयरन युक्त प्रोटीन है जो फेफड़ों से ऑक्सीजन बांधकर शरीर के अंगों तक पहुँचाता है।"
    },
    {
      qEn: "What is the normal blood pressure of a healthy human adult?",
      qHi: "एक स्वस्थ वयस्क मानव का सामान्य रक्तचाप (Blood pressure) कितना होता है?",
      optionsEn: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
      optionsHi: ["120/80 mmHg", "140/90 mmHg", "100/60 mmHg", "160/100 mmHg"],
      answer: 0,
      exp: "Explanation (En): Normal resting blood pressure is around 120 mmHg systolic (heart contracting) over 80 mmHg diastolic (heart relaxing).\nस्पष्टीकरण (Hi): स्वस्थ वयस्क का सामान्य रक्तचाप 120/80 मिमी पारा (mmHg) होता है।"
    },
    {
      qEn: "What instrument is used to measure blood pressure?",
      qHi: "रक्तचाप (Blood pressure) मापने के लिए किस उपकरण का उपयोग किया जाता है?",
      optionsEn: ["Sphygmomanometer", "Stethoscope", "Electrocardiograph", "Thermometer"],
      optionsHi: ["स्फिग्मोमैनोमीटर (Sphygmomanometer)", "स्टेथोस्कोप", "इलेक्ट्रोकार्डियोग्राफ", "थर्मोमीटर"],
      answer: 0,
      exp: "Explanation (En): A sphygmomanometer combined with a stethoscope is standard for measuring arterial blood pressure.\nस्पष्टीकरण (Hi): रक्तचाप मापने वाले यंत्र को स्फिग्मोमैनोमीटर (Sphygmomanometer) कहते हैं।"
    },
    {
      qEn: "What is an ECG (Electrocardiogram) used for?",
      qHi: "ईसीजी (ECG - इलेक्ट्रोकार्डियोग्राम) का उपयोग किसके लिए किया जाता है?",
      optionsEn: ["To record and measure the electrical activity of the heart", "To measure blood sugar", "To measure brain waves", "To test lung capacity"],
      optionsHi: ["हृदय की विद्युत गतिविधि को रिकॉर्ड और मापने के लिए", "रक्त शर्करा मापने के लिए", "मस्तिष्क तरंगें मापने के लिए", "फेफड़ों की क्षमता जाँचने के लिए"],
      answer: 0,
      exp: "Explanation (En): An ECG graphs the electrical impulses traveling through the heart during cardiac cycles to detect abnormalities.\nस्पष्टीकरण (Hi): ईसीजी हृदय की विद्युत गतिविधियों को ग्राफ के रूप में दर्ज करता है जिससे दिल की बीमारियों का पता चलता है।"
    },
    {
      qEn: "What is high blood pressure commonly referred to as?",
      qHi: "उच्च रक्तचाप (High blood pressure) को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Hypertension", "Hypotension", "Anemia", "Leukemia"],
      optionsHi: ["हाइपरटेंशन (Hypertension)", "हाइपोटेंशन", "एनीमिया", "ल्यूकेमिया"],
      answer: 0,
      exp: "Explanation (En): Chronic high blood pressure is medically termed hypertension, which puts extra strain on heart and arteries.\nस्पष्टीकरण (Hi): लंबे समय तक रक्तचाप का सामान्य से अधिक रहना हाइपरटेंशन (Hypertension) कहलाता है।"
    },
    {
      qEn: "What is the condition called when blood hemoglobin or RBC count is below normal (resulting in reduced oxygen transport)?",
      qHi: "जब रक्त में हीमोग्लोबिन या आरबीसी की संख्या सामान्य से कम हो जाती है (ऑक्सीजन परिवहन घट जाता है), तो उस स्थिति को क्या कहते हैं?",
      optionsEn: ["Anemia", "Leukemia", "Polycythemia", "Hemophilia"],
      optionsHi: ["एनीमिया या रक्ताल्पता (Anemia)", "ल्यूकेमिया", "पॉलीसिथिमिया", "हीमोफिलिया"],
      answer: 0,
      exp: "Explanation (En): Anemia is a condition characterized by a deficiency of red blood cells or hemoglobin, leading to fatigue and weakness.\nस्पष्टीकरण (Hi): शरीर में खून (हीमोग्लोबिन) की कमी होने को एनीमिया (Anemia) कहा जाता है।"
    },
    {
      qEn: "What is blood cancer characterized by an abnormal increase in white blood cells called?",
      qHi: "श्वेत रक्त कोशिकाओं (WBC) की संख्या में अत्यधिक और असामान्य वृद्धि के कारण होने वाले रक्त कैंसर को क्या कहते हैं?",
      optionsEn: ["Leukemia", "Anemia", "Thrombosis", "Lymphoma"],
      optionsHi: ["ल्यूकेमिया (Leukemia)", "एनीमिया", "थ्रॉम्बोसिस", "लिंफोमा"],
      answer: 0,
      exp: "Explanation (En): Leukemia is a type of blood cancer where bone marrow produces abnormal white blood cells in uncontrolled numbers.\nस्पष्टीकरण (Hi): ल्यूकेमिया एक प्रकार का रक्त कैंसर है जिसमें अस्थिमज्जा में श्वेत रक्त कोशिकाओं की संख्या अनियंत्रित रूप से बढ़ जाती है।"
    },
    {
      qEn: "What protein is essential for blood clotting and is converted from fibrinogen during coagulation?",
      qHi: "रक्त का थक्का जमाने के लिए कौन सा प्रोटीन आवश्यक है जो थक्के के समय फाइब्रिनोजेन से बनता है?",
      optionsEn: ["Fibrin", "Albumin", "Globulin", "Hemoglobin"],
      optionsHi: ["फाइब्रिन (Fibrin)", "एल्ब्यूमिन", "ग्लोबुलिन", "हीमोग्लोबिन"],
      answer: 0,
      exp: "Explanation (En): During blood coagulation, soluble fibrinogen is converted by thrombin into insoluble fibrin threads that form a mesh clot.\nस्पष्टीकरण (Hi): रक्त का थक्का जमते समय फाइब्रिनोजेन सक्रिय होकर 'फाइब्रिन' जाल बनाता है जो खून रोकता है।"
    },
    {
      qEn: "Which vitamin plays a crucial role in blood coagulation (clotting)?",
      qHi: "रक्त का थक्का जमने में कौन सा विटामिन मुख्य भूमिका निभाता है?",
      optionsEn: ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
      optionsHi: ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन A"],
      answer: 0,
      exp: "Explanation (En): Vitamin K is essential for the synthesis of prothrombin and other clotting factors in the liver.\nस्पष्टीकरण (Hi): यकृत में रक्त का थक्का जमाने वाले कारकों के निर्माण के लिए विटामिन K बेहद जरूरी होता है।"
    },
    {
      qEn: "What is the fluid portion of blood minus blood cells called?",
      qHi: "रक्त कोशिकाओं को हटाने के बाद बचे हुए रक्त के तरल हिस्से को क्या कहा जाता है?",
      optionsEn: ["Plasma", "Serum", "Lymph", "Interstitial fluid"],
      optionsHi: ["प्लाज्मा (Plasma)", "सीरम", "लसीका", "इंटरस्टिशियल फ्लूइड"],
      answer: 0,
      exp: "Explanation (En): Plasma makes up about 55% of blood volume, consisting of water, proteins, ions, and nutrients.\nस्पष्टीकरण (Hi): रक्त के तरल भाग को प्लाज्मा कहते हैं जो कुल रक्त का लगभग 55% हिस्सा होता है।"
    },
    {
      qEn: "What is serum?",
      qHi: "सीरम (Serum) क्या होता है?",
      optionsEn: ["Plasma without clotting factors (like fibrinogen)", "Pure water", "Whole blood", "Clotted cells"],
      optionsHi: ["थक्का जमाने वाले कारकों (जैसे फाइब्रिनोजेन) के बिना प्लाज्मा", "शुद्ध पानी", "पूरा रक्त", "जमी हुई कोशिकाएं"],
      answer: 0,
      exp: "Explanation (En): Serum is blood plasma minus fibrinogen and other clotting proteins, remaining liquid after blood clots.\nस्पष्टीकरण (Hi): फाइब्रिनोजेन जैसे थक्का बनाने वाले प्रोटीन निकाल देने के बाद बचे तरल को सीरम कहते हैं।"
    },
    {
      qEn: "Which type of blood vessels carry blood away from the heart to various body organs?",
      qHi: "कौन सी रक्त वाहिकाएं हृदय से रक्त को शरीर के विभिन्न अंगों तक ले जाती हैं?",
      optionsEn: ["Arteries", "Veins", "Capillaries", "Venules"],
      optionsHi: ["धमनियां (Arteries)", "शिराएं", "केशिकाएं", "वेन्यूल"],
      answer: 0,
      exp: "Explanation (En): Arteries are thick-walled blood vessels that transport blood away from the heart under high pressure.\nस्पष्टीकरण (Hi): धमनियां (Arteries) हृदय से शुद्ध रक्त को उच्च दबाव पर शरीर के अंगों में ले जाती हैं।"
    }
  ],
    "Nervous System": [
    {
      qEn: "What are the two primary divisions of the human nervous system?",
      qHi: "मानव तंत्रिका तंत्र के दो प्राथमिक भाग कौन से हैं?",
      optionsEn: ["Central Nervous System (CNS) and Peripheral Nervous System (PNS)", "Sympathetic and Parasympathetic", "Somatic and Autonomic", "Brain and Spinal cord only"],
      optionsHi: ["केंद्रीय तंत्रिका तंत्र (CNS) और परिधीय तंत्रिका तंत्र (PNS)", "सहानुभूती और परानुकम्पी", "सोमैटिक और स्वायत्त", "केवल मस्तिष्क और मेरुरज्जु"],
      answer: 0,
      exp: "Explanation (En): The human nervous system is broadly divided into the Central Nervous System (brain and spinal cord) and the Peripheral Nervous System (nerves outside CNS).\nस्पष्टीकरण (Hi): मानव तंत्रिका तंत्र मुख्य रूप से केंद्रीय तंत्रिका तंत्र (CNS) और परिधीय तंत्रिका तंत्र (PNS) में बंटा होता है।"
    },
    {
      qEn: "What organs comprise the Central Nervous System (CNS)?",
      qHi: "केंद्रीय तंत्रिका तंत्र (CNS) के अंतर्गत कौन से अंग आते हैं?",
      optionsEn: ["Brain and Spinal cord", "Brain and Cranial nerves", "Spinal cord and Ganglia", "Sensory receptors"],
      optionsHi: ["मस्तिष्क और मेरुरज्जु (Brain and Spinal cord)", "मस्तिष्क और कपाल तंत्रिकाएं", "मेरुरज्जु और गैंगलिया", "संवेदी रिसेप्टर्स"],
      answer: 0,
      exp: "Explanation (En): The CNS consists of the brain and the spinal cord, which act as the main control center for processing information.\nस्पष्टीकरण (Hi): CNS में मस्तिष्क और मेरुरज्जु (Spinal cord) शामिल होते हैं जो पूरे शरीर से आने वाले संकेतों को संसाधित करते हैं।"
    },
    {
      qEn: "What is the largest part of the human brain?",
      qHi: "मानव मस्तिष्क का सबसे बड़ा भाग कौन सा है?",
      optionsEn: ["Cerebrum (प्रमस्तिष्क)", "Cerebellum (अनुमस्तिष्क)", "Medulla oblongata", "Hypothalamus"],
      optionsHi: ["प्रमस्तिष्क (Cerebrum)", "अनुमस्तिष्क (Cerebellum)", "मेडूला ओब्लॉन्गाटा", "हाइपोग्लॉसियल"],
      answer: 0,
      exp: "Explanation (En): The cerebrum accounts for about 85% of brain weight and controls higher functions like thinking, memory, and voluntary actions.\nस्पष्टीकरण (Hi): प्रमस्तिष्क (Cerebrum) मानव मस्तिष्क का लगभग 85% हिस्सा बनाता है और यह सोच, याददाश्त तथा बुद्धिमत्ता को नियंत्रित करता है।"
    },
    {
      qEn: "Which part of the brain is responsible for maintaining body balance, posture, and coordination of voluntary movements?",
      qHi: "मस्तिष्क का कौन सा भाग शरीर के संतुलन, मुद्रा (posture) और ऐच्छिक गतियों के समन्वय के लिए जिम्मेदार है?",
      optionsEn: ["Cerebellum (अनुमस्तिष्क)", "Cerebrum", "Thalamus", "Pons"],
      optionsHi: ["अनुमस्तिष्क (Cerebellum)", "प्रमस्तिष्क", "थैलेमस", "पोंस"],
      answer: 0,
      exp: "Explanation (En): The cerebellum coordinates voluntary muscle movements and maintains balance and equilibrium (often called the 'little brain').\nस्पष्टीकरण (Hi): अनुमस्तिष्क (Cerebellum) शरीर का संतुलन बनाए रखने और मांसपेशियों की गतिविधियों को सुचारू रूप से चलाने में मदद करता है।"
    },
    {
      qEn: "Which brain center regulates vital involuntary functions such as heartbeat, breathing, and blood pressure?",
      qHi: "मस्तिष्क का कौन सा केंद्र हृदय की धड़कन, सांस लेना और रक्तचाप जैसी महत्वपूर्ण अनैच्छिक क्रियाओं को नियंत्रित करता है?",
      optionsEn: ["Medulla oblongata", "Cerebrum", "Cerebellum", "Thalamus"],
      optionsHi: ["मेडूला ओब्लॉन्गाटा (Medulla oblongata)", "प्रमस्तिष्क", "अनुमस्तिष्क", "थैलेमस"],
      answer: 0,
      exp: "Explanation (En): The medulla oblongata controls autonomic involuntary functions like respiration, heart rate, swallowing, and blood pressure.\nस्पष्टीकरण (Hi): मेडूला ओब्लॉन्गाटा श्वसन, हृदय गति और रक्तचाप जैसी अनैच्छिक क्रियाओं का नियंत्रण केंद्र है।"
    },
    {
      qEn: "What is the master endocrine gland controlled by the hypothalamus in the brain?",
      qHi: "मस्तिष्क में हाइपोथैलेमस द्वारा नियंत्रित 'मास्टर ग्रंथि' कौन सी है?",
      optionsEn: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pineal gland"],
      optionsHi: ["पीयूष ग्रंथि या पिट्यूटरी ग्रंथि (Pituitary gland)", "थायरॉयड ग्रंथि", "एड्रेनल ग्रंथि", "पीनियल ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The pituitary gland is controlled by the hypothalamus and secretes hormones regulating other endocrine glands.\nस्पष्टीकरण (Hi): पीयूष ग्रंथि शरीर की मास्टर ग्रंथि है जो सीधे हाइपोथैलेमस के नियंत्रण में काम करती है।"
    },
    {
      qEn: "Which brain structure acts as the relay station for sensory and motor signals?",
      qHi: "कौन सी मस्तिष्क संरचना संवेदी और मोटर संकेतों के लिए 'रिले स्टेशन' का काम करती है?",
      optionsEn: ["Thalamus", "Hypothalamus", "Medulla", "Cerebellum"],
      optionsHi: ["थैलेमस (Thalamus)", "हाइपोथैलेमस", "मेडूला", "अनुमस्तिष्क"],
      answer: 0,
      exp: "Explanation (En): The thalamus relays sensory and motor signals to the cerebral cortex and regulates consciousness and sleep.\nस्पष्टीकरण (Hi): थैलेमस संवेदी संकेतों को प्रमस्तिष्क तक पहुँचाने वाले रिले स्टेशन के रूप में कार्य करता है।"
    },
    {
      qEn: "Which part of the brain regulates body temperature, hunger, thirst, and emotional responses?",
      qHi: "मस्तिष्क का कौन सा भाग शरीर के तापमान, भूख, प्यास और भावनात्मक प्रतिक्रियाओं को नियंत्रित करता है?",
      optionsEn: ["Hypothalamus", "Thalamus", "Cerebellum", "Medulla"],
      optionsHi: ["हाइपोथैलेमस (Hypothalamus)", "थैलेमस", "अनुमस्तिष्क", "मेडूला"],
      answer: 0,
      exp: "Explanation (En): The hypothalamus links the nervous system to the endocrine system and controls homeostasis, hunger, thirst, and body temperature.\nस्पष्टीकरण (Hi): हाइपोथैलेमस शरीर के तापमान, भूख, प्यास, और भावनाओं (गुस्सा, खुशी) को नियंत्रित करता है।"
    },
    {
      qEn: "What are the protective connective tissue membranes covering the brain and spinal cord called?",
      qHi: "मस्तिष्क और मेरुरज्जु को ढंकने वाली सुरक्षात्मक झिल्लियों को क्या कहा जाता है?",
      optionsEn: ["Meninges (मस्तिष्क आवरण)", "Pleura", "Pericardium", "Peritoneum"],
      optionsHi: ["मेनिन्जेस (Meninges)", "प्लुरा", "पेरिकार्डियम", "पेरिटोनियम"],
      answer: 0,
      exp: "Explanation (En): Meninges consist of three layers (dura mater, arachnoid mater, and pia mater) protecting the CNS.\nस्पष्टीकरण (Hi): मस्तिष्क और स्पाइनल कॉर्ड के चारों ओर तीन परतों वाली झिल्लियां होती हैं जिन्हें मेनिन्जेस (Meninges) कहते हैं।"
    },
    {
      qEn: "What is inflammation of the protective membranes (meninges) around the brain and spinal cord called?",
      qHi: "मस्तिष्क और मेरुरज्जु के चारों ओर की सुरक्षात्मक झिल्लियों में सूजन आ जाने को क्या कहते हैं?",
      optionsEn: ["Meningitis", "Encephalitis", "Paralysis", "Epilepsy"],
      optionsHi: ["मेनिंजाइटिस (Meningitis - मस्तिष्क ज्वर)", "एन्सेफलाइटिस", "पक्षाघात (Paralysis)", "मिर्गी (Epilepsy)"],
      answer: 0,
      exp: "Explanation (En): Meningitis is an infection or inflammation of the meninges, typically caused by bacteria or viruses.\nस्पष्टीकरण (Hi): मेनिंजाइटिस (Meningitis) एक गंभीर संक्रमण है जिसमें मेनिन्जेस झिल्लियों में सूजन आ जाती है।"
    },
    {
      qEn: "What is cerebrospinal fluid (CSF)?",
      qHi: "सेरेब्रोज़ाइनल फ्लूइड (CSF / मस्तिष्क-मेरु द्रव) क्या होता है?",
      optionsEn: ["A clear fluid surrounding the brain and spinal cord that cushions against mechanical shock", "Blood inside the brain", "Fluid in stomach", "Lymphatic fluid in muscles"],
      optionsHi: ["मस्तिष्क और मेरुरज्जु के चारों ओर पाया जाने वाला तरल जो झटके से बचाता है", "मस्तिष्क के अंदर का खून", "पेट का तरल", "मांसपेशियों का लसीका द्रव"],
      answer: 0,
      exp: "Explanation (En): CSF circulates through the ventricles of the brain and spinal cord, providing cushioning, nutrient transport, and waste removal.\nस्पष्टीकरण (Hi): CSF एक स्पष्ट तरल पदार्थ है जो मस्तिष्क और स्पाइनल कॉर्ड को झटकों से बचाता है और पोषण देता है।"
    },
    {
      qEn: "What is a reflex action?",
      qHi: "प्रतिवर्ती क्रिया (Reflex action) क्या होती है?",
      optionsEn: ["An involuntary, rapid, and automatic response to a stimulus coordinated mostly by the spinal cord", "Conscious thinking process", "Slow voluntary movement", "Cardiac contraction"],
      optionsHi: ["किसी उद्दीपन के प्रति अनैच्छिक, तीव्र और स्वचालित प्रतिक्रिया जो ज्यादातर मेरुरज्जु द्वारा नियंत्रित होती है", "चेतन सोच प्रक्रिया", "धीमी ऐच्छिक गति", "हृदय संकुचन"],
      answer: 0,
      exp: "Explanation (En): Reflex actions bypass the brain for immediate survival, routed through the spinal cord via a reflex arc.\nस्पष्टीकरण (Hi): प्रतिवर्ती क्रियाएं अचानक होने वाली स्वचालित अनैच्छिक प्रतिक्रियाएं हैं जिनका केंद्र मुख्य रूप से स्पाइनल कॉर्ड होता है।"
    },
    {
      qEn: "What is the pathway of a nerve impulse during a reflex action called?",
      qHi: "प्रतिवर्ती क्रिया के दौरान तंत्रिका आवेग के मार्ग को क्या कहा जाता है?",
      optionsEn: ["Reflex arc", "Neural pathway", "Synaptic cleft", "Axon bundle"],
      optionsHi: ["प्रतिवर्ती चाप (Reflex arc)", "तंत्रिका मार्ग", "सिनैप्टिक विदूर", "एक्सॉन बंडल"],
      answer: 0,
      exp: "Explanation (En): A reflex arc includes a receptor, sensory neuron, integration center (spinal cord), motor neuron, and effector.\nस्पष्टीकरण (Hi): जिस रास्ते से प्रतिवर्ती क्रिया के संकेत (संवेदी से प्रेरक तक) गुजरते हैं, उसे प्रतिवर्ती चाप (Reflex arc) कहते हैं।"
    },
      {
      qEn: "How many pairs of cranial nerves originate directly from the brain in humans?",
      qHi: "मानव में मस्तिष्क से सीधे निकलने वाली कपाल तंत्रिकाओं (cranial nerves) की संख्या कितनी जोड़ी होती है?",
      optionsEn: ["12 pairs", "31 pairs", "10 pairs", "24 pairs"],
      optionsHi: ["12 जोड़ी (12 pairs)", "31 जोड़ी", "10 जोड़ी", "24 जोड़ी"],
      answer: 0,
      exp: "Explanation (En): Humans have 12 pairs of cranial nerves connecting the brain to various parts of the head, neck, and trunk.\nस्पष्टीकरण (Hi): मनुष्यों में 12 जोड़ी कपाल तंत्रिकाएं (cranial nerves) होती हैं जो मस्तिष्क से निकलती हैं।"
    },
    {
      qEn: "How many pairs of spinal nerves emerge from the spinal cord in humans?",
      qHi: "मानव में मेरुरज्जु (spinal cord) से निकलने वाली रीढ़ की तंत्रिकाओं (spinal nerves) की संख्या कितनी जोड़ी होती है?",
      optionsEn: ["31 pairs", "12 pairs", "21 pairs", "40 pairs"],
      optionsHi: ["31 जोड़ी (31 pairs)", "12 जोड़ी", "21 जोड़ी", "40 जोड़ी"],
      answer: 0,
      exp: "Explanation (En): There are 31 pairs of spinal nerves branching out from the spinal cord along different vertebral segments.\nस्पष्टीकरण (Hi): स्पाइनल कॉर्ड से कुल 31 जोड़ी स्पाइनल नर्व्स निकलती हैं जो शरीर के अंगों को जोड़ती हैं।"
    },
    {
      qEn: "What is the function of the sympathetic nervous system?",
      qHi: "सहानुभूतिपूर्ण तंत्रिका तंत्र (Sympathetic nervous system) का मुख्य कार्य क्या है?",
      optionsEn: ["Prepares the body for 'fight or flight' response during stress or danger", "Promotes 'rest and digest' functions", "Lowers heart rate", "Stimulates digestion"],
      optionsHi: ["तनाव या खतरे के समय शरीर को 'फाइट या फ्लाइट' (लड़ो या भागो) के लिए तैयार करना", "आराम और पाचन को बढ़ावा देना", "हृदय गति कम करना", "पाचन उत्तेजित करना"],
      answer: 0,
      exp: "Explanation (En): The sympathetic nervous system accelerates heart rate, dilates pupils, and prepares the body for emergency action.\nस्पष्टीकरण (Hi): सहानुभूति तंत्रिका तंत्र आपातकालीन स्थिति या डर के समय शरीर को सक्रिय (Fight or flight) करता है।"
    },
    {
      qEn: "What is the function of the parasympathetic nervous system?",
      qHi: "परानुकम्पी तंत्रिका तंत्र (Parasympathetic nervous system) का मुख्य कार्य क्या है?",
      optionsEn: ["Promotes 'rest and digest' activities, conserving energy and lowering heart rate", "Prepares body for fight or flight", "Increases blood pressure", "Dilates airways"],
      optionsHi: ["'रेस्ट एंड डाइजेस्ट' (आराम और पाचन) गतिविधियों को बढ़ावा देना और ऊर्जा बचाना", "फाइट या फ्लाइट के लिए तैयार करना", "रक्तचाप बढ़ाना", "श्वास नली चौड़ी करना"],
      answer: 0,
      exp: "Explanation (En): The parasympathetic system calms the body, lowers heart rate, and stimulates digestion during restful states.\nस्पष्टीकरण (Hi): परानुकम्पी तंत्रिका तंत्र आराम की अवस्था में शरीर को शांत रखता है और पाचन व विश्राम में मदद करता है।"
    },
    {
      qEn: "What are neurotransmitters?",
      qHi: "न्यूरोट्रांसमीटर (Neurotransmitters) क्या होते हैं?",
      optionsEn: ["Chemical messengers that transmit signals across a synapse from one neuron to another", "Electrical wires in brain", "Hormones produced by liver", "Digestive enzymes"],
      optionsHi: ["रासायनिक संदेशवाहक जो सिनैप्स के पार एक न्यूरॉन से दूसरे न्यूरॉन तक संकेत भेजते हैं", "मस्तिष्क के बिजली के तार", "लिवर द्वारा स्रावित हॉर्मोन", "पाचक एंजाइम"],
      answer: 0,
      exp: "Explanation (En): Neurotransmitters (such as acetylcholine, dopamine, serotonin) are chemicals released at axon terminals to pass nerve signals.\nस्पष्टीकरण (Hi): न्यूरोट्रांसमीटर रासायनिक संदेशवाहक हैं जो दो तंत्रिका कोशिकाओं के बीच सिनैप्स के जरिए सिग्नल पार कराते हैं।"
    },
    {
      qEn: "Which neurotransmitter is primarily responsible for muscle action, memory, and cognitive functions?",
      qHi: "मांसपेशियों की गति, याददाश्त और संज्ञानात्मक कार्यों के लिए मुख्य रूप से कौन सा न्यूरोट्रांसमीटर जिम्मेदार है?",
      optionsEn: ["Acetylcholine", "Insulin", "Adrenaline", "Thyroxine"],
      optionsHi: ["एसिटाइलकोलीन (Acetylcholine)", "इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन"],
      answer: 0,
      exp: "Explanation (En): Acetylcholine is the chief neurotransmitter of the parasympathetic nervous system, involved in muscle contraction and memory.\nस्पष्टीकरण (Hi): एसिटाइलकोलीन एक प्रमुख न्यूरोट्रांसमीटर है जो मांसपेशियों के संकुचन और याददाश्त में मुख्य भूमिका निभाता है।"
    },
    {
      qEn: "What is the condition called where a person suffers from recurrent, unprovoked seizures due to abnormal electrical activity in the brain?",
      qHi: "मस्तिष्क में असामान्य विद्युत गतिविधि के कारण बार-बार दौरे पड़ने की स्थिति को क्या कहा जाता है?",
      optionsEn: ["Epilepsy (मिर्गी)", "Parkinson's disease", "Alzheimer's disease", "Meningitis"],
      optionsHi: ["मिर्गी (Epilepsy)", "पार्किंसंस रोग", "अल्जाइमर रोग", "मेनिंजाइटिस"],
      answer: 0,
      exp: "Explanation (En): Epilepsy is a neurological disorder marked by sudden recurrent episodes of sensory disturbance, loss of consciousness, or convulsions.\nस्पष्टीकरण (Hi): मस्तिष्क में न्यूरॉन्स की अचानक और अत्यधिक विद्युत तरंगों के कारण होने वाले दौरों की बीमारी को मिर्गी (Epilepsy) कहते हैं।"
    },
    {
      qEn: "Which neurodegenerative disease is characterized by the loss of dopamine-producing neurons, leading to tremors and muscle rigidity?",
      qHi: "डोपामिन बनाने वाले न्यूरॉन्स के नष्ट होने से होने वाले किस तंत्रिका संबंधी रोग में हाथों में कंपन और जकड़न होती है?",
      optionsEn: ["Parkinson's disease", "Alzheimer's disease", "Epilepsy", "Multiple sclerosis"],
      optionsHi: ["पार्किंसंस रोग (Parkinson's disease)", "अल्जाइमर रोग", "मिर्गी", "मल्टीपल स्केलेरोसिस"],
      answer: 0,
      exp: "Explanation (En): Parkinson's disease results from degeneration of dopamine-producing neurons in the substantia nigra of the brain.\nस्पष्टीकरण (Hi): पार्किंसंस रोग में मस्तिष्क में डोपामिन की कमी हो जाती है जिससे कंपकंपी और मांसपेशियों में जकड़न होती है।"
    },
    {
      qEn: "Which progressive neurodegenerative disease is characterized by memory loss, confusion, and accumulation of amyloid plaques in the brain?",
      qHi: "कौन सा न्यूरोडीजेनेरेटिव रोग याददाश्त की हानि, भ्रम और मस्तिष्क में एमिलॉइड तख्तों (plaques) के जमने से जुड़ा है?",
      optionsEn: ["Alzheimer's disease", "Parkinson's disease", "Epilepsy", "Meningitis"],
      optionsHi: ["अल्जाइमर रोग (Alzheimer's disease)", "पार्किंसंस रोग", "मिर्गी", "मेनिंजाइटिस"],
      answer: 0,
      exp: "Explanation (En): Alzheimer's disease causes brain cell death and shrinkage, leading to severe memory loss and cognitive decline.\nस्पष्टीकरण (Hi): अल्जाइमर रोग मुख्य रूप से वृद्धों में भूलने की बीमारी (dementia) और याददाश्त के कमजोर होने का कारण है।"
    },
    {
      qEn: "What is the white matter of the brain and spinal cord composed of?",
      qHi: "मस्तिष्क और मेरुरज्जु का 'श्वेत द्रव्य' (White matter) किससे बना होता है?",
      optionsEn: ["Myelinated nerve fibers (axons)", "Cell bodies of neurons", "Blood vessels only", "Synaptic clefts"],
      optionsHi: ["मायेलिनयुक्त तंत्रिका तंतु (एक्सॉन)", "न्यूरॉन्स के कोशिका काय (Cell bodies)", "केवल रक्त वाहिकाएं", "सिनैप्टिक विदूर"],
      answer: 0,
      exp: "Explanation (En): White matter consists mostly of myelinated axons, giving it a white appearance, whereas gray matter consists of unmyelinated cell bodies.\nस्पष्टीकरण (Hi): श्वेत द्रव्य मायेलिन से ढके हुए एक्सॉन तंतुओं से बना होता है, जबकि धूसर द्रव्य (Grey matter) सेल बॉडी से बनता है।"
    },
    {
      qEn: "What is the grey matter of the brain primarily composed of?",
      qHi: "मस्तिष्क का 'धूसर द्रव्य' (Grey matter) मुख्य रूप से किससे बना होता है?",
      optionsEn: ["Neuronal cell bodies, dendrites, and unmyelinated axons", "Myelinated nerve fibers only", "Fat deposits", "Cerebrospinal fluid"],
      optionsHi: ["न्यूरॉन के कोशिका काय, डेंड्राइट्स और बिना मायेलिन वाले एक्सॉन", "केवल मायेलिन तंतु", "वसा जमाव", "सेरेब्रोज़ाइनल फ्लूइड"],
      answer: 0,
      exp: "Explanation (En): Grey matter forms the outer cortex of the brain and contains neuronal cell bodies and synapses where information processing occurs.\nस्पष्टीकरण (Hi): धूसर द्रव्य में न्यूरॉन के सेल बॉडी और अनमायेलिंस होते हैं जहाँ मुख्य रूप से सूचनाओं का प्रसंस्करण होता है।"
    },
    {
      qEn: "What is paralysis?",
      qHi: "पक्षाघात या पैरालिसिस (Paralysis) किसे कहते हैं?",
      optionsEn: ["Loss of voluntary muscle movement in one or more parts of the body due to nerve damage", "Temporary fatigue of muscles", "Memory loss", "High blood pressure"],
      optionsHi: ["तंत्रिका क्षति के कारण शरीर के एक या अधिक हिस्सों में ऐच्छिक मांसपेशियों की गति का नुकसान", "मांसपेशियों की अस्थायी थकान", "याददाश्त की कमी", "उच्च रक्तचाप"],
      answer: 0,
      exp: "Explanation (En): Paralysis is the complete or partial loss of muscle function resulting from damage to the nervous system (brain or spinal cord).\nस्पष्टीकरण (Hi): मस्तिष्क या स्पाइनल कॉर्ड में चोट लगने के कारण मांसपेशियों पर नियंत्रण खत्म हो जाने को पैरालिसिस कहते हैं।"
    },
    {
      qEn: "What is the junction or gap between two neurons where electrical or chemical signals pass called?",
      qHi: "दो न्यूरॉन्स के बीच का वह सूक्ष्म अंतराल जहाँ से संकेत गुजरते हैं, क्या कहलाता है?",
      optionsEn: ["Synapse", "Axon hillock", "Ranvier node", "Dendron"],
      optionsHi: ["सिनैप्स (Synapse)", "एक्सॉन हिलॉक", "रैनवियर नोड", "डेंड्रॉन"],
      answer: 0,
      exp: "Explanation (En): A synapse allows neurons to pass signals to other neurons, muscles, or glands.\nस्पष्टीकरण (Hi): सिनैप्स वह सूक्ष्म स्थान है जिसके माध्यम से तंत्रिका संकेत एक कोशिका से दूसरी कोशिका तक पहुँचते हैं।"
    },
    {
      qEn: "Which part of a neuron receives incoming electrical signals or messages from other neurons?",
      qHi: "न्यूरॉन का कौन सा हिस्सा अन्य न्यूरॉन्स से आने वाले विद्युत संकेतों या संदेशों को प्राप्त करता है?",
      optionsEn: ["Dendrites", "Axon", "Myelin sheath", "Synaptic knob"],
      optionsHi: ["डेंड्राइट्स (Dendrites)", "एक्सॉन", "मायेलिन शीथ", "सिनैप्टिक नॉब"],
      answer: 0,
      exp: "Explanation (En): Dendrites are branched projections of a neuron that act as receptors to receive electrochemical messages.\nस्पष्टीकरण (Hi): डेंड्राइट्स पेड़ की शाखाओं जैसी संरचनाएं हैं जो अन्य न्यूरॉन्स से सिग्नल ग्रहण करती हैं।"
    },
    {
      qEn: "Which part of a neuron transmits electrical impulses away from the cell body?",
      qHi: "न्यूरॉन का कौन सा भाग विद्युत आवेगों को कोशिका काय (cell body) से दूर ले जाता है?",
      optionsEn: ["Axon", "Dendrite", "Cyton", "Nucleus"],
      optionsHi: ["एक्सॉन (Axon)", "डेंड्राइट", "साइटोन", "केंद्रक"],
      answer: 0,
      exp: "Explanation (En): The axon is a long, slender nerve fiber that conducts electrical impulses away from the neuron's cell body.\nस्पष्टीकरण (Hi): एक्सॉन एक लंबा तंतु है जो संकेतों को कोशिका शरीर से आगे अन्य अंगों या न्यूरॉन्स तक पहुँचाता है।"
    },
    {
      qEn: "What are the nodes of Ranvier along a myelinated axon?",
      qHi: "मायेलिनयुक्त एक्सॉन पर पाए जाने वाले 'रैनवियर के नोड्स' (Nodes of Ranvier) क्या होते हैं?",
      optionsEn: ["Gaps in the myelin sheath where axonal membrane is exposed, speeding up nerve impulse conduction", "Thick fat deposits", "Cell nuclei", "Synaptic terminals"],
      optionsHi: ["मायेलिन आवरण के वे अंतराल जहाँ एक्सॉन झिल्ली खुली होती है और जो आवेग की गति बढ़ाते हैं", "मोटे वसा जमाव", "कोशिका केंद्रक", "सिनैप्टिक टर्मिनल"],
      answer: 0,
      exp: "Explanation (En): Nodes of Ranvier allow saltatory conduction, where nerve impulses jump from node to node, greatly increasing transmission speed.\nस्पष्टीकरण (Hi): मायेलिन शीथ के बीच के खाली अंतराल रैनवियर नोड्स कहलाते हैं जिनसे आवेग तेजी से कूदते हुए आगे बढ़ते हैं।"
    },
    {
      qEn: "Which part of the vertebrate brain is the center for vision, hearing, and motor control reflexes?",
      qHi: "कशेरुकी मस्तिष्क का कौन सा भाग दृष्टि, श्रवण और मोटर नियंत्रण प्रतिवर्तों का केंद्र है?",
      optionsEn: ["Midbrain (मध्यमस्तिष्क)", "Forebrain", "Hindbrain", "Medulla"],
      optionsHi: ["मध्यमस्तिष्क (Midbrain)", "अग्रमस्तिष्क", "पश्चमस्तिष्क", "मेडूला"],
      answer: 0,
      exp: "Explanation (En): The midbrain connects the forebrain and hindbrain, serving as a relay center for visual and auditory reflex information.\nस्पष्टीकरण (Hi): मध्यमस्तिष्क (Midbrain) देखने और सुनने से जुड़ी प्रतिवर्ती क्रियाओं को नियंत्रित करता है।"
    }
  ],
    "Endocrine Glands": [
    {
      qEn: "Who is known as the 'Father of Endocrinology'?",
      qHi: "'अंतःस्रावी विज्ञान के जनक' (Father of Endocrinology) के रूप में किसे जाना जाता है?",
      optionsEn: ["Thomas Addison", "Claude Bernard", "Bayliss and Starling", "Charles Darwin"],
      optionsHi: ["थॉमस एडिसन (Thomas Addison)", "क्लॉड बर्नाड", "बेylis और स्टार्लिंग", "चार्ल्स डार्विन"],
      answer: 0,
      exp: "Explanation (En): Thomas Addison is recognized as the father of endocrinology for his pioneering work on adrenal glands and Addison's disease.\nस्पष्टीकरण (Hi): थॉमस एडिसन को एड्रेनल ग्रंथियों और उनसे जुड़े रोगों पर उनके शुरुआती कार्यों के लिए एंडोक्राइनोलॉजी का जनक माना जाता है।"
    },
    {
      qEn: "Who discovered the first hormone, secretin, and coined the term 'hormone' along with Starling?",
      qHi: "पहले हॉर्मोन 'सीक्रेटिन' की खोज किसने की थी और स्टार्लिंग के साथ मिलकर 'हॉर्मोन' शब्द गढ़ा था?",
      optionsEn: ["William Bayliss and Ernest Starling", "Thomas Addison", "Frederick Banting", "Edward Jenner"],
      optionsHi: ["विलियम बेलिस और अर्नेस्ट स्टार्लिंग", "थॉमस एडिसन", "फ्रेडरिक बैंटिंग", "एडवर्ड जेनर"],
      answer: 0,
      exp: "Explanation (En): Bayliss and Starling discovered secretin in 1902 and introduced the term hormone (meaning 'to excite') to describe chemical messengers.\nस्पष्टीकरण (Hi): बेलिस और स्टार्लिंग ने 1902 में सीक्रेटिन हॉर्मोन की खोज की और 'हॉर्मोन' शब्द दिया।"
    },
    {
      qEn: "Which gland is famously known as the 'Master Gland' of the human body?",
      qHi: "मानव शरीर की 'मास्टर ग्रंथि' (Master Gland) के रूप में किस ग्रंथि को जाना जाता है?",
      optionsEn: ["Pituitary gland (पीयूष ग्रंथि)", "Thyroid gland", "Adrenal gland", "Pineal gland"],
      optionsHi: ["पीयूष ग्रंथि या पिट्यूटरी ग्रंथि (Pituitary gland)", "थायरॉयड ग्रंथि", "एड्रेनल ग्रंथि", "पीनियल ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The pituitary gland is called the master gland because its hormones control several other endocrine glands in the body.\nस्पष्टीकरण (Hi): पीयूष ग्रंथि को मास्टर ग्रंथि कहा जाता है क्योंकि इसके द्वारा स्रावित हॉर्मोन अन्य अंतःस्रावी ग्रंथियों को नियंत्रित करते हैं।"
    },
    {
      qEn: "Which part of the brain controls the pituitary gland and acts as the supreme commander of the endocrine system?",
      qHi: "मस्तिष्क का कौन सा भाग पीयूष ग्रंथि को नियंत्रित करता है और अंतःस्रावी तंत्र के सर्वोच्च कमांडर के रूप में कार्य करता है?",
      optionsEn: ["Hypothalamus", "Thalamus", "Cerebellum", "Medulla oblongata"],
      optionsHi: ["हाइपोथैलेमस (Hypothalamus)", "थैलेमस", "अनुमस्तिष्क", "मेडूला ओब्लॉन्गाटा"],
      answer: 0,
      exp: "Explanation (En): The hypothalamus produces releasing and inhibiting hormones that control the anterior pituitary, earning it the title of 'master of the master gland'.\nस्पष्टीकरण (Hi): हाइपोथैलेमस पीयूष ग्रंथि को नियंत्रित करता है, इसलिए इसे मास्टर की भी मास्टर ग्रंथि कहा जाता है।"
    },
    {
      qEn: "Which hormone is responsible for regulating basal metabolic rate (BMR) and is secreted by the thyroid gland?",
      qHi: "बेसल चयापचय दर (BMR) को विनियमित करने के लिए जिम्मेदार और थायरॉयड ग्रंथि द्वारा स्रावित होने वाला मुख्य हॉर्मोन कौन सा है?",
      optionsEn: ["Thyroxine (T_4 / T_3)", "Insulin", "Adrenaline", "Calcitonin"],
      optionsHi: ["थायरोक्सिन (T_4 / T_3)", "इंसुलिन", "एड्रेनलिन", "कैल्सीटोनिन"],
      answer: 0,
      exp: "Explanation (En): Thyroxine regulates metabolism, oxygen consumption, growth, and development in the body.\nस्पष्टीकरण (Hi): थायरोक्सिन हॉर्मोन शरीर की चयापचय दर (Metabolism) और ऊर्जा उत्पादन को नियंत्रित करता है।"
    },
    {
      qEn: "What mineral is essential for the synthesis of thyroxine by the thyroid gland?",
      qHi: "थायरॉयड ग्रंथि द्वारा थायरोक्सिन के संश्लेषण के लिए कौन सा खनिज आवश्यक है?",
      optionsEn: ["Iodine (आयोडीन)", "Iron", "Calcium", "Potassium"],
      optionsHi: ["आयोडीन (Iodine)", "आयरन", "कैल्शियम", "पोटेशियम"],
      answer: 0,
      exp: "Explanation (En): Iodine is a critical component required by the thyroid gland to produce thyroxine.\nस्पष्टीकरण (Hi): शरीर में थायरोक्सिन बनने के लिए आयोडीन सबसे जरूरी तत्व है।"
    },
    {
      qEn: "What deficiency disease is caused by a lack of iodine in the diet, characterized by enlargement of the thyroid gland?",
      qHi: "भोजन में आयोडीन की कमी से कौन सा रोग होता है जिसमें थायरॉयड ग्रंथि में सूजन आ जाती है (घेंघा रोग)?",
      optionsEn: ["Goiter (घेंघा)", "Diabetes mellitus", "Cretinism", "Addison's disease"],
      optionsHi: ["घेंघा या गॉयटर (Goiter)", "मधुमेह", "क्रिटिनिज़्म", "एडिसन रोग"],
      answer: 0,
      exp: "Explanation (En): Dietary iodine deficiency prevents adequate thyroxine synthesis, prompting the thyroid gland to enlarge, resulting in goiter.\nस्पष्टीकरण (Hi): आयोडीन की कमी से थायरॉयड ग्रंथि फूल जाती है जिसे घेंघा या गॉयटर (Goiter) कहते हैं।"
    },
    {
      qEn: "What condition is caused by severe deficiency of thyroid hormones during infancy and childhood, leading to stunted growth and mental retardation?",
      qHi: "शिशु अवस्था में थायरोक्सिन की भारी कमी से होने वाले उस रोग का नाम क्या है जिसमें शारीरिक और मानसिक विकास रुक जाता है?",
      optionsEn: ["Cretinism", "Myxedema", "Grave's disease", "Goiter"],
      optionsHi: ["क्रिटिनिज़्म (Cretinism)", "मिक्सोएडिमा", "ग्रेव्स रोग", "गॉयटर"],
      answer: 0,
      exp: "Explanation (En): Congenital hypothyroidism causes cretinism, marked by stunted physical growth and impaired intellectual development.\nस्पष्टीकरण (Hi): बचपन में थायरोक्सिन की कमी से बच्चों में क्रिटिनिज़्म नामक बौनापन और मानसिक मंदता हो जाती है।"
    },
    {
      qEn: "What disease is caused by hypersecretion (overactivity) of the thyroid gland, characterized by protruding eyeballs and high metabolism?",
      qHi: "थायरॉयड ग्रंथि के अत्यधिक स्राव (Hypersecretion) से होने वाले उस रोग का नाम क्या है जिसमें आँखें बाहर उभर आती हैं (एक्सोथेलमिक गॉयटर)?",
      optionsEn: ["Grave's disease (Exophthalmic goiter)", "Myxedema", "Cretinism", "Addison's disease"],
      optionsHi: ["ग्रेव्स रोग या एक्सोथेलमिक गॉयटर (Grave's disease)", "मिक्सोएडिमा", "क्रिटिनिज़्म", "एडिसन रोग"],
      answer: 0,
      exp: "Explanation (En): Grave's disease is an autoimmune disorder leading to an overactive thyroid, weight loss, rapid heartbeat, and protruding eyes.\nस्पष्टीकरण (Hi): ग्रेव्स रोग थायरॉयड के अतिस्राव से होता है जिसमें आँखें बाहर की ओर उभर आती हैं और वजन घटने लगता है।"
    },
    {
      qEn: "Which hormone is secreted by the beta cells of the Islets of Langerhans in the pancreas to lower blood glucose levels?",
      qHi: "रक्त शर्करा के स्तर को कम करने के लिए अग्नाशय के लैंगरहैंस की द्वीपिकाओं की बीटा कोशिकाओं द्वारा कौन सा हॉर्मोन स्रावित होता है?",
      optionsEn: ["Insulin", "Glucagon", "Somatostatin", "Thyroxine"],
      optionsHi: ["इंसुलिन (Insulin)", "ग्लूकागन", "सोमाटोस्टेटिन", "थायरोक्सिन"],
      answer: 0,
      exp: "Explanation (En): Insulin promotes the uptake of glucose into cells from the bloodstream, thereby lowering blood sugar levels.\nस्पष्टीकरण (Hi): इंसुलिन रक्त में ग्लूकोज की मात्रा को नियंत्रित कर उसे कम करता है (बीटा कोशिकाओं द्वारा स्रावित)।"
    },
    {
      qEn: "Which hormone is secreted by the alpha cells of the pancreas to increase blood glucose levels when needed?",
      qHi: "जरूरत पड़ने पर रक्त शर्करा का स्तर बढ़ाने के लिए अग्नाशय की अल्फा कोशिकाओं द्वारा कौन सा हॉर्मोन स्रावित होता है?",
      optionsEn: ["Glucagon", "Insulin", "Adrenaline", "Cortisol"],
      optionsHi: ["ग्लूकागन (Glucagon)", "इंसुलिन", "एड्रेनलिन", "कॉर्टिसोल"],
      answer: 0,
      exp: "Explanation (En): Glucagon stimulates the breakdown of liver glycogen into glucose, raising blood sugar levels.\nस्पष्टीकरण (Hi): ग्लूकागन ग्लाइकोजन को ग्लूकोज में बदलकर रक्त में शर्करा का स्तर बढ़ाता है।"
    },
    {
      qEn: "What disease is caused by a deficiency of insulin or insulin resistance, leading to high blood sugar?",
      qHi: "इंसुलिन की कमी या उसके प्रतिरोध के कारण रक्त में शर्करा बढ़ने से होने वाले रोग का नाम क्या है?",
      optionsEn: ["Diabetes mellitus (मधुमेह)", "Diabetes insipidus", "Goiter", "Addison's disease"],
      optionsHi: ["डाइबेटीस मेलिटस या मधुमेह (Diabetes mellitus)", "डाइबेटीस इनसिपिडस", "गॉयटर", "एडिसन रोग"],
      answer: 0,
      exp: "Explanation (En): Diabetes mellitus results from insufficient insulin production or cellular resistance, causing chronic hyperglycemia.\nस्पष्टीकरण (Hi): इंसुलिन की कमी से शरीर में शर्करा पच नहीं पाती और मधुमेह (Diabetes mellitus) हो जाता है।"
    },
    {
      qEn: "What condition is caused by a deficiency of antidiuretic hormone (ADH / vasopressin), leading to excessive thirst and dilute urination?",
      qHi: "एंटीडियूरेटिक हॉर्मोन (ADH / वासोप्रेसिन) की कमी से होने वाले उस रोग का नाम क्या है जिसमें अत्यधिक प्यास लगती है और बार-बार पतला पेशाब आता है?",
      optionsEn: ["Diabetes insipidus", "Diabetes mellitus", "Addison's disease", "Cushing's syndrome"],
      optionsHi: ["डाइबेटीस इनसिपिडस (Diabetes insipidus)", "डाइबेटीस मेलिटस", "एडिसन रोग", "कुशिंग सिंड्रोम"],
      answer: 0,
      exp: "Explanation (En): Deficiency of ADH from the posterior pituitary causes the kidneys to fail in reabsorbing water, resulting in excessive urine output (diabetes insipidus).\nस्पष्टीकरण (Hi): ADH की कमी से पानी का पुनरावशोषण रुक जाता है जिससे बार-बार पेशाब आता है (डाइबेटीस इनसिपिडस)।"
    },
    {
      qEn: "Which gland produces emergency hormones like adrenaline and noradrenaline?",
      qHi: "कौन सी ग्रंथि 'आपातकालीन हॉर्मोन' जैसे एड्रेनलिन और नॉरएड्रेनलिन का स्राव करती है?",
      optionsEn: ["Adrenal gland (suprarenal gland)", "Thyroid gland", "Pituitary gland", "Pineal gland"],
      optionsHi: ["एड्रेनल ग्रंथि या अधिवृक्क ग्रंथि (Adrenal gland)", "थायरॉयड ग्रंथि", "पीयूष ग्रंथि", "पीनियल ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): Adrenal glands sit atop the kidneys and secrete adrenaline (epinephrine), preparing the body for 'fight or flight' stress responses.\nस्पष्टीकरण (Hi): गुर्दों के ऊपर स्थित एड्रेनल ग्रंथियां संकटकालीन समय के लिए एड्रेनलिन (फाइट या फ्लाइट हॉर्मोन) निकालती हैं।"
    },
    {
      qEn: "What are adrenaline and noradrenaline commonly referred to as due to their function in emergency situations?",
      qHi: "आपातकालीन स्थितियों में कार्य करने के कारण एड्रेनलिन और नॉरएड्रेनलिन को सामान्यतः किस नाम से जाना जाता है?",
      optionsEn: ["Emergency hormones / 3F hormones (Flight, Fight, Fright)", "Growth hormones", "Sleep hormones", "Sex hormones"],
      optionsHi: ["आपातकालीन हॉर्मोन या 3F हॉर्मोन (Flight, Fight, Fright)", "वृद्धि हॉर्मोन", "नींद वाले हॉर्मोन", "लिंग हॉर्मोन"],
      answer: 0,
      exp: "Explanation (En): Adrenaline is known as the 3F hormone (Flight, Fright, Fight) as it activates instant physical responses to stress.\nस्पष्टीकरण (Hi): इन्हें 3F हॉर्मोन (Flight, Fight, Fright - डर, गुस्सा, भागना) भी कहा जाता है।"
    },
    {
      qEn: "Which hormone regulates the sleep-wake cycle (circadian rhythm) and is secreted by the pineal gland?",
      qHi: "नींद-जागने के चक्र (सर्कैडियन रिदम) को नियंत्रित करने वाला और पीनियल ग्रंथि द्वारा स्रावित होने वाला हॉर्मोन कौन सा है?",
      optionsEn: ["Melatonin", "Melanocyte stimulating hormone", "Thyroxine", "Oxytocin"],
      optionsHi: ["मेलाटोनिन (Melatonin)", "मेलानोसाइट उत्तेجक हॉर्मोन", "थायरोक्सिन", "ऑक्सीटोसिन"],
      answer: 0,
      exp: "Explanation (En): The pineal gland secretes melatonin in response to darkness, helping regulate human biological clocks and sleep patterns.\nस्पष्टीकरण (Hi): पीनियल ग्रंथि द्वारा स्रावित मेलाटोनिन हमारे शरीर की सोने-जागने की घड़ी (Circadian rhythm) को नियंत्रित करता है।"
    },
    {
      qEn: "Which hormone is responsible for milk ejection from mammary glands and uterine contractions during childbirth?",
      qHi: "प्रसव के दौरान गर्भाशय के संकुचन और स्तन ग्रंथियों से दूध के निष्कासन के लिए कौन सा हॉर्मोन जिम्मेदार है?",
      optionsEn: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
      optionsHi: ["ऑक्सीटोसिन (Oxytocin)", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
      answer: 0,
      exp: "Explanation (En): Oxytocin stimulates uterine muscle contractions during labor and milk let-down reflex during breastfeeding.\nस्पष्टीकरण (Hi): ऑक्सीटोसिन प्रसव पीड़ा और स्तनपान के समय दूध बाहर निकालने में मदद करता है (बर्थ हॉर्मोन)।"
    },
    {
      qEn: "Which hormone stimulates milk production in mammary glands after childbirth?",
      qHi: "बच्चे के जन्म के बाद स्तन ग्रंथियों में दुग्ध उत्पादन (milk production) को कौन सा हॉर्मोन उत्तेजित करता है?",
      optionsEn: ["Prolactin (LTH)", "Oxytocin", "Progesterone", "Luteinizing hormone"],
      optionsHi: ["प्रोलैक्टिन या लैक्टोजेनिक हॉर्मोन (Prolactin)", "ऑक्सीटोसिन", "प्रोजेस्टेरोन", "लutenizing हॉर्मोन"],
      answer: 0,
      exp: "Explanation (En): Prolactin, secreted by the anterior pituitary, specifically stimulates milk synthesis in mammary glands.\nस्पष्टीकरण (Hi): पीयूष ग्रंथि से निकलने वाला प्रोलैक्टिन हॉर्मोन माताओं में दूध के निर्माण को बढ़ावा देता है।"
    },
    {
      qEn: "Which gland in children plays a major role in the development of the immune system and gradually shrinks after puberty?",
      qHi: "बच्चों में प्रतिरक्षा तंत्र के विकास में मुख्य भूमिका निभाने वाली और युवावस्था के बाद धीरे-धीरे सिकुड़ जाने वाली ग्रंथि कौन सी है?",
      optionsEn: ["Thymus gland", "Thyroid gland", "Pineal gland", "Adrenal gland"],
      optionsHi: ["थाइमस ग्रंथि (Thymus gland)", "थायरॉयड ग्रंथि", "पीनियल ग्रंथि", "एड्रेनल ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The thymus gland secretes thymosin, aiding T-cell maturation, and is prominent in children before shrinking in adults.\nस्पष्टीकरण (Hi): थाइमस ग्रंथि टी-लिम्फोसाइट्स के परिपक्व होने में मदद करती है और उम्र बढ़ने के साथ यह छोटी हो जाती है।"
    },
    {
      qEn: "Which male sex hormone (androgen) is primarily responsible for the development of secondary sexual characters in men?",
      qHi: "पुरुषों में द्वितीयक लैंगिक लक्षणों के विकास के लिए मुख्य रूप से कौन सा पुरुष हॉर्मोन जिम्मेदार है?",
      optionsEn: ["Testosterone", "Estrogen", "Progesterone", "Relaxin"],
      optionsHi: ["टेस्टोस्टेरोन (Testosterone)", "एस्ट्रोजन", "प्रोजेस्टेरोन", "रिलैक्सिन"],
      answer: 0,
      exp: "Explanation (En): Testosterone is produced by the testes and controls male reproductive development and secondary sex characteristics.\nस्पष्टीकरण (Hi): टेस्टोस्टेरोन मुख्य नर हॉर्मोन है जो वृषण (Testes) द्वारा स्रावित होता है।"
    },
    {
      qEn: "Which primary female sex hormones are secreted by the ovaries?",
      qHi: "अंडाशय (Ovaries) द्वारा स्रावित होने वाले प्रमुख महिला सेक्स हॉर्मोन कौन से हैं?",
      optionsEn: ["Estrogen and Progesterone", "Testosterone and Androgen", "Insulin and Glucagon", "Thyroxine and Calcitonin"],
      optionsHi: ["एस्ट्रोजन और प्रोजेस्टेरोन (Estrogen and Progesterone)", "टेस्टोस्टेरोन और एंड्रोजन", "इंसुलिन और ग्लूकागन", "थायरोक्सिन और कैल्सीटोनिन"],
      answer: 0,
      exp: "Explanation (En): Estrogen and progesterone regulate the female menstrual cycle, pregnancy, and secondary sexual characteristics.\nस्पष्टीकरण (Hi): एस्ट्रोजन और प्रोजेस्टेरोन महिलाओं के प्रमुख हॉर्मोन हैं जो मासिक धर्म और गर्भावस्था को नियंत्रित करते हैं।"
    },
    {
      qEn: "What is dwarfism caused by?",
      qHi: "बौनापन (Dwarfism) किस हॉर्मोन की कमी के कारण होता है?",
      optionsEn: ["Deficiency of Growth Hormone (GH) during childhood", "Excess of Growth Hormone", "Deficiency of Insulin", "Excess of Thyroxine"],
      optionsHi: ["बचपन में वृद्धि हॉर्मोन (GH) की कमी", "वृद्धि हॉर्मोन की अधिकता", "इंसुलिन की कमी", "थायरोक्सिन की अधिकता"],
      answer: 0,
      exp: "Explanation (En): Under-secretion of growth hormone from the anterior pituitary during growing years results in pituitary dwarfism.\nस्पष्टीकरण (Hi): बचपन में ग्रोथ हॉर्मोन (GH) के कम स्राव से शरीर की लंबाई रुक जाती है जिसे बौनापन कहते हैं।"
    },
    {
      qEn: "What condition is caused by hypersecretion of Growth Hormone during childhood, leading to abnormal giant height?",
      qHi: "बचपन में वृद्धि हॉर्मोन के अतिस्राव से होने वाली अत्यधिक लंबाई की स्थिति को क्या कहते हैं?",
      optionsEn: ["Gigantism (अतिकायता)", "Acromegaly", "Cretinism", "Goiter"],
      optionsHi: ["जायंटिज्म या अतिकायता (Gigantism)", "एक्रोमेगाली", "क्रिटिनिज़्म", "गॉयटर"],
      answer: 0,
      exp: "Explanation (En): Excess growth hormone before bone fusion causes gigantism, characterized by extreme height and bone growth.\nस्पष्टीकरण (Hi): ग्रोथ हॉर्मोन बहुत ज्यादा निकलने से व्यक्ति बहुत लंबा (Gigantism) हो जाता है।"
    },
    {
      qEn: "What condition is caused by overproduction of growth hormone in adults, leading to enlargement of bones in the face, hands, and feet?",
      qHi: "वयस्कों में वृद्धि हॉर्मोन के अतिस्राव से चेहरे, हाथों और पैरों की हड्डियों के असामान्य रूप से बढ़ने वाले रोग को क्या कहते हैं?",
      optionsEn: ["Acromegaly", "Gigantism", "Cushing's syndrome", "Addison's disease"],
      optionsHi: ["एक्रोमेगाली (Acromegaly)", "जायंटिज्म", "कुशिंग सिंड्रोम", "एडिसन रोग"],
      answer: 0,
      exp: "Explanation (En): Acromegaly occurs when excess GH is produced after growth plate closure in adults, enlarging facial features and extremities.\nस्पष्टीकरण (Hi): वयस्कों में GH बढ़ने से हाथ-पैर और जबड़े की हड्डियां असामान्य रूप से चौड़ी हो जाती हैं जिसे एक्रोमेगाली कहते हैं।"
    },
    {
      qEn: "Which hormone regulates calcium and phosphate levels in the blood by stimulating bone resorption?",
      qHi: "हड्डियों से कैल्शियम निकालकर रक्त में कैल्शियम और फॉस्फेट के स्तर को नियंत्रित करने वाला हॉर्मोन कौन सा है?",
      optionsEn: ["Parathyroid hormone (Parathormone / PTH)", "Insulin", "Melatonin", "Thymosin"],
      optionsHi: ["पैराथॉर्मोन या PTH (Parathyroid hormone)", "इंसुलिन", "मेलाटोनिन", "थायमोसिन"],
      answer: 0,
      exp: "Explanation (En): Parathyroid hormone increases blood calcium levels by releasing calcium from bones and enhancing kidney reabsorption.\nस्पष्टीकरण (Hi): पैराथाइरॉयड ग्रंथि से निकलने वाला पैराथॉर्मोन (PTH) रक्त में कैल्शियम की मात्रा को बढ़ाता है।"
    },
    {
      qEn: "What is Addison's disease caused by?",
      qHi: "एडिसन रोग (Addison's disease) किस ग्रंथि के हॉर्मोन्स की कमी से होता है?",
      optionsEn: ["Undersecretion of hormones from the adrenal cortex (cortisol and aldosterone)", "Hypersecretion of thyroid", "Insulin deficiency", "Pituitary failure"],
      optionsHi: ["एड्रेनल कॉर्टेक्स के हॉर्मोन्स (कॉर्टिसोल और एल्डोस्टेरोन) की कमी से", "थायरॉयड के अतिस्राव से", "इंसुलिन की कमी से", "पिट्यूटरी विफलता से"],
      answer: 0,
      exp: "Explanation (En): Addison's disease results from adrenal cortex insufficiency, leading to fatigue, low blood pressure, and skin bronzing.\nस्पष्टीकरण (Hi): एड्रेनल कॉर्टेक्स से हॉर्मोन कम निकलने पर एडिसन रोग होता है जिससे कमजोरी और त्वचा का रंग काला पड़ने लगता है।"
    },
    {
      qEn: "What syndrome is caused by the overproduction of cortisol by the adrenal cortex?",
      qHi: "एड्रेनल कॉर्टेक्स द्वारा कॉर्टिसोल के अत्यधिक उत्पादन से होने वाले सिंड्रोम का नाम क्या है?",
      optionsEn: ["Cushing's syndrome", "Addison's disease", "Grave's disease", "Conn's syndrome"],
      optionsHi: ["कुशिंग सिंड्रोम (Cushing's syndrome)", "एडिसन रोग", "ग्रेव्स रोग", "कॉन्स सिंड्रोम"],
      answer: 0,
      exp: "Explanation (En): Cushing's syndrome is characterized by upper body obesity, round 'moon' face, and high blood pressure due to excess cortisol.\nस्पष्टीकरण (Hi): कॉर्टिसोल हार्मोन की अधिकता से कुशिंग सिंड्रोम होता है जिसमें चेहरे पर सूजन (मून फेस) और मोटापा बढ़ता है।"
    },
    {
      qEn: "Which hormone has anti-inflammatory properties and helps the body cope with stress?",
      qHi: "किस हॉर्मोन में सूजन-रोधी (anti-inflammatory) गुण होते हैं और यह शरीर को तनाव से निपटने में मदद करता है?",
      optionsEn: ["Cortisol", "Insulin", "Thyroxine", "Vasopressin"],
      optionsHi: ["कॉर्टिसोल (Cortisol)", "इंसुलिन", "थायरोक्सिन", "वासopressin"],
      answer: 0,
      exp: "Explanation (En): Cortisol is a glucocorticoid steroid hormone released during stress that suppresses inflammation and regulates metabolism.\nस्पष्टीकरणेड (Hi): कॉर्टिसोल एक ग्लूकोकॉर्टिकोइड हॉर्मोन है जो तनाव प्रबंधन और सूजन को नियंत्रित करने में सहायक है।"
    },
    {
      qEn: "What is the function of calcitonin secreted by the thyroid gland?",
      qHi: "थायरॉयड ग्रंथि द्वारा स्रावित 'कैल्सीटोनिन' (Calcitonin) हॉर्मोन का मुख्य कार्य क्या है?",
      optionsEn: ["Lowers blood calcium levels by inhibiting bone breakdown", "Raises blood calcium levels", "Increases blood sugar", "Stimulates milk production"],
      optionsHi: ["हड्डियों के टूटने को रोककर रक्त में कैल्शियम के स्तर को कम करना", "रक्त में कैल्शियम बढ़ाना", "ब्लड शुगर बढ़ाना", "दूध उत्पादन उत्तेजित करना"],
      answer: 0,
      exp: "Explanation (En): Calcitonin acts antagonistically to PTH by lowering blood calcium and promoting calcium deposition in bones.\nस्पष्टीकरण (Hi): कैल्सीटोनिन रक्त में अधिक कैल्शियम को हड्डियों में जमा कर देता है जिससे रक्त में कैल्शियम का स्तर कम हो जाता है।"
    },
    {
      qEn: "Which endocrine gland is located just above the heart in the chest cavity and degenerates with age?",
      qHi: "वक्ष गुहा में हृदय के ठीक ऊपर स्थित और उम्र के साथ लुप्त होने वाली अंतःस्रावी ग्रंथि कौन सी है?",
      optionsEn: ["Thymus gland", "Thyroid gland", "Adrenal gland", "Pineal gland"],
      optionsHi: ["थाइमस ग्रंथि (Thymus gland)", "थायरॉयड ग्रंथि", "एड्रेनल ग्रंथि", "पीनियल ग्रंथि"],
      answer: 0,
      exp: "Explanation (En): The thymus is situated in the upper anterior chest behind the sternum and is crucial for T-lymphocyte maturation.\nस्पष्टीकरण (Hi): थाइमस ग्रंथि सीने में हृदय के पास होती है जो प्रतिरक्षा प्रणाली (Immune system) को मजबूत बनाती है।"
    }
  ],
    "Vitamins and Diseases": [
    {
      qEn: "Who coined the term 'vitamin' and discovered that accessory food factors are essential for life?",
      qHi: "'विटामिन' (Vitamin) शब्द सबसे पहले किसने दिया था और यह खोज की थी कि ये सहायक खाद्य कारक जीवन के लिए आवश्यक हैं?",
      optionsEn: ["Casimir Funk", "Frederick Gowland Hopkins", "Christiaan Eijkman", "Elmer McCollum"],
      optionsHi: ["कासिमिर फंक (Casimir Funk)", "फ्रेडरिक गोलैंड हॉपकिंस", "क्रिश्चियन इज्कमैन", "एल्मर मैक्कुलम"],
      answer: 0,
      exp: "Explanation (En): Casimir Funk coined the term 'vitamine' in 1912 after isolating a complex of micronutrients essential for preventing deficiency diseases.\nस्पष्टीकरण (Hi): कासिमिर फंक ने 1912 में 'विटामिन' शब्द गढ़ा था। हॉपकिंस के साथ उन्हें विटामिन खोज का श्रेय जाता है।"
    },
    {
      qEn: "Which of the following are fat-soluble vitamins?",
      qHi: "निम्नलिखित में से कौन से विटामिन वसा में घुलनशील (fat-soluble) हैं?",
      optionsEn: ["Vitamins A, D, E, and K", "Vitamins B and C", "Vitamin C and K", "Vitamins B complex only"],
      optionsHi: ["विटामिन A, D, E और K", "विटामिन B और C", "विटामिन C और K", "केवल विटामिन B कॉम्प्लेक्स"],
      answer: 0,
      exp: "Explanation (En): Vitamins A, D, E, and K dissolve in fats and oils and can be stored in the liver and fatty tissues.\nस्पष्टीकरण (Hi): विटामिन A, D, E और K वसा में घुलनशील होते हैं, जबकि विटामिन B और C पानी में घुलनशील होते हैं।"
    },
    {
      qEn: "Which of the following are water-soluble vitamins?",
      qHi: "निम्नलिखित में से कौन से विटामिन पानी में घुलनशील (water-soluble) हैं?",
      optionsEn: ["Vitamins B and C", "Vitamins A, D, E, K", "Vitamins A and C", "Vitamins D and B"],
      optionsHi: ["विटामिन B और C", "विटामिन A, D, E, K", "विटामिन A और C", "विटामिन D और B"],
      answer: 0,
      exp: "Explanation (En): Water-soluble vitamins like Vitamin C and the B-complex group cannot be stored in the body and are excreted in urine.\nस्पष्टीकरण (Hi): पानी में घुलनशील विटामिन शरीर में स्टोर नहीं होते और मूत्र के साथ बाहर निकल जाते हैं।"
    },
    {
      qEn: "What is the chemical name of Vitamin A?",
      qHi: "विटामिन A का रासायनिक नाम क्या है?",
      optionsEn: ["Retinol", "Thiamine", "Ascorbic acid", "Calciferol"],
      optionsHi: ["रेटिनॉल (Retinol)", "थायमिन", "एस्कॉर्बिक अम्ल", "कैल्सीफेरॉल"],
      answer: 0,
      exp: "Explanation (En): Vitamin A is chemically known as retinol, essential for good vision, immune function, and skin health.\nस्पष्टीकरण (Hi): विटामिन A का रासायनिक नाम रेटिनॉल है जो आँखों की रोशनी के लिए सबसे जरूरी है।"
    },
    {
      qEn: "What deficiency disease is caused by lack of Vitamin A?",
      qHi: "विटामिन A की कमी से कौन सा रोग होता है?",
      optionsEn: ["Night blindness (Nyctalopia) and Xerophthalmia", "Beriberi", "Scurvy", "Rickets"],
      optionsHi: ["रतौंधी (Night blindness) और जीरोफथैल्मिया", "बेरीबेरी", "स्कर्वी", "रिकेट्स"],
      answer: 0,
      exp: "Explanation (En): Vitamin A deficiency leads to night blindness (inability to see in dim light) and drying of the cornea (xerophthalmia).\nस्पष्टीकरण (Hi): विटामिन A की कमी से रात में कम दिखना (रतौंधी) और आँखें सूखने की बीमारी (जीरोफथैल्मिया) होती है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B1?",
      qHi: "विटामिन B1 का रासायनिक नाम क्या है?",
      optionsEn: ["Thiamine", "Riboflavin", "Niacin", "Cobalamin"],
      optionsHi: ["थायमिन (Thiamine)", "राइबोफ्लेविन", "नियासिन", "कोबामिन"],
      answer: 0,
      exp: "Explanation (En): Vitamin B1 is thiamine, playing a vital role in carbohydrate metabolism and nerve function.\nस्पष्टीकरण (Hi): विटामिन B1 का रासायनिक नाम थायमिन है।"
    },
    {
      qEn: "What deficiency disease is caused by a lack of Vitamin B1 (Thiamine)?",
      qHi: "विटामिन B1 (थायमिन) की कमी से कौन सा रोग होता है?",
      optionsEn: ["Beriberi", "Scurvy", "Pellagra", "Rickets"],
      optionsHi: ["बेरीबेरी (Beriberi)", "स्कर्वी", "पेलाग्रा", "रिकेट्स"],
      answer: 0,
      exp: "Explanation (En): Beriberi is a neurological and cardiovascular disease caused by thiamine deficiency, common in diets reliant on polished rice.\nस्पष्टीकरण (Hi): थायमिन की कमी से बेरीबेरी रोग होता है जिसमें तंत्रिका तंत्र और मांसपेशियां कमजोर हो जाती हैं।"
    },
    {
      qEn: "What is the chemical name of Vitamin C?",
      qHi: "विटामिन C का रासायनिक नाम क्या है?",
      optionsEn: ["Ascorbic acid", "Citric acid", "Folic acid", "Amino acid"],
      optionsHi: ["एस्कॉर्बिक अम्ल (Ascorbic acid)", "साइट्रिक अम्ल", "फोलिक अम्ल", "अमीनो अम्ल"],
      answer: 0,
      exp: "Explanation (En): Vitamin C is ascorbic acid, acting as a powerful antioxidant and crucial for collagen synthesis.\nस्पष्टीकरण (Hi): विटामिन C का रासायनिक नाम एस्कॉर्बिक अम्ल है जो खट्टे फलों में प्रचुर मात्रा में मिलता है।"
    },
    {
      qEn: "What deficiency disease is caused by a lack of Vitamin C?",
      qHi: "विटामिन C की कमी से कौन सा रोग होता है?",
      optionsEn: ["Scurvy (bleeding gums)", "Beriberi", "Rickets", "Night blindness"],
      optionsHi: ["स्कर्वी - मसूड़ों से खून आना (Scurvy)", "बेरीबेरी", "रिकेट्स", "रतौंधी"],
      answer: 0,
      exp: "Explanation (En): Scurvy is characterized by swollen, bleeding gums, joint pain, and poor wound healing due to defective collagen.\nस्पष्टीकरण (Hi): विटामिन C की कमी से स्कर्वी रोग होता है जिसमें मसूड़ों से खून आता है और घाव जल्दी नहीं भरते।"
    },
    {
      qEn: "What is the chemical name of Vitamin D?",
      qHi: "विटामिन D का रासायनिक नाम क्या है?",
      optionsEn: ["Calciferol", "Retinol", "Tocopherol", "Phylloquinone"],
      optionsHi: ["कैल्सीफेरॉल (Calciferol)", "रेटिनॉल", "टोकोफेरॉल", "फाइलोक्विनोन"],
      answer: 0,
      exp: "Explanation (En): Vitamin D is calciferol, synthesized in skin upon exposure to sunlight and essential for calcium absorption.\nस्पष्टीकरण (Hi): विटामिन D को कैल्सीफेरॉल कहते हैं जो हड्डियों के लिए कैल्शियम सोखने में मदद करता है।"
    },
    {
      qEn: "What deficiency disease is caused by lack of Vitamin D in children?",
      qHi: "बच्चों में विटामिन D की कमी से कौन सा रोग होता है?",
      optionsEn: ["Rickets (softening and weakening of bones)", "Osteomalacia", "Scurvy", "Beriberi"],
      optionsHi: ["रिकेट्स या सूखा रोग (हड्डियों का कमजोर होना)", "ऑस्टियोमलेशिया", "स्कर्वी", "बेरीबेरी"],
      answer: 0,
      exp: "Explanation (En): Rickets affects bone development in children due to impaired calcium and phosphorus metabolism, causing skeletal deformities (bowed legs).\nस्पष्टीकरण (Hi): बच्चों में विटामिन D की कमी से हड्डियां कमजोर और मुड़ जाती हैं जिसे रिकेट्स (सूखा रोग) कहते हैं।"
    },
    {
      qEn: "What is the adult counterpart of rickets caused by Vitamin D deficiency?",
      qHi: "वयस्कों में विटामिन D की कमी से होने वाले रिकेट्स जैसे रोग को क्या कहा जाता है?",
      optionsEn: ["Osteomalacia", "Osteoporosis", "Arthritis", "Gout"],
      optionsHi: ["ऑस्टियोमलेशिया (Osteomalacia)", "ऑस्टियोपोरोसिस", "गठिया", "गाउट"],
      answer: 0,
      exp: "Explanation (En): Osteomalacia is the softening of bones in adults due to vitamin D or calcium deficiency.\nस्पष्टीकरण (Hi): वयस्कों में हड्डियों के नरम होने की इस स्थिति को ऑस्टियोमलेशिया (Osteomalacia) कहते हैं।"
    },
    {
      qEn: "What is the chemical name of Vitamin E?",
      qHi: "विटामिन E का रासायनिक नाम क्या है?",
      optionsEn: ["Tocopherol", "Calciferol", "Ascorbic acid", "Retinol"],
      optionsHi: ["टोकोफेरॉल (Tocopherol)", "कैल्सीफेरॉल", "एस्कॉर्बिक अम्ल", "रेटिनॉल"],
      answer: 0,
      exp: "Explanation (En): Vitamin E is tocopherol, acting as an antioxidant that protects cell membranes and promotes reproductive health.\nस्पष्टीकरण (Hi): विटामिन E का रासायनिक नाम टोकोफेरॉल है जिसे ब्यूटी विटामिन भी कहा जाता है जो प्रजनन स्वास्थ्य के लिए जरूरी है।"
    },
    {
      qEn: "Which vitamin is known as the 'beauty vitamin' or anti-sterility vitamin?",
      qHi: "किस विटामिन को 'ब्यूटी विटामिन' या बांझपन रोधी विटामिन (anti-sterility vitamin) कहा जाता है?",
      optionsEn: ["Vitamin E", "Vitamin A", "Vitamin C", "Vitamin K"],
      optionsHi: ["विटामिन E", "विटामिन A", "विटामिन C", "विटामिन K"],
      answer: 0,
      exp: "Explanation (En): Vitamin E helps maintain normal reproductive capacity and healthy skin, earning it these nicknames.\nस्पष्टीकरण (Hi): प्रजनन क्षमता को बनाए रखने और त्वचा की चमक के लिए विटामिन E को जाना जाता है।"
    },
    {
      qEn: "What is the chemical name of Vitamin K?",
      qHi: "विटामिन K का रासायनिक नाम क्या है?",
      optionsEn: ["Phylloquinone (Naphthoquinone)", "Tocopherol", "Thiamine", "Riboflavin"],
      optionsHi: ["फाइलोक्विनोन (Phylloquinone)", "टोकोफेरॉल", "थायमिन", "राइबोफ्लेविन"],
      answer: 0,
      exp: "Explanation (En): Vitamin K (phylloquinone/menaquinone) is essential for the synthesis of blood clotting proteins in the liver.\nस्पष्टीकरण (Hi): विटामिन K का रासायनिक नाम फाइलोक्विनोन है जो रक्त का थक्का जमाने में मदद करता है।"
    },
    {
      qEn: "What is the deficiency symptom of Vitamin K?",
      qHi: "विटामिन K की कमी का मुख्य लक्षण क्या है?",
      optionsEn: ["Failure of blood to clot properly (excessive bleeding)", "Night blindness", "Bleeding gums", "Bone softening"],
      optionsHi: ["रक्त का थक्का न जमना (अत्यधिक रक्तस्राव)", "रतौंधी", "मसूड़ों से खून", "हड्डियों का नरम होना"],
      answer: 0,
      exp: "Explanation (En): Without adequate vitamin K, blood coagulation is severely impaired, leading to prolonged bleeding from minor cuts.\nस्पष्टीकरण (Hi): विटामिन K की कमी होने पर चोट लगने पर खून का थक्का नहीं जमता और अत्यधिक खून बह सकता है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B12?",
      qHi: "विटामिन B12 का रासायनिक नाम क्या है?",
      optionsEn: ["Cyanocobalamin", "Riboflavin", "Pyridoxine", "Folic acid"],
      optionsHi: ["सायनाकोबामिन (Cyanocobalamin)", "राइबोफ्लेविन", "पाइरिडोक्सिन", "फोलिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Cyanocobalamin contains the rare transition metal cobalt and is essential for red blood cell formation and nervous system.\nस्पष्टीकरण (Hi): विटामिन B12 में कोबाल्ट धातु पाई जाती है, इसका रासायनिक नाम सायनाकोबामिन है।"
    },
    {
      qEn: "Which disease is caused by a deficiency of Vitamin B12?",
      qHi: "विटामिन B12 की कमी से कौन सा रोग होता है?",
      optionsEn: ["Pernicious anemia", "Beriberi", "Scurvy", "Rickets"],
      optionsHi: ["परनिशियस एनीमिया (Pernicious anemia)", "बेरीबेरी", "स्कर्वी", "रिकेट्स"],
      answer: 0,
      exp: "Explanation (En): Pernicious anemia is a type of megaloblastic anemia caused by inability to absorb vitamin B12 properly.\nस्पष्टीकरण (Hi): विटामिन B12 की कमी से परनिशियस एनीमिया (घातक रक्ताल्पता) और तंत्रिका तंत्र की खराबी होती है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B2?",
      qHi: "विटामिन B2 का रासायनिक नाम क्या है?",
      optionsEn: ["Riboflavin", "Thiamine", "Niacin", "Biotin"],
      optionsHi: ["राइबोफ्लेविन (Riboflavin)", "थायमिन", "नियासिन", "बायोटिन"],
      answer: 0,
      exp: "Explanation (En): Vitamin B2 is riboflavin, essential for body growth and red blood cell production.\nस्पष्टीकरण (Hi): विटामिन B2 का रासायनिक नाम राइबोफ्लेविन है।"
    },
    {
      qEn: "What deficiency symptoms are associated with Vitamin B2 (Riboflavin) deficiency?",
      qHi: "विटामिन B2 (राइबोफ्लेविन) की कमी से कौन से लक्षण उत्पन्न होते हैं?",
      optionsEn: ["Cheilosis (cracked lips/mouth corners), sore throat, and inflamed tongue", "Bleeding gums", "Soft bones", "Night blindness"],
      optionsHi: ["काइलोसिस (मुंह के कोने फटना), गले में खराश और जीभ की सूजन", "मसूड़ों से खून", "मुलायम हड्डियां", "रतौंधी"],
      answer: 0,
      exp: "Explanation (En): Riboflavin deficiency causes cheilosis (fissures at mouth corners), glossitis, and dermatitis.\nस्पष्टीकरण (Hi): विटामिन B2 की कमी से मुंह के किनारे फटना (काइलोसिस), जीभ लाल होना और त्वचा फटने लगती है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B3?",
      qHi: "विटामिन B3 का रासायनिक नाम क्या है?",
      optionsEn: ["Niacin (Nicotinic acid)", "Thiamine", "Riboflavin", "Folic acid"],
      optionsHi: ["नियासिन या निकोटिनिक अम्ल (Niacin)", "थायमिन", "राइबोफ्लेविन", "फोलिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Vitamin B3 is niacin, important for cellular metabolism and DNA repair.\nस्पष्टीकरण (Hi): विटामिन B3 का रासायनिक नाम नियासिन है।"
    },
    {
      qEn: "What deficiency disease is caused by a lack of Vitamin B3 (Niacin)?",
      qHi: "विटामिन B3 (नियासिन) की कमी से कौन सा रोग होता है?",
      optionsEn: ["Pellagra (the disease of 4 Ds: Diarrhea, Dermatitis, Dementia, Death)", "Beriberi", "Scurvy", "Rickets"],
      optionsHi: ["पेलाग्रा (Pellagra - 4D रोग: दस्त, त्वचा रोग, डिमेंशिया, मृत्यु)", "बेरीबेरी", "स्कर्वी", "रिकेट्स"],
      answer: 0,
      exp: "Explanation (En): Pellagra is caused by niacin deficiency, characterized by the 4 Ds: dermatitis, diarrhea, dementia, and if untreated, death.\nस्पष्टीकरण (Hi): नियासिन की कमी से पेलाग्रा रोग होता है जिसे 4D रोग (डर्मेटाइटिस, डायरिया, डिमेंशिया, डेथ) भी कहते हैं।"
    },
    {
      qEn: "What is the chemical name of Vitamin B5?",
      qHi: "विटामिन B5 का रासायनिक नाम क्या है?",
      optionsEn: ["Pantothenic acid", "Pyridoxine", "Biotin", "Folic acid"],
      optionsHi: ["पैंटोथैनिक अम्ल (Pantothenic acid)", "पाइरिडोक्सिन", "बायोटिन", "फोलिक अम्ल"],
      answer: 0,
      exp: "Explanation (En): Pantothenic acid is essential for synthesizing coenzyme A and metabolizing food.\nस्पष्टीकरण (Hi): विटामिन B5 का रासायनिक नाम पैंटोथैनिक अम्ल है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B6?",
      qHi: "विटामिन B6 का रासायनिक नाम क्या है?",
      optionsEn: ["Pyridoxine", "Riboflavin", "Thiamine", "Cobalamin"],
      optionsHi: ["पाइरिडोक्सिन (Pyridoxine)", "राइबोफ्लेविन", "थायमिन", "कोबामिन"],
      answer: 0,
      exp: "Explanation (En): Pyridoxine (Vitamin B6) is vital for amino acid metabolism, red blood cell production, and neurotransmitter synthesis.\nस्पष्टीकरण (Hi): विटामिन B6 का रासायनिक नाम पाइरिडोक्सिन है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B7 (often called Vitamin H)?",
      qHi: "विटामिन B7 (जिसे अक्सर विटामिन H भी कहा जाता है) का रासायनिक नाम क्या है?",
      optionsEn: ["Biotin", "Folic acid", "Ascorbic acid", "Niacin"],
      optionsHi: ["बायोटिन (Biotin)", "फोलिक अम्ल", "एस्कॉर्बिक अम्ल", "नियासिन"],
      answer: 0,
      exp: "Explanation (En): Biotin is crucial for metabolism of fatty acids and amino acids, and promotes healthy hair and nails.\nस्पष्टीकरण (Hi): बायोटिन (विटामिन B7) बालों और त्वचा की सेहत के साथ वसा और प्रोटीन मेटाबॉलिज्म के लिए जरूरी है।"
    },
    {
      qEn: "What is the chemical name of Vitamin B9?",
      qHi: "विटामिन B9 का रासायनिक नाम क्या है?",
      optionsEn: ["Folic acid (Folate)", "Cyanocobalamin", "Pantothenic acid", "Pyridoxine"],
      optionsHi: ["फोलिक अम्ल (Folic acid / Folate)", "सायनाकोबामिन", "पैंटोथैनिक अम्ल", "पाइरिडोक्सिन"],
      answer: 0,
      exp: "Explanation (En): Folic acid is critical for DNA synthesis and cell division, especially important during pregnancy to prevent neural tube defects.\nस्पष्टीकरण (Hi): फोलिक अम्ल डीएनए निर्माण और कोशिकाओं के विभाजन के लिए आवश्यक है, विशेषकर गर्भावस्था के दौरान।"
    },
    {
      qEn: "What deficiency disease is caused by a lack of Folic acid (Vitamin B9)?",
      qHi: "फोलिक अम्ल (विटामिन B9) की कमी से कौन सा मुख्य रोग होता है?",
      optionsEn: ["Megaloblastic anemia and neural tube defects in newborns", "Beriberi", "Scurvy", "Goiter"],
      optionsHi: ["मेगलोब्लास्टिक एनीमिया और नवजात शिशुओं में न्यूरल ट्यूब दोष", "बेरीबेरी", "स्कर्वी", "गॉयटर"],
      answer: 0,
      exp: "Explanation (En): Folate deficiency causes megaloblastic anemia and can lead to neural tube birth defects like spina bifida if deficient in early pregnancy.\nस्पष्टीकरण (Hi): फोलिक एसिड की कमी से मेगालोब्लास्टिक एनीमिया और गर्भस्थ शिशु में न्यूरल ट्यूब डिफेक्ट का खतरा रहता है।"
    },
    {
      qEn: "What are communicable (infectious) diseases?",
      qHi: "संक्रामक रोग (Communicable diseases) किन्हें कहते हैं?",
      optionsEn: ["Diseases that can be spread from one person to another (caused by pathogens like bacteria, viruses, fungi)", "Diseases caused by genetic mutations", "Diseases caused by mineral deficiency", "Lifestyle disorders like diabetes"],
      optionsHi: ["वे रोग जो एक व्यक्ति से दूसरे व्यक्ति में फैल सकते हैं (रोगाणुओं जैसे बैक्टीरिया, वायरस द्वारा)", "आनुवंशिक उत्परिवर्तन से होने वाले रोग", "खनिज की कमी से होने वाले रोग", "जीवनशैली संबंधी रोग"],
      answer: 0,
      exp: "Explanation (En): Infectious diseases are transmitted through air, water, contact, or vectors from an infected individual to a healthy person.\nस्पष्टीकरण (Hi): संक्रामक रोग बैक्टीरिया, वायरस, कवक या परजीवियों द्वारा एक व्यक्ति से दूसरे में फैलते हैं (जैसे सर्दी-जुकाम, कोविड, टीबी)।"
    },
    {
      qEn: "What are non-communicable (non-infectious) diseases?",
      qHi: "असंक्रामक रोग (Non-communicable diseases) क्या होते हैं?",
      optionsEn: ["Diseases that cannot be spread from person to person (e.g., cancer, diabetes, hypertension)", "Diseases caused by viruses", "Infectious bacterial diseases", "Diseases spread by mosquitoes"],
      optionsHi: ["वे रोग जो एक व्यक्ति से दूसरे व्यक्ति में नहीं फैलते (जैसे कैंसर, मधुमेह, उच्च रक्तचाप)", "वायरस से होने वाले रोग", "संक्रामक बैक्टीरियल रोग", "मच्छरों द्वारा फैलने वाले रोग"],
      answer: 0,
      exp: "Explanation (En): Non-communicable diseases stem from genetics, lifestyle, or environmental factors and are not contagious.\nस्पष्टीकरण (Hi): असंक्रामक रोग आपस में संपर्क से नहीं फैलते, बल्कि यह जीन, खानपान या जीवनशैली के कारण होते हैं (जैसे मधुमेह, कैंसर)।"
    },
    {
      qEn: "Which disease is caused by the Human Immunodeficiency Virus (HIV)?",
      qHi: "ह्यूमन इम्युनोडेफिशिएंसी वायरस (HIV) के कारण कौन सा रोग होता है?",
      optionsEn: ["AIDS (Acquired Immunodeficiency Syndrome)", "Tuberculosis", "Malaria", "Cholera"],
      optionsHi: ["एड्स (AIDS)", "तपेदिक (TB)", "मलेरिया", "हैजा"],
      answer: 0,
      exp: "Explanation (En): HIV attacks and destroys CD4+ T lymphocytes of the immune system, eventually leading to AIDS.\nस्पष्टीकरण (Hi): एचआईवी वायरस शरीर की रोग प्रतिरोधक क्षमता को कमजोर करता है जिससे अंततः एड्स (AIDS) होता है।"
    }
  ],
    "Respiratory System": [
    {
      qEn: "What is the primary organ of respiration in humans?",
      qHi: "मानव में श्वसन का प्राथमिक अंग कौन सा है?",
      optionsEn: ["Lungs (फेफड़े)", "Heart", "Kidneys", "Liver"],
      optionsHi: ["फेफड़े (Lungs)", "हृदय", "गुर्दे", "यकृत"],
      answer: 0,
      exp: "Explanation (En): The lungs are the primary respiratory organs responsible for gas exchange between the air and blood.\nस्पष्टीकरण (Hi): फेफड़े मानव शरीर के मुख्य श्वसन अंग हैं जहाँ हवा और रक्त के बीच गैसों का आदान-प्रदान होता है।"
    },
    {
      qEn: "What is the dome-shaped muscular partition that separates the thoracic cavity from the abdominal cavity?",
      qHi: "वक्ष गुहा (thoracic cavity) को उदर गुहा (abdominal cavity) से अलग करने वाली गुंबद के आकार की पेशीय दीवार क्या कहलाती है?",
      optionsEn: ["Diaphragm", "Pleura", "Intercostal muscle", "Epiglottis"],
      optionsHi: ["डायाफ्राम (Diaphragm)", "प्लुरा", "अंतरपर्शुक पेशी", "एपिग्लॉटिस"],
      answer: 0,
      exp: "Explanation (En): The diaphragm is a dome-shaped sheet of muscle that plays a major role in breathing by contracting and relaxing.\nस्पष्टीकरण (Hi): डायाफ्राम एक गुंबद के आकार की पेशी है जो सांस लेते और छोड़ते समय फैलती और सिकुड़ती है।"
    },
    {
      qEn: "What is the double-layered protective membrane surrounding the lungs called?",
      qHi: "फेफड़ों के चारों ओर पाई जाने वाली दोहरी सुरक्षात्मक झिल्ली को क्या कहा जाता है?",
      optionsEn: ["Pleura (प्लुरा)", "Pericardium", "Meninges", "Peritoneum"],
      optionsHi: ["प्लुरा या फुफ्फुसावरण (Pleura)", "पेरिकार्डियम", "मेनिन्जेस", "पेरिटोनियम"],
      answer: 0,
      exp: "Explanation (En): The pleura is a double-layered membrane that lubricates and protects the lungs during respiratory movements.\nस्पष्टीकरण (Hi): फेफड़ों को घेरने वाली दोहरी झिल्ली को प्लुरा (Pleura) कहते हैं जो घर्षण से बचाती है।"
    },
    {
      qEn: "What are the tiny air sacs in the lungs where actual gas exchange takes place called?",
      qHi: "फेफड़ों की उन सूक्ष्म वायु थैलियों को क्या कहा जाता है जहाँ वास्तविक गैसों का आदान-प्रदान होता है?",
      optionsEn: ["Alveoli (एल्वोलाई / वायु कोष्ठक)", "Bronchi", "Trachea", "Bronchioles"],
      optionsHi: ["एल्वोलाई या वायु कोष्ठक (Alveoli)", "ब्रॉन्काई", "ट्रेकिया", "ब्रॉन्कियोल"],
      answer: 0,
      exp: "Explanation (En): Alveoli provide a massive surface area with thin walls for rapid diffusion of oxygen into blood and carbon dioxide out.\nस्पष्टीकरण (Hi): एल्वोलाई (वायु कोष्ठक) बहुत पतली दीवारों वाली सूक्ष्म थैलियां हैं जहाँ ऑक्सीजन खून में घुलती है और कार्बन डाइऑक्साइड बाहर निकलती है।"
    },
    {
      qEn: "What is the common name for the trachea?",
      qHi: "ट्रेकिया (Trachea) का सामान्य नाम क्या है?",
      optionsEn: ["Windpipe (श्वास नली)", "Food pipe", "Voice box", "Pharynx"],
      optionsHi: ["श्वास नली (Windpipe)", "भोजन नली", "स्वर यंत्र", "ग्रसनी"],
      answer: 0,
      exp: "Explanation (En): The trachea, supported by C-shaped cartilage rings, connects the larynx to the bronchi and is commonly called the windpipe.\nस्पष्टीकरण (Hi): ट्रेकिया को श्वास नली (Windpipe) कहा जाता है जो लैंक्स को ब्रॉन्काई से जोड़ती है।"
    },
    {
      qEn: "What is the voice box in humans known as?",
      qHi: "मानव में 'स्वर यंत्र' (Voice box) के रूप में किसे जाना जाता है?",
      optionsEn: ["Larynx (लैंरिक्स)", "Pharynx", "Trachea", "Glottis"],
      optionsHi: ["लैंरिक्स या कंठ (Larynx)", "फैरिंज", "ट्रेकिया", "ग्लोटिस"],
      answer: 0,
      exp: "Explanation (En): The larynx contains vocal cords that vibrate to produce sound when air passes through it.\nस्पष्टीकरण (Hi): लैंरिक्स (Larynx) में वोकल कॉर्ड होते हैं जिनसे हवा गुजरने पर आवाज उत्पन्न होती है।"
    },
    {
      qEn: "What is the maximum volume of air that can be inhaled after a maximum exhalation called?",
      qHi: "अधिकतम साँص छोड़ने के बाद फेफड़ों द्वारा अंदर ली जा सकने वाली हवा की अधिकतम मात्रा (कुल क्षमता) क्या कहलाती है?",
      optionsEn: ["Vital capacity (जैव क्षमता)", "Tidal volume", "Residual volume", "Total lung capacity"],
      optionsHi: ["जैव क्षमता (Vital capacity)", "टाइडल वॉल्यूम", "अवशिष्ट आयतन", "कुल फेफड़ों की क्षमता"],
      answer: 0,
      exp: "Explanation (En): Vital capacity is the maximum amount of air a person can expel from the lungs after a maximum inhalation.\nस्पष्टीकरण (Hi): जैव क्षमता (Vital capacity) फेफड़ों की वह अधिकतम हवा है जिसे गहरी सांस लेने और छोड़ने के बाद मापा जाता है।"
    },
    {
      qEn: "What is the volume of air inspired or expired during normal quiet breathing called?",
      qHi: "सामान्य शांत श्वसन के दौरान अंदर ली जाने वाली या छोड़ी जाने वाली हवा की मात्रा को क्या कहते हैं?",
      optionsEn: ["Tidal volume (टाइडल वॉल्यूम)", "Vital capacity", "Residual volume", "Inspiratory reserve volume"],
      optionsHi: ["टाइडल वॉल्यूम (Tidal volume)", "जैव क्षमता", "अवशिष्ट आयतन", "प्रवाह आयतन"],
      answer: 0,
      exp: "Explanation (En): Tidal volume is about 500 mL of air inhaled or exhaled per normal breath in a healthy adult.\nस्पष्टीकरण (Hi): सामान्य सांस लेते समय प्रति श्वास ली या छोड़ी जाने वाली हवा की मात्रा टाइडल वॉल्यूम (लगभग 500 मिली) होती है।"
    },
    {
      qEn: "What is the air left in the lungs after a forced exhalation called?",
      qHi: "जोरदार सांस छोड़ने के बाद भी फेफड़ों में बची हुई हवा की मात्रा को क्या कहते हैं?",
      optionsEn: ["Residual volume (अवशिष्ट आयतन)", "Tidal volume", "Vital capacity", "Dead space volume"],
      optionsHi: ["अवशिष्ट आयतन (Residual volume)", "टाइडल वॉल्यूम", "जैव क्षमता", "मृत स्थान आयतन"],
      answer: 0,
      exp: "Explanation (En): Residual volume is the air that always remains in the lungs to prevent them from collapsing.\nस्पष्टीकरण (Hi): बलपूर्वक सांस छोड़ने के बाद भी फेफड़ों में जो हवा हमेशा बची रहती है, उसे अवशिष्ट आयतन (Residual volume) कहते हैं।"
    },
    {
      qEn: "How is oxygen primarily transported in the human blood?",
      qHi: "मानव रक्त में ऑक्सीजन का मुख्य रूप से परिवहन कैसे होता है?",
      optionsEn: ["Combined with hemoglobin to form oxyhemoglobin", "Dissolved directly in plasma", "Combined with white blood cells", "As carbonic acid"],
      optionsHi: ["हीमोग्लोबिन के साथ मिलकर ऑक्सीहीमोग्लोबिन के रूप में", "सीधे प्लाज्मा में घुलक", "श्वेत रक्त कोशिकाओं के साथ", "कार्बोनिक अम्ल के रूप में"],
      answer: 0,
      exp: "Explanation (En): About 97% of oxygen is transported bound to hemoglobin in RBCs, while 3% is dissolved in plasma.\nस्पष्टीकरण (Hi): लगभग 97% ऑक्सीजन आरबीसी में मौजूद हीमोग्लोबिन से जुड़कर 'ऑक्सीहीमोग्लोबिन' के रूप में परिवहन करती है।"
    },
    {
      qEn: "In what form is carbon dioxide primarily transported in the blood?",
      qHi: "रक्त में कार्बन डाइऑक्साइड का परिवहन मुख्य रूप से किस रूप में होता है?",
      optionsEn: ["As bicarbonate ions (HCO_3^-)", "As dissolved gas in plasma", "Combined with hemoglobin (carbaminohemoglobin)", "As carbon monoxide"],
      optionsHi: ["बाइकार्बोनेट आयनों के रूप में (HCO_3^-)", "प्लाज्मा में घुली गैस के रूप में", "हीमोग्लोबिन से जुड़कर", "कार्बन मोनोऑक्साइड के रूप में"],
      answer: 0,
      exp: "Explanation (En): About 70% of carbon dioxide is transported as bicarbonate ions dissolved in blood plasma.\nस्पष्टीकरण (Hi): लगभग 70% कार्बन डाइऑक्साइड रक्त प्लाज्मा में बाइकार्बोनेट आयनों (HCO_3^-) के रूप में ले जाई जाती है।"
    },
    {
      qEn: "Which respiratory pigment is responsible for oxygen transport in human blood?",
      qHi: "मानव रक्त में ऑक्सीजन परिवहन के लिए कौन सा श्वसन वर्णक (respiratory pigment) जिम्मेदार है?",
      optionsEn: ["Hemoglobin", "Hemocyanin", "Chlorophyll", "Melanin"],
      optionsHi: ["हीमोग्लोबिन (Hemoglobin)", "हीमोसायानिन", "क्लोरोफिल", "मेलानिन"],
      answer: 0,
      exp: "Explanation (En): Hemoglobin is the iron-containing respiratory pigment in red blood cells that reversibly binds oxygen.\nस्पष्टीकरण (Hi): हीमोग्लोबिन वह श्वसन वर्णक है जो ऑक्सीजन को बांधकर फेफड़ों से ऊतकों तक ले जाता है।"
    },
    {
      qEn: "What is the respiratory center in the human brain that controls involuntary breathing rhythm located?",
      qHi: "मानव मस्तिष्क में अनैच्छिक श्वसन लय को नियंत्रित करने वाला श्वसन केंद्र कहाँ स्थित होता है?",
      optionsEn: ["Medulla oblongata and Pons", "Cerebrum", "Cerebellum", "Thalamus"],
      optionsHi: ["मेडूला ओब्लॉन्गाटा और पोंस", "प्रमस्तिष्क", "अनुमस्तिष्क", "थैलेमस"],
      answer: 0,
      exp: "Explanation (En): The respiratory rhythm center is primarily located in the medulla oblongata region of the brainstem.\nस्पष्टीकरण (Hi): मस्तिष्क के मेडूला ओब्लॉन्गाटा और पोंस में श्वसन केंद्र होता है जो सांस लेने की गति नियंत्रित करता है।"
    },
    {
      qEn: "Which gas acts as the strongest chemical stimulus for breathing regulation in humans?",
      qHi: "मनुष्यों में श्वसन नियमन के लिए कौन सी गैस सबसे मजबूत रासायनिक उद्दीपक का काम करती है?",
      optionsEn: ["Carbon dioxide (CO_2)", "Oxygen (O_2)", "Nitrogen (N_2)", "Hydrogen"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2)", "ऑक्सीजन (O_2)", "नाइट्रोजन (N_2)", "हाइड्रोजन"],
      answer: 0,
      exp: "Explanation (En): An increase in blood CO_2 (or lowering of pH) stimulates the respiratory center to increase breathing rate.\nस्पष्टीकरण (Hi): रक्त में CO_2 की मात्रा बढ़ने पर श्वसन केंद्र उत्तेजित होता है और सांस लेने की गति तेज हो जाती है।"
    },
    {
      qEn: "What is chronic obstructive pulmonary disease (COPD) commonly linked to?",
      qHi: "क्रोनिक ऑब्सट्रक्टिव पल्मोनरी डिजीज (COPD) का संबंध मुख्य रूप से किससे है?",
      optionsEn: ["Smoking and long-term exposure to air pollutants/smoke", "Vitamin D deficiency", "Bacterial infection in stomach", "High blood pressure"],
      optionsHi: ["धूम्रपान और वायु प्रदूषण/धुएं के लंबे समय तक संपर्क में रहना", "विटामिन D की कमी", "पेट में बैक्टीरिया संक्रमण", "उच्च रक्तचाप"],
      answer: 0,
      exp: "Explanation (En): COPD is a chronic inflammatory lung disease causing obstructed airflow from the lungs, heavily linked to cigarette smoking.\nस्पष्टीकरण (Hi): सीओपीडी एक दीर्घकालिक फेफड़ों की बीमारी है जो मुख्य रूप से धूम्रपान और प्रदूषण के धुएं से होती है (जैसे ब्रोंकाइटिस और वातस्फीति)।"
    },
    {
      qEn: "What is emphysema characterized by?",
      qHi: "वातस्फीति (Emphysema) रोग की मुख्य विशेषता क्या है?",
      optionsEn: ["Destruction and enlargement of alveolar walls, reducing surface area for gas exchange", "Water accumulation in lungs", "Infection of trachea", "Swelling of larynx"],
      optionsHi: ["वायु कोष्ठकों (alveoli) की दीवारों का नष्ट होना और फूलना जिससे गैस एक्सचेंज की सतह घट जाती है", "फेफड़ों में पानी भरना", "श्वास नली का संक्रमण", "लैंरिक्स की सूजन"],
      answer: 0,
      exp: "Explanation (En): Emphysema is a lung condition causing shortness of breath due to damage and destruction of delicate alveoli walls.\nस्पष्टीकरण (Hi): वातस्फीति में फेफड़ों की एल्वोलाई की दीवारें नष्ट हो जाती हैं जिससे सांस फूलने लगती है (मुख्यतः धूम्रपान से)।"
    },
    {
      qEn: "What is occupational respiratory disease caused by inhalation of coal dust in mines called?",
      qHi: "खान में कोयले की धूल में सांस लेने से होने वाले व्यावसायिक श्वसन रोग को क्या कहते हैं?",
      optionsEn: ["Anthracosis (Black lung disease)", "Asbestosis", "Silicosis", "Tuberculosis"],
      optionsHi: ["एन्थ्राकोसिस या ब्लैक लंग डिजीज (Anthracosis)", "एसबेस्टोसिस", "सिलिकोसिस", "तपेदिक (TB)"],
      answer: 0,
      exp: "Explanation (En): Coal workers' pneumoconiosis, or black lung disease (anthracosis), is caused by chronic inhalation of coal mine dust.\nस्पष्टीकरण (Hi): कोयला खदानों में काम करने वालों को धूल जमने से 'एन्थ्राकोसिस' या ब्लैक लंग डिजीज हो जाती है।"
    },
    {
      qEn: "What is tuberculosis (TB) caused by?",
      qHi: "तपेदिक या टीबी (Tuberculosis) किसके कारण होता है?",
      optionsEn: ["Mycobacterium tuberculosis (bacterium)", "Influenza virus", "Streptococcus pneumoniae", "Plasmodium parasite"],
      optionsHi: ["माइकोबैक्टीरियम ट्यूबरकुलोसिस (बैक्टीरिया)", "इन्फ्लूएंजा वायरस", "스트्रेप्टोकोकस न्यूमोनिया", "प्लाज्मोडियम परजीवी"],
      answer: 0,
      exp: "Explanation (En): TB is an infectious bacterial disease primarily affecting the lungs, caused by *Mycobacterium tuberculosis*.\nस्पष्टीकरण (Hi): टीबी एक संक्रामक बैक्टीरियल बीमारी है जो *माइकोबैक्टीरियम ट्यूबरकुलोसिस* नामक जीवाणु से होती है।"
    },
    {
      qEn: "What is pneumonia?",
      qHi: "निमोनिया (Pneumonia) क्या है?",
      optionsEn: ["An infection that inflames air sacs in one or both lungs, which may fill with fluid or pus", "Cancer of the windpipe", "Genetic lung disorder", "Allergic asthma"],
      optionsHi: ["फेफड़ों की वायु थैलियों का संक्रमण जिसमें उनमें मवाद या तरल भर जाता है", "श्वास नली का कैंसर", "आनुवंशिक फेफड़ों का विकार", "एलर्जी अस्थमा"],
      answer: 0,
      exp: "Explanation (En): Pneumonia is an inflammatory lung condition caused by bacteria, viruses, or fungi, filling alveoli with fluid.\nस्पष्टीकरण (Hi): निमोनिया फेफड़ों का संक्रमण है जिसमें एल्वोलाई में पानी या मवाद भर जाता है और सांस लेने में दिक्कत होती है।"
    },
    {
      qEn: "What is asthma characterized by?",
      qHi: "अस्थमा (Asthma) रोग की मुख्य विशेषता क्या है?",
      optionsEn: ["Inflammation and constriction of airways (bronchioles) leading to wheezing and breathlessness", "Destruction of lung tissue", "Bacterial infection of larynx", "Blood clot in lungs"],
      optionsHi: ["श्वास नलिकाओं की सूजन और संकुचन जिससे सांस लेने में घरघराहट और कठिनाई होती है", "फेफड़ों के ऊतकों का नष्ट होना", "लैंरिक्स का बैक्टीरियल संक्रमण", "फेफड़ों में खून का थक्का"],
      answer: 0,
      exp: "Explanation (En): Asthma is a chronic respiratory condition where airways narrow, swell, and produce extra mucus, triggering wheezing.\nस्पष्टीकरण (Hi): अस्थमा में श्वसन नलिकाएं सिकुड़ जाती हैं और सूजन आ जाती है जिससे सांस फूलती है और घरघराहट होती है।"
    },
    {
      qEn: "What is the primary pollutant gas that binds with hemoglobin 200 times more strongly than oxygen, causing suffocation?",
      qHi: "कौन सी प्रदूषक गैस हीमोग्लोबिन से ऑक्सीजन की तुलना में 200 गुना अधिक मजबूती से बंधती है और दम घुटने का कारण बनती है?",
      optionsEn: ["Carbon monoxide (CO)", "Carbon dioxide (CO_2)", "Sulfur dioxide (SO_2)", "Nitrogen dioxide"],
      optionsHi: ["कार्बन मोनोऑक्साइड (CO)", "कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड", "नाइट्रोजन डाइऑक्साइड"],
      answer: 0,
      exp: "Explanation (En): Carbon monoxide binds irreversibly with hemoglobin to form carboxyhemoglobin, preventing oxygen transport.\nस्पष्टीकरण (Hi): कार्बन मोनोऑक्साइड (CO) हीमोग्लोबिन से जुड़कर कारबॉक्सीहीमोग्लोबिन बनाती है जिससे शरीर में ऑक्सीजन की आपूर्ति रुक जाती है।"
    },
    {
      qEn: "What is the total lung capacity (TLC) in an average adult human?",
      qHi: "एक औसत वयस्क मनुष्य के फेफड़ों की कुल क्षमता (Total Lung Capacity) लगभग कितनी होती है?",
      optionsEn: ["About 5 to 6 liters", "About 1 to 2 liters", "About 10 liters", "About 500 milliliters"],
      optionsHi: ["लगभग 5 से 6 लीटर", "लगभग 1 से 2 लीटर", "लगभग 10 लीटर", "लगभग 500 मिलीलीटर"],
      answer: 0,
      exp: "Explanation (En): Total lung capacity is the maximum volume of air the lungs can hold, averaging around 6 liters in healthy adult males.\nस्पष्टीकरण (Hi): सामान्य वयस्क के फेफड़ों की कुल क्षमता (TLC) लगभग 5 से 6 लीटर होती है।"
    },
    {
      qEn: "Which respiratory disorder is caused by exposure to asbestos dust in industrial settings?",
      qHi: "औद्योगिक कारखानों में एस्बेस्टोस धूल के संपर्क में आने से होने वाला फेफड़ों का रोग क्या कहलाता है?",
      optionsEn: ["Asbestosis", "Silicosis", "Anthracosis", "Emphysema"],
      optionsHi: ["एस्बेस्टोसिस (Asbestosis)", "सिलिकोसिस", "एन्थ्राकोसिस", "वातस्फीति"],
      answer: 0,
      exp: "Explanation (En): Asbestosis is a chronic inflammatory medical condition caused by inhalation of asbestos fibers, leading to lung scarring.\nस्पष्टीकरण (Hi): एस्बेस्टोस के रेशे साँस के जरिए फेफड़ों में जाने से 'एस्बेस्टोसिस' नामक फाइब्रोसिस हो जाता है।"
    },
    {
      qEn: "What is hypoxia?",
      qHi: "हाइपॉक्सिया (Hypoxia) किसे कहते हैं?",
      optionsEn: ["A condition in which the body or a region of the body is deprived of adequate oxygen supply at tissue level", "Excess of oxygen in blood", "High carbon dioxide poisoning", "Lack of blood cells"],
      optionsHi: ["ऊतक स्तर पर शरीर या उसके किसी अंग को पर्याप्त ऑक्सीजन न मिलना", "रक्त में ऑक्सीजन की अधिकता", "कार्बन डाइऑक्साइड विषाक्तता", "रक्त कोशिकाओं की कमी"],
      answer: 0,
      exp: "Explanation (En): Hypoxia is oxygen deficiency in body tissues, which can impair normal organ function.\nस्पष्टीकरण (Hi): शरीर के ऊतकों तक पर्याप्त मात्रा में ऑक्सीजन न पहुँच पाने की स्थिति को हाइपॉक्सिया कहते हैं।"
    },
    {
      qEn: "What happens to the diaphragm and rib cage during inspiration (inhalation)?",
      qHi: "सांस अंदर लेते समय (Inspiration) डायाफ्राम और पसलियों की स्थिति में क्या परिवर्तन होता है?",
      optionsEn: ["Diaphragm contracts and flattens, while ribs move upward and outward", "Diaphragm relaxes and domes upward", "Ribs move inward and downward", "Diaphragm stops moving"],
      optionsHi: ["डायाफ्राम सिकुड़ता और चपटा होता है, जबकि पसलियां ऊपर और बाहर की ओर गति करती हैं", "डायाफ्राम relaj हो जाता है", "पसलियां अंदर और नीचे झुकती हैं", "डायाफ्राम स्थिर रहता है"],
      answer: 0,
      exp: "Explanation (En): During inhalation, diaphragm contraction and rib cage expansion increase thoracic volume, lowering pressure to draw air in.\nस्पष्टीकरण (Hi): सांस अंदर खींचते समय डायाफ्राम नीचे की तरफ चपटा होता है और पसलियां ऊपर उठती हैं जिससे वक्ष गुहा का आयतन बढ़ता है।"
    },
    {
      qEn: "What happens to the diaphragm during expiration (exhalation)?",
      qHi: "सांस छोड़ते समय (Expiration) डायाफ्राम की स्थिति कैसी होती है?",
      optionsEn: ["Diaphragm relaxes and returns to its dome-shaped position", "Diaphragm flattens further", "Diaphragm contracts forcefully", "Diaphragm ruptures"],
      optionsHi: ["डायाफ्राम शिथिल (relaj) होकर अपने मूल गुंबद आकार में लौट आता है", "डायाफ्राम और चपटा होता है", "डायाफ्राम जोर से सिकुड़ता है", "डायाफ्राम फट जाता है"],
      answer: 0,
      exp: "Explanation (En): During exhalation, the diaphragm relaxes and arches upward, reducing thoracic volume and forcing air out.\nस्पष्टीकरण (Hi): सांस बाहर छोड़ते समय डायाफ्राम अपनी सामान्य गुंबद जैसी स्थिति में वापस आ जाता है जिससे फेफड़ों पर दबाव पड़ कर हवा बाहर निकलती है।"
    },
    {
      qEn: "How many molecules of oxygen can a single hemoglobin molecule bind with maximum?",
      qHi: "हीमोग्लोबिन का एक अणु अधिकतम कितने ऑक्सीजन के अणुओं से जुड़ सकता है?",
      optionsEn: ["4 molecules", "2 molecules", "1 molecule", "8 molecules"],
      optionsHi: ["4 अणु (4 molecules)", "2 अणु", "1 अणु", "8 अणु"],
      answer: 0,
      exp: "Explanation (En): Each hemoglobin molecule has four iron-containing heme groups, allowing it to bind a maximum of four oxygen molecules (O_2).\nस्पष्टीकरण (Hi): हीमोग्लोबिन के एक अणु में चार हीम समूह होते हैं, इसलिए यह अधिकतम 4 ऑक्सीजन अणुओं को बांध सकता है।"
    },
    {
      qEn: "What is the Bohr effect in respiratory physiology?",
      qHi: "श्वसन शरीर क्रिया विज्ञान में 'बोहर प्रभाव' (Bohr effect) क्या दर्शाता है?",
      optionsEn: ["Decreased affinity of hemoglobin for oxygen when blood pH drops (higher CO_2 or acidity)", "Increased oxygen binding in acidic pH", "Constant oxygen saturation", "Effect of temperature on heart rate"],
      optionsHi: ["रक्त का pH घटने (या CO_2 बढ़ने) पर हीमोग्लोबिन की ऑक्सीजन से बंधने की क्षमता का कम होना", "अम्लीय pH में ऑक्सीजन का अधिक जुड़ना", "स्थिर ऑक्सीजन संतृप्ति", "हृदय गति पर तापमान का प्रभाव"],
      answer: 0,
      exp: "Explanation (En): The Bohr effect describes how increased CO_2 and acidity in metabolizing tissues prompt hemoglobin to release oxygen more readily.\nस्पष्टीकरण (Hi): बोहर प्रभाव के अनुसार ऊतकों में CO_2 या अम्ल बढ़ने पर हीमोग्लोबिन आसानी से ऑक्सीजन को छोड़ देता है ताकि ऊतकों को मिल सके।"
    },
    {
      qEn: "Which aquatic respiratory organ is used by fish for gas exchange?",
      qHi: "मछलियों में गैसों के आदान-प्रदान के लिए कौन सा जलीय श्वसन अंग पाया जाता है?",
      optionsEn: ["Gills (गलफड़े / क्लोम)", "Lungs", "Skin", "Trachea"],
      optionsHi: ["गलफड़े या क्लोम (Gills)", "फेफड़े", "त्वचा", "ट्रेकिया"],
      answer: 0,
      exp: "Explanation (En): Fish use gills to extract dissolved oxygen from water and release carbon dioxide.\nस्पष्टीकरण (Hi): मछलियां पानी में घुली हुई ऑक्सीजन लेने के लिए गलफड़ों (Gills) का उपयोग करती हैं।"
    },
    {
      qEn: "Through which organ do earthworms respire?",
      qHi: "केंचुए (Earthworms) किस अंग के माध्यम से श्वसन करते हैं?",
      optionsEn: ["Moist skin (त्वचा)", "Lungs", "Gills", "Book lungs"],
      optionsHi: ["नम त्वचा (Moist skin)", "फेफड़े", "गलफड़े", "बुक लंग्स"],
      answer: 0,
      exp: "Explanation (En): Earthworms lack specialized respiratory organs and exchange gases directly through their moist, vascular skin.\nस्पष्टीकरण (Hi): केंचुए की त्वचा हमेशा नम और पतली होती है जिसके जरिए वे सीधे हवा से ऑक्सीजन अवशोषित करते हैं।"
    }
  ],
    "Ecology": [
    {
      qEn: "Who coined the term 'Ecology' (Ökologie)?",
      qHi: "'इकोलॉजी' या पारिस्थितिकी शब्द सबसे पहले किसने दिया था?",
      optionsEn: ["Ernst Haeckel", "A.G. Tansley", "E.P. Odum", "Charles Darwin"],
      optionsHi: ["अर्नस्ट हेकेल (Ernst Haeckel)", "ए.जी. टांसले", "ई.पी. ओडुम", "चार्ल्स डार्विन"],
      answer: 0,
      exp: "Explanation (En): German biologist Ernst Haeckel coined the term 'ecology' in 1866 to describe the study of interactions between organisms and their environment.\nस्पष्टीकरण (Hi): जर्मन वैज्ञानिक अर्नस्ट हेकेल ने 1866 में जीवों और उनके पर्यावरण के संबंधों का अध्ययन करने के लिए 'ecology' शब्द गढ़ा था।"
    },
    {
      qEn: "Who coined the term 'ecosystem'?",
      qHi: "'पारिस्थितिकी तंत्र' या 'इकोसिस्टम' (Ecosystem) शब्द किसने दिया था?",
      optionsEn: ["A.G. Tansley", "Ernst Haeckel", "E.P. Odum", "R. Lindeman"],
      optionsHi: ["ए.जी. टांसले (A.G. Tansley)", "अर्नस्ट हेकेल", "ई.पी. ओडुम", "आर. लिंडमैन"],
      answer: 0,
      exp: "Explanation (En): British ecologist Arthur Tansley coined the term 'ecosystem' in 1935 to define the interacting system of biotic and abiotic components.\nस्पष्टीकरण (Hi): ब्रिटिश पारिस्थितिकीविद् ए.जी. टांसले ने 1935 में 'इकोसिस्टम' (पारिस्थितिकी तंत्र) शब्द प्रतिपादित किया था।"
    },
    {
      qEn: "Who proposed the 10% energy law in ecology?",
      qHi: "पारिस्थितिकी में '10% ऊर्जा का नियम' (10% Energy Law) किसने दिया था?",
      optionsEn: ["Raymond Lindeman", "A.G. Tansley", "Charles Elton", "Ernst Haeckel"],
      optionsHi: ["रेमंड लिंडमैन (Raymond Lindeman)", "ए.जी. टांसले", "चार्ल्स एल्टन", "अर्नस्ट हेकेल"],
      answer: 0,
      exp: "Explanation (En): Raymond Lindeman proposed the 10% law in 1942, stating that only about 10% of energy is transferred from one trophic level to the next.\nस्पष्टीकरण (Hi): रेमंड लिंडमैन ने 1942 में 10% का नियम दिया जिसके अनुसार एक पोषण स्तर से दूसरे पोषण स्तर पर केवल 10% ऊर्जा ही पहुँचती है।"
    },
    {
      qEn: "What are producers in an ecosystem also known as?",
      qHi: "पारिस्थितिकी तंत्र में उत्पादकों (Producers) को किस अन्य नाम से भी जाना जाता है?",
      optionsEn: ["Autotrophs (स्वपोषी)", "Heterotrophs", "Decomposers", "Carnivores"],
      optionsHi: ["स्वपोषी या ऑटोट्रोफ्स (Autotrophs)", "परपोषी", "अपघटक", "मांसाहारी"],
      answer: 0,
      exp: "Explanation (En): Producers are autotrophs (like green plants and algae) that synthesize their own food using solar energy via photosynthesis.\nस्पष्टीकरण (Hi): पौधे और शैवाल अपने भोजन का निर्माण स्वयं करते हैं, इसलिए इन्हें स्वपोषी या उत्पादक कहा जाता है।"
    },
    {
      qEn: "What are primary consumers in a food chain?",
      qHi: "खाद्य श्रृंखला में प्राथमिक उपभोक्ता (Primary consumers) कौन होते हैं?",
      optionsEn: ["Herbivores (शाकाहारी)", "Carnivores", "Omnivores", "Decomposers"],
      optionsHi: ["शाकाहारी (Herbivores)", "मांसाहारी", "सर्वाहारी", "अपघटक"],
      answer: 0,
      exp: "Explanation (En): Primary consumers are herbivores that feed directly on primary producers (plants).\nस्पष्टीकरण (Hi): प्राथमिक उपभोक्ता वे शाकाहारी जीव हैं जो सीधे उत्पादकों (पौधों) पर निर्भर रहते हैं (जैसे गाय, टिड्डी)।"
    },
    {
      qEn: "What is a food web?",
      qHi: "खाद्य जाल (Food web) किसे कहते हैं?",
      optionsEn: ["An intricate network of interconnected food chains in an ecosystem", "A single linear food chain", "A pyramid of numbers", "A food storage system"],
      optionsHi: ["पारिस्थितिकी तंत्र में आपस में जुड़ी हुई खाद्य श्रृंखलाओं का एक जटिल नेटवर्क", "एक अकेली रेखीय खाद्य श्रृंखला", "संख्याओं का पिरामिड", "खाद्य भंडारण प्रणाली"],
      answer: 0,
      exp: "Explanation (En): A food web consists of multiple overlapping food chains, showing alternative feeding relationships in an ecosystem.\nस्पष्टीकरण (Hi): खाद्य जाल कई परस्पर जुड़ी हुई खाद्य श्रृंखलाओं का एक जटिल जाल होता है जो पारिस्थितिकी तंत्र में स्थिरता देता है।"
    },
    {
      qEn: "Which gas is primarily responsible for global warming and the greenhouse effect?",
      qHi: "ग्लोबल वार्मिंग और ग्रीनहाउस प्रभाव के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
      optionsEn: ["Carbon dioxide (CO_2)", "Oxygen", "Nitrogen", "Argon"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2)", "ऑक्सीजन", "नाइट्रोजन", "ऑर्गन"],
      answer: 0,
      exp: "Explanation (En): Carbon dioxide traps heat in the atmosphere, driving the greenhouse effect and global climate change.\nस्पष्टीकरण (Hi): वायुमंडल में ऊष्मा रोकने के कारण कार्बन डाइऑक्साइड (CO_2) ग्रीनहाउस प्रभाव और ग्लोबल वार्मिंग के लिए मुख्य रूप से उत्तरदायी है।"
    },
    {
      qEn: "Which protocol or treaty was signed globally to phase out ozone-depleting substances like CFCs?",
      qHi: "CFCs जैसे ओजोन क्षरणकारी पदार्थों को हटाने के लिए कौन सी वैश्विक संधि (प्रोटोकॉल) पर हस्ताक्षर किए गए थे?",
      optionsEn: ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Ramsar Convention"],
      optionsHi: ["मॉन्ट्रियल प्रोटोकॉल (Montreal Protocol)", "क्योटो प्रोटोकॉल", "पेरिस समझौता", "रामसर कन्वेंशन"],
      answer: 0,
      exp: "Explanation (En): The Montreal Protocol (1987) is an international treaty designed to protect the ozone layer by phasing out ozone-depleting chemicals.\nस्पष्टीकरण (Hi): ओजोन परत की रक्षा के लिए 1987 में 'मॉन्ट्रियल प्रोटोकॉल' पर हस्ताक्षर किए गए थे।"
    },
    {
      qEn: "What is biological magnification (biomagnification)?",
      qHi: "जैविक आवर्धन या बायोमैग्निफिकेशन (Biomagnification) क्या है?",
      optionsEn: ["The progressive accumulation of toxic substances in organisms at higher trophic levels of a food chain", "Increase in plant growth", "Decrease in pollution", "Spread of infectious diseases"],
      optionsHi: ["खाद्य श्रृंखला के उच्च पोषण स्तरों पर जीवों में विषैले पदार्थों की सांद्रता का क्रमिक रूप से बढ़ना", "पौधों की वृद्धि में वृद्धि", "प्रदूषण में कमी", "संक्रामक रोगों का फैलना"],
      answer: 0,
      exp: "Explanation (En): Biomagnification is the amplification of non-biodegradable toxins (like DDT or mercury) as they move up the food chain.\nस्पष्टीकरण (Hi): खाद्य श्रृंखला में ऊपर की ओर बढ़ने पर हानिकारक रसायनों (जैसे डीडीटी) की मात्रा का लगातार बढ़ना बायोमैग्निफिकेशन कहलाता है।"
    },
    {
      qEn: "What is ecological succession?",
      qHi: "पारिस्थितिक अनुक्रमण (Ecological succession) किसे कहते हैं?",
      optionsEn: ["The progressive directional change in species composition of an ecological community over time", "Sudden extinction of species", "Migration of animals", "Seasonal changes in weather"],
      optionsHi: ["समय के साथ किसी पारिस्थितिक समुदाय की प्रजातियों की संरचना में होने वाला क्रमिक और दिशात्मक परिवर्तन", "प्रजातियों का अचानक विलुप्त होना", "जानवरों का प्रवासन", "मौसम में मौसमी बदलाव"],
      answer: 0,
      exp: "Explanation (En): Ecological succession is the orderly process of community development over time, leading from pioneer species to a climax community.\nस्पष्टीकरण (Hi): किसी क्षेत्र में समय के साथ वनस्पतियों और जीवों के समुदायों का क्रमिक रूप से विकसित होना पारिस्थितिक अनुक्रमण है।"
    },
    {
      qEn: "What is a climax community in ecological succession?",
      qHi: "पारिस्थितिक अनुक्रमण में 'चरम समुदाय' (Climax community) क्या होता है?",
      optionsEn: ["The final, stable, and self-perpetuating community in ecological succession", "The very first pioneer community", "A destroyed forest", "An artificial garden"],
      optionsHi: ["पारिस्थितिक अनुक्रमण का अंतिम, स्थिर और स्व-पोषी समुदाय", "सबसे पहला pioneer समुदाय", "एक नष्ट हुआ जंगल", "एक कृत्रिम बगीचा"],
      answer: 0,
      exp: "Explanation (En): The climax community represents the stable end-state of succession that remains balanced with the regional climate.\nस्पष्टीकरण (Hi): अनुक्रमण का अंतिम और सबसे स्थिर चरण 'चरम समुदाय' (Climax community) कहलाता है।"
    },
    {
      qEn: "Which bacteria are responsible for biological nitrogen fixation in the root nodules of leguminous plants?",
      qHi: "दलहनी (leguminous) पौधों की जड़ों की गांठों में जैविक नाइट्रोजन स्थिरीकरण के लिए कौन से बैक्टीरिया जिम्मेदार हैं?",
      optionsEn: ["Rhizobium", "Lactobacillus", "Azotobacter", "E. coli"],
      optionsHi: ["राइजोबियम (Rhizobium)", "लैक्टोबैसिलस", "एजोटोबैक्टर", "ई. कोलाई"],
      answer: 0,
      exp: "Explanation (En): *Rhizobium* bacteria form a symbiotic relationship with legume roots, fixing atmospheric nitrogen into nitrates.\nस्पष्टीकरण (Hi): दलहनी फसलों की जड़ों में पाए जाने वाले 'राइजोबियम' बैक्टीरिया वायुमंडलीय नाइट्रोजन को नाइट्रेट में बदलते हैं।"
    },
    {
      qEn: "What is denitrification in the nitrogen cycle?",
      qHi: "नाइट्रोजन चक्र में 'डिनिट्रीफिकेशन' (Denitrification) प्रक्रिया क्या है?",
      optionsEn: ["Conversion of soil nitrates back into atmospheric nitrogen gas by bacteria", "Conversion of nitrogen gas into nitrates", "Absorption of nitrates by plants", "Decaying of animal waste"],
      optionsHi: ["बैक्टीरिया द्वारा मिट्टी के नाइट्रेट्स को वापस वायुमंडलीय नाइट्रोजन गैस में बदलना", "नाइट्रोजन गैस को नाइट्रेट में बदलना", "पौधों द्वारा नाइट्रेट्स का अवशोषण", "पशु अपशिष्ट का सड़ना"],
      answer: 0,
      exp: "Explanation (En): Denitrification is carried out by denitrifying bacteria (like *Pseudomonas*), returning nitrogen gas to the atmosphere.\nस्पष्टीकरण (Hi): डीनिट्रीफाइंग बैक्टीरिया नाइट्रेट्स को तोड़कर नाइट्रोजन गैस को वापस वायुमंडल में छोड़ देते हैं।"
    },
    {
      qEn: "What is biodiversity?",
      qHi: "जैविक विविधता या जैव विविधता (Biodiversity) क्या है?",
      optionsEn: ["The variety and variability of life on Earth at genetic, species, and ecosystem levels", "The number of trees in a forest", "Only animal population count", "Desert ecosystem variety"],
      optionsHi: ["आनुवंशिक, प्रजाति और पारिस्थितिक तंत्र स्तर पर पृथ्वी पर जीवन की विविधता और भिन्नता", "जंगल में पेड़ों की संख्या", "केवल पशु आबादी की गिनती", "मरुस्थल पारिस्थितिकी तंत्र"],
      answer: 0,
      exp: "Explanation (En): Biodiversity encompasses the total variety of all living organisms across genetic, species, and ecological scales.\nस्पष्टीकरण (Hi): जैव विविधता का तात्पर्य पृथ्वी पर मौजूद सभी जीवों, उनकी प्रजातियों और पारिस्थितिक तंत्र की विविधता से है।"
    },
    {
      qEn: "Where is global biodiversity generally richest and highest?",
      qHi: "वैश्विक स्तर पर जैव विविधता सामान्यतः सबसे अधिक कहाँ पाई जाती है?",
      optionsEn: ["Tropical rain forests", "Tundra regions", "Polar ice caps", "Deserts"],
      optionsHi: ["उष्णकटिबंधीय वर्षा वन (Tropical rain forests)", "टुंड्रा क्षेत्र", "ध्रुवीय बर्फ की चादरें", "मरुस्थल"],
      answer: 0,
      exp: "Explanation (En): Tropical rainforests near the equator support the highest biodiversity and species richness on Earth due to favorable climate.\nस्पष्टीकरण (Hi): भूमध्य रेखा के पास स्थित उष्णकटिबंधीय वर्षा वनों में सबसे अधिक जैव विविधता पाई जाती है।"
    },
    {
      qEn: "What are 'biodiversity hotspots'?",
      qHi: "'जैव विविधता हॉटस्पॉट' (Biodiversity hotspots) किसे कहा जाता है?",
      optionsEn: ["Biogeographic regions with exceptionally high species richness that are under serious threat of habitat loss", "Hot desert regions", "Industrial pollution zones", "Volcanic active areas"],
      optionsHi: ["असाधारण रूप से उच्च प्रजाति विविधता वाले जैव-भौगोलिक क्षेत्र जो आवास विनाश के गंभीर खतरे में हैं", "गर्म मरुस्थलीय क्षेत्र", "औद्योगिक प्रदूषण क्षेत्र", "ज्वालामुखी सक्रिय क्षेत्र"],
      answer: 0,
      exp: "Explanation (En): Myers defined biodiversity hotspots as regions with at least 1,500 endemic vascular plants and having lost 70% of original habitat.\nस्पष्टीकरण (Hi): हॉटस्पॉट ऐसे क्षेत्र हैं जहाँ स्थानीय प्रजातियां बहुत अधिक होती हैं लेकिन मानवीय गतिविधियों से उन्हें भारी खतरा है।"
    },
    {
      qEn: "What is eutrophication of water bodies?",
      qHi: "जलाशयों का 'सुपोषण' या यूट्रोफिकेशन (Eutrophication) क्या है?",
      optionsEn: ["Nutrient enrichment (nitrogen and phosphorus) leading to algal blooms and oxygen depletion", "Purification of water by filters", "Freezing of lakes", "Drying up of rivers"],
      optionsHi: ["पोषक तत्वों (नाइट्रोजन और फॉस्फोरस) की अधिकता से शैवाल का अत्यधिक बढ़ना और ऑक्सीजन की कमी होना", "फिल्टर द्वारा पानी का शुद्धिकरण", "झीलों का जमना", "नदियों का सूखना"],
      answer: 0,
      exp: "Explanation (En): Nutrient runoff causes rapid algal blooms; when algae die and decompose, dissolved oxygen is depleted, killing aquatic life.\nस्पष्टीकरण (Hi): उर्वरकों के पानी में बहकर जाने से पोषक तत्व बढ़ते हैं, जिससे शैवाल (Algal bloom) फैल जाते हैं और पानी में ऑक्सीजन खत्म हो जाती है।"
    },
    {
      qEn: "What is the IUCN Red List?",
      qHi: "IUCN की 'रेड लिस्ट' (Red List) क्या है?",
      optionsEn: ["A comprehensive inventory of the global conservation status of biological species", "A list of poisonous plants", "A list of protected national parks", "Weather disaster records"],
      optionsHi: ["जैविक प्रजातियों की वैश्विक संरक्षण स्थिति की एक व्यापक सूची", "विषाले पौधों की सूची", "सुरक्षित राष्ट्रीय उद्यानों की सूची", "मौसम आपदा रिकॉर्ड"],
      answer: 0,
      exp: "Explanation (En): The IUCN Red List evaluates the extinction risk of plant, animal, and fungus species (e.g., Endangered, Critically Endangered).\nस्पष्टीकरण (Hi): IUCN रेड लिस्ट दुनिया भर की विलुप्तप्राय और संकटग्रस्त प्रजातियों की स्थिति का रिकॉर्ड रखती है।"
    },
    {
      qEn: "What is in-situ conservation?",
      qHi: "स्व-स्थान संरक्षण या इन-सीटू कंजर्वेशन (In-situ conservation) क्या है?",
      optionsEn: ["Conservation of species within their natural natural habitat (e.g., national parks, wildlife sanctuaries)", "Conservation in zoos and botanical gardens", "Laboratory preservation of DNA", "Cryopreservation of seeds"],
      optionsHi: ["प्रजातियों का उनके प्राकृतिक आवास में संरक्षण (जैसे राष्ट्रीय उद्यान, वन्यजीव अभ्यारण्य)", "चिड़ियाघरों और वनस्पतिक उद्यानों में संरक्षण", "प्रयोगशाला में डीएनए संरक्षण", "बीजों का क्रायोप्रिजर्वेशन"],
      answer: 0,
      exp: "Explanation (En): In-situ conservation protects species in their natural environment, preserving ecosystems and interacting species together.\nस्पष्टीकरण (Hi): जब जीवों और पौधों को उनके अपने प्राकृतिक घर (जैसे नेशनल पार्क, अभ्यारण्य) में सुरक्षित रखा जाता है, तो उसे इन-सीटू संरक्षण कहते हैं।"
    },
    {
      qEn: "What is ex-situ conservation?",
      qHi: "बाह्य-स्थान संरक्षण या एक्स-सीटू कंजर्वेशन (Ex-situ conservation) क्या है?",
      optionsEn: ["Conservation of endangered species outside their natural habitat (e.g., zoos, botanical gardens, gene banks)", "Protecting animals in deep forests", "Natural forest reserve", "Marine sanctuary protection"],
      optionsHi: ["संकटग्रस्त प्रजातियों का उनके प्राकृतिक आवास के बाहर संरक्षण (जैसे चिड़ियाघर, बॉटनिकल गार्डन)", "घने जंगलों में जानवरों की रक्षा", "प्राकृतिक वन रिजर्व", "समुद्री अभ्यारण्य सुरक्षा"],
      answer: 0,
      exp: "Explanation (En): Ex-situ conservation involves maintaining species away from their natural homes, such as in botanical gardens, zoos, or seed banks.\nस्पष्टीकरण (Hi): जब जीवों या पौधों को उनके प्राकृतिक आवास से बाहर (जैसे चिड़ियाघर, बोटैनिकल गार्डन या जीन बैंक) सुरक्षित रखा जाता है, तो उसे एक्स-सीटू संरक्षण कहते हैं।"
    },
    {
      qEn: "What is an endemic species?",
      qHi: "स्थानिक प्रजाति या एंडेमिक स्पीशीज (Endemic species) किसे कहते हैं?",
      optionsEn: ["Species confined to a specific geographic region and found nowhere else in the world", "Species found everywhere on earth", "Migratory birds", "Genetically modified species"],
      optionsHi: ["वे प्रजातियां जो एक विशिष्ट भौगोलिक क्षेत्र तक सीमित हैं और दुनिया में कहीं और नहीं पाई जाती हैं", "पृथ्वी पर हर जगह मिलने वाली प्रजातियां", "प्रवासी पक्षी", "आनुवंशिक रूप से संशोधित प्रजातियां"],
      answer: 0,
      exp: "Explanation (En): Endemic species are native to a defined geographic location, making them vulnerable to extinction if that habitat is destroyed.\nस्पष्टीकरण (Hi): जो जीव या पौधे केवल एक विशेष क्षेत्र में ही पाए जाते हैं और अन्यत्र नहीं मिलते, उन्हें स्थानिक (Endemic) प्रजाति कहते हैं।"
    },
    {
      qEn: "What is a keystone species?",
      qHi: "कीस्टोन प्रजाति (Keystone species) किसे कहा जाता है?",
      optionsEn: ["A species that has a disproportionately large effect on its ecosystem relative to its abundance", "The most abundant plant in a forest", "A producer in a food web", "An extinct animal"],
      optionsHi: ["वह प्रजाति जिसका अपनी आबादी की तुलना में पारिस्थितिकी तंत्र पर अत्यधिक प्रभाव होता है", "जंगल का सबसे प्रचुर पौधा", "खाद्य जाल में उत्पादक", "एक विलुप्त जानवर"],
      answer: 0,
      exp: "Explanation (En): Keystone species play a critical role in maintaining the structure of an ecological community (e.g., sea otters or wolves).\nस्पष्टीकरण (Hi): कीस्टोन प्रजातियां वे हैं जिनका पारिस्थितिकी तंत्र में संतुलन बनाए रखने के लिए बहुत बड़ा योगदान होता है।"
    },
    {
      qEn: "Can an ecological pyramid of energy ever be inverted?",
      qHi: "क्या ऊर्जा का पारिस्थितिक पिरामिड कभी उल्टा (inverted) हो सकता है?",
      optionsEn: ["No, energy pyramids are always upright", "Yes, always inverted", "Inverted in aquatic ecosystems", "Inverted in forests"],
      optionsHi: ["नहीं, ऊर्जा के पिरामिड हमेशा सीधे होते हैं", "हाँ, हमेशा उल्टे", "जलीय पारिस्थितिकी तंत्र में उल्टे", "वनों में उल्टे"],
      answer: 0,
      exp: "Explanation (En): According to the laws of thermodynamics, energy is lost as heat at each trophic level, so energy pyramids are always upright.\nस्पष्टीकरण (Hi): ऊष्मागतिकी के नियमों के अनुसार ऊर्जा हर स्तर पर घटती है, इसलिए ऊर्जा का पिरामिड हमेशा सीधा (upright) होता है।"
    },
    {
      qEn: "What shape can the ecological pyramid of biomass in an aquatic ecosystem (like a pond) take?",
      qHi: "किसी जलीय पारिस्थितिकी तंत्र (जैसे तालाब) में बायोमास (जीवभार) का पिरामिड किस आकार का हो सकता है?",
      optionsEn: ["Inverted (उल्टा)", "Always upright", "Square", "Spherical"],
      optionsHi: ["उल्टा (Inverted)", "हमेशा सीधा", "वर्गाकार", "गोलाकार"],
      answer: 0,
      exp: "Explanation (En): In aquatic ecosystems, phytoplankton biomass is smaller than zooplankton biomass at any given time, making the biomass pyramid inverted.\nस्पष्टीकरण (Hi): तालाब या जलीय तंत्र में उत्पादकों (फाइटोप्लांकटन) का भार छोटी मछलियों से कम होता है, जिससे बायोमास का पिरामिड उल्टा हो जाता है।"
    },
    {
      qEn: "What is a biome?",
      qHi: "बायोम (Biome) किसे कहते हैं?",
      optionsEn: ["A large global community of plants and animals occupying a major habitat type (e.g., tundra, desert, rainforest)", "A single small pond", "A bacterial culture", "An aquarium"],
      optionsHi: ["प्रमुख आवास प्रकार वाले पौधों और जंतुओं का एक बड़ा वैश्विक समुदाय (जैसे टुंड्रा, मरुस्थल, वर्षावन)", "एक छोटा तालाब", "एक बैक्टीरियल कल्चर", "एक मछलीघर (aquarium)"],
      answer: 0,
      exp: "Explanation (En): A biome is a large-scale biotic community characterized by distinct climate, vegetation, and animal life.\nस्पष्टीकरण (Hi): बायोम एक बड़े भौगोलिक क्षेत्र का पारिस्थितिक समुदाय है जिसकी अपनी विशिष्ट जलवायु और वनस्पतियां होती हैं।"
    },
    {
      qEn: "What is the primary cause of acid rain?",
      qHi: "अम्लीय वर्षा (Acid rain) का मुख्य कारण क्या है?",
      optionsEn: ["Emissions of sulfur dioxide (SO_2) and nitrogen oxides (NO_x) from fossil fuel burning", "Ozone layer depletion", "Chlorofluorocarbons", "Carbon monoxide poisoning"],
      optionsHi: ["जीवाश्म ईंधन के जलने से सल्फर डाइऑक्साइड (SO_2) और नाइट्रोजन ऑक्साइड (NO_x) का उत्सर्जन", "ओजोन परत का क्षरण", "क्लोरोफ्लोरोकार्बन", "कार्बन मोनोऑक्साइड विषाक्तता"],
      answer: 0,
      exp: "Explanation (En): Industrial emissions of SO_2 and NO_x react with atmospheric moisture to form sulfuric and nitric acids in rain.\nस्पष्टीकरण (Hi): कारخانों और वाहनों से निकलने वाले SO_2 और NO_x हवा की नमी से मिलकर अम्ल बनाते हैं जिससे अम्लीय वर्षा होती है।"
    },
    {
      qEn: "What is biological oxygen demand (BOD) used as an indicator of?",
      qHi: "बायोलॉजिकल ऑक्सीजन डिमांड (BOD) का उपयोग किसका सूचक मापने के लिए किया जाता है?",
      optionsEn: ["Water pollution levels (organic matter pollution in water bodies)", "Air purity", "Soil fertility", "Radiation levels"],
      optionsHi: ["जल प्रदूषण का स्तर (जलाशयों में कार्बनिक पदार्थों का प्रदूषण)", "वायु शुद्धता", "मिट्टी की उर्वरता", "विकिरण स्तर"],
      answer: 0,
      exp: "Explanation (En): BOD measures the amount of dissolved oxygen needed by aerobic biological organisms to break down organic material in water.\nस्पष्टीकरण (Hi): पानी में कार्बनिक कचरे को गलाने के लिए बैक्टीरिया जितनी ऑक्सीजन की खपत करते हैं, उसे BOD कहते हैं जो जल प्रदूषण का पैमाना है।"
    },
    {
      qEn: "What is a trophic level in a food chain?",
      qHi: "खाद्य श्रृंखला में 'पोषण स्तर' (Trophic level) क्या दर्शाता है?",
      optionsEn: ["The specific feeding position or step occupied by an organism in a food chain", "The physical size of an animal", "The geographical location", "The speed of movement"],
      optionsHi: ["खाद्य श्रृंखला में किसी जीव द्वारा प्राप्त की जाने वाली विशिष्ट पोषण स्थिति या चरण", "जानवर का भौतिक आकार", "भौगोलिक स्थिति", "चलने की गति"],
      answer: 0,
      exp: "Explanation (En): Trophic levels represent the hierarchical feeding steps in an ecosystem, starting with producers at level one.\nस्पष्टीकरण (Hi): पोषण स्तर खाद्य श्रृंखला में जीवों की ऊर्जा या भोजन प्राप्त करने के पायदान को दर्शाता है।"
    },
    {
      qEn: "Which international agreement set legally binding targets to reduce greenhouse gas emissions?",
      qHi: "ग्रीनहाउस गैस उत्सर्जन को कम करने के लिए किस अंतरराष्ट्रीय समझौते ने कानूनी रूप से बाध्यकारी लक्ष्य तय किए थे?",
      optionsEn: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Ramsar Convention"],
      optionsHi: ["क्योटो प्रोटोकॉल (Kyoto Protocol)", "मॉन्ट्रियल प्रोटोकॉल", "पेरिस समझौता", "रामसर कन्वेंशन"],
      answer: 0,
      exp: "Explanation (En): The Kyoto Protocol (1997) operationalized the United Nations Framework Convention on Climate Change by committing industrialized countries to emission targets.\nस्पष्टीकरण (Hi): 1997 का क्योटो प्रोटोकॉल देशों के लिए ग्रीनहाउस गैस उत्सर्जन घटाने के कानूनी लक्ष्य तय करने से जुड़ा है।"
    },
    {
      qEn: "What is the term for a group of individuals of the same species living in a specific area at the same time?",
      qHi: "एक ही समय में एक निश्चित क्षेत्र में रहने वाली एक ही प्रजाति के जीवों के समूह को क्या कहा जाता है?",
      optionsEn: ["Population (समष्टि / आबादी)", "Community", "Ecosystem", "Biome"],
      optionsHi: ["समष्टि या आबादी (Population)", "समुदाय", "इकोसिस्टम", "बायोम"],
      answer: 0,
      exp: "Explanation (En): A population is a group of interbreeding individuals of the same species residing in a defined geographic space.\nस्पष्टीकरण (Hi): एक निश्चित क्षेत्र में एक ही प्रजाति के सभी जीवों के कुल समूह को आबादी या पॉपुलेशन (Population) कहते हैं।"
    }
  ],
    "Internal Structure of the Earth": [
    {
      qEn: "What are the three primary layers of the Earth's interior based on chemical composition?",
      qHi: "रासायनिक संरचना के आधार पर पृथ्वी के आंतरिक भाग की तीन प्राथमिक परतें कौन सी हैं?",
      optionsEn: ["Crust, Mantle, and Core", "Lithosphere, Asthenosphere, and Mesosphere", "Sial, Sima, and Nife", "Core, Crust, and Atmosphere"],
      optionsHi: ["क्रस्ट, मेंटल और कोर (Crust, Mantle, and Core)", "स्थलमंडल, एस्थेनोस्फीयर और मेसोस्फीयर", "सियाल, सीमा और नाइफे", "कोर, क्रस्ट और वायुमंडल"],
      answer: 0,
      exp: "Explanation (En): Geologically, the Earth's interior is divided into three concentric layers: the outermost crust, the middle mantle, and the innermost core.\nस्पष्टीकरण (Hi): भूवैज्ञानिक रूप से पृथ्वी के आंतरिक भाग को तीन संकेंद्रित परतों में बांटा गया है: क्रस्ट, मेंटल और कोर।"
    },
    {
      qEn: "Who discovered the seismic discontinuity separating the Earth's crust from the mantle?",
      qHi: "पृथ्वी के क्रस्ट को मेंटल से अलग करने वाली भूकंपीय असंबद्धता (Discontinuity) की खोज किसने की थी?",
      optionsEn: ["Andrija Mohorovičić (Moho discontinuity)", "Beno Gutenberg", "Lehman", "Repetti"],
      optionsHi: ["एंड्रीजा मोहरोविčić (मोहो असंबद्धता)", "बिनो गुटेनबर्ग", "लेहमैन", "रेपेटी"],
      answer: 0,
      exp: "Explanation (En): The Mohorovičić (Moho) discontinuity marks the boundary between the crust and the upper mantle.\nस्पष्टीकरण (Hi): मोहो असंबद्धता (Moho discontinuity) क्रस्ट और मेंटल के बीच की सीमा रेखा है जिसकी खोज मोहोरोविčić ने की थी।"
    },
    {
      qEn: "Which seismic discontinuity separates the Earth's mantle from the core?",
      qHi: "पृथ्वी के मेंटल को कोर से अलग करने वाली भूकंपीय असंबद्धता कौन सी है?",
      optionsEn: ["Gutenberg discontinuity", "Mohorovičić discontinuity", "Repetti discontinuity", "Lehman discontinuity"],
      optionsHi: ["गुटेनबर्ग असंबद्धता (Gutenberg discontinuity)", "मोहो असंबद्धता", "रेपेटी असंबद्धता", "लेहमैन असंबद्धता"],
      answer: 0,
      exp: "Explanation (En): The Gutenberg discontinuity lies at a depth of about 2,900 km, separating the lower mantle from the outer core.\nस्पष्टीकरण (Hi): गुटेनबर्ग असंबद्धता लगभग 2900 किमी की गहराई पर मेंटल और बाह्य कोर के बीच स्थित है।"
    },
    {
      qEn: "What is the outermost solid layer of the Earth called?",
      qHi: "पृथ्वी की सबसे बाहरी ठोस परत को क्या कहा जाता है?",
      optionsEn: ["Crust (क्रस्ट / भूपर्पटी)", "Mantle", "Core", "Lithosphere"],
      optionsHi: ["क्रस्ट या भूपर्पटी (Crust)", "मेंटल", "कोर", "स्थलमंडल"],
      answer: 0,
      exp: "Explanation (En): The crust is the outermost solid shell of the Earth, accounting for less than 1% of Earth's volume.\nस्पष्टीकरण (Hi): क्रस्ट पृथ्वी की सबसे पतली और बाहरी ठोस परत है।"
    },
    {
      qEn: "Which elements are predominantly found in the continental crust (often termed 'SIAL'?)",
      qHi: "महाद्वीपीय क्रस्ट में मुख्य रूप से कौन से तत्व पाए जाते हैं (जिसे अक्सर 'सियाल' कहा जाता है)?",
      optionsEn: ["Silicon and Aluminium", "Silicon and Magnesium", "Nickel and Iron", "Iron and Magnesium"],
      optionsHi: ["सिलिकॉन और एल्युमिनियम (Silicon and Aluminium)", "सिलिकॉन और मैग्नीशियम", "निकल और लोहा", "लोहा और मैग्नीशियम"],
      answer: 0,
      exp: "Explanation (En): The continental crust is rich in silica and aluminium, giving it the acronym SIAL.\nस्पष्टीकरण (Hi): महाद्वीपीय क्रस्ट मुख्य रूप से सिलिका (Si) और एल्युमिनियम (Al) से बनी है, इसलिए इसे SIAL कहते हैं।"
    },
    {
      qEn: "Which elements are predominantly found in the oceanic crust (often termed 'SIMA'?)",
      qHi: "महासागरीय क्रस्ट में मुख्य रूप से कौन से तत्व पाए जाते हैं (जिसे 'सीमा' कहा जाता है)?",
      optionsEn: ["Silicon and Magnesium", "Silicon and Aluminium", "Iron and Nickel", "Calcium and Sodium"],
      optionsHi: ["सिलिकॉन और मैग्नीशियम (Silicon and Magnesium)", "सिलिकॉन और एल्युमिनियम", "लोहा और निकल", "कैल्शियम और सोडियम"],
      answer: 0,
      exp: "Explanation (En): The oceanic crust is denser and composed largely of silica and magnesium, referred to as SIMA.\nस्पष्टीकरण (Hi): महासागरीय क्रस्ट सिलिका और मैग्नीशियम (SIMA) से समृद्ध होती है और भारी चट्टानों से बनी होती है।"
    },
    {
      qEn: "What is the layer of the Earth lying directly below the crust called?",
      qHi: "क्रस्ट के ठीक नीचे स्थित पृथ्वी की परत को क्या कहा जाता है?",
      optionsEn: ["Mantle (मेंटल)", "Core", "Lithosphere", "Atmosphere"],
      optionsHi: ["मेंटल (Mantle)", "कोर", "स्थलमंडल", "वायुमंडल"],
      answer: 0,
      exp: "Explanation (En): The mantle extends from the Moho discontinuity down to about 2,900 km, making up about 84% of Earth's volume.\nस्पष्टीकरण (Hi): मेंटल पृथ्वी के आयतन का लगभग 84% हिस्सा घेरता है जो क्रस्ट के नीचे स्थित है।"
    },
    {
      qEn: "What is the semi-fluid, partially molten upper layer of the mantle upon which tectonic plates float called?",
      qHi: "मेंटल के ऊपरी हिस्से के उस अर्द्ध-तरल (semi-fluid) भाग को क्या कहते हैं जिस पर टेक्टोनिक प्लेटें तैरती हैं?",
      optionsEn: ["Asthenosphere (एस्थेनोस्फीयर)", "Lithosphere", "Barisosphere", "Mesosphere"],
      optionsHi: ["एस्थेनोस्फीयर (Asthenosphere)", "स्थलमंडल", "बैरीस्फेयर", "मेसोस्फीयर"],
      answer: 0,
      exp: "Explanation (En): The asthenosphere is a ductile, weaker upper mantle layer that facilitates tectonic plate movement.\nस्पष्टीकरण (Hi): एस्थेनोस्फीयर में मैग्मा जैसी प्लास्टिक अवस्था होती है जिस पर महाद्वीपीय प्लेटें गति करती हैं।"
    },
    {
      qEn: "What is the innermost layer of the Earth composed primarily of nickel and iron (NIFE)?",
      qHi: "मुख्य रूप से निकल और लोहे (NIFE) से बनी पृथ्वी की सबसे आंतरिक परत को क्या कहते हैं?",
      optionsEn: ["Core (कोर / क्रोड)", "Crust", "Mantle", "Lithosphere"],
      optionsHi: ["कोर या क्रोड (Core)", "क्रस्ट", "मेंटल", "स्थलमंडल"],
      answer: 0,
      exp: "Explanation (En): The Earth's core is rich in heavy metals like nickel and iron, giving it the term NIFE.\nस्पष्टीकरण (Hi): पृथ्वी के केंद्र में स्थित कोर भारी धातुओं निकल (Ni) और फेरम/लोहा (Fe) से बनी है, जिसे NIFE कहते हैं।"
    },
    {
      qEn: "Is the outer core of the Earth liquid or solid?",
      qHi: "पृथ्वी का बाहरी कोर (Outer core) तरल अवस्था में है या ठोस?",
      optionsEn: ["Liquid (तरल)", "Solid (ठोस)", "Gas", "Plasma"],
      optionsHi: ["तरल (Liquid)", "ठोस (Solid)", "गैस", "प्लाज्मा"],
      answer: 0,
      exp: "Explanation (En): The outer core is liquid iron-nickel alloy, whose circulation generates Earth's magnetic field.\nस्पष्टीकरण (Hi): पृथ्वी का बाह्य कोर पिघली हुई अवस्था (तरल) में है, जबकि आंतरिक कोर अत्यधिक दबाव के कारण ठोस है।"
    },
    {
      qEn: "Is the inner core of the Earth liquid or solid?",
      qHi: "पृथ्वी का आंतरिक कोर (Inner core) किस अवस्था में है?",
      optionsEn: ["Solid (ठोस) due to extreme pressure", "Liquid", "Gas", "Semi-fluid"],
      optionsHi: ["अत्यधिक दबाव के कारण ठोस (Solid)", "तरल", "गैस", "अर्ध-तरल"],
      answer: 0,
      exp: "Explanation (En): Despite extreme temperatures, immense pressure at Earth's center keeps the inner core in a solid state.\nस्पष्टीकरण (Hi): अत्यधिक दबाव के कारण केंद्र में तापमान अधिक होने के बावजूद आंतरिक कोर ठोस अवस्था में रहता है।"
    },
    {
      qEn: "What are primary seismic waves (P-waves)?",
      qHi: "प्राथमिक भूकंपीय तरंगें (P-waves) किस प्रकार की तरंगें होती हैं?",
      optionsEn: ["Longitudinal (compressional) waves that can travel through both solids and liquids", "Transverse waves passing only through solids", "Surface waves only", "Sound waves in air"],
      optionsHi: ["अनुदैर्ध्य (संपीड़न) तरंगें जो ठोस और तरल दोनों माध्यमों से गुजर सकती हैं", "केवल ठोस से गुजरने वाली अनुप्रस्थ तरंगें", "केवल सतही तरंगें", "हवा में ध्वनि तरंगें"],
      answer: 0,
      exp: "Explanation (En): P-waves are the fastest seismic waves and can travel through all states of matter (solid, liquid, gas).\nस्पष्टीकरण (Hi): P-वेव्स सबसे तेज चलने वाली तरंगें हैं जो ठोस, द्रव और गैस तीनों से गुजर सकती हैं।"
    },
    {
      qEn: "What are secondary seismic waves (S-waves)?",
      qHi: "द्वितीयक भूकंपीय तरंगें (S-waves) की क्या विशेषता है?",
      optionsEn: ["Transverse (shear) waves that can travel ONLY through solids and are blocked by liquids", "Waves passing through liquid core", "Longitudinal waves", "Fastest waves"],
      optionsHi: ["अनुप्रस्थ (shear) तरंगें जो केवल ठोस से गुजर सकती हैं और तरल द्वारा रोक दी जाती हैं", "तरल कोर से गुजरने वाली तरंगें", "अनुदैर्ध्य तरंगें", "सबसे तेज तरंगें"],
      answer: 0,
      exp: "Explanation (En): S-waves cannot travel through liquids, which is how scientists discovered the outer core is liquid.\nस्पष्टीकरण (Hi): S-वेव्स तरल माध्यम से नहीं गुजर सकतीं, इसी से पता चला कि बाहरी कोर तरल है।"
    },
    {
      qEn: "What is a 'shadow zone' of seismic waves?",
      qHi: "भूकंपीय तरंगों का 'छाया क्षेत्र' (Shadow zone) किसे कहते हैं?",
      optionsEn: ["An area where seismographs do not record earthquake waves due to refraction and reflection by Earth's layers", "An area with zero gravity", "The darkest part of earth", "Crust fracture line"],
      optionsHi: ["वह क्षेत्र जहाँ पृथ्वी की परतों द्वारा अपवर्तन और परावर्तन के कारण भूकंपीय तरंगें रिकॉर्ड नहीं होतीं", "शून्य गुरुत्वाकर्षण क्षेत्र", "पृथ्वी का सबसे अंधकारमय भाग", "क्रस्ट की दरार रेखा"],
      answer: 0,
      exp: "Explanation (En): Shadow zones are specific zones where P-waves or S-waves are absent, providing vital clues about Earth's internal structure.\nस्पष्टीकरण (Hi): छाया क्षेत्र वह क्षेत्र है जहाँ भूकंपीय तरंगें दर्ज नहीं की जातीं, जिससे आंतरिक परतों का पता चलता है।"
    },
    {
      qEn: "What is the shadow zone span for S-waves?",
      qHi: "S-तरंगों का छाया क्षेत्र (Shadow zone) कितने डिग्री से कितने डिग्री के बीच फैला होता है?",
      optionsEn: ["Beyond 105° from the epicenter (forming a large band)", "Between 105° and 140°", "Only at poles", "Zero degrees"],
      optionsHi: ["अधिकेंद्र से 105° से आगे का पूरा क्षेत्र", "105° और 140° के बीच", "केवल ध्रुवों पर", "शून्य डिग्री"],
      answer: 0,
      exp: "Explanation (En): Because S-waves cannot pass through the liquid outer core, a wide S-wave shadow zone exists beyond 105° from the epicenter.\nस्पष्टीकरण (Hi): चूंकि S-वेव्स तरल कोर से नहीं गुजरतीं, इसलिए 105° से आगे का पूरा क्षेत्र S-वेव्स का छाया क्षेत्र बन जाता है।"
    },
    {
      qEn: "What is the direct source of information about Earth's interior among the following?",
      qHi: "निम्नलिखित में से पृथ्वी के आंतरिक भाग की जानकारी का प्रत्यक्ष स्रोत (Direct source) कौन सा है?",
      optionsEn: ["Volcanic eruptions (lava/magma) and deep drilling", "Seismic waves", "Gravitational anomalies", "Magnetic surveys"],
      optionsHi: ["ज्वालामुखी उद्गार (लावा/मैग्मा) और गहरी ड्रिलिंग", "भूकंपीय तरंगें", "गुरुत्वाकर्षण असंगति", "चुंबकीय सर्वेक्षण"],
      answer: 0,
      exp: "Explanation (En): Volcanic eruptions bring actual molten material from deep underground, serving as a direct source of interior study.\nस्पष्टीकरण (Hi): ज्वालामुखी से निकलने वाला लावा और गहरी खदानों से निकाले गए नमूने आंतरिक संरचना के प्रत्यक्ष स्रोत हैं।"
    },
    {
      qEn: "What are indirect sources of information about the Earth's interior?",
      qHi: "पृथ्वी के आंतरिक भाग के अध्ययन के अप्रत्यक्ष स्रोत (Indirect sources) कौन से हैं?",
      optionsEn: ["Seismic waves, gravitational force, magnetic field, and meteorites", "Direct rock drilling", "Lava sampling", "Surface soil testing"],
      optionsHi: ["भूकंपीय तरंगें, गुरुत्वाकर्षण बल, चुंबकीय क्षेत्र और उल्कापिंड", "प्रत्यक्ष रॉक ड्रिलिंग", "लावा का नमूना लेना", "सतही मिट्टी की जाँच"],
      answer: 0,
      exp: "Explanation (En): Seismic waves, meteorites, gravity, and magnetic anomalies provide indirect evidence about deep interior composition.\nस्पष्टीकरण (Hi): भूकंपीय तरंगें, गुरुत्वाकर्षण और उल्कापिंड अप्रत्यक्ष स्रोत हैं क्योंकि हम पृथ्वी के केंद्र तक सीधे नहीं पहुँच सकते।"
    },
    {
      qEn: "What is the average density of the Earth as a whole?",
      qHi: "संपूर्ण पृथ्वी का औसत घनत्व (Average density) लगभग कितना है?",
      optionsEn: ["5.5 g/cm³", "2.7 g/cm³", "10.5 g/cm³", "1.0 g/cm³"],
      optionsHi: ["5.5 ग्राम/सेमी³", "2.7 ग्राम/सेमी³", "10.5 ग्राम/सेमी³", "1.0 ग्राम/सेमी³"],
      answer: 0,
      exp: "Explanation (En): While surface rocks have a density of about 2.7 g/cm³, Earth's overall average density is calculated to be 5.5 g/cm³ due to heavy core metals.\nस्पष्टीकरण (Hi): सतह की चट्टानों का घनत्व कम होता है, लेकिन भारी कोर के कारण पूरी पृथ्वी का औसत घनत्व लगभग 5.5 g/cm³ है।"
    },
    {
      qEn: "How does temperature change as we go deeper into the Earth's interior?",
      qHi: "पृथ्वी के आंतरिक भाग में गहराई की ओर जाने पर तापमान में क्या परिवर्तन होता है?",
      optionsEn: ["It increases progressively with depth", "It decreases", "It remains constant", "It drops to zero at the core"],
      optionsHi: ["गहराई के साथ लगातार बढ़ता जाता है", "घटता है", "स्थिर रहता है", "कोर पर शून्य हो जाता है"],
      answer: 0,
      exp: "Explanation (En): Temperature increases with depth inside the Earth, though the rate of increase slows down towards the center.\nस्पष्टीकरण (Hi): पृथ्वी के अंदर गहराई में जाने पर तापमान लगातार बढ़ता जाता है।"
    },
    {
      qEn: "What is the geothermal gradient?",
      qHi: "भूतापीय प्रवणता (Geothermal gradient) से क्या तात्पर्य है?",
      optionsEn: ["The rate of increase in temperature with respect to increasing depth in the Earth's interior", "Rate of earthquake occurrence", "Magnetic field variation", "Pressure increase rate"],
      optionsHi: ["पृथ्वी के आंतरिक भाग में गहराई बढ़ने के साथ तापमान में वृद्धि की दर", "भूकंप आने की दर", "चुंबकीय क्षेत्र में बदलाव", "दबाव बढ़ने की दर"],
      answer: 0,
      exp: "Explanation (En): The geothermal gradient defines how fast the temperature rises as you descend deeper into the Earth.\nस्पष्टीकरण (Hi): गहराई बढ़ने के साथ प्रति किलोमीटर तापमान जितनी तेजी से बढ़ता है, उसे भूतापीय प्रवणता कहते हैं।"
    },
    {
      qEn: "What is lithosphere?",
      qHi: "स्थलमंडल (Lithosphere) किसे कहते हैं?",
      optionsEn: ["The rigid outer shell of the Earth comprising the crust and uppermost solid mantle", "Only the liquid core", "Atmosphere layer", "Ocean water body"],
      optionsHi: ["क्रस्ट और ऊपरी ठोस मेंटल से मिलकर बनी पृथ्वी की कठोर बाहरी परत", "केवल तरल कोर", "वायुमंडल की परत", "महासागरीय जल निकाय"],
      answer: 0,
      exp: "Explanation (En): The lithosphere includes the crust and the top rigid part of the mantle, extending down to about 100 km.\nस्पष्टीकरण (Hi): स्थलमंडल में क्रस्ट और ऊपरी मेंटल का ठोस हिस्सा शामिल होता है जो लगभग 100 किमी की गहराई तक है।"
    },
    {
      qEn: "What is isostasy?",
      qHi: "आइसोस्टेसी या भू-संतुलन (Isostasy) का सिद्धांत क्या स्पष्ट करता है?",
      optionsEn: ["The gravitational equilibrium between Earth's lithosphere and asthenosphere", "Plate tectonic volcanic eruption", "Earthquake magnitude measurement", "Ocean current flow"],
      optionsHi: ["पृथ्वी के स्थलमंडल और एस्थेनोस्फीयर के बीच गुरुत्वाकर्षण संतुलन", "प्लेट टेक्टोनिक ज्वालामुखी उद्गार", "भूकंप की तीव्रता मापन", "महासागरीय धारा प्रवाह"],
      answer: 0,
      exp: "Explanation (En): Isostasy describes the buoyant equilibrium of Earth's crust floating on the denser mantle below.\nस्पष्टीकरण (Hi): आइसोस्टेसी यह समझाती है कि कैसे हल्के महाद्वीप और भारी महासागर मेंटल पर संतुलन बनाए रखते हैं।"
    },
    {
      qEn: "Which layer contains the Earth's magnetic field generator?",
      qHi: "पृथ्वी के चुंबकीय क्षेत्र का मुख्य जनरेटर कौन सी परत है?",
      optionsEn: ["Outer core (liquid iron convection currents)", "Crust", "Inner solid core", "Upper mantle"],
      optionsHi: ["बाहरी कोर (तरल लोहे की संवहन धाराएं)", "क्रस्ट", "आंतरिक ठोस कोर", "ऊपरी मेंटल"],
      answer: 0,
      exp: "Explanation (En): Convection currents of molten iron in the outer core generate Earth's powerful magnetic field via dynamo effect.\nस्पष्टीकरण (Hi): बाहरी कोर में पिघले हुए लोहे की धाराओं (डाइनो प्रभाव) के कारण पृथ्वी का चुंबकीय क्षेत्र उत्पन्न होता है।"
    },
    {
      qEn: "What is meteoroid evidence regarding Earth's interior structure?",
      qHi: "पृथ्वी की आंतरिक संरचना के संबंध में उल्कापिंडों (Meteorites) का क्या महत्व है?",
      optionsEn: ["They provide clues about Earth's core composition since meteorites formed from similar primordial material", "They prove Earth is hollow", "They show atmosphere composition", "They indicate ocean depth"],
      optionsHi: ["वे पृथ्वी के कोर की संरचना के बारे में संकेत देते हैं क्योंकि उल्कापिंड भी समान प्रारंभिक सामग्री से बने हैं", "वे साबित करते हैं कि पृथ्वी खोखली है", "वे वायुमंडल रचना दिखाते हैं", "वे महासागर की गहराई बताते हैं"],
      answer: 0,
      exp: "Explanation (En): Meteorites often have iron-nickel composition similar to Earth's heavy core, supporting internal composition models.\nस्पष्टीकरण (Hi): उल्कापिंडों में भी लोहा और निकल पाया जाता है, जो पृथ्वी के आंतरिक भाग (कोर) के बारे में अनुमान लगाने में मदद करता है।"
    },
    {
      qEn: "What is the Repetti discontinuity located between?",
      qHi: "रेपेटी असंबद्धता (Repetti discontinuity) किन दो परतों के बीच स्थित होती है?",
      optionsEn: ["Upper mantle and Lower mantle", "Crust and Mantle", "Outer core and Inner core", "Mantle and Core"],
      optionsHi: ["ऊपरी मेंटल और निचला मेंटल", "क्रस्ट और मेंटल", "बाहरी कोर और आंतरिक कोर", "मेंटल और कोर"],
      answer: 0,
      exp: "Explanation (En): The Repetti discontinuity separates the upper mantle from the lower mantle within the Earth's interior.\nस्पष्टीकरण (Hi): रेपेटी असंबद्धता ऊपरी मेंटल और निचले मेंटल के बीच की सीमा है।"
    },
    {
      qEn: "What is the Lehman discontinuity located between?",
      qHi: "लेहमैन असंबद्धता (Lehman discontinuity) किन परतों के बीच पाई जाती है?",
      optionsEn: ["Outer core and Inner core", "Crust and Mantle", "Upper and Lower mantle", "Surface and Crust"],
      optionsHi: ["बाहरी कोर और आंतरिक कोर (Outer and Inner core)", "क्रस्ट और मेंटल", "ऊपरी और निचला मेंटल", "सतह और क्रस्ट"],
      answer: 0,
      exp: "Explanation (En): Inge Lehman discovered the transition boundary separating the liquid outer core from the solid inner core.\nस्पष्टीकरण (Hi): इंगे लेहमैन ने बाह्य तरल कोर और आंतरिक ठोस कोर के बीच की इस सीमा की खोज की थी।"
    },
    {
      qEn: "Why do seismic P-waves bend (refract) when passing through the Earth's interior?",
      qHi: "पृथ्वी के आंतरिक भाग से गुजरते समय भूकंपीय P-तरंगें क्यों मुड़ (अपवर्तित) जाती हैं?",
      optionsEn: ["Due to changes in density and elasticity of different rock layers", "Due to wind pressure", "Due to magnetic pull", "Due to ocean tides"],
      optionsHi: ["विभिन्न चट्टानी परतों के घनत्व और प्रत्यास्थता (elasticity) में बदलाव के कारण", "वायु दबाव के कारण", "चुंबकीय खिंचाव के कारण", "समुद्री ज्वार के कारण"],
      answer: 0,
      exp: "Explanation (En): Seismic waves change speed and direction as they pass through materials of varying density and physical state inside Earth.\nस्पष्टीकरण (Hi): अलग-अलग घनत्व और अवस्था वाली परतों से गुजरने पर तरंगों की गति और दिशा बदल जाती है।"
    },
    {
      qEn: "What percentage of the Earth's total mass is accounted for by the mantle?",
      qHi: "पृथ्वी के कुल द्रव्यमान का लगभग कितना प्रतिशत हिस्सा मेंटल द्वारा बनाया जाता है?",
      optionsEn: ["About 67%", "Less than 1%", "About 32%", "99%"],
      optionsHi: ["लगभग 67%", "1% से कम", "लगभग 32%", "99%"],
      answer: 0,
      exp: "Explanation (En): The mantle constitutes about 67-68% of Earth's mass, while the core makes up about 31% and crust less than 1%.\nस्पष्टीकरण (Hi): मेंटल पृथ्वी के कुल द्रव्यमान का लगभग 67-68% हिस्सा है, जबकि कोर लगभग 31% और क्रस्ट 1% से कम है।"
    },
    {
      qEn: "What is the approximate depth of the boundary between the Earth's mantle and core?",
      qHi: "पृथ्वी के मेंटल और कोर के बीच की सीमा लगभग कितनी गहराई पर स्थित है?",
      optionsEn: ["2,900 kilometers", "100 kilometers", "6,371 kilometers", "500 kilometers"],
      optionsHi: ["2,900 किलोमीटर", "100 किलोमीटर", "6,371 किलोमीटर", "500 किलोमीटर"],
      answer: 0,
      exp: "Explanation (En): The Gutenberg discontinuity separating mantle and core is located approximately 2,900 km below the surface.\nस्पष्टीकरण (Hi): मेंटल और कोर को अलग करने वाली गुटेनबर्ग असंबद्धता लगभग 2900 किमी की गहराई पर है।"
    },
    {
      qEn: "What is the approximate radius of the planet Earth from surface to center?",
      qHi: "सतह से केंद्र तक पृथ्वी की लगभग कुल त्रिज्या (Radius) कितनी है?",
      optionsEn: ["6,371 kilometers", "3,000 kilometers", "12,000 kilometers", "1,500 kilometers"],
      optionsHi: ["6,371 किलोमीटर", "3,000 किलोमीटर", "12,000 किलोमीटर", "1,500 किलोमीटर"],
      answer: 0,
      exp: "Explanation (En): The mean radius of the Earth from its surface to its deep center is approximately 6,371 km.\nस्पष्टीकरण (Hi): सतह से पृथ्वी के केंद्र तक की औसत त्रिज्या लगभग 6,371 किलोमीटर है।"
    }
  ],
    "Rocks and Minerals": [
    {
      qEn: "What is the scientific study of rocks called?",
      qHi: "चट्टानों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
      optionsEn: ["Petrology", "Mineralogy", "Geology", "Stratigraphy"],
      optionsHi: ["पेट्रोलॉजी (Petrology - शैल विज्ञान)", "मिनरलोजी", "जियोलॉजी", "स्ट्रेटोग्राफी"],
      answer: 0,
      exp: "Explanation (En): Petrology is the branch of geology that studies the origin, structure, composition, and conditions of formation of rocks.\nस्पष्टीकरण (Hi): चट्टानों की उत्पत्ति, संरचना और उनके गठन के तरीकों के अध्ययन को पेट्रोलॉजी (शैल विज्ञान) कहते हैं।"
    },
    {
      qEn: "What is the scientific study of minerals called?",
      qHi: "खनिजों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
      optionsEn: ["Mineralogy", "Petrology", "Paleontology", "Geomorphology"],
      optionsHi: ["मिनरलोजी (Mineralogy - खनिज विज्ञान)", "पेट्रोलॉजी", "पेलियोन्टोलॉजी", "जियोमॉर्फोलॉजी"],
      answer: 0,
      exp: "Explanation (En): Mineralogy is the scientific study of mineral chemistry, physical properties, crystal structure, and occurrence.\nस्पष्टीकरण (Hi): खनिजों की रासायनिक संरचना, भौतिक गुणों और क्रिस्टल स्वरूप के अध्ययन को मिनरलोजी कहते हैं।"
    },
    {
      qEn: "What are rocks primarily composed of?",
      qHi: "चट्टानें मुख्य रूप से किससे बनी होती हैं?",
      optionsEn: ["One or more minerals", "Organic carbon only", "Molten water", "Solid gases"],
      optionsHi: ["एक या एक से अधिक खनिजों से", "केवल कार्बनिक पदार्थ", "पिघला हुआ पानी", "ठोस गैसें"],
      answer: 0,
      exp: "Explanation (En): A rock is a naturally occurring solid aggregate of one or more minerals or mineraloids.\nस्पष्टीकरण (Hi): चट्टानें एक या एक से अधिक खनिजों के प्राकृतिक रूप से मिलने वाले ठोस मिश्रण या समुच्चय होती हैं।"
    },
    {
      qEn: "What is the primary mineral group that makes up most of the Earth's crust?",
      qHi: "पृथ्वी की क्रस्ट का अधिकांश हिस्सा बनाने वाला प्राथमिक खनिज समूह कौन सा है?",
      optionsEn: ["Silicates", "Carbonates", "Oxides", "Sulfides"],
      optionsHi: ["सिलिकेट्स (Silicates)", "कार्बोनेटस", "ऑक्साइज", "सल्फाइड्स"],
      answer: 0,
      exp: "Explanation (En): Silicate minerals, composed of silicon and oxygen, make up over 90% of the Earth's crust.\nस्पष्टीकरण (Hi): सिलिकॉन और ऑक्सीजन से बने सिलिकेट खनिज पृथ्वी की भूपर्पटी का 90% से अधिक हिस्सा बनाते हैं।"
    },
    {
      qEn: "How are igneous rocks formed?",
      qHi: "आग्नेय चट्टानों (Igneous rocks) का निर्माण कैसे होता है?",
      optionsEn: ["Cooling and solidification of molten magma or lava", "Deposition of sediments", "Heat and pressure transformation", "Evaporation of water"],
      optionsHi: ["पिघले हुए मैग्मा या लावा के ठंडे होने और जमने से", "अवसादों के जमाव से", "गर्मी और दबाव के रूपांतरण से", "पानी के वाष्पीकरण से"],
      answer: 0,
      exp: "Explanation (En): Igneous rocks form when hot, molten rock (magma or lava) cools and solidifies into crystals.\nस्पष्टीकरण (Hi): पृथ्वी के भीतर का मैग्मा या बाहर आया लावा जब ठंडा होकर ठोस बनता है, तो आग्नेय चट्टानें बनती हैं।"
    },
    {
      qEn: "Which of the following is an example of an intrusive igneous rock (plutonic rock)?",
      qHi: "निम्नलिखित में से कौन सी एक आंतरिक (इंट्रूसिव) आग्नेय चट्टान का उदाहरण है?",
      optionsEn: ["Granite", "Basalt", "Pumice", "Obsidian"],
      optionsHi: ["ग्रेनाइट (Granite)", "बेसाल्ट", "प्यूमिक", "ऑब्सिडियन"],
      answer: 0,
      exp: "Explanation (En): Granite forms when magma cools slowly deep beneath the Earth's surface, allowing large mineral crystals to grow.\nस्पष्टीकरण (Hi): ग्रेनाइट एक आंतरिक आग्नेय चट्टान है जो जमीन के नीचे मैग्मा के धीरे-धीरे ठंडे होने से बनती है।"
    },
    {
      qEn: "Which of the following is an example of an extrusive igneous rock (volcanic rock)?",
      qHi: "निम्नलिखित में से कौन सी एक बाहरी (एक्सट्रूसिव) आग्नेय चट्टान का उदाहरण है?",
      optionsEn: ["Basalt", "Granite", "Gabbro", "Diorite"],
      optionsHi: ["बेसाल्ट (Basalt)", "ग्रेनाइट", "गैब्रो", "डiorite"],
      answer: 0,
      exp: "Explanation (En): Basalt forms when lava erupts onto the Earth's surface and cools rapidly, resulting in fine-grained crystals.\nस्पष्टीकरण (Hi): बेसाल्ट सतह पर आकर लावा के तेजी से ठंडे होने से बनने वाली बाहरी आग्नेय चट्टान है।"
    },
    {
      qEn: "Why are igneous rocks often referred to as 'primary rocks'?",
      qHi: "आग्नेय चट्टानों को अक्सर 'प्राथमिक चट्टानें' (Primary rocks) क्यों कहा जाता है?",
      optionsEn: ["Because all other rock types are ultimately derived from them", "Because they are the softest rocks", "Because they contain fossils", "Because they form only underwater"],
      optionsHi: ["क्योंकि अन्य सभी प्रकार की चट्टानें मूल रूप से इन्हीं से बनती हैं", "क्योंकि ये सबसे नरम चट्टानें हैं", "क्योंकि इनमें जीवाश्म होते हैं", "क्योंकि ये केवल पानी के नीचे बनती हैं"],
      answer: 0,
      exp: "Explanation (En): Igneous rocks are called primary rocks because they formed first from the cooling of Earth's primordial molten material.\nस्पष्टीकरण (Hi): चूंकि पृथ्वी के ठंडे होने पर सबसे पहले यही चट्टानें बनी थीं और बाकी चट्टानें इनसे विकसित हुई हैं, इन्हें प्राथमिक चट्टान कहते हैं।"
    },
    {
      qEn: "How are sedimentary rocks formed?",
      qHi: "अवसादी चट्टानों (Sedimentary rocks) का निर्माण कैसे होता है?",
      optionsEn: ["Accumulation, compaction, and cementation of mineral or organic particles (sediments)", "Cooling of lava", "Melting of core rocks", "Direct crystallization from gas"],
      optionsHi: ["खनिज या कार्बनिक कणों (अवसादों) के संचय, संपीडन और सीमेंटेशन से", "लावा के ठंडे होने से", "कोर की चट्टानों के पिघलने से", "गैस से सीधे क्रिस्टलीकरण द्वारा"],
      answer: 0,
      exp: "Explanation (En): Sedimentary rocks form from layers of weathered rock fragments, organic material, or chemical precipitates compressed over time.\nस्पष्टीकरण (Hi): नदियों व हवा द्वारा लाए गए अवसादों के जमा होने और परतों के दबने से अवसादी चट्टानें बनती हैं।"
    },
    {
      qEn: "What is the unique characteristic feature of sedimentary rocks?",
      qHi: "अवसादी चट्टानों की सबसे अनूठी और मुख्य विशेषता क्या होती है?",
      optionsEn: ["Presence of layers or strata (and often fossils)", "Interlocking large crystals", "Extreme hardness like diamond", "Magnetic properties"],
      optionsHi: ["परतों या स्ट्रेटा (और अक्सर जीवाश्मों) की उपस्थिति", "आपस में जुड़े बड़े क्रिस्टल", "हीरे जैसी अत्यधिक कठोरता", "चुंबकीय गुण"],
      answer: 0,
      exp: "Explanation (En): Sedimentary rocks are characterized by distinct layers (stratification) and frequently contain fossils of plants and animals.\nस्पष्टीकरण (Hi): अवसादी चट्टानों में स्पष्ट परतें (Strata) पाई जाती हैं और इनमें प्राचीन जीवों के जीवाश्म (Fossils) भी सुरक्षित रहते हैं।"
    },
    {
      qEn: "Which of the following is an example of a sedimentary rock?",
      qHi: "निम्नलिखित में से कौन सा एक अवसादी चट्टान का उदाहरण है?",
      optionsEn: ["Sandstone, Limestone, and Shale", "Granite and Basalt", "Marble and Slate", "G和ss and Quartzite"],
      optionsHi: ["बलुआ पत्थर (Sandstone), चूना पत्थर और शेल", "ग्रेनाइट और बेसाल्ट", "संगमरमर और स्लेट", "नीस और क्वार्टजाइट"],
      answer: 0,
      exp: "Explanation (En): Sandstone, limestone, shale, and conglomerate are classic sedimentary rocks formed from accumulated particles or precipitates.\nस्पष्टीकरण (Hi): बलुआ पत्थर (Sandstone), चूना पत्थर (Limestone) और शेल प्रमुख अवसादी चट्टानें हैं।"
    },
    {
      qEn: "How are metamorphic rocks formed?",
      qHi: "कायांतरित या रूपांतरित चट्टानों (Metamorphic rocks) का निर्माण कैसे होता है?",
      optionsEn: ["Transformation of existing rocks under intense heat, pressure, and chemically active fluids", "Rapid cooling of lava", "Accumulation of sand by wind", "Surface weathering"],
      optionsHi: ["अत्यधिक गर्मी, दबाव और रासायनिक रूप से सक्रिय तरल पदार्थों के प्रभाव से पुरानी चट्टानों के बदलने से", "लावा के तेज ठंडक से", "हवा द्वारा रेत के जमाव से", "सतही अपक्षय से"],
      answer: 0,
      exp: "Explanation (En): Metamorphism alters pre-existing rocks (igneous, sedimentary, or older metamorphic) without melting them completely.\nस्पष्टीकरण (Hi): जब आग्नेय या अवसादी चट्टानें अत्यधिक ताप और दाब के कारण अपना रूप बदल लेती हैं, तो कायांतरित चट्टानें बनती हैं।"
    },
    {
      qEn: "Which metamorphic rock is formed from the transformation of limestone?",
      qHi: "चूना पत्थर (Limestone) के रूपांतरण से कौन सी कायांतरित चट्टान बनती है?",
      optionsEn: ["Marble (संगमरमर)", "Slate", "Quartzite", "Gneiss"],
      optionsHi: ["संगमरमर (Marble)", "स्लेट", "क्वाटजाइट", "नीस"],
      answer: 0,
      exp: "Explanation (En): Under intense heat and pressure, sedimentary limestone recrystallizes into non-foliated metamorphic rock called marble.\nस्पष्टीकरण (Hi): अत्यधिक ताप और दाब के कारण चूना पत्थर (Limestone) बदलकर संगमरमर (Marble) बन जाता है।"
    },
    {
      qEn: "Which metamorphic rock is formed from the transformation of sandstone?",
      qHi: "बलुआ पत्थर (Sandstone) के रूपांतरण से कौन सी चट्टान बनती है?",
      optionsEn: ["Quartzite (क्वाटजाइट)", "Marble", "Slate", "Schist"],
      optionsHi: ["क्वाटजाइट (Quartzite)", "संगमरमर", "स्लेट", "सिस्ट"],
      answer: 0,
      exp: "Explanation (En): Quartzite is a hard metamorphic rock formed when quartz-rich sandstone is subjected to heat and pressure.\nस्पष्टीकरण (Hi): बलुआ पत्थर के कायांतरण से अत्यंत कठोर 'क्वाटजाइट' (Quartzite) चट्टान का निर्माण होता है।"
    },
    {
      qEn: "Which metamorphic rock is formed from the transformation of shale?",
      qHi: "शेल (Shale) चट्टान के कायांतरण से कौन सी रूपांतरित चट्टान बनती है?",
      optionsEn: ["Slate (स्लेट)", "Granite", "Basalt", "Marble"],
      optionsHi: ["स्लेट (Slate)", "ग्रेनाइट", "बेसाल्ट", "संगमरमर"],
      answer: 0,
      exp: "Explanation (En): Shale subjected to low-grade regional metamorphism transforms into slate, a fine-grained foliated rock.\nस्पष्टीकरण (Hi): शेल (Shale) के दबाव और ताप से रूपांतरित होने पर स्लेट (Slate) बनती है।"
    },
    {
      qEn: "What is the rock cycle?",
      qHi: "शैल चक्र (Rock cycle) क्या दर्शाता है?",
      optionsEn: ["A continuous geological model describing how rocks transform from one type to another over time", "The water evaporation cycle", "Earthquake recurrence cycle", "Rock formation on moon"],
      optionsHi: ["एक निरंतर भूवैज्ञानिक मॉडल जो समय के साथ चट्टानों के एक रूप से दूसरे रूप में बदलने को दर्शाता है", "जल वाष्पीकरण चक्र", "भूकंप पुनरावृत्ति चक्र", "चंद्रमा पर चट्टान निर्माण"],
      answer: 0,
      exp: "Explanation (En): The rock cycle illustrates how igneous, sedimentary, and metamorphic rocks can transition between each other through geological processes.\nस्पष्टीकरण (Hi): शैल चक्र यह बताता है कि कैसे आग्नेय, अवसादी और कायांतरित चट्टानें भूवैज्ञानिक प्रक्रियाओं द्वारा आपस में बदलती रहती हैं।"
    },
    {
      qEn: "What is Mohs hardness scale used for in mineralogy?",
      qHi: "खनिज विज्ञान में 'मोह्स कठोरता पैमाना' (Mohs hardness scale) का उपयोग किसके लिए किया जाता है?",
      optionsEn: ["To measure the scratch resistance (hardness) of minerals from 1 to 10", "To measure mineral weight", "To test mineral magnetism", "To check rock colour"],
      optionsHi: ["1 से 10 तक खनिजों के खरोंच प्रतिरोध (कठोरता) को मापने के लिए", "खनिज वजन मापने के लिए", "खनिज चुंबकत्व परीक्षण के लिए", "चट्टान का रंग जाँचने के लिए"],
      answer: 0,
      exp: "Explanation (En): Developed by Friedrich Mohs, the scale ranks minerals from talc (1) to diamond (10) based on scratch hardness.\nस्पष्टीकरण (Hi): फ्रेडरिक मोह्स द्वारा विकसित इस पैमाने पर टालक (1) से लेकर हीरे (10) तक खनिजों की कठोरता मापी जाती है।"
    },
    {
      qEn: "What is the softest mineral on the Mohs hardness scale (rated 1)?",
      qHi: "मोह्स कठोरता पैमाने पर सबसे नरम खनिज (रेटिंग 1) कौन सा है?",
      optionsEn: ["Talc (टालक)", "Gypsum", "Calcite", "Diamond"],
      optionsHi: ["टालक (Talc - खड़िया मिट्टी)", "जिप्सम", "कैल्साइट", "हीरा"],
      answer: 0,
      exp: "Explanation (En): Talc is the softest known mineral on the Mohs scale, easily scratched by a fingernail.\nस्पष्टीकरण (Hi): टालक (Talc) सबसे मुलायम खनिज है जिसे नाखून से भी खरोंचा जा सकता है।"
    },
    {
      qEn: "What is the hardest natural mineral on the Mohs scale (rated 10)?",
      qHi: "मोह्स पैमाने पर सबसे कठोर प्राकृतिक खनिज (रेटिंग 10) कौन सा है?",
      optionsEn: ["Diamond (हीरा)", "Corundum", "Topaz", "Quartz"],
      optionsHi: ["हीरा (Diamond)", "कोरंडम", "टोपाज", "क्वार्टज"],
      answer: 0,
      exp: "Explanation (En): Diamond is the hardest naturally occurring mineral, capable of scratching all other minerals.\nस्पष्टीकरण (Hi): हीरा (Diamond) प्रकृति में पाया जाने वाला सबसे कठोर खनिज है जिसकी मोह्स रेटिंग 10 है।"
    },
    {
      qEn: "What is cleavage in minerals?",
      qHi: "खनिजों में ' विदलन' या क्लीवेज (Cleavage) से क्या तात्पर्य है?",
      optionsEn: ["The tendency of a mineral to break along smooth, flat planes of weak bonding", "Breaking into rough jagged pieces", "The color of mineral powder", "Magnetic attraction"],
      optionsHi: ["कमजोर बंधनों वाले चिकने, सपाट तलों के साथ खनिज के टूटने की प्रवृत्ति", "खुरदरे टुकड़ों में टूटना", "खनिज पाउडर का रंग", "चुंबकीय आकर्षण"],
      answer: 0,
      exp: "Explanation (En): Mineral cleavage refers to how smoothly a mineral breaks along preferred crystallographic planes of weakness.\nस्पष्टीकरण (Hi): जब कोई खनिज टूटने पर एक निश्चित सपाट और चिकनी सतह बनाता है, तो उसे क्लीवेज (विदलन) कहते हैं।"
    },
    {
      qEn: "What is streak in mineral identification?",
      qHi: "खनिज की पहचान में 'स्ट्रीक' (Streak - रेखा) से क्या मतलब है?",
      optionsEn: ["The color of a mineral's powder when rubbed on an unglazed porcelain plate", "The external color of the whole rock", "The shining surface reflection", "The weight of mineral"],
      optionsHi: ["बिना चमक वाली चीनी मिट्टी की प्लेट पर रगड़ने पर खनिज के चूर्ण का रंग", "पूरी चट्टान का बाहरी रंग", "चमकदार सतह का परावर्तन", "खनिज का वजन"],
      answer: 0,
      exp: "Explanation (En): Streak is the color of a mineral in powdered form, which is often more reliable for identification than its external color.\nस्पष्टीकरण (Hi): किसी खनिज को चीनी मिट्टी की प्लेट पर रगड़ने पर उसके चूर्ण (powder) का जो रंग दिखता है, उसे स्ट्रीक कहते हैं।"
    },
    {
      qEn: "What is luster in minerals?",
      qHi: "खनिजों में 'चमक' या लस्टर (Luster) का क्या अर्थ है?",
      optionsEn: ["The way light interacts with the surface of a mineral (metallic or non-metallic)", "The weight of the mineral", "The hardness scale", "The crystal shape"],
      optionsHi: ["खनिज की सतह से प्रकाश के परावर्तन का तरीका (धात्विक या अधात्विक)", "खनिज का वजन", "कठोरता पैमाना", "क्रिस्टल आकार"],
      answer: 0,
      exp: "Explanation (En): Luster describes how light reflects off a mineral's surface, categorized as metallic, vitreous, pearly, earthy, etc.\nस्पष्टीकरण (Hi): लस्टर यह दर्शाता है कि प्रकाश खनिज की सतह से कैसे परावर्तित होता है (जैसे धात्विक या कांच जैसी चमक)।"
    },
    {
      qEn: "Which mineral group contains carbonate ions (CO_3^{2-}) and effervesces with dilute hydrochloric acid?",
      qHi: "किस खनिज समूह में कार्बोनेट आयन होते हैं और जो तनु हाइड्रोक्लोरिक अम्ल के साथ बुलबुले (effervescence) छोड़ता है?",
      optionsEn: ["Carbonates (e.g., Calcite / Limestone)", "Silicates", "Sulfates", "Oxides"],
      optionsHi: ["कार्बोनेट खनिज (जैसे कैल्साइट / चूना पत्थर)", "सिलिकेट्स", "सल्फेट्स", "ऑक्साइज"],
      answer: 0,
      exp: "Explanation (En): Calcite (CaCO_3) is a prime carbonate mineral that reacts with acid to release CO_2 gas bubbles.\nस्पष्टीकरण (Hi): कैल्साइट जैसे कार्बोनेट खनिज तनु अम्ल के संपर्क में आने पर बुलबुले छोड़ते हैं।"
    },
    {
      qEn: "What are fossil fuels primarily associated with which type of rocks?",
      qHi: "जीवाश्म ईंधन (कोयला और पेट्रोलियम) मुख्य रूप से किस प्रकार की चट्टानों से जुड़े होते हैं?",
      optionsEn: ["Sedimentary rocks", "Igneous rocks", "Metamorphic rocks", "Volcanic vents"],
      optionsHi: ["अवसादी चट्टानें (Sedimentary rocks)", "आग्नेय चट्टानें", "कायांतरित चट्टानें", "ज्वालामुखी छिद्र"],
      answer: 0,
      exp: "Explanation (En): Coal, oil, and natural gas are found almost exclusively in sedimentary rocks where organic remains were buried and preserved.\nस्पष्टीकरण (Hi): कोयला और पेट्रोलियम मुख्य रूप से अवसादी चट्टानों की परतों के बीच दबे अवशेषों से मिलते हैं।"
    },
    {
      qEn: "Which type of coal is considered the highest quality with the highest carbon content?",
      qHi: "किस प्रकार के कोयले को उच्चतम गुणवत्ता वाला और सर्वाधिक कार्बन सामग्री वाला माना जाता है?",
      optionsEn: ["Anthracite", "Bituminous", "Lignite", "Peat"],
      optionsHi: ["एन्थ्रासाइट (Anthracite)", "बिटुमिनस", "लिग्नाइट", "पीट"],
      answer: 0,
      exp: "Explanation (En): Anthracite is a hard, compact variety of coal with 86–97% carbon content, burning cleanly with little smoke.\nस्पष्टीकरण (Hi): एन्थ्रासाइट सबसे उच्च कोटि का कोयला है जिसमें 85% से अधिक कार्बन होता है।"
    },
    {
      qEn: "Which type of coal is brown coal and has the lowest carbon content among major coals?",
      qHi: "कौन सा कोयला भूरा कोयला कहलाता है और जिसमें कार्बन की मात्रा सबसे कम होती है?",
      optionsEn: ["Lignite", "Anthracite", "Bituminous", "Graphite"],
      optionsHi: ["लिग्नाइट (Lignite)", "एन्थ्रासाइट", "बिटुमिनस", "ग्रेफाइट"],
      answer: 0,
      exp: "Explanation (En): Lignite is a soft, brown, combustible sedimentary rock formed from naturally compressed peat, with lowest carbon grade.\nस्पष्टीकरण (Hi): लिग्नाइट एक निम्न कोटि का भूरा कोयला है।"
    },
    {
      qEn: "What is ore?",
      qHi: "अयस्क (Ore) किसे कहा जाता है?",
      optionsEn: ["A naturally occurring rock from which a valuable metal or mineral can be profitably extracted", "Any ordinary stone", "Pure gold crystal", "Waste rock"],
      optionsHi: ["वह प्राकृतिक चट्टान जिससे किसी मूल्यवान धातु या खनिज को लाभकारी रूप से निकाला जा सके", "कोई भी साधारण पत्थर", "शुद्ध सोने का क्रिस्टल", "बेकार चट्टान"],
      answer: 0,
      exp: "Explanation (En): An ore is a mineral deposit containing sufficient concentrations of valuable elements to make mining economically viable.\nस्पष्टीकरण (Hi): अयस्क वह खनिजयुक्त चट्टान है जिससे धातुओं को कम लागत और मुनाफे के साथ निकाला जा सकता है।"
    },
    {
      qEn: "What is bauxite the primary ore of?",
      qHi: "बॉक्साइट (Bauxite) किस धातु का प्रमुख अयस्क है?",
      optionsEn: ["Aluminium", "Iron", "Copper", "Gold"],
      optionsHi: ["एल्युमिनियम (Aluminium)", "लोहा", "तांबा", "सोना"],
      answer: 0,
      exp: "Explanation (En): Bauxite is the world's primary source of aluminium, formed by weathering of rocks in tropical climates.\nस्पष्टीकरण (Hi): बॉक्साइट एल्युमिनियम धातु प्राप्त करने का मुख्य अयस्क है।"
    },
    {
      qEn: "What is hematite an ore of?",
      qHi: "हेमेटाइट (Hematite) किस धातु का प्रमुख अयस्क है?",
      optionsEn: ["Iron (लोहा)", "Copper", "Zinc", "Lead"],
      optionsHi: ["लोहा (Iron)", "तांबा", "जस्ता", "सीसा"],
      answer: 0,
      exp: "Explanation (En): Hematite is a major iron ore mineral with chemical formula Fe_2O_3.\nस्पष्टीकरण (Hi): हेमेटाइट लोहे का एक बहुत ही महत्वपूर्ण और उच्च कोटि का अयस्क है।"
    },
    {
      qEn: "What are placer deposits?",
      qHi: "प्लेसर निक्षेप (Placer deposits) किसे कहते हैं?",
      optionsEn: ["Accumulations of valuable minerals formed by gravity separation during sedimentary processes (like gold in river beds)", "Volcanic lava beds", "Deep underground metal veins", "Dissolved salt in oceans"],
      optionsHi: ["अवसादी प्रक्रियाओं के दौरान गुरुत्वाकर्षण पृथक्करण द्वारा बने मूल्यवान खनिजों के निक्षेप (जैसे नदी तल में सोना)", "ज्वालामुखी लावा परतें", "गहरी भूमिगत धातु शिराएं", "महासागरों में घुला नमक"],
      answer: 0,
      exp: "Explanation (En): Placer deposits consist of heavy, durable minerals (like gold, platinum, tin) concentrated by water currents in stream beds.\nस्पष्टीकरण (Hi): पानी के बहाव और गुरुत्वाकर्षण के कारण नदियों के तल में जमा होने वाले भारी कीमती खनिजों (जैसे सोना) के भंडार को प्लेसर निक्षेप कहते हैं।"
    }
  ],
    "Earthquakes and Volcanoes": [
    {
      qEn: "What is an earthquake?",
      qHi: "भूकंप (Earthquake) किसे कहते हैं?",
      optionsEn: ["The sudden shaking or trembling of the Earth's crust caused by release of energy", "Strong ocean waves", "Volcanic gas eruption", "Atmospheric storm"],
      optionsHi: ["ऊर्जा के निकलने के कारण पृथ्वी की क्रस्ट का अचानक कांपना या हिलना", "तेज समुद्री लहरें", "ज्वालामुखी गैस उद्गार", "वायुमंडलीय तूफान"],
      answer: 0,
      exp: "Explanation (En): An earthquake is the shaking of the surface of the Earth resulting from the sudden release of energy in the Earth's lithosphere.\nस्पष्टीकरण (Hi): पृथ्वी के भीतर ऊर्जा के अचानक निकलने से उत्पन्न होने वाली तरंगों के कारण सतह का हिलना भूकंप कहलाता है।"
    },
    {
      qEn: "What is the exact point of origin of an earthquake underground called?",
      qHi: "भूकंप के ठीक नीचे जमीन के अंदर ऊर्जा उत्पन्न होने या मूल उद्गम बिंदु को क्या कहा जाता है?",
      optionsEn: ["Focus (Hypocenter)", "Epicenter", "Seismic center", "Fault plane"],
      optionsHi: ["फोकस या हाइपोसेंटर (Focus / Hypocenter)", "अधिकेंद्र (Epicenter)", "भूकंप केंद्र", "फॉल्ट तल"],
      answer: 0,
      exp: "Explanation (En): The focus or hypocenter is the point within the Earth where earthquake rupture and seismic energy release begin.\nस्पष्टीकरण (Hi): जमीन के अंदर जिस स्थान से भूकंप की तरंगें पैदा होती हैं, उसे फोकस (Focus) या हाइपोसेंटर कहते हैं।"
    },
    {
      qEn: "What is the point on the Earth's surface directly above the earthquake focus called?",
      qHi: "भूकंप के फोकस के ठीक ऊपर पृथ्वी की सतह पर स्थित बिंदु को क्या कहा जाता है?",
      optionsEn: ["Epicenter (अधिकेंद्र)", "Focus", "Hypocenter", "Antipode"],
      optionsHi: ["अधिकेंद्र (Epicenter)", "फोकस", "हाइपोसेंटर", "एंटीपोड"],
      answer: 0,
      exp: "Explanation (En): The epicenter is the point on the Earth's surface directly above the hypocenter, where shaking is usually felt most intensely.\nस्पष्टीकरण (Hi): फोकस के ठीक ऊपर जमीन की सतह पर स्थित बिंदु को अधिकेंद्र (Epicenter) कहते हैं, जहाँ सबसे पहले कंपन महसूस होता है।"
    },
    {
      qEn: "What are the scientific instruments used to record earthquake waves called?",
      qHi: "भूकंपीय तरंगों को रिकॉर्ड करने के लिए उपयोग किए जाने वाले वैज्ञानिक उपकरणों को क्या कहा जाता है?",
      optionsEn: ["Seismographs", "Barometers", "Anemometers", "Thermometers"],
      optionsHi: ["सिस्मोग्राफ (Seismographs)", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
      answer: 0,
      exp: "Explanation (En): A seismograph is an instrument that detects and records the intensity and duration of seismic waves.\nस्पष्टीकरण (Hi): सिस्मोग्राफ वह यंत्र है जो भूकंप की तरंगों को ग्राफ पर रिकॉर्ड करता है।"
    },
    {
      qEn: "What scale is commonly used to measure the magnitude (energy released) of an earthquake?",
      qHi: "भूकंप की परिमाण (ऊर्जा) मापने के लिए सामान्यतः किस पैमाने का उपयोग किया जाता है?",
      optionsEn: ["Richter scale", "Mercalli scale", "Beaufort scale", "Mohs scale"],
      optionsHi: ["रेक्टर पैमाना (Richter scale)", "मर्केली पैमाना", "ब्यूफोर्ड पैमाना", "मोह्स पैमाना"],
      answer: 0,
      exp: "Explanation (En): The Richter scale measures the magnitude of seismic waves on a logarithmic scale from 1 to 10.\nस्पष्टीकरण (Hi): रेक्टर स्केल (Richter scale) भूकंप से निकलने वाली कुल ऊर्जा या मैग्नीट्यूड को मापता है।"
    },
    {
      qEn: "What scale is used to measure the intensity (visible damage and effects) of an earthquake?",
      qHi: "भूकंप की तीव्रता (दृश्यमान क्षति और प्रभाव) को मापने के लिए किस पैमाने का उपयोग किया जाता है?",
      optionsEn: ["Mercalli scale", "Richter scale", "Fujita scale", "Kelvin scale"],
      optionsHi: ["मर्केली पैमाना (Mercalli scale)", "रेक्टर पैमाना", "फुजिता पैमाना", "केल्विन पैमाना"],
      answer: 0,
      exp: "Explanation (En): The modified Mercalli intensity scale measures the effects and structural damage caused by an earthquake at a specific location.\nस्पष्टीकरण (Hi): मर्केली पैमाना भूकंप से होने वाली तबाही और नुकसान की तीव्रता (Intensity) को 1 से 12 तक मापता है।"
    },
    {
      qEn: "Which seismic waves are surface waves that cause the most severe ground damage during an earthquake?",
      qHi: "कौन सी भूकंपीय तरंगें सतही तरंगें हैं जो भूकंप के दौरान जमीन पर सबसे अधिक विनाशकारी क्षति पहुँचाती हैं?",
      optionsEn: ["Love waves and Rayleigh waves (L-waves)", "Primary waves", "Secondary waves", "Body waves"],
      optionsHi: ["लव और रैले तरंगें / L-वेव्स (Surface waves)", "प्राथमिक तरंगें", "द्वितीयक तरंगें", "बॉडी वेव्स"],
      answer: 0,
      exp: "Explanation (En): Surface waves (L-waves) travel along Earth's outer crust and are responsible for rolling motion and heavy structural damage.\nस्पष्टीकरण (Hi): L-वेव्स (सतही तरंगें) जमीन की सतह के साथ चलती हैं और सबसे ज्यादा तबाही मचाती हैं।"
    },
    {
      qEn: "What are giant seismic sea waves caused by underwater earthquakes or volcanic eruptions called?",
      qHi: "समुद्र के भीतर आने वाले भूकंपों या ज्वालामुखियों के कारण उठने वाली विशाल समुद्री लहरों को क्या कहा जाता है?",
      optionsEn: ["Tsunami", "Tornado", "Hurricane", "Cyclone"],
      optionsHi: ["सुनामी (Tsunami)", "टॉरनेडो", "हरिकेन", "चक्रवात"],
      answer: 0,
      exp: "Explanation (En): Tsunamis are long-wavelength sea waves generated by sudden displacement of ocean water from undersea earthquakes or landslides.\nस्पष्टीकरण (Hi): समुद्री भूकंपों के कारण पानी का अचानक विस्थापन होने से विशाल लहरें उठती हैं जिन्हें सुनामी (Tsunami) कहते हैं।"
    },
    {
      qEn: "What is a volcano?",
      qHi: "ज्वालामुखी (Volcano) किसे कहते हैं?",
      optionsEn: ["An opening in the Earth's crust through which molten magma, volcanic ash, and gases escape", "A deep underground water spring", "A high mountain range formed by folding", "A dry desert valley"],
      optionsHi: ["पृथ्वी की क्रस्ट का वह छिद्र या दरार जिससे पिघला हुआ मैग्मा, राख और गैसें बाहर निकलती हैं", "एक गहरा भूमिगत जल स्रोत", "वलन से बनी ऊंची पर्वत श्रृंखला", "एक सूखी मरुस्थलीय घाटी"],
      answer: 0,
      exp: "Explanation (En): A volcano is a rupture in the crust that allows hot lava, volcanic ash, and gases to escape from a magma chamber below.\nस्पष्टीकरण (Hi): ज्वालामुखी पृथ्वी की सतह पर वह दरार या मुहाना है जिससे भीतर का गर्म लावा और गैसें बाहर आती हैं।"
    },
    {
      qEn: "What is molten rock beneath the Earth's surface called?",
      qHi: "पृथ्वी की सतह के नीचे मौजूद पिघली हुई चट्टान को क्या कहा जाता है?",
      optionsEn: ["Magma", "Lava", "Basalt", "Slag"],
      optionsHi: ["मैग्मा (Magma)", "लावा", "बेसाल्ट", "स्लैग"],
      answer: 0,
      exp: "Explanation (En): Magma is molten rock located beneath the Earth's surface, whereas lava is magma that has reached the surface.\nस्पष्टीकरण (Hi): जब तक पिघली हुई चट्टान जमीन के अंदर रहती है, उसे मैग्मा कहते हैं।"
    },
    {
      qEn: "What is molten rock called once it erupts onto the Earth's surface?",
      qHi: "वही पिघली हुई चट्टान जब पृथ्वी की सतह पर बाहर निकल आती है, तो उसे क्या कहा जाता है?",
      optionsEn: ["Lava (लावा)", "Magma", "Tuff", "Ash"],
      optionsHi: ["लावा (Lava)", "मैग्मा", "टफ", "राख"],
      answer: 0,
      exp: "Explanation (En): Lava is molten rock that breaks through the Earth's surface during a volcanic eruption.\nस्पष्टीकरण (Hi): ज्वालामुखी फटने के बाद जब मैग्मा जमीन की सतह पर बहता है, तो उसे लावा (Lava) कहा जाता है।"
    },
    {
      qEn: "Which volcanic belt surrounding the Pacific Ocean basin is known for frequent earthquakes and volcanic activity?",
      qHi: "प्रशांत महासागर के चारों ओर फैली उस बेल्ट को क्या कहते हैं जहाँ सबसे अधिक भूकंप और ज्वालामुखी आते हैं?",
      optionsEn: ["Pacific Ring of Fire", "Mid-Atlantic Ridge", "Alpine-Himalayan belt", "Circum-Polar belt"],
      optionsHi: ["रिंग ऑफ फायर या प्रशांत महासागरीय पेटी (Ring of Fire)", "मध्य अटलांटिक कटक", "अल्प्ड-हिमालयी पेटी", "ध्रुवीय पेटी"],
      answer: 0,
      exp: "Explanation (En): The Ring of Fire is a horseshoe-shaped region around the Pacific plate boundary with high tectonic activity.\nस्पष्टीकरण (Hi): प्रशांत महासागर की परिधि पर स्थित 'रिंग ऑफ फायर' दुनिया का सबसे सक्रिय भूकंप और ज्वालामुखी क्षेत्र है।"
    },
    {
      qEn: "What type of volcano is characterized by broad, gently sloping cones built from fluid basaltic lava flows?",
      qHi: "तरल बेसाल्टिक लावा के बहने से बनने वाले चौड़े और मंद ढलान वाले ज्वालामुखियों को क्या कहते हैं?",
      optionsEn: ["Shield volcano", "Cinder cone volcano", "Composite volcano (Stratovolcano)", "Caldera"],
      optionsHi: ["शील्ड ज्वालामुखी (Shield volcano)", "सिंडर कोन ज्वालामुखी", "कम्पोजिट या स्ट्रेटोवोल्केनो", "कैल्डेरा"],
      answer: 0,
      exp: "Explanation (En): Shield volcanoes (like Mauna Loa in Hawaii) have broad, dome-like shapes formed by runny, low-viscosity basaltic lava.\nस्पष्टीकरण (Hi): शील्ड ज्वालामुखी बहुत चौड़े होते हैं क्योंकि इनका लावा बहुत पतला और तरल होता है (जैसे हवाई द्वीप)।"
    },
    {
      qEn: "What is a massive volcanic crater formed by the collapse of a volcano summit following an explosive eruption called?",
      qHi: "विस्फोटक उद्गार के बाद ज्वालामुखी के शिखर के ढह जाने से बनने वाले विशाल गड्ढे को क्या कहते हैं?",
      optionsEn: ["Caldera (कैल्डेरा)", "Cinder cone", "Vent", "Dike"],
      optionsHi: ["कैल्डेरा (Caldera)", "सिंडर कोन", "वेंट", "डाइक"],
      answer: 0,
      exp: "Explanation (En): A caldera is a large depression formed when a volcano empties its magma chamber and collapses inward.\nस्पष्टीकरण (Hi): ज्वालामुखी का शिखर फटने के बाद जब उसका चैंबर खाली होकर नीचे धंस जाता है, तो विशाल कैल्डेरा बनता है।"
    },
    {
      qEn: "What are active volcanoes?",
      qHi: "सक्रिय ज्वालामुखी (Active volcanoes) किसे कहते हैं?",
      optionsEn: ["Volcanoes that have erupted recently and are likely to erupt again", "Volcanoes that have not erupted for thousands of years", "Volcanoes that are completely dead", "Extinct ancient hills"],
      optionsHi: ["वे ज्वालामुखी जो हाल ही में फटे हैं और जिनके दोबारा फटने की संभावना है", "जो हजारों साल से नहीं फटे", "जो पूरी तरह मृत हो चुके हैं", "विलुप्त प्राचीन पहाड़ियां"],
      answer: 0,
      exp: "Explanation (En): Active volcanoes are currently erupting or show regular signs of activity.\nस्पष्टीकरण (Hi): सक्रिय ज्वालामुखी वे हैं जिनसे वर्तमान में भी लावा या गैसें निकल रही हैं।"
    },
    {
      qEn: "What are dormant volcanoes?",
      qHi: "सुप्त या प्रसुप्त ज्वालामुखी (Dormant volcanoes) क्या होते हैं?",
      optionsEn: ["Volcanoes that have not erupted in recent times but show signs of potential future activity", "Volcanoes erupting daily", "Extinct volcanoes", "Underwater cold vents"],
      optionsHi: ["वे ज्वालामुखी जो हाल में नहीं फटे हैं लेकिन भविष्य में फटने की संभावना रखते हैं", "रोज फटने वाले ज्वालामुखी", "मृत ज्वालामुखी", "जलीय ठंडे छिद्र"],
      answer: 0,
      exp: "Explanation (En): Dormant volcanoes are sleeping volcanoes that haven't erupted recently but could awaken in the future.\nस्पष्टीकरण (Hi): सुप्त ज्वालामुखी लंबे समय से शांत हैं लेकिन भविष्य में कभी भी फट सकते हैं।"
    },
    {
      qEn: "What are extinct volcanoes?",
      qHi: "मृत या विलुप्त ज्वालामुखी (Extinct volcanoes) किसे कहते हैं?",
      optionsEn: ["Volcanoes that have not erupted in historic times and show no signs of future activity", "Volcanoes that erupt every year", "Active magma chambers", "Crust fissures"],
      optionsHi: ["वे ज्वालामुखी जो ऐतिहासिक काल में कभी नहीं फटे और भविष्य में फटने की कोई उम्मीद नहीं है", "जो हर साल फटते हैं", "सक्रिय मैग्मा चैंबर", "क्रस्ट दरारें"],
      answer: 0,
      exp: "Explanation (En): Extinct volcanoes have completely exhausted their magma supply and will never erupt again.\nस्पष्टीकरण (Hi): मृत ज्वालामुखी वे हैं जिनका मैग्मा भंडार पूरी तरह खत्म हो चुका है और अब वे कभी नहीं फटेंगे।"
    },
    {
      qEn: "What is a hot spot in geology?",
      qHi: "भूविज्ञान में 'हॉट स्पॉट' (Hot spot) किसे कहा जाता है?",
      optionsEn: ["An area in the upper mantle from which heat rises in a thermal plume, creating volcanic activity away from plate boundaries", "A forest fire zone", "Surface desert heat", "Earthquake epicenter"],
      optionsHi: ["मेंटल का वह स्थान जहाँ से थर्मल प्लूम के रूप में गर्मी उठती है और प्लेट सीमाओं से दूर ज्वालामुखी बनते हैं", "जंगल की आग का क्षेत्र", "सतही मरुस्थलीय गर्मी", "भूकंप अधिकेंद्र"],
      answer: 0,
      exp: "Explanation (En): Hot spots are stationary mantle plumes that melt through tectonic plates, forming chains of volcanoes like the Hawaiian Islands.\nस्पष्टीकरण (Hi): हॉटस्पॉट मेंटल के भीतर का गर्म स्थान है जो प्लेटों के बीच में भी ज्वालामुखी बना सकता है (जैसे हवाई द्वीप श्रृंखला)।"
    },
    {
      qEn: "What are intrusive volcanic landforms formed when magma cools inside the Earth's crust called?",
      qHi: "जब मैग्मा पृथ्वी की क्रस्ट के अंदर ही ठंडा हो जाता है, तो बनने वाली आंतरिक आकृतियों को क्या कहते हैं?",
      optionsEn: ["Plutons (e.g., batholiths, sills, dikes)", "Lava plateaus", "Cinder cones", "Ash layers"],
      optionsHi: ["प्लूटन या आग्नेय घुसपैठ (जैसे बाथोलिथ, सिल, डाइक)", "लावा पठार", "सिंडर कोन", "राख परतें"],
      answer: 0,
      exp: "Explanation (En): Intrusive igneous landforms like batholiths, sills, and dikes form deep underground when magma solidifies slowly.\nस्पष्टीकरण (Hi): जमीन के अंदर मैग्मा के जमने से बनने वाली आकृतियों को प्लूटन (जैसे बाथोलिथ, सिल, डाइक) कहते हैं।"
    },
    {
      qEn: "What is a batholith?",
      qHi: "बाथोलिथ (Batholith) क्या होता है?",
      optionsEn: ["A large dome-shaped intrusive igneous rock body formed deep underground", "A thin horizontal sheet of lava", "A volcanic crater lake", "A surface ash deposit"],
      optionsHi: ["जमीन के बहुत नीचे गहराई में बना एक विशाल गुंबद के आकार का आग्नेय चट्टान पिंड", "लावा की पतली क्षैतिज परत", "ज्वालामुखी क्रेटर झील", "सतही राख निक्षेप"],
      answer: 0,
      exp: "Explanation (En): Batholiths are massive underground bodies of igneous rock, often forming the core of major mountain ranges.\nस्पष्टीकरण (Hi): बाथोलिथ गहराई में बना बहुत बड़ा मैग्मा पिंड होता है जो बाद में पर्वतों के उठने पर बाहर दिखाई देता है।"
    },
    {
      qEn: "What is a sill?",
      qHi: "सिल (Sill) किसे कहते हैं?",
      optionsEn: ["A tabular sheet of igneous rock intruded parallel to the bedding planes of sedimentary rocks", "A vertical wall-like intrusion", "A surface volcanic cone", "A lava flow"],
      optionsHi: ["अवसादी चट्टानों की परतों के समानांतर घुसपैठ करने वाली आग्नेय चट्टान की क्षैतिज चादर", "एक ऊर्ध्वाधर दीवार जैसी घुसपैठ", "सतही ज्वालामुखी शंकु", "लावा प्रवाह"],
      answer: 0,
      exp: "Explanation (En): A sill forms when magma forces its way horizontally between parallel layers of existing rock.\nस्पष्टीकरण (Hi): जब मैग्मा चट्टानों की परतों के बीच क्षैतिज (horizontal) रूप में जमकर ठंडा होता है, तो उसे सिल कहते हैं।"
    },
    {
      qEn: "What is a dike?",
      qHi: "डाइक (Dike) किसे कहते हैं?",
      optionsEn: ["A wall-like discordant intrusive igneous rock body cutting across existing rock layers", "A horizontal layer", "A surface crater", "A lava flow"],
      optionsHi: ["मौजूदा चट्टानों की परतों को काटकर दीवार की तरह खड़ी होने वाली आग्नेय घुसपैठ", "एक क्षैतिज परत", "सतही क्रेटर", "लावा प्रवाह"],
      answer: 0,
      exp: "Explanation (En): Dikes are vertical or near-vertical intrusive sheet-like bodies that cut across older rock strata.\nस्पष्टीकरण (Hi): जब मैग्मा पुरानी चट्टानों की परतों को लंबवत (vertical) काटकर दीवार की तरह जमता है, तो उसे डाइक कहते हैं।"
    },
    {
      qEn: "What is pyroclastic material?",
      qHi: "पाइरोक्लास्टिक सामग्री (Pyroclastic material) क्या होती है?",
      optionsEn: ["Fragmented rock and ash blasted out during a volcanic eruption", "Liquid basaltic lava only", "Dissolved underground gases", "Sedimentary river sand"],
      optionsHi: ["ज्वालामुखी विस्फोट के दौरान हवा में उड़ने वाले टूटे हुए चट्टानी टुकड़े और राख", "केवल तरल बेसाल्टिक लावा", "घुली हुई भूमिगत गैसें", "अवसादी नदी रेत"],
      answer: 0,
      exp: "Explanation (En): Pyroclasts include volcanic bombs, cinders, ash, and pumice blasted violently into the air by explosive eruptions.\nस्पष्टीकरण (Hi): ज्वालामुखी विस्फोट के समय हवा में फेंके जाने वाले ठोस टुकड़े, राख और बम पाइरोक्लास्टिक कहलाते हैं।"
    },
    {
      qEn: "What causes most earthquakes in the world?",
      qHi: "दुनिया में अधिकांश भूकंपों का मुख्य कारण क्या है?",
      optionsEn: ["Movement of tectonic plates along faults", "Meteorite impacts", "Tidal pull of moon", "Heavy rainfall"],
      optionsHi: ["फॉल्ट्स (भ्रंश) के सहारे टेक्टोनिक प्लेटों की गति", "उल्कापिंड प्रभाव", "चंद्रमा का ज्वारीय खिंचाव", "भारी वर्षा"],
      answer: 0,
      exp: "Explanation (En): The vast majority of earthquakes occur at tectonic plate boundaries where friction and stress build up along faults.\nस्पष्टीकरण (Hi): अधिकांश भूकंप टेक्टोनिक प्लेटों के टकराने या खिसकने के कारण भ्रंश तलों पर ऊर्जा रिलीज होने से आते हैं।"
    },
    {
      qEn: "What is a fault in geology?",
      qHi: "भूविज्ञान में 'फॉल्ट' या भ्रंश (Fault) क्या होता है?",
      optionsEn: ["A fracture or zone of fractures between two blocks of rock in the Earth's crust", "A volcanic magma chamber", "An ocean trench", "A sedimentary layer"],
      optionsHi: ["पृथ्वी की क्रस्ट में चट्टानों के दो खंडों के बीच की दरार या फ्रैक्चर जोन", "ज्वालामुखी मैग्मा चैंबर", "महासागरीय खाई", "एक अवसादी परत"],
      answer: 0,
      exp: "Explanation (En): A fault is a break in the Earth's crust along which blocks of rock have slipped past one another.\nस्पष्टीकरण (Hi): भ्रंश (Fault) क्रस्ट के अंदर चट्टानों में पड़ी वह दरार है जिसके दोनों तरफ की चट्टानें आपस में खिसकती हैं।"
    },
    {
      qEn: "What is the San Andreas Fault famous for?",
      qHi: "सैन एंड्रियास फॉल्ट (San Andreas Fault) किस लिए प्रसिद्ध है?",
      optionsEn: ["A major transform plate boundary in California known for frequent earthquakes", "A huge volcano in Hawaii", "The deepest ocean trench", "The highest mountain peak"],
      optionsHi: ["कैलिफोर्निया में एक प्रमुख ट्रांसफॉर्म प्लेट सीमा जो बार-बार भूकंपों के लिए जानी जाती है", "हवाई में एक विशाल ज्वालामुखी", "सबसे गहरी महासागरीय खाई", "सबसे ऊंचा पर्वत शिखर"],
      answer: 0,
      exp: "Explanation (En): The San Andreas Fault is a famous strike-slip transform fault between the Pacific plate and North American plate.\nस्पष्टीकरण (Hi): सैन एंड्रियास फॉल्ट कैलिफोर्निया में एक प्रसिद्ध ट्रांसफॉर्म भ्रंश है जहाँ प्रशांत और उत्तरी अमेरिकी प्लेटें रगड़ खाती हैं।"
    },
    {
      qEn: "What is liquefaction during an earthquake?",
      qHi: "भूकंप के दौरान 'द्रवीकरण' या लिक्विफेक्शन (Liquefaction) क्या है?",
      optionsEn: ["A process where saturated, loose soil temporarily loses strength and acts as a liquid during ground shaking", "Melting of underground rocks into lava", "Turning of ocean water to ice", "Rainfall during earthquake"],
      optionsHi: ["वह प्रक्रिया जिसमें कंपन के दौरान पानी से भरी ढीली मिट्टी अपनी ताकत खोकर तरल की तरह व्यवहार करती है", "भूमिगत चट्टानों का लावा में पिघलना", "समुद्री पानी का बर्फ बनना", "भूकंप के दौरान बारिश"],
      answer: 0,
      exp: "Explanation (En): Soil liquefaction happens when saturated granular soils lose shear strength during intense shaking, causing buildings to sink.\nस्पष्टीकरण (Hi): भूकंप के झटकों से गीली और ढीली मिट्टी पानी की तरह बहने लगती है जिससे इमारतें धंस जाती हैं।"
    },
    {
      qEn: "What is a lahar?",
      qHi: "लाहर (Lahar) किसे कहते हैं?",
      optionsEn: ["A destructive mudflow or debris flow composed of volcanic slurry and water", "Fast lava flow", "Underground gas pocket", "Sea tsunami wave"],
      optionsHi: ["ज्वालामुखी की राख और पानी से मिलकर बनने वाला विनाशकारी मलबे या कीचड़ का प्रवाह", "तेज लावा प्रवाह", "भूमिगत गैस जेब", "समुद्री सुनामी लहर"],
      answer: 0,
      exp: "Explanation (En): Lahars are volcanic mudflows triggered by melting snow, ice, or heavy rain mixing with loose pyroclastic debris.\nस्पष्टीकरण (Hi): ज्वालामुखी की राख और पिघली बर्फ मिलकर जब कीचड़ का सैलाब बनकर नीचे उतरते हैं, तो उसे लाहर कहते हैं।"
    },
    {
      qEn: "What are the three main types of tectonic plate boundaries where volcanoes and earthquakes occur?",
      qHi: "वे तीन मुख्य प्रकार की टेक्टोनिक प्लेट सीमाएं कौन सी हैं जहाँ भूकंप और ज्वालामुखी आते हैं?",
      optionsEn: ["Divergent, Convergent, and Transform boundaries", "Fixed, Floating, and Sinking boundaries", "Oceanic, Continental, and Aerial boundaries", "Core, Mantle, and Crust boundaries"],
      optionsHi: ["अपसारी (Divergent), अभिसारी (Convergent) और रूपांतरित (Transform) सीमाएं", "स्थिर, तैरती और डूबती सीमाएं", "महासागरीय, महाद्वीपीय और वायुिय सीमाएं", "कोर, मेंटल और क्रस्ट सीमाएं"],
      answer: 0,
      exp: "Explanation (En): Plates move apart at divergent boundaries, collide at convergent boundaries, and slide past each other at transform boundaries.\nस्पष्टीकरण (Hi): प्लेटें अलग हटती हैं (अपसारी), आपस में टकराती हैं (अभिसारी) या बगल से निकलती हैं (रूपांतरित)।"
    },
    {
      qEn: "What happens at a convergent plate boundary?",
      qHi: "अभिसारी प्लेट सीमा (Convergent plate boundary) पर क्या होता है?",
      optionsEn: ["Plates collide, often causing one plate to subduct under another, creating deep trenches and volcanic arcs", "Plates pull apart", "Plates slide horizontally without destruction", "No geological activity occurs"],
      optionsHi: ["प्लेटें आपस में टकराती हैं जिससे एक प्लेट दूसरी के नीचे धंसती है और खाइयां व ज्वालामुखी बनते हैं", "प्लेटें दूर हटती हैं", "प्लेटें बिना नुकसान के क्षैतिज रूप से फिसलती हैं", "कोई भूवैज्ञानिक गतिविधि नहीं होती"],
      answer: 0,
      exp: "Explanation (En): Convergent boundaries result in mountain building, deep-sea trenches, and explosive volcanic arcs due to subduction.\nस्पष्टीकरण (Hi): अभिसारी सीमाओं पर प्लेटों के टकराने से पर्वत बनते हैं और सबडक्शन जोन में भारी ज्वालामुखी फटते हैं।"
    }
  ],
      "Atmosphere": [
    {
      qEn: "What is the primary scientific definition of the atmosphere?",
      qHi: "वायुमंडल की प्राथमिक वैज्ञानिक परिभाषा क्या है?",
      optionsEn: ["A layer of gases surrounding a planet held in place by gravity", "A liquid ocean layer", "The molten core of the earth", "Solid crustal rock"],
      optionsHi: ["गुरुत्वाकर्षण द्वारा अपने स्थान पर टिकी हुई किसी ग्रह को घेरने वाली गैसों की एक परत", "एक तरल महासागर परत", "पृथ्वी का पिघला हुआ कोर", "ठोस क्रस्टल चट्टान"],
      answer: 0,
      exp: "Explanation (En): The atmosphere is the envelope of gases surrounding the Earth or another planet.\nस्पष्टीकरण (Hi): वायुमंडल पृथ्वी या किसी अन्य ग्रह के चारों ओर गैसों का आवरण है जो गुरुत्वाकर्षण के कारण टिका रहता है।"
    },
    {
      qEn: "Which gas constitutes the highest percentage of the Earth's dry atmosphere by volume?",
      qHi: "आयतन के अनुसार पृथ्वी के शुष्क वायुमंडल में कौन सी गैस सबसे अधिक प्रतिशत में होती है?",
      optionsEn: ["Nitrogen (~78%)", "Oxygen (~21%)", "Argon (~0.93%)", "Carbon dioxide (~0.04%)"],
      optionsHi: ["नाइट्रोजन (~78%)", "ऑक्सीजन (~21%)", "ऑर्गन (~0.93%)", "कार्बन डाइऑक्साइड (~0.04%)"],
      answer: 0,
      exp: "Explanation (En): Nitrogen makes up roughly 78 percent of Earth's atmosphere by volume.\nस्पष्टीकरण (Hi): आयतन के हिसाब से नाइट्रोजन हमारे वायुमंडल का लगभग 78% हिस्सा बनाती है।"
    },
    {
      qEn: "Which layer of the atmosphere contains roughly 75% of its total mass and all major weather systems?",
      qHi: "वायुमंडल की किस परत में इसका लगभग 75% कुल द्रव्यमान और सभी प्रमुख मौसमी प्रणालियां पाई जाती हैं?",
      optionsEn: ["Troposphere (क्षोभमंडल)", "Stratosphere", "Mesosphere", "Thermosphere"],
      optionsHi: ["क्षोभमंडल (Troposphere)", "समताप मंडल", "मध्यमंडल", "तापमंडल"],
      answer: 0,
      exp: "Explanation (En): The troposphere is the lowest layer where weather, clouds, and storms occur, holding most atmospheric mass.\nस्पष्टीकरण (Hi): क्षोभमंडल सबसे निचली परत है जहाँ बादल, आंधी और सभी मौसमी घटनाएं होती हैं।"
    },
    {
      qEn: "What is the phenomenon where temperature decreases with height in the troposphere called?",
      qHi: "क्षोभमंडल में ऊंचाई के साथ तापमान के घटने की घटना को क्या कहा जाता है?",
      optionsEn: ["Normal lapse rate", "Inversion rate", "Adiabatic heating", "Geothermal gradient"],
      optionsHi: ["सामान्य हास दर (Normal lapse rate)", "व्युत्क्रमण दर", "रुद्धोष्म तापन", "भूतापीय प्रवणता"],
      answer: 0,
      exp: "Explanation (En): The normal lapse rate is the average rate of temperature decrease with altitude in the troposphere (~6.5°C per km).\nस्पष्टीकरण (Hi): क्षोभमंडल में प्रति किलोमीटर ऊंचाई बढ़ने पर तापमान औसतन 6.5°सी घटता है, जिसे सामान्य हास दर कहते हैं।"
    },
    {
      qEn: "Which atmospheric layer sits directly above the troposphere and houses the ozone layer?",
      qHi: "क्षोभमंडल के ठीक ऊपर कौन सी वायुमंडलीय परत स्थित है जिसमें ओजोन परत पाई जाती है?",
      optionsEn: ["Stratosphere (समताप मंडल)", "Mesosphere", "Thermosphere", "Exosphere"],
      optionsHi: ["समताप मंडल (Stratosphere)", "मध्यमंडल", "तापमंडल", "बहिर्मंडल"],
      answer: 0,
      exp: "Explanation (En): The stratosphere extends from the tropopause to about 50 km, containing the protective ozone layer.\nस्पष्टीकरण (Hi): समताप मंडल में ओजोन परत होती है जो सूर्य की पराबैंगनी किरणों को सोखती है।"
    },
    {
      qEn: "Why is the stratosphere preferred for commercial jet flight routes?",
      qHi: "वाणिज्यिक जेट उड़ानों के लिए समताप मंडल को क्यों पसंद किया जाता है?",
      optionsEn: ["It lacks major weather turbulence, clouds, and storms, providing stable air", "Air is thickest there", "Gravity is absent", "Magnetic field is strongest"],
      optionsHi: ["इसमें प्रमुख मौसमी उथल-पुथल, बादल और तूफान नहीं होते, जिससे स्थिर हवा मिलती है", "वहाँ हवा सबसे घनी होती है", "गुरुत्वाकर्षण अनुपस्थित होता है", "चुंबकीय क्षेत्र सबसे मजबूत होता है"],
      answer: 0,
      exp: "Explanation (En): The lower stratosphere is calm, dry, and free of weather disturbances, making it ideal for flying.\nस्पष्टीकरण (Hi): निचला समताप मंडल शांत और बादलों से मुक्त होता है, जिससे विमान बिना झटकों के आसानी से उड़ सकते हैं।"
    },
    {
      qEn: "What is the boundary separating the troposphere and stratosphere called?",
      qHi: "क्षोभमंडल और समताप मंडल को अलग करने वाली सीमा को क्या कहा जाता है?",
      optionsEn: ["Tropopause (क्षोभ सीमा)", "Stratopause", "Mesopause", "Thermopause"],
      optionsHi: ["क्षोभ सीमा (Tropopause)", "स्ट्रेटोपॉज", "मेसोपॉज", "थर्मोपॉज"],
      answer: 0,
      exp: "Explanation (En): The tropopause is the transitional boundary layer marking the upper limit of the troposphere.\nस्पष्टीकरण (Hi): क्षोभ सीमा (Tropopause) क्षोभमंडल और समताप मंडल के बीच की पतली संक्रमण परत है।"
    },
    {
      qEn: "Which atmospheric layer is known as the coldest layer of the atmosphere?",
      qHi: "वायुमंडल की किस परत को सबसे ठंडी परत के रूप में जाना जाता है?",
      optionsEn: ["Mesosphere (मध्यमंडल)", "Stratosphere", "Troposphere", "Exosphere"],
      optionsHi: ["मध्यमंडल (Mesosphere)", "समताप मंडल", "क्षोभमंडल", "बहिर्मंडल"],
      answer: 0,
      exp: "Explanation (En): The mesosphere reaches temperatures as low as -90°C, making it the coldest atmospheric layer.\nस्पष्टीकरण (Hi): मध्यमंडल (Mesosphere) में तापमान बहुत गिर जाता है (-90°C तक), जिससे यह सबसे ठंडी परत बनती है।"
    },
    {
      qEn: "What happens to meteors when they enter the mesosphere?",
      qHi: "मध्यमंडल में प्रवेश करने पर उल्कापिंडों (Meteors) के साथ क्या होता है?",
      optionsEn: ["They burn up due to friction with atmospheric gases", "They bounce back into space", "They freeze solid and land", "They turn into water"],
      optionsHi: ["वायुमंडलीय गैसों के साथ घर्षण के कारण वे जल जाते हैं", "वे अंतरिक्ष में वापस उछल जाते हैं", "वे ठोस जम जाते हैं और उतरते हैं", "वे पानी में बदल जाते हैं"],
      answer: 0,
      exp: "Explanation (En): Incoming meteoroids burn up upon colliding with gas molecules in the mesosphere, creating shooting stars.\nस्पष्टीकरण (Hi): अंतरिक्ष से आने वाले उल्कापिंड मध्यमंडल की गैसों से रगड़ खाकर जल जाते हैं (टूटते तारे)।"
    },
    {
      qEn: "Which layer contains electrically charged ions that reflect radio waves back to Earth?",
      qHi: "किस परत में विद्युत आवेशित आयन होते हैं जो रेडियो तरंगों को वापस पृथ्वी पर परावर्तित करते हैं?",
      optionsEn: ["Ionosphere (आयनमंडल / तापमंडल का हिस्सा)", "Troposphere", "Stratosphere", "Mesosphere"],
      optionsHi: ["आयनमंडल (Ionosphere)", "क्षोभमंडल", "समताप मंडल", "मध्यमंडल"],
      answer: 0,
      exp: "Explanation (En): The ionosphere contains ions and free electrons that reflect radio communication frequencies back to Earth's surface.\nस्पष्टीकरण (Hi): आयनमंडल में आवेशित कण होते हैं जो लंबी दूरी के रेडियो संचार को संभव बनाते हैं।"
    },
    {
      qEn: "What is the outermost layer of the Earth's atmosphere called?",
      qHi: "पृथ्वी के वायुमंडल की सबसे बाहरी परत को क्या कहा जाता है?",
      optionsEn: ["Exosphere (बहिर्मंडल)", "Thermosphere", "Mesosphere", "Stratosphere"],
      optionsHi: ["बहिर्मंडल (Exosphere)", "तापमंडल", "मध्यमंडल", "समताप मंडल"],
      answer: 0,
      exp: "Explanation (En): The exosphere is the upper limit of the atmosphere where molecules gradually escape into interplanetary space.\nस्पष्टीकरण (Hi): बहिर्मंडल सबसे बाहरी परत है जहाँ वायु के हल्के अणु धीरे-धीरे अंतरिक्ष में विलीन हो जाते हैं।"
    },
    {
      qEn: "Which gas in the stratosphere absorbs harmful ultraviolet radiation from the sun?",
      qHi: "समताप मंडल में कौन सी गैस सूर्य से आने वाली हानिकारक पराबैंगनी (UV) विकिरण को अवशोषित करती है?",
      optionsEn: ["Ozone (O_3)", "Carbon dioxide (CO_2)", "Methane (CH_4)", "Nitrogen (N_2)"],
      optionsHi: ["ओजोन (O_3)", "कार्बन डाइऑक्साइड (CO_2)", "मीथेन (CH_4)", "नाइट्रोजन (N_2)"],
      answer: 0,
      exp: "Explanation (En): Ozone molecules in the stratosphere absorb 97-99% of the sun's medium-frequency UV light.\nस्पष्टीकरण (Hi): समताप मंडल की ओजोन परत सूर्य की पराबैंगनी किरणों को रोककर पृथ्वी पर जीवन की रक्षा करती है।"
    },
    {
      qEn: "What unit is standard for measuring total ozone column thickness?",
      qHi: "कुल ओजोन स्तंभ की मोटाई मापने के लिए मानक इकाई क्या है?",
      optionsEn: ["Dobson unit (DU)", "Decibel (dB)", "Pascal (Pa)", "Bar"],
      optionsHi: ["डॉब्सन यूनिट (DU)", "डेसीबल", "पास्कल", "बार"],
      answer: 0,
      exp: "Explanation (En): Ozone concentration is quantified in Dobson units, measuring the columnar density in a given area.\nस्पष्टीकरण (Hi): ओजोन परत की मोटाई डॉब्सन यूनिट (Dobson unit) में मापी जाती है।"
    },
    {
      qEn: "What causes the greenhouse effect in the atmosphere?",
      qHi: "वायुमंडल में ग्रीनहाउस प्रभाव किसके कारण होता है?",
      optionsEn: ["Absorption and re-emission of infrared thermal radiation by gases like CO_2 and water vapor", "Direct sun burning", "Solar winds", "Ocean surface cooling"],
      optionsHi: ["CO_2 और जलवाष्प जैसी गैसों द्वारा अवरक्त तापीय विकिरणों का अवशोषण और पुन: उत्सर्जन", "प्रत्यक्ष सूर्य का जलना", "सौर हवाएं", "समुद्री सतह का ठंडा होना"],
      answer: 0,
      exp: "Explanation (En): Greenhouse gases trap heat radiating from Earth's surface, maintaining a habitable planetary temperature.\nस्पष्टीकरण (Hi): ग्रीनहाउस गैसें पृथ्वी से निकलने वाली गर्मी को रोककर रखती हैं जिससे ग्रह का तापमान जीवन के अनुकूल रहता है।"
    },
    {
      qEn: "Which of the following is considered a primary greenhouse gas in Earth's atmosphere?",
      qHi: "निम्नलिखित में से किसे पृथ्वी के वायुमंडल की एक प्रमुख ग्रीनहाउस गैस माना जाता है?",
      optionsEn: ["Carbon dioxide (CO_2)", "Nitrogen (N_2)", "Oxygen (O_2)", "Argon (Ar)"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2)", "नाइट्रोजन", "ऑक्सीजन", "ऑर्गन"],
      answer: 0,
      exp: "Explanation (En): Carbon dioxide, methane, water vapor, and nitrous oxide are the primary greenhouse gases.\nस्पष्टीकरण (Hi): कार्बन डाइऑक्साइड, मीथेन और जलवाष्प प्रमुख ग्रीनहाउस गैसें हैं।"
    },
    {
      qEn: "What is atmospheric pressure?",
      qHi: "वायुमंडलीय दाब (Atmospheric pressure) किसे कहते हैं?",
      optionsEn: ["The force exerted by the weight of the air column above a surface area", "Wind speed measurement", "Air temperature index", "Cloud moisture weight"],
      optionsHi: ["किसी सतह क्षेत्र के ऊपर वायु स्तंभ के भार द्वारा लगाया जाने वाला बल", "हवा की गति मापन", "हवा का तापमान सूचकांक", "बादल की नमी का वजन"],
      answer: 0,
      exp: "Explanation (En): Atmospheric pressure is the weight of the overlying air column pressing down on Earth's surface.\nस्पष्टीकरण (Hi): वायुमंडल की परतों के वजन से सतह पर पड़ने वाले दबाव को वायुमंडलीय दाब कहते हैं।"
    },
    {
      qEn: "What instrument is used to measure atmospheric pressure?",
      qHi: "वायुमंडलीय दाब मापने के लिए किस उपकरण का उपयोग किया जाता है?",
      optionsEn: ["Barometer", "Thermometer", "Anemometer", "Hydrometer"],
      optionsHi: ["बैरोमीटर (Barometer)", "थर्मामीटर", "एनीमोमीटर", "हाइड्रोमीटर"],
      answer: 0,
      exp: "Explanation (En): A barometer is the standard meteorological instrument used to measure atmospheric pressure.\nस्पष्टीकरण (Hi): वायुमंडलीय दाब मापने के लिए बैरोमीटर (Barometer) का उपयोग किया जाता है।"
    },
    {
      qEn: "What are lines on a weather map connecting points of equal atmospheric pressure called?",
      qHi: "समान वायुमंडलीय दाब वाले बिंदुओं को जोड़ने वाली मानचित्र की रेखाओं को क्या कहते हैं?",
      optionsEn: ["Isobars (समदाब रेखाएं)", "Isotherms", "Isohyets", "Isotachs"],
      optionsHi: ["समदाब रेखाएं या आइसोबार्स (Isobars)", "समताप रेखाएं", "समवर्षा रेखाएं", "आइसोटाच"],
      answer: 0,
      exp: "Explanation (En): Isobars are contour lines connecting locations with identical barometric pressure on weather maps.\nस्पष्टीकरण (Hi): सममान वाले वायुदाब बिंदुओं को मिलाने वाली रेखाएं आइसोबार्स (Isobars) कहलाती हैं।"
    },
    {
      qEn: "What are lines connecting points of equal temperature called?",
      qHi: "समान तापमान वाले स्थानों को मिलाने वाली मानचित्र की रेखाओं को क्या कहा जाता है?",
      optionsEn: ["Isotherms (समताप रेखाएं)", "Isobars", "Isohyets", "Contours"],
      optionsHi: ["समताप रेखाएं (Isotherms)", "आइसोबार", "आइसोहाइट", "कंटूर रेखाएं"],
      answer: 0,
      exp: "Explanation (En): Isotherms are lines on a map connecting points of equal temperature.\nस्पष्टीकरण (Hi): मानचित्र पर समान तापमान वाले स्थानों को जोड़ने वाली रेखाएं समताप रेखाएं (Isotherms) होती हैं।"
    },
    {
      qEn: "What are lines connecting points of equal rainfall called?",
      qHi: "समान वर्षा वाले स्थानों को मिलाने वाली मानचित्र की रेखाओं को क्या कहते हैं?",
      optionsEn: ["Isohyets (समवर्षा रेखाएं)", "Isobars", "Isotherms", "Isohys"],
      optionsHi: ["समवर्षा रेखाएं (Isohyets)", "आइसोबार", "आइसोथर्म", "आइसोहिस"],
      answer: 0,
      exp: "Explanation (En): Isohyets connect locations receiving equal amounts of precipitation.\nस्पष्टीकरण (Hi): समान वर्षा वाले क्षेत्रों को मिलाने वाली नक्शे की रेखाएं आइसोहाइट्स (Isohyets) कहलाती हैं।"
    },
    {
      qEn: "What is the Coriolis effect?",
      qHi: "कोरियोलिस प्रभाव (Coriolis effect) क्या है?",
      optionsEn: ["An apparent deflection of winds and ocean currents due to the Earth's rotation", "Solar magnetic pull", "Gravitational attraction of moon", "Atmospheric friction"],
      optionsHi: ["पृथ्वी के घूर्णन के कारण हवाओं और महासागरीय धाराओं का आभासी विक्षेपण (मुड़ना)", "सौर चुंबकीय खिंचाव", "चंद्रमा का गुरुत्वाकर्षण आकर्षण", "वायुमंडलीय घर्षण"],
      answer: 0,
      exp: "Explanation (En): The Coriolis effect deflects moving air to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.\nस्पष्टीकरण (Hi): पृथ्वी के अपने अक्ष पर घूमने के कारण हवाएं अपनी सीधी दिशा से मुड़ जाती हैं, जिसे कोरियोलिस प्रभाव कहते हैं।"
    },
    {
      qEn: "In which direction do winds deflect in the Northern Hemisphere due to the Coriolis effect?",
      qHi: "कोरियोलिस प्रभाव के कारण उत्तरी गोलार्ध में हवाएं किस दिशा में मुड़ जाती हैं?",
      optionsEn: ["To the right (दाईं ओर)", "To the left (बाईं ओर)", "Straight ahead", "Downward"],
      optionsHi: ["दाईं ओर (To the right)", "बाईं ओर", "सीधे आगे", "नीचे की ओर"],
      answer: 0,
      exp: "Explanation (En): Ferrel's law states that winds deflect to the right in the Northern Hemisphere.\nस्पष्टीकरण (Hi): फेरेल के नियम के अनुसार उत्तरी गोलार्ध में हवाएं अपनी गति की दिशा के दाईं ओर मुड़ती हैं।"
    },
    {
      qEn: "What are permanent winds blowing consistently from subtropical high to equatorial low-pressure areas called?",
      qHi: "उपोषणीय उच्च वायुदाब से विषुवतीय निम्न वायुदाब की ओर लगातार बहने वाली स्थायी हवाओं को क्या कहते हैं?",
      optionsEn: ["Trade winds (व्यापारिक हवाएं)", "Westerlies", "Polar easterlies", "Monsoon winds"],
      optionsHi: ["व्यापारिक हवाएं (Trade winds)", "पछुआ हवाएं", "ध्रुवीय पूर्वी हवाएं", "मानसूनी हवाएं"],
      answer: 0,
      exp: "Explanation (En): Trade winds are steady easterly surface winds blowing towards the equator in tropical latitudes.\nस्पष्टीकरण (Hi): व्यापारिक हवाएं (Trade winds) उष्ण कटिबंध में उच्च दाब से भूमध्य रेखा की ओर बहने वाली नियमित हवाएं हैं।"
    },
    {
      qEn: "What are prevailing winds blowing from subtropical highs toward subpolar lows in middle latitudes called?",
      qHi: "मध्य अक्षांशों में उपोषणीय उच्च दाब से उपध्रुवीय निम्न दाब की ओर बहने वाली प्रमुख हवाओं को क्या कहते हैं?",
      optionsEn: ["Westerlies (पछुआ हवाएं)", "Trade winds", "Polar winds", "Monsoon"],
      optionsHi: ["पछुआ हवाएं (Westerlies)", "व्यापारिक हवाएं", "ध्रुवीय हवाएं", "मानसून"],
      answer: 0,
      exp: "Explanation (En): Westerlies are prevailing winds in the middle latitudes blowing from the west toward the poles.\nस्पष्टीकरण (Hi): मध्यम अक्षांशों में पश्चिम से पूर्व की ओर बहने वाली हवाओं को पछुआ हवाएं (Westerlies) कहते हैं।"
    },
    {
      qEn: "What are seasonal reversing winds accompanied by corresponding changes in precipitation called?",
      qHi: "मौसम के अनुसार अपनी दिशा पूरी तरह बदलने वाली हवाओं और उनसे होने वाली मौसमी बारिश को क्या कहते हैं?",
      optionsEn: ["Monsoon winds (मानसून हवाएं)", "Trade winds", "Jet streams", "Local breezes"],
      optionsHi: ["मानसून हवाएं (Monsoon winds)", "व्यापारिक हवाएं", "जेट स्ट्रीम", "स्थानीय हवाएं"],
      answer: 0,
      exp: "Explanation (En): Monsoons are large-scale seasonal wind systems that reverse direction between summer and winter.\nस्पष्टीकरण (Hi): मानसून वे हवाएं हैं जो ऋतुओं के साथ अपनी दिशा उलट लेती हैं (जैसे भारतीय उपमहाद्वीप का मानसून)।्स",
      answer: 0,
      exp: "Explanation (En): Monsoons are large-scale seasonal wind systems that reverse direction between summer and winter.\nस्पष्टीकरण (Hi): मानसून वे हवाएं हैं जो ऋतुओं के साथ अपनी दिशा उलट लेती हैं (जैसे भारतीय उपमहाद्वीप का मानसून)।"
    },
    {
      qEn: "What are jet streams?",
      qHi: "जेट स्ट्रीम (Jet stream) क्या होती है?",
      optionsEn: ["Fast-flowing, narrow air currents in the upper atmosphere (tropopause)", "Surface ocean waves", "Local mountain breezes", "Volcanic smoke plumes"],
      optionsHi: ["ऊपरी वायुमंडल (क्षोभ सीमा) में तीव्र गति से बहने वाली संकरी हवा की धाराएं", "सतही समुद्री लहरें", "स्थानीय पर्वतीय हवाएं", "ज्वालामुखी धुएं के गुबार"],
      answer: 0,
      exp: "Explanation (En): Jet streams are high-altitude, fast-moving geostrophic air streams that steer weather systems globally.\nस्पष्टीकरण (Hi): जेट स्ट्रीम ऊपरी वायुमंडल में अत्यधिक गति से बहने वाली हवा की नलीनुमा धाराएं हैं।"
    },
    {
      qEn: "What is absolute humidity?",
      qHi: "निरपेक्ष आर्द्रता (Absolute humidity) किसे कहते हैं?",
      optionsEn: ["The actual mass of water vapor present in a specific volume of air", "Ratio of moisture to maximum capacity", "Dew point temperature", "Total rainfall volume"],
      optionsHi: ["हवा के एक विशिष्ट आयतन में मौजूद जलवाष्प की वास्तविक मात्रा", "अधिकतम क्षमता से नमी का अनुपात", "ओसांक तापमान", "कुल वर्षा आयतन"],
      answer: 0,
      exp: "Explanation (En): Absolute humidity is the total mass of water vapor in a given volume of air, usually measured in grams per cubic meter.\nस्पष्टीकरण (Hi): एक निश्चित आयतन की हवा में मौजूद पानी की कुल मात्रा को निरपेक्ष आर्द्रता कहते हैं।"
    },
    {
      qEn: "What is relative humidity?",
      qHi: "सापेक्ष आर्द्रता (Relative humidity) से क्या तात्पर्य है?",
      optionsEn: ["The ratio of water vapor in air compared to the maximum amount the air can hold at that temperature, expressed as a percentage", "Total cloud water", "Absolute rain amount", "Wind moisture speed"],
      optionsHi: ["हवा में मौजूद जलवाष्प और उसी तापमान पर हवा की अधिकतम जल धारण क्षमता का प्रतिशत अनुपात", "कुल बादल पानी", "निरपेक्ष वर्षा मात्रा", "हवा की नमी गति"],
      answer: 0,
      exp: "Explanation (En): Relative humidity expresses how saturated the air is with water vapor as a percentage.\nस्पष्टीकरण (Hi): दिए गए तापमान पर हवा की जल धारण क्षमता और उसमें मौजूद नमी के प्रतिशत अनुपात को सापेक्ष आर्द्रता कहते हैं।"
    },
    {
      qEn: "What is the dew point?",
      qHi: "ओसांक (Dew point) तापमान क्या होता है?",
      optionsEn: ["The temperature to which air must be cooled to become saturated with water vapor and start condensation", "Boiling point of water", "Maximum summer temperature", "Freezing point of snow"],
      optionsHi: ["वह तापमान जिस तक हवा को ठंडा करने पर वह जलवाष्प से संतृप्त हो जाती है और संघनन शुरू होता है", "पानी का क्वथनांक", "अधिकतम ग्रीष्मकालीन तापमान", "बर्फ का हिमांक"],
      answer: 0,
      exp: "Explanation (En): The dew point is the temperature at which relative humidity reaches 100%, causing water vapor to condense into liquid dew.\nस्पष्टीकरण (Hi): ओसांक वह तापमान है जिस पर हवा संतृप्त हो जाती है और जलवाष्प बूंदों (ओस) में बदलने लगती है।"
    },
    {
      qEn: "What type of rainfall occurs when warm, moist air is forced to rise over mountain barriers?",
      qHi: "जब गर्म और आर्द्र हवा पहाड़ों से टकराकर ऊपर उठती है, तो किस प्रकार की वर्षा होती है?",
      optionsEn: ["Orographic rainfall (पर्वतीय वर्षा)", "Convectional rainfall", "Cyclonic rainfall", "Frontal rainfall"],
      optionsHi: ["पर्वतीय वर्षा (Orographic rainfall)", "संवहनीय वर्षा", "चक्रवाती वर्षा", "वाताग्र वर्षा"],
      answer: 0,
      exp: "Explanation (En): Orographic precipitation occurs when moist air is lifted over mountain ranges, cooling and releasing rain on the windward side.\nस्पष्टीकरण (Hi): जब आर्द्र हवा पहाड़ों से रोककर ऊपर उठती है और ठंडी होकर बारिश करती है, तो उसे पर्वतीय (Orographic) वर्षा कहते हैं।"
    }
  ],
    "Oceanography": [
    {
      qEn: "What branch of Earth science studies the physical and biological aspects of the oceans?",
      qHi: "पृथ्वी विज्ञान की कौन सी शाखा महासागरों के भौतिक और जैविक पहलुओं का अध्ययन करती है?",
      optionsEn: ["Oceanography", "Meteorology", "Climatology", "Hydrology"],
      optionsHi: ["समुद्र विज्ञान या ओशनोग्राफी (Oceanography)", "मौसम विज्ञान", "जलवायु विज्ञान", "जल विज्ञान"],
      answer: 0,
      exp: "Explanation (En): Oceanography is the scientific study of the oceans, including their ecosystems, ocean currents, waves, plate tectonics, and seafloor geology.\nस्पष्टीकरण (Hi): महासागरों, उनके जीवों, धाराओं, लहरों और समुद्री तल के वैज्ञानिक अध्ययन को समुद्र विज्ञान (Oceanography) कहते हैं।"
    },
    {
      qEn: "What percentage of the Earth's surface is covered by oceans?",
      qHi: "पृथ्वी की सतह का लगभग कितना प्रतिशत भाग महासागरों द्वारा ढका हुआ है?",
      optionsEn: ["About 71%", "About 50%", "About 85%", "About 60%"],
      optionsHi: ["लगभग 71%", "लगभग 50%", "लगभग 85%", "लगभग 60%"],
      answer: 0,
      exp: "Explanation (En): Oceans cover approximately 71% of the Earth's surface, earning Earth the nickname 'the Blue Planet'.\nस्पष्टीकरण (Hi): पृथ्वी की सतह का लगभग 71% हिस्सा महासागरों से घिरा हुआ है, इसलिए इसे 'नीला ग्रह' कहा जाता है।"
    },
    {
      qEn: "Which is the largest and deepest ocean on Earth?",
      qHi: "पृथ्वी पर सबसे बड़ा और सबसे गहरा महासागर कौन सा है?",
      optionsEn: ["Pacific Ocean (प्रशांत महासागर)", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
      optionsHi: ["प्रशांत महासागर (Pacific Ocean)", "अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर"],
      answer: 0,
      exp: "Explanation (En): The Pacific Ocean is the largest and deepest of the world's oceanic divisions, containing the Mariana Trench.\nस्पष्टीकरण (Hi): प्रशांत महासागर दुनिया का सबसे बड़ा और सबसे गहरा महासागर है जिसमें मारियाना गर्त स्थित है।"
    },
    {
      qEn: "What is the deepest known point in the Earth's oceans, located in the Pacific Ocean?",
      qHi: "प्रशांत महासागर में स्थित पृथ्वी के महासागरों का सबसे गहरा ज्ञात बिंदु कौन सा है?",
      optionsEn: ["Mariana Trench (Challenger Deep)", "Sunda Trench", "Puerto Rico Trench", "Java Trench"],
      optionsHi: ["मारियाना गर्त या चैलेंजर डीप (Mariana Trench)", "सुंडा गर्त", "प्यूर्टो रिको गर्त", "जावा गर्त"],
      answer: 0,
      exp: "Explanation (En): The Challenger Deep in the Mariana Trench reaches a depth of nearly 11,000 meters below sea level.\nस्पष्टीकरण (Hi): मारियाना गर्त में स्थित चैलेंजर डीप समुद्र का सबसे गहरा बिंदु है (लगभग 11,000 मीटर)।"
    },
    {
      qEn: "Which ocean is shaped roughly like the letter 'S'?",
      qHi: "किस महासागर का आकार लगभग अंग्रेजी के अक्षर 'S' जैसा है?",
      optionsEn: ["Atlantic Ocean (अटलांटिक महासागर)", "Pacific Ocean", "Indian Ocean", "Southern Ocean"],
      optionsHi: ["अटलांटिक महासागर (Atlantic Ocean)", "प्रशांत महासागर", "हिंद महासागर", "दक्षिणी महासागर"],
      answer: 0,
      exp: "Explanation (En): The Atlantic Ocean forms an elongated 'S'-shape basin separating the Americas from Europe and Africa.\nस्पष्टीकरण (Hi): अटलांटिक महासागर का बेसिन अंग्रेजी के 'S' अक्षर जैसा लंबा फैला हुआ है।"
    },
    {
      qEn: "What is the gently sloping shallow region of the ocean floor bordering the continents called?",
      qHi: "महाद्वीपों के किनारे समुद्र के भीतर मौजूद उथले और मंद ढलान वाले हिस्से को क्या कहते हैं?",
      optionsEn: ["Continental shelf (महाद्वीपीय मग्नतट)", "Continental slope", "Abyssal plain", "Ocean trench"],
      optionsHi: ["महाद्वीपीय मग्नतट (Continental shelf)", "महाद्वीपीय ढलान", "नितल मैदान", "महासागरीय खाई"],
      answer: 0,
      exp: "Explanation (En): The continental shelf is the extended perimeter of each continent covered by relatively shallow seas (usually up to 200m depth).\nस्पष्टीकरण (Hi): महाद्वीपीय मग्नतट महाद्वीप का वह उथला हिस्सा होता है जो पानी के नीचे डूबा रहता है और जहाँ मछली पकड़ने के अच्छे मैदान होते हैं।"
    },
    {
      qEn: "What is the steep drop-off zone connecting the continental shelf to the deep ocean floor called?",
      qHi: "महाद्वीपीय मग्नतट को गहरे महासागरीय तल से जोड़ने वाले तीव्र ढलान वाले क्षेत्र को क्या कहते हैं?",
      optionsEn: ["Continental slope (महाद्वीपीय ढाल)", "Continental rise", "Abyssal plain", "Ocean trench"],
      optionsHi: ["महाद्वीपीय ढाल (Continental slope)", "महाद्वीपीय उभार", "एबिसल प्लेन", "समुद्री खाई"],
      answer: 0,
      exp: "Explanation (En): The continental slope drops steeply from the outer edge of the continental shelf down to the deep ocean floor.\nस्पष्टीकरण (Hi): मग्नतट के खत्म होने पर शुरू होने वाला तीव्र ढलान 'महाद्वीपीय ढाल' (Continental slope) कहलाता है।"
    },
    {
      qEn: "What are the vast, extremely flat areas covering the deep ocean floor called?",
      qHi: "गहरे महासागरीय तल को ढकने वाले विशाल और अत्यंत सपाट मैदानों को क्या कहा जाता है?",
      optionsEn: ["Abyssal plains (नितल मैदान / एबिसल प्लेन)", "Continental shelves", "Mid-ocean ridges", "Seamounts"],
      optionsHi: ["एबिसल प्लेन या नितल मैदान (Abyssal plains)", "मग्नतट", "मध्य-महासागरीय कटक", "सीमाउंट"],
      answer: 0,
      exp: "Explanation (En): Abyssal plains are flat or very gently sloping regions of the deep ocean basin, lying between 3,000 and 6,000 meters deep.\nस्पष्टीकरण (Hi): गहरे समुद्र के नीचे पाए जाने वाले विशाल और सपाट मैदानों को एबिसल प्लेन (Abyssal plains) कहते हैं।"
    },
    {
      qEn: "What are underwater mountain ranges formed by plate tectonics in the middle of oceans called?",
      qHi: "महासागरों के बीच में प्लेट टेक्टोनिक्स के कारण बनने वाली पानी के भीतर की पर्वत श्रृंखलाओं को क्या कहते हैं?",
      optionsEn: ["Mid-ocean ridges (मध्य-महासागरीय कटक)", "Abyssal hills", "Trench systems", "Continental margins"],
      optionsHi: ["मध्य-महासागरीय कटक (Mid-ocean ridges)", "एबिसल पहाड़ियां", "खाई प्रणालियां", "महाद्वीपीय किनारे"],
      answer: 0,
      exp: "Explanation (En): Mid-ocean ridges are underwater mountain systems formed by divergent plate boundaries where new oceanic crust is created.\nस्पष्टीकरण (Hi): मध्य-महासागरीय कटक पानी के भीतर लंबी पर्वतमालाएं हैं जहाँ दो प्लेटें अलग हटती हैं और नया लावा निकलता है।"
    },
    {
      qEn: "What is salinity of ocean water defined as?",
      qHi: "समुद्री जल की लवणता (Salinity) को कैसे परिभाषित किया जाता है?",
      optionsEn: ["The total amount of dissolved salts in grams contained in 1,000 grams (1 kg) of seawater, expressed in parts per thousand (ppt)", "Percentage of pure salt in water", "Weight of ocean sand", "Amount of dissolved oxygen"],
      optionsHi: ["1,000 ग्राम (1 किलो) समुद्री पानी में घुले हुए लवणों की कुल मात्रा (ग्राम में), जिसे प्रति हजार (ppt) में व्यक्त करते हैं", "पानी में शुद्ध नमक का प्रतिशत", "समुद्री रेत का वजन", "घुली हुई ऑक्सीजन की मात्रा"],
      answer: 0,
      exp: "Explanation (En): Seawater salinity is expressed as parts per thousand (‰ or ppt). The average ocean salinity is about 35 ppt.\nस्पष्टीकरण (Hi): 1000 ग्राम समुद्री जल में घुले हुए नमक की कुल मात्रा को लवणता कहते हैं (औसत लवणता लगभग 35 ppt होती है)।"
    },
    {
      qEn: "Which salt is found in the highest concentration in seawater?",
      qHi: "समुद्री जल में किस लवण की सांद्रता सबसे अधिक पाई जाती है?",
      optionsEn: ["Sodium chloride (NaCl)", "Magnesium chloride", "Calcium sulphate", "Potassium chloride"],
      optionsHi: ["सोडियम क्लोराइड या साधारण नमक (NaCl)", "मैग्नीशियम क्लोराइड", "कैल्शियम सल्फेट", "पोटेशियम क्लोराइड"],
      answer: 0,
      exp: "Explanation (En): Sodium chloride accounts for about 77% of all dissolved salts in seawater.\nस्पष्टीकरण (Hi): समुद्री पानी में घुले लवणों में सबसे अधिक मात्रा (लगभग 77%) सोडियम क्लोराइड (साधारण नमक) की होती है।"
    },
    {
      qEn: "Which body of water has the highest salinity in the world?",
      qHi: "दुनिया में किस जल निकाय (झील/सागर) की लवणता सबसे अधिक है?",
      optionsEn: ["Lake Van (Turkey) / Dead Sea", "Pacific Ocean", "Atlantic Ocean", "Red Sea"],
      optionsHi: ["वान झील (तुर्की) / मृत सागर (Dead Sea)", "प्रशांत महासागर", "अटलांटिक महासागर", "लाल सागर"],
      answer: 0,
      exp: "Explanation (En): Lake Van in Turkey has a salinity of around 330 ppt, followed by the Dead Sea (~340 ppt), making people float easily.\nस्पष्टीकरण (Hi): तुर्की की वान झील (Lake Van) और मृत सागर (Dead Sea) दुनिया के सबसे अधिक खारे जल निकायों में आते हैं।"
    },
    {
      qEn: "What is the halocline?",
      qHi: "हेलोक्लाइन (Halocline) क्या होता है?",
      optionsEn: ["A vertical zone in the ocean where salinity changes rapidly with depth", "A layer of rapid temperature change", "Deepest ocean trench", "Shallow coastline zone"],
      optionsHi: ["महासागर में गहराई के साथ लवणता में तेजी से बदलाव आने वाली ऊर्ध्वाधर परत", "तापमान में तेजी से बदलाव की परत", "सबसे गहरी महासागरीय खाई", "उथला तटीय क्षेत्र"],
      answer: 0,
      exp: "Explanation (En): A halocline is a subtype of chemocline caused by a strong, vertical salinity gradient within a body of water.\nस्पष्टीकरण (Hi): हेलोक्लाइन समुद्र के अंदर वह परत है जहाँ गहराई के साथ लवणता (नमक की मात्रा) अचानक बहुत तेजी से बदलती है।"
    },
    {
      qEn: "What is the thermocline?",
      qHi: "थर्मोक्लाइन (Thermocline) किसे कहते हैं?",
      optionsEn: ["A distinct layer in a large body of water where temperature changes more rapidly with depth than the layers above or below", "Layer of high salinity", "Deep sea floor", "Surface wave zone"],
      optionsHi: ["जल निकाय की वह परत जहाँ गहराई के साथ तापमान बहुत तेजी से बदलता है", "उच्च लवणता की परत", "गहरा समुद्र तल", "सतही लहर क्षेत्र"],
      answer: 0,
      exp: "Explanation (En): The thermocline separates the warm upper mixed layer of the ocean from the cold deep ocean water below.\nस्पष्टीकरण (Hi): थर्मोक्लाइन समुद्र की वह परत है जो ऊपर के गर्म पानी को नीचे के ठंडे पानी से अलग करती है और तापमान तेजी से गिरता है।"
    },
    {
      qEn: "What are ocean currents?",
      qHi: "महासागरीय धाराएं (Ocean currents) क्या होती हैं?",
      optionsEn: ["Continuous, directed movements of seawater generated by forces acting upon this mean flow (like wind, Coriolis effect, and density)", "Temporary tsunami waves", "River water flow", "Tidal rise and fall"],
      optionsHi: ["हवा, कोरियोलिस प्रभाव और घनत्व जैसे बलों के कारण समुद्री जल का एक निश्चित दिशा में निरंतर प्रवाह", "अस्थायी सुनामी लहरें", "नदी का पानी", "ज्वार का उठना और गिरना"],
      answer: 0,
      exp: "Explanation (En): Ocean currents act like rivers within the ocean, driven by surface winds, Earth's rotation, and thermohaline circulation.\nस्पष्टीकरण (Hi): महासागरीय धाराएं समुद्र के भीतर एक निश्चित रास्ते पर बहने वाली पानी की विशाल नदियां जैसी होती हैं।"
    },
    {
      qEn: "Which of the following is a warm ocean current?",
      qHi: "निम्नलिखित में से कौन सी एक गर्म महासागरीय धारा (Warm ocean current) है?",
      optionsEn: ["Gulf Stream", "Labrador Current", "Peru Current", "California Current"],
      optionsHi: ["गल्फ स्ट्रीम (Gulf Stream)", "लैब्राडोर धारा", "पेरू धारा", "कैलिफोर्निया धारा"],
      answer: 0,
      exp: "Explanation (En): The Gulf Stream is a powerful, warm Atlantic ocean current originating in the Gulf of Mexico and warming Western Europe.\nस्पष्टीकरण (Hi): गल्फ स्ट्रीम एक प्रमुख गर्म महासागरीय धारा है जो अटलांटिक महासागर में प्रवाहित होती है।"
    },
    {
      qEn: "Which of the following is a cold ocean current?",
      qHi: "निम्नलिखित में से कौन सी एक ठंडी महासागरीय धारा (Cold ocean current) है?",
      optionsEn: ["Labrador Current", "Gulf Stream", "Kuroshio Current", "Brazil Current"],
      optionsHi: ["लैब्राडोर धारा (Labrador Current)", "गल्फ स्ट्रीम", "कुुरोशियो धारा", "ब्राजील धारा"],
      answer: 0,
      exp: "Explanation (En): The Labrador Current is a cold current flowing down from the Arctic Ocean along the coast of Labrador and Newfoundland.\nस्पष्टीकरण (Hi): लैब्राडोर धारा आर्कटिक क्षेत्र से आने वाली एक ठंडी महासागरीय धारा है।"
    },
    {
      qEn: "What is the Peru Current (also known as Humboldt Current)?",
      qHi: "पेरू धारा (या हम्बोल्ट धारा) किस प्रकार की महासागरीय धारा है?",
      optionsEn: ["A cold ocean current flowing along the western coast of South America", "A warm current in Atlantic", "Equatorial counter current", "Indian ocean warm current"],
      optionsHi: ["दक्षिण अमेरिका के पश्चिमी तट के साथ बहने वाली एक ठंडी महासागरीय धारा", "अटलांटिक की गर्म धारा", "विषुवतीय प्रतिधारा", "हिंद महासागर की गर्म धारा"],
      answer: 0,
      exp: "Explanation (En): The Humboldt (Peru) Current is a cold-water current that flows north along the west coast of South America, rich in marine life.\nस्पष्टीकरण (Hi): हम्बोल्ट या पेरू धारा दक्षिण अमेरिका के पश्चिमी तट पर बहने वाली एक ठंडी और मछली संपदा से समृद्ध धारा है।"
    },
    {
      qEn: "What causes ocean tides (the regular rise and fall of sea level)?",
      qHi: "समुद्री ज्वार-भाटा (समुद्र के जल स्तर का नियमित उठना और गिरना) का मुख्य कारण क्या है?",
      optionsEn: ["Gravitational pull of the Moon and the Sun acting on Earth's oceans", "Undersea volcanic activity", "Surface wind storms", "Earthquake shockwaves"],
      optionsHi: ["पृथ्वी के महासागरों पर चंद्रमा और सूर्य का गुरुत्वाकर्षण खिंचाव", "पानी के नीचे ज्वालामुखी गतिविधि", "सतही हवा के तूफान", "भूकंप की तरंगें"],
      answer: 0,
      exp: "Explanation (En): Tides are caused by the gravitational pull exerted primarily by the Moon and secondarily by the Sun on Earth's rotating water bodies.\nस्पष्टीकरण (Hi): ज्वار मुख्य रूप से चंद्रमा और सूर्य के गुरुत्वाकर्षण खिंचाव के कारण उत्पन्न होते हैं।"
    },
    {
      qEn: "What are spring tides?",
      qHi: "वृहत ज्वार या 'स्प्रींग टाइड' (Spring tides) कब आते हैं?",
      optionsEn: ["When the Sun, Earth, and Moon are aligned (during full moon and new moon), producing highest high tides", "When Moon is at right angle to Sun", "During winter season only", "When tides are lowest"],
      optionsHi: ["जब सूर्य, पृथ्वी और चंद्रमा एक सीध में होते हैं (पूर्णिमा और अमावस्या को), जिससे सबसे ऊंचे ज्वार आते हैं", "जब चंद्रमा सूर्य के समकोण पर हो", "केवल सर्दियों में", "जब ज्वार सबसे छोटे हों"],
      answer: 0,
      exp: "Explanation (En): Spring tides occur during full and new moons when the gravitational forces of the Sun and Moon combine to produce maximum tidal range.\nस्पष्टीकरण (Hi): पूर्णिमा और अमावस्या के दिन जब सूर्य, पृथ्वी और चंद्रमा एक सीध में होते हैं, तब सबसे ऊंचे ज्वार (Spring tides) आते हैं।"
    },
    {
      qEn: "What are neap tides?",
      qHi: "लघु ज्वार या 'नीप टाइड' (Neap tides) कब आते हैं?",
      optionsEn: ["When the Sun and Moon are at right angles to each other relative to Earth (during first and third quarters of moon), producing lowest tidal range", "During full moon alignment", "When wind blows hardest", "At equator only"],
      optionsHi: ["जब सूर्य और चंद्रमा पृथ्वी के सापेक्ष समकोण पर होते हैं (चंद्रमा के प्रथम और तृतीय चतुर्थांश में), जिससे सबसे कम ज्वार आते हैं", "पूर्णिमा की सीध में", "जब हवा सबसे तेज चले", "केवल भूमध्य रेखा पर"],
      answer: 0,
      exp: "Explanation (En): Neap tides occur during quarter moons when gravitational forces of Sun and Moon counteract each other, resulting in lower high tides.\nस्पष्टीकरण (Hi): जब चंद्रमा और सूर्य पृथ्वी के केंद्र से समकोण (Right angle) पर होते हैं, तब सबसे कमजोर या छोटे ज्वार (Neap tides) आते हैं।"
    },
    {
      qEn: "What is the periodic interval between two high tides at a given place on Earth?",
      qHi: "पृथ्वी पर किसी स्थान पर दो उच्च ज्वारों के बीच का समयांतर सामान्यतः कितना होता है?",
      optionsEn: ["12 hours and 26 minutes", "24 hours", "6 hours", "1 week"],
      optionsHi: ["12 घंटे 26 मिनट", "24 घंटे", "6 घंटे", "1 सप्ताह"],
      answer: 0,
      exp: "Explanation (En): Because Earth rotates through two tidal bulges every lunar day, a high tide occurs roughly every 12 hours and 26 minutes.\nस्पष्टीकरण (Hi): पृथ्वी के घूर्णन और चंद्रमा की गति के कारण सामान्यतः किसी स्थान पर हर 12 घंटे 26 मिनट बाद उच्च ज्वार आता है।"
    },
    {
      qEn: "What is the continental drift theory regarding ocean basins and continents proposed by Alfred Wegener suggest?",
      qHi: "अल्फ्रेड वेगनर द्वारा प्रतिपादित महाद्वीपीय विस्थापन सिद्धांत (Continental Drift Theory) क्या सुझाव देता है?",
      optionsEn: ["All continents were once joined together in a supercontinent called Pangaea before breaking apart", "Continents are fixed forever", "Oceans are shrinking to zero", "Moon formed the ocean basins"],
      optionsHi: ["सभी महाद्वीप कभी 'पंजिया' नामक एक महाद्वीप के रूप में जुड़े हुए थे और बाद में अलग हो गए", "महाद्वीप हमेशा स्थिर हैं", "महासागर शून्य हो रहे हैं", "चंद्रमा ने महासागरीय बेसिन बनाए"],
      answer: 0,
      exp: "Explanation (En): Wegener proposed Pangaea broke apart millions of years ago, drifting continents to their current positions across ocean basins.\nस्पष्टीकरण (Hi): वेगनर के अनुसार करोड़ों साल पहले सभी महाद्वीप 'पंजिया' नामक एक विशाल भूखंड थे जो धीरे-धीरे खिसककर अलग हो गए।"
    },
    {
      qEn: "What is sea-floor spreading theory?",
      qHi: "समुद्र तल विस्तार का सिद्धांत (Sea-floor spreading theory) किसने और क्या प्रतिपादित किया?",
      optionsEn: ["Harry Hess proposed that new oceanic crust is formed at mid-ocean ridges and spreads outward", "Charles Darwin proposed ocean drying", "Wegener proposed land sinking", "Aristotle proposed static oceans"],
      optionsHi: ["हैरी हेस ने प्रतिपादित किया कि मध्य-महासागरीय कटकों पर नई oceanic क्रस्ट बनती है और बाहर की ओर फैलती है", "चार्ल्स डार्विन", "वेगनर", "अरस्तू"],
      answer: 0,
      exp: "Explanation (En): Harry Hess explained that magma wells up at mid-ocean ridges, creating new seafloor and pushing older crust away.\nस्पष्टीकरण (Hi): हैरी हेस ने बताया कि मध्य-महासागरीय कटकों से मैग्मा निकलकर नया समुद्र तल बनाता है जिससे पुराना तल दूर खिसकता है।"
    },
    {
      qEn: "What are gyres in oceanography?",
      qHi: "समुद्र विज्ञान में 'गाइर' (Gyres) किसे कहा जाता है?",
      optionsEn: ["Large systems of circular ocean currents formed by global wind patterns and Coriolis forces", "Deep sea whirlpools", "Tidal river mouths", "Coral reef formations"],
      optionsHi: ["वैश्विक हवाओं और कोरियोलिस बलों द्वारा बनने वाले गोलाकार महासागरीय धाराओं के बड़े चक्र", "गहरे समुद्र के भंवर", "ज्वारनदमुख", "प्रवाल भित्ति संरचनाएं"],
      answer: 0,
      exp: "Explanation (En): Ocean gyres are large-scale circular current systems spanning entire ocean basins, rotating clockwise in Northern Hemisphere and counter-clockwise in Southern.\nस्पष्टीकरण (Hi): महासागरीय बेसिन में हवाओं और पृथ्वी के घूमने से बनने वाले विशाल वृत्ताकार जल प्रवाह चक्रों को गाइर कहते हैं।"
    },
    {
      qEn: "What are coral reefs built primarily by?",
      qHi: "प्रवाल भित्तियां (Coral reefs) मुख्य रूप से किसके द्वारा बनाई जाती हैं?",
      optionsEn: ["Tiny marine invertebrates called polyps and symbiotic algae (zooxanthellae)", "Volcanic ash rocks", "Deep sea fish skeletons", "Sand deposits"],
      optionsHi: ["छोटे समुद्री जीवों (पॉलिप्स) और सहजीवी शैवाल (जूजैंथेली) द्वारा", "ज्वालामुखी राख चट्टानों", "गहरे समुद्र की मछलियों के कंकाल", "रेत के निक्षेप"],
      answer: 0,
      exp: "Explanation (En): Coral reefs are built by colonies of tiny coral polyps that secrete hard calcium carbonate skeletons.\nस्पष्टीकरण (Hi): प्रवाल भित्तियां सूक्ष्म जीव पॉलीप्स के कैल्शियम कार्बोनेट कंकाल और शैवाल के मेल से बनती हैं।"
    },
    {
      qEn: "Which is the largest coral reef system in the world?",
      qHi: "दुनिया की सबसे बड़ी प्रवाल भित्ति (Coral reef) प्रणाली कौन सी है?",
      optionsEn: ["Great Barrier Reef (Australia)", "Belize Barrier Reef", "New Caledonia Barrier Reef", "Andaman Coral Reef"],
      optionsHi: ["ग्रेट बैरियर रीफ, ऑस्ट्रेलिया (Great Barrier Reef)", "बेलीज बैरियर रीफ", "न्यू कैलेडोनिया रीफ", "अंडमान प्रवाल रीफ"],
      answer: 0,
      exp: "Explanation (En): The Great Barrier Reef off the coast of Queensland, Australia, is the world's largest coral reef system, visible from space.\nस्पष्टीकरण (Hi): ऑस्ट्रेलिया के उत्तर-पूर्वी तट पर स्थित 'ग्रेट बैरियर रीफ' दुनिया की सबसे बड़ी प्रवाल भित्ति है।"
    },
    {
      qEn: "What is coral bleaching?",
      qHi: "प्रवाल विरंजन या 'कोरल ब्लीचिंग' (Coral bleaching) क्या है?",
      optionsEn: ["The whitening of corals due to stress (like rising ocean temperature or pollution) causing them to expel symbiotic algae", "Painting of corals by scientists", "Natural reproduction stage", "Deep sea sand cover"],
      optionsHi: ["समुद्री तापमान बढ़ने या प्रदूषण जैसे तनाव के कारण कोरल द्वारा अपने सहजीवी शैवाल को बाहर निकाल देने से उनका सफेद होना", "वैज्ञानिकों द्वारा कोरल रंगना", "प्राकृतिक प्रजनन चरण", "गहरे समुद्र की रेत कवर"],
      answer: 0,
      exp: "Explanation (En): When ocean waters get too warm, corals expel the algae (zooxanthellae) living in their tissues, turning completely white and starving.\nस्पष्टीकरण (Hi): समुद्र का तापमान बढ़ने पर कोरल अपने अंदर मौजूद रंगीन शैवाल को छोड़ देते हैं जिससे वे सफेद पड़ जाते हैं और मरने लगते हैं।"
    },
    {
      qEn: "What is an atoll?",
      qHi: "एटोल (Atoll) या वलयाकार प्रवाल द्वीप क्या होता है?",
      optionsEn: ["A ring-shaped coral reef including a coral rim that encloses a lagoon", "A linear coastal reef", "A deep ocean trench", "An underwater volcanic mountain peak"],
      optionsHi: ["एक अंगूठी के आकार की प्रवाल रीफ जो अपने अंदर एक लैगून (झील) को घेरे रहती है", "एक रेखीय तटीय रीफ", "एक गहरी समुद्री खाई", "एक पानी के नीचे का ज्वालामुखी पहाड़"],
      answer: 0,
      exp: "Explanation (En): Atolls are circular or ring-shaped coral reefs that form around sinking volcanic islands, enclosing a central lagoon.\nस्पष्टीकरण (Hi): डूबे हुए ज्वालामुखी द्वीपों के चारों ओर अंगूठी के आकार में बनी प्रवाल रीफ को एटोल (Atoll) कहते हैं जिसके बीच में लैगून होता है।"
    },
    {
      qEn: "What is upwelling in oceanography?",
      qHi: "समुद्र विज्ञान में 'अपवेलिंग' (Upwelling) प्रक्रिया क्या है?",
      optionsEn: ["The upward movement of cold, nutrient-rich deep ocean water to the surface", "The sinking of surface warm water", "Tidal wave crest rise", "Melting of sea ice"],
      optionsHi: ["गहरे समुद्र से ठंडे और पोषक तत्वों से भरपूर पानी का सतह की ओर ऊपर उठना", "सतह के गर्म पानी का नीचे बैठना", "ज्वार तरंग शिखर का उठना", "समुद्री बर्फ का पिघलना"],
      answer: 0,
      exp: "Explanation (En): Upwelling occurs when wind pushes surface water away, allowing cold, nutrient-dense water from deep below to rise, supporting rich fisheries.\nस्पष्टीकरण (Hi): जब हवाएं सतह के पानी को हटा देती हैं, तो नीचे का ठंडा और पोषक तत्वों से भरपूर पानी ऊपर आ जाता है, जिसे अपवेलिंग कहते हैं।"
    }
  ],
    "Structure and Composition of the Atmosphere": [
    {
      qEn: "What is the primary scientific definition of the atmosphere?",
      qHi: "वायुमंडल की प्राथमिक वैज्ञानिक परिभाषा क्या है?",
      optionsEn: ["A layer of gases surrounding a planet held in place by gravity", "A liquid ocean layer", "The molten core of the earth", "Solid crustal rock"],
      optionsHi: ["गुरुत्वाकर्षण द्वारा अपने स्थान पर टिकी हुई किसी ग्रह को घेरने वाली गैसों की एक परत", "एक तरल महासागर परत", "पृथ्वी का पिघला हुआ कोर", "ठोस क्रस्टल चट्टान"],
      answer: 0,
      exp: "Explanation (En): The atmosphere is the envelope of gases surrounding the Earth or another planet.\nस्पष्टीकरण (Hi): वायुमंडल पृथ्वी या किसी अन्य ग्रह के चारों ओर गैसों का आवरण है जो गुरुत्वाकर्षण के कारण टिका रहता है।"
    },
    {
      qEn: "Which gas constitutes the highest percentage of the Earth's dry atmosphere by volume?",
      qHi: "आयतन के अनुसार पृथ्वी के शुष्क वायुमंडल में कौन सी गैस सबसे अधिक प्रतिशत में होती है?",
      optionsEn: ["Nitrogen (~78%)", "Oxygen (~21%)", "Argon (~0.93%)", "Carbon dioxide (~0.04%)"],
      optionsHi: ["नाइट्रोजन (~78%)", "ऑक्सीजन (~21%)", "ऑर्गन (~0.93%)", "कार्बन डाइऑक्साइड (~0.04%)"],
      answer: 0,
      exp: "Explanation (En): Nitrogen makes up roughly 78 percent of Earth's atmosphere by volume.\nस्पष्टीकरण (Hi): आयतन के हिसाब से नाइट्रोजन हमारे वायुमंडल का लगभग 78% हिस्सा बनाती है।"
    },
    {
      qEn: "Which layer of the atmosphere contains roughly 75% of its total mass and all major weather systems?",
      qHi: "वायुमंडल की किस परत में इसका लगभग 75% कुल द्रव्यमान और सभी प्रमुख मौसमी प्रणालियां पाई जाती हैं?",
      optionsEn: ["Troposphere (क्षोभमंडल)", "Stratosphere", "Mesosphere", "Thermosphere"],
      optionsHi: ["क्षोभमंडल (Troposphere)", "समताप मंडल", "मध्यमंडल", "तापमंडल"],
      answer: 0,
      exp: "Explanation (En): The troposphere is the lowest layer where weather, clouds, and storms occur, holding most atmospheric mass.\nस्पष्टीकरण (Hi): क्षोभमंडल सबसे निचली परत है जहाँ बादल, आंधी और सभी मौसमी घटनाएं होती हैं।"
    },
    {
      qEn: "What is the phenomenon where temperature decreases with height in the troposphere called?",
      qHi: "क्षोभमंडल में ऊंचाई के साथ तापमान के घटने की घटना को क्या कहा जाता है?",
      optionsEn: ["Normal lapse rate", "Inversion rate", "Adiabatic heating", "Geothermal gradient"],
      optionsHi: ["सामान्य हास दर (Normal lapse rate)", "व्युत्क्रमण दर", "रुद्धोष्म तापन", "भूतापीय प्रवणता"],
      answer: 0,
      exp: "Explanation (En): The normal lapse rate is the average rate of temperature decrease with altitude in the troposphere (~6.5°C per km).\nस्पष्टीकरण (Hi): क्षोभमंडल में प्रति किलोमीटर ऊंचाई बढ़ने पर तापमान औसतन 6.5°सी घटता है, जिसे सामान्य हास दर कहते हैं।"
    },
    {
      qEn: "Which atmospheric layer sits directly above the troposphere and houses the ozone layer?",
      qHi: "क्षोभमंडल के ठीक ऊपर कौन सी वायुमंडलीय परत स्थित है जिसमें ओजोन परत पाई जाती है?",
      optionsEn: ["Stratosphere (समताप मंडल)", "Mesosphere", "Thermosphere", "Exosphere"],
      optionsHi: ["समताप मंडल (Stratosphere)", "मध्यमंडल", "तापमंडल", "बहिर्मंडल"],
      answer: 0,
      exp: "Explanation (En): The stratosphere extends from the tropopause to about 50 km, containing the protective ozone layer.\nस्पष्टीकरण (Hi): समताप मंडल में ओजोन परत होती है जो सूर्य की पराबैंगनी किरणों को सोखती है।"
    },
    {
      qEn: "Why is the stratosphere preferred for commercial jet flight routes?",
      qHi: "वाणिज्यिक जेट उड़ानों के लिए समताप मंडल को क्यों पसंद किया जाता है?",
      optionsEn: ["It lacks major weather turbulence, clouds, and storms, providing stable air", "Air is thickest there", "Gravity is absent", "Magnetic field is strongest"],
      optionsHi: ["इसमें प्रमुख मौसमी उथल-पुथल, बादल और तूफान नहीं होते, जिससे स्थिर हवा मिलती है", "वहाँ हवा सबसे घनी होती है", "गुरुत्वाकर्षण अनुपस्थित होता है", "चुंबकीय क्षेत्र सबसे मजबूत होता है"],
      answer: 0,
      exp: "Explanation (En): The lower stratosphere is calm, dry, and free of weather disturbances, making it ideal for flying.\nस्पष्टीकरण (Hi): निचला समताप मंडल शांत और बादलों से मुक्त होता है, जिससे विमान बिना झटकों के आसानी से उड़ सकते हैं।"
    },
    {
      qEn: "What is the boundary separating the troposphere and stratosphere called?",
      qHi: "क्षोभमंडल और समताप मंडल को अलग करने वाली सीमा को क्या कहा जाता है?",
      optionsEn: ["Tropopause (क्षोभ सीमा)", "Stratopause", "Mesopause", "Thermopause"],
      optionsHi: ["क्षोभ सीमा (Tropopause)", "स्ट्रेटोपॉज", "मेसोपॉज", "थर्मोपॉज"],
      answer: 0,
      exp: "Explanation (En): The tropopause is the transitional boundary layer marking the upper limit of the troposphere.\nस्पष्टीकरण (Hi): क्षोभ सीमा (Tropopause) क्षोभमंडल और समताप मंडल के बीच की पतली संक्रमण परत है।"
    },
    {
      qEn: "Which atmospheric layer is known as the coldest layer of the atmosphere?",
      qHi: "वायुमंडल की किस परत को सबसे ठंडी परत के रूप में जाना जाता है?",
      optionsEn: ["Mesosphere (मध्यमंडल)", "Stratosphere", "Troposphere", "Exosphere"],
      optionsHi: ["मध्यमंडल (Mesosphere)", "समताप मंडल", "क्षोभमंडल", "बहिर्मंडल"],
      answer: 0,
      exp: "Explanation (En): The mesosphere reaches temperatures as low as -90°C, making it the coldest atmospheric layer.\nस्पष्टीकरण (Hi): मध्यमंडल (Mesosphere) में तापमान बहुत गिर जाता है (-90°C तक), जिससे यह सबसे ठंडी परत बनती है।"
    },
    {
      qEn: "What happens to meteors when they enter the mesosphere?",
      qHi: "मध्यमंडल में प्रवेश करने पर उल्कापिंडों (Meteors) के साथ क्या होता है?",
      optionsEn: ["They burn up due to friction with atmospheric gases", "They bounce back into space", "They freeze solid and land", "They turn into water"],
      optionsHi: ["वायुमंडलीय गैसों के साथ घर्षण के कारण वे जल जाते हैं", "वे अंतरिक्ष में वापस उछल जाते हैं", "वे ठोस जम जाते हैं और उतरते हैं", "वे पानी में बदल जाते हैं"],
      answer: 0,
      exp: "Explanation (En): Incoming meteoroids burn up upon colliding with gas molecules in the mesosphere, creating shooting stars.\nस्पष्टीकरण (Hi): अंतरिक्ष से आने वाले उल्कापिंड मध्यमंडल की गैसों से रगड़ खाकर जल जाते हैं (टूटते तारे)।"
    },
    {
      qEn: "Which layer contains electrically charged ions that reflect radio waves back to Earth?",
      qHi: "किस परत में विद्युत आवेशित आयन होते हैं जो रेडियो तरंगों को वापस पृथ्वी पर परावर्तित करते हैं?",
      optionsEn: ["Ionosphere (आयनमंडल / तापमंडल का हिस्सा)", "Troposphere", "Stratosphere", "Mesosphere"],
      optionsHi: ["आयनमंडल (Ionosphere)", "क्षोभमंडल", "समताप मंडल", "मध्यमंडल"],
      answer: 0,
      exp: "Explanation (En): The ionosphere contains ions and free electrons that reflect radio communication frequencies back to Earth's surface.\nस्पष्टीकरण (Hi): आयनमंडल में आवेशित कण होते हैं जो लंबी दूरी के रेडियो संचार को संभव बनाते हैं।"
    },
    {
      qEn: "What is the outermost layer of the Earth's atmosphere called?",
      qHi: "पृथ्वी के वायुमंडल की सबसे बाहरी परत को क्या कहा जाता है?",
      optionsEn: ["Exosphere (बहिर्मंडल)", "Thermosphere", "Mesosphere", "Stratosphere"],
      optionsHi: ["बहिर्मंडल (Exosphere)", "तापमंडल", "मध्यमंडल", "समताप मंडल"],
      answer: 0,
      exp: "Explanation (En): The exosphere is the upper limit of the atmosphere where molecules gradually escape into interplanetary space.\nस्पष्टीकरण (Hi): बहिर्मंडल सबसे बाहरी परत है जहाँ वायु के हल्के अणु धीरे-धीरे अंतरिक्ष में विलीन हो जाते हैं।"
    },
    {
      qEn: "Which gas in the stratosphere absorbs harmful ultraviolet radiation from the sun?",
      qHi: "समताप मंडल में कौन सी गैस सूर्य से आने वाली हानिकारक पराबैंगनी (UV) विकिरण को अवशोषित करती है?",
      optionsEn: ["Ozone (O_3)", "Carbon dioxide (CO_2)", "Methane (CH_4)", "Nitrogen (N_2)"],
      optionsHi: ["ओजोन (O_3)", "कार्बन डाइऑक्साइड (CO_2)", "मीथेन (CH_4)", "नाइट्रोजन (N_2)"],
      answer: 0,
      exp: "Explanation (En): Ozone molecules in the stratosphere absorb 97-99% of the sun's medium-frequency UV light.\nस्पष्टीकरण (Hi): समताप मंडल की ओजोन परत सूर्य की पराबैंगनी किरणों को रोककर पृथ्वी पर जीवन की रक्षा करती है।"
    },
    {
      qEn: "What unit is standard for measuring total ozone column thickness?",
      qHi: "कुल ओजोन स्तंभ की मोटाई मापने के लिए मानक इकाई क्या है?",
      optionsEn: ["Dobson unit (DU)", "Decibel (dB)", "Pascal (Pa)", "Bar"],
      optionsHi: ["डॉब्सन यूनिट (DU)", "डेसीबल", "पास्कल", "बार"],
      answer: 0,
      exp: "Explanation (En): Ozone concentration is quantified in Dobson units, measuring the columnar density in a given area.\nस्पष्टीकरण (Hi): ओजोन परत की मोटाई डॉब्सन यूनिट (Dobson unit) में मापी जाती है।"
    },
    {
      qEn: "What causes the greenhouse effect in the atmosphere?",
      qHi: "वायुमंडल में ग्रीनहाउस प्रभाव किसके कारण होता है?",
      optionsEn: ["Absorption and re-emission of infrared thermal radiation by gases like CO_2 and water vapor", "Direct sun burning", "Solar winds", "Ocean surface cooling"],
      optionsHi: ["CO_2 और जलवाष्प जैसी गैसों द्वारा अवरक्त तापीय विकिरणों का अवशोषण और पुन: उत्सर्जन", "प्रत्यक्ष सूर्य का जलना", "सौर हवाएं", "समुद्री सतह का ठंडा होना"],
      answer: 0,
      exp: "Explanation (En): Greenhouse gases trap heat radiating from Earth's surface, maintaining a habitable planetary temperature.\nस्पष्टीकरण (Hi): ग्रीनहाउस गैसें पृथ्वी से निकलने वाली गर्मी को रोककर रखती हैं जिससे ग्रह का तापमान जीवन के अनुकूल रहता है।"
    },
    {
      qEn: "Which of the following is considered a primary greenhouse gas in Earth's atmosphere?",
      qHi: "निम्नलिखित में से किसे पृथ्वी के वायुमंडल की एक प्रमुख ग्रीनहाउस गैस माना जाता है?",
      optionsEn: ["Carbon dioxide (CO_2)", "Nitrogen (N_2)", "Oxygen (O_2)", "Argon (Ar)"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2)", "नाइट्रोजन", "ऑक्सीजन", "ऑर्गन"],
      answer: 0,
      exp: "Explanation (En): Carbon dioxide, methane, water vapor, and nitrous oxide are the primary greenhouse gases.\nस्पष्टीकरण (Hi): कार्बन डाइऑक्साइड, मीथेन और जलवाष्प प्रमुख ग्रीनहाउस गैसें हैं।"
    },
    {
      qEn: "What is atmospheric pressure?",
      qHi: "वायुमंडलीय दाब (Atmospheric pressure) किसे कहते हैं?",
      optionsEn: ["The force exerted by the weight of the air column above a surface area", "Wind speed measurement", "Air temperature index", "Cloud moisture weight"],
      optionsHi: ["किसी सतह क्षेत्र के ऊपर वायु स्तंभ के भार द्वारा लगाया जाने वाला बल", "हवा की गति मापन", "हवा का तापमान सूचकांक", "बादल की नमी का वजन"],
      answer: 0,
      exp: "Explanation (En): Atmospheric pressure is the weight of the overlying air column pressing down on Earth's surface.\nस्पष्टीकरण (Hi): वायुमंडल की परतों के वजन से सतह पर पड़ने वाले दबाव को वायुमंडलीय दाब कहते हैं।"
    },
    {
      qEn: "What instrument is used to measure atmospheric pressure?",
      qHi: "वायुमंडलीय दाब मापने के लिए किस उपकरण का उपयोग किया जाता है?",
      optionsEn: ["Barometer", "Thermometer", "Anemometer", "Hydrometer"],
      optionsHi: ["बैरोमीटर (Barometer)", "थर्मामीटर", "एनीमोमीटर", "हाइड्रोमीटर"],
      answer: 0,
      exp: "Explanation (En): A barometer is the standard meteorological instrument used to measure atmospheric pressure.\nस्पष्टीकरण (Hi): वायुमंडलीय दाब मापने के लिए बैरोमीटर (Barometer) का उपयोग किया जाता है।"
    },
    {
      qEn: "What are lines on a weather map connecting points of equal atmospheric pressure called?",
      qHi: "समान वायुमंडलीय दाब वाले बिंदुओं को जोड़ने वाली मानचित्र की रेखाओं को क्या कहते हैं?",
      optionsEn: ["Isobars (समदाब रेखाएं)", "Isotherms", "Isohyets", "Isotachs"],
      optionsHi: ["समदाब रेखाएं या आइसोबार्स (Isobars)", "समताप रेखाएं", "समवर्षा रेखाएं", "आइसोटाच"],
      answer: 0,
      exp: "Explanation (En): Isobars are contour lines connecting locations with identical barometric pressure on weather maps.\nस्पष्टीकरण (Hi): सममान वाले वायुदाब बिंदुओं को मिलाने वाली रेखाएं आइसोबार्स (Isobars) कहलाती हैं।"
    },
    {
      qEn: "What are lines connecting points of equal temperature called?",
      qHi: "समान तापमान वाले स्थानों को मिलाने वाली मानचित्र की रेखाओं को क्या कहा जाता है?",
      optionsEn: ["Isotherms (समताप रेखाएं)", "Isobars", "Isohyets", "Contours"],
      optionsHi: ["समताप रेखाएं (Isotherms)", "आइसोबार", "आइसोहाइट", "कंटूर रेखाएं"],
      answer: 0,
      exp: "Explanation (En): Isotherms are lines on a map connecting points of equal temperature.\nस्पष्टीकरण (Hi): मानचित्र पर समान तापमान वाले स्थानों को जोड़ने वाली रेखाएं समताप रेखाएं (Isotherms) होती हैं।"
    },
    {
      qEn: "What are lines connecting points of equal rainfall called?",
      qHi: "समान वर्षा वाले स्थानों को मिलाने वाली मानचित्र की रेखाओं को क्या कहते हैं?",
      optionsEn: ["Isohyets (समवर्षा रेखाएं)", "Isobars", "Isotherms", "Isohys"],
      optionsHi: ["समवर्षा रेखाएं (Isohyets)", "आइसोबार", "आइसोथर्म", "आइसोहिस"],
      answer: 0,
      exp: "Explanation (En): Isohyets connect locations receiving equal amounts of precipitation.\nस्पष्टीकरण (Hi): समान वर्षा वाले क्षेत्रों को मिलाने वाली नक्शे की रेखाएं आइसोहाइट्स (Isohyets) कहलाती हैं।"
    },
    {
      qEn: "What is the Coriolis effect?",
      qHi: "कोरियोलिस प्रभाव (Coriolis effect) क्या है?",
      optionsEn: ["An apparent deflection of winds and ocean currents due to the Earth's rotation", "Solar magnetic pull", "Gravitational attraction of moon", "Atmospheric friction"],
      optionsHi: ["पृथ्वी के घूर्णन के कारण हवाओं और महासागरीय धाराओं का आभासी विक्षेपण (मुड़ना)", "सौर चुंबकीय खिंचाव", "चंद्रमा का गुरुत्वाकर्षण आकर्षण", "वायुमंडलीय घर्षण"],
      answer: 0,
      exp: "Explanation (En): The Coriolis effect deflects moving air to the right in the Northern Hemisphere and to the left in the Southern Hemisphere.\nस्पष्टीकरण (Hi): पृथ्वी के अपने अक्ष पर घूमने के कारण हवाएं अपनी सीधी दिशा से मुड़ जाती हैं, जिसे कोरियोलिस प्रभाव कहते हैं।"
    },
    {
      qEn: "In which direction do winds deflect in the Northern Hemisphere due to the Coriolis effect?",
      qHi: "कोरियोलिस प्रभाव के कारण उत्तरी गोलार्ध में हवाएं किस दिशा में मुड़ जाती हैं?",
      optionsEn: ["To the right (दाईं ओर)", "To the left (बाईं ओर)", "Straight ahead", "Downward"],
      optionsHi: ["दाईं ओर (To the right)", "बाईं ओर", "सीधे आगे", "नीचे की ओर"],
      answer: 0,
      exp: "Explanation (En): Ferrel's law states that winds deflect to the right in the Northern Hemisphere.\nस्पष्टीकरण (Hi): फेरेल के नियम के अनुसार उत्तरी गोलार्ध में हवाएं अपनी गति की दिशा के दाईं ओर मुड़ती हैं।"
    },
    {
      qEn: "What are permanent winds blowing consistently from subtropical high to equatorial low-pressure areas called?",
      qHi: "उपोषणीय उच्च वायुदाब से विषुवतीय निम्न वायुदाब की ओर लगातार बहने वाली स्थायी हवाओं को क्या कहते हैं?",
      optionsEn: ["Trade winds (व्यापारिक हवाएं)", "Westerlies", "Polar easterlies", "Monsoon winds"],
      optionsHi: ["व्यापारिक हवाएं (Trade winds)", "पछुआ हवाएं", "ध्रुवीय पूर्वी हवाएं", "मानसूनी हवाएं"],
      answer: 0,
      exp: "Explanation (En): Trade winds are steady easterly surface winds blowing towards the equator in tropical latitudes.\nस्पष्टीकरण (Hi): व्यापारिक हवाएं (Trade winds) उष्ण कटिबंध में उच्च दाब से भूमध्य रेखा की ओर बहने वाली नियमित हवाएं हैं।"
    },
    {
      qEn: "What are prevailing winds blowing from subtropical highs toward subpolar lows in middle latitudes called?",
      qHi: "मध्य अक्षांशों में उपोषणीय उच्च दाब से उपध्रुवीय निम्न दाब की ओर बहने वाली प्रमुख हवाओं को क्या कहते हैं?",
      optionsEn: ["Westerlies (पछुआ हवाएं)", "Trade winds", "Polar winds", "Monsoon"],
      optionsHi: ["पछुआ हवाएं (Westerlies)", "व्यापारिक हवाएं", "ध्रुवीय हवाएं", "मानसून"],
      answer: 0,
      exp: "Explanation (En): Westerlies are prevailing winds in the middle latitudes blowing from the west toward the poles.\nस्पष्टीकरण (Hi): मध्यम अक्षांशों में पश्चिम से पूर्व की ओर बहने वाली हवाओं को पछुआ हवाएं (Westerlies) कहते हैं।"
    },
    {
      qEn: "What are seasonal reversing winds accompanied by corresponding changes in precipitation called?",
      qHi: "मौसम के अनुसार अपनी दिशा पूरी तरह बदलने वाली हवाओं और उनसे होने वाली मौसमी बारिश को क्या कहते हैं?",
      optionsEn: ["Monsoon winds (मानसून हवाएं)", "Trade winds", "Jet streams", "Local breezes"],
      optionsHi: ["मानसून हवाएं (Monsoon winds)", "व्यापारिक हवाएं", "जेट स्ट्रीम", "स्थानीय हवाएं"],
      answer: 0,
      exp: "Explanation (En): Monsoons are large-scale seasonal wind systems that reverse direction between summer and winter.\nस्पष्टीकरण (Hi): मानसून वे हवाएं हैं जो ऋतुओं के साथ अपनी दिशा उलट लेती हैं (जैसे भारतीय उपमहाद्वीप का मानसून)।"
    },
    {
      qEn: "What are jet streams?",
      qHi: "जेट स्ट्रीम (Jet stream) क्या होती है?",
      optionsEn: ["Fast-flowing, narrow air currents in the upper atmosphere (tropopause)", "Surface ocean waves", "Local mountain breezes", "Volcanic smoke plumes"],
      optionsHi: ["ऊपरी वायुमंडल (क्षोभ सीमा) में तीव्र गति से बहने वाली संकरी हवा की धाराएं", "सतही समुद्री लहरें", "स्थानीय पर्वतीय हवाएं", "ज्वालामुखी धुएं के गुबार"],
      answer: 0,
      exp: "Explanation (En): Jet streams are high-altitude, fast-moving geostrophic air streams that steer weather systems globally.\nस्पष्टीकरण (Hi): जेट स्ट्रीम ऊपरी वायुमंडल में अत्यधिक गति से बहने वाली हवा की नलीनुमा धाराएं हैं।"
    },
    {
      qEn: "What is absolute humidity?",
      qHi: "निरपेक्ष आर्द्रता (Absolute humidity) किसे कहते हैं?",
      optionsEn: ["The actual mass of water vapor present in a specific volume of air", "Ratio of moisture to maximum capacity", "Dew point temperature", "Total rainfall volume"],
      optionsHi: ["हवा के एक विशिष्ट आयतन में मौजूद जलवाष्प की वास्तविक मात्रा", "अधिकतम क्षमता से नमी का अनुपात", "ओसांक तापमान", "कुल वर्षा आयतन"],
      answer: 0,
      exp: "Explanation (En): Absolute humidity is the total mass of water vapor in a given volume of air, usually measured in grams per cubic meter.\nस्पष्टीकरण (Hi): एक निश्चित आयतन की हवा में मौजूद पानी की कुल मात्रा को निरपेक्ष आर्द्रता कहते हैं।"
    },
    {
      qEn: "What is relative humidity?",
      qHi: "सापेक्ष आर्द्रता (Relative humidity) से क्या तात्पर्य है?",
      optionsEn: ["The ratio of water vapor in air compared to the maximum amount the air can hold at that temperature, expressed as a percentage", "Total cloud water", "Absolute rain amount", "Wind moisture speed"],
      optionsHi: ["हवा में मौजूद जलवाष्प और उसी तापमान पर हवा की अधिकतम जल धारण क्षमता का प्रतिशत अनुपात", "कुल बादल पानी", "निरपेक्ष वर्षा मात्रा", "हवा की नमी गति"],
      answer: 0,
      exp: "Explanation (En): Relative humidity expresses how saturated the air is with water vapor as a percentage.\nस्पष्टीकरण (Hi): दिए गए तापमान पर हवा की जल धारण क्षमता और उसमें मौजूद नमी के प्रतिशत अनुपात को सापेक्ष आर्द्रता कहते हैं।"
    },
    {
      qEn: "What is the dew point?",
      qHi: "ओसांक (Dew point) तापमान क्या होता है?",
      optionsEn: ["The temperature to which air must be cooled to become saturated with water vapor and start condensation", "Boiling point of water", "Maximum summer temperature", "Freezing point of snow"],
      optionsHi: ["वह तापमान जिस तक हवा को ठंडा करने पर वह जलवाष्प से संतृप्त हो जाती है और संघनन शुरू होता है", "पानी का क्वथनांक", "अधिकतम ग्रीष्मकालीन तापमान", "बर्फ का हिमांक"],
      answer: 0,
      exp: "Explanation (En): The dew point is the temperature at which relative humidity reaches 100%, causing water vapor to condense into liquid dew.\nस्पष्टीकरण (Hi): ओसांक वह तापमान है जिस पर हवा संतृप्त हो जाती है और जलवाष्प बूंदों (ओस) में बदलने लगती है।"
    },
    {
      qEn: "What type of rainfall occurs when warm, moist air is forced to rise over mountain barriers?",
      qHi: "जब गर्म और आर्द्र हवा पहाड़ों से टकराकर ऊपर उठती है, तो किस प्रकार की वर्षा होती है?",
      optionsEn: ["Orographic rainfall (पर्वतीय वर्षा)", "Convectional rainfall", "Cyclonic rainfall", "Frontal rainfall"],
      optionsHi: ["पर्वतीय वर्षा (Orographic rainfall)", "संवहनीय वर्षा", "चक्रवाती वर्षा", "वाताग्र वर्षा"],
      answer: 0,
      exp: "Explanation (En): Orographic precipitation occurs when moist air is lifted over mountain ranges, cooling and releasing rain on the windward side.\nस्पष्टीकरण (Hi): जब आर्द्र हवा पहाड़ों से रोककर ऊपर उठती है और ठंडी होकर बारिश करती है, तो उसे पर्वतीय (Orographic) वर्षा कहते हैं।"
    }
  ],
    "Oceans and Hydrosphere": [
    {
      qEn: "What is the hydrosphere?",
      qHi: "जलमंडल (Hydrosphere) किसे कहते हैं?",
      optionsEn: ["The total amount of water on a planet, including surface water, groundwater, and atmospheric water vapor", "Only the liquid oceans", "Only underground water", "Glacial ice caps only"],
      optionsHi: ["किसी ग्रह पर मौजूद कुल पानी की मात्रा, जिसमें सतही जल, भूजल और वायुमंडलीय जलवाष्प शामिल है", "केवल तरल महासागर", "केवल भूमिगत जल", "केवल हिमनद बर्फ की चादरें"],
      answer: 0,
      exp: "Explanation (En): The hydrosphere encompasses all liquid water, ice, and water vapor found on, under, and above the Earth's surface.\nस्पष्टीकरण (Hi): जलमंडल के अंतर्गत पृथ्वी की सतह पर, नीचे और वायुमंडल में मौजूद सारा पानी (ठोस, द्रव और गैस रूप में) आता है।"
    },
    {
      qEn: "What percentage of the Earth's surface is covered by water?",
      qHi: "पृथ्वी की सतह का लगभग कितना प्रतिशत भाग पानी से ढका हुआ है?",
      optionsEn: ["About 71%", "About 50%", "About 90%", "About 30%"],
      optionsHi: ["लगभग 71%", "लगभग 50%", "लगभग 90%", "लगभग 30%"],
      answer: 0,
      exp: "Explanation (En): Water covers approximately 71% of the Earth's surface, predominantly within the global oceans.\nस्पष्टीकरण (Hi): पृथ्वी की सतह का लगभग 71% हिस्सा पानी से ढका हुआ है, जिसमें अधिकांश महासागर हैं।"
    },
    {
      qEn: "What proportion of Earth's total water is saltwater (oceans) versus freshwater?",
      qHi: "पृथ्वी के कुल पानी का कितना हिस्सा खारा पानी (महासागर) और कितना मीठा पानी (Freshwater) है?",
      optionsEn: ["About 97.5% saltwater and 2.5% freshwater", "About 50% saltwater and 50% freshwater", "About 80% saltwater and 20% freshwater", "About 99% saltwater and 1% freshwater"],
      optionsHi: ["लगभग 97.5% खारा पानी और 2.5% मीठा पानी", "लगभग 50% खारा और 50% मीठा", "लगभग 80% खारा और 20% मीठा", "लगभग 99% खारा और 1% मीठा"],
      answer: 0,
      exp: "Explanation (En): Roughly 97.5% of Earth's water is saline ocean water, leaving only about 2.5% as freshwater.\nस्पष्टीकरण (Hi): पृथ्वी के कुल पानी का लगभग 97.5% महासागरों का खारा पानी है, और केवल 2.5% ही मीठा पानी (Freshwater) है।"
    },
    {
      qEn: "Where is the largest share of Earth's freshwater stored?",
      qHi: "पृथ्वी के मीठे पानी का सबसे बड़ा हिस्सा कहाँ संचित है?",
      optionsEn: ["Glaciers and ice caps (Polar ice)", "Groundwater", "Rivers and lakes", "Atmospheric water vapor"],
      optionsHi: ["हिमनद और बर्फ की चादरें (ध्रुवीय बर्फ)", "भूजल (Groundwater)", "नदियां और झीलें", "वायुमंडलीय जलवाष्प"],
      answer: 0,
      exp: "Explanation (En): Over 68% of Earth's freshwater is locked up in glaciers and permanent ice caps, mostly in Antarctica and Greenland.\nस्पष्टीकरण (Hi): पृथ्वी के मीठे पानी का 68% से अधिक हिस्सा ग्लेशियरों और ध्रुवीय बर्फ की चादरों के रूप में जमा है।"
    },
    {
      qEn: "What is the continuous movement of water on, above, and below the Earth's surface called?",
      qHi: "पृथ्वी की सतह पर, ऊपर और नीचे पानी के निरंतर संचलन को क्या कहा जाता है?",
      optionsEn: ["The hydrological cycle (Water cycle)", "Rock cycle", "Nitrogen cycle", "Carbon cycle"],
      optionsHi: ["जल चक्र या हाइड्रोलॉजिकल साइकिल (Hydrological cycle)", "शैल चक्र", "नाइट्रोजन चक्र", "कार्बन चक्र"],
      answer: 0,
      exp: "Explanation (En): The water cycle describes how water evaporates, condenses, precipitates, and flows through Earth's systems.\nस्पष्टीकरण (Hi): जल चक्र वह प्रक्रिया है जिसमें पानी वाष्प बनकर उड़ता है, बादल बनाता है और बारिश के रूप में धरती पर लौटता है।"
    },
    {
      qEn: "What is the primary source of energy driving the water cycle?",
      qHi: "जल चक्र को संचालित करने वाली ऊर्जा का प्राथमिक स्रोत क्या है?",
      optionsEn: ["Solar energy (The Sun)", "Geothermal heat from Earth's core", "Wind friction", "Lunar gravity"],
      optionsHi: ["सौर ऊर्जा (सूर्य)", "पृथ्वी के कोर की भूतापीय ऊष्मा", "हवा का घर्षण", "चंद्रमा का गुरुत्वाकर्षण"],
      answer: 0,
      exp: "Explanation (En): Heat from the sun drives evaporation of water from oceans and land surfaces, powering the entire water cycle.\nस्पष्टीकरण (Hi): सूर्य की गर्मी महासागरों और जमीन के पानी को वाष्पित करती है, जो जल चक्र का मुख्य इंजन है।"
    },
    {
      qEn: "What is evaporation?",
      qHi: "वाष्पीकरण (Evaporation) किसे कहते हैं?",
      optionsEn: ["The process where liquid water turns into water vapor by absorbing heat", "Water turning into ice", "Rain falling from clouds", "Water sinking into soil"],
      optionsHi: ["गर्मी पाकर तरल पानी का जलवाष्प में बदलना", "पानी का बर्फ बनना", "बादलों से बारिश गिरना", "पानी का मिट्टी में रिसना"],
      answer: 0,
      exp: "Explanation (En): Evaporation occurs when thermal energy causes liquid water molecules at the surface to break free into vapor.\nस्पष्टीकरण (Hi): तापमान पाकर जब सतह का पानी भाप बनकर उड़ता है, तो उसे वाष्पीकरण कहते हैं।"
    },
    {
      qEn: "What is transpiration?",
      qHi: "वाष्पोत्सर्जन (Transpiration) क्या है?",
      optionsEn: ["The process where plants absorb water through roots and release water vapor through stomata in leaves", "Evaporation from ocean surface", "Rain formation in clouds", "Melting of glaciers"],
      optionsHi: ["पौधों द्वारा जड़ों से पानी सोखकर पत्तियों के रंध्रों से जलवाष्प के रूप में बाहर छोड़ना", "समुद्र सतह से वाष्पीकरण", "बादलों में वर्षा निर्माण", "ग्लेशियर पिघलना"],
      answer: 0,
      exp: "Explanation (En): Transpiration is essentially plant perspiration, releasing moisture from leaf stomata into the atmosphere.\nस्पष्टीकरण (Hi): पौधे अपनी जड़ों से पानी खींचते हैं और पत्तियों के जरिए उसे वाष्प बनाकर हवा में छोड़ते हैं, जिसे वाष्पोत्सर्जन कहते हैं।"
    },
    {
      qEn: "What is condensation?",
      qHi: "संघनन (Condensation) किसे कहते हैं?",
      optionsEn: ["The process where water vapor cools and changes back into liquid water droplets", "Water turning into gas", "Water freezing in winter", "Water soaking into ground"],
      optionsHi: ["जलवाष्प के ठंडे होने और वापस तरल पानी की बूंदों में बदलने की प्रक्रिया", "पानी का गैस बनना", "सर्दियों में पानी का जमना", "पानी का जमीन में सोखना"],
      answer: 0,
      exp: "Explanation (En): Condensation occurs when warm water vapor cools in the upper atmosphere, forming clouds and fog.\nस्पष्टीकरण (Hi): जब ऊपर जाकर जलवाष्प ठंडी होती है, तो वह पानी की नन्ही बूंदों में बदल जाती है (जैसे बादल बनना)।"
    },
    {
      qEn: "What is precipitation?",
      qHi: "वर्षण या प्रेसिपिटेशन (Precipitation) क्या है?",
      optionsEn: ["Any product of the condensation of atmospheric water vapor that falls under gravity (rain, snow, sleet, hail)", "Water evaporating into air", "Groundwater flowing underground", "River water runoff"],
      optionsHi: ["गुरुत्वाकर्षण के कारण वायुमंडलीय जलवाष्प के संघनन से गिरने वाला कोई भी रूप (बारिश, बर्फ, ओले)", "पानी का हवा में उड़ना", "भूजल का बहना", "नदी का प्रवाह"],
      answer: 0,
      exp: "Explanation (En): Precipitation includes all forms of water falling from clouds to Earth's surface, including rain, snow, and hail.\nस्पष्टीकरण (Hi): बादलों से पानी का बारिश, बर्फ या ओलों के रूप में धरती पर गिरना वर्षण कहलाता है।"
    },
    {
      qEn: "What is infiltration (percolation)?",
      qHi: "अंतःस्यंदन या रिसना (Infiltration / Percolation) किसे कहते हैं?",
      optionsEn: ["The downward movement of water from the land surface into soil and permeable rock strata", "Water evaporating from soil", "Water flowing in rivers", "Ice melting into lakes"],
      optionsHi: ["भूमि की सतह से पानी का मिट्टी और पारगम्य चट्टानों के अंदर नीचे की ओर जाना", "मिट्टी से पानी का उड़ना", "नदियों में पानी बहना", "बर्फ का झीलों में पिघलना"],
      answer: 0,
      exp: "Explanation (En): Infiltration describes rain or surface water soaking into soil and recharging underground aquifers.\nस्पष्टीकरण (Hi): बारिश के पानी का जमीन के अंदर रिसकर मिट्टी और चट्टानों में समा जाना अंतःस्यंदन कहलाता है।"
    },
    {
      qEn: "What is groundwater?",
      qHi: "भूजल (Groundwater) क्या होता है?",
      optionsEn: ["Water held underground in the soil and in crevices and pores of rock", "Ocean water", "Rain falling in sky", "River water flow"],
      optionsHi: ["मिट्टी में और चट्टानों के छिद्रों में जमीन के नीचे जमा पानी", "समुद्री पानी", "आसमान में गिरती बारिश", "नदी का पानी"],
      answer: 0,
      exp: "Explanation (En): Groundwater is freshwater located beneath the Earth's surface in soil pore spaces and fractures of rock formations.\nस्पष्टीकरण (Hi): जमीन के नीचे चट्टानों और मिट्टी के बीच भरे हुए मीठे पानी को भूजल (Groundwater) कहते हैं।"
    },
    {
      qEn: "What is an aquifer?",
      qHi: "जलभृत या एक्विफर (Aquifer) क्या होता है?",
      optionsEn: ["An underground layer of water-bearing permeable rock, gravel, or sand from which groundwater can be extracted", "An underwater volcanic cave", "A deep ocean trench", "An artificial water tank"],
      optionsHi: ["पारगम्य चट्टानों, बजरी या रेत की वह भूमिगत परत जिसमें पानी भरा होता है और जिसे निकाला जा सकता है", "पानी के नीचे की ज्वालामुखी गुफा", "गहरी महासागरीय खाई", "एक कृत्रिम पानी की टंकी"],
      answer: 0,
      exp: "Explanation (En): Aquifers are underground geologic formations that store and transmit significant quantities of groundwater.\nस्पष्टीकरण (Hi): एक्विफर भूमिगत चट्टानों या रेत की वह परत है जो भारी मात्रा में पानी संग्रहित रखती है और नलकूपों से निकाला जाता है।"
    },
    {
      qEn: "What is the water table?",
      qHi: "जल स्तर या वाटर टेबल (Water table) किसे कहते हैं?",
      optionsEn: ["The upper level of an underground surface in which the soil or rocks are permanently saturated with water", "The bottom of ocean", "The surface of a river", "Water level in a cup"],
      optionsHi: ["भूमिगत सतह का वह ऊपरी स्तर जहाँ मिट्टी या चट्टानें पानी से पूरी तरह संतृप्त होती हैं", "समुद्र का निचلا तल", "नदी की सतह", "कप में पानी का स्तर"],
      answer: 0,
      exp: "Explanation (En): The water table is the boundary between the unsaturated zone above and the saturated zone (groundwater) below.\nस्पष्टीकरण (Hi): वह रेखा या स्तर जिसके नीचे जमीन के अंदर का सारा स्थान पानी से भरा होता है, वाटर टेबल कहलाता है।"
    },
    {
      qEn: "What is a watershed (drainage basin)?",
      qHi: "जलसंभर या जल निकासी बेसिन (Watershed / Drainage basin) क्या है?",
      optionsEn: ["An area of land where all precipitation drains off into a common body of water, such as a river, lake, or ocean", "A water storage tank in city", "A mountain peak", "An underground cave"],
      optionsHi: ["भूमि का वह क्षेत्र जहाँ का सारा वर्षा जल बहकर एक ही मुख्य नदी, झील या महासागर में जाता है", "शहर में पानी की टंकी", "पर्वत चोटी", "एक भूमिगत गुफा"],
      answer: 0,
      exp: "Explanation (En): A watershed is a basin-like land area that channels rainfall and snowmelt to a common outlet or river system.\nस्पष्टीकरण (Hi): वह भू-क्षेत्र जहाँ का बारिश का पानी बहकर एक ही नदी या जलाशय में इकठ्ठा होता है, उसे वाटरशेड कहते हैं।"
    },
    {
      qEn: "What is an artesian well?",
      qHi: "आर्टेझियन कुआं (Artesian well) क्या होता है?",
      optionsEn: ["A well in which water rises under natural pressure from a confined aquifer without needing a pump", "A dry well dug in desert", "An ocean drilling rig", "A shallow hand pump"],
      optionsHi: ["वह कुआं जिसमें सीमित जलभृत (confined aquifer) के प्राकृतिक दबाव के कारण पानी बिना पंप के अपने आप ऊपर उठता है", "मरुस्थल में खोदा गया सूखा कुआं", "समुद्री ड्रिलिंग रिग", "एक उथला हैंडपंप"],
      answer: 0,
      exp: "Explanation (En): In an artesian well, trapped underground pressure forces water up to the surface without mechanical pumping.\nस्पष्टीकरण (Hi): इस प्रकार के कुएं में भूमिगत जल के प्राकृतिक दबाव से पानी स्वतः ऊपर फूट पड़ता है।"
    },
    {
      qEn: "What is runoff?",
      qHi: "अपवाह या रनऑफ (Runoff) किसे कहते हैं?",
      optionsEn: ["The portion of precipitation that does not infiltrate into the ground and flows over the surface into streams", "Water evaporating into air", "Groundwater soaking deep", "Ice melting"],
      optionsHi: ["वर्षा का वह पानी जो जमीन में रिसने के बजाय सतह पर बहकर नदियों में जाता है", "पानी का हवा में उड़ना", "भूजल का गहरा रिसना", "बर्फ का पिघलना"],
      answer: 0,
      exp: "Explanation (En): Surface runoff is excess rainwater or snowmelt flowing over the ground into rivers and lakes.\nस्पष्टीकरण (Hi): बारिश का वह पानी जो जमीन में सोखे जाने के बजाय ढलान पर बहकर नदियों और नालों में चला जाता है, रनऑफ कहलाता है।"
    },
    {
      qEn: "What is the cryosphere?",
      qHi: "क्रायोस्फीयर या हिममंडल (Cryosphere) किसे कहते हैं?",
      optionsEn: ["The portions of Earth's surface where water is in solid form, including sea ice, glaciers, and snow", "Only liquid ocean water", "The molten mantle layer", "Atmospheric ozone layer"],
      optionsHi: ["पृथ्वी की सतह का वह भाग जहाँ पानी ठोस रूप में होता है, जैसे समुद्री बर्फ, ग्लेशियर और हिम", "केवल तरल महासागर", "पिघला हुआ मेंटल", "वायुमंडलीय ओजोन परत"],
      answer: 0,
      exp: "Explanation (En): The cryosphere comprises all frozen water regions on Earth, playing a crucial role in global climate regulation.\nस्पष्टीकरण (Hi): पृथ्वी पर जहाँ-जहाँ पानी बर्फ या ठोस रूप में पाया जाता है (ग्लेशियर, हिम चादरें), उसे क्रायोस्फीयर कहते हैं।"
    },
    {
      qEn: "What is an iceberg?",
      qHi: "हिमशैल या आइसबर्ग (Iceberg) क्या होता है?",
      optionsEn: ["A large piece of freshwater ice that has broken off from a glacier or ice shelf and floats in open water", "A frozen ocean wave", "An underwater rock pillar", "A hailstone"],
      optionsHi: ["ग्लेशियर या आइस शेल्फ से टूटकर खुले समुद्र में तैरने वाला मीठे पानी के बर्फ का बड़ा टुकड़ा", "एक जमी हुई समुद्री लहर", "एक पानी के नीचे का चट्टानी स्तंभ", "एक ओला"],
      answer: 0,
      exp: "Explanation (En): Icebergs are massive chunks of glacial ice floating in oceans, with about 90% of their volume submerged underwater.\nस्पष्टीकरण (Hi): ग्लेशियर से टूटकर समुद्र में तैरने वाले बर्फ के विशाल पहाड़ों को आइसबर्ग (हिमशैल) कहते हैं।"
    },
    {
      qEn: "What is desalination?",
      qHi: "डिसैलिनेशन या विलवणन (Desalination) प्रक्रिया क्या है?",
      optionsEn: ["The process of removing dissolved salts and minerals from seawater to produce fresh drinking water", "Adding salt to pure water", "Freezing ocean water", "Filtering river sand"],
      optionsHi: ["पीने योग्य मीठा पानी बनाने के लिए समुद्री पानी से घुले हुए लवणों और खनिजों को हटाने की प्रक्रिया", "शुद्ध पानी में नमक मिलाना", "समुद्री पानी को जमाना", "नदी की रेत छानना"],
      answer: 0,
      exp: "Explanation (En): Desalination converts saline ocean water into potable freshwater through distillation or reverse osmosis.\nस्पष्टीकरण (Hi): समुद्री खारे पानी को शुद्ध करके पीने योग्य मीठा पानी बनाने की तकनीक को डिसैलिनेशन कहते हैं।"
    },
    {
      qEn: "What is brackish water?",
      qHi: "ब्रैकश वाटर या खारा-मीठा मिश्रित जल (Brackish water) क्या होता है?",
      optionsEn: ["Water that has more salinity than freshwater, but not as much as seawater (often found in estuaries)", "Pure distilled water", "Deep ocean brine", "Boiled river water"],
      optionsHi: ["वह पानी जिसकी लवणता मीठे पानी से अधिक लेकिन समुद्री पानी से कम होती है (अक्सर estuaries में मिलता है)", "शुद्ध आ的时น้ำ", "गहरे समुद्र का नमकीन घोल", "उबला हुआ नदी का पानी"],
      answer: 0,
      exp: "Explanation (En): Brackish water is a mixture of freshwater and saltwater, typically found where rivers meet the sea in estuaries.\nस्पष्टीकरण (Hi): जहां नदियां समुद्र से मिलती हैं (मुहाने पर), वहां मीठा और खारा पानी मिलकर 'ब्रैकश वाटर' बनाता है।"
    },
    {
      qEn: "What is an estuary?",
      qHi: "ऐश्वरी या ज्वारनदमुख (Estuary) किसे कहते हैं?",
      optionsEn: ["A partially enclosed coastal body of brackish water with one or more rivers flowing into it, connected to the open sea", "A dry desert valley", "A high mountain lake", "An underground water cave"],
      optionsHi: ["एक आंशिक रूप से बंद तटीय जल निकाय जहाँ एक या अधिक नदियाँ मिलती हैं और खुला समुद्र जुड़ा होता है", "एक सूखी मरुस्थलीय घाटी", "एक ऊंची पहाड़ी झील", "एक भूमिगत पानी की गुफा"],
      answer: 0,
      exp: "Explanation (En): Estuaries are dynamic transitional zones where freshwater rivers mix with saltwater tides from the ocean.\nस्पष्टीकरण (Hi): नदी का मुहाना जहां वह समुद्र से मिलती है और ज्वार का असर होता है, उसे ऐश्वरी कहते हैं।"
    },
    {
      qEn: "What is eutrophication in freshwater lakes?",
      qHi: "मीठे पानी की झीलों में 'सुपोषण' या यूट्रोफिकेशन (Eutrophication) क्या है?",
      optionsEn: ["Nutrient enrichment (nitrates and phosphates) causing excessive algal growth and oxygen depletion", "Purification of lake water", "Freezing of lake surface", "Lowering of water table"],
      optionsHi: ["पोषक तत्वों (नाइट्रेट और फॉस्फोरस) की अधिकता से अत्यधिक शैवाल वृद्धि और ऑक्सीजन की कमी होना", "झील के पानी का शुद्धिकरण", "झील की सतह का जमना", "जल स्तर का नीचे गिरना"],
      answer: 0,
      exp: "Explanation (En): Agricultural and sewage runoff brings excess nutrients, triggering algal blooms that choke aquatic life of oxygen.\nस्पष्टीकरण (Hi): खेतों और सीवेज का कचरा झील में जाने से पोषक तत्व बढ़ते हैं, जिससे शैवाल फैलते हैं और पानी की ऑक्सीजन खत्म हो जाती है।"
    },
    {
      qEn: "What is a thermal spring (geyser)?",
      qHi: "गर्म पानी के झरने या गीजर (Thermal spring / Geyser) का निर्माण कैसे होता है?",
      optionsEn: ["Groundwater heated by geothermal energy beneath the Earth's crust erupting to the surface", "Cold rainwater pooling in valleys", "Melting glacier runoff", "Industrial wastewater discharge"],
      optionsHi: ["पृथ्वी की पपड़ी के नीचे भूतापीय ऊर्जा से गर्म होकर सतह पर फूटने वाला भूजल", "घाटियों में जमा ठंडा बारिश का पानी", "पिघलता ग्लेशियर अपवाह", "औद्योगिक अपशिष्ट जल"],
      answer: 0,
      exp: "Explanation (En): Geysers and hot springs occur when groundwater comes into contact with hot volcanic rocks deep underground.\nस्पष्टीकरण (Hi): जब भूमिगत पानी नीचे गर्म चट्टानों के संपर्क में आता है, तो वह उबलकर गर्म झरने या गीजर के रूप में बाहर निकलता है।"
    },
    {
      qEn: "What is permafrost?",
      qHi: "परमाफ्रस्ट (Permafrost) किसे कहते हैं?",
      optionsEn: ["Ground that remains continuously frozen for two or more consecutive years", "A layer of warm ocean water", "Seasonal winter snow", "Glacial ice movement"],
      optionsHi: ["वह जमीन जो लगातार दो या अधिक वर्षों तक पूरी तरह जमी रहती है", "गर्म समुद्री पानी की परत", "मौसमी सर्दियों की बर्फ", "ग्लेशियर बर्फ का चलना"],
      answer: 0,
      exp: "Explanation (En): Permafrost is soil, rock, or sediment that stays at or below 0°C for multiple years, found mostly in polar regions.\nस्पष्टीकरण (Hi): ध्रुवीय क्षेत्रों में पाई जाने वाली वह मिट्टी या चट्टान जो सालों-साल (कम से कम दो साल) तक लगातार जमी रहती है, परमाफ्रस्ट कहलाती है।"
    },
    {
      qEn: "What is the primary role of oceans in regulating global climate?",
      qHi: "वैश्विक जलवायु को नियंत्रित करने में महासागरों की मुख्य भूमिका क्या है?",
      optionsEn: ["Absorbing and redistributing huge amounts of solar heat and carbon dioxide around the planet", "Creating desert storms", "Cooling the polar ice caps only", "Generating mountain rain"],
      optionsHi: ["सौर ऊष्मा और कार्बन डाइऑक्साइड की भारी मात्रा को अवशोषित कर ग्रह पर पुनर्वितरित करना", "मरुस्थलीय तूफान पैदा करना", "केवल ध्रुवीय बर्फ को ठंडा करना", "पर्वतीय वर्षा उत्पन्न करना"],
      answer: 0,
      exp: "Explanation (En): Oceans act as Earth's thermal sponge, absorbing excess heat and CO_2, buffering global climate changes.\nस्पष्टीकरण (Hi): महासागर पृथ्वी के 'थर्मल स्पंज' की तरह काम करते हैं जो अत्यधिक गर्मी और कार्बन डाइऑक्साइड को सोखकर जलवायु को संतुलित रखते हैं।"
    },
    {
      qEn: "What is an artesian basin?",
      qHi: "आर्टेझियन बेसिन (Artesian basin) क्या होता है?",
      optionsEn: ["A large underground basin containing groundwater under positive pressure between impermeable rock layers", "An open desert lake", "A deep sea trench", "A volcanic crater"],
      optionsHi: ["अपागम्य चट्टानी परतों के बीच सकारात्मक दबाव के तहत भूजल रखने वाला एक बड़ा भूमिगत बेसिन", "एक खुली मरुस्थलीय झील", "एक गहरी समुद्री खाई", "एक ज्वालामुखी क्रेटर"],
      answer: 0,
      exp: "Explanation (En): Artesian basins hold trapped pressurized groundwater, such as the Great Artesian Basin in Australia.\nस्पष्टीकरण (Hi): यह दबावयुक्त भूजल का एक विशाल भूमिगत भंडार होता है (जैसे ऑस्ट्रेलिया का ग्रेट आर्टेझियन बेसिन)।"
    },
    {
      qEn: "What is river meandering?",
      qHi: "नदियों का 'विसर्पण' या मींडरिंग (Meandering) क्या है?",
      optionsEn: ["The curving or bending course of a river as it flows across flat plains", "Straight rapid river flow", "River drying up in desert", "Waterfall formation"],
      optionsHi: ["सपाट मैदानों में बहते समय नदी का लहराते हुए मोड़ या वक्र बनाना", "सीधी तेज नदी धारा", "मरुस्थल में नदी का सूखना", "जलप्रपात का निर्माण"],
      answer: 0,
      exp: "Explanation (En): Meanders are sweeping bends or loops in a river channel caused by lateral erosion and deposition on flat plains.\nस्पष्टीकरण (Hi): मैदानी इलाकों में बहते समय नदियां जब सांप की तरह बल खाकर लहराते हुए चलती हैं, तो उसे मींडरिंग (विसर्पण) कहते हैं।"
    },
    {
      qEn: "What is an oxbow lake?",
      qHi: "गोखुर झील या ऑक्सबो झील (Oxbow lake) कैसे बनती है?",
      optionsEn: ["A U-shaped lake formed when a wide meander of a river is cut off from the main channel", "A crater lake on mountain", "An artificial swimming pool", "A deep ocean bay"],
      optionsHi: ["नदी के विसर्पण (मींडर) के कटकर अलग हो जाने से बनी U-आकार की झील", "पहाड़ पर क्रेटर झील", "एक कृत्रिम स्विमिंग पूल", "एक गहरी समुद्री खाड़ी"],
      answer: 0,
      exp: "Explanation (En): When river erosion cuts through a tight meander loop, the abandoned bend forms a crescent-shaped oxbow lake.\nस्पष्टीकरण (Hi): जब नदी का घुमावदार रास्ता कटकर अलग हो जाता है, तो चांस के आकार की 'गोखुर झील' बन जाती है।"
    },
    {
      qEn: "Why is water often called the 'universal solvent'?",
      qHi: "पानी को 'सार्वभौमिक विलायक' (Universal solvent) क्यों कहा जाता है?",
      optionsEn: ["Because its polar molecular structure allows it to dissolve more substances than any other liquid", "Because it is found everywhere", "Because it never freezes", "Because it is heavy"],
      optionsHi: ["क्योंकि इसकी ध्रुवीय आणविक संरचना इसे किसी भी अन्य तरल की तुलना में अधिक पदार्थों को घोलने में सक्षम बनाती है", "क्योंकि यह हर जगह पाया जाता है", "क्योंकि यह कभी नहीं जमता", "क्योंकि यह भारी है"],
      answer: 0,
      exp: "Explanation (En): Water's polarity makes it exceptionally good at dissolving ionic and polar substances like salts and minerals.\nस्पष्टीकरण (Hi): पानी की आणविक बनावट (ध्रुवीय प्रकृति) के कारण यह दुनिया में सबसे ज्यादा चीजों को अपने अंदर घोल सकता है।"
    }
  ],
    "Geological Time Scale and Earth's History": [
    {
      qEn: "What is the Geological Time Scale used for?",
      qHi: "भूवैज्ञानिक समय सारणी (Geological Time Scale) का उपयोग किसके लिए किया जाता है?",
      optionsEn: ["To chronologically categorize Earth's history into major divisions like eons, eras, periods, and epochs", "To predict weather forecasts", "To measure ocean depth", "To study plate tectonics speed"],
      optionsHi: ["पृथ्वी के इतिहास को ईयोन, महाकल्प (Era), कल्प (Period) और युग (Epoch) जैसे बड़े भागों में कालानुक्रमिक रूप से वर्गीकृत करने के लिए", "मौसम का पूर्वानुमान लगाने के लिए", "समुद्र की गहराई मापने के लिए", "प्लेट टेक्टोनिक्स की गति मापने के लिए"],
      answer: 0,
      exp: "Explanation (En): The geological time scale is a system of chronological dating that relates geological strata to time, studying Earth's history.\nस्पष्टीकरण (Hi): भूवैज्ञानिक समय सारणी पृथ्वी के 4.5 अरब वर्षों के इतिहास को व्यवस्थित चरणों में बांटकर अध्ययन करने का पैमाना है।"
    },
    {
      qEn: "Who is widely recognized as the 'father of modern geology'?",
      qHi: "आधुनिक भूविज्ञान के जनक के रूप में किसे जाना जाता है?",
      optionsEn: ["James Hutton", "Charles Darwin", "Alfred Wegener", "William Smith"],
      optionsHi: ["जेम्स हटन (James Hutton)", "चार्ल्स डार्विन", "अल्फ्रेड वेगनर", "विलियम स्मिथ"],
      answer: 0,
      exp: "Explanation (En): James Hutton proposed the theory of uniformitarianism, laying the foundation for modern geology.\nस्पष्टीकरण (Hi): जेम्स हटन ने एकरूपतावाद का सिद्धांत दिया और आधुनिक भूविज्ञान की नींव रखी।"
    },
    {
      qEn: "What are the major hierarchical divisions of geological time from largest to smallest?",
      qHi: "भूवैज्ञानिक समय के सबसे बड़े से सबसे छोटे पदानुक्रमित विभाग कौन से हैं?",
      optionsEn: ["Eon, Era, Period, Epoch, Age", "Era, Eon, Epoch, Period", "Period, Era, Eon, Age", "Epoch, Period, Era, Eon"],
      optionsHi: ["ईयोन (Eon), महाकल्प (Era), कल्प (Period), युग (Epoch), उम्र (Age)", "महाकल्प, ईयोन, युग, कल्प", "कल्प, महाकल्प, ईयोन, उम्र", "युग, कल्प, महाकल्प, ईयोन"],
      answer: 0,
      exp: "Explanation (En): Geological time is divided hierarchically from largest eons down to eras, periods, epochs, and ages.\nस्पष्टीकरण (Hi): भूवैज्ञानिक समय को सबसे बड़े ईयोन से, फिर महाकल्प, कल्प और युग (Epoch) में बांटा गया है।"
    },
    {
      qEn: "What is the estimated age of the Earth based on modern radiometric dating?",
      qHi: "आधुनिक रेडियोमीट्रिक डेटिंग के अनुसार पृथ्वी की अनुमानित आयु कितनी है?",
      optionsEn: ["About 4.54 billion years", "About 6,000 years", "About 100 million years", "About 13.8 billion years"],
      optionsHi: ["लगभग 4.54 अरब वर्ष (4.54 billion years)", "लगभग 6,000 वर्ष", "लगभग 100 मिलियन वर्ष", "लगभग 13.8 अरब वर्ष"],
      answer: 0,
      exp: "Explanation (En): Radiometric dating of meteorite material and Earth's oldest rocks places Earth's age at approximately 4.54 billion years.\nस्पष्टीकरण (Hi): उल्कापिंडों और पृथ्वी की सबसे पुरानी चट्टानों की रेडियोमेट्रिक डेटिंग से पृथ्वी की आयु लगभग 4.54 अरब वर्ष आंकी गई है।"
    },
    {
      qEn: "Which eon represents the oldest span of Earth's history, prior to the formation of a stable fossil record?",
      qHi: "कौन सा ईयोन पृथ्वी के इतिहास के सबसे पुराने काल को दर्शाता है जब कोई स्पष्ट जीवाश्म रिकॉर्ड नहीं था?",
      optionsEn: ["Precambrian (Hadean, Archean, Proterozoic)", "Phanerozoic", "Cenozoic", "Mesozoic"],
      optionsHi: ["प्रीकैंब्रियन (Hadean, Archean, Proterozoic)", "फैनेरोज़ोइक", "सेनोजोइक", "मीसोजोइक"],
      answer: 0,
      exp: "Explanation (En): The Precambrian eon covers about 88% of Earth's history, spanning from Earth's formation to the appearance of abundant complex life.\nस्पष्टीकरण (Hi): प्रीकैंब्रियन ईयोन पृथ्वी के इतिहास का 88% हिस्सा कवर करता है जिसमें जीवन बहुत प्रारंभिक अवस्था में था।"
    },
    {
      qEn: "Which eon are we currently living in, known as the 'time of visible life'?",
      qHi: "हम वर्तमान में किस ईयोन में रह रहे हैं जिसे 'दृश्यमान जीवन का काल' कहा जाता है?",
      optionsEn: ["Phanerozoic Eon (फैनेरोज़ोइक ईयोन)", "Precambrian Eon", "Hadean Eon", "Archean Eon"],
      optionsHi: ["फैनेरोज़ोइक ईयोन (Phanerozoic Eon)", "प्रीकैंब्रियन ईयोन", "हैडियन ईयोन", "आर्कियन ईयोन"],
      answer: 0,
      exp: "Explanation (En): The Phanerozoic eon began about 541 million years ago with the rapid appearance of multicellular animal phyla (Cambrian explosion).\nस्पष्टीकरण (Hi): फैनेरोज़ोइक ईयोन में जटिल और बहुकोशिकीय जीवों का विकास तेजी से हुआ, जिसमें हम आज जी रहे हैं।"
    },
    {
      qEn: "What major event marked the beginning of the Phanerozoic eon (Cambrian period)?",
      qHi: "फैनेरोज़ोइक ईयोन (कैम्ब्रियन काल) की शुरुआत किस प्रमुख घटना से हुई थी?",
      optionsEn: ["The Cambrian Explosion (sudden appearance of diverse shelled organisms and complex life)", "Extinction of dinosaurs", "Formation of moon", "First volcanic eruption"],
      optionsHi: ["कैम्ब्रियन विस्फोट (विभिन्न प्रकार के खोल वाले जीवों और जटिल जीवन का अचानक प्रकट होना)", "डिनोसोर्स का विलुप्त होना", "चंद्रमा का बनना", "पहला ज्वालामुखी उद्गार"],
      answer: 0,
      exp: "Explanation (En): The Cambrian Explosion was an evolutionary burst around 541 million years ago when most major animal phyla started appearing.\nस्पष्टीकरण (Hi): कैम्ब्रियन विस्फोट वह दौर था जब समुद्र में अचानक अनगिनत प्रजातियां और जीव विकसित होने लगे।"
    },
    {
      qEn: "Which geological era is famously known as the 'Age of Reptiles' or the age of dinosaurs?",
      qHi: "किस भूवैज्ञानिक महाकल्प को 'सरीसृपों का युग' या डिनोसोर्स का काल कहा जाता है?",
      optionsEn: ["Mesozoic Era (मीसोजोइक महाकल्प)", "Cenozoic Era", "Paleozoic Era", "Precambrian"],
      optionsHi: ["मीसोजोइक महाकल्प (Mesozoic Era)", "सेनोजोइक महाकल्प", "पेलियोज़ोइक महाकल्प", "प्रीकैंब्रियन"],
      answer: 0,
      exp: "Explanation (En): The Mesozoic Era (Triassic, Jurassic, and Cretaceous periods) was dominated by giant reptiles and dinosaurs.\nस्पष्टीकरण (Hi): मीसोजोइक महाकल्प (जिसमें जुरासिक काल भी शामिल है) में डायनासोर और विशाल सरीसृपों का राज था।"
    },
    {
      qEn: "Which geological era is known as the 'Age of Mammals'?",
      qHi: "किस भूवैज्ञानिक महाकल्प को 'स्तनधारियों का युग' (Age of Mammals) कहा जाता है?",
      optionsEn: ["Cenozoic Era (सेनोजोइक महाकल्प)", "Mesozoic Era", "Paleozoic Era", "Archean"],
      optionsHi: ["सेनोजोइक महाकल्प (Cenozoic Era)", "मीसोजोइक महाकल्प", "पेलियोज़ोइक महाकल्प", "आर्कियन"],
      answer: 0,
      exp: "Explanation (En): Following the dinosaur extinction, mammals diversified and became the dominant terrestrial life form during the Cenozoic Era.\nस्पष्टीकरण (Hi): डायनासोर के खात्मा के बाद स्तनधारी जीवों का तेजी से विकास हुआ, इसलिए इस युग को सेनोजोइक या स्तनधारियों का युग कहते हैं।"
    },
    {
      qEn: "During which geological period did the extinction of dinosaurs occur?",
      qHi: "डिनोसोर्स का विलुप्त होना किस कल्प (Period) के अंत में हुआ था?",
      optionsEn: ["Cretaceous period (Cretaceous-Paleogene extinction)", "Jurassic period", "Triassic period", "Permian period"],
      optionsHi: ["क्रिटेशियस कल्प (Cretaceous-Paleogene extinction)", "जुरासिक कल्प", "ट्रायसिक कल्प", "पर्मियन कल्प"],
      answer: 0,
      exp: "Explanation (En): An asteroid impact and massive volcanic activity at the end of the Cretaceous period wiped out dinosaurs ~66 million years ago.\nस्पष्टीकरण (Hi): लगभग 6.6 करोड़ साल पहले क्रिटेशियस काल के अंत में उल्कापिंड के गिरने से डायनासोर विलुप्त हो गए।"
    },
    {
      qEn: "What is paleontology?",
      qHi: "पुराजीव विज्ञान या पेलियोन्टोलॉजी (Paleontology) किसका अध्ययन है?",
      optionsEn: ["The study of prehistoric life through fossil records", "The study of modern plant leaves", "The study of ocean currents", "The study of mountain formation"],
      optionsHi: ["जीवाश्मों के माध्यम से प्रागैतिहासिक जीवन का अध्ययन", "आधुनिक पेड़ की पत्तियों का अध्ययन", "समुद्री धाराओं का अध्ययन", "पर्वत निर्माण का अध्ययन"],
      answer: 0,
      exp: "Explanation (En): Paleontology examines fossils to understand ancient organisms, their environment, and evolution.\nस्पष्टीकरण (Hi): जीवाश्मों के अध्ययन द्वारा प्राचीन काल के जीवों और उनके पर्यावरण को समझने को पेलियोन्टोलॉजी कहते हैं।"
    },
    {
      qEn: "What is the principle of uniformitarianism in geology?",
      qHi: "भूविज्ञान में 'एकरूपतावाद' (Uniformitarianism) का सिद्धांत क्या कहता है?",
      optionsEn: ["The physical, chemical, and biological laws that operate today have also operated in the geologic past ('the present is the key to the past')", "Earth never changes", "All rocks are identical", "Old rocks are always on top"],
      optionsHi: ["वे भौतिक, रासायनिक और जैविक नियम जो आज काम कर रहे हैं, भूवैज्ञानिक अतीत में भी काम करते रहे हैं ('वर्तमान अतीत की कुंजी है')", "पृथ्वी कभी नहीं बदलती", "सभी चट्टानें एक जैसी हैं", "पुरानी चट्टानें हमेशा ऊपर होती हैं"],
      answer: 0,
      exp: "Explanation (En): Coined by James Hutton, uniformitarianism means Earth processes today are the same as those that shaped Earth in the past.\nस्पष्टीकरण (Hi): इसके अनुसार जिन प्राकृतिक प्रक्रियाओं से आज धरती बदल रही है, वही प्रक्रियाएं भूवैज्ञानिक इतिहास में भी काम करती रही हैं।"
    },
    {
      qEn: "What is the law of superposition in stratigraphy?",
      qHi: "स्ट्रेटोग्राफी में 'अध्यारोपण का नियम' (Law of superposition) क्या है?",
      optionsEn: ["In undeformed sedimentary rock layers, older layers are at the bottom and younger layers are at the top", "Younger rocks are always at the bottom", "All rock layers are formed simultaneously", "Rock age is random"],
      optionsHi: ["अविकृत अवसादी चट्टानों की परतों में, पुरानी परतें नीचे होती हैं और नई परतें ऊपर होती हैं", "नई चट्टानें हमेशा नीचे होती हैं", "सभी चट्टानी परतें एक साथ बनती हैं", "चट्टान की उम्र यादृच्छिक होती है"],
      answer: 0,
      exp: "Explanation (En): The law of superposition is a key axiom stating that in undisturbed strata, younger beds lie above older beds.\nस्पष्टीकरण (Hi): इसके अनुसार अवसादी चट्टानों में नीचे की परतें पुरानी और ऊपर की परतें बाद में जमने के कारण नई होती हैं।"
    },
    {
      qEn: "Which period in the Paleozoic era is often referred to as the 'Age of Fishes'?",
      qHi: "पेलियोज़ोइक महाकल्प के किस काल को 'मछलियों का स्वर्ण युग' (Age of Fishes) कहा जाता है?",
      optionsEn: ["Devonian period (डिवोनियन कल्प)", "Cambrian period", "Silurian period", "Permian period"],
      optionsHi: ["डिवोनियन कल्प (Devonian period)", "कैम्ब्रियन कल्प", "सिलूरियन कल्प", "पर्मियन कल्प"],
      answer: 0,
      exp: "Explanation (En): The Devonian period saw a massive diversification and abundance of fish species in the world's oceans.\nस्पष्टीकरण (Hi): डिवोनियन काल में महासागरों में मछलियों की अनगिनत प्रजातियों का विकास हुआ, इसलिए इसे मछलियों का युग कहते हैं।"
    },
    {
      qEn: "During which geological period did the first land plants and primitive insects emerge?",
      qHi: "सबसे पहले स्थलीय पौधे और आदिम कीट किस भूवैज्ञानिक काल में प्रकट हुए थे?",
      optionsEn: ["Silurian period", "Carboniferous period", "Triassic period", "Quaternary period"],
      optionsHi: ["सिलूरियन कल्प (Silurian period)", "कार्बोनिफेरस कल्प", "ट्रायसिक कल्प", "क्वाटरनरी कल्प"],
      answer: 0,
      exp: "Explanation (En): The Silurian period marked the first significant colonization of land by primitive vascular plants and arthropods.\nस्पष्टीकरण (Hi): सिलूरियन काल में पौधों ने पहली बार जमीन पर अपनी जड़ें जमाईं और कीट प्रकट हुए।"
    },
    {
      qEn: "Which period of the Paleozoic era is famous for extensive swamp forests that formed today's major coal deposits?",
      qHi: "पेलियोज़ोइक महाकल्प का कौन सा काल विशाल दलदली वनों के लिए प्रसिद्ध है जिससे आज के प्रमुख कोयले के भंडार बने?",
      optionsEn: ["Carboniferous period (कार्बोनिफेरस कल्प)", "Devonian period", "Permian period", "Ordovician period"],
      optionsHi: ["कार्बोनिफेरस कल्प (Carboniferous period)", "डिवोनियन कल्प", "पर्मियन कल्प", "ऑर्डोविशियन कल्प"],
      answer: 0,
      exp: "Explanation (En): Vast tropical swamp forests flourished during the Carboniferous period, which later fossilized into rich coal seams.\nस्पष्टीकरण (Hi): कार्बोनिफेरस काल में घने और विशाल दलदली जंगल थे, जिनके दबने से आज का कोयला बना है।"
    },
    {
      qEn: "What was the greatest mass extinction in Earth's history, wiping out about 90-95% of marine species at the end of the Paleozoic?",
      qHi: "पृथ्वी के इतिहास की सबसे बड़ी महा-विलुप्ति कौन सी थी जिसमें पेलियोज़ोइक के अंत में लगभग 90-95% समुद्री प्रजातियां नष्ट हो गईं?",
      optionsEn: ["Permian-Triassic extinction event (The Great Dying)", "Cretaceous extinction", "Ordovician extinction", "Devonian extinction"],
      optionsHi: ["पर्मियन-ट्रायसिक विलुप्ति (Great Dying)", "क्रिटेशियस विलुप्ति", "ऑर्डोविशियन विलुप्ति", "डिवोनियन विलुप्ति"],
      answer: 0,
      exp: "Explanation (En): The Permian-Triassic extinction, known as 'The Great Dying', was Earth's most severe extinction event due to massive volcanism.\nस्पष्टीकरण (Hi): पर्मियन काल के अंत में 'द ग्रेट डाइंग' नाम की महा-विलुप्ति हुई जिसमें 90% से अधिक प्रजातियां खत्म हो गईं।"
    },
    {
      qEn: "What is radiometric dating used for in geology?",
      qHi: "भूविज्ञान में 'रेडियोमीट्रिक डेटिंग' का उपयोग किस लिए किया जाता है?",
      optionsEn: ["To determine the absolute age of rocks and minerals by measuring radioactive isotope decay", "To measure atmospheric temperature", "To find groundwater depth", "To track ocean storms"],
      optionsHi: ["रेडियोधर्मी समस्थानिकों के क्षय को मापकर चट्टानों और खनिजों की सटीक (absolute) आयु ज्ञात करने के लिए", "वायुमंडलीय तापमान मापने के लिए", "भूजल गहराई खोजने के लिए", "समुद्री तूफान ट्रैक करने के लिए"],
      answer: 0,
      exp: "Explanation (En): Radiometric dating calculates rock age using the known radioactive decay rates of elements like uranium and potassium.\nस्पष्टीकरण (Hi): यूरेनियम और पोटेशियम जैसे रेडियोधर्मी तत्वों के टूटने की गति से चट्टानों की वास्तविक उम्र रेडियोमीट्रिक डेटिंग से निकाली जाती है।"
    },
    {
      qEn: "Which radioactive isotope is commonly used for dating organic remains up to approximately 50,000 years old?",
      qHi: "लगभग 50,000 वर्ष पुराने कार्बनिक अवशेषों की आयु तय करने के लिए किस समस्थानिक का सामान्यतः उपयोग किया जाता है?",
      optionsEn: ["Carbon-14 (C-14)", "Uranium-238", "Potassium-40", "Rubidium-87"],
      optionsHi: ["कार्बन-14 (Carbon-14 / C-14)", "यूरेनियम-238", "पोटेशियम-40", "रुबिडियम-87"],
      answer: 0,
      exp: "Explanation (En): Radiocarbon dating uses carbon-14 isotope decay to determine the age of ancient organic materials like wood and bones.\nस्पष्टीकरण (Hi): हड्डियों और लकड़ी जैसे प्राचीन कार्बनिक अवशेषों की उम्र मापने के लिए कार्बन-14 (C-14) डेटिंग का उपयोग होता है।"
    },
    {
      qEn: "What is an index fossil (guide fossil)?",
      qHi: "इंडेक्स या मार्गदर्शक जीवाश्म (Index fossil) किसे कहते हैं?",
      optionsEn: ["Fossils of widespread organisms that lived for a relatively short geological time span, used to date rock layers", "Fossils of very rare deep sea fish", "Any old plant leaf", "Broken rock crystal"],
      optionsHi: ["व्यापक रूप से फैले हुए जीवों के जीवाश्म जो अपेक्षाकृत कम समय तक जीवित रहे और चट्टानी परतों की आयु तय करने में काम आते हैं", "दुर्लभ गहरे समुद्र की मछली के जीवाश्म", "कोई भी पुरानी पौधे की पत्ती", "टूटा हुआ रॉक क्रिस्टल"],
      answer: 0,
      exp: "Explanation (En): Index fossils are distinct, widely distributed fossils used by geologists to correlate and date the strata in which they are found.\nस्पष्टीकरण (Hi): इंडेक्स जीवाश्म वे विशिष्ट जीव होते हैं जो एक निश्चित छोटे काल में पूरी दुनिया में पाए गए, जिससे चट्टानों की आयु आसानी से तय होती है।"
    },
    {
      qEn: "During which period of the Mesozoic era did the first flowering plants (angiosperms) appear?",
      qHi: "मीसोजोइक महाकल्प के किस काल में सबसे पहले फूल वाले पौधे (एंजियोस्पर्म) प्रकट हुए थे?",
      optionsEn: ["Cretaceous period", "Triassic period", "Jurassic period", "Silurian period"],
      optionsHi: ["क्रिटेशियस कल्प (Cretaceous period)", "ट्रायसिक कल्प", "जुरासिक कल्प", "सिलूरियन कल्प"],
      answer: 0,
      exp: "Explanation (En): Flowering plants (angiosperms) evolved and diversified rapidly during the Cretaceous period, transforming terrestrial ecosystems.\nस्पष्टीकरण (Hi): क्रिटेशियस काल में पहली बार फूल वाले पौधे (एंजियोस्पर्म) विकसित हुए और चारों तरफ फैले।"
    },
    {
      qEn: "When did the supercontinent Pangaea begin to break apart?",
      qHi: "महाद्वीपीय महाद्वीप 'पंजिया' (Pangaea) का टूटना किस काल में शुरू हुआ था?",
      optionsEn: ["Mesozoic Era (Triassic/Jurassic period)", "Paleozoic Era", "Cenozoic Era", "Precambrian"],
      optionsHi: ["मीसोजोइक महाकल्प (ट्रायसिक/जुरासिक काल)", "पेलियोज़ोइक महाकल्प", "सेनोजोइक महाकल्प", "प्रीकैंब्रियन"],
      answer: 0,
      exp: "Explanation (En): The supercontinent Pangaea began breaking apart during the early Mesozoic Era (Triassic period) into Laurasia and Gondwanaland.\nस्पष्टीकरण (Hi): महाद्वीप पंजिया मीसोजोइक महाकल्प के शुरुआती दौर में टूटकर लॉरेसिया और गोंडवानालैंड में विभाजित होने लगा था।"
    },
    {
      qEn: "What is stratigraphy?",
      qHi: "स्ट्रेटोग्राफी या स्तरविज्ञान (Stratigraphy) किसका अध्ययन है?",
      optionsEn: ["The study of rock layers (strata) and layering (stratification)", "The study of stars and planets", "The study of ocean waves", "The study of active volcanoes"],
      optionsHi: ["चट्टानी परतों (Strata) और उनके क्रम का अध्ययन", "तारों और ग्रहों का अध्ययन", "समुद्री लहरों का अध्ययन", "सक्रिय ज्वालामुखियों का अध्ययन"],
      answer: 0,
      exp: "Explanation (En): Stratigraphy is a branch of geology concerned with the study of rock layers and layering, crucial for deciphering Earth's history.\nस्पष्टीकरण (Hi): स्ट्रेटोग्राफी भूविज्ञान की वह शाखा है जिसमें चट्टानों की परतों (strata) और उनके इतिहास का अध्ययन किया जाता है।"
    },
    {
      qEn: "During which epoch of the Cenozoic era did the last major Ice Age occur?",
      qHi: "सेनोजोइक महाकल्प के किस युग (Epoch) में अंतिम प्रमुख हिमयुग (Ice Age) आया था?",
      optionsEn: ["Pleistocene epoch", "Holocene epoch", "Miocene epoch", "Paleocene epoch"],
      optionsHi: ["प्लीस्टोसीन युग (Pleistocene epoch)", "होलोसीन युग", "मायोसिन युग", "पेलियोसीन युग"],
      answer: 0,
      exp: "Explanation (En): The Pleistocene epoch was characterized by repeated glacial cycles (Ice Ages) and the evolution of modern humans.\nस्पष्टीकरण (Hi): प्लीस्टोसीन युग में पृथ्वी पर बड़े पैमाने पर बर्फबारी हुई (हिमयुग) और आधुनिक मानव का विकास हुआ।"
    },
    {
      qEn: "What is the current geological epoch we are living in, which began after the last Ice Age?",
      qHi: "हम वर्तमान में किस भूवैज्ञानिक युग (Epoch) में रह रहे हैं जो अंतिम हिमयुग के बाद शुरू हुआ था?",
      optionsEn: ["Holocene epoch (होलोसीन युग)", "Pleistocene epoch", "Miocene epoch", "Pliocene epoch"],
      optionsHi: ["होलोसीन युग (Holocene epoch)", "प्लीस्टोसीन युग", "मायोसिन युग", "प्लायोसिन युग"],
      answer: 0,
      exp: "Explanation (En): The Holocene epoch is the current geological epoch, beginning approximately 11,700 years ago after the last glacial retreat.\nस्पष्टीकरण (Hi): होलोसीन युग हमारा वर्तमान युग है जो लगभग 11,700 साल पहले हिमयुग के समाप्त होने के बाद शुरू हुआ था।"
    },
    {
      qEn: "When did modern humans (*Homo sapiens*) first appear in the fossil record?",
      qHi: "जीवाश्म रिकॉर्ड में आधुनिक मानव (*Homo sapiens*) सबसे पहले कब प्रकट हुए थे?",
      optionsEn: ["Quaternary period (Pleistocene epoch)", "Tertiary period", "Cretaceous period", "Jurassic period"],
      optionsHi: ["क्वाटरनरी कल्प (प्लीस्टोसीन युग)", "टर्शियरी कल्प", "क्रिटेशियस कल्प", "जुरासिक कल्प"],
      answer: 0,
      exp: "Explanation (En): Anatomically modern humans (*Homo sapiens*) emerged in Africa approximately 300,000 years ago during the Pleistocene epoch (Quaternary).\nस्पष्टीकरण (Hi): आधुनिक मानव होमो सेपियंस का उद्भव लगभग 3 लाख साल पहले प्लीस्टोसीन युग (क्वाटरनरी कल्प) में हुआ था।"
    },
    {
      qEn: "What term is increasingly used by scientists to describe the current geological age in which human activity has become the dominant influence on climate and environment?",
      qHi: "वैज्ञानिकों द्वारा उस वर्तमान भूवैज्ञानिक काल का वर्णन करने के लिए किस शब्द का उपयोग किया जा रहा है जिसमें मानवीय गतिविधियों का पर्यावरण पर सबसे बड़ा प्रभाव पड़ा है?",
      optionsEn: ["Anthropocene (एंथ्रोपोसीन)", "Holocene", "Pleistocene", "Paleocene"],
      optionsHi: ["एंथ्रोपोसीन (Anthropocene)", "होलोसीन", "प्लीस्टोसीन", "पेलियोसीन"],
      answer: 0,
      exp: "Explanation (En): The Anthropocene is an unofficial geological epoch proposing that human industrial and technological impact defines Earth's current state.\nस्पष्टीकरण (Hi): एंथ्रोपोसीन वह प्रस्तावित नया युग है जिसमें यह माना जाता है कि पृथ्वी के पर्यावरण को बदलने में इंसानों की गतिविधि मुख्य कारक बन चुकी है।"
    },
    {
      qEn: "What was the name of the primordial supercontinent that existed during the late Paleozoic and early Mesozoic eras?",
      qHi: "पेलियोज़ोइक और मीसोजोइक महाकल्प के दौरान मौजूद रहने वाले उस आदिम महाद्वीप का नाम क्या था जिसमें सभी महाद्वीप जुड़े थे?",
      optionsEn: ["Pangaea (पंजिया)", "Gondwana", "Laurasia", "Rodinia"],
      optionsHi: ["पंजिया (Pangaea)", "गोंडवाना", "लौरेसिया", "रोडिनिया"],
      answer: 0,
      exp: "Explanation (En): Pangaea was a supercontinent that existed 335 million years ago before breaking apart into tectonic components.\nस्पष्टीकरण (Hi): पंजिया वह विशाल सुपरकॉन्टिनेंट था जिसमें दुनिया के सभी आज के महाद्वीप आपस में जुड़े हुए थे।"
    },
    {
      qEn: "What was the northern landmass formed when Pangaea first split apart called?",
      qHi: "जब पंजिया सबसे पहले दो हिस्सों में टूटा, तो उत्तरी भूभाग को क्या नाम दिया गया था?",
      optionsEn: ["Laurasia (लौरेसिया)", "Gondwanaland", "Pannotia", "Rodinia"],
      optionsHi: ["लौरेसिया (Laurasia)", "गोंडवानालैंड", "पैनोटिया", "रोडिनिया"],
      answer: 0,
      exp: "Explanation (En): Pangaea split into two major continents: Laurasia in the north and Gondwanaland in the south.\nस्पष्टीकरण (Hi): पंजिया के टूटने से उत्तर का हिस्सा 'लौरेसिया' और दक्षिण का हिस्सा 'गोंडवानालैंड' कहलाया।"
    },
    {
      qEn: "What major scientific breakthrough did radiometric dating provide to the study of Earth's history?",
      qHi: "रेडियोमीट्रिक डेटिंग ने पृथ्वी के इतिहास के अध्ययन में कौन सी सबसे बड़ी वैज्ञानिक सफलता दी?",
      optionsEn: ["It enabled geologists to determine the absolute numerical ages of rocks rather than just relative order", "It measured ocean tides", "It predicted earthquakes", "It tracked atmospheric wind"],
      optionsHi: ["इसने भूवैज्ञानिकों को केवल सापेक्ष क्रम के बजाय चट्टानों की सटीक संख्यात्मक (absolute) आयु तय करने में सक्षम बनाया", "इसने समुद्री ज्वार मापा", "इसने भूकंप की भविष्यवाणी की", "इसने वायुमंडलीय हवा ट्रैक की"],
      answer: 0,
      exp: "Explanation (En): Before radiometric dating, only relative geological ages were known; isotopic dating gave concrete numerical years to Earth's timeline.\nस्पष्टीकरण (Hi): रेडियोमीट्रिक तकनीक आने से पहले केवल यह पता था कि कौन सी चट्टान पहले है (सापेक्ष उम्र), लेकिन अब सटीक साल पता चलने लगे।"
    }
  ],
  
     "Ecosystem": [
    {
      qEn: "Who coined the term 'ecosystem' in 1935?",
      qHi: "1935 में 'इकोसिस्टम' (पारिस्थितिकी तंत्र) शब्द सबसे पहले किसने दिया था?",
      optionsEn: ["A.G. Tansley", "Ernst Haeckel", "E.P. Odum", "Charles Elton"],
      optionsHi: ["ए.जी. टांसले (A.G. Tansley)", "अर्नस्ट हेकेल", "ई.पी. ओडुम", "चार्ल्स एल्टन"],
      answer: 0,
      exp: "Explanation (En): Arthur Tansley coined the term 'ecosystem' to describe the interactive system between biotic and abiotic components.\nस्पष्टीकरण (Hi): ब्रिटिश पारिस्थितिकीविद् ए.जी. टांसले ने 1935 में जैविक और अजैविक घटकों के अंतःस्रवण तंत्र को 'इकोसिस्टम' नाम दिया था।"
    },
    {
      qEn: "What are the two main components of any ecosystem?",
      qHi: "किसी भी पारिस्थितिकी तंत्र के दो मुख्य घटक कौन से हैं?",
      optionsEn: ["Biotic (living) and Abiotic (non-living) components", "Producers and Consumers only", "Plants and Animals only", "Air and Water only"],
      optionsHi: ["जैविक (जीवित) और अजैविक (निर्जीव) घटक", "केवल उत्पादक और उपभोक्ता", "केवल पौधे और जानवर", "केवल हवा और पानी"],
      answer: 0,
      exp: "Explanation (En): An ecosystem consists of biotic components (living organisms) and abiotic components (physical and chemical factors like light, temperature, water).\nस्पष्टीकरण (Hi): पारिस्थितिकी तंत्र मुख्य रूप से जैविक (जीवित जीव) और अजैविक (तापमान, जल, प्रकाश आदि) घटकों से मिलकर बनता है।"
    },
    {
      qEn: "Which of the following is an example of an abiotic component in an ecosystem?",
      qHi: "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र का एक अजैविक (Abiotic) घटक है?",
      optionsEn: ["Temperature, soil, and water", "Green plants", "Herbivores", "Decomposers"],
      optionsHi: ["तापमान, मिट्टी और जल", "हरे पौधे", "शाकाहारी जीव", "अपघटक"],
      answer: 0,
      exp: "Explanation (En): Abiotic factors are non-living chemical and physical parts of the environment that affect living organisms.\nस्पष्टीकरण (Hi): तापमान, मिट्टी, पानी और खनिज जैसे निर्जीव तत्व अजैविक घटक कहलाते हैं।"
    },
    {
      qEn: "What are organisms that manufacture their own food using sunlight through photosynthesis called?",
      qHi: "प्रकाश संश्लेषण के माध्यम से सूर्य के प्रकाश का उपयोग करके अपना भोजन स्वयं बनाने वाले जीवों को क्या कहते हैं?",
      optionsEn: ["Producers (Autotrophs)", "Primary consumers", "Secondary consumers", "Decomposers"],
      optionsHi: ["उत्पादक या स्वपोषी (Producers / Autotrophs)", "प्राथमिक उपभोक्ता", "द्वितीयक उपभोक्ता", "अपघटक"],
      answer: 0,
      exp: "Explanation (En): Producers or autotrophs (like green plants and phytoplankton) form the base of the ecological food chain.\nस्पष्टीकरण (Hi): हरे पौधे और शैवाल उत्पादक (ऑटोट्रोफ्स) कहलाते हैं जो सौर ऊर्जा से अपना भोजन बनाते हैं।"
    },
    {
      qEn: "What are organisms that feed directly on plants (herbivores) known as in a food chain?",
      qHi: "खाद्य श्रृंखला में सीधे पौधों (शाकाहारी) को खाने वाले जीवों को क्या कहा जाता है?",
      optionsEn: ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Producers"],
      optionsHi: ["प्राथमिक उपभोक्ता (Primary consumers)", "द्वितीयक उपभोक्ता", "तृतीयक उपभोक्ता", "उत्पादक"],
      answer: 0,
      exp: "Explanation (En): Primary consumers are herbivores that eat producers to obtain energy.\nस्पष्टीकरण (Hi): प्राथमिक उपभोक्ता वे शाकाहारी जीव हैं जो सीधे पौधों (उत्पादकों) को अपना आहार बनाते हैं।"
    },
    {
      qEn: "What are carnivores that eat herbivores called in an ecosystem?",
      qHi: "शाकाहारी जीवों को खाने वाले मांसाहारी जीवों को पारिस्थितिकी तंत्र में क्या कहते हैं?",
      optionsEn: ["Secondary consumers", "Primary consumers", "Producers", "Autotrophs"],
      optionsHi: ["द्वितीयक उपभोक्ता (Secondary consumers)", "प्राथमिक उपभोक्ता", "उत्पादक", "स्वपोषी"],
      answer: 0,
      exp: "Explanation (En): Secondary consumers are carnivores or omnivores that feed on primary consumers (herbivores).\nस्पष्टीकरण (Hi): द्वितीयक उपभोक्ता वे मांसाहारी जीव हैं जो प्राथमिक उपभोक्ताओं (शाकाहारी) का शिकार करते हैं।"
    },
    {
      qEn: "What is the role of decomposers (like bacteria and fungi) in an ecosystem?",
      qHi: "पारिस्थितिकी तंत्र में अपघटकों (जैसे बैक्टीरिया और कवक) की क्या भूमिका है?",
      optionsEn: ["To break down dead organic matter and recycle nutrients back into the soil", "To produce food via photosynthesis", "To consume apex predators", "To generate solar energy"],
      optionsHi: ["मृत कार्बनिक पदार्थों को तोड़ना और पोषक तत्वों को वापस मिट्टी में पुनर्चक्रित करना", "प्रकाश संश्लेषण द्वारा भोजन बनाना", "शीर्ष शिकारियों को खाना", "सौर ऊर्जा उत्पन्न करना"],
      answer: 0,
      exp: "Explanation (En): Decomposers break down complex dead matter into simple inorganic nutrients, completing the nutrient cycle.\nस्पष्टीकरण (Hi): अपघटक मृत जीवों और कचरे को सड़ाकर सरल पोषक तत्वों में बदलते हैं और उन्हें मिट्टी में मिलाते हैं।"
    },
    {
      qEn: "Who proposed the 10% energy transfer law in ecology?",
      qHi: "पारिस्थितिकी में '10% ऊर्जा स्थानांतरण का नियम' किसने प्रतिपादित किया था?",
      optionsEn: ["Raymond Lindeman (1942)", "A.G. Tansley", "Ernst Haeckel", "Charles Darwin"],
      optionsHi: ["रेमंड लिंडमैन (Raymond Lindeman - 1942)", "ए.जी. टांसले", "अर्नस्ट हेकेल", "चार्ल्स डार्विन"],
      answer: 0,
      exp: "Explanation (En): Lindeman's 10% law states that when energy is passed in an ecosystem from one trophic level to the next, only about 10% is passed on.\nस्पष्टीकरण (Hi): रेमंड लिंडमैन के अनुसार एक पोषण स्तर से दूसरे पोषण स्तर पर केवल 10% ऊर्जा ही ट्रांसफर होती है, बाकी 90% नष्ट हो जाती है।"
    },
    {
      qEn: "Can an ecological pyramid of energy ever be inverted?",
      qHi: "क्या ऊर्जा का पारिस्थितिक पिरामिड (Pyramid of energy) कभी उल्टा हो सकता है?",
      optionsEn: ["No, it is always upright", "Yes, always inverted", "Inverted in aquatic ecosystems only", "Inverted in deserts"],
      optionsHi: ["नहीं, यह हमेशा सीधा होता है", "हाँ, हमेशा उल्टा", "केवल जलीय पारिस्थितिकी तंत्र में उल्टा", "मरुस्थल में उल्टा"],
      answer: 0,
      exp: "Explanation (En): Because energy is lost as heat at each successive trophic level due to thermodynamics, energy pyramids are always upright.\nस्पष्टीकरण (Hi): ऊष्मागतिकी के नियमों के अनुसार ऊर्जा हर अगले स्तर पर घटती जाती है, इसलिए ऊर्जा का पिरामिड हमेशा सीधा (upright) बनता है।"
    },
    {
      qEn: "What shape does the biomass pyramid take in an open ocean or aquatic ecosystem?",
      qHi: "खुले महासागर या जलीय पारिस्थितिकी तंत्र में बायोमास (जीवभार) का पिरामिड किस आकार का होता है?",
      optionsEn: ["Inverted (उल्टा)", "Always upright", "Square", "Spherical"],
      optionsHi: ["उल्टा (Inverted)", "हमेशा सीधा", "वर्गाकार", "गोलाकार"],
      answer: 0,
      exp: "Explanation (En): In aquatic ecosystems, phytoplankton biomass is smaller than zooplankton biomass at any given time, making the pyramid inverted.\nस्पष्टीकरण (Hi): जलीय तंत्र में उत्पादकों (फाइटोप्लांकटन) का कुल भार उपभोक्ताओं से कम होता है, जिससे बायोमास का पिरामिड उल्टा हो जाता है।"
    },
    {
      qEn: "What is a food web?",
      qHi: "खाद्य जाल (Food web) किसे कहते हैं?",
      optionsEn: ["A complex network of interconnected food chains within an ecosystem", "A single linear food chain", "A pyramid of numbers", "A food storage warehouse"],
      optionsHi: ["पारिस्थितिकी तंत्र में आपस में जुड़ी हुई खाद्य श्रृंखलाओं का एक जटिल नेटवर्क", "एक अकेली रेखीय खाद्य श्रृंखला", "संख्याओं का पिरामिड", "खाद्य भंडारण गोदाम"],
      answer: 0,
      exp: "Explanation (En): A food web consists of multiple overlapping food chains, illustrating that most organisms eat more than one type of food.\nस्पष्टीकरण (Hi): खाद्य जाल कई परस्पर जुड़ी हुई खाद्य श्रृंखलाओं का एक जटिल जाल है जो पारिस्थितिकी तंत्र को स्थिरता देता है।"
    },
    {
      qEn: "What is ecological succession?",
      qHi: "पारिस्थितिक अनुक्रमण (Ecological succession) किसे कहते हैं?",
      optionsEn: ["The process by which the structure of a biological community evolves over time", "Sudden extinction of species", "Migration of animals in winter", "Seasonal change in weather"],
      optionsHi: ["समय के साथ किसी जैविक समुदाय की संरचना में होने वाला क्रमिक विकास", "प्रजातियों का अचानक विलुप्त होना", "सर्दियों में जानवरों का प्रवासन", "मौसम में मौसमी बदलाव"],
      answer: 0,
      exp: "Explanation (En): Ecological succession is the steady, orderly progression of changes in plant and animal communities in a given area over time.\nस्पष्टीकरण (Hi): समय के साथ किसी क्षेत्र में वनस्पतियों और जीवों के समुदायों का क्रमिक रूप से विकसित होना पारिस्थितिक अनुक्रमण कहलाता है।"
    },
    {
      qEn: "What is the first community that colonizes a bare, lifeless area during primary succession called?",
      qHi: "प्राथमिक अनुक्रमण के दौरान बंजर भूमि पर सबसे पहले बसने वाले शुरुआती समुदाय को क्या कहते हैं?",
      optionsEn: ["Pioneer community (पायनियर समुदाय)", "Climax community", "Apex community", "Degraded community"],
      optionsHi: ["पायनियर समुदाय (Pioneer community)", "चरम समुदाय", "शीर्ष समुदाय", "क्षीण समुदाय"],
      answer: 0,
      exp: "Explanation (En): Pioneer species (like lichens and mosses) are the hardy first colonizers of bare rock or lifeless environments.\nस्पष्टीकरण (Hi): लाइकेन और काई जैसी सहनशील प्रजातियां जो सबसे पहले बंजर चट्टान पर उगती हैं, उन्हें पायनियर समुदाय कहते हैं।"
    },
    {
      qEn: "What is the final, stable community in ecological succession called?",
      qHi: "पारिस्थितिक अनुक्रमण के अंतिम और सबसे स्थिर समुदाय को क्या कहा जाता है?",
      optionsEn: ["Climax community (चरम समुदाय)", "Pioneer community", "Initial community", "Transient community"],
      optionsHi: ["चरम समुदाय (Climax community)", "पायनियर समुदाय", "प्रारंभिक समुदाय", "अस्थायी समुदाय"],
      answer: 0,
      exp: "Explanation (En): The climax community represents the stable final stage of ecological succession in balance with local climate.\nस्पष्टीकरण (Hi): अनुक्रमण का अंतिम और सबसे स्थिर चरण 'चरम समुदाय' (Climax community) कहलाता है।"
    },
    {
      qEn: "What is primary succession?",
      qHi: "प्राथमिक अनुक्रमण (Primary succession) कहाँ और कैसे शुरू होता है?",
      optionsEn: ["Succession that begins in lifeless areas where there is no soil (e.g., bare rock, newly cooled volcanic lava)", "Regrowth of a forest after a wildfire", "Growth of weeds in a plowed farm", "Recovery after a flood"],
      optionsHi: ["ऐसी निर्जीव जगहों पर शुरू होने वाला अनुक्रमण जहाँ पहले से मिट्टी न हो (जैसे बंजर चट्टान, नया लावा)", "जंगल की आग के बाद पुनर्वृद्धि", "जुते हुए खेत में खरपतवार उगना", "बाढ़ के बाद रिकवरी"],
      answer: 0,
      exp: "Explanation (En): Primary succession starts on bare ground or rock where no soil or previous life existed, taking a very long time.\nस्पष्टीकरण (Hi): प्राथमिक अनुक्रमण वहां शुरू होता है जहां पहले कभी मिट्टी या जीवन नहीं था (जैसे ज्वालामुखी लावा)।्स",
      answer: 0,
      exp: "Explanation (En): Primary succession starts on bare ground or rock where no soil or previous life existed, taking a very long time.\nस्पष्टीकरण (Hi): प्राथमिक अनुक्रमण वहां शुरू होता है जहां पहले कभी मिट्टी या जीवन नहीं था (जैसे ज्वालामुखी लावा)।"
    },
    {
      qEn: "What is secondary succession?",
      qHi: "द्वितीयक अनुक्रमण (Secondary succession) क्या होता है?",
      optionsEn: ["Succession that occurs in an area where an existing community has been removed but soil remains intact (e.g., after a forest fire)", "Starting from bare volcanic rock", "Formation of a brand new island", "Growth on sterile glass surface"],
      optionsHi: ["ऐसी जगह पर होने वाला अनुक्रमण जहां पिछला समुदाय नष्ट हो गया हो लेकिन मिट्टी सुरक्षित बची हो (जैसे जंगल की आग के बाद)", "नंगी चट्टान से शुरू होना", "नए द्वीप का बनना", "बंजर कांच की सतह पर वृद्धि"],
      answer: 0,
      exp: "Explanation (En): Secondary succession happens faster than primary succession because soil and seeds are already present after a disturbance.\nस्पष्टीकरण (Hi): द्वितीयक अनुक्रमण वहां होता है जहां पहले जीवन था लेकिन किसी आपदा (जैसे आग या बाढ़) से नष्ट हो गया, पर मिट्टी मौजूद रहती है।"
    },
    {
      qEn: "Which biogeochemical cycle involves the conversion of atmospheric nitrogen gas into nitrates by soil bacteria?",
      qHi: "कौन सा जैव-भू-रासायनिक चक्र मिट्टी के बैक्टीरिया द्वारा वायुमंडलीय नाइट्रोजन को नाइट्रेट में बदलने से जुड़ा है?",
      optionsEn: ["Nitrogen cycle", "Carbon cycle", "Phosphorus cycle", "Water cycle"],
      optionsHi: ["नाइट्रोजन चक्र (Nitrogen cycle)", "कार्बन चक्र", "फास्फोरस चक्र", "जल चक्र"],
      answer: 0,
      exp: "Explanation (En): Nitrogen fixation converts inert atmospheric nitrogen into bioavailable forms like ammonia and nitrates by bacteria like *Rhizobium*.\nस्पष्टीकरण (Hi): नाइट्रोजन चक्र के तहत बैक्टीरिया वायुमंडलीय नाइट्रोजन को पौधों के उपयोग योग्य नाइट्रेट्स में बदलते हैं।"
    },
    {
      qEn: "What is the main reservoir of carbon in the Earth's carbon cycle?",
      qHi: "पृथ्वी के कार्बन चक्र में कार्बन का मुख्य भंडार (Reservoir) कहाँ होता है?",
      optionsEn: ["Oceans and geological carbonate rocks / Fossil fuels", "Only the atmosphere", "Only green plants", "Freshwater lakes"],
      optionsHi: ["महासागर और भूवैज्ञानिक कार्बोनेट चट्टानें / जीवाश्म ईंधन", "केवल वायुमंडल", "केवल हरे पौधे", "मीठे पानी की झीलें"],
      answer: 0,
      exp: "Explanation (En): Oceans, sedimentary carbonate rocks, and fossil fuels store the vast majority of Earth's carbon.\nस्पष्टीकरण (Hi): महासागरों, चट्टानों और जीवाश्म ईंधन में पृथ्वी का अधिकांश कार्बन भंडारित रहता है।"
    },
    {
      qEn: "Which nutrient cycle lacks a significant atmospheric gaseous phase?",
      qHi: "किस प्रमुख पोषक तत्व चक्र में वायुमंडलीय गैसीय चरण महत्वपूर्ण रूप से नहीं पाया जाता है?",
      optionsEn: ["Phosphorus cycle", "Nitrogen cycle", "Carbon cycle", "Oxygen cycle"],
      optionsHi: ["फास्फोरस चक्र (Phosphorus cycle)", "नाइट्रोजन चक्र", "कार्बन चक्र", "ऑक्सीजन चक्र"],
      answer: 0,
      exp: "Explanation (En): The phosphorus cycle is a sedimentary cycle that does not include a significant atmospheric gas phase.\nस्पष्टीकरण (Hi): फास्फोरस चक्र एक अवसादी चक्र है जिसमें वायुमंडल की कोई खास गैसीय भूमिका नहीं होती।"
    },
    {
      qEn: "What is gross primary productivity (GPP)?",
      qHi: "सकल प्राथमिक उत्पादकता या जीपीपी (GPP) क्या है?",
      optionsEn: ["The total rate of organic matter production by photosynthesis in an ecosystem", "The energy remaining after plant respiration", "Total energy consumed by herbivores", "Decomposer energy output"],
      optionsHi: ["पारिस्थितिकी तंत्र में प्रकाश संश्लेषण द्वारा कार्बनिक पदार्थों के उत्पादन की कुल दर", "पौधों के श्वसन के बाद बची ऊर्जा", "शाकाहारी जीवों द्वारा उपभोग की गई कुल ऊर्जा", "अपघटक ऊर्जा उत्पादन"],
      answer: 0,
      exp: "Explanation (En): GPP is the total amount of chemical energy fixed by photosynthetic autotrophs in a given time.\nस्पष्टीकरण (Hi): उत्पादकों द्वारा प्रकाश संश्लेषण से बनाई गई कुल ऊर्जा की मात्रा को सकल प्राथमिक उत्पादकता (GPP) कहते हैं।"
    },
    {
      qEn: "What is net primary productivity (NPP)?",
      qHi: "शुद्ध प्राथमिक उत्पादकता या एनपीपी (NPP) क्या है?",
      optionsEn: ["The energy left in plants after accounting for their own respiration losses (NPP = GPP - Respiration)", "Total gross productivity without losses", "Energy consumed by carnivores", "Soil nutrient content"],
      optionsHi: ["पौधों द्वारा अपने श्वसन नुकसान को घटाने के बाद बची ऊर्जा (NPP = GPP - श्वसन)", "बिना किसी नुकसान के कुल उत्पादकता", "मांसाहारी जीवों द्वारा उपभोग ऊर्जा", "मिट्टी का पोषक तत्व"],
      answer: 0,
      exp: "Explanation (En): NPP is the actual biomass available for consumption by heterotrophs (herbivores and consumers) in the food chain.\nस्पष्टीकरण (Hi): पौधों द्वारा श्वसन में खर्च ऊर्जा को घटाने के बाद जो ऊर्जा उपभोक्ताओं के लिए बचती है, उसे नेट प्राइमरी प्रोडक्टिविटी (NPP) कहते हैं।"
    },
    {
      qEn: "What is a biome?",
      qHi: "बायोम (Biome) किसे कहा जाता है?",
      optionsEn: ["A large global biotic community characterized by distinct climate, vegetation, and animal life", "A single small aquarium", "A backyard garden", "A single rotting log"],
      optionsHi: ["विशिष्ट जलवायु, वनस्पति और पशु जीवन वाला एक बड़ा वैश्विक जैविक समुदाय", "एक छोटा मछलीघर", "एक पिछवाड़े का बगीचा", "एक सड़ता हुआ लकड़ी का लट्ठा"],
      answer: 0,
      exp: "Explanation (En): Biomes are major regional ecosystems classified by climate and dominant plant life, such as tundra, desert, and rainforest.\nस्पष्टीकरण (Hi): एक जैसे जलवायु और वनस्पति वाले बड़े वैश्विक पारिस्थितिक क्षेत्रों (जैसे टुंड्रा, मरुस्थल, वर्षावन) को बायोम कहते हैं।"
    },
    {
      qEn: "Which biome is characterized by extreme cold, permafrost, and absence of trees?",
      qHi: "अत्यधिक ठंड, परमाफ्रस्ट और पेड़ों की अनुपस्थिति किस बायोम की मुख्य विशेषता है?",
      optionsEn: ["Tundra (टुंड्रा बायोम)", "Tropical rainforest", "Savanna", "Deciduous forest"],
      optionsHi: ["टुंड्रा बायोम (Tundra)", "उष्णकटिबंधीय वर्षा वन", "सवाना", "पर्णपाती वन"],
      answer: 0,
      exp: "Explanation (En): The tundra biome features bitterly cold winters, frozen subsoil (permafrost), and low-growing mosses and lichens instead of trees.\nस्पष्टीकरण (Hi): टुंड्रा बायोम में सालभर अत्यधिक ठंड रहती है, जमीन जमी रहती है (परमाफ्रस्ट) और बड़े पेड़ नहीं उगते।"
    },
    {
      qEn: "Which terrestrial biome has the highest biodiversity on Earth?",
      qHi: "पृथ्वी पर किस स्थलीय बायोम में सबसे अधिक जैव विविधता पाई जाती है?",
      optionsEn: ["Tropical rainforest", "Desert", "Taiga", "Tundra"],
      optionsHi: ["उष्णकटिबंधीय वर्षा वन (Tropical rainforest)", "मरुस्थल", "टाइगा", "टुंड्रा"],
      answer: 0,
      exp: "Explanation (En): Tropical rainforests near the equator host more species of plants and animals than any other terrestrial biome.\nस्पष्टीकरण (Hi): भूमध्य रेखा के पास स्थित उष्णकटिबंधीय वर्षा वनों में दुनिया की सबसे समृद्ध जैव विविधता मिलती है।"
    },
    {
      qEn: "What is ecotone?",
      qHi: "इकोटोन (Ecotone) किसे कहते हैं?",
      optionsEn: ["A transitional zone of vegetation between two different ecosystems (e.g., where a forest meets a grassland)", "The deepest part of ocean", "The center of a desert", "A frozen polar ice sheet"],
      optionsHi: ["दो अलग-अलग पारिस्थितिकी तंत्रों के बीच का संक्रमण क्षेत्र (जैसे जंगल और घास के मैदान का मिलन स्थल)", "समुद्र का सबसे गहरा भाग", "मरुस्थल का केंद्र", "एक जमी हुई ध्रुवीय बर्फ की चादर"],
      answer: 0,
      exp: "Explanation (En): An ecotone is a boundary area where two different biomes or ecosystems merge, often exhibiting high species richness (edge effect).\nस्पष्टीकरण (Hi): दो अलग-अलग पारिस्थितिकी प्रणालियों के मिलने के स्थान (संक्रमण क्षेत्र) को इकोटोन कहते हैं।"
    },
    {
      qEn: "What is the 'edge effect' in ecology?",
      qHi: "पारिस्थितिकी में 'एज इफेक्ट' (Edge effect) का क्या अर्थ है?",
      optionsEn: ["The tendency for a greater variety and density of organisms to exist in an ecotone (transition zone)", "The destruction of forest borders", "Migration of animals to edges", "Loss of species at core"],
      optionsHi: ["इकोटोन (संक्रमण क्षेत्र) में जीवों की विविधता और घनत्व का सामान्य से अधिक होना", "जंगल की सीमाओं का विनाश", "किनारों पर जानवरों का प्रवासन", "केंद्र में प्रजातियों की हानि"],
      answer: 0,
      exp: "Explanation (En): The edge effect describes how ecological communities in transition zones often have higher biodiversity than adjacent habitats.\nस्पष्टीकरण (Hi): इकोटोन या दो आवासों के किनारे वाले हिस्से पर अक्सर दोनों तरफ की प्रजातियां मिलने के कारण विविधता अधिक होती है, जिसे एज इफेक्ट कहते हैं।"
    },
    {
      qEn: "What is a keystone species?",
      qHi: "कीस्टोन प्रजाति (Keystone species) किसे कहा जाता है?",
      optionsEn: ["A species that has a disproportionately large effect on its ecosystem relative to its abundance", "The most numerous plant in a forest", "An apex carnivore only", "An extinct fossil species"],
      optionsHi: ["वह प्रजाति जिसका अपनी कम संख्या के बावजूद पारिस्थितिकी तंत्र पर अत्यधिक प्रभाव होता है", "जंगल का सबसे प्रचुर पौधा", "केवल एक शीर्ष मांसाहारी", "एक विलुप्त जीवाश्म प्रजाति"],
      answer: 0,
      exp: "Explanation (En): Keystone species play a critical role in maintaining the structural integrity of an ecosystem (e.g., sea otters, wolves).\nस्पष्टीकरण (Hi): कीस्टोन प्रजातियां वे हैं जो भले ही संख्या में कम हों, पर पूरे पारिस्थितिकी तंत्र का संतुलन बनाए रखने में अहम भूमिका निभाती हैं।"
    },
    {
      qEn: "What is biological magnification (biomagnification)?",
      qHi: "जैविक आवर्धन या बायोमैग्निफिकेशन (Biomagnification) क्या है?",
      optionsEn: ["The progressive accumulation of toxic substances in organisms at higher trophic levels of a food chain", "Increase in plant growth rate", "Purification of polluted water", "Spread of viral infections"],
      optionsHi: ["खाद्य श्रृंखला के उच्च पोषण स्तरों पर जीवों में विषैले पदार्थों की सांद्रता का क्रमिक रूप से बढ़ना", "पौधों की वृद्धि दर में वृद्धि", "प्रदूषित पानी का शुद्धिकरण", "वायरल संक्रमण का फैलना"],
      answer: 0,
      exp: "Explanation (En): Non-biodegradable toxins like DDT or mercury become more concentrated as they move up the food chain to apex predators.\nस्पष्टीकरण (Hi): खाद्य श्रृंखला में ऊपर की ओर बढ़ने पर हानिकारक रसायनों (जैसे डीडीटी या पारा) की मात्रा का लगातार बढ़ना बायोमैग्निफिकेशन कहलाता है।"
    },
    {
      qEn: "What is carrying capacity in an ecosystem?",
      qHi: "पारिस्थितिकी तंत्र में 'वहन क्षमता' (Carrying capacity) क्या होती है?",
      optionsEn: ["The maximum population size of a species that a given environment can sustainably support", "The total water storage of a lake", "The maximum speed of animal migration", "The maximum energy output of sun"],
      optionsHi: ["किसी निश्चित पर्यावरण द्वारा स्थायी रूप से समर्थित की जा सकने वाली किसी प्रजाति की अधिकतम आबादी का आकार", "झील की कुल जल भंडारण क्षमता", "पशु प्रवास की अधिकतम गति", "सूर्य की अधिकतम ऊर्जा"],
      answer: 0,
      exp: "Explanation (En): Carrying capacity is the limit of population size that resources like food, water, and habitat can support without degradation.\nस्पष्टीकरण (Hi): पर्यावरण के संसाधन (भोजन, पानी) जितने जीवों का बिना नुकसान के भरण-पोषण कर सकते हैं, उसे उस क्षेत्र की वहन क्षमता कहते हैं।"
    },
    {
      qEn: "What is an ecological niche?",
      qHi: "पारिस्थितिक निके या आला (Ecological niche) किसे कहते हैं?",
      optionsEn: ["The functional role, position, and space occupied by a species within an ecosystem", "The physical nest of a bird", "The geographic country boundary", "The depth of an ocean trench"],
      optionsHi: ["पारिस्थितिकी तंत्र के भीतर किसी प्रजाति की कार्यात्मक भूमिका, स्थिति और उसकी आवश्यकताएं", "पक्षी का भौतिक घोसला", "भौगोलिक देश की सीमा", "समुद्री खाई की गहराई"],
      answer: 0,
      exp: "Explanation (En): An ecological niche describes how an organism fits into its environment, including its diet, shelter, and interactions with other species.\nस्पष्टीकरण (Hi): पारिस्थितिक निके किसी जीव के रहने के स्थान के साथ-साथ पर्यावरण में उसकी पूरी जीवन शैली और कार्य की भूमिका को दर्शाता है।"
    }
  ],
    "Biodiversity Conservation": [
    {
      qEn: "Who coined the term 'biodiversity'?",
      qHi: "'जैव विविधता' (Biodiversity) शब्द सबसे पहले किसने दिया था?",
      optionsEn: ["Walter G. Rosen", "E.O. Wilson", "A.G. Tansley", "Ernst Haeckel"],
      optionsHi: ["वाल्टर जी. रोसेन (Walter G. Rosen)", "ई.ओ. विल्सन", "ए.जी. टांसले", "अर्नस्ट हेकेल"],
      answer: 0,
      exp: "Explanation (En): Walter G. Rosen coined the term 'biodiversity' in 1986, which was later popularized by sociobiologist E.O. Wilson.\nस्पष्टीकरण (Hi): वाल्टर जी. रोसेन ने 1986 में 'biodiversity' शब्द गढ़ा था, जिसे बाद में ई.ओ. विल्सन ने लोकप्रिय बनाया।"
    },
    {
      qEn: "What are the three main hierarchical levels of biodiversity?",
      qHi: "जैव विविधता के तीन मुख्य पदानुक्रमित स्तर कौन से हैं?",
      optionsEn: ["Genetic diversity, Species diversity, and Ecosystem diversity", "Plant diversity, Animal diversity, and Microbial diversity", "Terrestrial, Aquatic, and Aerial diversity", "Alpha, Beta, and Gamma diversity scales"],
      optionsHi: ["आनुवंशिक विविधता, प्रजाति विविधता और पारिस्थितिक तंत्र विविधता", "पादप, जंतु और सूक्ष्मजीव विविधता", "स्थलीय, जलीय और वायुिय विविधता", "अल्फा, बीटा और गामा विविधता"],
      answer: 0,
      exp: "Explanation (En): Biodiversity is categorized into three levels: genetic diversity (within species), species diversity (between species), and ecosystem diversity (habitats).\nस्पष्टीकरण (Hi): जैव विविधता को तीन स्तरों पर बांटा जाता है: आनुवंशिक विविधता, प्रजाति विविधता और पारिस्थितिकी तंत्र विविधता।"
    },
    {
      qEn: "What is genetic diversity?",
      qHi: "आनुवंशिक विविधता (Genetic diversity) किसे कहते हैं?",
      optionsEn: ["The total number of genetic characteristics in the genetic makeup of a species", "The variety of different species in a forest", "The variety of deserts and forests", "The total number of animals in a zoo"],
      optionsHi: ["किसी प्रजाति के आनुवंशिक मेकअप में मौजूद कुल आनुवंशिक विशेषताओं की विविधता", "जंगल में विभिन्न प्रजातियों की विविधता", "मरुस्थलों और वनों की विविधता", "चिड़ियाघर में जानवरों की कुल संख्या"],
      answer: 0,
      exp: "Explanation (En): Genetic diversity refers to the variation of genes within a single species, which is crucial for adaptation and survival.\nस्पष्टीकरण (Hi): एक ही प्रजाति के जीवों के जीनों में पाई जाने वाली भिन्नता को आनुवंशिक विविधता कहते हैं जो जीवों को अनुकूलन में मदद करती है।"
    },
    {
      qEn: "What is species diversity?",
      qHi: "प्रजाति विविधता (Species diversity) से क्या तात्पर्य है?",
      optionsEn: ["The variety and abundance of different species within a particular region or ecosystem", "The genetic variations inside one organism", "The number of global deserts", "The variation of climate zones"],
      optionsHi: ["किसी विशेष क्षेत्र या पारिस्थितिकी तंत्र के भीतर विभिन्न प्रजातियों की विविधता और प्रचुरता", "एक जीव के भीतर आनुवंशिक भिन्नता", "वैश्विक मरुस्थलों की संख्या", "जलवायु क्षेत्रों का परिवर्तन"],
      answer: 0,
      exp: "Explanation (En): Species diversity measures both species richness (number of species) and species evenness (abundance) in a given habitat.\nस्पष्टीकरण (Hi): किसी क्षेत्र विशेष में अलग-अलग प्रजातियों की संख्या और उनकी बहुतायत को प्रजाति विविधता कहते हैं।"
    },
    {
      qEn: "What is ecosystem diversity?",
      qHi: "पारिस्थितिक तंत्र विविधता (Ecosystem diversity) क्या है?",
      optionsEn: ["The variety of different habitats, communities, and ecological processes operating within an area", "The genetic variation in a single plant", "The number of individual animals", "The total atmospheric gas volume"],
      optionsHi: ["किसी क्षेत्र में संचालित विभिन्न आवासों, समुदायों और पारिस्थितिक प्रक्रियाओं की विविधता", "एक पौधे में आनुवंशिक भिन्नता", "व्यक्तिगत जानवरों की संख्या", "कुल वायुमंडलीय गैस आयतन"],
      answer: 0,
      exp: "Explanation (En): Ecosystem diversity refers to the variety of ecosystems on Earth, such as deserts, forests, wetlands, and coral reefs.\nस्पष्टीकरण (Hi): पृथ्वी पर पाए जाने वाले विभिन्न प्रकार के पारिस्थितिक तंत्रों (जैसे वन, मरुस्थल, घास के मैदान, महासागर) की विविधता को दर्शाता है।"
    },
    {
      qEn: "What is alpha diversity?",
      qHi: "अल्फा विविधता (Alpha diversity) किसे कहते हैं?",
      optionsEn: ["Diversity of species within a particular area, community, or ecosystem", "Diversity between different ecosystems", "Regional scale global diversity", "Genetic variation within a family"],
      optionsHi: ["किसी विशेष क्षेत्र, समुदाय या पारिस्थितिकी तंत्र के भीतर प्रजातियों की विविधता", "विभिन्न पारिस्थितिकी तंत्रों के बीच विविधता", "क्षेत्रीय पैमाने पर वैश्विक विविधता", "एक परिवार के भीतर आनुवंशिक भिन्नता"],
      answer: 0,
      exp: "Explanation (En): Alpha diversity refers to the species diversity observed within a specific, local ecosystem or habitat.\nस्पष्टीकरण (Hi): अल्फा विविधता किसी स्थानीय या विशेष आवास के भीतर मौजूद प्रजातियों की संख्या का माप है।"
    },
    {
      qEn: "What is beta diversity?",
      qHi: "बीटा विविधता (Beta diversity) क्या दर्शाती है?",
      optionsEn: ["The comparison of species diversity between different ecosystems or habitats", "Diversity inside a single pond", "Global genetic pool", "Total species on earth"],
      optionsHi: ["विभिन्न पारिस्थितिकी तंत्रों या आवासों के बीच प्रजातियों की विविधता की तुलना", "एक अकेली तालाब के अंदर विविधता", "वैश्विक आनुवंशिक पूल", "पृथ्वी पर कुल प्रजातियां"],
      answer: 0,
      exp: "Explanation (En): Beta diversity measures the change in species composition as you move from one ecosystem to another.\nस्पष्टीकरण (Hi): बीटा विविधता दो अलग-अलग पारिस्थितिकी तंत्रों के बीच प्रजातियों की भिन्नता या बदलाव की तुलना करती है।"
    },
    {
      qEn: "What is gamma diversity?",
      qHi: "गामा विविधता (Gamma diversity) से क्या तात्पर्य है?",
      optionsEn: ["The total species diversity over a large geographic region or landscape containing multiple ecosystems", "Local pond species count", "Genetic mutation rate", "Species richness in a single tree"],
      optionsHi: ["कई पारिस्थितिकी तंत्रों वाले एक बड़े भौगोलिक क्षेत्र या भूदृश्य पर कुल प्रजाति विविधता", "स्थानीय तालाब प्रजाति गिनती", "आनुवंशिक उत्परिवर्तन दर", "एक पेड़ में प्रजाति समृद्धि"],
      answer: 0,
      exp: "Explanation (En): Gamma diversity represents the overall biodiversity across a large geographic scale encompassing multiple ecosystems.\nस्पष्टीकरण (Hi): एक बड़े भू-क्षेत्र (जिसमें कई पारिस्थितिकी तंत्र शामिल हों) की कुल जैव विविधता को गामा विविधता कहते हैं।"
    },
    {
      qEn: "Where is global biodiversity generally highest on Earth?",
      qHi: "वैश्विक स्तर पर पृथ्वी पर जैव विविधता सामान्यतः सबसे अधिक कहाँ पाई जाती है?",
      optionsEn: ["Tropical rainforests near the equator", "Tundra regions", "Polar ice caps", "Arid deserts"],
      optionsHi: ["भूमध्य रेखा के पास स्थित उष्णकटिबंधीय वर्षा वन", "टुंड्रा क्षेत्र", "ध्रुवीय बर्फ की चादरें", "शुष्क मरुस्थल"],
      answer: 0,
      exp: "Explanation (En): Tropical rainforests support the highest species richness due to warm climate, abundant rainfall, and year-round sunlight.\nस्पष्टीकरण (Hi): अनुकूल जलवायु और प्रचुर वर्षा के कारण भूमध्य रेखा के पास के उष्णकटिबंधीय वर्षा वनों में सबसे अधिक जैव विविधता होती है।"
    },
    {
      qEn: "What are 'biodiversity hotspots'?",
      qHi: "'जैव विविधता हॉटस्पॉट' (Biodiversity hotspots) किसे कहा जाता है?",
      optionsEn: ["Regions with exceptionally high endemism that are facing severe habitat loss", "Hot desert regions", "Industrial pollution zones", "Volcanic craters"],
      optionsHi: ["असाधारण रूप से उच्च स्थानीय प्रजातियों वाले क्षेत्र जो गंभीर आवास विनाश का सामना कर रहे हैं", "गर्म मरुस्थलीय क्षेत्र", "औद्योगिक प्रदूषण क्षेत्र", "ज्वालामुखी क्रेटर"],
      answer: 0,
      exp: "Explanation (En): Coined by Norman Myers, a hotspot must have at least 1,500 endemic vascular plants and have lost 70% of its original habitat.\nस्पष्टीकरण (Hi): हॉटस्पॉट ऐसे भौगोलिक क्षेत्र हैं जहां स्थानीय प्रजातियां बहुत अधिक हैं लेकिन मानवीय गतिविधियों से उन्हें भारी खतरा है।"
    },
    {
      qEn: "How many recognized global biodiversity hotspots are there in the world?",
      qHi: "दुनिया में कुल कितने मान्यता प्राप्त वैश्विक जैव विविधता हॉटस्पॉट हैं?",
      optionsEn: ["36 hotspots", "10 hotspots", "50 hotspots", "100 hotspots"],
      optionsHi: ["36 हॉटस्पॉट", "10 हॉटस्पॉट", "50 हॉटस्पॉट", "100 हॉटस्पॉट"],
      answer: 0,
      exp: "Explanation (En): Conservation International recognizes 36 biodiversity hotspots worldwide that cover a small fraction of Earth's land.\nस्पष्टीकरण (Hi): अंतरराष्ट्रीय संरक्षण संगठनों द्वारा दुनिया भर में कुल 36 जैव विविधता हॉटस्पॉट पहचाने गए हैं।"
    },
    {
      qEn: "Which of the following is recognized as a biodiversity hotspot in India?",
      qHi: "निम्नलिखित में से किसे भारत में जैव विविधता हॉटस्पॉट के रूप में मान्यता प्राप्त है?",
      optionsEn: ["The Western Ghats and the Eastern Himalayas", "The Thar Desert only", "The Indo-Gangetic plains", "The Deccan Plateau center"],
      optionsHi: ["पश्चिमी घाट और पूर्वी हिमालय", "केवल थार मरुस्थल", "सिंधु-गंगा का मैदान", "दक्कन का पठार केंद्र"],
      answer: 0,
      exp: "Explanation (En): India has four biodiversity hotspots, notably the Western Ghats, the Eastern Himalayas, Indo-Burma, and Sundaland.\nस्पष्टीकरण (Hi): भारत में पश्चिमी घाट (Western Ghats) और पूर्वी हिमालय प्रमुख जैव विविधता हॉटस्पॉट क्षेत्रों में आते हैं।"
    },
    {
      qEn: "What is in-situ conservation?",
      qHi: "स्व-स्थान संरक्षण या इन-सीटू कंजर्वेशन (In-situ conservation) क्या है?",
      optionsEn: ["Conservation of species within their natural natural habitat (e.g., national parks, wildlife sanctuaries)", "Conservation in zoos and botanical gardens", "Laboratory DNA freezing", "Seed bank storage"],
      optionsHi: ["प्रजातियों का उनके प्राकृतिक आवास में संरक्षण (जैसे राष्ट्रीय उद्यान, वन्यजीव अभ्यारण्य)", "चिड़ियाघरों और वनस्पतिक उद्यानों में संरक्षण", "प्रयोगशाला डीएनए फ्रीजिंग", "बीज बैंक भंडारण"],
      answer: 0,
      exp: "Explanation (En): In-situ conservation protects species in their natural ecosystems, preserving the whole interacting biological community.\nस्पष्टीकरण (Hi): जब जीवों और पौधों को उनके अपने प्राकृतिक आवास (जैसे नेशनल पार्क, बायोस्फीयर रिजर्व) में संरक्षित किया जाता है, तो उसे इन-सीटू संरक्षण कहते हैं।"
    },
    {
      qEn: "What is ex-situ conservation?",
      qHi: "बाह्य-स्थान संरक्षण या एक्स-सीटू कंजर्वेशन (Ex-situ conservation) क्या है?",
      optionsEn: ["Conservation of endangered species outside their natural habitat (e.g., zoos, botanical gardens, seed banks)", "Protecting animals in deep forests", "National park reserves", "Marine sanctuaries"],
      optionsHi: ["संकटग्रस्त प्रजातियों का उनके प्राकृतिक आवास के बाहर संरक्षण (जैसे चिड़ियाघर, बॉटनिकल गार्डन, सीड बैंक)", "घने जंगलों में जानवरों की रक्षा", "राष्ट्रीय पार्क रिजर्व", "समुद्री अभ्यारण्य सुरक्षा"],
      answer: 0,
      exp: "Explanation (En): Ex-situ conservation involves protecting endangered species outside their natural homes, such as in zoos, gene banks, or botanical gardens.\nस्पष्टीकरण (Hi): जब संकटग्रस्त प्रजातियों को उनके प्राकृतिक घर से बाहर (चिड़ियाघर, बॉटनिकल गार्डन, जीन बैंक) सुरक्षित रखा जाता है, तो उसे एक्स-सीटू संरक्षण कहते हैं।"
    },
    {
      qEn: "Which of the following is an example of in-situ conservation?",
      qHi: "निम्नलिखित में से कौन सा इन-सीटू (स्व-स्थान) संरक्षण का एक उदाहरण है?",
      optionsEn: ["National Park and Biosphere Reserve", "Zoo", "Botanical Garden", "Cryopreservation bank"],
      optionsHi: ["राष्ट्रीय उद्यान और बायोस्फीयर रिजर्व", "चिड़ियाघर (Zoo)", "वनस्पतिक उद्यान (Botanical Garden)", "क्रायोप्रेजर्वेशन बैंक"],
      answer: 0,
      exp: "Explanation (En): National parks, wildlife sanctuaries, and biosphere reserves are classic examples of in-situ conservation.\nस्पष्टीकरण (Hi): नेशनल पार्क और वन्यजीव अभ्यारण्य इन-सीटू संरक्षण के प्रमुख उदाहरण हैं क्योंकि जीव अपने प्राकृतिक माहौल में रहते हैं।"
    },
    {
      qEn: "Which of the following is an example of ex-situ conservation?",
      qHi: "निम्नलिखित में से कौन सा एक्स-सीटू (बाह्य-स्थान) संरक्षण का उदाहरण है?",
      optionsEn: ["Botanical gardens, zoos, and seed banks", "National parks", "Wildlife sanctuaries", "Biosphere reserves"],
      optionsHi: ["वनस्पतिक उद्यान, चिड़ियाघर और बीज बैंक", "राष्ट्रीय उद्यान", "वन्यजीव अभ्यारण्य", "बायोस्फीयर रिजर्व"],
      answer: 0,
      exp: "Explanation (En): Botanical gardens, seed banks, and zoos protect species away from their native habitats, representing ex-situ conservation.\nस्पष्टीकरण (Hi): बोटैनिकल गार्डन, सीड बैंक और जू (Zoo) एक्स-सीटू संरक्षण के अंतर्गत आते हैं।"
    },
    {
      qEn: "What is the IUCN Red List?",
      qHi: "IUCN की 'रेड लिस्ट' (Red List) क्या है?",
      optionsEn: ["A critical inventory of the global conservation status of biological species", "A registry of poisonous plants", "A list of protected national monuments", "Weather hazard records"],
      optionsHi: ["जैविक प्रजातियों की वैश्विक संरक्षण स्थिति की एक महत्वपूर्ण सूची", "विषाक्त पौधों का रजिस्टर", "संरक्षित राष्ट्रीय स्मारकों की सूची", "मौसम आपदा रिकॉर्ड"],
      answer: 0,
      exp: "Explanation (En): The IUCN Red List evaluates and classifies the extinction risk of species into categories like Vulnerable, Endangered, and Critically Endangered.\nस्पष्टीकरण (Hi): IUCN रेड लिस्ट दुनिया भर की प्रजातियों की विलुप्ति के खतरे का मूल्यांकन कर उन्हें संकटग्रस्त श्रेणियों में रखती है।"
    },
    {
      qEn: "What does the term 'Endangered' mean on the IUCN Red List?",
      qHi: "IUCN रेड लिस्ट में 'संकटग्रस्त' (Endangered - EN) श्रेणी का क्या अर्थ है?",
      optionsEn: ["Species facing a very high risk of extinction in the wild", "Species already completely extinct", "Species with safe large populations", "Domesticated farm animals"],
      optionsHi: ["वे प्रजातियां जो जंगली अवस्था में विलुप्त होने के अत्यधिक उच्च जोखिम का सामना कर रही हैं", "पूरी तरह विलुप्त प्रजातियां", "सुरक्षित बड़ी आबादी वाली प्रजातियां", "पालतू कृषि पशु"],
      answer: 0,
      exp: "Explanation (En): An endangered species is categorized as facing a high risk of extinction in the wild due to habitat destruction or poaching.\nस्पष्टीकरण (Hi): एंडेंजर्ड वे प्रजातियां हैं जो प्राकृतिक आवास उजड़ने या शिकार के कारण जंगल से विलुप्त होने की कगार पर हैं।"
    },
    {
      qEn: "What is meant by 'Extinct in the Wild' (EW)?",
      qHi: "'जंगल में विलुप्त' (Extinct in the Wild - EW) का क्या मतलब है?",
      optionsEn: ["Species known to survive only in captivity or as a naturalized population well outside its historic range", "Species completely gone from earth forever", "Species thriving in deep forests", "Domesticated pets"],
      optionsHi: ["वे प्रजातियां जो केवल कैद (captivity) या कृत्रिम संरक्षण में जीवित बची हैं", "पृथ्वी से हमेशा के लिए पूरी तरह समाप्त", "घने जंगलों में पनपते जीव", "पालतू जानवर"],
      answer: 0,
      exp: "Explanation (En): Extinct in the wild means living members of the species exist only in zoos, botanical gardens, or captivity.\nस्पष्टीकरण (Hi): इसका अर्थ है कि वह प्रजाति अपने प्राकृतिक जंगलों में नहीं बची है, केवल चिड़ियाघरों या संरक्षण केंद्रों में जीवित है।"
    },
    {
      qEn: "What is an endemic species?",
      qHi: "स्थानिक प्रजाति या एंडेमिक स्पीशीज (Endemic species) किसे कहते हैं?",
      optionsEn: ["Species restricted to a specific geographic region and found nowhere else on Earth", "Species found all over the globe", "Migratory birds", "Genetically modified species"],
      optionsHi: ["एक विशिष्ट भौगोलिक क्षेत्र तक सीमित प्रजातियां जो दुनिया में कहीं और नहीं मिलतीं", "पूरी दुनिया में मिलने वाली प्रजातियां", "प्रवासी पक्षी", "आनुवंशिक रूप से संशोधित प्रजातियां"],
      answer: 0,
      exp: "Explanation (En): Endemic species are native to a single defined location, making them extremely vulnerable to localized extinction.\nस्पष्टीकरण (Hi): जो जीव या पौधे केवल एक विशेष क्षेत्र या देश में ही पाए जाते हैं और अन्यत्र नहीं, उन्हें स्थानिक प्रजाति कहते हैं।"
    },
    {
      qEn: "What are the primary drivers of biodiversity loss?",
      qHi: "जैव विविधता के ह्रास के प्रमुख कारण क्या हैं?",
      optionsEn: ["Habitat destruction, overexploitation, climate change, pollution, and invasive alien species", "Solar eclipses", "Normal seasonal rainfall", "Volcanic ash deposition"],
      optionsHi: ["आवास विनाश, अति-शोषण, जलवायु परिवर्तन, प्रदूषण और आक्रामक विदेशी प्रजातियां", "सूर्य ग्रहण", "सामान्य मौसमी वर्षा", "ज्वालामुखी राख निक्षेप"],
      answer: 0,
      exp: "Explanation (En): Human activities like deforestation, poaching, pollution, and introducing non-native species drive global biodiversity loss.\nस्पष्टीकरण (Hi): वनों की कटाई, अवैध शिकार, प्रदूषण और बाहरी विदेशी प्रजातियों का आना जैव विविधता के मुख्य दुश्मन हैं।"
    },
    {
      qEn: "What impact do invasive alien species have on native biodiversity?",
      qHi: "आक्रामक विदेशी प्रजातियां (Invasive alien species) मूल जैव विविधता पर क्या प्रभाव डालती हैं?",
      optionsEn: ["They outcompete, prey on, or displace native species, often leading to ecosystem disruption", "They always help native plants grow", "They purify polluted rivers", "They have no ecological effect"],
      optionsHi: ["वे मूल प्रजातियों को पीछे छोड़ देती हैं, उनका शिकार करती हैं या उन्हें विस्थापित करती हैं", "वे हमेशा पौधों को बढ़ने में मदद करती हैं", "वे प्रदूषित नदियां साफ करती हैं", "उनका कोई प्रभाव नहीं पड़ता"],
      answer: 0,
      exp: "Explanation (En): Invasive species lack natural predators in their new environment, allowing them to overrun native flora and fauna.\nस्पष्टीकरण (Hi): विदेशी आक्रामक प्रजातियों का कोई प्राकृतिक शिकारी न होने के कारण वे स्थानीय प्रजातियों को नष्ट कर देती हैं।"
    },
    {
      qEn: "Which international convention signed in 1992 is dedicated to promoting sustainable development and biodiversity conservation?",
      qHi: "1992 में सतत विकास और जैव विविधता संरक्षण के लिए हस्ताक्षरित अंतरराष्ट्रीय संधि कौन सी है?",
      optionsEn: ["Convention on Biological Diversity (CBD)", "Montreal Protocol", "Kyoto Protocol", "Paris Agreement"],
      optionsHi: ["जैव विविधता कन्वेंशन (CBD)", "मॉन्ट्रियल प्रोटोकॉल", "क्योटो प्रोटोकॉल", "पेरिस समझौता"],
      answer: 0,
      exp: "Explanation (En): The CBD, signed at the 1992 Rio Earth Summit, focuses on conserving biodiversity, sustainable use, and fair benefit sharing.\nस्पष्टीकरण (Hi): 1992 के रियो पृथ्वी सम्मेलन में 'कन्वेंशन ऑन बायोलॉजिकल डाइवर्सिटी' (CBD) संधि अपनाई गई थी।"
    },
    {
      qEn: "What is CITES designed to protect?",
      qHi: "CITES संधि किस उद्देश्य से बनाई गई है?",
      optionsEn: ["To regulate international trade in endangered wild animals and plants", "To control global greenhouse gases", "To protect ozone layer", "To stop ocean oil spills"],
      optionsHi: ["संकटग्रस्त जंगली जानवरों और पौधों के अंतरराष्ट्रीय व्यापार को विनियमित करने के लिए", "वैश्विक ग्रीनहाउस गैसों को नियंत्रित करने के लिए", "ओजोन परत की रक्षा के लिए", "समुद्री तेल रिसाव रोकने के लिए"],
      answer: 0,
      exp: "Explanation (En): CITES (Convention on International Trade in Endangered Species) ensures international trade does not threaten species survival.\nस्पष्टीकरण (Hi): CITES संकटग्रस्त वन्यजीवों और पौधों के अवैध अंतरराष्ट्रीय व्यापार पर रोक लगाती है।"
    },
    {
      qEn: "What is the Ramsar Convention primarily concerned with?",
      qHi: "रामसर कन्वेंशन (Ramsar Convention) मुख्य रूप से किससे संबंधित है?",
      optionsEn: ["The conservation and sustainable use of wetlands", "Protection of tropical rainforests", "Regulation of factory air pollution", "Desertification control"],
      optionsHi: ["आर्द्रभूमि (Wetlands) का संरक्षण और उनका संधारणीय उपयोग", "उष्णकटिबंधीय वर्षा वनों की रक्षा", "कारखाना वायु प्रदूषण विनियमन", "मरुस्थलीकरण नियंत्रण"],
      answer: 0,
      exp: "Explanation (En): The Ramsar Convention is an international treaty for the conservation and wise use of wetlands and waterfowl habitats.\nस्पष्टीकरण (Hi): रामसर कन्वेंशन दुनिया भर की महत्वपूर्ण आर्द्रभूमियों (Wetlands) और झीलों के संरक्षण के लिए अंतरराष्ट्रीय संधि है।"
    },
    {
      qEn: "What is sacred grove?",
      qHi: "पवित्र उपवन या 'सेक्रेट ग्रोव' (Sacred grove) क्या होते हैं?",
      optionsEn: ["Forest patches or groves protected by local communities due to religious and cultural beliefs", "Commercial timber plantations", "Government botanical gardens", "Deforested mining zones"],
      optionsHi: ["धार्मिक और सांस्कृतिक मान्यताओं के कारण स्थानीय समुदायों द्वारा संरक्षित वन के टुकड़े", "व्यासायिक लकड़ी के बागान", "सरकारी बॉटनिकल गार्डन", "वनों से कटे खनन क्षेत्र"],
      answer: 0,
      exp: "Explanation (En): Sacred groves are patches of pristine forest protected by indigenous communities, acting as reservoirs of biodiversity.\nस्पष्टीकरण (Hi): स्थानीय धार्मिक मान्यताओं के चलते पूजे और बचाए जाने वाले जंगलों के टुकड़े 'पवित्र उपवन' कहलाते हैं जो जैव विविधता बचाते हैं।"
    },
    {
      qEn: "What is the Red Data Book?",
      qHi: "रेड डेटा बुक (Red Data Book) क्या है?",
      optionsEn: ["A document established by IUCN recording rare and endangered species of plants and animals", "A financial ledger of forest department", "A climate temperature record", "A pollution monitoring log"],
      optionsHi: ["पौधों और जानवरों की दुर्लभ और संकटग्रस्त प्रजातियों को रिकॉर्ड करने वाला IUCN का दस्तावेज", "वन विभाग का वित्तीय खाता", "जलवायु तापमान रिकॉर्ड", "प्रदूषण निगरानी लॉग"],
      answer: 0,
      exp: "Explanation (En): The Red Data Book keeps records of all endangered and threatened species facing possible extinction.\nस्पष्टीकरण (Hi): यह IUCN द्वारा जारी वह किताब है जिसमें दुनिया भर की संकटग्रस्त और विलुप्ति की कगार पर खड़ी प्रजातियों का रिकॉर्ड रहता है।"
    },
    {
      qEn: "What is captive breeding?",
      qHi: "कैप्टिव ब्रीडिंग (Captive breeding) क्या है?",
      optionsEn: ["The process of breeding endangered species in controlled environments like zoos to boost population", "Hunting animals in protected parks", "Natural migration of birds", "Planting trees in forests"],
      optionsHi: ["आबादी बढ़ाने के लिए चिड़ियाघरों जैसे नियंत्रित वातावरण में संकटग्रस्त प्रजातियों का प्रजनन", "संरक्षित पार्कों में शिकार करना", "पक्षियों का प्राकृतिक प्रवास", "जंगलों में पेड़ लगाना"],
      answer: 0,
      exp: "Explanation (En): Captive breeding programs help increase numbers of critically endangered species before reintroducing them to the wild.\nस्पष्टीकरण (Hi): विलुप्त हो रहे जीवों की संख्या बढ़ाने के लिए उन्हें सुरक्षित कैद या जू में कृत्रिम रूप से प्रजनन कराना कैप्टिव ब्रीडिंग है।"
    },
    {
      qEn: "Why is high species richness important for an ecosystem?",
      qHi: "किसी पारिस्थितिकी तंत्र के लिए उच्च प्रजाति समृद्धि (Species richness) क्यों महत्वपूर्ण है?",
      optionsEn: ["It increases ecosystem resilience, stability, and productivity against environmental disturbances", "It makes the ecosystem look colorful", "It increases local temperature", "It stops rainfall"],
      optionsHi: ["यह पर्यावरणीय गड़बड़ियों के खिलाफ पारिस्थितिकी तंत्र की स्थिरता और उत्पादकता को बढ़ाती है", "यह इकोसिस्टम को रंगीन बनाती है", "यह स्थानीय तापमान बढ़ाती है", "यह बारिश रोकती है"],
      answer: 0,
      exp: "Explanation (En): Biodiverse ecosystems are more stable and resilient to diseases, climate shocks, and environmental stress.\nस्पष्टीकरण (Hi): अधिक जैव विविधता वाला तंत्र किसी भी प्राकृतिक आपदा या बीमारी को झेलने में अधिक सक्षम और स्थिर होता है।"
    },
    {
      qEn: "What is genetic drift?",
      qHi: "आनुवंशिक बहाव या जेनेटिक ड्रिफ्ट (Genetic drift) किसे कहते हैं?",
      optionsEn: ["Random fluctuations in the frequency of gene variants in a small population over time", "Deliberate cross-breeding by humans", "Migration of animals across rivers", "Plant transpiration"],
      optionsHi: ["समय के साथ छोटी आबादी में जीन रूपों की आवृत्ति में यादृच्छिक उतार-चढ़ाव", "मनुष्यों द्वारा जानबूझकर क्रॉस-ब्रीडिंग", "नदियों पार जानवरों का प्रवास", "पौधों का वाष्पोत्सर्जन"],
      answer: 0,
      exp: "Explanation (En): Genetic drift is a mechanism of evolution where allele frequencies change due to random sampling events in small populations.\nस्पष्टीकरण (Hi): छोटी आबादी में संयोगवश जीनों की आवृत्ति में होने वाले बदलाव को जेनेटिक ड्रिफ्ट कहते हैं।"
    }
  ],
    "Environmental Pollution": [
    {
      qEn: "What is environmental pollution?",
      qHi: "पर्यावरण प्रदूषण (Environmental pollution) किसे कहते हैं?",
      optionsEn: ["The introduction of harmful contaminants or pollutants into the natural environment that cause adverse changes", "The natural cycling of nutrients in soil", "The growth of green plants in forests", "The normal evaporation of water"],
      optionsHi: ["प्राकृतिक पर्यावरण में हानिकारक संदूषकों या प्रदूषकों का प्रवेश जिससे प्रतिकूल परिवर्तन होते हैं", "मिट्टी में पोषक तत्वों का प्राकृतिक चक्र", "वनों में हरे पौधों की वृद्धि", "पानी का सामान्य वाष्पीकरण"],
      answer: 0,
      exp: "Explanation (En): Pollution occurs when pollutants contaminate natural surroundings, bringing about destabilization, disorder, harm, or discomfort to ecosystems.\nस्पष्टीकरण (Hi): जब पर्यावरण में हानिकारक पदार्थ मिल जाते हैं और जीवों व पारिस्थितिकी तंत्र को नुकसान पहुंचाते हैं, तो उसे प्रदूषण कहते हैं।"
    },
    {
      qEn: "What are primary pollutants?",
      qHi: "प्राथमिक प्रदूषक (Primary pollutants) क्या होते हैं?",
      optionsEn: ["Pollutants emitted directly from a identifiable source into the atmosphere (e.g., SO_2, CO, soot)", "Pollutants formed by chemical reactions in the air", "Harmless organic fertilizers", "Pure rainwater minerals"],
      optionsHi: ["वे प्रदूषक जो सीधे किसी पहचान योग्य स्रोत से वायुमंडल में उत्सर्जित होते हैं (जैसे SO_2, CO, कालिख)", "हवा में रासायनिक प्रतिक्रियाओं से बनने वाले प्रदूषक", "हानिरहित जैविक उर्वरक", "शुद्ध वर्षा जल खनिज"],
      answer: 0,
      exp: "Explanation (En): Primary pollutants are emitted directly from processes such as industrial smokestacks or vehicle exhausts.\nस्पष्टीकरण (Hi): प्राथमिक प्रदूषक सीधे कारखानों की चिमनियों या वाहनों के धुएं से हवा में छोड़े जाते हैं।"
    },
    {
      qEn: "What are secondary pollutants?",
      qHi: "द्वितीयक प्रदूषक (Secondary pollutants) क्या होते हैं?",
      optionsEn: ["Pollutants formed in the atmosphere through chemical reactions between primary pollutants and natural components (e.g., smog, ozone)", "Pollutants emitted directly from cars", "Natural river sediments", "Pure oxygen gas"],
      optionsHi: ["प्राथमिक प्रदूषकों और प्राकृतिक घटकों के बीच रासायनिक प्रतिक्रियाओं से वायुमंडल में बनने वाले प्रदूषक (जैसे स्मॉग, ओजोन)", "कारों से सीधे निकलने वाले प्रदूषक", "प्राकृतिक नदी अवसाद", "शुद्ध ऑक्सीजन गैस"],
      answer: 0,
      exp: "Explanation (En): Secondary pollutants like ground-level ozone and photochemical smog form when primary pollutants react in sunlight.\nस्पष्टीकरण (Hi): जब प्राथमिक प्रदूषक सूर्य के प्रकाश में आपस में प्रतिक्रिया करते हैं, तो द्वितीयक प्रदूषक (जैसे स्मॉग और भू-स्तरीय ओजोन) बनते हैं।"
    },
    {
      qEn: "What is photochemical smog primarily composed of?",
      qHi: "फोटोकेमिकल स्मॉग (Photochemical smog) मुख्य रूप से किससे मिलकर बनता है?",
      optionsEn: ["A mixture of pollutants formed when nitrogen oxides and volatile organic compounds react with sunlight", "Smoke and thick fog near coal fires", "Pure water vapor and dust", "Carbon dioxide and nitrogen"],
      optionsHi: ["नाइट्रोजन ऑक्साइड और वाष्पशील कार्बनिक यौगिकों की सूर्य के प्रकाश के साथ प्रतिक्रिया से बने प्रदूषकों का मिश्रण", "कोयला आग के पास धुआं और गाढ़ा कोहरा", "शुद्ध जल वाष्प और धूल", "कार्बन डाइऑक्साइड और नाइट्रोजन"],
      answer: 0,
      exp: "Explanation (En): Photochemical smog is a brownish haze created by the action of solar UV light on nitrogen oxides and hydrocarbons from vehicle emissions.\nस्पष्टीकरण (Hi): वाहनों के धुएं और धूप की प्रतिक्रिया से बनने वाला भूरा धूंध-कोहरा फोटोकेमिकल स्मॉग कहलाता है।"
    },
    {
      qEn: "What is the primary cause of acid rain?",
      qHi: "अम्लीय वर्षा (Acid rain) का मुख्य कारण क्या है?",
      optionsEn: ["Emissions of sulfur dioxide (SO_2) and nitrogen oxides (NO_x) reacting with atmospheric moisture", "Ozone layer depletion", "Chlorofluorocarbons release", "Carbon monoxide poisoning"],
      optionsHi: ["वायुमंडलीय नमी के साथ प्रतिक्रिया करने वाले सल्फर डाइऑक्साइड और नाइट्रोजन ऑक्साइड का उत्सर्जन", "ओजोन परत का क्षरण", "क्लोरोफ्लोरोकार्बन का निकलना", "कार्बन मोनोऑक्साइड विषाक्तता"],
      answer: 0,
      exp: "Explanation (En): Industrial and vehicular emissions of SO_2 and NO_x dissolve in atmospheric water to form sulfuric and nitric acids.\nस्पष्टीकरण (Hi): कारखानों और वाहनों से निकले SO_2 और NO_x हवा में मिलकर सल्फ्यूरिक और नाइट्रिक अम्ल बनाते हैं, जिससे अम्लीय वर्षा होती है।"
    },
    {
      qEn: "What is the biological oxygen demand (BOD) used to measure in water bodies?",
      qHi: "जलाशयों में 'बायोलॉजिकल ऑक्सीजन डिमांड' (BOD) का उपयोग क्या मापने के लिए किया जाता है?",
      optionsEn: ["The amount of dissolved oxygen needed by aerobic microorganisms to break down organic waste in water", "The total salt content", "Water temperature", "Fish population count"],
      optionsHi: ["पानी में कार्बनिक कचरे को तोड़ने के लिए एरोबिक सूक्ष्मजीवों द्वारा आवश्यक घुली हुई ऑक्सीजन की मात्रा", "कुल नमक सामग्री", "पानी का तापमान", "मछली आबादी की गिनती"],
      answer: 0,
      exp: "Explanation (En): High BOD levels indicate high organic pollution and low dissolved oxygen, threatening aquatic life.\nस्पष्टीकरण (Hi): पानी में जितना अधिक कार्बनिक कचरा होगा, बैक्टीरिया को उसे गलाने के लिए उतनी ही अधिक ऑक्सीजन चाहिए होगी (उच्च BOD = अधिक प्रदूषण)।"
    },
    {
      qEn: "What is eutrophication?",
      qHi: "यूट्रोफिकेशन या सुपोषण (Eutrophication) किसे कहते हैं?",
      optionsEn: ["Nutrient enrichment (nitrates and phosphates) of water bodies leading to rapid algal growth and oxygen depletion", "Purification of wastewater", "Freezing of lakes", "Lowering of ocean salinity"],
      optionsHi: ["पोषक तत्वों (नाइट्रेट और फॉस्फोरस) की अधिकता से जलाशयों में शैवाल की तीव्र वृद्धि और ऑक्सीजन की कमी होना", "अपशिष्ट जल का शुद्धिकरण", "झीलों का जमना", "समुद्री लवणता का कम होना"],
      answer: 0,
      exp: "Explanation (En): Runoff containing fertilizers triggers algal blooms; when algae die, decomposition consumes oxygen, killing aquatic animals.\nस्पष्टीकरण (Hi): खेतों के उर्वरक पानी में जाने से शैवाल (Algal bloom) फैल जाते हैं जो बाद में सड़कर पानी की ऑक्सीजन खत्म कर देते हैं।"
    },
    {
      qEn: "Which heavy metal poisoning caused the infamous 'Minamata disease' in Japan?",
      qHi: "जापान में कुख्यात 'इताइ-इताइ' या 'मिनामाता रोग' किस भारी धातु के प्रदूषण के कारण हुआ था?",
      optionsEn: ["Mercury (पारा)", "Lead", "Cadmium", "Arsenic"],
      optionsHi: ["पारा या मर्करी (Mercury)", "लेड (सीसा)", "कैडमियम", "आर्सेनिक"],
      answer: 0,
      exp: "Explanation (En): Minamata disease was caused by the ingestion of fish contaminated with methylmercury industrial discharge in Japan.\nस्पष्टीकरण (Hi): जापान के मिनामाता खाड़ी में कारखाने के पारे (Mercury) से दूषित मछली खाने से यह गंभीर तंत्रिका रोग हुआ था।"
    },
    {
      qEn: "What health disorder is caused by chronic exposure to cadmium poisoning?",
      qHi: "कैडमियम विषाक्तता के दीर्घकालिक संपर्क से कौन सा दर्दनाक स्वास्थ्य विकार होता है?",
      optionsEn: ["Itai-itai disease ('ouch-ouch' disease)", "Minamata disease", "Blue baby syndrome", "Fluorosis"],
      optionsHi: ["इताइ-इताइ रोग ('आउच-आउच' रोग)", "मिनामाता रोग", "ब्लू बेबी सिंड्रोम", "फ्लोरोसिस"],
      answer: 0,
      exp: "Explanation (En): Itai-itai disease in Japan resulted from cadmium poisoning, causing severe bone softening and joint pain.\nस्पष्टीकरण (Hi): कैडमियम प्रदूषण से हड्डियों में भयंकर दर्द और उनके कमजोर होने की बीमारी 'इताइ-इताइ' होती है।"
    },
    {
      qEn: "What condition known as 'Blue Baby Syndrome' (Methemoglobinemia) is caused by excess of which contaminant in drinking water?",
      qHi: "पीने के पानी में किस संदूषक की अधिकता के कारण 'ब्लू बेबी सिंड्रोम' (Methemoglobinemia) होता है?",
      optionsEn: ["Nitrates", "Fluoride", "Arsenic", "Lead"],
      optionsHi: ["नाइट्रेट्स (Nitrates)", "फ्लोराइड", "आर्सेनिक", "लेड"],
      answer: 0,
      exp: "Explanation (En): High nitrate levels in drinking water react with hemoglobin, reducing blood oxygen capacity and turning infants blue.\nस्पष्टीकरण (Hi): पीने के पानी में नाइट्रेट की मात्रा अधिक होने पर शिशुओं में रक्त की ऑक्सीजन क्षमता घट जाती है जिससे शरीर नीला पड़ने लगता है।"
    },
    {
      qEn: "What health problem is caused by excessive fluoride in drinking water?",
      qHi: "पीने کے पानी में अत्यधिक फ्लोराइड होने से कौन सी स्वास्थ्य समस्या होती है?",
      optionsEn: ["Fluorosis (dental and skeletal fluorosis)", "Minamata disease", "Itai-itai", "Cholera"],
      optionsHi: ["फ्लोरोसिस (दांतों और हड्डियों का फ्लोरोसिस)", "मिनामाता रोग", "इताइ-इताइ", "हैजा"],
      answer: 0,
      exp: "Explanation (En): High fluoride concentrations in groundwater cause dental mottling and crippling skeletal fluorosis.\nस्पष्टीकरण (Hi): भूजल में फ्लोराइड की अधिकता से दांत पीले पड़ने और हड्डियां टेढ़ी होने की बीमारी (फ्लोरोसिस) होती है।"
    },
    {
      qEn: "What is biomagnification (biological magnification)?",
      qHi: "बायोमैग्निफिकेशन (जैविक आवर्धन) क्या है?",
      optionsEn: ["The concentration of persistent toxins increasing at each successive trophic level of a food chain", "Increase in plant height", "Decomposition of garbage", "Air purification by trees"],
      optionsHi: ["खाद्य श्रृंखला के प्रत्येक क्रमिक पोषण स्तर पर विषैले पदार्थों की सांद्रता का बढ़ना", "पौधे की ऊंचाई में वृद्धि", "कचरे का अपघटन", "पेड़ों द्वारा वायु शुद्धिकरण"],
      answer: 0,
      exp: "Explanation (En): Toxins like DDT or heavy metals multiply in concentration as predators consume contaminated prey up the food chain.\nस्पष्टीकरण (Hi): खाद्य श्रृंखला में ऊपर की ओर जाने पर डी.डी.टी. या पारे जैसे अजैविक जहरों की मात्रा हर स्तर पर बढ़ती जाती है।"
    },
    {
      qEn: "What is bioaccumulation?",
      qHi: "जैव संचयन या बायोअक्यूमुलेशन (Bioaccumulation) किसे कहते हैं?",
      optionsEn: ["The accumulation of substances, such as toxins, in an organism over the course of its lifetime", "Accumulation of plastic in oceans", "Soil erosion", "Groundwater recharging"],
      optionsHi: ["किसी जीव के पूरे जीवनकाल में उसके शरीर के अंदर विषैلے पदार्थों का संचित होते जाना", "समुद्र में प्लास्टिक का जमाव", "मिट्टी का कटाव", "भूजल पुनर्भरण"],
      answer: 0,
      exp: "Explanation (En): Bioaccumulation refers to how pollutants build up in an individual organism over time from its environment and diet.\nस्पष्टीकरण (Hi): जब कोई जीव अपने जीवनकाल में पानी या भोजन के जरिए लगातार प्रदूषक अपने शरीर में जमा करता रहता है, तो उसे बायोअक्यूमुलेशन कहते हैं।"
    },
    {
      qEn: "What are Chlorofluorocarbons (CFCs) primarily responsible for?",
      qHi: "क्लोरोफ्लोरोकार्बन (CFCs) मुख्य रूप से किसके लिए जिम्मेदार हैं?",
      optionsEn: ["Ozone layer depletion in the stratosphere", "Water eutrophication", "Soil salinity", "Ocean tides"],
      optionsHi: ["समताप मंडल में ओजोन परत का क्षरण", "जल यूट्रोफिकेशन", "मिट्टी की लवणता", "समुद्री ज्वार"],
      answer: 0,
      exp: "Explanation (En): CFCs release chlorine atoms under UV light, which actively break down ozone (O_3) molecules in the stratosphere.\nस्पष्टीकरण (Hi): रेफ्रिजरेटर और एसी से निकलने वाली CFC गैसें समताप मंडल में पहुंचकर ओजोन परत को नष्ट करती हैं।"
    },
    {
      qEn: "Which international agreement was established in 1987 to phase out ozone-depleting substances?",
      qHi: "ओजोन क्षरणकारी पदार्थों को समाप्त करने के लिए 1987 में कौन सी अंतरराष्ट्रीय संधि हुई थी?",
      optionsEn: ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Ramsar Convention"],
      optionsHi: ["मॉन्ट्रियल प्रोटोकॉल (Montreal Protocol)", "क्योटो प्रोटोकॉल", "पेरिस समझौता", "रामसर कन्वेंशन"],
      answer: 0,
      exp: "Explanation (En): The Montreal Protocol is a landmark international treaty successfully phasing out the production of CFCs and ozone-depleting chemicals.\nस्पष्टीकरण (Hi): ओजोन परत बचाने के लिए 1987 में मॉन्ट्रियल प्रोटोकॉल पर हस्ताक्षर किए गए थे, जो बहुत सफल रहा।"
    },
    {
      qEn: "What is particulate matter (PM_{2.5}) in air pollution?",
      qHi: "वायु प्रदूषण में 'पार्टिकुलेट मैटर' (PM_{2.5}) से क्या तात्पर्य है?",
      optionsEn: ["Fine airborne solid or liquid particles with a diameter of 2.5 micrometers or less that can penetrate deep into lungs", "Large dust particles on road", "Water droplets in clouds", "Pollen grains"],
      optionsHi: ["2.5 माइक्रोमीटर या उससे कम व्यास के महीन हवा में तैरते ठोस या तरल कण जो फेफड़ों में गहराई तक जा सकते हैं", "सड़क पर बड़े धूल कण", "बादलों में पानी की बूंदें", "परागण"],
      answer: 0,
      exp: "Explanation (En): PM_{2.5} particles are extremely small and dangerous because they bypass upper respiratory defenses and enter the bloodstream.\nस्पष्टीकरण (Hi): PM_{2.5} बेहद सूक्ष्म कण होते हैं जो सांस के जरिए फेफड़ों और रक्त तक पहुंचकर गंभीर स्वास्थ्य समस्याएं पैदा करते हैं।"
    },
    {
      qEn: "What is noise pollution measured in?",
      qHi: "ध्वनि प्रदूषण (Noise pollution) को किस इकाई में मापा जाता है?",
      optionsEn: ["Decibels (dB)", "Pascal", "Hertz", "Dobson units"],
      optionsHi: ["डेसीबल (Decibels - dB)", "पास्कल", "हर्ट्ज", "डॉब्सन यूनिट"],
      answer: 0,
      exp: "Explanation (En): Sound intensity and noise pollution levels are quantified using the decibel (dB) scale.\nस्पष्टीकरण (Hi): शोर या ध्वनि प्रदूषण की तीव्रता मापने की मानक इकाई डेसीबल (dB) है।"
    },
    {
      qEn: "What is considered a safe or acceptable noise level for residential areas during daytime according to WHO standards?",
      qHi: "डब्ल्यूएचओ (WHO) मानकों के अनुसार दिन के समय आवासीय क्षेत्रों के लिए सुरक्षित या स्वीकार्य शोर स्तर कितना माना जाता है?",
      optionsEn: ["Up to 55 decibels (dB)", "90 decibels", "120 decibels", "30 decibels"],
      optionsHi: ["55 डेसीबल (dB) तक", "90 डेसीबल", "120 डेसीबल", "30 डेसीबल"],
      answer: 0,
      exp: "Explanation (En): WHO guidelines recommend outdoor residential noise levels remain below 55 dB during the day to prevent health impacts.\nस्पष्टीकरण (Hi): विश्व स्वास्थ्य संगठन के अनुसार दिन में आवासीय इलाकों में शोर 55 dB से अधिक नहीं होना चाहिए।"
    },
    {
      qEn: "What is thermal pollution in aquatic ecosystems?",
      qHi: "जलीय पारिस्थितिकी तंत्र में 'तापीय प्रदूषण' (Thermal pollution) क्या है?",
      optionsEn: ["The degradation of water quality by any process that changes ambient water temperature (e.g., factory cooling water discharge)", "Freezing of river water", "Natural summer sun heating", "Acid rain runoff"],
      optionsHi: ["पानी के सामान्य तापमान को बदलने वाली किसी भी प्रक्रिया से जल गुणवत्ता का गिरना (जैसे कारखानों के गर्म पानी का निकास)", "नदी के पानी का जमना", "प्राकृतिक ग्रीष्मकालीन सूर्य ताप", "अम्लीय वर्षा का बहाव"],
      answer: 0,
      exp: "Explanation (En): Discharging warm industrial wastewater into rivers reduces dissolved oxygen levels, stressing or killing aquatic organisms.\nस्पष्टीकरण (Hi): उद्योगों का गर्म पानी सीधे नदियों में छोड़ने से पानी का तापमान बढ़ जाता है और घुली हुई ऑक्सीजन घट जाती है।"
    },
    {
      qEn: "What is soil pollution primarily caused by?",
      qHi: "मदा प्रदूषण (Soil pollution) मुख्य रूप से किसके कारण होता है?",
      optionsEn: ["Excessive use of chemical fertilizers, pesticides, industrial waste dumping, and plastics", "Planting too many trees", "Normal organic composting", "Rainwater infiltration"],
      optionsHi: ["रासायनिक उर्वरकों, कीटनाशकों, औद्योगिक कचरे और प्लास्टिक का अत्यधिक उपयोग", "बहुत अधिक पेड़ लगाना", "सामान्य जैविक खाद बनाना", "वर्षा जल का रिसना"],
      answer: 0,
      exp: "Explanation (En): Soil contamination results from agrochemicals, toxic industrial effluents, heavy metals, and non-biodegradable solid waste.\nस्पष्टीकरण (Hi): कृषि में अत्यधिक रासायनिक खाद, कीटनाशक और प्लास्टिक का कचरा मिट्टी की उर्वरता को नष्ट कर मृदा प्रदूषण फैलाते हैं।"
    },
    {
      qEn: "What is radioactive pollution?",
      qHi: "रेडियोधर्मी प्रदूषण (Radioactive pollution) का मुख्य स्रोत क्या है?",
      optionsEn: ["Contamination by radioactive substances from nuclear power plants, weapons testing, and medical waste", "Normal sunlight radiation", "Household LED lights", "Wind turbine sound"],
      optionsHi: ["परमाणु ऊर्जा संयंत्रों, हथियारों के परीक्षण और चिकित्सा कचरे से रेडियोधर्मी पदार्थों का संदूषण", "सामान्य सूर्य का विकिरण", "घरेलू एलईडी लाइट", "पवन टरबाइन की आवाज"],
      answer: 0,
      exp: "Explanation (En): Radioactive pollution releases ionizing radiation that causes genetic mutations, cancer, and cellular destruction.\nस्पष्टीकरण (Hi): परमाणु संयंत्रों और रेडियोधर्मी कचरे से निकलने वाली आयनीकरण विकिरणें कोशिकाओं को नष्ट करती हैं और कैंसर का कारण बनती हैं।"
    },
    {
      qEn: "What was the catastrophic industrial accident involving methyl isocyanate (MIC) gas leakage in India?",
      qHi: "भारत में मिथाइल आइसोसाइनेट (MIC) गैस के रिसाव से जुड़ा कौन सा भीषण औद्योगिक हादसा हुआ था?",
      optionsEn: ["Bhopal disaster (1984)", "Chernobyl accident", "Fukushima disaster", "London smog disaster"],
      optionsHi: ["भोपाल गैस त्रासदी (1984)", "चेरनोबिल दुर्घटना", "फुकुशिमा आपदा", "लंदन स्मॉग आपदा"],
      answer: 0,
      exp: "Explanation (En): The 1984 Bhopal disaster involved a lethal leak of MIC gas from the Union Carbide pesticide plant, causing thousands of deaths.\nस्पष्टीकरण (Hi): 1984 की भोपाल गैस त्रासदी यूनियन कार्बाइड कारखाने से एमआईसी गैस के रिसाव के कारण हुई दुनिया की सबसे बड़ी औद्योगिक आपदा थी।"
    },
    {
      qEn: "What is indoor air pollution commonly caused by in developing countries?",
      qHi:"वंशी विकासशील देशों में इनडोर (घरेलू) वायु प्रदूषण का मुख्य कारण क्या है?",
      optionsEn: ["Burning of biomass fuels (wood, dung, crop residues) in poorly ventilated stoves", "Using electric induction cooktops", "Air conditioning filters", "Solar panels"],
      optionsHi: ["खराब हवादार चूल्हों में बायोमास ईंधन (लकड़ी, गोबर, फसल अवशेष) का जलना", "इलेक्ट्रिक इंडक्शन कुकटॉप का उपयोग", "एयर कंडीशनर फिल्टर", "सोलर पैनल"],
      answer: 0,
      exp: "Explanation (En): Burning traditional solid fuels indoors without proper chimneys creates severe smoke and toxic pollutants affecting women and children.\nस्पष्टीकरण (Hi): घरों के अंदर बिना चिमनी के लकड़ी और गोबर के उपले जलाने से निकलने वाला धुआं गंभीर इनडोर प्रदूषण पैदा करता है।"
    },
    {
      qEn: "What are persistent organic pollutants (POPs)?",
      qHi: "स्थायी कार्बनिक प्रदूषक या पीओपी (POPs) क्या होते हैं?",
      optionsEn: ["Toxic chemicals that persist in the environment, bioaccumulate through food webs, and pose risk to human health", "Biodegradable kitchen waste", "Natural tree sap", "Pure rainwater minerals"],
      optionsHi: ["वे विषैلے रसायन जो पर्यावरण में लंबे समय तक बने रहते हैं और खाद्य श्रृंखला में संचित होते हैं", "बायोडिग्रेडेबल रसोई का कचरा", "प्राकृतिक पेड़ का रस", "शुद्ध वर्षा जल खनिज"],
      answer: 0,
      exp: "Explanation (En): POPs (like DDT and dioxins) resist chemical, biological, and photolytic degradation, traveling long distances globally.\nस्पष्टीकरण (Hi): पीओपी ऐसे रसायन हैं जो आसानी से नष्ट नहीं होते और पर्यावरण व जीवों के शरीर में बरसों तक टिके रहकर जहर फैलाते हैं।"
    },
    {
      qEn: "What is plastic pollution in oceans primarily causing?",
      qHi: "महासागरों में प्लास्टिक प्रदूषण मुख्य रूप से क्या कारण बन रहा है?",
      optionsEn: ["Ingestion and entanglement of marine wildlife, and creation of microplastics in food chains", "Increased oxygen production", "Purification of seawater", "Growth of coral reefs"],
      optionsHi: ["समुद्री जीवों द्वारा प्लास्टिक खाना और उनमें उलझना, तथा खाद्य श्रृंखला में माइक्रोप्लास्टिक का पहुँचना", "ऑक्सीजन उत्पादन में वृद्धि", "समुद्री पानी का शुद्धिकरण", "प्रवाल भित्तियों की वृद्धि"],
      answer: 0,
      exp: "Explanation (En): Discarded plastics break down into microplastics that infiltrate marine ecosystems, consumed by fish and entering human diets.\nस्पष्टीकरण (Hi): समुद्रों में फेंका गया प्लास्टिक छोटे-छोटे माइक्रोप्लास्टिक में टूटकर मछलियों और जलीय जीवों के जरिए हमारे भोजन तक पहुंच रहा है।"
    },
    {
      qEn: "What is secondary wastewater treatment primarily focused on?",
      qHi: "अपशिष्ट जल के द्वितीयक उपचार (Secondary wastewater treatment) का मुख्य फोकस किस पर होता है?",
      optionsEn: ["Biological degradation of dissolved organic matter using microorganisms", "Filtering out large plastic bottles", "Adding table salt", "Removing heavy metals chemically"],
      optionsHi: ["सूक्ष्मजीवों का उपयोग करके घुले हुए कार्बनिक पदार्थों का जैविक अपघटन", "बड़ी प्लास्टिक की बोतलें छानना", "नमक मिलाना", "रासायनिक रूप से भारी धातुएं हटाना"],
      answer: 0,
      exp: "Explanation (En): Secondary sewage treatment utilizes aerobic bacteria in activated sludge tanks to break down dissolved organic pollutants.\nस्पष्टीकरण (Hi): सीवेज ट्रीटमेंट के दूसरे चरण में बैक्टीरिया की मदद से पानी में घुले हुए कार्बनिक कचरे को जैविक रूप से साफ किया जाता है।"
    },
    {
      qEn: "What is an electrostatic precipitator used for in industries?",
      qHi: "उद्योगों में 'इलेक्ट्रोस्टेटिक प्रेसिपिटेटर' (Electrostatic precipitator) का उपयोग किस लिए किया जाता है?",
      optionsEn: ["To remove fine dust, ash, and particulate matter from industrial exhaust gases before release", "To cool hot water", "To purify drinking water", "To measure noise"],
      optionsHi: ["औद्योगिक निकास गैसों से बाहर छोड़ने से पहले महीन धूल, राख और कणों को हटाने के लिए", "गर्म पानी ठंडा करने के लिए", "पीने का पानी शुद्ध करने के लिए", "शोर मापने के लिए"],
      answer: 0,
      exp: "Explanation (En): Electrostatic precipitators use electrical charges to trap over 99% of particulate pollution from factory smokestacks.\nस्पष्टीकरण (Hi): यह उपकरण कारखानों की चिमनियों से निकलने वाले धुएं से धूल और राख के कणों को बिजली के आवेश से खींचकर हवा में मिलने से रोकता है।"
    },
    {
      qEn: "What are catalytic converters installed in automobiles designed to reduce?",
      qHi: "ऑटोमोबाइल में लगाए जाने वाले 'कैटलिटिक कन्वर्टर' किसे कम करने के लिए डिज़ाइन किए जाते हैं?",
      optionsEn: ["Harmful exhaust emissions like carbon monoxide, nitrogen oxides, and unburned hydrocarbons", "Engine fuel consumption", "Car tire friction", "Radiator heat"],
      optionsHi: ["कार्बन मोनोऑक्साइड, नाइट्रोजन ऑक्साइड और बिना जले हाइड्रोकार्बन जैसे हानिकारक निकास उत्सर्जन", "इंजन ईंधन की खपत", "कार टायर घर्षण", "रेडिएटर गर्मी"],
      answer: 0,
      exp: "Explanation (En): Catalytic converters use precious metal catalysts to transform toxic vehicle gases into less harmful carbon dioxide, nitrogen, and water vapor.\nस्पष्टीकरण (Hi): यह वाहन के साइलेंसर में लगकर जहरीली गैसों (CO और NOx) को कम हानिकारक गैसों में बदल देता है।"
    },
    {
      qEn: "What is the concept of 'Zero Waste' aiming to achieve?",
      qHi: "'जीरो वेस्ट' (Zero Waste) की अवधारणा का मुख्य उद्देश्य क्या प्राप्त करना है?",
      optionsEn: ["Redesigning resource life cycles so that all products are reused and nothing is sent to landfills or incinerators", "Burning all trash daily", "Burying plastic deep underground", "Stopping industrial production completely"],
      optionsHi: ["संसाधनों के जीवन चक्र को फिर से डिजाइन करना ताकि सभी उत्पादों का पुनरुपयोग हो और लैंडफिल में कुछ न जाए", "रोज सारा कचरा जलाना", "प्लास्टिक जमीन में गहरा दबाना", "औद्योगिक उत्पादन पूरी तरह रोकना"],
      answer: 0,
      exp: "Explanation (En): Zero waste is a philosophy encouraging the redesign of resource use so zero trash is sent to landfills, oceans, or incinerators.\nस्पष्टीकरण (Hi): जीरो वेस्ट का मतलब कचरे को इस तरह मैनेज करना है कि कचरा लैंडफिल या जलाने के लिए कहीं न जाए, बल्कि सब रीसायकल हो।"
    },
    {
      qEn: "What is bioremediation?",
      qHi: "बायोरेमेडिएशन (Bioremediation) किसे कहते हैं?",
      optionsEn: ["The use of microorganisms (bacteria/plants) to detoxify or remove pollutants from contaminated environments", "Cleaning plastic with bleach", "Treating sewage with chlorine", "Filtering air with fans"],
      optionsHi: ["दूषित वातावरण से प्रदूषकों को बेअसर करने या हटाने के लिए सूक्ष्मजीवों (बैक्टीरिया/पौधों) का उपयोग", "ब्लीच से प्लास्टिक साफ करना", "क्लोरीन से सीवेज उपचार", "पंखों से हवा छानना"],
      answer: 0,
      exp: "Explanation (En): Bioremediation leverages natural bacteria or engineered microbes to clean up oil spills, heavy metals, and toxic waste safely.\nस्पष्टीकरण (Hi): तेल रिसाव या जहरीले कचरे को साफ करने के लिए प्राकृतिक बैक्टीरिया या पौधों का उपयोग करना बायोरेमेडिएशन कहलाता है।"
    }
  ],
    "Climate Change": [
    {
      qEn: "What is climate change?",
      qHi: "जलवायु परिवर्तन (Climate change) किसे कहते हैं?",
      optionsEn: ["Long-term shifts in global or regional climate patterns, particularly changes identified since the mid-20th century linked to human activities", "Daily changes in local weather and rainfall", "A sudden thunderstorm overnight", "Seasonal winter temperature drops"],
      optionsHi: ["वैश्विक या क्षेत्रीय जलवायु पैटर्नों में दीर्घकालिक बदलाव, विशेष रूप से मानवीय गतिविधियों से जुड़े 20वीं सदी के मध्य के परिवर्तन", "स्थानीय मौसम और बारिश में दैनिक बदलाव", "रातों-रात अचानक आंधी-तूफान आना", "मौसमी सर्दियों के तापमान में गिरावट"],
      answer: 0,
      exp: "Explanation (En): Climate change refers to significant, long-term changes in global temperatures and weather patterns, largely driven by greenhouse gas emissions.\nस्पष्टीकरण (Hi): जलवायु परिवर्तन का तात्पर्य वैश्विक तापमान और मौसम के दीर्घकालिक बदलावों से है, जो मुख्य रूप से ग्रीनहाउस गैसों के बढ़ने से हो रहा है।"
    },
    {
      qEn: "What is the primary greenhouse gas driving anthropogenic global warming?",
      qHi: "मानव-प्रेरित ग्लोबल वार्मिंग (Global warming) के लिए मुख्य रूप से कौन सी ग्रीनहाउस गैस जिम्मेदार है?",
      optionsEn: ["Carbon dioxide (CO_2)", "Oxygen (O_2)", "Nitrogen (N_2)", "Argon (Ar)"],
      optionsHi: ["कार्बन डाइऑक्साइड (CO_2)", "ऑक्सीजन", "नाइट्रोजन", "ऑर्गन"],
      answer: 0,
      exp: "Explanation (En): Carbon dioxide released from burning fossil fuels is the single largest contributor to human-induced global warming.\nस्पष्टीकरण (Hi): जीवाश्म ईंधन के जलने से निकलने वाली कार्बन डाइऑक्साइड ग्लोबल वार्मिंग का सबसे बड़ा कारण है।"
    },
    {
      qEn: "What is the greenhouse effect?",
      qHi: "ग्रीनहाउस प्रभाव (Greenhouse effect) क्या है?",
      optionsEn: ["The process by which certain gases in Earth's atmosphere trap infrared heat radiated from the surface, keeping the planet warm", "The burning of greenhouse plants", "Solar panels absorbing sun rays", "Ozone layer cooling"],
      optionsHi: ["पृथ्वी के वायुमंडल में कुछ गैसों द्वारा सतह से निकलने वाली अवरक्त ऊष्मा को रोककर ग्रह को गर्म रखना", "ग्रीनहाउस पौधों का जलना", "सौर पैनलों द्वारा सूर्य की किरणें सोखना", "ओजोन परत का ठंडा होना"],
      answer: 0,
      exp: "Explanation (En): Greenhouse gases absorb outgoing terrestrial radiation and re-emit it in all directions, warming the lower atmosphere.\nस्पष्टीकरण (Hi): वायुमंडल की गैसें पृथ्वी से परावर्तित होने वाली गर्मी को रोक लेती हैं जिससे पृथ्वी का तापमान जीवन के अनुकूल बना रहता है।"
    },
    {
      qEn: "Which of the following is considered a potent greenhouse gas with a much higher warming potential than carbon dioxide over a 20-year timescale?",
      qHi: "20 साल के समय के पैमाने पर कार्बन डाइऑक्साइड की तुलना में बहुत अधिक वार्मिंग क्षमता वाली शक्तिशाली ग्रीनहाउस गैस कौन सी है?",
      optionsEn: ["Methane (CH_4)", "Nitrogen gas", "Oxygen gas", "Argon"],
      optionsHi: ["मीथेन (CH_4)", "नाइट्रोजन गैस", "ऑक्सीजन गैस", "ऑर्गन"],
      answer: 0,
      exp: "Explanation (En): Methane has a significantly higher global warming potential than CO_2 in the short term, coming from agriculture, livestock, and landfills.\nस्पष्टीकरण (Hi): कृषि, पशुधन और लैंडफिल से निकलने वाली मीथेन गैस कम समय में CO_2 से कई गुना अधिक गर्मी रोकती है।"
    },
    {
      qEn: "What international treaty adopted in 2015 aims to limit global temperature rise to well below 2°C above pre-industrial levels?",
      qHi: "2015 में अपनाई गई कौन सी अंतरराष्ट्रीय संधि का उद्देश्य वैश्विक तापमान वृद्धि को पूर्व-औद्योगिक स्तर से 2°C से काफी नीचे रखना है?",
      optionsEn: ["Paris Agreement", "Kyoto Protocol", "Montreal Protocol", "Ramsar Convention"],
      optionsHi: ["पेरिस समझौता (Paris Agreement)", "क्योटो प्रोटोकॉल", "मॉन्ट्रियल प्रोटोकॉल", "रामसर कन्वेंशन"],
      answer: 0,
      exp: "Explanation (En): The Paris Agreement is a legally binding international treaty on climate change adopted during COP21 in Paris.\nस्पष्टीकरण (Hi): पेरिस समझौता जलवायु परिवर्तन पर एक ऐतिहासिक वैश्विक संधि है जिसका लक्ष्य तापमान वृद्धि को 1.5°C से 2°C के भीतर रोकना है।"
    },
    {
      qEn: "What was the Kyoto Protocol (1997) designed to achieve?",
      qHi: "क्योटो प्रोटोकॉल (1997) का मुख्य उद्देश्य क्या था?",
      optionsEn: ["To commit industrialized nations to legally binding targets for reducing greenhouse gas emissions", "To ban plastic bags globally", "To protect marine coral reefs", "To stop ozone depletion"],
      optionsHi: ["औद्योगिक देशों को ग्रीनहाउस गैस उत्सर्जन कम करने के लिए कानूनी रूप से बाध्यकारी लक्ष्य देना", "वैश्विक स्तर पर प्लास्टिक बैग प्रतिबंधित करना", "समुद्री प्रवाल भित्तियों की रक्षा करना", "ओजोन क्षरण रोकना"],
      answer: 0,
      exp: "Explanation (En): The Kyoto Protocol operationalized the UNFCCC by committing developed countries to individual emission reduction targets.\nस्पष्टीकरण (Hi): क्योटो प्रोटोकॉल ने विकसित देशों के लिए ग्रीनहाउस गैसों के उत्सर्जन को कम करने के कानूनी लक्ष्य तय किए थे।"
    },
    {
      qEn: "What is the Intergovernmental Panel on Climate Change (IPCC)?",
      qHi: "इंटरगवर्नमेंटल पैनल ऑन क्लाइमेट चेंज (IPCC) क्या है?",
      optionsEn: ["The United Nations body for assessing the science related to climate change", "An international oil trading company", "A global weather forecasting channel", "A wildlife protection NGO"],
      optionsHi: ["जलवायु परिवर्तन से संबंधित विज्ञान का आकलन करने वाली संयुक्त राष्ट्र की संस्था", "एक अंतरराष्ट्रीय तेल व्यापार कंपनी", "एक वैश्विक मौसम पूर्वानुमान चैनल", "एक वन्यजीव संरक्षण एनजीओ"],
      answer: 0,
      exp: "Explanation (En): The IPCC provides regular scientific assessments on climate change, its implications, and risks, guiding global policy.\nस्पष्टीकरण (Hi): IPCC जलवायु परिवर्तन और उसके प्रभावों पर वैज्ञानिक आकलन रिपोर्ट जारी करने वाली संयुक्त राष्ट्र की शीर्ष संस्था है।"
    },
    {
      qEn: "What are fossil fuels?",
      qHi: "जीवाश्म ईंधन (Fossil fuels) किसे कहते हैं?",
      optionsEn: ["Hydrocarbon-based fuels like coal, oil, and natural gas formed from the remains of ancient organisms", "Fuels made from fresh green plants today", "Wind and solar energy", "Hydrogen fuel cells"],
      optionsHi: ["प्राचीन जीवों के अवशेषों से बने हाइड्रोकार्बन आधारित ईंधन जैसे कोयला, तेल और प्राकृतिक गैस", "आज के ताजे हरे पौधों से बने ईंधन", "पवन और सौर ऊर्जा", "हाइड्रोजन ईंधन सेल"],
      answer: 0,
      exp: "Explanation (En): Fossil fuels are formed over millions of years from buried organic matter, releasing massive CO_2 when burned.\nस्पष्टीकरण (Hi): कोयला, पेट्रोलियम और प्राकृतिक गैस जैसे जीवाश्म ईंधन करोड़ों साल पुराने जीवों के अवशेषों से बनते हैं जिनके जलने से CO_2 निकलती है।"
    },
    {
      qEn: "What is sea level rise primarily driven by in the context of climate change?",
      qHi: "जलवायु परिवर्तन के संदर्भ में समुद्र के स्तर में वृद्धि (Sea level rise) मुख्य रूप से किसके कारण हो रही है?",
      optionsEn: ["Thermal expansion of warming ocean water and melting of land glaciers and ice sheets", "Heavy rainfall on land", "Increased river flow into oceans", "Underwater volcanic eruptions"],
      optionsHi: ["गर्म होते समुद्री पानी के थर्मल विस्तार और भूमि के ग्लेशियरों व बर्फ की चादरों का पिघलना", "जमीन पर भारी वर्षा", "महासागरों में नदियों के प्रवाह में वृद्धि", "पानी के नीचे ज्वालामुखी उद्गार"],
      answer: 0,
      exp: "Explanation (En): Global sea level rise is driven by water expanding as it warms, plus melting ice sheets from Greenland and Antarctica.\nस्पष्टीकरण (Hi): समुद्र का पानी गर्म होने पर फैलने (Thermal expansion) और ध्रुवीय ग्लेशियरों के पिघलने से समुद्र का जलस्तर बढ़ रहा है।"
    },
    {
      qEn: "What is ocean acidification?",
      qHi: "महासागरीय अम्लीकरण (Ocean acidification) क्या है?",
      optionsEn: ["The ongoing decrease in the pH of Earth's oceans, caused by the uptake of anthropogenic carbon dioxide from the atmosphere", "The increase of ocean saltiness", "The warming of surface sea water", "Algal bloom contamination"],
      optionsHi: ["वायुमंडल से मानव-जनित कार्बन डाइऑक्साइड के अवशोषण के कारण महासागरों के pH में लगातार गिरावट", "समुद्र के खारेपन में वृद्धि", "सतही समुद्र के पानी का गर्म होना", "शैवाल प्रस्फुटन संदूषण"],
      answer: 0,
      exp: "Explanation (En): Oceans absorb about 30% of emitted CO_2, forming carbonic acid which lowers pH and harms shellfish and corals.\nस्पष्टीकरण (Hi): महासागर वायुमंडल से अतिरिक्त CO_2 सोख लेते हैं जिससे पानी में कार्बोनिक अम्ल बनता है और समुद्र का pH घटने (अम्लीय होने) लगता है।"
    },
    {
      qEn: "What is albedo in climate science?",
      qHi: "जलवायु विज्ञान में 'अल्बेडो' (Albedo) से क्या तात्पर्य है?",
      optionsEn: ["The measure of the diffuse reflection of solar radiation out of the total solar radiation received by a surface", "The heat absorption of dark soil", "The speed of global winds", "Atmospheric humidity level"],
      optionsHi: ["किसी सतह द्वारा प्राप्त कुल सौर विकिरण में से परावर्तित होने वाली सौर विकिरण का माप", "काली मिट्टी द्वारा ऊष्मा का अवशोषण", "वैश्विक हवाओं की गति", "वायुमंडलीय आर्द्रता स्तर"],
      answer: 0,
      exp: "Explanation (En): High albedo surfaces like ice and snow reflect sunlight back into space, whereas dark surfaces absorb more heat.\nस्पष्टीकरण (Hi): बर्फ और सफेद सतहों का अल्बेडो उच्च होता है क्योंकि वे सूरज की रोशनी को वापस अंतरिक्ष में परावर्तित कर देती हैं।"
    },
    {
      qEn: "What is a positive feedback loop in climate change?",
      qHi: "जलवायु परिवर्तन में 'सकारात्मक प्रतिक्रिया लूप' (Positive feedback loop) क्या है?",
      optionsEn: ["A process where an initial warming effect triggers further changes that amplify the warming (e.g., melting ice reducing albedo)", "A mechanism that cools the planet down", "Government climate policies", "Stable weather patterns"],
      optionsHi: ["वह प्रक्रिया जिसमें प्रारंभिक वार्मिंग प्रभाव ऐसे और बदलावों को ट्रिगर करता है जो वार्मिंग को और बढ़ाते हैं (जैसे बर्फ पिघलने से अल्बेडो घटना)", "ग्रह को ठंडा करने वाला तंत्र", "सरकारी जलवायु नीतियां", "स्थिर मौसम पैटर्न"],
      answer: 0,
      exp: "Explanation (En): Melting Arctic ice exposes dark ocean water, which absorbs more heat, causing more ice to melt in a self-reinforcing loop.\nस्पष्टीकरण (Hi): आर्कटिक की बर्फ पिघलने से नीचे का काला पानी दिखता है जो अधिक गर्मी सोखता है, जिससे और तेजी से बर्फ पिघलती है।"
    },
    {
      qEn: "What is carbon sequestration?",
      qHi: "कार्बन सीक्वेस्ट्रेशन (Carbon sequestration) किसे कहते हैं?",
      optionsEn: ["The long-term storage of carbon dioxide or other forms of carbon to mitigate global warming", "The release of carbon from factories", "Burning fossil fuels", "Cutting down forests"],
      optionsHi: ["ग्लोबल वार्मिंग को कम करने के लिए कार्बन डाइऑक्साइड या कार्बन के अन्य रूपों का दीर्घकालिक भंडारण", "कारखानों से कार्बन का निकलना", "जीवाश्म ईंधन जलाना", "वनों की कटाई करना"],
      answer: 0,
      exp: "Explanation (En): Carbon sequestration involves capturing and storing atmospheric CO_2 through natural sinks (forests, oceans) or technological capture.\nस्पष्टीकरण (Hi): वायुमंडल से CO_2 को पकड़कर प्राकृतिक सिंक (वनों, महासागरों) या तकनीक द्वारा लंबे समय तक स्टोर करना कार्बन सीक्वेस्ट्रेशन है।"
    },
    {
      qEn: "What is net-zero carbon emissions?",
      qHi: "नेट-जीरो कार्बन उत्सर्जन (Net-zero carbon emissions) का क्या अर्थ है?",
      optionsEn: ["Achieving an overall balance between greenhouse gas emissions produced and greenhouse gas emissions taken out of the atmosphere", "Stopping all human breathing", "Zero electricity usage worldwide", "Eliminating cars entirely"],
      optionsHi: ["उत्पादित ग्रीनहाउस गैस उत्सर्जन और वायुमंडल से हटाई गई ग्रीनहाउस गैसों के बीच कुल संतुलन प्राप्त करना", "सभी इंसानों की सांस बंद होना", "दुनिया भर में शून्य बिजली उपयोग", "कारों को पूरी तरह समाप्त करना"],
      answer: 0,
      exp: "Explanation (En): Net-zero means adding no greenhouse gases to the atmosphere overall, balancing any remaining emissions with removal strategies.\nस्पष्टीकरण (Hi): नेट-जीरो का मतलब है कि हम जितनी ग्रीनहाउस गैसें छोड़ रहे हैं, उतना ही वातावरण से अवशोषित भी कर लें ताकि कुल संतुलन शून्य हो जाए।"
    },
    {
      qEn: "What are renewable energy sources that help combat climate change?",
      qHi: "जलवायु परिवर्तन से मुकाबला करने में मदद करने वाले नवीकरणीय ऊर्जा स्रोत (Renewable energy sources) कौन से हैं?",
      optionsEn: ["Solar, wind, hydro, and geothermal energy", "Coal and natural gas", "Petroleum and diesel", "Nuclear weapons"],
      optionsHi: ["सौर, पवन, जल और भूतापीय ऊर्जा", "कोयला और प्राकृतिक गैस", "पेट्रोलियम और डीजल", "परमाणु हथियार"],
      answer: 0,
      exp: "Explanation (En): Renewable energy sources replenish naturally without depleting, producing little to no greenhouse gas emissions.\nस्पष्टीकरण (Hi): सौर ऊर्जा, पवन ऊर्जा और जल विद्युत जैसे नवीकरणीय स्रोत प्रदूषण मुक्त और कभी न खत्म होने वाली ऊर्जा देते हैं।"
    },
    {
      qEn: "What is climate mitigation?",
      qHi: "जलवायु न्यूनीकरण या शमन (Climate mitigation) से क्या तात्पर्य है?",
      optionsEn: ["Efforts to reduce or prevent emission of greenhouse gases to limit the severity of future climate change", "Adapting to rising sea levels", "Building flood walls", "Relocating coastal cities"],
      optionsHi: ["भविष्य के जलवायु परिवर्तन की गंभीरता को सीमित करने के लिए ग्रीनहाउस गैसों के उत्सर्जन को कम करने के प्रयास", "बढ़ते समुद्र स्तर के अनुकूल होना", "बाढ़ की दीवारें बनाना", "तटीय शहरों को स्थानांतरित करना"],
      answer: 0,
      exp: "Explanation (En): Mitigation focuses on addressing the root causes by reducing greenhouse gas sources and enhancing carbon sinks.\nस्पष्टीकरण (Hi): शमन (Mitigation) का उद्देश्य प्रदूषण के मूल कारणों को रोककर ग्रीनहाउस गैसों के उत्सर्जन को घटाना है।"
    },
    {
      qEn: "What is climate adaptation?",
      qHi: "जलवायु अनुकूलन (Climate adaptation) क्या है?",
      optionsEn: ["The process of adjusting to actual or expected climate change and its effects to minimize harm", "Stopping all factory emissions", "Transitioning to solar power", "Reducing coal mining"],
      optionsHi: ["वास्तविक या अपेक्षित जलवायु परिवर्तन और उसके प्रभावों के अनुकूल होने की प्रक्रिया ताकि नुकसान कम से कम हो", "सभी कारखाने के उत्सर्जन को रोकना", "सौर ऊर्जा परtransition करना", "कोयला खनन कम करना"],
      answer: 0,
      exp: "Explanation (En): Adaptation involves practical actions to manage risks from climate impacts, such as building sea walls or drought-resistant crops.\nस्पष्टीकरण (Hi): अनुकूलन (Adaptation) का मतलब जलवायु बदलावों के असर से बचने के लिए व्यावहारिक कदम उठाना है (जैसे बाढ़ सुरक्षा दीवारें)।"
    },
    {
      qEn: "What is El Niño?",
      qHi: "अल नीनो (El Niño) घटना क्या है?",
      optionsEn: ["A climate pattern characterized by warming of surface waters in the central and eastern tropical Pacific Ocean, affecting global weather", "Cooling of Atlantic ocean", "An Arctic blizzard", "A monsoon flood in India"],
      optionsHi: ["मध्य और पूर्वी उष्णकटिबंधीय प्रशांत महासागर में सतही पानी के गर्म होने की जलवायु पैटर्न जो वैश्विक मौसम को प्रभावित करता है", "अटलांटिक का ठंडा होना", "एक आर्कटिक बर्फ़ीला طوفان", "भारत में मानसून बाढ़"],
      answer: 0,
      exp: "Explanation (En): El Niño is the warm phase of ENSO, often disrupting global weather systems, bringing droughts to some regions and floods to others.\nस्पष्टीकरण (Hi): अल नीनो प्रशांत महासागर में पानी के गर्म होने की घटना है जो दुनिया भर में सूखे और बाढ़ जैसी मौسमी उथल-पुथल लाती है।"
    },
    {
      qEn: "What is La Niña?",
      qHi: "ला नीना (La Niña) क्या है?",
      optionsEn: ["A climate pattern characterized by cooling of tropical Pacific ocean surface waters, opposite to El Niño", "Warming of Pacific waters", "European heatwave", "Desert drought expansion"],
      optionsHi: ["अल नीनो के विपरीत, उष्णकटिबंधीय प्रशांत महासागर की सतह के पानी के ठंडा होने की जलवायु घटना", "प्रशांत पानी का गर्म होना", "यूरोपीय हीटवेव", "मरुस्थल सूखा विस्तार"],
      answer: 0,
      exp: "Explanation (En): La Niña is the cool phase of ENSO, frequently associated with wetter conditions in Australia and Southeast Asia.\nस्पष्टीकरण (Hi): ला नीना अल नीनो के विपरीत प्रशांत महासागर के ठंडा होने की स्थिति है, जो अलग-अलग क्षेत्रों में भारी बारिश लाती है।"
    },
    {
      qEn: "What is the primary driver of current climate change compared to past geological epochs?",
      qHi: "पिछले भूवैज्ञानिक युगों की तुलना में वर्तमान जलवायु परिवर्तन का प्राथमिक चालक क्या है?",
      optionsEn: ["Human industrial activity and fossil fuel combustion", "Natural solar cycle variations", "Volcanic eruptions only", "Earth's orbital tilt cycles"],
      optionsHi: ["मानवीय औद्योगिक गतिविधि और जीवाश्म ईंधन का दहन", "प्राकृतिक सौर चक्र विविधताएं", "केवल ज्वालामुखी उद्गार", "पृथ्वी की कक्षा के झुकाव चक्र"],
      answer: 0,
      exp: "Explanation (En): While Earth's climate changed naturally in the past, current warming is happening at an unprecedented rate driven by human emissions.\nस्पष्टीकरण (Hi): हालांकि पृथ्वी की जलवायु इतिहास में प्राकृतिक रूप से बदली है, लेकिन आज का बदलाव इंसानों द्वारा छोड़ी गई गैसों के कारण बहुत तेज गति से हो रहा है।"
    },
    {
      qEn: "What is a carbon footprint?",
      qHi: "कार्बन फुटप्रिंट (Carbon footprint) किसे कहते हैं?",
      optionsEn: ["The total amount of greenhouse gases produced directly and indirectly by an individual, organization, or product", "The size of animal footprints in forests", "The amount of coal mined", "Soil carbon storage capacity"],
      optionsHi: ["किसी व्यक्ति, संगठन या उत्पाद द्वारा प्रत्यक्ष और अप्रत्यक्ष रूप से उत्पन्न कुल ग्रीनहाउस गैसों की मात्रा", "जंगलों में जानवरों के पैरों के निशान का आकार", "निकाले गए कोयले की मात्रा", "मिट्टी की कार्बन भंडारण क्षमता"],
      answer: 0,
      exp: "Explanation (En): A carbon footprint measures the total greenhouse gas emissions caused by human actions, expressed in equivalent tons of CO_2.\nस्पष्टीकरण (Hi): हमारे रोजमर्रा के कामों (यातायात, बिजली उपयोग) से पर्यावरण में जितनी CO_2 छोड़ती है, उसे कार्बन फुटप्रिंट कहते हैं।"
    },
    {
      qEn: "What is permafrost thaw and why is it a climate concern?",
      qHi: "परमाफ्रस्ट पिघलना (Permafrost thaw) जलवायु के लिए चिंता का विषय क्यों है?",
      optionsEn: ["It releases massive amounts of trapped greenhouse gases (methane and CO_2) as frozen organic matter decomposes", "It causes ocean high tides", "It freezes tropical forests", "It purifies atmospheric air"],
      optionsHi: ["जमी हुई कार्बनिक सामग्री के सड़ने से यह बड़ी मात्रा में फंसी हुई ग्रीनहाउस गैसें (मीथेन और CO_2) छोड़ता है", "यह महासागरों में उच्च ज्वार पैदा करता है", "यह उष्णकटिबंधीय वनों को जमाता है", "यह वायुमंडलीय हवा को शुद्ध करता है"],
      answer: 0,
      exp: "Explanation (En): Thawing permafrost in the Arctic releases ancient stored carbon and methane into the atmosphere, accelerating global warming.\nस्पष्टीकरण (Hi): आर्कटिक की जमी हुई मिट्टी (परमाफ्रस्ट) के पिघलने से अंदर दबी हुई मीथेन और CO_2 गैसें बाहर निकलती हैं जिससे ग्लोबल वार्मिंग और तेज होती है।"
    },
    {
      qEn: "What is the role of forests as 'carbon sinks'?",
      qHi: "'कार्बन सिंक' (Carbon sinks) के रूप में वनों की क्या भूमिका है?",
      optionsEn: ["They absorb more carbon dioxide from the atmosphere through photosynthesis than they release", "They emit massive amounts of CO_2", "They create acid rain", "They trap ocean currents"],
      optionsHi: ["वे प्रकाश संश्लेषण के माध्यम से वायुमंडल से जितनी कार्बन डाइऑक्साइड छोड़ते हैं, उससे अधिक अवशोषित करते हैं", "वे भारी मात्रा में CO_2 उत्सर्जित करते हैं", "वे अम्लीय वर्षा बनाते हैं", "वे महासागरीय धाराओं को रोकते हैं"],
      answer: 0,
      exp: "Explanation (En): Healthy forests act as natural carbon sinks, capturing and storing carbon in trees, plants, and soil.\nस्पष्टीकरण (Hi): स्वस्थ और घने जंगल हवा से CO_2 को सोखकर अपने पेड़ों और मिट्टी में जमा करते हैं, इसलिए इन्हें कार्बन सिंक कहा जाता है।"
    },
    {
      qEn: "What is the enhanced greenhouse effect?",
      qHi: "संवर्धित ग्रीनहाउस प्रभाव (Enhanced greenhouse effect) क्या है?",
      optionsEn: ["The intensification of the natural greenhouse effect due to human-emitted greenhouse gases, leading to rapid warming", "Natural cooling of earth", "Ozone layer healing", "Solar flare increase"],
      optionsHi: ["मानव-उत्सर्जित ग्रीनहाउस गैसों के कारण प्राकृतिक ग्रीनहाउस प्रभाव का तीव्र होना, जिससे तेजी से वार्मिंग होती है", "पृथ्वी का प्राकृतिक शीतलन", "ओजोन परत का ठीक होना", "सौर फ्लेयर में वृद्धि"],
      answer: 0,
      exp: "Explanation (En): Human activities have supercharged the natural greenhouse effect by adding excess gases, causing accelerated global warming.\nस्पष्टीकरण (Hi): मानवीय गतिविधियों के कारण वायुमंडल में गैसों की मात्रा बढ़ने से जब प्राकृतिक ग्रीनहाउस प्रभाव और अधिक ताकतवर हो जाता है, तो उसे संवर्धित ग्रीनहाउस प्रभाव कहते हैं।"
    },
    {
      qEn: "What is climate resilience?",
      qHi: "जलवायु लचीलापन या रेजिलिएंस (Climate resilience) का क्या अर्थ है?",
      optionsEn: ["The capacity of social, economic, and environmental systems to cope with and recover from a hazardous climate event", "Complete resistance to all weather", "Stopping global temperature rise instantly", "Freezing polar ice caps"],
      optionsHi: ["सामाजिक, आर्थिक और पर्यावरणीय प्रणालियों की किसी खतरनाक जलवायु घटना से निपटने और उससे उबरने की क्षमता", "सभी मौसमों के प्रति पूर्ण प्रतिरोध", "वैश्विक तापमान वृद्धि को तुरंत रोकना", "ध्रुवीय बर्फ की चादरों को जमाना"],
      answer: 0,
      exp: "Explanation (En): Climate resilience measures how well communities and ecosystems can absorb climate shocks and adapt without collapsing.\nस्पष्टीकरण (Hi): किसी समाज या पारिस्थितिकी तंत्र की जलवायु आपदाओं को झेलने और उसके बाद दोबारा संभलने की क्षमता को जलवायु लचीलापन कहते हैं।"
    },
    {
      qEn: "What is the primary objective of the UNFCCC (United Nations Framework Convention on Climate Change)?",
      qHi: "UNFCCC (संयुक्त राष्ट्र जलवायु परिवर्तन फ्रेमवर्क कन्वेंशन) का प्राथमिक उद्देश्य क्या है?",
      optionsEn: ["To stabilize greenhouse gas concentrations in the atmosphere at a level that prevents dangerous anthropogenic interference with the climate system", "To ban all fossil fuel usage worldwide by 2025", "To regulate ocean fishing quotas", "To protect marine wildlife"],
      optionsHi: ["वायुमंडल में ग्रीनहाउस गैस सांद्रता को ऐसे स्तर पर स्थिर करना जो जलवायु प्रणाली के साथ खतरनाक मानवीय हस्तक्षेप को रोके", "2025 तक दुनिया भर में सभी जीवाश्म ईंधन उपयोग पर प्रतिबंध लगाना", "समुद्री मछली पकड़ने के कोटे को विनियमित करना", "समुद्री वन्यजीवों की रक्षा करना"],
      answer: 0,
      exp: "Explanation (En): The UNFCCC is the foundational international environmental treaty signed at the 1992 Rio Earth Summit to address climate change.\nस्पष्टीकरण (Hi): UNFCCC 1992 के रियो सम्मेलन में बनी वह मूल संधि है जिसका उद्देश्य खतरनाक स्तर तक जलवायु को प्रभावित होने से बचाना है।"
    },
    {
      qEn: "What is a tipping point in the climate system?",
      qHi: "जलवायु प्रणाली में 'टिपिंग पॉइंट' (Tipping point) का क्या अर्थ है?",
      optionsEn: ["A critical threshold when a small change can trigger a large, abrupt, and often irreversible shift in the climate system", "A mild weather season", "A temperature reading at equator", "Peak solar radiation day"],
      optionsHi: ["वह महत्वपूर्ण सीमा जब एक छोटा सा बदलाव जलवायु प्रणाली में बड़े, अचानक और अक्सर अपरिवर्तनीय बदलाव को ट्रिगर कर सकता है", "एक हल्का मौसम", "भूमध्य रेखा पर तापमान पठन", "शीर्ष सौर विकिरण का दिन"],
      answer: 0,
      exp: "Explanation (En): Climate tipping points (like Amazon rainforest dieback or Greenland ice sheet collapse) represent irreversible thresholds once crossed.\nस्पष्टीकरण (Hi): टिपिंग पॉइंट वह नाजुक मोड़ है जिसके आगे निकलने पर जलवायु में होने वाला बदलाव हमेशा के लिए अपरिवर्तनीय और विनाशकारी हो जाता है।"
    },
    {
      qEn: "How do aerosol particles in the atmosphere generally affect global temperatures?",
      qHi: "वायुमंडल में मौजूद एयरोसोल कण (Aerosol particles) सामान्य रूप से वैश्विक तापमान को कैसे प्रभावित करते हैं?",
      optionsEn: ["Most aerosols (like sulfate particles) reflect sunlight back into space, exerting a net cooling effect", "They always cause instant global warming", "They create heavy rainstorms", "They thicken the ozone layer"],
      optionsHi: ["अधिकांश एयरोसोल (जैसे सल्फेट कण) सूर्य के प्रकाश को वापस अंतरिक्ष में परावर्तित करते हैं, जिससे शीतलन प्रभाव होता है", "वे हमेशा तत्काल ग्लोबल वार्मिंग लाते हैं", "वे भारी बारिश करते हैं", "वे ओजोन परत को मोटा करते हैं"],
      answer: 0,
      exp: "Explanation (En): Atmospheric aerosols, such as those from volcanic eruptions or pollution, tend to reflect solar radiation, masking some greenhouse warming.\nस्पष्टीकरण (Hi): वायुमंडल में तैरने वाले अधिकांश सूक्ष्म एयरोसोल कण सूर्य की किरणों को वापस परावर्तित करके पृथ्वी को ठंडा रखने (कूलिंग) का प्रभाव डालते हैं।"
    },
    {
      qEn: "What is green climate finance?",
      qHi: "ग्रीन क्लाइमेट फाइनेंस (Green climate finance) क्या है?",
      optionsEn: ["Financing channeled through funds to assist developing countries in adaptation and mitigation practices to combat climate change", "Government loans for buying cars", "Private tech company stocks", "Industrial factory subsidies"],
      optionsHi: ["विकासशील देशों को जलवायु परिवर्तन से निपटने के लिए अनुकूलन और शमन प्रथाओं में सहायता हेतु चैनलों के माध्यम से वित्त पोषण", "कार खरीदने के लिए सरकारी ऋण", "निजी तकनीक कंपनी के शेयर", "औद्योगिक फैक्ट्री सब्सिडी"],
      answer: 0,
      exp: "Explanation (En): Green climate finance helps developing nations build clean energy infrastructure and adapt to unavoidable climate impacts.\nस्पष्टीकरण (Hi): यह विकासशील देशों को स्वच्छ ऊर्जा अपनाने और जलवायु आपदाओं से निपटने में मदद करने के लिए दिया जाने वाला वित्तीय अनुदान है।"
    },
    {
      qEn: "Why is the Arctic warming faster than the rest of the planet (Arctic amplification)?",
      qHi: "आर्कटिक क्षेत्र ग्रह के बाकी हिस्सों की तुलना में अधिक तेजी से क्यों गर्म हो रहा है (आर्कटिक प्रवर्धन)?",
      optionsEn: ["Due to the ice-albedo feedback loop, where melting ice exposes darker water that absorbs more solar heat", "Because of heavy city traffic in poles", "Due to underground volcanoes", "Because of ocean tides"],
      optionsHi: ["बर्फ-अल्बेडो फीडबैक लूप के कारण, जहाँ पिघलती बर्फ गहरे पानी को उजागर करती है जो अधिक सौर गर्मी सोखता है", "ध्रुवों पर भारी शहर के यातायात के कारण", "भूमिगत ज्वालामुखियों के कारण", "समुद्री ज्वार के कारण"],
      answer: 0,
      exp: "Explanation (En): As reflective snow and ice melt in the Arctic, darker land and ocean surfaces absorb more solar radiation, accelerating local warming.\nस्पष्टीकरण (Hi): बर्फ पिघलने से सूरज की गर्मी सोखने की क्षमता बढ़ जाती है, जिससे आर्कटिक दुनिया के बाकी हिस्सों से दोगुनी तेजी से गर्म हो रहा है।"
    }
  ],
    "Natural Resources": [
    {
      qEn: "What are natural resources?",
      qHi: "प्राकृतिक संसाधन (Natural resources) किसे कहते हैं?",
      optionsEn: ["Resources that exist independently of human actions, provided by nature (e.g., water, air, minerals, forests)", "Man-made plastic materials", "Factory-produced chemicals", "Synthetic synthetic fibers"],
      optionsHi: ["वे संसाधन जो प्रकृति द्वारा प्रदान किए गए हैं और मानवीय हस्तक्षेप के बिना स्वतंत्र रूप से मौजूद हैं (जैसे पानी, हवा, खनिज, वन)", "मानव निर्मित प्लास्टिक सामग्री", "कारखाने में उत्पादित रसायन", "सिंथेटिक फाइबर"],
      answer: 0,
      exp: "Explanation (En): Natural resources are substances and energy sources derived from the environment that are essential for human survival and economic activity.\nस्पष्टीकरण (Hi): प्राकृतिक संसाधन वे सभी तत्व और ऊर्जा स्रोत हैं जो प्रकृति द्वारा मुफ्त में मिलते हैं और हमारे जीवन व विकास के लिए अनिवार्य हैं।"
    },
    {
      qEn: "What is the primary difference between renewable and non-renewable resources?",
      qHi: "नवीकरणीय और अनवीकरणीय संसाधनों के बीच मुख्य अंतर क्या है?",
      optionsEn: ["Renewable resources can replenish naturally in a short time, whereas non-renewable resources exist in finite amounts and take millions of years to form", "Renewable resources are always solid", "Non-renewable resources never run out", "There is no difference"],
      optionsHi: ["नवीकरणीय संसाधन कम समय में प्राकृतिक रूप से स्वतः ठीक हो जाते हैं, जबकि अनवीकरणीय सीमित हैं और बनने में लाखों साल लेते हैं", "नवीकरणीय संसाधन हमेशा ठोस होते हैं", "अनवीकरणीय कभी खत्म नहीं होते", "कोई अंतर नहीं है"],
      answer: 0,
      exp: "Explanation (En): Renewable resources (like solar, wind) regenerate continuously, while non-renewable resources (like coal, petroleum) are exhaustible.\nस्पष्टीकरण (Hi): नवीकरणीय संसाधन (जैसे सौर ऊर्जा) कभी खत्म नहीं होते या जल्दी रीचार्ज हो जाते हैं, जबकि अनवीकरणीय (जैसे कोयला) एक बार खत्म होने पर वापस नहीं मिलते।"
    },
    {
      qEn: "Which of the following is an example of a renewable natural resource?",
      qHi: "निम्नलिखित में से कौन सा एक नवीकरणीय प्राकृतिक संसाधन का उदाहरण है?",
      optionsEn: ["Solar energy and wind energy", "Coal", "Petroleum", "Natural gas"],
      optionsHi: ["सौर ऊर्जा और पवन ऊर्जा", "कोयला", "पेट्रोलियम", "प्राकृतिक गैस"],
      answer: 0,
      exp: "Explanation (En): Solar, wind, hydro, and biomass energy are renewable because they continuously replenish naturally.\nस्पष्टीकरण (Hi): सौर और पवन ऊर्जा असीम और नवीकरणीय संसाधन हैं जो प्रकृति में लगातार बने रहते हैं।"
    },
    {
      qEn: "Which of the following is an example of a non-renewable natural resource?",
      qHi: "निम्नलिखित में से कौन सा एक अनवीकरणीय प्राकृतिक संसाधन का उदाहरण है?",
      optionsEn: ["Coal, petroleum, and natural gas", "Solar energy", "Wind power", "Flowing river water"],
      optionsHi: ["कोयला, पेट्रोलियम और प्राकृतिक गैस", "सौर ऊर्जा", "पवन ऊर्जा", "बहता नदी का पानी"],
      answer: 0,
      exp: "Explanation (En): Fossil fuels are non-renewable because their reserves are limited and take geological epochs to form.\nस्पष्टीकरण (Hi): कोयला, पेट्रोलियम और प्राकृतिक गैस सीमित मात्रा में हैं और अनवीकरणीय संसाधन हैं।"
    },
    {
      qEn: "What is sustainable development?",
      qHi: "सतत विकास (Sustainable development) किसे कहते हैं?",
      optionsEn: ["Development that meets the needs of the present without compromising the ability of future generations to meet their own needs", "Rapid exploitation of all natural resources now", "Stopping all industrial growth completely", "Building more concrete cities"],
      optionsHi: ["भविष्य की पीढ़ियों की जरूरतों से समझौता किए बिना वर्तमान की जरूरतों को पूरा करना", "अभी सभी प्राकृतिक संसाधनों का तेजी से दोषण", "औद्योगिक विकास पूरी तरह रोकना", "अधिक कंक्रीट के शहर बनाना"],
      answer: 0,
      exp: "Explanation (En): Sustainable development balances economic growth, environmental protection, and social equity for long-term survival.\nस्पष्टीकरण (Hi): सतत विकास वह प्रक्रिया है जिसमें हम संसाधनों का उपयोग इस प्रकार करते हैं कि पर्यावरण को बचाए रखते हुए आने वाली पीढ़ियों के लिए भी वे सुरक्षित रहें।"
    },
    {
      qEn: "What is deforestation?",
      qHi: "वनों की कटाई या डिफॉरेस्टेशन (Deforestation) का क्या अर्थ है?",
      optionsEn: ["The permanent clearing or removal of forest cover to make land available for other uses", "Planting new saplings in degraded land", "Selective pruning of dead tree branches", "Natural forest growth"],
      optionsHi: ["अन्य उपयोगों के लिए जमीन उपलब्ध कराने हेतु वन आवरण को स्थायी रूप से हटाना या साफ करना", "बंजर जमीन पर नए पौधे लगाना", "मृत पेड़ों की शाखाओं की छंटाई", "प्राकृतिक वन वृद्धि"],
      answer: 0,
      exp: "Explanation (En): Deforestation is driven by agriculture, logging, and urbanization, leading to biodiversity loss, soil erosion, and CO_2 buildup.\nस्पष्टीकरण (Hi): कृषि, शहरीकरण और लकड़ियों के लिए जंगलों को बड़े पैमाने पर काटना डिफॉरेस्टेशन कहलाता है।"
    },
    {
      qEn: "What are the major consequences of deforestation?",
      qHi: "वनों की कटाई के प्रमुख परिणाम क्या हैं?",
      optionsEn: ["Loss of biodiversity, soil erosion, disruption of water cycle, and increased greenhouse gases", "Increase in groundwater levels", "Cooling of global climate", "Expansion of wild animal habitats"],
      optionsHi: ["जैव विविधता की हानि, मृदा अपरदन, जल चक्र में व्यवधान और ग्रीनहाउस गैसों में वृद्धि", "भूजल स्तर में वृद्धि", "वैश्विक जलवायु का ठंडा होना", "जंगली जानवरों के आवास का विस्तार"],
      answer: 0,
      exp: "Explanation (En): Deforestation destroys wildlife habitats, triggers soil erosion, releases stored carbon, and disrupts regional rainfall.\nस्पष्टीकरण (Hi): वनों के नष्ट होने से मिट्टी का कटाव होता है, कार्बन डाइऑक्साइड बढ़ती है और वन्यजीवों का घर उजड़ जाता है।"
    },
    {
      qEn: "What is soil erosion?",
      qHi: "मृदा अपरदन या मिट्टी का कटाव (Soil erosion) किसे कहते हैं?",
      optionsEn: ["The displacement of the upper layer of soil by wind, water, or agricultural practices", "The formation of new rich topsoil", "Accumulation of fertile river silt", "Underground rock weathering"],
      optionsHi: ["हवा, पानी या कृषि प्रथाओं द्वारा मिट्टी की ऊपरी उपजाऊ परत का बहना या उड़ जाना", "नई उपजाऊ ऊपरी मिट्टी का बनना", "उपजाऊ नदी गाद का जमाव", "भूमिगत चट्टान का अपक्षय"],
      answer: 0,
      exp: "Explanation (En): Soil erosion strips away nutrient-rich topsoil, reducing agricultural productivity and causing river siltation.\nस्पष्टीकरण (Hi): तेज हवा या पानी के बहाव से मिट्टी की उपजाऊ ऊपरी परत का कटकर बह जाना मृदा अपरदन कहलाता है।"
    },
    {
      qEn: "What are effective methods of soil conservation?",
      qHi: "مृदा संरक्षण (Soil conservation) के प्रभावी तरीके कौन से हैं?",
      optionsEn: ["Terrace farming, contour ploughing, afforestation, and crop rotation", "Clear-cutting all forests", "Overgrazing by livestock", "Industrial chemical dumping"],
      optionsHi: ["सीढ़ीनुमा खेती, समोच्च जुताई, वनीकरण और फसल चक्र", "सभी जंगलों को पूरी तरह साफ करना", "पशुओं द्वारा अत्यधिक चराई", "औद्योगिक रासायनिक डंपिंग"],
      answer: 0,
      exp: "Explanation (En): Contour ploughing, terracing on hills, and planting shelterbelts prevent topsoil from washing or blowing away.\nस्पष्टीकरण (Hi): पहाड़ों पर सीढ़ीनुमा खेती, पेड़ लगाना और समोच्च जुताई करने से मिट्टी के कटाव को रोका जा सकता है।"
    },
    {
      qEn: "What is rainwater harvesting?",
      qHi: "वर्षा जल संचयन या रेनवाटर हार्वेस्टिंग (Rainwater harvesting) क्या है?",
      optionsEn: ["The collection and storage of rainwater from rooftops or surfaces for future use and groundwater recharging", "Draining river water into oceans", "Leaving taps open during storms", "Pumping underground saltwater"],
      optionsHi: ["भविष्य के उपयोग और भूजल पुनर्भरण के लिए छतों या सतहों से वर्षा जल का संग्रहण और भंडारण", "नदी के पानी को समुद्र में बहाना", "तूफान के दौरान नल खुले छोड़ना", "भूमिगत खारा पानी पंप करना"],
      answer: 0,
      exp: "Explanation (En): Rainwater harvesting captures precipitation before it runs off, conserving water resources and boosting groundwater tables.\nस्पष्टीकरण (Hi): बारिश के पानी को बहकर बर्बाद होने से रोककर टैंकों में जमा करना या जमीन के भीतर पहुंचाना रेनवाटर हार्वेस्टिंग है।"
    },
    {
      qEn: "What is watershed management?",
      qHi: "जलसंभर प्रबंधन या वाटरशेड मैनेजमेंट (Watershed management) का मुख्य उद्देश्य क्या है?",
      optionsEn: ["The study and management of water resources and land within a drainage basin to optimize water retention and prevent soil erosion", "Building massive concrete dams everywhere", "Draining lakes for farming", "Polluting river catchments"],
      optionsHi: ["जल प्रतिधारण को अनुकूलित करने और मृदा अपरदन को रोकने के लिए जल निकासी बेसिन के भीतर जल संसाधनों और भूमि का प्रबंधन", "हर जगह विशाल कंक्रीट बांध बनाना", "खेती के लिए झीलें सुखाना", "नदी के जलग्रहण क्षेत्रों को प्रदूषित करना"],
      answer: 0,
      exp: "Explanation (En): Watershed management integrates soil and water conservation practices to improve agricultural yield and ecological stability.\nस्पष्टीकरण (Hi): किसी जल निकासी क्षेत्र में पानी और मिट्टी दोनों का इस तरह प्रबंधन करना जिससे पानी रुके, भूजल बढ़े और मिट्टी का कटाव रुके।"
    },
    {
      qEn: "What is the Chipko Movement famous for?",
      qHi: "चिपको आंदोलन (Chipko Movement) किसके लिए प्रसिद्ध है?",
      optionsEn: ["Villagers (particularly women) hugging trees to prevent them from being logged in Uttarakhand", "A protest against water pollution", "A movement for solar energy adoption", "Wildlife poaching protection"],
      optionsHi: ["उत्तराखंड में पेड़ों को काटने से बचाने के लिए ग्रामीणों (विशेषकर महिलाओं) द्वारा पेड़ों से चिपक जाना", "जल प्रदूषण के खिलाफ विरोध", "सौर ऊर्जा अपनाने का आंदोलन", "वन्यजीव शिकार संरक्षण"],
      answer: 0,
      exp: "Explanation (En): Originating in Uttarakhand in the 1970s, the Chipko movement became a historic symbol of community forest conservation.\nस्पष्टीकरण (Hi): 1970 के दशक में उत्तराखंड में वनों की कटाई के खिलाफ स्थानीय लोगों (महिलाओं) ने पेड़ों से लिपटकर उनकी रक्षा की थी।"
    },
    {
      qEn: "What is joint forest management (JFM)?",
      qHi: "संयुक्त वन प्रबंधन या जेएफएम (Joint Forest Management - JFM) क्या है?",
      optionsEn: ["A partnership between local communities and the forest department to manage and protect degraded forests", "Corporate commercial logging", "Total government control without local inputs", "Clearing forests for farming"],
      optionsHi: ["क्षतिग्रस्त वनों के प्रबंधन और सुरक्षा के लिए स्थानीय समुदायों और वन विभाग के बीच साझेदारी", "कॉर्पोरेट व्यावसायिक लॉगिंग", "स्थानीय इनपुट के बिना पूर्ण सरकार नियंत्रण", "खेती के लिए वन साफ करना"],
      answer: 0,
      exp: "Explanation (En): JFM involves local village communities protecting degraded forest lands in exchange for a share of forest produce.\nस्पष्टीकरण (Hi): वनों के संरक्षण में स्थानीय गांवों और वन विभाग की सहभागिता व साझेदारी को संयुक्त वन प्रबंधन कहते हैं।"
    },
    {
      qEn: "What is overexploitation of natural resources?",
      qHi: "प्राकृतिक संसाधनों का अति-दोषण (Overexploitation) किसे कहते हैं?",
      optionsEn: ["Harvesting renewable and non-renewable resources at a rate faster than they can naturally replenish or recover", "Conserving forest wood", "Using solar panels", "Rainwater harvesting"],
      optionsHi: ["नवीकरणीय और अनवीकरणीय संसाधनों को उनके प्राकृतिक रूप से ठीक होने की दर से भी तेज गति से निकालना", "वन लकड़ी का संरक्षण", "सौर पैनलों का उपयोग", "वर्षा जल संचयन"],
      answer: 0,
      exp: "Explanation (En): Overfishing, overhunting, and overgrazing lead to resource depletion and ecological collapse.\nस्पष्टीकरण (Hi): संसाधनों का जरूरत से ज्यादा और तेजी से दोहन करना जिससे वे दोबारा न बन सकें, अति-दोषण कहलाता है।"
    },
    {
      qEn: "What are the 3 Rs of environmental conservation?",
      qHi: "पर्यावरण संरक्षण के 3 आर (3 Rs) क्या हैं?",
      optionsEn: ["Reduce, Reuse, and Recycle", "Remove, Replace, and Rot", "Refuse, Run, and Rebuild", "Read, Record, and Report"],
      optionsHi: ["कम करें, पुनः उपयोग करें और पुनर्चक्रण करें (Reduce, Reuse, Recycle)", "हटाएं, बदलें और सड़ाएं", "انकार करें, दौड़ें और पुनर्निर्माण करें", "पढ़ें, रिकॉर्ड करें और रिपोर्ट करें"],
      answer: 0,
      exp: "Explanation (En): Reduce consumption, reuse items, and recycle materials to minimize waste and conserve natural resources.\nस्पष्टीकरण (Hi): कचरा कम करना (Reduce), चीजों का दोबारा इस्तेमाल करना (Reuse) और रीसायकल करना (Recycle) पर्यावरण बचाने के मूल मंत्र हैं।"
    },
    {
      qEn: "What is bioenergy (biomass energy)?",
      qHi: "बायोएर्जी या बायोमास ऊर्जा (Bioenergy) क्या है?",
      optionsEn: ["Energy derived from organic materials such as plant matter, agricultural waste, and animal manure", "Energy from crude oil", "Electricity from nuclear fission", "Solar panel electricity"],
      optionsHi: ["पादप सामग्री, कृषि अपशिष्ट और पशु गोबर जैसे कार्बनिक पदार्थों से प्राप्त ऊर्जा", "कच्चे तेल से ऊर्जा", "परमाणु विखंडन से बिजली", "सौर पैनल बिजली"],
      answer: 0,
      exp: "Explanation (En): Biomass energy utilizes organic matter as a renewable fuel source for heat, electricity, or biofuels.\nस्पष्टीकरण (Hi): पेड़-पौधों, कृषि कचरे और गोबर जैसे जैविक पदार्थों से मिलने वाली ऊर्जा को बायोमास ऊर्जा कहते हैं।"
    },
    {
      qEn: "What is hydroelectric power?",
      qHi: "जलविद्युत ऊर्जा (Hydroelectric power) कैसे उत्पन्न की जाती है?",
      optionsEn: ["Electricity generated by utilizing the kinetic energy of flowing or falling river water to spin turbines", "Burning coal in water tanks", "Desalination of ocean water", "Solar thermal steam generation"],
      optionsHi: ["टर्बाइन घुमाने के लिए बहते या गिरते नदी के पानी की गतिज ऊर्जा का उपयोग करके उत्पन्न बिजली", "पानी की टंकियों में कोयला जलाना", "समुद्री पानी का विलवणन", "सौर तापीय भाप उत्पादन"],
      answer: 0,
      exp: "Explanation (En): Hydro power harnesses the gravitational force of falling water through dams to drive electrical generators.\nस्पष्टीकरण (Hi): बांधों से गिराए जाने वाले पानी की ताकत से टर्बाइन घुमाकर जलविद्युत बनाई जाती है।"
    },
    {
      qEn: "What is geothermal energy?",
      qHi: "भूतापीय ऊर्जा (Geothermal energy) क्या है?",
      optionsEn: ["Energy harnessed from thermal heat stored deep beneath the Earth's surface", "Energy from sun rays", "Wind turbine power", "Ocean wave friction"],
      optionsHi: ["पृथ्वी की सतह के नीचे गहराई में भंडारित तापीय गर्मी से प्राप्त ऊर्जा", "सूरज की किरणों से ऊर्जा", "पवन टरबाइन शक्ति", "समुद्री लहर घर्षण"],
      answer: 0,
      exp: "Explanation (En): Geothermal energy taps natural underground steam or hot water reservoirs to generate electricity or heat buildings.\nस्पष्टीकरण (Hi): धरती के भीतर मौजूद प्राकृतिक गर्म पानी और भाप की गर्मी का उपयोग करके बिजली या हीटिंग प्राप्त करना भूतापीय ऊर्जा है।"
    },
    {
      qEn: "What is nuclear energy considered in terms of resource classification?",
      qHi: "संसाधन वर्गीकरण के दृष्टिकोण से परमाणु ऊर्जा (Nuclear energy) को क्या माना जाता है?",
      optionsEn: ["A non-renewable energy source because it relies on finite radioactive minerals like uranium", "A completely renewable solar source", "An infinite water source", "Organic biomass"],
      optionsHi: ["एक अनवीकरणीय ऊर्जा स्रोत क्योंकि यह यूरेनियम जैसे सीमित रेडियोधर्मी खनिजों पर निर्भर है", "एक पूरी तरह से नवीकरणीय सौर स्रोत", "एक अनंत जल स्रोत", "जैविक बायोमास"],
      answer: 0,
      exp: "Explanation (En): Although nuclear power produces low carbon emissions, uranium ore is a finite, non-renewable geological resource.\nस्पष्टीकरण (Hi): हालांकि परमाणु ऊर्जा से कार्बन नहीं निकलता, लेकिन इसके लिए इस्तेमाल होने वाला यूरेनियम एक सीमित और अनवीकरणीय खनिज है।"
    },
    {
      qEn: "What is mineral conservation?",
      qHi: "खनिज संरक्षण (Mineral conservation) क्यों आवश्यक है?",
      optionsEn: ["Because mineral deposits are finite, non-renewable, and exhaustible due to heavy industrial extraction", "Because minerals grow back quickly", "To make mines look beautiful", "To stop rainwater"],
      optionsHi: ["क्योंकि भारी औद्योगिक निष्कर्षण के कारण खनिज भंडार सीमित, अनवीकरणीय और समाप्त होने वाले हैं", "क्योंकि खनिज जल्दी वापस उगते हैं", "खान को सुंदर दिखाने के लिए", "वर्षा जल रोकने के लिए"],
      answer: 0,
      exp: "Explanation (En): Mineral conservation involves recycling metals, efficient mining, and finding substitutes to prevent rapid depletion.\nस्पष्टीकरण (Hi): खनिज भंडार सीमित हैं, इसलिए रीसाइक्लिंग और बेहतर खनन तकनीकों द्वारा उनका संरक्षण जरूरी है।"
    },
    {
      qEn: "What is desertification?",
      qHi: "मरुस्थलीकरण (Desertification) किसे कहते हैं?",
      optionsEn: ["The process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture", "The natural creation of green oases", "Flooding of coastal lowlands", "Melting of polar ice"],
      optionsHi: ["वह प्रक्रिया जिसके तहत उपजाऊ भूमि सूखे, वनों की कटाई या अनुचित कृषि के कारण मरुस्थल में बदल जाती है", "हरे नखलिस्तान का प्राकृतिक सृजन", "तटीय निचले इलाकों में बाढ़", "ध्रुवीय बर्फ का पिघलना"],
      answer: 0,
      exp: "Explanation (En): Desertification degrades dryland ecosystems through climate change and human pressures like overgrazing and deforestation.\nस्पष्टीकरण (Hi): जलवायु परिवर्तन, अत्यधिक चराई और वनों की कटाई के कारण उपजाऊ जमीन का बंजर रेगिस्तान में बदल जाना मरुस्थलीकरण कहलाता है।"
    },
    {
      qEn: "What is agroforestry?",
      qHi: "कृषि वानिकी या एग्रोफॉरेस्ट्री (Agroforestry) क्या है?",
      optionsEn: ["An land-use management system combining agriculture and forestry to create more sustainable and diverse production", "Clearing forests completely for single crops", "Raising farm animals indoors", "Fishing in forest ponds"],
      optionsHi: ["अधिक टिकाऊ और विविध उत्पादन बनाने के लिए कृषि और वानिकी को मिलाने वाली भूमि-उपयोग प्रबंधन प्रणाली", "एकल फसलों के लिए जंगलों को पूरी तरह साफ करना", "फार्म के जानवरों को घर के अंदर पालना", "वन तालों में मछली पकड़ना"],
      answer: 0,
      exp: "Explanation (En): Agroforestry integrates trees and shrubs into crop and animal farming systems, providing environmental and economic benefits.\nस्पष्टीकरण (Hi): खेतों में फसलों के साथ-साथ पेड़ों और झाड़ियों को उगाना ताकि मिट्टी की उर्वरता और उत्पादकता बनी रहे, कृषि वानिकी है।"
    },
    {
      qEn: "What is organic farming?",
      qHi: "जैविक खेती (Organic farming) की मुख्य विशेषता क्या है?",
      optionsEn: ["Farming relying on organic fertilizers (compost, manure) and biological pest control, avoiding synthetic chemicals", "Using heavy synthetic chemical fertilizers", "Growing crops with toxic pesticides", "Genetically modifying all seeds"],
      optionsHi: ["कृत्रिम रसायनों से बचते हुए जैविक उर्वरकों (खाद) और जैविक कीट नियंत्रण पर आधारित खेती", "भारी सिंथेटिक रासायनिक उर्वरकों का उपयोग", "विषाक्त कीटनाशकों के साथ फसल उगाना", "सभी बीजों को आनुवंशिक रूप से संशोधित करना"],
      answer: 0,
      exp: "Explanation (En): Organic agriculture avoids synthetic fertilizers and pesticides, preserving soil health, biodiversity, and water quality.\nस्पष्टीकरण (Hi): जैविक खेती में रासायनिक खादों और कीटनाशकों की जगह गोबर खाद और प्राकृतिक तरीकों का इस्तेमाल होता है जिससे मिट्टी बची रहती है।"
    },
    {
      qEn: "What is water footprint?",
      qHi: "वाटर फुटप्रिंट (Water footprint) से क्या तात्पर्य है?",
      optionsEn: ["The total volume of freshwater used to produce the goods and services consumed by an individual or community", "The size of footprints in wet beach sand", "Rainfall volume measurement", "Ocean depth level"],
      optionsHi: ["किसी व्यक्ति या समुदाय द्वारा उपभोग किए जाने वाले सामान और सेवाओं के उत्पादन में उपयोग किए जाने वाले मीठे पानी की कुल मात्रा", "गीली समुद्र तट की रेत पर पैरों के निशान का आकार", "वर्षा की मात्रा मापन", "समुद्र की गहराई का स्तर"],
      answer: 0,
      exp: "Explanation (En): A water footprint measures both direct and indirect freshwater consumption embedded in food, clothes, and energy.\nस्पष्टीकरण (Hi): हमारे द्वारा उपयोग की जाने वाली वस्तुओं (खाना, कपड़े) को बनाने में कुल जितना मीठा पानी खर्च होता है, उसे वाटर फुटप्रिंट कहते हैं।"
    },
    {
      qEn: "What is the primary objective of wildlife sanctuaries?",
      qHi: "वन्यजीव अभ्यारण्यों (Wildlife sanctuaries) का प्राथमिक उद्देश्य क्या होता है?",
      optionsEn: ["To protect wild animals and their habitats from hunting, poaching, and human disturbance", "To breed exotic pets for sale", "To clear land for mining", "To harvest timber"],
      optionsHi: ["शिकार, अवैध शिकार और मानवीय हस्तक्षेप से जंगली जानवरों और उनके आवासों की रक्षा करना", "बिक्री के लिए विदेशी पालतू जानवर पालना", "खनन के लिए जमीन साफ करना", "लकड़ी काटना"],
      answer: 0,
      exp: "Explanation (En): Wildlife sanctuaries provide a safe, regulated natural haven for endangered species to thrive without human threat.\nस्पष्टीकरण (Hi): वन्यजीव अभ्यारण्य जानवरों को उनके प्राकृतिक घर में शिकार और इंसानी दखल से सुरक्षित रखने के लिए बनाए जाते हैं।"
    },
    {
      qEn: "What is a biosphere reserve?",
      qHi: "बायोस्फीयर रिजर्व (Biosphere reserve) क्या होता है?",
      optionsEn: ["An international conservation area designated to promote biodiversity conservation alongside sustainable economic development", "A zoo with cages", "A commercial timber park", "An urban city garden"],
      optionsHi: ["सतही आर्थिक विकास के साथ-साथ जैव विविधता संरक्षण को बढ़ावा देने के लिए नामित एक अंतरराष्ट्रीय संरक्षण क्षेत्र", "पिंजरों वाला चिड़ियाघर", "एक व्यावसायिक लकड़ी पार्क", "एक शहरी शहर का बगीचा"],
      answer: 0,
      exp: "Explanation (En): Biosphere reserves feature zoned areas (core, buffer, transition) balancing strict nature protection with sustainable local use.\nस्पष्टीकरण (Hi): बायोस्फीयर रिजर्व बड़े संरक्षित क्षेत्र होते हैं जिनमें कड़े संरक्षण के साथ-साथ स्थानीय लोगों के सतत विकास का भी ध्यान रखा जाता है।"
    },
    {
      qEn: "What is the tragedy of the commons?",
      qHi: "अर्थशास्त्र और पर्यावरण में 'कॉमन्स की त्रासदी' (Tragedy of the commons) का सिद्धांत क्या है?",
      optionsEn: ["An economic problem where individuals, acting independently according to self-interest, behave contrary to the best interest of the whole group by depleting a shared resource", "Public parks being cleaned", "Government planting trees", "Sharing solar energy"],
      optionsHi: ["एक आर्थिक समस्या जहाँ व्यक्तिगत स्वार्थ के कारण लोग साझा संसाधनों का अत्यधिक दोहन करके पूरे समूह के हितों को नुकसान पहुँचाते हैं", "सार्वजनिक पार्कों की सफाई", "सरकार द्वारा पेड़ लगाना", "सौर ऊर्जा साझा करना"],
      answer: 0,
      exp: "Explanation (En): The tragedy of the commons explains how shared resources like oceans, forests, or grazing lands get overexploited if unregulated.\nस्पष्टीकरण (Hi): यह सिद्धांत बताता है कि जब कोई संसाधन साझा (Public) होता है, तो व्यक्तिगत लालच के कारण सब उसका इतना दोहन करते हैं कि वह नष्ट हो जाता है।"
    },
    {
      qEn: "What is energy conservation?",
      qHi: "ऊर्जा संरक्षण (Energy conservation) का क्या अर्थ है?",
      optionsEn: ["The practice of reducing the quantity of energy consumed through efficient use and behavior changes", "Using more electricity daily", "Leaving lights on overnight", "Building more coal plants"],
      optionsHi: ["कुशल उपयोग और व्यवहार में बदलाव के माध्यम से खपत की जाने वाली ऊर्जा की मात्रा को कम करने का अभ्यास", "रोज अधिक बिजली उपयोग करना", "रात भर लाइटें खुली रखना", "अधिक कोयला संयंत्र बनाना"],
      answer: 0,
      exp: "Explanation (En): Energy conservation reduces carbon footprints and resource depletion by minimizing waste and optimizing efficiency.\nस्पष्टीकरण (Hi): ऊर्जा की बर्बादी रोकना और कम बिजली या ईंधन में काम चलाना ऊर्जा संरक्षण कहलाता है।"
    },
    {
      qEn: "What is eco-tourism?",
      qHi: "इको-टूरिज्म (Eco-tourism) किसे कहते हैं?",
      optionsEn: ["Responsible travel to natural areas that conserves the environment, sustains the well-being of the local people, and involves interpretation and education", "Luxury resort tourism in cities", "Mass commercial hotel building in forests", "Hunting tourism"],
      optionsHi: ["प्राकृतिक क्षेत्रों की जिम्मेदारी से यात्रा जो पर्यावरण का संरक्षण करती है, स्थानीय लोगों के कल्याण को बनाए रखती है और शिक्षा देती है", "शहरों में लग्जरी रिसॉर्ट पर्यटन", "जंगलों में बड़े पैमाने पर व्यावसायिक होटल निर्माण", "शिकार पर्यटन"],
      answer: 0,
      exp: "Explanation (En): Eco-tourism promotes low-impact travel to fragile natural environments, supporting conservation and local indigenous communities.\nस्पष्टीकरण (Hi): प्रकृति और वन्यजीवों को नुकसान पहुँचाए बिना पर्यावरण अनुकूल पर्यटन को बढ़ावा देना इको-टूरिज्म है।"
    },
    {
      qEn: "Why are wetlands considered vital natural resources?",
      qHi: "आर्द्रभूमियों (Wetlands) को महत्वपूर्ण प्राकृतिक संसाधन क्यों माना जाता है?",
      optionsEn: ["Because they act as natural water purifiers, flood absorbers, and rich biodiversity habitats", "Because they are dry barren lands", "Because they cause air pollution", "Because they have no ecological value"],
      optionsHi: ["क्योंकि वे प्राकृतिक जल शोधक, बाढ़ अवशोषक और समृद्ध जैव विविधता आवास के रूप में कार्य करते हैं", "क्योंकि वे सूखी बंजर भूमि हैं", "क्योंकि वे वायु प्रदूषण पैदा करते हैं", "क्योंकि उनका कोई पारिस्थितिक मूल्य नहीं है"],
      answer: 0,
      exp: "Explanation (En): Wetlands filter pollutants, absorb storm surges, recharge groundwater, and support immense bird and aquatic life.\nस्पष्टीकरण (Hi): आर्द्रभूमियां (जैसे झीलें और दलदल) प्राकृतिक स्पंज की तरह पानी साफ करती हैं, बाढ़ रोकती हैं और पक्षियों का आवास होती हैं।"
    }
  ]
});
