import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { checkCollection ,addValueInFieldArray} from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        const { _id ,class1 ,title ,description ,instructorName } = req.body;
        await db.collection('courses').doc(_id).set({
            "_id" : _id,
            "title" : title,
            "description" : description,
            "instructorName" : instructorName,
            "class" : class1,
            "students" : []
        })

        addValueInFieldArray(instructorName ,'courses' ,title);
        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}