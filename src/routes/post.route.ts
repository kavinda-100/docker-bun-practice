import express, {type Request, type Response} from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// post route
router.get("/", (req: Request, res: Response) => {
    res.send(`Post route is working! 🚀. Post id is - ${uuidv4()}`);
})

export default router;