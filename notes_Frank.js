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

// let array20 = [1, 20, 35, 34, 32, 2];

// let result = array20.sort((a,b) => a - b)
// console.log(result[0],result[1])

//Create a function that displays the fifth largest and forth smallest number in an array.

// let array21 = [1,2,3,4,5,27,7,8,9];

// let result = array21.sort((a,b) => a - b)

// console.log(result[result.length - 5],result[3])

//The sum of three numbers is two times their remainder, create a code that solves this problem

// function findSol(){
//   for(i = 1; i <= 100; i++){
//     for(a = 1; a <= 100; a++){
//       for(b = 1; b <= 100; b++){
//         let sumofi = i + a + b;
//         for(j = 0; j <= 100; j++){
//           if((sumofi % j) * 2 == sumofi){
//             console.log(i,a,b,j)
//           }
//         }
//       }
//     }
//   }
// }

// findSol() works

// function myEquation(num1, num2, num3, divisor) {
//   let sum = num1 + num2 + num3;
//   let remainder = sum % divisor;
//   if (sum === 2 * remainder) { return true; }
//   else { return false; }
// } works

// console.log(myEquation(5,8,11,6)) does not work

//roman numeral converter 1-50

// let romanArray = [25, 3, 44];

// function convertRoman(array){
//   let x = array[0];
//   let y = array[1];
//   let z = array[2];

//   let arrayLatin = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
//     41, 42, 43, 44, 45, 46, 47, 48, 49, 50,];
//   let arrayRoman = [
//     "I",
//     "II",
//     "III",
//     "IV",
//     "V",
//     "VI",
//     "VII",
//     "VIII",
//     "IX",
//     "X",
//     "XI",
//     "XII",
//     "XIII",
//     "XIV",
//     "XV",
//     "XVI",
//     "XVII",
//     "XVIII",
//     "XIX",
//     "XX",
//     "XXI",
//     "XXII",
//     "XXIII",
//     "XXIV",
//     "XXV",
//     "XXVI",
//     "XXVII",
//     "XXVIII",
//     "XXIX",
//     "XXX",
//     "XXXI",
//     "XXXII",
//     "XXXIII",
//     "XXXIV",
//     "XXXV",
//     "XXXVI",
//     "XXXVII",
//     "XXXVIII",
//     "XXXIX",
//     "XL",
//     "XLI",
//     "XLII",
//     "XLIII",
//     "XLIV",
//     "XLV",
//     "XLVI",
//     "XLVII",
//     "XLVIII",
//     "XLIX",
//     "L",
//   ];
//   for(i = 0; i < arrayLatin.length; i++){
//     if(x == arrayLatin[i]) console.log(arrayRoman[i]);
//     if(y == arrayLatin[i]) console.log(arrayRoman[i]);
//     if(z == arrayLatin[i]) console.log(arrayRoman[i]);
//   }
// }

// convertRoman(romanArray)

//by next week fetch api and json, warming up toward tensorflow and a bit of advanced js before ts in full

// //replace all duplicate

// let toBeReplaced = 'dog';

// let replacer = 'cat';

// let sentence = 'my dog is bigger than your dog';

// function replaceAll2(x,y,z){

//   let lengX = x.length;
//   let lengY = y.length;
//   let lengZ = z.length;

//   let array1 = []
//   let array2 = []

//   for(i = 0; i < lengZ; i++){
//     for(j = 1; j < lengX; j++){
//       console.log()
//       if (x[i] == z[i] && x[i + 1] == z[i + 1] && x[i + 2] == z[i + 2]){
//         console.log('1')
//       }

//     }
//   }

// }

// replaceAll2(toBeReplaced,replacer,sentence)
// let x = 'x'
// let i = 'i'
// let ifForm = null;
// for(j = 0; j < 2; j++){
//   ifForm += `&& ${ x[i + j]}`
// }
// console.log(ifForm)

// fForm += ` && ${x[Number(i) + Number(j)]} == ${z[Number(i) + Number(j)]} `;

//almost working

