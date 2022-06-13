import { useState } from "react"

export const useForm = (validateForm) =>{
    const [form, setForm] = useState({phone: '', name:'', lastname:'', direction:''});
    const [inputErrors, setInputErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

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
      setInputErrors(validateForm(form));
      if (Object.keys(inputErrors).length === 0){
        alert ("enviando formulario");
        setLoading(true)
      }else {
        return;
      }
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