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

// interface can do intersection but not union, union can be done by type only
//interface can extend another interface but not type, type can extend another type but not interface
type employee = {
    user: string;
    address?: string;
    emplyeeId: number;
    employeeType: string;
    status: string;
    jobTitle: string;
    joiningDate: string;
    position: string;
    salary: number;
};

type Manager = {
    user: string;
    address?: string;
    emplyeeId: number;
    employeeType: string;
    status: string;
    jobTitle: string;
    joiningDate: string;
    position: string;
    salary: number;
};



interface  Employee  extends Manager , employee {}

const employee2: Employee = {
    user: "Abhinav Mishra",
    emplyeeId: 1,
    employeeType: "Permanent",
    status: "Active",
    jobTitle: "Software Engineer",
    joiningDate: "2023-01-01",
    position: "Developer",
    salary: 50000,
    address: "123 Main St, New York, NY, USA",
};

function printEmployeeDetails(employee: Employee): void {
    console.log(`Employee ID: ${employee.emplyeeId}`);
    console.log(`Employee Type: ${employee.employeeType}`);
    console.log(`Status: ${employee.status}`);
    console.log(`Job Title: ${employee.jobTitle}`);
    console.log(`Joining Date: ${employee.joiningDate}`);
    console.log(`Position: ${employee.position}`);
    console.log(`Salary: ${employee.salary}`);
    console.log(`User: ${employee.user}`);
    if (employee.address) {
        console.log(`Address: ${employee.address}`);
    }
}

printEmployeeDetails(employee2);