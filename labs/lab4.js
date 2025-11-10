const colors = ["red", "green", "blue"];

// const red = colors[0]; // "red"
// ES Destructring Array
const [red, green, blue, yellow] = colors;

// console.log(red, green, blue, yellow);

const numbers = [1, 2, 3, 4, 5]; // red green blue undefined

const [, second, , four] = numbers;

// console.log(second, four);

const user = ["password", "name", "age", "email"];

// Descrucring + Rest params
const [password, ...userInfo] = user;

// console.log(userInfo);

// Object Destructuring
const tour = {
  id: "tour-001",
  title: "Hà Nội - Hạ Long 2 ngày 1 đêm",
  shortDescription:
    "Tham quan di sản thế giới Vịnh Hạ Long, đi tàu, thưởng thức hải sản.",
};

// C1
// const titleTour = tour.title;

// C2
const { title, id, shortDescription: desc } = tour;

console.log(title, desc);

const apiRes = {
  message: "",
  code: 200,
  data: [],
};

const { data } = apiRes; // apiRes.data
const { data: tourList } = apiRes;

console.log(data, tourList);
