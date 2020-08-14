import { DB, } from "./../interfaces"

let variables: Object = {}


const db: any =  {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    brand:    ``,
    port:     ``,
    key:      ``,
    dbname:   process.env.DBNAME,
    dbUrl:    function() {
      return `mongodb+srv://${this.username}:${encodeURIComponent(this.password)}@todo-app.byrxw.mongodb.net/${this.dbname}?retryWrites=true&w=majority`
    }
}

const secretkey = "secretkey"


export { secretkey, db }
