const userService = require('../services/UserService')

class UserController {

    async getAll(req, res) {
        try {
            const users = await userService.getAll();
            res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async get(req, res) {
        try {
            const {id} = req.params;
            const user = await userService.get(id);
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async create(req, res) {
        try {
            const user = await userService.create(req.body);
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await userService.update(req.body);
            res.json(updatedUser);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const user = await userService.delete(id);
            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new UserController();