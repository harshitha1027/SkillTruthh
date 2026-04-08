// import { useState, useEffect } from "react";
// import { Outlet } from "react-router-dom";

// function MainLayout() {
//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("skilltruth-theme") === "light" ? false : true
//   );

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     localStorage.setItem("skilltruth-theme", newTheme ? "dark" : "light");

//     // notify all pages
//     window.dispatchEvent(new Event("themeChange"));
//   };

//   useEffect(() => {
//     const handleThemeChange = () => {
//       const saved = localStorage.getItem("skilltruth-theme");
//       setIsDark(saved === "dark");
//     };

//     window.addEventListener("themeChange", handleThemeChange);
//     return () =>
//       window.removeEventListener("themeChange", handleThemeChange);
//   }, []);

//   return (
//     <div>
//       {/* 🔥 GLOBAL NAVBAR */}
//       <nav style={{ padding: "15px", background: "#111", color: "#fff" }}>
//         <h2>SkillTruth</h2>

//         <button onClick={toggleTheme}>
//           {isDark ? "🌙 Dark" : "☀️ Light"}
//         </button>
//       </nav>

//       {/* ALL PAGES WILL LOAD HERE */}
//       <Outlet />
//     </div>
//   );
// }

// export default MainLayout;

import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("skilltruth-theme") === "light" ? false : true
  );

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("skilltruth-theme", newTheme ? "dark" : "light");

    // 🔥 notify all pages
    window.dispatchEvent(new Event("themeChange"));
  };

  useEffect(() => {
    const handleThemeChange = () => {
      const saved = localStorage.getItem("skilltruth-theme");
      setIsDark(saved === "dark");
    };

    window.addEventListener("themeChange", handleThemeChange);
    return () =>
      window.removeEventListener("themeChange", handleThemeChange);
  }, []);

  return (
    <div>
      {/* 🔥 GLOBAL NAVBAR */}
      <nav
        style={{
          padding: "15px 25px",
          display: "flex",
          justifyContent: "space-between",
          background: isDark ? "#111" : "#f5f5f5",
          color: isDark ? "#fff" : "#000",
        }}
      >
        <h2>SkillTruth</h2>

        <button onClick={toggleTheme}>
          {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>

      {/* All pages render here */}
      <Outlet />
    </div>
  );
}

export default MainLayout;