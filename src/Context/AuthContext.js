import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';


export const authContext = createContext();
export const useAuth = () =>{
    const context = useContext(authContext);
    return context
}

export default function AuthProvider({children}){

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)

    const signup = (email, password) =>createUserWithEmailAndPassword(auth, email, password);
    
    const login = async (email,password) =>{
       signInWithEmailAndPassword(auth, email, password);
    }

    const logout = ()=>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoader(false)
        });

        return ()=>unsubscribe()
    },[])

    return( 
        <authContext.Provider value={{signup, login, user, logout, loader}}>
            {children}
        </authContext.Provider>
    )
}