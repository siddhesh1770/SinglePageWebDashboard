import { UserContext } from "../App";
import { useContext } from "react";

const logout = () => {
  const { state, dispatch } = useContext(UserContext);
  // add this line to successful logout // dispatch({type: "USER", payload:false})
};

export default logout;
