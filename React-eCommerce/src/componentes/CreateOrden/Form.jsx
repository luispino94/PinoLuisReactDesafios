import { useCartContext } from '../Contexto/cartContext';
import { useForm } from './useForm';
import BtnOrden from '../CreateOrden/BtnOrden';

import './btnorden.scss'


const Form = () => {
 const {user} = useCartContext();
 const {form,inputErrors,handleChange,handleBlur,handleSubmit} = useForm();

return (
  
<div className='container-formulario'>
  <form  className='formulario' onSubmit={handleSubmit}>
    <h2 className='formulario-user-title'>{`Hola ${user.email}, completá el siguiente formulario para finalizar tu compra!`}</h2>
    <h5 className='titulo-formulario'>Orden de compra: </h5>                
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
      <br/>

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
      <br/>

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
      <br/>

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
      <br/>

      { ((Object.keys(inputErrors).length === 0) && (form.length !== '')) ?<BtnOrden/>
       : ''
      }
  </form>

</div>
      )
}

export default Form