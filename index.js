//import json-server

const jsonserver = require('json-server')

//create a server app using jsonserver

const docserver = jsonserver.create()

//setup path for db.json

const router = jsonserver.router('db.json')

//return middleware
const middleware = jsonserver.defaults()

//setup port

const port = 3001

//use in docserver

docserver.use(middleware)
docserver.use(router)

//to run the server

docserver.listen(port,()=>{console.log("Docterapp server listening on port"+ port);})