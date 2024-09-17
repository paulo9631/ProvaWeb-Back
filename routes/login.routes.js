const express = require('express');
const router = express.Router();
const loginService = require('../services/login.service')

// uma rota do tipo post é criada para receber os dados de login e validá-los
router.post('/login', function(req, res, next) {
    loginService.login(req, res);
})

module.exports = router;