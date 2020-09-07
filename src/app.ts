"use strict"

//import bodyParser from "body-parser"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({path: `./../.env`});
import { Server as Main } from './interfaces/'
import { Routes } from "./lib/"
import { Connect, variables  } from "./conf/"

const app     = express(),
      host    = `localhost`

const main: Main = {
  port: process.env.PORT || 9000,
    app, host,
}

class Server {
  private main: Main
  constructor(main: Main) {
    this.main = main
  }

  appConfig() {
    const { app } = this.main
    app.use(cors())
      .use(express.json())
      .use(express.urlencoded({extended:true}))

  }

  includeRoutes() {
    new Routes(this.main.app).routesConfig()
  }

initDB() {
    new Connect(variables.db.dbUrl()).connection()
  }

  appExecute()  {
    this.appConfig()
    this.includeRoutes()
    this.initDB()
    const onListening = () => console.log(`Conexión exitosa en el puerto ${this.main.port}`)
    this.main.app.listen(this.main.port, onListening)
  }
  getMain() {
    return this.main
  }
}
const serverApp = new Server(main)
serverApp.appExecute()
