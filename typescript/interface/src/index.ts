// This is a TypeScript interface example that defines a user object with properties such as name, age, email, password, and an optional address. The printUserDetails function takes a user object as an argument and prints its details to the console. Two user objects are created and passed to the function to demonstrate its functionality.
//what is an interface in typescript?
//An interface in TypeScript is a way to define the structure of an object. It specifies the properties and their types that an object should have. Interfaces are used to enforce type checking and ensure that objects adhere to a specific shape. They can also be used to define contracts for classes, allowing for better code organization and maintainability.
interface user{
    name:string,
    age:number,
    email:string,
    password:string,
    address?:{
        street:string,
        city:string,
        state:string,
        country:string
    }
}

function printUserDetails(user:user):void{
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${user.password}`);
    if (user.address) {
        console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
    }
}

const user1:user = {
    name:"Abhinav Mishra",
    age:22,
    email:"n1V9T@example.com",
    password:"password123",
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY",
        country:"USA"
    }
}

const user2:user = {
    name:"John Doe",
    age:30,
    email:"H9FtO@example.com",
    password:"password456"
}
printUserDetails(user1);
printUserDetails(user2);