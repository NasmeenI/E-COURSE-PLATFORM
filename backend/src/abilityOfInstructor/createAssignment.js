import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection} from '../method.js';
import { getuid } from '../uid.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createAssignment = async (req ,res) => { 
    try{
        const { userID ,courseID ,title ,text ,file ,scoreMax } = req.body;
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID.uid);
        if(collection != 'instructor') res.send({ error : 'you are not an instructor' });
        const assignmentID = uuidv4();
        await db.collection('assignment').doc(assignmentID).set({
            "assignmentID" : assignmentID,
            "courseID" : courseID,
            "title" : title,
            "text" : text,
            "file" : file,
            "studentFile" : [],
            "scoreMax" : scoreMax,
            "time" : "",
        })
        
        addValueInFieldArray(courseID ,'assignments' ,assignmentID);
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}
// must have that course in data's instructor