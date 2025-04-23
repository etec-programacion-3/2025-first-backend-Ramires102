const express = require('express');
const app = express();

//llamamos a express para que mande y reciba datos
app.get('/', (req, res) => {   
    res.send('Hola Mundo');
}
);
//para que el servidor escuche en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
}
);