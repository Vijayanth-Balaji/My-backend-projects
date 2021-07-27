const chalk = require('chalk');

var validator = require('validator');

console.log(chalk.whiteBright.bgMagentaBright('Hello world!'));

console.log(chalk.whiteBright.bgCyan('Hello world!'));

console.log(chalk.blackBright.bgRed('Hello world!'));

var val=validator.isBase58("iam vijayanth"); //=> true;

console.log(val);