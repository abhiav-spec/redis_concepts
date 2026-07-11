type user={
    name:string,
    age:number,
    email:string,
    password:string
}

type manager ={
    user:string,
    address?:string,
    emplyeeId:number,
    employeeType:string,
    status:string,
    jobTitle:string,
    joiningDate:string,
    position:string,
    salary:number
}

const employee1: user & manager = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
    password: "password123",
    user: "Abhinav Mishra",
    emplyeeId: 1,
    employeeType: "Permanent",
    status: "Active",
    jobTitle: "Software Engineer",
    joiningDate: "2023-01-01",
    position: "Developer",
    salary: 50000,
};
console.log(employee1);