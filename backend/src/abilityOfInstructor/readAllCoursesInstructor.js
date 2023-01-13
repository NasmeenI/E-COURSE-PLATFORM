import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAllCoursesInstructor = async (req ,res) => { 
    const { tag ,page } = req.body;
    let courses = await db.collection('courses').where('tag', '==', tag).orderBy('scoreCourse').get();
    courses = courses.docs.reverse();
    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,courses.length-1);i++){
        if(courses[i].data().tag != tag) continue;
        const detailOfCourse = {
            "courseID" : courses[i].data().courseID,
            "title" : courses[i].data().title,
            "instructorName" : courses[i].data().instructorName,
            "tag" : courses[i].data().tag,
            "description" : courses[i].data().description,
            "image" : courses[i].data().image,
            "score" : courses[i].data().scoreCourse,
        }
        output.push(detailOfCourse);
    }
    res.send({ AllCourses : output });
}