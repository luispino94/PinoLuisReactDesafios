import { useCartContext } from '../Contexto/cartContext'
import BtnStock from '../intercambiabilidad/btnStock';
import CartList from './CartList';
import './cart.scss'
import LogIn from '../login/LogIn';

const Cart = () => {
  const {cartList} = useCartContext();


  return (

    
    <div className='lista-resumen-compra'>
      { cartList.length === 0 ? (<BtnStock/>) 
      : 
        <CartList/>
      }
      {cartList.length !== 0 &&
       <LogIn></LogIn>}

       </div>
  )
}

export default Cart