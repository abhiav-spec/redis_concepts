interface people {
    name: string;
    age: number;
    email: string;
    password: string;
    greeting: () => string;
}

const user1: people = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
    password: "password123",
    greeting: function() {
        return "Hello, " + this.name;
    }
};

console.log(user1.greeting());

interface people2{
    name: string;
    age: number;
    email: string;
    password: string;
}

class Manager implements people2 {
    name: string;
    age: number;
    email: string;
    password: string;
    time: string = "9:00 AM - 5:00 PM";
    constructor(name: string, age: number, email: string, password: string) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }

    greeting(): string {
        return "Hello, " + this.name;
    }
}

const manager1 = new Manager("John Doe", 30, "H9FtO@example.com", "password456");
console.log(manager1.greeting());