import { jobModel } from "../database/jobs.js";

export const postjob = async(req,res)=>{
try {
    const {category,companyname,role,location} = req.body


    if(category===""||salary===""||companyname===""||role===""||location===""||time===""){
        res.status(400).send({
            status : "error",
            message : "Invalid input"
        })
    }
    else{
        let job = await jobModel.create({
            category,salary,time,companyname,role,location
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
 catch (error) {
    return res.status(500).send({
        status : "error",
        message : error
    })
}

}

export const getalljobs=async(req,res)=>{
    //console.log(req.headers)
try {
        const jobs = await jobModel.find(
            {},{"category":1,"companyname":1,"location":1,"role":1,"salary":1,"time":1}
        )
        

       
    
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