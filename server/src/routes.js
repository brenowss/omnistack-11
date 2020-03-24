const express = require("express");

const OngController = require("./controllers/OngControllers");
const IncidentController = require("./controllers/IncidentControllers");
const ProfileController = require("./controllers/ProfileControllers");
const SessionController = require("./controllers/SessionController");


const connection = require("./database/connection");

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);



module.exports = routes;
