"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserDetails(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Password: ${user.password}`);
    if (user.address) {
        console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
    }
}
const user1 = {
    name: "Abhinav Mishra",
    age: 22,
    email: "    n1V9T@example.com",
    password: "password123",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};
const user2 = {
    name: "John Doe",
    age: 30,
    email: "    H9FtO@example.com",
    password: "password456"
};
printUserDetails(user1);
printUserDetails(user2);
//# sourceMappingURL=index.js.map