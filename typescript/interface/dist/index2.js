"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printEmployeeDetails(employee) {
    console.log(`Employee ID: ${employee.emplyeeId}`);
    console.log(`Employee Type: ${employee.employeeType}`);
    console.log(`Status: ${employee.status}`);
    console.log(`Job Title: ${employee.jobTitle}`);
    console.log(`Joining Date: ${employee.joiningDate}`);
    console.log(`Position: ${employee.position}`);
    console.log(`Salary: ${employee.salary}`);
    console.log(`Name: ${employee.user.name}`);
    console.log(`Age: ${employee.user.age}`);
    console.log(`Email: ${employee.user.email}`);
    console.log(`Password: ${employee.user.password}`);
    if (employee.address) {
        console.log(`Address: ${employee.address.street}, ${employee.address.city}, ${employee.address.state}, ${employee.address.country}`);
    }
}
const employee1 = {
    user: {
        name: "Abhinav Mishra",
        age: 22,
        email: "n1V9T@example.com",
        password: "password123"
    },
    emplyeeId: 1,
    employeeType: "Permanent",
    status: "Active",
    jobTitle: "Software Engineer",
    joiningDate: "2023-01-01",
    position: "Developer",
    salary: 50000,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};
printEmployeeDetails(employee1);
//# sourceMappingURL=index2.js.map