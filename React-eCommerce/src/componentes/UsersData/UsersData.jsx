import React from 'react'

import { useCartContext } from '../Contexto/cartContext';
import { useState,useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import './database.scss';

//Componente para mostrar los usuarios en pantalla
const UsersData = () => {
    const {user} = useCartContext();
    const [lista, setLista] = useState([]);

   //Función es para renderizar la lista de usuarios y mostrarla en pantalla.
   useEffect(()=>{
      const db = getFirestore()
      const getLista = async ()=>{
        try {
          const querySnapshot = await getDocs(collection(db,'usuario'))
          const docs = []
          querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id:doc.id}) 
          })
          setLista (docs)
        } catch (error) {
          console.log (error)
        }
      }
      getLista()
   },[lista]) 

  return (
    <article className='container-DataBase'>
      <h2 className='database-title'>{`Bienvenido ${user.email} a la Data Base de Vulkan`}</h2>
      
      <div className='container-list-db'>
        <h2 className='database-subtitle'>Lista de Usuarios Registrados</h2>
            {
              lista.map(list =>(
                <div className='card-users-db' key={list.id}>
                  <p className='correo-title'>Correo: {list.correo}</p>
                  <p className='correo-title'>Rol: {list.rol}</p>
                <button className='btn-card-db'>Eliminar</button>
                <button className='btn-card-db'>Actualizar</button>
                <hr/> 
                </div>
              ))
            }
        </div>  
        <div className='container-order-db'>
          <h2>Acá iría las ordenes realizadas</h2>    

        </div>

    </article>
  )
}

export default UsersData