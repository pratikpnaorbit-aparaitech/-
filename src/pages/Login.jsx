import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-left">
        <h1>🐄 CowMarket</h1>

        <h2>Welcome Back!</h2>

        <p>
          Buy and sell healthy cattle securely from anywhere in India.
          Connect with verified buyers and sellers through one trusted platform.
        </p>
      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Login</h2>

          <p>Sign in to continue</p>

          <form>

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">Forgot Password?</a>

            </div>

            <button className="login-btn-main">
              Login
            </button>

          </form>

          <div className="divider">
            OR
          </div>

          <button className="google-btn">
            Continue with Google
          </button>

          <p className="register-text">
            Don't have an account? <span>Register</span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;