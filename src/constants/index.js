import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
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
  python,
  cplusplus,
  typescript,
  sunnifyimage,
  knifethrowimage,
  pythonanalysis,
  password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
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
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Computer Science (H. BSc)",
    company_name: "Helwan University, Cairo, Egypt",
    icon: helwan,
    iconBg: "#fff",
    date: "2019 - 2023",
    points: [
      "Grade: Very Good, GP: Excellent",
      "Introduction to Computer Science, Data Structures and Algorithms, Systems Programming, Computer Architecture, Operating Systems, Databases, Computer Networks, Software Engineering, Artificial Intelligence, Machine Learning, Theory of Computation, Programming Languages, Compilers, Cybersecurity, Web Development, Human-Computer Interaction.",
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
    {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
];

const designTools = [

];

const experiences = [
  {
    title: "Web Backend Developer .net",
    company_name: "spark systems",
    icon: sparksystems,
    iconBg: "#fff",
    date: "Jan. 2025 - Present",
    points: [
      "• Developed and maintained scalable back-end applications with ASP.NET Core MVC, C#, Razor Pages, and Entity Framework Core, ensuring efficient data management and database interactions.",
      "• Designed and optimized SQL Server and PostgreSQL schemas, writing complex LINQ queries for scalability and query performance.",
      "• Applied SOLID principles and Clean Architecture, creating maintainable and testable code using Repository and Unit of Work patterns.",
      "• Built dynamic front-end components with HTML, CSS, Bootstrap, and jQuery, integrating seamlessly with back-end logic.",
      "• Developed RESTful APIs, ensuring smooth external communication and validating endpoints with Postman and Swagger.",
      "• Implemented secure authentication and role-based access with ASP.NET Identity, managing roles and claims.",
      "• Leveraged Git for version control, following Git Flow for streamlined collaboration and release management.",
      "• Used Dependency Injection to improve modularity, reduce coupling, and enhance unit testability.",
      "• Contributed to Agile Scrum teams, applying SDLC best practices for iterative software delivery.",
      "• Utilized tools like Rider, Visual Studio, Docker, and Jenkins for CI/CD, development, and deployment automation.",

    ],
  },
  {
    title: "Embedded Software Engineer-Intern",
    company_name: "Valeo",
    icon: Valeo,
    iconBg: "#fff",
    date: "July. 2022 - oct. 2023",
    points: [
      "• Developed and integrated C/C++ embedded software for automotive ECUs, focusing on AUTOSAR RTE, BSW, and MCAL layers.",
      "• Using advanced C++ features (C++11 to 23) followed Agile/ Scrum methodologies techniques to ensure efficient multithreaded and scalable software systems.",
      "• Debugged firmware using WinIDEA, CANoe Family, iSYSTEM Debugger, JTAG, CANoe, and Visual Studiowhile reporting defects to CoreALM & Jira.",
      "• Applied knowledge of networking protocols such as CAN, I2C, UART, SPI, and Ethernet for communicationbetween embedded devices.",
      "• Identified and interpreted network traffic using Wireshark to analyze protocols such as DHCP, DNS, and TCP/IP.",
      "• Conducted functional and non-functional tests following the V-model SDLC, executing manual and automatedtest cases using Python & vTESTstudio, integrating them into CI/CD pipelines with Jenkins.",
      "• Performed software validation, including execution time analysis (Oscilloscope), memory management (Flash,NVMs), bootloader testing, and CPU load optimization.",
      "• Developed boot loader mechanisms for secure update and debugging of ECU firmware.",
      "• Worked with Functional Safety Standards (ISO 26262) and ensured compliance with MISRA C coding guidelines.",
      "• Experience in using IBM Rational DOORS for managing software requirements in automotive and embedded systems projects.",
    ],
  },

];


const extracurricular = [
  {
    title: "Google Project Management:",
    type: " Professional Certificate",
    icon: google,
    iconBg: "#000000",
    date: "In Progress",
    points: ["Project Management Strategy and Operations Leadership and Management Communication Business Communication"],
    credential: "https://www.coursera.org/professional-certificates/google-project-management",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "In Progress",
    points: ["Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow"],
    credential: "https://education.github.com/experiences/foundations_certificate",
  },

  {
    title: "AWS Certified Cloud Practitioner",
    type: "Professional Certificate",
    icon: amazon,
    iconBg: "#050C18",
    date: "In Progress",
    points: [
      "Showcase foundational knowledge of AWS cloud services and cloud computing, Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },

];

const projects = [
  {
    name: "Formula Racing 🏎️",
    description:
      "🏁 Formula - ASP.NET Core MVC Racing Events Platform Formula is a full-featured web application built with ASP.NET Core MVC. It enables administrators to manage racing events, cars, banners, and bookings with a sleek UI and rich media features. The client-facing interface offers an interactive experience for users, including image sliders, modals, and dynamic dropdowns.",
    tags: [
      {
        name: "C# .net Core MVC",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript/JQuery",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap CSS",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Server",
        color: "blue-text-gradient",
      },
    ],
    image: formula,
    source_code_link: "https://github.com/MarwanTarekZaky/FormulaRacing",
    live_project_link: "https://github.com/MarwanTarekZaky/FormulaRacing",
  },
 
  {
    name: "Embedded Systems Projects in C++ 🌐",
    description:
      "Developed a custom memory pool allocator to optimize memory usage, a multi-threaded file compression tool for efficient data storage, and a real-time data processing system for low-latency sensor handling. Each project emphasizes performance, concurrency, and resource efficiency in embedded environments.",
    tags: [
      {
        name: "C/C++ Embedded C",
        color: "blue-text-gradient",
      },
      {
        name: "AVR & ARM",
        color: "green-text-gradient",
      },
      {
        name: "CAN/UART/SPI/I2C",
        color: "pink-text-gradient",
      },
      {
        name: "Authentication/Flashing",
        color: "blue-text-gradient",
      },
    ],
    image: atmega,
    source_code_link: "https://github.com/MarwanTarekZaky/cpp-projects/tree/main/embedded-projects",
    live_project_link: "https://github.com/MarwanTarekZaky/cpp-projects/tree/main/embedded-projects",
  },
  
  
  {
    name: "Valeo SCALA™ LiDAR 🐞🔎 👨🏻‍💻",
    description:
      "Involved in developing and testing the Valeo SCALA™ LiDAR, a cutting-edge automotive sensor. This project focused on enhancing the sensor's performance and reliability through rigorous testing and validation processes. Collaborated with cross-functional teams to ensure seamless integration of the LiDAR system into vehicles, contributing to advancements in autonomous driving technology.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "AUTOSAR",
        color: "green-text-gradient",
      },
      {
        name: "Embedded systems",
        color: "pink-text-gradient",
      },
      {
        name: "data-algorithms",
        color: "blue-text-gradient",
      },
    ],
    image: scala3,
    source_code_link: "hhttps://www.valeo.com/en/valeo-scala-lidar/",
    live_project_link: "https://www.valeo.com/en/valeo-scala-lidar/",
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
      "Marwan Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Marwan's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Marwan as a valuable asset to any tech-driven team.",
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
  testimonials
};
