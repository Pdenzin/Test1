// Objects
// const myObject = {name:'Frank',age:34}

// myObject.name = 'Peter'
// myObject.age = 27

// console.log('Hi my name is ' + myObject.name + ', I am ' + myObject.age + ' years old')

//Arrays

//array of numbers
// const array = [1,2,3,4,5,6,7,8,9,10,11,12]
// const array2 = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve']
// const array3 = [{name:'Frank',age:34},{name:'Peter',age:27}]

// console.log(array3[1].name)

// const pi = 3.14
// const pi2 = 3.14/2
// const pi3 = 3.14 * 30000

//do this with for loop

// for(let i = 0;i<array.length;i++){
//     if(array[i]>5 && array[i]<11){
//         console.log(array[i])
//     }

// }
//modular

// for(let i = 0; i < array.length; i++){
//     console.log(array[i]*2)
// }

// for(let i = 0;i<array.length;i++){
//     if(array[i] % 5 == 0){
//         console.log(array[i])
//     }
// }
//filter numbers not equal to five

// for(let i = 0;i<array.length;i++){
//     if(array[i] >= 2 && array[i] < 10){
//         console.log(array[i])
//     }
// }

// for(i = 0; i <= array.length; i++){
//     if(array.length / 2 == i)[
//         console.log(i)
//     ]
// }

// // console.log(array[Math.floor(array.length/2)])
// let multiplesoffour = 0
// for(i = 0; i <=100; i++){
//     if(i % 4 == 0){
//         multiplesoffour = multiplesoffour + 1
//     }
// }
// console.log(multiplesoffour)

//comparison operators

// let x = 1
// let y = 2

// console.log(x > y)

// for(let i = 0; i < 100; i++){
//     if((i > 24)&&!(i>=25 && i<=30)){
//         console.log(i)
//     }
// }

//logical operators
//read about if statements              // Homework

// age = 6
// if(age >= 18 || (age > 12 && age < 19)){
//     console.log('True')
// } else{
//     console.log('False')
// }

// y = -11

// if(y < -10 || y > 10){
//     console.log('True')
// } else{
//     console.log('False')
// }

// string1 = "hello world aa"

// for(i = 0; i < string1.length; i++){
//     if(string1[i] == ('a' || 'b') ){
//         console.log('True')
//     }
// }

// age = 18
// is_citizen = 'True'

// if(age >= 18 && is_citizen === 'True'){
//     console.log('True')
// } else{
//     console.log('False')
// }

// const string1 = 'Hello World'                    // Very cool // Regular expressions

// const isuppercase = /[A-Z]/.test(string1)

// const islowercase = /[a-z]/.test(string1)

// const result = isuppercase && islowercase

// console.log(result)

// function numbergreaterthanfifteen(a,b){
//     if((a * b) == 15) console.log('a * b = 15')
//     if((a + b) == 15) console.log('a + b = 15')
//     if((a - b) == 15) console.log('a - b = 15')
//     if((a / b) == 15) console.log('a / b = 15')
// }
// numbergreaterthanfifteen(3,10)

// function numbergreaterthanfifteen(a,b){
//     if((a * b) == 15) console.log('a * b = 15')
//     else if((a + b) == 15) console.log('a + b = 15')
//     else if((a - b) == 15) console.log('a - b = 15')
//     else if((a / b) == 15) console.log('a / b = 15')
// }
// numbergreaterthanfifteen(3,5)

// function numbergreaterthanfifteen(a,b){
//     if((a * b) == 15) console.log('a * b = 15')
//     else if((a + b) == 15) console.log('a + b = 15')
//     else if((a - b) == 15) console.log('a - b = 15')
//     else if((a / b) == 15) console.log('a / b = 15')
//     else console.log('None of the above give us 15')
// }

// numbergreaterthanfifteen(3,10)

//switch statements

// let selectedDay = new Date().getDay()
// switch (selectedDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";

//   }
// console.log(day)

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       console.log("Friday");
//       break;
//     case 6:
//       day = "Saturday";

//   }

//for loops
// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

// const newarray = [1,2,3,4,5,6,7,8,9,10]

// for(array in newarray){
//     console.log(parseInt(array) + 10)
// }

//while loops

