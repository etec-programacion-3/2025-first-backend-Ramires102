//importamos sequelize para poder usar la base de datos|
import {sequelize} from 'sequelize';

//instancia para conexiones
const conexion = new sequelize({
    //tipo de base de datos y donde se guarda
    dialect: 'sqlite',
    storage: './base_du_dato.sqlite',
});
//exporta conexion para que otros archivos puedan usarla
export default conexion;