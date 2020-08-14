import { Email, DB, AWS } from "./../interfaces"

let variables: Object = {}

const db: DB =  {
    username: ``,
    password: ``,
    brand:    ``,
    port:     ``,
    key:      ``,
    dbname:   ``,
    dbUrl:    function() {
      return ``
    }
}

const secretkey = "secretkey"


export { secretkey, db }
