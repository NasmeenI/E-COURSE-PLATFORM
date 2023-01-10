import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfPage = async (req ,res) => { 
    const { classOfCourse } = req.body;
    const snapshot = await db.collection('courses').where('class' ,'==' ,classOfCourse).get();
    res.send((String(snapshot.docs.length)))
}