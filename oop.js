/**======================
 **      oop
 *========================**/

// Object-oriented programming System(OOPs) is a programming paradigm based on the concept of “objects” that contain data and methods. The primary purpose of object-oriented programming is to increase the flexibility and maintainability of programs. Object oriented programming brings together data and its behaviour(methods) in a single location(object) makes it easier to understand how a program works. 


// Object, Classes, Encapsulation, Inheritance


// *** Object ***

// Object– An Object is a unique entity which contains property and methods. For example “car” is a real life Object, which have some characteristics like color, type, model, horsepower and performs certain action like drive. The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string.
//! Note: A Method in javascript is a property of an object whose value is a function.
// Object can be created in two ways in JavaScript:


// Using an Object Literal:

//Defining object 
let person = { 
	first_name:'Mukul', 
	last_name: 'Latiyan', 

	//method 
	getFunction : function(){ 
		return (`The name of the person is 
		${person.first_name} ${person.last_name}`) 
	}, 
	//object within object 
	phone_number : { 
		mobile:'12345', 
		landline:'6789'
	} 
} 
console.log(person.getFunction()); 
console.log(person.phone_number.landline); 

// Output: The name of the person is Mukul Latiyan 6789




// Using an Object Constructor:

//using a constructor 
function person(first_name,last_name){ 
    this.first_name = first_name; 
    this.last_name = last_name; 
    } 
    //creating new instances of person object 
    let person1 = new person('Mukul','Latiyan'); 
    let person2 = new person('sam','d'); 
    
    console.log(person1.first_name); 
    console.log(`${person2.first_name} ${person2.last_name}`); 
    
// Output: Mukul sam d




// Using Object.create() method:     The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. 

// simple object with some properties 
const coder = { 
	isStudying : false, 
	printIntroduction : function(){ 
		console.log(`My name is ${this.name}. Am I 
		studying?: ${this.isStudying}.`) 
	} 
} 
// Object.create() method 
const me = Object.create(coder); 

// "name" is a property set on "me", but not on "coder" 
me.name = 'Mukul'; 

// Inherited properties can be overwritten 
me.isStudying = 'True'; 

me.printIntroduction(); 

// Output: My name is Mukul. Am i studying?: true




// *** Classes ***
// Classes are blueprint of an Object. A class can have many Object, because class is a template while Object are instances of the class

// ES6 classes

// Defining class using es6 
class Vehicle { 
    constructor(name, maker, engine) { 
        this.name = name; 
        this.maker = maker; 
        this.engine = engine; 
    } 
    getDetails(){ 
        return (`The name of the bike is ${this.name}.`) 
    } 
    } 
    // Making object with the help of the constructor 
    let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
    let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 
    
    console.log(bike1.name); // Hayabusa 
    console.log(bike2.maker); // Kawasaki 
    console.log(bike1.getDetails()); 
    
// Output: Hayabusa Kawasaki The name of the bike is hayabusa


// Traditional Way.

// Defining class in a Traditional Way. 
function Vehicle(name,maker,engine){ 
	this.name = name, 
	this.maker = maker, 
	this.engine = engine 
}; 

Vehicle.prototype.getDetails = function(){ 
	console.log('The name of the bike is '+ this.name); 
} 

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc'); 
let bike2 = new Vehicle('Ninja','Kawasaki','998cc'); 

console.log(bike1.name); 
console.log(bike2.maker); 
console.log(bike1.getDetails()); 

// Output: Hayabusa Kawasaki The name of the bike is hayabusa




// *** Encapsulation ***
// The process of wrapping property and function within a single unit is known as encapsulation.


//encapsulation example 
class person{ 
	constructor(name,id){ 
		this.name = name; 
		this.id = id; 
	} 
	add_Address(add){ 
		this.add = add; 
	} 
	getDetails(){ 
		console.log(`Name is ${this.name},Address is: ${this.add}`); 
	} 
} 

let person1 = new person('Mukul',21); 
person1.add_Address('LA'); 
person1.getDetails(); 

// Output:Name is Mukul,Address is LA


//*** Abstraction ***
// means representing essential features hiding the background detail.

// Abstraction example 
function person(fname,lname){ 
	let firstname = fname; 
	let lastname = lname; 

	let getDetails_noaccess = function(){ 
		return (`First name is: ${firstname} Last 
			name is: ${lastname}`); 
	} 

	this.getDetails_access = function(){ 
		return (`First name is: ${firstname}, Last 
			name is: ${lastname}`); 
	} 
} 
let person1 = new person('Mukul','Latiyan'); 
console.log(person1.firstname); 
console.log(person1.getDetails_noaccess); 
console.log(person1.getDetails_access()); 

// Output:undefined undefined first name is: Mukul, last name is:Latiyan


//*** Inheritance ***
// It is a concept in which some property and methods of an Object is being used by another Object.

//Inhertiance example 
class person{ 
	constructor(name){ 
		this.name = name; 
	} 
	//method to return the string 
	toString(){ 
		return (`Name of person: ${this.name}`); 
	} 
} 
class student extends person{ 
	constructor(name,id){ 
		//super keyword to for calling above class constructor 
		super(name); 
		this.id = id; 
	} 
	toString(){ 
		return (`${super.toString()},Student ID: ${this.id}`); 
	} 
} 
let student1 = new student('Mukul',22); 
console.log(student1.toString()); 

// Output:name of person: Mukul,student id:22
//!  Note: The Person and Student object both have same method i.e toString(), this is called as Method Overriding. Method Overriding allows method in a child class to have the same name and method signature as that of a parent class.