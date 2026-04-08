// import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/TestPage.css";

// function TestPage() {

//   const location = useLocation();
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");

//   if (!userId) {
//     alert("User not logged in");
//     navigate("/");
//   }

//   const { questions, subject, difficulty, totalTime } = location.state || {};

//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(totalTime || 0);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // 🚫 No questions case
//   if (!questions || questions.length === 0) {
//     return <h2>No test loaded</h2>;
//   }
//   useEffect(() => {
//   if (isSubmitted) {
//     navigate("/home", { replace: true });
//   }
// }, [isSubmitted, navigate]);

//   // ✅ TIMER LOGIC
//   useEffect(() => {

//     if (isSubmitted) return;

//     if (timeLeft <= 0) {
//       handleAutoSubmit();
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft(prev => prev - 1);
//     }, 1000);

//     return () => clearInterval(timer);

//   }, [timeLeft, isSubmitted]);

//   // ✅ FORMAT TIMER
//   const formatTime = () => {
//     const min = Math.floor(timeLeft / 60);
//     const sec = timeLeft % 60;
//     return `${min}:${sec < 10 ? "0" : ""}${sec}`;
//   };

//   // ✅ SELECT OPTION
//   const selectOption = (option) => {
//     setAnswers({
//       ...answers,
//       [current]: option
//     });
//   };

//   // ✅ NEXT
//   const saveNext = () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//     }
//   };

//   // ✅ CLEAR
//   const clearSelection = () => {
//     const updated = { ...answers };
//     delete updated[current];
//     setAnswers(updated);
//   };

//   // ✅ MAIN SUBMIT
//   const submitTest = async () => {

//     if (isSubmitted) return;
//     setIsSubmitted(true);

//     try {

//       const formatted = questions.map((q, index) => ({
//         q_no: q.q_no,
//         selected: answers[index] || null
//       }));

//       const res = await axios.post(
//         "http://localhost:5000/api/test/submit",
//         {
//           userId: userId,
//           skill: subject,
//           difficulty: difficulty,
//           answers: formatted
//         }
//       );

//       navigate("/result", {
//     state: { result: res.data },
//     replace: true
//     });

//     } catch (err) {
//       console.error(err);
//       alert("Submission failed");
//     }
//   };

//   // ⏳ AUTO SUBMIT
//   const handleAutoSubmit = async () => {

//     if (isSubmitted) return;

//     alert("⏳ Time's up! Auto submitting...");
//     await submitTest();
//   };

//   const q = questions[current];

//   return (
//     <div className="container">

//       {/* Sidebar */}
//       <div className="sidebar">
//         {questions.map((_, i) => (
//           <div
//             key={i}
//             className={answers[i] ? "box answered" : "box"}
//             onClick={() => setCurrent(i)}
//           >
//             {i + 1}
//           </div>
//         ))}
//       </div>

//       {/* Question Area */}
//       <div className="question-area">

//         {/* ⏳ TIMER */}
//         <div className="timer">
//           ⏳ Time Left: {formatTime()}
//         </div>

//         <h3>Question {current + 1}</h3>

//         <p>{q.question}</p>

//         {/* CODE BLOCK */}
//         {q.question_type?.toLowerCase() === "code_output" && q.code_snippet && (
//           <pre className="code-block">
//             <code>{q.code_snippet.replace(/\\n/g, "\n")}</code>
//           </pre>
//         )}

//         {/* OPTIONS */}
//         {[1, 2, 3, 4].map(opt => (
//           <label key={opt} className="option">
//             <input
//               type="radio"
//               name="option"
//               checked={answers[current] === opt}
//               onChange={() => selectOption(opt)}
//               disabled={isSubmitted}
//             />
//             {q["option" + opt]}
//           </label>
//         ))}

//         {/* BUTTONS */}
//         <div className="buttons">

//           <button onClick={clearSelection} disabled={isSubmitted}>
//             Clear Selection
//           </button>

//           {current === questions.length - 1 ? (
//             <button onClick={submitTest} disabled={isSubmitted}>
//               Submit Test
//             </button>
//           ) : (
//             <button onClick={saveNext}>
//               Save & Next
//             </button>
//           )}

