// const obj1 = {
//   name: "Object 1",
//   tasks: ["task1", "task2", "task3"],
//   showTasks: function () {
//     this.tasks.forEach(function (task) {
//       console.log(this.name + ": " + task); // this.name là undefined
//     });
//   },
// };

const obj1 = {
  name: "Object 1",
  tasks: ["task1", "task2", "task3"],

  showTasks: function () {
    this.tasks.forEach(
      function (task) {
        console.log(this.name + ": " + task);
      }.bind(this)
    ); // Bind this từ showTasks vào callback
  },
};

// obj1.showTasks();

const obj2 = {
  name: "Object 2",
  tasks: ["task1", "task2", "task3"],
  showTasks: function () {
    this.tasks.forEach((task) => {
      console.log(this.name + ": " + task); // this.name hoạt động đúng
    });
  },
};

// obj2.showTasks();

// Ví dụ 1: Mixed usage
const obj3 = {
  name: "Object 3",
  tasks: ["task1", "task2"],

  method1: function () {
    console.log("Method1 this:", this.name); // "Object 3"

    this.tasks.forEach(function (task) {
      console.log("Regular function this:", this?.name); // undefined
    });

    this.tasks.forEach((task) => {
      console.log("Arrow function this:", this.name); // "Object 3"
    });
  },

  // LƯU Ý QUAN TRỌNG:
  method2: () => {
    console.log("Method2 this:", this?.name); // undefined
    // Vì method2 là arrow function, nó kế thừa this từ global scope
  },

  method3: function () {
    const show = () => {
      console.log("Method3 this:", this?.name); // "Object 3"
    };
    return show;
  },
};

// obj3.method1();
// obj3.method2();
const showFunc = obj3.method3();
showFunc();
