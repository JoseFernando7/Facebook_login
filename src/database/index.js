//Javascript para crear y obtener los datos de la base de datos
require("./connection");
const User = require("../models/User");


//Función para guardar el elemento en la base de datos.
async function createUser()
{
    const user = new User(
    {
        username: 'Jose',
        password: '7777'
    });

    const userSaved = await user.save();
    return userSaved;
}

//Función para retornar el listado de elementos guardados.
async function getUsers(username, password)
{
    login = false;

    try 
    {
        const users = await User.find({"username": username, "password": password});

        if(users.length == 0)
        {
            console.log("Nombre de usuario o contraseña incorrectos");
            return login;
        }
        else
        {
            console.log(users);
            login = true;
            return login;
        }
    } 
    catch (error) 
    {
        console.log(error);
    }
}

//Exportar las funciones
module.exports = {
    createUser,
    getUsers
}