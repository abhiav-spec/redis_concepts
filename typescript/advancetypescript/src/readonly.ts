type user = {
    readonly name:string,
    readonly age:number,
    readonly email:string,
    readonly password:string
}

const user:user={
    name:"sai",
    age:23,
    email:"sai@123",
    password:"sai123"
}


type user2={
 name:string,
 age:number,
 email:string,
 password:string
}

const user2: Readonly<user2>={
    name:"sai",
    age:23,
    email:"sai@123",
    password:"sai123"
}
