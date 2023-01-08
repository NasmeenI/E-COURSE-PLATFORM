import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const read = async (req ,res) => { 
    try{
        const peopleRef = db.collection('courses').doc('associates2');
        const doc = await peopleRef.get()
        if(!doc.exists){
            return res.sendStatus(400);
        }
        res.status(200).send(doc.data());
    }
    catch(error) {
        res.send(error);
    }
}