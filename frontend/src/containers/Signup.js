import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Style and Assets
import LoginImage from "../assets/login.png";

// Components
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { registerUser } from "../store/actions/userAction";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Error, setError] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { error,message, Loading} = userState;

  const registerHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => setError(""), 5000);
      return setError("Passwords donot match");
    }

    let user = { username, email, number, address, password };

    try {
      dispatch(registerUser(user,navigate));
      reset();
    } catch (err) {
      setError(err.message);
    }
  };

  const reset = () => {
    setUsername("");
    setEmail("");
    setNumber("");
    setAddress("");
    setPassword("");
    setConfirmPassword("");
  };

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
        <div
          id="right__signupContainer"
          className="col-lg-6 col-md-6 col-sm-12"
        >
          {Loading ? (
            <h2>"Registering User....."</h2>
          ) : error ? (
            <h1>Error while registering</h1>
          ) : (
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
                  type="tel"
                  required
                  value={number}
                  placeholder="Your Phone Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <textarea
                  className="textArea"
                  required
                  value={address}
                  placeholder="Your Delivery Address"
                  onChange={(e) => setAddress(e.target.value)}
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
                {Error && <span className="error">{Error}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