// let inputMI = 'my doger is bigger than your doger';
// let arrayMI = [];
// let outputMI = '';

// let toBeReplacedMI = 'dogr'
// let replacerMI = 'gatr'

// let ifStatei = ` input[i + h] == x[h] `;
// let ififif = '';
// let ifcounter = 0;

// function printMI(input,array,output,x,y){
//   for (h = 1; h <= x.length; h++) {
//     if (ifcounter != 0) ififif += " && ";
//     ififif += ifStatei;
//     ifcounter += 1;
//   }
//   for(i = 0; i < input.length; i++){
//       if(input[i] == x[0] && ifStatei){
//         let q1 = ''
//         for(q = 0; q < x.length; q++)
//         q1 += ` ${(i + q)} `;
//       };
//   array.push(i,q1);
//     }
//     var arrayPosition = 0;
//     let replacerPosition = 0
//     for(j = 0; j < input.length; j++){
//       if (replacerPosition == y.length) replacerPosition = 0;
//       if(j == array[arrayPosition]){
//         arrayPosition += 1;
//         output += y[replacerPosition];
//         replacerPosition += 1;
//       }
//       else output += input[j]
//       }
//     console.log(output)
//     console.log(array)
//     }

// printMI(inputMI,arrayMI,outputMI, toBeReplacedMI, replacerMI)

//working version

// let inputMI = "Tom is older than Pat";
// let arrayMI = [];
// let outputMI = "";

// let toBeReplacedMI = "Tom";
// let replacerMI = "Pat";

// function printMI(input, array, output, x, y) {
//   for (i = 0; i < input.length; i++) {
//     if (input[i] == x[0] && input[i + 1] == x[1] && input[i + 2] == x[2]) {
//       array.push(i);
//       array.push(i + 1);
//       array.push(i + 2);
//     }
//   }
//   var arrayPosition = 0;
//   let replacerPosition = 0;
//   for (j = 0; j < input.length; j++) {
//     if (replacerPosition == y.length) replacerPosition = 0;
//     if (j == array[arrayPosition]) {
//       arrayPosition += 1;
//       output += y[replacerPosition];
//       replacerPosition += 1;
//     } else output += input[j];
//   }
//   console.log(output);
// }

// printMI(inputMI, arrayMI, outputMI, toBeReplacedMI, replacerMI);

//frank's elegant solution -- substring

// function replaceAll(str, search, replacement) {
//   let result = "";

//   // Loop through the string using a for loop
//   for (let i = 0; i < str.length; ) {
//     // Check if the substring at the current position matches the search string
//     if (str.substring(i, i + search.length) === search) {
//       // If it matches, append the replacement string to the result
//       result += replacement;
//       // Move the index forward by the length of the search string
//       i += search.length;
//     } else {
//       // If it doesn't match, append the current character to the result
//       result += str[i];
//       // Move the index forward by 1
//       i++;
//     }
//   }

//   return result;
// }
// let originalString = "Hello world cat! Hello cat everyone!";
// let searchString = "cat";
// let replacementString = "dog";

// let newString = replaceAll(originalString, searchString, replacementString);
// console.log(newString);

// let newstring = "hello world, how are you"

// console.log(newstring.substring(6))

//how many floors in the building

// let buildingHeight = 20;
// let heightPerFloor = 5;

// function solveFloorsInBuilding(x,y){
//   let result = 0;

//   result = x / y;

//   console.log(`The building is ${result} stories high.`)
// }

// solveFloorsInBuilding(buildingHeight,heightPerFloor)

// let nairaDollar = 0.00065;
// let yenDollar = 0.0062;
// let rubleDollar = 0.012;
// let yuanDollar = 0.14;
// let euroDollar = 1.07;

// let currencyArray = [0.00065, 0.0062, 0.012, 0.14, 1.07];
// let nameArray = ['Naira','Yen','Ruble','Yuan','Euro']

// let dollar = 1;
// let numofdollars = 0;

// function convertCurrency(x,name){
//     let result = 0;
//     for(i = 0; i < currencyArray.length; i++){
//       if(name == nameArray[i]) result = x * currencyArray[i]
//     }
//     console.log(`25 ${name} is $${result} in usd`)
// }
// convertCurrency(25,'Yen')

