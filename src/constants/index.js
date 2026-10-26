// ─────────────────────────────────────────────────────────────────────────────
// All portfolio content lives here. Keep it consistent with the CV
// (public/Marwan_Tarek_Software_Engineer_CV.pdf) — recruiters cross-check them.
// ─────────────────────────────────────────────────────────────────────────────
import {
  helwan,
  Valeo,
  sparksystems,
  alstom,
  // project covers
  coverAiPlatform,
  coverCoverage,
  coverRca,
  coverSdlc,
  coverRagKb,
  coverGraphql,
  coverOrderMs,
  coverUdsCan,
  coverPacketIo,
  coverFormula,
  // course icons
  fastapiIcon,
  metaIcon,
  graphqlIcon,
  websocketIcon,
  microservicesIcon,
  kafkaIcon,
  courseraIcon,
  dockerIcon,
  kubernetesIcon,
} from "../assets";

export const RESUME_URL = "/Marwan_Tarek_Software_Engineer_CV.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/marwan-tarek-zaky/";
export const GITHUB_URL = "https://github.com/MarwanTarekZaky";
export const EMAIL = "marwantarekzaky@gmail.com";
export const PHONE_DISPLAY = "+20 102 409 3502";
export const PHONE_TEL = "+201024093502";
// Contact form delivery: paste the free access key from https://web3forms.com
// (it is emailed to you when you enter your address there). Public by design.
export const WEB3FORMS_ACCESS_KEY = "8d144d78-0eb1-4889-8ba8-b9679f95cce4";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "courses", title: "Courses" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const heroRoles = [
  "Software Engineer",
  "Full-Stack · Python (FastAPI) & React",
  "Generative AI · RAG · AI Agents",
  "Microservices · Kubernetes · Azure",
  "C#/.NET · C++ · Embedded",
];

export const aboutPoints = [
  {
    icon: "👨‍💻",
    text: "Software Engineer with 3+ years of experience building production backend and full-stack systems in Python (FastAPI) and React/TypeScript, plus C#/.NET and C++.",
  },
  {
    icon: "🚆",
    text: "At Alstom (railway signalling: CBTC and Automatic Train Supervision) I build microservice platforms on Kubernetes and Generative AI tools: Retrieval-Augmented Generation (RAG), multi-agent LLM pipelines and self-hosted models served with vLLM.",
  },
  {
    icon: "🧩",
    text: "Strong in API design, event-driven systems (Kafka, ActiveMQ), security (OAuth 2.0/OIDC, Keycloak, JWT, RBAC), CI/CD, automated testing and observability.",
  },
  {
    icon: "🔧",
    text: "Embedded C/C++ background from Valeo (RTOS, CAN/SPI/UART, bootloaders), which shaped how I work: tested, traceable and reviewable code.",
  },
  {
    icon: "🌍",
    text: "English (C2), French (A2), Arabic (native). Based in Giza, Egypt — open to relocation and remote roles.",
  },
];

