let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())
console.log(mydate.toTimeString())
console.log(mydate.getTimezoneOffset())
console.log(mydate.toUTCString())
console.log(mydate.setUTCMinutes(1))


console.log(typeof mydate)


let mycdate=new Date("2023-01-24")
console.log(mycdate.toLocaleString())
console.log(mycdate.getHours())
console.log(mycdate.getMinutes())
console.log(mycdate.getUTCDay())

console.log(Date.now())
console.log(Math.floor(Date.now()/1000))


let newdate=new Date()
console.log(newdate.getDate())
console.log(newdate.getTime())



console.log(newdate.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    day:'2-digit'
}))