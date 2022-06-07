import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'

import './cartList.scss';


const CartList = () => {

    const {cartList, deleteItemtoCart,vaciarCarrito,precioTotal} = useCartContext();

    return (
      
        <>
        {cartList.map (producto => 
        <div className='list-container-grid' key={producto.id}> 
            <li className='li-list-buy'> ★ Nombre: {producto.name} ★ Precio:{producto.price} ★ Cantidad: {producto.cantidad}</li>
            <button className='btn-list-delete' onClick={()=> deleteItemtoCart (producto.id)}>x</button>
            </div>)}
          <p className='total-price'>Precio total: {precioTotal()}</p>
        <div className='btnCartlist-grid'>
        <Link to='/'>
              <button className='btn' 
               onClick={()=>console.log('Seguir comprando') } >
                  Seguir comprando
              </button>
          </Link>
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
        </>
        

    )
}

export default CartList