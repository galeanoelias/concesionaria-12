let express = require('express');
let router = express.Router();
let controller = require('../controllers/indexController')

// GET - Home page
router.get('/', controller.index);

// router.get('/contact', controller.contact);




module.exports = router                                                                       