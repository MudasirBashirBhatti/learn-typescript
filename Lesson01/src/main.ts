// .....................simple types......................

let myNum: number; //only numbers
let myStr: string; //only strings
let myBool: boolean; //only boolean
let anyVal: any; //this will allow every type

// .............................................

let str = 'Mudasir'
let num = 1
let bool = true

str = 'Haadi'
// str = 2  //this will give error

num = 3
// num = '1' //this will give error

bool = false
// bool = 'false' //this will give error

// .............................................

let num1: number;
let num2: number;

num1 = 3;
// num1 = '3' //this will give error ass assigned type is Number

num2 = 4;
// num2 = '4'; // this will give error ass type assigned is Number

console.log(num1 + num2);
console.log(num1 / num2);
