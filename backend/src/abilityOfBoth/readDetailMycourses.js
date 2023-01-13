import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readDetailMycourses = async (req ,res) => { 
    const { userID ,courseID } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }

    const course = await getDocument(courseID);

    // get Assignments
    let dataAssighnments = [];
    const assignments = await getField(courseID ,'assignments');
    for(let i=0;i<assignments.length;i++){
        let score = null;
        const assignmentID = assignments[i];
        const studentFiles = await getField(assignmentID ,'studentFile');

        for(let j=0;j<studentFiles.length;j++){
            if(userID == studentFiles[j].userID){
                score = studentFiles[j].score;
            }
        }
        dataAssighnments.push({
            title : await getField(assignmentID ,'title'),
            score : score
        });
    }

    // get Lectures
    const detailOfLecture= {
        "title" : course.title
    }

    // get scoreCourseByStudent
    let map = await getField(courseID ,'scoreCourseByStudent');
    let scoreCourseByStudent = null
    if(map.has(userID)) scoreCourseByStudent = map.get(userID);
    
    const detailOfCourse = {
        "courseID" : course.courseID,
        "title" : course.title, 
        "instructorName" : course.instructorName, 
        "image" : course.image, 
        "announcments" : course.announcments,
        "assignments" : dataAssighnments,
        "lectures" : detailOfLecture,
        "scoreCourseByStudent" : scoreCourseByStudent
    }
    res.send({ Courses : detailOfCourse });
}