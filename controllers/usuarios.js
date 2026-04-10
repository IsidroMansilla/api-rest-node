const { response } = require('express')

const usuariosGet = (req, res = response) =>{
    res.json({
        msg: 'get API - Controlador'
    })
};

const usuariosPut = (req, res = response) =>{
    res.json({
        msg: 'put API - Controlador'
    })
};

const usuariosPost = (req, res = response) =>{
    res.json({
        msg: 'post API - Controlador'
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