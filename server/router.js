const express = require('express');
const router = express.Router();

const userController = require('./controllers/UserController');

router.get('/users', userController.getAll);
router.get('/users/:id', userController.get);
router.post('/users', userController.create);
router.put('/users', userController.update)
router.delete('/users/:id', userController.delete);

module.exports = router;
