import { getUsers, addUser, updateUser, deleteUser, loginUser } from './userRoutes'
import { getTipoUsuario, addTipoUsuario, updateTipoUsuario, deleteTipoUsuario } from './tipoUsuarioRoutes'

export function assignRoutes(app) {
    app.route('/users/')
        .get(getUsers)
        .post(addUser)
        .put(updateUser)
        .delete(deleteUser);
    
    app.route('/login/')
        .post(loginUser);

    app.route('/tipoUsuario/')
        .get(getTipoUsuario)
        .post(addTipoUsuario)
        .put(updateTipoUsuario)
        .delete(deleteTipoUsuario);
}