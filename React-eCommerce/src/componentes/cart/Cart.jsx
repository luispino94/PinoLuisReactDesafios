import { useCartContext } from '../Contexto/cartContext';

import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import BtnOrden from '../CreateOrden/BtnOrden';
import BtnInfo from '../intercambiabilidad/BtnInfo';

import './cart.scss';


const Cart = () => {
  const {cartList, user} = useCartContext();


  return (

    
    <div className='list-cart-container'>
      { (cartList.length === 0) ? (<BtnStock/>) 
      : 
        <CartList/>
        
      }

      { (cartList.length !==0 && user) ? <BtnOrden/>
          :
          (user && cartList.length== 0) ? `Hola, no tenés productos en tu carrito. Volve a home para ver nuestros artículos!`
          :
          <BtnInfo/>
      }


    </div>
  )
}

export default Cart