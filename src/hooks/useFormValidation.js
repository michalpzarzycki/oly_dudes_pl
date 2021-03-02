import { useEffect, useState } from 'react'





export function useFormValidation(callback, validate) {
const [errors, setErrors] = useState({});
const [values, setValues] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      callback();
    }
  }, [isSubmit]);
useEffect(() => {
    setErrors(() => validate(values))
}, [values])
    const handleChange = (event) => {
        console.log("UFV handlechange", event.target.value)
        setValues((values) => ({...values, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
      console.log("USE FORM VALIDATION ERRORS", errors)
        event.preventDefault();
        setIsSubmit(true)
    }

    return { handleSubmit, handleChange, errors, values}
}