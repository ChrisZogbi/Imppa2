import { ConnectionPool } from 'mssql';

export const config = new ConnectionPool({
    user: 'ImppaNode',
    password: 'Lagash2016',
    server: 'localhost', 
    database: 'Imppa' 
});


