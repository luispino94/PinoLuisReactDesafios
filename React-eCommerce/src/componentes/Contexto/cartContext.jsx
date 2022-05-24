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
 const addToCart = (producto)=>{
    const inCart = cartList.find(
      (productInCart) => productInCart === producto.id);
    if (inCart){
      setCarlist (
        cartList.map((productInCart)=>{
          if (productInCart.id === producto.id){
            return {...inCart , amount: inCart.amount +1}
          } else return productInCart;
        })
      );
    } else {
      setCarlist ([... cartList,{...producto, amount:1}])
    }
    }
  
  //FUNCIÓN BORRAR ITEM DEL CARRITO
    const deleteItemtoCart = (producto) =>{
      const inCart = cartList.find(
        (productInCart) => productInCart.id === producto.id);
   
    if (inCart.amount ===1){
      setCarlist (
        cartList.filter ((productInCart)=> productInCart.id !== producto.id)
      );
    } else{
        setCarlist ((productInCart)=>{
         if (productInCart.id === producto.id){
           return {...inCart, amount: inCart.amount -1};
         } else return productInCart;
      });
    };


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
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContexProvider