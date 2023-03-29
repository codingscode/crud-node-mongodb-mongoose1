
const mongoose = require('mongoose')


async function startDB() {

   await mongoose.connect('mongodb+srv://hp:oAcQjgx6TiskmL8Z@cluster0.hwov2ir.mongodb.net/test')
}

module.exports = startDB