// let array22 = [1,2,3,4,5,6,7,5,5,5,5,58,9,10];
// let array23 = [];
// let array24 = [];

// function splice2(w,y,location,z){
//   for(i = 0; i < w.length; i++){
//     if(w[i] == location){
//       for(j = 0; j < i; j++){
//         y.push(w[j])
//       }
//       for (d = 1; d < location; d++) {
//         z.push(w[d - 1]);
//       }
//       for (h = location + 1; h <= w.length; h++) {
//         z.push(w[h - 1]);
//       }
//     }
//   }
//   console.log(z)
// }
// splice2(array22,array23,3,array24)

// let array22 = [1,2,3,4,5,6,7,5,5,5,5,5,5,5,58,9,10];
// let array23 = [];
// let array24 = [];

// function splice2(w,y,location,z){
//   for(i = 0; i < w.length; i++){
//     if(w[i] == w[location]){
//       for(j = 0; j < i; j++){
//         y.push(w[j])
//       }
//        for (h = w[location]; h <= w.length; h++) {
//         z.push(w[h - 1]);
//       }
//       break;
//     }
//   }
//   console.log(z)
// }
// splice2(array22,array23,5,array24)

//splicing with a string isntead of array

// let string22 = '123456789'
// let string23 = '';
// let string24 = '';

// function splice2(w, y, location, z) {
//   for (i = 0; i < w.length; i++) {
//     if (w[i] == w[location]) {
//       for (j = 0; j < i; j++) {
//         y += (w[j]);
//       }
//       for (h = w[location]; h <= w.length; h++) {
//         z += (w[h - 1]);
//       }
//       break;
//     }
//   }
//   console.log(z);
// }
// splice2(string22, string23, 7, string24);

// let alphabetLower = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let alphabetUpper = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];

// // let counter = 0;

// // function countCamel(x){
// //   for(i = 0; i < x.length; i++){
// //     for(j = 0; j < alphabetLower.length; j++){
// //       if(x[i] == alphabetUpper[j]) counter += 1;
// //     }
// //   }
// //   console.log(counter)
// // }

// // countCamel('dfsad;fjal;jDDDDj;alskjeiJ dlkjKKfjf')

// //tensor flow json

// //asyncronous js

// //Parsing camelcase

// let input3 = "fork";

// function printonlycamel(x,y,z){
//     let printswitch = false;
//     for(i = 0; i < x.length; i++){
//         if(i != 0) {
//             for(j = 0; j < y.length; j++){
//                 if(x[i] == y[j]){
//                     for(k = 0; k < z.length; k++){
//                         if(x[i - 1] == z[k]){
//                             printswitch = true;
//                             break;
//                         }
//                     }
//                 }
//             }
//             for(a = 0; a < z.length; a++){
//                 if(x[i] == z[a]){
//                     for(b = 0; b < z.length; b++){
//                         if(x[i - 1] == y[b]){
//                             printswitch = true;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     if(printswitch == true) console.log(x)
// }

// printonlycamel(input3,alphabetLower,alphabetUpper)

// let array25 = [1,2,3,4,5,6,7];
// let array26 = [3,4,5,6,7,8,9];
// let array27 = [];

// function onlyonearray(array1,array2,array3){
//     array1.forEach((element) => {
//         if(array2.includes(element));
//         else array3.push(element);
//     });
//    array2.forEach((element) => {
//         if(array1.includes(element));
//         else array3.push(element);
//    });
//     console.log(array3)
// }

// onlyonearray(array25,array26,array27)

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 25 },
//   { id: 4, name: "David", age: 30 },
//   { id: 5, name: "Eve", age: 35 },
// ];

// function groupByAge(array) {
//   let outputArray = [];
//   array.forEach((element) => {
//     if (outputArray.includes(element.age)) {
//       let index = outputArray.indexOf(element.age);
//       outputArray.splice(index + 1, 0, element.name);
//       index = 0;
//     } else outputArray.push(element.age, element.name);
//   });
//   console.log(outputArray);
// }

