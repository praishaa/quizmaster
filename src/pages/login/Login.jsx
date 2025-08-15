import { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`login clicked\nEmail:${email}\npassword:${password}`);
  };
  return (
    <>
      <div className="header poppins-regular">WELCOME TO QUIZ MASTER</div>
      <div className="root poppins-regular">
        <form className="main" onSubmit={handleSubmit}>
          <div className="email">
            <label for="email">EMAIL:</label>

            <input
              className="email"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label for="password">PASSWORD:</label>
            <div className="content">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="signup">
            <label for="signup"></label>
            <button
              type="submit"
              style={{
                border: "none",
                color: "blue",
              }}
            >
              Login
            </button>
            <div
              className="signuplink"
              style={{
                color: "red", // lowercase 'color'
                textDecoration: "none", // remove underline
              }}
            >
              <Link
                to="/Signup"
                style={{ color: "red", textDecoration: "none" }}
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
