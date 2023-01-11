import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection} from '../method.js';
import { getuid } from '../uid.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        const { userID ,tag ,title ,description ,instructorName } = req.body;
        userID = getuid(userID);
        const collection = await checkCollection(userID);
        if(collection != 'instructor') res.send('you are not an instructor');
        const courseID = uuidv4();
        await db.collection('courses').doc(courseID).set({
            "courseID" : courseID,
            "title" : title,
            "description" : description,
            "instructorName" : instructorName,
            "instructorID" : userID,
            "tag" : tag,
            "students" : []
        })

        addValueInFieldArray(instructorName ,'courses' ,courseID);
        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}