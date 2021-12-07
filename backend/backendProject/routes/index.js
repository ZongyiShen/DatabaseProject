var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',    //你的密碼（就是這個該死的密碼坑死我了）
  database: 'ds_project'    //你的資料庫
});

/* GET New User page. */
router.get('/newProduct', function (req, res) {
  res.render('newProduct', { title: 'Add New Product' });
});

router.post('/api/addProduct', function (req, res) {

  let id = req.body.id;
  let product_name = req.body.product_name;
  let description = req.body.description;
  let category = req.body.category;

  let sql = "insert into product(id, product_name,size,price,storage,description,status,category,publish_date,modified_date) values";
  let values = [id, '"' + product_name + '"', 10, 100, 100, '"' + description + '"', 1, '"' + category + '"', '"2021-12-14 00:00:00"', '"2021-12-14 00:00:00"'];
  sql = sql + "(" + values.toString() + ")";
  console.log(req.body);
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    else {
      // If it worked, set the header so the address bar doesn't still say /adduser

      res.location("/");
      // And forward to success page
      res.redirect("/");

    }
    //console.log(results)
  });

});

router.get('/api/memberList', function (req, res) {

  let sql = "select * from member";
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    else {
      // If it worked, set the header so the address bar doesn't still say /adduser

      res.send(results);

    }
    //console.log(results)
  });

});

router.post('/api/userRegister', function (req, res) {

  let IDSN = req.body.IDSN;
  let name = req.body.name;
  let username = req.body.username;
  let phone = req.body.phone;
  let email = req.body.email;
  let password = req.body.password;

  let sql = "insert into member(`IDSN`,`name`,`username`,`phone`,`email`,`password`,`permission`,`register_date`,`member_status`) values";
  let values = [IDSN, '"' + name + '"', '"' + username + '"', '"' + phone + '"', '"' + email + '"', '"' + password + '"', 0, '"2021-12-14 00:00:00"', 0];
  sql = sql + "(" + values.toString() + ")";
  console.log(req.body);
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    else {
      // If it worked, set the header so the address bar doesn't still say /adduser

      res.send(true);

    }
    //console.log(results)
  });

});

router.get('/', function (req, res, next) {
  res.render('index', { title: 'New title' });
});



module.exports = router;
