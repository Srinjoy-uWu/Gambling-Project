console.log("Hello world");

// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect the bed amount
// 4. Spin the slot machine
// 5. Check if the user won 
// 6. give the user their winnings
// 7. play again 

// function deposit () {
//     return 
// }

// const x = deposit();

const prompt = require ("prompt-sync") (); //we are basically importing this package named prompt-sync, and prompt here is a function

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT  = {
    "A" : 3,
    "B" : 4,
    "C" : 6,
    "D" : 8,
};

const SYMBOLS_VALUES = {
    "A" : 5, 
    "B" : 4, "C" : 3, "D" : 2,
};

// This is the better way to write a function
const deposit = () => {
    while (true) { //we will loop until we get a valid Deposit amount

        const depositAmount = prompt ("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
    
        // parseFloat does: 
        // "17.5" -> 17.5
        // "baby" -> NaN (Not a Number)
        if (isNaN (numberDepositAmount) || numberDepositAmount <=0) {
            console.log ("Invalid Amount, deposit again");
        } else {
            return numberDepositAmount;
        }
    }
};



const getNumberofLines = () => {
    while (true) {
        const lines = prompt ("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat (lines);
        
        if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3)
        {
            console.log("invalid input, try again");
        }
        else {
            return numberOfLines;
        }
    }
};


const getBet = (balance) => {
    while (true) {
        const bet = prompt ("Enter the amount to bet on: ");
        const numberBet = parseFloat (bet);
        
        if (isNaN(numberBet) || numberBet <=0 || numberBet > balance)
        {
            console.log("invalid input, try again");
        }
        else {
            return numberBet;
        }
    }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        console.log(symbol, count);
    }
}

spin();

let balance = deposit(); // we are using let so that we can change the value of the balance later
const numberOfLines = getNumberofLines();
const bet = getBet(balance);