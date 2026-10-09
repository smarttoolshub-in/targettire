/* TargetTire PYQ data module
 * Loads official source links for exams. It deliberately does not invent or mislabel questions as previous-year questions.
 * Add verified paper records to each exam's papers array when an exact paper and answer key are confirmed.
 */
(function (global) {
  'use strict';
  const pyqData = {
    version: '1.1.0',
    updatedAt: '2026-10-09',
    groups: [
  "Banking",
  "Bihar Government",
  "Other Government Exams",
  "Railway",
  "SSC",
  "UPSC"
],
    exams: [
  {
    "name": "SSC CGL",
    "group": "SSC",
    "sourceIds": ["ssc"],
    "sources": [
      {"id":"ssc","title":"SSC Official Answer Key / Question Paper Notices","url":"https://ssc.gov.in/home/answer-key"},
      {"id":"prepp-2025","title":"SSC CGL 2025 — year/date/shift-wise paper links (Hindi & English where listed)","url":"https://prepp.in/ssc-cgl-exam/question%2520paper%25202025"},
      {"id":"prepp-2024","title":"SSC CGL 2024 — year/date/shift-wise paper links","url":"https://prepp.in/ssc-cgl-exam/question-paper-2024"},
      {"id":"prepp-2023","title":"SSC CGL 2023 — year/date/shift-wise paper links","url":"https://prepp.in/ssc-cgl-exam/question-paper-2023"}
    ],
    "papers": [
      {"year":2025,"tier":"Tier 1","title":"2025 Tier 1 — date & shift-wise papers","language":"Hindi / English","url":"https://prepp.in/ssc-cgl-exam/question%2520paper%25202025"},
      {"year":2024,"tier":"Tier 1 & Tier 2","title":"2024 papers — date & shift-wise","language":"Hindi / English where available","url":"https://prepp.in/ssc-cgl-exam/question-paper-2024"},
      {"year":2023,"tier":"Tier 1 & Tier 2","title":"2023 papers — date & shift-wise","language":"Hindi / English","url":"https://prepp.in/ssc-cgl-exam/question-paper-2023"}
    ],
    "status":"shift_wise_links_plus_sample_quiz",
    "note":"ऊपर के पेपर लिंक में असली वर्ष/शिफ्ट वाले प्रश्नपत्र और उत्तर-कुंजी के स्रोत हैं। नीचे दिए 5 सवाल 12 सितम्बर 2025 Shift 1 के सार्वजनिक पेपर पेज पर दिखे सवालों के संक्षिप्त पुनर्लेखन हैं; पूरे पेपर के लिए स्रोत लिंक खोलें।",
    "questionSetLabel":"SSC CGL Tier 1 — 12 Sep 2025, Shift 1 (sample questions)",
    "questionSource":"https://prepp.in/paper/ssc-cgl-tier-1-question-paper-12-sep-2025-shift-1-69ec6ee250fe9ad2785db560",
    "questions":[
      {"id":"cgl25s1q1","subject":"Reasoning","question":"संबंध पूरा करें: Watt का संबंध Power से है, उसी तरह Pascal का संबंध किससे है?","options":["ऊर्जा","तापमान","दाब","बल"],"answer":2,"explanation":"Pascal दाब की SI इकाई है।","sourceNote":"12 Sep 2025, Shift 1 — प्रश्न का संक्षिप्त पुनर्लेखन"},
      {"id":"cgl25s1q2","subject":"General Awareness","question":"Mekong नदी का उद्गम तिब्बत क्षेत्र में है। Amazon नदी का उद्गम मुख्यतः किस देश में माना जाता है?","options":["चिली","पेरू","कोलंबिया","इक्वाडोर"],"answer":1,"explanation":"Amazon नदी का मुख्य उद्गम पेरू के Andes क्षेत्र में है।","sourceNote":"12 Sep 2025, Shift 1 — प्रश्न का संक्षिप्त पुनर्लेखन"},
      {"id":"cgl25s1q3","subject":"Reasoning","question":"अक्षर-श्रृंखला पूरी करें: CGK, GKO, KOS, OSW, ?","options":["SDA","KNB","SWA","KJH"],"answer":2,"explanation":"हर अक्षर अपनी अगली स्थिति में 4 स्थान आगे बढ़ता है; W के बाद A आता है।","sourceNote":"12 Sep 2025, Shift 1 — प्रश्न का संक्षिप्त पुनर्लेखन"},
      {"id":"cgl25s1q4","subject":"Reasoning","question":"श्रृंखला में अगला समूह चुनें: MIN, NJM, OKL, PLK, ?","options":["QWS","HGF","QMJ","UJH"],"answer":2,"explanation":"पहला और दूसरा अक्षर क्रमशः एक-एक आगे बढ़ते हैं, तीसरा अक्षर पीछे आता है: QMJ।","sourceNote":"12 Sep 2025, Shift 1 — प्रश्न का संक्षिप्त पुनर्लेखन"},
      {"id":"cgl25s1q5","subject":"Reasoning","question":"श्रृंखला पूरी करें: BRF, EUH, HXJ, KAL, ?","options":["NMB","NKH","NHG","NDN"],"answer":3,"explanation":"पहला अक्षर +3, दूसरा अक्षर +3 (Z के बाद A), और तीसरा अक्षर +2 से बढ़ता है: NDN।","sourceNote":"12 Sep 2025, Shift 1 — प्रश्न का संक्षिप्त पुनर्लेखन"}
    ]
  },
  {
    "name": "SSC CHSL",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC GD Constable",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC Selection Post",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC MTS",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC CPO",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC Stenographer",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SSC JE",
    "group": "SSC",
    "sourceIds": [
      "ssc"
    ],
    "sources": [
      {
        "id": "ssc",
        "title": "Staff Selection Commission — Answer Key / Question Paper notices",
        "url": "https://ssc.gov.in/home/answer-key"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "IBPS RRB Clerk",
    "group": "Railway",
    "sourceIds": [
      "ibps"
    ],
    "sources": [
      {
        "id": "ibps",
        "title": "Institute of Banking Personnel Selection — official website",
        "url": "https://www.ibps.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "IBPS RRB PO",
    "group": "Railway",
    "sourceIds": [
      "ibps"
    ],
    "sources": [
      {
        "id": "ibps",
        "title": "Institute of Banking Personnel Selection — official website",
        "url": "https://www.ibps.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "IBPS Clerk",
    "group": "Banking",
    "sourceIds": [
      "ibps"
    ],
    "sources": [
      {
        "id": "ibps",
        "title": "Institute of Banking Personnel Selection — official website",
        "url": "https://www.ibps.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "IBPS PO",
    "group": "Banking",
    "sourceIds": [
      "ibps"
    ],
    "sources": [
      {
        "id": "ibps",
        "title": "Institute of Banking Personnel Selection — official website",
        "url": "https://www.ibps.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SBI Clerk",
    "group": "Banking",
    "sourceIds": [
      "sbi"
    ],
    "sources": [
      {
        "id": "sbi",
        "title": "State Bank of India — Careers",
        "url": "https://sbi.co.in/web/careers"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "SBI PO",
    "group": "Banking",
    "sourceIds": [
      "sbi"
    ],
    "sources": [
      {
        "id": "sbi",
        "title": "State Bank of India — Careers",
        "url": "https://sbi.co.in/web/careers"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB NTPC",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB NTPC UG",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB Group D",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB ALP",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB Technician Grade 1",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB Technician Grade 3",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB JE",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB Section Controller",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "RRB Constable",
    "group": "Railway",
    "sourceIds": [
      "rrb"
    ],
    "sources": [
      {
        "id": "rrb",
        "title": "RRB Chandigarh — recruitment / CEN notices",
        "url": "https://www.rrbcdg.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Civil Service Exam (UPSC CSE)",
    "group": "UPSC",
    "sourceIds": [
      "upsc"
    ],
    "sources": [
      {
        "id": "upsc",
        "title": "UPSC — Previous Question Papers",
        "url": "https://www.upsc.gov.in/examinations/previous-question-papers"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Defense Exam (NDA & CDS)",
    "group": "UPSC",
    "sourceIds": [
      "upsc"
    ],
    "sources": [
      {
        "id": "upsc",
        "title": "UPSC — Previous Question Papers",
        "url": "https://www.upsc.gov.in/examinations/previous-question-papers"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "State Government & PCS Exams",
    "group": "Other Government Exams",
    "sourceIds": [
      "state-pcs"
    ],
    "sources": [
      {
        "id": "state-pcs",
        "title": "State Public Service Commissions — official portals",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Police Exam (SI & Constable)",
    "group": "Other Government Exams",
    "sourceIds": [
      "generic"
    ],
    "sources": [],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Other Government Exams",
    "group": "Other Government Exams",
    "sourceIds": [
      "generic"
    ],
    "sources": [],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC CCE",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Teacher Recruitment Examination (TRE)",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Assistant Section Officer",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Bihar Judicial Services",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Prosecution Officer",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Auditor",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Assistant Engineer Civil",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Assistant Engineer Mechanical",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Assistant Engineer Electrical",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSC Stenographer",
    "group": "Bihar Government",
    "sourceIds": [
      "bpsc"
    ],
    "sources": [
      {
        "id": "bpsc",
        "title": "BPSC — Question Booklets",
        "url": "https://bpsc.bihar.gov.in/question-booklets/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC 4th Graduate Level",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC Inter Level (10+2)",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC Office Attendant (10th Level)",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC Stenographer / Steno Typist",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC Field Assistant",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BSSC Sports Trainer",
    "group": "Bihar Government",
    "sourceIds": [
      "bssc"
    ],
    "sources": [
      {
        "id": "bssc",
        "title": "Bihar Staff Selection Commission — official portal",
        "url": "https://bssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Junior Engineer Civil",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Junior Engineer Mechanical",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Junior Engineer Electrical",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Staff Nurse",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC ANM",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Laboratory Assistant – Science",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Laboratory Assistant – Engineering",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Instructor – ITI Trades",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC X-Ray Technician",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC OT Assistant",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Dresser",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Pharmacist",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Food Safety Officer",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BTSC Scientific Assistant",
    "group": "Bihar Government",
    "sourceIds": [
      "btsc",
      "btsc-notices"
    ],
    "sources": [
      {
        "id": "btsc",
        "title": "BTSC — Recruitment notices",
        "url": "https://btsc.bihar.gov.in/recruitment"
      },
      {
        "id": "btsc-notices",
        "title": "BTSC — Notice Board",
        "url": "https://btsc.bihar.gov.in/notice-board"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC Police Sub-Inspector",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC Special Branch SI",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC ASI Operation",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC ASI Technical",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC Steno ASI",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "BPSSC Enforcement SI",
    "group": "Other Government Exams",
    "sourceIds": [
      "bpssc"
    ],
    "sources": [
      {
        "id": "bpssc",
        "title": "Bihar Police Subordinate Services Commission — official portal",
        "url": "https://bpssc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Constable",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Constable Operator",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Driver Constable",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Prohibition Constable",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Jail Warder",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Mobile Squad Constable",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "CSBC Special Branch Constable",
    "group": "Bihar Government",
    "sourceIds": [
      "csbc"
    ],
    "sources": [
      {
        "id": "csbc",
        "title": "Central Selection Board of Constable, Bihar — official portal",
        "url": "https://csbc.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Civil Court Clerk",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-courts"
    ],
    "sources": [
      {
        "id": "bihar-courts",
        "title": "Patna High Court / Bihar Civil Court official portal",
        "url": "https://patnahighcourt.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Civil Court Stenographer",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-courts"
    ],
    "sources": [
      {
        "id": "bihar-courts",
        "title": "Patna High Court / Bihar Civil Court official portal",
        "url": "https://patnahighcourt.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Civil Court Court Reader",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-courts"
    ],
    "sources": [
      {
        "id": "bihar-courts",
        "title": "Patna High Court / Bihar Civil Court official portal",
        "url": "https://patnahighcourt.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Civil Court Peon",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-courts"
    ],
    "sources": [
      {
        "id": "bihar-courts",
        "title": "Patna High Court / Bihar Civil Court official portal",
        "url": "https://patnahighcourt.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Vidhan Sabha Secretariat",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-vidhan-sabha"
    ],
    "sources": [
      {
        "id": "bihar-vidhan-sabha",
        "title": "Bihar Vidhan Sabha — official website",
        "url": "https://vidhansabha.bihar.gov.in/"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Vidhan Parishad Secretariat",
    "group": "Bihar Government",
    "sourceIds": [
      "generic"
    ],
    "sources": [],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Home Guard",
    "group": "Bihar Government",
    "sourceIds": [
      "generic"
    ],
    "sources": [],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Bihar Health Department Recruitment",
    "group": "Bihar Government",
    "sourceIds": [
      "bihar-health"
    ],
    "sources": [
      {
        "id": "bihar-health",
        "title": "Bihar Health Department — official portal",
        "url": "https://state.bihar.gov.in/health/CitizenHome.html"
      }
    ],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  },
  {
    "name": "Other Bihar Departmental Exams",
    "group": "Bihar Government",
    "sourceIds": [
      "generic"
    ],
    "sources": [],
    "papers": [],
    "status": "official_source_links_only",
    "note": "इस परीक्षा के असली प्रश्न-पत्र/उत्तर-कुंजी का सत्यापित डेटा इस फ़ाइल में अभी नहीं है। नीचे दिए आधिकारिक स्रोत पर उपलब्ध पेपर देखें; इसे नकली PYQ के रूप में नहीं दिखाया जाएगा।"
  }
],
    getExam(name) { return this.exams.find(e => e.name === name) || null; },
    getGroups() { return [...new Set(this.exams.map(e => e.group))]; },
    getExamsByGroup(group) { return this.exams.filter(e => e.group === group); },
    search(term) { const q = String(term || '').toLowerCase(); return this.exams.filter(e => e.name.toLowerCase().includes(q) || e.group.toLowerCase().includes(q)); }
  };
  global.pyqData = pyqData;
  // Compatibility alias for code that expects the earlier name.
  global.targetTirePYQ = pyqData;
})(window);
