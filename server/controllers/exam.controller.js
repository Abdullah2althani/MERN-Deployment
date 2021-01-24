const Project = require("../models/exam.model");

module.exports = {
    create(req, res) {
        Project.create(req.body)
            .then((Project) => {
                res.json(Project);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    getAll(req, res) {
        Project.find()
            .then((Projects) => {
                res.json(Projects);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getOne(req, res) {
        Project.findById(req.params._id)
            .then((Project) => {
                res.json(Project);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    update(req, res) {
        Project.findByIdAndUpdate(req.params._id, req.body, {
            runValidators: true,
            new: true,
        })
            .then((Project) => {
                res.json(Project);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },

    delete(req, res) {
        Project.findByIdAndDelete(req.params._id)
            .then((Project) => {
                res.json(Project);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};