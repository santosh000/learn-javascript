/**============================================
 *               for loop
 *=============================================**/

// basically we passing 3 parameter 

// 1st assign the variable " let i = 0 "

// 2nd the condition " i < 5 "

// 3rd is the increment to meet the condition

 for(let i = 0; i < 5; i++){

    console.log(i);               //out put 1,2,3,4

 }


//! difference between for/while loop - we declare variable outside the loop


 /**============================================
 *               while loop
 *=============================================**/

let z = 0;

while(z <=5) {

    console.log(`while: ${z}`);
    z++;                        // make sure we increment the loop if not then it will never met the condition (infinity loop) 
    
}


/**============================================
 **               for loop in array
 *=============================================**/


const todo = [
    {
        id: 1,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 2,
        text: 'do that',
        isCompleted: true
    },
    {
        id: 3,
        text: 'study',
        isCompleted: false
    },
];


for( let task of todo) {    // ' task '  call it anything

                            //  ' todo ' name of the array

    console.log(task.text);
}


/**============================================
 **               high order array method
 *=============================================**/

// forEach, map, filter

// forEach - loop through
// map - allow us to create new array in an array
// filter - create a new array based on a condition


// forEach


todo.forEach(function(task) {

    console.log(task.text);
    
});                              // in high order array method they take in as a parameter of function 

                                 // and the call back function () can take multiple parameter that the variable we are gonna use as each item 'todos'



// map


const todoText = todo.map(function(task) {

    return task.text;

});                              //in map it return an array 

                                 // for an example- loop through and return just the text value

console.log(todoText);           // return only arry no object



// filter


const todoCompleted = todo.filter(function(task) {

    return task.isCompleted === true;

});                              // lets say we only wanna return the todo that are completed 'true'

console.log(todoCompleted);


// we can chain on (join) other method (loop)



const todoCompleted2 = todo.filter(function(task) {

    return task.isCompleted === true;

}).map(function(text_true){      //passing a function 'text_true'
    return text_true.text;   
});

console.log(todoCompleted2);      // output all true condition return with value 'text'