// i = 0
// while(i < 100){
//     console.log(i)
//     i = i + 1
// }

//for each

// newarray.forEach((element) => {
//     console.log(parseInt(element) * 2)

// });

// const numbersarray = ['one','two','three','four','five','seventeen']

// for(array in numbers){
//         console.log(numbers[array][1])
//     }

//solve above using two four loops for hw

// for(i = 0; i < numbers.length;i++){
// console.log(numbers[i][1])
// }

// chr = ''

// for(i = 1; i <= 6; i++){
//     for(j = 1; j < i; j++){
//         chr = chr + '#'
//     }
// console.log(chr)
// chr =
// }

// maybe try christmas tree version of this exercise

// heightoftree = 17
// chr1 = ' '
// chr2 = '*'
// for(i = 0,j = heightoftree - 1; i <= heightoftree - 1; i++,j--){
//     middle = 1
//     side1 = j
//     side2 = j
//     console.log(chr1.repeat(side1) + chr2.repeat(i) + chr2.repeat(middle) + chr2.repeat(i) + chr1.repeat(side2))
// }

// do while
// i = 0
// do {
//     console.log('2')
//     i = i + 1
// } while (i < 10);
//review below // foreach

// const randArray = [1,2,3,5,6,7,8,52,4,698]

// numbersarray.forEach((element,index,array) => {
//    console.log(array[1])

// });

// very neat

// var largest = 0

// numbersarray.forEach((element) => {
//     if(element.length > largest){
//         largest = element.length
//     }
// });
// console.log(largest)

//hw   write an algorithm that reverses each string in numbersarray

// const numbersarray = ['one','two','three','four','five','seventeen']

// numbersarray.forEach((element) => {
//     for(i = 0; i < element.length; i++){
//         console.log(element[element.length - 1 - i])
//     }
// });

//I don't know why I need the - 1

//given a square matrix, calculate the absolute difference between the sums of each diagonals

// const matrixarray = [11,2,4,4,5,6,10,8,-12]
// const widthofmatrix = 3
// const heightofmatrix = 3
// number1 = 0
// number2 = 0
// number3 = 0
// var matrixarrayfinal = [0,0,0]

// matrixarray.forEach((element,Array) => {
//     h = heightofmatrix
//     for(i = 0; i < heightofmatrix; i++){
//         number[i] = element[i]
//         h = h - 1
//     }
// }); console.log()

//functions
//a routine carried out based on conditions

// const matrixarray1 = [[11, 2, 4],[4,5,6],[10,8,-12]]

// function solution(mymatrix){
//     let rightdiagonalsum = 0
//     let leftdiagonalsum = 0
//     const matrixlength = mymatrix.length

//     for(i = 0; i < matrixlength; i++){
//         rightdiagonalsum += mymatrix[i][i]
//         leftdiagonalsum += mymatrix[i][matrixlength - i - 1]

//     }
//     const myabsolute = Math.abs(leftdiagonalsum - rightdiagonalsum)
//     console.log(myabsolute)
// }
// solution(matrixarray1)

//void function
// function helloworld(){
//     console.log('hello world')
// }
// helloworld()

//nonvoid function
// function helloworld(name,secondname){
//     console.log('hello world ' + name + ' ' + secondname)
// }
// helloworld('Peter','Frank')

// helloworld('John', 'sam')

//returntype function
// function area(length,bredth){
//     let area = length * bredth
//     return area
// }
// let result = area(7,5)
// console.log(result)

// function testfunction(x,y,z){
//     let answer = (x * 2) * (y * 3) + z
//     return answer

// }
// let result = testfunction(100,5,0)
// console.log(result)

//more practical functions

//create and algorythm that tracks the lowest and highest number from values 1 - 100

//three imputs returns true if any two or three are even numbers

// function evennumbers(x,y,z){
//     if(x % 2 == 0 && y % 2 == 0 || y % 2 == 0 && z % 2 == 0 || z % 2 == 0 && x % 2 == 0){
//         console.log('True')
//     }else console.log('False')
// }

// evennumbers(1,1,3)

// calculates any three areas of shape when imputed

// function solvearea(shape,l,w,r){

//     let area = 0
//     if(shape == 'triangle') area = (l * w) / 2
//     else if(shape == 'square') area = l * w
//     else if(shape == 'circle') area = 3.14 * (r*r)

