import bp from 'body-parser';
import express from 'express';
import { getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAssignmentStudent = async (req ,res) => { 
    const { assignmentID } = req.body;
    const assignment = await getDocument(assignmentID);
    const detailOfassignment = {
        "title" : assignment.title,
        "text" : assignment.text,
        "file" : assignment.file
    }
    res.send({ assignment : detailOfassignment });
}