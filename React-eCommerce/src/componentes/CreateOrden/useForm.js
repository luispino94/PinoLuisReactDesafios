import { useState } from "react"

/*JS donde se generan las funciones para el formulario junto con las validaciones. 
Se hace el destructuring en btnorden.*/

export const useForm = () =>{
    const [form, setForm] = useState({phone: '', name:'', lastname:'', direction:''});
    const [inputErrors, setInputErrors] = useState({});

    function validateForm(form){
      let inputErrors = {};
      
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexLetterandNumber = /^[a-zA-Z0-9_.-]*$/;

      if (!form.name.trim()){
        inputErrors.name = "El campo 'Nombre' es requerido"
      }else if (!regexName.test(form.name.trim())){
        inputErrors.name = "El campo 'Nombre' sólo acepta letras"
      }
    
      if (!form.lastname.trim()){
        inputErrors.lastname = "El campo 'Apellido' es requerido"
      }else if (!regexName.test(form.lastname.trim())){
        inputErrors.lastname = "El campo 'Apellido' sólo acepta letras"
      }
    
      if (!form.phone.trim()){
        inputErrors.phone = "El campo 'Télefono' es requerido"
      }
      if (!form.direction.trim()){
        inputErrors.direction = "El campo 'Domicilio' es requerido"
      }else if (!regexLetterandNumber.test(form.direction.trim())){
        inputErrors.direction = "El campo sólo acepta letras y números"
      }
      return inputErrors
    };
    
    const handleChange = (e) =>{
      setForm ({
        ...form,
        [e.target.name]:e.target.value
      })
    }

    const handleBlur = (e) => {
      handleChange (e);
      setInputErrors(validateForm(form));

    }
    
    const handleSubmit = (e) => {
      e.preventDefault ();
      setInputErrors (validateForm (form));
      
    };

    return {
        form,
        inputErrors,
        handleChange,
        handleBlur,
        handleSubmit
    }
}