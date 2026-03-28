export interface Project {
  id: string;
  images: string[];
  tech: string[];
  color: string;
  githubUrl?: string;
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
    images: [
      "/projects/velojob/1.png",
      "/projects/velojob/2.png",
      "/projects/velojob/3.png",
      "/projects/velojob/4.png",
      "/projects/velojob/5.png",
      "/projects/velojob/6.png",
      "/projects/velojob/7.png",
      "/projects/velojob/8.png",
      "/projects/velojob/9.png",
      "/projects/velojob/10.png",
      "/projects/velojob/11.png",
      "/projects/velojob/12.png",
      "/projects/velojob/13.png",
      "/projects/velojob/14.png",
      "/projects/velojob/15.png",
      "/projects/velojob/16.png",
      "/projects/velojob/17.png",
      "/projects/velojob/18.png",
      "/projects/velojob/19.png",
      "/projects/velojob/20.png",
      "/projects/velojob/21.png",
      "/projects/velojob/22.png",
      "/projects/velojob/23.png",
      "/projects/velojob/24.png",
      "/projects/velojob/25.png",
      "/projects/velojob/26.png",
      "/projects/velojob/27.png",
      "/projects/velojob/28.png",
      "/projects/velojob/29.png",
      "/projects/velojob/30.png",
      "/projects/velojob/31.png",
      "/projects/velojob/32.png",
      "/projects/velojob/33.png",
      "/projects/velojob/34.png",
      "/projects/velojob/35.png",
      "/projects/velojob/36.png",
      "/projects/velojob/37.png",
      "/projects/velojob/38.png",
      "/projects/velojob/39.png",
      "/projects/velojob/40.png",
      "/projects/velojob/41.png"
    ],
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
    tech: ["n8n", "Python", "pgvector", "Ollama", "LLM", "PostgreSQL", "RAG"],
    color: "from-violet-500 to-purple-400",
    en: {
      title: "Internal AI Assistant (RAG)",
      shortDesc: "End-to-end AI chatbot with RAG architecture using pgvector & local LLM.",
      description:
        "A complete Internal AI Assistant built end-to-end using n8n workflows and Retrieval-Augmented Generation (RAG) architecture. Uses pgvector for vector similarity search and Ollama for running a local Large Language Model, ensuring data privacy.",
      role: "AI Developer — Architecture, Vector DB, LLM Integration, Full Stack",
      highlights: [
        "Full RAG pipeline automated with n8n: document ingestion → embedding → retrieval → generation",
        "pgvector for high-performance vector similarity search",
        "Local LLM deployment with Ollama (no cloud dependency)",
        "Complete data privacy — all processing happens on-premises",
      ],
    },
    th: {
      title: "ระบบ AI Assistant ภายใน (RAG)",
      shortDesc: "AI Chatbot แบบ RAG ครบวงจร โดยใช้ pgvector และ LLM ภายในเครื่อง",
      description:
        "ระบบ Internal AI Assistant แบบครบวงจรที่สร้างด้วย n8n และเทคโนโลยี Retrieval-Augmented Generation (RAG) ใช้ pgvector สำหรับค้นหาความคล้ายคลึงเชิงเวกเตอร์ และ Ollama สำหรับรัน LLM ภายในเครื่อง รับประกันความเป็นส่วนตัวของข้อมูล",
      role: "AI Developer — สถาปัตยกรรม, Vector DB, LLM Integration, Full Stack",
      highlights: [
        "RAG pipeline ครบวงจร (จัดการด้วย n8n): นำเข้าเอกสาร → embedding → retrieval → generation",
        "pgvector สำหรับค้นหาเวกเตอร์ประสิทธิภาพสูง",
        "Deploy LLM ภายในเครื่องด้วย Ollama (ไม่พึ่งคลาวด์)",
        "ข้อมูลเป็นความลับ — ประมวลผลทั้งหมดภายในองค์กร",
      ],
    },
  },
  {
    id: "keypoint-detection",
    images: [
      "/projects/Keypoint Detection/1.png",
      "/projects/Keypoint Detection/2.png",
      "/projects/Keypoint Detection/3.png",
      "/projects/Keypoint Detection/4.png",
      "/projects/Keypoint Detection/5.png",
      "/projects/Keypoint Detection/6.png",
      "/projects/Keypoint Detection/7.png",
      "/projects/Keypoint Detection/8.png",
      "/projects/Keypoint Detection/9.png",
      "/projects/Keypoint Detection/10.png",
      "/projects/Keypoint Detection/11.png",
      "/projects/Keypoint Detection/12.png"
    ],
    tech: ["Python", "YOLOv8", "Computer Vision", "Gradio", "PyTorch", "OpenCV", "Roboflow"],
    color: "from-amber-500 to-orange-400",
    githubUrl: "https://github.com/wongsakron/yolov8-pose-dog",
    en: {
      title: "YOLOv8 Dog Pose Estimation",
      shortDesc: "End-to-end computer vision project for dog keypoint detection using YOLOv8 and Gradio.",
      description:
        "An end-to-end Animal Pose Estimation project focused on dog keypoint detection using YOLOv8. The system is split into two main parts: a training pipeline integrated with Roboflow for dataset management, and an interactive Web Inference application built with Gradio for real-time testing on images, videos, and webcams.",
      role: "Computer Vision Engineer — Dataset Preparation, Model Training, Web Interface Development",
      highlights: [
        "Custom-trained YOLOv8 Pose model specifically for dog keypoint detection",
        "Integration with Roboflow API for streamlined dataset and weights management",
        "Interactive web interface built with Gradio for real-time model inference",
        "Support for analyzing static images, video files, and live webcam feeds",
      ],
    },
    th: {
      title: "ระบบตรวจจับท่าทางสุนัข (Dog Pose Estimation)",
      shortDesc: "โปรเจกต์ Computer Vision ตรวจจับจุดสำคัญของสุนัขด้วย YOLOv8 พร้อมใช้งานผ่าน Gradio",
      description:
        "โปรเจกต์ Computer Vision แบบครบวงจรสำหรับการตรวจจับท่าทาง (Pose Estimation) ของสุนัขโดยใช้โมเดล YOLOv8 โครงสร้างระบบแบ่งเป็นสองส่วนหลักคือ ส่วนการเทรนโมเดลที่เชื่อมดึงข้อมูลชุดภาพจาก Roboflow และส่วน Web Inference ที่พัฒนาด้วย Gradio เพื่อให้ทดสอบโมเดลแบบเรียลไทม์ได้ผ่านหน้าเว็บ",
      role: "Computer Vision Engineer — เตรียมชุดข้อมูล, เทรนโมเดล, พัฒนาเว็บแอปพลิเคชัน",
      highlights: [
        "ฝึกสอนโมเดล YOLOv8 Pose แบบเฉพาะทางสำหรับตรวจจับ Keypoints ของสุนัข",
        "เชื่อมต่อระบบ Dataset อย่างมีประสิทธิภาพด้วยเครื่องมือจาก Roboflow",
        "ส่วนติดต่อผู้ใช้งานผ่านเว็บแอปพลิเคชัน Gradio ที่ออกแบบมาให้ใช้งานและทดสอบโหมดต่างๆ ได้ง่าย",
        "รองรับการทำนายผลลัพธ์จากโครงกระดูกสุนัข ผ่านรูปภาพ, ไฟล์วิดีโอ และกล้องเว็บแคมในเวลาจริง",
      ],
    },
  },
  {
    id: "semantic-segmentation",
    images: [
      "/projects/Semantic-Segmentation/1.png",
      "/projects/Semantic-Segmentation/2.png",
      "/projects/Semantic-Segmentation/3.png",
      "/projects/Semantic-Segmentation/4.png",
      "/projects/Semantic-Segmentation/5.png"
    ],
    tech: ["Python", "PyTorch", "Semantic Segmentation", "Roboflow", "MobileNetV3", "Computer Vision"],
    color: "from-teal-500 to-emerald-400",
    en: {
      title: "Semantic Segmentation (HOI)",
      shortDesc: "An OOM-safe PyTorch semantic segmentation pipeline with LR-ASPP MobileNetV3.",
      description:
        "A robust end-to-end Semantic Segmentation pipeline built with PyTorch, focusing on Human Object Interaction. The system utilizes an LR-ASPP MobileNetV3 architecture optimized for consumer GPUs. It features a custom OOM-safe training loop that automatically reduces batch size and image dimensions to prevent memory crashes, along with support for Mixed Precision (AMP) and Gradient Accumulation.",
      role: "Computer Vision Engineer — Architecture, Pipeline Development",
      highlights: [
        "LR-ASPP MobileNetV3 architecture optimized for low-memory GPUs",
        "OOM-Safe Training Loop with automatic batch and image size adjustment",
        "Support for Mixed Precision (AMP) and Gradient Accumulation",
        "Integration with Roboflow API for streamlined dataset management",
        "Comprehensive custom evaluation metrics (mIoU, Pixel Accuracy, per-class F1-Score)",
      ],
    },
    th: {
      title: "ระบบแบ่งส่วนภาพ (Semantic Segmentation)",
      shortDesc: "ไพป์ไลน์ Semantic Segmentation ด้วย PyTorch ประหยัดทรัพยากร พร้อมระบบป้องกัน OOM",
      description:
        "ระบบ Semantic Segmentation แบบครบวงจรพัฒนาด้วย PyTorch สำหรับงานวิเคราะห์ปฏิสัมพันธ์ระหว่างคนและวัตถุ (HOI) โดยเลือกใช้สถาปัตยกรรม LR-ASPP MobileNetV3 ที่เหมาะสมกับการ์ดจอบน PC ทั่วไป จุดเด่นคือระบบการเทรนแบบ OOM-Safe ที่ลดมิติภาพหรือ batch size ให้โดยอัตโนมัติเมื่อเจอปัญหา VRAM ไม่พอ พร้อมรองรับ Mixed Precision (AMP)",
      role: "Computer Vision Engineer — ออกแบบสถาปัตยกรรม, พัฒนา Data Pipeline",
      highlights: [
        "เลือกใช้โมเดล LR-ASPP MobileNetV3 สถาปัตยกรรมที่กินทรัพยากรน้อย แต่ความแม่นยำสูง",
        "ออกแบบระบบ OOM-Safe Training ช่วยป้องกันระบบหยุดชะงักตอน VRAM เต็ม",
        "รองรับการทำงานด้วย Mixed Precision (AMP) และ Gradient Accumulation",
        "เชื่อมต่อระบบโหลด Dataset อย่างชาญฉลาด ใช้งานผ่าน API ของ Roboflow",
        "ปรับแต่งระบบตรวจสอบวัดผลเอง (mIoU, Pixel Accuracy และ F1-Score แยกรายคลาส)",
      ],
    },
  },
];
