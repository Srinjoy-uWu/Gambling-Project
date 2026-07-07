# ?? Slot Machine — Node.js CLI Game

A terminal-based slot machine game built with JavaScript and Node.js, following along with a full tutorial. The game runs entirely in the command line and simulates a real slot machine with deposits, betting lines, spinning reels, and payouts.

---

## ?? About

This project is being built step-by-step as a learning exercise to practice:
- Core JavaScript concepts (functions, loops, conditionals, objects, arrays)
- Node.js basics and working with npm packages
- Arrow functions and modern JS syntax
- Input validation and game loop logic

---

## ?? Planned Game Flow

1. **Deposit** — Player enters a starting balance
2. **Choose Lines** — Player selects how many lines to bet on (1–3)
3. **Place Bet** — Player bets an amount per line (cannot exceed balance)
4. **Spin** — Slot machine randomly fills a 3×3 grid with symbols
5. **Check Win** — Check each bet line for matching symbols
6. **Payout** — Award winnings based on symbol value × bet
7. **Play Again** — Loop until the player runs out of money or quits

---

## ?? Slot Machine Configuration

### Symbol Pool
Rarer symbols appear less often and pay out more:

| Symbol | Count in Pool | Payout Multiplier |
|--------|:---:|:---:|
| A      | 3   | 5×  |
| B      | 4   | 4×  |
| C      | 6   | 3×  |
| D      | 8   | 2×  |

### Grid
- **3 rows × 3 columns**
- A win occurs when all symbols on a bet line match

---

## ?? What Has Been Built So Far

### ? `deposit()`
Prompts the user to enter a deposit amount. Validates that the input is a positive number using `parseFloat` and `isNaN`. Loops until a valid amount is entered.

### ? `getNumberofLines()`
Prompts the user to choose how many lines to bet on (between 1 and 3). Validates the range and loops on invalid input.

### ? `getBet(balance)`
Prompts the user for a bet amount per line. Validates that it is a positive number and does not exceed the current balance.

### ?? `spin()` *(in progress)*
Will randomly populate a 3×3 reel grid by:
1. Building a flat array of all symbols (weighted by count)
2. Randomly picking symbols for each column without replacement

---

## ??? Tech Stack

| Tool | Purpose |
|---|---|
| **Node.js** | Runtime environment |
| **JavaScript (ES6+)** | Core language |
| **[prompt-sync](https://www.npmjs.com/package/prompt-sync)** | Synchronous terminal input |

---

## ?? Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed

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

## ?? Project Structure

```
Gambling-Project/
+-- script.js       # Main game logic
+-- package.json    # Project config and dependencies
+-- README.md       # You are here
```

---

## ?? Learning Reference

Built by following: [JavaScript Full Course for Beginners](https://www.youtube.com/watch?v=E3XxeE7NF30)

---

## ?? Coming Soon

- [ ] Complete the `spin()` function
- [ ] Implement win-checking logic
- [ ] Calculate and display winnings
- [ ] Full game loop with play-again prompt