// groupByAge(users);

// ?? you need to use .key and stuff for objects

// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 25 },
//   { id: 4, name: "David", age: 30 },
//   { id: 5, name: "Eve", age: 35 },
// ];

// function groupByAge(array) {
//   let outputObject = {};
//   let outputArray = [];
//   let indexArray = [];
//   array.forEach((element) => {
//     if (outputArray.includes(element.age));
//     else outputArray.push(element.age);
//   });
//   array.forEach((x) => {
//     let index = outputArray.indexOf(x.age);
//     indexArray.push(x.age);
//   });
//   indexArray.map((element2) => {
//     outputObject[element2] = array.name;
//   });

//   //     if (x.age == outputArray[index])
//   //       outputArray.map((element2) => {
//   //         outputObject[element2] = x.name;
//   //         console.log(x.name);
//   //       });
//   //   });

//   console.log(outputObject);
// }

// groupByAge(users);

// outputArray.map((element2) => {
//   if (x.age === outputArray[index]) outputObject[element2] = x.name;

// let result222 = [25, 30, 35];
// let object333 = {};

// result222.map((element) => {
//   object333[element] = "then";
// });

// console.log(object333);

// function groupByAge(users) {
//   let outputObject = {};
//   let outputArray = [];
//   let indexArray = [];
//   array.forEach((element) => {
//     if (outputArray.includes(element.age));
//     else outputArray.push(element.age);
//   });
//   outputArray.forEach((element2) => {});

//   console.log(outputObject, outputArray);
// }

// groupByAge(users);

// function groupByAge2(users) {
//   return users.reduce((acc, users) => {
//     const age = users.age;
//     if (!acc[age]) acc[age] = { names: [], count: 0 };
//     acc[age].names.push(users.name);
//     acc[age].count++;
//     return acc;
//   }, {});
// }
// console.log(groupByAge2(users));

// function solution(users) {
//   const result = {};

//   users.forEach((user) => {
//     const age = user.age;
//     if (!result[age]) {
//       result[age] = { names: [], count: 0 };
//     }
//     result[age].names.push(user.name);
//     result[age].count++;
//   });

//   return result;
// }

// console.log(solution(users));

// let alphabetLower = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

let alphabetUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// theWord = "BananaAAA";

// function startsEndsWithUpper(x, y) {
//   let finalLetter = x.length - 1;
//   let breaker1 = false;
//   let breaker2 = false;
//   for (i = 0; i < y.length; i++) {
//     if (x[0] !== y[i]) {
//     } else {
//       breaker1 = true;
//     }
//   }
//   for (j = 0; j < y.length; j++) {
//     if (x[finalLetter] !== y[j]) {
//     } else {
//       breaker2 = true;
//     }
//   }
//   if (breaker1 == true && breaker2 == true) console.log(x);
//   else console.log("the word does not begin and end witha capital");
// }

// startsEndsWithUpper(theWord, alphabetUpper);

// smarter better solution
// const voidTypeFunction=(word)=>{
//     if(word[0]===word[0].toUpperCase() && word[word.length-1]===word[word.length-1].toUpperCase()) console.log("pass")
//     else console.log("reject")
//     }

//     voidTypeFunction("HellO")

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = true;
//     if (success) resolve("operation was successful");
//     else reject("operation failed");
//   }, 2000);
// });

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("fetched data successful");
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data.toUpperCase());
//     }, 1000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//     return processData(data);
//   })
//   .then((processData) => {
//     console.log(processData);
//   })
//   .catch((error) => {
//     console.error("error: ", error);
//   });

// let vowels = ["a", "e", "i", "o", "u"];

// let piglatinWord = "braragraphs";

