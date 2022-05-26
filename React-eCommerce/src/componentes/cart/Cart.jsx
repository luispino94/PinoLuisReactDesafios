import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import './cart.scss'

const Cart = () => {
  const {cartList, deleteItemtoCart,vaciarCarrito} = useCartContext();

  return (

    <div className='lista-resumen-compra'>
      {cartList.map (product =>  <li> Nombre: {product.name} - Precio:{product.price} -Cantidad: {product.item}</li>)}
      <button onClick={deleteItemtoCart}>Eliminar producto</button>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to='/'>
            <button className='btn' 
             onClick={()=>console.log('Seguir comprando') } >
                Seguir comprando
            </button>
        </Link>
    </div>

  )
}

export default Cart