// wait until content is parsed then call this function
document.addEventListener("DOMContentLoaded", (event) => {
    // our wage function
    askWages();
})

function askWages() {
    // users hourly wage
    const hourlyWage = Number(prompt("What is your hourly wage?"));
    // users weekly work hours
    let hoursWorked;
    // users weekly gross pay
    let grossPay;
    // users weekly tax amount (based on previous numbers)
    let taxes;
    // tax amount
    const taxAmount = 0.10;
    // users net pay
    let netPay;

    // confirm current wage
    prompt(`You entered $${hourlyWage} per hour. Is that correct?\nClick OK for yes\nClick cancel for no`);

    // Hours per week question
    hoursWorked = Number(prompt("How many hours did you work this week?"));

    // confirm hours per week
    prompt(`You entered ${hoursWorked} hours. Is that correct?\nClick OK for yes\nClick cancel for no`);

    // gross pay calculation
    grossPay = hourlyWage * hoursWorked;
    // tax calculation
    taxes = grossPay * taxAmount;
    // take home pay calculation
    netPay = grossPay - taxes;


    // all our console logs
    console.log(`Hourly wage: $${hourlyWage}\nHours worked: ${hoursWorked}\nGross pay: $${grossPay} per week\nTaxes per week: $${taxes.toFixed(2)}\nTake home per week: $${netPay.toFixed(2)}`);

    // overtime check
    if (hoursWorked > 40) {
        console.log("You worked overtime this week!");
    }
    else if (hoursWorked === 40) {
        console.log("You worked exactly 40 hours");
    }
    else if (hoursWorked < 40) {
        console.log("No overtime this week");
    }
    else {
        console.log("Error: overtime determination");
    }

    // great paycheck check
    if (netPay > 800) {
        console.log("Great paycheck this week!");
    }
    else if (netPay <= 800) {
        console.log("Keep working toward a bigger paycheck!");
    }

}