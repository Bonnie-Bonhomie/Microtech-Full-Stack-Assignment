
//Declaration and initialization
const studentName = "Alaba Akinyemi";
let webCurrency = "$";

/**
 * I use let to declare the variables because the values of the variables will change as the program runs.
 */
let weeklyAllowance = 5000;
let transportCost = 1200;
let foodCost = 2000;
let airtimeCost = 500;
let snacksCost = 300;
let bonusWeek = 1000;
let bookCost = 1500;


///Declaration
let totalExpense, remainingBalance, dailyFoodCost, monthlyAllowance;
let foodReminant;

//Calculating the total expense in aweek
totalExpense = transportCost + foodCost + airtimeCost;
console.log(totalExpense);

//Calculating the remaining balance a week
remainingBalance = weeklyAllowance- totalExpense;
//Daily food Cost
foodReminant = foodCost % 7;
dailyFoodCost = (foodCost - foodReminant) / 7;


monthlyAllowance = weeklyAllowance * 4;

remainingBalance += 1000;
// console.log(remainingBalance);
//Subracting Sancks money
remainingBalance -= 300;

//Bonus week balance 
remainingBalance *= 2;

//Amount giving to friend

remainingBalance /= 2;

console.log("Remaining balance after giving friend half or her money is" + remainingBalance);

console.log("The student's name is " + studentName + " and her weekly allowance is " + weeklyAllowance + " and her total expense is " + totalExpense + " and her balance is " + remainingBalance);

console.log("The student's daily food cost is " + dailyFoodCost + " and her monthly allowance is " + monthlyAllowance);


//Buy a new book from the remaining balance

remainingBalance -= bookCost;

 
if(remainingBalance > 1000){
    console.log("Your balance is good, you can spend more money");
}else if(remainingBalance < 1000 && remainingBalance > 0){
        console.warn("Warning! Your balance is low, you need to save more money");
}else{
    console.error("Error! Your have overspent, you need to save more money");
}

//Received money from my Dad

remainingBalance **= 2;
console.log("The student's balance after receiving money from her Dad is " + remainingBalance);
/**
 * 
 * After Adding 1000 to the weekly Allowance the money that has low after 
 * the student buy books rise back to a good balance. 
 * The student can now spend more money and also save more money for the future.
 */


document.getElementById("bal").innerHTML = webCurrency + remainingBalance;