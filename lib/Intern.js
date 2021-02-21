const Employee = require('./Employee');

// Intern class constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email); 

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;




// getSchool()  returns a string School Name which is the value for a school property


// getRole() returns Intern