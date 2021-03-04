export default function registerValidate(values) {
    const errors = { firstName:'', lastName:'', email:'', password:''}

    if(values?.firstName?.length<=3) errors.firstName = "LONGER NAME PLEASE"
    if(values?.lastName?.length<=3) errors.lastName = "LONGER LAST NAME PLEASE"
    if(values?.email?.length<=3) errors.email = "LONGER EMAIL PLEASE"
    if(values?.password?.length<=3) errors.password = "LONGER PASS PLEASE"

return errors;
}