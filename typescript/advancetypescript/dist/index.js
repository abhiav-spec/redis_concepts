"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumofage(user) {
    return user.filter((user) => user.age > 18).reduce((acc, user) => acc + user.age, 0);
}
const users = [
    {
        name: "Abhinav Mishra",
        age: 22,
        email: "n1V9T@example.com",
        password: "password123"
    },
    {
        name: "John Doe",
        age: 30,
        email: "H9FtO@example.com",
        password: "password456"
    }
];
console.log(sumofage(users));
//# sourceMappingURL=index.js.map