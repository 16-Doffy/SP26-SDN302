var express = require('express');
var memberRouter = express.Router();
const memberController = require('../controller/memberController')

memberRouter.route('/')
   .post(memberController.login)

module.exports = memberRouter;
