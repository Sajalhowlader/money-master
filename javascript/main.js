// Income input id
const income = document.getElementById('income')

// house rent input id
const houseRent = document.getElementById('house-input');

// food rent input id
const foodRent = document.getElementById('food-input')

// others rent input id
const othersRent = document.getElementById('others-input');

// total expense id
const expense = document.getElementById('total-expense')

// total blance id
const blance = document.getElementById('total-blance')

// save money input field
const saveInput = document.getElementById('save-input')

// saveing amount inner text
const saveingAmount = document.getElementById('saveing-amount')

// remaining blance after total cost and saveing
const remaining = document.getElementById('remaining-blance')


document.getElementById('calculate-btn').addEventListener('click', function () {
    //  sum in total cost house rent foodrent and others
    const totalExpense = parseFloat(houseRent.value) + parseFloat(foodRent.value) + parseFloat(othersRent.value);
    // if expense is bigger than income it will give a alert
    if (income.value < totalExpense) {
        document.getElementById('expense').style.display = "block"
        document.getElementById('denger').style.display = "block"

    } else if (income.value >= 0 && houseRent.value >= 0 && foodRent.value >= 0 && othersRent.value >= 0) {

        expense.innerText = totalExpense
        // total blance >> income - expense
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

    if (totalBlance > saveInput.value) {

        const saveMoney = (income.value * saveInput.value) / 100;
        saveingAmount.innerText = saveMoney;

        const remainingBlance = parseFloat(blance.innerText) - parseFloat(saveMoney)

        remaining.innerText = remainingBlance

    } else {
        document.getElementById('no-amount').style.display = "block"
    }


})

// function clickBtn(clickId) {
//     document.getElementById().addEventListener('click', function () {


//     })
// }