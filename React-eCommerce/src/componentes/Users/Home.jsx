import React from 'react'
import { useCartContext } from '../Contexto/cartContext'
import AdminView from './AdminView';
import UserView from './UserView';


const Home = () => {
  const {user} = useCartContext();
    return (
    <div>
          {user.rol === "admin" ? <AdminView /> : <UserView />}
    </div>
  )
}

export default Home