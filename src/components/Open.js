import React, { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../routes/Routing";

const Navbar = () => {
  return (
    <>
      <div>Navbar</div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div>Hello from Home Page</div>
    </>
  );
};

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const toRegister = () => {
    history.push("/signup");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    console.log("hello");
    await fetch(
      "https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    ).then((res) => {
      if (res.status === 400) {
        window.alert("Please Enter valid email or password");
      } else if (res.status === 401) {
        window.alert("Invalid Email or Password");
      } else if (res.status === 500) {
        window.alert("Internal Server Error");
      } else if (res.status === 200) {
        dispatch({ type: "USER", payload: true });
        history.push("/dashboard");
      }
    });
  };
  return (
    <>
      <div className="loginFormDiv signUpFormDiv">
        <section className="loginFormSection">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form className="loginForm signUpForm">
            <h3>Login</h3>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="password">Password</label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
            <button onClick={loginUser}>Log In</button>
            <div className="social">
              <div className="go" onClick={toRegister}>
                <NavLink to="/signup"> Register </NavLink>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

const Register = () => {
  return (
    <>
      <div>Hello from Register</div>
    </>
  );
};

const ResetPasswordScreen = () => {
  return (
    <>
      <div>Hello from Reset Password Page</div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div>Hello from Footer Page</div>
    </>
  );
};

export { Home, Register, Login, ResetPasswordScreen, Navbar, Footer };
