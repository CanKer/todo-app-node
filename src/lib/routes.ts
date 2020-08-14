'use strict'
import { Server as Main } from './../interfaces/'

import {
  getTODO,postTODO, putTODO, deleteTODO
} from './controller'


export default class Routes {
  constructor(private app: Main["app"])  {}

  appRoutes() {
    this.app.get('/', (req:any,res:any) => res.status(200).send("welcome"))
    this.app.get('/api/v1/todo', getTODO)
    this.app.post('/api/v1/todo', postTODO)
    this.app.put('/api/v1/todo/:id', putTODO)
    this.app.delete('/api/v1/todo/:id', deleteTODO)
  }

  routesConfig()  {
    this.appRoutes()
  }

}
