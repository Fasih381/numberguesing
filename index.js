#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "Please guess a Number between 1-10: ",
    },
]);
if (answers.GuessedNumber === randomNumber) {
    console.log("You Guessed Correct Number.");
}
else {
    console.log("You Guessed Wrong Number.");
}
console.log("Correct Number is", randomNumber);
