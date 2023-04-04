import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getuid } from '../uid.js';
import { getField } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const getScoreCourse = async (req ,res) => {
    const { userID ,courseID } = req.body;
    // const newuserID = await getuid(userID);
    // if(newuserID.error){  
    //     res.send({ error : newuserID.error.message });
    //     return ;
    // }

    const scoreCourse = await getField(courseID ,"scoreCourse");
    res.send({ scoreCourse : scoreCourse });
}