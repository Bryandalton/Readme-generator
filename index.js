const inquirer = require("inquirer");
const fs = require("fs");
const questions = [
  {
    type: "input",
    message: "what is your project's title?",
    name: "title",
  },
  {
    type: "input",
    message: "provide a short description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use:",
    name: "usage",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles:",
    name: "credits",
  },
  {
    type: "list",
    message: "what license does your project use?",
    choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None'],
    name: "license",
  },
  {
    type: 'input',
    message: 'What are the contributor guidelines?',
    name:'contribute'
  },
  {
    type: 'input',
    message: 'write test for your application:',
    name: 'tests'
  },
];
inquirer
  .prompt(questions)
  .then(({ title, description, installation, usage, credits, license, contribute, tests, email, github}) => {
    let data = `
# ${title}

![Github License](https://img.shields.io/badge/license-${license}-blue.svg)

## Description

  ${description}

## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

  ${installation}

## Usage

  ${usage}

## Credits

  ${credits}
  ${email}
  ${github}

## License

  ${license}
        
## How to contribute
    
  ${contribute}
        
## Tests
        
  ${tests}`;

    fs.writeFile("README.md", data, (err) => {
      err ? console.error(err) : console.log("successfully created README!");
    });
  });
