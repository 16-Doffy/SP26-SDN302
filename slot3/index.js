const hostname = 'localhost'
const port = 3000
const http = require('http')
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
// app.use((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/http')
//     res.end('<h1>Hello world </h1>')
// })
app.use(bodyparser.json())
app.all('/pates', (req,res, next)=>{
    res.statusCode = 200
    res.setHeader('Content-Type' , 'text/plain')
    next()
})
app.get('/pates',(req,res)=>{
    res.end("will alow")
})
app.post('/pates',(req,res)=>{
    res.end("insert a new pate with : name "+ req.body.name + " and price " + req.body.price)
})
const server = http.createServer(app)
server.listen(port, hostname, () => {
    console.log('server is  running')
})

