// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/api";
// import "../styles/Login.css";
// import "../styles/Signup.css";

// function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {

//     const res = await API.post("/auth/login", form);
//     localStorage.setItem("userId", res.data.userId);

//     alert(res.data.message);

//     navigate("/home");   // redirect

//   } catch (err) {

//     console.log(err);

//     alert(err.response?.data?.message || "Login failed");

//   }
// };

//   return (
//     <div className="login-page">

//       <div className="login-card">

//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="email"
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

//           <button type="submit">Login</button>

//         </form>

//         <p className="switch-text">
//           Don't have an account? <Link to="/signup">Signup</Link>
//         </p>

//       </div>

//     </div>
//   );
// }


// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {
  const navigate = useNavigate();

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
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("userId", res.data.userId);

      alert(res.data.message);

      navigate("/home");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <style>{getLoginStyles(t, dark)}</style>

      <div className="login-container">

        {/* 🌙 Toggle */}
        <div className="login-toggle">
          <button onClick={toggleTheme}>
            {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div className="login-card">

          <span className="login-badge">Welcome Back</span>

          <h1 className="login-title">
            Login to <span className="login-gradient">Your Account</span>
          </h1>

          <p className="login-sub">
            Enter your credentials to continue.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="login-input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
            </div>

            <div className="login-input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="login-btn">
              Login →
            </button>

          </form>

          <p className="login-switch">
            Don’t have an account?{" "}
            <Link to="/signup">Signup</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;


// 🎨 SAME STYLE SYSTEM
function getLoginStyles(t, dark) {
  return `
.login-container {
  min-height: 100vh;
  padding: 60px 20px;
  background: ${t.bg};
  color: ${t.text};
  font-family: 'DM Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-toggle {
  align-self: flex-end;
  margin-bottom: 20px;
}

.login-toggle button {
  padding: 8px 14px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg,#3b82f6,#6366f1);
  color: #fff;
  font-size: 13px;
}

.login-card {
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

.login-badge {
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

.login-title {
  font-family: 'Syne';
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 6px;
}

.login-gradient {
  background: linear-gradient(90deg,#60a5fa,#a78bfa,#34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login-sub {
  color: ${t.textMuted};
  font-size: 14px;
  margin-bottom: 25px;
}

.login-input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

.login-input-group label {
  font-weight: 600;
  margin-bottom: 6px;
  color: ${t.textStrong};
}

.login-input-group input {
  padding: 12px;
  border-radius: 12px;
  border: 1px solid ${t.inputBorder};
  background: ${t.inputBg};
  color: ${t.text};
  font-size: 14px;
}

.login-btn {
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

.login-switch {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.login-switch a {
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