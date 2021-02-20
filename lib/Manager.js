const Employee = require('./Employee');

// create a Manager class constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email); 

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

// getRole() returns Manager

module.exports = Manager;