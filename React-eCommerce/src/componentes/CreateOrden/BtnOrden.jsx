import { addDoc, collection, documentId, getFirestore, where, writeBatch, query, getDocs } from 'firebase/firestore';
import { useCartContext } from '../Contexto/cartContext';
import { useForm } from './useForm';
import { useState } from 'react';
import { LoadingComponent } from '../LoadingComp/LoadingComponent';

import './btnorden.scss';

export default function BtnOrden () {
 const {cartList, vaciarCarrito, precioTotal} = useCartContext();
 const {form}= useForm();
 const [loading, setLoading] = useState(false);

//Funcion para crear orden e actualizar stock
async function createOrden (e){
  e.preventDefault()

  let orden = {}

  orden.buyer = form;
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
  .finally(()=>vaciarCarrito())


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
    .finally(()=>setLoading (true))

    batch.commit()
  }
    /*getDocs tiene un array de los que cumplen la condición del where ,lo recorro con el forEach y utilizo el batch.update para actualizar 
       con update.data (). stock extraigo el stock del nuevo listado y el cartfind de las cantidades con respecto a ese id 
      y resta el stock original que extrae el firebase y la cantidad que tengo en mi carrito*/  
console.log (createOrden );
console.log (form);
return (
 
      <>
      <button  className="btn-orden"
      onClick={createOrden} >Realizar compra
      </button>
      {loading && <LoadingComponent/>}
      </>
      )
}