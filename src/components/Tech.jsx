import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import * as A from "../assets";

// Skill groups — keep in sync with the CV's "Core Skills" section.
const categories = [
  {
    key: "languages",
    items: [
      { name: "Python", icon: A.pythonIcon },
      { name: "TypeScript", icon: A.typescriptIcon },
      { name: "JavaScript", icon: A.javascriptIcon },
      { name: "C#", icon: A.csharpIcon },
      { name: "C++", icon: A.cplusplusIcon },
      { name: "C", icon: A.cIcon },
      { name: "Bash / Shell", icon: A.bashIcon },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "FastAPI", icon: A.fastapiIcon },
      { name: "Flask", icon: A.flaskIcon },
      { name: "Pydantic", icon: A.pydanticIcon },
      { name: "SQLAlchemy", icon: A.sqlalchemyIcon },
      { name: ".NET", icon: A.dotnetIcon },
      { name: "ASP.NET Core", icon: A.aspnetIcon },
      { name: "Entity Framework", icon: A.entityframeworkIcon },
      { name: "Node.js", icon: A.nodejsIcon },
      { name: "Express", icon: A.expressIcon },
      { name: "GraphQL", icon: A.graphqlIcon },
      { name: "gRPC", icon: A.grpcIcon },
      { name: "OpenAPI / Swagger", icon: A.swaggerIcon },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", icon: A.reactIcon },
      { name: "Vite", icon: A.viteIcon },
      { name: "Tailwind CSS", icon: A.tailwindIcon },
      { name: "Material UI", icon: A.muiIcon },
      { name: "HTML5 / CSS3", icon: A.html5Icon },
    ],
  },
  {
    key: "ai_llm",
    items: [
      { name: "AI Agents / RAG", icon: A.agentsIcon },
      { name: "vLLM", icon: A.vllmIcon },
      { name: "Azure OpenAI", icon: A.azureIcon },
      { name: "PyTorch", icon: A.pytorchIcon },
      { name: "Hugging Face", icon: A.huggingfaceIcon },
      { name: "Qdrant", icon: A.qdrantIcon },
      { name: "NumPy", icon: A.numpyIcon },
      { name: "Pandas", icon: A.pandasIcon },
    ],
  },
  {
    key: "data_messaging",
    items: [
      { name: "PostgreSQL", icon: A.postgresqlIcon },
      { name: "TimescaleDB", icon: A.timescaleIcon },
      { name: "MongoDB", icon: A.mongodbIcon },
      { name: "Redis", icon: A.redisIcon },
      { name: "SQL Server", icon: A.sqlserverIcon },
      { name: "InfluxDB", icon: A.influxdbIcon },
      { name: "Apache Kafka", icon: A.kafkaIcon },
      { name: "ActiveMQ Artemis", icon: A.activemqIcon },
      { name: "RabbitMQ", icon: A.rabbitmqIcon },
    ],
  },
  {
    key: "cloud_devops",
    items: [
      { name: "Microsoft Azure", icon: A.azureIcon },
      { name: "Docker", icon: A.dockerIcon },
      { name: "Kubernetes", icon: A.kubernetesIcon },
      { name: "Rancher", icon: A.rancherIcon },
      { name: "Harbor", icon: A.harborIcon },
      { name: "GitLab CI/CD", icon: A.gitlabIcon },
      { name: "GitHub Actions", icon: A.githubactionsIcon },
      { name: "Jenkins", icon: A.jenkinsIcon },
      { name: "Terraform", icon: A.terraformIcon },
      { name: "Ansible", icon: A.ansibleIcon },
      { name: "Git", icon: A.gitIcon },
      { name: "Red Hat Linux", icon: A.redhatIcon },
    ],
  },
  {
    key: "security_observability_testing",
    items: [
      { name: "Keycloak (OIDC)", icon: A.keycloakIcon },
      { name: "Prometheus", icon: A.prometheusIcon },
      { name: "Grafana", icon: A.grafanaIcon },
      { name: "OpenTelemetry", icon: A.opentelemetryIcon },
      { name: "PyTest", icon: A.pytestIcon },
      { name: "Playwright", icon: A.playwrightIcon },
      { name: "Robot Framework", icon: A.robotframeworkIcon },
      { name: "Postman", icon: A.postmanIcon },
    ],
  },
  {
    key: "embedded",
    items: [
      { name: "STM32", icon: A.stmIcon },
      { name: "FreeRTOS", icon: A.freertosIcon },
      { name: "Zephyr RTOS", icon: A.zephyrIcon },
      { name: "CMake", icon: A.cmakeIcon },
      { name: "Vector CANoe", icon: A.canoeIcon },
      { name: "GDB", icon: A.gdbIcon },
      { name: "Valgrind", icon: A.valgrindIcon },
      { name: "Linux", icon: A.linuxIcon },
    ],
  },
];

// Split a list into honeycomb rows that alternate between a long and a short row.
const toRows = (items, width) => {
  const [big, small] = width < 520 ? [3, 2] : width < 1000 ? [4, 3] : [6, 5];
  const rows = [];
  let i = 0;
  let size = big;
  while (i < items.length) {
    rows.push(items.slice(i, i + size));
    i += size;
    size = size === big ? small : big;
  }
  return rows;
};

const titleStyle = {
  fontSize: "24px",
  background: "linear-gradient(90deg, #915EFF, #00BFFF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  filter: "drop-shadow(0 0 10px #915EFF)",
};

const Tech = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const renderCategory = ({ key, items }) => (
    <motion.div
      key={key}
      className="category-container"
      initial="hidden"
      animate={mainControls}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
    >
      <h3 className="category-title top" style={titleStyle}>{`<${key}>`}</h3>
      <div className="honeycomb-grid">
        {toRows(items, width).map((row, rowIndex) => (
          <div key={`${key}-row-${rowIndex}`} className="honeycomb-row">
            {row.map((tech) => (
              <motion.div
                key={tech.name}
                className="hexagon"
                title={tech.name}
                whileHover={{ scale: 1.06, zIndex: 2 }}
              >
                <div className="hex-tile">
                  <img src={tech.icon} alt={tech.name} className="hex-icon" draggable="false" loading="lazy" />
                  <span className="hex-label">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      <h3 className="category-title bottom" style={titleStyle}>{`</${key}>`}</h3>
    </motion.div>
  );

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>Technical Proficiencies</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
        </motion.div>
        {categories.map(renderCategory)}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "skills");
