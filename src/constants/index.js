// Import all assets
import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  CSharp,
  html,
  css,
  C,
  ubuntu,
  tailwind,
  postgresql,
  git,
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  // ➕ used in Skills/Certs/Projects
  azure,
  docker,
  DotNet,
  python,
  cplusplus,
  typescript,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  // wordsearch,
  powershell,
  VTest,
  rider,
  virtualbox,
  kalilinux,
  wireshark,
  Qt,
  metasploit,
  iSystem,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  enterpriseapitester,
  github,
  formula,
  mongodb,
  scala3,
  atmega,
  amazon,
  helwan,
  Valeo,
  sparksystems,
  alstom,
  rootcauseanalysis,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "extracurricular", title: "Certifications" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Software Developer", icon: fullstack },
  { title: "Systems Infrastructure", icon: backend },
  { title: "Cloud Automation", icon: mobile },
  { title: "Workflows", icon: web },
];

const education = [
  {
    title: "B.Sc. in Computer Science (Honours)",
    company_name: "Helwan University, Cairo, Egypt",
    icon: helwan,
    iconBg: "#fff",
    date: "Sep 2019 – Jul 2023",
    points: [
      "Graduated with Very Good (Honours); Graduation Project grade: Excellent.",
      "Core coursework: Algorithms & Data Structures, Operating Systems, Computer Architecture, Databases, Computer Networks, Software Engineering, AI & Machine Learning, Theory of Computation, Programming Languages, Compilers, Cybersecurity, Web Development, and HCI.",
      "Led the graduation (capstone) project team to successful completion—coordinating planning, implementation, and documentation.",
      "Gained hands‑on experience through lab‑intensive systems programming (C/C++), database design (SQL), and practical software engineering practices.",
    ],
  },
];

// Languages & Frameworks
const technologies = [
  { name: "C#", icon: CSharp },
  { name: "C++", icon: cplusplus },
  { name: "C", icon: C },
  { name: "Python", icon: python },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: ".NET", icon: DotNet },
  { name: "HTML5", icon: html },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
];

// Infrastructure, Tools, IDEs, Platforms
const itTools = [
  { name: "Docker", icon: docker },
  { name: "Microsoft Azure", icon: azure },
  { name: "Amazon Web Services (AWS)", icon: aws },
  { name: "Ubuntu", icon: ubuntu },
  { name: "PowerShell", icon: powershell },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Rider", icon: rider },
  { name: "Qt", icon: Qt },
  { name: "vTESTstudio", icon: VTest },
  { name: "iSYSTEM (winIDEA)", icon: iSystem },
  { name: "VirtualBox", icon: virtualbox },
];

// Security / Networking tooling
const cybersecurityTools = [
  { name: "Kali Linux", icon: kalilinux },
  { name: "Wireshark", icon: wireshark },
  { name: "Metasploit", icon: metasploit },
  { name: "Hydra", icon: hydra },
  { name: "Aircrack-ng", icon: aircrackng },
];

// Design / Media
const designTools = [
  { name: "Adobe Photoshop", icon: photoshop },
  { name: "Adobe Premiere Pro", icon: premiere },
  { name: "Cinema 4D", icon: cinema4d },
  { name: "Blender", icon: blender },
];

const experiences = [
  {
    title: "Software Engineer — Embedded Tools & Validation",
    company_name: "Alstom",
    icon: alstom,
    iconBg: "#fff",
    date: "Jul 2025 – Present",
    points: [
      "Delivered the main validation/diagnostics application in modern C++ (C++17/20); automated benches with Python/Tcl/Perl.",
      "Built Robot Framework suites and integrated logs/artifacts into CI (GitLab CI, Jenkins), raising regression coverage by ~30%.",
      "Designed AI/ML services for anomaly classification and an internal LLM + RAG knowledge base (FAISS/Milvus) over specs/incidents/test logs to speed up root‑cause analysis.",
      "Exposed internal REST endpoints (OpenAPI/Swagger) with TLS and role‑based access control; validated endpoints with Postman.",
      "Streamed diagnostics and events using Kafka and ActiveMQ Artemis; instrumented runs and centralized artifacts for traceability.",
      "Containerized workers with Docker and orchestrated at scale on Kubernetes; ran workloads on Azure VMs and maintained VMware images.",
      "Used Wireshark to debug bench services and protocols (DHCP/DNS/TCP/IP); enforced disciplined reviews and safety‑aware workflows.",
    ],
  },
  {
    title: "Software Engineer (.NET) — Internal Tools & APIs",
    company_name: "Spark Systems",
    icon: sparksystems,
    iconBg: "#fff",
    date: "Jan 2025 – Jun 2025",
    points: [
      "Built backend services with ASP.NET Core (MVC) and Entity Framework in Onion/Clean architecture; introduced CI checks and Agile/Scrum rituals.",
      "Optimized SQL queries and database schemas; implemented role‑based authentication/authorization and claims.",
      "Developed React‑based tooling UIs and integrated them with secure REST APIs; documented endpoints with OpenAPI/Swagger and tested via Postman.",
      "Added persistence adapters for PostgreSQL and caching with Redis; improved performance and reliability under load.",
      "Followed Git Flow and code reviews; improved modularity and testability with dependency injection and repository patterns.",
      "Used Rider/Visual Studio locally and Docker/Jenkins in CI/CD for build, test, and deployment automation.",
    ],
  },
  {
    title: "Embedded Software Engineer — Intern",
    company_name: "Valeo",
    icon: Valeo,
    iconBg: "#fff",
    date: "Jul 2022 – Oct 2023",
    points: [
      "Contributed to BMW ADAS components integrating LiDAR and camera sensors; developed C/C++ drivers (RTOS/HAL; CAN/SPI/I2C/UART).",
      "Validated bootloaders and UDS flashing; performed execution‑time analysis (oscilloscope), memory management (Flash/NVM), and CPU‑load optimization.",
      "Executed SiL/HiL integration tests using winIDEA/iSYSTEM, JTAG/SWD, and Vector CANoe/CANalyzer; authored vTESTstudio cases linked to DOORS.",
      "Configured AUTOSAR with Vector DaVinci Configurator; adhered to MISRA C, V‑Model, and safety/process requirements (ASPICE, ISO 26262).",
      "Diagnosed networking with Wireshark and bench tools; collaborated across teams to ensure reliable ECU integration and releases.",
    ],
  },
];

