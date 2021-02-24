const fs = require('fs');

function generateEmployeeCards(array) {
    array.forEach(element => {
        switch (element.getRole()) {
            case "Manager":
                let managerCard = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span><a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">Office Number: <span class="other-info"> ${element.officeNumber} </span></li>
                </ul>
            </div>
            <br><br>`;

            // should I be pushing this card to array? prolly..
                array.push(managerCard);

                break;

            case "Engineer":
                let engineerCard = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span><a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">Github: <span class="other-info"> <a href="github.com/${element.github}" target="_blank">${element.github}</a></span></li>
                </ul>
            </div>
            <br><br>`;

            array.push(engineerCard);

                break;

            case "Intern":
                let internCard = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span><a href="mailto:${element.email}">${element.email}</a></li>
                    <li class="list-group-item">School : <span class="other-info"> ${element.school}</span></li>
                </ul>
            </div>
            <br><br>`;

            array.push(internCard);

                break;
        }

    });
}

function generateHTML() {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>My Team</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <!-- Header -->
        <header class="jumbotron ">
            <h1 class="display-4 bolder">My Team</h1>
            <p class="lead"></p>
        </header>
    
        <!-- Main Content -->
        <main class="container">
    
            <!-- Team Member Cards -->
            ${generateEmployeeCards(array)}
    
        </main>
    
        <!-- Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
};

// write file to dist
const writeFile = fileContent => {
    return new Promise((resolve, reject) =>{
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error reject promise and send error to the Promise's .catch method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesnt accidentally execute the resolve function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// copy the style sheet from src and add to dist.
function copyStyle() {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Style sheet copied successfully!');
    });
};


module.exports = generateHTML;