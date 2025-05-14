
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./config/mongoDb.js"
import authRouter from "./router/authRouter.js"
import protRouter from "./router/protRouter.js"



dotenv.config()
const port = process.env.PORT


const app = express();
app.use(cors());
app.use(express.json());

connectDb()

app.use("/auth", authRouter);
app.use("/protected", protRouter)


// const posts = [
//     {
//         user: 'jim',
//         title: "post 1"
//     },
//     {
//         user: 'simo',
//         title: "post 2"
//     }
// ]


// app.get('/posts', (req,res)=>{
//     res.json(posts)
// })

// app.post("/login", (req,res)=>{
//     // Authentication User

//     const user = req.body.user
//     const username = { name: user }

//     const accessToken = jwt.sign(user, process.env.SEC_TOKEN)
//     res.json({ accessToke : accessToken })
// })

app.listen(port, ()=>{
    console.log(`the server is connected on ${port} link : http://localhost:5000`)
})