//     return area
// }
// let result = solvearea('triangle',10,5,1)
// console.log(result)

//create a game that prints out the right guess number, when imputed at
//reasearch prompts with html page??

//git

// const answer = 7
// function testprompt(){
//     let number;
//     number = window.prompt('Input a random number between 1 and 10, you have 3 guesses')
//     console.log(number)
//     for(i = 0; i < 3; i++){
//         if(number == answer) console.log('That is correct!')
//         else if (number > answer) number = window.prompt('Too high, guess again')
//         else if (number < answer) window.prompt('Too low, guess again')
//     } console.log('You are out of guesses!')

// }
// testprompt()

// make this so I have 3 guesses  // hw

// function guessa(){
//     let numbers = 0;
//     let answer = Math.floor(Math.random()*10)
//     numbers = window.prompt('Put a random number between 1 and 10')
//     let output = parseInt(numbers)
//     if(output === answer) console.log('You guessed corretly!')
//     else(console.log('Wrong, try again!' + ' the answer was ' + answer))
// }
// guessa()

//annonymous functions

// let multiplication = function(a,b){
//     return a * b
// }
// console.log(multiplication(7,10))

//arrow functions

// let square = (y) => {
//     return y * y
// }
// console.log(square(8))

// arrow type function that finds the middle element of any string

// review later

// let string1 = 'helloPeter'

// let middle = () => {
//     return x = string1.length / 2
// }
// let result = middle()
// console.log(string1[result])

// function middle(){
//     return x = string1.l
// }

//arrays

// let fruit = ['apple','banana','orange']

// fruit[0] = 'cherry'

// //push

// fruit.push('apple','kiwi')

// //pop

// fruit.pop()
// console.log(fruit)

//other methods

// let poppedvariable = fruit.pop()

// console.log(poppedvariable)

// console.log(fruit)

// shift and unshift

// let var1 = fruit.shift()

// console.log(var1)
// console.log(fruit)

// let var2 = fruit.unshift('orange')
// fruit.pop()
// console.log(fruit)
// console.log(fruit[2])

//calculates the average of a set of arrays of numbers

// array1 = [1,2,3,4,5,6,7,8,234,1]

// let array_length = array1.length
// let j = 0
// function average(array1){
//     for(i = 0; i < array_length; i++){
//         j += array1[i]
//     }
//     console.log(j/array_length)
// }

// average(array1)

//what is +=
//add all of the values together

//write a js function that removes the middle element from the array using splice if the array has an odd number of elements
//if it has an even number of elements remove the middle two elements
//return the modified array

// very cool

// let array10 = [10,20,30,40,50,60]

// function find_middle(array){
//     let array_length = array.length

//     if(array_length % 2 == 0){
//         middle_one = array_length/2
//         array.splice(middle_one - 1,2)
//     }
//     else{

//         array.splice(array_length/2,1)
//     }
//     console.log(array)
// }

// find_middle(array10)

// let array15 = ["task 1", "task 2", "task 3", "task 4", "task 5","task 6"]

// function removelast2(array){
//     array.splice(array.length - 2,2)
//     console.log(array)
// }

// removelast2(array15)

// let spliceddata = array15.splice(1,2)

// console.log(spliceddata)

//write a function that removes last n element from an array using splice method

// let array15 = ["task 1", "task 2", "task 3", "task 4", "task 5","task 6"]
// n = 3

// function removen(array,numbertoremove){
//     array.splice(array.length - numbertoremove,numbertoremove)
//     console.log(array)
// }

// removen(array15,n)

//You have an array of colors. Write a function that replaces a specific color in the array with a new color.
//The function should take the array of colors, the index of the color to replace, and the new color as input,
//and return the modified array using the splice method.

// let color_array = ['red', 'blue','green','brown','yellow']

// let replace_color = 'blue'

// let new_color = window.prompt('Please insert a color')

// function swapcolor(old_color,new_color,array){
//     let i = 0
//     while(old_color !== array[i] ){
//         i += 1
//     }
//     array.splice(i,1,new_color)

// }

// swapcolor(replace_color,new_color,color_array)

// let color_array = ['red', 'blue','green','brown','yellow']

// let replace_color = 'blue'

// let new_color = 'jack'

