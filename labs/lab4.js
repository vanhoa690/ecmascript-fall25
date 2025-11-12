const colors = ['red', 'green', 'blue'];

// const red = colors[0]; // "red"
// ES Destructring Array
const [red, green, blue, yellow] = colors;

// console.log(red, green, blue, yellow);

const numbers = [1, 2, 3, 4, 5]; // red green blue undefined

const [, second, , four] = numbers;

// console.log(second, four);

const user = ['password', 'name', 'age', 'email'];

// Descrucring + Rest params
const [password, ...userInfo] = user;

// console.log(userInfo);

// Object Destructuring
const tour = {
  id: 'tour-001',
  title: 'Hà Nội - Hạ Long 2 ngày 1 đêm',
  shortDescription:
    'Tham quan di sản thế giới Vịnh Hạ Long, đi tàu, thưởng thức hải sản.',
};

// C1
// const titleTour = tour.title;

// C2
const { title, id, shortDescription: desc } = tour;

// console.log(title, desc);

const apiRes = {
  message: '',
  code: 200,
  data: [],
};

const { data } = apiRes; // apiRes.data
const { data: tourList } = apiRes;

// console.log(data, tourList);

// Callback cơ bản
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: 'hoadv' }; // mo phong goi api sau 1s
    // data
    callback(null, data);
  }, 1000);
  //   callback("loi khong data", null);
}

const handleData = (error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data:', data);
  }
};

fetchData(handleData);
// Promiss
new Promise((resolve, reject) => {
  // Async operation
})
  .then(result => {
    /* handle success */
    //   fulfilled
  })
  .catch(error => {
    /* handle error */
    // rejected
  })
  .finally(() => {
    /* always execute */
    // luon luon chay du thanh cong hay that bai // loading = true
  });

// Tạo Promise
// function fetchUserData(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId > 0) {
//         resolve({ id: userId, name: "hoa dv" });
//       } else {
//         reject("Invalid user ID");
//       }
//     }, 1000);
//   });
// }

// Sử dụng Promise
// fetchUserData(1)
//   .then((user) => {
//     console.log("User data:", user);
//     return user.name;
//   })
//   .then((userName) => {
//     console.log("User name:", userName);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })
//   .finally(() => {
//     console.log("Operation completed");
//   });

const fetchMultipleData = urls =>
  Promise.all(urls.map(url => fetch(url).then(res => res.json())));

// fetchMultipleData([
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/users/2",
// ]).then((users) => console.log(users));

const fetchUserData = async userId => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserData = async userId => {
  try {
    const user = await fetchUserData(userId);
    console.log('User:', user);
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
};

getUserData(1);
