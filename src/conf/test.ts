import { DB } from "./../interfaces"

let variables: Object = {}

const db: DB =  {
    username: ``,
    password: ``,
    brand:    ``,
    port:     ``,
    key:      ``,
    dbname:   ``,
    dbUrl:    function() {
      return `mongodb://mdm-fullstack-test:aK%238u0m%23qKhe3p3Iz*Ao@nonstopmongo-test-shard-00-00-kqfka.mongodb.net:27017,nonstopmongo-test-shard-00-01-kqfka.mongodb.net:27017,nonstopmongo-test-shard-00-02-kqfka.mongodb.net:27017/masterdata-test?ssl=true&replicaSet=NonstopMongo-Test-shard-0&authSource=admin&retryWrites=true`
    }
}

const secretkey = "secretkey"


export { secretkey, db }
