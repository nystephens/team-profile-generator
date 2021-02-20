const fs = require('fs');

function generateEmployeeCards(array) {
    array.forEach(element => {
        switch (element.getRole()) {
            case "Manager":
                let card = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span> ${element.email} </li>
                    <li class="list-group-item">Office Number: <span class="other-info"> ${element.officeNumber} </span></li>
                </ul>
            </div>
            <br><br>`

                break;

            case "Engineer":
                let card = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span> ${element.email} </li>
                    <li class="list-group-item">Github: <span class="other-info"> ${element.github} </span></li>
                </ul>
            </div>
            <br><br>`
                break;

            case "Intern":
                let card = `<div class="card">
                <div class="card-header bg-info">
                    ${element.name}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID # : <span class="id-number"> ${element.id} </span></li>
                    <li class="list-group-item">Email : <span class="email"></span> ${element.email} </li>
                    <li class="list-group-item">School : <span class="other-info"> ${element.school}</span></li>
                </ul>
            </div>
            <br><br>`
                break;

            default:
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
            ${generateEmployeeCards}
    
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
        <script src="" async defer></script>
    </body>
    
    </html>
    `
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