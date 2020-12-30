var express = require('express');
var router = express.Router();
const middleware = require('../middleware/middleware');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.json({
    message: 'hello bangladesh'
  });
});


// first way for next function

// router.get('/userInfo', (req, res, next) => {
//   console.log('Method', req.method);
//   next();
// },
//   (req, res, next) => {
//     return res.json({
//       name: "Riaz", ocupation: "Student"
//     })
// });



// second and efficient way for next function.
// when you follow this partten, make sure you have imported middleware from parent folder.

router.get('/userInfo', middleware.first, middleware.second, middleware.third);


module.exports = router;