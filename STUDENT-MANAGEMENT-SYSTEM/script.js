//created array to store student data
let students=[];
//arrow function to add students
const addStudent=(id,name,marks)=>{
    const student={
        id,
        name,
        marks  //since the key and value are same we can write it in short form
    
    }
    students.push(student);
}

//display students
const displayStudents=(studentList)=>{
   // for(let student of students){
   //     console.log(`ID:${student.id}, Name:${student.name}, Marks:${student.marks}`);
    //}
    studentList.forEach(student=>console.log(`ID:${student.id}, Name:${student.name}, Marks:${student.marks}`))
}
// find student by id

const findStudentById=(id)=>{
    const student=students.find(student=>student.id===id);
    if(student){
        console.log(`ID:${student.id},Name:${student.name},Marks:${student.marks}`);

    }else{
        console.log("Student not found!!");
    }
}

//calculate average marks
const calculateAverageMarks=()=>{
    const average=students.reduce((sum,student)=>sum+student.marks,0)/students.length;
    console.log(`Average Marks: ${average.toFixed(2)}`);
}
//get the topper
const getTopper = () => {

    const topper = students.reduce(
        (topper, student) =>
            student.marks > topper.marks ? student : topper,
        students[0]
    );

    console.log(
        `Topper: ID:${topper.id}, Name:${topper.name}, Marks:${topper.marks}`
    );
};

//remove students by id 
const removeStudentById=(id)=>{
    const index=students.findIndex(student=>student.id===id);
    if(index!==-1){
        students.splice(index,1);
        console.log("Student removed successfully!!");
    }else{
        console.log("Student not found!!");
    }
}


//count students 
const countStudents=()=>{
    console.log(`Total number of Students:${students.length}`);    
};

//filter students above marks
const filterStudentsAboveMarks=(threshold)=>{
    const filteredStudents=students.filter(student=>student.marks>threshold);
    if(filteredStudents.length===0){
        console.log(`No students found with marks above ${threshold}`);
    }
    return filteredStudents;

}
//
const calculateGrade=(studentId)=>{
    const student=students.find(student=>student.id===studentId);
    if(student){
        let grade;
        if(student.marks>=90){
            grade="A";
        }else if(student.marks>=75){
            grade="B";
        }else if(student.marks>=60){
            grade="C";
        }     else if(student.marks<60){
            grade="F";
        }
        console.log(`ID:${student.id}, Name:${student.name}, Marks:${student.marks}, Grade:${grade}`);
    }else{
        console.log("Student not found!!");
    }
}


//callig addFunction
addStudent(1,"John",85);
addStudent(2,"Jane",92);
addStudent(3,"Doe",78); 
addStudent(4,"Smith",88);
addStudent(5,"Emily",95);
addStudent(6,"Michael",80);
addStudent(7,"Sarah",90);
addStudent(8,"David",82);
addStudent(9,"Anna",87);
addStudent(10,"Tom",91);
// displayStudents();
// findStudentById(5);
// findStudentById(100);
// calculateAverageMarks();
// getTopper();

removeStudentById(5);

displayStudents();

findStudentById(5);
countStudents();
displayStudents(filterStudentsAboveMarks(85));

calculateGrade(1);