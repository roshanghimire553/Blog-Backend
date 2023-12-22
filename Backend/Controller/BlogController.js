const BlogModel = require("../Model/BlogModel");

//creating controller for creating Blog//
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;

    //for checking if existing category is available or not //
    const existingBlog = await BlogModel.findOne({ category });
    if (existingBlog) {
      return res.status(400).json({
        success: false,
        message: "Same Category Already Exist Use Different",
      });
    }
    const blogD = await BlogModel.create({
      title,
      description,
      category,
    });
    return res.status(201).json({
      success: true,
      message: "Blog Created successfull",
      data: blogD,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//creating controller for getting single Blog by ID//

exports.getOneBlog = async (req, res) => {
  const Blogid = req.params.id;
  try {
    const blog = await BlogModel.findById(Blogid);
    if (!blog) {
      return res.status(400).json({
        message: "Cannot Find Blog ",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog Found Successfull",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//creating controller fo finding all Blog

exports.findAllBlog = async (req, res) => {
  try {
    const AllBlog = await BlogModel.find({});
    return res.status(200).json({
      success: true,
      message: " All Blog Found Successfull",
      data: AllBlog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Blog cannot found",
    });
  }
};

//creating controller to delete single blog//

exports.deleteSingleBlog = async (req, res) => {
  const BlogId = req.params.BlogId;
  try {
    const checkBlog = await BlogModel.findById(BlogId);
    if (!checkBlog) {
      return res.status(400).json({
        message: "Blog does not Exist",
      });
    }
    await BlogModel.findByIdAndDelete(BlogId);
    return res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//controller for updating blog//
exports.updateBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const blogId = req.params.blogId; // Assuming you have a route parameter for the blog ID

    // Check if the blog with the given ID exists
    const existingBlog = await BlogModel.findById(blogId);
    if (!existingBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    existingBlog.title = title;
    existingBlog.description = description;
    existingBlog.category = category;

    const updatedBlog = await existingBlog.save();

    return res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
