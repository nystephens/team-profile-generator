// imports/dependancies
const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { generateHTML, writeFile, copyStyle } = require('./src/generator');


let team = [];

// inquirer questions:
const teamManagerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the Team Manager's name?  "
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the Team Manager's ID:  "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the Team Manager's email address:  "
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the Team Manager's office number:  "
    }
];

const moreMembers = [{
    type: "list",
    name: "otherMembers",
    message: 'Would you like to add additional team members?  If you are finished building your team select: "Finish Team"  ',
    choices: ["Engineer", "Intern", "Finish Team"]
}];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this engineer?  "
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's ID:  "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email address:  "
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's github username:  "
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of this intern?  "
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID:  "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email address:  "
    },
    {
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
};

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            let intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);

            addMoreMembers();
        })
};

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
                    let fileContent = generateHTML(team);
                    writeFile(fileContent);
                    copyStyle();
                    break;
                default:
                    console.log('no employees');
            }
        });
};

function promptUser() {

    inquirer
        .prompt(teamManagerQuestions)
        .then(data => {
            let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            team.push(manager);

            addMoreMembers();
        })
        .catch(error => console.log(error));
};


promptUser();

