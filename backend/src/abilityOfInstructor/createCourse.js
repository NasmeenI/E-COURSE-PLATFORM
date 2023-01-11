import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection} from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        const { userID ,tag ,title ,description ,instructorName ,_id } = req.body;
        // userID = getuid(userID);
        const collection = await checkCollection(userID);
        if(collection != 'instructor') res.send('you are not an instructor');
        await db.collection('courses').doc(_id).set({
            "_id" : _id,
            "title" : title,
            "description" : description,
            "instructorName" : instructorName,
            "instructor" : userID,
            "tag" : tag,
            "students" : []
        })

        addValueInFieldArray(instructorName ,'courses' ,_id);
        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}