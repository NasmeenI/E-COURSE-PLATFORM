import bp from 'body-parser';
import express from 'express';
import { getField } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfMyPage = async (req ,res) => { 
    const { userID } = req.body;
    const Allcourses = await getField(userID ,'courses');
    res.send(String(Allcourses.length));
}