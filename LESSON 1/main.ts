// /* TypeScript - это строго типизированный язык програмирование, фактически это альтернативный синтаксис JavaScript или обертка над ним, а это значит что в основе по прежнему лежит JS. Для каждой переменной ,константы, для каждого аргумента функции и результата этой функции, для каждого класса, свойство, метода можно задать тип. Если задать типизацию для всех элементов, еще на стадии написании кода, модно легко отследить где конкретно произошла ошибка
//  */
// var thisBoolean: boolean = true;
// thisBoolean = false;

// // ! Данный тип предназначен для оперделения отсуствующих типов. Как мы видим в функции нету return, значит она не возвращает какое-то значение, следовательно результат выполнение функции это отсуствующий тип, который мы указали
// var num: void;
// function abc(a, b, c) {
//   return a + b + c;
// }
// abc(1, 2, 3);

// // ! Типизация объектов
// type TypeUser = {
//   name: string;
//   age: number;
// };
// const user: TypeUser = {
//   name: "Aidana",
//   age: 23,
// };

// type TypeAddress = {
//   city: string;
//   country: string;
//   nationality: string;
//   phoneNum: number;
// };
// const address: TypeAddress = {
//   city: "Bishkek",
//   country: "Kyrgyzstan",
//   nationality: "Kyrgyz",
//   phoneNum: +996553508885,
// };
// var common = {
//   ...user,
//   ...address,
// };
// let common: TypeUser & TypeAddress;
// common = {
//   ...adress,
//   ...user,
// };

// // ! Типизация массивов
// // let arr: string[];
// // let arr2: Array<string>;
// // arr = ["34", "ewe"];
// //массив, который можно только прочитывать, нельзя изменить
// const arr2: ReadonlyArray<number> = [1, 2, 3, 4];
// arr2[0];
// //кортежи нужны тогда, когда мы четко знаем, сколько элементов в массиве у нас будет лежать
// type TypeArr = [number, string, null];
// const arr3: TypeArr = [1, "2", null];

// //getName("234");
// type TypeGetNameReturn = {
//   name: string;
// };

// function getName(name: string): TypeGetNameReturn {
//   return { name };
// }

// //типизация стрелочной функции
// const getName2 = (name: string): TypeGetNameReturn => {
//   return { name };
// };

// type TypeGetnameFunction = (name: string) => TypeGetNameReturn;

// const getName3: TypeGetnameFunction = (name) => {
//   return { name };
// };

// console.log("hello");

// type Animal = {
//   name: string;
//   makeSound: () => void;
// };

// function createAnimal(name: string, sound: string): Animal {
//   return {
//     name,
//     makeSound() {
//       console.log(sound);
//     },
//   };
// }
// const dog: Animal = createAnimal("Laika", "Woof!");
// dog.makeSound();

// type ObjectUser = {
//   name: string;
//   age: number;
//   email: string;
// };
// const user1: ObjectUser = {
//   name: "Aidana",
//   age: 18,
//   email: "aidanabekboeva5@gmail.com",
// };
// function res(user: ObjectUser): void {
//   console.log(`${user.name}`);
//   console.log(`${user.age}`);
//   console.log(`${user.email}`);
// }
// res(user1);
// // Определение типа для массива имен
// type arr = string[];
// const names: arr = ["Aidana", "Max", "Alina", "Oxana"];
// function name1(arr: arr): void {
//   arr.forEach((e) => {
//     console.log(e);
//   });
// }
// name1(names);
// todo      TASK 1

let boolean: boolean;
let string: string;
let num: number;

// todo       TASK 2

type FunctionArea = (pnum: number, radius: number) => number;

const calculateArea: FunctionArea = (pnum, radius) => {
  const area = pnum * radius ** 2;
  return area;
};
console.log(calculateArea(3.14, 10));

type FunctionDensity = (m: number, v: number) => number;

const calculateDencity: FunctionDensity = (m, v) => {
  const p = m / v;
  return p;
};

console.log(calculateDencity(150, 50));

//todo         TASK 3

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string[];
};

let product: Product[] = [
  {
    id: 1,
    title: "Энзимная пудра",
    description: "Хорошо очищает лицо, сужает поры и дает блеск",
    price: 11200,
    colors: ["green tea", "snail", "pear"],
  },
  {
    id: 2,
    title: "Тонер Combucha",
    description: "Тот самый корейский блеск",
    price: 30404,
    colors: ["fresh", "bright", "purufiyng"],
  },
  {
    id: 3,
    title: "Foundation Estee Lauder",
    description: "Самый плотный тон",
    price: 1000000,
    colors: ["mate", "for event", "raticular"],
  },
];
console.log(product);
