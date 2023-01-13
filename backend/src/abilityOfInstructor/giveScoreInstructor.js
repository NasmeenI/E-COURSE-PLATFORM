import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getField ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const giveScoreInstructor = async (req ,res) => { 
    const { userID ,assignmentID ,studentID ,score} = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    
    const scoreMax = await getField(assignmentID ,'scoreMax');
    if(Number(score) > Number(scoreMax)){
        res.send({ error : "your score is too high" });
        return ;
    } 

    const studentFiles = await getField(assignmentID ,'studentFile');
    for(let i=0;i<studentFiles.length;i++){
        if(studentID == studentFiles[i].userID){
            Object.keys(studentFiles[i]).forEach((item) => {
                if(item == 'score') {
                    studentFiles[i][item] = score
                }
            })
        }
    }
    await db.collection(await checkCollection(assignmentID)).doc(assignmentID).update({
        "studentFile" : studentFiles
    })
    res.status(200).send({eror : null});
}