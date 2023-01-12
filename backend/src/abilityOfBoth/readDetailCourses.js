import bp from 'body-parser';
import express from 'express';
import { getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readDetailCourses = async (req ,res) => { 
    const { courseID } = req.body;
    const course = await getDocument(courseID);
    const detailOfCourse = {
        "title" : course.title,
        "instructorName" : course.instructorName,
        "tag" : course.tag,
        "description" : course.description,
        "image" : course.image,
        "score" : 0
    }
    res.send({ Courses : detailOfCourse });
}