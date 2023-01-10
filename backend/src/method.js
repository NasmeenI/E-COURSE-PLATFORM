import { db } from './firebase.js';

export async function checkCollection(document){
    const studentRef = db.collection('student');
    const snapshotStudent = await studentRef.where('_id' ,'==' ,document).get()
    if(!snapshotStudent.empty) return 'student';

    const instructorRef = db.collection('instructor');
    const snapshotInstructor = await instructorRef.where('_id' ,'==' ,document).get()
    if(!snapshotInstructor.empty) return 'instructor';
        
    return 'error';
}

export async function getField(collection ,document ,field){
    const collectionRef = db.collection(collection).doc(document);
    const doc = await collectionRef.get()
    if(!doc.exists){
        return null;
    }
    let value = '';
    if(field == 'courses') value = doc.data().courses;
    else if(field == 'students') value = doc.data().students;

    return value;
}
