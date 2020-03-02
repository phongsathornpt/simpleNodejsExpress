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
router.get('/blog', function(req, res, next) {
  res.render('addblog', { title: 'Express' });
});

router.post('/validation' ,
  [ 
    check("name" , "เห้ยใส่ข้อมูลก่อนกด input ดิวะ").not().isEmpty() 
  ] , function(req, res, next){
    const result = validationResult(req);
    var errors = result.errors;
    if(!result.isEmpty()) {
      res.render('validation' , {errors:errors} );
    }else{
      console.log(req.body.test);
    }
});

module.exports = router;
