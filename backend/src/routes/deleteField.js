import { db } from '../firebase.js';
import bp from 'body-parser';
import express from 'express';
import { FieldValue } from 'firebase-admin/firestore';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const deleteField = async (req ,res) => { 
    try{
        const { name } = req.body;
        const peopleRef = db.collection('courses').doc('SJri6hRBQDeHKoClWVGE');
        const res2 = await peopleRef.update({
            [name] : FieldValue.delete()
        })
        res.status(200).send(name);
    }
    catch(error) {
        res.send(error);
    }
}