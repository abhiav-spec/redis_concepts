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

// useing readonly for congigure file 

interface Config {
    endpoint: string;
    apiKey: string;
    timeout: number;
  }
  
  const config: Readonly<Config> = {
    endpoint: "https://api.example.com",
    apiKey: "your-api-key",
    timeout: 5000,
  };
  
  // Attempt to modify the config
  // config.endpoint = "https://new-api.example.com"; // Error: Cannot assign to 'endpoint' because it is a read-only property

  function fetchData(config: Readonly<Config>) {
    // Use the config object to make an API request
    console.log(`Fetching data from ${config.endpoint} with API key ${config.apiKey}`);
  }
  
  fetchData(config);