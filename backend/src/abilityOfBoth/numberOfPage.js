import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfPage = async (req ,res) => { 
    const { tag } = req.body;
    const snapshot = await db.collection('courses').where('tag' ,'==' ,tag).get();
    const numberOfPage = Math.ceil(snapshot.docs.length/5);
    res.send({ numberOfPage : String(numberOfPage) });
}