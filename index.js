// console.log(x);
// let x = 5;
async function getData() {
  return await Promise.resolve("Hello");
}
getData().then(console.log); // (data) => console.log(data)

console.log("abc");
