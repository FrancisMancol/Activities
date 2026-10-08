let studentName = "Francis";
let age = 24;
let course = "BSCS";
let year = 3;
let section = "C";
let school = "Northwest Samar State University";
let grade = 88;
let city = "Calbayog";
let status = "Active";
let favoriteSubject = "JavaScript";

const studentID = "20-01458";
const teacher = "Mr. Ortiz";
const semester = "1st Semester";
const subject = "Mobile Programming";
const passingGrade = 75;
const room = "Lab 2";
const day = "Wednesday";
const time = "7:00 AM";
const maxStudents = 40;
const schoolYear = "2026-2027";

// TEMPLATE LITERALS
console.log(`Student Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year Level: ${year}`);
console.log(`Section: ${section}`);
console.log(`School: ${school}`);
console.log(`Grade: ${grade}`);
console.log(`City: ${city}`);
console.log(`Status: ${status}`);
console.log(`Favorite Subject: ${favoriteSubject}`);

// 5 ARROW FUNCTIONS
const greet = () => `Hello, ${studentName}!`;
const getCourse = () => `Course: ${course}`;
const checkGrade = () => grade >= passingGrade ? "Passed" : "Failed";
const getSchool = () => `School: ${school}`;
const getSubject = () => `Subject: ${subject}`;

console.log(greet());
console.log(getCourse());
console.log(checkGrade());
console.log(getSchool());
console.log(getSubject());

// 3 DESTRUCTURED ARRAYS
let subjects = ["JavaScript", "Database", "Networking"];
let [subject1, subject2, subject3] = subjects;

let scores = [90, 85, 88];
let [score1, score2, score3] = scores;

let colors = ["Red", "Green", "Blue"];
let [color1, color2, color3] = colors;

// 3 DESTRUCTURED OBJECT LITERALS
let student = {
    name: "Francis",
    course: "BSCS",
    year: 3
};

let { name, course: studentCourse, year: studentYear } = student;

let teacherInfo = {
    teacherName: "Mr. Ortiz",
    subjectName: "Mobile Programming"
};

let { teacherName, subjectName } = teacherInfo;

let schoolInfo = {
    schoolName: "Northwest Samar State University",
    location: "Calbayog"
};

let { schoolName, location: schoolLocation } = schoolInfo;

// 2 ARRAYS USING SPREAD OPERATOR
let basicSubjects = ["JavaScript", "Database"];
let extraSubjects = ["Networking", "HCI"];
let allSubjects = [...basicSubjects, ...extraSubjects];

let firstScores = [90, 85];
let secondScores = [88, 92];
let allScores = [...firstScores, ...secondScores];

// 2 OBJECT LITERALS USING SPREAD OPERATOR
let basicStudent = {
    name: "Francis",
    course: "BSCS"
};

let studentDetails = {
    ...basicStudent,
    year: 3,
    section: "C"
};

let basicSchool = {
    school: "NWSSU",
    city: "Calbayog"
};

let completeSchool = {
    ...basicSchool,
    country: "Philippines",
    status: "Active"
};

// 2 ARRAYS USING .map()
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);

let names = ["Ace", "Arcon", "Justin"];
let upperNames = names.map(name => name.toUpperCase());

// 2 ARRAYS USING .filter()
let grades = [95, 72, 88, 60, 91];
let passingGrades = grades.filter(grade => grade >= 75);

let ages = [15, 18, 20, 25, 30];
let adultAges = ages.filter(age => age >= 18);

// 2 OBJECT LITERALS USING OPTIONAL CHAINING
let account = {
    username: "Francis",
    profile: {
        email: "francis@email.com"
    }
};

let email = account?.profile?.email;

let teacherAccount = {
    username: "MrOrtiz"
};

let teacherEmail = teacherAccount?.profile?.email;

// DISPLAY RESULTS
console.log(`All Subjects: ${allSubjects}`);
console.log(`All Scores: ${allScores}`);
console.log(`Doubled Numbers: ${doubledNumbers}`);
console.log(`Uppercase Names: ${upperNames}`);
console.log(`Passing Grades: ${passingGrades}`);
console.log(`Adult Ages: ${adultAges}`);
console.log(`Student Email: ${email}`);
console.log(`Teacher Email: ${teacherEmail}`);
console.log(`School Location: ${schoolLocation}`);