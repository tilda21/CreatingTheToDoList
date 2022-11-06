# CreatingTheToDoList

## To install all dependencies of the project
yarn install

## To run each module
yarn start

## To select the module to run
Replace both in the package.json and in the webpack.config.js the main and entry point

Example:
#### package.json
{
  ...
  "main": "./ToDo-List/Final-Style-Touches/index.js",
  ...
 }
 
#### webpack.config.js
module.exports = {
  entry: './index.js', // specifies the main file (the entry) of our application
  ...
}
