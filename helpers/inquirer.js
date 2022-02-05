const inquirer = require("inquirer");
require("colors");

const menuOptions = [
  {
    type: "list",
    name: "option",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: "Crear tarea",
      },
      {
        value: " 2",
        name: "Listar tareas",
      },
      {
        value: " 3",
        name: "Listar tareas completadas",
      },
      {
        value: "4",
        name: "Listar tareas pendientes",
      },
      {
        value: " 5",
        name: "Completar tarea(s)",
      },
      {
        value: "6",
        name: "Borrar tareas",
      },
      {
        value: "0",
        name: "Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===================".green);
  console.log("Seleccione una opcción".green);
  console.log("===================\n".green);

  const { option } = await inquirer.prompt(menuOptions);
  return option;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];

  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pausa,
};
