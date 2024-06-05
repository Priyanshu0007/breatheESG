
import { createContext, useContext, useState, useEffect} from "react"
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

import { toast } from "sonner";
type ContextProp = {
    children: React.ReactNode
} 

  
const firebaseConfig = {
    apiKey: "AIzaSyAgniHgiSfxJzUaK1465OS_GgnyJ5BipvY",
    authDomain: "food-app-b8b01.firebaseapp.com",
    databaseURL: "https://food-app-b8b01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "food-app-b8b01",
    storageBucket: "food-app-b8b01.appspot.com",
    messagingSenderId: "283644858432",
    appId: "1:283644858432:web:2703669f1d951a5a9dcfa5"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp)
const googleProvider= new GoogleAuthProvider()
export const FirebaseContext=createContext(null as unknown)

export const useFirebase = ()=> useContext(FirebaseContext)

export const FirebaseProvider=({ children }: ContextProp)=>{
    const [isLoaded, setIsloaded] = useState<boolean>(false);
    const [user,setUser]=useState<unknown>(null)
    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,user=>{
            setIsloaded(true);
            setUser(user ? user : null)
        })
    },[])
    const signupUserWithEmailAndPassword=(email: string,password: string)=>{
        createUserWithEmailAndPassword(firebaseAuth,email,password).then(()=>{toast.success("Signed up succesfully",{duration:3000})}).catch((err)=>toast.error(`Error : ${err.message.slice(22,-2)}`,{duration:3000}))
    }
    const signinUserWithEmailAndPassword=(email: string,password: string)=>{
        signInWithEmailAndPassword(firebaseAuth,email,password).then(()=>{toast.success("Signed up succesfully",{duration:3000})}).catch((err)=>toast.error(`Error : ${err.message.slice(22,-2)}`,{duration:3000}))
      }
    const signinWithGoogle=()=>{
        signInWithPopup(firebaseAuth,googleProvider)
    }
    const signOutUser=()=>{signOut(firebaseAuth)}

    return(
        <FirebaseContext.Provider value={{signupUserWithEmailAndPassword , signinUserWithEmailAndPassword,  user, isLoaded , signOutUser,signinWithGoogle}}>
            {children}
        </FirebaseContext.Provider>
    )
}