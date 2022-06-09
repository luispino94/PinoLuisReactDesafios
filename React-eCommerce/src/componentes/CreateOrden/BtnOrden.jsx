import { addDoc, collection, documentId, getFirestore, where, writeBatch, query, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { useCartContext } from '../Contexto/cartContext';
import './btnorden.scss'

export default function BtnOrden () {
 const {cartList, vaciarCarrito, precioTotal, user} = useCartContext()
 const [dataForm, setDataForm] = useState({ phone: '', name:'', lastname:'', direction:'' })


//Funcion para crear orden e actualizar stock
async function createOrden (e){
  e.preventDefault()

  let orden = {}
  //datos hardcodeados
  orden.buyer = dataForm
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
    .finally(()=>console.log('stock actualizado'))

    batch.commit()
  }
    /*getDocs tiene un array de los que cumplen la condición del where ,lo recorro con el forEach y utilizo el batch.update para actualizar 
       con update.data (). stock extraigo el stock del nuevo listado y el cartfind de las cantidades con respecto a ese id 
      y resta el stock original que extrae el firebase y la cantidad que tengo en mi carrito*/  

  const handlerChange = (e) => {
    setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })}


return (
  
<div className='container-formulario'>
  <form  className='formulario' onSubmit={createOrden}>
    <h2 className='formulario-user-title'>{`Hola ${user.email}, completá el siguiente formulario para finalizar tu compra!`}</h2>
    <h5 className='titulo-formulario'>Orden de compra: </h5>                
      <input 
          className='form-control'
          type='text' 
          name='name' 
          placeholder='Ingrese su nombre' 
          value={dataForm.name}
          onChange={handlerChange}
      /><br/>

      <input 
          className='form-control'
          type='text' 
          name='lastname'
          placeholder='Ingrese su apellido' 
          value={dataForm.lastname}
          onChange={handlerChange}
      /><br/>

      <input 
          className='form-control'
          type='number' 
          name='phone'
          placeholder='Ingrese su telefono' 
          value={dataForm.phone}
          onChange={handlerChange}
      /><br/>

      <input 
          className='form-control'
          type='text' 
          name='direction'
          placeholder='Domicilio' 
          value={dataForm.direction}
          onChange={handlerChange}
      /><br/>
      <button  className="btn-orden" 
      onClick={createOrden} >Realizar compra</button>
  </form>
</div>
      )
}