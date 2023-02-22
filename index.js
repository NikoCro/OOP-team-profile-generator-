const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function generateHTML(manager, list) {
  let managerHTML = `
  <div class="container">
      <h2>${manager.name}</h2>
      <p>Title:Manager</p>
      <p>ID:${manager.id} </p>
      <p>Email:${manager.email}</p>
      <p>Phone:${manager.officenumber}</p>
  </div>`;

  let listHTML = list.map((employee) => {
    return `<div class="container">
      <h2>${employee.name}</h2>
      <p>Title:${employee.getRole()}</p>
      <p>ID:${employee.id} </p>
      <p>Email:${employee.email}</p>
      <p>${employee.getRole() === "Engineer" ? "Github" : "School"}:${
      employee.getRole() === "Engineer" ? employee.github : employee.school
    }</p>
  </div>`;
  });

  return `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css">
      <title>Document</title>
  </head>
  <body>

${managerHTML}
${listHTML.map((x) => {
  return x;
})}
      
  </body>
  </html>`;
}

const mainQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name ?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "officenumber",
    message: "What is your office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name ?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github page?",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name ?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "school",
    message: "What school did you go to?",
  },
];

let manager = {};
let list = [];

function start() {
  inquirer.prompt(mainQuestions).then((answers) => {
    manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    manager = manager;
    addTeamMember();
  });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "others",
        choices: ["engineer", "intern", "nobody"],
        message: "Would you like to add anyone else to your team?",
      },
    ])
    .then((answers) => {
      if (answers.others === "engineer") {
        inquirer.prompt(engineerQuestions).then((answers) => {
          engineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github
          );
          list.push(engineer);
          addTeamMember();
        });
      } else if (answers.others === "intern") {
        inquirer.prompt(internQuestions).then((answers) => {
          intern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school
          );
          list.push(intern);
          addTeamMember();
        });
      } else if (answers.others === "nobody") {
        filloutHTML(manager, list);
      }
    });
}

function filloutHTML(manager, list) {
  const html = generateHTML(manager, list);

  fs.writeFile("dist/index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

start();
