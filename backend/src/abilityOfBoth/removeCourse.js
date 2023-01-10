import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const removeCourse = async (req ,res) => { 
    const { type ,name ,course } = req.body;
    const collectionRef = db.collection(type).doc(name);
    const snapshot = await collectionRef.get()
    if(!snapshot.exists){
        return res.sendStatus(400);
    }
    
    let courses = snapshot.data().courses
    const index = courses.indexOf(course);
    if(index > -1){
        courses.splice(index, 1);
    }
    const res2 = await collectionRef.set({
        ['courses'] : courses
    })
    
    if(type == "instructor"){
        const res = await db.collection('courses').doc(course).delete();
    }
    else if(type == "student"){
        const collectionRef = db.collection('courses').doc(course);
        const snapshot = await collectionRef.get()
        if(!snapshot.exists){
            return res.sendStatus(400);
        }
        
        let students = snapshot.data().students
        const index = students.indexOf(name);
        if(index > -1){
            students.splice(index, 1);
        }
        const res3 = await collectionRef.set({
            ['students'] : students
        })
    }
    res.send('success');
}