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

    let score = null ,file = null;
    const studentFiles = await getField(assignmentID ,'studentFile');
    for(let j=0;j<studentFiles.length;j++){
        if(newuserID.uid == studentFiles[j].userID){
            file = studentFiles[j].studentWork;
            score = studentFiles[j].score;
        }
    }
  
    const assignment = await getDocument(assignmentID);
    const detailOfassignment = {
        "title" : assignment.title,
        "text" : assignment.text,
        "Instructorfile" : assignment.file,
        "studentFile" : file,
        "score" : score,
        "scoreMax" : await getField(assignmentID ,'scoreMax')
    }
    res.send({ assignment : detailOfassignment });
}