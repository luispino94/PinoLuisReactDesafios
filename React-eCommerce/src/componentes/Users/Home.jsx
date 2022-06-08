import React from 'react'
import AdminView from './AdminView';
import UserView from './UserView';
import { useCartContext } from '../Contexto/cartContext'


const Home = () => {
  const {user} = useCartContext();
    return (
    <>
          {user.rol === "admin" ? <AdminView /> 
          :           
          <UserView />}
    </>
  )
}

export default Home