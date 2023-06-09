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
            if(newuserID.uid == studentFiles[j].userID){
                score = studentFiles[j].score;
            }
        }
        dataAssighnments.push({
            assignmentID : assignmentID,
            title : await getField(assignmentID ,'title'),
            score : score,
            scoreMax : await getField(assignmentID ,'scoreMax'),
        });
    }

    // get Lectures;
    let detailLectures = []
    const lectures = await getField(courseID ,'lectures');
    for(let i=0;i<lectures.length;i++){
        const lectureID = lectures[i];
        const lectureTitle = await getField(lectureID ,'title');
        detailLectures.push({
            lectureID : lectureID,
            title : lectureTitle
        });
    }

    // get scoreCourseByStudent
    let data = await getField(courseID ,'scoreCourseByStudent');
    let scoreCourseByStudent = null
    if(data.hasOwnProperty(newuserID.uid)) scoreCourseByStudent = data[newuserID.uid];
    
    const detailOfCourse = {
        "courseID" : course.courseID,
        "title" : course.title, 
        "instructorName" : course.instructorName, 
        "image" : course.image, 
        "announcments" : course.announcments,
        "assignments" : dataAssighnments,
        "lectures" : detailLectures,
        "scoreCourseByStudent" : scoreCourseByStudent,
        "scoreCourse" : course.scoreCourse
    }
    res.send({ Courses : detailOfCourse });
}