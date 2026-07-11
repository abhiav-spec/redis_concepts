"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
    password: "password123",
    greeting: function () {
        return "Hello, " + this.name;
    }
};
console.log(user1.greeting());
class Manager {
    name;
    age;
    email;
    password;
    time = "9:00 AM - 5:00 PM";
    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
    greeting() {
        return "Hello, " + this.name;
    }
}
const manager1 = new Manager("John Doe", 30, "H9FtO@example.com", "password456");
console.log(manager1.greeting());
//# sourceMappingURL=index3.js.map