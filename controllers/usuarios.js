const { response } = require('express')

const usuariosGet = (req, res = response) =>{
    
    //const query = req.query;
    const {nombre = null, apellido = null} = req.query 
    res.json({
        msg: 'get API - Controlador',
        //query
        nombre,
        apellido
    })
};

const usuariosPut = (req, res = response) =>{
    
    const id = req.params.id;
    
    res.json({
        msg: `Modificamos el usuario: ${id}`
    })
};

const usuariosPost = (req, res = response) =>{

    const body = req.body;
    //const {nombre, edad} = req.body;
    
    res.json({
        msg: 'post API - Controlador',
        body
        //nombre,
        //edad
    })
};

const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API - Controlador'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}