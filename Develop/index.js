// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the development application?",
    name: "title",
  },
  {
    type: "list",
    message: "Choose a software license for the application.",
    choices: ['MIT','GNU GPLv3', 'Apache License 2.0'],
    name: "license",
  },
  {
    type: "input",
    message:
      "Provide an application link if available (otherwise accept default 'n/a').",
    default: "n/a",
    name: "link",
  },
  {
    type: "editor",
    message:
      "Provide an application description (should cover application purpose and implementation).",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide usage instructions and/or examples.",
    name: "usage",
  },
  {
    type: "input",
    message: "Provide data on tests used to validate application for release",
    name: "tests",
  },
  {
    type: "input",
    message: "Provide development contributing instructions",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide your GitHub username for the README contact section.",
    name: "githubUser",
  },
  {
    type: "input",
    message: "Provide a contact email as an alternate means of contact.",
    name: "email",
  },];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        }
        console.log("file sucess")
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })

}

// Function call to initialize app
init();
