//Javascript para definir el esquema de los datos a guardar
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
{
    username: 
    {
        type: String,
        required: true
    },

    password: 
    {
        type: String,
        required: true
    },

    gender: 
    {
        type: String,
        required: true
    },

    age: 
    {
        type: Number,
        required: true
    }
});

module.exports = model('User', userSchema);