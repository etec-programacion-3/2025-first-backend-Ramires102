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
            return res.status(404).json({ error: 'Libro no se a encontrado' });
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
                autor: req.params.Autor // Asume que tu modelo tiene un campo 'autor'
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