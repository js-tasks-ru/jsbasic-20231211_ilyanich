function namify(users) {
  return users.map((users) => {
    return users.name;
  });
}

// function namify(users) {
//   let array = [];
//   for (user of users) {
//     array.push(user.name);
//   }
//   console.log(array);
//   return array;
// }

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

// function namify(users) {
//   // ваш код
// }

let names = namify(users); // ['Вася', 'Петя', 'Маша']

