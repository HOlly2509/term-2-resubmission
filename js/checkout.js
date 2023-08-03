let checkoutTotal = 0;
let promotion = false;
let sandwhichOrder =[]



displayCheckout = () => {
    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('buildMySub');
    let totalArea = document.getElementById('realTimeOrder');

    for (let i = 0; i < data.length; i++) {
        let name = data[i].sandwhichName;
        let bread = data[i].bread;
        let toppings = data[i].toppings;
        let sauce = data[i].subSauce;
        let price = data[i].sandwhichPrice;

        checkoutTotal += price;

        items.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h5>${name}</h5>
                    <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                    <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                    <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                    <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
                </div>
            </div>
        `;
    }

    totalArea.innerHTML = "R" + checkoutTotal.toFixed(2);

    localStorage.setItem('realTimeOrder', checkoutTotal.toFixed(2));
};



function applyDiscount() {
    const promoCodeInput = document.getElementById('promoCode');
    const realTimeOrderElement = document.getElementById('realTimeOrder');
    const realTimeOrder = parseFloat(localStorage.getItem('realTimeOrder'));
    const promoCode = promoCodeInput.value;

    if (promoCode === 'DISCOUNT10') {
        const discount = realTimeOrder * 0.1;
        const discountedPrice = realTimeOrder - discount;

        realTimeOrderElement.textContent = discountedPrice.toFixed(2);
        localStorage.setItem('realTimeOrder', discountedPrice.toFixed(2)); // Save the discounted price back to localStorage
        alert('Promo code applied successfully! You got 10% off.');
    } else {
        alert('Invalid promo code. Please try again.');
    }
}




