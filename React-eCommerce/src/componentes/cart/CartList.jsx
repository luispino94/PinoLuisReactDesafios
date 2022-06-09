import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import './cartList.scss';


const CartList = () => {

    const {cartList, deleteItemtoCart,vaciarCarrito,precioTotal} = useCartContext();

    return (
      
        <div>
        {cartList.map (producto => 
        <div className='list-container-grid' key={producto.id}> 
            <li className='li-list-buy'>< img className='img-cartlist' src ={producto.skin} /> ★ Nombre: {producto.name} ★ Precio:{producto.price} ★ Cantidad: {producto.cantidad}</li>
            <button className='btn-list-delete' onClick={()=> deleteItemtoCart (producto.id)}>x</button>
            </div>)}
        <div className='container-total-btn-list'>    
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
        </div>
        </div>
        

    )
}

export default CartList