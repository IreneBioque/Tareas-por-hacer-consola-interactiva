require("colors");

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, readInput } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");

const main = async () => {
  console.log("Hola mundo");
  let opt = "";
  const tareas = new Tasks();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Descripción: ");
        tareas.doTask(desc);
        break;
      case "2":
        console.log(tareas.listArr);
        break;
    }

    await pausa();
  } while (opt !== "0");

  //   pausa();
};

main();
