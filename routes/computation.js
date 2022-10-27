var express = require('express');

var router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {

    var number1=Math.floor(Math.random()*10)

    var number2=(Math.random())

    var number3=Math.floor(Math.random()*10)

    var number4=Math.floor(Math.random()*10)

    var cosFunction=Math.cos(number1);

    var sinFunction=Math.asin(number2);

    var asinFunction=Math.asinh(number3)



    res.render('computation',

    {

        title:'Sri Vyshnavi Kshatriya Computes Functions',

        number1:number1,

        number2:number2,

        number3:number3,

        number4:number4,

        cos:cosFunction,

        asin:sinFunction,

        asinh:asinFunction,

    });

     

});

module.exports=router;