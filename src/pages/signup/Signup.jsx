import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("passwords do not match");
      return;
    }
    if (password.length > 8) {
      alert("password cannot be more than 8 characters");
      return;
    }
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
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label for="password">PASSWORD:</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="confirm">
            <label for="confirm">CONFIRM PASSWORD:</label>
            <input
              type="password"
              placeholder="confirm password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>
          <div className="fullname">
            <label for="fullname">FULL NAME:</label>
            <input
              type="text"
              placeholder="FULL NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="qualification">
            <label for="qualification">QUALIFICATIONS:</label>
            <input
              type="text"
              placeholder="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div className="date">
            <label for="date">BIRTH OF DATE:</label>
            <input
              type="date"
              placeholder="DD/MM/YYYY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <button
            type="submit"
            style={{
              border: "none",
              color: "blue",
            }}
          >
            Login
          </button>
          <div className="signuplink">
            <Link to="/" style={{ color: "red", textDecoration: "none" }}>
              Already signed up?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
export default Signup;
