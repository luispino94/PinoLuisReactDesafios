import { addDoc, collection, documentId, getFirestore, where, writeBatch, query, getDocs } from 'firebase/firestore';
import { useCartContext } from '../Contexto/cartContext';
import { useForm } from './useForm';
import { useState } from 'react';
import { LoadingComponent } from '../LoadingComp/LoadingComponent';
import swal from 'sweetalert';
import './btnorden.scss';

export default function BtnOrden () {
 const {cartList, vaciarCarrito, precioTotal, user} = useCartContext();
 const {form,inputErrors,handleChange,handleBlur,handleSubmit} = useForm();
 const [loading, setLoading] = useState(false);
 const [numberId ,setNumberId] = useState({});

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
  .then (resp => setNumberId(resp.id))
  .catch ((err)=>console.log (err))
  .finally(()=>
     swal({
    title: "Compra realizada!",
    text: `numero de orden: ${numberId}`,
    icon: "success",
    }),
  vaciarCarrito()
  )

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

return (
  <div className='container-formulario'>
  <form  className='formulario' onSubmit={handleSubmit}>
    <h2 className='formulario-user-title'>{`Hola ${user.email}, completá el siguiente formulario para finalizar tu compra!`}</h2>
    <h5 className='titulo-formulario'>Orden de compra: </h5>                
      <div>
      <input 
          className='form-control'
          type='text' 
          name='name' 
          placeholder='Ingrese su nombre' 
          value={form.name}
          onChange={handleChange}
          onBlur = {handleBlur}
          required
      />
      {inputErrors.name && <p className='inputError'>{inputErrors.name}</p>}
      </div>
      <div>
      <input 
          className='form-control'
          type='text' 
          name='lastname'
          placeholder='Ingrese su apellido' 
          value={form.lastname}
          onChange={handleChange}
          onBlur = {handleBlur}
          required
      />
      {inputErrors.lastname && <p className='inputError'>{inputErrors.lastname}</p>}
      </div>
      <div>
      <input 
          className='form-control'
          type='number' 
          name='phone'
          placeholder='Ingrese su telefono' 
          value={form.phone}
          onChange={handleChange}
          onBlur = {handleBlur}
          required
      />
      {inputErrors.phone && <p className='inputError'>{inputErrors.phone}</p>}
      </div>
      <div>
      <input 
          className='form-control'
          type='text' 
          name='direction'
          placeholder='Domicilio' 
          value={form.direction}
          onChange={handleChange}
          onBlur = {handleBlur}
          required
      />
      {inputErrors.direction && <p className='inputError'>{inputErrors.direction}</p>}
      </div>
      { (Object.keys(inputErrors).length === 0) && (form.name !=='') && (form.lastname !=='') && (form.phone !=='') && (form.direction !=='') ?  
      <button  className="btn-orden"
      onClick={createOrden} >Realizar compra
      </button>
       : ''
      }
    </form>
      {loading && <LoadingComponent/>}

</div>
      )
      
}