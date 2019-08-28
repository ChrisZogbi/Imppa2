var UserService  = require('../services/UserService');

 exports.getUsers = function(req, res) {
   console.log("llego al controller"); 
   var data = UserService.getUsers(req, res);
   return(data);
 };
 
 exports.addUser = function(req, res) {
    console.log(req.body);
    return(UserService.addUser(req, res));
};