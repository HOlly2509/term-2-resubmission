let sandwhichOrder =[]


buildMySub = () => {

//    console.log("working??");
   let sandwhichTotal = 0;

   let sandwhichName = document.getElementById("sandwhichName").value;
   
   let bread = document.getElementById("breads").value

   if(bread === "Brown"){
       sandwhichTotal = sandwhichTotal + 30;
   } else if(bread === "white"){
       sandwhichTotal = sandwhichTotal + 20;
   } else if(bread === "gluten-free"){
       sandwhichTotal = sandwhichTotal + 40;
   }

    let sauceOption = document.getElementsByName("saucesRadio");
    let breadValue;
    for(let i = 0; i < sauceOption.length; i++){
    if(sauceOption[i].checked){
        breadValue = sauceOption[i].value
        sandwhichTotal = sandwhichTotal + +sauceOption[i].dataset.cost
        // console.log(sauceOption[i].dataset.cost);
    }
    }

    let toppingOptions = document.getElementsByName("Inside");
    let topArray = []
    for(let i = 0; i < toppingOptions.length; i++){
    if(toppingOptions[i].checked){
        topArray.push(toppingOptions[i].value)
        sandwhichTotal = sandwhichTotal + +toppingOptions[i].dataset.cost
    }
    }


    sandwhichOrder.push({
        sandwhichName: sandwhichName,
        bread: bread,
        subSauce: breadValue,
        toppings: topArray,
        sandwhichPrice: sandwhichTotal
    })

    console.log(sandwhichOrder)

    document.getElementById("realTimeCost").innerHTML = "R0.00"
    document.getElementById("sandwhichForm").reset();

}


realTimeCost = () => {

    realTimePrice = 0

    let bread = document.getElementById("breads").value;

    if(bread === "Brown"){
        realTimePrice = realTimePrice + 30;
    } else if(bread === "white"){
        realTimePrice = realTimePrice + 20;
    } else if(bread === "gluten-free"){
        realTimePrice = realTimePrice + 40;
    }

    let sauceOption = document.getElementsByName("saucesRadio");
    for(let i = 0; i < sauceOption.length; i++){
        if(sauceOption[i].checked){
            realTimePrice= realTimePrice + +sauceOption[i].dataset.cost
        }
    }

    let toppingOptions = document.getElementsByName("Inside");
    for(let i = 0; i < toppingOptions.length; i++){
        if(toppingOptions[i].checked){
            realTimePrice = realTimePrice + +toppingOptions[i].dataset.cost
        }
    }


    document.getElementById("realTimeCost").innerHTML = "R" + realTimePrice + ".00"

}

displayOrder = () => {
    let area = document.getElementById("ordersHere");
    let total = document.getElementById("realTimeOrder");

    area.innerHTML= "";

    let overallTotal = 0;

    for(let i = 0; i < sandwhichOrder.length; i++){
        let name = sandwhichOrder[i].sandwhichName;
        let bread = sandwhichOrder[i].bread;
        let toppings = sandwhichOrder[i].toppings;
        let sauce = sandwhichOrder[i].subSauce;
        let price = sandwhichOrder[i].sandwhichPrice;

        overallTotal += price;

        area.innerHTML += `
        
            <div class="card">
               <div class="card-body">
                 <h5 >${name}</h5>
                 <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                 <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                 <p class="card-text"><strong>Toppings:</strong> ${toppings}</p>
                 <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
               </div>
            </div>`
        
    total.innerHTML = "R" + overallTotal + ".00"


    }

}


checkout = () => {
    let data = JSON.stringify(sandwhichOrder); 
    localStorage.setItem('order', data);
    window.location.href = '../pages/page3.html';
}
