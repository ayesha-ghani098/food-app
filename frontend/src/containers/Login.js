import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Style and Assets
import LoginImage from "../assets/login.png";

// Components
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { loginUser } from "../store/actions/userAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { loading, error } = userState;

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginUser(email, password,navigate));
      reset();
    } catch (err) {
      setError(err.message);
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="fluid-container auth__Container login">
      <div className="row  g-0">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img
            id="image"
            className="img-fluid"
            src={LoginImage}
            alt="loginImage"
          />
        </div>
        <div id="right__loginContainer" className="col-lg-6 col-md-6 col-sm-12">
          {loading ? (
            <h2>Signing In.....</h2>
          ): error ? (
            <h1>Error while registering</h1>
          ) : (
            <div>
              <h2 className="heading">Welcome Back!</h2>
              <form onSubmit={loginHandler}>
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
                <Button type="submit" label="LOGIN" />
              </form>
              <div className="links">
                <Link className="span" to="/signup">
                  Create an account
                </Link>
                <Link className="span" to="/">
                  Forgot Passoword
                </Link>
              </div>
              {Error && <span className="error">{Error}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
