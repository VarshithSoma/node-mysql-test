const express = require("express");
const postControllers = require("../controllers/postControllers");
const Router = express.Router();
Router.route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);
Router.route("/:id").get(postControllers.getPostById);
module.exports = Router;
