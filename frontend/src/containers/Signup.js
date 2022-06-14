import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Style and Assets
import LoginImage from "../assets/login.png";

// Components
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => setError(""), 5000);
      return setError("Passwords donot match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/register",
        { username, email, password },
        config
      );

      console.log("data arha h",data);

      console.log(data.token);
      localStorage.setItem("authToken",data.token);
      reset();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      // setError(err);
    }
  };

  
  const reset = () =>{
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <div className="fluid-container auth__Container">
      <div className="row  g-0">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            id="image"
            className="img-fluid"
            src={LoginImage}
            alt="loginImage"
          />
        </div>
        <div id="rightContainer" className="col-lg-6 col-md-6 col-sm-12">
          <div>
            <h2 className="heading">Welcome to Lilies!</h2>
            <form onSubmit={registerHandler}>
              <Input
                type="text"
                required
                value={username}
                placeholder="Your Name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="email"
                required
                value={email}
                placeholder="Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                required
                value={password}
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                required
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button type="submit" label="SIGN UP" />
            </form>
            <div className="signup__link">
              <Link
                to="/Login"
                className="span"
                style={{ textAlign: "center" }}
              >
                Already have an account. LOGIN
              </Link>
            </div>
            {error && <span className="error">{error}</span>}
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
