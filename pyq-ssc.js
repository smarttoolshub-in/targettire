// TargetTire PYQ Database
// Structure preserved: Exam -> Year -> Month -> Shift -> Questions
// Stage definitions synchronized from exam-content.js.
// Existing PYQ question data is preserved exactly; stage is NOT guessed where the source paper does not identify it.

window.pyqExamStages = {
  "SSC CGL": [
    {
      "key": "tier_i_cbt_1",
      "title": "Tier-I / CBT-1",
      "description": "Objective Computer Based Examination"
    },
    {
      "key": "tier_ii_cbt_2",
      "title": "Tier-II / CBT-2",
      "description": "Computer Based Examination with multiple sections/modules"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Verification of required documents"
    },
    {
      "key": "medical_physical_standards",
      "title": "Medical / Physical Standards",
      "description": "Applicable to specific posts where prescribed"
    }
  ],
  "SSC CHSL": [
    {
      "key": "tier_i_cbt_1",
      "title": "Tier-I / CBT-1",
      "description": "Computer Based Examination"
    },
    {
      "key": "tier_ii",
      "title": "Tier-II",
      "description": "Computer Based Examination / Skill or Typing assessment as applicable"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Verification of required documents"
    }
  ],
  "SSC GD Constable": [
    {
      "key": "computer_based_examination",
      "title": "Computer Based Examination",
      "description": "Objective computer based test"
    },
    {
      "key": "pet",
      "title": "PET",
      "description": "Physical Efficiency Test"
    },
    {
      "key": "pst",
      "title": "PST",
      "description": "Physical Standard Test"
    },
    {
      "key": "medical_examination",
      "title": "Medical Examination",
      "description": "Medical fitness assessment"
    }
  ],
  "SSC Selection Post": [
    {
      "key": "computer_based_examination",
      "title": "Computer Based Examination",
      "description": "Objective multiple-choice computer based examination"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Post/qualification-specific verification"
    }
  ],
  "SSC MTS": [
    {
      "key": "computer_based_examination",
      "title": "Computer Based Examination",
      "description": "Computer based examination in sessions"
    },
    {
      "key": "pet_pst",
      "title": "PET / PST",
      "description": "Applicable for Havaldar posts"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Verification of required documents"
    }
  ],
  "SSC CPO": [
    {
      "key": "paper_i_cbt",
      "title": "Paper-I / CBT",
      "description": "Computer Based Examination"
    },
    {
      "key": "pst_pet",
      "title": "PST / PET",
      "description": "Physical Standard and Physical Endurance Tests"
    },
    {
      "key": "paper_ii",
      "title": "Paper-II",
      "description": "English Language & Comprehension"
    },
    {
      "key": "detailed_medical_examination",
      "title": "Detailed Medical Examination",
      "description": "Medical fitness assessment"
    }
  ],
  "SSC Stenographer": [
    {
      "key": "computer_based_examination",
      "title": "Computer Based Examination",
      "description": "General Intelligence, General Awareness and English"
    },
    {
      "key": "skill_test",
      "title": "Skill Test",
      "description": "Stenography skill assessment"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Verification of required documents"
    }
  ],
  "SSC JE": [
    {
      "key": "paper_i_cbt",
      "title": "Paper-I / CBT",
      "description": "Objective Computer Based Examination"
    },
    {
      "key": "paper_ii",
      "title": "Paper-II",
      "description": "Subject-specific technical examination"
    },
    {
      "key": "document_verification",
      "title": "Document Verification",
      "description": "Verification of required documents"
    }
  ]
};
window.pyqExamStageMap = {};

window.pyqDatabase = window.pyqDatabase || {};
Object.assign(window.pyqDatabase, {
  "SSC CGL": {
   
    "2024": {
      "January": {
        "Shift 1 (Morning)": [
          {
            "qEn": "Sample PYQ question 1 for SSC CGL — 2024 January, Shift 1 (Morning).",
            "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 1 — 2024 January, Shift 1 (Morning)।",
            "optionsEn": [
              "Option A",
              "Option B",
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
            "qEn": "Sample PYQ question 2 for SSC CGL — 2024 January, Shift 1 (Morning).",
            "qHi": "SSC CGL के लिए नमूना PYQ प्रश्न 2 — 2024 January, Shift 1 (Morning)।",
            "optionsEn": [
              "Option A",
              "Option B",
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
  "SSC CHSL": {
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
  "SSC GD Constable": {
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
  },
  "SSC Selection Post": {
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
  },
  "SSC MTS": {
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
  },
  "SSC CPO": {
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
  "SSC Stenographer": {
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
  },
  "SSC JE": {
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
  }
} );
