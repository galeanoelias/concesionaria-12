let express = require('express');
let router = express.Router();
let controller = require('../controllers/sucursalesController');


// Ruta
router.get('/', controller.getStore);
//Ruta parametrizada
router.get('/:sucursal', controller.getOneStore);

module.exports = router