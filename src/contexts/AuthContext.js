import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';
const bcrypt = require('bcryptjs')
export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);


  function signup(email, nameFirst, nameLast, password) {
    const userDTO = {
      nameFirst: nameFirst,
      nameLast: nameLast,
      email: email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync())
    };

    axios.post("https://blueflannel-backend.herokuapp.com/user/createuser", userDTO).then(async(res) => {
       var user = await res.data;
      setCurrentUser({
        id: user.id,
        nameFirst: nameFirst,
        nameLast: nameLast,
        email: email,
      });
    });
    return currentUser;
  }

  function signin(email, nameFirst, nameLast, id) {
    setCurrentUser({
      id: id,
      nameFirst: nameFirst,
      nameLast: nameLast,
      email: email,
    });
  }

  function logout() {
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    signup,
    signin,
    logout
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
