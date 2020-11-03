/**============================================
 **               conditional
 *=============================================**/


// if else

const x = 10;
const y = '10';
const z = '10';

if(x == 10){                     // ' == matches the value not datatype '

    console.log('x is 10');      // output is ' x is 10 '

} else {
    console.log('x is not 10');
}


if(z == 10){                   

    console.log('z is 10');      // output is ' z is 10 ' because == 10 is still equal to z value z = '10' in term of == (value)

} else {
    console.log('z is not 10');  
}


if(y === 10){                    // ' === matches the value and datatype '

    console.log('y is 10'); 

} else {
    console.log('y is not 10');  // output is ' y is not 10 ' because y is a string
}


//! == is match the value and === match both the value and data type 




// else if


const t = 200;

if(t === 10){

    console.log('t is 10');

} else if (t > 10){              // we can add multiple else if statement

    console.log('t is grater than 10');

} else{

    console.log('t is less than 10');

}


// ' || ' or  at least one condition must true


const s = 10;
const d = 20;

if (s > 10 || d < 30){

    console.log('print me');       // output is print me because the condition is true d is < 30
}



// ' && ' or  both or every condition must true


const o = 10;
const p = 20;

if (o > 10 && p < 30){

    console.log('print me');
}else{

    console.log('condition false');// output is 'condition false' because the condition is false (both condition must be meet o>10 and p<30 if one of the condition is false then total statement is false)
}