const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

// test for employee name, id, and email
test ('checks to see if employee name is string', ()=> {
    const employee = new Employee('Nate', '564', 'nate@nate.com');
    
    expect(employee.name).toBe('Nate');
    expect(employee.id).toBe('564');
    expect(employee.email).toBe('nate@nate.com');
});

// test for employee name, id, and email
test ('checks to see if employee name is string', ()=> {
    const employee = new Employee('Nate', '564', 'nate@nate.com');
    
    expect(employee.getName()).toBe('Nate');
    expect(employee.getId()).toBe('564');
    expect(employee.getEmail()).toBe('nate@nate.com');

    expect(employee.getRole()).toBe('Employee');
});
