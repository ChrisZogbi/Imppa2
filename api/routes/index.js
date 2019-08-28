var users = require('./userRoutes')

exports.assignRoutes = function (app) {
    app.get('/users', users.getUsers);
    app.post('/users', users.addUser);
    app.put('/users', users.updateUser);
    app.delete('/users', users.deleteUser);
}