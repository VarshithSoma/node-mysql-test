const Post = require("./../models/Post");
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.status(200).json({
      posts,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.createNewPost = async (req, res) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(201).send({
      msg: "Post Created",
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getPostById = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.status(200).json({ post: post[0] });
  } catch (err) {
    console.log(err);
  }
};
