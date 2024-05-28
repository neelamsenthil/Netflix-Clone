import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDi_1-lyBRjf4ZVyyeQ4xbTK4RogicpxBE",
  authDomain: "netflix-clone-10690.firebaseapp.com",
  projectId: "netflix-clone-10690",
  storageBucket: "netflix-clone-10690.appspot.com",
  messagingSenderId: "397513669287",
  appId: "1:397513669287:web:d718164588b41171437982"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password) => {
    try{
      const res =  await createUserWithEmailAndPassword(auth,email,password)
      const user = res.user
      await addDoc(collection(db,"user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });

    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }


}

const login = async (email,password) => {
    try{
       await signInWithEmailAndPassword(auth, email, password)

    } catch (error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};