const { v4: uuidv4 } = require("uuid");

const { createPromptModule } = require("inquirer");
const Task = require("./task");

class Tasks {
  list = {};

  get listArr() {
    const listArray = [];
    Object.keys(this.list).forEach((key) => {
      const tarea = this.list[key];
      listArray.push(tarea);
    });

    return listArray;
  }

  constructor() {
    this.list = {};
  }

  deleteTask(id = '') {

    if (this.list[id]) {
      delete this.list[id]
    }
    
  }

  upTask(tasks = []) {
    tasks.forEach((task) => {
      this.list[task.id] = task;
    });
  }

  doTask(desc = "") {
    const task = new Task(desc);

    this.list[task.id] = task;
  }

  completedList() {
    console.log();
    this.listArr.forEach((task, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completed } = task;
      const state = completed ? "Completada".green : "Pendiente".red;
      console.log(`${idx} ${desc} :: ${state}`);
    });
  }
  pendingCompletedList(completeds = true) {
    console.log();
    let count = 0;
    this.listArr.forEach((task, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completed } = task;
      const state = completed ? "Completada".green : "Pendiente".red;
      if (completeds) {
        if (completed) {
          count += 1;
          console.log(`${idx} ${desc} :: ${completed.green}`);
        }
      } else {
        if (!completed) {
          count += 1;
          console.log(`${idx} ${desc} :: ${state}`);
        }
      }
    });
  }
  toggleCompleted(ids = []) {
    
    ids.forEach(id => {
      const task = this.list[id];
      if (!task.completed) {
        task.completed = new Date().toISOString();
      }
    });

    this.listArr.forEach(task => {
// Si no existe task.id, se limpia
      if (!ids.includes(task.id)) {
        this.list[task.id].completed = null;
      }

    })

  }
}

module.exports = { Tasks };
