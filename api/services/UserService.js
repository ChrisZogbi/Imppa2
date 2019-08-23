var app = require("../app.js");
var sql = require("./index");
var service = require("mssql");

exports.request = function(){return sql.Request();}

exports.ObtenerUsuarios = function(req, res)
{
    var query = `SELECT * FROM TipoUsuario`

    service.connect(sql.config, function (err) {
        var request = new service.Request();
        
        // query to the database and get the data
        request.query(query, function (err, recordset) {
            if (err) console.log(err)
            
            // send data as a response
            res.send(recordset[0]);
        });
    });
}

exports.ObtenerTipoUsuario = function(req, res)
{
    var query = `SELECT * FROM TipoUsuario`
            
        request.query(query, function (err, recordset) {
    
            if (err) console.log(err)
        
            // send records as a response
            return recordset;
            //sql.close();
        });
}


//module.exports = function () {
//  return {
//      findUsers: function (req, res) {
//          var query = `SELECT * FROM Usuarios`
//          
//          request.query(query, function (err, recordset) {
//    
//              if (err) console.log(err)
//        
//              // send records as a response
//              res.send(recordset);
//              //sql.close();
//          });
//      },
//      saveUser: function (user, req, res) {
//          var query = `INSERT INTO USUARIOS VALUES 
//          (
//              ${user.TipoUsuario},
//              ${user.Mail},
//              ${user.Password},
//              ${user.AddedDate},
//              ${user.LastLogin},
//              ${user.Nombre},
//              ${user.Apellido},
//              ${user.Direccion}
//          )`
//          
//          request.query(query, function (err, recordset) {
//    
//              if (err) console.log(err)
//        
//              // send records as a response
//              res.send(recordset);
//              //sql.close();
//          });
//      },
//      ObtenerTipoUsuario: function (user, req, res) {
//          var query = `SELECT * FROM TipoUsuario`
//          
//          request.query(query, function (err, recordset) {
//    
//              if (err) console.log(err)
//        
//              // send records as a response
//              res.send(recordset);
//              //sql.close();
//          });
//      }
//  };
//}