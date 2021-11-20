let express = require('express');
let router = express.Router();
let controller = require('../controllers/marcasController');

router.get('/', controller.index);
//Ruta parametrizada
router.get('/:marca', controller.marca);

module.exports = router