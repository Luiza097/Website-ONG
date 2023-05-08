const Formulario = require('../models/Formulario')
const Animal = require('../models/Animal')

module.exports = {
    async listar(req, res) {
        const formulario = await Formulario.findAll()
        // vai buscar todos os dados da tabela Animal e irá
        // monstrar eles juntos com os formularios associados aos
        // Animals existentes

        return res.json(formulario)
    },

    async listarUm(req, res) {
        const id = req.params.id
        if(id){
            const formulario = await Formulario.findOne({
                where: { id }
            })
           return res.json(formulario)
        }
    },


    async cadastrar(req, res) {

        const { idAnimal } = req.params

        // a constante idAnimal irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

        if (idAnimal) {
                const formularios = await Formulario.create({
                       qtdAnimalCasa: req.body.qtdAnimalCasa,
                       tipoResidencia: req.body.tipoResidencia,
                       tipoPiso: req.body.tipoPiso,
                       dentroOuFora: req.body.dentroOuFora,
                       tempoDisponivel: req.body.tempoDisponivel,
                       animalPara: req.body.animalPara,
                       castrar: req.body.castrar,
                       alergia: req.body.alergia,
                       vacinaEvermifugar: req.body.vacinaEvermifugar,
                       nomeInteressado: req.body.nomeInteressado,
                       email: req.body.email,
                       idAnimal
                })
                // vai criar um formulario pra tabela
                return res.json(formularios)
        }
        // se o idAnimal que foi inserido da rota 
        // não existir ele vai mandar
        // uma mensagem de erro
        return res.status(404).json({
            message: 'deu errado'
        })
    },

    async deletar(req, res) {
        const { idAnimal } = req.params
        // a constante idAnimal irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar
        if (idAnimal) {
            const { id } = req.params
            // a constante id (referente a tabela formulario) irá receber o valor 
            // que foi colocado na rota da requisição
            if (id) {
                const formulario = Formulario.findOne({
                    where: { id }
                })
                    // vai procurar na tabela o formulario que tenha o
                    // id enviado na rota da requisição
                    ; (await formulario).destroy(Formulario.id)
                // encontrado o formulario ele será deletado da tabela

                res.json()
            }
        } else {
            // se o idAnimal ou o id referente a tabela formulario
            // que foi inserido da rota não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },

    async alterar(req, res) {
        let formulario = await Formulario.findByPk(req.params.id)
        // a constante Animal irá receber o id do formulario
        // inserido na rota da requisição
        if (formulario) {
            formulario = await formulario.update(req.body)
            // irá rebecer os valores a serem modificados dentro da tabela
            // e vai salvar os valores
            return res.json(formulario)
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