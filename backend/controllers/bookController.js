const Book = require('../models/bookModel');

// Controlador: Listar libros
exports.listBooks = (req, res) => {
  Book.getAllBooks((err, libros) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(libros);
  });
};

// Controlador: Agregar libro
exports.createBook = (req, res) => {
  Book.addBook(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(result);
  });
};

// Controlador: Modificar libro
exports.editBook = (req, res) => {
  Book.updateBook(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};

// Controlador: Eliminar libro
exports.removeBook = (req, res) => {
  Book.deleteBook(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
};
