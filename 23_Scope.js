//Global scope
// var c=90
let a = 200

//Block scope
if (true) {
    let a = 10;
    const b = 20;
    // var c=30;
    console.log(a)
}

console.log(a);
// console.log(b)
// console.log(c)


