import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createAccount = async (req ,res) => { 
    try{
        const { _id ,firstname ,lastname ,type } = req.body;
        await db.collection(type).doc(_id).set({
            "_id" : _id,
            "firstname" : firstname,
            "lastname" : lastname,
            "type" : type,
            "courses" : []
        })

        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}