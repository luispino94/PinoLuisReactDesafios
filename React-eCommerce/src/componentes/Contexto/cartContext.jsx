import {createContext, useContext, useState, useEffect } from 'react'; 

import {onAuthStateChanged, getAuth} from 'firebase/auth';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import getFirestoreApp from '../../firebase/config';
import { useCart } from './useCart';

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

/*Uno de los componentes más importantes.Éste componente me permite englobar todo mi app en un contexto
donde exportolas funciones en cualquier otro componente donde le haga el destructurin. Esto permite
leer las propiedades de cartContext y de esa manera
mi app se puede comunicar de manera directa sin tener que estar pasando herencia de padre a hijo .*/

const CartContexProvider = ({children}) => {
  //usuario LOGIN: 
  const [user, setUser] = useState(null);
  //DESTRUCTURIN DE USECART
  const {cartList,addToCart,deleteItemtoCart,totalQuantity,cartClear,totalPrice} = useCart();

    //FUNCIÓN ASYNCRONICA QUE BUSCA , TRAE EL ROL Y USUARIO.
    async function getRol (uid){
      const docReference = doc (firestore,`usuario/${uid}`);
      const docUser = await getDoc ( docReference);
      const getInfo = docUser.data().rol ;
      return getInfo
    }
    function setUserWithFirebaseAndRol (userFirebases){
      getRol(userFirebases.uid).then ((rol)=>{
        const userData = {
          uid: userFirebases.uid,
          email: userFirebases.email,
          rol: rol,
        };
        setUser (userData);
      });
    }
    /*Función de firebase para observar si el usuario está o no*/
    useEffect(()=>{
    onAuthStateChanged(auth, (userFirebases) => {
      if (userFirebases) {
        if (!user) {
          //Login
          setUserWithFirebaseAndRol(userFirebases);
        }
      } else {
        setUser(null);
      }
    })
  }, [])


  return (
    <CartContext.Provider value ={{
        user,
        cartList,
        setUser,
        addToCart,
        deleteItemtoCart,
        totalQuantity,
        totalPrice,
        cartClear
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContexProvider