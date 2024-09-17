class LoginService {
    static login(req, res) {
        const loginBanco = "usuario1";
        const senhaBanco = "123456";

        // recebe os valores enviados no corpo da requisição pelo front end
        const { login, senha } = req.body;

        if(login == loginBanco && senha == senhaBanco) {
            return res.status(200).json({res: true});
        } else {    
            return res.status(200).json({res: false});
        }
    }
}

module.exports = LoginService