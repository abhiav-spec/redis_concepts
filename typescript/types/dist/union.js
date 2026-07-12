"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee1 = {
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
const employee2 = {
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
function printEmployeeDetails(employee) {
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
//# sourceMappingURL=union.js.map