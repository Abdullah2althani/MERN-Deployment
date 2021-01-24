const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

const ProjectManager = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            unique: true,
            minlength: [3, "{PATH} Project is required and must be {MINLENGTH} characters or longer  "],
        },

        date: {
            type: Date,
            required: [true, "{PATH} is required"],
        },
        status: {
            type: String,
            default: "start",
        },

    },
    { timestamps: true }
);
ProjectManager.plugin(uniqueValidator);
const Project = mongoose.model("Project", ProjectManager);

module.exports = Project;