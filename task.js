const students = [
  { name: "Alice", age: 14, grade: "8th" },
  { name: "Bob", age: 15, grade: "9th" },
  { name: "Charlie", age: 13, grade: "7th" },
];
names = students.map((s) => s["name"]);
console.log(names);
let students = [
  { name: "Raghul", mark: 75 },
  { name: "Rithik", mark: 80 },
  { name: "Kalia", mark: 40 },
];
let below50 = students.filter((s) => s.mark < 50);
console.log(below50);
