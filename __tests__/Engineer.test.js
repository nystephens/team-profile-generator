const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

// test for Engineer name, id, and email
test ('checks to see if Engineer name is string', ()=> {
    const engineer = new Engineer('Nate', '564', 'nate@nate.com', 'nystephens');
    
    expect(engineer.name).toBe('Nate');
    expect(engineer.id).toBe('564');
    expect(engineer.email).toBe('nate@nate.com');
});

// test for Engineer getname, getid,  getemail, and getgithub methods 
test ('checks to see if Engineer name is string', ()=> {
    const engineer = new Engineer('Nate', '564', 'nate@nate.com', 'nystephens');
    
    expect(engineer.getName()).toBe('Nate');
    expect(engineer.getId()).toBe('564');
    expect(engineer.getEmail()).toBe('nate@nate.com');

    expect(engineer.getRole()).toBe('Engineer');

    expect(engineer.getGitHub()).toBe('nystephens');
});
