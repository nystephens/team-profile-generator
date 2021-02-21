const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

// test for Engineer name, id, email
test ('checks validity of Engineer parameters: name, id, email, and github', ()=> {
    const engineer = new Engineer('Nate', '564', 'nate@nate.com', 'nystephens');
    
    expect(engineer.name).toBe('Nate');
    expect(engineer.id).toBe('564');
    expect(engineer.email).toBe('nate@nate.com');
    expect(engineer.github).toBe('nystephens');

});

// test for Engineer getname, getid,  getemail, and getgithub methods 
test ('checks validity of Engineer methods: getName, getId, getEmail, getGitHub, and getRole', ()=> {
    const engineer = new Engineer('Nate', '564', 'nate@nate.com', 'nystephens');
    
    expect(engineer.getName()).toBe('Nate');
    expect(engineer.getId()).toBe('564');
    expect(engineer.getEmail()).toBe('nate@nate.com');

    expect(engineer.getRole()).toBe('Engineer');

    expect(engineer.getGitHub()).toBe('nystephens');
});
