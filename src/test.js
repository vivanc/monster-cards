const bcrypt = require("bcryptjs");

// async function fetchuser() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }

// fetchuser();
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

console.log(bcrypt.compareSync("B4c0//", hash)); // true
bcrypt.compareSync("not_bacon", hash); // false
