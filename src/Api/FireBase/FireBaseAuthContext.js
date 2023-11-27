import { createContext, useContext, useEffect, useState } from 'react';
import { signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

import { auth, provider } from '../../init_firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const [firebaseUser, setFirebaseUser] = useState({});
  const [userAuth, setUserAuth] = useState(
    false || window.localStorage.getItem('auth') === 'true'
  );
  // const [token, setToken] = useState('');

  // !! ------> LOG OUT <-----}
  const logout = () => {
    setUserAuth(false);
    return signOut(auth);
  };

  const signWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      if (data) {
        setUserAuth(true);
        console.log(data);
        window.localStorage.setItem('auth', 'true');
      }
    });
  };
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setFirebaseUser(currentUser);
  //     if (currentUser) {
  //       setUserAuth(true);
  //       window.localStorage.setItem('auth', 'true');
  //       currentUser.getIdToken().then((token) => {
  //         setToken(token);
  //       });
  //     } else {
  //       setUserAuth(false);
  //     }
  //   });
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <UserContext.Provider
      value={{
        firebaseUser,
        userAuth,
        logout,
        signWithGoogle,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(UserContext);
};
