import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const comments = await db.collection("comments");

export const getComments = async (req, res) => {
    const result = await comments.find().toArray();

    if (!result) res.send("Not Found").status(404);
    else
        res.status(200).json({
            status: "Success",
            results: result.length,
            data: { result },
        });
};

export const getComment = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const comment = await comments.findOne(query);

    if (!comment) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            comment,
        },
    });
};

export const createComment = async (req, res) => {
    const comment = req.body;

    const result = await comments.insertOne(comment);

    res.status(201).json({
        status: "Success",
        data: {
            comment,
        },
    });
};

export const updateComment = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    let comment = await comments.updateMany(query, {
        $set: req.body,
    });

    res.status(200).json({
        status: "Success",
        data: {
            comment,
        },
    });
};

export const deleteComment = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const comment = await comments.deleteOne(query);

    if (!comment) {
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
