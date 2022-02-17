document.getElementById('calculate-btn').addEventListener('click', function () {
    const houseRent = document.getElementById('house-input').value;
    const foodRent = document.getElementById('food-input').value;
    const othersRent = document.getElementById('others-input').value;
    // intotal expense price house food and others
    const totalExpensePrice = parseFloat(houseRent) + parseFloat(foodRent) + parseFloat(othersRent)

    const totalPrice = document.getElementById('total-expense')
    totalPrice.innerText = totalExpensePrice;
    const income = document.getElementById('income')

    const incomeTotal = income.value;
    // blance total net income minus total expense
    const blanceTotal = parseFloat(incomeTotal) - parseFloat(totalExpensePrice)

    const totalBlance = document.getElementById('total-blance')
    totalBlance.innerText = blanceTotal;



})

document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input').value
    const income = document.getElementById('income').value
    const saveMoney = (income * saveInput) / 100
    const saveingAmount = document.getElementById('saveing-amount')
    saveingAmount.innerText = saveMoney;

    const totalBlance = document.getElementById('total-blance').innerText
    const remaingMoney = totalBlance - saveMoney;
    const setRemainingMoney = document.getElementById('remaining-blance')
    setRemainingMoney.innerText = remaingMoney


})