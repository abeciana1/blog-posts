const http = require('http');

// console.log(http)

const rqListener = (req, res) => { // req => request // res => response
    console.log(req)
}

const server = http.createServer(rqListener)

//! listening on port 3000
server.listen(3000)