import express, {type Request, type Response} from "express";

const router = express.Router();

// post route
router.get("/", (req: Request, res: Response) => {
    res.send("Post route is working! 🚀");
})

export default router;