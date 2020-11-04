/**============================================
 *                function
 *=============================================**/


//  it's a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).


function addNums(num1, num2){          // inside the parenthesis we can put parameters

    return num1 + num2;

}

console.log(addNums(5, 5));


function addNums(num1 = 4, num2 = 5){                                   // we can assign value to the num

    return num1 + num2;

}

console.log(addNums());                                                 //if we pass the value of num here it will override




/**============================================
 *                arrow function
 *=============================================**/


//  Arrow functions were introduced in ES6.Arrow functions allow us to write shorter function 


//! Before

function addNums2(num1, num2){          
    return num1 + num2;

}

console.log(addNums2(5, 20));


//! After using arrow function

const addNums3 = (num1 = 100, num2 = 10) =>{  

    console.log(num1 + num2);

}

addNums3();



const addNums4 = (num1 = 100, num2 = 100) => console.log(num1 + num2);  //This works only if the function has only one statement (one expression).

addNums4();



const addNums5 = num1 => num1 + 5;  //This works only if we have only one parameter.

console.log(addNums5(1));



const addNums6 = (num1 = 100, num2 = 50) => (num1 + num2);              // if we wanna return something we don't even need to use return keyword

console.log(addNums6());