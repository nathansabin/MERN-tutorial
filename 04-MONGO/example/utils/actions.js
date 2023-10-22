const inquirer = require('inquirer');
const { Test } = require("../models");

class selector {
    async action () {
        const data = await inquirer
            .prompt([
                {
                    name: "act",
                    message: "Choose an action",
                    type: "list",
                    choices: ["create", "remove"]
                },
            ]);
            return data.act;
    }
    async create () {
        const input = await inquirer
            .prompt([
                {
                    "type": "input",
                    "name": "field",
                    "message": "enter a field name..."
                },
                {
                    "type": "input",
                    "name": "data",
                    "message": "enter any data you would like put in that field"
                }
            ]);
        Test.create({field:input.field, data: input.data});
        console.log("data added.");
    } 
    async remove () {
        const fields = await Test.find({});
        const options = [];
        fields.forEach(ele => options.push(ele.field));
    
        const input = await inquirer
            .prompt([
                {
                    "type": "list",
                    "name": "toRemove",
                    "message": "Choose one to remove...",
                    "choices": options
                }
            ]);

            await Test.deleteOne({ field: input.toRemove});
            console.log(`${input.toRemove} was deleted`);
    }
    async main () {
        const act = await this.action();
        act === "create" ?
        await this.create() : await this.remove();
    }

}

module.exports = new selector;