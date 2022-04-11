const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
require("./database/index");

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//Middleware para recibir todos los datos enviados por el usuario en formato json
app.use(express.json());

//Middleware para recibir todos los datos enviados por el usuario por medio del formulario
app.use(express.urlencoded({extended: false}));

//Requerir las rutas
app.use(require("./routes"));

//Iniciar el servidor
app.listen(port, () =>
{
    console.log(`Listening on port ${port}`);
});