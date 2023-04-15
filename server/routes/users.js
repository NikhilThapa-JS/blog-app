const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.getUsers);

router.get('/:searchName', userController.getUser);

router.post('/', userController.postUser);

router.put('/:id', userController.putUser);

router.delete('/:id', userController.deleteUser);

module.exports = router;
