import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const deleteDoc = async (req ,res) => { 
    try{
        const res = await db.collection('courses').doc('associates2').delete();
    }
    catch(error) {
        res.send(error);
    }
}