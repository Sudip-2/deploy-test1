import mongoose, { mongo } from 'mongoose'

const nameShcema = new mongoose.Schema({
    userName:String
});

export const name = mongoose.model('name',nameShcema)