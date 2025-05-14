import { INTEGER, where } from 'sequelize';
import Libros from '../model/LIBROS.js';

//para ver todos los libros
export const tengotodoslosLibros = async (req, res) => {
    try {
        //await: sirve para ordenar las cosas de manera asincrona (se ejecuta una después de la otra)
        const libros = await Libros.findAll();
        res.json(libros);
    } catch (error) {
        //manda error si no se puede encontrar los libros
        res.status(500).json({ error: 'Error al obtener los libros' });
    }
};

//buscar por ID un libro
export const IDProducto = async (req, res) => {
    try {
        //busca el libro por el id
        const libro = await Libros.findByPk(req.params.id);
        //si no lo encuentra manda un error
        if (!libro) {
            return res.status(404).json({ error: 'Libro no se ha encontrado' });
        }
        //muestra el libro que coincida con el id
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

//buscar por autor un libro
export const AutorProducto = async (req, res) => {
    try {
        //busca el libro por el autor, filtrando con el nombre del autor en el "Where"
        const libro = await Libros.findAll({
            where: {
                Autor: req.params.Autor // Asume que tu modelo tiene un campo 'autor'
                }
            });
            res.json(libro);
        if (!libro) {
            return res.status(404).json({ error: 'Libros no se an encontrado segun el autor' });
        }
        //muestra el/los libro/s que coincidan con el autor
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

//ordena todo alfabeticamente
export const OTAProducto = async (req, res) => {
    try {
        //busca el libro por el autor, filtrando con el nombre del autor en el "Where"
        const libro = await Libros.findAll({
            order: [
                ["Titulo", 'ASC'] 
            ]});
        if (!libro) {
            return res.status(404).json({ error: 'Libros no se an encontrado segun el autor' });
        }
        //muestra el/los libro/s que coincidan con el autor
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

//ordena cada 3 libros segun sea alfabetico y cada 3 libros
export const PagincaionProducto = async (req, res) => {
    try {
      // Página solicitada (por defecto = 1)
      const pagina = parseInt(req.query.pagina) || 1;
      
      // el limite es 3 libros por página
      const limit = 2;
      const offset = (pagina - 1) * limit;
      
      // Busca los libros por el titulo tenieno el limite y el offset
      const { count, rows: libros } = await Libros.findAll({
        order: [["Titulo", 'ASC']],
        limit: limit,
        offset: offset
      });
        res.json(pagina);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

//buscar por titulo un libro
export const TituloProducto = async (req, res) => {
    try {
        //busca el libro por el autor, filtrando con el nombre del autor en el "Where"
        const libro = await Libros.findAll({
            where: {
                titulo: req.params.Titulo // Asume que tu modelo tiene un campo 'titutlo'
            }});
        if (!libro) {
            return res.status(404).json({ error: 'Libros no se an encontrado segun el autor' });
        }
        //muestra el/los libro/s que coincidan con el autor
        res.json(libro);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el libro' });
    }
};

//crear/añadir un libro
export const CrearLibro = async (req, res) => {
    try {
        //creamos un nuevo libro segun el modelo que hice en LIBROS.js
        const NuevoLibro = await Libros.create(req.body);
        //confirma que se a creado el libro
        res.status(201).json(NuevoLibro);
    }catch (error) {
        res.status(400).json({ message: error.message });
      }
};

//elimina un libro
export const EliminoLibro = async (req, res) => {
    try {
        //busca el libro por el id
        const fueralibro = await Libros.findByPk(req.params.id);
        //si no lo encuentra manda un error
        if (!fueralibro) {
            return res.status(404).json({ error: 'Libro no se a encontrado' });
        }
        //si lo encuentra, lo elimina y envia un mensaje de que se a eliminado correctamente
        await fueralibro.destroy();
        res.json({ message: 'Libro se a eliminado correctamente' });
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el libro' });
    }
};