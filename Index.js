// Set imports/dependancies
const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = requier('./lib/Manager');
const Engineer = requier('./lib/Engineer');

// this module will run the inquirer prompts and then generate the template based on the users input.

// inquirer questions:
const questions = [
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
        message: "Do you have additional team members to add to your team roster?  "
    }
];