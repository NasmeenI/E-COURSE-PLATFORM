import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getField ,checkCollection } from '../method.js';

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

export const giveScoreStudent = async (req ,res) => { 
    const { userID ,courseID ,score} = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }    
    if(score > 5){
        res.send({ error : "your score it too high"});
        return ;
    }

    let scoreCourseByStudent = await getField(courseID ,'scoreCourseByStudent');
    const result = scoreCourseByStudent.hasOwnProperty(newuserID.uid); 
    if(result){
        res.send({ error : "you have been gived the score"});
        return;
    }
    scoreCourseByStudent[newuserID.uid] = score;

    const scoreCourse = await getField(courseID ,'scoreCourse');
    const newScoreCourse = Number(scoreCourse) + Number(score);

    const collectionRef = db.collection(await checkCollection(courseID)).doc(courseID);
    await collectionRef.update({
        ['scoreCourse'] : String(newScoreCourse),
        ['scoreCourseByStudent'] : scoreCourseByStudent
    })
    res.send({ error : null });
}