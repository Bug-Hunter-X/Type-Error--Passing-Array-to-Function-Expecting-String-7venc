function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];

// Solution 1: Iterate over the array
user.forEach(name => console.log(greeter(name)));

// Solution 2: Use a different function signature if you need to handle arrays
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(", ");
}
console.log(greeterArray(user));