interface  user {
    name: string;
    age: number;
    email: string;
    password: string;
}

function sumofage(user:user[]):number{
    return user.filter((user)=>user.age>18).reduce((acc,user)=>acc+user.age,0);
}

const users:user[] = [
    {
        name:"Abhinav Mishra",
        age:22,
        email:"n1V9T@example.com",
        password:"password123"
    },
    {
        name:"John Doe",
        age:30,
        email:"H9FtO@example.com",
        password:"password456"
    }
]
console.log(sumofage(users));


type person_type = {
    name: string;
    age: number;
    email: string;
    password: string;
}

type user2 ={
    [key :string]: person_type;
}

const users2:user2 = {
    user1: {
        name:"Abhinav Mishra",
        age:22,
        email:"n1V9T@example.com",
        password:"password123"
    },
    user2: {
        name:"John Doe",
        age:30,
        email:"H9FtO@example.com",
        password:"password456"
    }
}

console.log(users2);

