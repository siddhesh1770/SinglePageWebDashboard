import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/Open";
const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/home">
            <div>Navbar</div>
            <div>Hello From Home Page</div>
          </Route>
          <Route path="/login">
            <div>Navbar</div>
            <Login />
          </Route>
          <Route path="/register">
            <div>Navbar</div>
            <div>Hello From Register Page</div>
          </Route>
          <Route path="/resetpassword:resetToken">
            <div>Navbar</div>
            <div>Hello From Password Reset Page</div>
          </Route>
          <Route path="/dashboard">
            <div>Navbar</div>
            <div>Hello From Dashboard Page</div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export { Routing };
