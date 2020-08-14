import Connect from "./db"
const variables = require(`./${process.env.NODE_ENV || "development"}`)

export  {
  Connect,
  variables
}