// function swapcolor(old_color,new_color,array){
//     let index = array.indexOf(old_color)
//     array[index] = new_color
//     console.log(array)
// }

// swapcolor(replace_color,new_color,color_array)

// document.getElementById('colorButton').addEventListener('click',function(){
//     var colors = ["#FF5733", "#33FFA3", "#3366FF", "#FF33EA", "#FF5733", "#33FFA3", "#3366FF", "#FF33EA", "#FF5733", "#33FFA3"];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor

// })
// document.getElementById('increaseText').addEventListener('click',function(){
//     let currentFontSize = window.getComputedStyle(this, null).getPropertyValue('font-size');
// let currentFontSizeNum = parseFloat(currentFontSize);
// this.style.fontSize = (currentFontSizeNum + 2) + 'px';
// })
// document.getElementById('blackButton').addEventListener('click',function(){
//     let blackColor = "#000000"
//     document.body.style.backgroundColor = blackColor
//     this.style.fontStyle = "ffffff"
// })

//find out how to make the colors white when it goes black

//converting arrays to strings

// let array16 = ['a','b','c','d','e']

// // console.log(array16.toString())

//                                             //arrow type functions -- review

// // console.log(array16.join(""))

// // let result = ''
// // for(let i = 0; i < array16.length; i++){
// //     result += array16[i]
// // }
// // console.log(result)

// let result2 = ''
// for(let i = array16.length; i > 0; i--){
//     result2 += array16.shift()
// }
// console.log(result2)

//arrays continued

//function with foreach that prints out the name of the fruit from the first letter

// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// let input = 'b'

// function find_fruit(x,array){
//     array.forEach(element => {
//         let i = 0
//         let y = element[i]
//         if(y != x){
//             i += 1
//         }
//         else console.log(element)

//     });
// }

// find_fruit(input,fruits)

// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// let input = 'g'

// function find_fruit(x,array){
//     array.forEach(element => {
//         let y = element[0]
//         if(y != x){
//         }
//         else console.log(element)

//     });
// }

// find_fruit(input,fruits)

//forEach only works for arrays and objects

//map filter sum find
//different types of array methods

// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// function map_fruit(array){
//     array.map((element) => {
//         console.log(element.toUpperCase())
//     })
// }

// map_fruit(fruits)

//filter

// let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

// let input = 'banana'
// function filter_fruit(x,array){
//     let result = array.filter((element) => {

//         return element === x
//     })
//     console.log(result)
// }

// filter_fruit(input,fruits)

//objects - used to create personalized information

// let person = {
//     name1: 'Peter',
//     age: 27,
//     country: "USA"
// }
// person.college = 'Saint Louis University - Madrid'
// console.log(person)

// const fruits = {}
// fruits.citrus = "orange"
// fruits.melon = "watermelon"
// fruits.berry = "blueberry"

// console.log(fruits)

// for(k in fruits){
//     console.log(k + ': ' + fruits[k])
// }

// console.log(fruits["citrus"])

//constructor
//class/function with objects

// function person(name,age){
//     this.name = name
//     this.age = age
// }

// let christopher = new person('christopher',30)
// let peter = new person('Peter',27)
// let frank = new person('Frank', 32)

// console.log(christopher,peter,frank)

// class person{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
// }

//destructructuring
//opposite of constructor way of parsing data to variables

// let {name1,age,country} = person

// console.log(age,country,name1)

//refresher

//calculate the factorial of a given positive integer

// let givenInteger = 5

// function findFactorial(x){
//     let y = 1
//     for(i = x; i >= 1; i--){
//         y *= i
//     }
// console.log(y)
// }

// findFactorial(givenInteger)

//Write a JavaScript program to reverse a given string without using the built-in reverse() method.

// let givenString = 'Peter and Frank say hi!'

// function reverseString(x){
//     let stringprint = ''
//     for(i = (x.length - 1); i >= 0; i--){
//         stringprint += x[i]
//     }
// console.log(stringprint)
// }

// reverseString(givenString)

// Write a JavaScript program to remove duplicate elements from an array (without using built-in methods like filter() or Set).

// let array1=['a','b','a','c','s','d','d','d','q']

