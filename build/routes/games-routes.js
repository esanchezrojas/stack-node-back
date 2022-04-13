"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const games_controllers_1 = require("../controllers/games-controllers");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', games_controllers_1.gamesController.list);
        this.router.get('/:id', games_controllers_1.gamesController.getOne);
        this.router.post('/', games_controllers_1.gamesController.create);
        this.router.put('/:id', games_controllers_1.gamesController.update);
        this.router.delete('/:id', games_controllers_1.gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
