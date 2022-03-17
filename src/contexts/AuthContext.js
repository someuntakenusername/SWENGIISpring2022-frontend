import React, { useContext, useState } from "react";
import axios from 'axios';
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, nameFirst, nameLast, password) {
    const userDTO = {
      nameFirst: nameFirst,
      nameLast: nameLast,
      email: email,
      password: password
    };

    axios.post("http://localhost:80/user/createuser", userDTO).then((res) => {
      console.log("Student added successfully!" + userDTO);
      setCurrentUser({
        nameFirst: nameFirst,
        nameLast: nameLast,
        email: email,
      });
    });
  }

  const value = {
    currentUser,
    signup,
  };
  console.log(value)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
