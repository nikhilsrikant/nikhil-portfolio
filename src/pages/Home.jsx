import { Link } from "react-router-dom";

export default function Home() {
  const cardBase = {
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(255,255,255,.04)",
    borderRadius: 26,
    padding: 20,
  };

  const linkCard = {
    ...cardBase,
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  const projects = [
    {
      title: "Embedded Radio Transceiver",
      slug: "embedded-radio-transceiver",
      subtitle: "AM transceiver prototype • Embedded/Arduino",
      blurb:
        "Designed and developed a low-frequency AM transceiver prototype with demodulated audio output.",
    },
    {
      title: "Graph Data Pipeline (Neo4j + Kafka + Kubernetes)",
      slug: "neo4j-kafka-k8s-graph-pipeline",
      subtitle: "Scalable graph analytics • Streaming + orchestration",
      blurb:
        "Deployed Neo4j on NYC Yellow Cab data, ran PageRank/BFS, and built a real-time pipeline using Kafka + Kubernetes.",
    },
    {
      title: "Topic Modeling for E-commerce Reviews (LDA)",
      slug: "lda-ecommerce-topic-modeling",
      subtitle: "NLP • Topic modeling on 22K+ reviews",
      blurb:
        "Built an end-to-end LDA pipeline to uncover themes like fit, quality, and style from large-scale review data.",
    },
    {
      title: "Caffeine Content Analysis & Health Impact",
      slug: "caffeine-eda-health-impact",
      subtitle: "EDA + statistical tests + ML",
      blurb:
        "Analyzed 600+ beverages with ANOVA/Tukey/Kruskal-Wallis and trained ML models to classify caffeine intake limits.",
    },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Cyient Ltd. (Hyderabad, India)",
      slug: "cyient-ocr-pdf-to-excel",
      dates: "Jan 2024 – Jul 2024",
      blurb:
        "Built an OCR automation tool to transfer data from PDFs to Excel—requirements through testing and deployment.",
    },
    {
      role: "Project Intern",
      company: "NVIDIA AI Technology Center (Remote, India)",
      slug: "nvidia-ai-tech-center-image-analysis",
      dates: "Jan 2023 – Dec 2023",
      blurb:
        "Created a MATLAB GUI for automated image comparison (heatmaps, luminance mapping, histogram analysis) and bulk processing.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "ui-sans-serif, system-ui",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          backdropFilter: "blur(12px)",
          background: "rgba(0,0,0,.6)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 700, letterSpacing: ".3px" }}>
            Nikhil Srikant Kulkarni
          </div>

          <div style={{ display: "flex", gap: 18, opacity: 0.85, fontSize: 14 }}>
            <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>
              Projects
            </a>
            <a
              href="#experience"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Experience
            </a>
            <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>
              About
            </a>
            <a
              href="#contact"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            style={{
              background: "#fff",
              color: "#000",
              padding: "10px 14px",
              borderRadius: 999,
              fontWeight: 700,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Let’s talk
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 32px", textAlign: "center"}}>
          <h1
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-.8px",
            }}
          >
            Building clean, high-impact products with{" "}
            <span style={{ opacity: 0.75 }}>AI + engineering</span>.
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "18px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              opacity: 0.72,
            }}
          >
            I build modern web experiences and data/AI projects—focused on speed, polish,
            and real outcomes.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "#fff",
                color: "#000",
                padding: "12px 18px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              View projects
            </a>
            <a
              href="#experience"
              style={{
                border: "1px solid rgba(255,255,255,.18)",
                color: "#fff",
                padding: "12px 18px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              View experience
            </a>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              marginTop: 30,
            }}
          >
            {[
              { k: "Focus", v: "AI • Web • Data" },
              { k: "Strengths", v: "Clean UX • Speed • Quality" },
              { k: "Open to", v: "Internships • Collaboration" },
            ].map((x) => (
              <div
                key={x.k}
                style={{
                  border: "1px solid rgba(255,255,255,.10)",
                  background: "rgba(255,255,255,.04)",
                  borderRadius: 20,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.6 }}>{x.k}</div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800 }}>
                  {x.v}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 28, margin: 0 }}>Projects</h2>
          <p style={{ marginTop: 10, opacity: 0.7 }}>
            Click a project to view the full description (opens in the same tab).
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 16,
              marginTop: 18,
            }}
          >
            {projects.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} style={linkCard}>
                <div style={{ fontSize: 13, opacity: 0.6 }}>{p.subtitle}</div>
                <div style={{ marginTop: 8, fontSize: 20, fontWeight: 900 }}>
                  {p.title}
                </div>
                <div style={{ marginTop: 10, opacity: 0.75, lineHeight: 1.6 }}>
                  {p.blurb}
                </div>
                <div style={{ marginTop: 14, fontSize: 14, fontWeight: 800, opacity: 0.85 }}>
                  View details →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 28, margin: 0 }}>Experience</h2>
          <p style={{ marginTop: 10, opacity: 0.7 }}>
            Click an experience card to view responsibilities and outcomes.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 16,
              marginTop: 18,
            }}
          >
            {experiences.map((e) => (
              <Link key={e.slug} to={`/experience/${e.slug}`} style={linkCard}>
                <div style={{ fontSize: 13, opacity: 0.6 }}>{e.dates}</div>
                <div style={{ marginTop: 8, fontSize: 20, fontWeight: 900 }}>
                  {e.role}
                </div>
                <div style={{ marginTop: 6, opacity: 0.85 }}>{e.company}</div>
                <div style={{ marginTop: 10, opacity: 0.75, lineHeight: 1.6 }}>
                  {e.blurb}
                </div>
                <div style={{ marginTop: 14, fontSize: 14, fontWeight: 800, opacity: 0.85 }}>
                  View details →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
        id="about"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}
        >
        <div
            style={{
            border: "1px solid rgba(255,255,255,.10)",
            background: "rgba(255,255,255,.04)",
            borderRadius: 26,
            padding: 24,
            }}
        >
            <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <h2
                style={{
                fontSize: 28,
                margin: 0,
                letterSpacing: "-.2px",
                }}
            >
                About
            </h2>

            <p style={{ marginTop: 14, opacity: 0.78, lineHeight: 1.75 }}>
                I’m an engineer focused on building reliable, modern products across AI, data,
                and software systems. I enjoy turning messy problems into clean pipelines,
                strong UX, and measurable results.
            </p>

            <div
                style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 14,
                marginTop: 18,
                textAlign: "left",
                }}
            >
                <div
                style={{
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(255,255,255,.03)",
                    borderRadius: 18,
                    padding: 16,
                }}
                >
                <div style={{ fontSize: 13, opacity: 0.65 }}>Interests</div>
                <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.6 }}>
                    AI/ML • Data pipelines • Applied analytics • Product-grade engineering
                </div>
                </div>

                <div
                style={{
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(255,255,255,.03)",
                    borderRadius: 18,
                    padding: 16,
                }}
                >
                <div style={{ fontSize: 13, opacity: 0.65 }}>Currently</div>
                <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.6 }}>
                    Open to internships and project collaborations
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
          <div style={{ ...cardBase, padding: 24 }}>
            <h2 style={{ fontSize: 28, margin: 0 }}>Contact</h2>
            <p style={{ marginTop: 10, opacity: 0.72 }}>
              Email me and I’ll reply quickly.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <a
                href="mailto:your@email.com"
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: "#000",
                  padding: "12px 18px",
                  borderRadius: 999,
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                your@email.com
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,.18)",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 999,
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,.18)",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 999,
                  fontWeight: 900,
                  textDecoration: "none",
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          padding: "22px 0",
          opacity: 0.6,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", fontSize: 13 }}>
          © {new Date().getFullYear()} Nikhil Srikant Kulkarni
        </div>
      </footer>
    </div>
  );
}