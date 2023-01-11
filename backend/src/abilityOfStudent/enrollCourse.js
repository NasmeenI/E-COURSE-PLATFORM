import bp from 'body-parser';
import express from 'express';
import { checkCollection ,addValueInFieldArray} from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

export const enrollCourse = async (req ,res) => { 
    try{
        const { userID ,courseID } = req.body;
        userID = getuid(userID);
        const collection = await checkCollection(userID);
        if(collection != 'student') return res.send('you are not a student');
        
        addValueInFieldArray(userID ,'courses' ,courseID);
        addValueInFieldArray(courseID ,'students' ,userID);
        res.status(200).send("enroll new course complete");
    }
    catch(error) {
        res.send(error);
    }
}