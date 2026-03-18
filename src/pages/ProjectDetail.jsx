import { Link, useParams } from "react-router-dom";

const PROJECTS = {
  "embedded-radio-transceiver": {
    title: "Embedded Radio Transceiver",
    dates: "Aug 2022 – Dec 2022",
    description:
      "Prototype of an AM radio transceiver designed to transmit low-frequency signals and receive them without distortion/noise. Demodulated output is produced via speaker.",
    skills: ["Embedded Systems", "Arduino"],
  },
  "neo4j-kafka-k8s-graph-pipeline": {
    title: "Graph Data Pipeline (Neo4j + Kafka + Kubernetes)",
    dates: "Spring 2025",
    description:
      "Deployed Neo4j graph database and ran PageRank/BFS. Built a real-time pipeline with Kafka and Kubernetes for scalability.",
    skills: ["Neo4j", "Docker", "Kafka", "Kubernetes"],
  },
  "lda-ecommerce-topic-modeling": {
    title: "Topic Modeling for E-commerce Reviews (LDA)",
    dates: "Spring 2025",
    description:
      "Built an end-to-end LDA pipeline to extract themes from 22K+ reviews and cluster insights.",
    skills: ["Python", "NLP", "LDA"],
  },
  "caffeine-eda-health-impact": {
    title: "Caffeine Content Analysis & Health Impact",
    dates: "Spring 2025",
    description:
      "Analyzed 600+ beverages using statistical tests and trained ML models to classify intake limits.",
    skills: ["EDA", "Statistics", "ML"],
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECTS[slug];

  if (!p) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: 24 }}>
        <Link to="/" style={{ color: "inherit", opacity: 0.8, textDecoration: "none" }}>← Back</Link>
        <h1 style={{ marginTop: 16 }}>Project not found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "ui-sans-serif, system-ui" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <Link to="/" style={{ color: "inherit", opacity: 0.8, textDecoration: "none" }}>← Back</Link>
        <h1 style={{ marginTop: 16, fontSize: 40, letterSpacing: "-.5px" }}>{p.title}</h1>
        <div style={{ marginTop: 6, opacity: 0.7 }}>{p.dates}</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
          {p.skills.map((s) => (
            <span key={s} style={{ border: "1px solid rgba(255,255,255,.15)", padding: "6px 10px", borderRadius: 999, fontSize: 13, opacity: 0.85 }}>
              {s}
            </span>
          ))}
        </div>

        <p style={{ marginTop: 18, opacity: 0.8, lineHeight: 1.7, fontSize: 16 }}>{p.description}</p>
      </div>
    </div>
  );
}