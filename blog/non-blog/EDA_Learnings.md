Student Hand Book:
  https://horoeka-2017-handbook.herokuapp.com/week1
  username: horoeka
  password: academy

  Covered so far:
  Functions, Loops, arrays, Key/Value repairs, objects, Indexes, Git commands, Conditionals, variables.

Github config script
git config credential.helper 'cache --timeout 10800'

Functions to review:
- .find, .map, .reduce

Methods: functions located within part of an object. i.e module.exports = {functionName}

Arrays:
DOT Notation - when name of property is known OR if variable holder is for object name.
Bracket Notation - when an object key OR general place holder for an unknown/dynamic variable.

Conditionals:
- If / Else &  For/In statements
- Switch / Case
--Ternary Operators{
  var isHere = true
  var msg = isHere ? "Bye" ; "Hello"
  --- if isHere si true then return Bye, if false return Hello.
  }

Variables can be:
const - ES5 new type
var - old type
let - new type ES6

Don_1: npmjs.org & node
- repl: entered by typing node into console. repl gives a sandbox area to try things out with.
  node commands:
  - npm init -y: generates JSON Package with all Q's as yes.
  - npm install [name] --save: installs [name] npm module and saves it to the module list.
    adding --dev after save saves the item as a dev tool.
    .gitignore: document stating what to ignore from .git changes.
    - npm run: shows script in json log.
     node modules have no './' at start of the string. ie, var cap = require('capitalize') -this is a JSON package file from npmjs.com
     - use 'module.exports = {exportitem names here}' to export from js files.
    Dev dependencies: not shown in final product, they contain testing libraries, linters and other dev tools and modules not needed to run the script.

    Data Types:
    data can be undefined, number (NaN is a number type), object (null value as well as arrays), boolean or a function.


    Don_2: Data Structures & Nav
    Import external information through "require('file name')" in .js files.
    - Don't put function in '{}' unless it is being called within a page object, ie function tape in file cello.js would be called as cello.tape -> export module object.

    Requirements ----> code
    Toolset:      ----> Code
    - Algorithms
    - - Conditionals
    - - loops/iterators
    - Data Structures
    - - objects
    - - arrays
    - - Primatives (booleans, null, undefined, number and string types)
