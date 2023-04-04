import { db } from './firebase.js';

async function checkCollection(document){
    const studentRef = db.collection('student');
    const snapshotStudent = await studentRef.where('userID' ,'==' ,document).get()
    if(!snapshotStudent.empty) return 'student';

    const instructorRef = db.collection('instructor');
    const snapshotInstructor = await instructorRef.where('userID' ,'==' ,document).get()
    if(!snapshotInstructor.empty) return 'instructor';

    const coursesRef = db.collection('courses');
    const snapshotCourses = await coursesRef.where('courseID' ,'==' ,document).get()
    if(!snapshotCourses.empty) return 'courses';
    
    const assignmentRef = db.collection('assignment');
    const snapshotassignment = await assignmentRef.where('assignmentID' ,'==' ,document).get()
    if(!snapshotassignment.empty) return 'assignment';

    const lectureRef = db.collection('lecture');
    const snapshotlecture = await lectureRef.where('lectureID' ,'==' ,document).get()
    if(!snapshotlecture.empty) return 'lecture';

    const studentWorkRef = db.collection('studentWork');
    const snapshotstudentWork= await studentWorkRef.where('studentWorkID' ,'==' ,document).get()
    if(!snapshotstudentWork.empty) return 'lectstudentWorkure';

    const globalValueWorkRef = db.collection('globalValue');
    const snapshotglobalValue= await globalValueWorkRef.where('globalValueID' ,'==' ,document).get()
    if(!snapshotglobalValue.empty) return 'globalValue';

    return 
}

async function getDocument(document){
    const cityRef = db.collection(await checkCollection(document)).doc(document);
    const doc = await cityRef.get();
    if (!doc.exists) {
        console.log
        // return { error : 'No such document!' }
    } else {
        return doc.data();
    }
}

async function getDocumentWithCondition(collection ,variable ,value){
    const snapshot = await db.collection(collection).where(variable, '==', value).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }  
    return snapshot.docs;
}

async function getField(document ,field){
    const collectionRef = db.collection(await checkCollection(document)).doc(document);
    const doc = await collectionRef.get()
    if(!doc.exists){
        return null;
    }
    const value = doc.data()[field];
    return value;
}

async function updateField(document ,field ,newvalue){
    const collectionRef = db.collection(await checkCollection(document)).doc(document);
    await collectionRef.update({
        [field] : newvalue
    })
}

async function addValueInFieldArray(document ,field ,value){
    let myCourses = await getField(document ,field);
    myCourses.push(value);
    db.collection(await checkCollection(document)).doc(document).update({
        [field] : myCourses
    })
}

async function removeFieldArray(document ,field ,value){
    const collectionRef = db.collection(await checkCollection(document)).doc(document);
    const snapshot = await collectionRef.get()
    if(!snapshot.exists){
        return 'error';
    }
    let data = snapshot.data()[field]
    const index = data.indexOf(value);
    if(index > -1){
        data.splice(index, 1);
    }
    await collectionRef.update({
        [field] : data
    })
}

export { 
    checkCollection,
    getDocument, 
    getDocumentWithCondition,
    getField,
    updateField,
    addValueInFieldArray,
    removeFieldArray
}