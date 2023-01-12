import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const viewMember = async (req ,res) => { 
    const { courseID } = req.body;
    const students = await getField(courseID ,'students');
  
    let output = [];
    for(let i=0;i<students.length;i++){
        const data = await getDocument(students[i]);
        const dataOfStudent = {
            "firstName" : data.firstName,
            "lastName" : data.lastName,
            "image" : data.image
        }
        output.push(dataOfStudent);
    }
    res.send(output);
}