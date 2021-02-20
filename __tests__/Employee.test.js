const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');


// test for employee name
test ('checks to see if employee has a name of Nate', ()=> {
    const employee = new Employee('Nate', '564', 'nate@nate.com')
    
    expect(employee.name).toBe('Nate');
});

// test for employee id
test ('checks to see if employee has an ID of 564', ()=> {
    const employee = new Employee('Nate', '564', 'nate@nate.com')
    
    expect(employee.id).toBe('564');
});


test('checks to ')




// create tests to verify that the employee constructor and its methods are working.