import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const localData = localStorage.getItem("token");
    return localData ? true : false;
  });

  const [token, setToken] = useState(() => {
    const localData = localStorage.getItem("token");
    return localData ? localData : null;
  });

  const logout = () => {
    setAuth(false);
    localStorage.removeItem("token");
  };
  const login = (token) => {
    setAuth(true);
    setToken(token);
    localStorage.setItem("token", token);
  };
  return (
    <AuthContext.Provider
      value={{
        auth,
        token,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
