const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

// test for Manager name, id, and email
test ('checks to see if Manager name is string', ()=> {
    const manager = new Manager('Nate', '564', 'nate@nate.com', '6');
    
    expect(manager.name).toBe('Nate');
    expect(manager.id).toBe('564');
    expect(manager.email).toBe('nate@nate.com');
});

// test for Manager getname, getid,  getemail, and getgithub methods 
test ('checks to see if Manager name is string', ()=> {
    const manager = new Manager('Nate', '564', 'nate@nate.com', '6');
    
    expect(manager.getName()).toBe('Nate');
    expect(manager.getId()).toBe('564');
    expect(manager.getEmail()).toBe('nate@nate.com');

    expect(manager.getRole()).toBe('Manager');

    expect(manager.getOfficeNumber()).toBe('6');
});
