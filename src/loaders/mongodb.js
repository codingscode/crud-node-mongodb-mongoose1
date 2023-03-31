import mongoose from 'mongoose' // const mongoose = require('mongoose')



/* async function startDB() {

   await mongoose.connect('mongodb+srv://hp:v4GWcE9D4ubCxdIw@cluster0.rfk8q9u.mongodb.net/?retryWrites=true&w=majority')
} */

 const startDB = async () =>  {
   
   
   await mongoose.connect('mongodb://localhost:27017')
}


export default startDB // module.exports = startDB

//await mongoose.connect('mongodb+srv://hp:v4GWcE9D4ubCxdIw@cluster0.rfk8q9u.mongodb.net/?retryWrites=true&w=majority')
