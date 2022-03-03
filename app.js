require("colors");

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, readInput } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/save");
const {Tasks} = require("./models/tasks");

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
    }

    saveDB(tasks.listArr);

    await pausa();
  } while (opt !== "0");

  //   pausa();
};

main();
