const inquirer = require('inquirer');
const fs = require("fs-extra");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
    {
    type: "input",
    message: "What is your Project's Title?",
    name: "title",
},
{
    type: "input",
    message: "What is your Project's Description?",
    name: "description",
},
{
    type: "input",
    message: "How do you properly install your Project?",
    name: "install",
},
{
    type: "input",
    message: "What is your Project used for?",
    name: "usage",
},
{
    type: "list",
    message: "Which License would you like to use?",
    name: "license",
    choices: [
        "MIT",
        "GPLv2",
        "Apache",
        "ISC",
        "Other",
        "",
    ],
},
{
    type: "input",
    message: "What are parameters for contributing to your Project?",
    name: "contribute",
},
{
    type: "input",
    message: "How do you properly test your Project?",
    name: "test",
},
{
    type: "input",
    message: "What is your Github Profile Name?",
    name: "profile",
},
{
    type: "input",
    message: "What is your Email Address?",
    name: "email",
},
];

async function writeToFile(fileName, data) {
    const projectName = `${fileName}`
    const filePath = `./${projectName}/`;
    const projectMD = `./${filePath}${projectName}.md`

    await fs.ensureDir(filePath, error => {
        console.log(error);
    })

    await fs.outputFile(projectMD, data, (error) => {
        console.log(error);
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(response => {
        let data = generateMarkdown(response);
        console.log(data);
        writeToFile(response.title, data);
    })
}

// Function call to initialize app
init();
