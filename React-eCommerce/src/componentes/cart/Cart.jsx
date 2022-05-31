import { addDoc, collection, documentId, getFirestore, where, writeBatch, query, getDocs } from 'firebase/firestore';
import { Link} from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext'
import BtnStock from '../intercambiabilidad/btnStock';
import './cart.scss'

const Cart = () => {
  const {cartList, deleteItemtoCart,vaciarCarrito,precioTotal} = useCartContext();

//Funcion para crear orden e actualizar stock
async function createOrden (){
  let orden = {}
  //datos hardcodeados
  orden.buyer = {name:'Luis', email:'luispino@gmail.com', number:'1122592717'}
  orden.total = precioTotal()
  //acá se están pisando los datos creando un nuevo array
  orden.items = cartList.map (cartItem =>{
    const id = cartItem.id
    const name = cartItem.name
    const price = cartItem.price * cartItem.cantidad
    return { id, name, price}
  } )

  //Acá se crea la orden
  const db = getFirestore()
  const queryOrden = collection(db,'orders')
  addDoc (queryOrden, orden)
  .then (resp =>console.log (resp))
  .catch ((err)=>console.log (err))
  .finally(vaciarCarrito)


  //Acá se actualiza el stock de los items
    const dbStock = getFirestore()

    const queryCollectionStock = collection (dbStock, 'items')

    const queryActualizarStock  = await query(
      queryCollectionStock,
    where (documentId(), 'in', cartList.map(cart=> cart.id)) 
    )//'in' es un operador que me permite preguntar si dentro de lo que está declarado en el where está o no
    const batch = writeBatch(dbStock)
    
    await getDocs (queryActualizarStock)
    .then (resp=> resp.docs.forEach(resp => batch.update(resp.ref,{  
      stock: resp.data().stock - cartList.find (item => item.id === resp.id).cantidad 
    })))
    .finally(()=>console.log('stock actualizado'))

    batch.commit()
  }
    /*getDocs tiene un array de los que cumplen la condición del where ,lo recorro con el forEach y utilizo el batch.update para actualizar 
       con update.data (). stock extraigo el stock del nuevo listado y el cartfind de las cantidades con respecto a ese id 
      y resta el stock original que extrae el firebase y la cantidad que tengo en mi carrito*/  


  return (

    
    <div className='lista-resumen-compra'>
      { cartList.length === 0 ? (<BtnStock/>) 
      : 
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
        <button onClick={createOrden}>Realizar orden</button>
      </div>
      </>
      }
    </div>

  )
}

export default Cart