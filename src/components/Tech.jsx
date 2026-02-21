import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Import all assets
import {
  // Programming
  CSharp, cplusplus, C, python, typescript, javascript,
  DotNet, aspnet, entityframework, react,
  postgresql, mongodb, sqlserver, mysql, redis, tailwind,
  // Tools
  azure, aws, docker, kubernetes,
  git, github, gitlab, jenkins,
  postman, swagger, robotframework,
  kafka, artemis,
  ubuntu, powershell, vmware, virtualbox, kalilinux, wireshark,
  Qt, rider,
  stm32, freertos, zephyr, VTest, iSystem, canoe, canalyzer, davinci,
  cmake, make, ninja, gdb, valgrind,
} from "../assets";

// Languages & Frameworks (things you actively code in)
const programming = [
  { name: "C#", icon: CSharp },
  { name: "C++", icon: cplusplus },
  { name: "C", icon: C },
  { name: "Python", icon: python },
  { name: "TypeScript", icon: typescript },
  { name: "JavaScript", icon: javascript },

  { name: ".NET", icon: DotNet },
  { name: "ASP.NET Core", icon: aspnet },
  { name: "Entity Framework", icon: entityframework },
  { name: "React", icon: react },

  { name: "PostgreSQL", icon: postgresql },
  { name: "MongoDB", icon: mongodb },
  { name: "SQL Server", icon: sqlserver },
  { name: "MySQL", icon: mysql },
  { name: "Redis", icon: redis },

  { name: "Tailwind CSS", icon: tailwind },
];

// Infrastructure / DevOps / Validation / Embedded tooling
const itTools = [
  // Cloud & Containers
  { name: "Microsoft Azure", icon: azure },
  { name: "Amazon Web Services (AWS)", icon: aws },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },

  // CI/CD & Collaboration
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "GitLab CI", icon: gitlab },
  { name: "Jenkins", icon: jenkins },

  // APIs & Testing
  { name: "Postman", icon: postman },
  { name: "OpenAPI / Swagger", icon: swagger },
  { name: "Robot Framework", icon: robotframework },

  // Messaging / Platform
  { name: "Apache Kafka", icon: kafka },
  { name: "ActiveMQ Artemis", icon: artemis },

  // OS / Hypervisors / Networking
  { name: "Ubuntu", icon: ubuntu },
  { name: "PowerShell", icon: powershell },
  { name: "VMware", icon: vmware },
  { name: "VirtualBox", icon: virtualbox },
  { name: "Kali Linux", icon: kalilinux },
  { name: "Wireshark", icon: wireshark },

  // UI/Frameworks (tools you use, not “languages”)
  { name: "Qt", icon: Qt },
  { name: "Rider", icon: rider },

  // Embedded / Validation
  { name: "STM32", icon: stm32 },
  { name: "FreeRTOS", icon: freertos },
  { name: "Zephyr RTOS", icon: zephyr },
  { name: "vTESTstudio", icon: VTest },
  { name: "iSYSTEM (winIDEA)", icon: iSystem },
  { name: "Vector CANoe", icon: canoe },
  { name: "Vector CANalyzer", icon: canalyzer },
  { name: "DaVinci Configurator", icon: davinci },

  // Build & Debug
  { name: "CMake", icon: cmake },
  { name: "Make", icon: make },
  { name: "Ninja", icon: ninja },
  { name: "GDB", icon: gdb },
  { name: "Valgrind", icon: valgrind },
];

const contentProduction = [

];

const Tech = () => {
  const [rows, setRows] = useState({
    programming: [],
    itTools: [],
   
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.2
  });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const calculateRows = (width, techArray) => {
    let dynamicRows = [];
    let startIndex = 0;
    let rowSize = 6;

    if (width < 500) {
      dynamicRows = [
        techArray.slice(0, 3),
        techArray.slice(3, 5),
        techArray.slice(5, 8),
        techArray.slice(8, 10),
      ];
    } else {
      while (startIndex < techArray.length) {
        const endIndex = startIndex + rowSize;
        dynamicRows.push(techArray.slice(startIndex, endIndex));
        startIndex += rowSize;
        rowSize = rowSize === 6 ? 5 : 6;
      }
    }

    return dynamicRows;
  };

  useEffect(() => {
    const calculateRowsForAllCategories = () => {
      const rowsData = {
        programming: calculateRows(window.innerWidth, programming),
        itTools: calculateRows(window.innerWidth, itTools),
        
      };
      setRows(rowsData);
    };

    calculateRowsForAllCategories();

    const handleResize = () => {
      calculateRowsForAllCategories();
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hexagonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        delay: Math.random() * 1.5, 
        duration: 0.5, 
        type: "spring" 
      } 
    },
    hover: {
      scale: 1.05,
      zIndex: 2,
      transition: { duration: 0.3 }
    }
  };

  const renderCategory = (categoryName, categoryRows) => (
    <motion.div
      key={categoryName}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      <motion.h2
        className="category-title top"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`<${categoryName}>`}</motion.h2>
      <div className="honeycomb-grid">
        {categoryRows?.map((row, rowIndex) => (
          <div
            key={`${categoryName}-row-${rowIndex}`}
            className={`honeycomb-row ${rowIndex % 2 === 1 ? "staggered-row" : ""}`}
          >
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                variants={hexagonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <img src={tech.icon} alt={tech.name}  style={{ userSelect: "none" }} draggable="false"/>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <motion.h2
        className="category-title bottom"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        style={{
          fontFamily: "'', cursive",
          fontSize: "26px",
          background: "linear-gradient(90deg, #915EFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
          filter: "drop-shadow(0 0 10px #915EFF)",
        }}
      >{`</${categoryName}>`}</motion.h2>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {renderCategory("programming", rows.programming)}
        {renderCategory("itTools", rows.itTools)}
    
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");