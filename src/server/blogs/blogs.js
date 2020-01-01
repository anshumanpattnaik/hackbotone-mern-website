const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const { Schema } = mongoose;
const blogSchema = new mongoose.Schema({
  thumb: {
    type: String,
    required: true
  },
  title: {
    type: String,
    text: true,
    required: true
  },
  short_title: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
    required: true
  },
  short_description: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  formatted_date: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});
blogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Blog", blogSchema);
