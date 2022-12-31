// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  }
  if (license === "MIT license") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license == none) {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   if (license !== 'no license') {
    return ''
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)
  The application is covered under the following license:
  ${renderLicenseLink(license)}
   `;
  } else {
    return ' ';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
    ${data.description}
    ${data.renderLicenseBadge}

  ## Table of Contents 
  * [description](#description)
  * [installation](#install)
  * [usage](#usage)
  * [contribution](#contribution)
  * [test](#test)
  * [license](#license)

  ## Description 
  ${data.description}

  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## Contributions
  ${data.contribution}
  
  ## Test Instructions
  ${data.test}

  ## license 
  ${data.license}

  ## Contact Info 
  *Github Username: ${data.username}
  *Github Email: ${data.email}

`;
}

module.exports = generateMarkdown;
