import React from 'react'
import { useState, useEffect } from 'react';
import './login.scss'

const LogIn = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [email, setEmail] = useState(()=>{
        try {
          const emailInSessionStorage = sessionStorage.getItem('emailSession');
          return emailInSessionStorage? JSON.parse (emailInSessionStorage) : [];
        } catch(error){
          return [];
        }
      });
     
      useEffect (()=>{
        sessionStorage.setItem('emailSession', JSON.stringify(email))
      }, [email]);
          
      const [password, setPassword] = useState(()=>{
        try {
          const passwordInSessionStorage = sessionStorage.getItem('passwordSession');
          return passwordInSessionStorage? JSON.parse (passwordInSessionStorage) : [];
        } catch(error){
          return [];
        }
      });
     
      useEffect (()=>{
        sessionStorage.setItem('passwordSession', JSON.stringify(password))
      }, [password]);

      /*Acá hago la función para validar los datos de */

      function validateForm() {

        return email.length > 0 && password.length > 0;
    
      }
    
      function handleSubmit(event) {
    
        event.preventDefault();
    
      }


    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="email" value={email} placeholder="Por favor ingrese su email" 
              onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="input-container">
              <label>Password </label>
              <input type="password" value={password}  placeholder="Por favor ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="button-container">
              <button
              type="submit" 
              disabled={!validateForm()}>Login</button>
            </div>
          </form>
        </div>
      );


    return (
    <div className="container-login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    
    );
}

export default LogIn