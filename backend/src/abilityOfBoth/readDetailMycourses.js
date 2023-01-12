import bp from 'body-parser';
import express from 'express';
import { getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readDetailMycourses = async (req ,res) => { 
    const { courseID } = req.body;
    const course = await getDocument(courseID);
    const detailOfCourse = {
        "title" : course.title, 
        "instructorName" : course.instructorName, 
        "image" : course.image, 
        "announcments" : course.announcments,
        "assignments" : course.assignments,
        "lectures" : course.lectures
    }
    res.send({ Courses : detailOfCourse });
}