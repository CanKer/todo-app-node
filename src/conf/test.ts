import { Email, DB, AWS } from "./../interfaces"

let variables: Object = {}

const email: Email  =  {
  apikey: ``,
  brand:  ``,
  domain: ``,
  defaultEmail: ``
}

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

const aws: AWS =  {
  accessKeyId: `AKIAJFXH7GQH53H35H5Q`,
  secretAccessKey: "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",
  Bucket: "ns-claims-uploads",
  region: "us-west-1",
  s3BaseUrl: "https://ns-claims-uploads.s3-us-west-1.amazonaws.com/"
}

const secretkey = "secretkey"


export { secretkey, email, db, aws }
