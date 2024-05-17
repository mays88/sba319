// import { users } from "../data/users.js";
import db from "../db/conn.js";
export const getUsers = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Route handler not created yet",
    });
};

export const getUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Route handler not created yet",
    });
};

export const createUser = async (req, res) => {
    const collection = await db.collection("users");
    const user = req.body;

    const result = await collection.insertOne(user);

    // users.push(newUser);
    res.status(201).json({
        status: "Success",
        data: {
            user,
        },
    });
};

export const updateUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Route handler not created yet",
    });
};

export const deleteUser = (req, res) => {
    res.status(500).json({
        status: "error",
        message: "Route handler not created yet",
    });
};
