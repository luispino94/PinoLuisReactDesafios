import React, { useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc} from 'firebase/firestore';
import getFirestoreApp from '../../firebase/config';

import Home from '../Users/Home';
import logoView from '../../imagenes/fondologin.png';

import './login.scss'
import { useCartContext } from '../Contexto/cartContext';

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());

const LogIn = () => {

  const [isRegister, setRegister] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {user} = useCartContext();
  
  async function registerUser (email, password, rol){
  const infoUser = await createUserWithEmailAndPassword(auth, email, password,rol)
  .then ((userFirebase)=> {
    return userFirebase
  })  
  .catch (err=>{
    switch(err.code){
    case 'auth/email-already-in-use':
    case 'auth/invalid-email':
      setEmailError(err.message);
    break;
    case 'auth/weak-password':
      setPasswordError(err.message);
    break;
    }
  })
    const docuRef = doc(firestore, `usuario/${infoUser.user.uid}`);
    setDoc(docuRef, {correo:email, rol:rol})
  }

  function submitHandler (e) {
    e.preventDefault ()
   const email = e.target.elements.email.value;
   const password = e.target.elements.password.value;
   const rol = e.target.elements.rol.value;
   if (isRegister){
     //registrar
    registerUser (email, password, rol);
   } else {
    //login
    signInWithEmailAndPassword (auth,email,password)
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
        <input type="email" id="email" placeholder='Por favor complete el campo'/>
        </label>
        <p className='errorMsg'>{emailError}</p>
        </div>

        <div className='form-login'>
        <label className='label-Form'>
          Contraseña:
          <input type="password" id="password" placeholder='Por favor complete el campo' />
        </label>
        <p className='errorMsg'>{passwordError}</p>
        </div>

        <div className='form-login'>
        <label className='label-form'>
          Rol:
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
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
      </div>
    }
    </>
    );
}

export default LogIn