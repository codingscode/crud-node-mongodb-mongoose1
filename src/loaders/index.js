
import startDB from './mongodb' // const startDB = require('./mongodb')


const Loaders =  {

   start : () => {
      startDB()
   }
}

/* const Loaders = () => {

   const start = () => {
      startDB()
   }
} */


/* class Loaders {
   start() {
      startDB()
   }

} */

export default Loaders

//export default Loaders // module.exports = new Loaders()

