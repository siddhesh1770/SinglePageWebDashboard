import React, { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { UserContext } from "../routes/Routing";
import swal from "sweetalert";
import { renderNoteCard, renderCowinCard, renderEkartCard } from "./Cards";

const Contact = () => {
  return (
    <>
      <div>Hello from Contact Page</div>
    </>
  );
};

const Controller = () => {
  return (
    <>
      <div className="control-bar">
        <button onClick={renderNoteCard} id="create-note-card">
          New Note
        </button>
        <button onClick={renderCowinCard} id="create-cowin-card">
          New Vaccine Tracker
        </button>
        <button onClick={renderEkartCard} id="create-ekart-card">
          Ekart Tracker
        </button>
      </div>
    </>
  );
};

const Dashboard = () => {
  const { state } = useContext(UserContext);
  const history = useHistory();
  if (!state) {
    history.push("/login");
  }
  return (
    <>
      <Controller />
      <div className="playground" id="playground">
        <div className="container" id="container"></div>
      </div>
    </>
  );
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
            {/* <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink> */}
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
            {/* <NavLink to="/dashboard">Dashboard</NavLink> */}
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
  const toForgotPassword = () => {
    history.push("/forgotpassword");
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
        swal("Oops!", "Please Enter valid email or password", "error");
      } else if (res.status === 401) {
        swal("Oops!", "Invalid Email or Password", "error");
      } else if (res.status === 500) {
        swal("Oops!", "Internal Server Error", "error");
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
              spellCheck="false"
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
              spellCheck="false"
              placeholder="Password"
              id="password"
            />
            <button onClick={loginUser}>Log In</button>
            <div className="social">
              <div className="go" onClick={toRegister}>
                <NavLink to="/register">Register Now</NavLink>
              </div>
              <div className="go" onClick={toForgotPassword}>
                <NavLink to="/forgotpassword">Forgot Password</NavLink>
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
    const helloElem = document
      .getElementById("mainForm")
      .querySelectorAll(".disableIt");
    for (let kil = 0; kil < helloElem.length; kil++) {
      helloElem[kil].style.backgroundColor = "grey";
      helloElem[kil].disabled = true;
    }
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
        swal("Oops!", "Something went wrong please try again later", "error");
      }
    });
    for (let kil = 0; kil < helloElem.length; kil++) {
      helloElem[kil].style.backgroundColor = "";
      helloElem[kil].disabled = false;
    }
  };
  return (
    <>
      <div className="loginFormDiv signUpFormDiv">
        <section className="loginFormSection">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form className="loginForm signUpForm signUpForm1770" id="mainForm">
            <h3>Register</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="on"
              id="name"
              className="disableIt"
              spellCheck="false"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="disableIt"
              id="email"
              autoComplete="on"
              spellCheck="false"
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
              className="disableIt"
              autoComplete="on"
              spellCheck="false"
              placeholder="Password"
              id="password"
            />
            <button className="disableIt" onClick={registerUser}>
              Register
            </button>
            <div className="social">
              <div className="go disableIt" onClick={toLogin}>
                <NavLink to="/login">Already Have Account ? Login Here</NavLink>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

const ResetPasswordScreen = ({ history, match }) => {
  const history1770 = useHistory();
  const resetToken = match.params.resetToken;

  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const resetPassword = async (e) => {
    e.preventDefault();
    if (!(password === cpassword)) {
      swal("Oops!", "Password Does not match with confirm password.", "error");
      return;
    }
    await fetch(
      `https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/resetpassword/${resetToken}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
      }
    ).then((res) => {
      if (res.status === 201) {
        swal(
          "Oops!",
          "Password Reset Successful, Please login now with new password",
          "error"
        );
        history1770.push("/login");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="loginFormDiv signUpFormDiv ">
        <section className="loginFormSection">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form className="loginForm signUpForm loginForm1770">
            <h3>Reset Password</h3>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              id="password"
              autoComplete="on"
              spellCheck="false"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="cpassword">Re-Enter Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="cpassword"
              autoComplete="on"
              spellCheck="false"
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <button onClick={resetPassword}>Submit</button>
          </form>
        </section>
      </div>
      <Footer />
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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const forgotPassword = async (e) => {
    e.preventDefault();
    await fetch(
      "https://api-siddheshpatil.herokuapp.com/singleboard/api/auth/forgotpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    ).then((res) => {
      if (res.status === 200) {
        swal(
          "Oops!",
          "Password reset link sent successfully, Check your Inbox Now.",
          "error"
        );
        history.push("/home");
      } else {
        swal("Oops!", "Something went wrong please try again", "error");
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
            <h3>Forgot Password</h3>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              autoComplete="on"
              spellCheck="false"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button onClick={forgotPassword}>Send Reset Link</button>
          </form>
        </section>
      </div>
    </>
  );
};

export {
  Dashboard,
  Home,
  PushToHome,
  Register,
  ForgotPassword,
  About,
  Login,
  ResetPasswordScreen,
  Navbar,
  Footer,
  Contact,
};
