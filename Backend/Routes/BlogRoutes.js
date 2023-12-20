const express = require("express");
const {
  createBlog,
  getOneBlog,
  findAllBlog,
  deleteSingleBlog,
} = require("../Controller/BlogController");
const router = express.Router();

//route to create Blog//
router.route("/create").post(createBlog);

//route to get single Blog//
router.route("/:id").get(getOneBlog);

//route to find all blog list//
router.route("/").get(findAllBlog);

//route to delete blog by blog id

router.route("/:BlogId").delete(deleteSingleBlog);

module.exports = router;
