/**============================================
 **               Arrays
 *=============================================**/

//  this is bestially variables that hold multiple values

//old style

const number = new Array(1,2,3,4,5);
console.log(number);

//new style

const hi = [1,2,'hi',4,'you',true];
console.log(hi);   //you can set multiple datatype in array in java script

//access specific data in an array

console.log(hi[2]);        //output is 'hi'

// add data to an array

                           //when we know the length of an array
hi[6] = 'new';             //adding new value at the end

                           //when we don't know the length of an array use 'push method
hi.push('new new');        //adding new value at the end

hi.unshift(10);            //adding new value at the beginning

                           // pop();  erase the last array value
                           //console.log(Array.is Array(hi)); output -'true check if something is in array or note

console.log(hi.indexOf(1));// index 1