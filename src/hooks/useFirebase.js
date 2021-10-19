import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                console.log("on user change", user)
                setUser(user);




            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            setErrorMessage(error.message)
        })
            .finally(() => setIsLoading(false));

    }
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }

    return {
        user,
        errorMessage,
        isLoading,
        setIsLoading,
        updateName,
        setErrorMessage,
        createUser,
        signInWithEmailPassword,
        signInWithGoogle,
        logOut
    }

}

export default useFirebase;