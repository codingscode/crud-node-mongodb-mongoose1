import express from 'express' // const express = require('express')
import routes from './routes'  // const routes = require('./routes')


const app = express()

app.use(express.json())
app.use(routes)


export default app // module.exports = app


