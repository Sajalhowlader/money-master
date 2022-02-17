// Incone input an income value
const income = document.getElementById('income')

// house rent input and house rent value
const houseRent = document.getElementById('house-input');

// food rent input and food rent value
const foodRent = document.getElementById('food-input')

// others rent value and others rent input
const othersRent = document.getElementById('others-input');

// total expense 
const expense = document.getElementById('total-expense')

// total blance after total cost
const blance = document.getElementById('total-blance')

// save money input field
const saveInput = document.getElementById('save-input')

// saveing amount inner text
const saveingAmount = document.getElementById('saveing-amount')

// remaining blance after total cost and saveing
const remaining = document.getElementById('remaining-blance')


document.getElementById('calculate-btn').addEventListener('click', function () {

    if (income.value > 0 && houseRent.value >= 0 && foodRent.value >= 0 && othersRent.value >= 0) {
        const totalExpense = parseFloat(houseRent.value) + parseFloat(foodRent.value) + parseFloat(othersRent.value);

        expense.innerText = totalExpense

        const totalBlance = parseFloat(income.value) - parseFloat(totalExpense)

        blance.innerText = totalBlance
    } else {
        document.getElementById('denger').style.display = "block"
    }


})

document.getElementById('save-btn').addEventListener('click', function () {
    const totalExpense = parseFloat(houseRent.value) + parseFloat(foodRent.value) + parseFloat(othersRent.value);
    const totalBlance = parseFloat(income.value) - parseFloat(totalExpense)
    console.log(totalBlance)

    if (totalBlance > saveingAmount.innerText) {

        const saveMoney = (income.value * saveInput.value) / 100;
        saveingAmount.innerText = saveMoney;

        const remainingBlance = parseFloat(blance.innerText) - parseFloat(saveMoney)

        remaining.innerText = remainingBlance

    } else {

    }


})

// function clickBtn(clickId) {
//     document.getElementById().addEventListener('click', function () {


//     })
// }