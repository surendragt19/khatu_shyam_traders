import axios from 'axios';
import { useState, useEffect, useContext, createContext } from 'react';

// Create a context with a default value
const AuthContext = createContext(null);

// AuthProvider component
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ''
    });

    //default axios header 
 
        axios.defaults.headers.common["Authorization"]=auth?.token;


    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data){
            const parseData=JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token,
            })
        }
    },[])
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
