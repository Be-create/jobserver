import {sign,decode} from "../utils/jwt.js"
import { userModel } from "../database/user.js"

export const register =async(req,res)=>{
    

try {
    const {name,email,password}= req.body

const existing = await userModel.findOne({
    email
})
if (existing){
    return res.status(400).send({
       status : "error",
       message: "user already registered"
    })
}
else{
    let user = await userModel.create({
        name,email,password
    })

    user = user.toJSON()
console.log(user)
    return res.status(200).send({
        status : "success" ,
    massage : "user created successfully",
    data : user,
    })
}
} catch (error) {
    return res.status(500).send({
        status : "error",
        message : error
    })
}

}
//login
export async function login(req, res) {

    try {

        const {email, password} = req.body;
//console.log(req)
        // if the user with that email exists
        const user = await userModel.findOne({
            email
        }, {
            _id: 1,
            name: 1,
            email: 1,
            password: 1
            
        })

        if (user) {
            // we have to check the password that we recieved

            if (user.password !== password) {

                return res.status(400).send({
                    status: 'error',
                    message: 'Invalid password',
                })
            } else {

                

                const token = sign(user.toJSON());
                 
                return res.send({
                    status: 'success',
                    message: 'You are now logged in',
                    data: user,
                    token:token
                })
            }

        } else {
            return res.status(404).send({
                status: 'error',
                message: 'Can\'t find a user with that email, please register.',
            })
        }

    } catch(err) {

        return res.status(500).send({
            status: 'error',
            message: 'Unexpected error occured.',
        })
    }
}

//check if user