import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {getFirestore, doc, setDoc, getDoc} from 'firebase/firestore';

import getFirestoreApp from '../../firebase/config';
const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp())

import './login.scss'
import { useCartContext } from '../Contexto/cartContext';
import Home from '../Users/Home';

//agregando prueba

const LogIn = () => {

  const [isRegister, setRegister] = useState(false);
  const {user, setUser} = useCartContext()

  async function getRol (uid){
    const docReference = doc (firestore,`usuario/${uid}`);
    const docCifrada = await getDoc ( docReference);
    const infoFinal = docCifrada.data().rol ;
    return infoFinal
  }
  function setUserWithFirebaseAndRol (usuarioFirebase){
    getRol(usuarioFirebase.uid).then ((rol)=>{
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser (userData);
      console.log ('User data Final', userData)
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }

  });
  
  async function registrarUsuario (email, password, rol){
  const infoUser = await createUserWithEmailAndPassword(auth, email, password,rol)
  .then ((userFirebase)=> {
    return userFirebase
  });
   const docuRef = doc(firestore, `usuario/${infoUser.user.uid}`);
   setDoc(docuRef, {correo:email, rol:rol})
  }

  function submitHandler (e) {
    e.preventDefault ()
   const email = e.target.elements.email.value;
   const password = e.target.elements.password.value;
   const rol = e.target.elements.rol.value;
   console.log ('submit', email, password, rol);

   if (isRegister){
     //registrar
    registrarUsuario (email, password, rol);
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
      <h1>{isRegister ? "Regístrate" : "Inicia sesión"}</h1>

      <form onSubmit={submitHandler}>
        <label>
          Correo electrónico:
          <input type="email" id="email" />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegister ? "Registrar" : "Iniciar sesión"}
        />
      </form>

      <button onClick={() => setRegister(!isRegister)}>
        {isRegister ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
      </div>
    }
    </>
    );
}

export default LogIn