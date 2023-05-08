const Especie = require('../models/Especie')

module.exports = {
    async listar(req, res) {
        const especies = await Especie.findAll()

        return res.json(especies)
    },

    async cadastrar(req, res) {

        const especies = await Especie.create({ 
            nomeEspecie: req.body.nomeEspecie,
        })

        return res.json(especies)
    },

    async alterar(req, res) {
        let especie = await Especie.findByPk(req.params.id)
        // a constante especie irá receber o id do especie
        // inserido na rota da requisição
        if(especie){
            especie = await especie.update(req.body)
            // irá rebecer os valores a serem modificados dentro da tabela
            // e vai salvar os valores
            return res.json(especie)
        }else{
            // se o id que foi inserido da rota 
            // não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    },

    async deletar(req, res) {
        const {id} = req.params
        // a constante id irá receber o valor 
        // que foi colocado na rota da requisição
        // se o valor existir ele vai executar

        if(id){
            const especie = Especie.findOne({
                where: { id }
            })
            // vai procurar dentro da tabela usuarios um especie
            // que tenha o id inserido na rota da requisição

            ;(await especie).destroy(Especie.id)
            // vai destruir o especie com o id correspondente a rota

            res.json(
                {
                    message: "Especie deletada com sucesso"
                }
            )
        }else{
            // se o id que foi inserido da rota não existir ele vai mandar
            // uma mensagem de erro
            return res.status(404).json({
                message: 'deu errado'
            })
        }
    }
}