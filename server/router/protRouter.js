
import e from "express";
import { middleware } from "../middleware/authMiddleware.js";


const router = e.Router();

router.get("/profile", middleware, (req, res) =>{
    res.json({ message: "you are authenticated", user: req.userData })
})

export default router