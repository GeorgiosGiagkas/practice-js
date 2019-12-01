// //Object literals
// const person={
//     name:"Akuma",
//     age:10
// }



// //Person constructor

// function Person(name, dateOfBirth){
//     this.name = name;
//     this.dateOfBirth = new Date(dateOfBirth);

//     //function inside a constructor. Propertty that stores a function
//     this.calculateAge = function(){
//         const diff = Date.now() - this.dateOfBirth.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear()-1970);
//     }
//     console.log(this);
// }

// const kira = new Person("kira", "10-10-1900");
// console.log(kira.calculateAge());

// //this in global scope -> Window Object
// console.log(this);



// //WHAT THE F** . Create function using the new keyword????
// //WHY????
// const getSum = new Function("x","y", "return x+y");
// console.log(getSum(2,2));

// //new object

// const human = new Object({
//     name:"Ryu"
// });

// console.log(human);

// //regular expression, 
// const regEx1 = /\w+/;
// const regEx2 = new RegExp('\\w+');




/*===========================================*/

// //All object literals inherit from object Object.prototype

// //Objects created through constructore inherit from CunstroctoreName.prototype ex. Person.prototype
// //Prototype chain => You can go from Person.prototype to Object.prototype

// //Functions are common for all Objects of the same type Person. So put them in the Person.prototype
// //ex

// function Person(firstName,lastName){
//     this.firstName= firstName;
//     this.lastName=lastName;
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// const ken = new Person("Ken", "Hakooooken");
// console.log(ken.getFullName());

// //object.prototype function
// console.log(ken.hasOwnProperty("firstName"));
// console.log(ken.hasOwnProperty("getFullName"));




/*===========================================*/

// //inheritance

// function Person(firstName,lastName){
//     this.firstName= firstName;
//     this.lastName=lastName;
// }

// Person.prototype.greetings = function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
// }


// //Customer inherits properties from Person
// function Customer(firstName, lastName, membership){
//     Person.call(this, firstName,lastName);
//     this.membership= membership;
// }

// //but to inherit methods from Person prototype must:
// Customer.prototype = Object.create(Person.prototype);
// //and make customer.prototype return Customer()
// Customer.prototype.constructor= Customer();

// //override method
// Customer.prototype.greetings = function(){
//     return `Hello ${this.firstName} ${this.lastName}, our new customer!`;
// }


/*===========================================*/

// //create object

// const personPrototypes= {
//     greeting:function(){
//         return `Hello ${this.name}`;
//     }
// }

// const ryu = Object.create(personPrototypes);
// ryu.name="Ryu";

// console.log(ryu.greeting());


/*===========================================*/

//ES 6 Classses

class Person {
    
    constructor(name){
        this.name=name;  
    }
    //method
    greeting(){
        return `Hello ${this.name}`;
    }


    static fu(){
        return `fu`;
    }
}



person = new Person("akuma");

console.log(person.greeting());

console.log(Person.fu());

//sub-class

class Customer extends Person{
    constructor(firstName,lastName, membership){
        super(firstName,lastName);
        this.membership=membership;
    }
}

customer = new Customer("Rose","Rosalia","Goldern");

console.log(customer.greeting());
console.log(Customer.fu());

