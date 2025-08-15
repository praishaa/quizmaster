import { useState } from "react";
import "./signup.css";

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
    <form onSubmit={handleSubmit}>
      <h2>SIgn up</h2>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <input
        type="text"
        placeholder="FULL NAME"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
      />
      <input
        type="date"
        placeholder="DD/MM/YYYY"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
export default Signup;
