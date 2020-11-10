//String, Numbers, boolean, null, undefined

const name1 ='sam';
const number =20;
const rating=8.9;
const thisiscool =true;
const hi =null;
const hii =undefined;
let z;


console.log(typeof name1);                            //string
console.log(typeof number);                           //number
console.log(typeof rating);                           //number no such things decimal in java script
console.log(typeof thisiscool);                       //boolean
console.log(typeof hi);                               //object
console.log(typeof hii);                              //undefined
console.log(typeof z);                                //undefined


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


// string properties and method

const b ='hi tHere';
console.log(b.length);                                //length is a properties
console.log(b.toUpperCase());                         //toUpperCase is a method
                                                      // method is a function which associate  with  object
console.log(b.toLowerCase());
console.log(b.substring(0,4));                        //two index start and end

                                                      // split a string into an arry

const h ='java, css, html, bootstrap';
console.log(h.split(', '));                           //split by , and space separate
                                                      // in this case we can easily insert in to database and search
console.log(h.split(''));                             // '' split by latter