const education = [
  {
    title: "B.Sc. in Computer Science (Honours)",
    company_name: "Helwan University, Cairo, Egypt",
    icon: helwan,
    iconBg: "#fff",
    date: "Sep 2019 – Jul 2023",
    points: [
      "Graduated with Very Good (Honours); graduation project grade: Excellent.",
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Architecture, Databases, Computer Networks, Software Engineering, AI & Machine Learning, Compilers and Web Development.",
      "Led the graduation project team through planning, implementation and documentation.",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Alstom",
    location: "Cairo, Egypt",
    icon: alstom,
    iconBg: "#fff",
    date: "Jul 2025 – Present",
    context: "Railway signalling — Communications-Based Train Control (CBTC) and Automatic Train Supervision (ATS).",
    points: [
      "Designed and deployed Python/FastAPI microservices and React/TypeScript interfaces for an AI engineering-automation platform; standardized OpenAPI contracts and API versioning.",
      "Managed the platform's Kubernetes deployment with Rancher and Harbor, using PostgreSQL with schema-per-service ownership, Kafka events and Qdrant, with SQLAlchemy and Alembic migrations.",
      "Orchestrated a multi-agent LLM pipeline (classification, interface analysis, template mapping, assembly and quality agents) that drafts sub-system specifications, with human review and traceability matrices.",
      "Developed RAG services for requirement coverage and traceability, combining hybrid search (BM25, vectors, rank fusion, reranking) with a self-hosted LLM judge served by vLLM, with evidence checks and audit trails.",
      "Evaluated GPU-hosted embedding models (PyTorch, pgvector) against historical trace links, reaching 89% top-20 retrieval accuracy, and delivered the results in a React/TypeScript review interface.",
      "Created an RCA Copilot for root-cause analysis using Azure OpenAI, RAG and ChromaDB/Qdrant with a React chat UI (later multi-agent), improving incident triage and reducing mean time to detect.",
      "Engineered a real-time SDLC dashboard streaming GitLab and DOORS data through Redis Streams and Server-Sent Events to React, with TimescaleDB, Keycloak (OIDC) and horizontal scaling via Redis pub/sub.",
      "Developed resilient, idempotent, back-pressure-aware event-driven services on Kafka and ActiveMQ Artemis, including a C#/.NET service that routes alarm and train-status messages.",
      "Implemented authentication and authorization with TLS, JWT, role-based access control (RBAC) and Keycloak; monitored services with Prometheus, Grafana, OpenTelemetry and InfluxDB.",
      "Containerized and deployed services with Docker on Kubernetes and Azure (App Service, VMs, Container Registry, Key Vault); maintained GitLab CI/CD pipelines and Red Hat Enterprise Linux environments.",
      "Integrated Robot Framework tests into GitLab CI and Jenkins with quality gates, raising regression coverage by about 30%.",
    ],
  },
  {
    title: "Software Engineer (.NET)",
    company_name: "Spark Systems",
    location: "Giza, Egypt",
    icon: sparksystems,
    iconBg: "#fff",
    date: "Jan 2025 – Jun 2025",
    points: [
      "Developed REST APIs and server-side business logic using C#/ASP.NET Core (MVC, Web API), Entity Framework Core and Clean/Onion Architecture, with React-based tooling UIs.",
      "Documented API contracts with OpenAPI/Swagger, validated workflows in Postman and implemented role/claims-based authorization using .NET Identity.",
      "Applied repository and unit-of-work patterns; designed PostgreSQL persistence with EF Core migrations, tuned SQL queries and introduced Redis caching for performance.",
      "Containerized delivery using Docker and maintained Jenkins CI/CD pipelines; worked in Agile/Scrum with code reviews and incremental delivery, improving lead time and pre-production defect discovery.",
    ],
  },
  {
    title: "Embedded Software Engineer",
    company_name: "Valeo",
    location: "Smart Village, Egypt",
    icon: Valeo,
    iconBg: "#fff",
    date: "Jul 2022 – Oct 2023",
    context: "Automotive ADAS software (LiDAR and camera sensors).",
    points: [
      "Developed & validated multithreaded C/C++ modules in an RTOS environment: bootloader, memory and communication drivers across CAN, SPI and UART.",
      "Validated bootloaders and UDS flashing; analysed execution time, memory (Flash/NVM) and CPU load on target hardware.",
      "Ran SiL/HiL integration tests with iSYSTEM winIDEA, Vector CANoe/CANalyzer and vTESTstudio test cases linked to DOORS requirements.",
      "Applied requirements traceability, coverage analysis and static analysis (MISRA C, V-model, ASPICE / ISO 26262 processes) to deliver verifiable, review-ready automotive software.",
    ],
  },
];

// Completed courses (Learning Roadmap 2026)
const courses = [
  {
    title: "FastAPI and Backend Development Specialization",
    type: "Course",
    icon: fastapiIcon,
    date: "Completed · 2026",
    points: ["Async REST APIs with FastAPI, Pydantic, SQLAlchemy, authentication and testing."],
  },
  {
    title: "APIs (Meta)",
    type: "Course",
    icon: metaIcon,
    date: "Completed · 2026",
    points: ["REST API design, serialization, authentication, throttling and API testing."],
  },
  {
    title: "GraphQL Fundamentals: API Design, Schema & Frontend Integration",
    type: "Course",
    icon: graphqlIcon,
    date: "Completed · 2026",
    points: ["Schemas, resolvers, mutations, subscriptions and client integration."],
  },
  {
    title: "WebSockets Protocol Explained",
    type: "Course",
    icon: websocketIcon,
    date: "Completed · 2026",
    points: ["Real-time, bidirectional communication and scaling WebSocket servers."],
  },
  {
    title: "Design Microservices Architecture with Patterns & Principles",
    type: "Course",
    icon: microservicesIcon,
    date: "Completed · 2026",
    points: ["Decomposition, API gateways, Saga, CQRS, event-driven communication and resilience."],
  },
  {
    title: "Apache Kafka",
    type: "Course",
    icon: kafkaIcon,
    date: "Completed · 2026",
    points: ["Topics, partitions, consumer groups, delivery semantics and stream processing."],
  },
  {
    title: "Vector Database Fundamentals Specialization",
    type: "Coursera Specialization",
    icon: courseraIcon,
    date: "Completed · 2026",
    points: ["Embeddings, similarity search, indexing and Retrieval-Augmented Generation."],
  },
  {
    title: "Docker and Kubernetes Masterclass",
    type: "Course",
    icon: dockerIcon,
    date: "Completed · 2026",
    points: ["Images, Compose, Deployments, Services, ConfigMaps, Secrets and scaling."],
  },
  {
    title: "Kubernetes Masterclass for Application Developers",
    type: "Course",
    icon: kubernetesIcon,
    date: "Completed · 2026",
    points: ["Developer workflows on Kubernetes: probes, rollouts, configuration and debugging."],
  },
  {
    title: "The Docker Masterclass for Beginners",
    type: "Course",
    icon: dockerIcon,
    date: "Completed · 2026",
    points: ["Container fundamentals, Dockerfiles, volumes and networking."],
  },
];

// Topics studied and practised in 2026 (shown as chips under the courses)
const studyTopics = [
  "Azure", "PyTest & Playwright", "GitHub Actions", "OpenTelemetry", "InfluxDB", "gRPC",
  "Postman", "JWT", "OAuth 2.0 / OIDC", "Token & Cookie Auth", "CQRS", "TLS",
  "Domain-Driven Design", "Rancher & Harbor", "Robot Framework", "React", "RAG", "LLMs",
  "AI Fundamentals", "Bash & Shell", "Ansible", "Terraform", "Resilience & Mitigation Strategies",
];

const projects = [
  {
    name: "AI Engineering-Automation Platform",
    org: "Alstom · Internal",
    description:
      "Python/FastAPI microservices with a React/TypeScript UI on Kubernetes (Rancher, Harbor), PostgreSQL schema-per-service, Kafka events and Qdrant. Includes a 5-agent LLM pipeline that drafts sub-system specifications with human review and traceability matrices.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Kubernetes", color: "pink-text-gradient" },
      { name: "Kafka", color: "blue-text-gradient" },
      { name: "AI Agents", color: "green-text-gradient" },
    ],
    image: coverAiPlatform,
    source_code_link: "",
  },
  {
    name: "Requirement Coverage & Traceability",
    org: "Alstom · Internal",
    description:
      "RAG service with hybrid search (BM25, vectors, rank fusion, reranking) and a self-hosted LLM judge served by vLLM. GPU-hosted embeddings reached 89% top-20 retrieval accuracy against historical trace links.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "vLLM", color: "green-text-gradient" },
      { name: "Qdrant / pgvector", color: "pink-text-gradient" },
      { name: "PyTorch", color: "blue-text-gradient" },
    ],
    image: coverCoverage,
    source_code_link: "",
  },
  {
    name: "RCA Copilot & Agents",
    org: "Alstom · Internal",
    description:
      "Root-cause analysis copilot over specifications, incident history and logs using Azure OpenAI, RAG and ChromaDB/Qdrant with a React chat UI, later extended into application and infrastructure agents on self-hosted LLMs.",
    tags: [
      { name: "Azure OpenAI", color: "blue-text-gradient" },
      { name: "RAG", color: "green-text-gradient" },
      { name: "Multi-agent", color: "pink-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
    ],
    image: coverRca,
    source_code_link: "",
  },
  {
    name: "Real-Time SDLC Dashboard",
    org: "Alstom · Internal",
    description:
      "FastAPI workers stream GitLab and DOORS data through Redis Streams and Server-Sent Events to a React dashboard, with TimescaleDB history, Keycloak (OIDC) login and horizontal scaling via Redis pub/sub.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Redis Streams", color: "green-text-gradient" },
      { name: "SSE", color: "pink-text-gradient" },
      { name: "Keycloak", color: "blue-text-gradient" },
    ],
    image: coverSdlc,
    source_code_link: "",
  },
  {
    name: "Full-Stack RAG Knowledge Base",
    org: "Open source",
    description:
      "FastAPI + React app that ingests PDF/Markdown/HTML, chunks and embeds documents, and answers questions with source citations, streaming tokens over Server-Sent Events.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "ChromaDB", color: "pink-text-gradient" },
      { name: "Docker", color: "blue-text-gradient" },
    ],
    image: coverRagKb,
    source_code_link: "https://github.com/MarwanTarekZaky/RAG_KnowledgeBase_FastAPI_React",
  },
  {
    name: "GraphQL API with FastAPI",
    org: "Open source",
    description:
      "Strawberry GraphQL on FastAPI with MongoDB: interfaces, unions, mutations and real-time subscriptions over WebSockets, with token authentication and GraphiQL.",
    tags: [
      { name: "GraphQL", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "WebSockets", color: "blue-text-gradient" },
    ],
    image: coverGraphql,
    source_code_link: "https://github.com/MarwanTarekZaky/graphql_fastapi_fundamentals_layer",
  },
  {
    name: "Order Processing Microservices",
    org: "Open source",
    description:
      "Orders, Payments and Notifications services in .NET 8 coordinated by an event-driven saga over RabbitMQ, with Transactional Outbox and idempotent Inbox consumers.",
    tags: [
      { name: "C# / .NET 8", color: "blue-text-gradient" },
      { name: "RabbitMQ", color: "green-text-gradient" },
      { name: "EF Core", color: "pink-text-gradient" },
      { name: "PostgreSQL", color: "blue-text-gradient" },
    ],
    image: coverOrderMs,
    source_code_link: "https://github.com/MarwanTarekZaky/Order_Microservices_DotNet",
  },
  {
    name: "UDS Diagnostics & CAN Bootloader",
    org: "Open source",
    description:
      "Modern C++ UDS diagnostics client and CLI, plus an STM32F4 dual-bank (A/B) bootloader with image manifests, CRC32 verification, atomic swap and rollback.",
    tags: [
      { name: "C++17", color: "blue-text-gradient" },
      { name: "UDS / CAN", color: "green-text-gradient" },
      { name: "CMake", color: "pink-text-gradient" },
      { name: "STM32", color: "blue-text-gradient" },
    ],
    image: coverUdsCan,
    source_code_link: "https://github.com/MarwanTarekZaky/CppUDS_Diagnostics",
  },
  {
    name: "Packet I/O Playground",
    org: "Open source",
    description:
      "Linux userspace packet capture, multi-threaded fan-out, replay and offline analysis using raw sockets (TPACKET_V3), with perf and Valgrind profiling.",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "Socket Programming", color: "green-text-gradient" },
      { name: "Linux", color: "pink-text-gradient" },
      { name: "Performance", color: "blue-text-gradient" },
    ],
    image: coverPacketIo,
    source_code_link: "https://github.com/MarwanTarekZaky/packet-io-playground-pro",
  },
  {
    name: "Formula Racing",
    org: "Open source",
    description:
      "ASP.NET Core MVC racing-events platform with admin dashboards for cars, banners and bookings, and a client UI with sliders, modals and dynamic filters.",
    tags: [
      { name: "C# / ASP.NET Core MVC", color: "blue-text-gradient" },
      { name: "SQL Server", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: coverFormula,
    source_code_link: "https://github.com/MarwanTarekZaky/FormulaRacing",
  },
];

export { experiences, courses, studyTopics, projects, education };