// function piglatinate(word, y) {
//   let prefix = "";
//   let wordlength = word.length;
//   let newWord = "";
//   for (i = 0; i < y.length; i++) {
//     if (word[0] != y[i]) {
//       prefix += word[0];
//       for (j = 0; j < y.length; j++) {
//         if (word[1] != y[i]) {
//           prefix += word[1];
//           break;
//         } else break;
//       }
//       newWord += word[1] - [wordlength];
//       break;
//     } else break;
//   }
//   if (prefix == "") {
//     console.log(`${word} + "way"`);
//   }
//   if (prefix.length == 1) console.log(`${word.substring(1) + prefix + "ay"}`);
//   else console.log(`${word.substring(2) + prefix + "ay"}`);
// }

// piglatinate(piglatinWord, vowels);

// let binaryAgent =
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111";

// function printBinaryText(x) {
//   var toPrint = "";
//   var currentPrint = "";
//   for (i = 0; i < x.length; i++) {
//     if (x[i] != " ") {
//       toPrint += x[i];
//     } else {
//       currentPrint += String.fromCharCode(parseInt(toPrint, 2));
//       toPrint = "";
//     }
//   }
//   console.log(currentPrint);
// }

// printBinaryText(binaryAgent);

//Flatten a nested array. You must account for varying levels of nesting.Waiting: steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"]
// const array28 = [0, 1, [2, [3, [4, 5]]]];
// console.log(array28.flat(Infinity));

// let DNA_Array = "CGATTA";

// function DNASOLVER(dna) {
//   let new_array = [];
//   let couplet = [];
//   for (i = 0; i < dna.length; i++) {
//     couplet.push(dna[i]);
//     if (i % 2 != 0) {
//       new_array.push(couplet);
//       couplet = [];
//     }
//   }
//   console.log(new_array);
// }

// DNASOLVER(DNA_Array);

// let randlet = alphabetUpper[Math.floor(Math.random() * 26)];

// console.log(randlet);

// function studentgrade(grade) {
//   return grade <= 39
//     ? "F"
//     : grade <= 49
//     ? "D"
//     : grade <= 59
//     ? "C"
//     : grade <= 69
//     ? "B"
//     : "A";
// }

// console.log(studentgrade(55));

// let number1 = 2;
// let array29 = [1, 3, 5, 7, 8, 2, 10];
// let emptyArray2 = [];

// function findDiff(number, array) {
//   array.sort((a, b) => a - b);
//   console.log(array);
//   for (i = 0; i <= array.length; i++) {
//     if (array[i + 1] - array[i] == number) {
//       emptyArray2.push(array[i], array[i + 1]);
//     }
//   }
//   console.log(emptyArray2);
// }

// findDiff(number1, array29);

// let financeArray1 = [{ frank: 50 }, { bob: 20 }, { dada: 200 }];

// let total1 = 400;

// function calculatePercentages(array, total) {
//   for (i = 0; i < array.length; i++) {
//     let salary1 = Object.values(array[i]);
//     array[i].average = (salary1 / total) * 100;
//   }
//   console.log(array);
// }

// calculatePercentages(financeArray1, total1);

// const shareholders = [
//   { name: "frank", shares: 50 },
//   { name: "bob", shares: 20 },
//   { name: "dada", shares: 200 },
// ];

// const totalShares = 400;
// shareholders.forEach((shareholder) => {
//   shareholder.percentage = (shareholder.shares / totalShares) * 100;
// });

// console.log(shareholders);

//Object class = Object.values

// const bill1 = {
//   bills: [
//     {
//       congress: 117,
//       latestAction: {
//         actionDate: "2022-04-06",
//         text: "Became Public Law No: 117-108.",
//       },
//       number: "3076",
//       originChamber: "House",
//       originChamberCode: "H",
//       title: "Postal Service Reform Act of 2022",
//       type: "HR",
//       updateDate: "2022-09-29",
//       updateDateIncludingText: "2022-09-29T03:27:05Z",
//       url: "https://api.congress.gov/v3/bill/117/hr/3076?format=json",
//     },
//     {
//       congress: 117,
//       latestAction: {
//         actionDate: "2022-04-06",
//         text: "Read twice. Placed on Senate Legislative Calendar under General Orders. Calendar No. 343.",
//       },
//       number: "3599",
//       originChamber: "House",
//       originChamberCode: "H",
//       title: "Federal Rotational Cyber Workforce Program Act of 2021",
//       type: "HR",
//       updateDate: "2022-09-29",
//       updateDateIncludingText: "2022-09-29T03:41:50Z",
//       url: "https://api.congress.gov/v3/bill/117/hr/3599?format=json",
//     },
//   ],
// };

