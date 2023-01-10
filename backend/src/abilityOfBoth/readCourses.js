import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readCourses = async (req ,res) => { 
    const { type ,name ,page} = req.body;
    const collectionRef = db.collection(type).doc(name);
    const snapshot = await collectionRef.get()
    if(!snapshot.exists){
        return res.sendStatus(400);
    }
    let courses = []

    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,snapshot.data().courses.length-1);i++){
        const coursesRef = db.collection('courses');
        const snapshot1 = await coursesRef.where('title', '==', snapshot.data().courses[i]).get();
        if (snapshot1.empty) {
            console.log('No matching documents.');
        }  
    
        let output = snapshot1.docs[0].data()
        if(type != 'instructor') output.students = null
        
        courses.push(output)
    }
    res.send(courses);
}