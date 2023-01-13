import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection} from '../method.js';
import { getuid } from '../uid.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const sendWork = async (req ,res) => { 
    try{
        const { userID ,assignmentID ,file } = req.body;
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID.uid);
        if(collection != 'student') res.send({ error : 'you are not an student' });
        const workID = uuidv4();
        await db.collection('studentWork').doc(workID).set({
            "workID" : workID,
            "assignmentID" : assignmentID,
            "userID" : newuserID.uid,
            "file" : file,
            "score" : null
        })
        
        const studentFile = {
            studentWork : workID,
            userID : newuserID.uid,
            score : ''
        }
        await addValueInFieldArray(assignmentID ,'studentFile' ,studentFile);
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}