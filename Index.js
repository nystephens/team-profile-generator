// Set imports/dependancies
const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');
const generator = require('./src/generator');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateHTML = require('./src/generator');

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
    }
];

const moreMembers = [{
    // additional team members?
    type: "list",
    name: "otherMembers",
    message: 'Would you like to add additional team members?  If you are finished building your team select: "Finish Team"  ',
    choices: ["Engineer", "Intern", "Finish Team"]
}];


// questions for additional employees
const engineerQuestions = [
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
    {
        // github
        type: "input",
        name: "github",
        message: "Please enter the employee's github username:  "
    }
];

const internQuestions = [
    {
        // ask for employee's name
        type: "input",
        name: "name",
        message: "What is the name of this intern?  "
    },
    {
        // employee id
        type: "input",
        name: "id",
        message: "Please enter the intern's ID:  "
    },
    {
        // email
        type: "input",
        name: "email",
        message: "Please enter the intern's email address:  "
    },
    {
        // school
        type: "input",
        name: "school",
        message: "Please enter the intern's school name:  "
    }
];

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            let engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);

            addMoreMembers();
        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);

            addMoreMembers();
        })
}

function addMoreMembers() {
    inquirer
        .prompt(moreMembers)
        .then((data) => {
            switch (data.otherMembers) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finish Team":
                    break;
            }
        });
}

function promptUser() {
    inquirer
        .prompt(teamManagerQuestions)
        .then((data) => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            team.push(manager);

            addMoreMembers();
        })
        .then(pageHTML => { 
            return generateHTML(pageHTML); 
        })
        .then(console.log(pageHTML))
        .catch(console.log(error));


    // .then(data => {
    //     console.log(data); 
    // })
};

promptUser();

// if role = Engineer then ask for their github username

// if role is intern then ask for the intern's school

