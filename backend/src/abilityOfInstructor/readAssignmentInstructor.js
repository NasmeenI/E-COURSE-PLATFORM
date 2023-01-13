import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAssignmentInstructor = async (req ,res) => { 
    const { userID ,assignmentID } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const collection = await checkCollection(newuserID.uid);
    if(collection != 'instructor') res.send({ error : 'you are not an instructor' });

    let score = null ,file = null;
    let data = []
    const studentFiles = await getField(assignmentID ,'studentFile');
    for(let j=0;j<studentFiles.length;j++){
        let profile = await getDocument(studentFiles[j].userID);
        profile.userID = null;
        file = studentFiles[j].studentWork;
        score = studentFiles[j].score;
            
        data.push({
            profile : profile,
            file : file,
            score : score
        })
    }
  
    const assignment = await getDocument(assignmentID);
    const detailOfassignment = {
        "title" : assignment.title,
        "text" : assignment.text,
        "Instructorfile" : assignment.file,
        "studentData" : data
    }
    res.send({ assignment : detailOfassignment });
}