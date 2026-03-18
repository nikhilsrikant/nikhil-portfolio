// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * LIGHT/DARK MODE (no extra files needed)
 * - Saves preference in localStorage
 * - Defaults to system preference if nothing saved
 */
const THEME_KEY = "theme"; // "light" | "dark"

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return prefersDark ? "dark" : "light";
}

function applyTheme(theme) {
  // Store theme on <html> so CSS variables work everywhere
  document.documentElement.dataset.theme = theme;
}

/**
 * CSS variables injected by JS so you don't have to edit index.css.
 * If you *already* added vars in index.css, this won't break anything.
 */
function injectThemeCSSVars() {
  if (document.getElementById("theme-vars")) return;

  const style = document.createElement("style");
  style.id = "theme-vars";
style.innerHTML = `
  html, body {
    margin: 0;
    padding: 0;
    background: var(--bg);
  }
  body {
    overflow-x: hidden;
  }

  :root[data-theme="light"]{
    --bg: #f5f5f7;
    --text: #1d1d1f;
    --muted: #6e6e73;
    --card: #ffffff;
    --cardBorder: rgba(0,0,0,.08);
    --shadow: 0 20px 60px rgba(0,0,0,.08);
    --navBg: rgba(245,245,247,.75);
    --pillBg: rgba(255,255,255,.85);
    --pillBorder: rgba(0,0,0,.10);
    --primary: #1d1d1f;
    --primaryText: #ffffff;
    --soft: #f5f5f7;
  }

  :root[data-theme="dark"]{
    --bg: #000;
    --text: #ffffff;
    --muted: rgba(255,255,255,.72);
    --card: rgba(255,255,255,.06);
    --cardBorder: rgba(255,255,255,.14);
    --shadow: 0 20px 60px rgba(0,0,0,.35);
    --navBg: rgba(0,0,0,.65);
    --pillBg: rgba(255,255,255,.08);
    --pillBorder: rgba(255,255,255,.18);
    --primary: #ffffff;
    --primaryText: #000000;
    --soft: rgba(255,255,255,.06);
  }
`;
  document.head.appendChild(style);
}

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    injectThemeCSSVars();
    const t = getInitialTheme();
    setTheme(t);
    applyTheme(t);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  const container = {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "0 24px",
  };

  const pill = (opts = {}) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 999,
    border: `1px solid var(--pillBorder)`,
    background: "var(--pillBg)",
    textDecoration: "none",
    color: "var(--text)",
    fontWeight: 800,
    fontSize: 14,
    cursor: opts.asButton ? "pointer" : undefined,
  });

  const subtleLink = {
    textDecoration: "none",
    color: "var(--text)",
    opacity: 0.75,
    fontSize: 14,
    fontWeight: 700,
  };

  const card = (bg) => ({
    borderRadius: 28,
    background: bg ?? "var(--card)",
    border: `1px solid var(--cardBorder)`,
    boxShadow: "var(--shadow)",
    overflow: "hidden",
  });

  const tileLink = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
  };

  // Edit these to match your resume exactly
  const categories = [
    { label: "Projects", emoji: "🧩", href: "#projects" },
    { label: "Experience", emoji: "🧑‍💻", href: "#experience" },
    { label: "AI/ML", emoji: "🤖", href: "#projects" },
    { label: "Data", emoji: "📊", href: "#projects" },
    { label: "Embedded", emoji: "🛰️", href: "#projects" },
    { label: "Contact", emoji: "✉️", href: "#contact" },
  ];

  const projects = [
    {
      title: "Embedded Radio Transceiver",
      slug: "embedded-radio-transceiver",
      tag: "Embedded",
      subtitle: "AM transceiver prototype • Arduino",
      blurb:
        "Designed and developed a low-frequency AM transceiver prototype with demodulated audio output.",
      darkTile: true,
    },
    {
      title: "Graph Data Pipeline",
      slug: "neo4j-kafka-k8s-graph-pipeline",
      tag: "Data + Systems",
      subtitle: "Neo4j • Kafka • Kubernetes",
      blurb:
        "Deployed graph analytics and built a streaming pipeline designed for scalability and availability.",
      darkTile: false,
    },
    {
      title: "Topic Modeling (LDA)",
      slug: "lda-ecommerce-topic-modeling",
      tag: "AI/ML",
      subtitle: "NLP • 22K+ reviews",
      blurb:
        "Built an end-to-end LDA pipeline to uncover themes like fit, quality, and style from review data.",
      darkTile: false,
    },
  ];

  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Cyient Ltd.",
      dates: "Jan 2024 – Jul 2024",
      slug: "cyient-ocr-pdf-to-excel",
      blurb:
        "Built an OCR tool to automate PDF → Excel workflows; delivered end-to-end from requirements to deployment.",
    },
    {
      role: "Project Intern",
      company: "NVIDIA AI Technology Center",
      dates: "Jan 2023 – Dec 2023",
      slug: "nvidia-ai-tech-center-image-analysis",
      blurb:
        "Created a MATLAB GUI for automated image comparison (heatmaps, luminance mapping, histograms) and bulk processing.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "ui-sans-serif, system-ui",
      }}
    >
      {/* TOP NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(14px)",
          background: "var(--navBg)",
          borderBottom: `1px solid var(--cardBorder)`,
        }}
      >
        <div
          style={{
            ...container,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            gap: 14,
          }}
        >
          <div style={{ fontWeight: 900, letterSpacing: "-.2px" }}>
            Nikhil Srikant Kulkarni
          </div>

          <nav
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a href="#projects" style={subtleLink}>
              Projects
            </a>
            <a href="#experience" style={subtleLink}>
              Experience
            </a>
            <a href="#about" style={subtleLink}>
              About
            </a>
            <a href="#contact" style={subtleLink}>
              Contact
            </a>
          </nav>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a
              href="#contact"
              style={{
                ...pill(),
                background: "var(--primary)",
                color: "var(--primaryText)",
                border: "none",
              }}
            >
              Let’s talk
            </a>

            <button
              onClick={toggleTheme}
              style={pill({ asButton: true })}
              aria-label="Toggle light/dark mode"
              title="Toggle light/dark mode"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ ...container, paddingTop: 34, paddingBottom: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 18, fontWeight: 800, opacity: 0.9 }}>
            Portfolio
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 56,
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            Building{" "}
            <span style={{ color: "var(--muted)", fontWeight: 800 }}>
              clean, high-impact
            </span>{" "}
            products with AI + engineering.
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--muted)",
              maxWidth: 820,
            }}
          >
            I build modern web experiences and data/AI systems—focused on polish,
            speed, and measurable outcomes.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <a href="#projects" style={pill()}>
              View projects
            </a>
            <a href="#experience" style={pill()}>
              View experience
            </a>
            <a href="#contact" style={pill()}>
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY ROW (Apple Store vibe) */}
      <section style={{ ...container, paddingTop: 12, paddingBottom: 22 }}>
        <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 6 }}>
          {categories.map((c) => (
            <a
              key={c.label}
              href={c.href}
              style={{
                minWidth: 150,
                flex: "0 0 auto",
                borderRadius: 22,
                background: "var(--card)",
                border: `1px solid var(--cardBorder)`,
                boxShadow: "var(--shadow)",
                padding: "16px 16px",
                textDecoration: "none",
                color: "var(--text)",
              }}
            >
              <div style={{ fontSize: 22 }}>{c.emoji}</div>
              <div style={{ marginTop: 10, fontWeight: 900 }}>{c.label}</div>
            </a>
          ))}
        </div>
      </section>

      {/* LATEST */}
      <section style={{ ...container, paddingTop: 10, paddingBottom: 10 }}>
        <div style={{ fontSize: 34, fontWeight: 950, letterSpacing: "-.6px" }}>
          The latest.
          <span style={{ color: "var(--muted)", fontWeight: 800 }}>
            {" "}
            Take a look at what’s new.
          </span>
        </div>
      </section>

      {/* PROJECT TILES */}
      <section id="projects" style={{ ...container, paddingBottom: 34 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 18,
          }}
        >
          {projects.map((p) => {
            const bg = p.darkTile
              ? "linear-gradient(180deg, #111 0%, #000 100%)"
              : "var(--card)";
            const textColor = p.darkTile ? "#fff" : "var(--text)";
            const muted = p.darkTile ? "rgba(255,255,255,.75)" : "var(--muted)";
            const divider = p.darkTile
              ? "1px solid rgba(255,255,255,.12)"
              : `1px solid var(--cardBorder)`;

            return (
              <Link key={p.slug} to={`/projects/${p.slug}`} style={tileLink}>
                <div style={card(bg)}>
                  <div style={{ padding: 22, color: textColor }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 950,
                        letterSpacing: ".12em",
                        opacity: 0.85,
                      }}
                    >
                      {p.tag.toUpperCase()}
                    </div>

                    <div
                      style={{
                        marginTop: 10,
                        fontSize: 30,
                        fontWeight: 950,
                        letterSpacing: "-.6px",
                      }}
                    >
                      {p.title}
                    </div>

                    <div style={{ marginTop: 8, color: muted, fontWeight: 800 }}>
                      {p.subtitle}
                    </div>

                    <div style={{ marginTop: 12, color: muted, lineHeight: 1.6 }}>
                      {p.blurb}
                    </div>

                    <div style={{ marginTop: 16, fontWeight: 950, opacity: 0.9 }}>
                      View details →
                    </div>
                  </div>

                  {/* “image” placeholder block */}
                  <div
                    style={{
                      height: 180,
                      background: p.darkTile
                        ? "rgba(255,255,255,.06)"
                        : "rgba(0,0,0,.04)",
                      borderTop: divider,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ ...container, paddingTop: 10, paddingBottom: 34 }}>
        <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-.4px" }}>
          Experience
        </div>

        <div
          style={{
            marginTop: 14,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {experiences.map((e) => (
            <Link key={e.slug} to={`/experience/${e.slug}`} style={tileLink}>
              <div style={card()}>
                <div style={{ padding: 22 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 950,
                      letterSpacing: ".12em",
                      color: "var(--muted)",
                    }}
                  >
                    {e.dates.toUpperCase()}
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 22,
                      fontWeight: 950,
                      letterSpacing: "-.4px",
                    }}
                  >
                    {e.role}
                  </div>

                  <div style={{ marginTop: 6, fontWeight: 900 }}>{e.company}</div>

                  <div style={{ marginTop: 10, color: "var(--muted)", lineHeight: 1.6 }}>
                    {e.blurb}
                  </div>

                  <div style={{ marginTop: 14, fontWeight: 950 }}>View details →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ ...container, paddingBottom: 34 }}>
        <div style={card()}>
          <div style={{ padding: 26 }}>
            <div style={{ maxWidth: 900 }}>
              <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-.4px" }}>
                About
              </div>

              <p style={{ marginTop: 12, color: "var(--muted)", lineHeight: 1.75 }}>
                I’m an engineer focused on building reliable, modern products across AI,
                data, and software systems. I enjoy turning messy problems into clean
                pipelines, strong UX, and measurable results.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: 14,
                  marginTop: 16,
                }}
              >
                <div
                  style={{
                    border: `1px solid var(--cardBorder)`,
                    borderRadius: 18,
                    padding: 16,
                    background: "var(--soft)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 950,
                      letterSpacing: ".12em",
                      color: "var(--muted)",
                    }}
                  >
                    INTERESTS
                  </div>
                  <div style={{ marginTop: 10, fontWeight: 900 }}>
                    AI/ML • Data pipelines • Applied analytics • Product-grade engineering
                  </div>
                </div>

                <div
                  style={{
                    border: `1px solid var(--cardBorder)`,
                    borderRadius: 18,
                    padding: 16,
                    background: "var(--soft)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 950,
                      letterSpacing: ".12em",
                      color: "var(--muted)",
                    }}
                  >
                    CURRENTLY
                  </div>
                  <div style={{ marginTop: 10, fontWeight: 900 }}>
                    Open to internships and project collaborations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ ...container, paddingBottom: 60 }}>
        <div style={card()}>
          <div style={{ padding: 26 }}>
            <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-.4px" }}>
              Contact
            </div>
            <p style={{ marginTop: 10, color: "var(--muted)" }}>
              Email me and I’ll reply quickly.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
              <a
                href="mailto:your@email.com"
                style={{
                  ...pill(),
                  background: "var(--primary)",
                  color: "var(--primaryText)",
                  border: "none",
                }}
              >
                your@email.com
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                style={pill()}
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                style={pill()}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ padding: "24px 0 40px", color: "var(--muted)" }}>
        <div style={container}>
          <div style={{ borderTop: `1px solid var(--cardBorder)`, paddingTop: 18, fontSize: 13 }}>
            © {new Date().getFullYear()} Nikhil Srikant Kulkarni
          </div>
        </div>
      </footer>
    </div>
  );
}