var app = require("../app.js");
var sql = require("./index");
var service = require("mssql");

exports.getUsers = function(req, res)
{
    var query = `SELECT * FROM Usuarios`

    service.connect(sql.config, function (err) {
        var request = new service.Request();
        
        // query to the database and get the data
        request.query(query, function (err, recordset) {
            if (err) console.log(err)
            
            // send data as a response
            res.json(recordset.recordset);
        });
    });
};

exports.addUser = function(req, res)
{
    var Usuario = req.body;

    var query =  `INSERT INTO Usuarios VALUES (${Usuario.TipoUsuario}, '${Usuario.Mail}', '${Usuario.Contraseña}', '${Usuario.AddedDate}', '${Usuario.LastLogin}', '${Usuario.Nombre}', '${Usuario.Apellido}', '${Usuario.Direccion}')`;

    console.log(query);
    service.connect(sql.config, function (err) {
        var request = new service.Request();
    
        request.query(query, function (err, result) {
            if (err) console.log(err)
        
            // send data as a response
            res.json(result);
        });

    });
}