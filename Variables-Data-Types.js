// Day 1 : Data types and variables

// Activity 1 Variable Declaration
// Task 1
var num = 1;
console.log(num);

// Task 2
let str = "ChaiaurCode";
console.log(str);

// Activity 2 Constant Declaration
// Task 3
const isTrue = true;
console.log(isTrue);

// Activity 3 Data Types
// Task 4
let number = 1;
console.log(typeof number);

let string = "ChaiaurCode";
console.log(typeof string);

let isFalse = false;
console.log(typeof isFalse);

let obb = {
    key: 1
}
console.log(typeof obb);

let arr = [0, 1, 2];
console.log(typeof arr);

// Activity 4 Reassigning Variables
// Task 5
let integer = 2;
integer = 1;
console.log(integer);

// Understanding const
// Task 6
const immutable = "ChaiaurCode";
// immutable = "ChaiCode"; //TypeError: Assignment to constant variable.
console.log(immutable);

// Feature Request
// 1: Variable Types Console log
function printVariableWithTypes() {
    let numbr = 0;
    console.log("Value: ", numbr, " Type: ", typeof numbr);

    let str1 = "ChaiaurCode";
    console.log("Value: ", str1, " Type: ", typeof str1);

    let isTrue0 = true;
    console.log("Value: ", isTrue0, " Type: ", typeof isTrue0);

    let obj = { key: "Value" };
    console.log("Value: ", obj, " Type: ", typeof obj);

    let arr0 = [0, 1, 2, 3, 4];
    console.log("Value: ", arr0, " Type: ", typeof arr0);
}

printVariableWithTypes();

// 2: Reassignment Demo
function letVsConst() {
    let initialValue = "ChaiaurCode";
    console.log("Initial Value with 'let': ", initialValue);

    initialValue = "ChaiCode";
    console.log("Reassigned Value with 'let': ", initialValue);

    const initialValue0 = "ChaiaurCode";
    console.log("Initial Value with 'const':", initialValue0);

    try {
        initialValue0 = "ChaiCode";
        //console.log("Reassigned Value with 'const':", initialValue0); // This will not execute as the above statement will return an error

    } catch (error) {
        console.log("Cannot Assign Value To a 'const' variable: ", error);
    }
}

letVsConst()
