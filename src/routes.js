
import { Router } from 'express' // const { Router } = require('express')

import { store } from './Controllers/ProductController' // const ProductController = require('./Controllers/ProductController')


const routes = Router()

routes.get('/health', (req, res) => {

   return res.status(200).json({message: 'Servidor está on...'})
})

routes.post('/products', store)


export default routes // module.exports = routes
