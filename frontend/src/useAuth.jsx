import { useContext } from "react";
import { context } from "./AuthContext";

const useAuth = () => {
  // useContext(context);
  return useContext(context);
};

export default useAuth;
