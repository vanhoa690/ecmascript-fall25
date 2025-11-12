const colors = ['red', 'green', 'blue']

// const red = colors[0]; // "red"
// console.log(red);
//  Destructuring Array
const [red, green, blue, yellow] = colors

// console.log(red, green, blue, yellow);

const numbers = [1, 2, 3, 4, 5]

const [, second, , four] = numbers

// console.log(second, four);

// 2, 4 trong numbers

const user = ['password', 'email', 'age', 'name']
// ["email", "age", "name"];
// ... (rest) + destrucring
const [password, ...userInfo] = user
// console.log(userInfo);

//  Object Destructuring
const person = {
  name: 'hoadv',
  age: 30,
  city: 'Viet Nam',
}

// const name = person.name;

const { city: newName } = person

// console.log(newName);

const apiRes = {
  message: '',
  code: 200,
  config: {},
  headers: {},
  data: [],
}
// const { data } = apiRes;

// const { data } = await(cal api)
const user1 = {
  id: 1,
  personalInfo: {
    name: 'javascript',
    contact: {
      email: 'javascript@email.com',
      phone: '123-456-7890',
    },
  },
}

// const name = user1.personalInfo.name;
// const email = user1.personalInfo.contact.email;
// const {
//   name,
//   contact: { email, phone },
// } = user.personalInfo;

// Callback cơ bản
function fetchData(callback) {
  const data = { id: 1, name: 'hoadv' }
  setTimeout(() => {
    callback('error khong ket noi', null)
  }, 1000)
  callback(null, data) // in ra trc: Data:
}

const handleData = (error, data) => {
  if (error) {
    console.error('Error:', error)
  } else {
    console.log('Data:', data)
  }
}
// callback function
fetchData(handleData)

const loadding = true

new Promise((resolve, reject) => {
  // Async operation
})
  .then(result => {
    /* handle success */
    // resolve
    //
  })
  .catch(error => {
    /* handle error */
    // reject
  })
  .finally(() => {
    /* always execute */
    // code luon chay
    loadding = false
  })

// Tạo Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'hoa dv' })
      } else {
        reject('Invalid user ID')
      }
    }, 1000)
  })
}

fetchUserData(12)
  .then(user => {
    console.log('User data:', user)
    return user.name
  })
  .then(userName => {
    console.log('User name:', userName)
  })
  .catch(error => {
    console.error('Error:', error)
  })
  .finally(() => {
    console.log('Operation completed')
  })
function getFirstLast(array) {
  // check isArray
  if (!Array.isArray(array)) {
    return 'Hay truyen vao array'
  }
  // empty array []
  const [first] = array
  const last = array[array.length - 1]
  return [first, last]
}
console.log(getFirstLast([1, 2, 3, 4])) // [1, 4]
console.log(getFirstLast([])) // [1, 4]

const getUserData = async userId => {
  try {
    const user = await fetchUserData(userId)
    console.log('User:', user)
    return user
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw error
  }
}

getUserData(1)
