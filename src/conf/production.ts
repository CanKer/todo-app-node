import { Email, DB, AWS } from "./../interfaces"

let variables: Object = {}

const email: Email  =  {
  apikey: ``,
  brand:  ``,
  domain: ``,
  defaultEmail: ``
}

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

const aws: AWS =  {
  accessKeyId: ``,
  secretAccessKey: "",
  Bucket: "",
  region: "",
  s3BaseUrl: ""

}

const secretkey = "secretkey"


export { secretkey, email, db, aws }
