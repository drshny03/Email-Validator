//regex to validate email
const regex = /^[a-zA-Z0-9]+/;

//function to validate email
function validate(email){
    return regex.test(email)
}

//test
console.log(validate("abc"));