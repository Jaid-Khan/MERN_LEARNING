const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  sub_category: [
    {
      sc_name: {
        type: String,
        required: true,
      },
      route: {
        type: String,
        required: true,
      },
    },
  ],
  route: {
    type: String,
    required: true,
  },
});

const Categories = mongoose.model("Categories", categorySchema);
module.exports = Categories;
