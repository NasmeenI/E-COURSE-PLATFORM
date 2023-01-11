import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const createAccount = async (req ,res) => { 
    try{
        const { idToken ,firstname ,lastname ,type } = req.body;
        getAuth()
            .verifyIdToken(idToken)
            .then((decodedToken) => {
                const uid = decodedToken.uid;
            })
            .catch((error) => {
                res.sendStatus(404);
            });
        
        await db.collection(type).doc(uid).set({
            "uid" : uid,
            "firstname" : firstname,
            "lastname" : lastname,
            "type" : type,
            "courses" : []
        })

        res.status(200).send("complete");
    }
    catch(error) {
        res.send(error);
    }
}