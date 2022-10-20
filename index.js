import express from "express"
import { connectdatabase } from "./database/index.js"
import authRouter from "./routes/auth.js"
import cors from "cors"
let app = express()
app.use(cors()) 
app.use(express.json())
await connectdatabase()
app.use(authRouter)
const port = process.env.PORT||8080

app.listen(port,(req,res)=>{
console.log(` listening on http://localhost:${port}`)
})