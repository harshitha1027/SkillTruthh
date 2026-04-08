// // // // import { useNavigate, useLocation } from "react-router-dom";
// // // // import "./Home.css";

// // // // function Home() {
// // // //   const navigate = useNavigate();
// // // //   const location = useLocation();

// // // //   const active = location.pathname;

// // // //   return (
// // // //     <div className="home-container">

// // // //       <div className="nav-bar">
// // // //         <h2 className="logo">SkillTruth</h2>

// // // //         <div className="tabs">
// // // //           <button
// // // //             className={active === "/dashboard" ? "tab active" : "tab"}
// // // //             onClick={() => navigate("/dashboard")}
// // // //           >
// // // //             Dashboard
// // // //           </button>

// // // //           <button
// // // //             className={active === "/testsetup" ? "tab active" : "tab"}
// // // //             onClick={() => navigate("/testsetup")}
// // // //           >
// // // //             Test
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       <div className="content">
// // // //         <h1>Welcome 🚀</h1>
// // // //         <p>Select a tab above to continue.</p>
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // export default Home;
// // // import { useNavigate, useLocation } from "react-router-dom";
// // // import "./Home.css";
// // // import "./Login.jsx"; // Ensure Login component is imported for logout functionality
// // // function Home() {
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   const active = location.pathname;

// // //   const handleLogout = () => {
// // //   localStorage.removeItem("userId");   // 🔥 clear login
// // //   navigate("/", { replace: true });
// // // };

// // //   return (
// // //     <div className="home-container">

// // //       <div className="nav-bar">
// // //         <h2 className="logo">SkillTruth</h2>

// // //         <div className="tabs">

// // //           <button
// // //             className={active === "/dashboard" ? "tab active" : "tab"}
// // //             onClick={() => navigate("/dashboard")}
// // //           >
// // //             Dashboard
// // //           </button>

// // //           <button
// // //             className={active === "/testsetup" ? "tab active" : "tab"}
// // //             onClick={() => navigate("/testsetup")}
// // //           >
// // //             Test
// // //           </button>

// // //           {/* LOGOUT BUTTON */}

// // //           <button
// // //             className="tab logout"
// // //             onClick={handleLogout}
// // //           >
// // //             Logout
// // //           </button>

// // //         </div>
// // //       </div>

// // //       <div className="content">
// // //         <h1>Welcome 🚀</h1>
// // //         <p>Select a tab above to continue.</p>
// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default Home;

// // import { useNavigate, useLocation } from "react-router-dom";
// // import { useEffect } from "react";
// // import "./Home.css";

// // function Home() {
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const active =
// //     location.pathname === "/home" ? "/dashboard" : location.pathname;

// //   useEffect(() => {
// //     const user = localStorage.getItem("userId");
// //     if (!user) {
// //       navigate("/");
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     navigate("/", { replace: true });
// //     window.location.reload();
// //   };

// //   return (
// //     <div className="home-container">
// //       <div className="nav-bar">
// //         <h2 className="logo">SkillTruth</h2>

// //         <div className="tabs">
// //           <button
// //             className={active === "/dashboard" ? "tab active" : "tab"}
// //             onClick={() => navigate("/dashboard")}
// //           >
// //             Dashboard
// //           </button>

// //           <button
// //             className={active === "/testsetup" ? "tab active" : "tab"}
// //             onClick={() => navigate("/testsetup")}
// //           >
// //             Test
// //           </button>

// //           <button className="tab logout" onClick={handleLogout}>
// //             Logout
// //           </button>
// //         </div>
// //       </div>
// // <div className="content">
// //   <div className="content-box">
// //     <h1>Welcome to SkillTruth 🚀</h1>

// //     <p className="tagline">
// //       Empowering skills. Evaluating truth.
// //     </p>

// //     <p>
// //       <strong>SkillTruth</strong> is a smart skill assessment platform designed
// //       to help students and professionals evaluate their real-world abilities
// //       through structured tests and analytics.
// //     </p>

// //     <p>
// //       Our platform provides an intuitive environment where users can take tests,
// //       track performance, and identify strengths and areas for improvement.
// //     </p>

// //     <p>
// //       Whether you're preparing for placements, improving your coding skills, or
// //       analyzing your progress, SkillTruth gives you the tools to grow with confidence.
// //     </p>

// //     <div className="features">
// //       <h3>✨ What You Can Do</h3>
// //       <ul>
// //         <li>📊 View your performance dashboard</li>
// //         <li>🧠 Take skill-based tests</li>
// //         <li>📈 Track progress over time</li>
// //         <li>🎯 Improve accuracy and speed</li>
// //       </ul>
// //     </div>
// //   </div>
// // </div>
// //     </div>
// //   );
// // }

