import { getUsers, addUser, updateUser, deleteUser, loginUser } from './userRoutes'

export function assignRoutes(app) {
    app.route('/users/')
        .get(getUsers)
        .post(addUser)
        .put(updateUser)
        .delete(deleteUser);
    
    app.route('/login/')
        .get(loginUser);
    //  app.get('/users', users.getUsers)
    //  app.post('/users', users.addUser)
    //  app.put('/users', users.updateUser)
    //  app.delete('/users', users.deleteUser)
    //  app.get('/login', users.login)
}
// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });