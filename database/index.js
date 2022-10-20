import mongoose from 'mongoose'
//password - 7SA5Wnb2hMpizgLG

//mongodb+srv://benazirsultana:<3XtsaxBEpj1meBWx>@cluster0.91gv9ln.mongodb.net/?retryWrites=true&w=majority
export const connectdatabase =()=>{
    const connection = 'mongodb+srv://benazirsultana:7SA5Wnb2hMpizgLG@cluster0.ahhggvd.mongodb.net/?retryWrites=true&w=majority'

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