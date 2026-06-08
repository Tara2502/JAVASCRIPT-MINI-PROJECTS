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
const displayStudents=()=>{
   // for(let student of students){
   //     console.log(`ID:${student.id}, Name:${student.name}, Marks:${student.marks}`);
    //}
    students.forEach(student=>console.log(`ID:${student.id}, Name:${student.name}, Marks:${student.marks}`))
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
    console.log(`Average Marks: ${average}`);
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
// console.log(students);
displayStudents();
findStudentById(5);
findStudentById(100);
calculateAverageMarks();