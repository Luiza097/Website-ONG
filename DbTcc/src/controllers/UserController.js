const Usuario = require('../models/User')

module.exports = {
    async listar(req, res) {
        const usuarios = await Usuario.findAll()
        // vai listar todos os usuarios que existem na tabela usuarios
        return res.json(usuarios)
    },

    async cadastrar(req, res) {
        const usuario = await Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })
        // vai criar um novo usuario dentro da tabela usuarios

        return res.json(usuario)
    },

    async deletar(req, res) {
        const {id} = req.params
        // a constante id irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

        if(id){
            const usuario = Usuario.findOne({
                where: { id }
            })
            // vai procurar dentro da tabela usuarios um usuario
            // que tenha o id inserido na rota da requisição

            ;(await usuario).destroy(Usuario.id)
            // vai destruir o usuario com o id correspondente a rota

            res.json()
        }else{
            // se o id que foi inserido da rota não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },

    async alterar(req, res) {
        let usuario = await Usuario.findByPk(req.params.id)
        // a constante usuario irá receber o id do usuario
        // inserido na rota da requisição
        if(usuario){
            usuario = await usuario.update(req.body)
            // irá rebecer os valores a serem modificados dentro da tabela
            // e vai salvar os valores
            return res.json(usuario)
        }else{
            // se o id que foi inserido da rota 
            // não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    }
}