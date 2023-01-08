import express from 'express';
import bp from 'body-parser';
import { db } from './firebase.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/addfriends' ,async (req ,res) => { 
    const { name ,status } = req.body;
    console.log(req.body);
    const peopleRef = db.collection('people').doc('associates');
    const res2 = await peopleRef.set({
        [name] : status
    })
    res.status(200).send(friends);
})

// const firebaseConfig = {
//   apiKey: "AIzaSyAiYNzuzY5mzhFrB3kS5DeFbtCKww5yeck",
//   authDomain: "hacktoschool-e823b.firebaseapp.com",
//   projectId: "hacktoschool-e823b",
//   storageBucket: "hacktoschool-e823b.appspot.com",
//   messagingSenderId: "417088029882",
//   appId: "1:417088029882:web:cd240014a2552494adee83",
//   measurementId: "G-84Y53N5T29"
// };



// const app = initializeApp(firebaseConfig);
// app.use(bp.json())
// app.use(bp.urlencoded({ extended: true }))

app.get('/' ,function(req ,res){
    res.send('Hello');
})

app.post('/register', async(req, res) => {
    try {
        const {email, username, password} = req.body;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
        });
        res.redirect('/');
    } catch(e) {
        res.redirect('/register');
    }
})

app.post('/create', async (req, res) => {
    try {
      console.log(req.body);
      const id = req.body.email;
      const userJson = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      };
      const usersDb = db.collection('users'); 
      const response = await usersDb.doc(id).set(userJson);
      res.send(response);
    } catch(error) {
      res.send(error);
    }
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});