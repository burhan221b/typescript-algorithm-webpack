# ![Burhan221b Logo](https://drive.google.com/uc?export=view&id=1ShYHkaVxVpVDLmUVV8YhigZ-Kju3hJry) TypeScript Algorithm Webpack
### Created by Burhan 
#### July 26, 2020
##### Version 1.0.0
---

## This is a program designed to run algorithms using command line written in TypeScript and Webpack 

### Steps to create your own in TypeScript project using Webpack
#### **For MacOS**
1. Open Terminal and using "cd" go to directory to place your project i.e. Desktop, or Documents
1. Create a new empty folder for the project.
```bash
mkdir ProjectName
```
3. Enter the folder directory. 
```bash
cd ProjectName
```
4. Make sure you have TypeScript installed globally 
```bash
npm install -g typescript
```
5. The **tsconfig.json** file will be created using the code below, this will help us customize TypeScript with its rules.
```bash
tsc --init
```
6. In the **tsconfig.json** file, change the target to “es6” and module to “es2015”.
```json
    "target": "es6",    /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "es2015", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
``` 
7. We create a **package.json** file which will tell the project what packages and scripts are needed. We also need this to install webpack and loaders. We use the npm cli
```bash
npm init 
```
8. This is to help us with version control. 
```bash
git init
```
9. Install the webpack, webpack-cli, and the ts loader as developer dependencies. 
```bash
npm install --save-dev webpack webpack-cli ts-loader
```
10. Inside the root directory, create a folder called "src" and inside "src" create a new file called "index.ts" with a sample code i.e.:
```javascript
console.log("Hello World");
```
11. Create a **webpack.config.js** file in root directory of the project. This file is the configuration for telling webpack how to handle different files of a program.
```bash
touch webpack.config.js
```
12. In **webpack.config.js** file, add the following block of code as a template to start which already includes ts-loader:
```javascript
const webpack = require('webpack');
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public")
    },
    //For loader options: webpack >= v2.0.0 no longer allows custom properties in configuration.
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                modules: {
                    rules: [
                        {
                            test: /\.ts$/,
                            use: "ts-loader",
                            include: path.resolve(__dirname, "src")
                        }
                    ]
                }
            }
        })
    ]
}
```
13. In **package.json**, create two new scripts called "build" which will only compile the index.ts to index.js under the new folder public and "start" will do the same as build, but also run the newly created index.js with nodeJS.
```json
  "scripts": {
    "build": "webpack",
    "start": "webpack && node ./public",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
``` 
14. To remove any folders and files that shouldn’t be saved in git for memory performance and privacy reasons. 
```bash
touch .gitignore
```
15. We don't want node_modules (as this is installed within client local computer) and the public (or whatever you name the build folder) in the git as this is dynamically created. Add “node_modules” and "public" into **.gitignore** file
```
node_modules
public
```
16. To run the program and see the results in the command line terminal, run this code:
```bash
npm run start
```
17. Now you can see the program dynamically created the "public" folder which contains the bundled up JavaScript file **index.js**. This is our compiled TypeScript from index.ts

##### References used to create this program
##### * [Colt Steele](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)
##### * [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC)
##### * [Traversy Media](http://www.traversymedia.com)

