import React from 'react'

import {getAuth} from 'firebase/auth';
import getFirestoreApp from '../../firebase/config';
import { useCartContext } from '../Contexto/cartContext';
import { useState,useEffect } from 'react';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';

const auth = getAuth(getFirestoreApp());

import './database.scss';


const UsersData = () => {
    const {user} = useCartContext();
    const [lista, setLista] = useState([]);

   //Función es para renderizar la lista de usuarios
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

   //Función para eliminar Usuario de FireStore
  //  const deleteUser = async (id)=>{
  //   const db = getFirestore()
  //   await deleteDoc (doc(db,'usuario', id))
  //  }

  return (
    <article className='container-DataBase'>
      <h2 className='database-title'>Bienvenido a la Data Base de Vulkan</h2>
      
      <div className='container-list-db'>
        <h2 className='database-subtitle'>Lista de Usuarios Registrados</h2>
            {
              lista.map(list =>(
                <div className='card-users-db' key={list.id}>
                  <p className='correo-title'>Correo: {list.correo}</p>
                  <p className='correo-title'>Rol: {list.rol}</p>
                {/* <button className='btn-card-db' onClick={()=>deleteUser(list.id)}>Eliminar</button>
                <button className='btn-card-db'>Actualizar</button> */}
                <hr/> 
                </div>
              ))
            }
        </div>  
        <div className='container-order-db'>
          <h2>Acá iría las ordenes realizadas</h2>
          <h2>Acá iría las ordenes realizadas</h2>
          <h2>Acá iría las ordenes realizadas</h2>
          <h2>Acá iría las ordenes realizadas</h2>
              
        </div>

    </article>
  )
}

export default UsersData