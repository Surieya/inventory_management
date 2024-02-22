import { createContext, useState, useEffect } from "react";

export const context = createContext({});
const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState({});
  console.log(auth);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth"));
    if (data) {
      setAuth(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
    return () => localStorage.removeItem("auth");
  }, [auth]);

  return (
    <context.Provider value={{ auth, setAuth }}>{children}</context.Provider>
  );
};

export default AuthContext;
