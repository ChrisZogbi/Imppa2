var UserController = require('../controllers/UserController');

exports.getUsers = function(req, res) {
    console.log("GetUsers Route inicio");
    return(UserController.getUsers(req,res));
}

exports.addUser = function(req, res) {
    return(UserController.addUser(req, res));
}

exports.updateUser = function(req, res) {
    
}

exports.deleteUser = function(req, res) {
    
}