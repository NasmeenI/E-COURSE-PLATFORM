import express from 'express';

import { db } from './firebase.js';
import bp from 'body-parser';
import { FieldValue } from 'firebase-admin/firestore';
const app = express();
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))


import { create } from './routes/create.js';
import { read } from './routes/read.js';
import { update } from './routes/update.js';
import { deleteDoc } from './routes/deleteDoc.js';
import { deleteField } from './routes/deleteField.js';

// const app = express();

app.get('/' ,function(req ,res){
    res.send('Hello');
})

app.get('/friends' ,read)

app.post('/addfriends' ,create)

app.patch('/change' ,update)

app.delete('/field' ,deleteField);

app.delete('/doc' ,deleteDoc);

app.listen(3000, function() {
    console.log("Server started on port 3000");
});