# React JS

## Get started
Make sure you have installed the proper extension for creating a React app. Navigate to the "testFile" directory in your CLI, then run the following command (you can choose any app name):

**_npx create-react-app {APP NAME}_** 

Next, you can remove the following files:
* 'app.test.js'
* 'logo.svg'
* 'reportWebVitals.js'
* 'setupTest.js'

In your "src" directory, create a new directory called "components." This directory will help organize all the individual pieces of our front end.

## Review example file
Navigate to the example file and run:

**_"npm i"_**

This will install all the necessary assets (we will cover npm/npx in 02-NODE). Now, run:

**_"npm start"_**

This command will start the application. Once it's rendered, open your default browser to see the app. Take a look through the code, and you'll notice that all the main components are being imported into your app.js file and used just like HTML. The app.js file inserts all of this into the "root" of your index.html.

## How to set it up
Navigate to your test file and navigate to the "components" folder. Create folders for "header" and "footer". Inside the "components" folder, create two additional folders named "header" and "footer.". Create JS and CSS files inside the "header" and "footer" folders. If you have the "Reactjs code snippets" extension installed, you can use the "rsc" shortcut within your JS files to generate boilerplate components. Be sure to rename the functions and exports according to your project's naming conventions. Open your "app.js" file, and import the functions or components you've created in the "header" and "footer" folders. You can use angle brackets to include them in your return value.

## Try it out

## Help and tips
If you have the "Reactjs code snippets" extension installed, you can type "rsc" to generate a boilerplate component.

Be creative, unlike normal js, if you want to change style you could set a style tag in your component and make its value equal to an effect hook.
