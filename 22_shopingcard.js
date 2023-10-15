//rest operator

function calculatePrice(...num1){
return num1
}

console.log(calculatePrice(0,10,200,32,40,45))
function calculatePrice(val1,val2,...num1){
return num1
}
console.log(calculatePrice(0,10,200,32,40,45))



const user={
    username:"Vikas",
    price:199
}
function hanleObject(anyobject){
    console.log(`Username is ${user.username} and price is ${user.price}`);
    return anyobject
}
hanleObject({
    username:"Akansha",
    price:399
})








const myarray=[100,200,300,400,500]
function retursecondvalue(getarray){
return getarray[0]
}

console.log(retursecondvalue(myarray))