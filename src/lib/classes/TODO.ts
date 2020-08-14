import { Schema } from 'mongoose'
import {TODO as TODOModel} from './../../models/'

export default class TODO {
  description:String
  done: Boolean
  constructor(description: string = "", done: boolean = false) {
    this.description = description
    this.done = done
  }
  getTODO() {
    return TODOModel.find()
      .then((data:any) => data)
      .catch((err: any) => err)
  }

  setTODO() {
    const TodoObj = {description: this.description}
    console.log("TodoObj: ", TodoObj)
    const Todo = new TODOModel(TodoObj)
    return Todo.save()
      .then((data:any) => data)
      .catch((error:any) => error)
  }

  updateTODO(id: string) {
    return TODOModel.findByIdAndUpdate(id,{done: !this.done})
      .then((data: any) => data)
      .catch((err: any) => err)
  }

  deleteTODO(id: string)  {
    console.log("deleteTODO")
    return TODOModel.findOneAndRemove({_id: id})
      .then((data: any) =>  data)
      .catch((err: any) => err)
  }
}
