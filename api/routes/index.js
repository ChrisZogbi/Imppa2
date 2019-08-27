const express = require('express')
var users = require('./userRoutes')

exports.assignRoutes = function (app) {
    app.get('/users', users.getUsers);
    app.post('/users', users.addUser);
    app.put('/users/:userId', users.updateUser);
    app.delete('/users/:userId', users.deleteUser);
}