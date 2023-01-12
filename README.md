# WebdriverIO with Cucumber project Boilerplate

[WebdriverIO](https://webdriver.io/) project boilerplate to get started. Inside this project you will find and example test made on the test blog.

*WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.*


## Pre-requisites

You need Testingbot credentials to be able to run some parts of this boilerplate which can be found in your [Account](https://testingbot.com/members/user/edit) page.

You have to set the environment variables **`TB_KEY`** and **`TB_SECRET`**. Alternatively, you can search for them in the code and replace them.

## Project Setup

1. Clone this repository.

2. Install [Node](https://nodejs.org/en/).

3. Run **npm install** to get all the dependencies.
  

## Test running


WebdriverIO has different commands to run tests, you can run a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while execution and results will be seen in the terminal.

You will find more detailed information [here](https://webdriver.io/docs/organizingsuites/).

To get started, with the following command you will be able to run all your tests.

	npm run wdio

**Note**: This command is specified in *package.json* file, to run tests with different options, you will have to read the documentation and modify the command you are using.

## Folder organization

If you have a look at the folder organization, you will find the following structure:

-  **TEST:**

Inside this folder, you will find components, features and step-definitions.

-  **COMPONENTS**:
  
Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project).

Inside each component, you will have the file for the functions, and also a file where you will write all the selectors/or locators you need to find the elements.

**Note**: When code is repeating or you think that you will use it in another component, a new one usually named *shared* can be created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc).**Warning**: Avoid using this "shared" folder whenever possible, as it is heavily discouraged. Only use it when absolutely necessary!

-  **FEATURES**:

The purpose of a feature is to provide a high-level description of a software feature, and to group related scenarios.

For more information about the nomenclature and how they work, click [here](https://cucumber.io/docs/gherkin/reference/#feature).

-  **STEP-DEFINITIONS**:

This folder is for defining the steps of the features that you create previously. Steps are reusable; if a step is repited in two features, you only need to implement it once.

-  **CONFIGURATION FILES**:


	The project uses more than one configuration file:
		
		- wdio.conf.ts: for the general configuration.

		- wdio.local.conf.ts: for the configuration of the local tests.

		- wdio.testingbot.conf.ts: for the testingbot configuration.


## Github and Gitlab

	
The projects uses *Github Actions* and *Gitlab CI* to run WebdriverIO tests and eslint when an update is made to the main branch of the repository.

As mentioned above, we use environment variables to run some tests. For the tests to work on workflows you'll need to configure the environment variables within each git.  

## Testingbot device farm

This boilerplate can execute test in the Testingbot device farm. This is setted in the testingbot configuration file (wdio.testingbot.conf.ts).
You can run the tests in testingbot with: 
	
	npm run testingbot

To run the test, inside the WebdriverIO configuration file you only need to have one project, which has to match the one you are using with the testingbot endpoint.
  

## Test reporting

The project uses *Allure reports* to provide test reporting functionalities, the specification can be found in the WebdriverIO config file. When running tests, a folder called allure-results will be created automatically. In order to see the results you will have to run the following commands:

Generate Allure report:

	npx allure generate ./allure-results --clean

Open Allure report:

	npx allure open ./allure-report

**Note**: In the global-setup file we have added a function so that whenever you run the tests, the contents of the folder will be removed. If you want to have all the reports to be able to make a comparison, you only have to comment or remove that code as specified.


## ESLint

This project uses ESLint to perform a static code analysis. All the ESLint specification can be found in the *.eslintrc.json* file.

Run eslint:

	npm run lint

Quickly fix problems that were found

	npm run lint:fix

**Note**: This commands can be found inside *package.json*. To run lint with different options you should read the official [documentation](https://eslint.org/docs/latest/user-guide/command-line-interface). 


## We value your feedback!

Is this Redsauce boilerplate helpful for you? [Give it a star](https://github.com/Redsauce/boilerplate-webdriverio)!

Encountered a problem? Request a new feature? Open [an issue](https://github.com/Redsauce/boilerplate-webdriverio/issues/new)
or submit a pull request.

Have any suggestions? Share it with us on Twitter: [@redsauce_sqa](https://twitter.com/redsauce_sqa)

Stay updated with our new content, follow us on [LinkedIn](https://www.linkedin.com/company/redsauce) and subscribe to [Redsauce YouTube channel](https://www.youtube.com/@redsauce-sqa) to stay informed when they're launched!

[![LinkedIn Follow](https://img.shields.io/badge/Follow%20Redsauce-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/redsauce)
[![YouTube Follow](https://img.shields.io/badge/Watch%20Redsauce-FA120F?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@redsauce-sqa)
[![Twitter Follow](https://img.shields.io/badge/Follow%20@redsauce_sqa-703EC8?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/redsauce_sqa)
