import React, { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../routes/Routing";

const Contact = () => {
  return (
    <>
      <div>Hello from Contact Page</div>
    </>
  );
};
const Dashboard = () => {
  const { state } = useContext(UserContext);
  const history = useHistory();
  // console.log(state);
  if (!state) {
    history.push("/login");
  }
  return <div>Hello From Dashboard</div>;
};

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const logout = () => {
    dispatch({ type: "USER", payload: false });
  };
  const IfLoggedIn = () => {
    const myFunction = () => {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
    return (
      <>
        <header>
          <div className="topnav" id="myTopnav">
            {/* <NavLink to="/home" className="helloSection">
              Brand
            </NavLink> */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            {/* <NavLink to="/login">Login</NavLink */}
            {/* <NavLink to="/register">Register</NavLink> */}
            <NavLink to="#" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </NavLink>
          </div>
        </header>
      </>
    );
  };
  const IfNotLoggedIn = () => {
    const myFunction = () => {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    };
    return (
      <>
        <header>
          <div className="topnav" id="myTopnav">
            {/* <NavLink to="/home" className="helloSection">
              Brand
            </NavLink> */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="#" className="icon" onClick={myFunction}>
              <i className="fa fa-bars"></i>
            </NavLink>
          </div>
        </header>
      </>
    );
  };
  const RenderNavbar = () => {
    if (state) {
      return <IfLoggedIn />;
    } else {
      return <IfNotLoggedIn />;
    }
  };
  return <RenderNavbar />;
};

const Home = () => {
  return (
    <>
      <div>Hello from Home Page</div>
    </>
  );
};

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const toRegister = () => {
    history.push("/register");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    // console.log("hello");
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
        // localStorage.setItem("userState", "true");
        history.push("/dashboard");
      }
    });
  };
  return (
    <>
      <div className="loginFormDiv signUpFormDiv ">
        <section className="loginFormSection">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form className="loginForm signUpForm loginForm1770">
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Password"
              id="password"
            />
            <button onClick={loginUser}>Log In</button>
            <div className="social">
              <div className="go" onClick={toRegister}>
                <NavLink to="/register">
                  Don't Have Account ? Register Now
                </NavLink>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

const Register = () => {
  const history = useHistory();
  const toLogin = () => {
    history.push("/login");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const registerUser = async (e) => {
    e.preventDefault();
    // console.log("hello");
    await fetch(
      "https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      }
    ).then((res) => {
      if (res.status === 201) {
        toLogin();
      } else {
        window.alert("Something went wrong please try again later");
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
          <form className="loginForm signUpForm signUpForm1770">
            <h3>Register</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="on"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="on"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Password"
              id="password"
            />
            <button onClick={registerUser}>Register</button>
            <div className="social">
              <div className="go" onClick={toLogin}>
                <NavLink to="/login">Already Have Account ? Login Here</NavLink>
              </div>
            </div>
          </form>
        </section>
      </div>
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

const About = () => {
  return (
    <>
      <div>Hello from About page</div>
    </>
  );
};

const PushToHome = () => {
  const history = useHistory();
  history.push("/home");
};

export {
  Dashboard,
  Home,
  PushToHome,
  Register,
  About,
  Login,
  ResetPasswordScreen,
  Navbar,
  Footer,
  Contact,
};
