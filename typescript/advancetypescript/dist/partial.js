"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUserDetails(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    if (user.address) {
        console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
    }
}
const user1 = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};
printUserDetails(user1);
//# sourceMappingURL=partial.js.map