// // export default Home;

// import { useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import "./Home.css";

// const features = [
//   {
//     icon: "📊",
//     title: "Performance Dashboard",
//     desc: "Visualize your scores, accuracy, and growth metrics at a glance.",
//     accent: "#3b82f6",
//   },
//   {
//     icon: "🧠",
//     title: "Skill-Based Tests",
//     desc: "Take structured, domain-specific assessments crafted for real-world readiness.",
//     accent: "#8b5cf6",
//   },
//   {
//     icon: "📈",
//     title: "Track Progress",
//     desc: "Monitor improvement over time with detailed historical insights.",
//     accent: "#06b6d4",
//   },
//   {
//     icon: "🎯",
//     title: "Accuracy & Speed",
//     desc: "Sharpen both precision and pace with adaptive test challenges.",
//     accent: "#f59e0b",
//   },
// ];

// function Home() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const active =
//     location.pathname === "/home" ? "/dashboard" : location.pathname;

//   useEffect(() => {
//     const user = localStorage.getItem("userId");
//     if (!user) {
//       navigate("/");
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/", { replace: true });
//     window.location.reload();
//   };

//   return (
//     <div className="home-container">
//       {/* ── Navbar ── */}
//       <nav className="nav-bar">
//         <div className="logo-wrap">
//           <span className="logo-dot" />
//           <h2 className="logo">SkillTruth</h2>
//         </div>

//         <div className="tabs">
//           <button
//             className={active === "/dashboard" ? "tab active" : "tab"}
//             onClick={() => navigate("/dashboard")}
//           >
//             Dashboard
//           </button>
//           <button
//             className={active === "/testsetup" ? "tab active" : "tab"}
//             onClick={() => navigate("/testsetup")}
//           >
//             Test
//           </button>
//           <button className="tab logout" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       </nav>

//       {/* ── Main Content ── */}
//       <main className="content">

