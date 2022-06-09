import React from 'react'

import {getAuth} from 'firebase/auth';
import getFirestoreApp from '../../firebase/config';
import { useCartContext } from '../Contexto/cartContext';
const auth = getAuth(getFirestoreApp());

const userGetInfo = auth.currentUser;

const UsersInfo = () => {
    // const {user} = useCartContext();

    // if (userGetInfo !== null) {
    //     // The user object has basic properties such as display name, email, etc.
    //     const userEmail = user.email;
    //     const userRol = user.rol;
      
    //     // The user's ID, unique to the Firebase project. Do NOT use
    //     // this value to authenticate with your backend server, if
    //     // you have one. Use User.getToken() instead.

    //   }
    //  console.log (userEmail); 
    //  console.log (userRol); 
    //  console.log (userUid); 
  return (
    <div>UsersInfo</div>
  )
}

export default UsersInfo