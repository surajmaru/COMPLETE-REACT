// Primitives
let age: number;
age = 23;

let userName: string;
userName = "SURAJ";

let isGood: boolean;
isGood = true;

let a: null;

// objects
let hobbies: string[];
hobbies = ["hi", "hello"];

// type alias
type Person = {
  name: string;
  price: number;
};

let games2: Person;

//
let games: {
  name: string;
  price: number;
};
games = {
  // this okay
  name: "CP",
  price: 4,
};
// games = {
//   // this not
//   okay: true,
// };

let people: {
  name: string;
  price: number;
}[];

// type inference
let course1 = "React is the goat";
// course = 123;

// union types
let course: string | number | boolean = "React is the goat";

course = 123;

course = true;

//
let people3: Person[];

// function and types.
function add(a: number, b: number) {
  return a + b;
}
// here the return value is "number"

function output(value: any) {
  console.log(value);
}
// here the return value is "void" cause we are not returning anything

// generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ["a","b","c","d"]

// updatedArray[0].split("");
stringArray[0].split("");
