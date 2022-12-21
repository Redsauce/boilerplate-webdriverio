# WDIO project Boilerplate

[WDIO](https://webdriver.io/) project boilerplate to get started. Inside this project you will find and example test made on the test blog.

## Project Setup

 1. Install [Node](https://nodejs.org/en/) and make sure npm is installed as well.
 2. Run **npm install** to get all the dependencies.
 3. In the root directory of an existing project, run: **npm init wdio .**
 4. To run a configuration wizard that helps you to configure your test suite: **npx wdio**
    Here we are going to see many options to choose (framework, compiler, reporter...).

## Test running 

WDIO has differrent commands to run tests, you can tun a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal.

You will find more detailed information [here](https://webdriver.io/docs/organizingsuites/).

To get started, with the following command you will be able to run all your tests.

    npx wdio run .\wdio.conf.js


**Note**: To run tests with different options, you will have to look at the documentation and modify the command you are using.

Executing that command will run the single example test.

## Project orgaization

If you have a look at the folder organization, you will find the following:

 - **SPECS:** 
Inside this folder, you will have all the tests files (specs), those files only have the testing, they don't include any function. From there, you can call any component and use its corresponding functions to automate.

**Note**: Inside the specs folder you can add a folder to put some files that you may need to share, such as data ones. 

 - **COMPONENTS**:
Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project). 
Inside each component, you will have the file for the functions, and also a file where you will write all the selectors/or locators you need to find the elements.

**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc)
 	
 - **FEATURES**:
 
In this project we doesn't use features, but you can add them. Following the file organization, you will have to create a features folder inside the project. This modification will not change anything, the tests will not look at features

## WDIO configuration

When creating a WDIO project, a file named **wdio.conf.js** will be created. Make sure to have a look at that to see all the options that WDIO offers to custom the test running.