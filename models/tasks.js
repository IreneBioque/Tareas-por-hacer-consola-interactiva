const { v4: uuidv4 } = require("uuid");

const { createPromptModule } = require("inquirer");

class Tasks {
    list = {};
    
    constructor() {
        this.list = {};
    }
}

module.exports = Tasks;