//         </div>

//       </div>

//     </div>
//   );
// }


// export default TestPage;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

/* ─── Theme Tokens (mirrors Home.jsx) ─────────────────────────────── */
const themes = {
  dark: {
    bg: "#0d0f1a",
    bgGlow1: "rgba(59,130,246,0.10)",
    bgGlow2: "rgba(139,92,246,0.08)",
    nav: "rgba(255,255,255,0.03)",
    navBorder: "rgba(255,255,255,0.07)",
    card: "rgba(255,255,255,0.04)",
    cardBorder: "rgba(255,255,255,0.08)",
    cardHover: "rgba(255,255,255,0.07)",
    text: "#f1f5f9",
    textSub: "#94a3b8",
    textMuted: "#475569",
    accent: "#3b82f6",
    accentEnd: "#6366f1",
    accentGlow: "rgba(59,130,246,0.35)",
    optionBg: "rgba(255,255,255,0.04)",
    optionBorder: "rgba(255,255,255,0.09)",
    optionHover: "rgba(59,130,246,0.08)",
    optionSelected: "rgba(59,130,246,0.14)",
    optionSelectedBorder: "rgba(59,130,246,0.5)",
    sidebarBg: "rgba(255,255,255,0.03)",
    sidebarBorder: "rgba(255,255,255,0.07)",
    boxBg: "rgba(255,255,255,0.05)",
    boxBorder: "rgba(255,255,255,0.08)",
    answeredBg: "rgba(52,211,153,0.15)",
    answeredBorder: "rgba(52,211,153,0.4)",
    answeredText: "#34d399",
    currentBg: "rgba(59,130,246,0.18)",
    currentBorder: "rgba(59,130,246,0.5)",
    timerSafe: "#34d399",
    timerWarn: "#f59e0b",
    timerDanger: "#ef4444",
    codeBg: "rgba(0,0,0,0.35)",
    codeBorder: "rgba(255,255,255,0.08)",
    toggleBg: "rgba(255,255,255,0.08)",
    toggleThumb: "linear-gradient(135deg,#3b82f6,#6366f1)",
    logoGrad: "linear-gradient(90deg,#60a5fa,#a78bfa)",
    shadow: "0 24px 60px rgba(0,0,0,0.45)",
  },
  light: {
    bg: "#f0f4ff",
    bgGlow1: "rgba(59,130,246,0.06)",
    bgGlow2: "rgba(139,92,246,0.05)",
    nav: "rgba(255,255,255,0.85)",
    navBorder: "rgba(0,0,0,0.07)",
    card: "#ffffff",
    cardBorder: "rgba(0,0,0,0.07)",
    cardHover: "#f8faff",
    text: "#0f172a",
    textSub: "#475569",
    textMuted: "#94a3b8",
    accent: "#3b82f6",
    accentEnd: "#6366f1",
    accentGlow: "rgba(59,130,246,0.25)",
    optionBg: "#f8faff",
    optionBorder: "rgba(0,0,0,0.08)",
    optionHover: "rgba(59,130,246,0.05)",
    optionSelected: "rgba(59,130,246,0.1)",
    optionSelectedBorder: "rgba(59,130,246,0.45)",
    sidebarBg: "#ffffff",
    sidebarBorder: "rgba(0,0,0,0.07)",
    boxBg: "#f1f5f9",
    boxBorder: "rgba(0,0,0,0.06)",
    answeredBg: "rgba(52,211,153,0.12)",
    answeredBorder: "rgba(52,211,153,0.45)",
    answeredText: "#059669",
    currentBg: "rgba(59,130,246,0.12)",
    currentBorder: "rgba(59,130,246,0.45)",
    timerSafe: "#059669",
    timerWarn: "#d97706",
    timerDanger: "#dc2626",
    codeBg: "#1e1e2e",
    codeBorder: "rgba(0,0,0,0.12)",
    toggleBg: "rgba(0,0,0,0.07)",
    toggleThumb: "linear-gradient(135deg,#3b82f6,#6366f1)",
    logoGrad: "linear-gradient(90deg,#2563eb,#7c3aed)",
    shadow: "0 12px 40px rgba(0,0,0,0.10)",
  },
};

