import bp from 'body-parser';
import express from 'express';
import { getField } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfMyPage = async (req ,res) => { 
    const { userID } = req.body;
    userID = getuid(userID);
    const Allcourses = await getField(userID ,'courses');
    const numberOfPage = Math.ceil(Allcourses.length/5)
    res.send(String(numberOfPage));
}