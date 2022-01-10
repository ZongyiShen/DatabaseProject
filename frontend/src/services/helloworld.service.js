import http from "./service.config"

const prefix = "/product";
const services = {
    getProduct,
}
function getProduct(){
    let url = prefix;
    return http.get(url)
}

export default services;