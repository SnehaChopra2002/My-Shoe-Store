const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
    required: true,
  },
  prevPrice: {
    type: String,
    required: true,
  },
  newPrice: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
//     title: "Nike Air Monarch IV",
//     star: <AiFillStar className="rating-star" />,
//     reviews: "(123 reviews)",
//     prevPrice: "$140,00",
//     newPrice: "200",
//     company: "Nike",
//     color: "white",
//     category: "sneakers",
