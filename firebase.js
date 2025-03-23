
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB0-PQsHFRnvcM_PaHYpDMNP4ivPDsqLMw",
  authDomain: "netflix-clone-6806c.firebaseapp.com",
  projectId: "netflix-clone-6806c",
  storageBucket: "netflix-clone-6806c.firebasestorage.app",
  messagingSenderId: "533265516574",
  appId: "1:533265516574:web:7a87a8dbf7633b5b75c60f",
  measurementId: "G-KRDSPXBVM9"
};

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }catch(err) {
        console.log(err)
        toast.error(capitalizeFirstLetter(err.code.split('/')[1].split('/').join(" ")));
    }
}



const login = async (email,password) => {
    try{
       await signInWithEmailAndPassword(auth, email,password);

    }catch (err) {
        console.log(err);
        toast.error(capitalizeFirstLetter(err.code.split('/')[1].split('/').join(" ")));
    }
}


const logout = () => {
    signOut(auth);
}


export {auth, db, login, signup, logout}