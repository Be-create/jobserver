import express from "express"
import { connectdatabase } from "./database/index.js"
import authRouter from "./routes/auth.js"
import cors from "cors"
let app = express()
app.use(cors()) 
app.use(express.json())
app.get("/",(req,res)=>{
res.send("server started")
})


app.use(authRouter)
const port = process.env.PORT ||8080

app.listen(port,async(req,res)=>{
    try {
  await  connectdatabase()
     
        console.log(` listening on http://localhost:${port}`)
    } catch (error) {
        console.log(error)
    }
})