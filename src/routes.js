const express = require("express");
const User = require("./models/User");
const { getUsers } = require("./database/index");
const path = require("path");
const router = express.Router();

router.get('/registro', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/public/registro.html'));
});

router.get('/welcome', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/public/welcome.html'));
});

router.get('/error', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/public/error.html'));
});

router.get('/registro_error', (req, res) =>
{
    res.sendFile(path.join(__dirname + '/public/regError.html'));
});

router.post('/registro', async (req, res) =>
{
    const { username, password, gender, age } = req.body;
    const errors = [];
    if(!username)
    {
        errors.push("Ingrese un nombre de usuario");
    }

    if(!password)
    {
        errors.push("Ingrese contraseña");
    }

    if(!gender)
    {
        errors.push("Ingrese su género");
    }

    if(!age)
    {
        errors.push("Ingrese su edad");
    }

    if(errors.length > 0)
    {
        res.redirect('/registro_error');
    }
    else
    {
        const newUser = new User({ username, password, gender, age });
        console.log(newUser);
        await newUser.save();
        res.redirect('/');
    }
});

router.post('/', async (req, res) =>
{
    const { username, password } = req.body;
    
    if(await getUsers(username, password))
    {
        res.redirect('/welcome');
    }
    else if(! await getUsers(username, password))
    {
        res.redirect('/error');
    }
});

module.exports = router;