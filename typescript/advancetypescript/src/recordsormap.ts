interface UserRecord {
  name: string;
  age: number;
  email: string;
  password: string;
}

const users: UserRecord[] = [
  {
    name: "John Doe",
    age: 30, 
    email: "H9FtO@example.com", 
    password: "password456", 
  }, 
]; 

function printUserDetails(users: UserRecord[]): void { 
  for (const user of users) { 
    console.log(`Name: ${user.name}`); 
    console.log(`Age: ${user.age}`); 
    console.log(`Email: ${user.email}`); 
    console.log(`Password: ${user.password}`); 
    console.log(`-------------------`); 
  } 
} 

printUserDetails(users);

//map

const userMap = new Map();
userMap.set("John Doe", { age: 30, email: "H9FtO@example.com", password: "password456" });
userMap.set("Abhinav Mishra", { age: 22, email: "n1V9T@example.com", password: "password123" });

console.log(userMap.get("John Doe"));
console.log(userMap.get("Abhinav Mishra"));