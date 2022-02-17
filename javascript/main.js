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

function totalIncome(first, second) {
    const restult = parseFloat(first) - parseFloat(second)
    return restult;
}
function totalCost(firstone, secondone, thirdone) {
    secondresult = parseFloat(firstone) + parseFloat(secondone) + parseFloat(thirdone)
    return secondresult;
}




document.getElementById('calculate-btn').addEventListener('click', function () {
    //  sum in total cost house rent foodrent and others
    // const totalExpense = parseFloat(houseRent.value) + parseFloat(foodRent.value) + parseFloat(othersRent.value);
    const totalExpense = totalCost(houseRent.value, foodRent.value, othersRent.value)


    // if expense is bigger than income it will give a alert
    if (income.value < totalExpense) {
        document.getElementById('expense').style.display = "block"
        document.getElementById('denger').style.display = "block"

    }
    else if (income.value >= 0 && houseRent.value >= 0 && foodRent.value >= 0 && othersRent.value >= 0) {

        expense.innerText = totalExpense
        // total blance >> income - expense
        // const totalBlance = parseFloat(income.value) - parseFloat(totalExpense)
        const totalBlance = totalIncome(income.value, totalExpense)


        blance.innerText = totalBlance

    } else {
        document.getElementById('denger').style.display = "block"
    }


})

document.getElementById('save-btn').addEventListener('click', function () {

    // const totalExpense = parseFloat(houseRent.value) + parseFloat(foodRent.value) + parseFloat(othersRent.value);
    const totalExpense = totalCost(houseRent.value, foodRent.value, othersRent.value)

    // const totalBlance = parseFloat(income.value) - parseFloat(totalExpense)
    const totalBlance = totalIncome(income.value, totalExpense)


    if (totalBlance > saveingAmount.innerText) {

        const saveMoney = (income.value * saveInput.value) / 100;

        saveingAmount.innerText = saveMoney;

        const remainingBlance = parseFloat(blance.innerText) - parseFloat(saveMoney)

        remaining.innerText = remainingBlance

    } else {
        document.getElementById('no-amount').style.display = "block"
    }


})
// total expense
// total blance

