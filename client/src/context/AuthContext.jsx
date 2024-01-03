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
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
