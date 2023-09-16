let people = ["Greg", "Mary", "Devon", "James"];

// 1.Iterate through the array and console.log all of the people
for (let rama = 0; rama < people.length; rama++) {
  console.log(people[rama]);
}

//2.shift method remove first element of the array “Greg”
people.shift();

// 3.pop method remove last element of the array “james”
people.pop();

//4.usnshift inserts new elements at the start of an array.
people.unshift("Matt");

//5.Add your name to the end of the array
people.push("Thierry");

//6.Using a loop, iterate through the array and exit after console.log-ing “Mary”
for (let hello = 0; hello < people.length; hello++) {
  console.log(people[hello]);
  if (people[hello] === "Mary") {
    break;
  }
}

//7.Make a copy of the array using slice (excluding “Mary” and “Matt”)
let copiedPeople = people.slice(1, -1);

// 8.Get the indexOf where “Mary” is located
let indexOfMary = people.indexOf("Mary");

// 9.Get the indexOf where “Foo” is located (returns -1 if not found)
let indexOfFoo = people.indexOf("Foo");

// 10.Redefine the people variable and remove “Devon”, add “Elizabeth” and “Artie”
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");

// 11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob"
let withBob = people.concat("Bob");
