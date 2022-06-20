import React from 'react'
import AdminView from './AdminView';
import UserView from './UserView';
import { useCartContext } from '../Contexto/cartContext'


//Componente para redirigir : si es admin, mostrar componente admin y si es usuario mostrar componente user

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