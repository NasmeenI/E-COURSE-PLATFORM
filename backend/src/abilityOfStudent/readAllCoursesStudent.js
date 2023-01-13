import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getField ,getDocumentWithCondition } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAllCoursesStudent = async (req ,res) => { 
    const { userID ,tag ,page } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }

    const courses = await getDocumentWithCondition('courses' ,'tag' ,tag);
    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,courses.length-1);i++){
        if(courses[i].data().tag != tag) continue;

        // find enroll status
        const students = await getField(courses[i].data().courseID ,'students');
        const index = students.indexOf(newuserID.uid);
        let enroll = false;
        if(index > -1) enroll = true
        
        const detailOfCourse = {
            "courseID" : courses[i].data().courseID,
            "title" : courses[i].data().title,
            "instructorName" : courses[i].data().instructorName,
            "tag" : courses[i].data().tag,
            "description" : courses[i].data().description,
            "image" : courses[i].data().image,
            "enroll" : enroll,
            "score" : courses[i].data().scoreCourse
        }
        output.push(detailOfCourse);
    }
    res.send({ AllCourses : output });
}