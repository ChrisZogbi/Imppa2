var service = require("mssql");
var sql = require("../services/index");
var UserService  = require('../services/UserService')

 exports.ObtenerUsuarios = function(req, res) {
    var data = UserService.ObtenerUsuarios;
    res.json(data);
 };
 
 exports.ObtenerTipoUsuarios = function(req, res) {
    res.send(UserService.ObtenerTipoUsuario);
};