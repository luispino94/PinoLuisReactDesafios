import {createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext) 


const CartContexProvider = ({children}) => {
 const [cartList, setCarlist] = useState([])

  return (
    <CartContext.Provider value ={{
        cartList,
    }} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContexProvider