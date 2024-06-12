import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
// import axios from "axios";
import useAxiosCommon from '../hooks/useAxiosCommon'
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const axiosCommon = useAxiosCommon()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    // await axiosCommon.post('/user', user)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    setLoading(true);
    // await axios.get(`${import.meta.env.VITE_API_URL}/logout`);
    return signOut(auth);
  };

  const updateUserProfile = (fullName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
    });
  };

  // Get token from server
  // const getToken = async (email) => {
  //   const { data } = await axios.post(
  //     `${import.meta.env.VITE_API_URL}/jwt`,
  //     { email },
  //     { withCredentials: true }
  //   );
  //   return data;
  // };


  // onAuthStateChange
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // axiosCommon.post('/user', user)
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosCommon.post('/jwt', userInfo)
            .then(res => {
                if (res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                }
            })
    }
    else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        localStorage.removeItem('access-token');
        setLoading(false);
    }
    
});
    return () => {
      unSubscribe();
    };
  }, [axiosCommon]);



  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
