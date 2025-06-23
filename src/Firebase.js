
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCRKjKDuTtwGjzpoliffnjfg0m_woWsazc",
  authDomain: "netflix-clone-9d51b.firebaseapp.com",
  projectId: "netflix-clone-9d51b",
  storageBucket: "netflix-clone-9d51b.firebasestorage.app",
  messagingSenderId: "853440816467",
  appId: "1:853440816467:web:86e15c65dd58cb8e8e2da6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    
}

const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout  =()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout}

