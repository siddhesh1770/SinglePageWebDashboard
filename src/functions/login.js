import { UserContext } from "../App";
import { useContext } from "react";
const login = () => {
  const { state, dispatch } = useContext(UserContext);
  // add this line to successful login // dispatch({type: "USER", payload:true})
};

export default login;
