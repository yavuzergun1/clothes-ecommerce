import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangeListener((user) => {
      user && createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });
  });
  console.log("user", currentUser);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
