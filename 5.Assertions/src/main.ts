// .....................type assertions...................... //

// by type assertions we can specify types explictly (we know more about type than compiler). in DOM it is very useful. type assertion only tells typescript that we know better than it although we make mistake. it will make typescript blank on compile time when we are typing but not actually change the types

let someValue: unknown = 'hello world'  //the typescript don't know what type of someValue
let strLength: (string)[] = (someValue as (string)[]) //we are telling typescript that someValue is array of string but actually it is not and we are not getting any error

console.log(typeof strLength);

// DOM example
let currentYear = document.getElementById('year') as HTMLElement //if not set type as HTMLELEMENT we will get error when we try to set currentYear (err: possibly null)
let thisYear: string = new Date().getFullYear().toString()
currentYear.setAttribute('datetime', thisYear)

let img = document.querySelector('img')!  //if i don't add "!" typescript will give error because on null we cannot apply property src. here typescript considering it as an image by itself we can also do assertion by ourself

img.src

let img2 = document.getElementById('img2') as HTMLImageElement
img2.src