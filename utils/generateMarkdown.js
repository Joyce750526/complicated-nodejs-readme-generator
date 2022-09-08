// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License:MIT](https://img.shields.io/badge/License-MIT-green)(https://opensource.org/licenses/MIT)";
  } else if (license === "APACHE 2.0") {
    return "[![License:Apache](https://img.shields.io/badge/License-Apache-orange)(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD 3") {
    return "[![License:BSD 3](https://img.shields.io/badge/License-BSD__3-brightgreen)(https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "APACHE 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (license !== "None") {
//     return `This project is licensed under the ${license} license.`;
//   } else {
//     return "";
//   };

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
  ${renderLicenseBadge(data.license)}


## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.installation} 

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License 
${renderLicenseSection(data.license)} 

## Github
${data.github}

## Questions
If you have any questions about this projects, please contact me! <br />
Email: [${data.email}](mailto:${data.email})
Github: [${data.github}](https://github.com/${data.github}) <br />

`;
};

  // use for importing Markdown in index
  module.exports = generateMarkdown;
