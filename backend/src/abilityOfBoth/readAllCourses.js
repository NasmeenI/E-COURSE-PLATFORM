import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getDocumentWithCondition } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAllCourses = async (req ,res) => { 
    const { classOfCourse ,page } = req.body;
    const courses = await getDocumentWithCondition('courses' ,'class' ,classOfCourse);

    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,courses.length-1);i++){
        if(courses[i].data().class != classOfCourse) continue;
        output.push(courses[i].data())
    }
    res.send(output);
}