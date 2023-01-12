import bp from 'body-parser';
import express from 'express';
import { getField ,getDocumentWithCondition ,checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const readMyCourses = async (req ,res) => { 
    const { userID ,page } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const Allcourses = await getField(newuserID.uid ,'courses');

    const output = []
    for(let i=5*(Number(page)-1);i<=Math.min((Number(page)*5)-1 ,Allcourses.length-1);i++){
        const courses = await getDocumentWithCondition('courses' ,'_id' ,Allcourses[i]);

        let temp = courses[0].data()
        if(checkCollection(newuserID.uid) != 'instructor') output.students = null
        output.push(temp)
    }
    res.send(output);
}