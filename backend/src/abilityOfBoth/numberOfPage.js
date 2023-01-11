import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfPage = async (req ,res) => { 
    const { classOfCourse } = req.body;
    const snapshot = await db.collection('courses').where('class' ,'==' ,classOfCourse).get();
    const numberOfPage = Math.ceil(snapshot.docs.length/5);
    res.send((String(numberOfPage)))
}