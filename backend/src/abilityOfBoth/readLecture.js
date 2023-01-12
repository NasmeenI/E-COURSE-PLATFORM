import bp from 'body-parser';
import express from 'express';
import { getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readLecture = async (req ,res) => { 
    const { lectureID } = req.body;
    const lecture = await getDocument(lectureID);
    const detailOflecture = {
        "title" : lecture.title,
        "text" : lecture.text,
        "file" : lecture.file
    }
    res.send({ lecture : detailOflecture });
}