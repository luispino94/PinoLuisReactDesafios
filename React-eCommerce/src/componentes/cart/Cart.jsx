import { useCartContext } from '../Contexto/cartContext';
import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import BtnOrden from '../CreateOrden/BtnOrden';

import './cart.scss';

const Cart = () => {
  const {cartList, user} = useCartContext();


  return (

    
    <div className='list-cart-container'>
      { cartList.length === 0 ? (<BtnStock/>) 
      : 
        <CartList/>
        
      }

      { user ? `Hola ${user.email} Para finalizar la compra primero completa los campos y luego click en Realizar compra`
      : 
      <h1>Por favor, primero registrate</h1>}

      {cartList.length !==0 &&  <BtnOrden/> 
      }


 
       </div>
  )
}

export default Cart