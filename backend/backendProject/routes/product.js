var express = require('express');
var router = express.Router();

const GetProduct = require('../controllers/get_controller');

getProduct = new GetProduct();

router.get('/api/product', getProduct.getAllProduct);

router.get('/shoppingcart', getProduct.getShoppingcart);

module.exports = router;