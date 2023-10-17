this keyword******
const user={
    username:"Vikas",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(`${this.price} ,this is welcome price to this website`);
    }
}
user.welcomemessage()
user.username="Mitesh";
user.welcomemessage()


const user={
    username:"Abhay",
    passwors:1234,

    welcomemessag:function(){
        console.log(`${this.username} , is the name of student's password is ${this.passwors}`);
        console.log(this);
    }
}
console.log(this)

function one(){
    let username="Vikla"
    console.log(this)
}
one()
user.welcomemessag();
this.  username="Akansha";
user.welcomemessag();


const one=function(){
let username="Akasshs";
console.log(this.username);
}
const one=()=>{
let username="Akasshs";
console.log(this.username);
console.log(this);
}

one()


const addtwo=(num1,num2)=>{
    return num1*num2;
}
const addtwo=(num1,num2)=> num1*num2;
const addtwo=(num1,num2)=> (num1*num2);


const sum=addtwo(1,12)
console.log(sum)


