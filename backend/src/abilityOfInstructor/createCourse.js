import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection ,getField ,updateField} from '../method.js';
import { getuid } from '../uid.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        const { userID ,title ,image ,tag ,description } = req.body;
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID.uid);
        if(collection != 'instructor') res.send({ error : 'you are not an instructor' });
        const courseID = uuidv4();
        await db.collection('courses').doc(courseID).set({
            "courseID" : courseID,
            "title" : title,
            "image" : image,
            "tag" : tag,
            "description" : description,
            "instructorName" : await getField(newuserID.uid ,'firstName'),
            "instructorID" : newuserID.uid,
            "numberOfStudent" : "0",
            "students" : [],
            "lectures" : [],
            "announcments" : [],
            "assignments" : [],
            "scoreCourse" : "0",
            "scoreCourseByStudent" : {}
        })

        addValueInFieldArray(newuserID.uid ,'courses' ,courseID);

        // add tag to global data
        const allTag = await db.collection('globalValue').doc('tag').get();
        const index = allTag.data().tag.indexOf(tag);
        if(index == -1){
            addValueInFieldArray('tag' ,'tag' ,tag);
        }
        
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}