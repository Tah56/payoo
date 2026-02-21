getInnerTxtValue("add-money-btn").addEventListener("click" ,function(){

    let selected = getInputValue("select");
    let bankAcc =getInputValue("bank");
    let amount = getInputValue("amount"); 
    let cash = getInnerTxtValue("cash")
    let pin = getInputValue("pin");

    let balance = Number(cash.innerText) + Number(amount);
    console.log(balance);

    if(selected === ""){
        alert("select a bank first")
        return
    }
    if(bankAcc.length !== 11){
     alert("Invalid Number")
     return
    }
    if(balance<0){
        alert("Invalid Amount")
        return
    }
     cash.innerText=balance;

     if(pin ==="1234"){
        alert("Add Money Success")
     }else{
        alert("Invalid Pin")
     }
    cash.i = balance
   console.log(`${selected},${bankAcc},${amount},${pin}`);


})