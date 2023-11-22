const mongoose = require("mongoose")

const mongodbUrl = "mongodb+srv://pm:pooja@cluster0.cyqtjhw.mongodb.net/eccom"

const connectDb = ()=>{
  return mongoose.connect(mongodbUrl);
}

module.exports={connectDb}
