import express from 'express'
import {name} from '../models/name.js'

const router = express.Router()

router.get('/',(req,res) => {
    name.create({
        userName:"sudip"
    })
    res.send("Hello world")
})

export default router