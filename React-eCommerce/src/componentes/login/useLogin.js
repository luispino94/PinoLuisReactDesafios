import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc} from 'firebase/firestore';
import getFirestoreApp from '../../firebase/config';
import { useState } from "react";

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());


export const useLogin = () => {
    const [isRegister, setRegister] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function registerUser (email, password, rol){
    const infoUser = await createUserWithEmailAndPassword(auth, email, password,rol)
    .then ((userFirebase)=> {return userFirebase})
    .catch ((err)=>{
      if(err.code == 'auth/email-already-in-use'){
        setEmailError ('Email ya está en uso')
       }
       else if (err.code == 'auth/invalid-email'){
         setEmailError('Formato de email incorrecto')  
       }
       if (err.code == 'auth/weak-password'){
          setPasswordError('La contraseña debe tener al menos 6 carácteres')
       }
     })
    
    const docuRef = doc(firestore, `usuario/${infoUser.user.uid}`);
    setDoc(docuRef, {correo:email, rol:rol})
    clearErros();
    }
  
    const clearErros = () => {
      setEmailError('');
      setPasswordError('');
    }
    const handleLogin = () =>{
      clearErros();
      signInWithEmailAndPassword (auth,email,password)
      .catch ((err) => {
        if(err.code == 'auth/invalid-email'){
          setEmailError ('Email invalido')
         }
         else if (err.code == 'auth/user-disabled'){
           setEmailError('Email deshabilitado')  
         }
         else if(err.code == 'auth/user-not-found'){
            setEmailError('Usuario no encontrado')
         }
         if (err.code == 'auth/wrong-password'){
              setPasswordError('Contraseña incorrecta')
           }
       })
      .finally(()=> setLoading(true));
    }


  
    function submitHandler (e) {
      e.preventDefault ()
      const rol = e.target.elements.rol.value;
     if (isRegister){
       //registrar
      registerUser (email, password,rol);      
     } else {
      //login
      handleLogin(auth,email,password)
     }
    }


    return {
     isRegister,
     email,
     password,
     emailError,
     passwordError,
     loading,
     setRegister,
     setEmail,
     setPassword,
     setEmailError,
     setPasswordError,
     registerUser,
     handleLogin,
     submitHandler
    }
}