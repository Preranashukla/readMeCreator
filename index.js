// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'name',
  message: 'whats your name'
},
{
  type: 'input',
  name: 'github',
  message: 'whats your github account'
},
{
  type: 'input',
  name: 'email',
  message: 'whats your email address'
},
{
  type: 'input',
  name: 'title',
  message: 'what is the title of your project'
},
{
  type: 'input',
  name: 'description',
  message: 'add a brief description of your project',
},
{
  type: 'checkbox',
  name: 'languages',
  message: 'what languages did you use for this project',
  choices: ['js', 'html', 'css', 'es6', 'node', 'jquery', 'bootstrap']
},
{
  type: 'input',
  name: 'link',
  message: 'enter the url to your project'
},
{
  type: 'input',
  name: 'contributorName',
  message: 'please add any contributors'
},
{
  type: 'input',
  name: 'installation',
  message: 'how do you install your app',
},
{
  type: 'list',
  name: 'license',
  message: 'what license do you choose for this project',
  choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0']
},
{
  type: 'input',
  name: 'testing',
  message: 'how do you test your app',
},
];

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
