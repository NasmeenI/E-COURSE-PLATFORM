import bp from 'body-parser';
import express from 'express';
import { checkCollection ,addValueInFieldArray ,updateField ,getField } from '../method.js';
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
        const collection = await checkCollection(newuserID.uid);
        if(collection != 'student') return res.send({ error : 'you are not a student' });
        
        addValueInFieldArray(newuserID.uid ,'courses' ,courseID);
        addValueInFieldArray(courseID ,'students' ,newuserID.uid);
        const newNumberOfStudent = Number(await getField(courseID ,'numberOfStudent')) + 1;
        updateField(courseID ,'numberOfStudent' ,String(newNumberOfStudent));
        
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}