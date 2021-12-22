import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import {
  Login,
  Navbar,
  Footer,
  Home,
  Register,
  ResetPasswordScreen,
} from "../components/Open";
const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/home">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/login">
            <Navbar />
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <Navbar />
            <Register />
            <Footer />
          </Route>
          <Route path="/resetpassword:resetToken">
            <Navbar />
            <ResetPasswordScreen />
            <Footer />
          </Route>
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

export { Routing };
