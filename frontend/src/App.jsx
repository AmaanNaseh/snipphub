import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Components
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";

const App = () => {
  const [theme, setTheme] = useState("dark"); // light, dark

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0d1117";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#0d1117";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "black";
    }
  }, [theme]);

  return (
    <>
      {/* Global Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />

      <Navbar theme={theme} setTheme={setTheme} />

      <div className="min-h-screen py-20 px-4 md:px-12 lg:px-20">
        <Routes>
          <Route path="/" element={<HomePage theme={theme} />} />
          <Route
            path="/commands/:id"
            element={<CommandsPage theme={theme} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
