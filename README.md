# ![Burhan221b Logo](https://drive.google.com/uc?export=view&id=1ShYHkaVxVpVDLmUVV8YhigZ-Kju3hJry) TypeScript Algorithm Webpack
### Created by Burhan 
#### July 26, 2020
##### Version 1.0.0
---

## This is a program designed to run algorithms using command line written in TypeScript and Webpack 

### The branches:
1. **master** - will contain files from all the branches. No specific information will be written on master branch.
2. **starter** - will contain only the starter files, its the boilerplate for this project. Any updates on README.md, .gitignore, and common files will he placed here.
3. **session_#** - each session will have its own branch. These branches will be different algorithm groups, only to be merged by master branch.

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
5. Due to some minor bugs and set ups, it's a good idea to install typescript to the local project as well to help reduce future issues.
```bash
npm install typescript --save-dev
```
6. The **tsconfig.json** file will be created using the code below, this will help us customize TypeScript with its rules.
```bash
tsc --init
```
7. In the **tsconfig.json** file, change the target to “esnext” and module to “es2015” (or whatever config you'd like).
```json
    "target": "esnext",    /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "es2015", /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
``` 
8. We create a **package.json** file which will tell the project what packages and scripts are needed. We also need this to install webpack and loaders. We use the npm cli
```bash
npm init 
```
9. This is to help us with version control. 
```bash
git init
```
10. Install the webpack, webpack-cli, and the ts loader as developer dependencies. 
```bash
npm install --save-dev webpack webpack-cli ts-loader
```
11. Inside the root directory, create a folder called "src" and inside "src" create a new file called "index.ts" with a sample code i.e.:
```javascript
console.log("Hello World");
```
12. Create a **webpack.config.js** file in root directory of the project. This file is the configuration for telling webpack how to handle different files of a program.
```bash
touch webpack.config.js
```
13. In **webpack.config.js** file, add the following block of code as a template to start which already includes ts-loader:
```javascript
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
}
```
14. In **package.json**, create two new scripts called "build" which will only compile the index.ts to index.js under the new folder public and "start" will do the same as build, but also run the newly created index.js with nodeJS.
```json
  "scripts": {
    "build": "webpack",
    "start": "webpack && node ./public",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
``` 
15. To remove any folders and files that shouldn’t be saved in git for memory performance and privacy reasons. 
```bash
touch .gitignore
```
16. We don't want node_modules (as this is installed within client local computer) and the public (or whatever you name the build folder) in the git as this is dynamically created. Add “node_modules” and "public" into **.gitignore** file
```
node_modules
public
```
17. To run the program and see the results in the command line terminal, run this code:
```bash
npm run start
```
18. Now you can see the program dynamically created the "public" folder which contains the bundled up JavaScript file **index.js**. This is our compiled TypeScript from index.ts

##### References used to create this program
##### * [Colt Steele](https://www.youtube.com/playlist?list=PLblA84xge2_zwxh3XJqy6UVxS60YdusY8)
##### * [The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC)
##### * [Traversy Media](http://www.traversymedia.com)

