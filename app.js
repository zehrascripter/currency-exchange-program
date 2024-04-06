#! /usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.italic.bold(`

*************************************************************************
                   Welcome to currency exchange machine                  
*************************************************************************

`));
let usd = 277.90;
let gbp = 351.01;
let eur = 301.12;
while (true) {
    const play = await inquirer.prompt([
        {
            type: 'list',
            name: 'status',
            message: 'Do you want to exchange money?',
            choices: ['yes', 'no']
        }
    ]);
    if (play.status === 'yes') {
        let selectCurrency = await inquirer.prompt([
            {
                type: 'list',
                name: 'currency',
                message: 'Please select currency for exchange your currency',
                choices: ['US Doller', 'Pound', 'Euro']
            },
            {
                name: 'amount',
                type: 'number',
                message: 'Please enter PKR amount for convert'
            }
        ]);
        if (selectCurrency.currency === 'US Doller') {
            console.log(chalk.bold.magentaBright.italic(`This is your converted amount in Dollers ($) :${selectCurrency.amount / usd}`));
        }
        else if (selectCurrency.currency === 'Pound') {
            console.log(chalk.bold.magenta.italic(`This is your converted amount in Pounds (£) :${selectCurrency.amount / gbp}`));
        }
        else {
            console.log(chalk.bold.blue.italic(`This is your converted amount in Euros  (€) :${selectCurrency.amount / eur}`));
        }
        ;
    }
    else {
        console.log(chalk.yellow.italic.bold(`

***********************************************************************
                   Thanks for using currency exchange                  
***********************************************************************`));
        break;
    }
}
