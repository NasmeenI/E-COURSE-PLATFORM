import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readAssignmentInstructor = async (req ,res) => { 
    const { userID ,assignmentID } = req.body;
    // const newuserID = await getuid(userID);
    // if(newuserID.error){  
    //     res.send({ error : newuserID.error.message });
    //     return ;
    // }
    // const collection = await checkCollection(newuserID.uid);
    // if(collection != 'instructor') res.send({ error : 'you are not an instructor' });

    let data = []
    const studentFiles = await getField(assignmentID ,'studentFile');
    for(let j=0;j<studentFiles.length;j++){
        let profile = await getDocument(studentFiles[j].userID);
        profile.userID = null;

        let studentWork = await getDocument(studentFiles[j].studentWork);
        studentWork.firstName = profile.firstName;
        studentWork.lastName = profile.lastName;
        delete studentWork.userID;
        delete studentWork.assignmentID;
        delete studentWork.workID;
        data.push(studentWork);
    }
    data.sort((a, b) => {
        return a.time - b.time;
    });
  
    const assignment = await getDocument(assignmentID);
    const detailOfassignment = {
        "title" : assignment.title,
        "text" : assignment.text,
        "Instructorfile" : assignment.file,
        "scoreMax" : assignment.scoreMax,
        "studentData" : data
    }
    res.send({ assignment : detailOfassignment });
}