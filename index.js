const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = function () {
  `<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      
  </body>
  </html>`;
};

inquirer.prompt([
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
  {
    type: "list",
    name: "others",
    choices: ["engineer", "intern", "nobody"],
    message: "Would you like to add anyone else to your team?",
  },
]);
