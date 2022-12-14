// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseType = license;
  let licenseBadge = '' ;
  if (licenseType == 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } 
  if (licenseType == 'GNU GPLv3') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    
  }
  if (licenseType == 'Apache License 2.0') {
    licenseBadge = '[![License: Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  return licenseBadge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //const licenseLinkb = license;
  let licenseLink = ''
  if (license == 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  };
  if (license == 'GNU GPLv3') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  };
  if (license == 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection =  '';
  if(license == 'MIT'){
    licenseSection ='This application is licensed under MIT license.' 
  }
  if(license == 'GNU GPLv3'){
    licenseSection ='This application is licensed under GNU GPLv3 license.' 
  }

  if (license == 'Apache License 2.0') {
    licenseSection ='This application is licensed under Apache License 2.0 license.' 
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  let licenseDisplayBadge = renderLicenseBadge(data.license);
  let licenseDisplayLink = renderLicenseLink(data.license);
  let licenseDisplaySection = renderLicenseSection(data.license);
  const readmeContent = `
  # ${data.title}
  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Testing](#testing)
  * [Description](#description)
  * [Languages](#languages)
  * [Contributors](#contributors)
  * [Email](#email)
  * [Github](#github)
   
  ### License
  ${licenseDisplayBadge}
  ${licenseDisplayLink}
  ${licenseDisplaySection}
  ### Installation
  ${data.installation}
  ### Testing
  ${data.testing}
  ### Description
  ${data.description}
  ### Languages
  ${data.languages}
  ### Contributors
  ${data.contributorName}
  ### Email
  If you have any questions please reach out by email. 
  [Email](${data.email})
  
  ### Github
  If you'd like to see my other work please visit my github.
  [Github](https://github.com/${data.github})
   `;
  return readmeContent;
}

module.exports = generateMarkdown;
