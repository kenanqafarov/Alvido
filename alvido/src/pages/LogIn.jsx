import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "../style/LogInPage/login.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Zəhmət olmasa, bütün sahələri doldurun.");
      return;
    }

    // Admin girişi üçün shortcut
    if (email === "admin" && password === "admin") {
      toast.success("Admin olaraq daxil oldunuz!");
      setTimeout(() => {
        navigate("/admin");
      }, 1500);
      return;
    }

    // Əgər admin deyilsə, Supabase ilə yoxla
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error("Uğursuz giriş! Email və ya şifrə yanlışdır.");
    } else {
      toast.success("Uğurlu giriş!");
      // Burada əlavə redirect və ya state dəyişimi əlavə edə bilərsən
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-box login-box">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>
        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
