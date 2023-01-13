import bp from 'body-parser';
import express from 'express';
import { getField } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const getAllTag = async (req ,res) => { 
    const tag = await getField('tag' ,'tag');
    res.send({ tag : tag });
}