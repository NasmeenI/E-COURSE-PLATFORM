import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection ,getField} from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createAnnouncement = async (req ,res) => { 
    try{
        const { userID ,courseID ,text } = req.body;
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID.uid);
        if(collection != 'instructor') res.send({ error : 'you are not an instructor' });

        addValueInFieldArray(courseID ,'announcments' ,text);
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}