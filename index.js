import express from "express"

const app = express()
const port = 9000

app.use('/',(req,res) => {
    res.json({message:"Hello world"})
})

app.listen(port,() => {
    console.log(`server running on ${port}`)
})