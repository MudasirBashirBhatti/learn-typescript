// .....................Objects...................... //

// ........................................... 
let myObj = {}
myObj = { fname: 'mudasir' }
myObj = ['Mudasir']  //we can do that because array is also an object if we check its type
console.log(typeof []);  //object

let obj2: object = {} //valid
// let obj3: object = 3 //not valid as i mention obj3 type is object

// ........................................... 
const exampleObj = {
    str: 'str',
    num: 3,
    bool: false,
}

exampleObj.num = 3 //valid
// exampleObj.num='3' //not valid
// exampleObj.bool='false' //not valid


// ......................types..................... 
type userValidation = {
    name: string,
    contact?: (number | string), // the question mark represent here that the value could be number, string or undefined. by doing that "contact" becomes optional
    isAgree: boolean
}

let ageObj: userValidation = {
    name: 'mudasir',
    contact: 1233,
    isAgree: true
}

let personObj: userValidation = {
    name: 'Ahmad',
    isAgree: false
}


// ........................................... 
let greetFunc = (ageObj: userValidation) => {
    let greetMsg = `Hello ${ageObj.name}! Welcom to our website`
    return greetMsg;
}

console.log(greetFunc(personObj));


// ...................difference b/w type & interfaces........................ 

// keypoints:
// 1.both works same in some ways but there are some differences

type carProp = {
    color: string,
    model: number,
    isNew: boolean
}

interface busProp {
    color: string,
    model: number,
    isNew: boolean
}

// 2. interfaces can be merged into one if we declare same interface multiple times. while in type we get an error

interface user {
    name: string
}

interface user {
    age: number
}

let userObj: user = {
    name: 'john',
    age: 20
}

console.log(userObj);

type user2 = {
    name: string
}

// type user2 = {    //we will simply get error
//     age: number
// }

// 3. interface can extented other interfaces using "extend" keyword, while type can extend other types using intersection types (&)

// *interface*

interface cycleProp extends carProp {
    height: number
}

let getCycleProp: cycleProp = {  //we can see cycleProp holds all other properties of carProp
    color: 'black',
    model: 2024,
    isNew: true,
    height: 3
}

//*type*
type bikeProp = carProp & {
    distance: number
}

let myBike: bikeProp = {
    color: 'red',
    model: 2020,
    isNew: false,
    distance: 324234
}

// 4. types can be used to represent complex types including union "|", intersection "&" maped types, while cannot represent union or intersection types directly.

type color = 'red' | 'green' | 'blue'
type point = { x: number, y: number }

// interface width = '2px' | '4px' //give an error it cannot be a union type rather it support objecs