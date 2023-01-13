import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { checkCollection } from '../method.js';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const changeProfile = async (req ,res) => { 
    const { userID ,newFirstName ,newLastName ,newImage} = req.body;
    const newuserID = await getuid(userID);
    if(newuserID.error){  
        res.send({ error : newuserID.error.message });
        return ;
    }
    await db.collection(await checkCollection(newuserID.uid)).doc(newuserID.uid).update({
        "firstName" : newFirstName,
        "lastName" : newLastName,
        "image" : newImage
    })
    res.status(200).send({eror : null});
}