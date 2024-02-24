import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage.js";
import DatabaseAPIService from "@/api/services/DatabaseAPIService.js";

//create a context on global scope
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigation = useNavigate();

  //placeholder function to authenticate user
  const login = async (data) => {
    setUser(data);
    navigation("/home");
  };

  //placeholder function to sign out user
  const logout = () => {
    setUser(null);
    navigation("/", { replace: true });
  };

  //Login with Google
  const googleAuthLogin = async (data) => {
    //check if user exist
    const response = await DatabaseAPIService.getByGmail(data.email);

    // If user does not exist, create new user, check for gmail first
    if (!response.data) {
      const userData = {
        userName: data.name,
        email: data.email,
      };
      const createResponse = await DatabaseAPIService.addUser(userData);
      setUser(createResponse.data);
      navigation("/home");
    } else {
      //If user exist, just log in
      setUser(response.data);
      navigation("/home");
    }
  };

  //useMemo to improve performance
  const value = useMemo(
    () => ({
      user,
      setUser,
      login,
      logout,
      googleAuthLogin,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//wrap useContext in useAuth as a custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
