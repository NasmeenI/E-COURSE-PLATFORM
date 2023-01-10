import bp from 'body-parser';
import express from 'express';
import { getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readEachCourses = async (req ,res) => { 
    const { courseID } = req.body;
    res.send(await getDocument(courseID));
}