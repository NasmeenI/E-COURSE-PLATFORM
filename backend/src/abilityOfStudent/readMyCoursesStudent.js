import bp from 'body-parser';
import express from 'express';
import { getField ,getDocumentWithCondition ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readMyCoursesStudent = async (req ,res) => { 
    const { userID ,page } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const collection = await checkCollection(newuserID);
    if(collection != 'student') res.send({ error : 'you are not an student' });

    const Allcourses = await getField(newuserID ,'courses');

    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,Allcourses.length-1);i++){
        const courses = await getDocumentWithCondition('courses' ,'courseID' ,Allcourses[i]);

        const course = courses[i].data()
        let detailOfCourse = {
            "title" : course.title, 
            "instructorName" : course.instructorName, 
            "image" : course.image, 
            "announcments" : course.announcments,
            "assignments" : course.assignments,
            "lectures" : course.lectures
        }
        output.push(detailOfCourse)
    }
    res.send({ myCourses : output });
}