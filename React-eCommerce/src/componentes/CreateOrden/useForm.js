import { useState } from "react"

export const useForm = () =>{
    const [form, setForm] = useState({phone: '', name:'', lastname:'', direction:''});
    const [inputErrors, setInputErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    function validateForm(form){
      let inputErrors = {};
      
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
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
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}