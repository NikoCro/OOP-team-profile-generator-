const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");

function generateHTML(Engineer, list) {
  return `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
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
    name: "Github",
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
    list.push(manager);
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
            answers.Github
          );
          list.push(engineer);
          addTeamMember();
        });
      } else if (answers.others === "intern") {
        inquirer.prompt(internQuestions).then((answers) => {
          list.push({ title: "intern", ...answers });
          addTeamMember();
        });
      } else if (answers.others === "nobody") {
        filloutHTML(manager, list);
      }
    });
}

function filloutHTML(manager, list) {
  const html = generateHTML(manager, list);

  fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}

start();