/* ─── Font Injection ───────────────────────────────────────────────── */
if (!document.getElementById("skilltruth-fonts")) {
  const link = document.createElement("link");
  link.id = "skilltruth-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap";
  document.head.appendChild(link);
}

function TestPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  /* ── read persisted theme ── */
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("skilltruth-theme");
    return saved ? saved === "dark" : true;
  });
  const t = isDark ? themes.light : themes.dark;

  const toggleTheme = () => {
    setIsDark((d) => {
      localStorage.setItem("skilltruth-theme", !d ? "dark" : "light");
      return !d;
    });
  };

  if (!userId) {
    alert("User not logged in");
    navigate("/");
    return null;
  }

  const { questions, subject, difficulty, totalTime } = location.state || {};
  // ✅ ADD THIS
const testKey = `test_${userId}_${subject}_${difficulty}`;
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(totalTime || 0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div style={{ ...s.noTest, background: t.bg, color: t.text }}>
        <span style={{ fontSize: 48 }}>📭</span>
        <h2 style={{ fontFamily: "Syne, sans-serif", marginTop: 16 }}>
          No test loaded
        </h2>
        <button style={s.btnPrimary(t)} onClick={() => navigate("/testsetup")}>
          Go Back
        </button>
      </div>
    );
  }


  // ✅ ADD THIS BLOCK
