import { addDoc, collection, documentId, getFirestore, where, writeBatch, query, getDocs } from 'firebase/firestore';
import { useCartContext } from '../Contexto/cartContext';
import { useForm } from './useForm';
import { useState } from 'react';
import { LoadingComponent } from '../LoadingComp/LoadingComponent';

import swal from 'sweetalert';

import './btnorden.scss';
/*Componente donde se genera la orden de compra pisando los datos del array vacio(FORM) en el formulario.*/

const CreateOrder = () => {
 const {cartList, cartClear, totalPrice, user} = useCartContext();
 const {form,inputErrors,handleChange,handleBlur,handleSubmit} = useForm();
 const [loading, setLoading] = useState(false);

//Funcion para crear orden e actualizar stock

async function createOrder (e){
  e.preventDefault()

  let order = {}
   //acá se están pisando los datos de form creando un nuevo array
  order.buyer = form;
  order.total = totalPrice()
  //acá se está creando un nuevo array gracias al .map extrayendo los datos de cartList y creandolos en el cartItem.
  order.items = cartList.map (cartItem =>{
    const id = cartItem.id
    const name = cartItem.name
    const price = cartItem.price * cartItem.quantity
    return { id, name, price}
  } )

  //Acá se crea la order
  const db = getFirestore()
  const queryorder = collection(db,'orders')
  addDoc (queryorder, order)
  .then ((resp) =>
    swal({
    title: "Compra realizada!",
    text: `numero de orden: ${resp.id}`,
    icon: "success",
    }))
  .catch ((err)=>console.log (err))
  .finally(()=>cartClear()
  )

  //Acá se actualiza el stock de los items
    const dbStock = getFirestore()

    const queryCollectionStock = collection (dbStock, 'items')

    const queryUpdate  = await query(
      queryCollectionStock,
    where (documentId(), 'in', cartList.map(cart=> cart.id)) 
    )//'in' es un operador que me permite preguntar si dentro de lo que está declarado en el where está o no
    const batch = writeBatch(dbStock)
    
    await getDocs (queryUpdate)
    .then (resp=> resp.docs.forEach(resp => batch.update(resp.ref,{  
      stock: resp.data().stock - cartList.find (item => item.id === resp.id).quantity 
    })))
    .finally(()=>setLoading (true))

    batch.commit()
  }

return (
  //Formulario para finalizar la compra
  <>  
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
      onClick={createOrder} >Realizar compra
      </button>
       : ''
      }
    </form>
      {loading && <LoadingComponent/>}
  </div>

  </>

      )
      
}

export default CreateOrder