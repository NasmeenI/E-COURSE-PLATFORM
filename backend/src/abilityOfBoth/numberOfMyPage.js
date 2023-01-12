import bp from 'body-parser';
import express from 'express';
import { getField } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const numberOfMyPage = async (req ,res) => { 
    const { userID } = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    const Allcourses = await getField(newuserID.uid ,'courses');
    const numberOfMyPage = Math.ceil(Allcourses.length/5)
    res.send({ numberOfMyPage : String(numberOfMyPage) });
}