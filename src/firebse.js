import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth/web-extension";



const firebaseConfig = {
  apiKey: "AIzaSyCIU-N6otUAre0VyLZWoFtHIUPO-ygKux8",
  authDomain: "netflix-clone-ebbbe.firebaseapp.com",
  projectId: "netflix-clone-ebbbe",
  storageBucket: "netflix-clone-ebbbe.firebasestorage.app",
  messagingSenderId: "164454943811",
  appId: "1:164454943811:web:fb459bd480a05733fc18f6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);


const signUp = async(name,email,password)=>{
    try{
       const res= await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        autProvider: "local",
        email,

       });
    
    } catch(error){

        console.log(error);
        alert(error);

    }

}

const login = async(email,password)=>{

  try{

    await signInWithEmailAndPassword(auth, email,password);
  }

  catch(error){
    console.log(error);
    alert(error);
  }

}

const logout = ()=>{
  signOut(auth);
}


export {auth , db,login,signUp, logout};