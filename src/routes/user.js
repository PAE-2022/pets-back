const userRouter = require('express').Router();
const UserController = require('../controllers/user.controller');
const {handleError} = require('../utils/hof');

userRouter.post('/', handleError(async (req, res) => {

}));

