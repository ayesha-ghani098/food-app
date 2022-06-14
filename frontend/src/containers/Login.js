import React,{useState,useEffect} from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

// Style and Assets
import LoginImage from "../assets/login.png";

// Components
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();


  useEffect(()=>{
if(localStorage.getItem("authToken")){
  navigate('/dashboard', { replace: true })
}
  },[navigate])

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken",data.token);
      reset();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.log(err);
      // setError(err.response.data.error);
    }
  };


  const reset = () =>{
    setEmail("");
    setPassword("");
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
              <Link className="span" to="/signup">Create an account</Link>
              <Link className="span" to="/">Forgot Passoword</Link>
            </div>
            {error && <span className="error">{error}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
