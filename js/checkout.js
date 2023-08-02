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

    totalArea.innerHTML = "R" + checkoutTotal + ".00";
};

enterPromo = () => {
    let value = document.getElementById('enterPromo').value;
    let newCost = document.getElementById('newTotal');
    let totalArea = document.getElementById('newTotal');

    if (!promotion) {
        if (value === "1234") {
            let updateTotal = checkoutTotal - checkoutTotal * 0.1; // Apply 10% discount
            totalArea.innerHTML = "R" + updateTotal.toFixed(2); // Use toFixed to display two decimal places
            promotion = true;
        } else {
            alert("Promo code is invalid");
            promotion = false;
        }
    } else {
        console.log("Promo code has already been added");
        alert("Promo code has already been applied");
    }
};
