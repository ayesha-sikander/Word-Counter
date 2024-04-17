#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.italic("Welcome to Code-With-Ayesha-Sikander - WordCounter"));
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.green("Enter your Sentence to Count the Word: ")
    }
]);
let words = answers.Sentence.trim().split(" ");
console.log(chalk.redBright(`Your Sentence Word Count is ${words.length}`));
