/**============================================
 *                function
 *=============================================**/


//  it's a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).


function addNums(num1, num2){          // inside the parenthesis we can put parameters

    return num1 + num2;

}

console.log(addNums(5, 5));


function addNums(num1 = 4, num2 = 5){  // we can assign value to the num

    return num1 + num2;

}

console.log(addNums());                //if we pass the value of num here it will override