#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency : any={
    pkr:1,
    lira:0.12,
    dollar:0.0036,
    won:4.93,
    riyal:0.013,
    dirham:0.013,
    indianrs:0.30,
    pound:0.0029,
    euro:0.0034,
}
let enter=await inquirer.prompt([
    {
    type:"list",
    name:"from",
    message:"select currency from : ",
    choices:["pkr","lira","dollar","won","riyal","dirham","indianrs","pound","euro"]
},
{
    type:"list",
    name:"to",
    message:"select currency to convert your currency : ",
    choices:["pkr","lira","dollar","won","riyal","dirham","indianrs","pound","euro"]
},
{
    type:"number",
    name:"amount",
    message:chalk.magentaBright.bold("write any amount you wanna convert : "),
}
]);
let fromamount=currency[enter.from];
let toamount=currency[enter.to];
let amount=enter.amount;
let newamount=amount*(toamount/fromamount);
console.log(chalk.yellow(newamount));
