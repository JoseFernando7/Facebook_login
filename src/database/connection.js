//Javascript para conectar a la base de datos
const mongoose = require("mongoose");

const uri = 'mongodb://localhost:27017/users';

mongoose.connect(uri);

//Obtener mensaje cuando la base de datos esté conectada
mongoose.connection.on('open', _ =>
{
    console.log("Database is connected to ", uri);
});