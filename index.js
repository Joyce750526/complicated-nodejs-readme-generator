// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project titleNode?",
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of your project?",
      },
      {
        type: "input",
        name: "installation",
        message: "What is the installation instructions?",
      },
      {
        type: "input",
        name: "usage",
        message: "What is the usage information?",
      },
      {
        type: "input",
        name: "contribution",
        message: "What is the contribution guidelines?",
      },
      {
        type: "input",
        name: "test",
        message: "What is the test instructions?",
      },
      {
        type: "input",
        name: "license",
        message: "What is the license of your project?",
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then((response) => {
      console.log(response);
      writeToFile("ReadMe1.md", generateMarkdown(response));
    }
    );
}

// Function call to initialize app
init();
