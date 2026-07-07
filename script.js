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
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i=0; i<count; i++) {
            symbols.push(symbol); // push is like insert ---> to insert a new element in array
        }
    }
    const reels = [];
    for (let i = 0; i<COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols]; // creating a copy of symbols array
        for (let j=0; j<ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); // generating a random index for selecting a symbol
            // Math.random generates a random number b/w 0 and 1, so we need to get a whole number value so, we use Math.floor
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice (randomIndex, 1); // we are removing random element from reelSymbols
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i=0; i<ROWS; i++) {
        rows.push([]);
        for (let j=0; j<COLS; j++) {
            rows[i].push(reels[j] [i]);

        }
    }
    return rows;
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) { // it is like a pair --> 0, A; 1, B; 2, C; ...
            rowString += symbol; // A then, we add "|" then "B" then "|" then "C" ...
            if (i != row.length - 1) {
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row=0; row<lines; row++) {
        const symbols = rows[row]; // we are taking a row out of each row of the rows
        let allSame = true;
        
        for (const symbol of symbols ) {
            if (symbol != symbols[0]) { // if symbol is same as first symbol of the row
                allSame = false;
                break;
            }
        }

        if (allSame) { // if all are same we win
            winnings += bet*SYMBOLS_VALUES[symbols[0]]; // we win bet * value of the symbol
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposit(); // we are using let so that we can change the value of the balance later

    while (true) {

        console.log ("You have a balance of $" + balance);
        const numberOfLines = getNumberofLines();
        const bet = getBet(balance);

        balance -= bet * numberOfLines;

        const reels = spin();
        const rows = transpose (reels);

        printRows(rows);

        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log ("You won, $"+winnings.toString());

        if (balance <= 0) {
            console.log("You ran out of money! ");
            break;
        }
        else {
            const playAgain = prompt("Do you want to play again (y/n): ");
            if (playAgain != "y") break;
        }
    }
    
}

game();