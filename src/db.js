const mongoose = require('mongoose');



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/formula1');
  console.log("--->conectado a la base de datos")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = {main}