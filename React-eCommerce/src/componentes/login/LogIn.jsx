import React, { useState } from 'react'

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc} from 'firebase/firestore';
import getFirestoreApp from '../../firebase/config';

import Home from '../Users/Home';

import './login.scss'
import { useCartContext } from '../Contexto/cartContext';

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());

const LogIn = () => {

  const [isRegister, setRegister] = useState(false);
  const {user} = useCartContext();
  
  async function registerUser (email, password, rol){
  const infoUser = await createUserWithEmailAndPassword(auth, email, password,rol)
  .then ((userFirebase)=> {
    return userFirebase
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
      <h1 className='titulo-login'>{isRegister ? "Regístrate" : "Iniciar sesión"}</h1>

      <form className='form-login-container' onSubmit={submitHandler}>
        <div className='form-login'>
        <label className='label-Form'>
          Correo electrónico:
        <input type="email" id="email" placeholder='Por favor complete el campo'/>
        </label>
        </div>

        <div className='form-login'>
        <label className='label-Form'>
          Contraseña:
          <input type="password" id="password" placeholder='Por favor complete el campo' />
        </label>
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