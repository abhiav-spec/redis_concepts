"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserDetails(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}
const user1 = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
};
printUserDetails(user1);
function printUserDetailsWithAddress(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
}
const user2 = {
    name: "John Doe",
    age: 30,
    email: "H9FtO@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};
printUserDetailsWithAddress(user2);
//# sourceMappingURL=pick.js.map