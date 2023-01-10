import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { checkUserID ,getMyCourses ,getMyStudents } from '../method.js';

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

export const enrollCourse = async (req ,res) => { 
    try{
        const { userID ,courseID } = req.body;

        const collection = await checkUserID(userID);
        if(collection == 'error') return res.send('user id is not match');

        const myCourses = await getMyCourses(collection ,userID);
        myCourses.push(courseID);
        db.collection(collection).doc(userID).update({
            ["courses"] : myCourses
        })
        
        const myStudents = await getMyStudents(courseID);
        myStudents.push(userID);
        console.log(myStudents);
        db.collection('courses').doc(courseID).update({
            ["students"] : myStudents
        })
        res.status(200).send("enroll new course complete");
    }
    catch(error) {
        res.send(error);
    }
}