function generatePin(){
    const pin = Math.round(Math.random() * 10000) ;
    return pin ;
}
function pin(){
    const code = generatePin() + '' ;
    if(code.length == 4){
        return code ;
    }
    else{
        return pin() ;
    }
}

document.getElementById('generate-pin-btn').addEventListener('click',function(){
    const generatedPin = pin();
    const displayPinField = document.getElementById('display-pin') ;
    displayPinField.value = generatedPin ;
})

document.getElementById('calculator').addEventListener('click' , function(event){
    const number = event.target.innerText ;
    const inputNumberField = document.getElementById('input-number') ;
    const previousNumber = inputNumberField.value ;
    if(isNaN(number)){
        if(number == 'C'){
            inputNumberField.value = '';
        }
        else if(number == '<'){
            const digits = previousNumber.split('');
            digits.pop() ;
            const remainingDigits = digits.join('') ;
            inputNumberField.value = remainingDigits ;
        }
    }
    else{
        const newNumber = previousNumber + number ;
        inputNumberField.value = newNumber ;
    }
})