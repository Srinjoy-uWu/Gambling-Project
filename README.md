# Slot Machine - Node.js CLI Game

A terminal-based slot machine game built with JavaScript and Node.js. The game runs entirely in the command line and simulates a real slot machine with deposits, betting lines, spinning reels, and payouts.

---

## About

This project was built as a learning exercise to practice:
- Core JavaScript concepts (functions, loops, conditionals, objects, arrays)
- Node.js basics and working with npm packages
- Arrow functions and modern JS syntax
- Input validation and game loop logic

Built by following: JavaScript Full Course for Beginners
https://www.youtube.com/watch?v=E3XxeE7NF30

---

## How to Play

1. **Deposit** - Enter a starting balance
2. **Choose Lines** - Select how many lines to bet on (1, 2, or 3)
3. **Place Bet** - Enter your bet amount per line (cannot exceed balance)
4. **Spin** - The machine fills a 3x3 grid with random symbols
5. **Result** - Matching symbols on a bet line pay out based on symbol value
6. **Play Again** - Keep spinning until you cash out or run out of money

---

## Slot Machine Configuration

### Symbol Pool
Rarer symbols appear less often and pay out more:

| Symbol | Count in Pool | Payout Multiplier |
|--------|:---:|:---:|
| A      | 3   | 5x  |
| B      | 4   | 4x  |
| C      | 6   | 3x  |
| D      | 8   | 2x  |

### Grid
- 3 rows x 3 columns
- A win occurs when all symbols across a bet line match

---

## Functions

| Function | Description |
|---|---|
| `deposit()` | Prompts and validates the starting deposit amount |
| `getNumberofLines()` | Prompts and validates number of lines to bet (1-3) |
| `getBet(balance)` | Prompts and validates the bet amount per line |
| `spin()` | Builds a weighted symbol pool and randomly fills a 3x3 reel grid |
| `transpose(reels)` | Converts column-based reel data into rows for display |
| `printRows(rows)` | Prints each row in A | B | C format to the console |
| `getWinnings(rows, bet, lines)` | Checks bet lines for matching symbols and calculates payout |
| `game()` | Main game loop - ties everything together |

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **JavaScript (ES6+)** | Core language |
| **prompt-sync** | Synchronous terminal input |

---

## Getting Started

### Prerequisites
- Node.js installed (https://nodejs.org/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Srinjoy-uWu/Gambling-Project.git

# Navigate into the project
cd Gambling-Project

# Install dependencies
npm install
```

### Run the Game

```bash
node script.js
```

---

## Example Session

```
Enter a deposit amount: 100
You have a balance of $100
Enter the number of lines to bet on (1-3): 2
Enter the amount to bet on: 10
D | C | C
D | D | D
D | C | B
You won, $20
Do you want to play again (y/n): y
...
```

---

## Project Structure

```
Gambling-Project/
|-- script.js       # Complete game logic
|-- package.json    # Project config and dependencies
|-- README.md       # You are here
```