useEffect(() => {
  const status = localStorage.getItem(testKey);

  if (status === "completed") {
    alert("You already completed this test!");
    navigate("/result", { replace: true });
  }
}, [testKey, navigate]);
  // useEffect(() => {
  //   if (isSubmitted) navigate("/home", { replace: true });
  // }, [isSubmitted, navigate]);

  useEffect(() => {
    if (isSubmitted) return;
    if (timeLeft <= 0) { handleAutoSubmit(); return; }
    const timer = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const formatTime = () => {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const timerColor =
    timeLeft > 60 ? t.timerSafe : timeLeft > 20 ? t.timerWarn : t.timerDanger;

  const selectOption = (opt) => setAnswers({ ...answers, [current]: opt });
  const saveNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };
  const clearSelection = () => {
    const updated = { ...answers };
    delete updated[current];
    setAnswers(updated);
  };

  const submitTest = async () => {
    if (isSubmitted) return;
    setIsSubmitted(true);
    try {
      const formatted = questions.map((q, i) => ({
        q_no: q.q_no,
        selected: answers[i] || null,
      }));
      // ✅ ADD THIS
localStorage.setItem(testKey, "completed");
      const res = await axios.post("http://localhost:5000/api/test/submit", {
        userId,
        skill: subject,
        difficulty,
        answers: formatted,
      });
      navigate("/result", { state: { result: res.data }, replace: true });
    } catch (err) {
      console.error(err);
      alert("Submission failed. Please try again.");
      setIsSubmitted(false);
    }
  };

  const handleAutoSubmit = async () => {
    if (isSubmitted) return;
    alert("⏳ Time's up! Auto submitting...");
    await submitTest();
  };

  const q = questions[current];
  const answered = Object.keys(answers).length;
  const progress = (answered / questions.length) * 100;

  return (
    <div style={{ ...s.root, background: t.bg, transition: "background 0.35s ease" }}>
      {/* Ambient glows */}
      <div style={s.glow(t.bgGlow1, "20% 10%")} />
      <div style={s.glow(t.bgGlow2, "80% 80%")} />

      {/* ── Navbar ── */}
      <nav style={{ ...s.nav, background: t.nav, borderBottomColor: t.navBorder }}>
        <div style={s.logoWrap}>
          <div style={s.logoDot} />
          <span style={{ ...s.logo, background: t.logoGrad }}>SkillTruth</span>
        </div>

        <div style={s.navMeta}>
          {subject && (
            <span style={{ ...s.badge, color: t.accent, background: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)", border: `1px solid ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.2)"}` }}>
              {subject} · {difficulty}
            </span>
          )}

          {/* Timer pill */}
          <div style={{ ...s.timerPill, color: timerColor, borderColor: timerColor + "40", background: timerColor + "12" }}>
            <span style={{ fontSize: 14 }}>⏱</span>
            <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: 17, letterSpacing: "0.5px" }}>
              {formatTime()}
            </span>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} style={{ ...s.toggleWrap, background: t.toggleBg }} aria-label="Toggle theme">
            <div style={{ ...s.toggleThumb, background: t.toggleThumb, transform: isDark ? "translateX(0px)" : "translateX(26px)" }}>
              <span style={{ fontSize: 12 }}>{isDark ? "🌙" : "☀️"}</span>
            </div>
            <span style={{ ...s.toggleLabel, color: t.textMuted, opacity: isDark ? 0 : 1, left: 10 }}>☀️</span>
            <span style={{ ...s.toggleLabel, color: t.textMuted, opacity: isDark ? 1 : 0, right: 10, left: "auto" }}>🌙</span>
          </button>
        </div>
      </nav>

      {/* ── Progress bar ── */}
      <div style={{ ...s.progressTrack, background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)" }}>
        <div style={{ ...s.progressFill, width: `${progress}%`, background: `linear-gradient(90deg, ${t.accent}, ${t.accentEnd})` }} />
      </div>

      {/* ── Layout ── */}
      <div style={s.layout}>

        {/* ── Sidebar ── */}
        <aside style={{ ...s.sidebar, background: t.sidebarBg, borderColor: t.sidebarBorder, boxShadow: t.shadow }}>
          <div style={{ ...s.sidebarHead, borderBottomColor: t.navBorder }}>
            <p style={{ ...s.sideLabel, color: t.textMuted }}>Questions</p>
            <p style={{ ...s.sideCount, color: t.textSub }}>
              <span style={{ color: t.answeredText, fontWeight: 700 }}>{answered}</span>/{questions.length}
            </p>
          </div>

          <div style={s.boxGrid}>
            {questions.map((_, i) => {
              const isAnswered = !!answers[i];
              const isCurrent = i === current;
              const isHovered = hoveredBox === i;
              return (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  onMouseEnter={() => setHoveredBox(i)}
                  onMouseLeave={() => setHoveredBox(null)}
                  style={{
                    ...s.box,
                    background: isCurrent
                      ? t.currentBg
                      : isAnswered
                      ? t.answeredBg
                      : isHovered
                      ? t.optionHover
                      : t.boxBg,
                    borderColor: isCurrent
                      ? t.currentBorder
                      : isAnswered
                      ? t.answeredBorder
                      : t.boxBorder,
                    color: isCurrent
                      ? t.accent
                      : isAnswered
                      ? t.answeredText
                      : t.textSub,
                    transform: isHovered && !isCurrent ? "scale(1.08)" : "scale(1)",
                    fontWeight: isCurrent || isAnswered ? 700 : 400,
                    boxShadow: isCurrent ? `0 0 0 2px ${t.accent}55` : "none",
                  }}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div style={{ ...s.legend, borderTopColor: t.navBorder }}>
            {[
              { color: t.answeredText, bg: t.answeredBg, label: "Answered" },
              { color: t.accent, bg: t.currentBg, label: "Current" },
              { color: t.textMuted, bg: t.boxBg, label: "Unanswered" },
            ].map((item) => (
              <div key={item.label} style={s.legendItem}>
                <span style={{ ...s.legendDot, background: item.color }} />
                <span style={{ color: t.textMuted, fontSize: 12 }}>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Submit button in sidebar */}
          <button
            onClick={() => setConfirmSubmit(true)}
            disabled={isSubmitted}
            style={{ ...s.submitSidebar, background: `linear-gradient(135deg, ${t.accent}, ${t.accentEnd})`, boxShadow: `0 4px 18px ${t.accentGlow}` }}
          >
            Submit Test
          </button>
        </aside>

        {/* ── Question Panel ── */}
        <main style={{ ...s.main }}>
          <div style={{ ...s.questionCard, background: t.card, borderColor: t.cardBorder, boxShadow: t.shadow }}>

            {/* Card header */}
            <div style={{ ...s.cardHeader, borderBottomColor: t.navBorder }}>
              <div>
                <span style={{ ...s.qBadge, color: t.accent, background: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.07)", border: `1px solid ${t.optionSelectedBorder}` }}>
                  Q {current + 1} of {questions.length}
                </span>
                {q.question_type && (
                  <span style={{ ...s.typeBadge, color: t.textMuted, background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}>
                    {q.question_type.replace(/_/g, " ")}
                  </span>
                )}
              </div>
              <span style={{ color: t.textMuted, fontSize: 13 }}>
                {answers[current] ? "✅ Answered" : "○ Not answered"}
              </span>
            </div>

            {/* Question text */}
            <p style={{ ...s.questionText, color: t.text }}>{q.question}</p>

            {/* Code snippet */}
            {q.question_type?.toLowerCase() === "code_output" && q.code_snippet && (
              <pre style={{ ...s.codeBlock, background: t.codeBg, borderColor: t.codeBorder }}>
                <code style={{ color: "#e2e8f0", fontSize: 14, fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
                  {q.code_snippet.replace(/\\n/g, "\n")}
                </code>
              </pre>
            )}

            {/* Options */}
            <div style={s.optionsWrap}>
              {[1, 2, 3, 4].map((opt) => {
                const isSelected = answers[current] === opt;
                const isHov = hoveredOption === opt;
                return (
                  <label
                    key={opt}
                    onMouseEnter={() => setHoveredOption(opt)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      ...s.option,
                      background: isSelected
                        ? t.optionSelected
                        : isHov
                        ? t.optionHover
                        : t.optionBg,
                      borderColor: isSelected
                        ? t.optionSelectedBorder
                        : isHov
                        ? t.accent + "40"
                        : t.optionBorder,
                      color: isSelected ? t.text : t.textSub,
                      transform: isHov && !isSelected ? "translateX(4px)" : "translateX(0)",
                      cursor: isSubmitted ? "not-allowed" : "pointer",
                      opacity: isSubmitted ? 0.7 : 1,
                    }}
                  >
                    {/* Custom radio */}
                    <span style={{
                      ...s.radioOuter,
                      borderColor: isSelected ? t.accent : t.optionBorder,
                      background: isSelected ? t.accent : "transparent",
                    }}>
                      {isSelected && <span style={s.radioInner} />}
                    </span>

                    <input
                      type="radio"
                      name="option"
                      checked={isSelected}
                      onChange={() => selectOption(opt)}
                      disabled={isSubmitted}
                      style={{ display: "none" }}
                    />
                    <span style={{ fontSize: 14, lineHeight: 1.6 }}>{q["option" + opt]}</span>
                  </label>
                );
              })}
            </div>

            {/* Action buttons */}
            <div style={s.btnRow}>
              <button
                onClick={clearSelection}
                disabled={isSubmitted || !answers[current]}
                style={{
                  ...s.btnGhost,
                  borderColor: t.optionBorder,
                  color: t.textSub,
                  opacity: !answers[current] || isSubmitted ? 0.4 : 1,
                  cursor: !answers[current] || isSubmitted ? "not-allowed" : "pointer",
                }}
              >
                ✕ Clear
              </button>

              <div style={{ display: "flex", gap: 10 }}>
                {current > 0 && (
                  <button
                    onClick={() => setCurrent(current - 1)}
                    style={{ ...s.btnGhost, borderColor: t.optionBorder, color: t.textSub }}
                  >
                    ← Prev
                  </button>
                )}
                {current < questions.length - 1 ? (
                  <button onClick={saveNext} style={{ ...s.btnPrimary(t) }}>
                    Save & Next →
                  </button>
                ) : (
                  <button
                    onClick={() => setConfirmSubmit(true)}
                    disabled={isSubmitted}
                    style={{ ...s.btnPrimary(t), background: "linear-gradient(135deg,#10b981,#059669)" }}
                  >
                    Submit Test ✓
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* ── Confirm Modal ── */}
      {confirmSubmit && (
        <div style={s.modalOverlay}>
          <div style={{ ...s.modal, background: t.card, borderColor: t.cardBorder, boxShadow: t.shadow }}>
            <div style={{ fontSize: 42, marginBottom: 12 }}>🚀</div>
            <h3 style={{ fontFamily: "Syne, sans-serif", color: t.text, fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
              Submit Test?
            </h3>
            <p style={{ color: t.textSub, fontSize: 15, marginBottom: 6, lineHeight: 1.6 }}>
              You've answered <strong style={{ color: t.answeredText }}>{answered}</strong> out of{" "}
              <strong style={{ color: t.text }}>{questions.length}</strong> questions.
            </p>
            {answered < questions.length && (
              <p style={{ color: t.timerWarn, fontSize: 13, marginBottom: 20 }}>
                ⚠️ {questions.length - answered} question(s) unanswered.
              </p>
            )}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button
                onClick={() => setConfirmSubmit(false)}
                style={{ ...s.btnGhost, borderColor: t.optionBorder, color: t.textSub, flex: 1, padding: "12px 0" }}
              >
                Cancel
              </button>
              <button
                onClick={() => { setConfirmSubmit(false); submitTest(); }}
                style={{ ...s.btnPrimary(t), flex: 1, padding: "12px 0" }}
              >
                Yes, Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Styles Object ──────────────────────────────────────────────────── */
const s = {
  root: {
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
    position: "relative",
    overflow: "hidden",
    transition: "background 0.35s ease",
  },
  glow: (color, pos) => ({
    position: "fixed",
    width: 500,
    height: 500,
    borderRadius: "50%",
    background: `radial-gradient(circle, ${color}, transparent 70%)`,
    top: pos.split(" ")[1],
    left: pos.split(" ")[0],
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 0,
  }),
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 40px",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid",
    position: "sticky",
    top: 0,
    zIndex: 100,
    transition: "background 0.35s, border-color 0.35s",
  },
  logoWrap: { display: "flex", alignItems: "center", gap: 10 },
  logoDot: {
    width: 9, height: 9, borderRadius: "50%",
    background: "linear-gradient(135deg,#3b82f6,#8b5cf6)",
    boxShadow: "0 0 8px rgba(59,130,246,0.6)",
  },
  logo: {
    fontFamily: "Syne, sans-serif",
    fontSize: 20,
    fontWeight: 800,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "-0.5px",
  },
  navMeta: { display: "flex", alignItems: "center", gap: 14 },
  badge: {
    fontSize: 12, fontWeight: 600, letterSpacing: "0.6px",
    padding: "5px 12px", borderRadius: 100,
    textTransform: "capitalize",
  },
  timerPill: {
    display: "flex", alignItems: "center", gap: 7,
    padding: "7px 16px", borderRadius: 100,
    border: "1px solid",
    transition: "color 0.5s, border-color 0.5s, background 0.5s",
  },
  toggleWrap: {
    position: "relative", width: 60, height: 30,
    borderRadius: 100, border: "none", cursor: "pointer",
    padding: 0, overflow: "visible",
    transition: "background 0.3s",
  },
  toggleThumb: {
    position: "absolute", top: 3, left: 3,
    width: 24, height: 24, borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
  },
  toggleLabel: {
    position: "absolute", top: "50%",
    transform: "translateY(-50%)",
    fontSize: 11, transition: "opacity 0.25s",
  },
  progressTrack: {
    height: 3, width: "100%",
    transition: "background 0.35s",
  },
  progressFill: {
    height: "100%", borderRadius: "0 2px 2px 0",
    transition: "width 0.5s ease, background 0.35s",
  },
  layout: {
    display: "flex",
    gap: 24,
    padding: "28px 32px",
    maxWidth: 1300,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  sidebar: {
    width: 220,
    flexShrink: 0,
    borderRadius: 20,
    border: "1px solid",
    backdropFilter: "blur(12px)",
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    alignSelf: "flex-start",
    position: "sticky",
    top: 76,
    transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
  },
  sidebarHead: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    marginBottom: 16, paddingBottom: 14, borderBottom: "1px solid",
  },
  sideLabel: { fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" },
  sideCount: { fontSize: 13, fontWeight: 500 },
  boxGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 7,
    marginBottom: 18,
  },
  box: {
    width: "100%", aspectRatio: "1",
    display: "flex", alignItems: "center", justifyContent: "center",
    borderRadius: 10, border: "1px solid",
    fontSize: 13, cursor: "pointer",
    transition: "all 0.2s ease",
    userSelect: "none",
  },
  legend: {
    borderTop: "1px solid",
    paddingTop: 14,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBottom: 18,
  },
  legendItem: { display: "flex", alignItems: "center", gap: 8 },
  legendDot: { width: 8, height: 8, borderRadius: "50%", flexShrink: 0 },
  submitSidebar: {
    border: "none", borderRadius: 12, padding: "12px 0",
    color: "#fff", fontFamily: "Syne, sans-serif",
    fontWeight: 700, fontSize: 14, cursor: "pointer",
    transition: "all 0.25s ease",
    width: "100%",
  },
  main: { flex: 1, minWidth: 0 },
  questionCard: {
    borderRadius: 22,
    border: "1px solid",
    backdropFilter: "blur(12px)",
    padding: "32px 36px",
    transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
    animation: "fadeUp 0.4s ease both",
  },
  cardHeader: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    paddingBottom: 18, marginBottom: 22, borderBottom: "1px solid",
    flexWrap: "wrap", gap: 10,
  },
  qBadge: {
    fontSize: 12, fontWeight: 700, letterSpacing: 0.8,
    padding: "5px 14px", borderRadius: 100, marginRight: 8,
  },
  typeBadge: {
    fontSize: 12, fontWeight: 500, letterSpacing: 0.4,
    padding: "5px 12px", borderRadius: 100, textTransform: "capitalize",
  },
  questionText: {
    fontSize: 18, lineHeight: 1.75, fontWeight: 500,
    marginBottom: 24, letterSpacing: "-0.2px",
  },
  codeBlock: {
    borderRadius: 14, padding: "20px 24px",
    border: "1px solid", overflowX: "auto",
    marginBottom: 24, transition: "background 0.35s, border-color 0.35s",
  },
  optionsWrap: { display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 },
  option: {
    display: "flex", alignItems: "center", gap: 14,
    padding: "16px 20px", borderRadius: 14, border: "1px solid",
    transition: "all 0.2s ease", userSelect: "none",
  },
  radioOuter: {
    width: 20, height: 20, borderRadius: "50%",
    border: "2px solid", flexShrink: 0,
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.2s ease",
  },
  radioInner: {
    width: 8, height: 8, borderRadius: "50%",
    background: "#fff",
  },
  btnRow: {
    display: "flex", justifyContent: "space-between",
    alignItems: "center", flexWrap: "wrap", gap: 10,
  },
  btnPrimary: (t) => ({
    padding: "11px 26px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 15, fontWeight: 600,
    background: `linear-gradient(135deg, ${t.accent}, ${t.accentEnd})`,
    color: "#fff", border: "none", borderRadius: 12,
    cursor: "pointer", transition: "all 0.25s ease",
    boxShadow: `0 4px 18px ${t.accentGlow}`,
  }),
  btnGhost: {
    padding: "11px 22px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: 14, fontWeight: 500,
    background: "transparent",
    border: "1px solid", borderRadius: 12,
    cursor: "pointer", transition: "all 0.2s ease",
  },
  modalOverlay: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(10px)",
    display: "flex", alignItems: "center", justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    width: 380, borderRadius: 24, padding: "40px 36px",
    border: "1px solid", textAlign: "center",
    animation: "fadeUp 0.3s ease both",
  },
  noTest: {
    minHeight: "100vh", display: "flex",
    flexDirection: "column", alignItems: "center", justifyContent: "center",
    gap: 16, fontFamily: "DM Sans, sans-serif",
  },
};

/* ─── Keyframes (injected once) ──────────────────────────────────────── */
if (!document.getElementById("skilltruth-anim")) {
  const style = document.createElement("style");
  style.id = "skilltruth-anim";
  style.textContent = `
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

export default TestPage;