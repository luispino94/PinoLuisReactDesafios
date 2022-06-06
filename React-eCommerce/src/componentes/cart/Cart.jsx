import { useCartContext } from '../Contexto/cartContext'
import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import BtnOrden from '../CreateOrden/BtnOrden';
import './cart.scss'

const Cart = () => {
  const {cartList} = useCartContext();


  return (

    
    <div className='lista-resumen-compra'>
      { cartList.length === 0 ? (<BtnStock/>) 
      : 
        <CartList/>
      }

      {cartList.length !==0 &&  <BtnOrden/> 
      }

       </div>
  )
}

export default Cart