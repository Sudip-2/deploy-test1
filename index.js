import express from "express"
import dotenv from "dotenv"
import text from "./routes/text.js"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const url = process.env.db_url
await mongoose.connect(url)
const port = process.env.PORT || 9000
app.use('/text',text)

app.listen(port,() => {
    console.log(`server running on ${port}`)
})