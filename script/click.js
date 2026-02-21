function showAlert (id) {
    getInnerTxtValue("add-mony").classList.add("hidden");
    getInnerTxtValue("cash-out").classList.add("hidden");
    getInnerTxtValue("transfer-money").classList.add("hidden")
    getInnerTxtValue("get-bonus").classList.add("hidden")
    getInnerTxtValue("paybill").classList.add("hidden")
    getInnerTxtValue(id).classList.remove("hidden")

    
}


