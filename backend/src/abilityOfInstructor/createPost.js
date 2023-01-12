import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { addValueInFieldArray, checkCollection} from '../method.js';
import { getuid } from '../uid.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createPost = async (req ,res) => { 
    try{
        const { userID ,courseID ,header ,text ,file } = req.body;
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        const collection = await checkCollection(newuserID);
        if(collection != 'instructor') res.send({ error : 'you are not an instructor' });
        const postID = uuidv4();
        await db.collection('post').doc(postID).set({
            "postID" : postID,
            "courseID" : courseID,
            "header" : header,
            "text" : text,
            "instructorID" : newuserID,
            "file" : file,
            "time" : "",
        })

        addValueInFieldArray(courseID ,'posts' ,postID);
        res.status(200).send({ error: null });
    }
    catch(error) {
        res.send({ error: error.message });
    }
}