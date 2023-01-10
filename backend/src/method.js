import { db } from './firebase.js';

async function checkCollection(document){
    const studentRef = db.collection('student');
    const snapshotStudent = await studentRef.where('_id' ,'==' ,document).get()
    if(!snapshotStudent.empty) return 'student';

    const instructorRef = db.collection('instructor');
    const snapshotInstructor = await instructorRef.where('_id' ,'==' ,document).get()
    if(!snapshotInstructor.empty) return 'instructor';

    const coursesRef = db.collection('courses');
    const snapshotCourses= await coursesRef.where('_id' ,'==' ,document).get()
    if(!snapshotCourses.empty) return 'courses';
}

async function getField(document ,field){
    const collectionRef = db.collection(await checkCollection(document)).doc(document);
    const doc = await collectionRef.get()
    if(!doc.exists){
        return null;
    }
    let value = '';
    if(field == 'courses') value = doc.data().courses;
    else if(field == 'students') value = doc.data().students;

    return value;
}

async function addValueInFieldArray(document ,field ,value){
    let myCourses = await getField(document ,field);
    myCourses.push(value);
    db.collection(await checkCollection(document)).doc(document).update({
        [field] : myCourses
    })
}

export { checkCollection ,getField ,addValueInFieldArray }