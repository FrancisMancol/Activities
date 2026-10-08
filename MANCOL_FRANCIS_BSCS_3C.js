let name = "Francis Mancol";
let age = "24";
let course = "Computer Science";

console.log("Name:", name);
console.log("Age:" , age);
console.log("Course:" , course);


if (age >= 18){
    console.log("You are an adult.");
}else{
    console.log("You are a minor.");
}

let number = 10;

if (number % 2 === 0) {
    console.log(number + " is even.");

} else {
    console.log(number + " is odd.");
}

let grade = 85;

if (grade >= 75){
    console.log("Passed!");
}else{
    console.log("Failed!")
}

for (let i = 1; i <= 5; i++) {
    console.log("For", i );
}

let x = 1;

while (x <= 5){
    console.log("while:", x);
    x++;
}

let y = 1;

do {
    console.log("Do-while:", y);
    y++;
} while (y <= 5);

let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

console.log("First fruits:", fruits[0]);

fruits.push("Orange");
console.log("Updated fruits:", fruits);