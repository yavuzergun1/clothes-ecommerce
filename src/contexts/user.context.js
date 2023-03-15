import { createContext, useState, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getUserData,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState();
  const value = { currentUser, setCurrentUser, userData, setUserData };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // Eğer user gelirse bu user yeni mi değil mi diye kontrol edip öyle atamak için createUserDocumentFromAuth'u çalıştırır
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // eğer user yoksa da direk curretn user'ı atar
      setCurrentUser(user);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const getGoogleUserData = async () => {
        const user = await getUserData(currentUser.uid);
        setUserData(user);
      
    };
    currentUser &&
    getGoogleUserData();
  }, [currentUser]);
  console.log("context user data",userData);
  console.log("Current User", currentUser);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
