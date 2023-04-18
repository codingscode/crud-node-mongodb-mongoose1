import mongoose from 'mongoose'


const startDB = async () =>  {
      
   await mongoose.connect('mongodb://localhost:27017/meuteste')
}

export default startDB
