import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goPermission } from "../functions/utilsFunctions";
import { UserContext } from "../routes/Routing";

const Dashboard = () => {
  const { state, dispatch } = useContext(UserContext);
  const he = goPermission();
  if (he) {
    dispatch({ type: "USER", payload: true });
  }
  // const { state } = useContext(UserContext);
  const history = useHistory();
  console.log(state);
  if (!state) {
    history.push("/login");
  }
  return <div>Hello From Dashboard</div>;
};

export default Dashboard;
