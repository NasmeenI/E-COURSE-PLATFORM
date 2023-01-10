import { db } from './firebase.js';

export async function checkUserID(userID){
    const studentRef = db.collection('student');
    const snapshotStudent = await studentRef.where('_id' ,'==' ,userID).get()
    if(!snapshotStudent.empty) return 'student';

    const instructorRef = db.collection('instructor');
    const snapshotInstructor = await instructorRef.where('_id' ,'==' ,userID).get()
    if(!snapshotInstructor.empty) return 'instructor';
        
    return 'error';
}

// collection student and instructor
export async function getMyCourses(collection ,ID){
    const collectionRef = db.collection(collection).doc(ID);
    const doc = await collectionRef.get()
    if(!doc.exists){
        return [];
    }
    const courses = doc.data().courses;
    return courses;
}

export async function getMyStudents(ID){
    const collectionRef = db.collection('courses').doc(ID);
    const doc = await collectionRef.get()
    if(!doc.exists){
        return [];
    }
    const students = doc.data().students;
    return students;
}