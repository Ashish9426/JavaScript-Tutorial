/*
function PayableAmount() {
    
    var price = parseInt(document.getElementById("txt1").value);
    var quantity = parseInt(document.getElementById("txt2").value);
    var tax = parseInt(document.getElementById("txt3").value);
    

    var amount = price * quantity;
    var totalTax = (amount * tax) / 100;

    tdocument.getElementById("txt4").value = amount + totalTax;
    
    //msg = "Tax on amount is : "+ (totalTax) +" and payable ammount is : Rs. "+ (totalPrice);

    //document.getElementById("msg").innerHTML = msg;
}

//document.getElementById("btn").addEventListener("click", PayableAmount)

*/

function PayableAmount() {
    
    var ele = document.getElementsByClassName("ele");

    var price = parseInt(ele[0].value)
    var quantity = parseInt(ele[1].value)
    var tax = parseInt(ele[2].value)
    
    var amount = price * quantity;
    var totalTax = (amount * tax) / 100;

    ele[3].value = amount + totalTax;
    

}

document.getElementById("btn").addEventListener("click", PayableAmount);