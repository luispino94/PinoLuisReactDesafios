import { useState, useEffect } from "react";

/*JS donde se crean las funciones para exportarlas al cartcontext y de ahí a toda la app.*/

export const useCart = () =>{

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
           const oldCant = cartList[inCart].quantity
           cartList[inCart].quantity = oldCant + item.quantity
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
         const totalQuantity = ()=> {
           return cartList.reduce ((count,prod)=> count += prod.quantity,0)
         }
     
         //FUNCION PRECIO TOTAL
         const totalPrice = ()=>{
           return cartList.reduce ((count,prod)=> count + (prod.quantity * prod.price),0)
         }
         //FUNCION VACIAR CARRITO 
         const cartClear = () =>{
           setCarlist ([])
         }
    
    
    return  {
        cartList,
        addToCart,
        deleteItemtoCart,
        totalQuantity,
        totalPrice,
        cartClear
    }
}