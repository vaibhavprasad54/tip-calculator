var selectedTip = 0;

document.getElementById("totalBillAmount").innerHTML = '₹ 0.00';
document.getElementById("tipPerPerson").innerHTML    = '₹ 0.00';

function setTipPercentage(tipPercentage){
    selectedTip = tipPercentage;
}

function calculateTotal(){
    var billAmount = parseFloat(document.getElementById("bill").value);
    var tipPercentage = selectedTip;
    var customTip = parseFloat(document.getElementById("custom").value);
    var people = parseFloat(document.getElementById("people").value);

    var billAmountInput = document.getElementById("bill");

    if(isNaN(billAmount) || billAmount <= 0){
        document.getElementById('billError').innerText = 'Please enter a valid bill amount!'
        billAmountInput.classList.add("border-2");
        billAmountInput.classList.add("border-red-600");
        return;
    } else{
        billAmountInput.classList.remove("border-2");
        billAmountInput.classList.remove("border-red-600");
        document.getElementById('billError').innerText = ''
    }

    if(isNaN(customTip) && tipPercentage === 0){
        document.getElementById('tipError').innerText = 'Please select a valid tip!'
        return;
    } else {
        document.getElementById('tipError').innerText = ''
    }

    if(customTip < 0){
        document.getElementById('tipError').innerText = 'Tip cannot be negative!'
        return;
    } else {
        document.getElementById('tipError').innerText = ''
    }

    if (!isNaN(customTip) && customTip >= 0) {
        tipPercentage = customTip;
      }

    if(people <= 0 || people === ''){
        document.getElementById('peopleError').innerText = 'Please enter valid count!'
        return;
    } else {
        document.getElementById('peopleError').innerText = ''
    }

    var tipAmount = (billAmount * tipPercentage) / 100;
    var tipPerPerson = tipAmount / people;
    var totalBill = (billAmount + tipAmount) / people;

    document.getElementById("totalBillAmount").innerHTML = "₹ " + totalBill.toFixed(2);
    document.getElementById("tipPerPerson").innerHTML    = "₹ " + tipPerPerson.toFixed(2);

    document.getElementById("billError").innerText = "";
    document.getElementById("tipError").innerText = "";
    document.getElementById("peopleError").innerText = "";
}


function reset(){
    document.getElementById("bill").value = '';
    document.getElementById("custom").value = '';
    document.getElementById("people").value = '';
    selectedTip = 0;
    document.getElementById("totalBillAmount").innerText = "";
    document.getElementById("tipPerPerson").innerText = "";
    document.getElementById("errorMessage").innerText = "";

    document.getElementById("billError").innerText = "";
    document.getElementById("tipError").innerText = "";
    document.getElementById("peopleError").innerText = "";

    // billAmountInput.style.border = 'none';
}