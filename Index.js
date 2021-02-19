// Set imports/dependancies
const inquirer = require('inquirer');
const { choices } = require('yargs');
const Intern = require('./lib/Intern');
const Manager = requier('./lib/Manager');
const Engineer = requier('./lib/Engineer');

// this module will run the inquirer prompts and then generate the template based on the users input.

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
        type: "list",
        name: "otherMembers",
        message: 'Select one of the following choices to add additional team members.  If no additional team members to add please select: "FINISH TEAM".  ',
        choices: ["Engineer", "Intern", "FINISH TEAM"]
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


// if role = Engineer then ask for their github username

// if role is intern then ask for the intern's school
