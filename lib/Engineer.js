const Employee = require('./Employee');

// Engineer class constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email); 

        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
