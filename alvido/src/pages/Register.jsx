import React, { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../style/LogInPage/login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      toast.error("Zəhmət olmasa, bütün sahələri doldurun.");
      return;
    }

    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
      });

      if (authError) {
        toast.error(`Qeydiyyat xətası: ${authError.message}`);
        setLoading(false);
        return;
      }

      const userId = authData?.user?.id;

      const { error: insertError } = await supabase.from("users").insert([
        {
          id: userId,
          email: email.trim(),
          full_name: fullName.trim(),
          created_at: new Date().toISOString(),
        },
      ]);

      if (insertError) {
        toast.error(`İstifadəçi məlumatları əlavə edilərkən xəta: ${insertError.message}`);
      } else {
        toast.success("Qeydiyyat uğurla tamamlandı!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      toast.error("Bilinməyən xəta baş verdi.");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <ToastContainer />
      <div className="auth-box login-box">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Sign up to get started</p>
        <form className="auth-form" onSubmit={handleRegister} autoComplete="off">
          <input
            type="text"
            placeholder="Full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
