document.getElementById('calculate-btn').addEventListener('click', function () {
    const houseRent = document.getElementById('house-input').value;
    const foodRent = document.getElementById('food-input').value;
    const othersRent = document.getElementById('others-input').value;
    const totalExpensePrice = parseFloat(houseRent) + parseFloat(foodRent) + parseFloat(othersRent)

    const totalPrice = document.getElementById('total-expense')
    totalPrice.innerText = totalExpensePrice;
    const income = document.getElementById('income')
    const incomeTotal = income.value;
    const blanceTotal = parseFloat(incomeTotal) - parseFloat(totalExpensePrice)
    const totalBlance = document.getElementById('total-blance')
    totalBlance.innerText = blanceTotal;



})