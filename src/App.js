import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import API from "./api";

import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";

const AppWrapper = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const dfMessengerRef = useRef(null);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (token && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save chatbot conversations to database
  useEffect(() => {
    const handleDfResponse = async (event) => {
      try {
        const userMessage = event.detail?.requestBody?.queryInput?.text?.text || "";
        const botReply = event.detail?.response?.queryResult?.fulfillmentText || "";
        if (userMessage && botReply) {
          await API.post("/chat/save", {
            user_message: userMessage,
            bot_reply: botReply,
          });
        }
      } catch (err) {
        console.error("Failed to save chat:", err);
      }
    };

    window.addEventListener("df-response-received", handleDfResponse);
    return () => window.removeEventListener("df-response-received", handleDfResponse);
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  const isHomePage = location.pathname === "/home";

  return (
    <>
      {isLoggedIn && (
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} />
      )}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <div className="App">
                <h1>Welcome to SevaMitraMedi</h1>
                <h3>Your Trusted Medical Assistant.
                Here to support your health journey with care, knowledge, and tradition</h3>
                <Home />
                <About />
                <Work />
                <Testimonial />
                <Contact />
                <Footer />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>

      {/* Dialogflow chatbot — only on /home when logged in */}
      {isLoggedIn && isHomePage && (
        <df-messenger
          ref={dfMessengerRef}
          intent="WELCOME"
          chat-title="BharatMediBot"
          agent-id="4daa5f6d-c020-459c-a5ae-f6b1711888f2"
          language-code="en"
        ></df-messenger>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;