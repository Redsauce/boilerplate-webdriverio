# WDIO with Cucumber project Boilerplate

[WDIO](https://webdriver.io/) project boilerplate to get started. Inside this project you will find and example test made on the test blog.

## Project Setup

 1. Install [Node](https://nodejs.org/en/) and make sure npm is installed as well.
 2. Run **npm install** to get all the dependencies.
 3. In the root directory of an existing project, run: **npm init wdio .**
 4. To run a configuration wizard that helps you to configure your test suite: **npx wdio**
    Here we are going to see many options to choose (framework, compiler, reporter...).
    In this case, we need to select this options:
        - The framework we want to use is CUCUMBER.
        - The compiler is TYPESCRIPT.
        - The reporters are SPEC and ALLURE.
        - The services we want are CHROMEDRIVER, GECKODRIVER, EDGEDRIVER and SAFARIDRIVER.

## Test running 

WDIO has different commands to run tests, you can tun a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal.

You will find more detailed information [here](https://webdriver.io/docs/organizingsuites/).

To get started, with the following command you will be able to run all your tests.

    npx wdio run .\wdio.conf.js


**Note**: To run tests with different options, you will have to look at the documentation and modify the command you are using.

Executing that command will run the single example test.

## Project orgaization

If you have a look at the folder organization, you will find the following:

 - **TEST:** 
Inside this folder, you will have components, features and step-definitions.

    - **COMPONENTS**:

        Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project). 
        Inside each component, you will have the file for the functions, and also a file where you will write all the selectors/or locators you need to find the elements.

    - **FEATURES**:
        
        The purpose of a feature is to provide a high-level description of a software feature, and to group related scenarios.
        For more information about the nomenclature and how they work, visit: https://cucumber.io/docs/gherkin/reference/#feature

    - **STEP-DEFINITIONS**:

        This folder is for defining the steps of the features that you create previously. This steps are reusable, it means that if a step is repited in two features, you only need to implement it once.



**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc).

 - **GITHUB:** 

    Inside the Github folder, we can find a .yml for the Github actions. 
    What is it for?
    GitHub Actions makes it easy to automate all your software workflows. Build, test and deploy your code directly from GitHub.
    In this example it contains two tasks, both for when you push to the repository.
    The first task runs Lint, a software tool that checks your code for bugs that may affect it.
    The second task runs testing with WebdriverIO.
    As you can see, it uses environment variables, now we will explain how to set them.
        
        - To set environment variables you need to go to your Github repository --> Settings --> Environments --> New environment.
        Here you would put a name to the environment and then add the environment variables that you need.

    Now if you do a 'push' to this repository, in 'Actions' you would see executions in the pipeline.

 - **GITLAB:** 

    We can see a .yml for the Gitlab actions '.gitlab-ci.yml'.
    What is it for?
    GitLab Actions makes it easy to automate all your software workflows. Build, test and deploy your code directly from GitLab.    
    We have two tasks, both for when you push to the repository.
    The first task runs Lint, a software tool that checks your code for bugs that may affect it.
    The second task runs testing with WebdriverIO.
    As you can see, it uses environment variables, now we will explain how to set them.

        - To set environment variables you need to go to your Github repository --> Settings --> CI/CD --> Variables.
        Here you would add the environment variables.

    Now if you do a 'push' to this repository, in 'CI/CD --> Pipelines' you would see executions.

- **.env:**

    Here we can set the environment variables.
    In all the files that we want to use environment variables, we need to import 'dotenv' like in the example component (navigate.ts).
    Also install dotenv in the root:
        npm i dotenv

- **.gitignore:**

    In this file we will add all the files that we do not want to be uploaded to Git.

- **Testingbot:**

    This boilerplate also do the tests in Testingbot. This is setted in the config file.
    Over 'services' there are two environment variables to link the project with testingbot.

- **Launcher:**

    TODO

- **ALLURE:**

    Allure is a reporting framework that represents brief reports in a clear form.
    First you need to install the framework: npm i allure-commandline
    Then, after the execution of the tests:

        Generate the report:
        npx allure generate ./allure-results --clean

        Open the report:
        npx allure open allure-report


## WDIO configuration

When creating a WDIO project, a file named **wdio.conf.js** will be created. Make sure to have a look at that to see all the options that WDIO offers to custom the test running.