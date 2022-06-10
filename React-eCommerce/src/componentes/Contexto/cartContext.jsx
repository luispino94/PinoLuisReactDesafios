import {createContext, useContext, useState, useEffect } from 'react'; 

import {onAuthStateChanged, getAuth} from 'firebase/auth';
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import getFirestoreApp from '../../firebase/config';

const auth = getAuth(getFirestoreApp());
const firestore = getFirestore(getFirestoreApp());

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext) 


const CartContexProvider = ({children}) => {
  //usuario LOGIN: 
  const [user, setUser] = useState(null);

    //FUNCIÓN ASYNCRONICA QUE BUSCA Y TRAE EL ROL Y USUARIO.
    async function getRol (uid){
      const docReference = doc (firestore,`usuario/${uid}`);
      const docCifrada = await getDoc ( docReference);
      const infoFinal = docCifrada.data().rol ;
      return infoFinal
    }
    function setUserWithFirebaseAndRol (usuarioFirebase){
      getRol(usuarioFirebase.uid).then ((rol)=>{
        const userData = {
          uid: usuarioFirebase.uid,
          email: usuarioFirebase.email,
          rol: rol,
        };
        setUser (userData);
      });
    }
    /*Función de firebase para observar si el usuario está o no*/
  
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        if (!user) {
          //Login
          setUserWithFirebaseAndRol(usuarioFirebase);
        }
      } else {
        setUser(null);
      }
    });



 const [cartList, setCarlist] = useState(()=>{
   try {
     const productInLocalStorage = localStorage.getItem('cartProducts');
     return productInLocalStorage? JSON.parse (productInLocalStorage) : [];
   } catch(error){
     return [];
   }
 });

 useEffect (()=>{
   localStorage.setItem ('cartProducts', JSON.stringify(cartList))
 }, [cartList]);

 //FUNCION AGREGAR AL CARRITO
 function addToCart(item){
    const inCart = cartList.findIndex(
      (productInCart) => productInCart.id === item.id);
    if (inCart !== -1){
      const oldCant = cartList[inCart].cantidad
      cartList[inCart].cantidad = oldCant + item.cantidad
      setCarlist ([...cartList])
        }else {
      setCarlist ([... cartList,
                  item])
          }
    }
  
  //FUNCIÓN BORRAR ITEM DEL CARRITO
    const deleteItemtoCart = (id) =>{
      setCarlist (cartList.filter(prod=> prod.id !== id))

    }
    //FUNCION CANTIDAD TOTAL
    const cantidadTotal = ()=> {
      return cartList.reduce ((contador,prod)=> contador += prod.cantidad,0)
    }

    //FUNCION PRECIO TOTAL
    const precioTotal = ()=>{
      return cartList.reduce ((contador,prod)=> contador + (prod.cantidad * prod.price),0)
    }
    //FUNCION VACIAR CARRITO 
    const vaciarCarrito = () =>{
      setCarlist ([])
    }

  return (
    <CartContext.Provider value ={{
        user,
        cartList,
        setUser,
        addToCart,
        deleteItemtoCart,
        vaciarCarrito,
        cantidadTotal,
        precioTotal,

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContexProvider