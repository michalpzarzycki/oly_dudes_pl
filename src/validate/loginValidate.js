export default function loginValidate(values) {
    let errors = {mail:'', pass:''}
    console.log(values)
    if(values?.email?.length<=3)  errors.mail = "error"
    if(values?.password?.length<=3)  errors.pass = "error"

    return errors;
}