// function removedups(x){
//     for(i = 0; i < x.length; i++){
//         for(j = 0; j < x.length; j++){
//             if(x[i] == x[j]){
//             }
//             else console.log(x[i])
//             break
//         }
//     }
// }

// removedups(array1)

//try to solve

// function removedups(x){
//     let arrayminusdups = ''
//     for(i = 0; i < x.length; i++){
//         for(j = 0; j < x.length; j++){
//             if(x[i] == x[j]){
//             }
//             else
//             arrayminusdups += x[i]
//             break
//         }
//     }
// console.log(arrayminusdups)
// }

// // removedups(array1)

// let array2 = []
// // array2.push(array1[0])

// for(i = 0; i < array1.length; i++){
//     let isduplicate = false
//     for(j = 0; j < array2.length; j++){
//         if(array1[i] === array2[j]){
//             isduplicate = true
//             break
//         }
//     }
//         if(!isduplicate){
//             array2.push(array1[i])
//         }

// }console.log(array2)

// let array1 = ['a','b','a','c','s','d','d','d','q']

// function removeDuplicates(x){
//     let noduplicates = ''
//     for(i = 0;i < x.length; i++){
//         for(j = 0;j < x.length; j++){
//             if(x[i] == x[j]){
//             }
//             else noduplicates += x[i]
//             break
//         }
//     }
// console.log(noduplicates)
// }

// removeDuplicates(array1)

// let array1 = ['a','b','a','c','s','d','d','d','q']

// let existArray = []
// let isdup = false

// for(i = 0; i < array1.length; i++){
//     isduplicate = false
//     for(j = 0; j < i; j++){
//         if(array1[i] == existArray[j]){
//             isduplicate = true
//         }
//     }
//         if(isduplicate == false){
//             existArray.push(array1[i])
//         }
// }
// console.log(existArray)

//objects well known methods
// properties

// const data = {
//     name: 'Peter',
//     age: 27,
//     displaydata: function(){
//         console.log(`name: ${this.name}`);
//         console.log(`age: ${this.age}`)
//     },
//     isAdult: function(){
//         return this.age >= 18;
//     },
//     updateAge: function(newage){
//         this.age = newage
//     }
// }

// data.displaydata()
// console.log(data.isAdult())
// data.updateAge(37)
// data.displaydata()

// const car = {
//     brand: 'Toyota',

// }
// car.start = function(){
//     console.log(`${this.brand} started!`)
// }

// car.color = 'blue'

// car.start()

// console.log(car)

//deleting in objects
//------

// delete car.color

//keys

// console.log(Object.keys(car))

//object .values tells if properties are method or variable

// console.log(Object.values(car))

//object.entries

// console.log(Object.entries(car))

// function printEach(){
//     let array1 = Object.entries(car)

//     for(i = 0; i < array1.length; i++){
//         for(j = 0; j < array1.length - 1; j++){
//             console.log(array1[i][j])
//         }
//     }
// } printEach()

// property shorthand

// const name1 = 'alice'
// const age = 25
// const person = {name1, age}
// console.log(person)

// name1 = 'peter'

// const propertyname = 'age'
// const person = {
//     name1: 'Bob',
//     [propertyname]: 27
// }
// // console.log(person)

// //enumerating properties -- allows you to iterate over properties with a for in loop or Object.keys, Object.values, Object.entries

// for(const key in person){
//     console.log(`${key}: ${person[key]}`)
// }
// person.name1 = 'Peter'

// const keys = Object.keys(person)
// const values = Object.values(person)
// const entries = Object.entries(person)

// console.log(keys,values, entries)

// const obj = { a: 1, b: 2, c: 3 };

// const keys = Object.keys(obj);
// const values = Object.values(obj);

// for(i = 0; i < keys.length; i++){
//     console.log(`${keys[i]}: ${values[i]}`)

// }

// for(const[key,value] of Object.entries(obj)){
//     console.log(`${key}: ${value}`)
// }

//has own property method ----
//hasOwnProperty() -- returns whether the obj has a specified property

// console.log(obj.hasOwnProperty('b'))
// console.log(obj.hasOwnProperty('z'))

//object sealing
//prevents other properties from being added in the long run, from accepting new properites in the future

// Object.seal(obj)

// obj.d = 'd: 4'

// console.log(obj)

