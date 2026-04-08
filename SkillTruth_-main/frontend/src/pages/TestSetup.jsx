// // import { useState } from "react";
// // import "../styles/TestSetup.css";

// // function TestSetup() {

// //   const [form, setForm] = useState({
// //     subject: "",
// //     difficulty: "",
// //     questions: 25
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const startTest = () => {

// //     if (!form.subject || !form.difficulty) {
// //       alert("Please select subject and difficulty");
// //       return;
// //     }

// //     if (form.questions < 25 || form.questions > 45) {
// //       alert("Number of questions must be between 25 and 45");
// //       return;
// //     }

// //     alert("Test Starting...");
// //   };

// //   return (
// //     <div className="testsetup-page">

// //       <div className="testsetup-card">

// //         <h2>Create Test</h2>

// //         <div className="input-group">
// //           <label>Subject</label>

// //           <select name="subject" value={form.subject} onChange={handleChange}>

// //             <option value="">Select Subject</option>

// //             <option value="Objected Oriented Programming">
// //               Objected Oriented Programming
// //             </option>

// //             <option value="Operating Systems">
// //               Operating Systems
// //             </option>

// //             <option value="Computer Networks">
// //               Computer Networks
// //             </option>

// //             <option value="DBMS">
// //               DBMS
// //             </option>

// //             <option value="Html">
// //               Html
// //             </option>

// //             <option value="Programming">
// //               Programming
// //             </option>

// //             <option value="CSS">
// //               CSS
// //             </option>

// //             <option value="JavaScript">
// //               JavaScript
// //             </option>

// //             <option value="System Design">
// //               System Design
// //             </option>

// //           </select>

// //         </div>

// //         <div className="input-group">

// //           <label>Difficulty</label>

// //           <select name="difficulty" value={form.difficulty} onChange={handleChange}>

// //             <option value="">Select Difficulty</option>

// //             <option value="easy">Easy</option>
// //             <option value="medium">Medium</option>
// //             <option value="hard">Hard</option>

// //           </select>

// //         </div>

// //         <div className="input-group">

// //           <label>Number of Questions (25 - 45)</label>

// //           <input
// //             type="number"
// //             name="questions"
// //             min="25"
// //             max="45"
// //             value={form.questions}
// //             onChange={handleChange}
// //           />

// //         </div>

// //         <button className="start-btn" onClick={startTest}>
// //           Start Test
// //         </button>

// //       </div>

// //     </div>
// //   );
// // }

// // export default TestSetup;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/TestSetup.css";

// function TestSetup() {

//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");

//   if (!userId) {
//   alert("User not logged in");
//   navigate("/");
//   }
//   const [form, setForm] = useState({
//     subject: "",
//     difficulty: "",
//     questions: 25
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   // ✅ TIMER LOGIC
//   const getTimePerQuestion = (difficulty) => {
//     if (difficulty === "Easy") return 45;
//     if (difficulty === "Medium") return 60;
//     if (difficulty === "Hard") return 90;
//     return 60;
//   };
//   const startTest = async () => {

//     if (!form.subject || !form.difficulty) {
//       alert("Please select subject and difficulty");
//       return;
//     }

//     if (form.questions < 25 || form.questions > 45) {
//       alert("Number of questions must be between 25 and 45");
//       return;
//     }

//     try {

//       const response = await axios.post(
//         "http://localhost:5000/api/test/start",
//         {
//           subject: form.subject,
//           difficulty: form.difficulty,
//           numQuestions: form.questions
//         }
//       );

//       const questions = response.data;

//        // ✅ CALCULATE TIME
//       const timePerQuestion = getTimePerQuestion(form.difficulty);
//       const totalTime = form.questions * timePerQuestion;

//       navigate("/test", {
//         state: {
//           questions,
//           subject: form.subject,
//           difficulty: form.difficulty,
//           totalQuestions: form.questions,
//           totalTime   // 🔥 important
//         }
//       });

//     } catch (error) {

//       console.error(error);
//       alert("Error starting test");

//     }

//   };

//   return (
//     <div className="testsetup-page">

//       <div className="testsetup-card">

//         <h2>Create Test</h2>

//         <div className="input-group">

//           <label>Subject</label>

//           <select name="subject" value={form.subject} onChange={handleChange}>

//             <option value="">Select Subject</option>

//             <option value="Objected Oriented Programming">
//               Objected Oriented Programming
//             </option>

//             <option value="Operating Systems">
//               Operating Systems
//             </option>

//             <option value="Computer Networks">
//               Computer Networks
//             </option>

//             <option value="DBMS">
//               DBMS
//             </option>

//             <option value="Html">
//               Html
//             </option>

//             <option value="Programming">
//               Programming
//             </option>

//             <option value="CSS">
//               CSS
//             </option>

//             <option value="JavaScript">
//               JavaScript
//             </option>

//             <option value="System Design">
//               System Design
//             </option>

//           </select>

//         </div>

//         <div className="input-group">

//           <label>Difficulty</label>

//           <select name="difficulty" value={form.difficulty} onChange={handleChange}>

//             <option value="">Select Difficulty</option>

//             <option value="Easy">Easy</option>
//             <option value="Medium">Medium</option>
//             <option value="Hard">Hard</option>

//           </select>

//         </div>

//         <div className="input-group">

//           <label>Number of Questions (25 - 45)</label>

//           <input
//             type="number"
//             name="questions"
//             min="25"
//             max="45"
//             value={form.questions}
//             onChange={handleChange}
//           />

//         </div>

//         <button className="start-btn" onClick={startTest}>
//           Start Test
//         </button>

//       </div>

//     </div>
//   );
// }

// export default TestSetup;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function TestSetup() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  // ✅ Auth check
  useEffect(() => {
    if (!userId) {
      alert("User not logged in");
      navigate("/");
    }
  }, [userId, navigate]);

  // ✅ Theme state
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  // ✅ Themes
  const themes = {
    light: {
      bg: "#ffffff",
      text: "#000",
      card: "#fff",
      cardBorder: "#ddd",
      textMuted: "#666",
      textStrong: "#111",
      tabBorder: "#ccc",
      tabBg: "#f9f9f9",
      tabHoverBorder: "#999"
    },
    dark: {
      bg: "#111",
      text: "#fff",
      card: "#1e1e1e",
      cardBorder: "#333",
      textMuted: "#aaa",
      textStrong: "#fff",
      tabBorder: "#444",
      tabBg: "#222",
      tabHoverBorder: "#666"
    }
  };

  const t = dark ? themes.dark : themes.light;

  const [form, setForm] = useState({
    subject: "",
    difficulty: "",
    questions: 25
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const getTimePerQuestion = (difficulty) => {
    if (difficulty === "Easy") return 45;
    if (difficulty === "Medium") return 60;
    if (difficulty === "Hard") return 90;
    return 60;
  };

  const startTest = async () => {
    if (!form.subject || !form.difficulty) {
      alert("Please select subject and difficulty");
      return;
    }

    if (form.questions < 25 || form.questions > 45) {
      alert("Number of questions must be between 25 and 45");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/test/start",
        {
          subject: form.subject,
          difficulty: form.difficulty,
          numQuestions: form.questions
        }
      );

      const questions = response.data;
      const timePerQuestion = getTimePerQuestion(form.difficulty);
      const totalTime = timePerQuestion * form.questions;

      navigate("/test", {
        state: {
          questions,
          subject: form.subject,
          difficulty: form.difficulty,
          totalQuestions: form.questions,
          totalTime
        }
      });
    } catch (err) {
      console.error(err);
      alert("Error starting test");
    }
  };

  return (
    <>
      <style>{getTestSetupStyles(t, dark)}</style>

      <div className="ts-container">
        
        {/* 🌙 Toggle Button */}
        <div className="ts-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="ts-card">
          <span className="ts-badge">Create Your Test</span>

          <h1 className="ts-title">
            Setup Your <span className="ts-gradient">Assessment</span>
          </h1>

          <p className="ts-sub">
            Choose your subject, difficulty, and question count.
          </p>

          <div className="ts-input-group">
            <label>Subject</label>
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
            >
              <option value="">Select Subject</option>
              <option value="Objected Oriented Programming">
                Objected Oriented Programming
              </option>
              <option value="Operating Systems">Operating Systems</option>
              <option value="Computer Networks">Computer Networks</option>
              <option value="DBMS">DBMS</option>
              <option value="Html">HTML</option>
              <option value="Programming">Programming</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="System Design">System Design</option>
            </select>
          </div>

          <div className="ts-input-group">
            <label>Difficulty</label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div className="ts-input-group">
            <label>Number of Questions (25 - 45)</label>
            <input
              type="number"
              name="questions"
              min="25"
              max="45"
              value={form.questions}
              onChange={handleChange}
            />
          </div>

          <button className="ts-start-btn" onClick={startTest}>
            Start Test →
          </button>
        </div>
      </div>
    </>
  );
}

export default TestSetup;

// ✅ Styles
function getTestSetupStyles(t, dark) {
  return `
.ts-container {
  min-height: 100vh;
  padding: 60px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ts-toggle {
  align-self: flex-end;
  margin-bottom: 20px;
}

.ts-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: #fff;
  font-size: 13px;
}

.ts-card {
  width: 100%;
  max-width: 480px;
  background: ${t.card};
  border: 1px solid ${t.cardBorder};
  border-radius: 24px;
  padding: 46px 40px;
  backdrop-filter: blur(14px);
  animation: fadeUp 0.6s ease both;
  box-shadow: ${dark ? "none" : "0 4px 24px rgba(0,0,0,0.06)"};
}

.ts-badge {
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

.ts-title {
  font-family: 'Syne';
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 6px;
}

.ts-gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ts-sub {
  color: ${t.textMuted};
  font-size: 15px;
  margin-bottom: 28px;
}

.ts-input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
}

.ts-input-group label {
  font-weight: 600;
  margin-bottom: 8px;
  color: ${t.textStrong};
}

.ts-input-group select,
.ts-input-group input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid ${t.tabBorder};
  background: ${t.tabBg};
  color: ${t.text};
  font-size: 15px;
}

.ts-start-btn {
  margin-top: 10px;
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
}