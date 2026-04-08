// import { useState } from "react";
// import { Link } from "react-router-dom";
// import API from "../api/api";
// import "../styles/Signup.css";

// function Signup() {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {

//     const res = await API.post("/auth/signup", form);

//     alert(res.data.message);

//   } catch (err) {

//     alert(err.response.data.message);

//   }
// };

//   return (
//     <div className="signup-page">

//       <div className="signup-card">

//         <h2>Create Account</h2>

//         <form onSubmit={handleSubmit}>

//           <input
//             name="name"
//             placeholder="Full Name"
//             onChange={handleChange}
//           />

//           <input
//             name="email"
//             placeholder="Email"
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             onChange={handleChange}
//           />

//           <button type="submit">Signup</button>

//         </form>

//         <p className="switch-text">
//           Already have an account? <Link to="/">Login</Link>
//         </p>

//       </div>

//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

function Signup() {

  // 🌙 Theme state
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  // 🎨 Themes
  const themes = {
    light: {
      bg: "#ffffff",
      text: "#000",
      card: "#fff",
      cardBorder: "#ddd",
      textMuted: "#666",
      textStrong: "#111",
      inputBorder: "#ccc",
      inputBg: "#f9f9f9"
    },
    dark: {
      bg: "#111",
      text: "#fff",
      card: "#1e1e1e",
      cardBorder: "#333",
      textMuted: "#aaa",
      textStrong: "#fff",
      inputBorder: "#444",
      inputBg: "#222"
    }
  };

  const t = dark ? themes.dark : themes.light;

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", form);

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <style>{getSignupStyles(t, dark)}</style>

      <div className="signup-container">

        {/* 🌙 Toggle */}
        <div className="signup-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="signup-card">

          <span className="signup-badge">Join Us</span>

          <h1 className="signup-title">
            Create <span className="signup-gradient">Account</span>
          </h1>

          <p className="signup-sub">
            Fill in your details to get started.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="signup-input-group">
              <label>Full Name</label>
              <input
                name="name"
                placeholder="Enter your name"
                onChange={handleChange}
              />
            </div>

            <div className="signup-input-group">
              <label>Email</label>
              <input
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            <div className="signup-input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="signup-btn">
              Signup →
            </button>

          </form>

          <p className="signup-switch">
            Already have an account?{" "}
            <Link to="/">Login</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Signup;


// 🎨 SAME UI STYLE SYSTEM
function getSignupStyles(t, dark) {
  return `
.signup-container {
  min-height: 100vh;
  padding: 60px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
}

.signup-toggle {
  align-self: flex-end;
  margin-bottom: 20px;
}

.signup-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: #fff;
  font-size: 13px;
}

.signup-card {
  width: 100%;
  max-width: 420px;
  background: ${t.card};
  border: 1px solid ${t.cardBorder};
  border-radius: 24px;
  padding: 40px 30px;
  backdrop-filter: blur(14px);
  animation: fadeUp 0.6s ease both;
  box-shadow: ${dark ? "none" : "0 4px 24px rgba(0,0,0,0.06)"};
}

.signup-badge {
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

.signup-title {
  font-family: 'Syne';
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 6px;
}

.signup-gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.signup-sub {
  color: ${t.textMuted};
  font-size: 14px;
  margin-bottom: 25px;
}

.signup-input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.signup-input-group label {
  font-weight: 600;
  margin-bottom: 6px;
  color: ${t.textStrong};
}

.signup-input-group input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${t.inputBorder};
  background: ${t.inputBg};
  color: ${t.text};
  font-size: 14px;
}

.signup-btn {
  width: 100%;
  padding: 14px;
  margin-top: 10px;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  border: none;
  border-radius: 14px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.signup-switch {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.signup-switch a {
  color: #6366f1;
  font-weight: 600;
  text-decoration: none;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
}