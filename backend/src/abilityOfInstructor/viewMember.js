import bp from 'body-parser';
import express from 'express';
import { getField ,getDocument } from '../method.js';

const app = express();

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

export const viewMember = async (req ,res) => { 
    const { courseID } = req.body;
    const students = await getField(courseID ,'students');
  
    let output = [] ,scoreMax;
    for(let i=0;i<students.length;i++){
        const student = await getDocument(students[i]);

        // get sum score for each student
        let scoreSum = 0
        scoreMax = 0;
        const studentID = student.userID;
        const assignments = await getField(courseID ,'assignments');
        for(let j=0;j<assignments.length;j++){
            const assignmentID = assignments[j];
            
            scoreMax += Number(await getField(assignmentID ,'scoreMax'));
            const studentFiles = await getField(assignmentID ,'studentFile');
            for(let k=0;k<studentFiles.length;k++){
                if(studentID == studentFiles[k].userID){
                    scoreSum += Number(studentFiles[k].score);
                }
            }
        }
        
        const dataOfStudent = {
            "firstName" : student.firstName,
            "lastName" : student.lastName,
            "image" : student.image,
            "scoreSum" : String(scoreSum)
        }
        output.push(dataOfStudent);
    }
    res.send({ 
        "dataOfStudentInCourse" : output,
        "scoreMax" : String(scoreMax)
    });
}