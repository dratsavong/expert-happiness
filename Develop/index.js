// TODO: Include packages needed for this application

//packages 
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a decription of your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Please provide installation instructions.",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter a installation instructions to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide information on how to use this project to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contributors.",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide contribution information to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions to continue.');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: 'Please select a license for your project',
        choices: [
            "None",
            "Apache License 2.0",
            "MIT license" ],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please select a license to continue.');
                    return false;
                }
            }
    },
    {
        type: "input",
        name: "username",
        message: "Please provide your Github username.",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username to continue.');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email to continue.');
                return false;
            }
        }
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data){
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('success')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'README.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init()
