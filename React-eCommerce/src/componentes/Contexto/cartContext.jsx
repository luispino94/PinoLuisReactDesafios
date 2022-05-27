import {createContext, useContext, useState, useEffect } from 'react'; 

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext) 


const CartContexProvider = ({children}) => {
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
      const cantidadVieja = cartList[inCart].cantidad
      cartList[inCart].cantidad += cantidadVieja
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
        cartList,
        addToCart,
        deleteItemtoCart,
        vaciarCarrito,
        cantidadTotal,
        precioTotal
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContexProvider