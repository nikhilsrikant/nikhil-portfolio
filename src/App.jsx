export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "ui-sans-serif, system-ui" }}>
      <header style={{ position: "sticky", top: 0, backdropFilter: "blur(12px)", background: "rgba(0,0,0,.6)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontWeight: 700, letterSpacing: ".3px" }}>Nikhil</div>
          <div style={{ display: "flex", gap: 18, opacity: .85, fontSize: 14 }}>
            <a href="#work" style={{ color: "inherit", textDecoration: "none" }}>Work</a>
            <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
            <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>
          </div>
          <a href="#contact" style={{ background: "#fff", color: "#000", padding: "10px 14px", borderRadius: 999, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Let’s talk
          </a>
        </div>
      </header>

      <main>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 32px" }}>
          <h1 style={{ fontSize: 56, lineHeight: 1.05, margin: 0, letterSpacing: "-.8px" }}>
            Building clean, high-impact products with <span style={{ opacity: .75 }}>AI + engineering</span>.
          </h1>
          <p style={{ maxWidth: 720, marginTop: 18, fontSize: 18, lineHeight: 1.6, opacity: .72 }}>
            I’m Nikhil. I build modern web experiences and data/AI projects—focused on speed, polish, and real outcomes.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <a href="#work" style={{ background: "#fff", color: "#000", padding: "12px 18px", borderRadius: 999, fontWeight: 800, textDecoration: "none" }}>
              View work
            </a>
            <a href="#contact" style={{ border: "1px solid rgba(255,255,255,.18)", color: "#fff", padding: "12px 18px", borderRadius: 999, fontWeight: 800, textDecoration: "none" }}>
              Contact
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 30 }}>
            {[
              { k: "Projects", v: "AI • Web • Data" },
              { k: "Strengths", v: "Clean UX • Speed • Quality" },
              { k: "Open to", v: "Internships • Collaboration" },
            ].map((x) => (
              <div key={x.k} style={{ border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)", borderRadius: 20, padding: 16 }}>
                <div style={{ fontSize: 13, opacity: .6 }}>{x.k}</div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 800 }}>{x.v}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 28, margin: 0 }}>Featured work</h2>
          <p style={{ marginTop: 10, opacity: .7 }}>Replace these cards with your real projects.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginTop: 18 }}>
            {["Project One", "Project Two"].map((title) => (
              <div key={title} style={{ border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)", borderRadius: 26, padding: 20 }}>
                <div style={{ fontSize: 13, opacity: .6 }}>Case study</div>
                <div style={{ marginTop: 8, fontSize: 20, fontWeight: 900 }}>{title}</div>
                <div style={{ marginTop: 10, opacity: .75, lineHeight: 1.6 }}>
                  One-line description of the problem, approach, and result.
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
          <h2 style={{ fontSize: 28, margin: 0 }}>About</h2>
          <p style={{ marginTop: 14, maxWidth: 760, opacity: .72, lineHeight: 1.7 }}>
            Write 3–4 lines about what you do, what you’re focusing on, and the roles you want.
          </p>
        </section>

        <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
          <div style={{ border: "1px solid rgba(255,255,255,.10)", background: "rgba(255,255,255,.04)", borderRadius: 26, padding: 24 }}>
            <h2 style={{ fontSize: 28, margin: 0 }}>Contact</h2>
            <p style={{ marginTop: 10, opacity: .72 }}>Email me and I’ll reply quickly.</p>
            <a href="mailto:your@email.com" style={{ display: "inline-block", marginTop: 16, background: "#fff", color: "#000", padding: "12px 18px", borderRadius: 999, fontWeight: 900, textDecoration: "none" }}>
              your@email.com
            </a>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "22px 0", opacity: .6 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", fontSize: 13 }}>
          © {new Date().getFullYear()} Nikhil
        </div>
      </footer>
    </div>
  );
}