import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
// const auth = getAuth();


import './login.scss'

const LogIn = () => {
  const [registro, setRegistro]= useState(false)

  const handlerSubmit = async (e)=>{
    e.preventDefault ()
    const correo = e.target.email.value;
    const password = e.target.password.value;
    
    if (registro){
      await createUserWithEmailAndPassword(auth, correo, password)
      console.log ("no existe este usuario")
    }
    else {
      await signInWithEmailAndPassword(auth, correo, password )
      console.log ("usuario ya creado")
    }
  } 

    return (

    <div className="form">
      <h1>Se estan realizando pruebas en Login</h1>
      <form onSubmit={handlerSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="email"  placeholder="Por favor ingrese su email" id='email' required/>
        </div>

        <div className="input-container">
          <label>Password </label>
          <input type="password" placeholder="Por favor ingrese su contraseña" id='password' required/>
        </div>
        <div className="button-container">
          <button
          type="submit" 
          onClick={()=>setRegistro(!registro)}>Login</button>
        </div>
      </form>
    </div>
    );
}

export default LogIn