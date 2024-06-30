var exchangeForm = document.querySelector(".exchangeForm");

exchangeForm.onsubmit = function (e){
    e.preventDefault();

    var curr = e.target.elements[1].value;
    var convertedAmount;
    var amount = e.target.elements[0].value;
    
    

    if (curr === 'dollar') {
        convertedAmount = amount * 3.5;
    } else if (curr === 'dinar') {
        convertedAmount = amount * 5.0; 
    } else if (curr === 'nis') {
        convertedAmount = amount; 
    }

   console.log(convertedAmount);
   
}