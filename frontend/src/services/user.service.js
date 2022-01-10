import http from "./service.config"

const prefix = "/user";
const services = {
    login,
    register,
    resetPassword,
    getInformation,
    EditInformation,
    getCreditCard,
    DeleteCreditCard,
    AddCreditCard,
    ChangePassword
}
function login(email, password){
    const url = prefix + "/login";

    return http.post(url, {
        email,
        password
    });
}
function register(email, username, phone, password, name){
    const url = prefix + "/userRegister";

    return http.post(url, {
        email,
        username,
        phone,
        password,
        name
    });
}
function resetPassword(email, account){
    const url = prefix + "/resetPassword";

    return http.post(url, {
        email,
        account
    });
}
function getInformation(){
    const url = prefix + "/information";

    return http.get(url);
}
function EditInformation(email, name, address, phone){
    const url = prefix + "/information";

    return http.put(url,{
        email,
        name,
        address,
        phone
    });
}
function getCreditCard(){
    const url = prefix + "/creditCard";

    return http.get(url);
}
function DeleteCreditCard(cardNumber){
    const url = prefix + "/creditCard";

    return http.delete(url,{
        data: {
            "cardNumber": cardNumber
        }
    })
}
function AddCreditCard(cardNumber, securityCode, year, month){
    const url = prefix + "/creditCard";

    return http.post(url, {
        cardNumber,
        securityCode,
        year,
        month
    });
}
function ChangePassword(oldPassword, password){
    const url = prefix + "/update";

    return http.put(url, {
        oldPassword,
        password
    });
}

export default services;