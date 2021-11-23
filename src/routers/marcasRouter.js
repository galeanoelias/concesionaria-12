let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController');

// Ruta
router.get('/', controller.getMark);
//Ruta parametrizada
router.get('/:marca', controller.getOneMark);

module.exports = router