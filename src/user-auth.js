console.clear()
console.log('user-auth.js: \n\n');

// Design and Build a
// User Authentication System
// in JavaScript
// See if you can use some of the
// concepts from Object Oriented Programming

/*

Notes:

user object with
id,
password,
email,

register account with details:
- validate if email inputted is actually an email
- check for email in user database
- password requirements
- LATER ON: verify your email

login

*/


// array keywords -> list, database, collection,
// will need to loop through this
// maybe sort this eventually
// maybe filter this eventually based on a trait from our object

// object keywords -> attributes, traits, properties, characteristics

////////////////////
/* user registration

register account with details:
TODO - validate if email inputted is actually an email
✅- check for email in user database
TODO - password requirements
- LATER ON: verify your email
*/
////////////////////

// return boolean keywords -> validate, check, verify, authenticate

// - check for email in user database
// create a function that checks if the
// email already exists in our user database
let validEmail = false;
const emailChecker = (email) => {
    let arrayIndex = 0;
    let user = collection[arrayIndex]
    let userEmail = user.email
    console.log(`line 58: `, userEmail )

    console.log(`line60: `,collection[0])
    if (collection !== email) {
        validEmail = true;
    }
}

const checkForEmail = email => {
    let usersEmails = collection.map(user => user.email)
    console.log(`checkForEmails - usersEmails: `, usersEmails)
    if (usersEmails.includes(email)) {
        console.log('that email does exists');
        return false
    } else {
        console.log('that email does not exists')
        return true;
    }
}



// requirement one -
// a function that returns a user
// and stores it in a users collection
const collection = [];
console.log(`collection (before adding users): `,collection)
const createUser = (email, password, isTrue) => {
    if (checkForEmail(email) === false) {
        console.log('you already registered')
        return undefined;
    }
    const user = {
        id: collection.length + 1,
        email: email,
        password: password,
        isTrue: false
    }

    collection.push(user)

    return user;
}

const user1 = createUser('user1@mail.com', 'password123', 'isTrue')
// console.log(`user1: `, user1);
// console.log(`emailChecker:`,  emailChecker(user1.email))
// console.log(`collection (after adding user1): `,collection)
const user2 = createUser('user2@mail.com', 'password2')
const user3 = createUser('user2@mail.com', 'password2')
// console.log(`user2: `, user2)

checkForEmail('hello@world.com')