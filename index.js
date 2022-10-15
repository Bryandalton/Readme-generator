const inquirer = require("inquirer");
const fs = require("fs");
const promts = [
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
    type: "input",
    message: "what license does your project use?",
    name: "license",
  },
  {
    
  },
];

inquirer
  .prompt(promts)
  .then(({ title, description, installation, usage, credits, license }) => {
    let data = `# ${title}
    
    ## Description

        ${description}

    ## Table of Contents
    
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

    ##Installation

        ${installation}

    ##Usage

        ${usage}

    ##Credits

        ${credits}

    ##Liscense

        ${license}`;

    fs.writeFile("README.md", data, (err) => {
      err ? console.error(err) : console.log("successfully created README!");
    });
  });
