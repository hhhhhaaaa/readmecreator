function generateMarkdown(data) {
  if(!data.license) {
    var licenseBadge = "Covered by No License";
    var licenseLink = "n/a";
    var licenseData = "";
    console.log("no license");
  } else {
    var licenseBadge = `Covered by ${data.license}`;
    var licenseLink = "[License](##License)"
    var licenseData = `This project is covered by the ${data.license} license.`;
    console.log("license");
  }

  let markdown = `# ${data.title}

  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table Of Contents

  [Installation](##Installation)

  [Usage](##Usage)
  
  ${licenseLink}
  
  [Contributing](##Contributing)
  
  [Tests](##Tests)
  
  [Questions](##Questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ${licenseData}

  ## Contributing

  ${data.contribute}

  ## Tests

  ${data.test}

  ## Questions

  For all questions, please message the author at their Github Profile

  [${data.profile}](https://github.com/${data.profile}/)

  or their Email Address.

  ${data.email}
`;

  return markdown;
}

module.exports = generateMarkdown;
