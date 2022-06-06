import React from 'react'
import { useCartContext } from '../Contexto/cartContext'
import AdminView from './AdminView';
import UserView from './UserView';
import getFirestoreApp from '../../firebase/config';
import {getAuth, signOut} from 'firebase/auth';

const auth = getAuth(getFirestoreApp());

const Home = () => {
  const {user} = useCartContext();
    return (
    <div>
          {user.rol === "admin" ? <AdminView /> 
          :           
          <UserView />}
          
          <button onClick={() => signOut(auth)}> Cerrar sesión</button>
    </div>
  )
}

export default Home