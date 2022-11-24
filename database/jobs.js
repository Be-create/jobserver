import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema({
    category : {
    type : String,
    default : "Job"
    },
    salary:{
        type : Number,
        required:true,
    },
    companyname : {
        type : String,
        required:true,

    },
    role : {
        type : String,
        required:true,
    },
    contact : {
        type : Number,
    },
    location : {
        type : String,
        required: true
    },
 time: {
    type: String,
    required : true
 }

}


)

export const jobModel = mongoose.model("users", jobsSchema, 'jobs')