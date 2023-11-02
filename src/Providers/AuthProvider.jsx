import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Config/firebase.config";

const AuthContext = createContext()
const AuthProvider = () => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const createUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const values = {}
    return (
        <AuthContext.Provider value={values}>
            <h1>AuthProvider</h1>
        </AuthContext.Provider>
    );
};

export default AuthProvider;