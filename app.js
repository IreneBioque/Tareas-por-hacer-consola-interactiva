require('colors');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
  console.log('Hola mundo');

  let opt = '';

  do {
    // opt = await inquirerMenu();
    // console.log({ opt });
    const tarea = new Task('Comer')
    const tareas = new Tasks;
    console.log(tarea)
    if (opt !== '0') await pausa();
  } while (opt !== '0');

  //   pausa();
};

main();
