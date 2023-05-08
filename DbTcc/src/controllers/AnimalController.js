const Animal = require('../models/Animal')

module.exports = {
    async listar(req, res) {
        const animais = await Animal.findAll()
        // vai listar todos os usuarios que existem na tabela usuarios

        // vai buscar todos os dados da tabela usuario e irá
        // monstrar eles juntos com os animais associados aos
        // usuarios existentes

        return res.json(animais)
    },
    async listarUm(req, res) {
        const id = req.params.id
        if(id){
            const animal = await Animal.findOne({
                where: { id }
            })
            return res.json(animal)
        }
    },

    async cadastrar(req, res) {
        const{ idEspecie } = req.params

        // a constante idUsuario irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

        if (idEspecie) {
                const animais = await Animal.create({
                    nome: req.body.nome,
                    pelagem: req.body.pelagem,
                    sexo: req.body.sexo,
                    porte: req.body.porte,
                    nascimento: req.body.nascimento,
                    descricao: req.body.descricao,
                    interessados: req.body.interessados,
                    idEspecie
                })
                // vai criar um animal pra tabela
                return res.json(animais)
        }
        // se o idUsuario que foi inserido da rota 
        // não existir ele vai mandar
        // uma mensagem de erro
        return res.status(404).json({
            message: 'deu errado'
        })
    },

    async deletar(req, res) {
            const { id } = req.params
            // a constante id (referente a tabela animal) irá receber o valor 
            // que foi colocado na rota da requisição
            if (id) {
                const animal = Animal.findOne({
                    where: { id }
                })
                    // vai procurar na tabela o animal que tenha o
                    // id enviado na rota da requisição
                    ; (await animal).destroy(Animal.id)
                // encontrado o animal ele será deletado da tabela

                res.json()
            } else {
            // se o idUsuario ou o id referente a tabela animal
            // que foi inserido da rota não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },

    async alterar(req, res) {
        let animal = await Animal.findByPk(req.params.id)
        // a constante usuario irá receber o id do animal
        // inserido na rota da requisição
        if (animal) {
            animal = await animal.update(req.body)
            // irá rebecer os valores a serem modificados dentro da tabela
            // e vai salvar os valores
            return res.json(animal)
        } else {
            // se o id que foi inserido da rota 
            // não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },
}