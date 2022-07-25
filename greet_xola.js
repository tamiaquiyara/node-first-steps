// var chalk = require('chalk');
// //import the greet module that is in the current folder
// var greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)

import chalk from 'chalk';
// import the greet module that is in thecurrent folder
import greet from './greet.js'
import figlet from 'figlet';

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)



figlet(greet('Xola'), function(err, data) {

    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.bgGreen.black(data));
});