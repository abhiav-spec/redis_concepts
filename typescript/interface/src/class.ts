interface user{
    name:string,
    age:number,
    email:string,
    details():string 
}

class employee implements user{
    name:string;
    age:number;
    email:string;

    constructor(name:string, age:number, email:string){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    details():string{
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

class manager extends employee{
    constructor(name:string, age:number, email:string){
        super(name, age, email);
    }

    details():string{
        return `Manager Details - Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

const employee1 = new employee("Abhinav Mishra", 22, "n1V9T@example.com");
const manager1 = new manager("John Doe", 30, "H9FtO@example.com");

console.log(employee1.details());
console.log(manager1.details());

abstract class person{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    abstract greet():string;

    printDetails():void{
        console.log("hello from person class");
    }
}

class student extends person{
    constructor(name:string){
        super(name);
    }

    greet():string{
        return `Hello, ${this.name}`;   
    }
}

const student1 = new student("Abhinav Mishra");
console.log(student1.greet());
console.log(student1.printDetails());