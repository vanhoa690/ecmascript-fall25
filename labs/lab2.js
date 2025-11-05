// var - function scoped
function varExample() {
  const x = 10;
  if (true) {
  }
  console.log(x); // 10 - vẫn truy cập được
}

// block scoped: {}: function, if(){}
// varExample();

// VD const
function constExample() {
  const PI = 3.14;
  //   PI = 3.15; // TypeError: Assignment to constant variable

  const person = {
    name: "hoadv",
  };
  person.name = "vanhoa"; // OK
  // person = { name: "Bob" }; // ❌ Không được - reassign
  person.age = 30;
  console.log(person.name);
}

constExample();
// bai tap 1
// bai tap 2
// bai tap 3
