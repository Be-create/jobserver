import { jobModel } from "../database/jobs.js";
import { verify } from "../utils/jwt.js";

export const postjob = async (req, res) => {
    try {
        let token = req.headers.authorization
        let temp = verify(token)
        let email = temp.email
        const { category, salary, companyname, role, location, time } = req.body

      
        if (category === "" || salary === "" || companyname === "" || role === "" || location === "" || time === "" || email === "") {
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }
        else {

            let temp = salary + 100
    

            let job = await jobModel.create({
                category,temp , time, companyname, role, location, email
            })

            job = job.toJSON()
            // console.log(job)
            return res.status(200).send({
                status: "success",
                massage: "job posted successfully",
                data: job
            })
        }

    }
    catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }

}

export const getalljobs = async (req, res) => {
    //console.log(req.headers)
    let token = req.headers.authorization
    let temp = verify(token)
    let email = temp.email
    try {
        const jobs = await jobModel.find(
            { email }, { "category": 1, "companyname": 1, "location": 1, "role": 1, "salary": 1, "time": 1 }
        )
        return res.status(200).send({
            status: "success",
            massage: "all jobs",
            data: jobs
        })

    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }
}

export const DeleteJob = async (req, res) => {
    try {
        let {id} = req.query
        console.log(id)
        let token = req.headers.authorization
    let temp = verify(token)
    let email = temp.email
 await jobModel.findOneAndDelete(
        {_id:id}
    )
    return res.status(200).send({
        status: "success",
        massage: "all jobs",
        data: jobs
    })
    } catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }

}

export const updatejob = async(req,res)=>{
   
    try {
        let token = req.headers.authorization
        let temp = verify(token)
        if(!temp){
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }
        let {id} = req.query

        if(!id){
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }

        const {  salary, role, location, time } = req.body


        if ( salary === "" &&  role === "" && location === "" || time === "" ) {
            res.status(400).send({
                status: "error",
                message: "Invalid input"
            })
        }
        else {
            let job = await jobModel.findByIdAndUpdate(id,{
                 salary, time, role, location
            })

            job = job.toJSON()
            // console.log(job)
            return res.status(200).send({
                status: "success",
                massage: "job updated successfully",
                data: job
            })
        }

    }
    catch (error) {
        return res.status(500).send({
            status: "error",
            message: error
        })
    }

}