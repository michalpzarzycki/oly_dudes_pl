import { useEffect, useState } from 'react'


function sampleValidateFunction(values) {
    let errors = {mail:'', pass:''}
    console.log(values)
    if(values?.email?.length<=3)  errors.mail = "error"
    if(values?.password?.length<=3)  errors.pass = "error"

    return errors;
}


export function useFormValidation(callback, validate=sampleValidateFunction) {
const [errors, setErrors] = useState({});
const [values, setValues] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [isSubmit]);

    const handleChange = (event) => {
        console.log("UFV handlechange", event.target.value)
        setValues((values) => ({...values, [event.target.name]: event.target.value}))
        setErrors({...validate(values)})
    }
    const handleSubmit = (event) => {
      console.log("USE FORM VALIDATION ERRORS", errors)
        event.preventDefault();
        setIsSubmit(true)
    }

    return { handleSubmit, handleChange, errors, values}
}