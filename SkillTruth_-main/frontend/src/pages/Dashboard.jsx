// // import { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { Line, Bar, Pie } from "react-chartjs-2";
// // import "../styles/Dashboard.css";
// // import {
// //   Chart as ChartJS,
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   LineElement,
// //   PointElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // } from "chart.js";

// // ChartJS.register(
// //   CategoryScale,
// //   LinearScale,
// //   BarElement,
// //   LineElement,
// //   PointElement,
// //   ArcElement,
// //   Title,
// //   Tooltip,
// //   Legend
// // );
// // function Dashboard() {

// //   const [data, setData] = useState(null);
// //   const navigate = useNavigate();
// //   const userId = localStorage.getItem("userId");

// //   useEffect(() => {

    
// //   if (!userId) {
// //     navigate("/", { replace: true });
// //   }

// //     axios
// //       .get(`http://localhost:5000/api/dashboard/${userId}`)
// //       .then((res) => {
// //         setData(res.data);
// //       })
// //       .catch((err) => {
// //         console.log("Dashboard error:", err);
// //       });

// //   }, [userId, navigate]);

// //   if (!data) return <h2>Loading Dashboard...</h2>;

// //   const weakSkills = data.skillPerformance.filter((s) => s.accuracy < 60);
// //   const strongSkills = data.skillPerformance.filter((s) => s.accuracy >= 80);

// //   const sortedProgress = [...data.progress].sort(
// //   (a, b) => new Date(a.date) - new Date(b.date)
// // );

// // const progressChart = {
// //   labels: sortedProgress.map((p) => {
// //     const d = new Date(p.date);
// //     return d.toLocaleDateString("en-IN", {
// //       day: "2-digit",
// //       month: "short",
// //     }); // e.g. "17 Mar"
// //   }),
// //   datasets: [
// //     {
// //       label: "Accuracy %",
// //       data: sortedProgress.map((p) => Number(p.accuracy)),
// //       borderColor: "#3b82f6",
// //       tension: 0.4,
// //     },
// //   ],
// // };

// //   const skillChart = {
// //     labels: data.skillPerformance.map((s) => s.skill),
// //     datasets: [
// //       {
// //         label: "Skill Accuracy",
// //         data: data.skillPerformance.map((s) => s.accuracy),
// //         backgroundColor: "#8b5cf6",
// //       },
// //     ],
// //   };

// //   const difficultyChart = {
// //     labels: data.difficultyAnalysis.map((d) => d.difficulty),
// //     datasets: [
// //       {
// //         label: "Accuracy %",
// //         data: data.difficultyAnalysis.map((d) => d.accuracy),
// //         backgroundColor: "#f59e0b",
// //       },
// //     ],
// //   };

// //   const categoryData = {
// //     labels: data.categoryDistribution.map((c) => c.result_category),
// //     datasets: [
// //       {
// //         data: data.categoryDistribution.map((c) => c.count),
// //         backgroundColor: ["#22c55e", "#3b82f6", "#facc15", "#ef4444"],
// //       },
// //     ],
// //   };

// //   const last7Chart = {
// //     labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7"],
// //     datasets: [
// //       {
// //         label: "Accuracy",
// //         data: data.last7Tests.map((t) => t.accuracy),
// //         backgroundColor: "#10b981",
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="dashboard">

// //       <div className="dashboard-header">
// //   <h1>Welcome Back 👋</h1>

// //   <button
// //     className="home-btn"
// //     onClick={() => navigate("/home")}
// //   >
// //     Home
// //   </button>
// // </div>

// //       {/* STATS */}

// //       <div className="stats">

// //         <div className="card">
// //           <h3>Total Tests</h3>
// //           <p>{data.totalTests[0].total}</p>
// //         </div>

// //         <div className="card">
// //           <h3>Average Accuracy</h3>
// //           <p>{data.avgAccuracy[0].avg}%</p>
// //         </div>

// //         <div className="card">
// //           <h3>Best Performance</h3>
// //           <p>{data.bestPerformance[0].best}%</p>
// //         </div>

// //         <div className="card">
// //           <h3>Consistency Streak</h3>
// //           <p>{data.consistencyStreak[0].streak}</p>
// //         </div>

// //       </div>

// //       {/* CHARTS */}

// //       <div className="charts">

// //         <div className="chartCard">
// //           <h3>Progress Over Time</h3>
// //           <Line data={progressChart} />
// //         </div>

