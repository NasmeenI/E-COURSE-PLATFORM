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
        const newuserID = await getuid(userID);
        if(newuserID.error){  
            res.send({ error : newuserID.error.message });
            return ;
        }
        await db.collection(type).doc(userID).set({
            "userID" : newuserID.uid,
            "firstName" : firstName,
            "lastName" : lastName,
            "type" : type,
            "courses" : [],
            "image" : image
        })

        res.status(200).send({eror : null});
    }
    catch(error) {
        res.send({ error: error });
    }
}