import React from 'react'
import { useCartContext } from '../Contexto/cartContext';
import { Link } from 'react-router-dom';

import getFirestoreApp from '../../firebase/config';
import {getAuth, signOut} from 'firebase/auth';

import logouser from '../../imagenes/fondoimguser.png';

import './userstyle.scss';

const auth = getAuth(getFirestoreApp());

const UserView = () => {
  const {user} = useCartContext();
  return (
    <div className='container-user'>
        <div className='container-card-user'>
        <img className='img-userView' src ={logouser} alt ='#'/>
        <div className='titulo-User'>
        <h2 className='title-msg-user'>{`Hola ${user.email}`}</h2> 
        <p className='subtitulo-user'><b>Tu registro se realizó con éxito!</b></p>
        <p className='subtitulo-user'>Ya podés navegar por nuestro carrito y realizar las compras que quieras</p>
        </div>
      <div className="container-btn-user">
      <Link to='/'>
            <button className='btn-user'>
              Inicio
            </button>
        </Link>
      <button className='btn-user' onClick={() => signOut(auth)}> Cerrar sesión</button>
      </div>
      </div>  
    </div>
  )
}

export default UserView