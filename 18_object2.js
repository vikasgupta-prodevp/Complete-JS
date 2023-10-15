const tinderUser1 = {}
tinderUser1.id = "123abc"
tinderUser1.name = "Vikas"
tinderUser1.isLoggedIn = false


// console.log(tinderUser)
const tinderUser2 = {
    email: "emal.com",
    fullname: {
        userfullname: {
            firstname: "Vikas",
            lastname: "Kumar"
        }
    }
}

//concatinating of two objects
 const tinderUser3={...tinderUser1,...tinderUser2}
 console.log(tinderUser3)


const users=[
    {
        id:1,
        email:"Gl@gmail.com"
    },
    {

    },
    {

    }
]

// users[1].id
 console.log(tinderUser1)


 console.log(Object.keys(tinderUser1))
 console.log(Object.values(tinderUser1))
console.log(Object.entries(users))


//to find the keys and values in object
 console.log(tinderUser2.fullname.userfullname.firstname)
 console.log(tinderUser2.fullname.userfullname)
 console.log(tinderUser2.userfullname)
 console.log(tinderUser2.email)

 const otheruser={tinderUser1,tinderUser2}
 const otheruser=Object.assign(tinderUser1,tinderUser2)


 const otheruser=Object.assign({},tinderUser1,tinderUser2)

console.log(otheruser)
