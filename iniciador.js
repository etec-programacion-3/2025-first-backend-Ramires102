//importo la ruta de LIBROS.js
import Libros from './model/LIBROS.js';
import rutas from './routes/rutas.js';

const express = require('express');
const app = express();


app.use(express.json());

// Rutas
app.use('/LIBROS', rutas);

//llamamos a express para que mande y reciba datos
app.get('/', (req, res) => {   
    res.send('Hola Mundo');
}
);
sequelize.sync().then(() => {
    app.listen(3000, () => {
      console.log(`Servidor corriendo en http://localhost:3000`);
    });
  }).catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  }); 