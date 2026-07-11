"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class employee {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    details() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}
class manager extends employee {
    constructor(name, age, email) {
        super(name, age, email);
    }
    details() {
        return `Manager Details - Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}
const employee1 = new employee("Abhinav Mishra", 22, "n1V9T@example.com");
const manager1 = new manager("John Doe", 30, "H9FtO@example.com");
console.log(employee1.details());
console.log(manager1.details());
//# sourceMappingURL=class.js.map