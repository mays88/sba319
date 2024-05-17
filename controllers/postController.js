import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const posts = await db.collection("posts");

export const getPosts = async (req, res) => {
    const result = await posts.find().toArray();

    if (!result) res.send("Not Found").status(404);
    else
        res.status(200).json({
            status: "Success",
            results: result.length,
            data: { result },
        });
};

export const getPost = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const post = await posts.findOne(query);

    if (!post) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            post,
        },
    });
};

export const createPost = async (req, res) => {
    const post = req.body;

    const result = await posts.insertOne(post);

    res.status(201).json({
        status: "Success",
        data: {
            post,
        },
    });
};

export const updatePost = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    let post = await posts.updateMany(query, {
        $set: req.body,
    });

    res.status(200).json({
        status: "Success",
        data: {
            post,
        },
    });
};

export const deletePost = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const post = await posts.deleteOne(query);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Invalid ID",
        });
    }

    res.status(204).json({
        status: "Success",
        data: null,
    });
};
