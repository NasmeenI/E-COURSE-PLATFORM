import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createCourse = async (req ,res) => { 
    try{
        const { title ,description ,instructorName } = req.body;
        const courseRef = db.collection('courses').doc(title);
        const res2 = await courseRef.set({
            "title" : title,
            "description" : description,
            "instructorName" : instructorName
        })
        console.log("create course completed")
        res.status(200).send("create course completed");
    }
    catch(error) {
        res.send(error);
    }
}