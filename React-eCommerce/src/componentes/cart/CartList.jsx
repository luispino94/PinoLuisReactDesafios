import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import './cartList.scss';

/*Componente donde se hace el destructuring de useCartContext y me permite, extraer los items del cart 
haciendo un detalle de la compra antes de finalizar la compra.*/
const CartList = () => {

    const {cartList, deleteItemtoCart,cartClear,totalPrice} = useCartContext();

    return (
      //DETALLE DE LA COMPRA
    <div>
        {cartList.map (product => 
        <div className='list-container-grid' key={product.id}> 
            <li className='li-list-buy'>< img className='img-cartlist' src ={product.skin} /> ★ Nombre: {product.name} ★ Precio:{product.price} ★ Cantidad: {product.quantity}</li>
            <button className='btn-list-delete' onClick={()=> deleteItemtoCart (product.id)}>x</button>
            </div>)}
            <div className='container-total-btn-list'>    
                <p className='total-price'>Precio total: {totalPrice()}</p>
                <div className='btnCartlist-grid'>
                <Link to='/'>
                    <button className='btn'>
                        Seguir comprando
                    </button>
                </Link>
                <button onClick={cartClear}>Vaciar Carrito</button>
            </div>   
        </div>
    </div>
        

    )
}

export default CartList