//importo la tecnologia express
import express from 'express';
//importo las funciones de los controladores para hacer cada operacion CRUD
import { tengotodoslosLibros, IDProducto, AutorProducto,TituloProducto, CrearLibro, EliminoLibro}  from '../controllers/controladores.js';

//instancia para definir las rutas
const rutas = express.Router();

rutas.get('/', tengotodoslosLibros); //muestra todos los libros
//los ":" represnetan parametros que pueden variar nunca es unico
rutas.get('/autor', AutorProducto); //busca un libro por autor
rutas.get('/titulo', TituloProducto); //busca un libro por titulo
rutas.get('/:id', IDProducto); //busca un libro por id
rutas.post('/', CrearLibro); //crea un libro
rutas.delete('/:id', EliminoLibro); //elimina un libro por id

export default rutas; //exporto las rutas para poder usarlas en cualquier otro archivo, en este caso en iniciador.js

