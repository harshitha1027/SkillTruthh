// // import { useLocation, useNavigate } from "react-router-dom";
// // import "../styles/ResultPage.css";

// // function ResultPage() {

// //   const location = useLocation();
// //   const navigate = useNavigate();

// //   const { result } = location.state || {};

// //   if (!result) {
// //     return <h2>No result found</h2>;
// //   }

// //   const percentage = ((result.score / result.total) * 100).toFixed(2);

// //   return (

// //     <div className="result-container">

// //       <h1>Test Result</h1>

// //       <div className="result-card">

// //         <h2>Score: {result.score} / {result.total}</h2>

// //         <p>Correct Answers: {result.correct}</p>

// //         <p>Wrong Answers: {result.wrong}</p>

// //         <p>Percentage: {percentage}%</p>

// //         <button
// //           onClick={() =>
// //           navigate("/wrong-answers", {
// //             state: { wrongQuestions: result.wrongQuestions }
// //           })
// //         }
// //         >
// //         View Your Wrong Answers
// //         </button>

// //       </div>

// //     </div>

// //   );

// // }

// // export default ResultPage;
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/ResultPage.css";

// function ResultPage() {

//   const location = useLocation();
//   const navigate = useNavigate();

//   const { result } = location.state || {};

//   if (!result) {
//     return <h2>No result found</h2>;
//   }

//   const percentage = ((result.score / result.total) * 100).toFixed(2);

//   return (

//     <div className="result-container">

//       <h1>Test Result</h1>

//       {/* Progress bar value passed here */}
//       <div
//         className="result-card"
//         style={{ "--progress": `${percentage}%` }}
//       >

//         <h2>
//           Score: {result.score} / {result.total}
//         </h2>

//         <p>Correct Answers: {result.correct}</p>

//         <p>Wrong Answers: {result.wrong}</p>

//         <p>Percentage: {percentage}%</p>

//         <div className="button-group">
//   <button
//     onClick={() =>
//       navigate("/wrong-answers", {
//         state: { wrongQuestions: result.wrongQuestions }
//       })
//     }
//   >
//     View Your Wrong Answers
//   </button>

//   <button
//     onClick={() =>
//       navigate("/dashboard", {
//         state: { wrongQuestions: result.wrongQuestions }
//       })
//     }
//   >
//     Dashboard
//   </button>

//   <button
//     onClick={() =>
//       navigate("/home", {
//         state: { wrongQuestions: result.wrongQuestions }
//       })
//     }
//   >
//     Home
//   </button>
// </div>

//       </div>

//     </div>

//   );

// }

// export default ResultPage;
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function ResultPage() {

  const location = useLocation();
  const navigate = useNavigate();

  const { result } = location.state || {};

  // 🌙 Theme
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  const themes = {
    light: {
      bg: "#ffffff",
      text: "#000",
      card: "#fff",
      cardBorder: "#ddd",
      textMuted: "#666",
      textStrong: "#111"
    },
    dark: {
      bg: "#111",
      text: "#fff",
      card: "#1e1e1e",
      cardBorder: "#333",
      textMuted: "#aaa",
      textStrong: "#fff"
    }
  };

  const t = dark ? themes.dark : themes.light;

  if (!result) {
    return <h2 style={{ textAlign: "center" }}>No result found</h2>;
  }

  const percentage = ((result.score / result.total) * 100).toFixed(2);

  return (
    <>
      <style>{getResultStyles(t, dark)}</style>

      <div className="result-container">

        {/* 🌙 Toggle */}
        <div className="result-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="result-card" style={{ "--progress": `${percentage}%` }}>

          <span className="result-badge">Your Performance</span>

          <h1 className="result-title">
            Test <span className="result-gradient">Result</span>
          </h1>

          <p className="result-sub">
            Here’s how you performed in the test.
          </p>

          {/* 🎯 Circular Progress */}
          <div className="progress-circle">
            <span>{percentage}%</span>
          </div>

          <h2>
            Score: {result.score} / {result.total}
          </h2>

          <p>✅ Correct Answers: {result.correct}</p>
          <p>❌ Wrong Answers: {result.wrong}</p>

          <div className="button-group">

            <button
              onClick={() =>
                navigate("/wrong-answers", {
                  state: { wrongQuestions: result.wrongQuestions }
                })
              }
            >
              View Wrong Answers
            </button>

            <button onClick={() => navigate("/dashboard")}>
              Dashboard
            </button>

            <button onClick={() => navigate("/home")}>
              Home
            </button>

          </div>

        </div>
      </div>
    </>
  );
}

export default ResultPage;


// 🎨 SAME UI STYLE
function getResultStyles(t, dark) {
  return `
.result-container {
  min-height: 100vh;
  padding: 60px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-toggle {
  align-self: flex-end;
  margin-bottom: 20px;
}

.result-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: #fff;
  font-size: 13px;
}

.result-card {
  width: 100%;
  max-width: 480px;
  background: ${t.card};
  border: 1px solid ${t.cardBorder};
  border-radius: 24px;
  padding: 40px 30px;
  backdrop-filter: blur(14px);
  animation: fadeUp 0.6s ease both;
  box-shadow: ${dark ? "none" : "0 4px 24px rgba(0,0,0,0.06)"};
  text-align: center;
}

.result-badge {
  font-size: 11px;
  padding: 6px 14px;
  display: inline-block;
  font-weight: 700;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  background: rgba(99,102,241,0.18);
  border: 1px solid rgba(99,102,241,0.25);
  color: #818cf8;
  margin-bottom: 14px;
}

.result-title {
  font-family: 'Syne';
  font-size: 26px;
  font-weight: 800;
}

.result-gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.result-sub {
  color: ${t.textMuted};
  margin-bottom: 20px;
}

/* 🎯 Circular Progress */
.progress-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 20px auto;
  background: conic-gradient(#6366f1 var(--progress), #e5e7eb 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.progress-circle span {
  background: ${t.card};
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-group {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button-group button {
  padding: 12px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: white;
  font-weight: 600;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
}