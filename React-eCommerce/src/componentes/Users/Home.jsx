import React from 'react'
import AdminView from './AdminView';
import UserView from './UserView';
import { useCartContext } from '../Contexto/cartContext'


const Home = () => {
  const {user} = useCartContext();
    return (
    <div>
          {user.rol === "admin" ? <AdminView /> 
          :           
          <UserView />}
    </div>
  )
}

export default Home