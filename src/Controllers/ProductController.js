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

export const show = async () => {

}
export const update = async () => {

}

export const destroy = async () => {

}   
   

//}



//export default ProductController // module.exports = new ProductController()
