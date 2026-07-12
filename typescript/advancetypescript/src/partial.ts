interface user {
    name: string;
    age: number;
    email: string;
    password: string;
    address: {
        street: string;
        city: string;
        state: string;
        country: string;
    };
}


type user_withAddress = Pick<user, "name" | "age" | "email" | "address">;

type user_withoutAddress_optional = Partial<user_withAddress>;

function printUserDetails(user: user_withoutAddress_optional): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
    if (user.address) {
        console.log(`Address: ${user.address.street}, ${user.address.city}, ${user.address.state}, ${user.address.country}`);
    }
}

const user1: user_withoutAddress_optional = {
    name: "Abhinav Mishra",
    age: 22,
    email: "n1V9T@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA"
    }
};

printUserDetails(user1);