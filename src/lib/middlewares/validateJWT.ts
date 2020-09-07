import { Request, Response, NextFunction } from "express"
import * as jwt from "jsonwebtoken"

const verifyToken = (req:Request,res:Response, next:NextFunction) =>  {
  try{
    if(!req.headers.authorization)
      return res.status(401).send("unauthorized")
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null')
      return res.status(401).send("unauthorized")
    const payload:any = jwt.verify(token, 'arkusnexus')
    if(!payload) return res.status(401).send("unauthorized")
    else {
      console.log("payload: ", payload)
      req.body.userId = payload._id
      req.body.token  = jwt.sign({_id: payload._id}, 'arkusnexus',{ expiresIn: 60 * 5 })
      next()
    }

  } catch(e)  {
    return res.status(401).send("unauthorized")
  }
}

export default verifyToken
