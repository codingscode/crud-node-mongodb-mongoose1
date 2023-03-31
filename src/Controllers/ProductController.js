import ProductModel from '../Models/ProductModel' // const ProductModel = require('../Models/ProductModel')



//class ProductController {
   
export const store = async (req, res) => {
   const createdProduct = await ProductModel.create(req.body)
   
   return res.status(200).json(createdProduct)
}

export const index = async (req, res) => {
   const products = await ProductModel.find()
   
   return res.status(200).json(products)
}

export const show = async (req, res) => {

   try {
      const { id } = req.params
      
      const product = await ProductModel.findById(id)
      
      if (!product) {
         return res.status(404).json({ message: 'Produto inexistente' })
      }
   
      return res.status(200).json(product)

   }
   catch (err) {
      return res.status(404).json({ message: 'Verifique o id do produto' })
   }
   
}

export const update = async (req, res) => {
   try {
      const { id } = req.params
      
      await ProductModel.findByIdAndUpdate(id, req.body)

      return res.status(200).json({ message: 'Produto atualizado' })
   }
   catch (err) {
      return res.status(404).json({ message: 'Falha ao atualizar produto' })

   }
   
   
}

export const destroy = async (req, res) => {
   
   try {
      const { id } = req.params
      
      const productDeleted = await ProductModel.findByIdAndDelete(id)
      
      if (!productDeleted) {
         return res.status(404).json({ message: 'Produto inexistente' })
      }
   
      return res.status(200).json({ message: 'Produto deletado' })

   }
   catch (err) {
      return res.status(404).json({ message: 'Falha ao deletar produto' })
   }

}   






//export default ProductController // module.exports = new ProductController()
