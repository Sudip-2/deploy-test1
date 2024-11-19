import express from "express"
import dotenv from "dotenv"
import text from "./routes/text.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 9000
app.use('/text',text)

app.listen(port,() => {
    console.log(`server running on ${port}`)
})