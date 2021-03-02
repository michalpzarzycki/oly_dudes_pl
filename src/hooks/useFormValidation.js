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
        setValues((values) => ({...values, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true)
    }
    return { handleSubmit, handleChange, errors, values}
}