import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const update = async (req ,res) => { 
    try{
        const { name ,status } = req.body;
        const peopleRef = db.collection('courses').doc('associates2');
        const res2 = await peopleRef.set({
            [name] : status
        })
        res.status(200).send(name + status);
    }
    catch(error) {
        res.send(error);
    }
}