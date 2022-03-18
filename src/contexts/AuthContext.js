import React, { useContext, useState } from "react";
import axios from 'axios';
const bcrypt = require('bcryptjs')
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
      password: bcrypt.hashSync(password, bcrypt.genSaltSync())
    };

    axios.post("http://localhost:80/user/createuser", userDTO).then((res) => {
      console.log("Student added successfully!" + userDTO);
      setCurrentUser({
        nameFirst: nameFirst,
        nameLast: nameLast,
        email: email,
      });
    });
    return currentUser;
  }

  function signin(email, nameFirst, nameLast) {
    setCurrentUser({
      nameFirst: nameFirst,
      nameLast: nameLast,
      email: email,
    });

  }

  const value = {
    currentUser,
    signup,
    signin
  };
  console.log(value)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
