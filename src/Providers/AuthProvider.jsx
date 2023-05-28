import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


const auth = getAuth(app);



 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const [user, setUser]= useState()
const [loading, setLoading]= useState(true)

useEffect(()=>{
 const unsubscribe =  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
    console.log('current user', currentUser)
    setLoading(false)
  })
  return ()=>{
    unsubscribe()
  }
},[])



const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
}

const login = (email, password)=> {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

const logout = ()=>{
  setLoading(true)
  return signOut(auth)

}







const authInfo = {
  user,
  loading,
  createUser,
  login,
  logout

}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;