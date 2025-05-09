const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Definición de rutas para libros
router.get('/', bookController.listBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.editBook);
router.delete('/:id', bookController.removeBook);

module.exports = router;