const extracurricular = [
  // ── Project / PM & Dev Foundations
  {
    title: "Google Project Management (Professional Certificate)",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "In Progress",
    points: [
      "Plan and execute projects with timelines, scope, risk, and stakeholder management.",
      "Improve collaboration through structured communication and Agile/Scrum practices.",
    ],
    credential: "https://www.coursera.org/professional-certificates/google-project-management",
  },
  {
    title: "GitHub Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "In Progress",
    points: [
      "Version control workflows with Git and GitHub.",
      "Intro to Actions (CI/CD), issues/projects, and repository governance.",
    ],
    credential: "https://education.github.com/experiences/foundations_certificate",
  },

  // ── Cloud: AWS
  {
    title: "AWS Certified Cloud Practitioner (CLF‑C02)",
    type: "Certification",
    icon: amazon,
    iconBg: "#050C18",
    date: "In Progress",
    points: ["Cloud concepts, security and compliance, pricing, and core AWS services."],
    credential: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "AWS Certified Developer — Associate (DVA‑C02)",
    type: "Certification",
    icon: amazon,
    iconBg: "#050C18",
    date: "In Progress",
    points: ["Build and deploy serverless and containerized apps; IAM, SDKs, CI/CD, monitoring."],
    credential: "https://aws.amazon.com/certification/certified-developer-associate/",
  },

  // ── Cloud: Microsoft Azure
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ‑900)",
    type: "Certification",
    icon: azure,
    iconBg: "#0078D4",
    date: "In Progress",
    points: ["Cloud fundamentals, Azure services, governance, and cost management."],
    credential: "https://learn.microsoft.com/certifications/azure-fundamentals/",
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI‑900)",
    type: "Certification",
    icon: azure,
    iconBg: "#0078D4",
    date: "In Progress",
    points: ["AI/ML concepts, responsible AI, and Azure AI services (Vision, Language, Search)."],
    credential: "https://learn.microsoft.com/certifications/azure-ai-fundamentals/",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate (AZ‑204)",
    type: "Certification",
    icon: azure,
    iconBg: "#0078D4",
    date: "In Progress",
    points: ["Design, build, and monitor Azure apps; storage, compute, identity, and security."],
    credential: "https://learn.microsoft.com/certifications/azure-developer/",
  },

  // ── Containers, DevOps, and Kubernetes
  {
    title: "Docker Certified Associate (DCA)",
    type: "Certification",
    icon: docker,
    iconBg: "#0db7ed",
    date: "In Progress",
    points: ["Container lifecycle, images, networking, security, and Docker in production."],
    credential: "https://training.mirantis.com/certification/dca-certification-exam/",
  },
  {
    title: "Kubernetes and Cloud Native Associate (KCNA)",
    type: "Certification",
    icon: docker, // TODO: replace with `kubernetes` icon when available
    iconBg: "#326CE5",
    date: "In Progress",
    points: ["Kubernetes fundamentals, cloud‑native landscape, and CNCF ecosystem basics."],
    credential:
      "https://training.linuxfoundation.org/certification/kubernetes-and-cloud-native-associate-kcna/",
  },
  {
    title: "Certified Kubernetes Application Developer (CKAD)",
    type: "Certification",
    icon: docker, // TODO: replace with `kubernetes` icon when available
    iconBg: "#326CE5",
    date: "In Progress",
    points: [
      "Design and build cloud‑native apps: Pods, Deployments, services, config, and observability.",
    ],
    credential:
      "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/",
  },

  // ── AI / ML
  {
    title: "Google IT Automation with Python (Professional Certificate)",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "In Progress",
    points: ["Python automation, Git, troubleshooting, and configuration management."],
    credential: "https://www.coursera.org/professional-certificates/google-it-automation",
  },
  {
    title: "TensorFlow Developer Certificate",
    type: "Certification",
    icon: google, // placeholder
    iconBg: "#000000",
    date: "In Progress",
    points: ["Train, evaluate, and deploy TensorFlow models for CV/NLP basics."],
    credential: "https://www.tensorflow.org/certificate",
  },
];

