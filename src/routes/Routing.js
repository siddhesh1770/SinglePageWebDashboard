import { createContext, useReducer } from "react";
import { initialState, reducer } from "../hooks/UseReducer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import Dashboard from "../components/Open";
import {
  Dashboard,
  Login,
  Navbar,
  Footer,
  Home,
  Register,
  ResetPasswordScreen,
  Contact,
  About,
  ForgotPassword,
} from "../components/Open";

export const UserContext = createContext();

const MainSwitcher = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/forgotpassword">
            <Navbar />
            <ForgotPassword />
            <Footer />
          </Route>
          <Route path="/home">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/register">
            <Navbar />
            <Register />
            <Footer />
          </Route>
          <Route
            path="/resetpassword/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route path="/dashboard">
            <Navbar />
            <Dashboard />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <MainSwitcher />
      </UserContext.Provider>
    </>
  );
};

export { Routing };
