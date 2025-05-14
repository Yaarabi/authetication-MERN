
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            username, email, password : hashedPassword
        })
        await user.save();
        res.status(201).json({ message : "regestration successfuly" });
    } catch (error) {
        res.status(500).json({ error : "regestration failed" });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if(!user){
            return res.status(401).json({ error : "Authentication failed" })
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            return res.status(401).json({ error : "Authentication failed" })
        }

        // JWT
        const token = jwt.sign({ userId : user._id, email: user.email }, process.env.SEC_TOKEN, { expiresIn: "1h" })
        res.status(401).json({ token })
    } catch (error) {
        res.status(500).json({ error : "Authentication failed" })
    }
}