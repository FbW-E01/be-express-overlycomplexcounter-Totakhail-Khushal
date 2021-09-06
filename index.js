import express from 'express'

const app= express();
let counter=0

// 1. GET / -- this returns just a single number (starting from 0)

app.get('/',(req,res)=>{
    res.send(`Counter: ${counter}`)
})

// 2. POST /inc -- this increases the number
app.post('/inc',(req,res)=>{
    counter++
    res.send(`Counter: ${counter}`)
})

// 3. POST /dec -- this decreases the number
app.post('/dec',(req,res)=>{
    counter--
    res.send(`Counter: ${counter}`)
})

// 4. POST /die -- this shuts down the server
app.post('/die',(req,res)=>{
    console.log("Server shutting down due to 'die request");
    process.exit()
    res.send(`Counter: ${counter}`)
})


const port =3020;
app.listen(port,() => {
    console.log("Counter is http://localhost:"+port);
})



// testing with curl in terminal 
// curl -X POST localhost:3020/inc

// postman

