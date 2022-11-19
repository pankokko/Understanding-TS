enum ROLE {
  ADMIN = 2,
  USER = 3,
  AUTHOR = 100
}

const person = {
  name: "string",
  age: 1,
  hobbies: ["cooking", "tenis"],
  role: ROLE.ADMIN
}

console.log(person.role === ROLE.ADMIN)


// console.log(person.role);


//文字列の配列
let favHobbies: string[];

favHobbies = ["Sports", "Cooking", "Swim"];
