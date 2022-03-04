require("colors");

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const {
  inquirerMenu,
  pausa,
  readInput,
  deletelistTask,
  confirm,
  seeListCheckList,
} = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/save");
const { Tasks } = require("./models/tasks");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();

  const taskDB = readDB();

  if (taskDB) {
    // Establecer las tareas
    tasks.upTask(taskDB);
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Descripción: ");
        tasks.doTask(desc);
        break;
      case "2":
        tasks.completedList();
        break;
      case "3":
        tasks.pendingCompletedList(true);
        break;
      case "4":
        tasks.pendingCompletedList(false);
        break;
      case "5":
        const ids = await seeListCheckList(tasks.listArr);
        tasks.toggleCompleted(ids);
        break;
      case "6":
        const id = await deletelistTask(tasks.listArr);
        if (id !== "0") {
          const deleteConfirm = await confirm("¿Estás seguro?");
          if (deleteConfirm) {
            tasks.deleteTask(id);
            console.log("Tarea borrada");
          }
        }

        break;
    }

    saveDB(tasks.listArr);

    await pausa();
  } while (opt !== "0");

  //   pausa();
};

main();
