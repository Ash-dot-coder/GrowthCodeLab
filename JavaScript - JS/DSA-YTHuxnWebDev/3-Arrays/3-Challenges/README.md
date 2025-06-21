# 📚 DSA - Arrays: JavaScript Challenges (CheatSheet + Explanations)

Welcome to the **DSA - Arrays Challenges Repository**. This repository contains a set of **beginner to intermediate level array-based challenges in JavaScript**. Each problem is accompanied by:

- 🔍 Problem Description  
- 💡 Brute Force Approach  
- ⚡ Optimized Approach  
- 🧠 Time and Space Complexity Analysis  
- ✅ Use-cases and Application Scenarios

> This README serves not only as documentation but also as a **DSA cheat sheet** for anyone revising or preparing for interviews.

---

## 📁 Challenge List

### 1️⃣ Reverse String
**🧩 Problem**: Reverse a given string.

- **Brute Force**: Convert string to array, use loop to reverse manually.
- **Optimal**: Use built-in `.split('').reverse().join('')`.
- **Time Complexity**:  
  - Brute Force: `O(n)`  
  - Optimal: `O(n)`
- **Space Complexity**: `O(n)` (new array)
- **Use-case**: Reversing input, UI formatting, palindrome checker helper.

---

### 2️⃣ Palindromes
**🧩 Problem**: Check if a string is a palindrome (same forward & backward).

- **Brute Force**: Reverse the string and compare with the original.
- **Optimal**: Use two-pointer technique.
- **Time Complexity**:  
  - Brute Force: `O(n)`  
  - Two-pointer: `O(n)`
- **Space Complexity**:  
  - Brute Force: `O(n)`  
  - Two-pointer: `O(1)`
- **Use-case**: Text validation, logic games, word puzzles.

---

### 3️⃣ Integer Reversal
**🧩 Problem**: Reverse the digits of an integer, handle negatives.

- **Brute Force**: Convert to string → reverse → parseInt
- **Optimal**: Use modulus & math
- **Time Complexity**: `O(log₁₀(n))`
- **Space Complexity**: `O(1)`
- **Use-case**: Number transformation, coding games, digit analysis.

---

### 4️⃣ Sentence Capitalization
**🧩 Problem**: Capitalize the first letter of each word in a sentence.

- **Brute Force**: Split sentence → capitalize each → join back
- **Time Complexity**: `O(n)`  
- **Space Complexity**: `O(n)`
- **Use-case**: Text editors, formatting engines, auto-correct logic.

---

### 5️⃣ FizzBuzz
**🧩 Problem**: Print numbers from 1 to N with:
- "Fizz" for multiples of 3
- "Buzz" for multiples of 5
- "FizzBuzz" for multiples of both

- **Brute Force / Optimal**: Single loop with conditional checks.
- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(1)`
- **Use-case**: Interview classic, control flow practice, conditional evaluation.

---

### 6️⃣ Max Profit (Stock Buy & Sell)
**🧩 Problem**: Given prices, find max profit by choosing 1 day to buy and 1 day to sell.

- **Brute Force**: Check all pairs → max diff where buy < sell.
- **Optimal**: Single pass keeping min price and tracking max profit.
- **Time Complexity**:  
  - Brute Force: `O(n^2)`  
  - Optimal: `O(n)`
- **Space Complexity**: `O(1)`
- **Use-case**: Financial analysis, stock market simulations, greedy strategies.

---

### 7️⃣ Array Chunking
**🧩 Problem**: Break an array into chunks of given size.

- **Brute Force**: Use `.splice()` repeatedly.
- **Optimal**: Use loop with slice window of `size`.
- **Time Complexity**: `O(n)`
- **Space Complexity**: `O(n)`
- **Use-case**: Pagination, batch processing, visual chunks in UI.

---

### 8️⃣ Two Sum
**🧩 Problem**: Find two numbers in the array that sum to a target value.

- **Brute Force**: Nested loop for all pairs.
- **Optimal**: Use HashMap to store complements.
- **Time Complexity**:  
  - Brute Force: `O(n^2)`  
  - Optimal: `O(n)`
- **Space Complexity**:  
  - Brute Force: `O(1)`  
  - Optimal: `O(n)`
- **Use-case**: E-commerce cart match, game score logic, DSA standard.

---

## 🧠 Extra Notes

- 🔁 **Practice Pattern**: Try to implement both brute and optimal versions yourself.
- ⚙️ **Test Cases**: Add multiple edge cases for robust testing.
- 🧪 **Debug Like a Pro**: Use `console.log()` wisely or debug tools for tracing flow.
- 📊 **DSA Revision Tip**: Focus on patterns, not just solutions.

---

## 🚀 Future Scope

- Add **unit test cases** using Jest or Mocha.
- Add **visual explanations** or flowcharts.
- Link **live editor** or embed code sandbox for each challenge.
- Add **difficulty levels** and tags.

---

## 🧑‍💻 Author

**Ayush Kohre**  
- 🔗 GitHub: [@ash-dot-coder](https://github.com/ash-dot-coder)  
- 📘 Reference: [Huxn Webdev](https://www.youtube.com/@HUXNWEBDEV) 
- 📋 GrowthCodeLab DSA - JS Track

---

## 📌 How to Use

### Clone the repo
```bash
git clone https://github.com/ash-dot-coder/GrowthCodeLab.git
```

### Navigate to Arrays Challenges
```bash
cd JavaScript-JS/DSA-YTHuxnWebDev/3-Arrays/3-Challenges
```

### Run a specific file
```bash
node 8_TwoSum.js
```

---

## 🌟 Star This Repo

If this helped you, please **⭐ star this repo** and share it with friends preparing for interviews or brushing up DSA!

---