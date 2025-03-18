let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

document.getElementById("purchase-btn").addEventListener("click", function () {
    let cash = parseFloat(document.getElementById("cash").value);
    let changeDue = cash - price;
    
    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    } 
    
    if (cash === price) {
        document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
        return;
    }

    let totalCID = cid.reduce((sum, [_, amount]) => sum + amount, 0);
    totalCID = parseFloat(totalCID.toFixed(2));

    if (totalCID < changeDue) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    let changeArray = [];
    let remainingChange = changeDue;

    for (let i = cid.length - 1; i >= 0; i--) {
        let [unit, amount] = cid[i];
        let unitValue = currencyUnit[unit];
        let amountToGive = 0;

        while (remainingChange >= unitValue && amount > 0) {
            remainingChange -= unitValue;
            amount -= unitValue;
            amountToGive += unitValue;
            remainingChange = parseFloat(remainingChange.toFixed(2));
        }

        if (amountToGive > 0) {
            changeArray.push([unit, parseFloat(amountToGive.toFixed(2))]);
        }
    }

    let totalChangeGiven = changeArray.reduce((sum, [_, amount]) => sum + amount, 0);
    totalChangeGiven = parseFloat(totalChangeGiven.toFixed(2));

    if (totalChangeGiven < changeDue) {
        document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (totalChangeGiven === totalCID) {
        document.getElementById("change-due").innerText = `Status: CLOSED ${changeArray.map(([unit, amount]) => `${unit}: $${amount}`).join(" ")}`;
        return;
    }

document.getElementById("change-due").innerText = `Status: OPEN ${changeArray.map(([unit, amount]) => `${unit}: $${amount}`).join(" ")}`;
});