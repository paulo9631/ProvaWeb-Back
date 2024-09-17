const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    curso: { type: String, required: true },
    ira: { type: Number, required: true },
})

const AlunoModel = mongoose.model('alunos', AlunoSchema);

module.exports = AlunoModel;