// object binding -- creates a new function that what when it is called the 'this' keyword sets a bind
//used for settting the contect of a function

// const module1 = {
//     x: 42,
//     getx: function(){
//         return this.x
//     }
// }

// const GETx = module1.getx

// console.log(GETx())

// const GETx2 = GETx.bind(module1)

// console.log(GETx2())

//read over material related to Object binding in js

// will return to binding when we have something more practical

//spread operators

// const obj = { grade4: 14, grade5: 23, grade6: 37 };

// const school = {
//     grade1: 10,
//     grade2: 20,
//     grade3: 30,
//     ...obj
// }

// console.log(school)

// const obj = { grade4: 14, grade5: 23, grade6: 37 };

// const school = {
//     grade1: 10,
//     grade2: 20,
//     grade3: 30,
//     furthergrades: obj
// }

// console.log(school)

//code that counts the number of objects found in the previous object written

// const obj = { grade4: 14, grade5: 23, grade6: 37 };

// const school = {
//     grade1: 10,
//     grade2: 20,
//     grade3: 30,
//     furthergrades: obj,
// }

// function countObjects(x){
//     let y = 0
//     let z = Object.values(x)
//     for(i = 0; i < z.length; i++){
//         if(typeof z[i] == "object"){
//             y += 1
//         }
//     }
//     console.log(y)
// }

// countObjects(school)

//convert an array to an object       -- nonsense!
//convert an object to an array       -- less of nonsense

// let arrayX = []

// let objX = {
//     0:1,
//     1:2,
//     2:3,
// //     3:4
// // }

// // objX = {...arrayX}

// // console.log(objX)

// // for(i = 0; i < arrayX.length; i++){
// //     objX.key = arrayX[i]
// // }console.log(objX)

// let objkey = Object.keys(objX)

// for(i = 0; i < objkey.length; i++){
//     arrayX.push(Object.values(objX)[i])
// }
// // console.log(arrayX)

// let result = Object.entries(objX)

// // console.log(result)

// let emptyarray = []
// for(i = 0; i < result.length; i++){
//     for(j = 0; j < result[i].length; j++){
//         emptyarray.push(result[i][j])
//     }
// }
// console.log(emptyarray)

// const person = {
//     name: "John Doe",
//     age: 30,
//     address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "12345" },
//     contact: {
//         email: "",
//         phoneNumbers: [
//             { type: "home", number: "555-1234" },
//             { type: "work", number: "555-5678" },
//             { type: "mobile", number: "555-8765" } ] },
//     hobbies: ["reading", "hiking", "coding"] };

// let newstreet = '321 Back St'

// function updateStreet(x,y){
//     y.address.street = x
// }
// updateStreet(newstreet,person)

// console.log(person.address.street)

//updates phone numbers

// let newNumber = '111-111'

// function updatePhone(x,y){
//     for(j = 0; j < y.contact.phoneNumbers.length; j++){
//         y.contact.phoneNumbers[j].number = `${x}${j}`
//     }
// }

// updatePhone(newNumber,person)

// console.log(person.contact.phoneNumbers)

//would like you to iterate and update the values at the third object and the array ,
// const nestedObject = {
//     level1: { key1: 'value1', level2:
//                                     { key2: 'value2', level3:
//                                                              { key3: 'value3', level4:
//                                                                                      { key4: 'value4', array:
//                                                                                                              [1, 2, 3, 4, 5] } } } } };

// let newVal = 'New Value'

// function updateObject(x,y){
//     for(i = 0; i < 1; i++){
//         for(j = 0; j < 1; j++){
//             for(k = 0; k < 1; k++){
//               y.level1.level2.level3.key3 = x
//               for(l = 0; l < 1; l++){
//                 for(m = 0; m < y.level1.level2.level3.level4.array.length - 1; m++){
//                     y.level1.level2.level3.level4.array[m] = y.level1.level2.level3.level4.array[m + 1]
//                 }
//               }
//             }
//         }
//     }
// console.log(y.level1.level2.level3, y.level1.level2.level3.level4.array)
// }

// updateObject(newVal, nestedObject)

// y.level1.length
// y.level1.level2.level3.length
// y.level1.level2.length

//update all the second keys wiih new values

