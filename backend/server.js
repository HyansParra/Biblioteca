const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas de la aplicación
app.use('/api/auth', authRoutes);
app.use('/api/libros', bookRoutes);

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
