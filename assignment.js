/*
1. You are building an e-commerce website. Write a function that calculates the total price of a customer's
order. You're given an array of items, each with a price property. Use the forEach method to iterate through
the array and sum up the prices to get the total order amount.
*/

function calculateTotalPrice(items) {
    let totalPrice = 0;
    
    items.forEach(item => {
        totalPrice += item.price;
    });
    
    return totalPrice;
}
const orderItems = [
    { name: 'Laptop', price: 120000 },
    { name: 'Mobile', price: 70000 },
    { name: 'Mobile Charger', price: 1500 },
    { name: 'Laptop Charger', price: 10500 },
];

const total = calculateTotalPrice(orderItems);
console.log(`The total price is Rs. ${total.toFixed(2)}`);
// // Output: The total price is Rs. 202000.00









/*
2. In this challenge, your task is to create a function that generates a random number and prints it to the
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-
second delay between each number.
*/

function printRandomNumbers() {
    setInterval(() => {
        const randomNumber = Math.random(); // Generates a random number between 0 and 1
        console.log(randomNumber);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Start the function
printRandomNumbers();








/*
3. You are given an array of expense objects representing monthly expenses. Each object has properties,
amount and category. Use the map method to create a new array that includes the calculated tax for each
expense. Assume a tax rate of 10%.
*/

function calculateTaxes(expenses) {
    const taxRate = 0.10; // 10% tax rate

    return expenses.map(expense => {
        const tax = expense.amount * taxRate;
        return {
            ...expense,
            tax: tax // Adding the calculated tax to each expense object
        };
    });
}
const expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' }
];

const expensesWithTaxes = calculateTaxes(expenses);
console.log(expensesWithTaxes);
// output
// [
//     { amount: 100, category: 'Utilities', tax: 10 },
//     { amount: 200, category: 'Groceries', tax: 20 },
//     { amount: 50, category: 'Entertainment', tax: 5 }
// ]












/*
4. Using the same array of expense objects, use the filter method to create a new array that includes only
   the expenses related to the category "Groceries."
*/
function filterGroceries(expenses) {
    return expenses.filter(expense => expense.category === 'Groceries');
}

const monthlyExpenses = [
    { amount: 100, category: 'Groceries' },
    { amount: 200, category: 'Utilities' },
    { amount: 50, category: 'Transportation' },
    { amount: 75, category: 'Groceries' }
];

const groceryExpenses = filterGroceries(monthlyExpenses);
console.log(groceryExpenses);
//output:
// [
//     { amount: 100, category: 'Groceries' },
//     { amount: 75, category: 'Groceries' }
//   ]











/*
5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
expenses.
*/
function calculateTotalExpenses(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

const monthlyExpenses = [
    { amount: 100, category: 'Groceries' },
    { amount: 200, category: 'Utilities' },
    { amount: 50, category: 'Transportation' },
    { amount: 75, category: 'Groceries' }
];

const totalAmount = calculateTotalExpenses(monthlyExpenses);
console.log(`Total amount of all expenses: Rs. ${totalAmount}`);
// output: Total amount of all expenses: Rs. 425











/*
6. You have a list of expenses, each with an amount and a category. Now, create a function named
categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
called categorizedExpenses, where each element represents the category for the corresponding expense in
the original list. Finally, print out the categorizedExpenses array.
*/

function categorizeExpense(amount) {
    return amount > 100 ? "High Expense" : "Low Expense";
}
let expenses = [
    { amount: 100, category: 'Utilities' },
    { amount: 200, category: 'Groceries' },
    { amount: 50, category: 'Entertainment' }
];

const categorizedExpenses = expenses.map(expense => categorizeExpense(expense.amount));

const filteredCategorizedExpenses = categorizedExpenses.filter((_, index) => index !== 3);

console.log(`Categorized Expenses: ${JSON.stringify(filteredCategorizedExpenses)}`);
// // output: Categorized Expenses: ["Low Expense","High Expense","Low Expense"]











/*
7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of
each number. After completing the iteration, display the modified array.
*/

let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((number, index, arr) => {
    arr[index] = number * 2; // Double the value and update the array
});

console.log(originalNumbers);
// output: [ 4, 10, 16, 20, 6 ]









/*
8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a
new array.
*/

const originalNumbers = [2, 5, 8, 10, 3];
const evenNumbers = []; // Array to store even numbers

originalNumbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number); // Add even number to the new array
    }
});

console.log(evenNumbers);

// output:  [ 2, 8, 10 ]

// ******************************************

