import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ supabase, ...props }) => {
  const [currentPath, setCurrentPath] = useState("/");
  const [previousPath, setPreviousPath] = useState("/");
  const [authState, setAuthState] = useState("SIGNED_IN");

  const handleAuthStateChange = supabase.auth.onAuthStateChange((event) => {
    setAuthState(event);
  });

  return (
    <AuthContext.Provider
      value={{
        currentPath,
        setCurrentPath,
        previousPath,
        setPreviousPath,
        authState,
        handleAuthStateChange,
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
