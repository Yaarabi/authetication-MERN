
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userename: {
        type: String,
        required: true,
    }
}, { timestamps:true })

export default User = mongoose.model("User", userSchema)