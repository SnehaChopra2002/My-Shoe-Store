// imports
require("dotenv").config();
const products=require('./routes/product')
const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const cors = require('cors')

// middleware
app.use(cors())
app.use(express.json());

// routes
app.use('/api/v1/shoes',products)

// ErrorHandlers

// Port
const PORT = process.env.PORT || 3000;

// start
const start = async () => {
  try {
    // first connect to database then listen
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}....`);
    });
  } catch (error) {}
};

start();
