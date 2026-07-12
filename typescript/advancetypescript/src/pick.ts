interface user {
    name: string;
    age: number;
    email: string;
    password: string;
    address?: {
        street: string;
        city: string;
        state: string;
        country: string;
    };
}

type pickuser = Pick<user, "name" | "age" | "email">;

function printUserDetails(user: pickuser): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

const user1: pickuser = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
};

printUserDetails(user1);

type  userWithAddress = {
    name: string;
    age: number;
    email: string;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
    };
}

type pickuserWithAddress = Pick<userWithAddress, "name" | "age" | "email" | "address">;

function printUserDetailsWithAddress(user: pickuserWithAddress): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
}   

const user2: pickuserWithAddress = {
    name: "John Doe",
    age: 30,
    email: "H9FtO@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};

printUserDetailsWithAddress(user2);

