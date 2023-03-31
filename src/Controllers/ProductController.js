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
      const { batatinha } = req.params
      
      const product = await ProductModel.findById(batatinha)
      
      if (!product) {
         return res.status(404).json({ message: 'Produto inexistente' })
      }
   
      return res.status(200).json(product)

   }
   catch (err) {
      return res.status(404).json({ message: 'Verifique o id do produto' })
   }

}

export const update = async () => {

}

export const destroy = async () => {

}   
   

//}



//export default ProductController // module.exports = new ProductController()
