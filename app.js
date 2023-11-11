const express = require('express')
const app = express()



app.get('/', (req,res) =>{
    res.status(200).json({
        Aayush: "this is home page"
    })
})

app.get('/blogs', (req, res) =>{
    res.status(200).json({
        message: "This is blog page"
    })
})

app.get('/aayush', (req, res) =>{
    res.json({
        aayus: "Aayush is a real hero"
    })
})

app.listen(3000, () =>{
    console.log("NodeJS server has started at port 3000")
})// 3000 is port number and (): is call back function 