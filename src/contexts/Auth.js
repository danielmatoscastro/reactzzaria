import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'services/firebase';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });

  const login = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };

  const logout = () => {
    firebase.auth().signOut().then(() => {
      setUserInfo({ user: null, isUserLoggedIn: false });
    });
  };

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userInfo,
      setUserInfo,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider };
