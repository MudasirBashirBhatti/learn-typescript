// .....................Arrays...................... //



// .....................type=string[]...................... 

let countryArr = ['Pak', 'India', 'Japan']  //type=string[]

countryArr[0] = 'Sirilank'
countryArr[0] = 3 //this will throw error because it is supposed that the above array type is string you can tes it by hovering over array variable 

// Note: we can add only strings in this type of array at any index


// .....................type=(string|number):[]......................

let secondArr = ['str1', 8, 'str2'] //type=(string | number)[]
secondArr[0] = 3
secondArr[0] = false //this will generate error

// NOTE: we can add only strings and numbers in this array


// .....................type=(string | number | boolean):[]......................

let thirdArr = ['Mudasir', 23, true]
thirdArr[0] = false
thirdArr[0] = { fname: 'mudasir' }  //this will throw error as only string number or boolean expected


// .....................type=(string | number | boolean,{}):[]......................

let mixedArr = ['Mudasir', 23, true, {}]
mixedArr[0] = ['hello']
mixedArr[0] = {}

// NOTE: We can add any type of value at any index because its type is mixed



// .....................comparisons......................
let str1: (string)[] = ['string1', 'string2']
let str2: (string)[] = ['string3', 'string4']
let var3: (string | number)[] = ['string4', 2]

str1 = str2 //we can assign str2 to str1
str1 = var3 //we can not assign str1 to var3
var3 = str1 //we can assign str1 to var3 as var3 has two supported types strings and numbers


// .....................tuple......................

let myTuple: [string, number, boolean] = ['hello', 3, false] // we nee to remember the type of each index. this is the main difference between tuple and mixed type of array

myTuple[0] = 'changed str'
myTuple[0] = 3  //can can't change string index to number

let mixed = ['str1', 5, true]


mixed = myTuple //myTuple can be assigned to mixed because mixed is not position strict
myTuple = mixed //mixed can't assigned to myTuple as mixed may have changed positions of specific type of elements
