const express = require('express');
const router = express.Router();
const alunoService = require('../services/aluno.service.mongo')

router.get('/list', function(req, res, next) {
    alunoService.list(req, res);
})

router.post('/register', function(req,res,next) {
    alunoService.register(req, res);
})

router.put('/update/:id', function(req, res, next) {
    alunoService.update(req, res);
})

router.delete('/delete/:id', function(req, res, next) {
    alunoService.delete(req, res);
})

router.get('/retrieve/:id', function(req, res) {
    alunoService.retrieve(req, res);
})

module.exports = router;