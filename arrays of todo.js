/**======================
 *?    Arrays of object
 *========================**/

// todo

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

console.log(todo[1].text);                          // we know that this is 2nd value of an array,so [1]index and properties


/**======================
 *?    Converted to json file
 *========================**/


 const todoJSON = JSON.stringify(todo);             // create a variable todoJSON
                                                    //  call a method called ' .stringify ' to convert todo to a json format
                                                    // then we can send json file to serer,api fetch etc.