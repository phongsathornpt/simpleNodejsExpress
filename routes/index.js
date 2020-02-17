var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/validation' , function(req, res, next){
  res.render('validation' , {title: 'test validation'});
});

router.post('/validation' ,
  [ 
    check("test" , "เห้ยใส่ข้อมูลก่อนกด input ดิวะ").not().isEmpty() 
  ] , function(req, res, next){
    const result = validationResult(req);
    var error = result.errors;
    if(!error.isEmpty()){
      res.render('validation' , {errors:errors});
    }else{
      console.log(req.body.test);
    }
});

module.exports = router;
