

import Home from '../Users/Home';
import logoView from '../../imagenes/fondologin.png';

import './login.scss'
import { useCartContext } from '../Contexto/cartContext';
import { LoadingComponent } from '../LoadingComp/LoadingComponent';
import {useLogin} from "./useLogin";



const LogIn = () => {

  const { 
    isRegister,
    email,
    password,
    emailError,
    passwordError,
    loading,
    setRegister,
    setEmail,
    setPassword,
    submitHandler} = useLogin();

  const {user} = useCartContext();
 
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