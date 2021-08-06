// Simple Interest Formulas and Calculations:
// Use this simple interest calculator to find A, the Final Investment Value, using the simple interest formula: A = P(1 + rt) where P is the Principal amount of money to be invested at an Interest Rate R% per period for t Number of Time Periods.  Where r is in decimal form; r=R/100; r and t are in the same units of time.

// The accrued amount of an investment is the original principal P plus the accumulated simple interest, I = Prt, therefore we have:

// A = P + I = P + (Prt), and finally A = P(1 + rt)

// Calculate Total Amount Accrued (Principal + Interest), solve for A
// A = P(1 + rt)
// Calculate Principal Amount, solve for P
// P = A / (1 + rt)
// Calculate rate of interest in decimal, solve for r
// r = (1/t)(A/P - 1)
// Calculate rate of interest in percent
// R = r * 100
// Calculate time, solve for t
// t = (1/r)(A/P - 1)

// A = P + I = P + (Prt), and finally A = P(1 + rt)

function simpleInterest(amount, rate, time) {
    rate = rate / 100;
    console.log(rate);
    let interest = amount * (1 + (rate * time));
    return interest;
}
let principalAmount = 10000;
let interestRate = 10;
let timePeriod = 5;
let totalAmount = simpleInterest(principalAmount, interestRate, timePeriod);
console.log('Interest of ', principalAmount, ' is :', totalAmount);