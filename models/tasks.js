const { v4: uuidv4 } = require("uuid");

const { createPromptModule } = require("inquirer");
const Task = require("./task");

class Tasks {
  list = {};

  get listArr() {
    const listArray = [];
    Object.keys(this.list).forEach((key) => {
      console.log(key);
      const tarea = this.list[key];
      listArray.push(tarea);
    });

    return listArray;
  }

  constructor() {
    this.list = {};
  }

  doTask(desc = "") {
    const task = new Task(desc);

    this.list[task.id] = task;
  }
}

module.exports = Tasks;
