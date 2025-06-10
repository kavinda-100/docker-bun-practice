import express from "express";
import postRoute from "./post.route";

const router = express.Router();

// post route
router.use("/posts", postRoute);

export default router;