// //         <div className="chartCard">
// //           <h3>Last 7 Tests</h3>
// //           <Bar data={last7Chart} />
// //         </div>

// //         <div className="chartCard">
// //           <h3>Skill Performance</h3>
// //           <Bar data={skillChart} />
// //         </div>

// //         <div className="chartCard">
// //           <h3>Difficulty Analysis</h3>
// //           <Bar data={difficultyChart} />
// //         </div>

// //         <div className="chartCard">
// //           <h3>Result Distribution</h3>
// //           <Pie data={categoryData} />
// //         </div>

// //       </div>

// //       {/* WEAK / STRONG SKILLS */}

// //       <div className="skills">

// //         <div className="skillBox">
// //           <h3>Skills to Improve</h3>
// //           {weakSkills.length === 0 ? (
// //             <p>No weak skills 🎉</p>
// //           ) : (
// //             weakSkills.map((s) => (
// //               <p key={s.skill}>
// //                 {s.skill} - {s.accuracy}%
// //               </p>
// //             ))
// //           )}
// //         </div>

// //         <div className="skillBox">
// //           <h3>Strong Skills</h3>
// //           {strongSkills.length === 0 ? (
// //             <p>No strong skills yet</p>
// //           ) : (
// //             strongSkills.map((s) => (
// //               <p key={s.skill}>
// //                 {s.skill} - {s.accuracy}%
// //               </p>
// //             ))
// //           )}
// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Dashboard;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { Line, Bar, Pie } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [data, setData] = useState(null);
//   const [dark, setDark] = useState(false);
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");

//   const toggleTheme = () => setDark(!dark);

//   const themes = {
//     light: {
//       bg: "#ffffff",
//       text: "#000",
//       card: "#fff",
//       cardBorder: "#ddd",
//       textMuted: "#777"
//     },
//     dark: {
//       bg: "#111",
//       text: "#fff",
//       card: "#1e1e1e",
//       cardBorder: "#333",
//       textMuted: "#aaa"
//     }
//   };

//   const t = dark ? themes.dark : themes.light;

//   useEffect(() => {
//     if (!userId) navigate("/", { replace: true });

//     axios
//       .get(`[localhost](http://localhost:5000/api/dashboard/${userId})`)
//       .then((res) => setData(res.data))
//       .catch((err) => console.log("Dashboard error:", err));
//   }, [userId, navigate]);

//   if (!data) return <h2>Loading Dashboard...</h2>;

//   const weakSkills = data.skillPerformance.filter((s) => s.accuracy < 60);
//   const strongSkills = data.skillPerformance.filter((s) => s.accuracy >= 80);

//   const sortedProgress = [...data.progress].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   const progressChart = {
//     labels: sortedProgress.map((p) =>
//       new Date(p.date).toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "short"
//       })
//     ),
//     datasets: [
//       {
//         label: "Accuracy %",
//         data: sortedProgress.map((p) => Number(p.accuracy)),
//         borderColor: "#3b82f6",
//         tension: 0.4
//       }
//     ]
//   };

//   const skillChart = {
//     labels: data.skillPerformance.map((s) => s.skill),
//     datasets: [
//       {
//         label: "Skill Accuracy",
//         data: data.skillPerformance.map((s) => s.accuracy),
//         backgroundColor: "#8b5cf6"
//       }
//     ]
//   };

//   const difficultyChart = {
//     labels: data.difficultyAnalysis.map((d) => d.difficulty),
//     datasets: [
//       {
//         label: "Accuracy %",
//         data: data.difficultyAnalysis.map((d) => d.accuracy),
//         backgroundColor: "#f59e0b"
//       }
//     ]
//   };

//   const categoryData = {
//     labels: data.categoryDistribution.map((c) => c.result_category),
//     datasets: [
//       {
//         data: data.categoryDistribution.map((c) => c.count),
//         backgroundColor: ["#22c55e", "#3b82f6", "#facc15", "#ef4444"]
//       }
//     ]
//   };

//   const last7Chart = {
//     labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7"],
//     datasets: [
//       {
//         label: "Accuracy",
//         data: data.last7Tests.map((t) => t.accuracy),
//         backgroundColor: "#10b981"
//       }
//     ]
//   };

//   return (
//     <>
//       <style>{dashboardStyles(t)}</style>

//       <div className="db-container">
//         {/* Toggle */}
//         <div className="db-toggle">
//           <button onClick={toggleTheme}>
//             {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
//           </button>
//         </div>

