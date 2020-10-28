//String, Numbers, boolean, null, undefined

const name1 ='sam';
const number =20;
const rating=8.9;
const thisiscool =true;
const hi =null;
const hii =undefined;
let z;


console.log(typeof name1);      //string
console.log(typeof number);    //number
console.log(typeof rating);    //number no such things decimal in java script
console.log(typeof thisiscool);//boolean
console.log(typeof hi);        //object
console.log(typeof hii);       //undefined
console.log(typeof z);         //undefined


/**================================================================================================
 **                                         String
 *================================================================================================**/

 const name = 'sam';
 const age =28;

//  Concatenation
console.log('my name is ' + name + ' and i am ' +age);//old method
console.log(`my name is ${name} and i am ${age}`);    //new and easy
// or 
const temp =(`my name is ${name} and i am ${age}`);
console.log(temp);




