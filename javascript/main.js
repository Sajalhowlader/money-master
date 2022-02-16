document.getElementById('calculate-btn').addEventListener('click', function () {
    const houseRent = document.getElementById('house-input').value;
    const foodRent = document.getElementById('food-input').value;
    const othersRent = document.getElementById('others-input').value;
    const totalExpensePrice = parseFloat(houseRent) + parseFloat(foodRent) + parseFloat(othersRent)
    console.log(totalExpensePrice)
    const totalPrice = document.getElementById('total-expense')


})