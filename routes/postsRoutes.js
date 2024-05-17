import express from "express";
import {
    getPost,
    getPosts,
    updatePost,
    deletePost,
    createPost,
} from "../controllers/postController.js";

export const router = express.Router();

//Routes
router.route("/").get(getPosts).post(createPost);

router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);
