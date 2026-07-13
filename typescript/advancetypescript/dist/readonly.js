"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "sai",
    age: 23,
    email: "sai@123",
    password: "sai123"
};
const user2 = {
    name: "sai",
    age: 23,
    email: "sai@123",
    password: "sai123"
};
const config = {
    endpoint: "https://api.example.com",
    apiKey: "your-api-key",
    timeout: 5000,
};
// Attempt to modify the config
// config.endpoint = "https://new-api.example.com"; // Error: Cannot assign to 'endpoint' because it is a read-only property
function fetchData(config) {
    // Use the config object to make an API request
    console.log(`Fetching data from ${config.endpoint} with API key ${config.apiKey}`);
}
fetchData(config);
//# sourceMappingURL=readonly.js.map