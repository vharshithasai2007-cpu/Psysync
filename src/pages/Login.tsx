import { Link, useNavigate } from "react-router-dom";
import { Brain, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="brand-icon">
            <Brain size={24} />
          </div>
          <span>PsySync</span>
        </div>

        <div className="auth-header">
          <h1>Welcome back</h1>
          <p>Your personal wellness companion is ready.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/onboarding");
          }}
        >
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <div className="forgot">
            <button type="button">Forgot password?</button>
          </div>

          <button className="auth-button" type="submit">
            Sign in
            <ArrowRight size={18} />
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
}