import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    category : {
    type : String,
    default : "Job"
    },
    companyname : {
        type : String,
        required:true,

    },
    position : {
        type : String,
        required: true
    },
    contact : {
        type : Number,
        required: true
    },
    location : {
        type : String,
        required: true
    },


})

export const jobModel = mongoose.model("Users", jobsSchema, 'users')