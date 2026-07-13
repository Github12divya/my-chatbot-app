import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "./Login.css";

const Login = ({ onLogin }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isRegister) {
                // Register new user
                await API.post("/auth/register", { name, email, password });
                alert("Registration successful! Please login.");
                setIsRegister(false);
                setName("");
                setEmail("");
                setPassword("");
            } else {
                // Login existing user
                const res = await API.post("/auth/login", { email, password });
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                onLogin(res.data.user);
                navigate("/home");
            }
        } catch (err) {
            setError(err.response?.data?.detail || "Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <h2>{isRegister ? "Register" : "User Login"}</h2>

            {error && (
                <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <form onSubmit={handleSubmit}>
                {isRegister && (
                    <div className="input-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Show Password
                    </label>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? "Please wait..." : isRegister ? "Register" : "Login"}
                </button>
            </form>

            <p style={{ marginTop: "15px", textAlign: "center" }}>
                {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                <span
                    onClick={() => { setIsRegister(!isRegister); setError(""); }}
                    style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
                >
                    {isRegister ? "Login" : "Register"}
                </span>
            </p>
        </div>
    );
};

export default Login;
