var app = require("../app.js");
var sql = require("./index");
var service = require("mssql");

exports.getUsers = function(req, res)
{
    var pool = sql.config.connect(function () {
        var query = `SELECT * FROM Usuarios`
        const request = new service.Request(sql.config)
        request.query(query, function (err, result) {
            if (err) res.json(err)
            else res.json(result.recordset);
        });
    });
};

exports.getUser = function(req, res)
{
    var pool = sql.config.connect(function () {
        var query = `SELECT * FROM Usuarios WHERE ID = ${req.body.UserId}`
        const request = new service.Request(sql.config)
        request.query(query, function (err, result) {
            if (err) res.json(err)
            else res.json(result.recordset);
        });
    });
};

exports.addUser = function(req, res)
{
    var Usuario = req.body;

    var query =  `INSERT INTO Usuarios VALUES (${Usuario.TipoUsuario}, '${Usuario.Mail}', '${Usuario.Contraseña}', '${Usuario.AddedDate}', '${Usuario.LastLogin}', '${Usuario.Nombre}', '${Usuario.Apellido}', '${Usuario.Direccion}')`;

    console.log(query);
    var pool = sql.config.connect(function () {
        const request = new service.Request(sql.config)
        request.query(query, function (err, result) {
            if (err) res.json(err)
            else res.json("Se agrego correctamente el usuario");
        });
    });
}
exports.updateUser = function(req, res)
{
    var UserData = req.body;

    var query = `UPDATE [dbo].[Usuarios]
                    SET [TipoUsuario] = ${UserData.TipoUsuario}
                    ,[Mail] = '${UserData.Mail}'
                    ,[Contraseña] = '${UserData.Contraseña}'
                    ,[AddedDate] = '${UserData.AddedDate}'
                    ,[LastLogin] = '${UserData.LastLogin}'
                    ,[Nombre] = '${UserData.Nombre}'
                    ,[Apellido] = '${UserData.Apellido}'
                    ,[Direccion] = '${UserData.Direccion}'
                WHERE [ID] = ${UserData.UserId}`; 
    console.log(query);
    var pool = sql.config.connect(function () {
        const request = new service.Request(sql.config)
        request.query(query, function (err, result) {
            if (err) res.json(err)
            else res.json("Se actualizo correctamente el usuario.");
        });
    });
}

exports.deleteUser = function(req, res)
{
    var UserId = req.body.UserId;

    var query = `DELETE FROM  [dbo].[Usuarios]
                WHERE [ID] = ${UserId}`; 

    var pool = sql.config.connect(function () {
        const request = new service.Request(sql.config)
        request.query(query, function (err, result) {
            if (err) res.json(err)
            else res.json("Se elimino correctamente el usuario.");
        });
    });
}
