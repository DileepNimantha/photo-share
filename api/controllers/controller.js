'use strict';
var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.getAllUsers = function (req, res) {
    console.log("Getting all users...");
    User.find({}, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user);
    });
};

exports.createUser = function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user);
    })
};

exports.getUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user);
    })
};

exports.updateUser = function (req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user);
    });
};

exports.deleteUser = function (req, res) {
    User.remove({ _id: req.params.userId }, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json({ message: "User deleted successfully." });
    });
};

exports.getAllPicturesByUser = function (req, res) {
    console.log("Getting all pictures...");
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(user.photos);
    });
};

exports.addPicture = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            user.photos.push(req.body);
            user.save();
            res.json(user);
        }
    });
};

exports.getPicture = function (req, res) {
    User.find({ 'photos._id': req.params.pictureId }, function (err, picture) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        res.json(picture);
    });
};

exports.updatePicture = function (req, res) {
    User.update({ 'photos._id': req.params.pictureId },
        { '$set': { 'photos.$': req.body } },
        function (err, user) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.json(user);
        });
};

exports.deletePicture = function (req, res) {
    User.findOneAndUpdate(
        { 'photos._id': req.params.pictureId },
        {
            $pull: { photos: { _id: req.params.pictureId } }
        },
        { new: true },
        function (err, doc) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.json(doc);
        });
};