// console.log(bill1.bills[1].latestAction.text);

//Object values, keys, entries

//congress api key NHdJjzbcGyGWRWiqihZ5SH6FZdChkW2fMVOBh5lT

//fetching a congress bill from the api

// async function fetchData() {
//   try {
//     const response = await fetch(
//       "https://api.congress.gov/v3/bill?api_key=NHdJjzbcGyGWRWiqihZ5SH6FZdChkW2fMVOBh5lT&limit=2&format=json"
//     );
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data.bills[0]);
//     } else {
//       console.error(
//         "Failed to fetch data:",
//         response.status,
//         response.statusText
//       );
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// // Call the function
// fetchData();

//objects with json

// const people = [
//   { name: "Alice", age: 25, pets: ["dog", "cat"] },
//   { name: "Bob", age: 30, pets: ["snake"] },
//   { name: "Charlie", age: 35, pets: ["dog"] },
//   { name: "Diana", age: 28, pets: ["cat"] },
//   { name: "Eve", age: 22, pets: ["dog", "snake"] },
//   { name: "Frank", age: 40, pets: ["cat", "dog"] },
//   { name: "Grace", age: 27, pets: [] },
// ];

// function mypetcount() {
//   const petcount = {
//     dogs: 0,
//     cats: 0,
//     snakes: 0,
//   };

//   people.forEach((person) => {
//     if (person.pets.includes("dog")) petcount.dogs++;
//     if (person.pets.includes("cat")) petcount.cats++;
//     if (person.pets.includes("snake")) petcount.snakes++;
//   });
//   return petcount;
// }
// const result = mypetcount(people);
// console.log(result);

let objectArray1 = [
  {
    name: "Alice",
    age: 25,
    occupation: "Software Developer",
    address: "123 Maple Street, Springfield, IL",
    homeOwnership: "Homeowner",
    pets: [
      {
        type: "dog",
        breed: "Labrador Retriever",
        age: 5,
        health: "Healthy",
        lastVetVisit: "2024-05-10",
      },
      {
        type: "cat",
        breed: "Siamese",
        age: 3,
        health: "Healthy",
        lastVetVisit: "2024-07-20",
      },
    ],
  },
  {
    name: "Bob",
    age: 30,
    occupation: "Teacher",
    address: "456 Oak Avenue, Metropolis, NY",
    homeOwnership: "Renter",
    pets: [
      {
        type: "snake",
        breed: "Corn Snake",
        age: 2,
        health: "Healthy",
        lastVetVisit: "2024-06-15",
      },
    ],
  },
  {
    name: "Charlie",
    age: 35,
    occupation: "Engineer",
    address: "789 Pine Road, Gotham, NJ",
    homeOwnership: "Homeowner",
    pets: [
      {
        type: "dog",
        breed: "German Shepherd",
        age: 4,
        health: "Healthy",
        lastVetVisit: "2024-04-18",
      },
    ],
  },
  {
    name: "Diana",
    age: 28,
    occupation: "Nurse",
    address: "101 Birch Lane, Star City, CA",
    homeOwnership: "Renter",
    pets: [
      {
        type: "cat",
        breed: "Persian",
        age: 2,
        health: "Healthy",
        lastVetVisit: "2024-08-12",
      },
    ],
  },
  {
    name: "Eve",
    age: 22,
    occupation: "Student",
    address: "234 Willow Drive, Central City, KS",
    homeOwnership: "Renter",
    pets: [
      {
        type: "dog",
        breed: "Beagle",
        age: 3,
        health: "Healthy",
        lastVetVisit: "2024-09-01",
      },
      {
        type: "snake",
        breed: "Ball Python",
        age: 1,
        health: "Healthy",
        lastVetVisit: "2024-07-25",
      },
    ],
  },
  {
    name: "Frank",
    age: 40,
    occupation: "Architect",
    address: "567 Cedar Boulevard, Coast City, FL",
    homeOwnership: "Homeowner",
    pets: [
      {
        type: "cat",
        breed: "Bengal",
        age: 6,
        health: "Healthy",
        lastVetVisit: "2024-03-10",
      },
      {
        type: "snake",
        breed: "King Snake",
        age: 4,
        health: "Healthy",
        lastVetVisit: "2024-06-22",
      },
    ],
  },
  {
    name: "Grace",
    age: 27,
    occupation: "Freelance Writer",
    address: "890 Spruce Circle, Keystone City, CO",
    homeOwnership: "Renter",
    pets: [],
  },
];

