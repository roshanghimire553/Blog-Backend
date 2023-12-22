const express = require("express");
const {
  createBlog,
  getOneBlog,
  findAllBlog,
  deleteSingleBlog,
  updateBlog,
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

//route to update blog
router.route("/:blogId").put(updateBlog);
module.exports = router;
