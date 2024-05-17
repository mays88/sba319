import db from "../db/conn.js";
import { ObjectId } from "mongodb";

const users = await db.collection("users");
export const getUsers = async (req, res) => {
    const result = await users.find().toArray();

    if (!result) res.send("Not Found").status(404);
    else
        res.status(200).json({
            status: "Success",
            results: result.length,
            data: { result },
        });
};

export const getUser = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const user = await users.findOne(query);

    if (!user) {
        return res.status(404).json({
            status: "Fail",
            message: "Invalid ID",
        });
    }

    res.status(200).json({
        status: "Success",
        data: {
            user,
        },
    });
};

export const createUser = async (req, res) => {
    const user = req.body;

    const result = await users.insertOne(user);

    res.status(201).json({
        status: "Success",
        data: {
            user,
        },
    });
};

export const updateUser = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };

    let user = await users.updateMany(query, {
        $set: req.body,
    });

    res.status(200).json({
        status: "Success",
        data: {
            user,
        },
    });
};

export const deleteUser = async (req, res) => {
    const query = { _id: new ObjectId(req.params.id) };
    const user = await users.deleteOne(query);

    if (!user) {
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
