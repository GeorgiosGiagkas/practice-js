// console.log([1,2,3]);
// console.log("hello");
// console.log(true);
// console.log(1);
// console.log({a:1,b:2,c:3});

// console.table({a:1,b:2,c:3});
// console.error("This is an error");
// console.warn("This is a warning!");

// console.time("Hello");

// console.log("HelloWorld!");
// console.log("HelloWorld!");
// console.log("HelloWorld!");
// console.log("HelloWorld!");
// console.log("HelloWorld!");
// console.log("HelloWorld!");

// console.timeEnd("Hello");


// var name ="John  Doe";
// console.log(name);

// name = "Steve Smith";
// console.log(name);

// //not initialize:
// var greeting;
// console.log(greeting);
// greeting="hello";
// console.log(greeting);


//let
// let name ="John  Doe";
// console.log(name);

// name = "Steve Smith";
// console.log(name);

// //const cannot reassign
// const name ="John  Doe";
// console.log(name);

//constant oject literal cannot be reassigned but its content can change
// const person = {
//     firstName : "Akuma",
//     age : 45
// }
// console.log(person);
// person.firstName = "Ryu";
// console.log(person);

// //same with arrays:
// const numbers= [1,2,3,4];

// console.log(numbers);
// numbers.push(5);
// console.log(numbers);



/*
************************************************************
*/
//Primative Data Types:

// //String
// const name ="Akuma";
// console.log(typeof name);
// //Number
// const num = 4;
// console.log(typeof num);
// //null
// const x = null;
// console.log(typeof x);
// //undefined
// let y;
// console.log(typeof y);
// //boolean
// const isTrue = true;
// console.log(typeof isTrue);
// //Symbol
// const sym = Symbol();
// console.log(typeof sym);



// //Reference Data Types:

// //array:
// const myArray = [1,2,3];
// console.log(typeof myArray);
// //Object literals:
// const book = {
//     author1 : "King",
//     author2 : "Neilman",
// }
// console.log(typeof book);

// const today = new Date();

// console.log(typeof today);

// console.log(new Date().getDay());


/*
************************************************************
*/
// //Type conversion

// let val;
// //number to string
// val = String(5);

// //boolean to string
// val = String(true);

// //date to string
// val = String(new Date());

// //array to string
// val = String([1,2,3]);

// //toString();
// val = (5).toString();
// val = (true).toString();


// //String to Number
// val = Number("3");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello");
// val = Number([1,2,3]);

// //parse
// val = parseInt("123");
// val = parseFloat("12.3");



// //output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));//arg: num of decimals

// //Coersion
// let s= 5 +"4";
// console.log(s);
// console.log(typeof s);

// s=parseInt(s);
// console.log(typeof s);



/*
************************************************************
*/

// //Math


// const num1 = 100;
// const num2 = 50;
// let val;

// //simple math
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.8);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-10);
// val = Math.pow(8,2);
// val = Math.min(12,-12,0);
// val = Math.max(12,-12,0);

// val = Math.random();
// val = Math.random() *20 +1;
// val = Math.floor(Math.random()*20+1);


// console.log(val);


/*
************************************************************
*/
// //Strings and Concat

// const firstName = "William";
// const lastName = "Johnson";
// const age = 30;
// const str = "Hello there my name is FF!";

// let val;
// val = firstName + lastName;

// //concat
// val = firstName +" " +lastName;

// //add on
// val = "Brad ";
// val += "Traversy";


// val = "hello my name is "+val +" and i am "+age+"  years old!" ;

// //properties
// val = firstName.length;
// val = firstName.concat(" ",lastName, "!");
// val = firstName.toUpperCase;
// val = firstName.toLowerCase;

// val = firstName[0];
// val= firstName.indexOf("l");
// val = firstName.lastIndexOf("l")
// val = firstName.charAt(0);
// val = firstName.charAt(firstName.length-1);
// val = firstName.substring(0,4);
// val = firstName.slice(-3);

// val = str.split(" ");

// val = str.replace("FF","LL");

// val = str.includes("Hello");


// console.log(val);