// const nestedArray = [
//  [ { key1: 'value1' }, { key2: 'value2' } ],
//  [ { key3: 'value3' }, { key4: 'value4' } ],
//  [ { key5: 'value5' }, { key6: 'value6' } ]
// ];

// function nestArray(x){
//     let z = Object.values(x)

//     for(i = 0; i < x.length; i++){
//         let q = (i + 1) * 2
//         z[i][1]['key' + q] =  `change`
//         }

//     console.log(x)
//     }

// nestArray(nestedArray)

// let count = nestedArray.reduce((accumulator,[key,value]) => {
//     currentValue[0] = 'change'
//     currentValue[1] = 'change'
//     accumulator.push(currentValue)
//     return accumulator
// },[])
// console.log(count)

//document object model
// part of js that is used to control the html and css content of a page
//in dom all html element is seen as an object
//methods (fnctions in objects) can be called in html

//study more document object model and create a code that allows paragraph to come on and off when clicked on

//event listeners
//reacts to whatever the user is doing
//for user to have a feedback from js

//hw if mouse is over then show paragraph// if mouse is moved away have it disapear

// const newObject1 = {
//   course: {
//     id: "CS101",
//     title: "Introduction to Computer Science",
//     instructor: {
//       name: "Dr. Jane Smith",
//       contact: {
//         email: ["jane.smith@university.edu", "peter.deninaw3rj;lakwdsf"],
//         office: "Room 123, CS Building",
//       },
//     },
//     schedule: {
//       lectures: {
//         days: ["Monday", "Wednesday", "Friday"],
//         time: "10:00 AM - 11:30 AM",
//       },
//       labs: {
//         days: ["Thursday"],
//         time: "1:00 PM - 3:00 PM",
//         location: "Lab 2, CS Building",
//       },
//     },
//     syllabus: {
//       week1: "Introduction to Programming",
//       week2: "Data Structures",
//       week3: "Algorithms",
//       week4: "Software Development",
//       finalProject: "Build a Basic Web Application",
//     },
//   },
// };

// function iterateToEmail(x){
//   let z = x.course.instructor.contact;
//   for (key in x)
// }

// iterateToEmail(newObject1)

// for(i = 0; i < 3; i++){
//     const key = Object.keys(newObject1.course.instructor.contact);
//     const value = Object.values(newObject1.course.instructor.contact);

//     if(key[i] == 'email') console.log(value[i])
//     else console.log('-')
// }

// console.log(newObject1.course.instructor.contact)

//reduce filter find

//convert the following nested objects to a single array

// let origArray = [{sam:"one"},{frank:"two"},{michael:"three"}]

// let newArray = []

// for(i = 0; i < origArray.length; i++){
//   newArray.push(Object.keys(origArray[i])[0])
//   newArray.push(Object.values(origArray[i])[0]);
// }
// console.log(newArray)

// let result = 0

// result = origArray.reduce((acc,curr) => {
//   let key = 0
//   let value = 0
//   key = Object.keys(curr)[0]
//   value = curr[key];
//   acc.push(`${key}: ${value}`)
//   return acc
// },[])
// console.log(result)

//create a sizable button so if it clicked on once it gets bigger and if it gets cli

// let result = 0;

// result = origArray.reduce((acc, curr) => {
//   Object.entries(curr).map((curr) => {
//     acc.push(`${curr[0]}: ${curr[1]}`);
//   });

//   return acc;
// }, []);
// console.log(result);

//research map and reduce more

// let sportsRanking = {
//   first: "jim",
//   second: "Harry",
//   third: "smith",
//   fourth: "Johnny"
// }

// const entries1 = Object.entries(sportsRanking).map((element) => {
//   return `${element[0]}: adding a sentence here ${element[1]}`
// })

// console.log(entries1)

//write a code using the reduce method that counts the numbers of users in the JSON
//find average salary per month using filter method

// const users1 = [
//   {
//     id: 1,
//     role: "Software Engineer",
//     department: "Engineering",
//     salaryPerMonth: 5000,
//   },
//   {
//     id: 2,
//     role: "Product Manager",
//     department: "Product",
//     salaryPerMonth: 6000,
//   },
//   {
//     id: 3,
//     role: "UX Designer",
//     department: "Design",
//     salaryPerMonth: 4500,
//   },
//   {
//     id: 4,
//     role: "Data Scientist",
//     department: "Data",
//     salaryPerMonth: 5500,
//   },
// ];


