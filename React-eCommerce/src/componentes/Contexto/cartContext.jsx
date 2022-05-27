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
      const cantidadVieja = cartList[inCart].quantity
      cartList[inCart].quantity += cantidadVieja
      setCarlist ([...cartList])
        }else {
      setCarlist ([... cartList,
                  item])
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
        setCarlist(
          cartList.map((productInCart)=>{
         if (productInCart.id === producto.id){
           return {...inCart, amount: inCart.amount -1};
         } else return productInCart;
      })
        );
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