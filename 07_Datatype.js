// const score=100;
// const scoreValue=1009;
// const isloggedIn=false;
// const istemp=null;
// let userEmail;

// const id = Symbol('123');
// const isanotherid = Symbol('123');
// console.log(id === isanotherid);

// const bigNumber = 23434;
// console.log(bigNumber)

// let mychannelname = "photographer";
// let anothername = mychannelname;
// anothername = "vikas gupta";

// console.log(anothername);
// console.log(mychannelname);


// let user={
//     email:"vksdk@fdmnd@gmail.com",
//     upiId:"dfjdsfkj"
// }
// let user2=user;
// user2.email="vkgupta3232@gmail.com";
// console.log(user.email);
// console.log(user2.email);


const name="vikas-hc-com";


const repocount=40;
console.log(name+repocount+" Amazing");

console.log(`hello my name is ${name} and my repocount is ${repocount}`);//String interpolation
const gamename=new String('Vishal-hv-com')
console.log(gamename[3])
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(1));
console.log(gamename.indexOf('i'));


const newString=gamename.substring(0,4)
console.log(newString)


const ansubstring=gamename.slice(0,-4);
console.log(ansubstring)

const url="https://vikasgupta.com/vikas20%vikas";
console.log(url.replace('20%','_'));
console.log(url.includes('aman'));
console.log(url.includes('vika'));
console.log(url.codePointAt(1));
console.log(gamename.split('_'));
console.log(gamename.search('i'));