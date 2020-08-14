import aws from "aws-serverless-express";
import app from './app'
const server = aws.createServer(app)

exports.lambda = (event:any, context:any) => { aws.proxy(server, event, context) }
