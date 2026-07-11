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

type manager = {
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

const employee1: employee & manager = {
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
