import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAssignmentStudent = async (req ,res) => { 
    const { userID ,assignmentID } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const collection = await checkCollection(newuserID.uid);
    if(collection != 'student') res.send({ error : 'you are not an student' });

    let myWork;
    const studentFiles = await getField(assignmentID ,'studentFile');
    for(let j=0;j<studentFiles.length;j++){
        if(newuserID.uid == studentFiles[j].userID){
            myWork = await getDocument(studentFiles[j].studentWork);
        }
    }
  
    const assignment = await getDocument(assignmentID);
    const detailOfassignment = {
        "title" : assignment.title,
        "text" : assignment.text,
        "Instructorfile" : assignment.file,
        "file" : myWork.file,
        "score" : myWork.score,
        "scoreMax" : assignment.scoreMax,
        "time" : myWork.time
    }
    res.send({ assignment : detailOfassignment });
}