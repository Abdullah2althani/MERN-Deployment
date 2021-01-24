const ProjectController = require("../controllers/exam.controller");
const Users = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/Projects', ProjectController.create);
    app.get('/api/Projects', ProjectController.getAll);
    app.get('/api/Projects/:_id', ProjectController.getOne);
    app.put('/api/Projects/:_id', ProjectController.update);
    app.delete('/api/Projects/:_id', ProjectController.delete);

    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/logout", Users.logout);
};