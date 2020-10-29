//*------------------ object literal -----------------*/

// it's basically key value pair

const person = {
    firstName: 'Sam',
    lastName: 'd',
    age: 28,
    hobbies: ['game', 'movies', 'music'],
    address: {

        street: '5th street',
        city: 'boston',
        state: 'LA'
    }

}

console.log(person);

console.log(person.firstName);

console.log(person.firstName, person.lastName);           //you can log multiple data by putting a " , "

console.log(person.hobbies[1]);                           // out put-'movies' select what you want to log
console.log(person.address.city);                         // out put-'boston' select what you want to log

                                                          //* destructuring (Advance part of es6 new feature)

                                                          // we can use above object as variables

const{ firstName, lastName, address:{ state } } = person; //pulling out person object

console.log(firstName);
console.log(state);

                                                          // we can add properties

person.email = 'sam@gmai.com';

console.log(person);                                      // email added, check out put
console.log(person.email);