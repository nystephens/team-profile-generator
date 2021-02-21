# Team Profile Generator

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description

This app creates a stylish and mobile responsive webpage based on user input.  It runs entirely in the terminal using Node.js.
The user enters information about their team members when they are prompted by inquirer questions. Those answers are converted into JSON data objects that can be used to generate customized info cards for each team member.  Those info cards are then displayed on a webpage entitled "My Team".  This page is intended for use as a quick reference guide for employee information and contacts.

## Installation

1.  Navigate to the GitHub repository ( https://github.com/nystephens/team-profile-generator ) in your web browser and click the green dropdown menu that says “Code”.  Copy the SSH key to your clipboard and then open your terminal.  

2.  In your terminal navigate to the directory you wish to house this repository.   

3.  Type “git clone” into your command line and paste the SSH key you copied from the repository, then hit Enter.  A new folder titled “team-profile-generator” containing the necessary files will appear in your chosen directory.  Due to file size, Node.js and is necessary  modules will not be cloned to your repository.  Please continue reading the instructions to find out how to install these modules on your computer.  

4.  Since this application uses Node.js you will have to install Node and the required Node modules to operate it.  For detailed instructions on how  to install Node.js to your computer please visit: https://www.guru99.com/download-install-node-js.html  

5.  Once Node is successfully installed on your computer, navigate to the Index.js file in your terminal.  For quick access you can right click Index.js in VS Code and click the option “Open in Integrated Terminal”. 

6.  Type the following command to install the proper node modules: “npm install”.  

7.  Check your newly downloaded “node_modules” folder to ensure that the correct packages have been installed.  The only dependency required to run this app that is not included within the general Node module package is “inquirer”.  If this package is not present within your Node modules then run the command “npm install inquirer” to install it.  This app uses jest as its test script.  For testing please see the "Tests" section of this README in order to properly install and run jest. 

8.  Once you have cloned the repository and downloaded Node.js and its necessary modules you are ready to use the Team Profile Generator!  

## Usage

Created using Node.js, this application runs entirely within the command line.  To initiate the application first navigate to the correct directory in your terminal (see Installation Step 5), type the following command, and hit Enter:  “node Index.js”.  When the user runs the application in their terminal they are met with a set of prompts initiated by the inquirer module that ask the user to provide information for each of their team members.  The user is first asked for information about the team leader or manager.  Once manager info has been entered the user is prompted to add additional employees or finish team.  This application contains choices for two types of additonal employees: intern and engineer.  Once all the inquirer prompts have been answered by the user a file titled “index.html” is generated in the “dist” folder.  This file may be copied and pasted into any directory.  The generated HTML file will be available to edit after its initial creation. 

For a demonstration of this application in use please watch this video:
[Demonstration Video]()

## License

![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
[MIT license](https://opensource.org/licenses/MIT)
Copyright <YEAR> <COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Contributing

If you wish to contribute to this project first read the steps listed above for installation and use.  Then you may make changes or develop new features as you see fit.

## Tests

This app uses jest as its test script.  To install jest navigate to the root of your file directory in the terminal and enter the command: "npm install jest".

Once jest is properly installed in your root directory you can run tests on the different modules.  Test suites for each constructor are already in place within the "\_\_tests\_\_" folder.  You can run these tests by using the command: "npm run test".


## Questions
For questions or concerns regarding this project or future collaborations please contact the author via GitHub at:
https://github.com/nystephens
