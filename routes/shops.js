var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shop.controller');


/* GET users listing. */
router.post('/',  shopController.create);
router.get('/',  shopController.get);
router.get('/:id',  shopController.get);
// router.put('/:id',  shopController.put);

module.exports = router;