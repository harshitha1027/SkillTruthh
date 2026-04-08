// // import { useLocation } from "react-router-dom";
// // import "../styles/WrongAnswers.css";
// // function WrongAnswers() {

// //  const { state } = useLocation();
// //  const { wrongQuestions } = state || {};

// //  if (!wrongQuestions || wrongQuestions.length === 0) {
// //    return <h2>No wrong answers 🎉</h2>;
// //  }

// //  return (

// //   <div className="review-container">

// //    {wrongQuestions.map((q, index) => (

// //     <div key={q.q_no} className="review-question">

// //       <h3>Question {index + 1}</h3>

// //       <p>{q.question}</p>

// //       {q.code_snippet && (
// //         <pre className="code-block">
// //          <code>{q.code_snippet}</code>
// //         </pre>
// //       )}

// //       <p>A. {q.option1}</p>
// //       <p>B. {q.option2}</p>
// //       <p>C. {q.option3}</p>
// //       <p>D. {q.option4}</p>

// //       <p><b>Your Answer:</b> {q.selected_option}</p>

// //       <p><b>Correct Answer:</b> {q.correct_option}</p>

// //       <p><b>Explanation:</b> {q.explanation}</p>

// //     </div>

// //    ))}

// //   </div>

// //  );

// // }

// // export default WrongAnswers;
// import { useLocation } from "react-router-dom";
// import "../styles/WrongAnswers.css";

// function WrongAnswers() {

//   const { state } = useLocation();
//   const { wrongQuestions } = state || {};

//   if (!wrongQuestions || wrongQuestions.length === 0) {
//     return <h2 className="no-wrong">No wrong answers 🎉</h2>;
//   }

//   const optionLetter = ["A","B","C","D"];

//   return (

//     <div className="review-container">

//       {wrongQuestions.map((q, index) => (

//         <div key={q.q_no} className="review-question">

//           <h3>Question {index + 1}</h3>

//           <p className="question-text">{q.question}</p>

//           {q.code_snippet && (
//             <pre className="code-block">
//               <code>{q.code_snippet.replace(/\\n/g,"\n")}</code>
//             </pre>
//           )}

//           <div className="options">

//             {[1,2,3,4].map((opt,i)=>{

//               let className="option";

//               if(opt===q.correct_option){
//                 className+=" correct";
//               }

//               if(opt===q.selected_option && opt!==q.correct_option){
//                 className+=" wrong";
//               }

//               return(

//                 <div key={opt} className={className}>
//                   <span className="option-letter">{optionLetter[i]}</span>
//                   <span>{q["option"+opt]}</span>
//                 </div>

//               )

//             })}

//           </div>

//           <div className="explanation">
//             <b>Explanation</b>
//             <p>{q.explanation}</p>
//           </div>

//         </div>

//       ))}

//     </div>

//   );

// }

// export default WrongAnswers;

import { useLocation } from "react-router-dom";
import { useState } from "react";

function WrongAnswers() {

  const { state } = useLocation();
  const { wrongQuestions } = state || {};

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
      codeBg: "#f3f4f6"
    },
    dark: {
      bg: "#111",
      text: "#fff",
      card: "#1e1e1e",
      cardBorder: "#333",
      textMuted: "#aaa",
      codeBg: "#1a1a1a"
    }
  };

  const t = dark ? themes.dark : themes.light;

  if (!wrongQuestions || wrongQuestions.length === 0) {
    return (
      <>
        <style>{getStyles(t, dark)}</style>
        <div className="no-wrong-container">
          <h2>🎉 No wrong answers — Great job!</h2>
        </div>
      </>
    );
  }

  const optionLetter = ["A","B","C","D"];

  return (
    <>
      <style>{getStyles(t, dark)}</style>

      <div className="review-container">

        {/* 🌙 Toggle */}
        <div className="review-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className="review-title">
          Review <span className="gradient">Wrong Answers</span>
        </h1>

        {wrongQuestions.map((q, index) => (

          <div key={q.q_no} className="review-card">

            <h3>Question {index + 1}</h3>

            <p className="question-text">{q.question}</p>

            {q.code_snippet && (
              <pre className="code-block">
                <code>{q.code_snippet.replace(/\\n/g,"\n")}</code>
              </pre>
            )}

            <div className="options">
              {[1,2,3,4].map((opt,i)=>{

                let className="option";

                if(opt===q.correct_option){
                  className+=" correct";
                }

                if(opt===q.selected_option && opt!==q.correct_option){
                  className+=" wrong";
                }

                return(
                  <div key={opt} className={className}>
                    <span className="option-letter">{optionLetter[i]}</span>
                    <span>{q["option"+opt]}</span>
                  </div>
                )
              })}
            </div>

            <div className="explanation">
              <b>Explanation</b>
              <p>{q.explanation}</p>
            </div>

          </div>

        ))}

      </div>
    </>
  );
}

export default WrongAnswers;


// 🎨 STYLES (MATCHING YOUR APP UI)
function getStyles(t, dark) {
  return `
.review-container {
  min-height: 100vh;
  padding: 40px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
}

.review-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.review-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: #fff;
}

.review-title {
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 30px;
}

.gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.review-card {
  max-width: 800px;
  margin: 0 auto 30px auto;
  background: ${t.card};
  border: 1px solid ${t.cardBorder};
  border-radius: 20px;
  padding: 20px;
  box-shadow: ${dark ? "none" : "0 4px 20px rgba(0,0,0,0.05)"};
}

.question-text {
  margin: 10px 0;
}

.code-block {
  background: ${t.codeBg};
  padding: 10px;
  border-radius: 10px;
  overflow-x: auto;
}

.options {
  margin-top: 10px;
}

.option {
  padding: 10px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  gap: 10px;
}

.option.correct {
  background: #d1fae5;
  border-color: #10b981;
}

.option.wrong {
  background: #fee2e2;
  border-color: #ef4444;
}

.option-letter {
  font-weight: bold;
}

.explanation {
  margin-top: 10px;
  background: rgba(99,102,241,0.1);
  padding: 10px;
  border-radius: 10px;
}

.no-wrong-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
}
`;
}