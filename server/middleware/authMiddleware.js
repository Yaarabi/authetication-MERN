
import jwt from "jsonwebtoken"

export const middleware = (req, res, next) =>{
    try {
        const token = req.headers.authorization.splice(" ")[1]
        if(!token){
            return res.status(401).json({ error : "No token provided" })
        }

        const decodedToken = jwt.verify(token, process.env.SEC_TOKEN);
        req.userData = { userId : decodedToken.userId, email: decodedToken.email }
        next()
    } catch (error) {
        res.status(401).json({ error : "Invalid authentication token" })
    }
}