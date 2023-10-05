const inquirer = require("inquirer");
const Oop = require("./utils/oopGen");

const main = () => {
    inquirer.prompt([
        {
            name: "selection",
            message: "enter node JS code",
            type: "input",
        }
    ])
    .then((res) => {
        console.log(res.selection);
    })
    .catch(err => console.log(err));
};

main();