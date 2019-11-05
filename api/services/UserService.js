import app from "../app.js";
import { pool } from "./index";
//import { Request } from "mssql";

export function getUserByMailContrasenia (req, res) {
    var query = `SELECT * FROM Usuarios where Mail = ? and Contrasenia = ?`;
    pool.promise().query(query, [req.body.Mail, req.body.Pass])
        .then( ([rows,fields]) => {
            console.log(req.body.Mail + req.body.Pass);
            res.json(rows.length == 1);
            })
        .catch("Error:" + console.log)
}

export function getUsers(req, res)
{
    var query = `SELECT * FROM Usuarios`;

    pool.promise().query(query)
        .then( ([rows,fields]) => {
            console.log(rows);
            res.json(rows);
            })
        .catch(console.log)
        


    // var pool = config.connect(() => {
        
    //     const request = new Request(config)
    //     request.query(query, (err, result) => {
    //         if (err) res.json(err)
    //         else res.json(result.recordset);
    //     });
    // });
}

export function getUser(req, res)
{
    var pool = config.connect(() => {
        var query = `SELECT * FROM Usuarios WHERE ID = ${req.body.UserId}`
        const request = new Request(config)
        request.query(query, (err, result) => {
            if (err) res.json(err)
            else res.json(result.recordset);
        });
    });
}

export function addUser(req, res)
{
    var Usuario = req.body;

    var query =  `INSERT INTO Usuarios VALUES (${Usuario.TipoUsuario}, '${Usuario.Mail}', '${Usuario.Contraseña}', '${Usuario.AddedDate}', '${Usuario.LastLogin}', '${Usuario.Nombre}', '${Usuario.Apellido}', '${Usuario.Direccion}')`;

    console.log(query);
    var pool = config.connect(() => {
        const request = new Request(config)
        request.query(query, (err, result) => {
            if (err) res.json(err)
            else res.json("Se agrego correctamente el usuario");
        });
    });
}
export function updateUser(req, res)
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
    var pool = config.connect(() => {
        const request = new Request(config)
        request.query(query, (err, result) => {
            if (err) res.json(err)
            else res.json("Se actualizo correctamente el usuario.");
        });
    });
}

export function deleteUser(req, res)
{
    var UserId = req.body.UserId;

    var query = `DELETE FROM  [dbo].[Usuarios]
                WHERE [ID] = ${UserId}`; 

    var pool = config.connect(() => {
        const request = new Request(config)
        request.query(query, (err, result) => {
            if (err) res.json(err)
            else res.json("Se elimino correctamente el usuario.");
        });
    });
}
