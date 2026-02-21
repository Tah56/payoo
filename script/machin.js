let getInputValue =  (id)=>{
    const element =document.getElementById(id);
    const value = element.value;
    return value;
}

let getInnerTxtValue = (id)=>{
    const element = document.getElementById(id);
    return element;

}

let getText = (id)=>{
    return getInnerTxtValue(id).innerText;
}