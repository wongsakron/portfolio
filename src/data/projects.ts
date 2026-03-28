export interface Project {
  id: string;
  images: string[];
  tech: string[];
  color: string;
  en: {
    title: string;
    shortDesc: string;
    description: string;
    role: string;
    highlights: string[];
  };
  th: {
    title: string;
    shortDesc: string;
    description: string;
    role: string;
    highlights: string[];
  };
}

export const projects: Project[] = [
  {
    id: "velojob",
    images: ["/projects/velojob.png"],
    tech: ["Next.js", ".NET Core", "SQL Server", "Cloudflare R2", "OpenRouteService"],
    color: "from-blue-500 to-cyan-400",
    en: {
      title: "VeloJob — Job Portal",
      shortDesc: "End-to-end job portal for Biosoft with smart navigation and AI resume parsing.",
      description:
        "A full-featured job portal system built from scratch for Biosoft. Includes a candidate dashboard, employer management, job search with interactive map navigation, and AI-powered resume parsing for automatic profile creation.",
      role: "Sole Full Stack Developer — Architecture, Frontend, Backend, Database Design",
      highlights: [
        "Designed and developed the entire system architecture end-to-end",
        "Smart Location-Based Routing with turn-by-turn navigation (OpenRouteService API)",
        "AI Resume Parsing for automatic data extraction from uploaded resumes",
        "RBAC security system compliant with PDPA standards",
        "High-performance file storage on Cloudflare R2",
        "Personal document reporting with C# and RDLC",
      ],
    },
    th: {
      title: "VeloJob — ระบบสมัครงาน",
      shortDesc: "ระบบเว็บไซต์สมัครงาน Biosoft แบบครบวงจร พร้อม AI อ่านเรซูเม่อัตโนมัติ",
      description:
        "ระบบเว็บไซต์สมัครงานแบบครบวงจรที่พัฒนาตั้งแต่เริ่มต้นสำหรับ Biosoft ประกอบด้วยแดชบอร์ดผู้สมัคร ระบบจัดการนายจ้าง การค้นหางานพร้อมแผนที่นำทาง และ AI อ่านเรซูเม่อัตโนมัติ",
      role: "Full Stack Developer เพียงคนเดียว — ออกแบบสถาปัตยกรรม, Frontend, Backend, ฐานข้อมูล",
      highlights: [
        "ออกแบบและพัฒนาสถาปัตยกรรมระบบทั้งหมดตั้งแต่เริ่มต้นจนจบ",
        "ระบบนำทางค้นหางานแบบเลี้ยวต่อเลี้ยว (OpenRouteService API)",
        "AI Resume Parsing ดึงข้อมูลจากไฟล์เรซูเม่อัตโนมัติ",
        "ระบบรักษาความปลอดภัย RBAC ตามมาตรฐาน PDPA",
        "จัดเก็บไฟล์ประสิทธิภาพสูงบน Cloudflare R2",
        "ระบบออกรายงานเอกสารด้วย C# และ RDLC",
      ],
    },
  },
  {
    id: "kibana-dashboard",
    images: ["/projects/kibana-dashboard.png"],
    tech: ["Kibana", "Elasticsearch", "PostgreSQL", "Geo-index", "Maps API"],
    color: "from-emerald-500 to-teal-400",
    en: {
      title: "Real-Time Geo Dashboard",
      shortDesc: "Interactive Kibana Maps dashboard for spatial data visualization at district level.",
      description:
        "A real-time interactive dashboard built with Kibana Maps and Geo-index technology to visualize geospatial data from PostgreSQL at the district and sub-district level across Thailand.",
      role: "Full Stack Developer — Data Pipeline, Visualization, Backend Integration",
      highlights: [
        "Real-time data streaming from PostgreSQL to Kibana",
        "Geo-index spatial queries for district/sub-district level accuracy",
        "Interactive map with drill-down from province to sub-district",
        "Custom data aggregation and visualization pipelines",
      ],
    },
    th: {
      title: "แดชบอร์ดข้อมูลเชิงพื้นที่",
      shortDesc: "แดชบอร์ดเรียลไทม์ด้วย Kibana Maps แสดงข้อมูลระดับอำเภอ/ตำบล",
      description:
        "ระบบ Interactive Dashboard แบบเรียลไทม์ที่สร้างด้วย Kibana Maps และ Geo-index เพื่อแสดงผลข้อมูลเชิงพื้นที่ระดับอำเภอ/ตำบลจาก PostgreSQL",
      role: "Full Stack Developer — Data Pipeline, การแสดงผลข้อมูล, Backend",
      highlights: [
        "สตรีมข้อมูลเรียลไทม์จาก PostgreSQL สู่ Kibana",
        "Geo-index สำหรับ spatial queries ระดับอำเภอ/ตำบล",
        "แผนที่แบบ interactive drill-down จากจังหวัดลงถึงตำบล",
        "Pipeline รวบรวมและแสดงผลข้อมูลแบบอัตโนมัติ",
      ],
    },
  },
  {
    id: "ml-screening",
    images: ["/projects/ml-screening.png"],
    tech: ["Python", "Machine Learning", "scikit-learn", "OpenCV", "Flask"],
    color: "from-amber-500 to-orange-400",
    en: {
      title: "ML Drug Screening",
      shortDesc: "Machine Learning model analyzing urine color for preliminary drug screening.",
      description:
        "A Python-based Machine Learning application that analyzes urine color images to perform preliminary drug screening. Deployed at Fort Vajiravudh Hospital for initial patient screening.",
      role: "ML Developer — Model Training, Data Collection, Deployment",
      highlights: [
        "Custom ML model trained on clinical urine sample data",
        "Image processing pipeline for color analysis using OpenCV",
        "Deployed in real clinical environment at Fort Vajiravudh Hospital",
        "High accuracy classification for preliminary screening",
      ],
    },
    th: {
      title: "ML คัดกรองสารเสพติด",
      shortDesc: "โมเดล Machine Learning วิเคราะห์สีปัสสาวะเพื่อคัดกรองสารเสพติดเบื้องต้น",
      description:
        "แอปพลิเคชัน Machine Learning ที่ใช้ Python วิเคราะห์สีปัสสาวะเพื่อคัดกรองสารเสพติดเบื้องต้น ถูกนำไปใช้จริงที่โรงพยาบาลค่ายวชิราวุธ",
      role: "ML Developer — เทรนโมเดล, เก็บข้อมูล, Deploy",
      highlights: [
        "โมเดล ML ที่เทรนจากข้อมูลตัวอย่างปัสสาวะจริงในคลินิก",
        "Pipeline ประมวลผลภาพวิเคราะห์สีด้วย OpenCV",
        "นำไปใช้จริงในสภาพแวดล้อมทางคลินิกที่โรงพยาบาลค่ายวชิราวุธ",
        "ความแม่นยำสูงในการคัดกรองเบื้องต้น",
      ],
    },
  },
  {
    id: "n8n-automation",
    images: ["/projects/n8n-automation.png"],
    tech: ["n8n", "IoT Sensors", "Telegram API", "LINE API", "Node.js"],
    color: "from-rose-500 to-pink-400",
    en: {
      title: "IoT Temperature Monitor",
      shortDesc: "Automated temperature monitoring with real-time alerts via Telegram & LINE.",
      description:
        "An automation system built with n8n for monitoring indoor temperature using IoT sensors. Features event-driven real-time alerts that notify stakeholders via LINE and Telegram when thresholds are exceeded.",
      role: "Automation Developer — Workflow Design, Integration, Alert System",
      highlights: [
        "Event-driven architecture with n8n workflows",
        "Real-time temperature threshold monitoring",
        "Multi-channel alert system (Telegram + LINE)",
        "Automated logging and historical data analysis",
      ],
    },
    th: {
      title: "ระบบมอนิเตอร์อุณหภูมิ IoT",
      shortDesc: "Automation มอนิเตอร์อุณหภูมิพร้อมแจ้งเตือนเรียลไทม์ผ่าน Telegram & LINE",
      description:
        "ระบบ Automation ที่สร้างด้วย n8n สำหรับมอนิเตอร์อุณหภูมิภายในพื้นที่ด้วยเซ็นเซอร์ IoT พร้อมระบบ Event-Driven แจ้งเตือนเรียลไทม์ผ่าน LINE และ Telegram",
      role: "Automation Developer — ออกแบบ Workflow, Integration, ระบบแจ้งเตือน",
      highlights: [
        "สถาปัตยกรรม Event-Driven ด้วย n8n workflows",
        "มอนิเตอร์อุณหภูมิแบบ threshold เรียลไทม์",
        "ระบบแจ้งเตือนหลายช่องทาง (Telegram + LINE)",
        "บันทึกข้อมูลอัตโนมัติและวิเคราะห์ย้อนหลัง",
      ],
    },
  },
  {
    id: "rag-assistant",
    images: ["/projects/rag-assistant.png"],
    tech: ["Python", "pgvector", "Ollama", "LLM", "PostgreSQL", "RAG"],
    color: "from-violet-500 to-purple-400",
    en: {
      title: "Internal AI Assistant (RAG)",
      shortDesc: "End-to-end AI chatbot with RAG architecture using pgvector & local LLM.",
      description:
        "A complete Internal AI Assistant built end-to-end using Retrieval-Augmented Generation (RAG) architecture. Uses pgvector for vector similarity search and Ollama for running a local Large Language Model, ensuring data privacy.",
      role: "AI Developer — Architecture, Vector DB, LLM Integration, Full Stack",
      highlights: [
        "Full RAG pipeline: document ingestion → embedding → retrieval → generation",
        "pgvector for high-performance vector similarity search",
        "Local LLM deployment with Ollama (no cloud dependency)",
        "Complete data privacy — all processing happens on-premises",
      ],
    },
    th: {
      title: "ระบบ AI Assistant ภายใน (RAG)",
      shortDesc: "AI Chatbot แบบ RAG ครบวงจร โดยใช้ pgvector และ LLM ภายในเครื่อง",
      description:
        "ระบบ Internal AI Assistant แบบครบวงจรที่สร้างด้วย Retrieval-Augmented Generation (RAG) ใช้ pgvector สำหรับค้นหาความคล้ายคลึงเชิงเวกเตอร์ และ Ollama สำหรับรัน LLM ภายในเครื่อง รับประกันความเป็นส่วนตัวของข้อมูล",
      role: "AI Developer — สถาปัตยกรรม, Vector DB, LLM Integration, Full Stack",
      highlights: [
        "RAG pipeline ครบวงจร: นำเข้าเอกสาร → embedding → retrieval → generation",
        "pgvector สำหรับค้นหาเวกเตอร์ประสิทธิภาพสูง",
        "Deploy LLM ภายในเครื่องด้วย Ollama (ไม่พึ่งคลาวด์)",
        "ข้อมูลเป็นความลับ — ประมวลผลทั้งหมดภายในองค์กร",
      ],
    },
  },
];
