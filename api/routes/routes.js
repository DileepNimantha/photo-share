'use strict';
var routes = function (app) {
    var userController = require('../controllers/controller');

    app.route('/users')
        .get(userController.getAllUsers)
        .post(userController.createUser);

    app.route('/user/:userId')
        .get(userController.getUser)
        .delete(userController.deleteUser)
        .put(userController.updateUser);

    app.route('/user/:userId/pictures')
        .get(userController.getAllPicturesByUser)
        .post(userController.addPicture);

    app.route('/picture/:pictureId')
        .get(userController.getPicture)
        .delete(userController.deletePicture)
        .put(userController.updatePicture);
}

module.exports = routes;