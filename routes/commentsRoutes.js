import express from "express";
import {
    getComment,
    getComments,
    updateComment,
    deleteComment,
    createComment,
} from "../controllers/commentController.js";

export const router = express.Router();

//Routes
router.route("/").get(getComments).post(createComment);

router.route("/:id").get(getComment).patch(updateComment).delete(deleteComment);
