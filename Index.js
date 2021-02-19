// Set imports/dependancies
const inquirer = require('inquirer');
const { choices } = require('yargs');
// const Intern = require('./lib/Intern');
// const Manager = requier('./lib/Manager');
// const Engineer = requier('./lib/Engineer');

// this module will run the inquirer prompts and then generate the template based on the users input.

// append newly constructed objects to this array.  A forEach() method or for loop will create a DOM element (card) for each of the objects in this array.
let team = [];

// inquirer questions:

// user is first prompted to enter the information for thier team manager
const teamManagerQuestions = [
    {
        // team manager question: name
        type: "input",
        name: "name",
        message: "What is the Team Manager's name?  "
    },
    {
        // team manager question: id
        type: "input",
        name: "id",
        message: "Please enter the Team Manager's ID:  "
    },
    {
        // team manager question: email
        type: "input",
        name: "email",
        message: "Please enter the Team Manager's email address:  "
    },
    {
        // team manager question: office number
        type: "input",
        name: "officeNumber",
        message: "Please enter the Team Manager's office number:  "
    },
    {
        // additional team members?
        type: "confirm",
        name: "otherMembers",
        message: 'Would you like to add additional team members?  If you are finished building your team select: "N"  ',
    }
];

// questions for additional employees
const employeeQuestions = [
    {
        // ask for the type of employee
        type: "list",
        name: "role",
        message: "What is the role of this employee?  ",
        choices: ["Engineer", "Intern"]
    },
    {
        // ask for employee's name
        type: "input",
        name: "name",
        message: "What is the name of this employee?  "
    },
    {
        // employee id
        type: "input",
        name: "id",
        message: "Please enter the employee's ID:  "
    },
    {
        // email
        type: "input",
        name: "email",
        message: "Please enter the employee's email address:  "
    },
];


function promptUser() {
    inquirer
        .prompt(teamManagerQuestions)
        .then((data) => {
            if (data.otherMembers = true) {
                inquirer.prompt(employeeQuestions);
                return data;
            } else {
                return data;
            }
        })
        .then(console.log(data))
        .catch(console.log(error));


    // .then(data => {
    //     console.log(data); 
    // })
};

promptUser();

// if role = Engineer then ask for their github username

// if role is intern then ask for the intern's school

// copy the style sheet from src and add to dist.
function copyStyle() {
fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Style sheet copied successfully!');
});
};