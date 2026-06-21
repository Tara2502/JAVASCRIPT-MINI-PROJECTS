# Student Management System

A console-based Student Management System built using JavaScript to practice core programming concepts and array operations.

## Features

* Add a student
* Display all students
* Find a student by ID
* Calculate average marks
* Find the topper
* Remove a student by ID
* Count total students
* Filter students above a given marks threshold
* Calculate grades based on marks

## Student Structure

Each student is stored as an object:

```javascript
{
    id: 1,
    name: "John",
    marks: 85
}
```

## Concepts Used

* Arrays
* Objects
* Arrow Functions
* Template Literals
* Conditional Statements
* Array Methods:

  * `forEach()`
  * `find()`
  * `findIndex()`
  * `filter()`
  * `reduce()`

## Functions Implemented

### addStudent()

Adds a new student to the system.

### displayStudents()

Displays all student records.

### findStudentById()

Searches for a student using their ID.

### calculateAverageMarks()

Calculates the average marks of all students.

### getTopper()

Finds the student with the highest marks.

### removeStudentById()

Removes a student using their ID.

### countStudents()

Displays the total number of students.

### filterStudentsAboveMarks()

Returns students whose marks are greater than a specified value.

### calculateGrade()

Assigns a grade based on marks.

## Grade Criteria

| Marks        | Grade |
| ------------ | ----- |
| 90 and above | A     |
| 75 - 89      | B     |
| 60 - 74      | C     |
| Below 60     | F     |

## Technologies Used

* JavaScript (ES6+)

## Learning Objectives

This project was built to strengthen understanding of:

* Data manipulation using arrays and objects
* Functional programming concepts in JavaScript
* Problem-solving and logic building
* Real-world use of array methods

## Future Enhancements

* Update student details
* Sort students by marks
* Store data in Local Storage
* Build a browser-based UI using HTML, CSS, and JavaScript
* Add file/database persistence
