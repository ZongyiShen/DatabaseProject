var express = require('express');
var router = express.Router();


function toStringText(string) {
    return '"' + string + '"';
}


router.post('/', function (req, res, next) {
    console.log(req.body.test)
    res.send(req.body.test);
});

const MemberModifyMethod = require('../controllers/modify_controller');

memberModifyMethod = new MemberModifyMethod();

router.post('/userRegister', memberModifyMethod.postRegister);

router.post('/login', memberModifyMethod.postLogin);

router.put('/update', memberModifyMethod.postUpdate);

router.put('/update_shopping_cart', memberModifyMethod.postModifyProduct);

router.post('/shopping_cart', memberModifyMethod.postProduct);

router.post('/order', memberModifyMethod.postOrder);

module.exports = router;