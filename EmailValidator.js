//regex to validate email
const regex = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9]+)?@[a-zA-z]+\.[a-zA-Z]+/;

//function to validate email
function validate(email){
    return regex.test(email)
}

//test
console.log(validate("abc"));
console.log(validate("abc@bridgelabz"));
console.log(validate("abc@bridgelabz.co"));
console.log(validate("abc.xyz@bridgelabz.co.in"));