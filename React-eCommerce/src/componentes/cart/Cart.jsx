import { useCartContext } from '../Contexto/cartContext';

import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import CreateOrder from '../CreateOrden/CreateOrder';
import BtnInfo from '../intercambiabilidad/BtnInfo';

import './cart.scss';



const Cart = () => {
  const {cartList, user} = useCartContext();


  return (
    /*/Div donde si la longitud del carrito es igual a 0, que muestre btnstock que dice que no hay nada en el carrito, 
    si hay productos ,mostrame la lista. Y , si hay productos pero no está logeado entonces que primero que se registre
    y si tiene productos en el stock y está logueado entonces ahí sí se muestra el formulario.*/
    
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