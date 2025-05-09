const db = require('../config/db');

// Modelo: Obtener todos los libros
exports.getAllBooks = (callback) => {
  db.all('SELECT * FROM libros', [], callback);
};

// Modelo: Agregar un libro
exports.addBook = (data, callback) => {
  const { titulo, autor, genero, anio } = data;
  db.run('INSERT INTO libros (titulo, autor, genero, anio) VALUES (?, ?, ?, ?)',
    [titulo, autor, genero, anio], function(err) {
      callback(err, { id: this?.lastID });
    });
};

// Modelo: Actualizar un libro
exports.updateBook = (id, data, callback) => {
  const { titulo, autor, genero, anio, disponible } = data;
  db.run('UPDATE libros SET titulo=?, autor=?, genero=?, anio=?, disponible=? WHERE id=?',
    [titulo, autor, genero, anio, disponible, id], function(err) {
      callback(err, { cambios: this?.changes });
    });
};

// Modelo: Eliminar un libro
exports.deleteBook = (id, callback) => {
  db.run('DELETE FROM libros WHERE id=?', [id], function(err) {
    callback(err, { eliminado: this?.changes });
  });
};
