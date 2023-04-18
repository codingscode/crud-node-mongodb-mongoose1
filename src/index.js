
import app from './app'
import Loaders from './loaders/index'


Loaders.start()


app.listen(3333, () => console.log('Servidor está executando'))
