var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Blog = require("./blogs");
mongoose.connect("mongodb://127.0.0.1:27017/blogs");

/* GET blogs listing. */
router.get("/getAllBlogs", (req, res) => {
  const { page, perPage } = req.query;
  const options = {
    sort: { date: -1 },
    page: parseInt(page, 6) || 1,
    limit: parseInt(perPage, 6) || 6
  };

  Blog.paginate({}, options).then(function(result) {
    res.json(result);
  });
});

router.get("/searchblog", (req, res) => {
  var search = req.query.search;
  const { page, perPage } = req.query;
  const options = {
    sort: { date: -1 },
    page: parseInt(page, 6) || 1,
    limit: parseInt(perPage, 6) || 6
  };

  if (search == "") {
    Blog.paginate({}, options).then(function(result) {
      res.json(result);
    });
  } else {
    Blog.paginate(
      { $text: { $search: search, $caseSensitive: false } },
      options
    ).then(function(result) {
      res.json(result);
    });
  }
});

router.get("/blog/:short_title", (req, res) => {
  const short_title = req.params.short_title;

  Blog.findOne({ short_title: short_title }, function(err, result) {
    if (err) {
      console.log("Error in Fetching record");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
