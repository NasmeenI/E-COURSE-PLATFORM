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
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID);
        if(collection != 'student') return res.send('you are not a student');
        
        addValueInFieldArray(newuserID ,'courses' ,courseID);
        addValueInFieldArray(courseID ,'students' ,newuserID);
        res.status(200).send("enroll new course complete");
    }
    catch(error) {
        res.send(error);
    }
}