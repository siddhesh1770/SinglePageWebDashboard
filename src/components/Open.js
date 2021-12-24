import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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
              spellCheck="false"
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
              autoComplete="on"
              spellCheck="false"
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

const ResetPasswordScreen = ({ history, match }) => {
  const history1770 = useHistory();
  const resetToken = match.params.resetToken;

  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const resetPassword = async (e) => {
    e.preventDefault();
    if (!(password === cpassword)) {
      window.alert("Password Does not match with confirm password.");
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
        window.alert(
          "Password Reset Successful, Please login now with new password"
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
        window.alert(
          "Password reset link sent successfully, Check your Inbox Now."
        );
        history.push("/home");
      } else {
        window.alert("Something went wrong please try again");
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
