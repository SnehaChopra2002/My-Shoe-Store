require("dotenv").config();
const jsonPoducts = require("./shoes.js");
const connectDB = require("./db/connect");
const prodSchema = require("./models/products");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await prodSchema.create(jsonPoducts)
    console.log("connected to database");
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
};
start();
