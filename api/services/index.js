var sql = require('mssql');

exports.config = new sql.ConnectionPool({
    user: 'ImppaNode',
    password: 'Lagash2016',
    server: 'localhost', 
    database: 'Imppa' 
});


