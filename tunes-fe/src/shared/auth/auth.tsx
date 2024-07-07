import { createContext, useContext, useState } from "react";

export type AuthDetails = {
  isLoggedIn: boolean;
  userName?: string;
  email?: string;
  location?: string;
  roles?: string[];
};

export type Auth = {
    authState: AuthDetails,
    userLogout: () => void,
    userLogin: (username: string, email: string, location?: string) => void
} 

const defaultValue: AuthDetails = {
  isLoggedIn: false,
};

export const AuthContext = createContext<Auth>(defaultValue);

function AuthProvider(props) {
  const [authState, setAuthState] = useState<AuthDetails>(defaultValue);

  function logout() {
    setAuthState({
      isLoggedIn: false,
    });
  }

  function login(userName: string, email: string, location?: string) {
    setAuthState({
      isLoggedIn: false,
      userName: userName,
      email: email,
      location: location,
    });
  }

  return (
    <AuthContext.Provider
      value={{ authState: authState, userLogout: logout, userLogin: login }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;


export function useAuth(){
    return useContext(AuthContext);
}