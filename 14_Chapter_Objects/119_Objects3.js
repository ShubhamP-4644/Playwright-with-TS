const user = {
    Name: "Shubham",
    Age: 21,
    Email: "shubham@xyz.com"
};
console.log(user);


//      Accessing properties
console.log(user.Name);
console.log(user["Age"]);

//      Adding / Modifying properties

user.City = "Gurugram",     // Adding new key
user.Age = 22;          // Modifying key Age from 21 to 22
console.log(user);