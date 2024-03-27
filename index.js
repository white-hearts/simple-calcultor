import inquirer from "inquirer";
const ansers = await inquirer.prompt([
    { massage: "please type your fristnumber", type: "number", name: "firstnumber" },
    { massage: "please type your second name", type: "number", name: "secondnumber" },
    { massage: "please select your operator", type: "list", name: "operator",
        choices: ["Additions", "Subtractions", "Multipulications", "Divions"] },
]);
if (ansers.operator === "Additions") {
    console.log("Number is Additions", ansers.firstnumber + ansers.secondnumber);
}
else if (ansers.operator === "Subtractions") {
    console.log("Number is Subtractions", ansers.firstnumber - ansers.secondnumber);
}
else if (ansers.operator === "Multipulications") {
    console.log("Number is Multipulications", ansers.firstnumber * ansers.secondnumber);
}
else if (ansers.operator === "Divions") {
    console.log("Number is Divions", ansers.firstnumber / ansers.secondnumber);
}
else {
    console.log("please select your correcr number");
}
