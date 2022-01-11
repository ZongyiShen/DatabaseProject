import http from "./service.config"

const prefix = "/product";
const services = {
    getProduct,
    getProductById,
    getProductByCategory,
}

function getProduct(){
    let url = prefix;
    return http.get(url)
}

function getProductById(id){
    let url = prefix + "Info";
    return http.post(url, {
        id,
    });
}

function getProductByCategory(category){
    let url = prefix + "Category";

    return http.post(url,{
        category,
    });
}

export default services;