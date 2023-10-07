const inquirer = require("inquirer");
const Oop = require("./utils/oopGen");

const main = () => {
    inquirer.prompt([
        {
            name: "fileName",
            message: "Enter your file name",
            type: "input",
        },
        {
            name: "code",
            message: "enter node JS code",
            type: "input",
        }
    ])
    .then((res) => {
        Oop.mkdir();
        Oop.touchOop(res.fileName, res.code);
    })
    .catch(err => console.log(err));
};

main();