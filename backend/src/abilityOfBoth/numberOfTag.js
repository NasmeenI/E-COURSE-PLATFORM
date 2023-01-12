import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection ,getField } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfTag = async (req ,res) => { 
    const tag = await getField('tag' ,'tag');
    res.send(String(tag.length));
}