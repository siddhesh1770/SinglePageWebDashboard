import React from "react";

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
            <input type="email" placeholder="Email" id="email" />
            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />
            <button>Log In</button>
            <div className="social">
              <div className="go">
                <i className=""></i>Register Now
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
