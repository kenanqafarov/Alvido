import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // 1. Supabase auth ilə qeydiyyat
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      toast.error(`Qeydiyyat xətası: ${authError.message}`);
      return;
    }

    const userId = authData?.user?.id;

    // 2. Əgər qeydiyyat uğurludursa, users cədvəlinə əlavə edirik
    const { error: insertError } = await supabase.from("users").insert([
      {
        id: userId, // auth-dan gələn id
        email,
        full_name: fullName,
        created_at: new Date(),
      },
    ]);

    if (insertError) {
      toast.error(`İstifadəçi məlumatları əlavə edilərkən xəta: ${insertError.message}`);
    } else {
      toast.success("Qeydiyyat uğurla tamamlandı!");
    }
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-box login-box">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Sign up to get started</p>
        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-btn">Register</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
