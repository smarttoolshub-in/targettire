// TargetTire PYQ Database - Modular File
// Structure: Exam -> Year -> Month -> Shift -> Questions
// Keep source wording/data unchanged; add new PYQs to the appropriate exam file.
window.pyqDatabase = window.pyqDatabase || {};
Object.assign(window.pyqDatabase, {
    "SSC CGL": {
    "2025": {
      "Month not specified": {
        "Shift 1 (Morning)": [
          {
            qEn: "What is the value of sin(30°) * cos(60°) + cos(30°) * sin(60°)?",
            qHi: "sin(30°) * cos(60°) + cos(30°) * sin(60°) का मान क्या है?",
            optionsEn: ["0", "1/2", "1", "√3/2"],
            optionsHi: ["0", "1/2", "1", "√3/2"],
            answer: 2,
            exp: "This is based on the sine addition formula sin(A+B) = sin(30+60) = sin(90°) = 1."
          }
        ],
        "Shift 2 (Evening)": [
          {
            qEn: "Who was the founder of the Maurya Empire?",
            qHi: "मौर्य साम्राज्य के संस्थापक कौन थे?",
            optionsEn: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
            optionsHi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "समुद्रगुप्त"],
            answer: 1,
            exp: "Chandragupta Maurya founded the Maurya Empire with the help of Chanakya in 322 BC."
          }
        ]
      }
    },
    "2024": {
      "Month not specified": {
        "Shift 1": [
          {
            qEn: "Which Article deals with the Right to Equality?",
            qHi: "कौन सा अनुच्छेद 'समानता के अधिकार' से संबंधित है?",
            optionsEn: ["Article 14-18", "Article 19-22", "Article 23-24", "Article 25-28"],
            optionsHi: ["अनुच्छेद 14-18", "अनुच्छेद 19-22", "अनुच्छेद 23-24", "अनुच्छेद 25-28"],
            answer: 0,
            exp: "Articles 14 to 18 guarantee the Right to Equality in the Indian Constitution."
          }
        ]
      }
    }
    // Add "2026": { "Month": { "Shift": [ ... ] } } when 2026 source questions are available.
  },
    "SSC CHSL": {
    "2025": {
      "Month not specified": {
        "Shift 1": [
          {
            qEn: "What is the capital of Australia?",
            qHi: "ऑर्स्ट्रेलिया की राजधानी क्या है?",
            optionsEn: ["Sydney", "Melbourne", "Canberra", "Perth"],
            optionsHi: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
            answer: 2,
            exp: "Canberra is the capital city of Australia."
          }
        ]
      }
    }
  }
  });