const projects = [
  {
    name: "RCA Copilot — Root Cause Analysis (Alstom) 🤖",
    description:
      "Internal RCA tool that accelerates diagnostics using a React chat UI with RAG over specs, incidents, and test logs. Runs on Azure (Functions/Container Apps) with an LLM (Azure OpenAI), vector index (FAISS/Milvus), streaming diagnostics via Kafka, and time‑series analytics in InfluxDB; exposes secure REST endpoints (OpenAPI/TLS/RBAC).",
    tags: [
      { name: "RAG / LLM", color: "blue-text-gradient" },
      { name: "Azure", color: "green-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "Kafka", color: "blue-text-gradient" },
      { name: "InfluxDB", color: "green-text-gradient" },
      { name: "OpenAPI / TLS", color: "pink-text-gradient" },
    ],
    image: rootcauseanalysis, // replace with your prompt‑UI screenshot when ready
    source_code_link: "",
    live_project_link: "",
  },

  {
    name: "STM32 Drivers from Scratch ⚙️",
    description:
      "Bare‑metal GPIO/RCC/NVIC/SysTick/UART/SPI/I2C drivers for ARM Cortex‑M with CMSIS integration and unit tests—focused on correctness and register‑level control.",
    tags: [
      { name: "C (Bare‑metal)", color: "blue-text-gradient" },
      { name: "ARM Cortex‑M", color: "green-text-gradient" },
      { name: "CMSIS", color: "pink-text-gradient" },
      { name: "Unit Testing", color: "blue-text-gradient" },
    ],
    image: atmega,
    source_code_link: "https://github.com/MarwanTarekZaky?tab=repositories",
    live_project_link: "https://github.com/MarwanTarekZaky?tab=repositories",
  },

  {
    name: "UDS‑over‑CAN Bootloader (STM32) 🚗",
    description:
      "Bootloader implementing UDS‑over‑CAN flashing with CRC and rollback protection; includes a Python desktop flasher and diagnostic tester.",
    tags: [
      { name: "C / UDS / CAN", color: "blue-text-gradient" },
      { name: "Bootloader", color: "green-text-gradient" },
      { name: "Python (Tools)", color: "pink-text-gradient" },
      { name: "Diagnostics", color: "blue-text-gradient" },
    ],
    image: atmega,
    source_code_link: "https://github.com/MarwanTarekZaky?tab=repositories",
    live_project_link: "https://github.com/MarwanTarekZaky?tab=repositories",
  },

  {
    name: "FreeRTOS Smart Sensor Node 📡",
    description:
      "Multi‑tasking sensor node with queues/semaphores, periodic telemetry over UART/CAN, and low‑power modes for embedded efficiency.",
    tags: [
      { name: "C / FreeRTOS", color: "blue-text-gradient" },
      { name: "Concurrency", color: "green-text-gradient" },
      { name: "Low Power", color: "pink-text-gradient" },
      { name: "Telemetry", color: "blue-text-gradient" },
    ],
    image: atmega,
    source_code_link: "https://github.com/MarwanTarekZaky?tab=repositories",
    live_project_link: "https://github.com/MarwanTarekZaky?tab=repositories",
  },

  {
    name: "Packet I/O Playground (Linux) 🐧",
    description:
      "Userspace packet capture and fast‑path experiments on Linux; instrumented with perf and Valgrind to study throughput and hotspots.",
    tags: [
      { name: "C/C++", color: "blue-text-gradient" },
      { name: "Linux / Networking", color: "green-text-gradient" },
      { name: "perf / Valgrind", color: "pink-text-gradient" },
      { name: "Performance", color: "blue-text-gradient" },
    ],
    image: ubuntu,
    source_code_link: "https://github.com/MarwanTarekZaky?tab=repositories",
    live_project_link: "https://github.com/MarwanTarekZaky?tab=repositories",
  },

  {
    name: "Formula Racing 🏎️",
    description:
      "ASP.NET Core MVC racing events platform: admin dashboards for cars, banners, bookings; client UI with sliders/modals and dynamic filters.",
    tags: [
      { name: "C# / .NET Core MVC", color: "blue-text-gradient" },
      { name: "JavaScript / jQuery", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
      { name: "SQL Server", color: "blue-text-gradient" },
    ],
    image: formula,
    source_code_link: "https://github.com/MarwanTarekZaky/FormulaRacing",
    live_project_link: "https://github.com/MarwanTarekZaky/FormulaRacing",
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Marwan for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Marwan's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Marwan Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like CSharp, Python, and C++, and highly skilled in Microsoft's suite of tools, Marwan's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Marwan as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Marwan's proficiency in Embedded Systems was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Marwan's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Marwan's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials,
};