// imports/dependancies
const fs = require('fs');
const inquirer = require('inquirer');
const { choices } = require('yargs');
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
        name: "managerName",
        message: "What is the Team Manager's name?  "
    },
    {
        // team manager question: id
        type: "input",
        name: "managerId",
        message: "Please enter the Team Manager's ID:  "
    },
    {
        // team manager question: email
        type: "input",
        name: "managerEmail",
        message: "Please enter the Team Manager's email address:  "
    },
    {
        // team manager question: office number
        type: "input",
        name: "officeNumber",
        message: "Please enter the Team Manager's office number:  "
    }
];

// questions for additional employees
const moreMembers = [{
    // additional team members?
    type: "list",
    name: "otherMembers",
    message: 'Would you like to add additional team members?  If you are finished building your team select: "Finish Team"  ',
    choices: ["Engineer", "Intern", "Finish Team"]
}];

const engineerQuestions = [
    {
        // ask for employee's name
        type: "input",
        name: "engineerName",
        message: "What is the name of this employee?  "
    },
    {
        // employee id
        type: "input",
        name: "engineerId",
        message: "Please enter the employee's ID:  "
    },
    {
        // email
        type: "input",
        name: "engineerEmail",
        message: "Please enter the employee's email address:  "
    },
    {
        // github
        type: "input",
        name: "engineerGitHub",
        message: "Please enter the employee's github username:  "
    }
];

const internQuestions = [
    {
        // ask for employee's name
        type: "input",
        name: "internName",
        message: "What is the name of this intern?  "
    },
    {
        // employee id
        type: "input",
        name: "internId",
        message: "Please enter the intern's ID:  "
    },
    {
        // email
        type: "input",
        name: "internEmail",
        message: "Please enter the intern's email address:  "
    },
    {
        // school
        type: "input",
        name: "inernSchool",
        message: "Please enter the intern's school name:  "
    }
];

function addEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((data) => {
            let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineeGitHub);
            team.push(engineer);

            addMoreMembers();
        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions)
        .then((data) => {
            let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
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
            let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            team.push(manager);

            addMoreMembers();
            console.log(data); 
        })
        .catch(console.log(error));

        // trying to get inquirer to work right / get page to generate

        // .then(pageHTML => { 
        //     return generateHTML(pageHTML); 
        // })
        // .then(console.log(pageHTML))
        // .catch(console.log(error));
};

promptUser();

// if role = Engineer then ask for their github username

// if role is intern then ask for the intern's school

