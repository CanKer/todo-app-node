import { Request, Response } from "express"
import {TODO, User} from "./classes/"

const getTODO = async (req: Request, res: Response) =>  {
  const Todo = new TODO()
  const response = await Todo.getTODO()
  res.status(200).json(response)
}

const postTODO = async (req: Request, res: Response) =>  {
  console.log("add TODO")
  const { description, done } = req.body
  const Todo = new TODO(description, done)
  const response = await Todo.setTODO()
  res.status(200).json(response)
}

const putTODO = async (req: Request, res: Response) =>  {
  const {description,done} = req.body
  const id = req.params.id
  const Todo = new TODO(description, done)
  const response = await Todo.updateTODO(id)
  res.status(200).json(response)
}

const deleteTODO = async (req: Request, res: Response) =>  {
  const id = req.params.id
  // console.log("delete: ", id)
  const Todo = new TODO()
  try{
     await Todo.deleteTODO(id)
     res.status(200).send()
  }catch(e) {
    res.status(404).send()
  }
}

const postUser = async (req: Request, res: Response) =>  {
  console.log("postUser()")
  const { email, password } = req.body
  const user = new User(email, password)
  const newUser = await user.setUser()
  res.status(newUser.code).json(newUser)
}

const auth = async (req: Request, res: Response) =>  {
  const { email, password } = req.body
  const user = new User(email,password)
  const response = await user.logIn()
  console.log("response: ", response)
  res.status(response.code).json(response)
}

const verify = async (req: Request, res: Response) =>  {
  console.log("token: ", req.body.token)
 res.status(200).json({token: req.body.token})
}


export {
  getTODO,
  postTODO,
  putTODO,
  deleteTODO,
  postUser,
  auth,
  verify
}