/*
************************************************************
*/
// //template strings
// const name = "John";
// const age = 30;
// const job = "Web Developer";
// const city = "Miami";
// let html;
// function hello(){
//     return "Hello";
// }
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>${hello()}</li>
//     </ul>
// `;

// document.body.innerHTML=html;



/*
************************************************************
*/


// //arrays

// const numbers = [12,3,2,123,124,11];
// const numbers2 = new Array(12,3,2,123,124,11);
// const fruits = ["apple","banana","oranges","pear"];
// const mixed = ["hello",1,null, undefined, new Date(),true, {a:1,b:2}];

// let val;

// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[0];
// numbers[0]=-100;
// val = numbers.indexOf(3);

// //mutating arrays
// //add
// numbers.push(999);//end
// numbers.unshift(0);//front
// //remove
// numbers.pop();//end
// numbers.shift();//front

// //splice(start,end);
// numbers.splice(0,2);

// numbers.reverse();

// //concat
//val = numbers.concat(numbers2);

// //sort
// val = fruits.sort();
// val = numbers.sort();//sorts only first value

// //use callback function to compare
// val = numbers.sort(
//     function(x,y){
//         return x-y;
//     }
// );

// //revers sort
// val = numbers.sort(
//     function(x,y){
//         return y-x;
//     }
// );


// //find
// function under50(num){
//     return num<50;
// }

//val = numbers.find(under50);

// val = numbers.find(
//     function(e){
//         return e>50;
//     }
// );

// console.log(numbers);
// console.log(val);

/*
************************************************************
*/

// //object literals

// const person={
//     firstName:"Steve",
//     lastName:"Smith" ,
//     age : 30,
//     email:"steve@oel.com",
//     hobbies:["music","sports"],
//     address:{
//         city:"Miami",
//         state:"FL"
//     },
//     getBirthYear:function(){
//         return 2019-this.age;
//     }

// }

// let val;

// val = person;
// val = person.firstName;
// val = person.address.city;
// val = person.getBirthYear();
// //or
// //val = person["firstName"];


// //array of objects
// const people =[
//     {name:"Akuma",age:40},
//     {name:"Ryu",age:32}
// ];
// const p ={
//     o:people
// };

// for(let i=0;i<people.length;i++){
//     console.log(people[i].name);
// };
// console.log(val);






/*
************************************************************
*/

//Function Declaration

// function greet(firstName="Pedro"){
//     //console.log("Hello");
//     return "Hello".concat(" ",firstName);
// }

// console.log(greet("John"));
// console.log(greet());

//Function Expression

// //can be anonymus 
// const square = function(x=3){
//     return x*x;
// };
// console.log(square());

// //or not anonymus
// const square2 = function mySqFunc(x=3){
//     return x*x;
// }

// console.log(square2);




//immediately invokable function expressions (IIFEs)
//declare and run at the same time!

// (
//     function(x="IIFEs"){
//         console.log(x);
//     }
// )("Pass argument:IIFEs");

// const x =
// (
//     function(y=6){
//         return `x=${y}`;
//     }
// )(7);
// console.log(x);




// //property methods:

// const toDo={
//     add : function(){
//         console.log("Add smth");
//     },
//     edit : function(id){
//         console.log(`Edit ${id}`);
//     }
// }
// //or declare method outside object literal definition (as function expression)
// toDo.delete = function(){
//     console.log("Deleting....");
// }


// toDo.edit("d88hsjka");
// toDo.delete();

/*
************************************************************
*/

// //LOOPS


// //forEach
// const cars = ["Ford","Chevy","Honda","Toyota"];

// //takes anonymus callback function. Function can take 3 arguments but we generaly need one argument which is the current iteration
// cars.forEach(function(car){
//     console.log(car);
// });

// cars.forEach(function(car,index,array){
//     console.log(`${index}:${car}`);
//     console.log(array);
// });



// //MAP
// const users =[
//     {id:1,name:"John"},
//     {id:2,name:"Sara"},
//     {id:3,name:"Karen"}
// ];

// const ids = users.map(
//     function(user){
//         return user.id;
//     }
// );
// console.log(ids);

// //for in
// const user ={
//     name:"Akuma",
//     age:30,
//     immortal:true
// };

// for(let i in user){
//     console.log(`${i}:${user[i]}`);
// }


