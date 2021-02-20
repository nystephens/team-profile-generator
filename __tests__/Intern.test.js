const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

// test for Intern name, id, and email
test ('checks to see if Intern name is string', ()=> {
    const intern = new Intern('Nate', '564', 'nate@nate.com', 'UCLA');
    
    expect(intern.name).toBe('Nate');
    expect(intern.id).toBe('564');
    expect(intern.email).toBe('nate@nate.com');
});

// test for Intern getname, getid,  getemail, and getgithub methods 
test ('checks to see if Intern name is string', ()=> {
    const intern = new Intern('Nate', '564', 'nate@nate.com', 'UCLA');
    
    expect(intern.getName()).toBe('Nate');
    expect(intern.getId()).toBe('564');
    expect(intern.getEmail()).toBe('nate@nate.com');

    expect(intern.getRole()).toBe('Intern');

    expect(intern.getSchool()).toBe('UCLA');
});
