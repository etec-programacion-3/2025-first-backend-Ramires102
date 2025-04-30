 //importamos la libreria sequelize(DataTypes) para poder usar los tipos de datos
 import {DataTypes} from 'sequelize';
 //importamos la conexion a la base de datos
 import {sequelize} from '../config/base_du_datos.js';

 //definimos la base de lo que tiene que tener un libro en la tabla libros
 const Libros = sequelize.define('libros', {
        //id unico del libro (describimos como es el id)
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, //llave primaria: no se puede repetir numero y no se puede duplicar 
            autoIncrement: true, //incrementa automaticamente el id para no repetirlo
        },
        //titulo del libro
        Titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //autor del libro
        Autor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //año de publicacion
        año_publicacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        //nombre de la tabla de la base de datos
        tableName: 'libros',
    });