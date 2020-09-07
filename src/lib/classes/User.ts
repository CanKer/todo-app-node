import { User as UserModel } from './../../models'
import { Types, Document } from 'mongoose'
import * as jwt from "jsonwebtoken"

export default class User {
  email: string
  password: string

  constructor(email:string, password:string)  {
    this.email = email
    this.password = password
  }

  async getUser(flag?: Types.ObjectId | string) {
    const criteria = (typeof flag === "string") ? {email: flag}: {_id: flag}
    const user:any = await UserModel.findOne(criteria)
    const { email, _id } = user
    if(!_id) {
      return {code: 401, message: "Usuario no existe"}
    } else {
      const token = jwt.sign({_id}, 'arkusnexus',{ expiresIn: 60 * 5 })
      return {code: 200, data: token}
    }
  }

  async setUser() {
    console.log("setUser()")
    const user = new UserModel({email:this.email, password:this.password})
    try {
      await user.save()
      const token = jwt.sign({_id: user._id}, 'arkusnexus',{ expiresIn: 60 * 5 })
      return {code: 201, data: token}
    } catch({message}) {
      return {code: 401, message}
    }
  }

  async logIn() {
    console.log("logIn()")
    try{
      let user = await UserModel.findOne({email:this.email})
      if(user)  {
        const {email, password, _id} = user.toJSON()
        if(email && (password === this.password)) {
          const token = jwt.sign({_id}, 'arkusnexus',{ expiresIn: 60 * 5 })
          return {code: 200, data:token}
        } else {console.log("sácate")
        return {code: 401, message: "Error de auntenticación"}}
      } else return {code: 401, message: "Error de auntenticación"}

    } catch({message}) {
      return {code: 401, message}
    }
  }


}
