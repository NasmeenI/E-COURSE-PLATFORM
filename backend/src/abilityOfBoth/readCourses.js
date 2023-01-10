import bp from 'body-parser';
import express from 'express';
import { getField ,getDocumentWithCondition ,checkCollection } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readCourses = async (req ,res) => { 
    const { userID ,page } = req.body;
    const Allcourses = await getField(userID ,'courses');

    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,Allcourses.length-1);i++){
        const courses = await getDocumentWithCondition('courses' ,'_id' ,Allcourses[i]);

        let temp = courses[0].data()
        if(checkCollection(userID) != 'instructor') output.students = null
        output.push(temp)
    }
    res.send(output);
}