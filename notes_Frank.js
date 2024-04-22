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


let fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];

let input = 'g'

function find_fruit(x,array){
    array.forEach(element => {
        let y = element[0] 
        if(y != x){
        }
        else console.log(element)

    });
}

find_fruit(input,fruits)

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
        
//         return element === input
//     })
//     console.log(result)
// }

// filter_fruit(input,fruits)