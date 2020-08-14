import { Request, Response } from "express"
import {TODO} from "./classes/"

const getTODO = async (req: Request, res: Response) =>  {
  const Todo = new TODO()
  const response = await Todo.getTODO()
  res.status(200).json(response)
}

const postTODO = async (req: Request, res: Response) =>  {
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
  const Todo = new TODO()
  try{
     await Todo.deleteTODO(id)
     res.status(200).send()
  }catch(e) {
    res.status(404).send()
  }
}
export {
  getTODO,postTODO, putTODO, deleteTODO
}
