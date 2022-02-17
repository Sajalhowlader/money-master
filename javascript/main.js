// Incone input an income value
const income = document.getElementById('income')
const totalIncome = income.value;

// house rent input and house rent value
const houseRent = document.getElementById('house-input');
const houseRentValue = houseRent.value;

// food rent input and food rent value
const foodRent = document.getElementById('food-input')
const foodRentValue = foodRent.value

// others rent value and others rent input
const othersRent = document.getElementById('others-input');
const othersRentvalue = othersRent.value;

// total expense 
const expense = document.getElementById('total-expense')

// total blance after total cost
const blance = document.getElementById('total-blance')

// save money input field
const saveInput = document.getElementById('save-input').value
// saveing amount inner text
const saveingAmount = document.getElementById('saveing-amount')

// remaining blance after total cost and saveing
const remaining = document.getElementById('remaining-blance')








document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpense = parseFloat(houseRentValue) + parseFloat(foodRentValue) + parseFloat(othersRentvalue);

    expense.innerText = totalExpense

    const totalBlance = parseFloat(totalIncome) - parseFloat(totalExpense)
    blance.innerText = totalBlance

})

document.getElementById('save-btn').addEventListener('click', function () {


    const saveMoney = (totalIncome * saveInput) / 100;
    saveingAmount.innerText = saveMoney;

    const remainingBlance = parseFloat(blance.innerText) - parseFloat(saveMoney)

    remaining.innerText = remainingBlance



})