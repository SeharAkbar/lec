// alert('connected');
const calculate = () => {
    try{
    const firstNumber = parseFloat (document.querySelector('#firstNumber').value);
    const secondNumber = parseFloat (document.querySelector('#secondNumber').value);
    const operator = document.querySelector('#operator').value;
    console.log(operator);
    const letcalculate = {
        '+' :{result: firstNumber + secondNumber, color:'green'},
        '-' :{result: firstNumber - secondNumber, color:'blue'},
        '*' : {result: firstNumber * secondNumber, color:'yellow'},
        '/' : {result: firstNumber / secondNumber, color:'red'},
        '%' : {result: firstNumber % secondNumber, color:'orange'},
    }
    const getHtmlElementWhereYouWantShowResult=document.querySelector('.showResult');
    const {color , result} = letcalculate[operator];
    getHtmlElementWhereYouWantShowResult.innerHTML = result;
    getHtmlElementWhereYouWantShowResult.style.color = color;
    }catch (error){
        alert(error.message);
    }
}