//         <h1 className="db-title">
//           Dashboard <span className="db-gradient">Overview</span>
//         </h1>

//         {/* Stats Cards */}
//         <div className="db-stats">
//           <div className="db-card">
//             <h3>Total Tests</h3>
//             <p>{data.totalTests[0].total}</p>
//           </div>

//           <div className="db-card">
//             <h3>Average Accuracy</h3>
//             <p>{data.avgAccuracy[0].avg}%</p>
//           </div>

//           <div className="db-card">
//             <h3>Best Performance</h3>
//             <p>{data.bestPerformance[0].best}%</p>
//           </div>

//           <div className="db-card">
//             <h3>Streak</h3>
//             <p>{data.consistencyStreak[0].streak}</p>
//           </div>
//         </div>

//         {/* Charts */}
//         <div className="db-charts">
//           <div className="db-card chart">
//             <h3>Progress Over Time</h3>
//             <Line data={progressChart} />
//           </div>

//           <div className="db-card chart">
//             <h3>Last 7 Tests</h3>
//             <Bar data={last7Chart} />
//           </div>

//           <div className="db-card chart">
//             <h3>Skill Performance</h3>
//             <Bar data={skillChart} />
//           </div>

//           <div className="db-card chart">
//             <h3>Difficulty Analysis</h3>
//             <Bar data={difficultyChart} />
//           </div>

//           <div className="db-card chart">
//             <h3>Result Distribution</h3>
//             <Pie data={categoryData} />
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="db-skills">
//           <div className="db-card">
//             <h3>Skills to Improve</h3>
//             {weakSkills.length === 0 ? (
//               <p>No weak skills 🎉</p>
//             ) : (
//               weakSkills.map((s) => (
//                 <p key={s.skill}>
//                   {s.skill} - {s.accuracy}%
//                 </p>
//               ))
//             )}
//           </div>

//           <div className="db-card">
//             <h3>Strong Skills</h3>
//             {strongSkills.length === 0 ? (
//               <p>No strong skills yet</p>
//             ) : (
//               strongSkills.map((s) => (
//                 <p key={s.skill}>
//                   {s.skill} - {s.accuracy}%
//                 </p>
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;

// function dashboardStyles(t) {
//   return `
// .db-container {
//   min-height: 100vh;
//   padding: 60px 20px;
//   background: ${t.bg};
//   color: ${t.text};
//   font-family: 'DM Sans';
// }

// .db-toggle {
//   display: flex;
//   justify-content: flex-end;
//   margin-bottom: 20px;
// }

// .db-toggle button {
//   padding: 8px 14px;
//   border-radius: 20px;
//   border: none;
//   cursor: pointer;
//   background: linear-gradient(135deg,#3b82f6,#6366f1);
//   color: white;
//   font-size: 13px;
// }

// .db-title {
//   font-size: 32px;
//   font-family: 'Syne';
//   font-weight: 800;
//   margin-bottom: 20px;
// }

// .db-gradient {
//   background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// .db-stats {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 20px;
//   margin-bottom: 40px;
// }

// .db-card {
//   padding: 20px;
//   background: ${t.card};
//   border: 1px solid ${t.cardBorder};
//   border-radius: 18px;
//   box-shadow: 0 4px 24px rgba(0,0,0,0.05);
// }

// .db-card h3 {
//   font-size: 15px;
//   color: ${t.textMuted};
//   margin-bottom: 6px;
// }

// .db-card p {
//   font-size: 24px;
//   font-weight: 700;
// }

// .db-charts {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   gap: 24px;
//   margin-bottom: 40px;
// }

// .chart h3 {
//   margin-bottom: 12px;
//   font-weight: 600;
// }

