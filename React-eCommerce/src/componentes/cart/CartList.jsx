import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import './cart.scss'


const CartList = () => {

    const {cartList, deleteItemtoCart,vaciarCarrito,precioTotal} = useCartContext();

    return (
      
        <>
        {cartList.map (producto => 
        <div className='lista-resumen-grid' key={producto.id}> 
            <li className='li-lista-compra'> ★ Nombre: {producto.name} ★ Precio:{producto.price} ★ Cantidad: {producto.cantidad}</li>
            <button className='btn-lista-delete' onClick={()=> deleteItemtoCart (producto.id)}>x</button>
            </div>)}
          <p className='precio-total'>Precio total: {precioTotal()}</p>
        <div className='btn-lista-resumen'>
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