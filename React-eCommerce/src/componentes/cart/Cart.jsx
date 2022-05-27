import React from 'react'
import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import './cart.scss'

const Cart = () => {
  const {cartList, deleteItemtoCart,vaciarCarrito,addToCart} = useCartContext();

  

  return (

    <div className='lista-resumen-compra'>
      {cartList.map (producto =>  <li key={producto.id}> Nombre: {producto.name} - Precio:{producto.price} -Cantidad: {producto.quantity}</li>)}

      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to='/'>
            <button className='btn' 
             onClick={()=>console.log('Seguir comprando') } >
                Seguir comprando
            </button>
        </Link>
      <div>
        <button onClick={()=> addToCart({item}) }>Agregar</button>
        <button onClick={()=> deleteItemtoCart({item}) }>Eliminar</button>
      
      </div> 
    </div>

  )
}

export default Cart