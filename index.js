// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to initialize app
// TODO: Create an array of questions for user input
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project title?",
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
        message: "What is the testing instructions?",
      },
      {
        type: "list",
        name: "license",
        message: "What is the license of your project?",
        choices: ["MIT", "APACHE 2.0", "BSD 3", "None"],
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
      writeToFile("/dist/ReadMe1.md", generateMarkdown(response));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Function call to initialize app
init();
