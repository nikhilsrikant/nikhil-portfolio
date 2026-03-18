export const projects = [
  {
    slug: "embedded-radio-transceiver",
    title: "Embedded Radio Transceiver",
    dates: "Aug 2022 – Dec 2022",
    org: "KLE Technological University, Hubballi (India)",
    skills: ["Embedded Systems", "Arduino"],
    description:
      "Prototype of an AM radio transceiver designed to transmit low-frequency signals and receive them without distortion/noise. Demodulated output is produced via speaker.",
    highlights: [
      "Designed + developed AM transceiver prototype",
      "Focused on low-frequency transmission reliability",
      "Demodulation and audio output via speaker",
    ],
  },
  {
    slug: "lda-ecommerce-topic-modeling",
    title: "Probabilistic Topic Modeling for E-commerce Reviews (LDA)",
    dates: "Spring 2025",
    skills: ["Python", "NLP", "LDA", "K-means"],
    description:
      "Built an NLP pipeline using LDA + clustering on 22K+ women’s clothing reviews to uncover themes like fit, quality, and style.",
    highlights: [
      "LDA topic modeling on 22K+ reviews",
      "End-to-end pipeline: preprocessing → modeling → clustering → visualization",
      "Actionable insights for retail themes",
    ],
  },
  {
    slug: "neo4j-kafka-k8s-graph-pipeline",
    title: "Scalable Graph Data Processing Pipeline (Neo4j + Kafka + Kubernetes)",
    dates: "Spring 2025",
    skills: ["Neo4j", "Docker", "Kafka", "Kubernetes"],
    description:
      "Deployed a Docker-based Neo4j graph DB on NYC Yellow Cab data, ran PageRank/BFS, and built a real-time pipeline with Kafka + Kubernetes.",
    highlights: [
      "Dockerized Neo4j graph analytics (PageRank, BFS)",
      "Kafka streaming + Kubernetes orchestration",
      "Designed for scalability and availability",
    ],
  },
  {
    slug: "caffeine-eda-health-impact",
    title: "Caffeine Content Analysis & Health Impact",
    dates: "Spring 2025",
    skills: ["EDA", "Statistics", "ML"],
    description:
      "Analyzed 600+ beverages and used statistical tests plus ML models to compare caffeine patterns and classify drinks against intake limits.",
    highlights: [
      "ANOVA, Tukey HSD, Kruskal-Wallis",
      "Random Forest, Logistic Regression, SVR",
      "Classification vs intake limits",
    ],
  },
];