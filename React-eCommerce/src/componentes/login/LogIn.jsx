import React, { useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc} from 'firebase/firestore';
import getFirestoreApp from '../../firebase/config';

import Home from '../Users/Home';
import logoView from '../../imagenes/fondologin.png';

import './login.scss'
import { useCartContext } from '../Contexto/cartContext';
import { LoadingComponent } from '../LoadingComp/LoadingComponent';

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());

const LogIn = () => {

  const [isRegister, setRegister] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false)
  const {user} = useCartContext();
  
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
      switch(err.code){
      case 'auth/invalid-email':
      case 'auth/user-disabled':
      case 'auth/user-not-found':
      setEmailError(err.message);
      break;
      case 'auth/wrong-password':
        setPasswordError(err.message);
        break
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
 
    return (
      <>
      {user ? <Home />
      : 
      <div className='container-login'>
      <div className='container-img-login'>
      <img className='img-loginView' src ={logoView} alt ='#'/>
      </div>  
      <h1 className='titulo-login'>{isRegister ? "Regístrate" : "Iniciar sesión"}</h1>
      <form className='form-login-container' onSubmit={submitHandler}>
        <div className='form-login'>
        <label className='label-Form'>
          Correo electrónico:
        <input type="text" value={email} placeholder='Por favor complete el campo'
        onChange={(e)=> setEmail(e.target.value)}
        required/>
        </label>
        <p className='errorMsg'>{emailError}</p>
        </div>

        <div className='form-login'>
        <label className='label-Form'>
          Contraseña:
          <input type="password" value= {password} placeholder='Por favor complete el campo' 
        onChange={(e)=> setPassword(e.target.value)}
         required/>
        <p className='errorMsg'>{passwordError}</p>
        </label>
       
        </div>

        <div className='form-login'>
        <label className='label-form'>
          Rol:
          <select id='rol'>
            <option  value='admin'>Administrador</option>
            <option  value='user' >Usuario</option>
          </select>
        </label>
        </div>
        
        <input className='input-submit-form'
          type="submit"
          value={isRegister ? "Registrar" : "Ingresar"}
        />
      </form>
      <span className='spanLogin-Register' onClick={() => setRegister(!isRegister)}>
        {isRegister ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </span >
       {loading && <LoadingComponent/>}
      </div>

    }
    </>
    );
}

export default LogIn