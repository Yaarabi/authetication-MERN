
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDb = async () => {
    await mongoose.connect(process.env.URI)
    .then(()=>{
        console.log("Database is connected seccufuly")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export {connectDb}