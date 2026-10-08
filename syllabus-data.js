// TargetTire - Year-wise syllabus registry.
// Add a new year by copying the 2026 block, changing the subjects/topics,
// and adding downloadUrl when the PDF is available, e.g.
// downloadUrl: "syllabus/SSC-CGL/SSC-CGL-Syllabus-2027.pdf"
window.examSyllabusData = window.examSyllabusData || {};
(function(){
  const source = window.examContent || {};
  Object.keys(source).forEach(function(examName){
    const syllabus = source[examName].syllabus || source[examName].syllabusData || source[examName].subjects || [];
    window.examSyllabusData[examName] = window.examSyllabusData[examName] || {};
    if (!window.examSyllabusData[examName]["2026"]) {
      window.examSyllabusData[examName]["2026"] = { subjects: syllabus, downloadUrl: "" };
    }
  });
})();

// Future update example:
// window.examSyllabusData["SSC CGL"]["2027"] = {
//   subjects: [
//     { subject: "Mathematics", topics: ["..."] },
//     { subject: "Reasoning", topics: ["..."] }
//   ],
//   downloadUrl: "syllabus/SSC-CGL/SSC-CGL-Syllabus-2027.pdf"
// };


// Bihar State Government Exams - year-wise syllabus registry.
Object.assign(window.examSyllabusData = window.examSyllabusData || {}, {
  "BPSC CCE": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "History of Bihar & India",
          "topics": []
        },
        {
          "subject": "Geography",
          "topics": []
        },
        {
          "subject": "Polity",
          "topics": []
        },
        {
          "subject": "Economy",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Essay & General Hindi (Mains)",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "History of Bihar & India",
          "topics": []
        },
        {
          "subject": "Geography",
          "topics": []
        },
        {
          "subject": "Polity",
          "topics": []
        },
        {
          "subject": "Economy",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Essay & General Hindi (Mains)",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "History of Bihar & India",
          "topics": []
        },
        {
          "subject": "Geography",
          "topics": []
        },
        {
          "subject": "Polity",
          "topics": []
        },
        {
          "subject": "Economy",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Essay & General Hindi (Mains)",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Teacher Recruitment Examination (TRE)": {
    "2026": {
      "subjects": [
        {
          "subject": "Language",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Teaching Aptitude",
          "topics": []
        },
        {
          "subject": "Subject-specific paper",
          "topics": []
        },
        {
          "subject": "Bihar General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Language",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Teaching Aptitude",
          "topics": []
        },
        {
          "subject": "Subject-specific paper",
          "topics": []
        },
        {
          "subject": "Bihar General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Language",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Teaching Aptitude",
          "topics": []
        },
        {
          "subject": "Subject-specific paper",
          "topics": []
        },
        {
          "subject": "Bihar General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Assistant Section Officer": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science & Mathematics",
          "topics": []
        },
        {
          "subject": "Mental Ability",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science & Mathematics",
          "topics": []
        },
        {
          "subject": "Mental Ability",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science & Mathematics",
          "topics": []
        },
        {
          "subject": "Mental Ability",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Bihar Judicial Services": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Law of Evidence & Procedure",
          "topics": []
        },
        {
          "subject": "Constitutional Law",
          "topics": []
        },
        {
          "subject": "Substantive Law",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Law of Evidence & Procedure",
          "topics": []
        },
        {
          "subject": "Constitutional Law",
          "topics": []
        },
        {
          "subject": "Substantive Law",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Law of Evidence & Procedure",
          "topics": []
        },
        {
          "subject": "Constitutional Law",
          "topics": []
        },
        {
          "subject": "Substantive Law",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Prosecution Officer": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Criminal Law",
          "topics": []
        },
        {
          "subject": "Criminal Procedure",
          "topics": []
        },
        {
          "subject": "Evidence",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Criminal Law",
          "topics": []
        },
        {
          "subject": "Criminal Procedure",
          "topics": []
        },
        {
          "subject": "Evidence",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Criminal Law",
          "topics": []
        },
        {
          "subject": "Criminal Procedure",
          "topics": []
        },
        {
          "subject": "Evidence",
          "topics": []
        },
        {
          "subject": "Other prescribed law papers",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Auditor": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Quantitative Aptitude",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Subject/accounting topics as notified",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Quantitative Aptitude",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Subject/accounting topics as notified",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Quantitative Aptitude",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Subject/accounting topics as notified",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Assistant Engineer Civil": {
    "2026": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Assistant Engineer Mechanical": {
    "2026": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Assistant Engineer Electrical": {
    "2026": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSC Stenographer": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography / typing skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography / typing skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography / typing skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC 4th Graduate Level": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC Inter Level (10+2)": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC Office Attendant (10th Level)": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic Hindi/English",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic Hindi/English",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic Hindi/English",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC Stenographer / Steno Typist": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography & Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography & Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Computer basics",
          "topics": []
        },
        {
          "subject": "Stenography & Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC Field Assistant": {
    "2026": {
      "subjects": [
        {
          "subject": "Agriculture",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Agriculture",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Agriculture",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BSSC Sports Trainer": {
    "2026": {
      "subjects": [
        {
          "subject": "Sports Science",
          "topics": []
        },
        {
          "subject": "Physical Education",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Sports Science",
          "topics": []
        },
        {
          "subject": "Physical Education",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Sports Science",
          "topics": []
        },
        {
          "subject": "Physical Education",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Junior Engineer Civil": {
    "2026": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Civil Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Junior Engineer Mechanical": {
    "2026": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Mechanical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Junior Engineer Electrical": {
    "2026": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Electrical Engineering",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Staff Nurse": {
    "2026": {
      "subjects": [
        {
          "subject": "Nursing",
          "topics": []
        },
        {
          "subject": "Community Health",
          "topics": []
        },
        {
          "subject": "Medical-Surgical Nursing",
          "topics": []
        },
        {
          "subject": "Child Health",
          "topics": []
        },
        {
          "subject": "Mental Health",
          "topics": []
        },
        {
          "subject": "Obstetric & Gynaecological Nursing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Nursing",
          "topics": []
        },
        {
          "subject": "Community Health",
          "topics": []
        },
        {
          "subject": "Medical-Surgical Nursing",
          "topics": []
        },
        {
          "subject": "Child Health",
          "topics": []
        },
        {
          "subject": "Mental Health",
          "topics": []
        },
        {
          "subject": "Obstetric & Gynaecological Nursing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Nursing",
          "topics": []
        },
        {
          "subject": "Community Health",
          "topics": []
        },
        {
          "subject": "Medical-Surgical Nursing",
          "topics": []
        },
        {
          "subject": "Child Health",
          "topics": []
        },
        {
          "subject": "Mental Health",
          "topics": []
        },
        {
          "subject": "Obstetric & Gynaecological Nursing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC ANM": {
    "2026": {
      "subjects": [
        {
          "subject": "Community Health Nursing",
          "topics": []
        },
        {
          "subject": "Maternal & Child Health",
          "topics": []
        },
        {
          "subject": "Primary Health Care",
          "topics": []
        },
        {
          "subject": "Nutrition",
          "topics": []
        },
        {
          "subject": "First Aid",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Community Health Nursing",
          "topics": []
        },
        {
          "subject": "Maternal & Child Health",
          "topics": []
        },
        {
          "subject": "Primary Health Care",
          "topics": []
        },
        {
          "subject": "Nutrition",
          "topics": []
        },
        {
          "subject": "First Aid",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Community Health Nursing",
          "topics": []
        },
        {
          "subject": "Maternal & Child Health",
          "topics": []
        },
        {
          "subject": "Primary Health Care",
          "topics": []
        },
        {
          "subject": "Nutrition",
          "topics": []
        },
        {
          "subject": "First Aid",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Laboratory Assistant – Science": {
    "2026": {
      "subjects": [
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Physics",
          "topics": []
        },
        {
          "subject": "Chemistry",
          "topics": []
        },
        {
          "subject": "Biology",
          "topics": []
        },
        {
          "subject": "Laboratory basics",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Physics",
          "topics": []
        },
        {
          "subject": "Chemistry",
          "topics": []
        },
        {
          "subject": "Biology",
          "topics": []
        },
        {
          "subject": "Laboratory basics",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Physics",
          "topics": []
        },
        {
          "subject": "Chemistry",
          "topics": []
        },
        {
          "subject": "Biology",
          "topics": []
        },
        {
          "subject": "Laboratory basics",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Laboratory Assistant – Engineering": {
    "2026": {
      "subjects": [
        {
          "subject": "Relevant engineering trade",
          "topics": []
        },
        {
          "subject": "Laboratory practices",
          "topics": []
        },
        {
          "subject": "Technical fundamentals",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Relevant engineering trade",
          "topics": []
        },
        {
          "subject": "Laboratory practices",
          "topics": []
        },
        {
          "subject": "Technical fundamentals",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Relevant engineering trade",
          "topics": []
        },
        {
          "subject": "Laboratory practices",
          "topics": []
        },
        {
          "subject": "Technical fundamentals",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Instructor – ITI Trades": {
    "2026": {
      "subjects": [
        {
          "subject": "Trade theory",
          "topics": []
        },
        {
          "subject": "Workshop calculation & science",
          "topics": []
        },
        {
          "subject": "Engineering drawing",
          "topics": []
        },
        {
          "subject": "Employability skills",
          "topics": []
        },
        {
          "subject": "Trade-specific practical knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Trade theory",
          "topics": []
        },
        {
          "subject": "Workshop calculation & science",
          "topics": []
        },
        {
          "subject": "Engineering drawing",
          "topics": []
        },
        {
          "subject": "Employability skills",
          "topics": []
        },
        {
          "subject": "Trade-specific practical knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Trade theory",
          "topics": []
        },
        {
          "subject": "Workshop calculation & science",
          "topics": []
        },
        {
          "subject": "Engineering drawing",
          "topics": []
        },
        {
          "subject": "Employability skills",
          "topics": []
        },
        {
          "subject": "Trade-specific practical knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC X-Ray Technician": {
    "2026": {
      "subjects": [
        {
          "subject": "Radiography",
          "topics": []
        },
        {
          "subject": "Radiation physics",
          "topics": []
        },
        {
          "subject": "Imaging techniques",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Radiography",
          "topics": []
        },
        {
          "subject": "Radiation physics",
          "topics": []
        },
        {
          "subject": "Imaging techniques",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Radiography",
          "topics": []
        },
        {
          "subject": "Radiation physics",
          "topics": []
        },
        {
          "subject": "Imaging techniques",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC OT Assistant": {
    "2026": {
      "subjects": [
        {
          "subject": "Operation theatre procedures",
          "topics": []
        },
        {
          "subject": "Sterilization",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "Basic pharmacology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Operation theatre procedures",
          "topics": []
        },
        {
          "subject": "Sterilization",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "Basic pharmacology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Operation theatre procedures",
          "topics": []
        },
        {
          "subject": "Sterilization",
          "topics": []
        },
        {
          "subject": "Patient care",
          "topics": []
        },
        {
          "subject": "Anatomy & physiology",
          "topics": []
        },
        {
          "subject": "Basic pharmacology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Dresser": {
    "2026": {
      "subjects": [
        {
          "subject": "First aid",
          "topics": []
        },
        {
          "subject": "Wound care",
          "topics": []
        },
        {
          "subject": "Basic anatomy",
          "topics": []
        },
        {
          "subject": "Hospital procedures",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "First aid",
          "topics": []
        },
        {
          "subject": "Wound care",
          "topics": []
        },
        {
          "subject": "Basic anatomy",
          "topics": []
        },
        {
          "subject": "Hospital procedures",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "First aid",
          "topics": []
        },
        {
          "subject": "Wound care",
          "topics": []
        },
        {
          "subject": "Basic anatomy",
          "topics": []
        },
        {
          "subject": "Hospital procedures",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Pharmacist": {
    "2026": {
      "subjects": [
        {
          "subject": "Pharmaceutics",
          "topics": []
        },
        {
          "subject": "Pharmacology",
          "topics": []
        },
        {
          "subject": "Pharmacognosy",
          "topics": []
        },
        {
          "subject": "Pharmaceutical chemistry",
          "topics": []
        },
        {
          "subject": "Hospital pharmacy",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Pharmaceutics",
          "topics": []
        },
        {
          "subject": "Pharmacology",
          "topics": []
        },
        {
          "subject": "Pharmacognosy",
          "topics": []
        },
        {
          "subject": "Pharmaceutical chemistry",
          "topics": []
        },
        {
          "subject": "Hospital pharmacy",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Pharmaceutics",
          "topics": []
        },
        {
          "subject": "Pharmacology",
          "topics": []
        },
        {
          "subject": "Pharmacognosy",
          "topics": []
        },
        {
          "subject": "Pharmaceutical chemistry",
          "topics": []
        },
        {
          "subject": "Hospital pharmacy",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Food Safety Officer": {
    "2026": {
      "subjects": [
        {
          "subject": "Food safety law",
          "topics": []
        },
        {
          "subject": "Food chemistry",
          "topics": []
        },
        {
          "subject": "Microbiology",
          "topics": []
        },
        {
          "subject": "Food processing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Food safety law",
          "topics": []
        },
        {
          "subject": "Food chemistry",
          "topics": []
        },
        {
          "subject": "Microbiology",
          "topics": []
        },
        {
          "subject": "Food processing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Food safety law",
          "topics": []
        },
        {
          "subject": "Food chemistry",
          "topics": []
        },
        {
          "subject": "Microbiology",
          "topics": []
        },
        {
          "subject": "Food processing",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BTSC Scientific Assistant": {
    "2026": {
      "subjects": [
        {
          "subject": "Relevant science subject",
          "topics": []
        },
        {
          "subject": "Laboratory methods",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Relevant science subject",
          "topics": []
        },
        {
          "subject": "Laboratory methods",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Relevant science subject",
          "topics": []
        },
        {
          "subject": "Laboratory methods",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC Police Sub-Inspector": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Constitution",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency preparation",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Constitution",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency preparation",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "Constitution",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency preparation",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC Special Branch SI": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Relevant special-branch topics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Relevant special-branch topics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Relevant special-branch topics",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC ASI Operation": {
    "2026": {
      "subjects": [
        {
          "subject": "Radio/telecommunication basics",
          "topics": []
        },
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Radio/telecommunication basics",
          "topics": []
        },
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Radio/telecommunication basics",
          "topics": []
        },
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC ASI Technical": {
    "2026": {
      "subjects": [
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Telecommunication",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Technical aptitude",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Telecommunication",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Technical aptitude",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Electronics",
          "topics": []
        },
        {
          "subject": "Telecommunication",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Technical aptitude",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC Steno ASI": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography & typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography & typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography & typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "BPSSC Enforcement SI": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Transport rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Transport rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Transport rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Constable": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Constable Operator": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic computer/communication",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic computer/communication",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Basic computer/communication",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Driver Constable": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Traffic rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Vehicle basics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Traffic rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Vehicle basics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Traffic rules",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "Vehicle basics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Prohibition Constable": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Jail Warder": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Mobile Squad Constable": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Road safety",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "CSBC Special Branch Constable": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Civil Court Clerk": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "General Hindi",
          "topics": []
        },
        {
          "subject": "General English",
          "topics": []
        },
        {
          "subject": "Mathematics",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Civil Court Stenographer": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Stenography",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Civil Court Court Reader": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        },
        {
          "subject": "Court terminology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        },
        {
          "subject": "Court terminology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Typing",
          "topics": []
        },
        {
          "subject": "Court terminology",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Civil Court Peon": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Basic Hindi",
          "topics": []
        },
        {
          "subject": "Basic Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Basic Hindi",
          "topics": []
        },
        {
          "subject": "Basic Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Basic Hindi",
          "topics": []
        },
        {
          "subject": "Basic Mathematics",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Vidhan Sabha Secretariat": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Vidhan Parishad Secretariat": {
    "2026": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Hindi",
          "topics": []
        },
        {
          "subject": "English",
          "topics": []
        },
        {
          "subject": "Reasoning",
          "topics": []
        },
        {
          "subject": "Computer",
          "topics": []
        },
        {
          "subject": "Post-specific skill",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Home Guard": {
    "2026": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "General Science",
          "topics": []
        },
        {
          "subject": "Physical efficiency",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Bihar Health Department Recruitment": {
    "2026": {
      "subjects": [
        {
          "subject": "Post-specific professional subject",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Computer/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Post-specific professional subject",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Computer/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Post-specific professional subject",
          "topics": []
        },
        {
          "subject": "General Knowledge",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Computer/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  },
  "Other Bihar Departmental Exams": {
    "2026": {
      "subjects": [
        {
          "subject": "Post-specific subject",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2027": {
      "subjects": [
        {
          "subject": "Post-specific subject",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    },
    "2028": {
      "subjects": [
        {
          "subject": "Post-specific subject",
          "topics": []
        },
        {
          "subject": "General Studies",
          "topics": []
        },
        {
          "subject": "Bihar GK",
          "topics": []
        },
        {
          "subject": "Current Affairs",
          "topics": []
        },
        {
          "subject": "Reasoning/aptitude where applicable",
          "topics": []
        }
      ],
      "downloadUrl": ""
    }
  }
});
