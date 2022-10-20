import jwt from "jsonwebtoken"

const SECRET = "nhchdf85855965gfrghf55"



export const sign = (payload)=>{
  return  jwt.sign(payload,SECRET,{
        expiresIn: '5d',
    })

}

export const verify = (token)=>{
try {
 return    jwt.verify(token,SECRET)
} catch (error) {
    console.log("Error verifying")
}
}

export const decode =(token)=>{
return jwt.decode(token)
}