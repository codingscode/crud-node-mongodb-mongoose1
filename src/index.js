
import app from './app'  // const app = require('./app')
import Loaders from './loaders/index'  // const Loaders = require('./loaders/index')



Loaders.start()


app.listen(3333, () => console.log('Servidor está executando'))
