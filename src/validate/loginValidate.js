export default function loginValidate(values) {
    let errors = {mail:'', pass:''}
    
    if(values?.email?.length<=3)  errors.mail = "error"
    if(values?.password?.length<=3)  errors.pass = "error"

    return errors;
}


