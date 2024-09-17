const AlunoModel = require('../models/aluno.models');

class AlunoService {
    static register(req, res) {
        AlunoModel.create(req.body).then(user => {
            return res.status(201).json(user);
        })
    }

    static list(req, res) {
        AlunoModel.find().then(alunos => {
            res.status(200).json(alunos);
        });
    }

    static update(req, res) {
        AlunoModel.findByIdAndUpdate(req.params.id, req.body, {'new': true })
            .then(aluno => {
                res.status(200).json(aluno);
            })
    }

    static delete(req, res) {
        AlunoModel.findByIdAndDelete(req.params.id)
            .then(aluno => {
                res.status(200).json(aluno);
            })
    }

    static retrieve(req, res) {
        AlunoModel.findById(req.params.id)
            .then(aluno => {
                res.status(200).json(aluno);
            })
    }
    
}

module.exports = AlunoService;