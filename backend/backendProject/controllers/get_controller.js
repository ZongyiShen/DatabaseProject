const productData = require('../models/getAllProduct_model');
const cartData = require('../models/getCartProduct');

module.exports = class GetProduct {
    // 取得全部產品資料
    getAllProduct(req, res, next) {
        productData().then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }

    getShoppingcart(req, res, next) {
        const memberData = {
            id: req.body.id
        }
        cartData(memberData).then(result => {
            res.json({
                result: result
            })
        }, (err) => {
            res.json({
                result: err
            })
        })
    }
}