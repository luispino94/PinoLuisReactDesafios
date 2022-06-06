import React from 'react'
import getFirestoreApp from '../../firebase/config';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserXmark} from '@fortawesome/free-solid-svg-icons';
import { getAuth, signOut} from 'firebase/auth';
import { useCartContext } from '../Contexto/cartContext';

const auth = getAuth(getFirestoreApp());


const BtnLogOut = () => {
 const {user, setUser} = useCartContext();

  const handleLogout =() =>{
    signOut(auth).then(() => {
      setUser (null)
    }).catch((error) => {
      console.log ('algo fallo')
    });
   }

  return (
  
    <span onClick={handleLogout}><FontAwesomeIcon icon={faUserXmark} className='icono-logo'/></span>
  )
}

export default BtnLogOut