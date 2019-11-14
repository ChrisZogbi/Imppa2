import app from "../app.js";
import { pool } from "./index";
//import { Request } from "mssql";

export function getUserByMailContrasenia (req, res) {
    var query = `SELECT * FROM Usuarios where Mail = ? and Contrasenia = ?`;
    pool.promise().query(query, [req.body.Mail, req.body.Pass])
        .then( ([rows,fields]) => {
            console.log(query);
            console.log(req.body.Mail + req.body.Pass);
            var data;
            if(rows.length == 1)
            {
                data = 
                {
                    "ID": rows[0].ID,
                    "TipoUsuario": rows[0].TipoUsuario,
                    "Mail": rows[0].Mail,
                    "Contrasenia":rows[0].Contrasenia,
                    "AddedDate": rows[0].AddedDate,
                    "LastLogin": rows[0].LastLogin,
                    "Nombre": rows[0].Nombre,
                    "Apellido": rows[0].Apellido,
                    "Telefono1": rows[0].Telefono1,
                    "Telefono2":rows[0].Telefono2,
                    "Habilitado": rows[0].Habilitado == 0 ? true : false
                }
                console.log(data);
            }
            
            res.json(data);
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

    var query =  `INSERT INTO Usuarios SET ?`
    //`INSERT INTO Usuarios VALUES (4, ${Usuario.TipoUsuario}, '${Usuario.Mail}', '${Usuario.Contraseña}', '${Usuario.AddedDate}', '${Usuario.LastLogin}', '${Usuario.Nombre}', '${Usuario.Apellido}',  ${Usuario.Telefono1}, ${Usuario.Telefono2}, ${Usuario.Habilitado})`;

    console.log(query);
    pool.promise().query(query, [req.body])
        .then( ([rows,fields]) => {
            res.status(200).json("Ok.")
        })
        .catch(console.log)
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
