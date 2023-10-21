// const balance = 800;

// if(balance>500){
//     console.log("test");

// }

// *******nesting*********

// if (balance === 800) {
//     console.log("Enter your money")
    
// }
// else if (balance < 0) {
//     console.log("InSufficient balance ")
// }

// else if (balance >= 100000) {
//     console.log("0.2% GST");
// }

// else {
//     console.log("You can not withdraw money due to insufficient balance");
// }




// Real life example

const userloggedin=true

const debitcard=true


if(userloggedin && debitcard){//and operation
    console.log("Allow to buy now");
}

const userloggedFromEmail=true //OR operation
const userloggedFromGoogle=true

if(userloggedFromEmail || userloggedFromGoogle){
    console.log("User logged in");
}