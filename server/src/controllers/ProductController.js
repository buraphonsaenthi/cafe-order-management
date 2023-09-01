const { Product } = require('../models')
module.exports = {
    // get all Product
    async index(req, res) {
        try {
            const products = await Product.findAll()
            res.send(products)
        } catch (err) {
            res.status(500).send({
                error: 'The Products information was incorrect'
            })
        }
    },
    // create Product
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const product = await Product.create(req.body)
            res.send(product.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create Product incorrect'
            })
        }
    },
    // edit Product, suspend, active
    async put(req, res) {
        try {
            await Product.update(req.body, {
                where: {
                    id: req.params.productId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Product incorrect'
            })
        }
    },
    
// delete Product
async remove(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    id: req.params.productId
                }
            })
            if (!product) {
                return res.status(403).send({
                    error: 'The Product information was incorrect'
                })
            }
            await product.destroy()
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: 'The Product information was incorrect'
            })
        }
    },
    // get Product by id
    async show(req, res) {
        try {
            const product = await Product.findByPk(req.params.productId)
            res.send(product)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Product information was incorrect'
            })
        }
    }
}
