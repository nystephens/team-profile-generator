const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

// test for Manager name, id, and email
test ('checks validity of Manager parameters: name, id, email, and office number', ()=> {
    const manager = new Manager('Nate', '564', 'nate@nate.com', '6');
    
    expect(manager.name).toBe('Nate');
    expect(manager.id).toBe('564');
    expect(manager.email).toBe('nate@nate.com');
    expect(manager.officeNumber).toBe('6');
});

// test for Manager getname, getid,  getemail, and getOfficenumber methods 
test ('checks validity of Manager methods: getName, getId, getEmail, getOfficeNumber, and getRole', ()=> {
    const manager = new Manager('Nate', '564', 'nate@nate.com', '6');
    
    expect(manager.getName()).toBe('Nate');
    expect(manager.getId()).toBe('564');
    expect(manager.getEmail()).toBe('nate@nate.com');

    expect(manager.getRole()).toBe('Manager');

    expect(manager.getOfficeNumber()).toBe('6');
});
