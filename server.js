import express from "express";
import { router as usersRouter } from "./routes/usersRoutes.js";
import { router as postsRouter } from "./routes/postsRoutes.js";
import { router as commentsRouter } from "./routes/commentsRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/comments", commentsRouter);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
    res.status(500).send("Server Error!");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
