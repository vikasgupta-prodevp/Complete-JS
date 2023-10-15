//Singleton
// constructor-singleton

const mysym="mykey";

const user={
    "full name":"Aman",
    name:"Vikas",
    [mysym]:"mykey",
    age:23,
    location:"Uttar Pradesh",
    email:"vikas324@instagram.com",
    LastloginDay:["Sunday","Monday","Friday"]
}




console.log(user["mysym"])
console.log(typeof [mysym])
console.log(user["full name"])
console.log(user["email"])
console.log(user.email)
console.log(user.name)

// user.name="Ajay";
// console.log(user.name)


// user.name="akshay";
// Object.freeze(user)
// console.log(user)



user.greeting=function(){
    console.log("Good night");
}
console.log(user.greeting());


user.greeting1=function(){
    console.log(`Good night,${this.name},how are you`);
}
console.log(user.greeting1());



user.greeting2=function(){
    console.log(`Hello ,${this.name}, how are you I hope you are very well`);
}
console.log(user.greeting2());