// let z = 0;
// let y = 0;

// for(i = 0; i < users1.length; i++){
//   z += (users1[i].salaryPerMonth)
//   y = i
// }
// console.log(z/ (y+1))

// let xyz = 0;
// let result = users1.reduce((acc,curr) => {
//   acc.push(curr.salaryPerMonth);
//   return acc
// },[]).map(element => {
//   xyz += element;
//   return xyz;
// })

// console.log(result[4]/result.length)

// let z = 0;
// let y = 0;
// for(i = 0; i <users1.length; i++){
//   z += result[i]
//   y = i
// }
// let avg1 = z/(y + 1)
// console.log(avg1)


// let salary = []
// let result = users1.filter((element) => {
//   if(element.salaryPerMonth) {salary.push(element.salaryPerMonth)}
//   })
// console.log(salary)



// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // let result = numbers.filter(element => {
// //   return element % 2 !== 0
// // })

// // console.log(result)

// let result = numbers.filter(function(element){
//   return element % 2 !== 0;
// })

// console.log(result)

//merging new modification

//Create a code that add all the factors of a number e.g if arr[0]=2 then arr[2]=[1,2] and the result is 3 while arr[4]=[1,2,4] and the result should be 7

// let emptyArray1 = [];

// let inputNumber = 112;

// function addFactors(number,array){
//     for(i = 0; i <= number; i++){
//       if(number % i == 0) array.push(i)
//     }
//   console.log(array)
// }

// addFactors(inputNumber, emptyArray1)

// Create a function that calculates the sum of all lower numbers found in a simple array.

// let array15 = [1,2,9,4,5,26,6,7,8,10,28];


// let array19 = []

// function sumAllLowestNumbers(array, emptyArray, final) {
//   let lastNumber = array.length - 1;
//   for (i = 0; i <= array.length; i++) {
//     if (array[i] > array[i - 1] && array[i] > array[i + 1])
//       emptyArray.push(array[i]);
//   }
//   if (array[0] > array[lastNumber]) emptyArray.push(array[0]);
//   if (array[lastNumber] > array[0]) emptyArray.push(array[lastNumber]);

//   if (emptyArray.length == 1) 
//   console.log(emptyArray)
//   else {
//     let finalNumber = emptyArray.length - 1;

//     for (j = 0; j <= emptyArray.length; j++) {
//       if (
//         emptyArray[j] > emptyArray[j - 1] &&
//         emptyArray[j] > emptyArray[j + 1]
//       )
//         final.push(emptyArray[j]);
//     }
//     if (emptyArray[0] > emptyArray[finalNumber]) final.push(emptyArray[0]);
//     if (emptyArray[finalNumber] > emptyArray[0])
//       final.push(emptyArray[finalNumber]);
//   }
//   if ((final.length != 1) && (final[0]>final[1])) console.log(final[0])
//   else console.log(final[1])
// }

// sumAllLowestNumbers(array15, array17, array19); 
// let sum15 = 0;

// for(i = 0; i < array15.length; i++){
//   let largestNum = Math.max(...array15)
//   if(array15[i] === largestNum) {}
//   else sum15 = sum15 + array15[i]
// }
// console.log(sum15)




// let inputwt = 'white';

// function printWT(input){
//     let switchW = false;
//     let switchT = false;
//     for(i = 0; i < input.length; i++){
//       if(input[i] == 'w') switchW = true;
//       if(input[i] == 't') switchT = true;
//     }
//     if (switchT && switchW == true) console.log(input)
// }

// printWT(inputwt)

//MI function

// let inputMI = 'mintmintmintmicrophonemom';
// let arrayMI = [];
// let outputMI = '';

// function printMI(input,array,output){
//     for(i = 0; i < input.length; i++){
//       if(input[i] == 'm' && input[i + 1] == 'i'){
//         array.push(i);
//         array.push(i + 1);
//       };
//     }
//     var arrayPosition = 0;
//     for(j = 0; j < input.length; j++){
//       if(j == array[arrayPosition]) arrayPosition += 1
//       else output += input[j]
//       }
//     console.log(output)
//     }

// printMI(inputMI,arrayMI,outputMI)

