//Arrays

const myarr=[4,1,8,6,5,9,7,2,0];
console.log(myarr[0]);
console.log()

const myherr=["Viikas","Abhay","Malhotra"];
console.log(myherr[2]);


const myarr2=new Array(10,11,12,13,14);
console.log(myarr2[1]);

myarr.push(10);
console.log(myarr);
myarr.push(11);

myarr.pop();
console.log(myarr)

myarr.unshift(90)
console.log(myarr)


myarr.shift(90)
console.log(myarr)

console.log(myarr.includes(1));
console.log(myarr.indexOf(1));


const newarr=myarr.join()
console.log(newarr)
console.log(typeof(newarr))



//shallow copy






//deep copy