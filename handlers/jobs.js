import { jobModel } from "../database/jobs.js";

export const postjob = async(req,res)=>{
try {
    const {email,password,companyname,position,contact,location} = req.body

if(!email || !password ){
    res.status(400).send({
        status: "error",
        message: "Please login first"
    })
    
}
else{
    if(!companyname||!position||!contact||!location){
        res.status(400).send({
            status : "error",
            message : "Invalid input"
        })
    }
    else{
        let job = await jobModel.create({
            companyname,position,contact,location
        })
    
        job = job.toJSON()
    console.log(job)
        return res.status(200).send({
            status : "success" ,
        massage : "user created successfully",
        data : job
        })
    }
    }
}
 catch (error) {
    return res.status(500).send({
        status : "error",
        message : error
    })
}

}

export const getalljobs=async(req,res)=>{
try {
        const jobs = await jobModel.find({
            category: "Job"
        })
        

       
    
        return res.status(200).send({
            status : "success" ,
        massage : "all jobs",
        data : jobs
        })
    
} catch (error) {
    return res.status(500).send({
        status : "error",
        message : error
    })
}
}