// let inputOA1 = "Eve";
// let newOccupation = "Engineer";
// let newAddress = "100 Willow Drive, Kansas City, MO";

// function updateOccupation(array, input, occupation1, address1) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i].name == input) {
//       array[i].occupation = occupation1;
//       array[i].address = address1;
//       console.log(array[i]);
//     }
//   }
// }

// updateOccupation(objectArray1, inputOA1, newOccupation, newAddress);

// let inputOA1 = "Grace";
// let newMaritalStatus = "unmarried";

// function updateOccupation(array, input, maritalStatus1) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i].name == input) {
//       if (array[i].maritalStatus == null) {
//         array[i].maritalStatus = maritalStatus1;
//         console.log(array[i]);
//       }
//     }
//   }
// }

// updateOccupation(objectArray1, inputOA1, newMaritalStatus);

// function updateOccupation(array) {
//   for (i = 0; i < array.length; i++) {
//     array[i].maritalStatus = "";
//     console.log(array[i]);
//   }
// }

// updateOccupation(objectArray1);

// let array20s = [];
// let array30s = [];
// let array40s = [];

// function sortByAge(array, age1, age2, age3) {
//   for (i = 0; i < objectArray1.length; i++) {
//     if (array[i].age < 30) {
//       age1.push(array[i]);
//     }
//     if (array[i].age > 29 && array[i].age < 40) {
//       age2.push(array[i]);
//     }
//     if (array[i].age > 39 && array[i].age < 50) {
//       age3.push(array[i]);
//     }
//   }
//   console.log(age1, age2, age3);
// }
// sortByAge(objectArray1, array20s, array30s, array40s);

// function groupByAge(data) {
//   const ageGroup18To30 = [];
//   const ageGroup31To70 = [];

//   data.forEach((person) => {
//     if (person.age >= 18 && person.age <= 30) {
//       ageGroup18To30.push(person);
//     } else if (person.age >= 31 && person.age <= 70) {
//       ageGroup31To70.push(person);
//     }
//   });

//   return { ageGroup18To30, ageGroup31To70 };
// }

// console.log(groupByAge(objectArray1));

// function petchecker(data) {
//   data.forEach((person) => {
//     if (person.pets == "") {
//       let randomNumber = Math.floor(Math.random() * 3);
//       person.pets = [];
//       let newObject2 = {};
//       if (randomNumber == 0) newObject2.type = "Rabbit";
//       if (randomNumber == 1) newObject2.type = "Snake";
//       if (randomNumber == 2) newObject2.type = "Dog";
//       newObject2.breed = "Unknown";
//       newObject2.age = 5;
//       newObject2.health = "Healthy";
//       newObject2.lastVetVisit = "Unknown";
//       person.pets.push(newObject2);
//     }
//   });
//   return data;
// }

// petchecker(objectArray1);

// function countpets(data) {
//   data.forEach((person) => {
//     person.numberOfPets = person.pets.length;
//   });
//   return data;
// }

// console.log(countpets(objectArray1));

function correctCountPetsforFrank(data) {
  let newObject3 = {};
  data.forEach((person) => {
    let nameofPerson = "";
    nameofPerson = person.name;
    newObject3[nameofPerson] = person.pets.length;
  });
  return newObject3;
}

console.log(correctCountPetsforFrank(objectArray1));
