import { useCartContext } from '../Contexto/cartContext';

import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import CreateOrder from '../CreateOrden/CreateOrder';
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

      { (cartList.length !==0 && user) ? <CreateOrder/>
          :
          (user && cartList.length== 0) ? ``
          :
          <BtnInfo/>
      }


    </div>
  )
}

export default Cart