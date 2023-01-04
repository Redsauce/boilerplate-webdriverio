# WDIO with Cucumber project Boilerplate

[WDIO](https://webdriver.io/) project boilerplate to get started. Inside this project you will find and example test made on the test blog.

## Pre-requisites

You need Testingbot credentials to be able tu run some parts of this boilerplate which can be found in your [Account](https://testingbot.com/members/user/edit) page.

You have to set the environment variables **`TB_KEY`** and **`TB_SECRET`**. Alternatively, you can search for them in the code and replace them.

## Project Setup

1. Clone this repository.

2. Install [Node](https://nodejs.org/en/).

3. Run **npm install** to get all the dependencies.
  

## Test running


WDIO has different commands to run tests, you can tun a single test, a set of tests or all tests. By default tests are run in a headless manner meaning no browser window will be opened while running the tests and results will be seen in the terminal.

  

You will find more detailed information [here](https://webdriver.io/docs/organizingsuites/).

  

To get started, with the following command you will be able to run all your tests.

  

	npm run wdio

  

**Note**: This command is specified in *package.json* file, to run tests with different options, you will have to look at the documentation and modify the command you are using.

## Folder organization

If you have a look at the folder organization, you will find the following:

-  **TEST:**

Inside this folder, you will have components, features and step-definitions.

-  **COMPONENTS**:

  
Each part of the web is divided in components, so you can detail each one without mixing them. Inside here usually you will find a folder for each part (examples are shown in the project).

  

Inside each component, you will have the file for the functions, and also a file where you will write all the selectors/or locators you need to find the elements.

**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc).

-  **FEATURES**:

The purpose of a feature is to provide a high-level description of a software feature, and to group related scenarios.

  

For more information about the nomenclature and how they work, click [here](https://cucumber.io/docs/gherkin/reference/#feature).

-  **STEP-DEFINITIONS**:

This folder is for defining the steps of the features that you create previously. This steps are reusable, it means that if a step is repited in two features, you only need to implement it once.

  

**Note**: When code is repeating or you think that you will use it in another function, a component usually named shared is created. There, you will follow the same file organization, but for things that you will share between other components (data, functions, etc).


-  **CONFIGURATION FILES**:


	The project uses more than one configuration file:
		
		- wdio.conf.ts: for the general configuration.

		- wdio.local.conf.ts: for the configuration of the local tests.

		- wdio.testingbot.conf.ts: for the testingbot configuration.


## GITHUB and GITLAB

	
	The projects uses *Github Actions* and *Gitlab CI* to run playwright tests and eslint when an update is made to the main branch of the repository.

	  As mentioned above, we use environment variables to run some tests. For the tests to work on workflows you'll need to configure the environment variables within each git.  

## TESTINGBOT

	This boilerplate also do the tests in Testingbot. This is setted in the testingbot configuration file (wdio.testingbot.conf.ts).
	You can run the tests in testingbot with: 
			npm run testingbot

	To run the test, inside the playwright configuration file you only need to have one project, which has to match the one you are using with the testingbot endpoint.
  

## TEST REPORT

	The project uses *Allure reports* to provide test reporting functionalities, the specification can be found in the playwright config file. When running tests, a folder called allure-results will be created automatically, after that, to actually see the results you will have to run the following commands.

	Generate Allure report:

		npx allure generate ./allure-results --clean

	Open Allure report:

		npx allure open ./allure-report

	**Note**: In the global-setup file we have added a function so that whenever you run 					the tests, the contents of the folder will be removed. If you want to have all the reports to be able to make a comparison, you only have to comment or remove that code as specified.


## ESLint

This project uses ESLint to statically analyze the code and quickly find problems. All the eslint specification can be found in the *.eslintrc.json* file.

Run eslint:

	npm run lint

Quickly fix problems that were found

	npm run lint:fix

**Note**: This commands can be found inside *package.json*, to run lint with different options you have to look at their official [documentation](https://eslint.org/docs/latest/user-guide/command-line-interface). 