// .db-skills {
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 24px;
//   margin-bottom: 60px;
// }
// `;
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Line, Bar, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [data, setData] = useState(null);
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const toggleTheme = () => setDark(!dark);

  const themes = {
    light: {
      bg: "#ffffff",
      text: "#000",
      card: "#fff",
      cardBorder: "#ddd",
      textMuted: "#777"
    },
    dark: {
      bg: "#111",
      text: "#fff",
      card: "#1e1e1e",
      cardBorder: "#333",
      textMuted: "#aaa"
    }
  };

  const t = dark ? themes.dark : themes.light;

  useEffect(() => {
    if (!userId) {
      navigate("/", { replace: true });
      return;
    }

    axios
      .get(`http://localhost:5000/api/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log("Dashboard error:", err));
  }, [userId, navigate]);

  if (!data) return <h2 style={{ textAlign: "center" }}>Loading Dashboard...</h2>;

  const weakSkills = data.skillPerformance.filter((s) => s.accuracy < 60);
  const strongSkills = data.skillPerformance.filter((s) => s.accuracy >= 80);

  const sortedProgress = [...data.progress].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const progressChart = {
    labels: sortedProgress.map((p) =>
      new Date(p.date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short"
      })
    ),
    datasets: [
      {
        label: "Accuracy %",
        data: sortedProgress.map((p) => Number(p.accuracy)),
        borderColor: "#3b82f6",
        tension: 0.4
      }
    ]
  };

  const skillChart = {
    labels: data.skillPerformance.map((s) => s.skill),
    datasets: [
      {
        label: "Skill Accuracy",
        data: data.skillPerformance.map((s) => s.accuracy),
        backgroundColor: "#8b5cf6"
      }
    ]
  };

  const difficultyChart = {
    labels: data.difficultyAnalysis.map((d) => d.difficulty),
    datasets: [
      {
        label: "Accuracy %",
        data: data.difficultyAnalysis.map((d) => d.accuracy),
        backgroundColor: "#f59e0b"
      }
    ]
  };

  const categoryData = {
    labels: data.categoryDistribution.map((c) => c.result_category),
    datasets: [
      {
        data: data.categoryDistribution.map((c) => c.count),
        backgroundColor: ["#22c55e", "#3b82f6", "#facc15", "#ef4444"]
      }
    ]
  };

  const last7Chart = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7"],
    datasets: [
      {
        label: "Accuracy",
        data: data.last7Tests.map((t) => t.accuracy),
        backgroundColor: "#10b981"
      }
    ]
  };

  return (
    <>
      <style>{dashboardStyles(t)}</style>

      <div className="db-container">
        <div className="db-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <h1 className="db-title">
          Dashboard <span className="db-gradient">Overview</span>
        </h1>

        <div className="db-stats">
          <div className="db-card">
            <h3>Total Tests</h3>
            <p>{data.totalTests[0].total}</p>
          </div>

          <div className="db-card">
            <h3>Average Accuracy</h3>
            <p>{data.avgAccuracy[0].avg}%</p>
          </div>

          <div className="db-card">
            <h3>Best Performance</h3>
            <p>{data.bestPerformance[0].best}%</p>
          </div>

          <div className="db-card">
            <h3>Streak</h3>
            <p>{data.consistencyStreak[0].streak}</p>
          </div>
        </div>

        <div className="db-charts">
          <div className="db-card chart">
            <h3>Progress Over Time</h3>
            <Line data={progressChart} />
          </div>

          <div className="db-card chart">
            <h3>Last 7 Tests</h3>
            <Bar data={last7Chart} />
          </div>

          <div className="db-card chart">
            <h3>Skill Performance</h3>
            <Bar data={skillChart} />
          </div>

          <div className="db-card chart">
            <h3>Difficulty Analysis</h3>
            <Bar data={difficultyChart} />
          </div>

          <div className="db-card chart">
            <h3>Result Distribution</h3>
            <Pie data={categoryData} />
          </div>
        </div>

        <div className="db-skills">
          <div className="db-card">
            <h3>Skills to Improve</h3>
            {weakSkills.length === 0 ? (
              <p>No weak skills 🎉</p>
            ) : (
              weakSkills.map((s) => (
                <p key={s.skill}>
                  {s.skill} - {s.accuracy}%
                </p>
              ))
            )}
          </div>

          <div className="db-card">
            <h3>Strong Skills</h3>
            {strongSkills.length === 0 ? (
              <p>No strong skills yet</p>
            ) : (
              strongSkills.map((s) => (
                <p key={s.skill}>
                  {s.skill} - {s.accuracy}%
                </p>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

function dashboardStyles(t) {
  return `
.db-container {
  min-height: 100vh;
  padding: 60px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
}

.db-toggle {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.db-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: white;
  font-size: 13px;
}

.db-title {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 20px;
}

.db-gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.db-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.db-card {
  padding: 20px;
  background: ${t.card};
  border: 1px solid ${t.cardBorder};
  border-radius: 18px;
}

.db-card h3 {
  font-size: 15px;
  color: ${t.textMuted};
}

.db-card p {
  font-size: 24px;
  font-weight: 700;
}

.db-charts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.db-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
`;
}