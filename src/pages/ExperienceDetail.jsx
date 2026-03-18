import { Link, useParams } from "react-router-dom";

const EXPERIENCE = {
  "cyient-ocr-pdf-to-excel": {
    role: "Software Engineer Intern",
    company: "Cyient Ltd. — Hyderabad, India",
    dates: "Jan 2024 – Jul 2024",
    bullets: [
      "Built an OCR tool to automate data transfer from PDF to Excel.",
      "Worked end-to-end: requirements, implementation, testing, deployment.",
      "Improved accuracy and efficiency of manual data workflows.",
    ],
    skills: ["Python", "OCR", "Automation"],
  },
  "nvidia-ai-tech-center-image-analysis": {
    role: "Project Intern",
    company: "NVIDIA AI Technology Center — Remote, India",
    dates: "Jan 2023 – Dec 2023",
    bullets: [
      "Developed a MATLAB GUI for automated image comparisons.",
      "Implemented heatmaps, luminance mapping, and histogram analysis.",
      "Built bulk-processing workflows for large datasets.",
    ],
    skills: ["MATLAB", "Image Analysis", "Automation"],
  },
};

export default function ExperienceDetail() {
  const { slug } = useParams();
  const e = EXPERIENCE[slug];

  if (!e) {
    return (
      <div style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: 24 }}>
        <Link to="/" style={{ color: "inherit", opacity: 0.8, textDecoration: "none" }}>← Back</Link>
        <h1 style={{ marginTop: 16 }}>Experience not found</h1>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "ui-sans-serif, system-ui" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <Link to="/" style={{ color: "inherit", opacity: 0.8, textDecoration: "none" }}>← Back</Link>
        <h1 style={{ marginTop: 16, fontSize: 40, letterSpacing: "-.5px" }}>{e.role}</h1>
        <div style={{ marginTop: 6, opacity: 0.8 }}>{e.company}</div>
        <div style={{ marginTop: 6, opacity: 0.65 }}>{e.dates}</div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
          {e.skills.map((s) => (
            <span key={s} style={{ border: "1px solid rgba(255,255,255,.15)", padding: "6px 10px", borderRadius: 999, fontSize: 13, opacity: 0.85 }}>
              {s}
            </span>
          ))}
        </div>

        <h2 style={{ marginTop: 22, fontSize: 18, opacity: 0.9 }}>Highlights</h2>
        <ul style={{ marginTop: 10, lineHeight: 1.8, opacity: 0.8 }}>
          {e.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}