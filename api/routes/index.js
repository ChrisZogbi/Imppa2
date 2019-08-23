const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController');

//app.route('/users')
//  .get(UserController.ObtenerUsuarios);
////
//app.route('/tipousuario')
//  .get(UserController.ObtenerTipoUsuarios);

router.get('/users', UserController.ObtenerUsuarios);
router.get('/tipoUsuario', UserController.ObtenerTipoUsuarios);
//router.get('/user/:id', function (req, res) {
//    console.log('ID:', req.params.id);
//    UserController.ObtenerUsuario(req.params.id, res);
//  });

module.exports = router;