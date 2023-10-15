// function myname(){
//     console.log("V"),
//     console.log("I"),
//     console.log("K"),
//     console.log("A"),
//     console.log("S")
// };
// myname();


// function addnum(num1,num2){
// console.log(num1+num2)
// }


// function addnum(num1,num2){
// // let result=num1+num2
// // return result
// return num1+num2
// }
// const result=addnum(8,8)
// console.log("Result :",result)


// function mul(num1,num2){
//     return num1*num2
// };
// const result=mul(4,5);
// console.log("Result:",result);



// function diff(num1,num2){
//     return num1-num2
// };
// const result=diff(4,5);
// console.log("Result:",result);



// function div(num1,num2){
//     return num1/num2
// };
// const result=div(4,5);
// console.log("Result:",result);


// function loginUserMessage(Username){
//     return `${Username} just loffed in`
// }

// const result=loginUserMessage("Vikas");
// console.log(result)






function Userlogin(Username="Sam") {
    // if (Username === undefined) {
    if (!Username) {
        console.log("Please enter user name :")
        return
    }
    return `${Username} just logged in`
}

const result = Userlogin()
console.log(result)