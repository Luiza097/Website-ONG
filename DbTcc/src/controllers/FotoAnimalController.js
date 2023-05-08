const FotoAnimal = require('../models/FotoAnimal')
const Animal = require('../models/Animal')
const AnimalPerdido = require('../models/AnimalPerdido')

module.exports = {
    async listar(req, res) {
        const fotoanimal = await FotoAnimal.findAll()
        // vai buscar todos os dados da tabela Animal e irá
        // monstrar eles juntos com os fotos associados aos
        // Animals existentes

        return res.json(fotoanimal)
    },

    async cadastrar(req, res) {

        //const { idAnimal } = await Animal.findByPk(idAnimal)

        //const { idAnimalPerdido } = await AnimalPerdido.findByPk(idAnimalPerdido)
        // a constante idAnimal irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

                const fotos = await FotoAnimal.create({
                       foto: req.body.foto,

                })
                // vai criar um fotoanimal pra tabela
                return res.json(fotos)
        if (idAnimalPerdido) {
            const fotos = await FotoAnimal.create({
                   foto: req.body.foto,
                   idAnimalPerdido
            })
            // vai criar um fotoanimal pra tabela
            return res.json(fotos)
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

        const { idAnimalPerdido } = await AnimalPerdido.findByPk(idAnimalPerdido)
        // a constante idAnimal irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar
        if (idAnimal) {
            const { id } = req.params
            // a constante id (referente a tabela fotoanimal) irá receber o valor 
            // que foi colocado na rota da requisição
            if (id) {
                const fotoanimal = FotoAnimal.findOne({
                    where: { id }
                })
                    // vai procurar na tabela o fotoanimal que tenha o
                    // id enviado na rota da requisição
                    ; (await fotoanimal).destroy(FotoAnimal.id)
                // encontrado o fotoanimal ele será deletado da tabela

                res.json()
            }
            
        }
        if (idAnimalPerdido) {
            const { id } = req.params
            // a constante id (referente a tabela fotoanimal) irá receber o valor 
            // que foi colocado na rota da requisição
            if (id) {
                const fotoanimal = FotoAnimal.findOne({
                    where: { id }
                })
                    // vai procurar na tabela o fotoanimal que tenha o
                    // id enviado na rota da requisição
                    ; (await fotoanimal).destroy(FotoAnimal.id)
                // encontrado o fotoanimal ele será deletado da tabela

                res.json()
            }
            
        }
        else {
            // se o idAnimal ou o id referente a tabela fotoanimal
            // que foi inserido da rota não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },

    async alterar(req, res) {
        let { idAnimal } = req.params

        let { idAnimalPerdido } = await AnimalPerdido.findByPk(idAnimalPerdido)
        // a constante idAnimal irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar
        if (idAnimal) {
            const { id } = req.params
            // a constante id (referente a tabela fotoanimal) irá receber o valor 
            // que foi colocado na rota da requisição
            if (id) {
                const fotoanimal = FotoAnimal.findOne({
                    where: { id }
                })
                fotoanimal = await fotoanimal.update(req.body)
                
                return res.json(fotoanimal)
            }
            
        }
        if (idAnimalPerdido) {
            const { id } = req.params
            if (id) {
                const fotoanimal = FotoAnimal.findOne({
                    where: { id }
                })
                fotoanimal = await fotoanimal.update(req.body)
                
                return res.json(fotoanimal)
            }
        }else {
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },
}