//         {/* Hero Card */}
//         <div className="hero-card">
//           <span className="hero-badge">Smart Assessment Platform</span>
//           <h1 className="hero-title">
//             Welcome to <span className="gradient-text">SkillTruth</span> 🚀
//           </h1>
//           <p className="hero-tagline">Empowering skills. Evaluating truth.</p>
//           <p className="hero-body">
//             <strong>SkillTruth</strong> is a smart skill assessment platform
//             designed to help students and professionals evaluate their
//             real-world abilities through structured tests and deep analytics.
//             Prepare for placements, grow your coding skills, and track your
//             journey — all in one place.
//           </p>
//           <div className="hero-actions">
//             <button className="btn-primary" onClick={() => navigate("/testsetup")}>
//               Start a Test →
//             </button>
//             <button className="btn-ghost" onClick={() => navigate("/dashboard")}>
//               View Dashboard
//             </button>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="section-label">✨ What You Can Do</div>
//         <div className="features-grid">
//           {features.map((f, i) => (
//             <div
//               className="feature-card"
//               key={i}
//               style={{ "--accent": f.accent, animationDelay: `${i * 0.1}s` }}
//             >
//               <div className="feature-icon-wrap">
//                 <span className="feature-icon">{f.icon}</span>
//               </div>
//               <h3 className="feature-title">{f.title}</h3>
//               <p className="feature-desc">{f.desc}</p>
//               <div className="feature-bar" />
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [dark, setDark] = useState(false);

  const active =
    location.pathname === "/home" ? "/dashboard" : location.pathname;

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) navigate("/");
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    window.location.reload();
  };

  const t = dark ? themes.dark : themes.light;

  const features = [
    {
      icon: "📊",
      title: "Dashboard",
      desc: "Get a bird's-eye view of your performance metrics and test history at a glance.",
      accent: "#3b82f6",
      delay: "0.1s",
    },
    {
      icon: "🧠",
      title: "Skill Tests",
      desc: "Take structured, skill-based assessments designed for real-world evaluation.",
      accent: "#8b5cf6",
      delay: "0.2s",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      desc: "Visualise your improvement over time with intuitive charts and insights.",
      accent: "#10b981",
      delay: "0.3s",
    },
    {
      icon: "🎯",
      title: "Accuracy & Speed",
      desc: "Sharpen both your precision and response time with adaptive challenges.",
      accent: "#f59e0b",
      delay: "0.4s",
    },
  ];

  return (
    <>
      <style>{getStyles(t, dark)}</style>
      <div className="home-container">
        {/* ── Navbar ── */}
        <nav className="nav-bar">
          <div className="logo-wrap">
            <span className="logo-dot" />
            <h2 className="logo">SkillTruth</h2>
          </div>

          <div className="tabs">
            <button
              className={active === "/dashboard" ? "tab active" : "tab"}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
            <button
              className={active === "/testsetup" ? "tab active" : "tab"}
              onClick={() => navigate("/testsetup")}
            >
              Test
            </button>

            {/* ── Toggle ── */}
            <button
              className="theme-toggle"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle theme"
              title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <span className="toggle-track">
                <span className="toggle-thumb">
                  <span className="toggle-icon">{dark ? "🌙" : "☀️"}</span>
                </span>
              </span>
              <span className="toggle-label">{dark ? "Dark" : "Light"}</span>
            </button>

            <button className="tab logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </nav>

        {/* ── Content ── */}
        <main className="content">
          {/* Hero Card */}
          <div className="hero-card">
            <span className="hero-badge">Smart Skill Assessment</span>
            <h1 className="hero-title">
              Welcome to{" "}
              <span className="gradient-text">SkillTruth</span> 🚀
            </h1>
            <p className="hero-tagline">Empowering skills. Evaluating truth.</p>
            <p className="hero-body">
              <strong>SkillTruth</strong> is a smart skill assessment platform
              designed to help students and professionals evaluate their
              real-world abilities through structured tests and analytics. Track
              your performance, identify your strengths, and grow with
              confidence — whether you're prepping for placements or sharpening
              your craft.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => navigate("/dashboard")}>
                View Dashboard →
              </button>
              <button className="btn-ghost" onClick={() => navigate("/testsetup")}>
                Take a Test
              </button>
            </div>
          </div>

          {/* Features */}
          <p className="section-label">What You Can Do</p>
          <div className="features-grid">
            {features.map((f) => (
              <div
                key={f.title}
                className="feature-card"
                style={{ "--accent": f.accent, animationDelay: f.delay }}
              >
                <div className="feature-icon-wrap">
                  <span>{f.icon}</span>
                </div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
                <span className="feature-bar" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   Theme tokens
───────────────────────────────────────────── */
const themes = {
  dark: {
    bg: "#0d0f1a",
    glow1: "rgba(59,130,246,0.12)",
    glow2: "rgba(139,92,246,0.10)",
    nav: "rgba(255,255,255,0.03)",
    navBorder: "rgba(255,255,255,0.07)",
    card: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.08)",
    cardHoverBorder: "rgba(255,255,255,0.14)",
    text: "#f1f5f9",
    textSub: "#94a3b8",
    textMuted: "#64748b",
    textStrong: "#cbd5e1",
    tabBg: "rgba(255,255,255,0.05)",
    tabBorder: "rgba(255,255,255,0.08)",
    tabColor: "#94a3b8",
    tabHoverBg: "rgba(255,255,255,0.1)",
    tabHoverColor: "#e2e8f0",
    tabHoverBorder: "rgba(255,255,255,0.15)",
    iconWrap: "rgba(255,255,255,0.05)",
    iconWrapBorder: "rgba(255,255,255,0.08)",
    sectionLabel: "#475569",
    trackBg: "rgba(255,255,255,0.1)",
    thumbBg: "#1e293b",
    thumbShadow: "rgba(0,0,0,0.4)",
    toggleLabelColor: "#64748b",
  },
  light: {
    bg: "#f8fafc",
    glow1: "rgba(59,130,246,0.07)",
    glow2: "rgba(139,92,246,0.06)",
    nav: "rgba(255,255,255,0.85)",
    navBorder: "rgba(0,0,0,0.08)",
    card: "rgba(255,255,255,0.85)",
    cardBorder: "rgba(0,0,0,0.07)",
    cardHoverBorder: "rgba(59,130,246,0.25)",
    text: "#0f172a",
    textSub: "#334155",
    textMuted: "#64748b",
    textStrong: "#1e293b",
    tabBg: "#f1f5f9",
    tabBorder: "rgba(0,0,0,0.07)",
    tabColor: "#475569",
    tabHoverBg: "#e2e8f0",
    tabHoverColor: "#1e293b",
    tabHoverBorder: "rgba(0,0,0,0.12)",
    iconWrap: "rgba(0,0,0,0.04)",
    iconWrapBorder: "rgba(0,0,0,0.07)",
    sectionLabel: "#94a3b8",
    trackBg: "#e2e8f0",
    thumbBg: "#ffffff",
    thumbShadow: "rgba(0,0,0,0.15)",
    toggleLabelColor: "#94a3b8",
  },
};

/* ─────────────────────────────────────────────
   Dynamic styles
───────────────────────────────────────────── */
function getStyles(t, dark) {
  return `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}

.home-container{
  font-family:'DM Sans',sans-serif;
  min-height:100vh;
  background:${t.bg};
  background-image:
    radial-gradient(ellipse 80% 50% at 20% 10%,${t.glow1} 0%,transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 80%,${t.glow2} 0%,transparent 60%);
  color:${t.text};
  transition:background 0.35s ease,color 0.35s ease;
}

/* ── Navbar ── */
.nav-bar{
  display:flex;justify-content:space-between;align-items:center;
  padding:18px 48px;
  background:${t.nav};
  backdrop-filter:blur(16px);
  border-bottom:1px solid ${t.navBorder};
  position:sticky;top:0;z-index:100;
  transition:background 0.35s ease,border-color 0.35s ease;
}
.logo-wrap{display:flex;align-items:center;gap:10px;}
.logo-dot{
  width:10px;height:10px;border-radius:50%;
  background:linear-gradient(135deg,#3b82f6,#8b5cf6);
  box-shadow:0 0 10px rgba(59,130,246,0.6);
}
.logo{
  font-family:'Syne',sans-serif;font-size:22px;font-weight:800;letter-spacing:-0.5px;
  background:linear-gradient(90deg,#60a5fa,#a78bfa);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.tabs{display:flex;gap:8px;align-items:center;}
.tab{
  border:1px solid ${t.tabBorder};
  padding:9px 20px;font-size:14px;
  font-family:'DM Sans',sans-serif;font-weight:500;
  background:${t.tabBg};color:${t.tabColor};
  border-radius:10px;cursor:pointer;
  transition:all 0.2s ease;
}
.tab:hover{background:${t.tabHoverBg};color:${t.tabHoverColor};border-color:${t.tabHoverBorder};}
.tab.active{
  background:linear-gradient(135deg,#3b82f6,#6366f1);
  color:#fff;border-color:transparent;
  box-shadow:0 4px 14px rgba(59,130,246,0.35);
}
.tab.logout{
  background:rgba(239,68,68,0.1);color:#f87171;border-color:rgba(239,68,68,0.2);
}
.tab.logout:hover{background:rgba(239,68,68,0.2);color:#fca5a5;}

/* ── Toggle Button ── */
.theme-toggle{
  display:flex;align-items:center;gap:8px;
  background:none;border:none;cursor:pointer;padding:4px 6px;
}
.toggle-track{
  width:52px;height:28px;border-radius:100px;
  background:${t.trackBg};
  position:relative;display:flex;align-items:center;
  padding:3px;
  transition:background 0.35s ease;
  border:1px solid ${t.tabBorder};
}
.toggle-thumb{
  width:22px;height:22px;border-radius:50%;
  background:${t.thumbBg};
  box-shadow:0 2px 6px ${t.thumbShadow};
  display:flex;align-items:center;justify-content:center;
  transform:translateX(${dark ? "0px" : "24px"});
  transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1),background 0.35s ease;
  position:relative;z-index:1;
}
.toggle-icon{font-size:12px;line-height:1;transition:transform 0.35s ease;}
.toggle-label{
  font-family:'DM Sans',sans-serif;
  font-size:13px;font-weight:500;
  color:${t.toggleLabelColor};
  min-width:36px;
  transition:color 0.35s ease;
}

/* ── Content ── */
.content{max-width:1100px;margin:0 auto;padding:60px 32px 80px;}

/* ── Hero Card ── */
.hero-card{
  background:${t.card};
  border:1px solid ${t.cardBorder};
  border-radius:24px;padding:52px 56px;
  margin-bottom:52px;
  backdrop-filter:blur(12px);
  position:relative;overflow:hidden;
  animation:fadeUp 0.6s ease both;
  box-shadow:${dark ? "none" : "0 4px 24px rgba(0,0,0,0.06)"};
  transition:background 0.35s ease,border-color 0.35s ease,box-shadow 0.35s ease;
}
.hero-card::before{
  content:'';position:absolute;top:-80px;right:-80px;
  width:280px;height:280px;border-radius:50%;
  background:radial-gradient(circle,rgba(99,102,241,0.13),transparent 70%);
  pointer-events:none;
}
.hero-badge{
  display:inline-block;font-size:12px;font-weight:600;
  letter-spacing:1.2px;text-transform:uppercase;
  color:#818cf8;background:rgba(99,102,241,0.12);
  border:1px solid rgba(99,102,241,0.25);
  padding:5px 14px;border-radius:100px;margin-bottom:22px;
}
.hero-title{
  font-family:'Syne',sans-serif;
  font-size:clamp(28px,4vw,46px);font-weight:800;
  line-height:1.15;margin-bottom:12px;
  color:${t.text};letter-spacing:-1px;
  transition:color 0.35s ease;
}
.gradient-text{
  background:linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.hero-tagline{
  font-size:18px;color:${t.textMuted};font-style:italic;
  margin-bottom:22px;letter-spacing:0.2px;
  transition:color 0.35s ease;
}
.hero-body{
  font-size:15.5px;line-height:1.8;color:${t.textSub};
  max-width:680px;margin-bottom:36px;
  transition:color 0.35s ease;
}
.hero-body strong{color:${t.textStrong};font-weight:600;}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;}
.btn-primary{
  padding:12px 28px;font-family:'DM Sans',sans-serif;
  font-size:15px;font-weight:600;
  background:linear-gradient(135deg,#3b82f6,#6366f1);color:#fff;
  border:none;border-radius:12px;cursor:pointer;
  transition:all 0.25s ease;
  box-shadow:0 4px 18px rgba(59,130,246,0.3);
}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(59,130,246,0.45);}
.btn-ghost{
  padding:12px 28px;font-family:'DM Sans',sans-serif;
  font-size:15px;font-weight:500;
  background:transparent;color:${t.tabColor};
  border:1px solid ${t.tabBorder};border-radius:12px;cursor:pointer;
  transition:all 0.25s ease;
}
.btn-ghost:hover{background:${t.tabHoverBg};color:${t.tabHoverColor};border-color:${t.tabHoverBorder};}

/* ── Section Label ── */
.section-label{
  font-family:'Syne',sans-serif;font-size:13px;font-weight:700;
  letter-spacing:1.5px;text-transform:uppercase;
  color:${t.sectionLabel};margin-bottom:24px;
  transition:color 0.35s ease;
}

/* ── Feature Cards ── */
.features-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:20px;
}
.feature-card{
  background:${t.card};border:1px solid ${t.cardBorder};
  border-radius:20px;padding:30px 26px;
  position:relative;overflow:hidden;
  transition:transform 0.25s ease,box-shadow 0.25s ease,border-color 0.25s ease,background 0.35s ease;
  animation:fadeUp 0.6s ease both;cursor:default;
  box-shadow:${dark ? "none" : "0 2px 12px rgba(0,0,0,0.05)"};
}
.feature-card:hover{
  transform:translateY(-6px);
  border-color:${t.cardHoverBorder};
  box-shadow:${dark
    ? "0 16px 40px rgba(0,0,0,0.3)"
    : "0 16px 40px rgba(0,0,0,0.1)"};
}
.feature-card:hover .feature-bar{width:100%;}
.feature-icon-wrap{
  width:48px;height:48px;border-radius:14px;
  background:${t.iconWrap};border:1px solid ${t.iconWrapBorder};
  display:flex;align-items:center;justify-content:center;
  margin-bottom:18px;font-size:22px;
  transition:background 0.25s,border-color 0.25s;
}
.feature-card:hover .feature-icon-wrap{
  background:color-mix(in srgb,var(--accent,#3b82f6) 15%,transparent);
  border-color:color-mix(in srgb,var(--accent,#3b82f6) 30%,transparent);
}
.feature-title{
  font-family:'Syne',sans-serif;font-size:16px;font-weight:700;
  color:${t.text};margin-bottom:10px;letter-spacing:-0.3px;
  transition:color 0.35s ease;
}
.feature-desc{font-size:14px;line-height:1.7;color:${t.textMuted};transition:color 0.35s ease;}
.feature-bar{
  position:absolute;bottom:0;left:0;height:3px;width:0;
  background:linear-gradient(90deg,var(--accent,#3b82f6),transparent);
  border-radius:0 0 20px 20px;transition:width 0.4s ease;
}

/* ── Animations ── */
@keyframes fadeUp{
  from{opacity:0;transform:translateY(24px);}
  to{opacity:1;transform:translateY(0);}
}

@media(max-width:640px){
  .nav-bar{padding:14px 20px;}
  .hero-card{padding:32px 24px;}
  .content{padding:36px 16px 60px;}
  .toggle-label{display:none;}
}
  `;
}

export default Home;