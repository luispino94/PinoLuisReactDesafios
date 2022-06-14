import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext';

import getFirestoreApp from '../../firebase/config';
import {getAuth, signOut} from 'firebase/auth';

import logoadmin from '../../imagenes/fondoadminuser.png';

import './adminstyle.scss';

const auth = getAuth(getFirestoreApp());


const AdminView = () => {
  const {user} = useCartContext();
  return (
    <div className='container-admin'>
      <div className='container-card-admin'>
        <img className='img-adminView' src ={logoadmin} alt ='#'/> 
       <div className='titulo-User'>
        <h2 className='title-msg-admin'>{`Hola Admin : ${user.email} tu rol es de ${user.rol}`}</h2> 
        <p className='subtitulo-user'><b>Tu registro se realizó con éxito!</b></p>
        <p className='subtitulo-user'>Haz click en comenzar para ver todo lo que podés hacer como Admin !</p>
        </div>
      <div className="container-btn-user">
      <Link to='/usersdata'>
            <button className='btn-admin'>
              Click
            </button>
        </Link>
      <button className='btn-admin' onClick={() => signOut(auth)}> Cerrar sesión</button>
      </div> 
      </div> 
    </div>
  )
}

export default AdminView