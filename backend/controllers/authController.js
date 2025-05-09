const db = require('../config/db');

// Controlador: Inicio de sesión
exports.login = (req, res) => {
  const { nombre, contrasena } = req.body;

  db.get(
    'SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?',
    [nombre, contrasena],
    (err, usuario) => {
      if (err) return res.status(500).json({ error: err.message });

      if (!usuario) {
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }

      res.json({
        id: usuario.id,
        nombre: usuario.nombre,
        rol: usuario.rol
      });
    }
  );
};
