const AnimalPerdido = require('../models/AnimalPerdido')

module.exports = {
    async listar(req, res) {
        const animalperdido = await AnimalPerdido.findAll()
        // vai listar todos os animalperdido que existem na tabela animalperdido
        return res.json(animalperdido)
    },

    async cadastrar(req, res) {
        const animalperdido = await AnimalPerdido.create({
               nome: req.body.nome,
               bairro: req.body.bairro,
               rua: req.body.rua,
               raca: req.body.raca,
               porte: req.body.porte,
               sexo: req.body.sexo,
               aindaPerdido: req.body.aindaPerdido,
               descricao: req.body.descricao,
               telefone: req.body.telefone,
               email: req.body.email,
               idade: req.body.idade,
               nomeDoProprietario: req.body.nomeDoProprietario
        })
        // vai criar um novo animalperdido dentro da tabela animalperdido

        return res.json(animalperdido)
    },

    async deletar(req, res) {
        const {id} = req.params
        // a constante id irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

        if(id){
            const animalperdido = AnimalPerdido.findOne({
                where: { id }
            })
            // vai procurar dentro da tabela animalperdido um animalperdido
            // que tenha o id inserido na rota da requisição

            ;(await animalperdido).destroy(AnimalPerdido.id)
            // vai destruir o animalperdido com o id correspondente a rota

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
        let animalperdido = await AnimalPerdido.findByPk(req.params.id)
        // a constante animalperdido irá receber o id do animalperdido
        // inserido na rota da requisição
        if(animalperdido){
            animalperdido = await animalperdido.update(req.body)
            // irá rebecer os valores a serem modificados dentro da tabela
            // e vai salvar os valores
            return res.json(animalperdido)
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