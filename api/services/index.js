var sql = require("mssql");

exports.config = {
    user: 'ImppaNode',
    password: 'Lagash2016',
    server: 'localhost', 
    database: 'Imppa' 
};

exports.ConectarDB = function()
{
    sql.connect(config);
}

