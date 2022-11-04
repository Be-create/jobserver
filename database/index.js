import mongoose from 'mongoose'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

let Password = process.env.Mongo_password
export const connectdatabase =()=>{
    const connection = `mongodb+srv://benazirsultana:${Password}@cluster0.ahhggvd.mongodb.net/?retryWrites=true&w=majority`

return new Promise((resolve,reject)=>

mongoose.connect(connection)
.then(()=>{
    console.log("connected to database")
    resolve()
})
.catch((err)=>{
    console.log("error connecting to database")
    reject()
})



)

}