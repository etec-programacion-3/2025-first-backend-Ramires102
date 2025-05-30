//importo la ruta de LIBROS.js
import sequelize from './config/base_du_datos.js';
import rutas from './routes/rutas.js';
import Sequelize from './config/base_du_datos.js'; //importo la base de datos
import express from 'express'; //importo express para poder usarlo
import cors from 'cors'; //importo cors para poder usarlo y que no de problemas con el navegador

const app = express();


app.use(express.json());

// Rutas
app.use('/LIBROS', rutas);

app.use(cors())

//llamamos a express para que mande y reciba datos
app.get('/', (req, res) => {   
    res.send('Hola Mundo');
}
);
Sequelize.sync().then(() => {
    app.listen(5000, () => {
      console.log(`Servidor corriendo en http://localhost:5000`);
    });
  }).catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
  }); 