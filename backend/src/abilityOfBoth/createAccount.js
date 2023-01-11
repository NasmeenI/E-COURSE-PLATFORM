import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { getuid } from '../uid.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createAccount = async (req ,res) => { 
    try{
        const { userID ,firstName ,lastName ,type ,image} = req.body;
        userID = getuid(userID);
        await db.collection(type).doc(userID).set({
            "userID" : userID,
            "firstName" : firstName,
            "firstName" : lastName,
            "type" : type,
            "courses" : [],
            "image" : image
        })

        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}